var https = require('https'),
    http = require('http'),
    path = require('path'),
    express = require('express'),
    cookieParser = require('cookie-parser'),
	  session = require('express-session'),
	  syncrequest = require('sync-request'),
    url = require('url'),
    router = express.Router(),
    fs = require('fs');

var app = express();

var staticSiteOptions = {
    portnum: 80,
    maxAge: 1000 * 60 * 15
};

var sess;

function getURL(srcPath, res) {
  fs.readFile(srcPath, function (error, pgResp) {
	if (error) {
		res.writeHead(404);
		res.write('Contents you are looking are Not Found');
	} else {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(pgResp);
	}
	res.end();
  });
}

function getRequestURI(userId) {
  var res = syncrequest('GET', 'https://dev-livenation.devportal.apigee.com/open-platform/user/' + userId + '/roles');
  // var res = syncrequest('GET', 'https://pantheon.staging.ticketmaster.com/open-platform/user/' + userId + '/roles');
  return res.getBody().toString();
}

function getRole(req) {
  var role='public';
  if (req.session.user == undefined) {
    if (req.cookies['tk-u'] != undefined) {
	  if (typeof Buffer.from === 'function') {
        buf = Buffer.from(req.cookies['tk-u'], 'base64');
      } else {
        buf = new Buffer(req.cookies['tk-u'], 'base64');
      }
	  role = JSON.parse(getRequestURI(buf.toString()));
	  /* Internal user [START] */
      if (role.roles[10] != undefined) {
        role = 'internal';
		req.session.user = role;
      }
	  /* Internal user [END] */
	  console.log("User new in session");
	}
  }
  else {
    if (req.cookies['tk-u'] == undefined) {
	    req.cookies['connect.sid'] = undefined;
	}
	else {
	  console.log("User stored in session");
	  role = req.session.user;
	}
  }	
  return role;
}

/* Copmmerce API Access [START] */
router.get('/products-and-docs/apis/commerce/v2/internal.html', function(req, res) {
  res.redirect('/products-and-docs/apis/commerce/v2/');
});

router.get('/products-and-docs/apis/commerce/v2/', function(req, res) {
  var role = getRole(req);
  var srcPath = '';
  if (role == 'internal') {
	  srcPath = './_site/products-and-docs/apis/commerce/v2/internal.html';
  } else {
	  srcPath = './_site/products-and-docs/apis/commerce/v2/index.html';
  }
  getURL(srcPath, res);
});
/* Commerce API Access [END] */

/* OAuth API Access [START] */
router.get('/products-and-docs/apis/oauth/', function(req, res) {
  var role = getRole(req);
  var srcPath = '';
  if (role == 'internal') {
	  srcPath = './_site/products-and-docs/apis/oauth/index.html';
  } else {
      srcPath = './_site/products-and-docs/apis/getting-started/index.html';
  }
  getURL(srcPath, res);
});
/* O Auth API Access [END] */



app.use(cookieParser());
var hour = 3600000;
app.use(session({
    secret: 'kjniY*YiuhJKN',
    cookie: { secure:  false,
              expires: new Date(Date.now() + hour),
              maxAge:  hour },
    saveUninitialized: true,
    resave: true,
}));

app.use(router);

var options = {
  ca: fs.readFileSync('cert/developer-portal-staging.csr'),
  cert: fs.readFileSync('cert/developer-portal-staging.crt'),
  key: fs.readFileSync('cert/developer-portal-staging.key')
};


// http.createServer(app).listen(8081);
https.createServer(options, app).listen(80);

app.use(express.static(path.join(__dirname, '_site')));

/*
app.use(express.static(
   path.join(__dirname, '_site'),
   staticSiteOptions
)).listen(staticSiteOptions.portnum);
  */

console.log('Listening on port:', staticSiteOptions.portnum);
