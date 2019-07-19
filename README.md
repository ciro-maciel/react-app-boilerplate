## React/Preact - Template
My version of React/Preact Application Template with:

|                                 |                             |                       |
|---------------------------------|-----------------------------|-----------------------|
| Structured for Team Development | i18n                        | Progressive Web Apps  |
| SupportsES6                     | Environment Variables       | Responsive Web Design |
| State Container                 | Server Side Rendering       | Testable              |
| URL Router                      | Async Actions               | Dynamic CSS           |

## Quick Overview
```sh
git clone https://github.com/ciro-maciel/react-app-boilerplate.git

cd react-app-boilerplate/

npm install
npm run dev:client
```

##More References
- [Workbox: Flexible PWA Libraries (Chrome Dev Summit 2017)](https://www.youtube.com/watch?v=DtuJ55tmjps)
- [Nested redux reducers](https://stackoverflow.com/questions/36786244/nested-redux-reducers)
- [Is nested combineReducers a bad or good idea? #738](https://github.com/reactjs/redux/issues/738)
- [Images not served properly #104](https://github.com/awslabs/aws-serverless-express/issues/104)


## Table of Contents
- [Introduction](#introduction)
  - [Structured for Team Development](#structured-for-team-developmen)
  - [Supports ES6](#supports-es6)
  - [State Container](#state-container)
      - [Async Actions](#async-actions)
  - [i18n](#i18n)
  - [Environment Variables](#environment-variables)
  - [Server Side Rendering](#server-side-rendering)
  - [Progressive Web Apps](#progressive-web-apps)
  - [Responsive Web Design](#responsive-web-design)
  - [Testable](#testable)
  - [URL Router](#url-router)
  - [Dynamic CSS](#dynamic-css)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm install](#npm-install)
  - [npm test](#npm-test)
  - [npm docs](#npm-docs)
  - [npm build](#npm-build)
  - [npm run dev:client](#npm-run-dev-client)
  - [npm run dev:server](#npm-run-dev-server)
- Code
  - [Splitting](#splitting)
  - [Analysis](#analysis)
- [Sending Feedback](#sending-feedback)
- [License](#license)


## Introduction

### Structured for Team Developmen

### Supports ES6

### State Container

#### Async Actions

### i18n

### Environment Variables

### Server Side Rendering
- https://github.com/nfl/react-helmet
- https://reacttraining.com/react-router/web/guides/server-rendering
- https://www.youtube.com/watch?v=82tZAPMHfT4
- https://github.com/nfl/react-helmet
- https://github.com/expressjs/compression

### Progressive Web Apps

### Responsive Web Design
- https://www.styled-components.com/
- https://github.com/jxnblk/grid-styled
- https://github.com/jxnblk/react-x-ray

### Testable
- http://facebook.github.io/jest/

### URL Router

### Dynamic CSS

### Folder Structure
After creation, your project should look like this:

```
my-app
├── docs
├── node_modules
├── public
│   ├── index.html
│   ├── manifest.json
│   └── assets
│       ├── img
│       │   └── favicon.ico
│       └── js
|           └── *.*
├── scripts
│   ├── .env.development
│   ├── .env.production
│   ├── webpack.common.js
│   ├── webpack.development.js
│   └── webpack.production.js
├── src
│   ├── Components
│   │   └── menu.js
│   ├── Containers
│   │   ├── Home
|   |   |   ├──
|   |   |   ├──
|   |   |   └──
│   │   └── i18n
|   |   |   ├──
|   |   |   ├──
|   |   |   └──
│   ├── i18n
│   │   ├── en-US.js
│   │   └── pt-BR.js
│   ├── structure
│   │   ├── api.js
│   │   ├── epics.js
│   │   ├── reducers.js
│   │   ├── routes.js
│   │   └── store.js
│   ├── client.js
│   ├── index.html
│   ├── main.js
│   └── server.js
├── .babelrc
├── .gitignore
├── LICENSE
├── package.json
├── README.md
└── yarn.lock
    
```

## Available Scripts

### npm install
### npm test
### npm docs
### npm build
### npm run dev client
### npm run dev server




## Code

### Splitting


### Analysis


## Sending Feedback


## License
CC-BY-NC-SA-4.0 - Attribution-NonCommercial-ShareAlike 4.0 International


## Resources

- [DynamoDB](https://github.com/99xt/serverless-dynamodb-local)
- [Best Practices for Designing a Pragmatic RESTful API](https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)
- [Debugging lambda functions locally in VS Code](https://medium.com/@OneMuppet_/debugging-lambada-functions-locally-in-vscode-with-actual-break-points-deee6235f590)
- [Node.js debugging in VS Code](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)

I think it should be updated, though. I am running NodeJS 10.14 and the debug command in package.json should be “inspect” and not “debug”. Also default port (it seems) is 9229.