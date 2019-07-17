module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! exports provided: handlerZZZ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlerZZZ", function() { return handlerZZZ; });
/* harmony import */ var serverless_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serverless-http */ "serverless-http");
/* harmony import */ var serverless_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(serverless_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/main */ "./src/main.js");
// http://expressjs.com/pt-br/advanced/best-practice-performance.html
// https://www.npmjs.com/package/serverless-api-compression
// https://github.com/awslabs/aws-serverless-express/issues/99
var path = __webpack_require__(/*! path */ "path"),
    express = __webpack_require__(/*! express */ "express"),
    compression = __webpack_require__(/*! compression */ "compression"),
    awsServerlessExpress = __webpack_require__(/*! aws-serverless-express */ "aws-serverless-express");



var awsServerlessExpressMiddleware = __webpack_require__(/*! aws-serverless-express/middleware */ "aws-serverless-express/middleware");









var app = express(),
    mimeTypes = ['application/javascript', 'application/json', 'application/octet-stream', 'application/x-font-ttf', 'application/x-font-woff', 'application/font-woff', 'application/font-woff2', 'application/xml', 'font/eot', 'font/woff', 'font/opentype', 'font/otf', 'image/jpeg', 'image/png', 'image/svg+xml', 'image/x-icon', 'text/comma-separated-values', 'text/css', 'text/html', 'text/javascript', 'text/plain', 'text/text', 'text/xml'];

app.use(awsServerlessExpressMiddleware.eventContext());

app.set('x-powered-by', false);
app.use(compression());

app.get('/event', function (req, res) {
  res.json(req.apiGateway.event);
});

// https://expressjs.com/pt-br/starter/static-files.html
app.use('/assets', express.static(path.join(__dirname, '../public/assets')));

// // https://stackoverflow.com/questions/49961731/react-router-4-and-express-cannot-get
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../www", "index.html"));
// });

