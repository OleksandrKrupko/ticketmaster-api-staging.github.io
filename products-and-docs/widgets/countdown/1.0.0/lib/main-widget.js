var widgetsLib =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(50);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(33);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(10);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(4);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(24);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(9),
    isObjectLike = __webpack_require__(53);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
class eventUrlCountdownClock {
	set endTime(endTime) { this.config.endTime = endTime; }
	get endTime(){ return this.config.endTime || new Date();}

	set interval(interval) { return this.config.interval = interval; }
	get interval(){ return this.config.interval || 1000;}

	set onChange(fn) { return this.config.onChange = fn; }
	get onChange(){ return this.config.onChange || ((time) => {})}

	constructor(config = {}) {
		this.config = config;
		this.updateClock();
		if(this.config.endTime) this.initInterval();
	}

	initInterval(){
		this.timeinterval = setInterval(this.updateClock.bind(this), this.interval);
	}

	update(endTime){
		clearInterval(this.timeinterval);
		this.endTime = endTime;
		this.updateClock();
		if(endTime) this.initInterval();
	}

	updateClock() {
		let timeRemaining = this.getTimeRemaining();
		this.onChange(timeRemaining);
		if (timeRemaining.total <= 0) clearInterval(this.timeinterval);
	}

	/*
  //Covert datetime by GMT offset
  //If toUTC is true then return UTC time other wise return local time
  convertLocalDateToUTCDate(date, toUTC) {
    date = new Date(date);
    //Local time converted to UTC
    var localOffset = date.getTimezoneOffset() * 60000;
    var localTime = date.getTime();
    (toUTC)
      ? date = localTime + localOffset
      : date = localTime - localOffset;
    date = new Date(date);
    return date;
  }
  */

	getTimeRemaining() {
		let total = Date.parse(this.endTime) - Date.parse(new Date());
		if(total <= 0) total = 0;
		let seconds = Math.floor((total / 1000) % 60),
			minutes = Math.floor((total / 1000 / 60) % 60),
			hours = Math.floor((total / 3600000 /* (1000 * 60 * 60) */) % 24),
			days = Math.floor(total / 86400000 /* (1000 * 60 * 60 * 24) */),
			monthLeft = 0;
		//years = 0;

		let daysInMonth = function(year,month){
			var D=new Date(year, month-1, 1, 12);
			return parseInt((-Date.parse(D)+D.setMonth(D.getMonth()+1)+36e5)/864e5);
		};

		let today = new Date(),
			curr_day = today.getUTCDate(),
			curr_month = today.getUTCMonth(),
			curr_year = today.getUTCFullYear(),
			curr_days_in_month = daysInMonth(curr_year, curr_month);

		if(days > curr_days_in_month){
			let servYear = new Date(this.endTime).getUTCFullYear(),
				servMonth = new Date(this.endTime).getUTCMonth(),
				servDay = new Date(this.endTime).getUTCDate(),
				serv_days_in_month = daysInMonth(servYear, servMonth);

			monthLeft = Math.floor( days/daysInMonth(servYear,servMonth) );

			days = Math.abs(servDay - curr_day);

			/*if(monthLeft > 99){
        years = servYear - curr_year;
        monthLeft = monthLeft-1 - years*12;
        //console.log( 'monthLeft ',monthLeft );
      }*/
		}

		return {
			total,
			//years,
			monthLeft,
			days,
			hours,
			minutes,
			seconds
		};
	}
}
/* harmony export (immutable) */ __webpack_exports__["default"] = eventUrlCountdownClock;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const TM_TRACKER_ID = 'UA-78315612-1';

const DEVPORT_TRACKER_ID = 'UA-114077619-1';
const DEVPORT_TRACKER_ALIAS = 'tmOpenPlatform';

const EVENT_CATEGORY = {
  MAP_WIDGET: 'MapWidget',
  CALENDAR_WIDGET: 'CalendarWidget',
  COUNTDOWN_WIDGET: 'CountdownWidget',
  EVENT_DISCOVERY_WIDGET: 'EventDiscoveryWidget',
};

const EVENT_NAME = {
  RENDERED: 'rendered',
  LOAD: 'load',
  BUY_BUTTON_CLICK: 'buyButtonClick',
  EVENT_NAME_CLICK: 'eventNameClick',
};

const CUSTOM_DIMENSIONS = {
  API_KEY: 'dimension1',
};

const sendEvent = (eventOptions) => {
  ga('send', 'event', eventOptions);
  ga(`${DEVPORT_TRACKER_ALIAS}.send`, 'event', eventOptions);
};

