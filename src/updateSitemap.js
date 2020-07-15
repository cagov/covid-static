const fs = require('fs');
const path = require('path');

const sitemapOutputPath = 'root/sitemap.xml';
const sitemapPaths = ['pdf/','img/'];

// the root of your website - the protocol and the domain name with a trailing slash
const root_path = 'https://files.covid19.ca.gov/';

const getAllFiles = (dirPath, arrayOfFiles) => {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || []

  files.forEach(file => {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file))
    }
  })

  return arrayOfFiles
}

// XML sitemap generation starts here
//var priority = 0.5;
//var freq = 'monthly';
var xml = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

for (targetpath of sitemapPaths) {
  for (file of getAllFiles(targetpath)) {
    xml += '<url>';
    xml += '<loc>'+ root_path + file + '</loc>';
    //xml += '<changefreq>'+ freq +'</changefreq>';
    //xml += '<priority>'+ priority +'</priority>';
    xml += '</url>\n';
  }
}
xml += '</urlset>\n';

fs.writeFile(sitemapOutputPath, xml, err => {if (err) console.error(err); else console.log('Sitemap created.');});
