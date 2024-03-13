# Text-Editor-PWA

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
Progressive Web Applications (PWA) are Web apps built and enhanced with modern APIs to provide enhanced capabilities while still reaching any web user on any device with a single codebase, by combining the broad reach of web apps with the rich capabilities of platform-specific apps to enhance the user experience. 

By taking advantage of this tool, this editor has been created allowing the User to count with a Text Editor Application and able to work offline.

## Table of Contents:
- [The Challenge](#Challenges-Faced)
- [Usage Information](#Usage-Information)
- [Installation Process](#Installation-Process)
- [Built With](#Built-With)
- [License](#License)
- [Author](#Author)

## Challenges Faced
Being familiar with how PWAs work and making sure connections have been established in the right way.

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use

```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Render
THEN I should have proper build scripts for a webpack application
```

## Installation Process

1. Clone the respository created on Github on your VSC code to start working on it.
2. Install the following through CLI:
- 2.1 Client Folder:
    - Workbox Webpack Plugin.
    - Webpack Modules and its dependencies.
    - IndexedDB (idb) to work with the database.
- 2.2 Server Folder:
    - Express.js to run the server.
    - Nodemon.
3. Make sure to have locally in your `package.json` file all `npm run`, `npm dev`, `npm start` configurations.

## Usage Instructions

Once having those dependencies locally installed:

1. Open the terminal and install all the dependencies that have been declared in the `package.json` file by running `npm i`.
2. Run `npm start` and the application will be listening on Port 3000.

## Built With

- Visual Studio Code VSC for code edition.
- JavaScript.
- Express JS.
- Nodemon.
- WorkBox and Webpack.
- Indexed DataBase.

## Render Deployment
[Text Editor](https://text-editor-pwa-jir8.onrender.com)

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Author
- Maria Angulo.
- [GitHub](https://github.com/maferadr)