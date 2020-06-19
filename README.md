# covid-static

This handles the binary files for the covid19.ca.gov site. Files placed in this repository will be deployed to Azure blob storage backed CDN with a low cache timer on files with .pdf extension. This will allow content authors to get new or modified pdfs to production quickly.

The Azure edge endpoint is: https://covid19pdfs.azureedge.net/ so file paths in this directory are browseable there. 

There is a redirect in place on the covid19.ca.gov server so that /pdf/ files will get retrieved from the new CDN

Todo:

- setup friendlier domain 