app.get('**', function (req, res) {
  var context = {};

  var styleSheet = new styled_components__WEBPACK_IMPORTED_MODULE_3__["ServerStyleSheet"]();

  var renderHtml = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__["renderToString"])(styleSheet.collectStyles(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    react_router__WEBPACK_IMPORTED_MODULE_4__["StaticRouter"],
    { location: req.url, context: context },
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_main__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  )));

  var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_5___default.a.renderStatic();
  var styleTags = styleSheet.getStyleTags();

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
  var html = '\n      <!doctype html>\n      <html ' + helmet.htmlAttributes.toString() + '>\n          <head>\n              <meta charset="UTF-8">\n              ' + helmet.title.toString() + '\n              ' + helmet.meta.toString() + '\n              ' + helmet.link.toString() + '\n              ' + styleTags + '\n              <link rel="icon" type="image/ico" href="/assets/img/favicon.ico">\n              <script type="text/javascript" src="assets/js/manifest.js" charset="utf-8"></script>\n          </head>\n          <body ' + helmet.bodyAttributes.toString() + '>\n              <div id="container">' + renderHtml + '</div>\n          </body>\n      </html>\n  ';

  // context.url will contain the URL to redirect to if a <Redirect> was used
  if (context.url) {
    res.writeHead(302, {
      Location: context.url
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

var server = awsServerlessExpress.createServer(app, null, mimeTypes);

var handlerZZZ = function handlerZZZ(event, context) {
  return awsServerlessExpress.proxy(server, event, context);
};
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./src/components/button.js":
/*!**********************************!*\
  !*** ./src/components/button.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
var _templateObject = _taggedTemplateLiteral(['\n    color: #24292e;\n    background-color: #eff3f6;\n    background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);\n    position: relative;\n    display: inline-block;\n    padding: 2px 12px;\n    font-size: 12px;\n    font-weight: 600;\n    line-height: 20px;\n    white-space: nowrap;\n    vertical-align: middle;\n    cursor: pointer;\n    user-select: none;\n    background-repeat: repeat-x;\n    background-position: -1px -1px;\n    background-size: 110% 110%;\n    border: 1px solid rgba(27,31,35,0.2);\n    border-radius: 0.25em;\n    appearance: none;\n'], ['\n    color: #24292e;\n    background-color: #eff3f6;\n    background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);\n    position: relative;\n    display: inline-block;\n    padding: 2px 12px;\n    font-size: 12px;\n    font-weight: 600;\n    line-height: 20px;\n    white-space: nowrap;\n    vertical-align: middle;\n    cursor: pointer;\n    user-select: none;\n    background-repeat: repeat-x;\n    background-position: -1px -1px;\n    background-size: 110% 110%;\n    border: 1px solid rgba(27,31,35,0.2);\n    border-radius: 0.25em;\n    appearance: none;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject);

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/i18n */ "./src/containers/i18n/index.js");






var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"],
    { width: 1, pb: 1, justifyContent: "center", alignItems: "center" },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_i18n__WEBPACK_IMPORTED_MODULE_2__["I18nOption"], null)
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/input.js":
/*!*********************************!*\
  !*** ./src/components/input.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
var _templateObject = _taggedTemplateLiteral(['\n    height: 27px;\n    width: 100%;\n    font-size: 12px;\n    border: 1px solid #ccc;\n    padding: 3px 3px 3px 5px;\n    margin: 0 0 11px 0;\n    box-sizing: border-box;\n    outline: 0;\n    resize: none;\n'], ['\n    height: 27px;\n    width: 100%;\n    font-size: 12px;\n    border: 1px solid #ccc;\n    padding: 3px 3px 3px 5px;\n    margin: 0 0 11px 0;\n    box-sizing: border-box;\n    outline: 0;\n    resize: none;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input(_templateObject);

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./src/components/link.js":
/*!********************************!*\
  !*** ./src/components/link.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
var _templateObject = _taggedTemplateLiteral(['\n\tcolor: palevioletred;\n\tfont-weight: bold;\n'], ['\n\tcolor: palevioletred;\n\tfont-weight: bold;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }





var Base = function Base(_ref) {
	var url = _ref.url,
	    children = _ref.children,
	    props = _objectWithoutProperties(_ref, ['url', 'children']);

	return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
		react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
		{ to: url },
		children
	);
};

var Link = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Base)(_templateObject);

/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link */ "./src/components/link.js");
var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    flex-direction: column;\n    background-color: ', ';\n    padding: 0.75rem;\n'], ['\n    display: flex;\n    flex-direction: column;\n    background-color: ', ';\n    padding: 0.75rem;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: flex;\n    justify-content: center;\n    font-weight: bold;\n    font-size: 1.125rem;\n    margin-top: 0 !important;\n    margin-bottom: 1rem;\n    text-transform: uppercase;\n'], ['\n    display: flex;\n    justify-content: center;\n    font-weight: bold;\n    font-size: 1.125rem;\n    margin-top: 0 !important;\n    margin-bottom: 1rem;\n    text-transform: uppercase;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    padding: 5px;\n'], ['\n    padding: 5px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    list-style-type: none;\n    padding-left: 0px;\n    margin: 0px;\n'], ['\n    list-style-type: none;\n    padding-left: 0px;\n    margin: 0px;\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject, function (props) {
    return props.theme.background;
});

var Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2);

var Item = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li(_templateObject3);

var Items = function Items(_ref) {
    var items = _ref.items;
    return items.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            Item,
            { key: item.display },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _link__WEBPACK_IMPORTED_MODULE_2__["default"],
                { url: item.url },
                item.display
            )
        );
    });
};

var List = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul(_templateObject4);

