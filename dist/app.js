'use strict';

var _appConfig = require('../config/appConfig.json');

var _appConfig2 = _interopRequireDefault(_appConfig);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _environment = require('./utils/environment');

var _environment2 = _interopRequireDefault(_environment);

var _errorhandler = require('errorhandler');

var _errorhandler2 = _interopRequireDefault(_errorhandler);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _connectFlash = require('connect-flash');

var _connectFlash2 = _interopRequireDefault(_connectFlash);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _serveStatic = require('serve-static');

var _serveStatic2 = _interopRequireDefault(_serveStatic);

var _string = require('./utils/string');

var _string2 = _interopRequireDefault(_string);

var _expressFileupload = require('express-fileupload');

var _expressFileupload2 = _interopRequireDefault(_expressFileupload);

var _catch = require('./routes/api/catch');

var _catch2 = _interopRequireDefault(_catch);

var _debug = require('./routes/debug');

var _debug2 = _interopRequireDefault(_debug);

var _fish = require('./routes/api/fish');

var _fish2 = _interopRequireDefault(_fish);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _weather = require('./routes/api/weather');

var _weather2 = _interopRequireDefault(_weather);

var _error = require('./routes/error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT_LISTENER = _appConfig2.default.app.devPort;
console.log('I am listening to this port: http://localhost:%s', PORT_LISTENER);

/**
 * connect to our document store
 */
_mongoose2.default.connect(_environment2.default.getConnectionString());

/**
 * Initialise our string utils to provide new prototypical functions
 */
_string2.default.initialise();

/**
 * function to set up server to allow cross origin resource sharing (CORS)
 * creates headers then either intercepts OPTIONS methods and sends 200 responses or passes through for route handling
 * @param {object} req - the request object
 * @param {object} res - the response object
 * @param {function} next - function to execute the next piece of middleware in our stack
 */
var allowCrossDomain = function allowCrossDomain(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  if ('OPTIONS' === req.method) {
    res.send(200);
  } else {
    next();
  }
};

/**
 * Express application
 * @module app
 */
var app = (0, _express2.default)();

app.use(allowCrossDomain);
app.set('port', process.env.PORT || PORT_LISTENER);
app.set('views', process.cwd() + '/views');
app.set('view engine', 'pug');
app.use((0, _morgan2.default)('dev'));
app.use((0, _methodOverride2.default)());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());
app.use((0, _expressSession2.default)({ secret: _environment2.default.getSessionSecretKey(), resave: false, saveUninitialized: false }));
app.use((0, _connectFlash2.default)());
app.use((0, _expressFileupload2.default)({ safeFileNames: false }));

/**
 * import our routes and set up our routing
 */


(0, _catch2.default)(app);
(0, _debug2.default)(app);
(0, _fish2.default)(app);
(0, _index2.default)(app);
(0, _weather2.default)(app);

/**
 * serve our static content (js, img, css)
 */
app.use((0, _serveStatic2.default)(_path2.default.join(process.cwd(), _appConfig2.default.directories.publicDir)));

app.use(function (req, res, next) {
  console.log('req.body: ' + JSON.stringify(req.body));
  next();
});

/**
 * handle 404 and 500 errors
 */

(0, _error2.default)(app);

if ('development' === app.get('env')) {
  process.env.ENV_NAME = 'development';
  app.use((0, _errorhandler2.default)());
}

/**
 * Global variable holding application root
 */
global.appRoot = _path2.default.resolve(__dirname);

_http2.default.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
  console.log('current working directory is: ' + process.cwd());
  console.log('directory of current module is: ' + __dirname);
});