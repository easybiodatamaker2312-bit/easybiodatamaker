import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const authorBoxPath = path.join(root, 'src/components/seo/AuthorBox.tsx');
const layoutPath = path.join(root, 'src/app/layout.tsx');
const aboutPath = path.join(root, 'src/app/about/page.tsx');
const landingPath = path.join(root, 'src/components/seo/SearchIntentLandingPage.tsx');
const authorBox = fs.readFileSync(authorBoxPath, 'utf8');
const layout = fs.readFileSync(layoutPath, 'utf8');
const about = fs.readFileSync(aboutPath, 'utf8');
const landing = fs.readFileSync(landingPath, 'utf8');
const blogDir = path.join(root, 'src/app/blog');
const blogPosts = fs.readdirSync(blogDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => path.join(blogDir, entry.name, 'page.tsx'))
  .filter((file) => fs.existsSync(file));
const missingAuthorBox = blogPosts.filter((file) => {
  const source = fs.readFileSync(file, 'utf8');
  // Articles may render AuthorBox directly or use the shared article component that includes it.
  return !source.includes("from '@/components/seo/AuthorBox'")
    && !source.includes("from '@/components/seo/AnswerGuideArticle'");
});
const checks = [
  ['AuthorBox includes author, review date, about link and owner-input TODO', /Karan Shah/.test(authorBox) && /Reviewed on/.test(authorBox) && /href="\/about"/.test(authorBox) && /TODO\(owner\)/.test(authorBox)],
  ['All blog article routes include AuthorBox', missingAuthorBox.length === 0],
  ['Sensitive landing pages conditionally include AuthorBox', landing.includes("'/divorcee-marriage-biodata-format'") && landing.includes("'/widow-widower-marriage-biodata'") && landing.includes('<AuthorBox reviewedOn=')],
  ['Organization sameAs uses social environment variables and omits empty values', layout.includes('NEXT_PUBLIC_SOCIAL_LINKEDIN') && layout.includes('NEXT_PUBLIC_SOCIAL_INSTAGRAM') && layout.includes('NEXT_PUBLIC_SOCIAL_YOUTUBE') && layout.includes('organizationSocialProfiles.length ? { sameAs: organizationSocialProfiles } : {}')],
  ['About page documents authorship, review, owner input and 22 templates', about.includes('Karan Shah') && about.includes('Credentials and author photo') && about.includes('22 registered design templates')],
];
let failed = false;
for (const [label, pass] of checks) {
  console.log(`${pass ? 'PASS' : 'FAIL'} ${label}`);
  if (!pass) failed = true;
}
if (failed) process.exit(1);
console.log(`Phase 2 E-E-A-T verification passed (${checks.length} checks; ${blogPosts.length} blog routes checked).`);