const initialize = (widgetCategory) => {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', TM_TRACKER_ID, 'auto');
  ga('create', DEVPORT_TRACKER_ID, 'auto', DEVPORT_TRACKER_ALIAS);

  ga('send', 'pageview');
  ga(`${DEVPORT_TRACKER_ALIAS}.send`, 'event', widgetCategory, EVENT_NAME.LOAD);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  EVENT_CATEGORY,
  EVENT_NAME,
  CUSTOM_DIMENSIONS,
  initialize,
  sendEvent,
});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(3),
    getRawTag = __webpack_require__(25),
    objectToString = __webpack_require__(46);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(20),
    getValue = __webpack_require__(26);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_get__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CountdownClock__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_widgets_analytics__ = __webpack_require__(8);





class TicketmasterCountdownWidget {

	set config(attrs) { this.widgetConfig = this.loadConfig(attrs); }
	get config() { return this.widgetConfig; }

	set event(responce){ this.eventResponce = this.parseEvent(responce);}
	get event(){ return this.eventResponce;}

	get borderSize(){ return this.config.border || 0;}

	get eventUrl(){ return "http://www.ticketmaster.com/event/"; }

	set eventId(id){ this.config.id = id;}
	get eventId(){ return this.config.id;}

	get apiUrl(){ return 'https://app.ticketmaster.com/discovery-widgets/v2/events'; }

	get themeUrl() {
		return (window.location.host === 'developer.ticketmaster.com')
			? `https://developer.ticketmaster.com/products-and-docs/widgets/countdown/1.0.0/theme/`
			: `https://ticketmaster-api-staging.github.io/products-and-docs/widgets/countdown/1.0.0/theme/`;
	}

	get isFullWidth() { return this.config.proportion === 'fullwidth';}

	get portalUrl(){
		return (window.location.host === 'developer.ticketmaster.com')
			? `https://developer.ticketmaster.com/`
			: `https://ticketmaster-api-staging.github.io/`;
	}

	get logoUrl() { return "https://www.ticketmaster.com/"; }

	get legalNoticeUrl() { return "http://developer.ticketmaster.com/support/terms-of-use/"; }

	get widgetVersion() { return `${"1.0.-3761"}`; }

	get questionUrl() { return "http://developer.ticketmaster.com/support/faq/"; }

	get updateExceptions() { return ["width", "height", "border", "borderradius", "layout", "propotion", "seconds"]}

	get hideMessageDelay(){ return 5000; }

	get tmWidgetWhiteList(){ return ["2200504BAD4C848F", "00005044BDC83AE6", "1B005068DB60687F", "1B004F4DBEE45E47", "3A004F4ED7829D5E", "3A004F4ED1FC9B63", "1B004F4FF83289C5", "1B004F4FC0276888", "0E004F4F3B7DC543", "1D004F4F09C61861", "1600505AC9A972A1", "22004F4FD82795C6", "01005057AFF54574", "01005056FAD8793A", "3A004F4FB2453240", "22004F50D2149AC6", "01005059AD49507A", "01005062B4236D5D"]; }

	//get eventIdDefault(){ return '1Ad0ZfdGkMoCQHJ';}

	isConfigAttrExistAndNotEmpty(attr) {
		if( !this.config.hasOwnProperty(attr) || this.config[attr] === "undefined"){
			return false;
		}else if( this.config[attr] === ""){
			return false;
		}
		return true;
	}

	get eventReqAttrs(){
		let attrs = {},
			params = [
				{
					attr: 'tmapikey',
					verboseName: 'apikey'
				},
        {
          attr: 'id',
          verboseName: 'id'
        }
			];

		for(let i in params){
			let item = params[i];
			if(this.isConfigAttrExistAndNotEmpty(item.attr))
				attrs[item.verboseName] = this.config[item.attr];
		}

		return attrs;
	}

	constructor(root) {
		this.widgetRoot = root;

		this.eventsRootContainer = document.createElement("div");
		this.eventsRootContainer.classList.add("events-root-container");
		this.widgetRoot.appendChild(this.eventsRootContainer);

		this.eventsRoot = document.createElement("ul");
		this.eventsRoot.classList.add("events-root");
		this.eventsRootContainer.appendChild(this.eventsRoot);

		this.config = this.widgetRoot.attributes;
		this.eventId = this.config.id;

		if(this.config.theme !== null && !document.getElementById(`widget-theme-${this.config.theme}`)){
			this.makeRequest( this.styleLoadingHandler, this.themeUrl + this.config.theme + ".css" );
		}

		this.widgetRoot.style.height = `${this.config.height}px`;
		this.widgetRoot.style.width  = `${this.config.width}px`;

		this.eventsRootContainer.style.height = `${this.config.height}px`;
		this.eventsRootContainer.style.width  = `${this.config.width}px`;
		this.eventsRootContainer.style.borderRadius = `${this.config.borderradius}px`;
		this.eventsRootContainer.style.borderWidth = `${this.borderSize}px`;

		this.initBuyBtn();

		this.AdditionalElements();

		this.initMessage();

		this.buildCountdown();

		if(this.apiUrl){
			this.makeRequest( this.eventsLoadingHandler, this.apiUrl, this.eventReqAttrs );
		}else{
			this.showMessage("Please enter event ID.", true, null );
		}

		this.embedUniversePlugin();

		this.countDownWrapper.classList.add("events-count-down");

		this.countdownClock = new __WEBPACK_IMPORTED_MODULE_1__CountdownClock__["default"]({
			onChange: this.onCountdownChange.bind(this)
		});

		this.toggleSecondsVisibility();

		if (this.isFullWidth) { this.initFullWidth(); }

    __WEBPACK_IMPORTED_MODULE_2__helpers_widgets_analytics__["default"].sendEvent({
      eventCategory: __WEBPACK_IMPORTED_MODULE_2__helpers_widgets_analytics__["default"].EVENT_CATEGORY.COUNTDOWN_WIDGET,
      eventAction: __WEBPACK_IMPORTED_MODULE_2__helpers_widgets_analytics__["default"].EVENT_NAME.RENDERED,
    });
	}

