# covid-static

This handles the binary files for the covid19.ca.gov site. Files placed in this repository will be deployed to Azure blob storage backed CDN with a low cache timer on files with .pdf extension. This will allow content authors to get new or modified pdfs to production quickly.

We pointed a friendly subdomain at this new CDN: https://files.covid19.ca.gov/ so file paths in this directory are browseable there. 

There is a redirect in place on the covid19.ca.gov server so that /pdf/ requests will get redirected to the new domain files.covid19.ca.gov from the new CDN. We should still update urls to use the new domain directly when we encounter them.

## Uploading files

### Creating subdirectories

- Entire folders can be dragged into the github browser based file manager and github will create the files inside the subdirectory sent

<img src="readme/drag-dirs.png">

- You can type directory names into the filename field and when you type a / at the end it will add them to the path and give you another field to name the file itself

<img src="readme/typing-directories-1.png">
<img src="readme/typing-directories-2.png">