# Data sources for covid19.ca.gov

This folder includes the majority of our static JSON data files for [https://covid19.ca.gov](https://covid19.ca.gov)

* These files are mostly generated from Snowflake datasets, using our [Cron](https://github.com/cagov/Cron) suite of data tools.
* Some files have a review process that posts notifications to Slack to data analysts who check data quality.
* Some files are being migrated to our permanent data structure & may migrate to another repository, but retain a similar structure.
* We are generating a data package for the entire covid19 project, with `meta` data for all of these files.
* This repository is published to our static file server `https://files.covid19.ca.gov`.

## Assets

* `img` - static images
* `pdf` - pdf files, mostly state industry guidance. 
* `data` - static JSON data files
* `src` - utility scripts for sitemap and managing image files.

## Migrations
* **PDFs** - Due to limitations in hosting, we maintain additional copies of files here. We have a project underway to keep track of those assets and will migrate & add redirects when the new system is ready. Because of this, you will see additional files from through this history of the website project.
* **Static JSON Files** - We are maintaining legacy files from earlier in our project before we started adding additional charts and data.

## Data naming convention
* All lowercase 
* Use dashes instead of underscores whereever possible for filenames (and corresponding chart web components.)
* **File names correspond to chart names.** — Our content team has developed and tested plain-language that helps Californians understand our dashboards and charts. We maintain this in our data structure.
* **Dashboard=chart** — State data teams tend to refer to individual charts as a "dashboard". This is used throughout our web pages, so we are using that term here to be consistent. The unit of a dataset is generally one dataset per chart.
* **Pattern** — `data/{type}/{chart}/{version}/{coverage area}`

## Upcoming file structure

| File path | Hosted file |
|`data/dashboard/hospitalized-patients` | |
|`data/dashboard/icu-beds` | |
|`data/dashboard/icu-patients` | |
|`data/dashboard/confirmed-cases-episode-date` | |
|`data/dashboard/confirmed-cases-reported-date` | |
|`data/dashboard/confirmed-deaths-death-date` | |
|`data/dashboard/confirmed-deaths-reported-date` | |
|`data/dashboard/positivity-rate` | |
|`data/dashboard/total-tests-reported-date` | |
|`data/dashboard/total-tests-testing-date` | |
|`data/dashboard/infections-by-group` | |

## Migrating data structures

| Current path | Future file path | Creation date | Removal date | Description |
| --- | --- | --- | --- | --- | 
|`data/dashboard/state-dashboard/*` | `data/dashboard/*` | March 30, 2021 | Unscheduled | Move all charts to single dashboard folder, where the child folders are datasets for charts. |
|`data/chart-sandbox/vaccines_by_race_ethnicity_and_age_california.json` | `data/dashboard/sandbox/v1/vaccines-by-race-ethnicity-and-age-california.json` | Unscheduled | Unscheduled | @TODO confirm if this is used by our staging charts, and if so move to dashboard folder. |
|`data/infections-by-group/infections-by-group-california.json` | `data/dashboard/infections-by-group/v1/california.json` | Unscheduled | Unscheduled | |
|`data/reviewed/equity-dash/*` | `data/equity-dash/v2/reviewed/*` | Unscheduled | Unscheduled | Not changing file structure |
|`data/to-review/equity-dash/*` | `data/equity-dash/v2/reviewed/*` | Unscheduled | Unscheduled |
|`data/vaccine-equity/age/vaccines_by_age_{county\|state}.json` | `data/dashboard/vaccine-equity/v2/age/{county\|state}.json` | Unscheduled | Unscheduled | |
|`data/vaccine-equity/gender/vaccines_by_gender_{county\|state}.json` | `data/dashboard/vaccine-equity/v2/gender/{county\|state}.json` | Unscheduled | Unscheduled | |
|`data/vaccine-equity/race-ethnicity/vaccines_by_race_ethnicity_{county\|state}.json` | `data/dashboard/vaccine-equity/race-ethnicity/v2/{county\|state}.json`| Unscheduled | Unscheduled | |
|`data/vaccine-hpi/vaccine-hpi.json` |  | Unscheduled | Unscheduled | Will remove v1 after scheduled announcement. |
|`data/vaccine-hpi/v2/vaccine-hpi.json` | `data/dashboard/vaccine-hpi/v2/california.json` | Unscheduled | Unscheduled | |
|`data/daily-stats-v2.json` | `data/stats/v2/covid19-daily-stats.json` | Unscheduled | Unscheduled | @TODO Confirm |

### Meta data & Data packages

* Currently live in this branch (@TODO ADD BRANCH), we will connect this to Cron & make available in the `meta` tag once we are ready to publish our meta data. We used an Airtable database to store information about our assets and also to keep track of what information we need from our upstream providers. 

## Data versioning

* We periodicially need to migrate our static file API data to new structures to accommodate our rapid evolution in code. We introduced the `meta` attribute to allow us to leave messages of upcoming data migrations. 

## API Migration plan

Some of the files indicated are slated to migrate to new locations. Since these are not officially published data assets, you are using these files at your own risk. However, we want to ensure that your usage is reliable to the best of our ability, so we have created this migration map that you can use to plan your own changes.

1. Announce the change in tracker, email notifications to known subscribers, and in the `meta` element.
2. Describe the change over.
3. Create the change over.
4. Hold the data in new and old locations for 6 weeks.
5. At 6 weeks, disable the data source.

* We do not currently support redirects, so we will not automatically redirect you to the new API version.
* You can get live updates by checking here, with our [API Tracker](#@TODO)
* Using our data & want to be notified of an update? Please share your information using [this form](#@TODO) & we will notify you when the API is updated.