	getNormalizedDateValue(val){
		return (val < 0 || val > 9 ? "" : "0") + val
	}

	toggleSecondsVisibility(){
		if(this.countDownMonth.innerHTML > 0){
			this.countDownWrapper.classList.add("hide-seconds");
			this.countDownWrapper.classList.remove("hide-days");
			this.countDownWrapper.classList.remove("hide-month");//Removing a class that does not exist, does NOT throw an error
		}else if(this.countDownDays.innerHTML <= 0){
			this.countDownWrapper.classList.add("hide-month");
			this.countDownWrapper.classList.add("hide-days");
			this.countDownWrapper.classList.remove("hide-seconds");
		}else {
			this.countDownWrapper.classList.add("hide-month");
			this.countDownWrapper.classList.remove("hide-days");
			this.countDownWrapper.classList.remove("hide-seconds");
		}
	}

	showStatusMessage(data){
		let me = this;
		if(this.event.date && this.event.date.dateTime){
			chenHeaderEvent(this.event.date);
		}

		function chenHeaderEvent(eventT){
			let now = new Date(),
				msecsNow = Date.parse(now),
				eventDateStart = new Date(eventT.dateTime),
				msecsStart = Date.parse(eventDateStart),
				eventDateEnd = new Date(eventT.dateTimeEnd),
				msecsEnd = Date.parse(eventDateEnd);

			if (msecsNow > msecsEnd || isNaN(msecsEnd)) {
				me.showMessage(`This event has taken place`, false , "event-message-started");
			} else if (msecsStart < msecsNow < msecsEnd) {
				me.showMessage(`Event is in progress`, false , "event-message-started");
			}
		}
	}

	onCountdownChange(data){
		let timeLeft = this.getNormalizedDateValue(data.total),
			now = Date.parse( new Date() );

		/*toggle CountDown-Box Visibility*/
		if(timeLeft <= 0 || now < timeLeft){
			this.countDownWrapper.classList.add("hide-countDownBox");
			if(this.eventId && this.event){
				this.showStatusMessage(data);
				return false; //exit if event has taken place
			}
		}else this.countDownWrapper.classList.remove("hide-countDownBox");

		if(data.monthLeft > 99){
			this.showMessage(`This event starts in more than ${data.monthLeft} month, ${data.days} days, ${data.hours} hours`, false , "event-message-started");
			this.countDownWrapper.classList.add("hide-countDownBox");
			return false;
		}

		this.countDownMonth.innerHTML = this.getNormalizedDateValue(data.monthLeft);
		this.countDownDays.innerHTML = this.getNormalizedDateValue(data.days);
		this.countDownHours.innerHTML = this.getNormalizedDateValue(data.hours);
		this.countDownMinute.innerHTML = this.getNormalizedDateValue(data.minutes);
		this.countDownSecond.innerHTML = this.getNormalizedDateValue(data.seconds);

		this.toggleSecondsVisibility();

	}

	buildCountdown(){
		this.countDownWrapper = document.createElement("div");
		this.countDownWrapper.classList.add("events-count-down");
		this.countDownMonth = document.createElement("span");
		this.countDownDays = document.createElement("span");
		this.countDownHours = document.createElement("span");
		this.countDownMinute = document.createElement("span");
		this.countDownSecond = document.createElement("span");

		this.countDownMonth.innerHTML = '00';
		this.countDownDays.innerHTML = '00';
		this.countDownHours.innerHTML = '00';
		this.countDownMinute.innerHTML = '00';
		this.countDownSecond.innerHTML = '00';

		this.countDownMonth.classList.add("events-count-down__month");
		this.countDownDays.classList.add("events-count-down__day");
		this.countDownHours.classList.add("events-count-down__hour");
		this.countDownMinute.classList.add("events-count-down__minute");
		this.countDownSecond.classList.add("events-count-down__second");

		this.countDownWrapper.appendChild(this.countDownMonth);
		this.countDownWrapper.appendChild(this.countDownDays);
		this.countDownWrapper.appendChild(this.countDownHours);
		this.countDownWrapper.appendChild(this.countDownMinute);
		this.countDownWrapper.appendChild(this.countDownSecond);

		this.eventsRootContainer.appendChild(this.countDownWrapper);
	}

