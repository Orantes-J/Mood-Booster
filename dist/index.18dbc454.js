// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"g9TDx":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1SICI":[function(require,module,exports) {
var _helperJs = require("./helper.js");
var _quotesJs = require("./quotes.js");
'use strict';
const htmlBody = document.querySelector('body');
// quote of the day
const quoteOfDay = document.querySelector('.q-o-d');
// anime quote
const insertAnimeQuote = document.querySelector('.quote-holder-anime');
const animeQuoteReq = document.querySelector('.clickedAnime');
// kanye quote
const insertKanyeQuote = document.querySelector('.quote-holder-kanye');
const kanyeQuoteReq = document.querySelector('.clickedKanye');
// wisdom quote
const insertWisdomQuote = document.querySelector('.quote-holder-wise');
const wisdomQuoteReq = document.querySelector('.clickedWise');
// inspirational quote 
// module curious quote
// const insertCuriousQuote = document.querySelector('.quote-holder-curious');
// const curiousQuoteReq = document.querySelector('.clickedCurious');
// mood section buttons
const moodBtns = document.querySelectorAll('.mood-btn');
const endPointTags = [
    'life',
    'technology',
    'wisdom',
    'love',
    'friendship',
    'inspirational'
];
if (module.hot) module.hot.accept();
animeQuoteReq.addEventListener('click', function() {
    fetch('https://animechan.vercel.app/api/random').then((res)=>res.json()
    ).then((quote)=>{
        insertAnimeQuote.innerHTML = ` "${quote.quote}" - ${quote.character}`;
    });
});
kanyeQuoteReq.addEventListener('click', function() {
    fetch('https://api.kanye.rest').then((res)=>res.json()
    ).then((quote)=>{
        insertKanyeQuote.innerHTML = `${quote.quote}`;
    });
});
// lukePeavey <-GITHUB OPEN SOURCE
wisdomQuoteReq.addEventListener('click', function() {
    fetch(`https://api.quotable.io/random?tags=wisdom`).then((res)=>res.json()
    ).then((quote)=>{
        insertWisdomQuote.innerHTML = `"${quote.content}" - ${quote.author}`;
    });
});
// CLEAR PAGES AND GEN HTML MARKUP
const classNames = [
    'h-mood',
    'i-mood',
    'c-mood',
    'd-mood'
];
moodBtns.forEach((btn)=>{
    btn.addEventListener('click', function() {
        if (!btn.textContent) return;
        if (btn.textContent == 'Happy') {
            // htmlBody.classList.add('h-mood'); <- THIS IS ADDS BACKGROUND IMAGE
            _helperJs.clearUi();
            _helperJs.generateMarkupH();
            document.querySelectorAll('.quote').forEach((d)=>d.classList.add('bnedur')
            );
            _helperJs.addEventHOne();
            _helperJs.addEventHTwo();
        }
        if (btn.textContent == 'Down') {
            // htmlBody.classList.add('d-mood'); <- THIS IS ADDS BACKGROUND IMAGE 
            _helperJs.clearUi();
            _helperJs.generateMarkupD();
            document.querySelectorAll('.quote').forEach((d)=>d.classList.add('bnedur')
            );
            _helperJs.addEventDOne();
            _helperJs.addEventDTwo();
        }
        if (btn.textContent == 'Inspired') {
            // htmlBody.classList.add('i-mood'); <- THIS IS ADDS BACKGROUND IMAGE 
            _helperJs.clearUi();
            _helperJs.generateMarkupI();
            document.querySelectorAll('.quote').forEach((d)=>d.classList.add('bnedur')
            );
            _helperJs.addEventIOne();
            _helperJs.addEventITwo();
        }
        if (btn.textContent == 'Curious') {
            // htmlBody.classList.add('c-mood'); <- THIS IS ADDS BACKGROUND IMAGE 
            _helperJs.clearUi();
            _helperJs.generateMarkupC();
            document.querySelectorAll('.quote').forEach((d)=>d.classList.add('bnedur')
            );
            _helperJs.addEventCOne();
            _helperJs.addEventCTwo();
        }
    });
}); // NOTES -> INNER HTML DOES NOT ATTACH EVENT LISTENER BUT WE CAN ALWAYS ADD THE EVENT VIA QUERY SELECTOR && GUARD CLAUSE

},{"./helper.js":"lVRAz","./quotes.js":"6Gg9J"}],"lVRAz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clearContaniner", ()=>clearContaniner
);
parcelHelpers.export(exports, "clearUi", ()=>clearUi
);
parcelHelpers.export(exports, "generateMarkupC", ()=>generateMarkupC
);
parcelHelpers.export(exports, "generateMarkupI", ()=>generateMarkupI
);
parcelHelpers.export(exports, "generateMarkupD", ()=>generateMarkupD
);
parcelHelpers.export(exports, "generateMarkupH", ()=>generateMarkupH
);
parcelHelpers.export(exports, "addEventHOne", ()=>addEventHOne
);
parcelHelpers.export(exports, "addEventHTwo", ()=>addEventHTwo
);
parcelHelpers.export(exports, "addEventDOne", ()=>addEventDOne
);
parcelHelpers.export(exports, "addEventDTwo", ()=>addEventDTwo
);
parcelHelpers.export(exports, "addEventIOne", ()=>addEventIOne
);
parcelHelpers.export(exports, "addEventITwo", ()=>addEventITwo
);
parcelHelpers.export(exports, "addEventCOne", ()=>addEventCOne
);
parcelHelpers.export(exports, "addEventCTwo", ()=>addEventCTwo
);
var _quotesJs = require("./quotes.js");
const quoteContainer = document.querySelector('.quote-ui');
const mainContainer = document.querySelector('.main-container');
const clearContaniner = function() {
    mainContainer.innerHTML = '';
};
const clearUi = function() {
    quoteContainer.innerHTML = '';
// quoteContainer.remove();
};
const generateMarkupC = function() {
    quoteContainer.innerHTML = `
    <div class="sect-wrapper">
    <div class="title-container">
        <h2 class="mid-font">Lets get your curiosity going!</h2>
    </div>
    </div>
    <section>
    <div class="test-quote-div grid-set">
        <div class="image-default-set">
            <img class="image-set" src="thinker-api-img.df757159.jpg" alt="practice image">
        </div>
        <div class="grid-set-inner">
            <div class="jkshkil">
                <p class="quote-holder-c1 quote-set">"Curiosity is the engine of achievement." - Ken Robinson</p>
            </div>
            <div class="mid-font quote">
                <p class="quote">Being open-minded without judging has helped me learn things a lot easier. Consider this strategy in a  controversial topic.</p>
            </div>
        </div>
        <div>
            <button class="clickedC1 btn">Curiosity Quote</button>
        </div>
    </div>
    </section>
    <hr>
    <section>
    <div class="test-quote-div grid-set">
        <div class="image-default-set">
            <img class="image-set" src="/thinking-api-img.05230263.jpg" alt="practice image">
        </div>
        <div class="grid-set-inner">
            <div class="jkshkil">
                <p class="quote-holder-c2 quote-set">"I am the number one most impactful artist of our generation, in the flesh. I am Shakespeare, Walt Disney." - Kanye West</p>
            </div>
            <div class="mid-font quote">
                <p class="quote">To be able to learn, we must stay curious. Let us ask why, how, when, and what. Even for the simplest of things, you will gain a knowledge guarantee.</p>
            </div>
        </div>
        <div>
            <button class="clickedC2 btn">Curiosity Quote</button>
        </div>
    </div>
    </section>
    <hr>
    `;
};
const generateMarkupI = function() {
    quoteContainer.innerHTML = `
    <div class="sect-wrapper">
    <div class="title-container">
        <h2 class="mid-font">Lets get some quotes to inpsire you!</h2>
    </div>
    </div>
    <section>
    <div class="test-quote-div grid-set">
        <div class="image-default-set">
            <img class="image-set" src="bruce-api-img.1324405e.jpg" alt="practice image">
        </div>
        <div class="grid-set-inner">
            <div class="jkshkil">
                <p class="quote-holder-I1 quote-set">"I'm not in this world to live up to your expectations and you're not in this world to live up to mine" - Bruce Lee</p>
            </div>
            <div class="mid-font quote">
                <p class="quote">As a martial artist my-self,  Bruce Lee has had a huge impact on my life. "Be like water" has helped me get where I am today. If something is thrown at you, absorb the impact and throw it away, don't let it have an impact on you.</p>
            </div>
        </div>
        <div>
            <button class="clickedI1 btn">test Quote</button>
        </div>
    </div>
    </section>
    <hr>
    <section>
    <div class="test-quote-div grid-set">
        <div class="image-default-set">
            <img class="image-set" src="/lama-api-img.6c0dea35.jpg" alt="practice image">
        </div>
        <div class="grid-set-inner">
            <div class="jkshkil">
                <p class="quote-holder-I2 quote-set">"I am the number one most impactful artist of our generation, in the flesh. I am Shakespeare, Walt Disney." - Kanye West</p>
            </div>
            <div class="mid-font quote">
                <p class="quote">The Dalai Lama, if you do not know,  is a reincarnation that is aware of his previous lives and continues his mission from his past lives. To create and maintain the peace he has built.</p>
            </div>
        </div>
        <div>
            <button class="clickedI2 btn">Uplifting Quote</button>
        </div>
    </div>
    </section>
    <hr>
    `;
};
const generateMarkupD = function() {
    quoteContainer.innerHTML = `
    <div class="sect-wrapper">
    <div class="title-container">
        <h2 class="mid-font">Lets get some positive quotes going!</h2>
    </div>
    </div>
    <section>
    <div class="test-quote-div grid-set">
        <div class="image-default-set">
            <img class="image-set" src="/alone-api-img-1.ad8730e4.jpg" alt="practice image">
        </div>
        <div class="grid-set-inner">
            <div class="jkshkil">
                <p class="quote-holder-d1 quote-set">"Just because today is a bad day doesn't mean tomorrow won't be the best day of your life. You just gotta get there."</p>
            </div>
            <div class="mid-font quote">
                <p class="quote">The mind is very powerful thing, so it takes the exact amount effort to be happy.</p>
            </div>
        </div>
        <div>
            <button class="clickedd1 btn">Uplifting Quote</button>
        </div>
    </div>
    </section>
    <hr>
    <section>
    <div class="test-quote-div grid-set">
        <div class="image-default-set">
            <img class="image-set" src="alone-api-img-2.3f6ede5a.jpg" alt="practice image">
        </div>
        <div class="grid-set-inner">
            <div class="jkshkil">
                <p class="quote-holder-d2 quote-set">"Whenever you're going through a bad day just remember, your track record for getting through bad days, so far, is 100%. That's pretty darn good."</p>
            </div>
            <div class="mid-font quote">
                <p class="quote">Just because you are down at the moment, do remember that the same reason that got you there will no longer hurt you, you have survived and is now knowledge.</p>
            </div>
        </div>
        <div>
            <button class="clickedd2 btn">Uplifting Quote</button>
        </div>
    </div>
    </section>
    <hr>
    `;
};
const generateMarkupH = function() {
    quoteContainer.innerHTML = `
    <div class="sect-wrapper">
    <div class="title-container">
        <h2 class="mid-font">Lets keep the positive vibes going!</h2>
    </div>
    </div>
    <section>
    <div class="test-quote-div grid-set">
        <div class="image-default-set">
            <img class="image-set" src="/happy-api-img.a96b9dd5.jpg" alt="practice image">
        </div>
        <div class="grid-set-inner">
            <div class="jkshkil">
                <p class="quote-holder-h1 quote-set">"I'm not in this world to live up to your expectations and you're not in this world to live up to mine" - Bruce Lee</p>
            </div>
            <div class="mid-font">
                <p class="quote">I can't say myself that I am happy but I am not mad either, I find everything beautiful. There is so much going on that it would be false advertisement if I said I was happy.</p>
            </div>
        </div>
        <div>
            <button class="clickedHappy btn">Happy Quote</button>
        </div>
    </div>
    </section>
    <hr>
    <section>
    <div class="test-quote-div grid-set">
        <div class="image-default-set">
            <img class="image-set" src="/happy-api-img-2.6f5f29b6.jpg" alt="practice image">
        </div>
        <div class="grid-set-inner">
            <div class="jkshkil">
                <p class="quote-holder-h2 quote-set">"A calm and modest life brings more happiness than the pursuit of success combined with constant restlessness." - Albert Einstein</p>
            </div>
            <div class="mid-font">
                <p class="quote">It takes teh same amnount of effort to be happy as it is to be upset.</p>
            </div>
        </div>
        <div>
            <button class="clickedHappy2 btn">Happy Quote</button>
        </div>
    </div>
    </section>
    <hr>
    `;
};
// Happy
let counterH = 0;
const addEventHOne = function() {
    document.querySelector('.clickedHappy').addEventListener('click', function() {
        const downQuote = _quotesJs.happyQuotes[0][counterH];
        if (downQuote == undefined) counterH = 0;
        document.querySelector('.quote-holder-h1').innerHTML = `${downQuote.quote} - ${downQuote.author}`;
        counterH += 1;
    });
};
let counterH2 = 0;
const addEventHTwo = function() {
    document.querySelector('.clickedHappy2').addEventListener('click', function() {
        const downQuote = _quotesJs.happyQuotes[1][counterH2];
        if (downQuote == undefined) counterH2 = 0;
        document.querySelector('.quote-holder-h2').innerHTML = `${downQuote.quote} - ${downQuote.author}`;
        counterH2 += 1;
    });
};
// Down 
let counterd = 0;
const addEventDOne = function() {
    document.querySelector('.clickedd1').addEventListener('click', function() {
        const downQuote = _quotesJs.downQuotes[0][counterd];
        if (downQuote == undefined) counterd = 0;
        document.querySelector('.quote-holder-d1').innerHTML = `${downQuote.quote} - ${downQuote.author}`;
        counterd += 1;
    });
};
let counterd2 = 0;
const addEventDTwo = function() {
    document.querySelector('.clickedd2').addEventListener('click', function() {
        const downQuote = _quotesJs.downQuotes[1][counterd2];
        if (downQuote == undefined) counterd2 = 0;
        document.querySelector('.quote-holder-d2').innerHTML = `${downQuote.quote} - ${downQuote.author}`;
        counterd2 += 1;
    });
};
// Inspired
let counterI = 0;
const addEventIOne = function() {
    document.querySelector('.clickedI1').addEventListener('click', function() {
        const downQuote = _quotesJs.wiseQuotes[1][counterI];
        if (downQuote == undefined) counterI = 0;
        document.querySelector('.quote-holder-I1').innerHTML = `${downQuote.quote} - ${downQuote.author}`;
        counterI += 1;
    });
};
let counterI2 = 0;
const addEventITwo = function() {
    document.querySelector('.clickedI2').addEventListener('click', function() {
        const downQuote = _quotesJs.wiseQuotes[1][counterI2];
        if (downQuote == undefined) counterI2 = 0;
        document.querySelector('.quote-holder-I2').innerHTML = `${downQuote.quote} - ${downQuote.author}`;
        counterI2 += 1;
    });
};
// Curious
let counterC = 0;
const addEventCOne = function() {
    document.querySelector('.clickedC1').addEventListener('click', function() {
        const downQuote = _quotesJs.downQuotes[0][counterC];
        if (downQuote == undefined) counterC = 0;
        document.querySelector('.quote-holder-c1').innerHTML = `${downQuote.quote} - ${downQuote.author}`;
        counterC += 1;
    });
};
let counterC2 = 0;
const addEventCTwo = function() {
    document.querySelector('.clickedC2').addEventListener('click', function() {
        const downQuote = _quotesJs.downQuotes[1][counterC2];
        if (downQuote == undefined) counterC2 = 0;
        document.querySelector('.quote-holder-c2').innerHTML = `${downQuote.quote} - ${downQuote.author}`;
        counterC2 += 1;
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./quotes.js":"6Gg9J"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"6Gg9J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "happyQuotes", ()=>happyQuotes
);
parcelHelpers.export(exports, "downQuotes", ()=>downQuotes
);
parcelHelpers.export(exports, "curiousQuotes", ()=>curiousQuotes
);
parcelHelpers.export(exports, "wiseQuotes", ()=>wiseQuotes
);
'use strict';
const happyQuotes = [
    [
        {
            "quote": "There is no path to happiness; happiness is the path.",
            "author": "Buddha"
        },
        {
            "quote": "Don't worry. Be happy.",
            "author": "Bobby McFerrin"
        },
        {
            "quote": "I have chosen to be happy because it's good for my health.",
            "author": "Voltaire"
        },
        {
            "quote": "Happiness is a journey, not a destination.",
            "author": "Buddha"
        },
        {
            "quote": "No medicine cures what happiness cannot.",
            "author": "Gabriel García Márquez"
        },
        {
            "quote": "They say a person needs just three things to be truly happy in this world: Someone to love, something to do, and something to hope for.",
            "author": "Tom Bodett"
        },
        {
            "quote": "Let us be grateful to the people who make us happy; they are the charming gardeners who make our souls blossom.",
            "author": "Marcel Proust"
        },
        {
            "quote": "Happiness is a warm puppy.",
            "author": "Charles M. Schulz"
        },
        {
            "quote": "There's nothing like deep breaths after laughing that hard. Nothing in the world like a sore stomach for the right reasons.",
            "author": "Stephen Chbosky"
        },
        {
            "quote": "Sanity and happiness are an impossible combination.",
            "author": "Mark Twain"
        }, 
    ],
    [
        {
            "quote": "You cannot protect yourself from sadness without protecting yourself from happiness.",
            "author": "Jonathan Safran Foer"
        },
        {
            "quote": "It's so hard to forget pain, but it's even harder to remember sweetness. We have no scar to show for happiness. We learn so little from peace.",
            "author": "Chuck Palahniuk"
        },
        {
            "quote": "If you want to be happy, do not dwell in the past, do not worry about the future, focus on living fully in the present.",
            "author": "Roy T. Bennett"
        },
        {
            "quote": "It isn't what you have or who you are or where you are or what you are doing that makes you happy or unhappy. It is what you think about it.",
            "author": "Dale Carnegie"
        },
        {
            "quote": "Happiness is a state of mind. It's just according to the way you look at things.",
            "author": "Walt Disney"
        },
        {
            "quote": "Think of all the beauty still left around you and be happy.",
            "author": "Anne Frank"
        },
        {
            "quote": "Happiness is not a goal...it's a by-product of a life well-lived.",
            "author": "Eleanor Roosevelt"
        },
        {
            "quote": "The best way to cheer yourself is to try to cheer someone else up.",
            "author": "Mark Twain"
        },
        {
            "quote": "Don't cry because it's over, smile because it happened.",
            "author": "Dr. Seuss"
        },
        {
            "quote": "Happiness depends upon ourselves.",
            "author": "Aristotle"
        }, 
    ]
];
const downQuotes = [
    [
        {
            "quote": "Anticipate the difficult by managing the easy.",
            "author": "Lao Tzu"
        },
        {
            "quote": "I believe that every person is born with talent.",
            "author": "Maya Angelou"
        },
        {
            "quote": "Our distrust is very expensive.",
            "author": "Ralph Emerson"
        },
        {
            "quote": "I never think of the future. It comes soon enough",
            "author": "Albert Einstein"
        },
        {
            "quote": "In order to win, you must expect to win.",
            "author": "Richard Bach"
        },
        {
            "quote": "Some pursue happiness, others create it.",
            "author": "null"
        },
        {
            "quote": "Don't ruin the present with the ruined past.",
            "author": "Ellen Gilchrist"
        },
        {
            "quote": "What we think, we become.",
            "author": "Buddha"
        },
        {
            "quote": "The shortest answer is doing.",
            "author": "Lord Herbert"
        },
        {
            "quote": "Our intention creates our reality.",
            "author": "Wayne Dyer"
        }, 
    ],
    [
        {
            "quote": "Not all who wonder are lost.",
            "author": "null"
        },
        {
            "quote": "You know it was a good day if you didn't hit or bite anybody.",
            "author": "Nathaniel Parizek"
        },
        {
            "quote": "Today I will be happier than a bird with a french fry. ",
            "author": "null"
        },
        {
            "quote": "What we see depends mainly on what we look for.",
            "author": "John Lubbock"
        },
        {
            "quote": "We must always change, renew, rejuevenate ourselves. Otherwise we harden.",
            "author": "Goethe"
        },
        {
            "quote": "Consider the postage stamp: its usefulness consists in the ability to stick to one thing 'til it gets there.",
            "author": "Josh Billings"
        },
        {
            "quote": "I always wanted to be somebody, but now I realize I should have been more specific.",
            "author": "Lily Tomlin"
        },
        {
            "quote": "If you're going to be able to look back on something and laugh about it, you might as well laugh about it now.",
            "author": "Marie Osmond"
        },
        {
            "quote": "Here is a test to find whether your mission on earth is finished: If you're alive it isn't.",
            "author": "Richard Bach"
        },
        {
            "quote": "There is nothing in a caterpillar that tells you it's going to be a butterfly.",
            "author": "Buckminster Fuller"
        }, 
    ]
];
const curiousQuotes = [
    [
        {
            "quote": "Speak low, if you speak love.",
            "author": "William Shakespeare"
        },
        {
            "quote": "The greatest remedy for anger is delay.",
            "author": "Seneca"
        },
        {
            "quote": "Wherever you go, go with all your heart.",
            "author": "Confucius"
        },
        {
            "quote": "If the shoe doesn't fit, must we change the foot?",
            "author": "Gloria Steinem"
        },
        {
            "quote": "While we stop to think, we often miss our opportunity.",
            "author": "Publilius Syrus"
        },
        {
            "quote": "Life isn't about finding yourself. Life is about creating yourself.",
            "author": "Bernard Shaw"
        },
        {
            "quote": "Once we accept our limits, we go beyond them.",
            "author": "Albert Einstein"
        },
        {
            "quote": "Never ignore a gut feeling, but never believe that it's enough.",
            "author": "Robert Heller"
        },
        {
            "quote": "The best way out is always through.",
            "author": "Robert Frost"
        },
        {
            "quote": "I destroy my enemies when I make them my friends.",
            "author": "Abraham Lincoln"
        }, 
    ],
    [
        {
            "quote": "The wisest man is he who does not believe he is wise.",
            "author": "Proverb Believe"
        },
        {
            "quote": "The greatest chapters in history always begin with risk, and the same is true with the chapters of your life.",
            "author": "Mark Batterson"
        },
        {
            "quote": "The wise does at once what the fool does at last.",
            "author": "Baltstar Gracian"
        },
        {
            "quote": "A man without dignity is a man without hope.",
            "author": "Andreas Chrysaphes"
        },
        {
            "quote": "The heart can create troubles for the head—the heart knows nothing of logic.",
            "author": "Osho Intution"
        },
        {
            "quote": "Life isn't about finding yourself. Life is about creating yourself.",
            "author": "Bernard Shaw"
        },
        {
            "quote": "Some people are so poor, all they have is money.",
            "author": "Jack Kerouac"
        },
        {
            "quote": "He who has a why to live can bear almost any how.",
            "author": "Friedrich Nietzsche"
        },
        {
            "quote": "Take into account that great love and great achievements involve great risk.",
            "author": "Dalai Lama"
        },
        {
            "quote": "Lost time is never found again.",
            "author": "Benjamin Franklin"
        }, 
    ]
];
const wiseQuotes = [
    [
        {
            "quote": "A clever person solves a problem. A wise person avoids it.",
            "author": "Albert Einstein"
        },
        {
            "quote": "The wise person feels the pain of one arrow. The unwise feels the pain of two.",
            "author": "Kate Carne"
        },
        {
            "quote": "You've heard that it's wise to learn from experience, but it is wiser to learn from the experience of others.",
            "author": "Rick Warren"
        },
        {
            "quote": "Some of us think holding on makes us strong, but sometimes it is letting go.",
            "author": "Hermann Hesse"
        },
        {
            "quote": "Don't waste your time with explanations, people only hear what they want to hear.",
            "author": "Paulo Coelho"
        },
        {
            "quote": "Pain can change you, but that doesn't mean it has to be a bad change. Take that pain and turn it into wisdom.",
            "author": "Dalai Lama"
        },
        {
            "quote": "Faith in God includes faith in God's timing.",
            "author": "Neal A. Maxwell"
        },
        {
            "quote": "If we manage ego wisely, we get the upside it delivers followed by strong returns",
            "author": "dave Marcum"
        },
        {
            "quote": "Be wiser than other people, if you can; but do not tell them so.",
            "author": "Lucius"
        },
        {
            "quote": "Using pride wisely requires a solid grasp of when and why it can go wrong.",
            "author": "David DeSteno"
        }, 
    ],
    [
        {
            "quote": "Knowledge is the crown of the wise, folly is an inheritance of a fool.",
            "author": "Vusi Zitha"
        },
        {
            "quote": "The nature of life is such that the fool does not always fail, nor is the wise man always successful.",
            "author": "Janice Manning"
        },
        {
            "quote": "Only the wisest and stupidest of men never change.",
            "author": "Confucius"
        },
        {
            "quote": "Do not be wise in words be wise in deeds.",
            "author": "Jewish Proverb"
        },
        {
            "quote": "The simple things are also the most extraordinary things, and only the wise can see them.",
            "author": "Paulo Coelho"
        },
        {
            "quote": "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
            "author": "Bruce Lee"
        },
        {
            "quote": "We never have more than we can bear. The present hour we are always able to endure.",
            "author": "H.E Manning"
        },
        {
            "quote": "The wise lack for nothing. The foolish, meanwhile, cannot make good use of anything.",
            "author": "Camille Alice"
        },
        {
            "quote": "Never seem wiser, nor more learned, than the people you are with. Wear your learning, like your watch, in a private pocket: and do not merely pull it out and strike it; merely to show that you have one.",
            "author": "Lord Chesterfield"
        },
        {
            "quote": "Life often teaches us through our wrong turns and missed possibilities.",
            "author": "Anne Wilson Schaef"
        }, 
    ]
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["g9TDx","1SICI"], "1SICI", "parcelRequire8a71")

//# sourceMappingURL=index.18dbc454.js.map