var Menu = function Menu(_ref2) {
    var title = _ref2.title,
        items = _ref2.items,
        props = _objectWithoutProperties(_ref2, ['title', 'items']);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        Container,
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            Title,
            null,
            title
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            List,
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Items, { items: items })
        )
    );
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./src/components/table-user.js":
/*!**************************************!*\
  !*** ./src/components/table-user.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _templateObject = _taggedTemplateLiteral(['\n    margin-top: 10px;\n    border-collapse: collapse;\n    border-spacing: 0;\n    max-width: 100%;\n    width: 100%;\n    empty-cells: show;\n    border: 1px solid rgba(0, 0, 0, 0.05);\n    line-height: 24px;\n    tr:nth-child(odd) td {\n        background: #f8f8f8;\n    }\n'], ['\n    margin-top: 10px;\n    border-collapse: collapse;\n    border-spacing: 0;\n    max-width: 100%;\n    width: 100%;\n    empty-cells: show;\n    border: 1px solid rgba(0, 0, 0, 0.05);\n    line-height: 24px;\n    tr:nth-child(odd) td {\n        background: #f8f8f8;\n    }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




var Table = function Table(_ref) {
    var items = _ref.items,
        className = _ref.className,
        props = _objectWithoutProperties(_ref, ['items', 'className']);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'table',
        { className: className },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'thead',
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'tr',
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('td', null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('td', null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('td', null)
            )
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'tbody',
            null,
            Object.keys(items).map(function (key, index) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'tr',
                    { key: items[key].id },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'td',
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: items[key].avatar_url, style: { width: '36px' } })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'td',
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'a',
                            { href: items[key].html_url, target: '_blank' },
                            items[key].login
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'td',
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'a',
                            { href: items[key].repos_url, target: '_blank' },
                            'Repositories'
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'td',
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'a',
                            { href: items[key].organizations_url, target: '_blank' },
                            'Organizations'
                        )
                    )
                );
            })
        )
    );
};

var TableUser = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Table)(_templateObject);

/* harmony default export */ __webpack_exports__["default"] = (TableUser);

/***/ }),

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! marked */ "marked");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/footer */ "./src/components/footer.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/menu */ "./src/components/menu.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var renderer = new marked__WEBPACK_IMPORTED_MODULE_6___default.a.Renderer();
renderer.link = function (href, title, text) {
  return href.indexOf("#") > -1 ? "<a href=#/" + href + ">" + text + "</a>" : "<a href=" + href + ">" + text + "</a>";
};



// import readme from "../../../README.md";

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "createMarkup",
    value: function createMarkup(readme) {
      return { __html: marked__WEBPACK_IMPORTED_MODULE_6___default()(readme, { renderer: renderer }) };
    }
  }, {
    key: "render",
    value: function render() {
      var intl = this.props.intl;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"],
        { justifyContent: "center" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"],
          null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", { charSet: "utf-8" }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "title",
            null,
            "@ciro-maciel/My version of React/Preact Application Boilerplate"
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
            rel: "canonical",
            href: "https://ciro-maciel.github.io/react-app-boilerplate/"
          })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"],
          { flexWrap: "wrap", width: 1024 },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"],
            { flexWrap: "wrap", width: 1 },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              rebass__WEBPACK_IMPORTED_MODULE_5__["Box"],
              { width: [1, 3 / 12], p: [1, 2] },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_menu__WEBPACK_IMPORTED_MODULE_8__["default"], {
                title: intl.formatMessage({ id: "6592623" }),
                items: [{
                  display: intl.formatMessage({ id: "71ef8f1" }),
                  url: "/"
                }, {
                  display: intl.formatMessage({ id: "6871c58" }),
                  url: "/users"
                }]
              })
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_5__["Box"], { width: [1, 9 / 12], p: [1, 2] })
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_7__["default"], null)
        )
      );
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return { i18n: state.i18n };
}, function (dispatch) {
  return {
    handleChange: function handleChange(locale) {
      return dispatch(i18nChange(locale));
    }
  };
})(Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["injectIntl"])(Home)));

/***/ }),

/***/ "./src/containers/Users/actions.js":
/*!*****************************************!*\
  !*** ./src/containers/Users/actions.js ***!
  \*****************************************/