	initBuyBtn(){
		this.buyBtn = document.createElement("a");
		this.buyBtn.appendChild(document.createTextNode('BUY NOW'));
		this.buyBtn.classList.add("event-buy-btn");
		this.buyBtn.target = '_blank';
		this.buyBtn.href = '';
		this.buyBtn.addEventListener('click', (e) => {
			e.preventDefault();
      ga('send', 'event', 'CountdownClickBuyButton', 'click');
      ga('tmOpenPlatform.send', 'event', 'CountdownWidget', 'buyButtonClick');
		});
		this.eventsRootContainer.appendChild(this.buyBtn);
	}

	updateTransition(url) {
		var el = this.eventsRootContainer.querySelector(".event-logo.centered-logo");
		if(url !=='') {
			if(el){
				el.classList.add("right-logo");
				el.classList.remove("centered-logo");
			}else return;
		}
		else{
			el = this.eventsRootContainer.querySelector(".event-logo.right-logo");
			if(el){
				el.classList.remove("right-logo");
				el.classList.add("centered-logo");
			}
		}
	}

	setBuyBtnUrl(){
		if(this.buyBtn){
			let event = this.event,
				url = '';
			if(event){
				if(event.url){
					if(this.isUniversePluginInitialized && this.isUniverseUrl(event.url)) {
						url = event.url;
					}
					this.updateTransition(url);
				}
			}
			this.buyBtn.href = url;
		}
	}

	isUniverseUrl(url){
		return (url.match(/universe.com/g) || url.match(/uniiverse.com/g));
	}

	embedUniversePlugin(){
		let id = 'id_universe_widget';
		if( !document.getElementById(id) ){
			let script = document.createElement('script');
			script.setAttribute('src', 'https://www.universe.com/embed.js');
			script.setAttribute('type', 'text/javascript');
			script.setAttribute('charset', 'UTF-8');
			script.setAttribute('id', id);
			(document.head || document.getElementsByTagName('head')[0]).appendChild(script);
		}
		this.isUniversePluginInitialized = true;
	}

	// Message
	initMessage(){
		this.messageDialog = document.createElement('div');
		this.messageDialog.classList.add("event-message");
		this.messageContent = document.createElement('div');
		this.messageContent.classList.add("event-message__content");

		/*let messageClose = document.createElement('div');
    messageClose.classList.add("event-message__btn");
    messageClose.addEventListener("click", ()=> {
      this.hideMessage();
    });*/

		this.messageDialog.appendChild(this.messageContent);
		/*this.messageDialog.appendChild(messageClose);*/
		this.eventsRootContainer.appendChild(this.messageDialog);
	}

	showMessage(message, hideMessageWithoutDelay , /*string togleClassName*/className ){
		if(message.length){
			this.hideMessageWithoutDelay = hideMessageWithoutDelay;
			this.messageContent.innerHTML = message;
			this.messageDialog.className = "";
			this.messageDialog.classList.add("event-message");
			this.messageDialog.classList.add("event-message-visible");
			// this.messageDialog.classList.remove("event-message-started");
		}

		if( className ){
			this.messageDialog.classList.add(className);
		}else {
			this.messageDialog.classList.add("event-message-visible");
			this.messageDialog.classList.remove(className);
		}

		className = null;

	}

	hideMessage(){
		if(this.messageTimeout) clearTimeout(this.messageTimeout); // Clear timeout and hide message immediately.
		this.messageDialog.classList.remove("event-message-visible");
	}
	// End message

	AdditionalElements(){
		var legalNoticeContent = document.createTextNode('Legal Notice'),
			legalNotice = document.createElement("a");
		legalNotice.appendChild(legalNoticeContent);
		legalNotice.classList.add("legal-notice");
		legalNotice.target = '_blank';
		legalNotice.href = this.legalNoticeUrl;
		this.widgetRoot.appendChild(legalNotice);

		var logo = document.createElement('a');
		logo.classList.add("event-logo","centered-logo");
		logo.target = '_blank';
		logo.href = this.logoUrl;
		logo.innerHTML = 'Powered by ';

		var logoBox = document.createElement('div');
		logoBox.classList.add("event-logo-box");
		logoBox.appendChild(logo);
		this.eventsRootContainer.appendChild(logoBox);

		let question = document.createElement('span'),
			toolTip = document.createElement('div'),
			tooltipHtml = `
				<div class="tooltip-inner"> 
					<a href="${this.questionUrl}" target = "_blank" >About widget</a>
					<div class="place">version: <b>${this.widgetVersion}</b></div>
				</div>`;
		question.classList.add("event-question");
		question.addEventListener('click', toolTipHandler);
		toolTip.classList.add("tooltip-version");
		toolTip.classList.add("left");
		toolTip.innerHTML = tooltipHtml;
		this.eventsRootContainer.appendChild(question);
		this.eventsRootContainer.appendChild(toolTip);

		function toolTipHandler(e) {
			e.preventDefault();
			e.target.nextSibling.classList.toggle('show-tip');
		}
	}

