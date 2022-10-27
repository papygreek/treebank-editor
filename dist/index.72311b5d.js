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
})({"3ASpy":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "43e5f3f672311b5d";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
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
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
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

},{}],"7IvGC":[function(require,module,exports) {
/*
	Copyright 2015 Axinom
	Copyright 2011-2013 Abdulla Abdurakhmanov
	Original sources are available at https://code.google.com/p/x2js/

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
*/ /*
	Supported export methods:
	* AMD
	* <script> (window.X2JS)
	* Node.js

	Limitations:
	* Attribute namespace prefixes are not parsed as such.
	* Overall the serialization/deserializaton code is "best effort" and not foolproof.
*/ // Module definition pattern used is returnExports from https://github.com/umdjs/umd
(function(root, factory) {
    "use strict";
    /* global define */ if (typeof define === "function" && define.amd) // AMD. Register as an anonymous module.
    define([], factory);
    else if (module.exports) // Node. Does not work with strict CommonJS, but only CommonJS-like
    // environments that support module.exports, like Node.
    module.exports = factory(require("@xmldom/xmldom").DOMParser);
    else // Browser globals (root is window)
    root.X2JS = factory();
})(this, function(CustomDOMParser) {
    "use strict";
    // We return a constructor that can be used to make X2JS instances.
    return function X2JS(config) {
        var VERSION = "3.4.0";
        config = config || {};
        function initConfigDefaults() {
            // If set to "property" then <element>_asArray will be created
            // to allow you to access any element as an array (even if there is only one of it).
            config.arrayAccessForm = config.arrayAccessForm || "none";
            // If "text" then <empty></empty> will be transformed to "".
            // If "object" then <empty></empty> will be transformed to {}.
            config.emptyNodeForm = config.emptyNodeForm || "text";
            // Function that will be called for each elements, if the function returns true, the element will be skipped
            // function(name, value) { return true; };
            config.jsAttributeFilter = config.jsAttributeFilter;
            // Function that will be called for each elements, the element value will be replaced by the returned value
            // function(name, value) { return parseFloat(value); };
            config.jsAttributeConverter = config.jsAttributeConverter;
            // Allows attribute values to be converted on the fly during parsing to objects.
            // 	"test": function(name, value) { return true; }
            //	"convert": function(name, value) { return parseFloat(value); };
            // convert() will be called for every attribute where test() returns true
            // and the return value from convert() will replace the original value of the attribute.
            config.attributeConverters = config.attributeConverters || [];
            // Any elements that match the paths here will have their text parsed
            // as an XML datetime value (2011-11-12T13:00:00-07:00 style).
            // The path can be a plain string (parent.child1.child2),
            // a regex (/.*\.child2/) or function(elementPath).
            config.datetimeAccessFormPaths = config.datetimeAccessFormPaths || [];
            // Any elements that match the paths listed here will be stored in JavaScript objects
            // as arrays even if there is only one of them. The path can be a plain string
            // (parent.child1.child2), a regex (/.*\.child2/) or function(elementName, elementPath).
            config.arrayAccessFormPaths = config.arrayAccessFormPaths || [];
            // xmldom constructor arguments
            // @see https://github.com/jindw/xmldom#api-reference
            config.xmldomOptions = config.xmldomOptions || {};
            // If true, a toString function is generated to print nodes containing text or cdata.
            // Useful if you want to accept both plain text and CData as equivalent inputs.
            if (config.enableToStringFunc === undefined) config.enableToStringFunc = true;
            // If true, empty text tags are ignored for elements with child nodes.
            if (config.skipEmptyTextNodesForObj === undefined) config.skipEmptyTextNodesForObj = true;
            // If true, whitespace is trimmed from text nodes.
            if (config.stripWhitespaces === undefined) config.stripWhitespaces = true;
            // If true, double quotes are used in generated XML.
            if (config.useDoubleQuotes === undefined) config.useDoubleQuotes = true;
            // If true, the root element of the XML document is ignored when converting to objects.
            // The result will directly have the root element's children as its own properties.
            if (config.ignoreRoot === undefined) config.ignoreRoot = false;
            // Whether XML characters in text are escaped when reading/writing XML.
            if (config.escapeMode === undefined) config.escapeMode = true;
            // Prefix to use for properties that are created to represent XML attributes.
            if (config.attributePrefix === undefined) config.attributePrefix = "_";
            // If true, empty elements will created as self closing elements (<element />)
            // If false, empty elements will be created with start and end tags (<element></element>)
            if (config.selfClosingElements === undefined) config.selfClosingElements = true;
            // If this property defined as false and an XML element has CData node ONLY, it will be converted to text without additional property "__cdata"
            if (config.keepCData === undefined) config.keepCData = false;
            // If this property defined as true, use { __text: 'abc' } over 'abc'
            if (config.keepText === undefined) config.keepText = false;
            // If true, will output dates in UTC
            if (config.jsDateUTC === undefined) config.jsDateUTC = false;
        }
        function initRequiredPolyfills() {
            function pad(number) {
                var r = String(number);
                if (r.length === 1) r = "0" + r;
                return r;
            }
            // Hello IE8-
            if (typeof String.prototype.trim !== "function") String.prototype.trim = function trim() {
                return this.replace(/^\s+|^\n+|(\s|\n)+$/g, "");
            };
            if (typeof Date.prototype.toISOString !== "function") // Implementation from http://stackoverflow.com/questions/2573521/how-do-i-output-an-iso-8601-formatted-string-in-javascript
            Date.prototype.toISOString = function toISOString() {
                var MS_IN_S = 1000;
                return this.getUTCFullYear() + "-" + pad(this.getUTCMonth() + 1) + "-" + pad(this.getUTCDate()) + "T" + pad(this.getUTCHours()) + ":" + pad(this.getUTCMinutes()) + ":" + pad(this.getUTCSeconds()) + "." + String((this.getUTCMilliseconds() / MS_IN_S).toFixed(3)).slice(2, 5) + "Z";
            };
        }
        initConfigDefaults();
        initRequiredPolyfills();
        var DOMNodeTypes = {
            "ELEMENT_NODE": 1,
            "TEXT_NODE": 3,
            "CDATA_SECTION_NODE": 4,
            "COMMENT_NODE": 8,
            "DOCUMENT_NODE": 9
        };
        function getDomNodeLocalName(domNode) {
            var localName = domNode.localName;
            if (localName == null) // Yeah, this is IE!!
            localName = domNode.baseName;
            if (localName == null || localName === "") // ==="" is IE too
            localName = domNode.nodeName;
            return localName;
        }
        function getDomNodeNamespacePrefix(node) {
            return node.prefix;
        }
        function escapeXmlChars(str) {
            if (typeof str === "string") return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
            else return str;
        }
        function unescapeXmlChars(str) {
            return str.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&amp;/g, "&");
        }
        function ensureProperArrayAccessForm(element, childName, elementPath) {
            switch(config.arrayAccessForm){
                case "property":
                    if (!(element[childName] instanceof Array)) element[childName + "_asArray"] = [
                        element[childName]
                    ];
                    else element[childName + "_asArray"] = element[childName];
                    break;
            }
            if (!(element[childName] instanceof Array) && config.arrayAccessFormPaths.length > 0) {
                var match = false;
                for(var i = 0; i < config.arrayAccessFormPaths.length; i++){
                    var arrayPath = config.arrayAccessFormPaths[i];
                    if (typeof arrayPath === "string") {
                        if (arrayPath === elementPath) {
                            match = true;
                            break;
                        }
                    } else if (arrayPath instanceof RegExp) {
                        if (arrayPath.test(elementPath)) {
                            match = true;
                            break;
                        }
                    } else if (typeof arrayPath === "function") {
                        if (arrayPath(childName, elementPath)) {
                            match = true;
                            break;
                        }
                    }
                }
                if (match) element[childName] = [
                    element[childName]
                ];
            }
        }
        function xmlDateTimeToDate(prop) {
            // Implementation based up on http://stackoverflow.com/questions/8178598/xml-datetime-to-javascript-date-object
            // Improved to support full spec and optional parts
            var MINUTES_PER_HOUR = 60;
            var bits = prop.split(/[-T:+Z]/g);
            var d = new Date(bits[0], bits[1] - 1, bits[2]);
            var secondBits = bits[5].split(".");
            d.setHours(bits[3], bits[4], secondBits[0]);
            if (secondBits.length > 1) d.setMilliseconds(secondBits[1]);
            // Get supplied time zone offset in minutes
            if (bits[6] && bits[7]) {
                var offsetMinutes = bits[6] * MINUTES_PER_HOUR + Number(bits[7]);
                var sign = /\d\d-\d\d:\d\d$/.test(prop) ? "-" : "+";
                // Apply the sign
                offsetMinutes = 0 + (sign === "-" ? -1 * offsetMinutes : offsetMinutes);
                // Apply offset and local timezone
                d.setMinutes(d.getMinutes() - offsetMinutes - d.getTimezoneOffset());
            } else if (prop.indexOf("Z", prop.length - 1) !== -1) d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds()));
            // d is now a local time equivalent to the supplied time
            return d;
        }
        function convertToDateIfRequired(value, childName, fullPath) {
            if (config.datetimeAccessFormPaths.length > 0) {
                var pathWithoutTextNode = fullPath.split(".#")[0];
                for(var i = 0; i < config.datetimeAccessFormPaths.length; i++){
                    var candidatePath = config.datetimeAccessFormPaths[i];
                    if (typeof candidatePath === "string") {
                        if (candidatePath === pathWithoutTextNode) return xmlDateTimeToDate(value);
                    } else if (candidatePath instanceof RegExp) {
                        if (candidatePath.test(pathWithoutTextNode)) return xmlDateTimeToDate(value);
                    } else if (typeof candidatePath === "function") {
                        if (candidatePath(pathWithoutTextNode)) return xmlDateTimeToDate(value);
                    }
                }
            }
            return value;
        }
        function deserializeRootElementChildren(rootElement) {
            var result = {};
            var children = rootElement.childNodes;
            // Alternative for firstElementChild which is not supported in some environments
            for(var i = 0; i < children.length; i++){
                var child = children.item(i);
                if (child.nodeType === DOMNodeTypes.ELEMENT_NODE) {
                    var childName = getDomNodeLocalName(child);
                    if (config.ignoreRoot) result = deserializeDomChildren(child, childName);
                    else result[childName] = deserializeDomChildren(child, childName);
                }
            }
            return result;
        }
        function deserializeElementChildren(element, elementPath) {
            var result = {};
            result.__cnt = 0;
            var nodeChildren = element.childNodes;
            // Child nodes.
            for(var iChild = 0; iChild < nodeChildren.length; iChild++){
                var child = nodeChildren.item(iChild);
                var childName = getDomNodeLocalName(child);
                if (child.nodeType === DOMNodeTypes.COMMENT_NODE) continue;
                result.__cnt++;
                // We deliberately do not accept everything falsey here because
                // elements that resolve to empty string should still be preserved.
                if (result[childName] == null) {
                    result[childName] = deserializeDomChildren(child, elementPath + "." + childName);
                    ensureProperArrayAccessForm(result, childName, elementPath + "." + childName);
                } else {
                    if (!(result[childName] instanceof Array)) {
                        result[childName] = [
                            result[childName]
                        ];
                        ensureProperArrayAccessForm(result, childName, elementPath + "." + childName);
                    }
                    result[childName][result[childName].length] = deserializeDomChildren(child, elementPath + "." + childName);
                }
            }
            // Attributes
            for(var iAttribute = 0; iAttribute < element.attributes.length; iAttribute++){
                var attribute = element.attributes.item(iAttribute);
                result.__cnt++;
                var adjustedValue = attribute.value;
                for(var iConverter = 0; iConverter < config.attributeConverters.length; iConverter++){
                    var converter = config.attributeConverters[iConverter];
                    if (converter.test.call(null, attribute.name, attribute.value)) adjustedValue = converter.convert.call(null, attribute.name, attribute.value);
                }
                result[config.attributePrefix + attribute.name] = adjustedValue;
            }
            // Node namespace prefix
            var namespacePrefix = getDomNodeNamespacePrefix(element);
            if (namespacePrefix) {
                result.__cnt++;
                result.__prefix = namespacePrefix;
            }
            if (result["#text"]) {
                result.__text = result["#text"];
                if (result.__text instanceof Array) result.__text = result.__text.join("\n");
                if (config.escapeMode) result.__text = unescapeXmlChars(result.__text);
                if (config.stripWhitespaces) result.__text = result.__text.trim();
                delete result["#text"];
                if (config.arrayAccessForm === "property") delete result["#text_asArray"];
                result.__text = convertToDateIfRequired(result.__text, "#text", elementPath + ".#text");
            }
            if (result.hasOwnProperty("#cdata-section")) {
                result.__cdata = result["#cdata-section"];
                delete result["#cdata-section"];
                if (config.arrayAccessForm === "property") delete result["#cdata-section_asArray"];
            }
            if (result.__cnt === 1 && result.__text && !config.keepText) result = result.__text;
            else if (result.__cnt === 0 && config.emptyNodeForm === "text") result = "";
            else if (result.__cnt > 1 && result.__text !== undefined && config.skipEmptyTextNodesForObj) {
                if (config.stripWhitespaces && result.__text === "" || result.__text.trim() === "") delete result.__text;
            }
            delete result.__cnt;
            /**
			 * We are checking if we are creating a __cdata property or if we just add the content of cdata inside result.
			 * But, if we have a property inside xml tag (<tag PROPERTY="1"></tag>), and a cdata inside, we can't ignore it.
			 * In this case we are keeping __cdata property.
			 */ if (!config.keepCData && !result.hasOwnProperty("__text") && result.hasOwnProperty("__cdata") && Object.keys(result).length === 1) return result.__cdata ? result.__cdata : "";
            if (config.enableToStringFunc && (result.__text || result.__cdata)) result.toString = function toString() {
                return (this.__text ? this.__text : "") + (this.__cdata ? this.__cdata : "");
            };
            return result;
        }
        function deserializeDomChildren(node, parentPath) {
            if (node.nodeType === DOMNodeTypes.DOCUMENT_NODE) return deserializeRootElementChildren(node);
            else if (node.nodeType === DOMNodeTypes.ELEMENT_NODE) return deserializeElementChildren(node, parentPath);
            else if (node.nodeType === DOMNodeTypes.TEXT_NODE || node.nodeType === DOMNodeTypes.CDATA_SECTION_NODE) return node.nodeValue;
            else return null;
        }
        function serializeStartTag(jsObject, elementName, attributeNames, selfClosing) {
            var resultStr = "<" + (jsObject && jsObject.__prefix ? jsObject.__prefix + ":" : "") + elementName;
            if (attributeNames) for(var i = 0; i < attributeNames.length; i++){
                var attributeName = attributeNames[i];
                var attributeValue = jsObject[attributeName];
                if (config.escapeMode) attributeValue = escapeXmlChars(attributeValue);
                resultStr += " " + attributeName.substr(config.attributePrefix.length) + "=";
                if (config.useDoubleQuotes) resultStr += '"' + attributeValue + '"';
                else resultStr += "'" + attributeValue + "'";
            }
            if (!selfClosing) resultStr += ">";
            else resultStr += " />";
            return resultStr;
        }
        function serializeEndTag(jsObject, elementName) {
            return "</" + (jsObject && jsObject.__prefix ? jsObject.__prefix + ":" : "") + elementName + ">";
        }
        function endsWith(str, suffix) {
            return str.indexOf(suffix, str.length - suffix.length) !== -1;
        }
        function isSpecialProperty(jsonObj, propertyName) {
            if (config.arrayAccessForm === "property" && endsWith(propertyName.toString(), "_asArray") || propertyName.toString().indexOf(config.attributePrefix) === 0 || propertyName.toString().indexOf("__") === 0 || jsonObj[propertyName] instanceof Function) return true;
            else return false;
        }
        function getDataElementCount(jsObject) {
            var count = 0;
            if (jsObject instanceof Object) for(var propertyName in jsObject){
                if (isSpecialProperty(jsObject, propertyName)) continue;
                count++;
            }
            return count;
        }
        function getDataAttributeNames(jsObject) {
            var names = [];
            if (jsObject instanceof Object) {
                for(var attributeName in jsObject)if (attributeName.toString().indexOf("__") === -1 && attributeName.toString().indexOf(config.attributePrefix) === 0) names.push(attributeName);
            }
            return names;
        }
        function serializeComplexTextNodeContents(textNode) {
            var result = "";
            if (textNode.__cdata) result += "<![CDATA[" + textNode.__cdata + "]]>";
            if (textNode.__text || typeof textNode.__text === "number" || typeof textNode.__text === "boolean") {
                if (config.escapeMode) result += escapeXmlChars(textNode.__text);
                else result += textNode.__text;
            }
            return result;
        }
        function serializeTextNodeContents(textNode) {
            var result = "";
            if (textNode instanceof Object) result += serializeComplexTextNodeContents(textNode);
            else if (textNode !== null) {
                if (config.escapeMode) result += escapeXmlChars(textNode);
                else result += textNode;
            }
            return result;
        }
        function serializeArray(elementArray, elementName, attributes) {
            var result = "";
            if (elementArray.length === 0) result += serializeStartTag(elementArray, elementName, attributes, true);
            else for(var i = 0; i < elementArray.length; i++)result += serializeJavaScriptObject(elementArray[i], elementName, getDataAttributeNames(elementArray[i]));
            return result;
        }
        function serializeJavaScriptObject(element, elementName, attributes) {
            var result = "";
            // Filter out elements
            if (config.jsAttributeFilter && config.jsAttributeFilter.call(null, elementName, element)) return result;
            // Convert element
            if (config.jsAttributeConverter) element = config.jsAttributeConverter.call(null, elementName, element);
            if ((element === undefined || element === null || element === "") && config.selfClosingElements) result += serializeStartTag(element, elementName, attributes, true);
            else if (typeof element === "object") {
                if (Object.prototype.toString.call(element) === "[object Array]") result += serializeArray(element, elementName, attributes);
                else if (element instanceof Date) {
                    result += serializeStartTag(element, elementName, attributes, false);
                    // Serialize date
                    result += config.jsDateUTC ? element.toUTCString() : element.toISOString();
                    result += serializeEndTag(element, elementName);
                } else {
                    var childElementCount = getDataElementCount(element);
                    if (childElementCount > 0 || typeof element.__text === "number" || typeof element.__text === "boolean" || element.__text || element.__cdata) {
                        result += serializeStartTag(element, elementName, attributes, false);
                        result += serializeJavaScriptObjectChildren(element);
                        result += serializeEndTag(element, elementName);
                    } else if (config.selfClosingElements) result += serializeStartTag(element, elementName, attributes, true);
                    else {
                        result += serializeStartTag(element, elementName, attributes, false);
                        result += serializeEndTag(element, elementName);
                    }
                }
            } else {
                result += serializeStartTag(element, elementName, attributes, false);
                result += serializeTextNodeContents(element);
                result += serializeEndTag(element, elementName);
            }
            return result;
        }
        function serializeJavaScriptObjectChildren(jsObject) {
            var result = "";
            var elementCount = getDataElementCount(jsObject);
            if (elementCount > 0) for(var elementName in jsObject){
                if (isSpecialProperty(jsObject, elementName)) continue;
                var element = jsObject[elementName];
                var attributes = getDataAttributeNames(element);
                result += serializeJavaScriptObject(element, elementName, attributes);
            }
            result += serializeTextNodeContents(jsObject);
            return result;
        }
        function parseXml(xml) {
            if (xml === undefined) return null;
            if (typeof xml !== "string") return null;
            var parser = null;
            var domNode = null;
            if (CustomDOMParser) {
                // This branch is used for node.js, with the xmldom parser.
                parser = new CustomDOMParser(config.xmldomOptions);
                domNode = parser.parseFromString(xml, "text/xml");
            } else if (window && window.DOMParser) {
                parser = new window.DOMParser();
                var parsererrorNS = null;
                var isIEParser = window.ActiveXObject || "ActiveXObject" in window;
                // IE9+ now is here
                if (!isIEParser && document.all && !document.addEventListener) try {
                    parsererrorNS = parser.parseFromString("INVALID", "text/xml").childNodes[0].namespaceURI;
                } catch (err) {
                    parsererrorNS = null;
                }
                try {
                    domNode = parser.parseFromString(xml, "text/xml");
                    if (parsererrorNS !== null && domNode.getElementsByTagNameNS(parsererrorNS, "parsererror").length > 0) domNode = null;
                } catch (err1) {
                    domNode = null;
                }
            } else {
                // IE :(
                if (xml.indexOf("<?") === 0) xml = xml.substr(xml.indexOf("?>") + 2);
                /* global ActiveXObject */ domNode = new ActiveXObject("Microsoft.XMLDOM");
                domNode.async = "false";
                domNode.loadXML(xml);
            }
            return domNode;
        }
        this.asArray = function asArray(prop) {
            if (prop === undefined || prop === null) return [];
            else if (prop instanceof Array) return prop;
            else return [
                prop
            ];
        };
        this.toXmlDateTime = function toXmlDateTime(dt) {
            if (dt instanceof Date) return dt.toISOString();
            else if (typeof dt === "number") return new Date(dt).toISOString();
            else return null;
        };
        this.asDateTime = function asDateTime(prop) {
            if (typeof prop === "string") return xmlDateTimeToDate(prop);
            else return prop;
        };
        /*
			Internally the logic works in a cycle:
			DOM->JS - implemented by custom logic (deserialization).
			JS->XML - implemented by custom logic (serialization).
			XML->DOM - implemented by browser.
		*/ // Transformns an XML string into DOM-tree
        this.xml2dom = function xml2dom(xml) {
            return parseXml(xml);
        };
        // Transforms a DOM tree to JavaScript objects.
        this.dom2js = function dom2js(domNode) {
            return deserializeDomChildren(domNode, null);
        };
        // Transforms JavaScript objects to a DOM tree.
        this.js2dom = function js2dom(jsObject) {
            var xml = this.js2xml(jsObject);
            return parseXml(xml);
        };
        // Transformns an XML string into JavaScript objects.
        this.xml2js = function xml2js(xml) {
            var domNode = parseXml(xml);
            if (domNode != null) return this.dom2js(domNode);
            else return null;
        };
        // Transforms JavaScript objects into an XML string.
        this.js2xml = function js2xml(jsObject) {
            return serializeJavaScriptObjectChildren(jsObject);
        };
        this.getVersion = function getVersion() {
            return VERSION;
        };
    };
});

},{"@xmldom/xmldom":"1RL7t"}],"1RL7t":[function(require,module,exports) {
var dom = require("./dom");
exports.DOMImplementation = dom.DOMImplementation;
exports.XMLSerializer = dom.XMLSerializer;
exports.DOMParser = require("./dom-parser").DOMParser;

},{"./dom":"dpcBR","./dom-parser":"ec9jr"}],"dpcBR":[function(require,module,exports) {
var conventions = require("./conventions");
var NAMESPACE = conventions.NAMESPACE;
/**
 * A prerequisite for `[].filter`, to drop elements that are empty
 * @param {string} input
 * @returns {boolean}
 */ function notEmptyString(input) {
    return input !== "";
}
/**
 * @see https://infra.spec.whatwg.org/#split-on-ascii-whitespace
 * @see https://infra.spec.whatwg.org/#ascii-whitespace
 *
 * @param {string} input
 * @returns {string[]} (can be empty)
 */ function splitOnASCIIWhitespace(input) {
    // U+0009 TAB, U+000A LF, U+000C FF, U+000D CR, U+0020 SPACE
    return input ? input.split(/[\t\n\f\r ]+/).filter(notEmptyString) : [];
}
/**
 * Adds element as a key to current if it is not already present.
 *
 * @param {Record<string, boolean | undefined>} current
 * @param {string} element
 * @returns {Record<string, boolean | undefined>}
 */ function orderedSetReducer(current, element) {
    if (!current.hasOwnProperty(element)) current[element] = true;
    return current;
}
/**
 * @see https://infra.spec.whatwg.org/#ordered-set
 * @param {string} input
 * @returns {string[]}
 */ function toOrderedSet(input) {
    if (!input) return [];
    var list = splitOnASCIIWhitespace(input);
    return Object.keys(list.reduce(orderedSetReducer, {}));
}
/**
 * Uses `list.indexOf` to implement something like `Array.prototype.includes`,
 * which we can not rely on being available.
 *
 * @param {any[]} list
 * @returns {function(any): boolean}
 */ function arrayIncludes(list) {
    return function(element) {
        return list && list.indexOf(element) !== -1;
    };
}
function copy(src, dest) {
    for(var p in src)if (Object.prototype.hasOwnProperty.call(src, p)) dest[p] = src[p];
}
/**
^\w+\.prototype\.([_\w]+)\s*=\s*((?:.*\{\s*?[\r\n][\s\S]*?^})|\S.*?(?=[;\r\n]));?
^\w+\.prototype\.([_\w]+)\s*=\s*(\S.*?(?=[;\r\n]));?
 */ function _extends(Class, Super) {
    var pt = Class.prototype;
    if (!(pt instanceof Super)) {
        function t() {}
        t.prototype = Super.prototype;
        t = new t();
        copy(pt, t);
        Class.prototype = pt = t;
    }
    if (pt.constructor != Class) {
        if (typeof Class != "function") console.error("unknown Class:" + Class);
        pt.constructor = Class;
    }
}
// Node Types
var NodeType = {};
var ELEMENT_NODE = NodeType.ELEMENT_NODE = 1;
var ATTRIBUTE_NODE = NodeType.ATTRIBUTE_NODE = 2;
var TEXT_NODE = NodeType.TEXT_NODE = 3;
var CDATA_SECTION_NODE = NodeType.CDATA_SECTION_NODE = 4;
var ENTITY_REFERENCE_NODE = NodeType.ENTITY_REFERENCE_NODE = 5;
var ENTITY_NODE = NodeType.ENTITY_NODE = 6;
var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
var COMMENT_NODE = NodeType.COMMENT_NODE = 8;
var DOCUMENT_NODE = NodeType.DOCUMENT_NODE = 9;
var DOCUMENT_TYPE_NODE = NodeType.DOCUMENT_TYPE_NODE = 10;
var DOCUMENT_FRAGMENT_NODE = NodeType.DOCUMENT_FRAGMENT_NODE = 11;
var NOTATION_NODE = NodeType.NOTATION_NODE = 12;
// ExceptionCode
var ExceptionCode = {};
var ExceptionMessage = {};
var INDEX_SIZE_ERR = ExceptionCode.INDEX_SIZE_ERR = (ExceptionMessage[1] = "Index size error", 1);
var DOMSTRING_SIZE_ERR = ExceptionCode.DOMSTRING_SIZE_ERR = (ExceptionMessage[2] = "DOMString size error", 2);
var HIERARCHY_REQUEST_ERR = ExceptionCode.HIERARCHY_REQUEST_ERR = (ExceptionMessage[3] = "Hierarchy request error", 3);
var WRONG_DOCUMENT_ERR = ExceptionCode.WRONG_DOCUMENT_ERR = (ExceptionMessage[4] = "Wrong document", 4);
var INVALID_CHARACTER_ERR = ExceptionCode.INVALID_CHARACTER_ERR = (ExceptionMessage[5] = "Invalid character", 5);
var NO_DATA_ALLOWED_ERR = ExceptionCode.NO_DATA_ALLOWED_ERR = (ExceptionMessage[6] = "No data allowed", 6);
var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = (ExceptionMessage[7] = "No modification allowed", 7);
var NOT_FOUND_ERR = ExceptionCode.NOT_FOUND_ERR = (ExceptionMessage[8] = "Not found", 8);
var NOT_SUPPORTED_ERR = ExceptionCode.NOT_SUPPORTED_ERR = (ExceptionMessage[9] = "Not supported", 9);
var INUSE_ATTRIBUTE_ERR = ExceptionCode.INUSE_ATTRIBUTE_ERR = (ExceptionMessage[10] = "Attribute in use", 10);
//level2
var INVALID_STATE_ERR = ExceptionCode.INVALID_STATE_ERR = (ExceptionMessage[11] = "Invalid state", 11);
var SYNTAX_ERR = ExceptionCode.SYNTAX_ERR = (ExceptionMessage[12] = "Syntax error", 12);
var INVALID_MODIFICATION_ERR = ExceptionCode.INVALID_MODIFICATION_ERR = (ExceptionMessage[13] = "Invalid modification", 13);
var NAMESPACE_ERR = ExceptionCode.NAMESPACE_ERR = (ExceptionMessage[14] = "Invalid namespace", 14);
var INVALID_ACCESS_ERR = ExceptionCode.INVALID_ACCESS_ERR = (ExceptionMessage[15] = "Invalid access", 15);
/**
 * DOM Level 2
 * Object DOMException
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * @see http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html
 */ function DOMException(code, message) {
    if (message instanceof Error) var error = message;
    else {
        error = this;
        Error.call(this, ExceptionMessage[code]);
        this.message = ExceptionMessage[code];
        if (Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
    }
    error.code = code;
    if (message) this.message = this.message + ": " + message;
    return error;
}
DOMException.prototype = Error.prototype;
copy(ExceptionCode, DOMException);
/**
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-536297177
 * The NodeList interface provides the abstraction of an ordered collection of nodes, without defining or constraining how this collection is implemented. NodeList objects in the DOM are live.
 * The items in the NodeList are accessible via an integral index, starting from 0.
 */ function NodeList() {}
NodeList.prototype = {
    /**
	 * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
	 * @standard level1
	 */ length: 0,
    /**
	 * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
	 * @standard level1
	 * @param index  unsigned long 
	 *   Index into the collection.
	 * @return Node
	 * 	The node at the indexth position in the NodeList, or null if that is not a valid index. 
	 */ item: function(index) {
        return this[index] || null;
    },
    toString: function(isHTML, nodeFilter) {
        for(var buf = [], i = 0; i < this.length; i++)serializeToString(this[i], buf, isHTML, nodeFilter);
        return buf.join("");
    }
};
function LiveNodeList(node, refresh) {
    this._node = node;
    this._refresh = refresh;
    _updateLiveList(this);
}
function _updateLiveList(list) {
    var inc = list._node._inc || list._node.ownerDocument._inc;
    if (list._inc != inc) {
        var ls = list._refresh(list._node);
        //console.log(ls.length)
        __set__(list, "length", ls.length);
        copy(ls, list);
        list._inc = inc;
    }
}
LiveNodeList.prototype.item = function(i) {
    _updateLiveList(this);
    return this[i];
};
_extends(LiveNodeList, NodeList);
/**
 * Objects implementing the NamedNodeMap interface are used
 * to represent collections of nodes that can be accessed by name.
 * Note that NamedNodeMap does not inherit from NodeList;
 * NamedNodeMaps are not maintained in any particular order.
 * Objects contained in an object implementing NamedNodeMap may also be accessed by an ordinal index,
 * but this is simply to allow convenient enumeration of the contents of a NamedNodeMap,
 * and does not imply that the DOM specifies an order to these Nodes.
 * NamedNodeMap objects in the DOM are live.
 * used for attributes or DocumentType entities 
 */ function NamedNodeMap() {}
function _findNodeIndex(list, node) {
    var i = list.length;
    while(i--){
        if (list[i] === node) return i;
    }
}
function _addNamedNode(el, list, newAttr, oldAttr) {
    if (oldAttr) list[_findNodeIndex(list, oldAttr)] = newAttr;
    else list[list.length++] = newAttr;
    if (el) {
        newAttr.ownerElement = el;
        var doc = el.ownerDocument;
        if (doc) {
            oldAttr && _onRemoveAttribute(doc, el, oldAttr);
            _onAddAttribute(doc, el, newAttr);
        }
    }
}
function _removeNamedNode(el, list, attr) {
    //console.log('remove attr:'+attr)
    var i = _findNodeIndex(list, attr);
    if (i >= 0) {
        var lastIndex = list.length - 1;
        while(i < lastIndex)list[i] = list[++i];
        list.length = lastIndex;
        if (el) {
            var doc = el.ownerDocument;
            if (doc) {
                _onRemoveAttribute(doc, el, attr);
                attr.ownerElement = null;
            }
        }
    } else throw DOMException(NOT_FOUND_ERR, new Error(el.tagName + "@" + attr));
}
NamedNodeMap.prototype = {
    length: 0,
    item: NodeList.prototype.item,
    getNamedItem: function(key) {
        //		if(key.indexOf(':')>0 || key == 'xmlns'){
        //			return null;
        //		}
        //console.log()
        var i = this.length;
        while(i--){
            var attr = this[i];
            //console.log(attr.nodeName,key)
            if (attr.nodeName == key) return attr;
        }
    },
    setNamedItem: function(attr) {
        var el = attr.ownerElement;
        if (el && el != this._ownerElement) throw new DOMException(INUSE_ATTRIBUTE_ERR);
        var oldAttr = this.getNamedItem(attr.nodeName);
        _addNamedNode(this._ownerElement, this, attr, oldAttr);
        return oldAttr;
    },
    /* returns Node */ setNamedItemNS: function(attr) {
        var el = attr.ownerElement, oldAttr;
        if (el && el != this._ownerElement) throw new DOMException(INUSE_ATTRIBUTE_ERR);
        oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);
        _addNamedNode(this._ownerElement, this, attr, oldAttr);
        return oldAttr;
    },
    /* returns Node */ removeNamedItem: function(key) {
        var attr = this.getNamedItem(key);
        _removeNamedNode(this._ownerElement, this, attr);
        return attr;
    },
    //for level2
    removeNamedItemNS: function(namespaceURI, localName) {
        var attr = this.getNamedItemNS(namespaceURI, localName);
        _removeNamedNode(this._ownerElement, this, attr);
        return attr;
    },
    getNamedItemNS: function(namespaceURI, localName) {
        var i = this.length;
        while(i--){
            var node = this[i];
            if (node.localName == localName && node.namespaceURI == namespaceURI) return node;
        }
        return null;
    }
};
/**
 * The DOMImplementation interface represents an object providing methods
 * which are not dependent on any particular document.
 * Such an object is returned by the `Document.implementation` property.
 *
 * __The individual methods describe the differences compared to the specs.__
 *
 * @constructor
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation MDN
 * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-102161490 DOM Level 1 Core (Initial)
 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-102161490 DOM Level 2 Core
 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-102161490 DOM Level 3 Core
 * @see https://dom.spec.whatwg.org/#domimplementation DOM Living Standard
 */ function DOMImplementation() {}
DOMImplementation.prototype = {
    /**
	 * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given feature is supported.
	 * The different implementations fairly diverged in what kind of features were reported.
	 * The latest version of the spec settled to force this method to always return true, where the functionality was accurate and in use.
	 *
	 * @deprecated It is deprecated and modern browsers return true in all cases.
	 *
	 * @param {string} feature
	 * @param {string} [version]
	 * @returns {boolean} always true
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
	 * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
	 */ hasFeature: function(feature, version) {
        return true;
    },
    /**
	 * Creates an XML Document object of the specified type with its document element.
	 *
	 * __It behaves slightly different from the description in the living standard__:
	 * - There is no interface/class `XMLDocument`, it returns a `Document` instance.
	 * - `contentType`, `encoding`, `mode`, `origin`, `url` fields are currently not declared.
	 * - this implementation is not validating names or qualified names
	 *   (when parsing XML strings, the SAX parser takes care of that)
	 *
	 * @param {string|null} namespaceURI
	 * @param {string} qualifiedName
	 * @param {DocumentType=null} doctype
	 * @returns {Document}
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
	 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM Level 2 Core (initial)
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument  DOM Level 2 Core
	 *
	 * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
	 * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
	 * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
	 */ createDocument: function(namespaceURI, qualifiedName, doctype) {
        var doc = new Document();
        doc.implementation = this;
        doc.childNodes = new NodeList();
        doc.doctype = doctype || null;
        if (doctype) doc.appendChild(doctype);
        if (qualifiedName) {
            var root = doc.createElementNS(namespaceURI, qualifiedName);
            doc.appendChild(root);
        }
        return doc;
    },
    /**
	 * Returns a doctype, with the given `qualifiedName`, `publicId`, and `systemId`.
	 *
	 * __This behavior is slightly different from the in the specs__:
	 * - this implementation is not validating names or qualified names
	 *   (when parsing XML strings, the SAX parser takes care of that)
	 *
	 * @param {string} qualifiedName
	 * @param {string} [publicId]
	 * @param {string} [systemId]
	 * @returns {DocumentType} which can either be used with `DOMImplementation.createDocument` upon document creation
	 * 				  or can be put into the document via methods like `Node.insertBefore()` or `Node.replaceChild()`
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType MDN
	 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM Level 2 Core
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living Standard
	 *
	 * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
	 * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
	 * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
	 */ createDocumentType: function(qualifiedName, publicId, systemId) {
        var node = new DocumentType();
        node.name = qualifiedName;
        node.nodeName = qualifiedName;
        node.publicId = publicId || "";
        node.systemId = systemId || "";
        return node;
    }
};
/**
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1950641247
 */ function Node() {}
Node.prototype = {
    firstChild: null,
    lastChild: null,
    previousSibling: null,
    nextSibling: null,
    attributes: null,
    parentNode: null,
    childNodes: null,
    ownerDocument: null,
    nodeValue: null,
    namespaceURI: null,
    prefix: null,
    localName: null,
    // Modified in DOM Level 2:
    insertBefore: function(newChild, refChild) {
        return _insertBefore(this, newChild, refChild);
    },
    replaceChild: function(newChild, oldChild) {
        this.insertBefore(newChild, oldChild);
        if (oldChild) this.removeChild(oldChild);
    },
    removeChild: function(oldChild) {
        return _removeChild(this, oldChild);
    },
    appendChild: function(newChild) {
        return this.insertBefore(newChild, null);
    },
    hasChildNodes: function() {
        return this.firstChild != null;
    },
    cloneNode: function(deep) {
        return cloneNode(this.ownerDocument || this, this, deep);
    },
    // Modified in DOM Level 2:
    normalize: function() {
        var child = this.firstChild;
        while(child){
            var next = child.nextSibling;
            if (next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE) {
                this.removeChild(next);
                child.appendData(next.data);
            } else {
                child.normalize();
                child = next;
            }
        }
    },
    // Introduced in DOM Level 2:
    isSupported: function(feature, version) {
        return this.ownerDocument.implementation.hasFeature(feature, version);
    },
    // Introduced in DOM Level 2:
    hasAttributes: function() {
        return this.attributes.length > 0;
    },
    /**
	 * Look up the prefix associated to the given namespace URI, starting from this node.
	 * **The default namespace declarations are ignored by this method.**
	 * See Namespace Prefix Lookup for details on the algorithm used by this method.
	 *
	 * _Note: The implementation seems to be incomplete when compared to the algorithm described in the specs._
	 *
	 * @param {string | null} namespaceURI
	 * @returns {string | null}
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
	 * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
	 * @see https://github.com/xmldom/xmldom/issues/322
	 */ lookupPrefix: function(namespaceURI) {
        var el = this;
        while(el){
            var map = el._nsMap;
            //console.dir(map)
            if (map) for(var n in map){
                if (Object.prototype.hasOwnProperty.call(map, n) && map[n] === namespaceURI) return n;
            }
            el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
        }
        return null;
    },
    // Introduced in DOM Level 3:
    lookupNamespaceURI: function(prefix) {
        var el = this;
        while(el){
            var map = el._nsMap;
            //console.dir(map)
            if (map) {
                if (prefix in map) {
                    if (Object.prototype.hasOwnProperty.call(map, prefix)) return map[prefix];
                }
            }
            el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
        }
        return null;
    },
    // Introduced in DOM Level 3:
    isDefaultNamespace: function(namespaceURI) {
        var prefix = this.lookupPrefix(namespaceURI);
        return prefix == null;
    }
};
function _xmlEncoder(c) {
    return c == "<" && "&lt;" || c == ">" && "&gt;" || c == "&" && "&amp;" || c == '"' && "&quot;" || "&#" + c.charCodeAt() + ";";
}
copy(NodeType, Node);
copy(NodeType, Node.prototype);
/**
 * @param callback return true for continue,false for break
 * @return boolean true: break visit;
 */ function _visitNode(node, callback) {
    if (callback(node)) return true;
    if (node = node.firstChild) do {
        if (_visitNode(node, callback)) return true;
    }while (node = node.nextSibling);
}
function Document() {}
function _onAddAttribute(doc, el, newAttr) {
    doc && doc._inc++;
    var ns = newAttr.namespaceURI;
    if (ns === NAMESPACE.XMLNS) //update namespace
    el._nsMap[newAttr.prefix ? newAttr.localName : ""] = newAttr.value;
}
function _onRemoveAttribute(doc, el, newAttr, remove) {
    doc && doc._inc++;
    var ns = newAttr.namespaceURI;
    if (ns === NAMESPACE.XMLNS) //update namespace
    delete el._nsMap[newAttr.prefix ? newAttr.localName : ""];
}
function _onUpdateChild(doc, el, newChild) {
    if (doc && doc._inc) {
        doc._inc++;
        //update childNodes
        var cs = el.childNodes;
        if (newChild) cs[cs.length++] = newChild;
        else {
            //console.log(1)
            var child = el.firstChild;
            var i = 0;
            while(child){
                cs[i++] = child;
                child = child.nextSibling;
            }
            cs.length = i;
        }
    }
}
/**
 * attributes;
 * children;
 * 
 * writeable properties:
 * nodeValue,Attr:value,CharacterData:data
 * prefix
 */ function _removeChild(parentNode, child) {
    var previous = child.previousSibling;
    var next = child.nextSibling;
    if (previous) previous.nextSibling = next;
    else parentNode.firstChild = next;
    if (next) next.previousSibling = previous;
    else parentNode.lastChild = previous;
    _onUpdateChild(parentNode.ownerDocument, parentNode);
    return child;
}
/**
 * preformance key(refChild == null)
 */ function _insertBefore(parentNode, newChild, nextChild) {
    var cp = newChild.parentNode;
    if (cp) cp.removeChild(newChild); //remove and update
    if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
        var newFirst = newChild.firstChild;
        if (newFirst == null) return newChild;
        var newLast = newChild.lastChild;
    } else newFirst = newLast = newChild;
    var pre = nextChild ? nextChild.previousSibling : parentNode.lastChild;
    newFirst.previousSibling = pre;
    newLast.nextSibling = nextChild;
    if (pre) pre.nextSibling = newFirst;
    else parentNode.firstChild = newFirst;
    if (nextChild == null) parentNode.lastChild = newLast;
    else nextChild.previousSibling = newLast;
    do newFirst.parentNode = parentNode;
    while (newFirst !== newLast && (newFirst = newFirst.nextSibling));
    _onUpdateChild(parentNode.ownerDocument || parentNode, parentNode);
    //console.log(parentNode.lastChild.nextSibling == null)
    if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) newChild.firstChild = newChild.lastChild = null;
    return newChild;
}
function _appendSingleChild(parentNode, newChild) {
    var cp = newChild.parentNode;
    if (cp) {
        var pre = parentNode.lastChild;
        cp.removeChild(newChild); //remove and update
        var pre = parentNode.lastChild;
    }
    var pre = parentNode.lastChild;
    newChild.parentNode = parentNode;
    newChild.previousSibling = pre;
    newChild.nextSibling = null;
    if (pre) pre.nextSibling = newChild;
    else parentNode.firstChild = newChild;
    parentNode.lastChild = newChild;
    _onUpdateChild(parentNode.ownerDocument, parentNode, newChild);
    return newChild;
//console.log("__aa",parentNode.lastChild.nextSibling == null)
}
Document.prototype = {
    //implementation : null,
    nodeName: "#document",
    nodeType: DOCUMENT_NODE,
    /**
	 * The DocumentType node of the document.
	 *
	 * @readonly
	 * @type DocumentType
	 */ doctype: null,
    documentElement: null,
    _inc: 1,
    insertBefore: function(newChild, refChild) {
        if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
            var child = newChild.firstChild;
            while(child){
                var next = child.nextSibling;
                this.insertBefore(child, refChild);
                child = next;
            }
            return newChild;
        }
        if (this.documentElement == null && newChild.nodeType == ELEMENT_NODE) this.documentElement = newChild;
        return _insertBefore(this, newChild, refChild), newChild.ownerDocument = this, newChild;
    },
    removeChild: function(oldChild) {
        if (this.documentElement == oldChild) this.documentElement = null;
        return _removeChild(this, oldChild);
    },
    // Introduced in DOM Level 2:
    importNode: function(importedNode, deep) {
        return importNode(this, importedNode, deep);
    },
    // Introduced in DOM Level 2:
    getElementById: function(id) {
        var rtv = null;
        _visitNode(this.documentElement, function(node) {
            if (node.nodeType == ELEMENT_NODE) {
                if (node.getAttribute("id") == id) {
                    rtv = node;
                    return true;
                }
            }
        });
        return rtv;
    },
    /**
	 * The `getElementsByClassName` method of `Document` interface returns an array-like object
	 * of all child elements which have **all** of the given class name(s).
	 *
	 * Returns an empty list if `classeNames` is an empty string or only contains HTML white space characters.
	 *
	 *
	 * Warning: This is a live LiveNodeList.
	 * Changes in the DOM will reflect in the array as the changes occur.
	 * If an element selected by this array no longer qualifies for the selector,
	 * it will automatically be removed. Be aware of this for iteration purposes.
	 *
	 * @param {string} classNames is a string representing the class name(s) to match; multiple class names are separated by (ASCII-)whitespace
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
	 * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
	 */ getElementsByClassName: function(classNames) {
        var classNamesSet = toOrderedSet(classNames);
        return new LiveNodeList(this, function(base) {
            var ls = [];
            if (classNamesSet.length > 0) _visitNode(base.documentElement, function(node) {
                if (node !== base && node.nodeType === ELEMENT_NODE) {
                    var nodeClassNames = node.getAttribute("class");
                    // can be null if the attribute does not exist
                    if (nodeClassNames) {
                        // before splitting and iterating just compare them for the most common case
                        var matches = classNames === nodeClassNames;
                        if (!matches) {
                            var nodeClassNamesSet = toOrderedSet(nodeClassNames);
                            matches = classNamesSet.every(arrayIncludes(nodeClassNamesSet));
                        }
                        if (matches) ls.push(node);
                    }
                }
            });
            return ls;
        });
    },
    //document factory method:
    createElement: function(tagName) {
        var node = new Element();
        node.ownerDocument = this;
        node.nodeName = tagName;
        node.tagName = tagName;
        node.localName = tagName;
        node.childNodes = new NodeList();
        var attrs = node.attributes = new NamedNodeMap();
        attrs._ownerElement = node;
        return node;
    },
    createDocumentFragment: function() {
        var node = new DocumentFragment();
        node.ownerDocument = this;
        node.childNodes = new NodeList();
        return node;
    },
    createTextNode: function(data) {
        var node = new Text();
        node.ownerDocument = this;
        node.appendData(data);
        return node;
    },
    createComment: function(data) {
        var node = new Comment();
        node.ownerDocument = this;
        node.appendData(data);
        return node;
    },
    createCDATASection: function(data) {
        var node = new CDATASection();
        node.ownerDocument = this;
        node.appendData(data);
        return node;
    },
    createProcessingInstruction: function(target, data) {
        var node = new ProcessingInstruction();
        node.ownerDocument = this;
        node.tagName = node.target = target;
        node.nodeValue = node.data = data;
        return node;
    },
    createAttribute: function(name) {
        var node = new Attr();
        node.ownerDocument = this;
        node.name = name;
        node.nodeName = name;
        node.localName = name;
        node.specified = true;
        return node;
    },
    createEntityReference: function(name) {
        var node = new EntityReference();
        node.ownerDocument = this;
        node.nodeName = name;
        return node;
    },
    // Introduced in DOM Level 2:
    createElementNS: function(namespaceURI, qualifiedName) {
        var node = new Element();
        var pl = qualifiedName.split(":");
        var attrs = node.attributes = new NamedNodeMap();
        node.childNodes = new NodeList();
        node.ownerDocument = this;
        node.nodeName = qualifiedName;
        node.tagName = qualifiedName;
        node.namespaceURI = namespaceURI;
        if (pl.length == 2) {
            node.prefix = pl[0];
            node.localName = pl[1];
        } else //el.prefix = null;
        node.localName = qualifiedName;
        attrs._ownerElement = node;
        return node;
    },
    // Introduced in DOM Level 2:
    createAttributeNS: function(namespaceURI, qualifiedName) {
        var node = new Attr();
        var pl = qualifiedName.split(":");
        node.ownerDocument = this;
        node.nodeName = qualifiedName;
        node.name = qualifiedName;
        node.namespaceURI = namespaceURI;
        node.specified = true;
        if (pl.length == 2) {
            node.prefix = pl[0];
            node.localName = pl[1];
        } else //el.prefix = null;
        node.localName = qualifiedName;
        return node;
    }
};
_extends(Document, Node);
function Element() {
    this._nsMap = {};
}
Element.prototype = {
    nodeType: ELEMENT_NODE,
    hasAttribute: function(name) {
        return this.getAttributeNode(name) != null;
    },
    getAttribute: function(name) {
        var attr = this.getAttributeNode(name);
        return attr && attr.value || "";
    },
    getAttributeNode: function(name) {
        return this.attributes.getNamedItem(name);
    },
    setAttribute: function(name, value) {
        var attr = this.ownerDocument.createAttribute(name);
        attr.value = attr.nodeValue = "" + value;
        this.setAttributeNode(attr);
    },
    removeAttribute: function(name) {
        var attr = this.getAttributeNode(name);
        attr && this.removeAttributeNode(attr);
    },
    //four real opeartion method
    appendChild: function(newChild) {
        if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) return this.insertBefore(newChild, null);
        else return _appendSingleChild(this, newChild);
    },
    setAttributeNode: function(newAttr) {
        return this.attributes.setNamedItem(newAttr);
    },
    setAttributeNodeNS: function(newAttr) {
        return this.attributes.setNamedItemNS(newAttr);
    },
    removeAttributeNode: function(oldAttr) {
        //console.log(this == oldAttr.ownerElement)
        return this.attributes.removeNamedItem(oldAttr.nodeName);
    },
    //get real attribute name,and remove it by removeAttributeNode
    removeAttributeNS: function(namespaceURI, localName) {
        var old = this.getAttributeNodeNS(namespaceURI, localName);
        old && this.removeAttributeNode(old);
    },
    hasAttributeNS: function(namespaceURI, localName) {
        return this.getAttributeNodeNS(namespaceURI, localName) != null;
    },
    getAttributeNS: function(namespaceURI, localName) {
        var attr = this.getAttributeNodeNS(namespaceURI, localName);
        return attr && attr.value || "";
    },
    setAttributeNS: function(namespaceURI, qualifiedName, value) {
        var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
        attr.value = attr.nodeValue = "" + value;
        this.setAttributeNode(attr);
    },
    getAttributeNodeNS: function(namespaceURI, localName) {
        return this.attributes.getNamedItemNS(namespaceURI, localName);
    },
    getElementsByTagName: function(tagName) {
        return new LiveNodeList(this, function(base) {
            var ls = [];
            _visitNode(base, function(node) {
                if (node !== base && node.nodeType == ELEMENT_NODE && (tagName === "*" || node.tagName == tagName)) ls.push(node);
            });
            return ls;
        });
    },
    getElementsByTagNameNS: function(namespaceURI, localName) {
        return new LiveNodeList(this, function(base) {
            var ls = [];
            _visitNode(base, function(node) {
                if (node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === "*" || node.namespaceURI === namespaceURI) && (localName === "*" || node.localName == localName)) ls.push(node);
            });
            return ls;
        });
    }
};
Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;
_extends(Element, Node);
function Attr() {}
Attr.prototype.nodeType = ATTRIBUTE_NODE;
_extends(Attr, Node);
function CharacterData() {}
CharacterData.prototype = {
    data: "",
    substringData: function(offset, count) {
        return this.data.substring(offset, offset + count);
    },
    appendData: function(text) {
        text = this.data + text;
        this.nodeValue = this.data = text;
        this.length = text.length;
    },
    insertData: function(offset, text) {
        this.replaceData(offset, 0, text);
    },
    appendChild: function(newChild) {
        throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR]);
    },
    deleteData: function(offset, count) {
        this.replaceData(offset, count, "");
    },
    replaceData: function(offset, count, text) {
        var start = this.data.substring(0, offset);
        var end = this.data.substring(offset + count);
        text = start + text + end;
        this.nodeValue = this.data = text;
        this.length = text.length;
    }
};
_extends(CharacterData, Node);
function Text() {}
Text.prototype = {
    nodeName: "#text",
    nodeType: TEXT_NODE,
    splitText: function(offset) {
        var text = this.data;
        var newText = text.substring(offset);
        text = text.substring(0, offset);
        this.data = this.nodeValue = text;
        this.length = text.length;
        var newNode = this.ownerDocument.createTextNode(newText);
        if (this.parentNode) this.parentNode.insertBefore(newNode, this.nextSibling);
        return newNode;
    }
};
_extends(Text, CharacterData);
function Comment() {}
Comment.prototype = {
    nodeName: "#comment",
    nodeType: COMMENT_NODE
};
_extends(Comment, CharacterData);
function CDATASection() {}
CDATASection.prototype = {
    nodeName: "#cdata-section",
    nodeType: CDATA_SECTION_NODE
};
_extends(CDATASection, CharacterData);
function DocumentType() {}
DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
_extends(DocumentType, Node);
function Notation() {}
Notation.prototype.nodeType = NOTATION_NODE;
_extends(Notation, Node);
function Entity() {}
Entity.prototype.nodeType = ENTITY_NODE;
_extends(Entity, Node);
function EntityReference() {}
EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
_extends(EntityReference, Node);
function DocumentFragment() {}
DocumentFragment.prototype.nodeName = "#document-fragment";
DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE;
_extends(DocumentFragment, Node);
function ProcessingInstruction() {}
ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
_extends(ProcessingInstruction, Node);
function XMLSerializer() {}
XMLSerializer.prototype.serializeToString = function(node, isHtml, nodeFilter) {
    return nodeSerializeToString.call(node, isHtml, nodeFilter);
};
Node.prototype.toString = nodeSerializeToString;
function nodeSerializeToString(isHtml, nodeFilter) {
    var buf = [];
    var refNode = this.nodeType == 9 && this.documentElement || this;
    var prefix = refNode.prefix;
    var uri = refNode.namespaceURI;
    if (uri && prefix == null) {
        //console.log(prefix)
        var prefix = refNode.lookupPrefix(uri);
        if (prefix == null) //isHTML = true;
        var visibleNamespaces = [
            {
                namespace: uri,
                prefix: null
            }
        ];
    }
    serializeToString(this, buf, isHtml, nodeFilter, visibleNamespaces);
    //console.log('###',this.nodeType,uri,prefix,buf.join(''))
    return buf.join("");
}
function needNamespaceDefine(node, isHTML, visibleNamespaces) {
    var prefix = node.prefix || "";
    var uri = node.namespaceURI;
    // According to [Namespaces in XML 1.0](https://www.w3.org/TR/REC-xml-names/#ns-using) ,
    // and more specifically https://www.w3.org/TR/REC-xml-names/#nsc-NoPrefixUndecl :
    // > In a namespace declaration for a prefix [...], the attribute value MUST NOT be empty.
    // in a similar manner [Namespaces in XML 1.1](https://www.w3.org/TR/xml-names11/#ns-using)
    // and more specifically https://www.w3.org/TR/xml-names11/#nsc-NSDeclared :
    // > [...] Furthermore, the attribute value [...] must not be an empty string.
    // so serializing empty namespace value like xmlns:ds="" would produce an invalid XML document.
    if (!uri) return false;
    if (prefix === "xml" && uri === NAMESPACE.XML || uri === NAMESPACE.XMLNS) return false;
    var i = visibleNamespaces.length;
    while(i--){
        var ns = visibleNamespaces[i];
        // get namespace prefix
        if (ns.prefix === prefix) return ns.namespace !== uri;
    }
    return true;
}
/**
 * Well-formed constraint: No < in Attribute Values
 * The replacement text of any entity referred to directly or indirectly in an attribute value must not contain a <.
 * @see https://www.w3.org/TR/xml/#CleanAttrVals
 * @see https://www.w3.org/TR/xml/#NT-AttValue
 */ function addSerializedAttribute(buf, qualifiedName, value) {
    buf.push(" ", qualifiedName, '="', value.replace(/[<&"]/g, _xmlEncoder), '"');
}
function serializeToString(node, buf, isHTML, nodeFilter, visibleNamespaces) {
    if (!visibleNamespaces) visibleNamespaces = [];
    if (nodeFilter) {
        node = nodeFilter(node);
        if (node) {
            if (typeof node == "string") {
                buf.push(node);
                return;
            }
        } else return;
    //buf.sort.apply(attrs, attributeSorter);
    }
    switch(node.nodeType){
        case ELEMENT_NODE:
            var attrs = node.attributes;
            var len = attrs.length;
            var child = node.firstChild;
            var nodeName = node.tagName;
            isHTML = NAMESPACE.isHTML(node.namespaceURI) || isHTML;
            var prefixedNodeName = nodeName;
            if (!isHTML && !node.prefix && node.namespaceURI) {
                var defaultNS;
                // lookup current default ns from `xmlns` attribute
                for(var ai = 0; ai < attrs.length; ai++)if (attrs.item(ai).name === "xmlns") {
                    defaultNS = attrs.item(ai).value;
                    break;
                }
                if (!defaultNS) // lookup current default ns in visibleNamespaces
                for(var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--){
                    var namespace = visibleNamespaces[nsi];
                    if (namespace.prefix === "" && namespace.namespace === node.namespaceURI) {
                        defaultNS = namespace.namespace;
                        break;
                    }
                }
                if (defaultNS !== node.namespaceURI) for(var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--){
                    var namespace = visibleNamespaces[nsi];
                    if (namespace.namespace === node.namespaceURI) {
                        if (namespace.prefix) prefixedNodeName = namespace.prefix + ":" + nodeName;
                        break;
                    }
                }
            }
            buf.push("<", prefixedNodeName);
            for(var i = 0; i < len; i++){
                // add namespaces for attributes
                var attr = attrs.item(i);
                if (attr.prefix == "xmlns") visibleNamespaces.push({
                    prefix: attr.localName,
                    namespace: attr.value
                });
                else if (attr.nodeName == "xmlns") visibleNamespaces.push({
                    prefix: "",
                    namespace: attr.value
                });
            }
            for(var i = 0; i < len; i++){
                var attr = attrs.item(i);
                if (needNamespaceDefine(attr, isHTML, visibleNamespaces)) {
                    var prefix = attr.prefix || "";
                    var uri = attr.namespaceURI;
                    addSerializedAttribute(buf, prefix ? "xmlns:" + prefix : "xmlns", uri);
                    visibleNamespaces.push({
                        prefix: prefix,
                        namespace: uri
                    });
                }
                serializeToString(attr, buf, isHTML, nodeFilter, visibleNamespaces);
            }
            // add namespace for current node		
            if (nodeName === prefixedNodeName && needNamespaceDefine(node, isHTML, visibleNamespaces)) {
                var prefix = node.prefix || "";
                var uri = node.namespaceURI;
                addSerializedAttribute(buf, prefix ? "xmlns:" + prefix : "xmlns", uri);
                visibleNamespaces.push({
                    prefix: prefix,
                    namespace: uri
                });
            }
            if (child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)) {
                buf.push(">");
                //if is cdata child node
                if (isHTML && /^script$/i.test(nodeName)) while(child){
                    if (child.data) buf.push(child.data);
                    else serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
                    child = child.nextSibling;
                }
                else while(child){
                    serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
                    child = child.nextSibling;
                }
                buf.push("</", prefixedNodeName, ">");
            } else buf.push("/>");
            // remove added visible namespaces
            //visibleNamespaces.length = startVisibleNamespaces;
            return;
        case DOCUMENT_NODE:
        case DOCUMENT_FRAGMENT_NODE:
            var child = node.firstChild;
            while(child){
                serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
                child = child.nextSibling;
            }
            return;
        case ATTRIBUTE_NODE:
            return addSerializedAttribute(buf, node.name, node.value);
        case TEXT_NODE:
            /**
		 * The ampersand character (&) and the left angle bracket (<) must not appear in their literal form,
		 * except when used as markup delimiters, or within a comment, a processing instruction, or a CDATA section.
		 * If they are needed elsewhere, they must be escaped using either numeric character references or the strings
		 * `&amp;` and `&lt;` respectively.
		 * The right angle bracket (>) may be represented using the string " &gt; ", and must, for compatibility,
		 * be escaped using either `&gt;` or a character reference when it appears in the string `]]>` in content,
		 * when that string is not marking the end of a CDATA section.
		 *
		 * In the content of elements, character data is any string of characters
		 * which does not contain the start-delimiter of any markup
		 * and does not include the CDATA-section-close delimiter, `]]>`.
		 *
		 * @see https://www.w3.org/TR/xml/#NT-CharData
		 */ return buf.push(node.data.replace(/[<&]/g, _xmlEncoder).replace(/]]>/g, "]]&gt;"));
        case CDATA_SECTION_NODE:
            return buf.push("<![CDATA[", node.data, "]]>");
        case COMMENT_NODE:
            return buf.push("<!--", node.data, "-->");
        case DOCUMENT_TYPE_NODE:
            var pubid = node.publicId;
            var sysid = node.systemId;
            buf.push("<!DOCTYPE ", node.name);
            if (pubid) {
                buf.push(" PUBLIC ", pubid);
                if (sysid && sysid != ".") buf.push(" ", sysid);
                buf.push(">");
            } else if (sysid && sysid != ".") buf.push(" SYSTEM ", sysid, ">");
            else {
                var sub = node.internalSubset;
                if (sub) buf.push(" [", sub, "]");
                buf.push(">");
            }
            return;
        case PROCESSING_INSTRUCTION_NODE:
            return buf.push("<?", node.target, " ", node.data, "?>");
        case ENTITY_REFERENCE_NODE:
            return buf.push("&", node.nodeName, ";");
        //case ENTITY_NODE:
        //case NOTATION_NODE:
        default:
            buf.push("??", node.nodeName);
    }
}
function importNode(doc, node, deep) {
    var node2;
    switch(node.nodeType){
        case ELEMENT_NODE:
            node2 = node.cloneNode(false);
            node2.ownerDocument = doc;
        //var attrs = node2.attributes;
        //var len = attrs.length;
        //for(var i=0;i<len;i++){
        //node2.setAttributeNodeNS(importNode(doc,attrs.item(i),deep));
        //}
        case DOCUMENT_FRAGMENT_NODE:
            break;
        case ATTRIBUTE_NODE:
            deep = true;
            break;
    }
    if (!node2) node2 = node.cloneNode(false); //false
    node2.ownerDocument = doc;
    node2.parentNode = null;
    if (deep) {
        var child = node.firstChild;
        while(child){
            node2.appendChild(importNode(doc, child, deep));
            child = child.nextSibling;
        }
    }
    return node2;
}
//
//var _relationMap = {firstChild:1,lastChild:1,previousSibling:1,nextSibling:1,
//					attributes:1,childNodes:1,parentNode:1,documentElement:1,doctype,};
function cloneNode(doc, node, deep) {
    var node2 = new node.constructor();
    for(var n in node)if (Object.prototype.hasOwnProperty.call(node, n)) {
        var v = node[n];
        if (typeof v != "object") {
            if (v != node2[n]) node2[n] = v;
        }
    }
    if (node.childNodes) node2.childNodes = new NodeList();
    node2.ownerDocument = doc;
    switch(node2.nodeType){
        case ELEMENT_NODE:
            var attrs = node.attributes;
            var attrs2 = node2.attributes = new NamedNodeMap();
            var len = attrs.length;
            attrs2._ownerElement = node2;
            for(var i = 0; i < len; i++)node2.setAttributeNode(cloneNode(doc, attrs.item(i), true));
            break;
        case ATTRIBUTE_NODE:
            deep = true;
    }
    if (deep) {
        var child = node.firstChild;
        while(child){
            node2.appendChild(cloneNode(doc, child, deep));
            child = child.nextSibling;
        }
    }
    return node2;
}
function __set__(object, key, value) {
    object[key] = value;
}
//do dynamic
try {
    if (Object.defineProperty) {
        Object.defineProperty(LiveNodeList.prototype, "length", {
            get: function() {
                _updateLiveList(this);
                return this.$$length;
            }
        });
        Object.defineProperty(Node.prototype, "textContent", {
            get: function() {
                return getTextContent(this);
            },
            set: function(data) {
                switch(this.nodeType){
                    case ELEMENT_NODE:
                    case DOCUMENT_FRAGMENT_NODE:
                        while(this.firstChild)this.removeChild(this.firstChild);
                        if (data || String(data)) this.appendChild(this.ownerDocument.createTextNode(data));
                        break;
                    default:
                        this.data = data;
                        this.value = data;
                        this.nodeValue = data;
                }
            }
        });
        function getTextContent(node) {
            switch(node.nodeType){
                case ELEMENT_NODE:
                case DOCUMENT_FRAGMENT_NODE:
                    var buf = [];
                    node = node.firstChild;
                    while(node){
                        if (node.nodeType !== 7 && node.nodeType !== 8) buf.push(getTextContent(node));
                        node = node.nextSibling;
                    }
                    return buf.join("");
                default:
                    return node.nodeValue;
            }
        }
        __set__ = function(object, key, value) {
            //console.log(value)
            object["$$" + key] = value;
        };
    }
} catch (e) {}
//if(typeof require == 'function'){
exports.DocumentType = DocumentType;
exports.DOMException = DOMException;
exports.DOMImplementation = DOMImplementation;
exports.Element = Element;
exports.Node = Node;
exports.NodeList = NodeList;
exports.XMLSerializer = XMLSerializer; //}

},{"./conventions":"hb2CV"}],"hb2CV":[function(require,module,exports) {
"use strict";
/**
 * "Shallow freezes" an object to render it immutable.
 * Uses `Object.freeze` if available,
 * otherwise the immutability is only in the type.
 *
 * Is used to create "enum like" objects.
 *
 * @template T
 * @param {T} object the object to freeze
 * @param {Pick<ObjectConstructor, 'freeze'> = Object} oc `Object` by default,
 * 				allows to inject custom object constructor for tests
 * @returns {Readonly<T>}
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
 */ function freeze(object, oc) {
    if (oc === undefined) oc = Object;
    return oc && typeof oc.freeze === "function" ? oc.freeze(object) : object;
}
/**
 * All mime types that are allowed as input to `DOMParser.parseFromString`
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString#Argument02 MDN
 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#domparsersupportedtype WHATWG HTML Spec
 * @see DOMParser.prototype.parseFromString
 */ var MIME_TYPE = freeze({
    /**
	 * `text/html`, the only mime type that triggers treating an XML document as HTML.
	 *
	 * @see DOMParser.SupportedType.isHTML
	 * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
	 * @see https://en.wikipedia.org/wiki/HTML Wikipedia
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
	 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring WHATWG HTML Spec
	 */ HTML: "text/html",
    /**
	 * Helper method to check a mime type if it indicates an HTML document
	 *
	 * @param {string} [value]
	 * @returns {boolean}
	 *
	 * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
	 * @see https://en.wikipedia.org/wiki/HTML Wikipedia
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
	 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring 	 */ isHTML: function(value) {
        return value === MIME_TYPE.HTML;
    },
    /**
	 * `application/xml`, the standard mime type for XML documents.
	 *
	 * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType registration
	 * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
	 * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
	 */ XML_APPLICATION: "application/xml",
    /**
	 * `text/html`, an alias for `application/xml`.
	 *
	 * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
	 * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
	 * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
	 */ XML_TEXT: "text/xml",
    /**
	 * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
	 * but is parsed as an XML document.
	 *
	 * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType registration
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
	 * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
	 */ XML_XHTML_APPLICATION: "application/xhtml+xml",
    /**
	 * `image/svg+xml`,
	 *
	 * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
	 * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
	 * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
	 */ XML_SVG_IMAGE: "image/svg+xml"
});
/**
 * Namespaces that are used in this code base.
 *
 * @see http://www.w3.org/TR/REC-xml-names
 */ var NAMESPACE = freeze({
    /**
	 * The XHTML namespace.
	 *
	 * @see http://www.w3.org/1999/xhtml
	 */ HTML: "http://www.w3.org/1999/xhtml",
    /**
	 * Checks if `uri` equals `NAMESPACE.HTML`.
	 *
	 * @param {string} [uri]
	 *
	 * @see NAMESPACE.HTML
	 */ isHTML: function(uri) {
        return uri === NAMESPACE.HTML;
    },
    /**
	 * The SVG namespace.
	 *
	 * @see http://www.w3.org/2000/svg
	 */ SVG: "http://www.w3.org/2000/svg",
    /**
	 * The `xml:` namespace.
	 *
	 * @see http://www.w3.org/XML/1998/namespace
	 */ XML: "http://www.w3.org/XML/1998/namespace",
    /**
	 * The `xmlns:` namespace
	 *
	 * @see https://www.w3.org/2000/xmlns/
	 */ XMLNS: "http://www.w3.org/2000/xmlns/"
});
exports.freeze = freeze;
exports.MIME_TYPE = MIME_TYPE;
exports.NAMESPACE = NAMESPACE;

},{}],"ec9jr":[function(require,module,exports) {
var conventions = require("./conventions");
var dom = require("./dom");
var entities = require("./entities");
var sax = require("./sax");
var DOMImplementation = dom.DOMImplementation;
var NAMESPACE = conventions.NAMESPACE;
var ParseError = sax.ParseError;
var XMLReader = sax.XMLReader;
function DOMParser(options) {
    this.options = options || {
        locator: {}
    };
}
DOMParser.prototype.parseFromString = function(source, mimeType) {
    var options = this.options;
    var sax = new XMLReader();
    var domBuilder = options.domBuilder || new DOMHandler(); //contentHandler and LexicalHandler
    var errorHandler = options.errorHandler;
    var locator = options.locator;
    var defaultNSMap = options.xmlns || {};
    var isHTML = /\/x?html?$/.test(mimeType); //mimeType.toLowerCase().indexOf('html') > -1;
    var entityMap = isHTML ? entities.HTML_ENTITIES : entities.XML_ENTITIES;
    if (locator) domBuilder.setDocumentLocator(locator);
    sax.errorHandler = buildErrorHandler(errorHandler, domBuilder, locator);
    sax.domBuilder = options.domBuilder || domBuilder;
    if (isHTML) defaultNSMap[""] = NAMESPACE.HTML;
    defaultNSMap.xml = defaultNSMap.xml || NAMESPACE.XML;
    if (source && typeof source === "string") sax.parse(source, defaultNSMap, entityMap);
    else sax.errorHandler.error("invalid doc source");
    return domBuilder.doc;
};
function buildErrorHandler(errorImpl, domBuilder, locator) {
    if (!errorImpl) {
        if (domBuilder instanceof DOMHandler) return domBuilder;
        errorImpl = domBuilder;
    }
    var errorHandler = {};
    var isCallback = errorImpl instanceof Function;
    locator = locator || {};
    function build(key) {
        var fn = errorImpl[key];
        if (!fn && isCallback) fn = errorImpl.length == 2 ? function(msg) {
            errorImpl(key, msg);
        } : errorImpl;
        errorHandler[key] = fn && function(msg) {
            fn("[xmldom " + key + "]	" + msg + _locator(locator));
        } || function() {};
    }
    build("warning");
    build("error");
    build("fatalError");
    return errorHandler;
}
//console.log('#\n\n\n\n\n\n\n####')
/**
 * +ContentHandler+ErrorHandler
 * +LexicalHandler+EntityResolver2
 * -DeclHandler-DTDHandler
 *
 * DefaultHandler:EntityResolver, DTDHandler, ContentHandler, ErrorHandler
 * DefaultHandler2:DefaultHandler,LexicalHandler, DeclHandler, EntityResolver2
 * @link http://www.saxproject.org/apidoc/org/xml/sax/helpers/DefaultHandler.html
 */ function DOMHandler() {
    this.cdata = false;
}
function position(locator, node) {
    node.lineNumber = locator.lineNumber;
    node.columnNumber = locator.columnNumber;
}
/**
 * @see org.xml.sax.ContentHandler#startDocument
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ContentHandler.html
 */ DOMHandler.prototype = {
    startDocument: function() {
        this.doc = new DOMImplementation().createDocument(null, null, null);
        if (this.locator) this.doc.documentURI = this.locator.systemId;
    },
    startElement: function(namespaceURI, localName, qName, attrs) {
        var doc = this.doc;
        var el = doc.createElementNS(namespaceURI, qName || localName);
        var len = attrs.length;
        appendElement(this, el);
        this.currentElement = el;
        this.locator && position(this.locator, el);
        for(var i = 0; i < len; i++){
            var namespaceURI = attrs.getURI(i);
            var value = attrs.getValue(i);
            var qName = attrs.getQName(i);
            var attr = doc.createAttributeNS(namespaceURI, qName);
            this.locator && position(attrs.getLocator(i), attr);
            attr.value = attr.nodeValue = value;
            el.setAttributeNode(attr);
        }
    },
    endElement: function(namespaceURI, localName, qName) {
        var current = this.currentElement;
        var tagName = current.tagName;
        this.currentElement = current.parentNode;
    },
    startPrefixMapping: function(prefix, uri) {},
    endPrefixMapping: function(prefix) {},
    processingInstruction: function(target, data) {
        var ins = this.doc.createProcessingInstruction(target, data);
        this.locator && position(this.locator, ins);
        appendElement(this, ins);
    },
    ignorableWhitespace: function(ch, start, length) {},
    characters: function(chars, start, length) {
        chars = _toString.apply(this, arguments);
        //console.log(chars)
        if (chars) {
            if (this.cdata) var charNode = this.doc.createCDATASection(chars);
            else var charNode = this.doc.createTextNode(chars);
            if (this.currentElement) this.currentElement.appendChild(charNode);
            else if (/^\s*$/.test(chars)) this.doc.appendChild(charNode);
            this.locator && position(this.locator, charNode);
        }
    },
    skippedEntity: function(name) {},
    endDocument: function() {
        this.doc.normalize();
    },
    setDocumentLocator: function(locator) {
        if (this.locator = locator) locator.lineNumber = 0;
    },
    //LexicalHandler
    comment: function(chars, start, length) {
        chars = _toString.apply(this, arguments);
        var comm = this.doc.createComment(chars);
        this.locator && position(this.locator, comm);
        appendElement(this, comm);
    },
    startCDATA: function() {
        //used in characters() methods
        this.cdata = true;
    },
    endCDATA: function() {
        this.cdata = false;
    },
    startDTD: function(name, publicId, systemId) {
        var impl = this.doc.implementation;
        if (impl && impl.createDocumentType) {
            var dt = impl.createDocumentType(name, publicId, systemId);
            this.locator && position(this.locator, dt);
            appendElement(this, dt);
            this.doc.doctype = dt;
        }
    },
    /**
	 * @see org.xml.sax.ErrorHandler
	 * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
	 */ warning: function(error) {
        console.warn("[xmldom warning]	" + error, _locator(this.locator));
    },
    error: function(error) {
        console.error("[xmldom error]	" + error, _locator(this.locator));
    },
    fatalError: function(error) {
        throw new ParseError(error, this.locator);
    }
};
function _locator(l) {
    if (l) return "\n@" + (l.systemId || "") + "#[line:" + l.lineNumber + ",col:" + l.columnNumber + "]";
}
function _toString(chars, start, length) {
    if (typeof chars == "string") return chars.substr(start, length);
    else {
        if (chars.length >= start + length || start) return new java.lang.String(chars, start, length) + "";
        return chars;
    }
}
/*
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/LexicalHandler.html
 * used method of org.xml.sax.ext.LexicalHandler:
 *  #comment(chars, start, length)
 *  #startCDATA()
 *  #endCDATA()
 *  #startDTD(name, publicId, systemId)
 *
 *
 * IGNORED method of org.xml.sax.ext.LexicalHandler:
 *  #endDTD()
 *  #startEntity(name)
 *  #endEntity(name)
 *
 *
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/DeclHandler.html
 * IGNORED method of org.xml.sax.ext.DeclHandler
 * 	#attributeDecl(eName, aName, type, mode, value)
 *  #elementDecl(name, model)
 *  #externalEntityDecl(name, publicId, systemId)
 *  #internalEntityDecl(name, value)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/EntityResolver2.html
 * IGNORED method of org.xml.sax.EntityResolver2
 *  #resolveEntity(String name,String publicId,String baseURI,String systemId)
 *  #resolveEntity(publicId, systemId)
 *  #getExternalSubset(name, baseURI)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/DTDHandler.html
 * IGNORED method of org.xml.sax.DTDHandler
 *  #notationDecl(name, publicId, systemId) {};
 *  #unparsedEntityDecl(name, publicId, systemId, notationName) {};
 */ "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(key) {
    DOMHandler.prototype[key] = function() {
        return null;
    };
});
/* Private static helpers treated below as private instance methods, so don't need to add these to the public API; we might use a Relator to also get rid of non-standard public properties */ function appendElement(hander, node) {
    if (!hander.currentElement) hander.doc.appendChild(node);
    else hander.currentElement.appendChild(node);
} //appendChild and setAttributeNS are preformance key
exports.__DOMHandler = DOMHandler;
exports.DOMParser = DOMParser;
/**
 * @deprecated Import/require from main entry point instead
 */ exports.DOMImplementation = dom.DOMImplementation;