/*! exports provided: usersRequest, usersReceive, usersFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersRequest", function() { return usersRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersReceive", function() { return usersReceive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersFailure", function() { return usersFailure; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/containers/Users/types.js");


function usersRequest(query) {
	return {
		type: _types__WEBPACK_IMPORTED_MODULE_0__["USERS_REQUEST"],
		payload: query
	};
}

function usersReceive(found) {
	return {
		type: _types__WEBPACK_IMPORTED_MODULE_0__["USERS_RECEIVE"],
		payload: found
	};
}

function usersFailure(errorMessage) {
	return {
		type: _types__WEBPACK_IMPORTED_MODULE_0__["USERS_FAILURE"],
		payload: errorMessage,
		error: true
	};
}

/***/ }),

/***/ "./src/containers/Users/epic.js":
/*!**************************************!*\
  !*** ./src/containers/Users/epic.js ***!
  \**************************************/
/*! exports provided: users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return users; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/containers/Users/types.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/containers/Users/actions.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "rxjs/Rx");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__);





var apiUrl = process.env.API_URL;
// https://developer.github.com/v3/search/#search-users
// https://developer.github.com/v3/#pagination
// https://developer.github.com/v3/repos/
var ajax = function ajax(query) {
    return rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].ajax.get(apiUrl + '/search/users?q=' + query + '&per_page=100', {
        'Content-Type': 'text/plain'
    });
};

var users = function users(action$, store) {
    return rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].merge(action$.ofType(_types__WEBPACK_IMPORTED_MODULE_0__["USERS_REQUEST"])
    // .delay(1000)
    .switchMap(function (_ref) {
        var payload = _ref.payload;
        return ajax(payload).map(function (_ref2) {
            var response = _ref2.response;
            return Object(_actions__WEBPACK_IMPORTED_MODULE_1__["usersReceive"])(response);
        }).catch(function (_ref3) {
            var status = _ref3.status;
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["usersFailure"])(status));
        });
    }));
};

/***/ }),

/***/ "./src/containers/Users/index.js":
/*!***************************************!*\
  !*** ./src/containers/Users/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../i18n */ "./src/containers/i18n/index.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/footer */ "./src/components/footer.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/button */ "./src/components/button.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/menu */ "./src/components/menu.js");
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/input */ "./src/components/input.js");
/* harmony import */ var _components_table_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/table-user */ "./src/components/table-user.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./actions */ "./src/containers/Users/actions.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



















var Users = function (_Component) {
  _inherits(Users, _Component);

  function Users() {
    _classCallCheck(this, Users);

    return _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).apply(this, arguments));
  }

  _createClass(Users, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          intl = _props.intl,
          handleSearch = _props.handleSearch,
          users = _props.users;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"],
        { justifyContent: 'center' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react_helmet__WEBPACK_IMPORTED_MODULE_3__["Helmet"],
          null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('meta', { charSet: 'utf-8' }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'title',
            null,
            '@ciro-maciel/My version of React/Preact Application Boilerplate'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('link', { rel: 'canonical', href: 'https://ciro-maciel.github.io/react-app-boilerplate/' })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"],
          { flexWrap: 'wrap', width: 1024 },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"],
            { flexWrap: 'wrap', width: 1 },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              rebass__WEBPACK_IMPORTED_MODULE_5__["Box"],
              { width: 1, p: [1, 2] },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
                { to: '/' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], { id: 'b4db309' })
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'h2',
                null,
                ' Pesquisa de Usuarios '
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_input__WEBPACK_IMPORTED_MODULE_10__["default"], {
                type: 'text',
                ref: function ref(input) {
                  _this2.textQuery = input;
                }
              }),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_button__WEBPACK_IMPORTED_MODULE_8__["default"],
                { onClick: function onClick() {
                    return handleSearch(_this2.textQuery.value);
                  } },
                'Procurar'
              ),
              users.found && users.found.items && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_table_user__WEBPACK_IMPORTED_MODULE_11__["default"], { items: users.found.items })
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_7__["default"], null)
        )
      );
    }
  }]);

  return Users;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return { users: state.users };
}, function (dispatch) {
  return {
    handleSearch: function handleSearch(query) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["usersRequest"])(query));
    }
  };
})(Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["injectIntl"])(Users)));

/***/ }),

