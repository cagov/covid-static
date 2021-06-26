# Industry Guidance Git History
This is a simple bash script for manually pulling Industry Guidance (IG) specific PDF git history & manual CSV imports to our PDF History database.
`/src/industry-guidance-git-history.sh`

## Building Git History
Bash script to run on a local machine, reads the history of this repository and generates a CSV file with metadata and history of the file changes for particular PDFs.

## Import files
All the CSV files we used to build the IG pdf history Airtable record are in the `git-history` folder.

### Method of updating Git History
* The CSV's generated are then pulled into an [Airtable](https://airtable.com) database, reviewed for accuracy and corrected if necessary, and then flagged as "current" file versions. This Airtable database is synced out to the Labor Agency's Employer Portal as a reference data source to verify the accuracy of guidance delivered through their app. 
* Exported CSV imported into [Git History](https://airtable.com/tblCoKoQopqxZQxrE/viwl6QibwGxuSw5CP?blocks=hide) table: (Chach, Liz, Xian have access) using CSV import app. "Git History" table mirrors this CSV file structure.
* `git_download_url` is the key that links records since it is the unique key for a PDF file as hosted on Github.
* Automatic copying into "Git History, PDF Metadata and active files" table was disabled due to over-duplication behaviors with Airtable. 

## Adding extra metadata to Airtable
In order to make the Airtable view useful for filtering, we add some additional information in field types that allow Airtable's filtering tools to work and allow sorting by date and various tags. The plain text data from the database is not enough to activate these features.

Since we are using Airtable to review and complete the extracted data set, to add new items to the final record:
1. Go to [Git History, PDF Metadata and active files Airtable](https://airtable.com/tblHOaCxlRfHlxAnT/viw2JwS5NGlnAg3Tu?blocks=hide )
2. Go to View: "Automation: Synced Fields"
3. *Link the extracted data table to the full history table.* Paste newly imported github *download* urls into `id` and `KEY: Git History` columns. This will link Git History values to the main table. Note: the bash script generates the full url to both the Github download link and the Github page view. This allows viewing of historic files.
4. Paste new `git_industry_category_key` values into `KEY: industry category key`. This will link the updated Industry categories statuses, if they exist, to the Industry Categories table in our "COVID-19 Reopening Roadmap Activity Data v2.0.1" set. https://airtable.com/tblmZZ089dNGLilxr/viw8Hio5JNAwdMgbR?blocks=hide. This is a managed, controlled vocabulary of the industry categories that emerged over the course of the pandemic.
5. Correct any incorrectly extracted categories. Language in particular has a lot of variations in implementation of language codes. We used a controlled vocabulary for hosting the pdf files in a consistent manner for all people needing to reference State guidance files.
6. Double-check & then paste the values from `industry-category-key` field. This is a convenience field for filtering by industry category, and to see the history of an industry category.
7. Double-check & then paste the values from `git_pdf_langage` to `pdf_langage`. This is a convenience field for filtering by language.
8. Double-check & then paste the values from `git_pdf_template` to `pdf_template`. This is a convenience field for filtering by template type.
9. Double-check & then paste the values from `git_date_updated` to `git_date_updated_local_date`. This is a convenience field for filtering records by date.
10. Double-check & then paste the values from `git_change_type` to `git_change_type_local`. This is a convenience field for filtering by type of change.
11. Double-check & then paste the values from `pdf_langage` to `language`. This is a reference field that looks up the language code.

### Update active files

* "Grouped by industry category key (all fields)"

This table has a checkbox "Is same as public version in API"
* This is where we point at the correct, most current, file version. 
* This was necessary because, due to limitations in redirect handling, we hosted and maintained prior versions of PDF files.
* The file proliferation was confusing for everyone.
* We were able to provide a record to the Labor Agency by going through a process using the "Grouping" feature of Airtable to look at all files in a category, and choose the correct latest version. ODI engineering (Chach Sikes) worked with the subject matter expert, Liz Nobriga, to disentangle the file history that accumulated while working quickly throughout the pandemic.
* We also have variations of each file in multiple languages. 


To correct the file histories, we manually review the new files, and check and uncheck the boxes as necessary. 
Usually the latest change will be at the top, and should replace an older version.
These changes automatically propagate to tables that other agencies are subscribed to (after 5 minutes), and communicates file name changes and other metadata.
We also set up Slack channels to communicate some of our shifts and changes.

In some cases, files were moved from one agency to another.
Our Labor Agency API also links to any files not hosted by ODI.

We created an API version of all of this, but due to changes and shifts, we did not wind up publishing it.


## About PDF Metadata
* We have another script we can run on the full history to generate another CSV file to import and link so that the full corpus of all Industry Guidance is converted to plain text for English, with extracted headers.