	formatDate(date) {
		var result = '';
		if(!date.day) return result; // Day is required

		var MONTH_NAMES = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
			DAY_NAMES = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
			dayArray = date.day.split('-'),
			d = parseInt(dayArray[2]),
			M = parseInt(dayArray[1]);

		// var E = new Date(date.day).getDay();
		var E = new Date(+date.day.split('-')[0],(+date.day.split('-')[1])-1,+date.day.split('-')[2]).getDay();
		result = DAY_NAMES[E] + ', ' + MONTH_NAMES[M - 1] + ' ' + d + ', ' + dayArray[0];

		if(!date.time) return result;

		var timeArray = date.time.split(':'),
			H = parseInt(timeArray[0]),
			m = timeArray[1],
			a = "AM";

		if (H > 11) a = "PM";
		if (H === 0) {
			H = 12;
		} else if (H > 12) {
			H = H - 12;
		}

		return result + ' ' + this.getNormalizedDateValue(H) + ':' + m + ' ' + a;
	}

	clearEvents(){
		this.eventsRoot.innerHTML = "";
	}

	clear(){
		var modificatorList = this.widgetRoot.getElementsByClassName('modificator');
		while (modificatorList.length) {
			let el = modificatorList[0],
				parent = el.parentNode;
			parent.removeChild(el);
		}
		this.clearEvents();
	}

	update(isFullWidthTheme) {

		let oldTheme = this.config.constructor();
		for (let attr in this.config) {
			if (this.config.hasOwnProperty(attr)) oldTheme[attr] = this.config[attr];
		}

		this.config = this.widgetRoot.attributes;
		this.widgetRoot.style.height = `${this.config.height}px`;
		this.widgetRoot.style.width  = `${this.config.width}px`;
		this.eventsRootContainer.style.height = `${this.config.height}px`;
		this.eventsRootContainer.style.width  = `${this.config.width}px`;
		this.eventsRootContainer.style.borderRadius = `${this.config.borderradius}px`;
		this.eventsRootContainer.style.borderWidth = `${this.borderSize}px`;



		if(this.needToUpdate(this.config, oldTheme, this.updateExceptions) || isFullWidthTheme){
			this.clear();

			if(this.config.theme !== null){
				//set new styles
				this.makeRequest( this.styleLoadingHandler, this.themeUrl + this.config.theme + ".css" );
			}

			if(this.widgetConfig.theme !== 'simple_countdown') {
				let heightStatic = '700px';
				//draw inline style
				//border
				this.eventsRootContainer.style.borderRadius = `${this.config.borderradius}px`;
				this.eventsRootContainer.style.borderWidth = `${this.borderSize}px`;

				//set width
				this.widgetRoot.style.width = `100%`;
				this.widgetRoot.style.height = heightStatic;
				this.widgetRoot.style.display = `block`;
				this.eventsRootContainer.style.width  = `100%`;
				this.eventsRootContainer.style.height = heightStatic;
				this.widgetConfig.width = `100%`;
			}

			/*if( this.themeModificators.hasOwnProperty( this.widgetConfig.theme ) ) {
        this.themeModificators[ this.widgetConfig.theme ]();
      }*/

			if(this.apiUrl && this.eventId){
				this.makeRequest( this.eventsLoadingHandler, this.apiUrl, this.eventReqAttrs );
			}else{
				// this.showMessage("No results were found.", true);
				this.showMessage("No events were found", true, 'cactus');
				this.countdownClock.update(null);
			}
		}else{
			let events = this.widgetRoot.getElementsByClassName("event-wrapper");
			for(let i in events){
				if(events.hasOwnProperty(i) && events[i].style !== undefined){
					events[i].style.width = `${this.config.width - this.borderSize * 2}px`;
					events[i].style.height = `${this.config.height - this.borderSize * 2}px`;
				}
			}
		}

		if (this.isFullWidth) { this.initFullWidth(); }
		//this.toggleSecondsVisibility();
	}

	needToUpdate(newTheme, oldTheme, forCheck = []){
		return Object.keys(newTheme).map(function(key){
			if(forCheck.indexOf(key) > -1) return true;
			//console.warn([key, newTheme[key], oldTheme[key], newTheme[key] === oldTheme[key]])
			return newTheme[key] === oldTheme[key] ;
		}).indexOf(false) > -1
	}