/***/ "./src/containers/Users/reducer.js":
/*!*****************************************!*\
  !*** ./src/containers/Users/reducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return signUp; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/containers/Users/types.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var initialState = {
    query: "",
    found: null,
    isRequesting: false,
    isError: false,
    errorMessage: ''
};

function signUp() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _types__WEBPACK_IMPORTED_MODULE_0__["USERS_REQUEST"]:
            return _extends({}, state, {
                query: action.payload,
                isRequesting: true,
                isError: false,
                errorMessage: ''
            });
        case _types__WEBPACK_IMPORTED_MODULE_0__["USERS_RECEIVE"]:
            return _extends({}, state, {
                found: action.payload,
                isRequesting: false
            });
        case _types__WEBPACK_IMPORTED_MODULE_0__["USERS_FAILURE"]:
            return _extends({}, state, {
                isRequesting: false,
                isError: true,
                errorMessage: action.payload
            });
        default:
            return state;
    }
}

/***/ }),

/***/ "./src/containers/Users/types.js":
/*!***************************************!*\
  !*** ./src/containers/Users/types.js ***!
  \***************************************/
/*! exports provided: USERS_REQUEST, USERS_FAILURE, USERS_RECEIVE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS_REQUEST", function() { return USERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS_FAILURE", function() { return USERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS_RECEIVE", function() { return USERS_RECEIVE; });
var USERS_REQUEST = 'USERS_REQUEST';
var USERS_FAILURE = 'USERS_FAILURE';
var USERS_RECEIVE = 'USERS_RECEIVE';

/***/ }),

/***/ "./src/containers/i18n/actions.js":
/*!****************************************!*\
  !*** ./src/containers/i18n/actions.js ***!
  \****************************************/
/*! exports provided: i18nChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18nChange", function() { return i18nChange; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/containers/i18n/types.js");


function i18nChange(locale) {
	return {
		type: _types__WEBPACK_IMPORTED_MODULE_0__["I18n_CHANGE"],
		payload: locale
	};
}

/***/ }),

/***/ "./src/containers/i18n/data/en-US.js":
/*!*******************************************!*\
  !*** ./src/containers/i18n/data/en-US.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
    '6592623': 'Menu',
    '71ef8f1': 'Home',
    '6871c58': 'Users',
    '3b17930': 'Repositories',
    'b4db309': 'Return to Home'
};

/***/ }),

/***/ "./src/containers/i18n/data/pt-BR.js":
/*!*******************************************!*\
  !*** ./src/containers/i18n/data/pt-BR.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
    '6592623': 'Menu',
    '71ef8f1': 'Home',
    '6871c58': 'Usuários',
    '3b17930': 'Repositórios',
    'b4db309': 'Retornar para a Home'
};

/***/ }),

/***/ "./src/containers/i18n/index.js":
/*!**************************************!*\
  !*** ./src/containers/i18n/index.js ***!
  \**************************************/
/*! exports provided: I18nProvider, I18nOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nProvider", function() { return I18nProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nOption", function() { return I18nOption; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/containers/i18n/actions.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var i18nProvider = function (_Component) {
    _inherits(i18nProvider, _Component);

    function i18nProvider(props) {
        _classCallCheck(this, i18nProvider);

        return _possibleConstructorReturn(this, (i18nProvider.__proto__ || Object.getPrototypeOf(i18nProvider)).call(this, props));
    }

    _createClass(i18nProvider, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                _props$i18n = _props.i18n,
                locale = _props$i18n.locale,
                messages = _props$i18n.messages,
                children = _props.children;

            return (
                // https://github.com/yahoo/react-intl/issues/213
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_intl__WEBPACK_IMPORTED_MODULE_2__["IntlProvider"],
                    { locale: locale, messages: messages },
                    children
                )
            );
        }
    }]);

    return i18nProvider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var I18nProvider = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
    return { i18n: state.i18n };
})(i18nProvider);

var i18nOption = function (_Component2) {
    _inherits(i18nOption, _Component2);

    function i18nOption(props) {
        _classCallCheck(this, i18nOption);

        return _possibleConstructorReturn(this, (i18nOption.__proto__ || Object.getPrototypeOf(i18nOption)).call(this, props));
    }

    _createClass(i18nOption, [{
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                locale = _props2.i18n.locale,
                handleChange = _props2.handleChange;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'select',
                { onChange: function onChange(e) {
                        return handleChange(e.target.value);
                    }, value: locale },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'option',
                    { value: 'en-US' },
                    'English (US)'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'option',
                    { value: 'pt-BR' },
                    'Portugu\xEAs (Brasil)'
                )
            );
        }
    }]);

    return i18nOption;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var I18nOption = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
    return { i18n: state.i18n };
}, function (dispatch) {
    return {
        handleChange: function handleChange(locale) {
            return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["i18nChange"])(locale));
        }
    };
})(i18nOption);

/***/ }),

