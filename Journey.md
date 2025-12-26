# This document is documenting my journey in setting up this app

## Day 1: Environment Setup

- setup a new `next.js` app using -> `npx create-next-app@latest`
- run the `npm run dev` to run the app on [local](http://localhost:3000)
- added new routes (blog, experience, projects)

## Day 2: Routing Setup

- Added routes and a Navbar
- Simply create sub folders within the `app` folder
- Added basic `page.tsx` files for each route
- Added routes using `Link` in the Navbar `.component`

## Day 3: Enhanced the Professional Experience Page

- Added a file `resume.ts` which serves as a datastore for the page
- Enhanced the `experience/page.tsx` page to import & render data from `resume.ts`
- Imported Logos for the respective companies

## Day 4: Enhanced the Projects Page

- Added a file `projects.ts` which serves as a datastore for the page
- Enhanced the `projects/page.tsx` page to import & render data from `projects.ts`
- Imported Logos for the respective companies

## Day 5: Enhanced the About & Home Page

- Enriched the `about/page.tsx` page with more information
- Added a section for `Beyond the Code`
- Improved the home page and added my resume via a Google Drive link