	loadConfig(NamedNodeMap){
		var config = {};
		Object.keys(NamedNodeMap).map(function(value){
			if( typeof(NamedNodeMap[value].name) !== "undefined" && NamedNodeMap[value].name.indexOf("w-") !== -1){
				config[ NamedNodeMap[value].name.replace(/w-/g, "").replace(/-/g, "") ] = NamedNodeMap[value].value;
			}
		});
		return config;
	}

	styleLoadingHandler(){
		if (this && this.readyState == XMLHttpRequest.DONE ) {
			if(this.status == 200){
				var style = document.createElement("style");
				style.setAttribute("type","text/css");
				style.setAttribute("id",`widget-theme-${this.widget.config.theme}`);
				style.textContent = this.responseText;
				document.getElementsByTagName("head")[0].appendChild(style);
			}
			else {
				console.info("theme wasn't loaded");
			}
		}
	}

	onEventLoadError(status,loadOnce){
		this.event = false;
		this.showMessage("No results were found.", true, null);
		console.log(`There was an error status - ${status}`);
		if(!loadOnce) {
			this.changeDefaultId();
		}
	}

	eventsLoadingHandler(){
		let widget = this.widget;
		widget.clearEvents(); // Additional clearing after each loading
		if (this && this.readyState == XMLHttpRequest.DONE ) {
			if(this.status == 200){
				widget.event = __WEBPACK_IMPORTED_MODULE_0_lodash_get___default()(JSON.parse(this.responseText), '_embedded.events[0]');
				if(widget.event){
					widget.publishEvent(widget.event);
					widget.hideMessage();
				}
			}
			else if(this.status == 400) {
				widget.onEventLoadError.call(widget, this.status);
			}
			else {
				widget.onEventLoadError.call(widget, this.status);
			}
			// http://js2coffee.thomaskalka.de/ - widget.event?.date?.dateTime
			let _ref, _ref2;
			widget.countdownClock.update((_ref = widget.event) != null ? (_ref2 = _ref.date) != null ? _ref2.dateTime || _ref2.day : void 0 : void 0);
		}
		widget.setBuyBtnUrl();
	}

	publishEvent(event, parentNode){
		parentNode = parentNode || this.eventsRoot;
		let DOMElement = this.createDOMItem(event);
		parentNode.appendChild(DOMElement);
	}

	getImageForEvent(images){
		var width = this.config.width,
			height = this.config.height;

		if(width === '100%') { width = this.widgetRoot.offsetWidth }
		images.sort(function(a,b) {
			if (a.width < b.width)
				return -1;
			else if (a.width > b.width)
				return 1;
			else
				return 0;
		});

		var myImg = "";
		images.forEach(function(element){
			if(element.width >= width && element.height >= height && !myImg){
				myImg = element.url;
			}
		});
		if(myImg === "") {
			myImg = images[images.length-1].url;
		}
		return myImg;
	}

	parseEvent(eventSet){
		if(!eventSet.id){
			return false;
		}

		let currentEvent = {};

		currentEvent.id = eventSet.id;
		currentEvent.url = eventSet.url;
		currentEvent.name = eventSet.name;

		currentEvent.date = {
			day: eventSet.dates.start.localDate,
			time: eventSet.dates.start.localTime,
			dateTime: eventSet.dates.start.dateTime
		};

		if(eventSet.dates.end){
			(eventSet.dates.end.localDate) ? currentEvent.date.dayEnd = eventSet.dates.end.localDate : '';
			(eventSet.dates.end.localTime) ? currentEvent.date.timeEnd = eventSet.dates.end.localTime : '';
			(eventSet.dates.end.dateTime) ? currentEvent.date.dateTimeEnd = eventSet.dates.end.dateTime : '';
		}

		if(eventSet.hasOwnProperty('_embedded') && eventSet._embedded.hasOwnProperty('venues')){
			let venue = eventSet._embedded.venues[0];
			if(venue){
				if(venue.address)
					currentEvent.address = venue.address;

				if(venue.name){
					if(!currentEvent.address) currentEvent.address = {};
					currentEvent.address.name = venue.name;
				}
			}
		}

		currentEvent.img = this.getImageForEvent(eventSet.images);
		return currentEvent;
	}

	changeDefaultId(){
		Date.prototype.addDays = function(days) {
			this.setDate(this.getDate() + parseInt(days));
			return this;
		};
		let zipVegas='89109',
			url=`https://app.ticketmaster.com/discovery-widgets/v2/events.json`,
			newAttr = Object.assign({},this.eventReqAttrs),
			d = new Date(0),
			convertedNewStartDate;

		d.setUTCSeconds(Math.round(new Date().addDays(30).getTime())/1000);
		convertedNewStartDate = d.toJSON().slice(0,17)+'00Z';
		if(d.toJSON().length <= 20) convertedNewStartDate = d.toJSON();
		newAttr.startDateTime = convertedNewStartDate;
		newAttr.zipcode = zipVegas;

		this.makeRequest(this.changeDefaultIdHandler, url, newAttr );
	}

