# Firebase setup: lifetime + daily live download statistics

The homepage reads public aggregate counts from Firebase Realtime Database. Download generation remains entirely in the visitor's browser; no custom application server is used.

## 1. Configure Firebase

1. Open https://console.firebase.google.com/ and create/select a project.
2. Open **Build → Realtime Database** and create a database.
3. Copy its database URL (for example `https://YOUR-PROJECT-default-rtdb.firebaseio.com`).
4. Set this environment variable locally and in your hosting provider (Vercel → Project → Settings → Environment Variables):

```env
NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://YOUR-DATABASE-URL
```

Do not add `.json` to the URL. Redeploy after setting it because Next.js embeds `NEXT_PUBLIC_` values at build time.

## 2. Publish these Realtime Database rules

These rules allow public reads of aggregate statistics and only allow a counter to increase by exactly one. Daily buckets use the Asia/Kolkata calendar date and are stored separately from lifetime totals.

```json
{
  "rules": {
    "downloadStats": {
      ".read": true,
      "$format": {
        ".write": "($format === 'pdf' || $format === 'png' || $format === 'jpg' || $format === 'word') && newData.isNumber() && newData.val() === (data.exists() ? data.val() + 1 : 1)",
        ".validate": "newData.isNumber() && newData.val() >= 1 && newData.val() % 1 === 0"
      },
      "daily": {
        "$date": {
          "$format": {
            ".write": "($format === 'pdf' || $format === 'png' || $format === 'jpg' || $format === 'word') && newData.isNumber() && newData.val() === (data.exists() ? data.val() + 1 : 1)",
            ".validate": "newData.isNumber() && newData.val() >= 1 && newData.val() % 1 === 0"
          }
        }
      }
    }
  }
}
```

**Abuse limitation:** Because this is a frontend-only public counter, determined bots can still call the database repeatedly and increment it. The rules prevent arbitrary resets/jumps but do not prove that a real person downloaded a file. Enable Firebase App Check (reCAPTCHA Enterprise or the supported web provider) for additional protection. For strict fraud-resistant counting, a trusted server is required.

## 3. What is recorded

- PDF / PNG / JPG / Word lifetime totals.
- PDF / PNG / JPG / Word totals for the current India date (Asia/Kolkata, resets at midnight IST).
- A download is recorded only after the existing browser export/generation and download function completes.
- Share / WhatsApp actions are not counted as downloads.

## 4. Verify

1. Open `/create`, fill a sample biodata and download a format.
2. Check Realtime Database at `downloadStats/{format}` and `downloadStats/daily/YYYY-MM-DD/{format}`.
3. Open the homepage in another browser/device. Counts refresh every 10 seconds.

Expected structure:

```json
{
  "downloadStats": {
    "pdf": 0,
    "png": 0,
    "jpg": 0,
    "word": 0,
    "daily": {
      "2026-11-03": { "pdf": 0, "png": 0, "jpg": 0, "word": 0 }
    }
  }
}
```
