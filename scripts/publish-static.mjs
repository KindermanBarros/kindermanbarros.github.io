import { readFileSync, existsSync, cpSync, rmSync, writeFileSync } from 'node:fs';
import assert from 'node:assert/strict';
const html=readFileSync('dist/index.html','utf8');
assert.match(html,/<link[^>]+stylesheet[^>]+\/assets\//,'Production HTML must include compiled CSS');
assert.doesNotMatch(html,/src=["'][^"']*src\/main\.js/,'Development entry must not be published');
for(const match of html.matchAll(/(?:src|href)=["'](\/assets\/[^"']+)["']/g)){
  assert.ok(existsSync('dist'+match[1]),'Missing production asset: '+match[1]);
}
assert.ok(existsSync('dist/assets/kinderman-resume.pdf'),'Missing resume PDF');
assert.ok(!existsSync('dist/CNAME'),'Retired custom domain must not be deployed');
// The branch-based publisher serves the same output as the Actions publisher.
rmSync('assets',{recursive:true,force:true});
cpSync('dist/assets','assets',{recursive:true});
writeFileSync('index.html',html);
writeFileSync('.nojekyll','');
console.log('Verified production CSS, JavaScript and resume; static root synchronized.');