	changeDefaultIdHandler(){
		function getValidId(events){
			let id = '',
				newStartDate = new Date().addDays(30);

			for(let ii=0;ii<events.length;ii++){
				if ( Math.round(new Date(events[ii].dates.start.dateTime).getTime()/1000) >= Math.round(new Date(newStartDate).getTime()/1000) ){
					id = events[ii].id;
					break;
				}
			}
			return id;
		}
		function setEventId(){
			return ()=> this.makeRequest( this.eventsLoadingHandler, this.apiUrl, this.eventReqAttrs );
		}
		let widget = this.widget;
		let loadOnce = false;
		widget.clearEvents(); // Additional clearing after each loading

		if (this && this.readyState == XMLHttpRequest.DONE ) {
			if(this.status == 200){
				let eventsWrap = JSON.parse(this.responseText);
				if(eventsWrap){
					let events = eventsWrap['_embedded']['events'],
						newId = getValidId(events);
					widget.eventId = newId;
					if(document.getElementById('w-id')){
						document.getElementById('w-id').value = widget.eventId;
					}
					setEventId.call(widget,newId)();
				}
			}
			else if(this.status == 400) {
				loadOnce = true;
				widget.onEventLoadError.call(widget, this.status,loadOnce);
			}
			else {
				console.log('this error',this);
				loadOnce = true;
				widget.onEventLoadError.call(widget, this.status,loadOnce);
			}
			// http://js2coffee.thomaskalka.de/ - widget.event?.date?.dateTime
			let _ref, _ref2;
			widget.countdownClock.update((_ref = widget.event) != null ? (_ref2 = _ref.date) != null ? _ref2.dateTime || _ref2.day : void 0 : void 0);
		}
		widget.setBuyBtnUrl();

	}

	makeRequest(handler, url=this.apiUrl, attrs={}, method="GET"){
		attrs = Object.keys(attrs).map(function(key){
			return `${key}=${attrs[key]}`;
		}).join("&");

		url = [url,attrs].join("?");

		this.xmlHTTP = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
		if(method == "POST") {
			this.xmlHTTP.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		}
		this.xmlHTTP.widget = this;
		this.xmlHTTP.onreadystatechange = handler;
		this.xmlHTTP.open(method, url, true);
		this.xmlHTTP.send();
	}

	initPretendedLink(el, url, isBlank){
		if(el && url){
			el.setAttribute('data-url', url);
			el.classList.add("event-pretended-link");
			el.addEventListener('click', function(){
				let url = this.getAttribute('data-url');
				if(url){
					let win = window.open(url, (isBlank ? '_blank' : '_self'));
					win.focus();
				}
			});
		}
		return el;
	}

	initFullWidth(){
		let heightStatic = 700;
		this.config.width = `100%`;
		this.config.height = heightStatic;
		this.widgetRoot.style.width = `100%`;
		this.widgetRoot.style.height = heightStatic + 'px';
		this.widgetRoot.style.display = `block`;
		this.eventsRootContainer.style.width  = `100%`;
		this.eventsRootContainer.style.height = `${this.widgetContentHeight}px`;
	}

