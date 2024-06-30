var code2markdown;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/tokenizr/lib/tokenizr.js":
/*!***********************************************!*\
  !*** ./node_modules/tokenizr/lib/tokenizr.js ***!
  \***********************************************/
/***/ ((module) => {

(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c=undefined;if(!f&&c)return require(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u=undefined,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
"use strict";function _callSuper(t,e,n){return e=_getPrototypeOf(e),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(e,n||[],_getPrototypeOf(t).constructor):e.apply(t,n))}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _wrapNativeSuper(t){var e="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(n,t)})(t)}function _construct(t,e,n){if(_isNativeReflectConstruct())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var i=new(t.bind.apply(t,r));return n&&_setPrototypeOf(i,n.prototype),i}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(_isNativeReflectConstruct=function(){return!!t})()}function _isNativeFunction(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,_toPropertyKey(r.key),r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"==_typeof(e)?e:String(e)}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=_typeof(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var excerpt=function(t,e){var n=t.length,r=e-20;r<0&&(r=0);var i=e+20;i>n&&(i=n);var o=function(t){return t.charCodeAt(0).toString(16).toUpperCase()},s=function(t,e,n){return t.substr(e,n).replace(/\\/g,"\\\\").replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(t){return"\\x0"+o(t)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(t){return"\\x"+o(t)}).replace(/[\u0100-\u0FFF]/g,function(t){return"\\u0"+o(t)}).replace(/[\u1000-\uFFFF]/g,function(t){return"\\u"+o(t)})};return{prologTrunc:r>0,prologText:s(t,r,e-r),tokenText:s(t,e,1),epilogText:s(t,e+1,i-(e+1)),epilogTrunc:i<n}},Token=function(){function t(e,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;_classCallCheck(this,t),this.type=e,this.value=n,this.text=r,this.pos=i,this.line=o,this.column=s}return _createClass(t,[{key:"toString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(t,e){return e};return"".concat(t("type",this.type)," ")+"(value: ".concat(t("value",JSON.stringify(this.value)),", ")+"text: ".concat(t("text",JSON.stringify(this.text)),", ")+"pos: ".concat(t("pos",this.pos),", ")+"line: ".concat(t("line",this.line),", ")+"column: ".concat(t("column",this.column),")")}},{key:"isA",value:function(t,e){return t===this.type&&(2!==arguments.length||e===this.value)}}]),t}(),ParsingError=function(t){function e(t,n,r,i,o){var s;return _classCallCheck(this,e),(s=_callSuper(this,e,[t])).name="ParsingError",s.message=t,s.pos=n,s.line=r,s.column=i,s.input=o,s}return _inherits(e,_wrapNativeSuper(Error)),_createClass(e,[{key:"toString",value:function(){for(var t=excerpt(this.input,this.pos),e="line ".concat(this.line," (column ").concat(this.column,"): "),n="",r=0;r<e.length+t.prologText.length;r++)n+=" ";return"Parsing Error: "+this.message+"\n"+e+t.prologText+t.tokenText+t.epilogText+"\n"+n+"^"}}]),e}(),ActionContext=function(){function t(e){_classCallCheck(this,t),this._tokenizr=e,this._data={},this._repeat=!1,this._reject=!1,this._ignore=!1,this._match=null}return _createClass(t,[{key:"data",value:function(t,e){var n=this._data[t];return 2===arguments.length&&(this._data[t]=e),n}},{key:"info",value:function(){return{line:this._tokenizr._line,column:this._tokenizr._column,pos:this._tokenizr._pos,len:this._match[0].length}}},{key:"push",value:function(){var t;return(t=this._tokenizr).push.apply(t,arguments),this}},{key:"pop",value:function(){var t;return(t=this._tokenizr).pop.apply(t,arguments)}},{key:"state",value:function(){var t,e;return arguments.length>0?((e=this._tokenizr).state.apply(e,arguments),this):(t=this._tokenizr).state.apply(t,arguments)}},{key:"tag",value:function(){var t;return(t=this._tokenizr).tag.apply(t,arguments),this}},{key:"tagged",value:function(){var t;return(t=this._tokenizr).tagged.apply(t,arguments)}},{key:"untag",value:function(){var t;return(t=this._tokenizr).untag.apply(t,arguments),this}},{key:"repeat",value:function(){return this._tokenizr._log("    REPEAT"),this._repeat=!0,this}},{key:"reject",value:function(){return this._tokenizr._log("    REJECT"),this._reject=!0,this}},{key:"ignore",value:function(){return this._tokenizr._log("    IGNORE"),this._ignore=!0,this}},{key:"accept",value:function(t,e){return arguments.length<2&&(e=this._match[0]),this._tokenizr._log("    ACCEPT: type: ".concat(t,", value: ")+"".concat(JSON.stringify(e)," (").concat(_typeof(e),'), text: "').concat(this._match[0],'"')),this._tokenizr._pending.push(new Token(t,e,this._match[0],this._tokenizr._pos,this._tokenizr._line,this._tokenizr._column)),this}},{key:"stop",value:function(){return this._tokenizr._stopped=!0,this}}]),t}(),Tokenizr=function(){function t(){_classCallCheck(this,t),this._before=null,this._after=null,this._finish=null,this._rules=[],this._debug=!1,this.reset()}return _createClass(t,[{key:"reset",value:function(){return this._input="",this._len=0,this._eof=!1,this._pos=0,this._line=1,this._column=1,this._state=["default"],this._tag={},this._transaction=[],this._pending=[],this._stopped=!1,this._ctx=new ActionContext(this),this}},{key:"error",value:function(t){return new ParsingError(t,this._pos,this._line,this._column,this._input)}},{key:"debug",value:function(t){return this._debug=t,this}},{key:"_log",value:function(t){this._debug&&console.log("tokenizr: ".concat(t))}},{key:"input",value:function(t){if("string"!=typeof t)throw new Error('parameter "input" not a String');return this.reset(),this._input=t,this._len=t.length,this}},{key:"push",value:function(t){if(1!==arguments.length)throw new Error("invalid number of arguments");if("string"!=typeof t)throw new Error('parameter "state" not a String');return this._log("    STATE (PUSH): "+"old: <".concat(this._state[this._state.length-1],">, ")+"new: <".concat(t,">")),this._state.push(t),this}},{key:"pop",value:function(){if(0!==arguments.length)throw new Error("invalid number of arguments");if(this._state.length<2)throw new Error("no more custom states to pop");return this._log("    STATE (POP): "+"old: <".concat(this._state[this._state.length-1],">, ")+"new: <".concat(this._state[this._state.length-2],">")),this._state.pop()}},{key:"state",value:function(t){if(1===arguments.length){if("string"!=typeof t)throw new Error('parameter "state" not a String');return this._log("    STATE (SET): "+"old: <".concat(this._state[this._state.length-1],">, ")+"new: <".concat(t,">")),this._state[this._state.length-1]=t,this}if(0===arguments.length)return this._state[this._state.length-1];throw new Error("invalid number of arguments")}},{key:"tag",value:function(t){if(1!==arguments.length)throw new Error("invalid number of arguments");if("string"!=typeof t)throw new Error('parameter "tag" not a String');return this._log("    TAG (ADD): ".concat(t)),this._tag[t]=!0,this}},{key:"tagged",value:function(t){if(1!==arguments.length)throw new Error("invalid number of arguments");if("string"!=typeof t)throw new Error('parameter "tag" not a String');return!0===this._tag[t]}},{key:"untag",value:function(t){if(1!==arguments.length)throw new Error("invalid number of arguments");if("string"!=typeof t)throw new Error('parameter "tag" not a String');return this._log("    TAG (DEL): ".concat(t)),delete this._tag[t],this}},{key:"before",value:function(t){return this._before=t,this}},{key:"after",value:function(t){return this._after=t,this}},{key:"finish",value:function(t){return this._finish=t,this}},{key:"rule",value:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unknown";if(2===arguments.length&&"function"==typeof e){var i=[t,e];e=i[0],n=i[1],t="*"}else if(3===arguments.length&&"function"==typeof e){var o=[t,e,n];e=o[0],n=o[1],r=o[2],t="*"}if("string"!=typeof t)throw new Error('parameter "state" not a String');if(!("object"===_typeof(e)&&e instanceof RegExp))throw new Error('parameter "pattern" not a RegExp');if("function"!=typeof n)throw new Error('parameter "action" not a Function');if("string"!=typeof r)throw new Error('parameter "name" not a String');t=t.split(/\s*,\s*/g).map(function(t){var e=t.split(/\s+/g),n=e.filter(function(t){return null===t.match(/^#/)}),r=e.filter(function(t){return null!==t.match(/^#/)}).map(function(t){return t.replace(/^#/,"")});if(1!==n.length)throw new Error("exactly one state required");return{state:n[0],tags:r}});var s="g";try{"boolean"==typeof new RegExp("","y").sticky&&(s="y")}catch(t){}return"boolean"==typeof e.multiline&&e.multiline&&(s+="m"),"boolean"==typeof e.dotAll&&e.dotAll&&(s+="s"),"boolean"==typeof e.ignoreCase&&e.ignoreCase&&(s+="i"),"boolean"==typeof e.unicode&&e.unicode&&(s+="u"),e=new RegExp(e.source,s),this._log("rule: configure rule (state: ".concat(t,", pattern: ").concat(e.source,")")),this._rules.push({state:t,pattern:e,action:n,name:r}),this}},{key:"_progress",value:function(t,e){for(var n=this._line,r=this._column,i=this._input,o=t;o<e;o++){var s=i.charAt(o);"\r"===s?this._column=1:"\n"===s?(this._line++,this._column=1):"\t"===s?this._column+=8-this._column%8:this._column++}this._log("    PROGRESS: characters: ".concat(e-t,", ")+"from: <line ".concat(n,", column ").concat(r,">, ")+"to: <line ".concat(this._line,", column ").concat(this._column,">"))}},{key:"_tokenize",value:function(){var t=this,e=function(){t._eof||(null!==t._finish&&t._finish.call(t._ctx,t._ctx),t._eof=!0,t._pending.push(new Token("EOF","","",t._pos,t._line,t._column)))};if(!(this._stopped||this._pos>=this._len)){for(var n=!0;n;){if(n=!1,this._debug){var r=excerpt(this._input,this._pos),i=Object.keys(this._tag).map(function(t){return"#".concat(t)}).join(" ");this._log("INPUT: state: <".concat(this._state[this._state.length-1],">, tags: <").concat(i,">, text: ")+(r.prologTrunc?"...":'"')+"".concat(r.prologText,"<").concat(r.tokenText,">").concat(r.epilogText)+(r.epilogTrunc?"...":'"')+", at: <line ".concat(this._line,", column ").concat(this._column,">"))}for(var o=0;o<this._rules.length;o++){if(this._debug){var s=this._rules[o].state.map(function(t){var e=t.state;return t.tags.length>0&&(e+=" "+t.tags.map(function(t){return"#".concat(t)}).join(" ")),e}).join(", ");this._log("  RULE: state(s): <".concat(s,">, ")+"pattern: ".concat(this._rules[o].pattern.source))}var a=!1,c=this._rules[o].state.map(function(t){return t.state}),u=c.indexOf("*");if(u<0&&(u=c.indexOf(this._state[this._state.length-1])),u>=0){a=!0;var l=this._rules[o].state[u].tags;(l=l.filter(function(e){return!t._tag[e]})).length>0&&(a=!1)}if(a){this._rules[o].pattern.lastIndex=this._pos;var h=this._rules[o].pattern.exec(this._input);if(this._rules[o].pattern.lastIndex=this._pos,null!==(h=this._rules[o].pattern.exec(this._input))&&h.index===this._pos){if(this._debug&&this._log("    MATCHED: "+JSON.stringify(h)),this._ctx._match=h,this._ctx._repeat=!1,this._ctx._reject=!1,this._ctx._ignore=!1,null!==this._before&&this._before.call(this._ctx,this._ctx,h,this._rules[o]),this._rules[o].action.call(this._ctx,this._ctx,h),null!==this._after&&this._after.call(this._ctx,this._ctx,h,this._rules[o]),this._ctx._reject)continue;if(this._ctx._repeat){n=!0;break}if(this._ctx._ignore){if(this._progress(this._pos,this._rules[o].pattern.lastIndex),this._pos=this._rules[o].pattern.lastIndex,this._pos>=this._len)return void e();n=!0;break}if(this._pending.length>0)return this._progress(this._pos,this._rules[o].pattern.lastIndex),this._pos=this._rules[o].pattern.lastIndex,void(this._pos>=this._len&&e());throw new Error('action of pattern "'+this._rules[o].pattern.source+'" neither rejected nor accepted any token(s)')}}}}throw this.error("token not recognized")}e()}},{key:"token",value:function(){if(0===this._pending.length&&this._tokenize(),this._pending.length>0){var t=this._pending.shift();return this._transaction.length>0&&this._transaction[0].push(t),this._log("TOKEN: ".concat(t.toString())),t}return null}},{key:"tokens",value:function(){for(var t,e=[];null!==(t=this.token());)e.push(t);return e}},{key:"peek",value:function(t){if(void 0===t&&(t=0),t>=this._pending.length){0===this._pending.length&&this._tokenize();for(var e=0;e<t-this._pending.length;e++)this._tokenize()}if(t>=this._pending.length)throw new Error("not enough tokens available for peek operation");return this._log("PEEK: ".concat(this._pending[t].toString())),this._pending[t]}},{key:"skip",value:function(t){void 0===t&&(t=1);for(var e=0;e<this._pending.length+t;e++)this._tokenize();if(t>this._pending.length)throw new Error("not enough tokens available for skip operation");for(;t-- >0;)this.token();return this}},{key:"consume",value:function(t,e){for(var n=this,r=0;r<this._pending.length+1;r++)this._tokenize();if(0===this._pending.length)throw new Error("not enough tokens available for consume operation");var i=this.token();this._log("CONSUME: ".concat(i.toString()));var o=function(){throw new ParsingError("expected: <type: ".concat(t,", value: ").concat(JSON.stringify(e)," (").concat(_typeof(e),")>, ")+"found: <type: ".concat(i.type,", value: ").concat(JSON.stringify(i.value)," (").concat(_typeof(i.value),")>"),i.pos,i.line,i.column,n._input)};return 2!==arguments.length||i.isA(t,e)?i.isA(t)||o():o(JSON.stringify(e),_typeof(e)),i}},{key:"begin",value:function(){return this._log("BEGIN: level ".concat(this._transaction.length)),this._transaction.unshift([]),this}},{key:"depth",value:function(){if(0===this._transaction.length)throw new Error("cannot determine depth -- no active transaction");return this._transaction[0].length}},{key:"commit",value:function(){if(0===this._transaction.length)throw new Error("cannot commit transaction -- no active transaction");var t=this._transaction.shift();return this._transaction.length>0&&(this._transaction[0]=this._transaction[0].concat(t)),this._log("COMMIT: level ".concat(this._transaction.length)),this}},{key:"rollback",value:function(){if(0===this._transaction.length)throw new Error("cannot rollback transaction -- no active transaction");var t=this._transaction.shift();return this._pending=t.concat(this._pending),this._log("ROLLBACK: level ".concat(this._transaction.length)),this}},{key:"alternatives",value:function(){for(var t=null,e=[],n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];for(var o=0;o<r.length;o++)try{this.begin(),t=r[o].call(this),this.commit();break}catch(t){this._log("EXCEPTION: ".concat(t.toString())),e.push({ex:t,depth:this.depth()}),this.rollback();continue}if(null===t&&e.length>0)throw(e=e.sort(function(t,e){return t.depth-e.depth}))[0].ex;return t}}]),t}();Tokenizr.Token=Token,Tokenizr.ParsingError=ParsingError,Tokenizr.ActionContext=ActionContext,module.exports=Tokenizr;
},{}]},{},[1])(1)
});


/***/ }),

/***/ "./src/defaultResolvers.js":
/*!*********************************!*\
  !*** ./src/defaultResolvers.js ***!
  \*********************************/
/***/ ((module) => {


function emptyResolver(context, groups) {
    return '';
}

module.exports = {
    "EOF": emptyResolver,
}

/***/ }),

/***/ "./src/loadRules.js":
/*!**************************!*\
  !*** ./src/loadRules.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


function count_capture_groups(regex) {
    return (new RegExp(regex.toString() + '|')).exec('').length - 1;
}

module.exports.loadRules = (lexer, css_element) => {
    let resolvers = {};
    const files = __webpack_require__(/*! ../build/rules-lock.json */ "./build/rules-lock.json");
    for (const file of files) {
        const rule = __webpack_require__("./src/rules sync recursive ^\\.\\/.*$")("./" + file);
        if (rule.type === 'token') {
            lexer.rule(rule.rule, (ctx, match) => {
                const capture_groups = count_capture_groups(rule.rule);
                const captures = [];
                for (let i = 1; i <= capture_groups; i++) {
                    captures.push(match[i]);
                }
                ctx.accept(rule.resolver.name, captures);
            });
            resolvers[rule.resolver.name] = rule.resolver;

            if (rule.css) {
                css_element.innerHTML += rule.css;
            }
        }
        else if (rule.type === 'ignore') {
            lexer.rule(rule.rule, (ctx, match) => {
                ctx.ignore();
            });
        }
    }

    // load default resolvers
    const defaultResolvers = __webpack_require__(/*! ../src/defaultResolvers */ "./src/defaultResolvers.js");
    return {...defaultResolvers, ...resolvers};
}

/***/ }),

/***/ "./src/resolveTokens.js":
/*!******************************!*\
  !*** ./src/resolveTokens.js ***!
  \******************************/
/***/ ((module) => {


module.exports.resolveTokens = (tokens, resolvers) => {
    let output = '';
    context = {};
    for (const token of tokens) {
        if (resolvers[token.type]) {
            output += resolvers[token.type](context, token.value);
        }
        else {
            throw new Error('No resolver found for token type:', token.type);
        }
    }
    return output;
}

/***/ }),

/***/ "./src/rules/blockQuote.js":
/*!*********************************!*\
  !*** ./src/rules/blockQuote.js ***!
  \*********************************/
/***/ ((module, exports) => {

module.exports=exports={};

exports.type="token";

exports.rule=/\n(>+)\s*(.*)/;

exports.resolver=function blockQuotes(context,groups)
{
    let quoteNum=groups[0].length;
    let startbq_num='<blockquote>'.repeat(quoteNum);
    let endbq_num='</blockquote>'.repeat(quoteNum);

    return `${startbq_num}${groups[1]}${endbq_num}`;
}

/***/ }),

/***/ "./src/rules/boldItalicText.js":
/*!*************************************!*\
  !*** ./src/rules/boldItalicText.js ***!
  \*************************************/
/***/ ((module, exports) => {

module.exports = exports = {};

exports.type="token";
exports.order = 110;

exports.rule = /(\*{1,3})(.+?)\1/;

exports.resolver=function boldItalic(context,groups)
{
    let countAsterisk=groups[0].length;
    if(countAsterisk==2)
        {
            return `<strong>${groups[1]}</strong>`;
        }
    else if(countAsterisk==1)
        {
            return `<em>${groups[1]}</em>`;   
        }
    else if(countAsterisk==3)
        {
            return `<em><strong>${groups[1]}</strong></em>`;  
        }

}

/***/ }),

/***/ "./src/rules/breakLine.js":
/*!********************************!*\
  !*** ./src/rules/breakLine.js ***!
  \********************************/
/***/ ((module) => {

module.exports = {
    type: "token",
    rule: /\r?\n|\r/,
    resolver: function LineBreak(context, groups) {
        // Although not used, context and groups are included for interface consistency
        return `<br>`;
    }
};

/***/ }),

/***/ "./src/rules/extendedCodeblock.js":
/*!****************************************!*\
  !*** ./src/rules/extendedCodeblock.js ***!
  \****************************************/
/***/ ((module, exports) => {

module.exports = exports = {};

exports.type = "token"; // token, ast, ignore
exports.order = 100;

exports.rule = /(?:\r?\n|^)```(.*)\r?\n((.*\r?\n)*?)```/;

exports.css = `
.c2m-extended-block {
    background-color: #040404;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
}
.c2m-extended-block pre {
    margin: 0;
    padding: 0;
}
`;

exports.resolver = function extendedCodeblock (context, groups) {
    // groups[0]: language identifier (might be used to further parse the block in future)
    // groups[1]: code block content
    return '<div class="c2m-extended-block"><pre>' + groups[1] + '</pre></div>';
}

/***/ }),

/***/ "./src/rules/fontAwesomeIcon.js":
/*!**************************************!*\
  !*** ./src/rules/fontAwesomeIcon.js ***!
  \**************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
module.exports = exports = {};
module.order=100;
exports.type = "token";


exports.rule = /\[fa-([^\]]+)\]/;

exports.resolver = function createIcon(context, groups) {
    let iconName = groups[0];
    return `<i class="fa fa-${iconName}"></i>`;
};

/***/ }),

