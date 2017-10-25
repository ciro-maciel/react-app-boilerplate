import express from 'express';
import compression from 'compression';
import fs from 'fs';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { StaticRouter } from 'react-router';
import Helmet from 'react-helmet';

import Main from './main';


const app = express();

app.set("x-powered-by", false);
app.use(compression());

app.use('/assets', express.static(__dirname + '/../public/assets'));
const manifestJs = fs.readFileSync(__dirname + '/../public/assets/js/manifest.js', 'utf8');


app.get('*', function(req, res) {

	const context = {};

	const styleSheet = new ServerStyleSheet()
	const renderHtml = renderToString(styleSheet.collectStyles(
		<StaticRouter location={req.url} context={context}>
			<Main />
		</StaticRouter>
	));
	const helmet = Helmet.renderStatic();
	const styleTags = styleSheet.getStyleTags()

	let html = `
		<!doctype html>
		<html ${helmet.htmlAttributes.toString()}>
			<head>
				<meta charset="UTF-8">
				${helmet.title.toString()}
				${helmet.meta.toString()}
				${helmet.link.toString()}
				<style>${styleTags}</style>
				<link rel="icon" type="image/ico" href="/assets/img/favicon.ico">
				<link rel="manifest" href="/manifest.json">
				<script type="text/javascript" charset="utf-8">${manifestJs}</script>
			</head>
			<body ${helmet.bodyAttributes.toString()}>
				<div id="container">${renderHtml}</div>
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
		res.write(html)
		res.end()
	} 

});

app.listen(8080, () => console.log('Listening on http://localhost:8080'));