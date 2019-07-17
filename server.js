// http://expressjs.com/pt-br/advanced/best-practice-performance.html
// https://www.npmjs.com/package/serverless-api-compression
// https://github.com/awslabs/aws-serverless-express/issues/99
const path = require('path'),
  express = require('express'),
  compression = require('compression'),
  awsServerlessExpress = require('aws-serverless-express');

import serverless from 'serverless-http';

const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { StaticRouter } from 'react-router';
import Helmet from 'react-helmet';

import Main from './src/main';

const app = express(),
  mimeTypes = [
    'application/javascript',
    'application/json',
    'application/octet-stream',
    'application/x-font-ttf',
    'application/x-font-woff',
    'application/font-woff',
    'application/font-woff2',
    'application/xml',
    'font/eot',
    'font/woff',
    'font/opentype',
    'font/otf',
    'image/jpeg',
    'image/png',
    'image/svg+xml',
    'image/x-icon',
    'text/comma-separated-values',
    'text/css',
    'text/html',
    'text/javascript',
    'text/plain',
    'text/text',
    'text/xml',
  ];

app.use(awsServerlessExpressMiddleware.eventContext());

app.set('x-powered-by', false);
app.use(compression());

app.get('/event', (req, res) => {
  res.json(req.apiGateway.event);
});

// https://expressjs.com/pt-br/starter/static-files.html
app.use('/assets', express.static(path.join(__dirname, '../public/assets')));

// // https://stackoverflow.com/questions/49961731/react-router-4-and-express-cannot-get
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../www", "index.html"));
// });

app.get('**', function(req, res) {
  const context = {};

  const styleSheet = new ServerStyleSheet();

  const renderHtml = renderToString(
    styleSheet.collectStyles(
      <StaticRouter location={req.url} context={context}>
        <Main />
        {/* <div>
            dsds
          </div> */}
      </StaticRouter>
    )
  );

  const helmet = Helmet.renderStatic();
  const styleTags = styleSheet.getStyleTags();

  // let html = `
  //         <!doctype html>
  //         <html ${helmet.htmlAttributes.toString()}>
  //             <head>
  //                 <meta charset="UTF-8">
  //                 ${helmet.title.toString()}
  //                 ${helmet.meta.toString()}
  //                 ${helmet.link.toString()}
  //                 ${styleTags}
  //                 <link rel="icon" type="image/ico" href="/assets/img/favicon.ico">
  //                 <script type="text/javascript" src="assets/js/manifest.js" charset="utf-8"></script>
  //             </head>
  //             <body ${helmet.bodyAttributes.toString()}>
  //                 <div id="container">${renderHtml}</div>
  //                 <script type="text/javascript" src="/assets/js/main.js" charset="utf-8"></script>
  //             </body>
  //         </html>
  //     `;
  let html = `
      <!doctype html>
      <html ${helmet.htmlAttributes.toString()}>
          <head>
              <meta charset="UTF-8">
              ${helmet.title.toString()}
              ${helmet.meta.toString()}
              ${helmet.link.toString()}
              ${styleTags}
              <link rel="icon" type="image/ico" href="/assets/img/favicon.ico">
              <script type="text/javascript" src="assets/js/manifest.js" charset="utf-8"></script>
          </head>
          <body ${helmet.bodyAttributes.toString()}>
              <div id="container">${renderHtml}</div>
          </body>
      </html>
  `;

  // context.url will contain the URL to redirect to if a <Redirect> was used
  if (context.url) {
    res.writeHead(302, {
      Location: context.url,
    });
    res.end();
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(html);
    res.end();
  }
});

// export const handlerZZZ = serverless(app, {
//   binary: ['text/html', 'image/*']
// });

const server = awsServerlessExpress.createServer(app, null, mimeTypes);

export const handlerZZZ = function(event, context) {
  return awsServerlessExpress.proxy(server, event, context);
};