/***/ "./src/rules/heading.js":
/*!******************************!*\
  !*** ./src/rules/heading.js ***!
  \******************************/
/***/ ((module, exports) => {

module.exports = exports = {};

exports.type = "token"; // token, ast, ignore

exports.rule = /(#+)(.+)\r?\n?/;

exports.resolver = function heading (context, groups) {
    let heading_number = Math.min(groups[0].length, 4);
    return `<h${heading_number}>${groups[1]}</h${heading_number}>`
}

/***/ }),

/***/ "./src/rules/highlightedText.js":
/*!**************************************!*\
  !*** ./src/rules/highlightedText.js ***!
  \**************************************/
/***/ ((module, exports) => {

module.exports = exports = {};

exports.type = "token"; // token, ast, ignore
// exports.order = 100;

exports.rule = /==(.*)==/;

exports.css = `
.c2m mark {
    background-color: #f8d049;
    color: #000;
    padding: 0 5px;
}
`;

exports.resolver = function highlightedText (context, groups) {
    return `<mark>${groups[0]}</mark>`;
}

/***/ }),

/***/ "./src/rules/horizantalLine.js":
/*!*************************************!*\
  !*** ./src/rules/horizantalLine.js ***!
  \*************************************/
/***/ ((module, exports) => {

module.exports = exports = {};

exports.type = "token"; // token, ast, ignore
exports.order = 80;

exports.rule = /\r?\n-+\r?\n/;

exports.css = `
.c2m hr {
    border: 0;
    border-top: 2px solid #EBECED;
    margin: 15px 0;
}
`;

exports.resolver = function horizantalLine (context, groups) {
    return `<hr>`;
}

/***/ }),

/***/ "./src/rules/hyperlink.js":
/*!********************************!*\
  !*** ./src/rules/hyperlink.js ***!
  \********************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
module.exports = exports = {};
module.order=100;
exports.type = "token";

exports.rule = /\[([^\]]+)\]\(([^)]+)\)/;

exports.resolver = function createLink(context, groups) {
    let linkText = groups[0];
    let url = groups[1];

    return `<a href="${url}">${linkText}</a>`;
};


/***/ }),

/***/ "./src/rules/image.js":
/*!****************************!*\
  !*** ./src/rules/image.js ***!
  \****************************/
/***/ ((module, exports) => {

module.exports = exports = {};

exports.type = "token";

exports.rule = /!\[(.*?)\]\((.*?)\)/;

exports.resolver = function createImage(context, groups) {
    let altText = groups[0];
    let url = groups[1];

    return `<img src="${url}" alt="${altText}" />`;
};

/***/ }),

/***/ "./src/rules/inlineCodeblock.js":
/*!**************************************!*\
  !*** ./src/rules/inlineCodeblock.js ***!
  \**************************************/
/***/ ((module, exports) => {

module.exports = exports = {};

exports.type = "token"; // token, ast, ignore
// exports.order = 100;

exports.rule = /`(((?:.*?)\r?\n?)*?)`/;

exports.css = `
.c2m code {
    background-color: #747475;
    padding: 1px 5px;
    border-radius: 3px;
}
`;

exports.resolver = function inlineCodeblock (context, groups) {
    return `<code>${groups[0].replace('\n', ' ').replace('\r', '')}</code>`;
}

/***/ }),

/***/ "./src/rules/orderedList.js":
/*!**********************************!*\
  !*** ./src/rules/orderedList.js ***!
  \**********************************/
/***/ ((module, exports) => {

module.exports = exports = {};

exports.type = "token"; // token, ast, ignore
exports.order = 95;

exports.rule = /((?:\r?\n1\. .*?)(?:\r?\n *1\. .*?)+)\r?\n/;

exports.css = `
.c2m ol {
    margin: 0 -10px;
    type: 1;
}
`;


function resolveIndent(indentation_tree, indentation) {
    const tree_index = indentation_tree.findIndex((value) => value === indentation);
    let output = '';
    if (tree_index == -1) {
        if (indentation_tree[indentation_tree.length - 1] < indentation) {
            indentation_tree.push(indentation);
            return '<ol>';
        }
        else {
            return resolveIndent(indentation_tree, indentation-1);
        }
    }
    else
    {
        let prv_length = indentation_tree.length
        indentation_tree.splice(tree_index + 1, indentation_tree.length - tree_index - 1);
        return '</ol>'.repeat(prv_length - tree_index - 1);
    }
}

exports.resolver = function orderdList (context, groups) {
    output = '<ol>';
    let indentation_tree = [];
    groups[0].trim().split('\n').forEach((item, index) => {
        const indentation = item.match(/^( *)1\./)[1].length;
        const listItem = item.replace(/^( *)1\./, '').trim();
        if (indentation_tree.length == 0) indentation_tree.push(indentation);

        console.log(listItem, indentation_tree, indentation);

        output += resolveIndent(indentation_tree, indentation);
        output += `<li>${listItem}</li>`;
    });
    output += '</ol>'.repeat(indentation_tree.length);
    return output;
    // return groups.toString();
}

/***/ }),

/***/ "./src/rules/sampleRule.js":
/*!*********************************!*\
  !*** ./src/rules/sampleRule.js ***!
  \*********************************/
/***/ ((module, exports) => {

module.exports = exports = {};

exports.type = "token"; // token, ast, ignore
// exports.order = 100;

exports.rule = /(.)/;

// exports.css = `
// `;

exports.resolver = function sample (context, groups) {
    return groups.toString();
}

/***/ }),

/***/ "./src/rules/unorderedList.js":
/*!************************************!*\
  !*** ./src/rules/unorderedList.js ***!
  \************************************/
/***/ ((module, exports) => {

module.exports = exports = {};

exports.type = "token"; // token, ast, ignore
exports.order = 95;

exports.rule = /((?:\r?\n- .*?)(?:\r?\n *- .*?)+)\r?\n/;

exports.css = `
.c2m ul {
    margin: 0 -10px;
}
`;


function resolveIndent(indentation_tree, indentation) {
    const tree_index = indentation_tree.findIndex((value) => value === indentation);
    let output = '';
    if (tree_index == -1) {
        if (indentation_tree[indentation_tree.length - 1] < indentation) {
            indentation_tree.push(indentation);
            return '<ul>';
        }
        else {
            return resolveIndent(indentation_tree, indentation-1);
        }
    }
    else
    {
        let prv_length = indentation_tree.length
        indentation_tree.splice(tree_index + 1, indentation_tree.length - tree_index - 1);
        return '</ul>'.repeat(prv_length - tree_index - 1);
    }
}

exports.resolver = function unorderdList (context, groups) {
    output = '<ul>';
    let indentation_tree = [];
    groups[0].trim().split('\n').forEach((item, index) => {
        const indentation = item.match(/^( *)-/)[1].length;
        const listItem = item.replace(/^( *)-/, '').trim();
        if (indentation_tree.length == 0) indentation_tree.push(indentation);

        console.log(listItem, indentation_tree, indentation);

        output += resolveIndent(indentation_tree, indentation);
        output += `<li>${listItem}</li>`;
    });
    output += '</ul>'.repeat(indentation_tree.length);
    return output;
    // return groups.toString();
}

/***/ }),

