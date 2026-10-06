import { copyFileSync } from 'node:fs';
// Preserve the existing GitHub Pages domain in every production build.
copyFileSync('CNAME', 'dist/CNAME');
