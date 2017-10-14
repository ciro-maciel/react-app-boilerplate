import express from 'express';
var compression = require('compression');
import fs from 'fs';

import React from 'react';
import { renderToString } from 'react-dom/server';

import { StaticRouter } from 'react-router'
import Helmet from 'react-helmet';

import Main from './main';


let app = express();

app.set("x-powered-by", false);
app.use(compression());

app.use('/assets', express.static(__dirname + '/../public/assets'));
const index = fs.readFileSync(__dirname + '/../public/index.html', 'utf8');
const manifest = fs.readFileSync(__dirname + '/../public/assets/js/manifest.js', 'utf8');


/* a single request handler receives every server request
   and routes through react-router */
app.get('*', function(req, res) {

	const context = {};

	const html = renderToString(
		<StaticRouter location={req.url} context={context}>
			<Main />
		</StaticRouter>
	)
	let helmet = Helmet.renderStatic();

	// console.log(index);
	const finalHtml = index.replace('::APP::', html);

	let htmlll = `
		<!doctype html>
		<html ${helmet.htmlAttributes.toString()}>
			<head>
				<meta charset="UTF-8">
				${helmet.title.toString()}
				${helmet.meta.toString()}
				${helmet.link.toString()}
				<link rel="icon" type="image/png" href="/assets/img/favicon.png">
				<link rel="manifest" href="/manifest.json">
				<script type="text/javascript" charset="utf-8">${manifest}</script>				
			</head>
			<body ${helmet.bodyAttributes.toString()}>
				<div id="container">${html}</div>
				<script type="text/javascript" src="/assets/js/main.js" charset="utf-8"></script>
			</body>
		</html>
	`;	

	// context.url will contain the URL to redirect to if a <Redirect> was used
	if (context.url) {
		res.writeHead(302, {
			Location: context.url
		})
		res.end()
	} else {
		// console.log(html);
		res.write(htmlll)
		res.end()
	} 

});

app.listen(8080, () => console.log('Listening on http://localhost:8080'));