/***/ "./src/rules sync recursive ^\\.\\/.*$":
/*!**********************************!*\
  !*** ./src/rules/ sync ^\.\/.*$ ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./blockQuote": "./src/rules/blockQuote.js",
	"./blockQuote.js": "./src/rules/blockQuote.js",
	"./boldItalicText": "./src/rules/boldItalicText.js",
	"./boldItalicText.js": "./src/rules/boldItalicText.js",
	"./breakLine": "./src/rules/breakLine.js",
	"./breakLine.js": "./src/rules/breakLine.js",
	"./extendedCodeblock": "./src/rules/extendedCodeblock.js",
	"./extendedCodeblock.js": "./src/rules/extendedCodeblock.js",
	"./fontAwesomeIcon": "./src/rules/fontAwesomeIcon.js",
	"./fontAwesomeIcon.js": "./src/rules/fontAwesomeIcon.js",
	"./heading": "./src/rules/heading.js",
	"./heading.js": "./src/rules/heading.js",
	"./highlightedText": "./src/rules/highlightedText.js",
	"./highlightedText.js": "./src/rules/highlightedText.js",
	"./horizantalLine": "./src/rules/horizantalLine.js",
	"./horizantalLine.js": "./src/rules/horizantalLine.js",
	"./hyperlink": "./src/rules/hyperlink.js",
	"./hyperlink.js": "./src/rules/hyperlink.js",
	"./image": "./src/rules/image.js",
	"./image.js": "./src/rules/image.js",
	"./inlineCodeblock": "./src/rules/inlineCodeblock.js",
	"./inlineCodeblock.js": "./src/rules/inlineCodeblock.js",
	"./orderedList": "./src/rules/orderedList.js",
	"./orderedList.js": "./src/rules/orderedList.js",
	"./sampleRule": "./src/rules/sampleRule.js",
	"./sampleRule.js": "./src/rules/sampleRule.js",
	"./unorderedList": "./src/rules/unorderedList.js",
	"./unorderedList.js": "./src/rules/unorderedList.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/rules sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./build/rules-lock.json":
/*!*******************************!*\
  !*** ./build/rules-lock.json ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('["horizantalLine.js","orderedList.js","unorderedList.js","extendedCodeblock.js","boldItalicText.js","blockQuote.js","breakLine.js","fontAwesomeIcon.js","heading.js","highlightedText.js","hyperlink.js","image.js","inlineCodeblock.js","sampleRule.js"]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convert: () => (/* binding */ convert),
/* harmony export */   lexer: () => (/* binding */ lexer)
/* harmony export */ });
const { loadRules } = __webpack_require__(/*! ./loadRules */ "./src/loadRules.js");
const Tokenizr = __webpack_require__(/*! tokenizr */ "./node_modules/tokenizr/lib/tokenizr.js");
const { resolveTokens } = __webpack_require__(/*! ./resolveTokens */ "./src/resolveTokens.js");
let DEBUG = true;

let css_element = document.createElement('style');
css_element.id = 'code2markdown-css';
window.onload = () => {
    document.head.appendChild(css_element);

    let css = `
    .c2m {
        background-color: #27272A;
        color: #EBECED;
        margin: 0;
        padding: 10px 15px;
        font-family: Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Helvetica,Roboto,Arial,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;
    }
    `;

    css_element.innerHTML += css;
}

let lexer = new Tokenizr();
const resolvers = loadRules(lexer, css_element);
if (DEBUG) console.log('Resolvers:', resolvers);


function convert(txt_data) {
    lexer.input(txt_data);
    lexer.debug(DEBUG);
    const tokens = lexer.tokens();
    if (DEBUG) console.log('tokens:', tokens);
    let output = resolveTokens(tokens, resolvers);
    // let output = txt_data;
    return output
}
})();