	createDOMItem(itemConfig){
		var medWrapper = document.createElement("div");
		medWrapper.classList.add("event-content-wraper");

		var event = document.createElement("li");
		event.classList.add("event-wrapper");
		event.style.height = `${this.config.height - this.borderSize * 2}px`;
		event.style.width  = (!this.isFullWidth) ? `${this.config.width - this.borderSize * 2}px` : `100%`;

		var image = document.createElement("span");
		image.classList.add("bg-cover");
		image.style.backgroundImage = `url('${itemConfig.img}')`;
		event.appendChild(image);

		var nameContent = document.createTextNode(itemConfig.name),
			name = document.createElement("span");
		name.classList.add("event-name");
		name.appendChild(nameContent);
		this.initPretendedLink(name, itemConfig.url, true);
		name.addEventListener('click', function(e) {
      e.preventDefault();
      ga('send', 'event', 'CountDownClickeventName', 'click', itemConfig.url);
      ga('tmOpenPlatform.send', 'event', 'CountdownWidget', 'eventNameClick', itemConfig.url);
    })
		medWrapper.appendChild(name);

		var dateTimeContent = document.createTextNode(this.formatDate(itemConfig.date)),
			dateTime = document.createElement("span");
		dateTime.classList.add("event-date");
		dateTime.appendChild(dateTimeContent);

		var dateWraper = document.createElement("span");
		dateWraper.classList.add("event-date-wraper");
		dateWraper.appendChild(dateTime);
		medWrapper.appendChild(dateWraper);

		if(itemConfig.hasOwnProperty("address")){
			var addressWrapper = document.createElement("span");
			addressWrapper.classList.add("address-wrapper");

			if( itemConfig.address.hasOwnProperty("name") ){
				var addressNameText = document.createTextNode(itemConfig.address.name),
					addressName =  document.createElement("span");
				addressName.classList.add("event-address");
				addressName.classList.add("event-address-name");
				addressName.appendChild(addressNameText);
				addressWrapper.appendChild(addressName);
			}

			if( itemConfig.address.hasOwnProperty("line1") ){
				var addressOneText = document.createTextNode(itemConfig.address.line1),
					addressOne =  document.createElement("span");
				addressOne.classList.add("event-address");
				addressOne.appendChild(addressOneText);
				addressWrapper.appendChild(addressOne);
			}

			if( itemConfig.address.hasOwnProperty("line2") ){
				var addressTwoText = document.createTextNode(itemConfig.address.line2),
					addressTwo =  document.createElement("span");
				addressTwo.classList.add("event-address");
				addressTwo.appendChild(addressTwoText);
				addressWrapper.appendChild(addressTwo);
			}

			medWrapper.appendChild(addressWrapper);
		}

		if(itemConfig.hasOwnProperty("categories")) {
			var categoriesWrapper = document.createElement("span");
			categoriesWrapper.classList.add("category-wrapper");

			itemConfig.categories.forEach(function (element) {
				var categoryText = document.createTextNode(element),
					category = document.createElement("span");
				category.classList.add("event-category");
				category.appendChild(categoryText);
				categoriesWrapper.appendChild(category);
			});
			medWrapper.appendChild(categoriesWrapper);
		}

		event.appendChild(medWrapper);

		return event;
	}

	/*
   * Config block
   */
	/*
  decConfig(config){
    return JSON.parse(window.atob(config));
  }
  encConfig(config){
    return window.btoa(config);
  }
  */

}
/* harmony export (immutable) */ __webpack_exports__["default"] = TicketmasterCountdownWidget;



/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CountdownClock = __webpack_require__(7);

var _CountdownClock2 = _interopRequireDefault(_CountdownClock);

var _TicketmasterCountdownWidget = __webpack_require__(12);

var _TicketmasterCountdownWidget2 = _interopRequireDefault(_TicketmasterCountdownWidget);

var _widgetsAnalytics = __webpack_require__(8);

var _widgetsAnalytics2 = _interopRequireDefault(_widgetsAnalytics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_widgetsAnalytics2.default.initialize(_widgetsAnalytics2.default.EVENT_CATEGORY.COUNTDOWN_WIDGET);

var widgetsCountdown = [];
(function () {
  var widgetContainers = document.querySelectorAll("div[w-type='countdown']");
  for (var i = 0; i < widgetContainers.length; ++i) {
    widgetsCountdown.push(new _TicketmasterCountdownWidget2.default(widgetContainers[i]));
  }
})();

if (true) {
  module.exports = { CountdownClock: _CountdownClock2.default, TicketmasterCountdownWidget: _TicketmasterCountdownWidget2.default, widgetsCountdown: widgetsCountdown };
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(27),
    hashDelete = __webpack_require__(28),
    hashGet = __webpack_require__(29),
    hashHas = __webpack_require__(30),
    hashSet = __webpack_require__(31);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(35),
    listCacheDelete = __webpack_require__(36),
    listCacheGet = __webpack_require__(37),
    listCacheHas = __webpack_require__(38),
    listCacheSet = __webpack_require__(39);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(10),
    root = __webpack_require__(4);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(40),
    mapCacheDelete = __webpack_require__(41),
    mapCacheGet = __webpack_require__(42),
    mapCacheHas = __webpack_require__(43),
    mapCacheSet = __webpack_require__(44);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(22),
    toKey = __webpack_require__(48);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(52),
    isMasked = __webpack_require__(34),
    isObject = __webpack_require__(11),
    toSource = __webpack_require__(49);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(3),
    arrayMap = __webpack_require__(18),
    isArray = __webpack_require__(5),
    isSymbol = __webpack_require__(6);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(5),
    isKey = __webpack_require__(32),
    stringToPath = __webpack_require__(47),
    toString = __webpack_require__(55);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(4);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(56)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(3);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(2);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(2);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(2);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(2);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(5),
    isSymbol = __webpack_require__(6);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(23);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(0);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(0);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(0);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(0);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(14),
    ListCache = __webpack_require__(15),
    Map = __webpack_require__(16);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(1);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(1);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(1);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(1);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(54);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(45);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(6);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(19);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(9),
    isObject = __webpack_require__(11);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 53 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(17);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(21);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
//# sourceMappingURL=main-widget.js.map