/***/ "./src/containers/i18n/reducer.js":
/*!****************************************!*\
  !*** ./src/containers/i18n/reducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return I18n; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/containers/i18n/types.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl_locale_data_pt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl/locale-data/pt */ "react-intl/locale-data/pt");
/* harmony import */ var react_intl_locale_data_pt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_pt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl_locale_data_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl/locale-data/en */ "react-intl/locale-data/en");
/* harmony import */ var react_intl_locale_data_en__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_en__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_pt_BR__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/pt-BR */ "./src/containers/i18n/data/pt-BR.js");
/* harmony import */ var _data_pt_BR__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_pt_BR__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_en_US__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/en-US */ "./src/containers/i18n/data/en-US.js");
/* harmony import */ var _data_en_US__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_en_US__WEBPACK_IMPORTED_MODULE_5__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }










var dataMessages = {
    'pt-BR': _data_pt_BR__WEBPACK_IMPORTED_MODULE_4___default.a,
    'en-US': _data_en_US__WEBPACK_IMPORTED_MODULE_5___default.a
};

Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["addLocaleData"])([].concat(_toConsumableArray(react_intl_locale_data_en__WEBPACK_IMPORTED_MODULE_3___default.a), _toConsumableArray(react_intl_locale_data_pt__WEBPACK_IMPORTED_MODULE_2___default.a)));

var navigatorLocale = typeof window !== 'undefined' ? navigator.languages && navigator.languages[0] || navigator.language || navigator.usserLanguage || 'pt-BR' : 'pt-BR',
    cookieLocale = typeof window !== 'undefined' ? decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent('locale').replace(/[\\]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null : null;

var locale = cookieLocale ? cookieLocale : navigatorLocale,
    messages = flattenMessages(dataMessages[locale]);

var initialState = {
    locale: locale,
    messages: messages
};
saveInCookie(locale);

function saveInCookie(locale) {
    var validAt = new Date().setDate(new Date().getDate() + 360),
        domain = typeof window !== 'undefined' ? window.location.hostname === 'localhost' ? 'localhost' : '@ciro-maciel' : '@ciro-maciel',
        path = '/';

    if (typeof window !== 'undefined') {
        document.cookie = encodeURIComponent('locale') + "=" + encodeURIComponent(locale) + "; expires=" + validAt + (domain ? "; domain=" + domain : "") + (path ? "; path=" + path : "");
    }
}

// https://github.com/yahoo/react-intl/wiki/Upgrade-Guide
function flattenMessages(nestedMessages) {
    var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    return Object.keys(nestedMessages).reduce(function (messages, key) {
        var value = nestedMessages[key];
        var prefixedKey = prefix ? prefix + '.' + key : key;

        if (typeof value === 'string') {
            messages[prefixedKey] = value;
        } else {
            Object.assign(messages, flattenMessages(value, prefixedKey));
        }

        return messages;
    }, {});
}

function I18n() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _types__WEBPACK_IMPORTED_MODULE_0__["I18n_CHANGE"]:
            {
                var locale = action.payload;
                saveInCookie(locale);
                return _extends({}, state, {
                    locale: locale,
                    messages: flattenMessages(dataMessages[locale])
                });
            }
        default:
            return state;
    }
}

/***/ }),

