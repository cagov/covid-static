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
  await page.goto('https://covid19.ca.gov/chart-renderer/', {
    waitUntil: 'networkidle2',
  });  

  console.log('page loaded');

  // write a new date file to make sure script runs even if there is no svg change  
  writeFile('./img/generated/sparklines/date-ran.txt',new Date().toString());

  const sparklineVax = await page.$eval("cagov-chart-dashboard-sparkline[data-chart-config-key='vaccines'] svg", el => el.outerHTML);
  writeFile('./img/generated/sparklines/sparkline-vaccines.svg',sparklineVax);
  console.log('got vaccines');

  //const sparklineCases = await page.$eval("cagov-chart-dashboard-sparkline[data-chart-config-key='cases'] svg", el => el.outerHTML);
  //writeFile('./img/generated/sparklines/sparkline-cases.svg',sparklineCases);
  //console.log('got cases');

  const sparklineDeaths = await page.$eval("cagov-chart-dashboard-sparkline[data-chart-config-key='deaths'] svg", el => el.outerHTML);
  writeFile('./img/generated/sparklines/sparkline-deaths.svg',sparklineDeaths);
  console.log('got deaths');

  const sparklineTests = await page.$eval("cagov-chart-dashboard-sparkline[data-chart-config-key='tests'] svg", el => el.outerHTML);
  writeFile('./img/generated/sparklines/sparkline-tests.svg',sparklineTests);
  console.log('got tests');

  // const postvaxCases = await page.$eval("cagov-chart-dashboard-postvax-chart-prerender[data-chart-config-key='cases'] svg", el => el.outerHTML);
  // writeFile('./img/generated/postvax/postvax-cases.svg',postvaxCases);
  // console.log('got vax cases');

  // const postvaxDeaths = await page.$eval("cagov-chart-dashboard-postvax-chart-prerender[data-chart-config-key='deaths'] svg", el => el.outerHTML);
  // writeFile('./img/generated/postvax/postvax-deaths.svg',postvaxDeaths);
  // console.log('got vax deaths');

  // const postvaxHospitalizations = await page.$eval("cagov-chart-dashboard-postvax-chart-prerender[data-chart-config-key='hospitalizations'] svg", el => el.outerHTML);
  // writeFile('./img/generated/postvax/postvax-hospitalizations.svg',postvaxHospitalizations);
  // console.log('got vax hospitalizations');


  await browser.close();
})();
