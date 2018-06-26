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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
};

const sendEvent = (widgetCategory, widgetEvent) => {
  ga('send', 'event', widgetCategory, widgetEvent);
  ga(`${DEVPORT_TRACKER_ALIAS}.send`, 'event', widgetCategory, widgetEvent);
};

const initialize = (widgetName) => {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', TM_TRACKER_ID, 'auto');
  ga('create', DEVPORT_TRACKER_ID, 'auto', DEVPORT_TRACKER_ALIAS);

  ga('send', 'pageview');
  ga(`${DEVPORT_TRACKER_ALIAS}.send`, 'event', widgetName, EVENT_NAME.LOAD);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  EVENT_CATEGORY,
  EVENT_NAME,
  initialize,
  sendEvent,
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CountdownClock__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_widgets_analytics__ = __webpack_require__(1);



class TicketmasterCountdownWidget {

	set config(attrs) { this.widgetConfig = this.loadConfig(attrs); }
	get config() { return this.widgetConfig; }

	set event(responce){ this.eventResponce = this.parseEvent(responce);}
	get event(){ return this.eventResponce;}

	get borderSize(){ return this.config.border || 0;}

	get eventUrl(){ return "http://www.ticketmaster.com/event/"; }

	set eventId(id){ this.config.id = id;}
	get eventId(){ return this.config.id;}

	get apiUrl(){ return this.config.id ? `https://app.ticketmaster.com/discovery-widgets/v2/events/${this.config.id}.json` : `https://app.ticketmaster.com/discovery-widgets/v2/events/${this.eventId}.json`; }

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

	get widgetVersion() { return `${"1.0.-4750"}`; }

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

		this.countdownClock = new __WEBPACK_IMPORTED_MODULE_0__CountdownClock__["default"]({
			onChange: this.onCountdownChange.bind(this)
		});

		this.toggleSecondsVisibility();

		if (this.isFullWidth) { this.initFullWidth(); }

    __WEBPACK_IMPORTED_MODULE_1__helpers_widgets_analytics__["default"].sendEvent(__WEBPACK_IMPORTED_MODULE_1__helpers_widgets_analytics__["default"].EVENT_CATEGORY.COUNTDOWN_WIDGET, __WEBPACK_IMPORTED_MODULE_1__helpers_widgets_analytics__["default"].EVENT_NAME.RENDERED);
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
      ga('tmOpenPlatform.send', 'event', 'MapWidget', 'buyButtonClick');
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
				widget.event = JSON.parse(this.responseText);
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
      ga('tmOpenPlatform.send', 'event', 'MapWidget', 'eventNameClick', itemConfig.url);
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CountdownClock = __webpack_require__(0);

var _CountdownClock2 = _interopRequireDefault(_CountdownClock);

var _TicketmasterCountdownWidget = __webpack_require__(2);

var _TicketmasterCountdownWidget2 = _interopRequireDefault(_TicketmasterCountdownWidget);

var _widgetsAnalytics = __webpack_require__(1);

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

/***/ })
/******/ ]);
//# sourceMappingURL=main-widget.js.map