/***/ "./src/containers/i18n/types.js":
/*!**************************************!*\
  !*** ./src/containers/i18n/types.js ***!
  \**************************************/
/*! exports provided: I18n_CHANGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18n_CHANGE", function() { return I18n_CHANGE; });
var I18n_CHANGE = 'i18n_CHANGE';

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _structure_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./structure/routes */ "./src/structure/routes.js");
/* harmony import */ var _structure_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./structure/store */ "./src/structure/store.js");






// if (
//     process.env.NODE_ENV &&
//     process.env.NODE_ENV === "production" &&
//   "serviceWorker" in navigator
// ) {
//   window.addEventListener("load", function() {
//     navigator.serviceWorker
//       .register(process.env.PUBLIC_URL + "/worker.js")
//       .then(function(registration) {
//         console.log(
//           "ServiceWorker registration successful with scope: ",
//           registration.scope
//         );
//       })
//       .catch(function(err) {
//         console.log("ServiceWorker registration failed: ", err);
//       });
//   });
// }

var Main = function Main() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"],
    { store: _structure_store__WEBPACK_IMPORTED_MODULE_3__["default"] },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_structure_routes__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  );
};

// const Main = () => (
//   <div>
//     sdsds
//   </div>
// );


/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/structure/epics.js":
/*!********************************!*\
  !*** ./src/structure/epics.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-observable */ "redux-observable");
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_Users_epic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/Users/epic */ "./src/containers/Users/epic.js");




/* harmony default export */ __webpack_exports__["default"] = (Object(redux_observable__WEBPACK_IMPORTED_MODULE_0__["combineEpics"])(_containers_Users_epic__WEBPACK_IMPORTED_MODULE_1__["users"]));

/***/ }),

/***/ "./src/structure/reducers.js":
/*!***********************************!*\
  !*** ./src/structure/reducers.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_i18n_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/i18n/reducer */ "./src/containers/i18n/reducer.js");
/* harmony import */ var _containers_Users_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/Users/reducer */ "./src/containers/Users/reducer.js");







// Is nested combineReducers a bad or good idea? #738
// https://github.com/reactjs/redux/issues/738
// https://stackoverflow.com/questions/36786244/nested-redux-reducers
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    form: redux_form__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    i18n: _containers_i18n_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
    users: _containers_Users_reducer__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

/***/ }),

/***/ "./src/structure/routes.js":
/*!*********************************!*\
  !*** ./src/structure/routes.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_x_ray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-x-ray */ "react-x-ray");
/* harmony import */ var react_x_ray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_x_ray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var grid_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grid-styled */ "grid-styled");
/* harmony import */ var grid_styled__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(grid_styled__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _containers_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../containers/i18n */ "./src/containers/i18n/index.js");
/* harmony import */ var _containers_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../containers/Home */ "./src/containers/Home/index.js");
/* harmony import */ var _containers_Users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../containers/Users */ "./src/containers/Users/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
var _templateObject = _taggedTemplateLiteral(["\n\thtml,\n\tbody, \n\t#container {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t} \n\n\thtml {\n\t\tcolor: #666665;\n\t\tfont-family: \"lucida grande\", tahoma, verdana, arial, sans-serif;\n\t\tfont-size: 12px;\n\t}\n"], ["\n\thtml,\n\tbody, \n\t#container {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t} \n\n\thtml {\n\t\tcolor: #666665;\n\t\tfont-family: \"lucida grande\", tahoma, verdana, arial, sans-serif;\n\t\tfont-size: 12px;\n\t}\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }














var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["createGlobalStyle"])(_templateObject);

// https://reacttraining.com/react-router/web/guides/server-rendering/404-401-or-any-other-status
var Status = function Status(_ref) {
  var code = _ref.code,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    render: function render(_ref2) {
      var staticContext = _ref2.staticContext;

      if (staticContext) staticContext.status = code;
      return children;
    }
  });
};