/**
 * @deprecated Import/require from main entry point instead
 */ exports.XMLSerializer = dom.XMLSerializer;

},{"./conventions":"hb2CV","./dom":"dpcBR","./entities":"johZl","./sax":"kMQFS"}],"johZl":[function(require,module,exports) {
var freeze = require("./conventions").freeze;
/**
 * The entities that are predefined in every XML document.
 *
 * @see https://www.w3.org/TR/2006/REC-xml11-20060816/#sec-predefined-ent W3C XML 1.1
 * @see https://www.w3.org/TR/2008/REC-xml-20081126/#sec-predefined-ent W3C XML 1.0
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Predefined_entities_in_XML Wikipedia
 */ exports.XML_ENTITIES = freeze({
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    quot: '"'
});
/**
 * A map of currently 241 entities that are detected in an HTML document.
 * They contain all entries from `XML_ENTITIES`.
 *
 * @see XML_ENTITIES
 * @see DOMParser.parseFromString
 * @see DOMImplementation.prototype.createHTMLDocument
 * @see https://html.spec.whatwg.org/#named-character-references WHATWG HTML(5) Spec
 * @see https://www.w3.org/TR/xml-entity-names/ W3C XML Entity Names
 * @see https://www.w3.org/TR/html4/sgml/entities.html W3C HTML4/SGML
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML Wikipedia (HTML)
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Entities_representing_special_characters_in_XHTML Wikpedia (XHTML)
 */ exports.HTML_ENTITIES = freeze({
    lt: "<",
    gt: ">",
    amp: "&",
    quot: '"',
    apos: "'",
    Agrave: "\xc0",
    Aacute: "\xc1",
    Acirc: "\xc2",
    Atilde: "\xc3",
    Auml: "\xc4",
    Aring: "\xc5",
    AElig: "\xc6",
    Ccedil: "\xc7",
    Egrave: "\xc8",
    Eacute: "\xc9",
    Ecirc: "\xca",
    Euml: "\xcb",
    Igrave: "\xcc",
    Iacute: "\xcd",
    Icirc: "\xce",
    Iuml: "\xcf",
    ETH: "\xd0",
    Ntilde: "\xd1",
    Ograve: "\xd2",
    Oacute: "\xd3",
    Ocirc: "\xd4",
    Otilde: "\xd5",
    Ouml: "\xd6",
    Oslash: "\xd8",
    Ugrave: "\xd9",
    Uacute: "\xda",
    Ucirc: "\xdb",
    Uuml: "\xdc",
    Yacute: "\xdd",
    THORN: "\xde",
    szlig: "\xdf",
    agrave: "\xe0",
    aacute: "\xe1",
    acirc: "\xe2",
    atilde: "\xe3",
    auml: "\xe4",
    aring: "\xe5",
    aelig: "\xe6",
    ccedil: "\xe7",
    egrave: "\xe8",
    eacute: "\xe9",
    ecirc: "\xea",
    euml: "\xeb",
    igrave: "\xec",
    iacute: "\xed",
    icirc: "\xee",
    iuml: "\xef",
    eth: "\xf0",
    ntilde: "\xf1",
    ograve: "\xf2",
    oacute: "\xf3",
    ocirc: "\xf4",
    otilde: "\xf5",
    ouml: "\xf6",
    oslash: "\xf8",
    ugrave: "\xf9",
    uacute: "\xfa",
    ucirc: "\xfb",
    uuml: "\xfc",
    yacute: "\xfd",
    thorn: "\xfe",
    yuml: "\xff",
    nbsp: "\xa0",
    iexcl: "\xa1",
    cent: "\xa2",
    pound: "\xa3",
    curren: "\xa4",
    yen: "\xa5",
    brvbar: "\xa6",
    sect: "\xa7",
    uml: "\xa8",
    copy: "\xa9",
    ordf: "\xaa",
    laquo: "\xab",
    not: "\xac",
    shy: "\xad\xad",
    reg: "\xae",
    macr: "\xaf",
    deg: "\xb0",
    plusmn: "\xb1",
    sup2: "\xb2",
    sup3: "\xb3",
    acute: "\xb4",
    micro: "\xb5",
    para: "\xb6",
    middot: "\xb7",
    cedil: "\xb8",
    sup1: "\xb9",
    ordm: "\xba",
    raquo: "\xbb",
    frac14: "\xbc",
    frac12: "\xbd",
    frac34: "\xbe",
    iquest: "\xbf",
    times: "\xd7",
    divide: "\xf7",
    forall: "∀",
    part: "∂",
    exist: "∃",
    empty: "∅",
    nabla: "∇",
    isin: "∈",
    notin: "∉",
    ni: "∋",
    prod: "∏",
    sum: "∑",
    minus: "−",
    lowast: "∗",
    radic: "√",
    prop: "∝",
    infin: "∞",
    ang: "∠",
    and: "∧",
    or: "∨",
    cap: "∩",
    cup: "∪",
    "int": "∫",
    there4: "∴",
    sim: "∼",
    cong: "≅",
    asymp: "≈",
    ne: "≠",
    equiv: "≡",
    le: "≤",
    ge: "≥",
    sub: "⊂",
    sup: "⊃",
    nsub: "⊄",
    sube: "⊆",
    supe: "⊇",
    oplus: "⊕",
    otimes: "⊗",
    perp: "⊥",
    sdot: "⋅",
    Alpha: "Α",
    Beta: "Β",
    Gamma: "Γ",
    Delta: "Δ",
    Epsilon: "Ε",
    Zeta: "Ζ",
    Eta: "Η",
    Theta: "Θ",
    Iota: "Ι",
    Kappa: "Κ",
    Lambda: "Λ",
    Mu: "Μ",
    Nu: "Ν",
    Xi: "Ξ",
    Omicron: "Ο",
    Pi: "Π",
    Rho: "Ρ",
    Sigma: "Σ",
    Tau: "Τ",
    Upsilon: "Υ",
    Phi: "Φ",
    Chi: "Χ",
    Psi: "Ψ",
    Omega: "Ω",
    alpha: "α",
    beta: "β",
    gamma: "γ",
    delta: "δ",
    epsilon: "ε",
    zeta: "ζ",
    eta: "η",
    theta: "θ",
    iota: "ι",
    kappa: "κ",
    lambda: "λ",
    mu: "μ",
    nu: "ν",
    xi: "ξ",
    omicron: "ο",
    pi: "π",
    rho: "ρ",
    sigmaf: "ς",
    sigma: "σ",
    tau: "τ",
    upsilon: "υ",
    phi: "φ",
    chi: "χ",
    psi: "ψ",
    omega: "ω",
    thetasym: "ϑ",
    upsih: "ϒ",
    piv: "ϖ",
    OElig: "Œ",
    oelig: "œ",
    Scaron: "Š",
    scaron: "š",
    Yuml: "Ÿ",
    fnof: "ƒ",
    circ: "ˆ",
    tilde: "˜",
    ensp: " ",
    emsp: " ",
    thinsp: " ",
    zwnj: "‌",
    zwj: "‍",
    lrm: "‎",
    rlm: "‏",
    ndash: "–",
    mdash: "—",
    lsquo: "‘",
    rsquo: "’",
    sbquo: "‚",
    ldquo: "“",
    rdquo: "”",
    bdquo: "„",
    dagger: "†",
    Dagger: "‡",
    bull: "•",
    hellip: "…",
    permil: "‰",
    prime: "′",
    Prime: "″",
    lsaquo: "‹",
    rsaquo: "›",
    oline: "‾",
    euro: "€",
    trade: "™",
    larr: "←",
    uarr: "↑",
    rarr: "→",
    darr: "↓",
    harr: "↔",
    crarr: "↵",
    lceil: "⌈",
    rceil: "⌉",
    lfloor: "⌊",
    rfloor: "⌋",
    loz: "◊",
    spades: "♠",
    clubs: "♣",
    hearts: "♥",
    diams: "♦"
});
/**
 * @deprecated use `HTML_ENTITIES` instead
 * @see HTML_ENTITIES
 */ exports.entityMap = exports.HTML_ENTITIES;

},{"./conventions":"hb2CV"}],"kMQFS":[function(require,module,exports) {
var NAMESPACE = require("./conventions").NAMESPACE;
//[4]   	NameStartChar	   ::=   	":" | [A-Z] | "_" | [a-z] | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x2FF] | [#x370-#x37D] | [#x37F-#x1FFF] | [#x200C-#x200D] | [#x2070-#x218F] | [#x2C00-#x2FEF] | [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
//[4a]   	NameChar	   ::=   	NameStartChar | "-" | "." | [0-9] | #xB7 | [#x0300-#x036F] | [#x203F-#x2040]
//[5]   	Name	   ::=   	NameStartChar (NameChar)*
var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/ //\u10000-\uEFFFF
;
var nameChar = new RegExp("[\\-\\.0-9" + nameStartChar.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
var tagNamePattern = new RegExp("^" + nameStartChar.source + nameChar.source + "*(?::" + nameStartChar.source + nameChar.source + "*)?$");
//var tagNamePattern = /^[a-zA-Z_][\w\-\.]*(?:\:[a-zA-Z_][\w\-\.]*)?$/
//var handlers = 'resolveEntity,getExternalSubset,characters,endDocument,endElement,endPrefixMapping,ignorableWhitespace,processingInstruction,setDocumentLocator,skippedEntity,startDocument,startElement,startPrefixMapping,notationDecl,unparsedEntityDecl,error,fatalError,warning,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,comment,endCDATA,endDTD,endEntity,startCDATA,startDTD,startEntity'.split(',')
//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
var S_TAG = 0; //tag name offerring
var S_ATTR = 1; //attr name offerring 
var S_ATTR_SPACE = 2; //attr name end and space offer
var S_EQ = 3; //=space?
var S_ATTR_NOQUOT_VALUE = 4; //attr value(no quot value only)
var S_ATTR_END = 5; //attr value end and no space(quot end)
var S_TAG_SPACE = 6; //(attr value end || tag end ) && (space offer)
var S_TAG_CLOSE = 7; //closed el<el />
/**
 * Creates an error that will not be caught by XMLReader aka the SAX parser.
 *
 * @param {string} message
 * @param {any?} locator Optional, can provide details about the location in the source
 * @constructor
 */ function ParseError(message, locator) {
    this.message = message;
    this.locator = locator;
    if (Error.captureStackTrace) Error.captureStackTrace(this, ParseError);
}
ParseError.prototype = new Error();
ParseError.prototype.name = ParseError.name;
function XMLReader() {}
XMLReader.prototype = {
    parse: function(source, defaultNSMap, entityMap) {
        var domBuilder = this.domBuilder;
        domBuilder.startDocument();
        _copy(defaultNSMap, defaultNSMap = {});
        parse(source, defaultNSMap, entityMap, domBuilder, this.errorHandler);
        domBuilder.endDocument();
    }
};
function parse(source, defaultNSMapCopy, entityMap, domBuilder, errorHandler) {
    function fixedFromCharCode(code) {
        // String.prototype.fromCharCode does not supports
        // > 2 bytes unicode chars directly
        if (code > 0xffff) {
            code -= 0x10000;
            var surrogate1 = 0xd800 + (code >> 10), surrogate2 = 0xdc00 + (code & 0x3ff);
            return String.fromCharCode(surrogate1, surrogate2);
        } else return String.fromCharCode(code);
    }
    function entityReplacer(a) {
        var k = a.slice(1, -1);
        if (k in entityMap) return entityMap[k];
        else if (k.charAt(0) === "#") return fixedFromCharCode(parseInt(k.substr(1).replace("x", "0x")));
        else {
            errorHandler.error("entity not found:" + a);
            return a;
        }
    }
    function appendText(end) {
        if (end > start) {
            var xt = source.substring(start, end).replace(/&#?\w+;/g, entityReplacer);
            locator && position(start);
            domBuilder.characters(xt, 0, end - start);
            start = end;
        }
    }
    function position(p, m) {
        while(p >= lineEnd && (m = linePattern.exec(source))){
            lineStart = m.index;
            lineEnd = lineStart + m[0].length;
            locator.lineNumber++;
        //console.log('line++:',locator,startPos,endPos)
        }
        locator.columnNumber = p - lineStart + 1;
    }
    var lineStart = 0;
    var lineEnd = 0;
    var linePattern = /.*(?:\r\n?|\n)|.*$/g;
    var locator = domBuilder.locator;
    var parseStack = [
        {
            currentNSMap: defaultNSMapCopy
        }
    ];
    var closeMap = {};
    var start = 0;
    while(true){
        try {
            var tagStart = source.indexOf("<", start);
            if (tagStart < 0) {
                if (!source.substr(start).match(/^\s*$/)) {
                    var doc = domBuilder.doc;
                    var text = doc.createTextNode(source.substr(start));
                    doc.appendChild(text);
                    domBuilder.currentElement = text;
                }
                return;
            }
            if (tagStart > start) appendText(tagStart);
            switch(source.charAt(tagStart + 1)){
                case "/":
                    var end = source.indexOf(">", tagStart + 3);
                    var tagName = source.substring(tagStart + 2, end).replace(/[ \t\n\r]+$/g, "");
                    var config = parseStack.pop();
                    if (end < 0) {
                        tagName = source.substring(tagStart + 2).replace(/[\s<].*/, "");
                        errorHandler.error("end tag name: " + tagName + " is not complete:" + config.tagName);
                        end = tagStart + 1 + tagName.length;
                    } else if (tagName.match(/\s</)) {
                        tagName = tagName.replace(/[\s<].*/, "");
                        errorHandler.error("end tag name: " + tagName + " maybe not complete");
                        end = tagStart + 1 + tagName.length;
                    }
                    var localNSMap = config.localNSMap;
                    var endMatch = config.tagName == tagName;
                    var endIgnoreCaseMach = endMatch || config.tagName && config.tagName.toLowerCase() == tagName.toLowerCase();
                    if (endIgnoreCaseMach) {
                        domBuilder.endElement(config.uri, config.localName, tagName);
                        if (localNSMap) {
                            for(var prefix in localNSMap)if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) domBuilder.endPrefixMapping(prefix);
                        }
                        if (!endMatch) errorHandler.fatalError("end tag name: " + tagName + " is not match the current start tagName:" + config.tagName); // No known test case
                    } else parseStack.push(config);
                    end++;
                    break;
                // end elment
                case "?":
                    locator && position(tagStart);
                    end = parseInstruction(source, tagStart, domBuilder);
                    break;
                case "!":
                    locator && position(tagStart);
                    end = parseDCC(source, tagStart, domBuilder, errorHandler);
                    break;
                default:
                    locator && position(tagStart);
                    var el = new ElementAttributes();
                    var currentNSMap = parseStack[parseStack.length - 1].currentNSMap;
                    //elStartEnd
                    var end = parseElementStartPart(source, tagStart, el, currentNSMap, entityReplacer, errorHandler);
                    var len = el.length;
                    if (!el.closed && fixSelfClosed(source, end, el.tagName, closeMap)) {
                        el.closed = true;
                        if (!entityMap.nbsp) errorHandler.warning("unclosed xml attribute");
                    }
                    if (locator && len) {
                        var locator2 = copyLocator(locator, {});
                        //try{//attribute position fixed
                        for(var i = 0; i < len; i++){
                            var a = el[i];
                            position(a.offset);
                            a.locator = copyLocator(locator, {});
                        }
                        domBuilder.locator = locator2;
                        if (appendElement(el, domBuilder, currentNSMap)) parseStack.push(el);
                        domBuilder.locator = locator;
                    } else if (appendElement(el, domBuilder, currentNSMap)) parseStack.push(el);
                    if (NAMESPACE.isHTML(el.uri) && !el.closed) end = parseHtmlSpecialContent(source, end, el.tagName, entityReplacer, domBuilder);
                    else end++;
            }
        } catch (e) {
            if (e instanceof ParseError) throw e;
            errorHandler.error("element parse error: " + e);
            end = -1;
        }
        if (end > start) start = end;
        else //TODO: 这里有可能sax回退，有位置错误风险
        appendText(Math.max(tagStart, start) + 1);
    }
}
function copyLocator(f, t) {
    t.lineNumber = f.lineNumber;
    t.columnNumber = f.columnNumber;
    return t;
}
/**
 * @see #appendElement(source,elStartEnd,el,selfClosed,entityReplacer,domBuilder,parseStack);
 * @return end of the elementStartPart(end of elementEndPart for selfClosed el)
 */ function parseElementStartPart(source, start, el, currentNSMap, entityReplacer, errorHandler) {
    /**
	 * @param {string} qname
	 * @param {string} value
	 * @param {number} startIndex
	 */ function addAttribute(qname, value, startIndex) {
        if (el.attributeNames.hasOwnProperty(qname)) errorHandler.fatalError("Attribute " + qname + " redefined");
        el.addValue(qname, value, startIndex);
    }
    var attrName;
    var value;
    var p = ++start;
    var s = S_TAG; //status
    while(true){
        var c = source.charAt(p);
        switch(c){
            case "=":
                if (s === S_ATTR) {
                    attrName = source.slice(start, p);
                    s = S_EQ;
                } else if (s === S_ATTR_SPACE) s = S_EQ;
                else //fatalError: equal must after attrName or space after attrName
                throw new Error("attribute equal must after attrName"); // No known test case
                break;
            case "'":
            case '"':
                if (s === S_EQ || s === S_ATTR //|| s == S_ATTR_SPACE
                ) {
                    if (s === S_ATTR) {
                        errorHandler.warning('attribute value must after "="');
                        attrName = source.slice(start, p);
                    }
                    start = p + 1;
                    p = source.indexOf(c, start);
                    if (p > 0) {
                        value = source.slice(start, p).replace(/&#?\w+;/g, entityReplacer);
                        addAttribute(attrName, value, start - 1);
                        s = S_ATTR_END;
                    } else //fatalError: no end quot match
                    throw new Error("attribute value no end '" + c + "' match");
                } else if (s == S_ATTR_NOQUOT_VALUE) {
                    value = source.slice(start, p).replace(/&#?\w+;/g, entityReplacer);
                    //console.log(attrName,value,start,p)
                    addAttribute(attrName, value, start);
                    //console.dir(el)
                    errorHandler.warning('attribute "' + attrName + '" missed start quot(' + c + ")!!");
                    start = p + 1;
                    s = S_ATTR_END;
                } else //fatalError: no equal before
                throw new Error('attribute value must after "="'); // No known test case
                break;
            case "/":
                switch(s){
                    case S_TAG:
                        el.setTagName(source.slice(start, p));
                    case S_ATTR_END:
                    case S_TAG_SPACE:
                    case S_TAG_CLOSE:
                        s = S_TAG_CLOSE;
                        el.closed = true;
                    case S_ATTR_NOQUOT_VALUE:
                    case S_ATTR:
                    case S_ATTR_SPACE:
                        break;
                    //case S_EQ:
                    default:
                        throw new Error("attribute invalid close char('/')") // No known test case
                        ;
                }
                break;
            case "":
                errorHandler.error("unexpected end of input");
                if (s == S_TAG) el.setTagName(source.slice(start, p));
                return p;
            case ">":
                switch(s){
                    case S_TAG:
                        el.setTagName(source.slice(start, p));
                    case S_ATTR_END:
                    case S_TAG_SPACE:
                    case S_TAG_CLOSE:
                        break; //normal
                    case S_ATTR_NOQUOT_VALUE:
                    case S_ATTR:
                        value = source.slice(start, p);
                        if (value.slice(-1) === "/") {
                            el.closed = true;
                            value = value.slice(0, -1);
                        }
                    case S_ATTR_SPACE:
                        if (s === S_ATTR_SPACE) value = attrName;
                        if (s == S_ATTR_NOQUOT_VALUE) {
                            errorHandler.warning('attribute "' + value + '" missed quot(")!');
                            addAttribute(attrName, value.replace(/&#?\w+;/g, entityReplacer), start);
                        } else {
                            if (!NAMESPACE.isHTML(currentNSMap[""]) || !value.match(/^(?:disabled|checked|selected)$/i)) errorHandler.warning('attribute "' + value + '" missed value!! "' + value + '" instead!!');
                            addAttribute(value, value, start);
                        }
                        break;
                    case S_EQ:
                        throw new Error("attribute value missed!!");
                }
                //			console.log(tagName,tagNamePattern,tagNamePattern.test(tagName))
                return p;
            /*xml space '\x20' | #x9 | #xD | #xA; */ case "\x80":
                c = " ";
            default:
                if (c <= " ") switch(s){
                    case S_TAG:
                        el.setTagName(source.slice(start, p)); //tagName
                        s = S_TAG_SPACE;
                        break;
                    case S_ATTR:
                        attrName = source.slice(start, p);
                        s = S_ATTR_SPACE;
                        break;
                    case S_ATTR_NOQUOT_VALUE:
                        var value = source.slice(start, p).replace(/&#?\w+;/g, entityReplacer);
                        errorHandler.warning('attribute "' + value + '" missed quot(")!!');
                        addAttribute(attrName, value, start);
                    case S_ATTR_END:
                        s = S_TAG_SPACE;
                        break;
                }
                else //S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
                //S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
                switch(s){
                    //case S_TAG:void();break;
                    //case S_ATTR:void();break;
                    //case S_ATTR_NOQUOT_VALUE:void();break;
                    case S_ATTR_SPACE:
                        var tagName = el.tagName;
                        if (!NAMESPACE.isHTML(currentNSMap[""]) || !attrName.match(/^(?:disabled|checked|selected)$/i)) errorHandler.warning('attribute "' + attrName + '" missed value!! "' + attrName + '" instead2!!');
                        addAttribute(attrName, attrName, start);
                        start = p;
                        s = S_ATTR;
                        break;
                    case S_ATTR_END:
                        errorHandler.warning('attribute space is required"' + attrName + '"!!');
                    case S_TAG_SPACE:
                        s = S_ATTR;
                        start = p;
                        break;
                    case S_EQ:
                        s = S_ATTR_NOQUOT_VALUE;
                        start = p;
                        break;
                    case S_TAG_CLOSE:
                        throw new Error("elements closed character '/' and '>' must be connected to");
                }
        } //end outer switch
        //console.log('p++',p)
        p++;
    }
}
/**
 * @return true if has new namespace define
 */ function appendElement(el, domBuilder, currentNSMap) {
    var tagName = el.tagName;
    var localNSMap = null;
    //var currentNSMap = parseStack[parseStack.length-1].currentNSMap;
    var i = el.length;
    while(i--){
        var a = el[i];
        var qName = a.qName;
        var value = a.value;
        var nsp = qName.indexOf(":");
        if (nsp > 0) {
            var prefix = a.prefix = qName.slice(0, nsp);
            var localName = qName.slice(nsp + 1);
            var nsPrefix = prefix === "xmlns" && localName;
        } else {
            localName = qName;
            prefix = null;
            nsPrefix = qName === "xmlns" && "";
        }
        //can not set prefix,because prefix !== ''
        a.localName = localName;
        //prefix == null for no ns prefix attribute 
        if (nsPrefix !== false) {
            if (localNSMap == null) {
                localNSMap = {};
                //console.log(currentNSMap,0)
                _copy(currentNSMap, currentNSMap = {});
            //console.log(currentNSMap,1)
            }
            currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
            a.uri = NAMESPACE.XMLNS;
            domBuilder.startPrefixMapping(nsPrefix, value);
        }
    }
    var i = el.length;
    while(i--){
        a = el[i];
        var prefix = a.prefix;
        if (prefix) {
            if (prefix === "xml") a.uri = NAMESPACE.XML;
            if (prefix !== "xmlns") a.uri = currentNSMap[prefix || ""];
        }
    }
    var nsp = tagName.indexOf(":");
    if (nsp > 0) {
        prefix = el.prefix = tagName.slice(0, nsp);
        localName = el.localName = tagName.slice(nsp + 1);
    } else {
        prefix = null; //important!!
        localName = el.localName = tagName;
    }
    //no prefix element has default namespace
    var ns = el.uri = currentNSMap[prefix || ""];
    domBuilder.startElement(ns, localName, tagName, el);
    //endPrefixMapping and startPrefixMapping have not any help for dom builder
    //localNSMap = null
    if (el.closed) {
        domBuilder.endElement(ns, localName, tagName);
        if (localNSMap) {
            for(prefix in localNSMap)if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) domBuilder.endPrefixMapping(prefix);
        }
    } else {
        el.currentNSMap = currentNSMap;
        el.localNSMap = localNSMap;
        //parseStack.push(el);
        return true;
    }
}
function parseHtmlSpecialContent(source, elStartEnd, tagName, entityReplacer, domBuilder) {
    if (/^(?:script|textarea)$/i.test(tagName)) {
        var elEndStart = source.indexOf("</" + tagName + ">", elStartEnd);
        var text = source.substring(elStartEnd + 1, elEndStart);
        if (/[&<]/.test(text)) {
            if (/^script$/i.test(tagName)) {
                //if(!/\]\]>/.test(text)){
                //lexHandler.startCDATA();
                domBuilder.characters(text, 0, text.length);
                //lexHandler.endCDATA();
                return elEndStart;
            //}
            } //}else{//text area
            text = text.replace(/&#?\w+;/g, entityReplacer);
            domBuilder.characters(text, 0, text.length);
            return elEndStart;
        //}
        }
    }
    return elStartEnd + 1;
}
function fixSelfClosed(source, elStartEnd, tagName, closeMap) {
    //if(tagName in closeMap){
    var pos = closeMap[tagName];
    if (pos == null) {
        //console.log(tagName)
        pos = source.lastIndexOf("</" + tagName + ">");
        if (pos < elStartEnd) pos = source.lastIndexOf("</" + tagName);
        closeMap[tagName] = pos;
    }
    return pos < elStartEnd;
//} 
}
function _copy(source, target) {
    for(var n in source)if (Object.prototype.hasOwnProperty.call(source, n)) target[n] = source[n];
}
function parseDCC(source, start, domBuilder, errorHandler) {
    var next = source.charAt(start + 2);
    switch(next){
        case "-":
            if (source.charAt(start + 3) === "-") {
                var end = source.indexOf("-->", start + 4);
                //append comment source.substring(4,end)//<!--
                if (end > start) {
                    domBuilder.comment(source, start + 4, end - start - 4);
                    return end + 3;
                } else {
                    errorHandler.error("Unclosed comment");
                    return -1;
                }
            } else //error
            return -1;
        default:
            if (source.substr(start + 3, 6) == "CDATA[") {
                var end = source.indexOf("]]>", start + 9);
                domBuilder.startCDATA();
                domBuilder.characters(source, start + 9, end - start - 9);
                domBuilder.endCDATA();
                return end + 3;
            }
            //<!DOCTYPE
            //startDTD(java.lang.String name, java.lang.String publicId, java.lang.String systemId) 
            var matchs = split(source, start);
            var len = matchs.length;
            if (len > 1 && /!doctype/i.test(matchs[0][0])) {
                var name = matchs[1][0];
                var pubid = false;
                var sysid = false;
                if (len > 3) {
                    if (/^public$/i.test(matchs[2][0])) {
                        pubid = matchs[3][0];
                        sysid = len > 4 && matchs[4][0];
                    } else if (/^system$/i.test(matchs[2][0])) sysid = matchs[3][0];
                }
                var lastMatch = matchs[len - 1];
                domBuilder.startDTD(name, pubid, sysid);
                domBuilder.endDTD();
                return lastMatch.index + lastMatch[0].length;
            }
    }
    return -1;
}
function parseInstruction(source, start, domBuilder) {
    var end = source.indexOf("?>", start);
    if (end) {
        var match = source.substring(start, end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (match) {
            var len = match[0].length;
            domBuilder.processingInstruction(match[1], match[2]);
            return end + 2;
        } else return -1;
    }
    return -1;
}
function ElementAttributes() {
    this.attributeNames = {};
}
ElementAttributes.prototype = {
    setTagName: function(tagName) {
        if (!tagNamePattern.test(tagName)) throw new Error("invalid tagName:" + tagName);
        this.tagName = tagName;
    },
    addValue: function(qName, value, offset) {
        if (!tagNamePattern.test(qName)) throw new Error("invalid attribute:" + qName);
        this.attributeNames[qName] = this.length;
        this[this.length++] = {
            qName: qName,
            value: value,
            offset: offset
        };
    },
    length: 0,
    getLocalName: function(i) {
        return this[i].localName;
    },
    getLocator: function(i) {
        return this[i].locator;
    },
    getQName: function(i) {
        return this[i].qName;
    },
    getURI: function(i) {
        return this[i].uri;
    },
    getValue: function(i) {
        return this[i].value;
    }
};
function split(source, start) {
    var match;
    var buf = [];
    var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    reg.lastIndex = start;
    reg.exec(source); //skip <
    while(match = reg.exec(source)){
        buf.push(match);
        if (match[1]) return buf;
    }
}
exports.XMLReader = XMLReader;
exports.ParseError = ParseError;

},{"./conventions":"hb2CV"}]},["3ASpy","7IvGC"], "7IvGC", "parcelRequire770d")

//# sourceMappingURL=index.72311b5d.js.map
