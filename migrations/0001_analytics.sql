-- Aggregate-only analytics. No biodata, names, email addresses, phone numbers or photos are stored.
CREATE TABLE IF NOT EXISTS download_totals (
  format TEXT PRIMARY KEY CHECK (format IN ('pdf', 'png', 'jpg', 'word')),
  lifetime INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS download_daily (
  day TEXT NOT NULL,
  format TEXT NOT NULL CHECK (format IN ('pdf', 'png', 'jpg', 'word')),
  total INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (day, format)
);

CREATE TABLE IF NOT EXISTS visitor_daily (
  day TEXT PRIMARY KEY,
  page_views INTEGER NOT NULL DEFAULT 0,
  unique_visitors INTEGER NOT NULL DEFAULT 0
);

-- Only a one-way daily hash is stored. The browser's random ID is never sent to D1 as-is.
CREATE TABLE IF NOT EXISTS daily_unique_visitors (
  day TEXT NOT NULL,
  visitor_hash TEXT NOT NULL,
  PRIMARY KEY (day, visitor_hash)
);