var NotFound = function NotFound() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    Status,
    { code: 404 },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      grid_styled__WEBPACK_IMPORTED_MODULE_4__["Flex"],
      { justify: "center", style: { height: "100%" } },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        grid_styled__WEBPACK_IMPORTED_MODULE_4__["Flex"],
        { wrap: true, width: 1024 },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          grid_styled__WEBPACK_IMPORTED_MODULE_4__["Box"],
          { width: 1, style: { textAlign: "center" } },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "h1",
            null,
            "Sorry, can\u2019t find that."
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "p",
            null,
            "Go to ",
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
              { to: "/" },
              "Home"
            )
          )
        )
      )
    )
  );
};

var RoutesSwitch = function RoutesSwitch() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"],
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/", component: _containers_Home__WEBPACK_IMPORTED_MODULE_6__["default"] }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/users", component: _containers_Users__WEBPACK_IMPORTED_MODULE_7__["default"] }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/repository/:repositoryName",
      render: function render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          "div",
          null,
          props.match.params.repositoryName
        );
      }
    }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { component: NotFound })
  );
};

var Routes = function Routes() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _containers_i18n__WEBPACK_IMPORTED_MODULE_5__["I18nProvider"],
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
      null,
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GlobalStyle, null),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react_x_ray__WEBPACK_IMPORTED_MODULE_3___default.a,
        {
          disabled: false,
          color: "#e5a87d",
          backgroundColor: "#004d84",
          style: { height: "100%" }
        },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RoutesSwitch, null)
      )
    )
  );
};
// const Routes = () => (
//   <I18nProvider>
//     <React.Fragment>
//       <GlobalStyle />
//       {process.env.NODE_ENV && process.env.NODE_ENV !== "production" ? (
//         <XRay
//           disabled={true}
//           color={"#e5a87d"}
//           backgroundColor={"#004d84"}
//           style={{ height: "100%" }}
//         >
//           <RoutesSwitch />
//         </XRay>
//       ) : (
//         <RoutesSwitch />
//       )}
//     </React.Fragment>
//   </I18nProvider>
// );

/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ }),

/***/ "./src/structure/store.js":
/*!********************************!*\
  !*** ./src/structure/store.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-observable */ "redux-observable");
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_observable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./src/structure/reducers.js");
/* harmony import */ var _epics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./epics */ "./src/structure/epics.js");






var epicMiddleware = Object(redux_observable__WEBPACK_IMPORTED_MODULE_1__["createEpicMiddleware"])(_epics__WEBPACK_IMPORTED_MODULE_3__["default"]),
    middlewares = [epicMiddleware];

var store = null;

if (true) {
    var _require = __webpack_require__(/*! redux-logger */ "redux-logger"),
        logger = _require.logger;

    middlewares.push(logger);
}
store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(undefined, middlewares));
if (true) {
    console.log(store.getState());
}

/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "aws-serverless-express":
/*!*****************************************!*\
  !*** external "aws-serverless-express" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-serverless-express");

/***/ }),

/***/ "aws-serverless-express/middleware":
/*!****************************************************!*\
  !*** external "aws-serverless-express/middleware" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-serverless-express/middleware");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "grid-styled":
/*!******************************!*\
  !*** external "grid-styled" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grid-styled");

/***/ }),

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "react-intl/locale-data/en":
/*!********************************************!*\
  !*** external "react-intl/locale-data/en" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/en");

/***/ }),

/***/ "react-intl/locale-data/pt":
/*!********************************************!*\
  !*** external "react-intl/locale-data/pt" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/pt");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-x-ray":
/*!******************************!*\
  !*** external "react-x-ray" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-x-ray");

/***/ }),

/***/ "rebass":
/*!*************************!*\
  !*** external "rebass" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rebass");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-form":
/*!*****************************!*\
  !*** external "redux-form" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-observable":
/*!***********************************!*\
  !*** external "redux-observable" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-observable");

/***/ }),

/***/ "rxjs/Rx":
/*!**************************!*\
  !*** external "rxjs/Rx" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/Rx");

/***/ }),

/***/ "serverless-http":
/*!**********************************!*\
  !*** external "serverless-http" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serverless-http");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map