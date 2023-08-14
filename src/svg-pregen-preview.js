const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

function writeFile(file, filecontent) {
  fs.writeFileSync(file,filecontent,'utf8');
  fs.mkdirSync(path.dirname('path/to/artifact/'+file), { recursive: true }); // put the files in the path to artifact too so this git action can deploy them because standard push watch is not being triggered
  fs.createReadStream(file).pipe(fs.createWriteStream('path/to/artifact/'+file));
}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://staging.covid19.ca.gov/chart-renderer/', {
    waitUntil: 'networkidle2',
  });  

  console.log('page loaded');

  // write a new date file to make sure script runs even if there is no svg change  
  writeFile('./img/generated/sparklines_staging/date-ran.txt',new Date().toString());

  const sparklineHosp = await page.$eval("cagov-chart-dashboard-sparkline[data-chart-config-key='hospitalizations'] svg", el => el.outerHTML);
  writeFile('./img/generated/sparklines_staging/sparkline-hospitalizations.svg',sparklineHosp);
  console.log('got hospitalizations');

  const sparklineHospAdmit = await page.$eval("cagov-chart-dashboard-sparkline[data-chart-config-key='admissions'] svg", el => el.outerHTML);
  writeFile('./img/generated/sparklines_staging/sparkline-admissions.svg',sparklineHospAdmit);
  console.log('got admissions');

  const sparklineDeaths = await page.$eval("cagov-chart-dashboard-sparkline[data-chart-config-key='deaths'] svg", el => el.outerHTML);
  writeFile('./img/generated/sparklines_staging/sparkline-deaths.svg',sparklineDeaths);
  console.log('got deaths');

  const sparklineTests = await page.$eval("cagov-chart-dashboard-sparkline[data-chart-config-key='tests'] svg", el => el.outerHTML);
  writeFile('./img/generated/sparklines_staging/sparkline-tests.svg',sparklineTests);
  console.log('got tests');

  await browser.close();
})();