code2markdown = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQSxRQUFRLFlBQVksRUFBRSxtQkFBTyxDQUFDLHVDQUFhO0FBQzNDLGlCQUFpQixtQkFBTyxDQUFDLHlEQUFVO0FBQ25DLFFBQVEsZ0JBQWdCLEVBQUUsbUJBQU8sQ0FBQywrQ0FBaUI7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOzs7QUFHTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZGUybWFya2Rvd24vLi9ub2RlX21vZHVsZXMvdG9rZW5penIvbGliL3Rva2VuaXpyLmpzIiwid2VicGFjazovL2NvZGUybWFya2Rvd24vLi9zcmMvZGVmYXVsdFJlc29sdmVycy5qcyIsIndlYnBhY2s6Ly9jb2RlMm1hcmtkb3duLy4vc3JjL2xvYWRSdWxlcy5qcyIsIndlYnBhY2s6Ly9jb2RlMm1hcmtkb3duLy4vc3JjL3Jlc29sdmVUb2tlbnMuanMiLCJ3ZWJwYWNrOi8vY29kZTJtYXJrZG93bi8uL3NyYy9ydWxlcy9ibG9ja1F1b3RlLmpzIiwid2VicGFjazovL2NvZGUybWFya2Rvd24vLi9zcmMvcnVsZXMvYm9sZEl0YWxpY1RleHQuanMiLCJ3ZWJwYWNrOi8vY29kZTJtYXJrZG93bi8uL3NyYy9ydWxlcy9icmVha0xpbmUuanMiLCJ3ZWJwYWNrOi8vY29kZTJtYXJrZG93bi8uL3NyYy9ydWxlcy9leHRlbmRlZENvZGVibG9jay5qcyIsIndlYnBhY2s6Ly9jb2RlMm1hcmtkb3duLy4vc3JjL3J1bGVzL2ZvbnRBd2Vzb21lSWNvbi5qcyIsIndlYnBhY2s6Ly9jb2RlMm1hcmtkb3duLy4vc3JjL3J1bGVzL2hlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vY29kZTJtYXJrZG93bi8uL3NyYy9ydWxlcy9oaWdobGlnaHRlZFRleHQuanMiLCJ3ZWJwYWNrOi8vY29kZTJtYXJrZG93bi8uL3NyYy9ydWxlcy9ob3JpemFudGFsTGluZS5qcyIsIndlYnBhY2s6Ly9jb2RlMm1hcmtkb3duLy4vc3JjL3J1bGVzL2h5cGVybGluay5qcyIsIndlYnBhY2s6Ly9jb2RlMm1hcmtkb3duLy4vc3JjL3J1bGVzL2ltYWdlLmpzIiwid2VicGFjazovL2NvZGUybWFya2Rvd24vLi9zcmMvcnVsZXMvaW5saW5lQ29kZWJsb2NrLmpzIiwid2VicGFjazovL2NvZGUybWFya2Rvd24vLi9zcmMvcnVsZXMvb3JkZXJlZExpc3QuanMiLCJ3ZWJwYWNrOi8vY29kZTJtYXJrZG93bi8uL3NyYy9ydWxlcy9zYW1wbGVSdWxlLmpzIiwid2VicGFjazovL2NvZGUybWFya2Rvd24vLi9zcmMvcnVsZXMvdW5vcmRlcmVkTGlzdC5qcyIsIndlYnBhY2s6Ly9jb2RlMm1hcmtkb3duLy4vc3JjL3J1bGVzLyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vY29kZTJtYXJrZG93bi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb2RlMm1hcmtkb3duL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb2RlMm1hcmtkb3duL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29kZTJtYXJrZG93bi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvZGUybWFya2Rvd24vd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9jb2RlMm1hcmtkb3duLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbihmKXtpZih0eXBlb2YgZXhwb3J0cz09PVwib2JqZWN0XCImJnR5cGVvZiBtb2R1bGUhPT1cInVuZGVmaW5lZFwiKXttb2R1bGUuZXhwb3J0cz1mKCl9ZWxzZSBpZih0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kKXtkZWZpbmUoW10sZil9ZWxzZXt2YXIgZztpZih0eXBlb2Ygd2luZG93IT09XCJ1bmRlZmluZWRcIil7Zz13aW5kb3d9ZWxzZSBpZih0eXBlb2YgZ2xvYmFsIT09XCJ1bmRlZmluZWRcIil7Zz1nbG9iYWx9ZWxzZSBpZih0eXBlb2Ygc2VsZiE9PVwidW5kZWZpbmVkXCIpe2c9c2VsZn1lbHNle2c9dGhpc31nLlRva2VuaXpyID0gZigpfX0pKGZ1bmN0aW9uKCl7dmFyIGRlZmluZSxtb2R1bGUsZXhwb3J0cztyZXR1cm4gKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSh7MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBfY2FsbFN1cGVyKHQsZSxuKXtyZXR1cm4gZT1fZ2V0UHJvdG90eXBlT2YoZSksX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCxfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk/UmVmbGVjdC5jb25zdHJ1Y3QoZSxufHxbXSxfZ2V0UHJvdG90eXBlT2YodCkuY29uc3RydWN0b3IpOmUuYXBwbHkodCxuKSl9ZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCxlKXtpZihlJiYoXCJvYmplY3RcIj09PV90eXBlb2YoZSl8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpKXJldHVybiBlO2lmKHZvaWQgMCE9PWUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO3JldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHQpfWZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQodCl7aWYodm9pZCAwPT09dCl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIHR9ZnVuY3Rpb24gX2luaGVyaXRzKHQsZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSYmbnVsbCE9PWUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO3QucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoZSYmZS5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTp0LHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcInByb3RvdHlwZVwiLHt3cml0YWJsZTohMX0pLGUmJl9zZXRQcm90b3R5cGVPZih0LGUpfWZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIodCl7dmFyIGU9XCJmdW5jdGlvblwiPT10eXBlb2YgTWFwP25ldyBNYXA6dm9pZCAwO3JldHVybihfd3JhcE5hdGl2ZVN1cGVyPWZ1bmN0aW9uKHQpe2lmKG51bGw9PT10fHwhX2lzTmF0aXZlRnVuY3Rpb24odCkpcmV0dXJuIHQ7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7aWYodm9pZCAwIT09ZSl7aWYoZS5oYXModCkpcmV0dXJuIGUuZ2V0KHQpO2Uuc2V0KHQsbil9ZnVuY3Rpb24gbigpe3JldHVybiBfY29uc3RydWN0KHQsYXJndW1lbnRzLF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3Rvcil9cmV0dXJuIG4ucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodC5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTpuLGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLF9zZXRQcm90b3R5cGVPZihuLHQpfSkodCl9ZnVuY3Rpb24gX2NvbnN0cnVjdCh0LGUsbil7aWYoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKXJldHVybiBSZWZsZWN0LmNvbnN0cnVjdC5hcHBseShudWxsLGFyZ3VtZW50cyk7dmFyIHI9W251bGxdO3IucHVzaC5hcHBseShyLGUpO3ZhciBpPW5ldyh0LmJpbmQuYXBwbHkodCxyKSk7cmV0dXJuIG4mJl9zZXRQcm90b3R5cGVPZihpLG4ucHJvdG90eXBlKSxpfWZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKXt0cnl7dmFyIHQ9IUJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLFtdLGZ1bmN0aW9uKCl7fSkpfWNhdGNoKHQpe31yZXR1cm4oX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdD1mdW5jdGlvbigpe3JldHVybiEhdH0pKCl9ZnVuY3Rpb24gX2lzTmF0aXZlRnVuY3Rpb24odCl7dHJ5e3JldHVybi0xIT09RnVuY3Rpb24udG9TdHJpbmcuY2FsbCh0KS5pbmRleE9mKFwiW25hdGl2ZSBjb2RlXVwiKX1jYXRjaChlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0fX1mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YodCxlKXtyZXR1cm4oX3NldFByb3RvdHlwZU9mPU9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuX19wcm90b19fPWUsdH0pKHQsZSl9ZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKHQpe3JldHVybihfZ2V0UHJvdG90eXBlT2Y9T2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCk6ZnVuY3Rpb24odCl7cmV0dXJuIHQuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YodCl9KSh0KX1mdW5jdGlvbiBfdHlwZW9mKHQpe3JldHVybihfdHlwZW9mPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbih0KXtyZXR1cm4gdHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJnQuY29uc3RydWN0b3I9PT1TeW1ib2wmJnQhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIHR9KSh0KX1mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2sodCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHQsZSl7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciByPWVbbl07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LF90b1Byb3BlcnR5S2V5KHIua2V5KSxyKX19ZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKHQsZSxuKXtyZXR1cm4gZSYmX2RlZmluZVByb3BlcnRpZXModC5wcm90b3R5cGUsZSksbiYmX2RlZmluZVByb3BlcnRpZXModCxuKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcInByb3RvdHlwZVwiLHt3cml0YWJsZTohMX0pLHR9ZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCl7dmFyIGU9X3RvUHJpbWl0aXZlKHQsXCJzdHJpbmdcIik7cmV0dXJuXCJzeW1ib2xcIj09X3R5cGVvZihlKT9lOlN0cmluZyhlKX1mdW5jdGlvbiBfdG9QcmltaXRpdmUodCxlKXtpZihcIm9iamVjdFwiIT1fdHlwZW9mKHQpfHwhdClyZXR1cm4gdDt2YXIgbj10W1N5bWJvbC50b1ByaW1pdGl2ZV07aWYodm9pZCAwIT09bil7dmFyIHI9bi5jYWxsKHQsZXx8XCJkZWZhdWx0XCIpO2lmKFwib2JqZWN0XCIhPV90eXBlb2YocikpcmV0dXJuIHI7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpfXJldHVybihcInN0cmluZ1wiPT09ZT9TdHJpbmc6TnVtYmVyKSh0KX12YXIgZXhjZXJwdD1mdW5jdGlvbih0LGUpe3ZhciBuPXQubGVuZ3RoLHI9ZS0yMDtyPDAmJihyPTApO3ZhciBpPWUrMjA7aT5uJiYoaT1uKTt2YXIgbz1mdW5jdGlvbih0KXtyZXR1cm4gdC5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpfSxzPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gdC5zdWJzdHIoZSxuKS5yZXBsYWNlKC9cXFxcL2csXCJcXFxcXFxcXFwiKS5yZXBsYWNlKC9cXHgwOC9nLFwiXFxcXGJcIikucmVwbGFjZSgvXFx0L2csXCJcXFxcdFwiKS5yZXBsYWNlKC9cXG4vZyxcIlxcXFxuXCIpLnJlcGxhY2UoL1xcZi9nLFwiXFxcXGZcIikucmVwbGFjZSgvXFxyL2csXCJcXFxcclwiKS5yZXBsYWNlKC9bXFx4MDAtXFx4MDdcXHgwQlxceDBFXFx4MEZdL2csZnVuY3Rpb24odCl7cmV0dXJuXCJcXFxceDBcIitvKHQpfSkucmVwbGFjZSgvW1xceDEwLVxceDFGXFx4ODAtXFx4RkZdL2csZnVuY3Rpb24odCl7cmV0dXJuXCJcXFxceFwiK28odCl9KS5yZXBsYWNlKC9bXFx1MDEwMC1cXHUwRkZGXS9nLGZ1bmN0aW9uKHQpe3JldHVyblwiXFxcXHUwXCIrbyh0KX0pLnJlcGxhY2UoL1tcXHUxMDAwLVxcdUZGRkZdL2csZnVuY3Rpb24odCl7cmV0dXJuXCJcXFxcdVwiK28odCl9KX07cmV0dXJue3Byb2xvZ1RydW5jOnI+MCxwcm9sb2dUZXh0OnModCxyLGUtciksdG9rZW5UZXh0OnModCxlLDEpLGVwaWxvZ1RleHQ6cyh0LGUrMSxpLShlKzEpKSxlcGlsb2dUcnVuYzppPG59fSxUb2tlbj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoZSxuLHIpe3ZhciBpPWFyZ3VtZW50cy5sZW5ndGg+MyYmdm9pZCAwIT09YXJndW1lbnRzWzNdP2FyZ3VtZW50c1szXTowLG89YXJndW1lbnRzLmxlbmd0aD40JiZ2b2lkIDAhPT1hcmd1bWVudHNbNF0/YXJndW1lbnRzWzRdOjAscz1hcmd1bWVudHMubGVuZ3RoPjUmJnZvaWQgMCE9PWFyZ3VtZW50c1s1XT9hcmd1bWVudHNbNV06MDtfY2xhc3NDYWxsQ2hlY2sodGhpcyx0KSx0aGlzLnR5cGU9ZSx0aGlzLnZhbHVlPW4sdGhpcy50ZXh0PXIsdGhpcy5wb3M9aSx0aGlzLmxpbmU9byx0aGlzLmNvbHVtbj1zfXJldHVybiBfY3JlYXRlQ2xhc3ModCxbe2tleTpcInRvU3RyaW5nXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06ZnVuY3Rpb24odCxlKXtyZXR1cm4gZX07cmV0dXJuXCJcIi5jb25jYXQodChcInR5cGVcIix0aGlzLnR5cGUpLFwiIFwiKStcIih2YWx1ZTogXCIuY29uY2F0KHQoXCJ2YWx1ZVwiLEpTT04uc3RyaW5naWZ5KHRoaXMudmFsdWUpKSxcIiwgXCIpK1widGV4dDogXCIuY29uY2F0KHQoXCJ0ZXh0XCIsSlNPTi5zdHJpbmdpZnkodGhpcy50ZXh0KSksXCIsIFwiKStcInBvczogXCIuY29uY2F0KHQoXCJwb3NcIix0aGlzLnBvcyksXCIsIFwiKStcImxpbmU6IFwiLmNvbmNhdCh0KFwibGluZVwiLHRoaXMubGluZSksXCIsIFwiKStcImNvbHVtbjogXCIuY29uY2F0KHQoXCJjb2x1bW5cIix0aGlzLmNvbHVtbiksXCIpXCIpfX0se2tleTpcImlzQVwiLHZhbHVlOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQ9PT10aGlzLnR5cGUmJigyIT09YXJndW1lbnRzLmxlbmd0aHx8ZT09PXRoaXMudmFsdWUpfX1dKSx0fSgpLFBhcnNpbmdFcnJvcj1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKHQsbixyLGksbyl7dmFyIHM7cmV0dXJuIF9jbGFzc0NhbGxDaGVjayh0aGlzLGUpLChzPV9jYWxsU3VwZXIodGhpcyxlLFt0XSkpLm5hbWU9XCJQYXJzaW5nRXJyb3JcIixzLm1lc3NhZ2U9dCxzLnBvcz1uLHMubGluZT1yLHMuY29sdW1uPWkscy5pbnB1dD1vLHN9cmV0dXJuIF9pbmhlcml0cyhlLF93cmFwTmF0aXZlU3VwZXIoRXJyb3IpKSxfY3JlYXRlQ2xhc3MoZSxbe2tleTpcInRvU3RyaW5nXCIsdmFsdWU6ZnVuY3Rpb24oKXtmb3IodmFyIHQ9ZXhjZXJwdCh0aGlzLmlucHV0LHRoaXMucG9zKSxlPVwibGluZSBcIi5jb25jYXQodGhpcy5saW5lLFwiIChjb2x1bW4gXCIpLmNvbmNhdCh0aGlzLmNvbHVtbixcIik6IFwiKSxuPVwiXCIscj0wO3I8ZS5sZW5ndGgrdC5wcm9sb2dUZXh0Lmxlbmd0aDtyKyspbis9XCIgXCI7cmV0dXJuXCJQYXJzaW5nIEVycm9yOiBcIit0aGlzLm1lc3NhZ2UrXCJcXG5cIitlK3QucHJvbG9nVGV4dCt0LnRva2VuVGV4dCt0LmVwaWxvZ1RleHQrXCJcXG5cIituK1wiXlwifX1dKSxlfSgpLEFjdGlvbkNvbnRleHQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KGUpe19jbGFzc0NhbGxDaGVjayh0aGlzLHQpLHRoaXMuX3Rva2VuaXpyPWUsdGhpcy5fZGF0YT17fSx0aGlzLl9yZXBlYXQ9ITEsdGhpcy5fcmVqZWN0PSExLHRoaXMuX2lnbm9yZT0hMSx0aGlzLl9tYXRjaD1udWxsfXJldHVybiBfY3JlYXRlQ2xhc3ModCxbe2tleTpcImRhdGFcIix2YWx1ZTpmdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMuX2RhdGFbdF07cmV0dXJuIDI9PT1hcmd1bWVudHMubGVuZ3RoJiYodGhpcy5fZGF0YVt0XT1lKSxufX0se2tleTpcImluZm9cIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybntsaW5lOnRoaXMuX3Rva2VuaXpyLl9saW5lLGNvbHVtbjp0aGlzLl90b2tlbml6ci5fY29sdW1uLHBvczp0aGlzLl90b2tlbml6ci5fcG9zLGxlbjp0aGlzLl9tYXRjaFswXS5sZW5ndGh9fX0se2tleTpcInB1c2hcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0O3JldHVybih0PXRoaXMuX3Rva2VuaXpyKS5wdXNoLmFwcGx5KHQsYXJndW1lbnRzKSx0aGlzfX0se2tleTpcInBvcFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ7cmV0dXJuKHQ9dGhpcy5fdG9rZW5penIpLnBvcC5hcHBseSh0LGFyZ3VtZW50cyl9fSx7a2V5Olwic3RhdGVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0LGU7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MD8oKGU9dGhpcy5fdG9rZW5penIpLnN0YXRlLmFwcGx5KGUsYXJndW1lbnRzKSx0aGlzKToodD10aGlzLl90b2tlbml6cikuc3RhdGUuYXBwbHkodCxhcmd1bWVudHMpfX0se2tleTpcInRhZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ7cmV0dXJuKHQ9dGhpcy5fdG9rZW5penIpLnRhZy5hcHBseSh0LGFyZ3VtZW50cyksdGhpc319LHtrZXk6XCJ0YWdnZWRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0O3JldHVybih0PXRoaXMuX3Rva2VuaXpyKS50YWdnZWQuYXBwbHkodCxhcmd1bWVudHMpfX0se2tleTpcInVudGFnXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdDtyZXR1cm4odD10aGlzLl90b2tlbml6cikudW50YWcuYXBwbHkodCxhcmd1bWVudHMpLHRoaXN9fSx7a2V5OlwicmVwZWF0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fdG9rZW5penIuX2xvZyhcIiAgICBSRVBFQVRcIiksdGhpcy5fcmVwZWF0PSEwLHRoaXN9fSx7a2V5OlwicmVqZWN0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fdG9rZW5penIuX2xvZyhcIiAgICBSRUpFQ1RcIiksdGhpcy5fcmVqZWN0PSEwLHRoaXN9fSx7a2V5OlwiaWdub3JlXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fdG9rZW5penIuX2xvZyhcIiAgICBJR05PUkVcIiksdGhpcy5faWdub3JlPSEwLHRoaXN9fSx7a2V5OlwiYWNjZXB0XCIsdmFsdWU6ZnVuY3Rpb24odCxlKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aDwyJiYoZT10aGlzLl9tYXRjaFswXSksdGhpcy5fdG9rZW5penIuX2xvZyhcIiAgICBBQ0NFUFQ6IHR5cGU6IFwiLmNvbmNhdCh0LFwiLCB2YWx1ZTogXCIpK1wiXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KGUpLFwiIChcIikuY29uY2F0KF90eXBlb2YoZSksJyksIHRleHQ6IFwiJykuY29uY2F0KHRoaXMuX21hdGNoWzBdLCdcIicpKSx0aGlzLl90b2tlbml6ci5fcGVuZGluZy5wdXNoKG5ldyBUb2tlbih0LGUsdGhpcy5fbWF0Y2hbMF0sdGhpcy5fdG9rZW5penIuX3Bvcyx0aGlzLl90b2tlbml6ci5fbGluZSx0aGlzLl90b2tlbml6ci5fY29sdW1uKSksdGhpc319LHtrZXk6XCJzdG9wXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fdG9rZW5penIuX3N0b3BwZWQ9ITAsdGhpc319XSksdH0oKSxUb2tlbml6cj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXtfY2xhc3NDYWxsQ2hlY2sodGhpcyx0KSx0aGlzLl9iZWZvcmU9bnVsbCx0aGlzLl9hZnRlcj1udWxsLHRoaXMuX2ZpbmlzaD1udWxsLHRoaXMuX3J1bGVzPVtdLHRoaXMuX2RlYnVnPSExLHRoaXMucmVzZXQoKX1yZXR1cm4gX2NyZWF0ZUNsYXNzKHQsW3trZXk6XCJyZXNldFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2lucHV0PVwiXCIsdGhpcy5fbGVuPTAsdGhpcy5fZW9mPSExLHRoaXMuX3Bvcz0wLHRoaXMuX2xpbmU9MSx0aGlzLl9jb2x1bW49MSx0aGlzLl9zdGF0ZT1bXCJkZWZhdWx0XCJdLHRoaXMuX3RhZz17fSx0aGlzLl90cmFuc2FjdGlvbj1bXSx0aGlzLl9wZW5kaW5nPVtdLHRoaXMuX3N0b3BwZWQ9ITEsdGhpcy5fY3R4PW5ldyBBY3Rpb25Db250ZXh0KHRoaXMpLHRoaXN9fSx7a2V5OlwiZXJyb3JcIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gbmV3IFBhcnNpbmdFcnJvcih0LHRoaXMuX3Bvcyx0aGlzLl9saW5lLHRoaXMuX2NvbHVtbix0aGlzLl9pbnB1dCl9fSx7a2V5OlwiZGVidWdcIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fZGVidWc9dCx0aGlzfX0se2tleTpcIl9sb2dcIix2YWx1ZTpmdW5jdGlvbih0KXt0aGlzLl9kZWJ1ZyYmY29uc29sZS5sb2coXCJ0b2tlbml6cjogXCIuY29uY2F0KHQpKX19LHtrZXk6XCJpbnB1dFwiLHZhbHVlOmZ1bmN0aW9uKHQpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiB0KXRocm93IG5ldyBFcnJvcigncGFyYW1ldGVyIFwiaW5wdXRcIiBub3QgYSBTdHJpbmcnKTtyZXR1cm4gdGhpcy5yZXNldCgpLHRoaXMuX2lucHV0PXQsdGhpcy5fbGVuPXQubGVuZ3RoLHRoaXN9fSx7a2V5OlwicHVzaFwiLHZhbHVlOmZ1bmN0aW9uKHQpe2lmKDEhPT1hcmd1bWVudHMubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcImludmFsaWQgbnVtYmVyIG9mIGFyZ3VtZW50c1wiKTtpZihcInN0cmluZ1wiIT10eXBlb2YgdCl0aHJvdyBuZXcgRXJyb3IoJ3BhcmFtZXRlciBcInN0YXRlXCIgbm90IGEgU3RyaW5nJyk7cmV0dXJuIHRoaXMuX2xvZyhcIiAgICBTVEFURSAoUFVTSCk6IFwiK1wib2xkOiA8XCIuY29uY2F0KHRoaXMuX3N0YXRlW3RoaXMuX3N0YXRlLmxlbmd0aC0xXSxcIj4sIFwiKStcIm5ldzogPFwiLmNvbmNhdCh0LFwiPlwiKSksdGhpcy5fc3RhdGUucHVzaCh0KSx0aGlzfX0se2tleTpcInBvcFwiLHZhbHVlOmZ1bmN0aW9uKCl7aWYoMCE9PWFyZ3VtZW50cy5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBudW1iZXIgb2YgYXJndW1lbnRzXCIpO2lmKHRoaXMuX3N0YXRlLmxlbmd0aDwyKXRocm93IG5ldyBFcnJvcihcIm5vIG1vcmUgY3VzdG9tIHN0YXRlcyB0byBwb3BcIik7cmV0dXJuIHRoaXMuX2xvZyhcIiAgICBTVEFURSAoUE9QKTogXCIrXCJvbGQ6IDxcIi5jb25jYXQodGhpcy5fc3RhdGVbdGhpcy5fc3RhdGUubGVuZ3RoLTFdLFwiPiwgXCIpK1wibmV3OiA8XCIuY29uY2F0KHRoaXMuX3N0YXRlW3RoaXMuX3N0YXRlLmxlbmd0aC0yXSxcIj5cIikpLHRoaXMuX3N0YXRlLnBvcCgpfX0se2tleTpcInN0YXRlXCIsdmFsdWU6ZnVuY3Rpb24odCl7aWYoMT09PWFyZ3VtZW50cy5sZW5ndGgpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiB0KXRocm93IG5ldyBFcnJvcigncGFyYW1ldGVyIFwic3RhdGVcIiBub3QgYSBTdHJpbmcnKTtyZXR1cm4gdGhpcy5fbG9nKFwiICAgIFNUQVRFIChTRVQpOiBcIitcIm9sZDogPFwiLmNvbmNhdCh0aGlzLl9zdGF0ZVt0aGlzLl9zdGF0ZS5sZW5ndGgtMV0sXCI+LCBcIikrXCJuZXc6IDxcIi5jb25jYXQodCxcIj5cIikpLHRoaXMuX3N0YXRlW3RoaXMuX3N0YXRlLmxlbmd0aC0xXT10LHRoaXN9aWYoMD09PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHRoaXMuX3N0YXRlW3RoaXMuX3N0YXRlLmxlbmd0aC0xXTt0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIG51bWJlciBvZiBhcmd1bWVudHNcIil9fSx7a2V5OlwidGFnXCIsdmFsdWU6ZnVuY3Rpb24odCl7aWYoMSE9PWFyZ3VtZW50cy5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBudW1iZXIgb2YgYXJndW1lbnRzXCIpO2lmKFwic3RyaW5nXCIhPXR5cGVvZiB0KXRocm93IG5ldyBFcnJvcigncGFyYW1ldGVyIFwidGFnXCIgbm90IGEgU3RyaW5nJyk7cmV0dXJuIHRoaXMuX2xvZyhcIiAgICBUQUcgKEFERCk6IFwiLmNvbmNhdCh0KSksdGhpcy5fdGFnW3RdPSEwLHRoaXN9fSx7a2V5OlwidGFnZ2VkXCIsdmFsdWU6ZnVuY3Rpb24odCl7aWYoMSE9PWFyZ3VtZW50cy5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBudW1iZXIgb2YgYXJndW1lbnRzXCIpO2lmKFwic3RyaW5nXCIhPXR5cGVvZiB0KXRocm93IG5ldyBFcnJvcigncGFyYW1ldGVyIFwidGFnXCIgbm90IGEgU3RyaW5nJyk7cmV0dXJuITA9PT10aGlzLl90YWdbdF19fSx7a2V5OlwidW50YWdcIix2YWx1ZTpmdW5jdGlvbih0KXtpZigxIT09YXJndW1lbnRzLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIG51bWJlciBvZiBhcmd1bWVudHNcIik7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIHQpdGhyb3cgbmV3IEVycm9yKCdwYXJhbWV0ZXIgXCJ0YWdcIiBub3QgYSBTdHJpbmcnKTtyZXR1cm4gdGhpcy5fbG9nKFwiICAgIFRBRyAoREVMKTogXCIuY29uY2F0KHQpKSxkZWxldGUgdGhpcy5fdGFnW3RdLHRoaXN9fSx7a2V5OlwiYmVmb3JlXCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX2JlZm9yZT10LHRoaXN9fSx7a2V5OlwiYWZ0ZXJcIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fYWZ0ZXI9dCx0aGlzfX0se2tleTpcImZpbmlzaFwiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9maW5pc2g9dCx0aGlzfX0se2tleTpcInJ1bGVcIix2YWx1ZTpmdW5jdGlvbih0LGUsbil7dmFyIHI9YXJndW1lbnRzLmxlbmd0aD4zJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10/YXJndW1lbnRzWzNdOlwidW5rbm93blwiO2lmKDI9PT1hcmd1bWVudHMubGVuZ3RoJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBlKXt2YXIgaT1bdCxlXTtlPWlbMF0sbj1pWzFdLHQ9XCIqXCJ9ZWxzZSBpZigzPT09YXJndW1lbnRzLmxlbmd0aCYmXCJmdW5jdGlvblwiPT10eXBlb2YgZSl7dmFyIG89W3QsZSxuXTtlPW9bMF0sbj1vWzFdLHI9b1syXSx0PVwiKlwifWlmKFwic3RyaW5nXCIhPXR5cGVvZiB0KXRocm93IG5ldyBFcnJvcigncGFyYW1ldGVyIFwic3RhdGVcIiBub3QgYSBTdHJpbmcnKTtpZighKFwib2JqZWN0XCI9PT1fdHlwZW9mKGUpJiZlIGluc3RhbmNlb2YgUmVnRXhwKSl0aHJvdyBuZXcgRXJyb3IoJ3BhcmFtZXRlciBcInBhdHRlcm5cIiBub3QgYSBSZWdFeHAnKTtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBuKXRocm93IG5ldyBFcnJvcigncGFyYW1ldGVyIFwiYWN0aW9uXCIgbm90IGEgRnVuY3Rpb24nKTtpZihcInN0cmluZ1wiIT10eXBlb2Ygcil0aHJvdyBuZXcgRXJyb3IoJ3BhcmFtZXRlciBcIm5hbWVcIiBub3QgYSBTdHJpbmcnKTt0PXQuc3BsaXQoL1xccyosXFxzKi9nKS5tYXAoZnVuY3Rpb24odCl7dmFyIGU9dC5zcGxpdCgvXFxzKy9nKSxuPWUuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiBudWxsPT09dC5tYXRjaCgvXiMvKX0pLHI9ZS5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIG51bGwhPT10Lm1hdGNoKC9eIy8pfSkubWFwKGZ1bmN0aW9uKHQpe3JldHVybiB0LnJlcGxhY2UoL14jLyxcIlwiKX0pO2lmKDEhPT1uLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJleGFjdGx5IG9uZSBzdGF0ZSByZXF1aXJlZFwiKTtyZXR1cm57c3RhdGU6blswXSx0YWdzOnJ9fSk7dmFyIHM9XCJnXCI7dHJ5e1wiYm9vbGVhblwiPT10eXBlb2YgbmV3IFJlZ0V4cChcIlwiLFwieVwiKS5zdGlja3kmJihzPVwieVwiKX1jYXRjaCh0KXt9cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBlLm11bHRpbGluZSYmZS5tdWx0aWxpbmUmJihzKz1cIm1cIiksXCJib29sZWFuXCI9PXR5cGVvZiBlLmRvdEFsbCYmZS5kb3RBbGwmJihzKz1cInNcIiksXCJib29sZWFuXCI9PXR5cGVvZiBlLmlnbm9yZUNhc2UmJmUuaWdub3JlQ2FzZSYmKHMrPVwiaVwiKSxcImJvb2xlYW5cIj09dHlwZW9mIGUudW5pY29kZSYmZS51bmljb2RlJiYocys9XCJ1XCIpLGU9bmV3IFJlZ0V4cChlLnNvdXJjZSxzKSx0aGlzLl9sb2coXCJydWxlOiBjb25maWd1cmUgcnVsZSAoc3RhdGU6IFwiLmNvbmNhdCh0LFwiLCBwYXR0ZXJuOiBcIikuY29uY2F0KGUuc291cmNlLFwiKVwiKSksdGhpcy5fcnVsZXMucHVzaCh7c3RhdGU6dCxwYXR0ZXJuOmUsYWN0aW9uOm4sbmFtZTpyfSksdGhpc319LHtrZXk6XCJfcHJvZ3Jlc3NcIix2YWx1ZTpmdW5jdGlvbih0LGUpe2Zvcih2YXIgbj10aGlzLl9saW5lLHI9dGhpcy5fY29sdW1uLGk9dGhpcy5faW5wdXQsbz10O288ZTtvKyspe3ZhciBzPWkuY2hhckF0KG8pO1wiXFxyXCI9PT1zP3RoaXMuX2NvbHVtbj0xOlwiXFxuXCI9PT1zPyh0aGlzLl9saW5lKyssdGhpcy5fY29sdW1uPTEpOlwiXFx0XCI9PT1zP3RoaXMuX2NvbHVtbis9OC10aGlzLl9jb2x1bW4lODp0aGlzLl9jb2x1bW4rK310aGlzLl9sb2coXCIgICAgUFJPR1JFU1M6IGNoYXJhY3RlcnM6IFwiLmNvbmNhdChlLXQsXCIsIFwiKStcImZyb206IDxsaW5lIFwiLmNvbmNhdChuLFwiLCBjb2x1bW4gXCIpLmNvbmNhdChyLFwiPiwgXCIpK1widG86IDxsaW5lIFwiLmNvbmNhdCh0aGlzLl9saW5lLFwiLCBjb2x1bW4gXCIpLmNvbmNhdCh0aGlzLl9jb2x1bW4sXCI+XCIpKX19LHtrZXk6XCJfdG9rZW5pemVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT1mdW5jdGlvbigpe3QuX2VvZnx8KG51bGwhPT10Ll9maW5pc2gmJnQuX2ZpbmlzaC5jYWxsKHQuX2N0eCx0Ll9jdHgpLHQuX2VvZj0hMCx0Ll9wZW5kaW5nLnB1c2gobmV3IFRva2VuKFwiRU9GXCIsXCJcIixcIlwiLHQuX3Bvcyx0Ll9saW5lLHQuX2NvbHVtbikpKX07aWYoISh0aGlzLl9zdG9wcGVkfHx0aGlzLl9wb3M+PXRoaXMuX2xlbikpe2Zvcih2YXIgbj0hMDtuOyl7aWYobj0hMSx0aGlzLl9kZWJ1Zyl7dmFyIHI9ZXhjZXJwdCh0aGlzLl9pbnB1dCx0aGlzLl9wb3MpLGk9T2JqZWN0LmtleXModGhpcy5fdGFnKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuXCIjXCIuY29uY2F0KHQpfSkuam9pbihcIiBcIik7dGhpcy5fbG9nKFwiSU5QVVQ6IHN0YXRlOiA8XCIuY29uY2F0KHRoaXMuX3N0YXRlW3RoaXMuX3N0YXRlLmxlbmd0aC0xXSxcIj4sIHRhZ3M6IDxcIikuY29uY2F0KGksXCI+LCB0ZXh0OiBcIikrKHIucHJvbG9nVHJ1bmM/XCIuLi5cIjonXCInKStcIlwiLmNvbmNhdChyLnByb2xvZ1RleHQsXCI8XCIpLmNvbmNhdChyLnRva2VuVGV4dCxcIj5cIikuY29uY2F0KHIuZXBpbG9nVGV4dCkrKHIuZXBpbG9nVHJ1bmM/XCIuLi5cIjonXCInKStcIiwgYXQ6IDxsaW5lIFwiLmNvbmNhdCh0aGlzLl9saW5lLFwiLCBjb2x1bW4gXCIpLmNvbmNhdCh0aGlzLl9jb2x1bW4sXCI+XCIpKX1mb3IodmFyIG89MDtvPHRoaXMuX3J1bGVzLmxlbmd0aDtvKyspe2lmKHRoaXMuX2RlYnVnKXt2YXIgcz10aGlzLl9ydWxlc1tvXS5zdGF0ZS5tYXAoZnVuY3Rpb24odCl7dmFyIGU9dC5zdGF0ZTtyZXR1cm4gdC50YWdzLmxlbmd0aD4wJiYoZSs9XCIgXCIrdC50YWdzLm1hcChmdW5jdGlvbih0KXtyZXR1cm5cIiNcIi5jb25jYXQodCl9KS5qb2luKFwiIFwiKSksZX0pLmpvaW4oXCIsIFwiKTt0aGlzLl9sb2coXCIgIFJVTEU6IHN0YXRlKHMpOiA8XCIuY29uY2F0KHMsXCI+LCBcIikrXCJwYXR0ZXJuOiBcIi5jb25jYXQodGhpcy5fcnVsZXNbb10ucGF0dGVybi5zb3VyY2UpKX12YXIgYT0hMSxjPXRoaXMuX3J1bGVzW29dLnN0YXRlLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gdC5zdGF0ZX0pLHU9Yy5pbmRleE9mKFwiKlwiKTtpZih1PDAmJih1PWMuaW5kZXhPZih0aGlzLl9zdGF0ZVt0aGlzLl9zdGF0ZS5sZW5ndGgtMV0pKSx1Pj0wKXthPSEwO3ZhciBsPXRoaXMuX3J1bGVzW29dLnN0YXRlW3VdLnRhZ3M7KGw9bC5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIXQuX3RhZ1tlXX0pKS5sZW5ndGg+MCYmKGE9ITEpfWlmKGEpe3RoaXMuX3J1bGVzW29dLnBhdHRlcm4ubGFzdEluZGV4PXRoaXMuX3Bvczt2YXIgaD10aGlzLl9ydWxlc1tvXS5wYXR0ZXJuLmV4ZWModGhpcy5faW5wdXQpO2lmKHRoaXMuX3J1bGVzW29dLnBhdHRlcm4ubGFzdEluZGV4PXRoaXMuX3BvcyxudWxsIT09KGg9dGhpcy5fcnVsZXNbb10ucGF0dGVybi5leGVjKHRoaXMuX2lucHV0KSkmJmguaW5kZXg9PT10aGlzLl9wb3Mpe2lmKHRoaXMuX2RlYnVnJiZ0aGlzLl9sb2coXCIgICAgTUFUQ0hFRDogXCIrSlNPTi5zdHJpbmdpZnkoaCkpLHRoaXMuX2N0eC5fbWF0Y2g9aCx0aGlzLl9jdHguX3JlcGVhdD0hMSx0aGlzLl9jdHguX3JlamVjdD0hMSx0aGlzLl9jdHguX2lnbm9yZT0hMSxudWxsIT09dGhpcy5fYmVmb3JlJiZ0aGlzLl9iZWZvcmUuY2FsbCh0aGlzLl9jdHgsdGhpcy5fY3R4LGgsdGhpcy5fcnVsZXNbb10pLHRoaXMuX3J1bGVzW29dLmFjdGlvbi5jYWxsKHRoaXMuX2N0eCx0aGlzLl9jdHgsaCksbnVsbCE9PXRoaXMuX2FmdGVyJiZ0aGlzLl9hZnRlci5jYWxsKHRoaXMuX2N0eCx0aGlzLl9jdHgsaCx0aGlzLl9ydWxlc1tvXSksdGhpcy5fY3R4Ll9yZWplY3QpY29udGludWU7aWYodGhpcy5fY3R4Ll9yZXBlYXQpe249ITA7YnJlYWt9aWYodGhpcy5fY3R4Ll9pZ25vcmUpe2lmKHRoaXMuX3Byb2dyZXNzKHRoaXMuX3Bvcyx0aGlzLl9ydWxlc1tvXS5wYXR0ZXJuLmxhc3RJbmRleCksdGhpcy5fcG9zPXRoaXMuX3J1bGVzW29dLnBhdHRlcm4ubGFzdEluZGV4LHRoaXMuX3Bvcz49dGhpcy5fbGVuKXJldHVybiB2b2lkIGUoKTtuPSEwO2JyZWFrfWlmKHRoaXMuX3BlbmRpbmcubGVuZ3RoPjApcmV0dXJuIHRoaXMuX3Byb2dyZXNzKHRoaXMuX3Bvcyx0aGlzLl9ydWxlc1tvXS5wYXR0ZXJuLmxhc3RJbmRleCksdGhpcy5fcG9zPXRoaXMuX3J1bGVzW29dLnBhdHRlcm4ubGFzdEluZGV4LHZvaWQodGhpcy5fcG9zPj10aGlzLl9sZW4mJmUoKSk7dGhyb3cgbmV3IEVycm9yKCdhY3Rpb24gb2YgcGF0dGVybiBcIicrdGhpcy5fcnVsZXNbb10ucGF0dGVybi5zb3VyY2UrJ1wiIG5laXRoZXIgcmVqZWN0ZWQgbm9yIGFjY2VwdGVkIGFueSB0b2tlbihzKScpfX19fXRocm93IHRoaXMuZXJyb3IoXCJ0b2tlbiBub3QgcmVjb2duaXplZFwiKX1lKCl9fSx7a2V5OlwidG9rZW5cIix2YWx1ZTpmdW5jdGlvbigpe2lmKDA9PT10aGlzLl9wZW5kaW5nLmxlbmd0aCYmdGhpcy5fdG9rZW5pemUoKSx0aGlzLl9wZW5kaW5nLmxlbmd0aD4wKXt2YXIgdD10aGlzLl9wZW5kaW5nLnNoaWZ0KCk7cmV0dXJuIHRoaXMuX3RyYW5zYWN0aW9uLmxlbmd0aD4wJiZ0aGlzLl90cmFuc2FjdGlvblswXS5wdXNoKHQpLHRoaXMuX2xvZyhcIlRPS0VOOiBcIi5jb25jYXQodC50b1N0cmluZygpKSksdH1yZXR1cm4gbnVsbH19LHtrZXk6XCJ0b2tlbnNcIix2YWx1ZTpmdW5jdGlvbigpe2Zvcih2YXIgdCxlPVtdO251bGwhPT0odD10aGlzLnRva2VuKCkpOyllLnB1c2godCk7cmV0dXJuIGV9fSx7a2V5OlwicGVla1wiLHZhbHVlOmZ1bmN0aW9uKHQpe2lmKHZvaWQgMD09PXQmJih0PTApLHQ+PXRoaXMuX3BlbmRpbmcubGVuZ3RoKXswPT09dGhpcy5fcGVuZGluZy5sZW5ndGgmJnRoaXMuX3Rva2VuaXplKCk7Zm9yKHZhciBlPTA7ZTx0LXRoaXMuX3BlbmRpbmcubGVuZ3RoO2UrKyl0aGlzLl90b2tlbml6ZSgpfWlmKHQ+PXRoaXMuX3BlbmRpbmcubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIm5vdCBlbm91Z2ggdG9rZW5zIGF2YWlsYWJsZSBmb3IgcGVlayBvcGVyYXRpb25cIik7cmV0dXJuIHRoaXMuX2xvZyhcIlBFRUs6IFwiLmNvbmNhdCh0aGlzLl9wZW5kaW5nW3RdLnRvU3RyaW5nKCkpKSx0aGlzLl9wZW5kaW5nW3RdfX0se2tleTpcInNraXBcIix2YWx1ZTpmdW5jdGlvbih0KXt2b2lkIDA9PT10JiYodD0xKTtmb3IodmFyIGU9MDtlPHRoaXMuX3BlbmRpbmcubGVuZ3RoK3Q7ZSsrKXRoaXMuX3Rva2VuaXplKCk7aWYodD50aGlzLl9wZW5kaW5nLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJub3QgZW5vdWdoIHRva2VucyBhdmFpbGFibGUgZm9yIHNraXAgb3BlcmF0aW9uXCIpO2Zvcig7dC0tID4wOyl0aGlzLnRva2VuKCk7cmV0dXJuIHRoaXN9fSx7a2V5OlwiY29uc3VtZVwiLHZhbHVlOmZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBuPXRoaXMscj0wO3I8dGhpcy5fcGVuZGluZy5sZW5ndGgrMTtyKyspdGhpcy5fdG9rZW5pemUoKTtpZigwPT09dGhpcy5fcGVuZGluZy5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwibm90IGVub3VnaCB0b2tlbnMgYXZhaWxhYmxlIGZvciBjb25zdW1lIG9wZXJhdGlvblwiKTt2YXIgaT10aGlzLnRva2VuKCk7dGhpcy5fbG9nKFwiQ09OU1VNRTogXCIuY29uY2F0KGkudG9TdHJpbmcoKSkpO3ZhciBvPWZ1bmN0aW9uKCl7dGhyb3cgbmV3IFBhcnNpbmdFcnJvcihcImV4cGVjdGVkOiA8dHlwZTogXCIuY29uY2F0KHQsXCIsIHZhbHVlOiBcIikuY29uY2F0KEpTT04uc3RyaW5naWZ5KGUpLFwiIChcIikuY29uY2F0KF90eXBlb2YoZSksXCIpPiwgXCIpK1wiZm91bmQ6IDx0eXBlOiBcIi5jb25jYXQoaS50eXBlLFwiLCB2YWx1ZTogXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShpLnZhbHVlKSxcIiAoXCIpLmNvbmNhdChfdHlwZW9mKGkudmFsdWUpLFwiKT5cIiksaS5wb3MsaS5saW5lLGkuY29sdW1uLG4uX2lucHV0KX07cmV0dXJuIDIhPT1hcmd1bWVudHMubGVuZ3RofHxpLmlzQSh0LGUpP2kuaXNBKHQpfHxvKCk6byhKU09OLnN0cmluZ2lmeShlKSxfdHlwZW9mKGUpKSxpfX0se2tleTpcImJlZ2luXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbG9nKFwiQkVHSU46IGxldmVsIFwiLmNvbmNhdCh0aGlzLl90cmFuc2FjdGlvbi5sZW5ndGgpKSx0aGlzLl90cmFuc2FjdGlvbi51bnNoaWZ0KFtdKSx0aGlzfX0se2tleTpcImRlcHRoXCIsdmFsdWU6ZnVuY3Rpb24oKXtpZigwPT09dGhpcy5fdHJhbnNhY3Rpb24ubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcImNhbm5vdCBkZXRlcm1pbmUgZGVwdGggLS0gbm8gYWN0aXZlIHRyYW5zYWN0aW9uXCIpO3JldHVybiB0aGlzLl90cmFuc2FjdGlvblswXS5sZW5ndGh9fSx7a2V5OlwiY29tbWl0XCIsdmFsdWU6ZnVuY3Rpb24oKXtpZigwPT09dGhpcy5fdHJhbnNhY3Rpb24ubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcImNhbm5vdCBjb21taXQgdHJhbnNhY3Rpb24gLS0gbm8gYWN0aXZlIHRyYW5zYWN0aW9uXCIpO3ZhciB0PXRoaXMuX3RyYW5zYWN0aW9uLnNoaWZ0KCk7cmV0dXJuIHRoaXMuX3RyYW5zYWN0aW9uLmxlbmd0aD4wJiYodGhpcy5fdHJhbnNhY3Rpb25bMF09dGhpcy5fdHJhbnNhY3Rpb25bMF0uY29uY2F0KHQpKSx0aGlzLl9sb2coXCJDT01NSVQ6IGxldmVsIFwiLmNvbmNhdCh0aGlzLl90cmFuc2FjdGlvbi5sZW5ndGgpKSx0aGlzfX0se2tleTpcInJvbGxiYWNrXCIsdmFsdWU6ZnVuY3Rpb24oKXtpZigwPT09dGhpcy5fdHJhbnNhY3Rpb24ubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcImNhbm5vdCByb2xsYmFjayB0cmFuc2FjdGlvbiAtLSBubyBhY3RpdmUgdHJhbnNhY3Rpb25cIik7dmFyIHQ9dGhpcy5fdHJhbnNhY3Rpb24uc2hpZnQoKTtyZXR1cm4gdGhpcy5fcGVuZGluZz10LmNvbmNhdCh0aGlzLl9wZW5kaW5nKSx0aGlzLl9sb2coXCJST0xMQkFDSzogbGV2ZWwgXCIuY29uY2F0KHRoaXMuX3RyYW5zYWN0aW9uLmxlbmd0aCkpLHRoaXN9fSx7a2V5OlwiYWx0ZXJuYXRpdmVzXCIsdmFsdWU6ZnVuY3Rpb24oKXtmb3IodmFyIHQ9bnVsbCxlPVtdLG49YXJndW1lbnRzLmxlbmd0aCxyPW5ldyBBcnJheShuKSxpPTA7aTxuO2krKylyW2ldPWFyZ3VtZW50c1tpXTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKyl0cnl7dGhpcy5iZWdpbigpLHQ9cltvXS5jYWxsKHRoaXMpLHRoaXMuY29tbWl0KCk7YnJlYWt9Y2F0Y2godCl7dGhpcy5fbG9nKFwiRVhDRVBUSU9OOiBcIi5jb25jYXQodC50b1N0cmluZygpKSksZS5wdXNoKHtleDp0LGRlcHRoOnRoaXMuZGVwdGgoKX0pLHRoaXMucm9sbGJhY2soKTtjb250aW51ZX1pZihudWxsPT09dCYmZS5sZW5ndGg+MCl0aHJvdyhlPWUuc29ydChmdW5jdGlvbih0LGUpe3JldHVybiB0LmRlcHRoLWUuZGVwdGh9KSlbMF0uZXg7cmV0dXJuIHR9fV0pLHR9KCk7VG9rZW5penIuVG9rZW49VG9rZW4sVG9rZW5penIuUGFyc2luZ0Vycm9yPVBhcnNpbmdFcnJvcixUb2tlbml6ci5BY3Rpb25Db250ZXh0PUFjdGlvbkNvbnRleHQsbW9kdWxlLmV4cG9ydHM9VG9rZW5penI7XG59LHt9XX0se30sWzFdKSgxKVxufSk7XG4iLCJcbmZ1bmN0aW9uIGVtcHR5UmVzb2x2ZXIoY29udGV4dCwgZ3JvdXBzKSB7XG4gICAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBcIkVPRlwiOiBlbXB0eVJlc29sdmVyLFxufSIsIlxuZnVuY3Rpb24gY291bnRfY2FwdHVyZV9ncm91cHMocmVnZXgpIHtcbiAgICByZXR1cm4gKG5ldyBSZWdFeHAocmVnZXgudG9TdHJpbmcoKSArICd8JykpLmV4ZWMoJycpLmxlbmd0aCAtIDE7XG59XG5cbm1vZHVsZS5leHBvcnRzLmxvYWRSdWxlcyA9IChsZXhlciwgY3NzX2VsZW1lbnQpID0+IHtcbiAgICBsZXQgcmVzb2x2ZXJzID0ge307XG4gICAgY29uc3QgZmlsZXMgPSByZXF1aXJlKCcuLi9idWlsZC9ydWxlcy1sb2NrLmpzb24nKTtcbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgICAgY29uc3QgcnVsZSA9IHJlcXVpcmUoJy4uL3NyYy9ydWxlcy8nICsgZmlsZSk7XG4gICAgICAgIGlmIChydWxlLnR5cGUgPT09ICd0b2tlbicpIHtcbiAgICAgICAgICAgIGxleGVyLnJ1bGUocnVsZS5ydWxlLCAoY3R4LCBtYXRjaCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcHR1cmVfZ3JvdXBzID0gY291bnRfY2FwdHVyZV9ncm91cHMocnVsZS5ydWxlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXB0dXJlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGNhcHR1cmVfZ3JvdXBzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZXMucHVzaChtYXRjaFtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN0eC5hY2NlcHQocnVsZS5yZXNvbHZlci5uYW1lLCBjYXB0dXJlcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlc29sdmVyc1tydWxlLnJlc29sdmVyLm5hbWVdID0gcnVsZS5yZXNvbHZlcjtcblxuICAgICAgICAgICAgaWYgKHJ1bGUuY3NzKSB7XG4gICAgICAgICAgICAgICAgY3NzX2VsZW1lbnQuaW5uZXJIVE1MICs9IHJ1bGUuY3NzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJ1bGUudHlwZSA9PT0gJ2lnbm9yZScpIHtcbiAgICAgICAgICAgIGxleGVyLnJ1bGUocnVsZS5ydWxlLCAoY3R4LCBtYXRjaCkgPT4ge1xuICAgICAgICAgICAgICAgIGN0eC5pZ25vcmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbG9hZCBkZWZhdWx0IHJlc29sdmVyc1xuICAgIGNvbnN0IGRlZmF1bHRSZXNvbHZlcnMgPSByZXF1aXJlKCcuLi9zcmMvZGVmYXVsdFJlc29sdmVycycpO1xuICAgIHJldHVybiB7Li4uZGVmYXVsdFJlc29sdmVycywgLi4ucmVzb2x2ZXJzfTtcbn0iLCJcbm1vZHVsZS5leHBvcnRzLnJlc29sdmVUb2tlbnMgPSAodG9rZW5zLCByZXNvbHZlcnMpID0+IHtcbiAgICBsZXQgb3V0cHV0ID0gJyc7XG4gICAgY29udGV4dCA9IHt9O1xuICAgIGZvciAoY29uc3QgdG9rZW4gb2YgdG9rZW5zKSB7XG4gICAgICAgIGlmIChyZXNvbHZlcnNbdG9rZW4udHlwZV0pIHtcbiAgICAgICAgICAgIG91dHB1dCArPSByZXNvbHZlcnNbdG9rZW4udHlwZV0oY29udGV4dCwgdG9rZW4udmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyByZXNvbHZlciBmb3VuZCBmb3IgdG9rZW4gdHlwZTonLCB0b2tlbi50eXBlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xufSIsIm1vZHVsZS5leHBvcnRzPWV4cG9ydHM9e307XG5cbmV4cG9ydHMudHlwZT1cInRva2VuXCI7XG5cbmV4cG9ydHMucnVsZT0vXFxuKD4rKVxccyooLiopLztcblxuZXhwb3J0cy5yZXNvbHZlcj1mdW5jdGlvbiBibG9ja1F1b3Rlcyhjb250ZXh0LGdyb3VwcylcbntcbiAgICBsZXQgcXVvdGVOdW09Z3JvdXBzWzBdLmxlbmd0aDtcbiAgICBsZXQgc3RhcnRicV9udW09JzxibG9ja3F1b3RlPicucmVwZWF0KHF1b3RlTnVtKTtcbiAgICBsZXQgZW5kYnFfbnVtPSc8L2Jsb2NrcXVvdGU+Jy5yZXBlYXQocXVvdGVOdW0pO1xuXG4gICAgcmV0dXJuIGAke3N0YXJ0YnFfbnVtfSR7Z3JvdXBzWzFdfSR7ZW5kYnFfbnVtfWA7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0ge307XG5cbmV4cG9ydHMudHlwZT1cInRva2VuXCI7XG5leHBvcnRzLm9yZGVyID0gMTEwO1xuXG5leHBvcnRzLnJ1bGUgPSAvKFxcKnsxLDN9KSguKz8pXFwxLztcblxuZXhwb3J0cy5yZXNvbHZlcj1mdW5jdGlvbiBib2xkSXRhbGljKGNvbnRleHQsZ3JvdXBzKVxue1xuICAgIGxldCBjb3VudEFzdGVyaXNrPWdyb3Vwc1swXS5sZW5ndGg7XG4gICAgaWYoY291bnRBc3Rlcmlzaz09MilcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGA8c3Ryb25nPiR7Z3JvdXBzWzFdfTwvc3Ryb25nPmA7XG4gICAgICAgIH1cbiAgICBlbHNlIGlmKGNvdW50QXN0ZXJpc2s9PTEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBgPGVtPiR7Z3JvdXBzWzFdfTwvZW0+YDsgICBcbiAgICAgICAgfVxuICAgIGVsc2UgaWYoY291bnRBc3Rlcmlzaz09MylcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGA8ZW0+PHN0cm9uZz4ke2dyb3Vwc1sxXX08L3N0cm9uZz48L2VtPmA7ICBcbiAgICAgICAgfVxuXG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgdHlwZTogXCJ0b2tlblwiLFxuICAgIHJ1bGU6IC9cXHI/XFxufFxcci8sXG4gICAgcmVzb2x2ZXI6IGZ1bmN0aW9uIExpbmVCcmVhayhjb250ZXh0LCBncm91cHMpIHtcbiAgICAgICAgLy8gQWx0aG91Z2ggbm90IHVzZWQsIGNvbnRleHQgYW5kIGdyb3VwcyBhcmUgaW5jbHVkZWQgZm9yIGludGVyZmFjZSBjb25zaXN0ZW5jeVxuICAgICAgICByZXR1cm4gYDxicj5gO1xuICAgIH1cbn07IiwibW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0ge307XG5cbmV4cG9ydHMudHlwZSA9IFwidG9rZW5cIjsgLy8gdG9rZW4sIGFzdCwgaWdub3JlXG5leHBvcnRzLm9yZGVyID0gMTAwO1xuXG5leHBvcnRzLnJ1bGUgPSAvKD86XFxyP1xcbnxeKWBgYCguKilcXHI/XFxuKCguKlxccj9cXG4pKj8pYGBgLztcblxuZXhwb3J0cy5jc3MgPSBgXG4uYzJtLWV4dGVuZGVkLWJsb2NrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQwNDA0O1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmMybS1leHRlbmRlZC1ibG9jayBwcmUge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuYDtcblxuZXhwb3J0cy5yZXNvbHZlciA9IGZ1bmN0aW9uIGV4dGVuZGVkQ29kZWJsb2NrIChjb250ZXh0LCBncm91cHMpIHtcbiAgICAvLyBncm91cHNbMF06IGxhbmd1YWdlIGlkZW50aWZpZXIgKG1pZ2h0IGJlIHVzZWQgdG8gZnVydGhlciBwYXJzZSB0aGUgYmxvY2sgaW4gZnV0dXJlKVxuICAgIC8vIGdyb3Vwc1sxXTogY29kZSBibG9jayBjb250ZW50XG4gICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwiYzJtLWV4dGVuZGVkLWJsb2NrXCI+PHByZT4nICsgZ3JvdXBzWzFdICsgJzwvcHJlPjwvZGl2Pic7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0ge307XG5tb2R1bGUub3JkZXI9MTAwO1xuZXhwb3J0cy50eXBlID0gXCJ0b2tlblwiO1xuXG5cbmV4cG9ydHMucnVsZSA9IC9cXFtmYS0oW15cXF1dKylcXF0vO1xuXG5leHBvcnRzLnJlc29sdmVyID0gZnVuY3Rpb24gY3JlYXRlSWNvbihjb250ZXh0LCBncm91cHMpIHtcbiAgICBsZXQgaWNvbk5hbWUgPSBncm91cHNbMF07XG4gICAgcmV0dXJuIGA8aSBjbGFzcz1cImZhIGZhLSR7aWNvbk5hbWV9XCI+PC9pPmA7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IHt9O1xuXG5leHBvcnRzLnR5cGUgPSBcInRva2VuXCI7IC8vIHRva2VuLCBhc3QsIGlnbm9yZVxuXG5leHBvcnRzLnJ1bGUgPSAvKCMrKSguKylcXHI/XFxuPy87XG5cbmV4cG9ydHMucmVzb2x2ZXIgPSBmdW5jdGlvbiBoZWFkaW5nIChjb250ZXh0LCBncm91cHMpIHtcbiAgICBsZXQgaGVhZGluZ19udW1iZXIgPSBNYXRoLm1pbihncm91cHNbMF0ubGVuZ3RoLCA0KTtcbiAgICByZXR1cm4gYDxoJHtoZWFkaW5nX251bWJlcn0+JHtncm91cHNbMV19PC9oJHtoZWFkaW5nX251bWJlcn0+YFxufSIsIm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IHt9O1xuXG5leHBvcnRzLnR5cGUgPSBcInRva2VuXCI7IC8vIHRva2VuLCBhc3QsIGlnbm9yZVxuLy8gZXhwb3J0cy5vcmRlciA9IDEwMDtcblxuZXhwb3J0cy5ydWxlID0gLz09KC4qKT09LztcblxuZXhwb3J0cy5jc3MgPSBgXG4uYzJtIG1hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGQwNDk7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgcGFkZGluZzogMCA1cHg7XG59XG5gO1xuXG5leHBvcnRzLnJlc29sdmVyID0gZnVuY3Rpb24gaGlnaGxpZ2h0ZWRUZXh0IChjb250ZXh0LCBncm91cHMpIHtcbiAgICByZXR1cm4gYDxtYXJrPiR7Z3JvdXBzWzBdfTwvbWFyaz5gO1xufSIsIm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IHt9O1xuXG5leHBvcnRzLnR5cGUgPSBcInRva2VuXCI7IC8vIHRva2VuLCBhc3QsIGlnbm9yZVxuZXhwb3J0cy5vcmRlciA9IDgwO1xuXG5leHBvcnRzLnJ1bGUgPSAvXFxyP1xcbi0rXFxyP1xcbi87XG5cbmV4cG9ydHMuY3NzID0gYFxuLmMybSBociB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjRUJFQ0VEO1xuICAgIG1hcmdpbjogMTVweCAwO1xufVxuYDtcblxuZXhwb3J0cy5yZXNvbHZlciA9IGZ1bmN0aW9uIGhvcml6YW50YWxMaW5lIChjb250ZXh0LCBncm91cHMpIHtcbiAgICByZXR1cm4gYDxocj5gO1xufSIsIm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IHt9O1xubW9kdWxlLm9yZGVyPTEwMDtcbmV4cG9ydHMudHlwZSA9IFwidG9rZW5cIjtcblxuZXhwb3J0cy5ydWxlID0gL1xcWyhbXlxcXV0rKVxcXVxcKChbXildKylcXCkvO1xuXG5leHBvcnRzLnJlc29sdmVyID0gZnVuY3Rpb24gY3JlYXRlTGluayhjb250ZXh0LCBncm91cHMpIHtcbiAgICBsZXQgbGlua1RleHQgPSBncm91cHNbMF07XG4gICAgbGV0IHVybCA9IGdyb3Vwc1sxXTtcblxuICAgIHJldHVybiBgPGEgaHJlZj1cIiR7dXJsfVwiPiR7bGlua1RleHR9PC9hPmA7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0ge307XG5cbmV4cG9ydHMudHlwZSA9IFwidG9rZW5cIjtcblxuZXhwb3J0cy5ydWxlID0gLyFcXFsoLio/KVxcXVxcKCguKj8pXFwpLztcblxuZXhwb3J0cy5yZXNvbHZlciA9IGZ1bmN0aW9uIGNyZWF0ZUltYWdlKGNvbnRleHQsIGdyb3Vwcykge1xuICAgIGxldCBhbHRUZXh0ID0gZ3JvdXBzWzBdO1xuICAgIGxldCB1cmwgPSBncm91cHNbMV07XG5cbiAgICByZXR1cm4gYDxpbWcgc3JjPVwiJHt1cmx9XCIgYWx0PVwiJHthbHRUZXh0fVwiIC8+YDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0ge307XG5cbmV4cG9ydHMudHlwZSA9IFwidG9rZW5cIjsgLy8gdG9rZW4sIGFzdCwgaWdub3JlXG4vLyBleHBvcnRzLm9yZGVyID0gMTAwO1xuXG5leHBvcnRzLnJ1bGUgPSAvYCgoKD86Lio/KVxccj9cXG4/KSo/KWAvO1xuXG5leHBvcnRzLmNzcyA9IGBcbi5jMm0gY29kZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc0NzQ3NTtcbiAgICBwYWRkaW5nOiAxcHggNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbmA7XG5cbmV4cG9ydHMucmVzb2x2ZXIgPSBmdW5jdGlvbiBpbmxpbmVDb2RlYmxvY2sgKGNvbnRleHQsIGdyb3Vwcykge1xuICAgIHJldHVybiBgPGNvZGU+JHtncm91cHNbMF0ucmVwbGFjZSgnXFxuJywgJyAnKS5yZXBsYWNlKCdcXHInLCAnJyl9PC9jb2RlPmA7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0ge307XG5cbmV4cG9ydHMudHlwZSA9IFwidG9rZW5cIjsgLy8gdG9rZW4sIGFzdCwgaWdub3JlXG5leHBvcnRzLm9yZGVyID0gOTU7XG5cbmV4cG9ydHMucnVsZSA9IC8oKD86XFxyP1xcbjFcXC4gLio/KSg/Olxccj9cXG4gKjFcXC4gLio/KSspXFxyP1xcbi87XG5cbmV4cG9ydHMuY3NzID0gYFxuLmMybSBvbCB7XG4gICAgbWFyZ2luOiAwIC0xMHB4O1xuICAgIHR5cGU6IDE7XG59XG5gO1xuXG5cbmZ1bmN0aW9uIHJlc29sdmVJbmRlbnQoaW5kZW50YXRpb25fdHJlZSwgaW5kZW50YXRpb24pIHtcbiAgICBjb25zdCB0cmVlX2luZGV4ID0gaW5kZW50YXRpb25fdHJlZS5maW5kSW5kZXgoKHZhbHVlKSA9PiB2YWx1ZSA9PT0gaW5kZW50YXRpb24pO1xuICAgIGxldCBvdXRwdXQgPSAnJztcbiAgICBpZiAodHJlZV9pbmRleCA9PSAtMSkge1xuICAgICAgICBpZiAoaW5kZW50YXRpb25fdHJlZVtpbmRlbnRhdGlvbl90cmVlLmxlbmd0aCAtIDFdIDwgaW5kZW50YXRpb24pIHtcbiAgICAgICAgICAgIGluZGVudGF0aW9uX3RyZWUucHVzaChpbmRlbnRhdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gJzxvbD4nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVJbmRlbnQoaW5kZW50YXRpb25fdHJlZSwgaW5kZW50YXRpb24tMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgbGV0IHBydl9sZW5ndGggPSBpbmRlbnRhdGlvbl90cmVlLmxlbmd0aFxuICAgICAgICBpbmRlbnRhdGlvbl90cmVlLnNwbGljZSh0cmVlX2luZGV4ICsgMSwgaW5kZW50YXRpb25fdHJlZS5sZW5ndGggLSB0cmVlX2luZGV4IC0gMSk7XG4gICAgICAgIHJldHVybiAnPC9vbD4nLnJlcGVhdChwcnZfbGVuZ3RoIC0gdHJlZV9pbmRleCAtIDEpO1xuICAgIH1cbn1cblxuZXhwb3J0cy5yZXNvbHZlciA9IGZ1bmN0aW9uIG9yZGVyZExpc3QgKGNvbnRleHQsIGdyb3Vwcykge1xuICAgIG91dHB1dCA9ICc8b2w+JztcbiAgICBsZXQgaW5kZW50YXRpb25fdHJlZSA9IFtdO1xuICAgIGdyb3Vwc1swXS50cmltKCkuc3BsaXQoJ1xcbicpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGVudGF0aW9uID0gaXRlbS5tYXRjaCgvXiggKikxXFwuLylbMV0ubGVuZ3RoO1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGl0ZW0ucmVwbGFjZSgvXiggKikxXFwuLywgJycpLnRyaW0oKTtcbiAgICAgICAgaWYgKGluZGVudGF0aW9uX3RyZWUubGVuZ3RoID09IDApIGluZGVudGF0aW9uX3RyZWUucHVzaChpbmRlbnRhdGlvbik7XG5cbiAgICAgICAgY29uc29sZS5sb2cobGlzdEl0ZW0sIGluZGVudGF0aW9uX3RyZWUsIGluZGVudGF0aW9uKTtcblxuICAgICAgICBvdXRwdXQgKz0gcmVzb2x2ZUluZGVudChpbmRlbnRhdGlvbl90cmVlLCBpbmRlbnRhdGlvbik7XG4gICAgICAgIG91dHB1dCArPSBgPGxpPiR7bGlzdEl0ZW19PC9saT5gO1xuICAgIH0pO1xuICAgIG91dHB1dCArPSAnPC9vbD4nLnJlcGVhdChpbmRlbnRhdGlvbl90cmVlLmxlbmd0aCk7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgICAvLyByZXR1cm4gZ3JvdXBzLnRvU3RyaW5nKCk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0ge307XG5cbmV4cG9ydHMudHlwZSA9IFwidG9rZW5cIjsgLy8gdG9rZW4sIGFzdCwgaWdub3JlXG4vLyBleHBvcnRzLm9yZGVyID0gMTAwO1xuXG5leHBvcnRzLnJ1bGUgPSAvKC4pLztcblxuLy8gZXhwb3J0cy5jc3MgPSBgXG4vLyBgO1xuXG5leHBvcnRzLnJlc29sdmVyID0gZnVuY3Rpb24gc2FtcGxlIChjb250ZXh0LCBncm91cHMpIHtcbiAgICByZXR1cm4gZ3JvdXBzLnRvU3RyaW5nKCk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0ge307XG5cbmV4cG9ydHMudHlwZSA9IFwidG9rZW5cIjsgLy8gdG9rZW4sIGFzdCwgaWdub3JlXG5leHBvcnRzLm9yZGVyID0gOTU7XG5cbmV4cG9ydHMucnVsZSA9IC8oKD86XFxyP1xcbi0gLio/KSg/Olxccj9cXG4gKi0gLio/KSspXFxyP1xcbi87XG5cbmV4cG9ydHMuY3NzID0gYFxuLmMybSB1bCB7XG4gICAgbWFyZ2luOiAwIC0xMHB4O1xufVxuYDtcblxuXG5mdW5jdGlvbiByZXNvbHZlSW5kZW50KGluZGVudGF0aW9uX3RyZWUsIGluZGVudGF0aW9uKSB7XG4gICAgY29uc3QgdHJlZV9pbmRleCA9IGluZGVudGF0aW9uX3RyZWUuZmluZEluZGV4KCh2YWx1ZSkgPT4gdmFsdWUgPT09IGluZGVudGF0aW9uKTtcbiAgICBsZXQgb3V0cHV0ID0gJyc7XG4gICAgaWYgKHRyZWVfaW5kZXggPT0gLTEpIHtcbiAgICAgICAgaWYgKGluZGVudGF0aW9uX3RyZWVbaW5kZW50YXRpb25fdHJlZS5sZW5ndGggLSAxXSA8IGluZGVudGF0aW9uKSB7XG4gICAgICAgICAgICBpbmRlbnRhdGlvbl90cmVlLnB1c2goaW5kZW50YXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuICc8dWw+JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlSW5kZW50KGluZGVudGF0aW9uX3RyZWUsIGluZGVudGF0aW9uLTEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGxldCBwcnZfbGVuZ3RoID0gaW5kZW50YXRpb25fdHJlZS5sZW5ndGhcbiAgICAgICAgaW5kZW50YXRpb25fdHJlZS5zcGxpY2UodHJlZV9pbmRleCArIDEsIGluZGVudGF0aW9uX3RyZWUubGVuZ3RoIC0gdHJlZV9pbmRleCAtIDEpO1xuICAgICAgICByZXR1cm4gJzwvdWw+Jy5yZXBlYXQocHJ2X2xlbmd0aCAtIHRyZWVfaW5kZXggLSAxKTtcbiAgICB9XG59XG5cbmV4cG9ydHMucmVzb2x2ZXIgPSBmdW5jdGlvbiB1bm9yZGVyZExpc3QgKGNvbnRleHQsIGdyb3Vwcykge1xuICAgIG91dHB1dCA9ICc8dWw+JztcbiAgICBsZXQgaW5kZW50YXRpb25fdHJlZSA9IFtdO1xuICAgIGdyb3Vwc1swXS50cmltKCkuc3BsaXQoJ1xcbicpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGVudGF0aW9uID0gaXRlbS5tYXRjaCgvXiggKiktLylbMV0ubGVuZ3RoO1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGl0ZW0ucmVwbGFjZSgvXiggKiktLywgJycpLnRyaW0oKTtcbiAgICAgICAgaWYgKGluZGVudGF0aW9uX3RyZWUubGVuZ3RoID09IDApIGluZGVudGF0aW9uX3RyZWUucHVzaChpbmRlbnRhdGlvbik7XG5cbiAgICAgICAgY29uc29sZS5sb2cobGlzdEl0ZW0sIGluZGVudGF0aW9uX3RyZWUsIGluZGVudGF0aW9uKTtcblxuICAgICAgICBvdXRwdXQgKz0gcmVzb2x2ZUluZGVudChpbmRlbnRhdGlvbl90cmVlLCBpbmRlbnRhdGlvbik7XG4gICAgICAgIG91dHB1dCArPSBgPGxpPiR7bGlzdEl0ZW19PC9saT5gO1xuICAgIH0pO1xuICAgIG91dHB1dCArPSAnPC91bD4nLnJlcGVhdChpbmRlbnRhdGlvbl90cmVlLmxlbmd0aCk7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgICAvLyByZXR1cm4gZ3JvdXBzLnRvU3RyaW5nKCk7XG59IiwidmFyIG1hcCA9IHtcblx0XCIuL2Jsb2NrUXVvdGVcIjogXCIuL3NyYy9ydWxlcy9ibG9ja1F1b3RlLmpzXCIsXG5cdFwiLi9ibG9ja1F1b3RlLmpzXCI6IFwiLi9zcmMvcnVsZXMvYmxvY2tRdW90ZS5qc1wiLFxuXHRcIi4vYm9sZEl0YWxpY1RleHRcIjogXCIuL3NyYy9ydWxlcy9ib2xkSXRhbGljVGV4dC5qc1wiLFxuXHRcIi4vYm9sZEl0YWxpY1RleHQuanNcIjogXCIuL3NyYy9ydWxlcy9ib2xkSXRhbGljVGV4dC5qc1wiLFxuXHRcIi4vYnJlYWtMaW5lXCI6IFwiLi9zcmMvcnVsZXMvYnJlYWtMaW5lLmpzXCIsXG5cdFwiLi9icmVha0xpbmUuanNcIjogXCIuL3NyYy9ydWxlcy9icmVha0xpbmUuanNcIixcblx0XCIuL2V4dGVuZGVkQ29kZWJsb2NrXCI6IFwiLi9zcmMvcnVsZXMvZXh0ZW5kZWRDb2RlYmxvY2suanNcIixcblx0XCIuL2V4dGVuZGVkQ29kZWJsb2NrLmpzXCI6IFwiLi9zcmMvcnVsZXMvZXh0ZW5kZWRDb2RlYmxvY2suanNcIixcblx0XCIuL2ZvbnRBd2Vzb21lSWNvblwiOiBcIi4vc3JjL3J1bGVzL2ZvbnRBd2Vzb21lSWNvbi5qc1wiLFxuXHRcIi4vZm9udEF3ZXNvbWVJY29uLmpzXCI6IFwiLi9zcmMvcnVsZXMvZm9udEF3ZXNvbWVJY29uLmpzXCIsXG5cdFwiLi9oZWFkaW5nXCI6IFwiLi9zcmMvcnVsZXMvaGVhZGluZy5qc1wiLFxuXHRcIi4vaGVhZGluZy5qc1wiOiBcIi4vc3JjL3J1bGVzL2hlYWRpbmcuanNcIixcblx0XCIuL2hpZ2hsaWdodGVkVGV4dFwiOiBcIi4vc3JjL3J1bGVzL2hpZ2hsaWdodGVkVGV4dC5qc1wiLFxuXHRcIi4vaGlnaGxpZ2h0ZWRUZXh0LmpzXCI6IFwiLi9zcmMvcnVsZXMvaGlnaGxpZ2h0ZWRUZXh0LmpzXCIsXG5cdFwiLi9ob3JpemFudGFsTGluZVwiOiBcIi4vc3JjL3J1bGVzL2hvcml6YW50YWxMaW5lLmpzXCIsXG5cdFwiLi9ob3JpemFudGFsTGluZS5qc1wiOiBcIi4vc3JjL3J1bGVzL2hvcml6YW50YWxMaW5lLmpzXCIsXG5cdFwiLi9oeXBlcmxpbmtcIjogXCIuL3NyYy9ydWxlcy9oeXBlcmxpbmsuanNcIixcblx0XCIuL2h5cGVybGluay5qc1wiOiBcIi4vc3JjL3J1bGVzL2h5cGVybGluay5qc1wiLFxuXHRcIi4vaW1hZ2VcIjogXCIuL3NyYy9ydWxlcy9pbWFnZS5qc1wiLFxuXHRcIi4vaW1hZ2UuanNcIjogXCIuL3NyYy9ydWxlcy9pbWFnZS5qc1wiLFxuXHRcIi4vaW5saW5lQ29kZWJsb2NrXCI6IFwiLi9zcmMvcnVsZXMvaW5saW5lQ29kZWJsb2NrLmpzXCIsXG5cdFwiLi9pbmxpbmVDb2RlYmxvY2suanNcIjogXCIuL3NyYy9ydWxlcy9pbmxpbmVDb2RlYmxvY2suanNcIixcblx0XCIuL29yZGVyZWRMaXN0XCI6IFwiLi9zcmMvcnVsZXMvb3JkZXJlZExpc3QuanNcIixcblx0XCIuL29yZGVyZWRMaXN0LmpzXCI6IFwiLi9zcmMvcnVsZXMvb3JkZXJlZExpc3QuanNcIixcblx0XCIuL3NhbXBsZVJ1bGVcIjogXCIuL3NyYy9ydWxlcy9zYW1wbGVSdWxlLmpzXCIsXG5cdFwiLi9zYW1wbGVSdWxlLmpzXCI6IFwiLi9zcmMvcnVsZXMvc2FtcGxlUnVsZS5qc1wiLFxuXHRcIi4vdW5vcmRlcmVkTGlzdFwiOiBcIi4vc3JjL3J1bGVzL3Vub3JkZXJlZExpc3QuanNcIixcblx0XCIuL3Vub3JkZXJlZExpc3QuanNcIjogXCIuL3NyYy9ydWxlcy91bm9yZGVyZWRMaXN0LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL3J1bGVzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJjb25zdCB7IGxvYWRSdWxlcyB9ID0gcmVxdWlyZSgnLi9sb2FkUnVsZXMnKTtcbmNvbnN0IFRva2VuaXpyID0gcmVxdWlyZSgndG9rZW5penInKTtcbmNvbnN0IHsgcmVzb2x2ZVRva2VucyB9ID0gcmVxdWlyZSgnLi9yZXNvbHZlVG9rZW5zJyk7XG5sZXQgREVCVUcgPSB0cnVlO1xuXG5sZXQgY3NzX2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuY3NzX2VsZW1lbnQuaWQgPSAnY29kZTJtYXJrZG93bi1jc3MnO1xud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGNzc19lbGVtZW50KTtcblxuICAgIGxldCBjc3MgPSBgXG4gICAgLmMybSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI3MkE7XG4gICAgICAgIGNvbG9yOiAjRUJFQ0VEO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IEludGVyLC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLEhlbHZldGljYSBOZXVlLEhlbHZldGljYSxSb2JvdG8sQXJpYWwsc3lzdGVtLXVpLHNhbnMtc2VyaWYsXCJBcHBsZSBDb2xvciBFbW9qaVwiLFwiU2Vnb2UgVUkgRW1vamlcIixTZWdvZSBVSSBTeW1ib2w7XG4gICAgfVxuICAgIGA7XG5cbiAgICBjc3NfZWxlbWVudC5pbm5lckhUTUwgKz0gY3NzO1xufVxuXG5leHBvcnQgbGV0IGxleGVyID0gbmV3IFRva2VuaXpyKCk7XG5jb25zdCByZXNvbHZlcnMgPSBsb2FkUnVsZXMobGV4ZXIsIGNzc19lbGVtZW50KTtcbmlmIChERUJVRykgY29uc29sZS5sb2coJ1Jlc29sdmVyczonLCByZXNvbHZlcnMpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0KHR4dF9kYXRhKSB7XG4gICAgbGV4ZXIuaW5wdXQodHh0X2RhdGEpO1xuICAgIGxleGVyLmRlYnVnKERFQlVHKTtcbiAgICBjb25zdCB0b2tlbnMgPSBsZXhlci50b2tlbnMoKTtcbiAgICBpZiAoREVCVUcpIGNvbnNvbGUubG9nKCd0b2tlbnM6JywgdG9rZW5zKTtcbiAgICBsZXQgb3V0cHV0ID0gcmVzb2x2ZVRva2Vucyh0b2tlbnMsIHJlc29sdmVycyk7XG4gICAgLy8gbGV0IG91dHB1dCA9IHR4dF9kYXRhO1xuICAgIHJldHVybiBvdXRwdXRcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=