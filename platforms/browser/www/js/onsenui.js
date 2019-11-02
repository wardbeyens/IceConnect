/* onsenui v2.10.10 - 2019-07-29 */
!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.ons = e()
}(this, function () {
    "use strict";

    function t(t) {
        kt.set(t, !0)
    }

    function e(t) {
        var e = wt.get(t, []) || [];
        wt.delete(t), e.forEach(function (t) {
            return t()
        })
    }

    function n(n) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {
        };
        if (void 0 === kt && (kt = new WeakMap, wt = new WeakMap), function (t, e) {
            wt.has(t) || wt.set(t, []), wt.get(t).push(e)
        }(n, i), function (e) {
            return e.childNodes.length > 0 && t(e), kt.has(e)
        }(n)) e(n); else {
            new MutationObserver(function (i) {
                t(n), e(n)
            }).observe(n, {childList: !0, characterData: !0}), setImmediate(function () {
                t(n), e(n)
            })
        }
    }

    function i(t) {
        t._destroy instanceof Function ? t._destroy() : t.remove()
    }

    function o(t, e) {
        return e = {exports: {}}, t(e, e.exports), e.exports
    }

    function r(t) {
        var e = gi.has(t), n = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(t);
        return !e && n
    }

    function a(t) {
        var e = t.isConnected;
        if (void 0 !== e) return e;
        for (var n = t; n && !(n.__CE_isImportDocument || n instanceof Document);) n = n.parentNode || (window.ShadowRoot && n instanceof ShadowRoot ? n.host : void 0);
        return !(!n || !(n.__CE_isImportDocument || n instanceof Document))
    }

    function s(t, e) {
        for (var n = e; n && n !== t && !n.nextSibling;) n = n.parentNode;
        return n && n !== t ? n.nextSibling : null
    }

    function l(t, e) {
        for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Set, i = t; i;) {
            if (i.nodeType === Node.ELEMENT_NODE) {
                var o = i;
                e(o);
                var r = o.localName;
                if ("link" === r && "import" === o.getAttribute("rel")) {
                    var a = o.import;
                    if (a instanceof Node && !n.has(a)) {
                        n.add(a);
                        for (var u = a.firstChild; u; u = u.nextSibling) l(u, e, n)
                    }
                    i = s(t, o);
                    continue
                }
                if ("template" === r) {
                    i = s(t, o);
                    continue
                }
                var c = o.__CE_shadowRoot;
                if (c) for (var h = c.firstChild; h; h = h.nextSibling) l(h, e, n)
            }
            i = function (t, e) {
                return e.firstChild ? e.firstChild : s(t, e)
            }(t, i)
        }
    }

    function u(t, e, n) {
        t[e] = n
    }

    var c = {}, h = function () {
        var t = window.getComputedStyle(document.documentElement, ""),
            e = (Array.prototype.slice.call(t).join("").match(/-(moz|webkit|ms)-/) || "" === t.OLink && ["", "o"])[1];
        return function (t) {
            return "-" + e + "-" + Q.hyphenate(t)
        }
    }(), d = function (t, e) {
        return Object.keys(e).forEach(function (n) {
            n in t.style ? t.style[n] = e[n] : h(n) in t.style ? t.style[h(n)] = e[n] : Q.warn("No such style property: " + n)
        }), t
    };
    d.clear = function (t) {
        for (var e = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "").split(/\s+/).reduce(function (t, e) {
            return t.concat([Q.hyphenate(e), h(e)])
        }, []), n = [], i = t.style.length - 1; i >= 0; i--) !function (i) {
            var o = t.style[i];
            (0 === e.length || e.some(function (t) {
                return 0 === o.indexOf(t)
            })) && n.push(o)
        }(i);
        n.forEach(function (e) {
            return t.style[e] = ""
        }), "" === t.getAttribute("style") && t.removeAttribute("style")
    };
    var f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, p = function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }, g = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e
        }
    }(), m = function (t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }, _ = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }, v = function t(e, n, i) {
        null === e && (e = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(e, n);
        if (void 0 === o) {
            var r = Object.getPrototypeOf(e);
            return null === r ? void 0 : t(r, n, i)
        }
        if ("value" in o) return o.value;
        var a = o.get;
        if (void 0 !== a) return a.call(i)
    }, b = function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }, y = function (t, e) {
        var n = {};
        for (var i in t) e.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
        return n
    }, k = function (t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }, w = function (t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
        }
        return Array.from(t)
    }, E = window.HTMLElement, C = new (function () {
        function t() {
            p(this, t), this._selectedPlatform = null, this._ignorePlatformSelect = !1
        }

        return g(t, [{
            key: "select", value: function (t) {
                "string" == typeof t && (this._selectedPlatform = t.trim().toLowerCase())
            }
        }, {
            key: "_getSelectedPlatform", value: function () {
                return this._ignorePlatformSelect ? null : this._selectedPlatform
            }
        }, {
            key: "_runOnActualPlatform", value: function (t) {
                this._ignorePlatformSelect = !0;
                var e = t();
                return this._ignorePlatformSelect = !1, e
            }
        }, {
            key: "isWebView", value: function () {
                if ("loading" === document.readyState || "uninitialized" == document.readyState) throw new Error("isWebView() method is available after dom contents loaded.");
                return !!(window.cordova || window.phonegap || window.PhoneGap)
            }
        }, {
            key: "isIPhone", value: function () {
                return /iPhone/i.test(navigator.userAgent)
            }
        }, {
            key: "isIPhoneX", value: function () {
                return this.isIPhone() && (375 === window.screen.width && 812 === window.screen.height || 812 === window.screen.width && 375 === window.screen.height || 414 === window.screen.width && 896 === window.screen.height || 896 === window.screen.width && 414 === window.screen.height)
            }
        }, {
            key: "isIPad", value: function () {
                return /iPad/i.test(navigator.userAgent)
            }
        }, {
            key: "isIPod", value: function () {
                return /iPod/i.test(navigator.userAgent)
            }
        }, {
            key: "isIOS", value: function (t) {
                return !t && this._getSelectedPlatform() ? "ios" === this._getSelectedPlatform() : "object" !== ("undefined" == typeof device ? "undefined" : f(device)) || /browser/i.test(device.platform) ? /iPhone|iPad|iPod/i.test(navigator.userAgent) : /iOS/i.test(device.platform)
            }
        }, {
            key: "isIOS7above", value: function () {
                if ("object" === ("undefined" == typeof device ? "undefined" : f(device)) && !/browser/i.test(device.platform)) return /iOS/i.test(device.platform) && parseInt(device.version.split(".")[0]) >= 7;
                if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                    var t = (navigator.userAgent.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/) || [""])[0].replace(/_/g, ".");
                    return parseInt(t.split(".")[0]) >= 7
                }
                return !1
            }
        }, {
            key: "isIOSSafari", value: function () {
                var t = window.navigator, e = t.userAgent;
                return !(!this.isIOS() || -1 === e.indexOf("Safari") || -1 === e.indexOf("Version") || t.standalone)
            }
        }, {
            key: "isWKWebView", value: function () {
                var t = /constructor/i.test(E);
                return !(!(this.isIOS() && window.webkit && window.webkit.messageHandlers && window.indexedDB) || t)
            }
        }, {
            key: "isUIWebView", value: function () {
                return !(!this.isIOS() || this.isIOSSafari() || this.isWKWebView())
            }
        }, {
            key: "isAndroidPhone", value: function () {
                return /Android/i.test(navigator.userAgent) && /Mobile/i.test(navigator.userAgent)
            }
        }, {
            key: "isAndroidTablet", value: function () {
                return /Android/i.test(navigator.userAgent) && !/Mobile/i.test(navigator.userAgent)
            }
        }, {
            key: "isAndroid", value: function (t) {
                return !t && this._getSelectedPlatform() ? "android" === this._getSelectedPlatform() : /Android/i.test("object" !== ("undefined" == typeof device ? "undefined" : f(device)) || /browser/i.test(device.platform) ? navigator.userAgent : device.platform)
            }
        }, {
            key: "isWP", value: function (t) {
                return !t && this._getSelectedPlatform() ? "wp" === this._getSelectedPlatform() : "object" !== ("undefined" == typeof device ? "undefined" : f(device)) || /browser/i.test(device.platform) ? /Windows Phone|IEMobile|WPDesktop/i.test(navigator.userAgent) : /Win32NT|WinCE/i.test(device.platform)
            }
        }, {
            key: "isBlackBerry", value: function (t) {
                return !t && this._getSelectedPlatform() ? "blackberry" === this._getSelectedPlatform() : "object" !== ("undefined" == typeof device ? "undefined" : f(device)) || /browser/i.test(device.platform) ? /BlackBerry|RIM Tablet OS|BB10/i.test(navigator.userAgent) : /BlackBerry/i.test(device.platform)
            }
        }, {
            key: "isOpera", value: function (t) {
                return !t && this._getSelectedPlatform() ? "opera" === this._getSelectedPlatform() : !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0
            }
        }, {
            key: "isFirefox", value: function (t) {
                return !t && this._getSelectedPlatform() ? "firefox" === this._getSelectedPlatform() : "undefined" != typeof InstallTrigger
            }
        }, {
            key: "isSafari", value: function (t) {
                return !t && this._getSelectedPlatform() ? "safari" === this._getSelectedPlatform() : Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0 || "[object SafariRemoteNotification]" === (!window["safari"] || safari.pushNotification).toString()
            }
        }, {
            key: "isChrome", value: function (t) {
                return !t && this._getSelectedPlatform() ? "chrome" === this._getSelectedPlatform() : !(!window.chrome || window.opera || navigator.userAgent.indexOf(" OPR/") >= 0 || navigator.userAgent.indexOf(" Edge/") >= 0)
            }
        }, {
            key: "isIE", value: function (t) {
                return !t && this._getSelectedPlatform() ? "ie" === this._getSelectedPlatform() : !!document.documentMode
            }
        }, {
            key: "isEdge", value: function (t) {
                return !t && this._getSelectedPlatform() ? "edge" === this._getSelectedPlatform() : navigator.userAgent.indexOf(" Edge/") >= 0
            }
        }, {
            key: "getMobileOS", value: function () {
                return this.isAndroid() ? "android" : this.isIOS() ? "ios" : this.isWP() ? "wp" : "other"
            }
        }, {
            key: "getIOSDevice", value: function () {
                return this.isIPhone() ? "iphone" : this.isIPad() ? "ipad" : this.isIPod() ? "ipod" : "na"
            }
        }]), t
    }()), A = function (t) {
        return Q.throw("In PageAttributeExpression: " + t)
    }, S = {
        _variables: {}, defineVariable: function (t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            "string" != typeof t ? A("Variable name must be a string") : "string" != typeof e && "function" != typeof e ? A("Variable value must be a string or a function") : this._variables.hasOwnProperty(t) && !n && A('"' + t + '" is already defined'), this._variables[t] = e
        }, getVariable: function (t) {
            return this._variables.hasOwnProperty(t) ? this._variables[t] : null
        }, removeVariable: function (t) {
            delete this._variables[t]
        }, getAllVariables: function () {
            return this._variables
        }, _parsePart: function (t) {
            var e = void 0, n = !1, i = 0, o = [];
            0 === t.length && A("Unable to parse empty string");
            for (var r = 0; r < t.length; r++) if ("$" === (e = t.charAt(r)) && "{" === t.charAt(r + 1)) {
                n && A("Nested interpolation not supported");
                t.substring(i, r).length > 0 && o.push(t.substring(i, r)), i = r, n = !0
            } else if ("}" === e) {
                n || A("} must be preceeded by ${");
                t.substring(i, r + 1).length > 0 && o.push(t.substring(i, r + 1)), i = r + 1, n = !1
            }
            return n && A("Unterminated interpolation"), o.push(t.substring(i, t.length)), o
        }, _replaceToken: function (t) {
            var e = t.match(/^\${(.*?)}$/);
            if (!e) return t;
            var n = e[1].trim(), i = this.getVariable(n);
            if (null !== i) {
                if ("string" == typeof i) return i;
                var o = i();
                return "string" != typeof o && A("Must return a string"), o
            }
            A('Variable "' + n + '" does not exist')
        }, _replaceTokens: function (t) {
            return t.map(this._replaceToken.bind(this))
        }, _parseExpression: function (t) {
            return t.split(",").map(function (t) {
                return t.trim()
            }).map(this._parsePart.bind(this)).map(this._replaceTokens.bind(this)).map(function (t) {
                return t.join("")
            })
        }, evaluate: function (t) {
            return t ? this._parseExpression(t) : []
        }
    };
    S.defineVariable("mobileOS", C.getMobileOS()), S.defineVariable("iOSDevice", C.getIOSDevice()), S.defineVariable("runtime", function () {
        return C.isWebView() ? "cordova" : "browser"
    });
    var P = {};
    P.config = {
        autoStatusBarFill: !0,
        animationsDisabled: !1,
        warningsDisabled: !1
    }, P.nullElement = window.document.createElement("div"), P.isEnabledAutoStatusBarFill = function () {
        return !!P.config.autoStatusBarFill
    }, P.normalizePageHTML = function (t) {
        return ("" + t).trim()
    }, P.waitDOMContentLoaded = function (t) {
        if ("loading" === window.document.readyState || "uninitialized" == window.document.readyState) {
            window.document.addEventListener("DOMContentLoaded", function e() {
                t(), window.document.removeEventListener("DOMContentLoaded", e)
            })
        } else setImmediate(t)
    }, P.autoStatusBarFill = function (t) {
        var e = function e() {
            P.shouldFillStatusBar() && t(), document.removeEventListener("deviceready", e)
        };
        "object" === ("undefined" == typeof device ? "undefined" : f(device)) ? document.addEventListener("deviceready", e) : -1 === ["complete", "interactive"].indexOf(document.readyState) ? P.waitDOMContentLoaded(e) : e()
    }, P.shouldFillStatusBar = function () {
        return P.isEnabledAutoStatusBarFill() && (C.isWebView() && C.isIOS7above() && !C.isIPhoneX() || document.body.querySelector(".ons-status-bar-mock.ios"))
    }, P.templateStore = {
        _storage: {}, get: function (t) {
            return P.templateStore._storage[t] || null
        }, set: function (t, e) {
            P.templateStore._storage[t] = e
        }
    }, window.document.addEventListener("_templateloaded", function (t) {
        "ons-template" === t.target.nodeName.toLowerCase() && P.templateStore.set(t.templateId, t.template)
    }, !1), P.waitDOMContentLoaded(function () {
        function t(t) {
            for (var e = window.document.querySelectorAll(t), n = 0; n < e.length; n++) P.templateStore.set(e[n].getAttribute("id"), e[n].textContent || e[n].content)
        }

        t('script[type="text/ons-template"]'), t('script[type="text/template"]'), t('script[type="text/ng-template"]'), t("template")
    }), P.getTemplateHTMLAsync = function (t) {
        return new Promise(function (e, n) {
            P.waitDOMContentLoaded(function () {
                var i = P.templateStore.get(t);
                if (i) {
                    if (i instanceof DocumentFragment) return e(i);
                    var o = "string" == typeof i ? i : i[1];
                    return e(P.normalizePageHTML(o))
                }
                var r = window.document.getElementById(t);
                if (r) {
                    var a = r.textContent || r.content;
                    return e(a)
                }
                var s = new XMLHttpRequest;
                s.open("GET", t, !0), s.onload = function () {
                    var i = s.responseText;
                    if (s.status >= 400 && s.status < 600) n(i); else {
                        var o = Q.createFragment(i);
                        Q.arrayFrom(o.querySelectorAll("script")).forEach(function (t) {
                            var e = document.createElement("script");
                            e.type = t.type || "text/javascript", e.appendChild(document.createTextNode(t.text || t.textContent || t.innerHTML)), t.parentNode.replaceChild(e, t)
                        }), P.templateStore.set(t, o), e(o)
                    }
                }, s.onerror = function () {
                    Q.throw("Page template not found: " + t)
                }, s.send(null)
            })
        })
    }, P.getPageHTMLAsync = function (t) {
        var e = S.evaluate(t);
        return function t(n) {
            return "string" != typeof n ? Promise.reject("Must specify a page.") : P.getTemplateHTMLAsync(n).catch(function (n) {
                return 0 === e.length ? Promise.reject(n) : t(e.shift())
            })
        }(e.shift())
    };
    var O = function () {
        function t(e) {
            p(this, t), this._animators = e.animators, this._baseClass = e.baseClass, this._baseClassName = e.baseClassName || e.baseClass.name, this._animation = e.defaultAnimation || "default", this._animationOptions = e.defaultAnimationOptions || {}, this._animators[this._animation] || Q.throw("No such animation: " + this._animation)
        }

        return g(t, [{
            key: "setAnimationOptions", value: function (t) {
                this._animationOptions = t
            }
        }, {
            key: "newAnimator", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = arguments[1], n = null;
                if (t.animation instanceof this._baseClass) return t.animation;
                var i = null;
                if ("string" == typeof t.animation && (i = this._animators[t.animation]), !i && e) n = e; else {
                    i = i || this._animators[this._animation];
                    var o = Q.extend({}, this._animationOptions, t.animationOptions || {}, P.config.animationsDisabled ? {
                        duration: 0,
                        delay: 0
                    } : {});
                    "function" == typeof (n = new i(o)) && (n = new n(o))
                }
                return n instanceof this._baseClass || Q.throw('"animator" is not an instance of ' + this._baseClassName), n
            }
        }], [{
            key: "parseAnimationOptionsString", value: function (t) {
                try {
                    if ("string" == typeof t) {
                        var e = Q.animationOptionsParse(t);
                        if ("object" === (void 0 === e ? "undefined" : f(e)) && null !== e) return e;
                        console.error('"animation-options" attribute must be a JSON object string: ' + t)
                    }
                    return {}
                } catch (e) {
                    return console.error('"animation-options" attribute must be a JSON object string: ' + t), {}
                }
            }
        }]), t
    }(), x = !0, T = {
        quiet: "material--flat",
        light: "material--flat",
        outline: "material--flat",
        cta: "",
        "large--quiet": "material--flat large",
        "large--cta": "large",
        noborder: "",
        tappable: ""
    }, L = {};
    L.android = function (t) {
        var e = t.tagName.toLowerCase();
        if (!Q.hasModifier(t, "material")) {
            var n = (t.getAttribute("modifier") || "").trim().split(/\s+/).map(function (t) {
                return T.hasOwnProperty(t) ? T[t] : t
            });
            n.unshift("material"), t.setAttribute("modifier", n.join(" ").trim())
        }
        -1 === ["ons-alert-dialog-button", "ons-toolbar-button", "ons-back-button", "ons-button", "ons-list-item", "ons-fab", "ons-speed-dial", "ons-speed-dial-item", "ons-tab"].indexOf(e) || t.hasAttribute("ripple") || t.querySelector("ons-ripple") || ("ons-list-item" === e ? t.hasAttribute("tappable") && (t.setAttribute("ripple", ""), t.removeAttribute("tappable")) : t.setAttribute("ripple", ""))
    }, L.ios = function (t) {
        Q.removeModifier(t, "material") && (Q.removeModifier(t, "material--flat") && Q.addModifier(t, Q.removeModifier(t, "large") ? "large--quiet" : "quiet"), t.getAttribute("modifier") || t.removeAttribute("modifier")), t.hasAttribute("ripple") && ("ons-list-item" === t.tagName.toLowerCase() && t.setAttribute("tappable", ""), t.removeAttribute("ripple"))
    };
    var M = {android: !0}, D = function (t, e) {
        if (x && !t.hasAttribute("disable-auto-styling")) {
            var n = C.getMobileOS();
            if (L.hasOwnProperty(n) && (M.hasOwnProperty(n) || e)) return n
        }
        return null
    }, I = function (t, e, n) {
        return D(e, n) ? t.split(/\s+/).map(function (t) {
            return T.hasOwnProperty(t) ? T[t] : t
        }).join(" ") : t
    }, N = {
        isEnabled: function () {
            return x
        }, enable: function () {
            return x = !0
        }, disable: function () {
            return x = !1
        }, prepare: function (t, e) {
            var n = D(t, e);
            n && L[n](t)
        }, mapModifier: I, getPlatform: D, restoreModifier: function (t) {
            if ("android" === D(t)) {
                var e = t.getAttribute("modifier") || "", n = I(e, t);
                if (/(^|\s+)material($|\s+)/i.test(e) || (n = "material " + n), n !== e) return t.setAttribute("modifier", n.trim()), !0
            }
            return !1
        }
    }, B = function () {
        function t() {
            p(this, t)
        }

        return g(t, null, [{
            key: "diff", value: function (e, n) {
                function i(e) {
                    var n = {};
                    return t.split(e).forEach(function (t) {
                        return n[t] = t
                    }), n
                }

                e = i(("" + e).trim()), n = i(("" + n).trim());
                var o = Object.keys(e).reduce(function (t, e) {
                    return n[e] || t.push(e), t
                }, []);
                return {
                    added: Object.keys(n).reduce(function (t, n) {
                        return e[n] || t.push(n), t
                    }, []), removed: o
                }
            }
        }, {
            key: "applyDiffToClassList", value: function (t, e, n) {
                t.added.map(function (t) {
                    return n.replace(/\*/g, t)
                }).forEach(function (t) {
                    return t.split(/\s+/).forEach(function (t) {
                        return e.add(t)
                    })
                }), t.removed.map(function (t) {
                    return n.replace(/\*/g, t)
                }).forEach(function (t) {
                    return t.split(/\s+/).forEach(function (t) {
                        return e.remove(t)
                    })
                })
            }
        }, {
            key: "applyDiffToElement", value: function (e, n, i) {
                Object.keys(i).forEach(function (o) {
                    for (var r = !o || Q.match(n, o) ? [n] : Array.prototype.filter.call(n.querySelectorAll(o), function (t) {
                        return !Q.findParent(t, n.tagName, function (t) {
                            return t === n
                        })
                    }), a = 0; a < r.length; a++) t.applyDiffToClassList(e, r[a].classList, i[o])
                })
            }
        }, {
            key: "onModifierChanged", value: function (e, n, i, o) {
                t.applyDiffToElement(t.diff(e, n), i, o), N.restoreModifier(i)
            }
        }, {
            key: "refresh", value: function (e, n) {
                t.applyDiffToElement(t.diff("", e.getAttribute("modifier") || ""), e, n)
            }
        }, {
            key: "initModifier", value: function (e, n) {
                var i = e.getAttribute("modifier");
                "string" == typeof i && t.applyDiffToElement({removed: [], added: t.split(i)}, e, n)
            }
        }, {
            key: "split", value: function (t) {
                return "string" != typeof t ? [] : t.trim().split(/ +/).filter(function (t) {
                    return "" !== t
                })
            }
        }, {
            key: "addModifier", value: function (e, n) {
                if (e.hasAttribute("modifier")) {
                    var i = t.split(e.getAttribute("modifier"));
                    -1 == i.indexOf(n) && (i.push(n), e.setAttribute("modifier", i.join(" ")))
                } else e.setAttribute("modifier", n)
            }
        }, {
            key: "removeModifier", value: function (e, n) {
                if (e.hasAttribute("modifier")) {
                    var i = t.split(e.getAttribute("modifier")), o = i.indexOf(n);
                    -1 !== o && (i.splice(o, 1), e.setAttribute("modifier", i.join(" ")))
                }
            }
        }]), t
    }(), j = {
        _ready: !1, _domContentLoaded: !1, _onDOMContentLoaded: function () {
            j._domContentLoaded = !0, C.isWebView() ? window.document.addEventListener("deviceready", function () {
                j._ready = !0
            }, !1) : j._ready = !0
        }, addBackButtonListener: function (t) {
            if (!this._domContentLoaded) throw new Error("This method is available after DOMContentLoaded");
            this._ready ? window.document.addEventListener("backbutton", t, !1) : window.document.addEventListener("deviceready", function () {
                window.document.addEventListener("backbutton", t, !1)
            })
        }, removeBackButtonListener: function (t) {
            if (!this._domContentLoaded) throw new Error("This method is available after DOMContentLoaded");
            this._ready ? window.document.removeEventListener("backbutton", t, !1) : window.document.addEventListener("deviceready", function () {
                window.document.removeEventListener("backbutton", t, !1)
            })
        }
    };
    window.addEventListener("DOMContentLoaded", function () {
        return j._onDOMContentLoaded()
    }, !1);
    var H = {
        _store: {}, _genId: function () {
            var t = 0;
            return function () {
                return t++
            }
        }(), set: function (t, e) {
            t.dataset.deviceBackButtonHandlerId && this.remove(t);
            var n = t.dataset.deviceBackButtonHandlerId = H._genId();
            this._store[n] = e
        }, remove: function (t) {
            t.dataset.deviceBackButtonHandlerId && (delete this._store[t.dataset.deviceBackButtonHandlerId], delete t.dataset.deviceBackButtonHandlerId)
        }, get: function (t) {
            if (t.dataset.deviceBackButtonHandlerId) {
                var e = t.dataset.deviceBackButtonHandlerId;
                if (!this._store[e]) throw new Error;
                return this._store[e]
            }
        }, has: function (t) {
            if (!t.dataset) return !1;
            var e = t.dataset.deviceBackButtonHandlerId;
            return !!this._store[e]
        }
    }, R = new (function () {
        function t() {
            p(this, t), this._isEnabled = !1, this._boundCallback = this._callback.bind(this)
        }

        return g(t, [{
            key: "enable", value: function () {
                this._isEnabled || (j.addBackButtonListener(this._boundCallback), this._isEnabled = !0)
            }
        }, {
            key: "disable", value: function () {
                this._isEnabled && (j.removeBackButtonListener(this._boundCallback), this._isEnabled = !1)
            }
        }, {
            key: "fireDeviceBackButtonEvent", value: function () {
                var t = document.createEvent("Event");
                t.initEvent("backbutton", !0, !0), document.dispatchEvent(t)
            }
        }, {
            key: "_callback", value: function () {
                this._dispatchDeviceBackButtonEvent()
            }
        }, {
            key: "createHandler", value: function (t, e) {
                if (!(t instanceof HTMLElement)) throw new Error("element must be an instance of HTMLElement");
                if (!(e instanceof Function)) throw new Error("callback must be an instance of Function");
                var n = {
                    _callback: e, _element: t, disable: function () {
                        H.remove(t)
                    }, setListener: function (t) {
                        this._callback = t
                    }, enable: function () {
                        H.set(t, this)
                    }, isEnabled: function () {
                        return H.get(t) === this
                    }, destroy: function () {
                        H.remove(t), this._callback = this._element = null
                    }
                };
                return n.enable(), n
            }
        }, {
            key: "_dispatchDeviceBackButtonEvent", value: function () {
                function t(e) {
                    return {
                        _element: e, callParentHandler: function () {
                            for (var e = this._element.parentNode; e;) {
                                if (i = H.get(e)) return i._callback(t(e));
                                e = e.parentNode
                            }
                        }
                    }
                }

                var e = this._captureTree(), n = this._findHandlerLeafElement(e), i = H.get(n);
                i._callback(t(n))
            }
        }, {
            key: "_captureTree", value: function () {
                function t(e) {
                    var n = {
                        element: e, children: Array.prototype.concat.apply([], function (t) {
                            for (var e = [], n = 0; n < t.length; n++) e.push(t[n]);
                            return e
                        }(e.children).map(function (e) {
                            if ("none" === e.style.display || !1 === e._isShown) return [];
                            if (0 === e.children.length && !H.has(e)) return [];
                            var n = t(e);
                            return 0 !== n.children.length || H.has(n.element) ? [n] : []
                        }))
                    };
                    if (!H.has(n.element)) for (var i = 0; i < n.children.length; i++) {
                        var o = n.children[i];
                        if (H.has(o.element)) return o
                    }
                    return n
                }

                return t(document.body)
            }
        }, {
            key: "_findHandlerLeafElement", value: function (t) {
                function e(t) {
                    return 0 === t.children.length ? t.element : 1 === t.children.length ? e(t.children[0]) : t.children.map(function (t) {
                        return t.element
                    }).reduce(function (t, e) {
                        if (!t) return e;
                        var n = parseInt(window.getComputedStyle(t, "").zIndex, 10),
                            i = parseInt(window.getComputedStyle(e, "").zIndex, 10);
                        if (!isNaN(n) && !isNaN(i)) return n > i ? t : e;
                        throw new Error("Capturing backbutton-handler is failure.")
                    }, null)
                }

                return e(t)
            }
        }]), t
    }());
    P.AnimatorFactory = O, P.ModifierUtil = B, P.dbbDispatcher = R;
    var F = function (t, e) {
        return t.substr(0, e.length) === e
    }, q = function (t, e) {
        return t.substr(t.length - e.length, e.length) === e
    }, z = function (t) {
        return t.slice(1, -1)
    }, V = function (t) {
        return F(t, "{") && q(t, "}")
    }, W = function (t) {
        return F(t, "[") && q(t, "]")
    }, U = function (t) {
        return F(t, "'") && q(t, "'") || F(t, '"') && q(t, '"')
    }, X = function (t, e, n) {
        throw new Error("Unexpected token '" + t + "' at position " + (n.length - e.length - 1) + " in string: '" + n + "'")
    }, Y = function (t, e, n) {
        return "true" === t || "false" === t ? "true" === t : U(t) ? z(t) : isNaN(t) ? V(t) ? $(z(t)) : W(t) ? K(z(t)) : void X(t, e, n) : +t
    }, G = function (t) {
        var e = (t = t.trim()).length;
        if (":" === t[0] || "," === t[0]) e = 1; else if ("{" === t[0] || "[" === t[0]) {
            for (var n = t.charCodeAt(0), i = 1, o = 1; o < t.length; o++) if (t.charCodeAt(o) === n) i++; else if (t.charCodeAt(o) === n + 2 && 0 == --i) {
                e = o + 1;
                break
            }
        } else if ("'" === t[0] || '"' === t[0]) {
            for (var r = 1; r < t.length; r++) if (t[r] === t[0]) {
                e = r + 1;
                break
            }
        } else for (var a = 1; a < t.length; a++) if (-1 !== [" ", ",", ":"].indexOf(t[a])) {
            e = a;
            break
        }
        return t.slice(0, e)
    }, $ = function (t) {
        for (var e = t = t.trim(), n = {}, i = !0, o = void 0, r = void 0, a = void 0; t.length > 0;) if (r = a, a = G(t), t = t.slice(a.length, t.length).trim(), ":" === a && (!i || !r || "," === r) || "," === a && i || ":" !== a && "," !== a && r && "," !== r && ":" !== r) X(a, t, e); else if (":" === a && i && r) {
            if (r = U(r) ? z(r) : r, !function (t) {
                return /^[A-Z_$][A-Z0-9_$]*$/i.test(t)
            }(r)) throw new Error("Invalid key token '" + r + "' at position 0 in string: '" + e + "'");
            o = r, i = !1
        } else "," === a && !i && r && (n[o] = Y(r, t, e), i = !0);
        return a && (n[o] = Y(a, t, e)), n
    }, K = function (t) {
        for (var e = t = t.trim(), n = [], i = void 0, o = void 0; t.length > 0;) i = o, o = G(t), t = t.slice(o.length, t.length).trim(), "," !== o || i && "," !== i ? "," === o && n.push(Y(i, t, e)) : X(o, t, e);
        return o && ("," !== o ? n.push(Y(o, t, e)) : X(o, t, e)), n
    }, Q = {}, J = "[Onsen UI]";
    Q.globals = {fabOffset: 0, errorPrefix: J, supportsPassive: !1}, C._runOnActualPlatform(function () {
        Q.globals.actualMobileOS = C.getMobileOS(), Q.globals.isUIWebView = C.isUIWebView(), Q.globals.isWKWebView = C.isWKWebView()
    });
    try {
        var Z = Object.defineProperty({}, "passive", {
            get: function () {
                Q.globals.supportsPassive = !0
            }
        });
        window.addEventListener("testPassive", null, Z), window.removeEventListener("testPassive", null, Z)
    } catch (t) {
    }
    Q.addEventListener = function (t, e, n, i, o) {
        t.addEventListener(e, n, Q.globals.supportsPassive ? i : (i || {}).capture)
    }, Q.removeEventListener = function (t, e, n, i, o) {
        t.removeEventListener(e, n, Q.globals.supportsPassive ? i : (i || {}).capture)
    }, Q.prepareQuery = function (t) {
        return t instanceof Function ? t : function (e) {
            return Q.match(e, t)
        }
    }, Q.match = function (t, e) {
        return (t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector).call(t, e)
    }, Q.findChild = function (t, e) {
        for (var n = Q.prepareQuery(e), i = 0; i < t.childNodes.length; i++) {
            var o = t.childNodes[i];
            if (o.nodeType === Node.ELEMENT_NODE && n(o)) return o
        }
        return null
    }, Q.findParent = function (t, e, n) {
        for (var i = Q.prepareQuery(e), o = t.parentNode; ;) {
            if (!o || o === document || o instanceof DocumentFragment || n && n(o)) return null;
            if (i(o)) return o;
            o = o.parentNode
        }
    }, Q.isAttached = function (t) {
        return document.body.contains(t)
    }, Q.hasAnyComponentAsParent = function (t) {
        for (; t && document.documentElement !== t;) if ((t = t.parentNode) && t.nodeName.toLowerCase().match(/(ons-navigator|ons-tabbar|ons-modal)/)) return !0;
        return !1
    }, Q.getAllChildNodes = function (t) {
        var e;
        return (e = [t]).concat.apply(e, w(Array.from(t.children).map(function (t) {
            return Q.getAllChildNodes(t)
        })))
    }, Q.isPageControl = function (t) {
        return t.nodeName.match(/^ons-(navigator|splitter|tabbar|page)$/i)
    }, Q.propagateAction = function (t, e) {
        for (var n = 0; n < t.childNodes.length; n++) {
            var i = t.childNodes[n];
            i[e] instanceof Function ? i[e]() : Q.propagateAction(i, e)
        }
    }, Q.camelize = function (t) {
        return t.toLowerCase().replace(/-([a-z])/g, function (t, e) {
            return e.toUpperCase()
        })
    }, Q.hyphenate = function (t) {
        return t.replace(/([a-zA-Z])([A-Z])/g, "$1-$2").toLowerCase()
    }, Q.create = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.split("."),
            i = document.createElement(n.shift() || "div");
        return n.length && (i.className = n.join(" ")), d(i, e), i
    }, Q.createElement = function (t) {
        var e = document.createElement("div");
        t instanceof DocumentFragment ? e.appendChild(document.importNode(t, !0)) : e.innerHTML = t.trim(), e.children.length > 1 && Q.throw("HTML template must contain a single root element");
        var n = e.children[0];
        return e.children[0].remove(), n
    }, Q.createFragment = function (t) {
        var e = document.createElement("template");
        return e.innerHTML = t, document.importNode(e.content, !0)
    }, Q.extend = function (t) {
        for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
        for (var o = 0; o < n.length; o++) if (n[o]) for (var r = Object.keys(n[o]), a = 0; a < r.length; a++) {
            var s = r[a];
            t[s] = n[o][s]
        }
        return t
    }, Q.arrayFrom = function (t) {
        return Array.prototype.slice.apply(t)
    }, Q.parseJSONObjectSafely = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
            var n = JSON.parse("" + t);
            if ("object" === (void 0 === n ? "undefined" : f(n)) && null !== n) return n
        } catch (t) {
            return e
        }
        return e
    }, Q.findFromPath = function (t) {
        t = t.split(".");
        for (var e, n = window; e = t.shift();) n = n[e];
        return n
    }, Q.getTopPage = function (t) {
        return t && ("ons-page" === t.tagName.toLowerCase() ? t : t.topPage) || null
    }, Q.findToolbarPage = function (t) {
        var e = Q.getTopPage(t);
        if (e) {
            if (e._canAnimateToolbar()) return e;
            for (var n = 0; n < e._contentElement.children.length; n++) {
                var i = Q.getTopPage(e._contentElement.children[n]);
                if (i && !/ons-tabbar/i.test(e._contentElement.children[n].tagName)) return Q.findToolbarPage(i)
            }
        }
        return null
    }, Q.triggerElementEvent = function (t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = new CustomEvent(e, {bubbles: !0, cancelable: !0, detail: n});
        return Object.keys(n).forEach(function (t) {
            i[t] = n[t]
        }), t.dispatchEvent(i), i
    }, Q.hasModifier = function (t, e) {
        return !!t.hasAttribute("modifier") && RegExp("(^|\\s+)" + e + "($|\\s+)", "i").test(t.getAttribute("modifier"))
    }, Q.addModifier = function (t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return n.autoStyle && (e = N.mapModifier(e, t, n.forceAutoStyle)), !Q.hasModifier(t, e) && (t.setAttribute("modifier", ((t.getAttribute("modifier") || "") + " " + e).trim()), !0)
    }, Q.removeModifier = function (t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (n.autoStyle && (e = N.mapModifier(e, t, n.forceAutoStyle)), !t.getAttribute("modifier") || !Q.hasModifier(t, e)) return !1;
        var i = t.getAttribute("modifier").split(/\s+/).filter(function (t) {
            return t && t !== e
        });
        return i.length ? t.setAttribute("modifier", i.join(" ")) : t.removeAttribute("modifier"), !0
    }, Q.toggleModifier = function () {
        var t = arguments.length > 2 ? arguments.length <= 2 ? void 0 : arguments[2] : {},
            e = "boolean" == typeof t ? t : t.force;
        ("boolean" == typeof e ? e : !Q.hasModifier.apply(Q, arguments)) ? Q.addModifier.apply(Q, arguments) : Q.removeModifier.apply(Q, arguments)
    }, Q.restoreClass = function (t, e, n) {
        e.split(/\s+/).forEach(function (e) {
            return "" !== e && !t.classList.contains(e) && t.classList.add(e)
        }), t.hasAttribute("modifier") && B.refresh(t, n)
    }, Q.updateParentPosition = function (t) {
        !t._parentUpdated && t.parentElement && ("static" === window.getComputedStyle(t.parentElement).getPropertyValue("position") && (t.parentElement.style.position = "relative"), t._parentUpdated = !0)
    }, Q.toggleAttribute = function (t, e, n) {
        n ? t.setAttribute(e, "boolean" == typeof n ? "" : n) : t.removeAttribute(e)
    }, Q.bindListeners = function (t, e) {
        e.forEach(function (e) {
            var n = e.replace(/^_[a-z]/, "_bound" + e[1].toUpperCase());
            t[n] = t[n] || t[e].bind(t)
        })
    }, Q.each = function (t, e) {
        return Object.keys(t).forEach(function (n) {
            return e(n, t[n])
        })
    }, Q.updateRipple = function (t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        void 0 === e && (e = t.hasAttribute("ripple"));
        var i = Q.findChild(t, "ons-ripple");
        if (e) {
            if (!i) {
                var o = document.createElement("ons-ripple");
                Object.keys(n).forEach(function (t) {
                    return o.setAttribute(t, n[t])
                }), t.insertBefore(o, t.firstChild)
            }
        } else i && i.remove()
    }, Q.animationOptionsParse = function (t) {
        if (t = t.trim(), V(t)) return $(z(t));
        if (W(t)) return K(z(t));
        throw new Error("Provided string must be object or array like: " + t)
    }, Q.isInteger = function (t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    }, Q.defer = function () {
        var t = {};
        return t.promise = new Promise(function (e, n) {
            t.resolve = e, t.reject = n
        }), t
    }, Q.warn = function () {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        if (!P.config.warningsDisabled) {
            var i;
            (i = console).warn.apply(i, [J].concat(e))
        }
    }, Q.throw = function (t) {
        throw new Error(J + " " + t)
    }, Q.throwAbstract = function () {
        return Q.throw("Cannot instantiate abstract class")
    }, Q.throwMember = function () {
        return Q.throw("Class member must be implemented")
    }, Q.throwPageLoader = function () {
        return Q.throw("First parameter should be an instance of PageLoader")
    }, Q.throwAnimator = function (t) {
        return Q.throw('"Animator" param must inherit ' + t + "Animator")
    };
    var tt = function (t) {
        return t.cancelable && t.preventDefault()
    };
    Q.iosPreventScroll = function (t) {
        if ("ios" === Q.globals.actualMobileOS) {
            t.on("touchmove", tt), t.on("dragend", function e(n) {
                t.off("touchmove", tt), t.off("dragend", e)
            })
        }
    }, Q.iosPageScrollFix = function (t) {
        "ios" === Q.globals.actualMobileOS && (document.body.classList.toggle("ons-ios-scroll", t), Q.globals.isUIWebView && !P.config.forceUIWebViewScrollFix || document.body.classList.toggle("ons-ios-scroll-fix", t))
    }, Q.iosMaskScrollFix = function (t, e) {
        if (Q.globals.isUIWebView) {
            t[(e ? "add" : "remove") + "EventListener"]("touchmove", tt, !1)
        }
    }, Q.isValidGesture = function (t) {
        return void 0 !== t.gesture && (t.gesture.distance <= 15 || t.gesture.deltaTime <= 100)
    }, Q.checkMissingImport = function () {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        e.forEach(function (t) {
            c[t] || Q.throw("Ons" + t + " is required but was not imported (Custom Elements)")
        })
    };
    var et = {};
    et.capitalize = function (t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }, et.buildTransitionValue = function (t) {
        t.property = t.property || "all", t.duration = t.duration || .4, t.timing = t.timing || "linear";
        return t.property.split(/ +/).map(function (e) {
            return e + " " + t.duration + "s " + t.timing
        }).join(", ")
    }, et.onceOnTransitionEnd = function (t, e) {
        if (!t) return function () {
        };
        var n = function (n) {
            t == n.target && (n.stopPropagation(), i(), e())
        }, i = function () {
            et._transitionEndEvents.forEach(function (e) {
                t.removeEventListener(e, n, !1)
            })
        };
        return et._transitionEndEvents.forEach(function (e) {
            t.addEventListener(e, n, !1)
        }), i
    }, et._transitionEndEvents = "ontransitionend" in window ? ["transitionend"] : "onwebkittransitionend" in window ? ["webkitTransitionEnd"] : "webkit" === et.vendorPrefix || "o" === et.vendorPrefix || "moz" === et.vendorPrefix || "ms" === et.vendorPrefix ? [et.vendorPrefix + "TransitionEnd", "transitionend"] : [], et._cssPropertyDict = function () {
        for (var t = window.getComputedStyle(document.documentElement, ""), e = {}, n = "A".charCodeAt(0), i = "z".charCodeAt(0), o = 0; o < t.length; o++) {
            var r = t[o].replace(/^[-]+/, "").replace(/[-][a-z]/g, function (t) {
                return t.substr(1).toUpperCase()
            }).replace(/^moz/, "Moz");
            n <= r.charCodeAt(0) && i >= r.charCodeAt(0) && "cssText" !== r && "parentText" !== r && (e[r] = !0)
        }
        return e
    }(), et.hasCssProperty = function (t) {
        return t in et._cssPropertyDict
    }, et.vendorPrefix = function () {
        var t = window.getComputedStyle(document.documentElement, "");
        return (Array.prototype.slice.call(t).join("").match(/-(moz|webkit|ms)-/) || "" === t.OLink && ["", "o"])[1]
    }(), et.forceLayoutAtOnce = function (t, e) {
        this.batchImmediate(function () {
            t.forEach(function (t) {
                t.offsetHeight
            }), e()
        })
    }, et.batchImmediate = function () {
        var t = [];
        return function (e) {
            0 === t.length && setImmediate(function () {
                var e = t.slice(0);
                t = [], e.forEach(function (t) {
                    t()
                })
            }), t.push(e)
        }
    }(), et.batchAnimationFrame = function () {
        var t = [],
            e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                setTimeout(t, 1e3 / 60)
            };
        return function (n) {
            0 === t.length && e(function () {
                var e = t.slice(0);
                t = [], e.forEach(function (t) {
                    t()
                })
            }), t.push(n)
        }
    }(), et.transitionPropertyName = function () {
        if (et.hasCssProperty("transitionDuration")) return "transition";
        if (et.hasCssProperty(et.vendorPrefix + "TransitionDuration")) return et.vendorPrefix + "Transition";
        throw new Error("Invalid state")
    }();
    var nt = function t(e, n) {
        if (!(this instanceof t)) return new t(e, n);
        if (e instanceof HTMLElement) this.elements = [e]; else {
            if ("[object Array]" !== Object.prototype.toString.call(e)) throw new Error("First argument must be an array or an instance of HTMLElement.");
            this.elements = e
        }
        this.defaults = n, this.transitionQueue = [], this.lastStyleAttributeDict = []
    };
    nt.prototype = {
        transitionQueue: void 0, elements: void 0, defaults: void 0, play: function (t) {
            return "function" == typeof t && this.transitionQueue.push(function (e) {
                t(), e()
            }), this.startAnimation(), this
        }, default: function (t, e, n) {
            function i(t, e, n) {
                return void 0 !== t.duration && (e = t.duration), void 0 !== t.timing && (n = t.timing), {
                    css: t.css || t,
                    duration: e,
                    timing: n
                }
            }

            return this.saveStyle().queue(i(t, 0, this.defaults.timing)).wait(void 0 === n ? this.defaults.delay : n).queue(i(e, this.defaults.duration, this.defaults.timing)).restoreStyle()
        }, queue: function (t, e) {
            var n = this.transitionQueue;
            if (t && e && (e.css = t, t = new nt.Transition(e)), t instanceof Function || t instanceof nt.Transition || (t = new nt.Transition(t.css ? t : {css: t})), t instanceof Function) n.push(t); else {
                if (!(t instanceof nt.Transition)) throw new Error("Invalid arguments");
                n.push(t.build())
            }
            return this
        }, wait: function (t) {
            return t > 0 && this.transitionQueue.push(function (e) {
                setTimeout(e, 1e3 * t)
            }), this
        }, saveStyle: function () {
            return this.transitionQueue.push(function (t) {
                this.elements.forEach(function (t, e) {
                    for (var n = this.lastStyleAttributeDict[e] = {}, i = 0; i < t.style.length; i++) n[t.style[i]] = t.style[t.style[i]]
                }.bind(this)), t()
            }.bind(this)), this
        }, restoreStyle: function (t) {
            var e = this;
            if ((t = t || {}).transition && !t.duration) throw new Error('"options.duration" is required when "options.transition" is enabled.');
            var n = et.transitionPropertyName;
            if (t.transition || t.duration && t.duration > 0) {
                var i = t.transition || "all " + t.duration + "s " + (t.timing || "linear");
                this.transitionQueue.push(function (o) {
                    var r, a = this.elements, s = function () {
                        a.forEach(function (t) {
                            t.style[n] = ""
                        })
                    }, l = et.onceOnTransitionEnd(a[0], function () {
                        clearTimeout(r), s(), o()
                    });
                    r = setTimeout(function () {
                        l(), s(), o()
                    }, 1e3 * t.duration * 1.4), a.forEach(function (t, o) {
                        var r = e.lastStyleAttributeDict[o];
                        if (!r) throw new Error("restoreStyle(): The style is not saved. Invoke saveStyle() before.");
                        e.lastStyleAttributeDict[o] = void 0;
                        for (var a, s = 0, l = t.style.length; s < l; s++) a = t.style[s], void 0 === r[a] && (r[a] = "");
                        t.style[n] = i, Object.keys(r).forEach(function (e) {
                            e !== n && (t.style[e] = r[e])
                        }), t.style[n] = i
                    })
                })
            } else this.transitionQueue.push(function (t) {
                e.elements.forEach(function (t, i) {
                    t.style[n] = "none";
                    var o = e.lastStyleAttributeDict[i];
                    if (!o) throw new Error("restoreStyle(): The style is not saved. Invoke saveStyle() before.");
                    e.lastStyleAttributeDict[i] = void 0;
                    for (var r = 0; r < t.style.length; r++) t.style[r], void 0 === o[t.style[r]] && (o[t.style[r]] = "");
                    Object.keys(o).forEach(function (e) {
                        t.style[e] = o[e]
                    })
                }), t()
            });
            return this
        }, startAnimation: function () {
            return this._dequeueTransition(), this
        }, _dequeueTransition: function () {
            var t = this.transitionQueue.shift();
            if (this._currentTransition) throw new Error("Current transition exists.");
            this._currentTransition = t;
            var e = this, n = !1;
            t && t.call(this, function () {
                if (n) throw new Error("Invalid state: This callback is called twice.");
                n = !0, e._currentTransition = void 0, e._dequeueTransition()
            })
        }
    }, nt.runAll = function () {
        for (var t = 0; t < arguments.length; t++) arguments[t].play()
    }, (nt.Transition = function (t) {
        this.options = t || {}, this.options.duration = this.options.duration || 0, this.options.timing = this.options.timing || "linear", this.options.css = this.options.css || {}, this.options.property = this.options.property || "all"
    }).prototype = {
        build: function () {
            if (0 === Object.keys(this.options.css).length) throw new Error("options.css is required.");
            var t = function (t) {
                var e = {};
                return Object.keys(t).forEach(function (n) {
                    var i = t[n];
                    if (et.hasCssProperty(n)) e[n] = i; else {
                        var o = et.vendorPrefix + et.capitalize(n);
                        et.hasCssProperty(o) ? e[o] = i : (e[o] = i, e[n] = i)
                    }
                }), e
            }(this.options.css);
            if (this.options.duration > 0) {
                var e = et.buildTransitionValue(this.options), n = this;
                return function (i) {
                    var o, r = this.elements, a = 1e3 * n.options.duration * 1.4,
                        s = et.onceOnTransitionEnd(r[0], function () {
                            clearTimeout(o), i()
                        });
                    o = setTimeout(function () {
                        s(), i()
                    }, a), r.forEach(function (n) {
                        n.style[et.transitionPropertyName] = e, Object.keys(t).forEach(function (e) {
                            n.style[e] = t[e]
                        })
                    })
                }
            }
            if (this.options.duration <= 0) return function (e) {
                var n = this.elements;
                n.forEach(function (e) {
                    e.style[et.transitionPropertyName] = "", Object.keys(t).forEach(function (n) {
                        e.style[n] = t[n]
                    })
                }), n.length > 0 ? et.forceLayoutAtOnce(n, function () {
                    et.batchAnimationFrame(e)
                }) : et.batchAnimationFrame(e)
            }
        }
    };
    var it, ot, rt, at, st = function t(e, n) {
        return new t.Instance(e, n || {})
    };
    st.defaults = {
        behavior: {
            touchAction: "pan-y",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    }, st.DOCUMENT = document, st.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled, st.HAS_TOUCHEVENTS = "ontouchstart" in window, st.IS_MOBILE = /mobile|tablet|ip(ad|hone|od)|android|silk/i.test(navigator.userAgent), st.NO_MOUSEEVENTS = st.HAS_TOUCHEVENTS && st.IS_MOBILE || st.HAS_POINTEREVENTS, st.CALCULATE_INTERVAL = 25;
    var lt = {}, ut = st.DIRECTION_DOWN = "down", ct = st.DIRECTION_LEFT = "left", ht = st.DIRECTION_UP = "up",
        dt = st.DIRECTION_RIGHT = "right", ft = st.POINTER_MOUSE = "mouse", pt = st.POINTER_TOUCH = "touch",
        gt = st.POINTER_PEN = "pen", mt = st.EVENT_START = "start", _t = st.EVENT_MOVE = "move",
        vt = st.EVENT_END = "end", bt = st.EVENT_RELEASE = "release", yt = st.EVENT_TOUCH = "touch";
    st.READY = !1, st.plugins = st.plugins || {}, st.gestures = st.gestures || {}, ot = st.utils = {
        extend: function (t, e, n) {
            for (var i in e) !e.hasOwnProperty(i) || void 0 !== t[i] && n || (t[i] = e[i]);
            return t
        }, on: function (t, e, n, i) {
            Q.addEventListener(t, e, n, i, !0)
        }, off: function (t, e, n, i) {
            Q.removeEventListener(t, e, n, i, !0)
        }, each: function (t, e, n) {
            var i, o;
            if ("forEach" in t) t.forEach(e, n); else if (void 0 !== t.length) {
                for (i = 0, o = t.length; i < o; i++) if (!1 === e.call(n, t[i], i, t)) return
            } else for (i in t) if (t.hasOwnProperty(i) && !1 === e.call(n, t[i], i, t)) return
        }, inStr: function (t, e) {
            return t.indexOf(e) > -1
        }, inArray: function (t, e, n) {
            if (n) {
                for (var i = 0, o = t.length; i < o; i++) if (Object.keys(e).every(function (n) {
                    return t[i][n] === e[n]
                })) return i;
                return -1
            }
            if (t.indexOf) return t.indexOf(e);
            for (var i = 0, o = t.length; i < o; i++) if (t[i] === e) return i;
            return -1
        }, toArray: function (t) {
            return Array.prototype.slice.call(t, 0)
        }, hasParent: function (t, e) {
            for (; t;) {
                if (t == e) return !0;
                t = t.parentNode
            }
            return !1
        }, getCenter: function (t) {
            var e = [], n = [], i = [], o = [], r = Math.min, a = Math.max;
            return 1 === t.length ? {
                pageX: t[0].pageX,
                pageY: t[0].pageY,
                clientX: t[0].clientX,
                clientY: t[0].clientY
            } : (ot.each(t, function (t) {
                e.push(t.pageX), n.push(t.pageY), i.push(t.clientX), o.push(t.clientY)
            }), {
                pageX: (r.apply(Math, e) + a.apply(Math, e)) / 2,
                pageY: (r.apply(Math, n) + a.apply(Math, n)) / 2,
                clientX: (r.apply(Math, i) + a.apply(Math, i)) / 2,
                clientY: (r.apply(Math, o) + a.apply(Math, o)) / 2
            })
        }, getVelocity: function (t, e, n) {
            return {x: Math.abs(e / t) || 0, y: Math.abs(n / t) || 0}
        }, getAngle: function (t, e) {
            var n = e.clientX - t.clientX, i = e.clientY - t.clientY;
            return 180 * Math.atan2(i, n) / Math.PI
        }, getDirection: function (t, e) {
            return Math.abs(t.clientX - e.clientX) >= Math.abs(t.clientY - e.clientY) ? t.clientX - e.clientX > 0 ? ct : dt : t.clientY - e.clientY > 0 ? ht : ut
        }, getDistance: function (t, e) {
            var n = e.clientX - t.clientX, i = e.clientY - t.clientY;
            return Math.sqrt(n * n + i * i)
        }, getScale: function (t, e) {
            return t.length >= 2 && e.length >= 2 ? this.getDistance(e[0], e[1]) / this.getDistance(t[0], t[1]) : 1
        }, getRotation: function (t, e) {
            return t.length >= 2 && e.length >= 2 ? this.getAngle(e[1], e[0]) - this.getAngle(t[1], t[0]) : 0
        }, isVertical: function (t) {
            return t == ht || t == ut
        }, setPrefixedCss: function (t, e, n, i) {
            var o = ["", "Webkit", "Moz", "O", "ms"];
            e = ot.toCamelCase(e);
            for (var r = 0; r < o.length; r++) {
                var a = e;
                if (o[r] && (a = o[r] + a.slice(0, 1).toUpperCase() + a.slice(1)), a in t.style) {
                    t.style[a] = (null === i || i) && n || "";
                    break
                }
            }
        }, toggleBehavior: function (t, e, n) {
            if (e && t && t.style) {
                ot.each(e, function (e, i) {
                    ot.setPrefixedCss(t, i, e, n)
                });
                var i = n && function () {
                    return !1
                };
                "none" == e.userSelect && (t.onselectstart = i), "none" == e.userDrag && (t.ondragstart = i)
            }
        }, toCamelCase: function (t) {
            return t.replace(/[_-]([a-z])/g, function (t) {
                return t[1].toUpperCase()
            })
        }
    }, it = st.event = {
        preventMouseEvents: !1, started: !1, shouldDetect: !1, on: function (t, e, n, i, o) {
            var r = e.split(" ");
            ot.each(r, function (e) {
                ot.on(t, e, n, i), o && o(e)
            })
        }, off: function (t, e, n, i, o) {
            var r = e.split(" ");
            ot.each(r, function (e) {
                ot.off(t, e, n, i), o && o(e)
            })
        }, onTouch: function (t, e, n, i) {
            var o = this, r = function (i) {
                var r, a = i.type.toLowerCase(), s = st.HAS_POINTEREVENTS, l = ot.inStr(a, "mouse");
                l && o.preventMouseEvents || (l && e == mt && 0 === i.button ? (o.preventMouseEvents = !1, o.shouldDetect = !0) : s && e == mt ? o.shouldDetect = 1 === i.buttons || at.matchType(pt, i) : l || e != mt || (o.preventMouseEvents = !0, o.shouldDetect = !0), s && e != vt && at.updatePointer(e, i), o.shouldDetect && (r = o.doDetect.call(o, i, e, t, n)), r == vt && (o.preventMouseEvents = !1, o.shouldDetect = !1, at.reset()), s && e == vt && at.updatePointer(e, i))
            };
            return this.on(t, lt[e], r, i), r
        }, doDetect: function (t, e, n, i) {
            var o = this.getTouchList(t, e), r = o.length, a = e, s = o.trigger, l = r;
            e == mt ? s = yt : e == vt && (s = bt, l = o.length - (t.changedTouches ? t.changedTouches.length : 1)), l > 0 && this.started && (a = _t), this.started = !0;
            var u = this.collectEventData(n, a, o, t);
            return e != vt && i.call(rt, u), s && (u.changedLength = l, u.eventType = s, i.call(rt, u), u.eventType = a, delete u.changedLength), a == vt && (i.call(rt, u), this.started = !1), a
        }, determineEventTypes: function () {
            var t;
            return t = st.HAS_POINTEREVENTS ? window.PointerEvent ? ["pointerdown", "pointermove", "pointerup pointercancel lostpointercapture"] : ["MSPointerDown", "MSPointerMove", "MSPointerUp MSPointerCancel MSLostPointerCapture"] : st.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], lt[mt] = t[0], lt[_t] = t[1], lt[vt] = t[2], lt
        }, getTouchList: function (t, e) {
            if (st.HAS_POINTEREVENTS) return at.getTouchList();
            if (t.touches) {
                if (e == _t) return t.touches;
                var n = [], i = [].concat(ot.toArray(t.touches), ot.toArray(t.changedTouches)), o = [];
                return ot.each(i, function (t) {
                    -1 === ot.inArray(n, t.identifier) && o.push(t), n.push(t.identifier)
                }), o
            }
            return t.identifier = 1, [t]
        }, collectEventData: function (t, e, n, i) {
            var o = pt;
            return ot.inStr(i.type, "mouse") || at.matchType(ft, i) ? o = ft : at.matchType(gt, i) && (o = gt), {
                center: ot.getCenter(n),
                timeStamp: Date.now(),
                target: i.target,
                touches: n,
                eventType: e,
                pointerType: o,
                srcEvent: i,
                preventDefault: function () {
                    var t = this.srcEvent;
                    t.preventManipulation && t.preventManipulation(), t.preventDefault && t.preventDefault()
                },
                stopPropagation: function () {
                    this.srcEvent.stopPropagation()
                },
                stopDetect: function () {
                    return rt.stopDetect()
                }
            }
        }
    }, at = st.PointerEvent = {
        pointers: {}, getTouchList: function () {
            var t = [];
            return ot.each(this.pointers, function (e) {
                t.push(e)
            }), t
        }, updatePointer: function (t, e) {
            t == vt || t != vt && 1 !== e.buttons ? delete this.pointers[e.pointerId] : (e.identifier = e.pointerId, this.pointers[e.pointerId] = e)
        }, matchType: function (t, e) {
            if (!e.pointerType) return !1;
            var n = e.pointerType, i = {};
            return i[ft] = n === (e.MSPOINTER_TYPE_MOUSE || ft), i[pt] = n === (e.MSPOINTER_TYPE_TOUCH || pt), i[gt] = n === (e.MSPOINTER_TYPE_PEN || gt), i[t]
        }, reset: function () {
            this.pointers = {}
        }
    }, rt = st.detection = {
        gestures: [], current: null, previous: null, stopped: !1, startDetect: function (t, e) {
            this.current || (this.stopped = !1, this.current = {
                inst: t,
                startEvent: ot.extend({}, e),
                lastEvent: !1,
                lastCalcEvent: !1,
                futureCalcEvent: !1,
                lastCalcData: {},
                name: ""
            }, this.detect(e))
        }, detect: function (t) {
            if (this.current && !this.stopped) {
                t = this.extendEventData(t);
                var e = this.current.inst, n = e.options;
                return ot.each(this.gestures, function (i) {
                    !this.stopped && e.enabled && n[i.name] && i.handler.call(i, t, e)
                }, this), this.current && (this.current.lastEvent = t), t.eventType == vt && this.stopDetect(), t
            }
        }, stopDetect: function () {
            this.previous = ot.extend({}, this.current), this.current = null, this.stopped = !0
        }, getCalculatedData: function (t, e, n, i, o) {
            var r = this.current, a = !1, s = r.lastCalcEvent, l = r.lastCalcData;
            s && t.timeStamp - s.timeStamp > st.CALCULATE_INTERVAL && (e = s.center, n = t.timeStamp - s.timeStamp, i = t.center.clientX - s.center.clientX, o = t.center.clientY - s.center.clientY, a = !0), t.eventType != yt && t.eventType != bt || (r.futureCalcEvent = t), r.lastCalcEvent && !a || (l.velocity = ot.getVelocity(n, i, o), l.angle = ot.getAngle(e, t.center), l.direction = ot.getDirection(e, t.center), r.lastCalcEvent = r.futureCalcEvent || t, r.futureCalcEvent = t), t.velocityX = l.velocity.x, t.velocityY = l.velocity.y, t.interimAngle = l.angle, t.interimDirection = l.direction
        }, extendEventData: function (t) {
            var e = this.current, n = e.startEvent, i = e.lastEvent || n;
            t.eventType != yt && t.eventType != bt || (n.touches = [], ot.each(t.touches, function (t) {
                n.touches.push({clientX: t.clientX, clientY: t.clientY})
            }));
            var o = t.timeStamp - n.timeStamp, r = t.center.clientX - n.center.clientX,
                a = t.center.clientY - n.center.clientY;
            return this.getCalculatedData(t, i.center, o, r, a), ot.extend(t, {
                startEvent: n,
                deltaTime: o,
                deltaX: r,
                deltaY: a,
                distance: ot.getDistance(n.center, t.center),
                angle: ot.getAngle(n.center, t.center),
                direction: ot.getDirection(n.center, t.center),
                scale: ot.getScale(n.touches, t.touches),
                rotation: ot.getRotation(n.touches, t.touches)
            }), t
        }, register: function (t) {
            var e = t.defaults || {};
            return void 0 === e[t.name] && (e[t.name] = !0), ot.extend(st.defaults, e, !0), t.index = t.index || 1e3, this.gestures.push(t), this.gestures.sort(function (t, e) {
                return t.index < e.index ? -1 : t.index > e.index ? 1 : 0
            }), this.gestures
        }
    }, st.Instance = function (t, e) {
        var n = this, i = e && e.passive ? {passive: !0} : void 0;
        !function (t) {
            st.READY || (it.determineEventTypes(), ot.each(st.gestures, function (t) {
                rt.register(t)
            }), it.onTouch(st.DOCUMENT, _t, rt.detect, t), it.onTouch(st.DOCUMENT, vt, rt.detect, t), st.READY = !0)
        }(i), this.element = t, this.enabled = !0, ot.each(e, function (t, n) {
            delete e[n], e[ot.toCamelCase(n)] = t
        }), this.options = ot.extend(ot.extend({}, st.defaults), e || {}), this.options.listenerOptions = i, this.options.behavior && ot.toggleBehavior(this.element, this.options.behavior, !0), this.eventStartHandler = it.onTouch(t, mt, function (t) {
            n.enabled && t.eventType == mt ? rt.startDetect(n, t) : t.eventType == yt && rt.detect(t)
        }, i), this.eventHandlers = []
    }, st.Instance.prototype = {
        on: function (t, e, n) {
            var i = this;
            return it.on(i.element, t, e, Q.extend({}, i.options.listenerOptions, n), function (t) {
                i.eventHandlers.push({gesture: t, handler: e})
            }), i
        }, off: function (t, e, n) {
            var i = this;
            return it.off(i.element, t, e, Q.extend({}, i.options.listenerOptions, n), function (t) {
                var n = ot.inArray(i.eventHandlers, {gesture: t, handler: e}, !0);
                n >= 0 && i.eventHandlers.splice(n, 1)
            }), i
        }, trigger: function (t, e) {
            e || (e = {});
            var n = st.DOCUMENT.createEvent("Event");
            n.initEvent(t, !0, !0), n.gesture = e;
            var i = this.element;
            return ot.hasParent(e.target, i) && (i = e.target), i.dispatchEvent(n), this
        }, enable: function (t) {
            return this.enabled = t, this
        }, dispose: function () {
            var t, e;
            for (ot.toggleBehavior(this.element, this.options.behavior, !1), t = -1; e = this.eventHandlers[++t];) ot.off(this.element, e.gesture, e.handler);
            return this.eventHandlers = [], it.off(this.element, lt[mt], this.eventStartHandler), null
        }
    }, function (t) {
        var e = !1;
        st.gestures.Drag = {
            name: t,
            index: 50,
            handler: function (n, i) {
                var o = rt.current;
                if (!(i.options.dragMaxTouches > 0 && n.touches.length > i.options.dragMaxTouches)) switch (n.eventType) {
                    case mt:
                        e = !1;
                        break;
                    case _t:
                        if (n.distance < i.options.dragMinDistance && o.name != t) return;
                        var r = o.startEvent.center;
                        if (o.name != t && (o.name = t, i.options.dragDistanceCorrection && n.distance > 0)) {
                            var a = Math.abs(i.options.dragMinDistance / n.distance);
                            r.pageX += n.deltaX * a, r.pageY += n.deltaY * a, r.clientX += n.deltaX * a, r.clientY += n.deltaY * a, n = rt.extendEventData(n)
                        }
                        (o.lastEvent.dragLockToAxis || i.options.dragLockToAxis && i.options.dragLockMinDistance <= n.distance) && (n.dragLockToAxis = !0);
                        var s = o.lastEvent.direction;
                        n.dragLockToAxis && s !== n.direction && (ot.isVertical(s) ? n.direction = n.deltaY < 0 ? ht : ut : n.direction = n.deltaX < 0 ? ct : dt), e || (i.trigger(t + "start", n), e = !0), i.trigger(t, n), i.trigger(t + n.direction, n);
                        var l = ot.isVertical(n.direction);
                        (i.options.dragBlockVertical && l || i.options.dragBlockHorizontal && !l) && n.preventDefault();
                        break;
                    case bt:
                        e && n.changedLength <= i.options.dragMaxTouches && (i.trigger(t + "end", n), e = !1);
                        break;
                    case vt:
                        e = !1
                }
            },
            defaults: {
                dragMinDistance: 10,
                dragDistanceCorrection: !0,
                dragMaxTouches: 1,
                dragBlockHorizontal: !1,
                dragBlockVertical: !1,
                dragLockToAxis: !1,
                dragLockMinDistance: 25
            }
        }
    }("drag"), st.gestures.Gesture = {
        name: "gesture", index: 1337, handler: function (t, e) {
            e.trigger(this.name, t)
        }
    }, function (t) {
        var e;
        st.gestures.Hold = {
            name: t,
            index: 10,
            defaults: {holdTimeout: 500, holdThreshold: 2},
            handler: function (n, i) {
                var o = i.options, r = rt.current;
                switch (n.eventType) {
                    case mt:
                        clearTimeout(e), r.name = t, e = setTimeout(function () {
                            r && r.name == t && i.trigger(t, n)
                        }, o.holdTimeout);
                        break;
                    case _t:
                        n.distance > o.holdThreshold && clearTimeout(e);
                        break;
                    case bt:
                        clearTimeout(e)
                }
            }
        }
    }("hold"), st.gestures.Release = {
        name: "release", index: 1 / 0, handler: function (t, e) {
            t.eventType == bt && e.trigger(this.name, t)
        }
    }, st.gestures.Swipe = {
        name: "swipe",
        index: 40,
        defaults: {swipeMinTouches: 1, swipeMaxTouches: 1, swipeVelocityX: .6, swipeVelocityY: .6},
        handler: function (t, e) {
            if (t.eventType == bt) {
                var n = t.touches.length, i = e.options;
                if (n < i.swipeMinTouches || n > i.swipeMaxTouches) return;
                (t.velocityX > i.swipeVelocityX || t.velocityY > i.swipeVelocityY) && (e.trigger(this.name, t), e.trigger(this.name + t.direction, t))
            }
        }
    }, function (t) {
        var e = !1;
        st.gestures.Tap = {
            name: t,
            index: 100,
            handler: function (n, i) {
                var o, r, a = i.options, s = rt.current, l = rt.previous;
                switch (n.eventType) {
                    case mt:
                        e = !1;
                        break;
                    case _t:
                        e = e || n.distance > a.tapMaxDistance;
                        break;
                    case vt:
                        !ot.inStr(n.srcEvent.type, "cancel") && n.deltaTime < a.tapMaxTime && !e && (o = l && l.lastEvent && n.timeStamp - l.lastEvent.timeStamp, r = !1, l && l.name == t && o && o < a.doubleTapInterval && n.distance < a.doubleTapDistance && (i.trigger("doubletap", n), r = !0), r && !a.tapAlways || (s.name = t, i.trigger(s.name, n)))
                }
            },
            defaults: {
                tapMaxTime: 250,
                tapMaxDistance: 10,
                tapAlways: !0,
                doubleTapDistance: 20,
                doubleTapInterval: 300
            }
        }
    }("tap"), st.gestures.Touch = {
        name: "touch",
        index: -1 / 0,
        defaults: {preventDefault: !1, preventMouse: !1},
        handler: function (t, e) {
            e.options.preventMouse && t.pointerType == ft ? t.stopDetect() : (e.options.preventDefault && t.preventDefault(), t.eventType == yt && e.trigger("touch", t))
        }
    }, function (t) {
        var e = !1;
        st.gestures.Transform = {
            name: t,
            index: 45,
            defaults: {transformMinScale: .01, transformMinRotation: 1},
            handler: function (n, i) {
                switch (n.eventType) {
                    case mt:
                        e = !1;
                        break;
                    case _t:
                        if (n.touches.length < 2) return;
                        var o = Math.abs(1 - n.scale), r = Math.abs(n.rotation);
                        if (o < i.options.transformMinScale && r < i.options.transformMinRotation) return;
                        rt.current.name = t, e || (i.trigger(t + "start", n), e = !0), i.trigger(t, n), r > i.options.transformMinRotation && i.trigger("rotate", n), o > i.options.transformMinScale && (i.trigger("pinch", n), i.trigger("pinch" + (n.scale < 1 ? "in" : "out"), n));
                        break;
                    case bt:
                        e && n.changedLength < 2 && (i.trigger(t + "end", n), e = !1)
                }
            }
        }
    }("transform");
    var kt = void 0, wt = void 0, Et = new (function () {
        function t() {
            p(this, t), this.queue = []
        }

        return g(t, [{
            key: "add", value: function (t, e) {
                var n = this;
                this.queue.push(t), 1 === this.queue.length && setImmediate(this.queue[0]), e.then(function () {
                    n.queue.shift(), n.queue.length > 0 && setTimeout(n.queue[0], 1e3 / 30)
                })
            }
        }]), t
    }()), Ct = function (t, e) {
        ["id", "class", "animation"].forEach(function (n) {
            return e.hasOwnProperty(n) && t.setAttribute(n, e[n])
        }), e.modifier && Q.addModifier(t, e.modifier)
    }, At = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return e = _({}, e), "string" == typeof t ? e.message = t : e = t, e && (e.message || e.messageHTML) || Q.throw("Notifications must contain a message"), (e.hasOwnProperty("buttonLabels") || e.hasOwnProperty("buttonLabel")) && (e.buttonLabels = e.buttonLabels || e.buttonLabel, Array.isArray(e.buttonLabels) || (e.buttonLabels = [e.buttonLabels || ""])), Q.extend({
            compile: function (t) {
                return t
            },
            callback: function (t) {
                return t
            },
            animation: "default",
            cancelable: !1,
            primaryButtonIndex: (e.buttonLabels || n.buttonLabels || []).length - 1
        }, n, e)
    }, St = {};
    St._createAlertDialog = function () {
        for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return new Promise(function (t) {
            var i = At.apply(void 0, e);
            Q.checkMissingImport("AlertDialog", "AlertDialogButton");
            var o = "";
            i.isPrompt && (o = '\n      <input\n        class="text-input text-input--underbar"\n        type="' + (i.inputType || "text") + '"\n        placeholder="' + (i.placeholder || "") + '"\n        value="' + (i.defaultValue || "") + '"\n        style="width: 100%; margin-top: 10px;"\n      />\n    ');
            var r = "";
            i.buttonLabels.forEach(function (t, e) {
                r += '\n      <ons-alert-dialog-button\n        class="\n          ' + (e === i.primaryButtonIndex ? " alert-dialog-button--primal" : "") + "\n          " + (i.buttonLabels.length <= 2 ? " alert-dialog-button--rowfooter" : "") + '\n        "\n        style="position: relative;">\n        ' + t + "\n      </ons-alert-dialog-button>\n    "
            });
            var a = {}, s = function () {
                a.dialog.onDialogCancel && a.dialog.removeEventListener("dialog-cancel", a.dialog.onDialogCancel), Object.keys(a).forEach(function (t) {
                    return delete a[t]
                }), a = null, i.destroy instanceof Function && i.destroy()
            };
            a.dialog = document.createElement("ons-alert-dialog"), a.dialog.innerHTML = '\n    <div class="alert-dialog-mask"\n      style="\n        ' + (i.maskColor ? "background-color: " + i.maskColor : "") + '\n      "></div>\n    <div class="alert-dialog">\n      <div class="alert-dialog-container">\n        <div class="alert-dialog-title">\n          ' + (i.title || "") + '\n        </div>\n        <div class="alert-dialog-content">\n          ' + (i.message || i.messageHTML) + "\n          " + o + '\n        </div>\n        <div class="\n          alert-dialog-footer\n          ' + (i.buttonLabels.length <= 2 ? " alert-dialog-footer--rowfooter" : "") + '\n        ">\n          ' + r + "\n        </div>\n      </div>\n    </div>\n  ", n(a.dialog), Ct(a.dialog, i), i.isPrompt && i.submitOnEnter && (a.input = a.dialog.querySelector(".text-input"), a.input.onkeypress = function (e) {
                13 === e.keyCode && a.dialog.hide().then(function () {
                    if (a) {
                        var e = a.input.value;
                        s(), i.callback(e), t(e)
                    }
                })
            }), a.footer = a.dialog.querySelector(".alert-dialog-footer"), Q.arrayFrom(a.dialog.querySelectorAll(".alert-dialog-button")).forEach(function (e, n) {
                e.onclick = function () {
                    a.dialog.hide().then(function () {
                        if (a) {
                            var e = n;
                            i.isPrompt && (e = n === i.primaryButtonIndex ? a.input.value : null), a.dialog.remove(), s(), i.callback(e), t(e)
                        }
                    })
                }, a.footer.appendChild(e)
            }), i.cancelable && (a.dialog.cancelable = !0, a.dialog.onDialogCancel = function () {
                setImmediate(function () {
                    a.dialog.remove(), s()
                });
                var e = i.isPrompt ? null : -1;
                i.callback(e), t(e)
            }, a.dialog.addEventListener("dialog-cancel", a.dialog.onDialogCancel, !1)), document.body.appendChild(a.dialog), i.compile(a.dialog), setImmediate(function () {
                a.dialog.show().then(function () {
                    if (a.input && i.isPrompt && i.autofocus) {
                        var t = a.input.value.length;
                        a.input.focus(), a.input.setSelectionRange(t, t)
                    }
                })
            })
        })
    }, St.alert = function (t, e) {
        return St._createAlertDialog(t, e, {buttonLabels: ["OK"], title: "Alert"})
    }, St.confirm = function (t, e) {
        return St._createAlertDialog(t, e, {buttonLabels: ["Cancel", "OK"], title: "Confirm"})
    }, St.prompt = function (t, e) {
        return St._createAlertDialog(t, e, {
            buttonLabels: ["OK"],
            title: "Alert",
            isPrompt: !0,
            autofocus: !0,
            submitOnEnter: !0
        })
    }, St.toast = function (t, e) {
        var n = new Promise(function (i) {
            Q.checkMissingImport("Toast"), e = At(t, e, {timeout: 0, force: !1});
            var o = Q.createElement("\n      <ons-toast>\n        " + e.message + "\n        " + (e.buttonLabels ? "<button>" + e.buttonLabels[0] + "</button>" : "") + "\n      </ons-toast>\n    ");
            Ct(o, e);
            var r = function (t) {
                o && o.hide().then(function () {
                    o && (o.remove(), o = null, e.callback(t), i(t))
                })
            };
            e.buttonLabels && (Q.findChild(o._toast, "button").onclick = function () {
                return r(0)
            }), document.body.appendChild(o), e.compile(o);
            var a = function () {
                o.parentElement && o.show(e).then(function () {
                    e.timeout && setTimeout(function () {
                        return r(-1)
                    }, e.timeout)
                })
            };
            setImmediate(function () {
                return e.force ? a() : Et.add(a, n)
            })
        });
        return n
    };
    var Pt = function () {
    };
    Pt.prototype = {
        on: function (t, e) {
            this._events = this._events || {}, this._events[t] = this._events[t] || [], this._events[t].push(e)
        }, once: function (t, e) {
            var n = this;
            this.on(t, function i() {
                return n.off(t, i), e.apply(null, arguments)
            })
        }, off: function (t, e) {
            this._events = this._events || {}, t in this._events != !1 && (this._events[t] = this._events[t].filter(function (t) {
                return !!e && e !== t
            }))
        }, emit: function (t) {
            if (this._events = this._events || {}, t in this._events != !1) for (var e = 0; e < this._events[t].length; e++) this._events[t][e].apply(this, Array.prototype.slice.call(arguments, 1))
        }
    }, Pt.mixin = function (t) {
        for (var e = ["on", "once", "off", "emit"], n = 0; n < e.length; n++) "function" == typeof t ? t.prototype[e[n]] = Pt.prototype[e[n]] : t[e[n]] = Pt.prototype[e[n]]
    }, window.MicroEvent = Pt;
    var Ot = function () {
        var t = {
            _isPortrait: !1, isPortrait: function () {
                return this._isPortrait()
            }, isLandscape: function () {
                return !this.isPortrait()
            }, _init: function () {
                return document.addEventListener("DOMContentLoaded", this._onDOMContentLoaded.bind(this), !1), "orientation" in window ? window.addEventListener("orientationchange", this._onOrientationChange.bind(this), !1) : window.addEventListener("resize", this._onResize.bind(this), !1), this._isPortrait = function () {
                    return window.innerHeight > window.innerWidth
                }, this
            }, _onDOMContentLoaded: function () {
                this._installIsPortraitImplementation(), this.emit("change", {isPortrait: this.isPortrait()})
            }, _installIsPortraitImplementation: function () {
                var t = window.innerWidth < window.innerHeight;
                "orientation" in window ? window.orientation % 180 == 0 ? this._isPortrait = function () {
                    return 0 === Math.abs(window.orientation % 180) ? t : !t
                } : this._isPortrait = function () {
                    return 90 === Math.abs(window.orientation % 180) ? t : !t
                } : this._isPortrait = function () {
                    return window.innerHeight > window.innerWidth
                }
            }, _onOrientationChange: function () {
                var t = this, e = this._isPortrait(), n = 0, i = setInterval(function () {
                    n++;
                    var o = window.innerWidth, r = window.innerHeight;
                    e && o <= r || !e && o >= r ? (t.emit("change", {isPortrait: e}), clearInterval(i)) : 50 === n && (t.emit("change", {isPortrait: e}), clearInterval(i))
                }, 20)
            }, _onResize: function () {
                this.emit("change", {isPortrait: this.isPortrait()})
            }
        };
        return Pt.mixin(t), t
    }()._init(), xt = {
        add: function (t) {
            for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
            return n.forEach(function (e) {
                return Q.addModifier(t, e)
            })
        }, remove: function (t) {
            for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
            return n.forEach(function (e) {
                return Q.removeModifier(t, e)
            })
        }, contains: Q.hasModifier, toggle: Q.toggleModifier
    }, Tt = new Pt;
    Tt._visible = !1;
    var Lt = function () {
        Tt._visible = !0, Tt.emit("show")
    }, Mt = function () {
        Tt._visible = !1, Tt.emit("hide")
    }, Dt = function () {
        Q.warn("ons-keyboard: Cordova Keyboard plugin is not present.")
    };
    document.addEventListener("deviceready", function () {
        ("undefined" != typeof Keyboard ? (Keyboard.onshow = Lt, Keyboard.onhide = Mt, Tt.emit("init", {visible: Keyboard.isVisible}), !0) : void 0 !== cordova.plugins && void 0 !== cordova.plugins.Keyboard && (window.addEventListener("native.keyboardshow", Lt), window.addEventListener("native.keyboardhide", Mt), Tt.emit("init", {visible: cordova.plugins.Keyboard.isVisible}), !0)) || ((document.querySelector("[ons-keyboard-active]") || document.querySelector("[ons-keyboard-inactive]")) && Dt(), Tt.on = Dt)
    });
    var It = function () {
        var t = 0;
        return function () {
            return t++
        }
    }(), Nt = function () {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            p(this, t), this._lockList = [], this._waitList = [], this._log = e.log || function () {
            }
        }

        return g(t, [{
            key: "lock", value: function () {
                var t = this, e = function e() {
                    t._unlock(e)
                };
                return e.id = It(), this._lockList.push(e), this._log("lock: " + e.id), e
            }
        }, {
            key: "_unlock", value: function (t) {
                var e = this._lockList.indexOf(t);
                if (-1 === e) throw new Error("This function is not registered in the lock list.");
                this._lockList.splice(e, 1), this._log("unlock: " + t.id), this._tryToFreeWaitList()
            }
        }, {
            key: "_tryToFreeWaitList", value: function () {
                for (; !this.isLocked() && this._waitList.length > 0;) this._waitList.shift()()
            }
        }, {
            key: "waitUnlock", value: function (t) {
                if (!(t instanceof Function)) throw new Error("The callback param must be a function.");
                this.isLocked() ? this._waitList.push(t) : t()
            }
        }, {
            key: "isLocked", value: function () {
                return this._lockList.length > 0
            }
        }]), t
    }(), Bt = function () {
        function t(e, n) {
            p(this, t), this._loader = e instanceof Function ? e : function (t, e) {
                var n = t.page, i = t.parent;
                t.params, P.getPageHTMLAsync(n).then(function (t) {
                    var n = Q.createElement(t);
                    i.appendChild(n), e(n)
                })
            }, this._unloader = n instanceof Function ? n : i
        }

        return g(t, [{
            key: "load", value: function (t, e) {
                var n = t.page, i = t.parent, o = t.params, r = void 0 === o ? {} : o;
                this._loader({page: n, parent: i, params: r}, function (t) {
                    if (!(t instanceof Element)) throw Error("pageElement must be an instance of Element.");
                    e(t)
                })
            }
        }, {
            key: "unload", value: function (t) {
                if (!(t instanceof Element)) throw Error("pageElement must be an instance of Element.");
                this._unloader(t)
            }
        }, {
            key: "internalLoader", set: function (t) {
                if (!(t instanceof Function)) throw Error("First parameter must be an instance of Function");
                this._loader = t
            }, get: function () {
                return this._loader
            }
        }]), t
    }(), jt = new Bt, Ht = new Bt(function (t, e) {
        var n = t.page, i = t.parent, o = (t.params, Q.createElement(n.trim()));
        i.appendChild(o), e(o)
    }, i), Rt = {
        animit: nt,
        defaultPageLoader: jt,
        elements: c,
        GestureDetector: st,
        modifier: xt,
        notification: St,
        orientation: Ot,
        pageAttributeExpression: S,
        PageLoader: Bt,
        platform: C,
        softwareKeyboard: Tt,
        _autoStyle: N,
        _internal: P,
        _readyLock: new Nt,
        _util: Q
    };
    Rt.platform.select((window.location.search.match(/platform=([\w-]+)/) || [])[1]), function () {
        var t = Rt._readyLock.lock();
        window.addEventListener("DOMContentLoaded", function () {
            Rt.isWebView() ? window.document.addEventListener("deviceready", t, !1) : t()
        }, !1)
    }();
    var Ft = function (t) {
        return Q.throw("This method must be called " + (t ? "after" : "before") + " ons.isReady() is true")
    };
    Rt.isReady = function () {
        return !Rt._readyLock.isLocked()
    }, Rt.isWebView = Rt.platform.isWebView, Rt.ready = function (t) {
        Rt.isReady() ? t() : Rt._readyLock.waitUnlock(t)
    }, Rt.setDefaultDeviceBackButtonListener = function (t) {
        Rt.isReady() || Ft(!0), Rt._defaultDeviceBackButtonHandler.setListener(t)
    }, Rt.disableDeviceBackButtonHandler = function () {
        Rt.isReady() || Ft(!0), P.dbbDispatcher.disable()
    }, Rt.enableDeviceBackButtonHandler = function () {
        Rt.isReady() || Ft(!0), P.dbbDispatcher.enable()
    }, Rt.fireDeviceBackButtonEvent = function () {
        P.dbbDispatcher.fireDeviceBackButtonEvent()
    }, Rt.enableAutoStatusBarFill = function () {
        Rt.isReady() && Ft(!1), P.config.autoStatusBarFill = !0
    }, Rt.disableAutoStatusBarFill = function () {
        Rt.isReady() && Ft(!1), P.config.autoStatusBarFill = !1
    }, Rt.mockStatusBar = function () {
        Rt.isReady() && Ft(!1);
        var t = function () {
            if (!document.body.children[0] || !document.body.children[0].classList.contains("ons-status-bar-mock")) {
                var t = C.isAndroid(), e = function (t) {
                        return '<i class="' + t.split("-")[0] + " " + t + '"></i>'
                    }, n = t ? e("zmdi-twitter") + " " + e("zmdi-google-play") : "No SIM " + e("fa-wifi"),
                    i = t ? "" : "12:28 PM",
                    o = t ? e("zmdi-network") + " " + e("zmdi-wifi") + " " + e("zmdi-battery") + " 12:28 PM" : "80% " + e("fa-battery-three-quarters");
                document.body.insertBefore(Q.createElement('<div class="ons-status-bar-mock ' + (t ? "android" : "ios") + '"><div>' + n + "</div><div>" + i + "</div><div>" + o + "</div></div>"), document.body.firstChild)
            }
        };
        document.body ? t() : P.waitDOMContentLoaded(t)
    }, Rt.disableAnimations = function () {
        P.config.animationsDisabled = !0
    }, Rt.enableAnimations = function () {
        P.config.animationsDisabled = !1
    }, Rt._disableWarnings = function () {
        P.config.warningsDisabled = !0
    }, Rt._enableWarnings = function () {
        P.config.warningsDisabled = !1
    }, Rt.disableAutoStyling = N.disable, Rt.enableAutoStyling = N.enable, Rt.disableIconAutoPrefix = function () {
        Q.checkMissingImport("Icon"), c.Icon.setAutoPrefix(!1)
    }, Rt.forceUIWebViewScrollFix = function () {
        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        P.config.forceUIWebViewScrollFix = t
    }, Rt.forcePlatformStyling = function (t) {
        Rt.enableAutoStyling(), Rt.platform.select(t || "ios"), Rt._util.arrayFrom(document.querySelectorAll("*")).forEach(function (t) {
            "ons-if" === t.tagName.toLowerCase() ? t._platformUpdate() : t.tagName.match(/^ons-/i) && (N.prepare(t, !0), "ons-tabbar" === t.tagName.toLowerCase() && t._updatePosition())
        })
    }, Rt.preload = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return Promise.all((t instanceof Array ? t : [t]).map(function (t) {
            return "string" != typeof t && Q.throw("Expected string arguments but got " + (void 0 === t ? "undefined" : f(t))), P.getTemplateHTMLAsync(t)
        }))
    }, Rt.createElement = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = function (t) {
            var n = Rt._util.createElement(t);
            if (n.remove(), e.append) {
                (e.append instanceof HTMLElement ? e.append : document.body).insertBefore(n, e.insertBefore || null), e.link instanceof Function && e.link(n)
            }
            return n
        };
        return "<" === (t = t.trim()).charAt(0) ? n(t) : P.getPageHTMLAsync(t).then(n)
    }, Rt.createPopover = Rt.createDialog = Rt.createAlertDialog = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return Rt.createElement(t, _({append: !0}, e))
    }, Rt.openActionSheet = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new Promise(function (e) {
            Q.checkMissingImport("ActionSheet"), function (t) {
                var e = function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Function";
                    return Q.throw('"options.' + t + '" must be an instance of ' + e)
                }, n = function (e) {
                    return Object.hasOwnProperty.call(t, e)
                }, i = function (e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Function;
                    return t[e] instanceof n
                }, o = "buttons", r = "callback", a = "compile", s = "destroy";
                (!n(o) || !i(o, Array)) && e(o, "Array"), n(r) && !i(r) && e(r), n(a) && !i(a) && e(a), n(s) && !i(s) && e(s)
            }(t);
            var n = Q.createElement("\n    <ons-action-sheet\n      " + (t.title ? 'title="' + t.title + '"' : "") + "\n      " + (t.cancelable ? "cancelable" : "") + "\n      " + (t.modifier ? 'modifier="' + t.modifier + '"' : "") + "\n      " + (t.maskColor ? 'mask-color="' + t.maskColor + '"' : "") + "\n      " + (t.id ? 'id="' + t.id + '"' : "") + "\n      " + (t.class ? 'class="' + t.class + '"' : "") + '\n    >\n      <div class="action-sheet"></div>\n    </ons-action-sheet>\n  '),
                i = function i(o) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                    n && (t.destroy && t.destroy(n), n.removeEventListener("dialog-cancel", i, !1), n.remove(), n = null, t.callback && t.callback(r), e(r))
                };
            n.addEventListener("dialog-cancel", i, !1);
            var o = document.createDocumentFragment();
            t.buttons.forEach(function (e, r) {
                var a = "string" == typeof e ? {label: e} : _({}, e);
                t.destructive === r && (a.modifier = (a.modifier || "") + " destructive");
                var s = Q.createElement("\n      <ons-action-sheet-button\n        " + (a.icon ? 'icon="' + a.icon + '"' : "") + "\n        " + (a.modifier ? 'modifier="' + a.modifier + '"' : "") + "\n      >\n        " + a.label + "\n      </ons-action-sheet-button>\n    ");
                s.onclick = function (t) {
                    return n.hide().then(function () {
                        return i(t, r)
                    })
                }, o.appendChild(s)
            }), Q.findChild(n, ".action-sheet").appendChild(o), document.body.appendChild(n), t.compile && t.compile(el.dialog), setImmediate(function () {
                return n.show({animation: t.animation, animationOptions: t.animationOptions})
            })
        })
    }, Rt.resolveLoadingPlaceholder = function (t, e) {
        var n = Rt._util.arrayFrom(window.document.querySelectorAll("[ons-loading-placeholder]"));
        0 === n.length && Q.throw("No ons-loading-placeholder exists"), n.filter(function (t) {
            return !t.getAttribute("page")
        }).forEach(function (n) {
            n.setAttribute("ons-loading-placeholder", t), Rt._resolveLoadingPlaceholder(n, t, e)
        })
    }, Rt._setupLoadingPlaceHolders = function () {
        Rt.ready(function () {
            Rt._util.arrayFrom(window.document.querySelectorAll("[ons-loading-placeholder]")).forEach(function (t) {
                var e = t.getAttribute("ons-loading-placeholder");
                "string" == typeof e && Rt._resolveLoadingPlaceholder(t, e)
            })
        })
    }, Rt._resolveLoadingPlaceholder = function (t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function (t, e) {
            return e()
        };
        e && Rt.createElement(e).then(function (e) {
            e.style.display = "none", t.appendChild(e), n(e, function () {
                for (; t.firstChild && t.firstChild !== e;) t.removeChild(t.firstChild);
                e.style.display = ""
            })
        }).catch(function (t) {
            return Promise.reject("Unabled to resolve placeholder: " + t)
        })
    };
    var qt = "currentScript" in document ? function () {
        return document.currentScript
    } : function () {
        return document.scripts[document.scripts.length - 1]
    };
    Rt.getScriptPage = function () {
        return qt() && /ons-page/i.test(qt().parentElement.tagName) && qt().parentElement || null
    };
    var zt = o(function (t) {
        !function () {
            function e(t, n) {
                var o;
                if (n = n || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = n.touchBoundary || 10, this.layer = t, this.tapDelay = n.tapDelay || 200, this.tapTimeout = n.tapTimeout || 700, !e.notNeeded(t)) {
                    for (var r = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = 0, s = r.length; a < s; a++) this[r[a]] = function (t, e) {
                        return function () {
                            return t.apply(e, arguments)
                        }
                    }(this[r[a]], this);
                    i && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function (e, n, i) {
                        var o = Node.prototype.removeEventListener;
                        "click" === e ? o.call(t, e, n.hijacked || n, i) : o.call(t, e, n, i)
                    }, t.addEventListener = function (e, n, i) {
                        var o = Node.prototype.addEventListener;
                        "click" === e ? o.call(t, e, n.hijacked || (n.hijacked = function (t) {
                            t.propagationStopped || n(t)
                        }), i) : o.call(t, e, n, i)
                    }), "function" == typeof t.onclick && (o = t.onclick, t.addEventListener("click", function (t) {
                        o(t)
                    }, !1), t.onclick = null)
                }
            }

            var n = navigator.userAgent.indexOf("Windows Phone") >= 0,
                i = navigator.userAgent.indexOf("Android") > 0 && !n,
                o = /iP(ad|hone|od)/.test(navigator.userAgent) && !n,
                r = o && /OS 4_\d(_\d)?/.test(navigator.userAgent), a = o && /OS [6-7]_\d/.test(navigator.userAgent),
                s = navigator.userAgent.indexOf("BB10") > 0,
                l = ["email", "number", "password", "search", "tel", "text", "url"];
            e.prototype.needsClick = function (t) {
                switch (t.nodeName.toLowerCase()) {
                    case"button":
                    case"select":
                    case"textarea":
                        if (t.disabled) return !0;
                        break;
                    case"input":
                        if (o && "file" === t.type || t.disabled) return !0;
                        break;
                    case"label":
                    case"iframe":
                    case"video":
                        return !0
                }
                return /\bneedsclick\b/.test(t.className)
            }, e.prototype.needsFocus = function (t) {
                switch (t.nodeName.toLowerCase()) {
                    case"textarea":
                        return !0;
                    case"select":
                        return !i;
                    case"input":
                        switch (t.type) {
                            case"button":
                            case"checkbox":
                            case"file":
                            case"image":
                            case"radio":
                            case"submit":
                                return !1
                        }
                        return !t.disabled && !t.readOnly;
                    default:
                        return /\bneedsfocus\b/.test(t.className)
                }
            }, e.prototype.sendClick = function (t, e) {
                var n, i;
                document.activeElement && document.activeElement !== t && document.activeElement.blur(), i = e.changedTouches[0], (n = document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(t), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, t.dispatchEvent(n)
            }, e.prototype.determineEventType = function (t) {
                return i && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
            }, e.prototype.focus = function (t) {
                var e;
                o && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type && "email" !== t.type && "number" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
            }, e.prototype.updateScrollParent = function (t) {
                var e, n;
                if (!(e = t.fastClickScrollParent) || !e.contains(t)) {
                    n = t;
                    do {
                        if (n.scrollHeight > n.offsetHeight) {
                            e = n, t.fastClickScrollParent = n;
                            break
                        }
                        n = n.parentElement
                    } while (n)
                }
                e && (e.fastClickLastScrollTop = e.scrollTop)
            }, e.prototype.getTargetElementFromEventTarget = function (t) {
                return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
            }, e.prototype.isTextField = function (t) {
                return "textarea" === t.tagName.toLowerCase() || -1 !== l.indexOf(t.type)
            }, e.prototype.onTouchStart = function (t) {
                var e, n;
                if (t.targetTouches.length > 1) return !0;
                if (e = this.getTargetElementFromEventTarget(t.target), n = t.targetTouches[0], e.isContentEditable) return !0;
                if (o) {
                    if (e === document.activeElement && this.isTextField(e)) return !0;
                    if (!r) {
                        if (n.identifier && n.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
                        this.lastTouchIdentifier = n.identifier, this.updateScrollParent(e)
                    }
                }
                return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = n.pageX, this.touchStartY = n.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.timeStamp - this.lastClickTime > -1 && t.preventDefault(), !0
            }, e.prototype.touchHasMoved = function (t) {
                var e = t.changedTouches[0], n = this.touchBoundary;
                return Math.abs(e.pageX - this.touchStartX) > n || Math.abs(e.pageY - this.touchStartY) > n
            }, e.prototype.onTouchMove = function (t) {
                return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0)
            }, e.prototype.findControl = function (t) {
                return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
            }, e.prototype.onTouchEnd = function (t) {
                var e, n, s, l, u, c = this.targetElement;
                if (!this.trackingClick) return !0;
                if (t.timeStamp - this.lastClickTime < this.tapDelay && t.timeStamp - this.lastClickTime > -1) return this.cancelNextClick = !0, !0;
                if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
                if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, a && (u = t.changedTouches[0], (c = document.elementFromPoint(u.pageX - window.pageXOffset, u.pageY - window.pageYOffset) || c).fastClickScrollParent = this.targetElement.fastClickScrollParent), "label" === (s = c.tagName.toLowerCase())) {
                    if (e = this.findControl(c)) {
                        if (this.focus(c), i) return !1;
                        c = e
                    }
                } else if (this.needsFocus(c)) return t.timeStamp - n > 100 || o && window.top !== window && "input" === s ? (this.targetElement = null, !1) : (this.focus(c), this.sendClick(c, t), r && "select" === s || (this.targetElement = null, t.preventDefault()), !1);
                return !(!o || r || !(l = c.fastClickScrollParent) || l.fastClickLastScrollTop === l.scrollTop) || (this.needsClick(c) || (t.preventDefault(), this.sendClick(c, t)), !1)
            }, e.prototype.onTouchCancel = function () {
                this.trackingClick = !1, this.targetElement = null
            }, e.prototype.onMouse = function (t) {
                return !this.targetElement || (!!t.forwardedTouchEvent || (!t.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1))))
            }, e.prototype.onClick = function (t) {
                var e;
                return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail || ((e = this.onMouse(t)) || (this.targetElement = null), e)
            }, e.prototype.destroy = function () {
                var t = this.layer;
                i && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
            }, e.notNeeded = function (t) {
                var e, n, o;
                if (void 0 === window.ontouchstart) return !0;
                if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                    if (!i) return !0;
                    if (e = document.querySelector("meta[name=viewport]")) {
                        if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
                        if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
                    }
                }
                if (s && (o = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1] >= 10 && o[2] >= 3 && (e = document.querySelector("meta[name=viewport]"))) {
                    if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
                    if (document.documentElement.scrollWidth <= window.outerWidth) return !0
                }
                return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction || (!!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] >= 27 && (e = document.querySelector("meta[name=viewport]")) && (-1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) || "none" === t.style.touchAction || "manipulation" === t.style.touchAction)
            }, e.attach = function (t, n) {
                return new e(t, n)
            }, t.exports ? (t.exports = e.attach, t.exports.FastClick = e) : window.FastClick = e
        }()
    }).FastClick;
    window.customElements && (window.customElements.forcePolyfill = !0);
    var Vt = o(function (t) {
        var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = e)
    }), Wt = o(function (t) {
        var e = t.exports = {version: "2.5.1"};
        "number" == typeof __e && (__e = e)
    }), Ut = (Wt.version, function (t) {
        return "object" === (void 0 === t ? "undefined" : f(t)) ? null !== t : "function" == typeof t
    }), Xt = function (t) {
        if (!Ut(t)) throw TypeError(t + " is not an object!");
        return t
    }, Yt = function (t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }, Gt = !Yt(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    }), $t = Vt.document, Kt = Ut($t) && Ut($t.createElement), Qt = function (t) {
        return Kt ? $t.createElement(t) : {}
    }, Jt = !Gt && !Yt(function () {
        return 7 != Object.defineProperty(Qt("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    }), Zt = function (t, e) {
        if (!Ut(t)) return t;
        var n, i;
        if (e && "function" == typeof (n = t.toString) && !Ut(i = n.call(t))) return i;
        if ("function" == typeof (n = t.valueOf) && !Ut(i = n.call(t))) return i;
        if (!e && "function" == typeof (n = t.toString) && !Ut(i = n.call(t))) return i;
        throw TypeError("Can't convert object to primitive value")
    }, te = Object.defineProperty, ee = {
        f: Gt ? Object.defineProperty : function (t, e, n) {
            if (Xt(t), e = Zt(e, !0), Xt(n), Jt) try {
                return te(t, e, n)
            } catch (t) {
            }
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t
        }
    }, ne = function (t, e) {
        return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
    }, ie = Gt ? function (t, e, n) {
        return ee.f(t, e, ne(1, n))
    } : function (t, e, n) {
        return t[e] = n, t
    }, oe = {}.hasOwnProperty, re = function (t, e) {
        return oe.call(t, e)
    }, ae = 0, se = Math.random(), le = function (t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++ae + se).toString(36))
    }, ue = o(function (t) {
        var e = le("src"), n = Function.toString, i = ("" + n).split("toString");
        Wt.inspectSource = function (t) {
            return n.call(t)
        }, (t.exports = function (t, n, o, r) {
            var a = "function" == typeof o;
            a && (re(o, "name") || ie(o, "name", n)), t[n] !== o && (a && (re(o, e) || ie(o, e, t[n] ? "" + t[n] : i.join(String(n)))), t === Vt ? t[n] = o : r ? t[n] ? t[n] = o : ie(t, n, o) : (delete t[n], ie(t, n, o)))
        })(Function.prototype, "toString", function () {
            return "function" == typeof this && this[e] || n.call(this)
        })
    }), ce = function (t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }, he = function (t, e, n) {
        if (ce(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function (n) {
                    return t.call(e, n)
                };
            case 2:
                return function (n, i) {
                    return t.call(e, n, i)
                };
            case 3:
                return function (n, i, o) {
                    return t.call(e, n, i, o)
                }
        }
        return function () {
            return t.apply(e, arguments)
        }
    }, de = function t(e, n, i) {
        var o, r, a, s, l = e & t.F, u = e & t.G, c = e & t.P, h = e & t.B,
            d = u ? Vt : e & t.S ? Vt[n] || (Vt[n] = {}) : (Vt[n] || {}).prototype, f = u ? Wt : Wt[n] || (Wt[n] = {}),
            p = f.prototype || (f.prototype = {});
        u && (i = n);
        for (o in i) a = ((r = !l && d && void 0 !== d[o]) ? d : i)[o], s = h && r ? he(a, Vt) : c && "function" == typeof a ? he(Function.call, a) : a, d && ue(d, o, a, e & t.U), f[o] != a && ie(f, o, s), c && p[o] != a && (p[o] = a)
    };
    Vt.core = Wt, de.F = 1, de.G = 2, de.S = 4, de.P = 8, de.B = 16, de.W = 32, de.U = 64, de.R = 128;
    var fe = de, pe = {f: {}.propertyIsEnumerable}, ge = {}.toString, me = function (t) {
        return ge.call(t).slice(8, -1)
    }, _e = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
        return "String" == me(t) ? t.split("") : Object(t)
    }, ve = function (t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t
    }, be = function (t) {
        return _e(ve(t))
    }, ye = Object.getOwnPropertyDescriptor, ke = {
        f: Gt ? ye : function (t, e) {
            if (t = be(t), e = Zt(e, !0), Jt) try {
                return ye(t, e)
            } catch (t) {
            }
            if (re(t, e)) return ne(!pe.f.call(t, e), t[e])
        }
    }, we = function (t, e) {
        if (Xt(t), !Ut(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
    }, Ee = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, n) {
            try {
                (n = he(Function.call, ke.f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
            } catch (t) {
                e = !0
            }
            return function (t, i) {
                return we(t, i), e ? t.__proto__ = i : n(t, i), t
            }
        }({}, !1) : void 0), check: we
    };
    fe(fe.S, "Object", {setPrototypeOf: Ee.set});
    Wt.Object.setPrototypeOf;
    var Ce = Vt["__core-js_shared__"] || (Vt["__core-js_shared__"] = {}), Ae = function (t) {
        return Ce[t] || (Ce[t] = {})
    }, Se = o(function (t) {
        var e = Ae("wks"), n = Vt.Symbol, i = "function" == typeof n;
        (t.exports = function (t) {
            return e[t] || (e[t] = i && n[t] || (i ? n : le)("Symbol." + t))
        }).store = e
    }), Pe = Se("toStringTag"), Oe = "Arguments" == me(function () {
        return arguments
    }()), xe = function (t) {
        var e, n, i;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
            try {
                return t[e]
            } catch (t) {
            }
        }(e = Object(t), Pe)) ? n : Oe ? me(e) : "Object" == (i = me(e)) && "function" == typeof e.callee ? "Arguments" : i
    }, Te = {};
    Te[Se("toStringTag")] = "z", Te + "" != "[object z]" && ue(Object.prototype, "toString", function () {
        return "[object " + xe(this) + "]"
    }, !0);
    var Le = Math.ceil, Me = Math.floor, De = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? Me : Le)(t)
        }, Ie = {}, Ne = Math.min, Be = function (t) {
            return t > 0 ? Ne(De(t), 9007199254740991) : 0
        }, je = Math.max, He = Math.min, Re = Ae("keys"), Fe = function (t) {
            return Re[t] || (Re[t] = le(t))
        }, qe = function (t) {
            return function (e, n, i) {
                var o, r = be(e), a = Be(r.length), s = function (t, e) {
                    return (t = De(t)) < 0 ? je(t + e, 0) : He(t, e)
                }(i, a);
                if (t && n != n) {
                    for (; a > s;) if ((o = r[s++]) != o) return !0
                } else for (; a > s; s++) if ((t || s in r) && r[s] === n) return t || s || 0;
                return !t && -1
            }
        }(!1), ze = Fe("IE_PROTO"),
        Ve = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
        We = Object.keys || function (t) {
            return function (t, e) {
                var n, i = be(t), o = 0, r = [];
                for (n in i) n != ze && re(i, n) && r.push(n);
                for (; e.length > o;) re(i, n = e[o++]) && (~qe(r, n) || r.push(n));
                return r
            }(t, Ve)
        }, Ue = Gt ? Object.defineProperties : function (t, e) {
            Xt(t);
            for (var n, i = We(e), o = i.length, r = 0; o > r;) ee.f(t, n = i[r++], e[n]);
            return t
        }, Xe = Vt.document, Ye = Xe && Xe.documentElement, Ge = Fe("IE_PROTO"), $e = function () {
        }, Ke = function () {
            var t, e = Qt("iframe"), n = Ve.length;
            for (e.style.display = "none", Ye.appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), Ke = t.F; n--;) delete Ke.prototype[Ve[n]];
            return Ke()
        }, Qe = Object.create || function (t, e) {
            var n;
            return null !== t ? ($e.prototype = Xt(t), n = new $e, $e.prototype = null, n[Ge] = t) : n = Ke(), void 0 === e ? n : Ue(n, e)
        }, Je = ee.f, Ze = Se("toStringTag"), tn = function (t, e, n) {
            t && !re(t = n ? t : t.prototype, Ze) && Je(t, Ze, {configurable: !0, value: e})
        }, en = {};
    ie(en, Se("iterator"), function () {
        return this
    });
    var nn = function (t, e, n) {
        t.prototype = Qe(en, {next: ne(1, n)}), tn(t, e + " Iterator")
    }, on = function (t) {
        return Object(ve(t))
    }, rn = Fe("IE_PROTO"), an = Object.prototype, sn = Object.getPrototypeOf || function (t) {
        return t = on(t), re(t, rn) ? t[rn] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? an : null
    }, ln = Se("iterator"), un = !([].keys && "next" in [].keys()), cn = function () {
        return this
    }, hn = function (t, e, n, i, o, r, a) {
        nn(n, e, i);
        var s, l, u, c = function (t) {
                if (!un && t in p) return p[t];
                switch (t) {
                    case"keys":
                    case"values":
                        return function () {
                            return new n(this, t)
                        }
                }
                return function () {
                    return new n(this, t)
                }
            }, h = e + " Iterator", d = "values" == o, f = !1, p = t.prototype, g = p[ln] || p["@@iterator"] || o && p[o],
            m = g || c(o), _ = o ? d ? c("entries") : m : void 0, v = "Array" == e ? p.entries || g : g;
        if (v && (u = sn(v.call(new t))) !== Object.prototype && u.next && (tn(u, h, !0), re(u, ln) || ie(u, ln, cn)), d && g && "values" !== g.name && (f = !0, m = function () {
            return g.call(this)
        }), (un || f || !p[ln]) && ie(p, ln, m), Ie[e] = m, Ie[h] = cn, o) if (s = {
            values: d ? m : c("values"),
            keys: r ? m : c("keys"),
            entries: _
        }, a) for (l in s) l in p || ue(p, l, s[l]); else fe(fe.P + fe.F * (un || f), e, s);
        return s
    }, dn = function (t) {
        return function (e, n) {
            var i, o, r = String(ve(e)), a = De(n), s = r.length;
            return a < 0 || a >= s ? t ? "" : void 0 : (i = r.charCodeAt(a)) < 55296 || i > 56319 || a + 1 === s || (o = r.charCodeAt(a + 1)) < 56320 || o > 57343 ? t ? r.charAt(a) : i : t ? r.slice(a, a + 2) : o - 56320 + (i - 55296 << 10) + 65536
        }
    }(!0);
    hn(String, "String", function (t) {
        this._t = String(t), this._i = 0
    }, function () {
        var t, e = this._t, n = this._i;
        return n >= e.length ? {value: void 0, done: !0} : (t = dn(e, n), this._i += t.length, {value: t, done: !1})
    });
    var fn = Se("unscopables"), pn = Array.prototype;
    void 0 == pn[fn] && ie(pn, fn, {});
    var gn = function (t) {
        pn[fn][t] = !0
    }, mn = function (t, e) {
        return {value: e, done: !!t}
    }, _n = hn(Array, "Array", function (t, e) {
        this._t = be(t), this._i = 0, this._k = e
    }, function () {
        var t = this._t, e = this._k, n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, mn(1)) : "keys" == e ? mn(0, n) : "values" == e ? mn(0, t[n]) : mn(0, [n, t[n]])
    }, "values");
    Ie.Arguments = Ie.Array, gn("keys"), gn("values"), gn("entries");
    for (var vn = Se("iterator"), bn = Se("toStringTag"), yn = Ie.Array, kn = {
        CSSRuleList: !0,
        CSSStyleDeclaration: !1,
        CSSValueList: !1,
        ClientRectList: !1,
        DOMRectList: !1,
        DOMStringList: !1,
        DOMTokenList: !0,
        DataTransferItemList: !1,
        FileList: !1,
        HTMLAllCollection: !1,
        HTMLCollection: !1,
        HTMLFormElement: !1,
        HTMLSelectElement: !1,
        MediaList: !0,
        MimeTypeArray: !1,
        NamedNodeMap: !1,
        NodeList: !0,
        PaintRequestList: !1,
        Plugin: !1,
        PluginArray: !1,
        SVGLengthList: !1,
        SVGNumberList: !1,
        SVGPathSegList: !1,
        SVGPointList: !1,
        SVGStringList: !1,
        SVGTransformList: !1,
        SourceBufferList: !1,
        StyleSheetList: !0,
        TextTrackCueList: !1,
        TextTrackList: !1,
        TouchList: !1
    }, wn = We(kn), En = 0; En < wn.length; En++) {
        var Cn, An = wn[En], Sn = kn[An], Pn = Vt[An], On = Pn && Pn.prototype;
        if (On && (On[vn] || ie(On, vn, yn), On[bn] || ie(On, bn, An), Ie[An] = yn, Sn)) for (Cn in _n) On[Cn] || ue(On, Cn, _n[Cn], !0)
    }
    var xn = function (t, e, n) {
        for (var i in e) ue(t, i, e[i], n);
        return t
    }, Tn = function (t, e, n, i) {
        if (!(t instanceof e) || void 0 !== i && i in t) throw TypeError(n + ": incorrect invocation!");
        return t
    }, Ln = function (t, e, n, i) {
        try {
            return i ? e(Xt(n)[0], n[1]) : e(n)
        } catch (e) {
            var o = t.return;
            throw void 0 !== o && Xt(o.call(t)), e
        }
    }, Mn = Se("iterator"), Dn = Array.prototype, In = function (t) {
        return void 0 !== t && (Ie.Array === t || Dn[Mn] === t)
    }, Nn = Se("iterator"), Bn = Wt.getIteratorMethod = function (t) {
        if (void 0 != t) return t[Nn] || t["@@iterator"] || Ie[xe(t)]
    }, jn = o(function (t) {
        var e = {}, n = {}, i = t.exports = function (t, i, o, r, a) {
            var s, l, u, c, h = a ? function () {
                return t
            } : Bn(t), d = he(o, r, i ? 2 : 1), f = 0;
            if ("function" != typeof h) throw TypeError(t + " is not iterable!");
            if (In(h)) {
                for (s = Be(t.length); s > f; f++) if ((c = i ? d(Xt(l = t[f])[0], l[1]) : d(t[f])) === e || c === n) return c
            } else for (u = h.call(t); !(l = u.next()).done;) if ((c = Ln(u, d, l.value, i)) === e || c === n) return c
        };
        i.BREAK = e, i.RETURN = n
    }), Hn = Se("species"), Rn = o(function (t) {
        var e = le("meta"), n = ee.f, i = 0, o = Object.isExtensible || function () {
            return !0
        }, r = !Yt(function () {
            return o(Object.preventExtensions({}))
        }), a = function (t) {
            n(t, e, {value: {i: "O" + ++i, w: {}}})
        }, s = t.exports = {
            KEY: e, NEED: !1, fastKey: function (t, n) {
                if (!Ut(t)) return "symbol" == (void 0 === t ? "undefined" : f(t)) ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!re(t, e)) {
                    if (!o(t)) return "F";
                    if (!n) return "E";
                    a(t)
                }
                return t[e].i
            }, getWeak: function (t, n) {
                if (!re(t, e)) {
                    if (!o(t)) return !0;
                    if (!n) return !1;
                    a(t)
                }
                return t[e].w
            }, onFreeze: function (t) {
                return r && s.NEED && o(t) && !re(t, e) && a(t), t
            }
        }
    }), Fn = (Rn.KEY, Rn.NEED, Rn.fastKey, Rn.getWeak, Rn.onFreeze, function (t, e) {
        if (!Ut(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
        return t
    }), qn = ee.f, zn = Rn.fastKey, Vn = Gt ? "_s" : "size", Wn = function (t, e) {
        var n, i = zn(e);
        if ("F" !== i) return t._i[i];
        for (n = t._f; n; n = n.n) if (n.k == e) return n
    }, Un = {
        getConstructor: function (t, e, n, i) {
            var o = t(function (t, r) {
                Tn(t, o, e, "_i"), t._t = e, t._i = Qe(null), t._f = void 0, t._l = void 0, t[Vn] = 0, void 0 != r && jn(r, n, t[i], t)
            });
            return xn(o.prototype, {
                clear: function () {
                    for (var t = Fn(this, e), n = t._i, i = t._f; i; i = i.n) i.r = !0, i.p && (i.p = i.p.n = void 0), delete n[i.i];
                    t._f = t._l = void 0, t[Vn] = 0
                }, delete: function (t) {
                    var n = Fn(this, e), i = Wn(n, t);
                    if (i) {
                        var o = i.n, r = i.p;
                        delete n._i[i.i], i.r = !0, r && (r.n = o), o && (o.p = r), n._f == i && (n._f = o), n._l == i && (n._l = r), n[Vn]--
                    }
                    return !!i
                }, forEach: function (t) {
                    Fn(this, e);
                    for (var n, i = he(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;) for (i(n.v, n.k, this); n && n.r;) n = n.p
                }, has: function (t) {
                    return !!Wn(Fn(this, e), t)
                }
            }), Gt && qn(o.prototype, "size", {
                get: function () {
                    return Fn(this, e)[Vn]
                }
            }), o
        }, def: function (t, e, n) {
            var i, o, r = Wn(t, e);
            return r ? r.v = n : (t._l = r = {
                i: o = zn(e, !0),
                k: e,
                v: n,
                p: i = t._l,
                n: void 0,
                r: !1
            }, t._f || (t._f = r), i && (i.n = r), t[Vn]++, "F" !== o && (t._i[o] = r)), t
        }, getEntry: Wn, setStrong: function (t, e, n) {
            hn(t, e, function (t, n) {
                this._t = Fn(t, e), this._k = n, this._l = void 0
            }, function () {
                for (var t = this._k, e = this._l; e && e.r;) e = e.p;
                return this._t && (this._l = e = e ? e.n : this._t._f) ? "keys" == t ? mn(0, e.k) : "values" == t ? mn(0, e.v) : mn(0, [e.k, e.v]) : (this._t = void 0, mn(1))
            }, n ? "entries" : "values", !n, !0), function (t) {
                var e = Vt[t];
                Gt && e && !e[Hn] && ee.f(e, Hn, {
                    configurable: !0, get: function () {
                        return this
                    }
                })
            }(e)
        }
    }, Xn = Se("iterator"), Yn = !1;
    try {
        [7][Xn]().return = function () {
            Yn = !0
        }
    } catch (t) {
    }
    var Gn = function (t, e) {
        if (!e && !Yn) return !1;
        var n = !1;
        try {
            var i = [7], o = i[Xn]();
            o.next = function () {
                return {done: n = !0}
            }, i[Xn] = function () {
                return o
            }, t(i)
        } catch (t) {
        }
        return n
    }, $n = Ee.set, Kn = function (t, e, n, i, o, r) {
        var a = Vt[t], s = a, l = o ? "set" : "add", u = s && s.prototype, c = {}, h = function (t) {
            var e = u[t];
            ue(u, t, "delete" == t ? function (t) {
                return !(r && !Ut(t)) && e.call(this, 0 === t ? 0 : t)
            } : "has" == t ? function (t) {
                return !(r && !Ut(t)) && e.call(this, 0 === t ? 0 : t)
            } : "get" == t ? function (t) {
                return r && !Ut(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
            } : "add" == t ? function (t) {
                return e.call(this, 0 === t ? 0 : t), this
            } : function (t, n) {
                return e.call(this, 0 === t ? 0 : t, n), this
            })
        };
        if ("function" == typeof s && (r || u.forEach && !Yt(function () {
            (new s).entries().next()
        }))) {
            var d = new s, f = d[l](r ? {} : -0, 1) != d, p = Yt(function () {
                d.has(1)
            }), g = Gn(function (t) {
                new s(t)
            }), m = !r && Yt(function () {
                for (var t = new s, e = 5; e--;) t[l](e, e);
                return !t.has(-0)
            });
            g || ((s = e(function (e, n) {
                Tn(e, s, t);
                var i = function (t, e, n) {
                    var i, o = e.constructor;
                    return o !== n && "function" == typeof o && (i = o.prototype) !== n.prototype && Ut(i) && $n && $n(t, i), t
                }(new a, e, s);
                return void 0 != n && jn(n, o, i[l], i), i
            })).prototype = u, u.constructor = s), (p || m) && (h("delete"), h("has"), o && h("get")), (m || f) && h(l), r && u.clear && delete u.clear
        } else s = i.getConstructor(e, t, o, l), xn(s.prototype, n), Rn.NEED = !0;
        return tn(s, t), c[t] = s, fe(fe.G + fe.W + fe.F * (s != a), c), r || i.setStrong(s, t, o), s
    }, Qn = (Kn("Set", function (t) {
        return function () {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        add: function (t) {
            return Un.def(Fn(this, "Set"), t = 0 === t ? 0 : t, t)
        }
    }, Un), function (t) {
        return function () {
            if (xe(this) != t) throw TypeError(t + "#toJSON isn't generic");
            return function (t, e) {
                var n = [];
                return jn(t, !1, n.push, n, e), n
            }(this)
        }
    });
    fe(fe.P + fe.R, "Set", {toJSON: Qn("Set")});
    var Jn = function (t) {
        fe(fe.S, t, {
            of: function () {
                for (var t = arguments.length, e = Array(t); t--;) e[t] = arguments[t];
                return new this(e)
            }
        })
    };
    Jn("Set");
    var Zn = function (t) {
        fe(fe.S, t, {
            from: function (t) {
                var e, n, i, o, r = arguments[1];
                return ce(this), (e = void 0 !== r) && ce(r), void 0 == t ? new this : (n = [], e ? (i = 0, o = he(r, arguments[2], 2), jn(t, !1, function (t) {
                    n.push(o(t, i++))
                })) : jn(t, !1, n.push, n), new this(n))
            }
        })
    };
    Zn("Set");
    Wt.Set, Kn("Map", function (t) {
        return function () {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        get: function (t) {
            var e = Un.getEntry(Fn(this, "Map"), t);
            return e && e.v
        }, set: function (t, e) {
            return Un.def(Fn(this, "Map"), 0 === t ? 0 : t, e)
        }
    }, Un, !0);
    fe(fe.P + fe.R, "Map", {toJSON: Qn("Map")}), Jn("Map"), Zn("Map");
    Wt.Map;
    var ti = Array.isArray || function (t) {
        return "Array" == me(t)
    }, ei = Se("species"), ni = function (t, e) {
        var n = 1 == t, i = 2 == t, o = 3 == t, r = 4 == t, a = 6 == t, s = 5 == t || a, l = e || function (t, e) {
            return new (function (t) {
                var e;
                return ti(t) && ("function" != typeof (e = t.constructor) || e !== Array && !ti(e.prototype) || (e = void 0), Ut(e) && null === (e = e[ei]) && (e = void 0)), void 0 === e ? Array : e
            }(t))(e)
        };
        return function (e, u, c) {
            for (var h, d, f = on(e), p = _e(f), g = he(u, c, 3), m = Be(p.length), _ = 0, v = n ? l(e, m) : i ? l(e, 0) : void 0; m > _; _++) if ((s || _ in p) && (h = p[_], d = g(h, _, f), t)) if (n) v[_] = d; else if (d) switch (t) {
                case 3:
                    return !0;
                case 5:
                    return h;
                case 6:
                    return _;
                case 2:
                    v.push(h)
            } else if (r) return !1;
            return a ? -1 : o || r ? r : v
        }
    }, ii = {f: Object.getOwnPropertySymbols}, oi = Object.assign, ri = !oi || Yt(function () {
        var t = {}, e = {}, n = Symbol(), i = "abcdefghijklmnopqrst";
        return t[n] = 7, i.split("").forEach(function (t) {
            e[t] = t
        }), 7 != oi({}, t)[n] || Object.keys(oi({}, e)).join("") != i
    }) ? function (t, e) {
        for (var n = on(t), i = arguments.length, o = 1, r = ii.f, a = pe.f; i > o;) for (var s, l = _e(arguments[o++]), u = r ? We(l).concat(r(l)) : We(l), c = u.length, h = 0; c > h;) a.call(l, s = u[h++]) && (n[s] = l[s]);
        return n
    } : oi, ai = Rn.getWeak, si = ni(5), li = ni(6), ui = 0, ci = function (t) {
        return t._l || (t._l = new hi)
    }, hi = function () {
        this.a = []
    }, di = function (t, e) {
        return si(t.a, function (t) {
            return t[0] === e
        })
    };
    hi.prototype = {
        get: function (t) {
            var e = di(this, t);
            if (e) return e[1]
        }, has: function (t) {
            return !!di(this, t)
        }, set: function (t, e) {
            var n = di(this, t);
            n ? n[1] = e : this.a.push([t, e])
        }, delete: function (t) {
            var e = li(this.a, function (e) {
                return e[0] === t
            });
            return ~e && this.a.splice(e, 1), !!~e
        }
    };
    var fi = {
        getConstructor: function (t, e, n, i) {
            var o = t(function (t, r) {
                Tn(t, o, e, "_i"), t._t = e, t._i = ui++, t._l = void 0, void 0 != r && jn(r, n, t[i], t)
            });
            return xn(o.prototype, {
                delete: function (t) {
                    if (!Ut(t)) return !1;
                    var n = ai(t);
                    return !0 === n ? ci(Fn(this, e)).delete(t) : n && re(n, this._i) && delete n[this._i]
                }, has: function (t) {
                    if (!Ut(t)) return !1;
                    var n = ai(t);
                    return !0 === n ? ci(Fn(this, e)).has(t) : n && re(n, this._i)
                }
            }), o
        }, def: function (t, e, n) {
            var i = ai(Xt(e), !0);
            return !0 === i ? ci(t).set(e, n) : i[t._i] = n, t
        }, ufstore: ci
    };
    o(function (t) {
        var e, n = ni(0), i = Rn.getWeak, o = Object.isExtensible, r = fi.ufstore, a = {}, s = function (t) {
            return function () {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, l = {
            get: function (t) {
                if (Ut(t)) {
                    var e = i(t);
                    return !0 === e ? r(Fn(this, "WeakMap")).get(t) : e ? e[this._i] : void 0
                }
            }, set: function (t, e) {
                return fi.def(Fn(this, "WeakMap"), t, e)
            }
        }, u = t.exports = Kn("WeakMap", s, l, fi, !0, !0);
        Yt(function () {
            return 7 != (new u).set((Object.freeze || Object)(a), 7).get(a)
        }) && (e = fi.getConstructor(s, "WeakMap"), ri(e.prototype, l), Rn.NEED = !0, n(["delete", "has", "get", "set"], function (t) {
            var n = u.prototype, i = n[t];
            ue(n, t, function (n, r) {
                if (Ut(n) && !o(n)) {
                    this._f || (this._f = new e);
                    var a = this._f[t](n, r);
                    return "set" == t ? this : a
                }
                return i.call(this, n, r)
            })
        }))
    });
    Jn("WeakMap"), Zn("WeakMap");
    Wt.WeakMap;
    var pi = function (t, e, n) {
        e in t ? ee.f(t, e, ne(0, n)) : t[e] = n
    };
    fe(fe.S + fe.F * !Gn(function (t) {
    }), "Array", {
        from: function (t) {
            var e, n, i, o, r = on(t), a = "function" == typeof this ? this : Array, s = arguments.length,
                l = s > 1 ? arguments[1] : void 0, u = void 0 !== l, c = 0, h = Bn(r);
            if (u && (l = he(l, s > 2 ? arguments[2] : void 0, 2)), void 0 == h || a == Array && In(h)) for (n = new a(e = Be(r.length)); e > c; c++) pi(n, c, u ? l(r[c], c) : r[c]); else for (o = h.call(r), n = new a; !(i = o.next()).done; c++) pi(n, c, u ? Ln(o, l, [i.value, c], !0) : i.value);
            return n.length = c, n
        }
    });
    Wt.Array.from;
    var gi = new Set(["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"]),
        mi = {custom: 1, failed: 2}, _i = function () {
            function t() {
                p(this, t), this._localNameToDefinition = new Map, this._constructorToDefinition = new Map, this._patches = [], this._hasPatches = !1
            }

            return g(t, [{
                key: "setDefinition", value: function (t, e) {
                    this._localNameToDefinition.set(t, e), this._constructorToDefinition.set(e.constructor, e)
                }
            }, {
                key: "localNameToDefinition", value: function (t) {
                    return this._localNameToDefinition.get(t)
                }
            }, {
                key: "constructorToDefinition", value: function (t) {
                    return this._constructorToDefinition.get(t)
                }
            }, {
                key: "addPatch", value: function (t) {
                    this._hasPatches = !0, this._patches.push(t)
                }
            }, {
                key: "patchTree", value: function (t) {
                    var e = this;
                    this._hasPatches && l(t, function (t) {
                        return e.patch(t)
                    })
                }
            }, {
                key: "patch", value: function (t) {
                    if (this._hasPatches && !t.__CE_patched) {
                        t.__CE_patched = !0;
                        for (var e = 0; e < this._patches.length; e++) this._patches[e](t)
                    }
                }
            }, {
                key: "connectTree", value: function (t) {
                    var e = [];
                    l(t, function (t) {
                        return e.push(t)
                    });
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.__CE_state === mi.custom ? a(i) && this.connectedCallback(i) : this.upgradeElement(i)
                    }
                }
            }, {
                key: "disconnectTree", value: function (t) {
                    var e = [];
                    l(t, function (t) {
                        return e.push(t)
                    });
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.__CE_state === mi.custom && this.disconnectedCallback(i)
                    }
                }
            }, {
                key: "patchAndUpgradeTree", value: function (t) {
                    var e = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Set, i = [];
                    if (l(t, function (t) {
                        if ("link" === t.localName && "import" === t.getAttribute("rel")) {
                            var o = t.import;
                            o instanceof Node && "complete" === o.readyState ? (o.__CE_isImportDocument = !0, o.__CE_hasRegistry = !0) : t.addEventListener("load", function () {
                                var i = t.import;
                                i.__CE_documentLoadHandled || (i.__CE_documentLoadHandled = !0, i.__CE_isImportDocument = !0, i.__CE_hasRegistry = !0, n.delete(i), e.patchAndUpgradeTree(i, n))
                            })
                        } else i.push(t)
                    }, n), this._hasPatches) for (var o = 0; o < i.length; o++) this.patch(i[o]);
                    for (var r = 0; r < i.length; r++) this.upgradeElement(i[r])
                }
            }, {
                key: "upgradeElement", value: function (t) {
                    if (void 0 === t.__CE_state) {
                        var e = this.localNameToDefinition(t.localName);
                        if (e) {
                            e.constructionStack.push(t);
                            var n = e.constructor;
                            try {
                                try {
                                    if (new n !== t) throw new Error("The custom element constructor did not produce the element being upgraded.")
                                } finally {
                                    e.constructionStack.pop()
                                }
                            } catch (e) {
                                throw t.__CE_state = mi.failed, e
                            }
                            if (t.__CE_state = mi.custom, t.__CE_definition = e, e.attributeChangedCallback) for (var i = e.observedAttributes, o = 0; o < i.length; o++) {
                                var r = i[o], s = t.getAttribute(r);
                                null !== s && this.attributeChangedCallback(t, r, null, s, null)
                            }
                            a(t) && this.connectedCallback(t)
                        }
                    }
                }
            }, {
                key: "connectedCallback", value: function (t) {
                    var e = t.__CE_definition;
                    e.connectedCallback && e.connectedCallback.call(t), t.__CE_isConnectedCallbackCalled = !0
                }
            }, {
                key: "disconnectedCallback", value: function (t) {
                    t.__CE_isConnectedCallbackCalled || this.connectedCallback(t);
                    var e = t.__CE_definition;
                    e.disconnectedCallback && e.disconnectedCallback.call(t), t.__CE_isConnectedCallbackCalled = void 0
                }
            }, {
                key: "attributeChangedCallback", value: function (t, e, n, i, o) {
                    var r = t.__CE_definition;
                    r.attributeChangedCallback && r.observedAttributes.indexOf(e) > -1 && r.attributeChangedCallback.call(t, e, n, i, o)
                }
            }]), t
        }(), vi = function () {
            function t(e, n) {
                p(this, t), this._internals = e, this._document = n, this._observer = void 0, this._internals.patchAndUpgradeTree(this._document), "loading" === this._document.readyState && (this._observer = new MutationObserver(this._handleMutations.bind(this)), this._observer.observe(this._document, {
                    childList: !0,
                    subtree: !0
                }))
            }

            return g(t, [{
                key: "disconnect", value: function () {
                    this._observer && this._observer.disconnect()
                }
            }, {
                key: "_handleMutations", value: function (t) {
                    var e = this._document.readyState;
                    "interactive" !== e && "complete" !== e || this.disconnect();
                    for (var n = 0; n < t.length; n++) for (var i = t[n].addedNodes, o = 0; o < i.length; o++) {
                        var r = i[o];
                        this._internals.patchAndUpgradeTree(r)
                    }
                }
            }]), t
        }(), bi = function () {
            function t() {
                var e = this;
                p(this, t), this._value = void 0, this._resolve = void 0, this._promise = new Promise(function (t) {
                    e._resolve = t, e._value && t(e._value)
                })
            }

            return g(t, [{
                key: "resolve", value: function (t) {
                    if (this._value) throw new Error("Already resolved.");
                    this._value = t, this._resolve && this._resolve(t)
                }
            }, {
                key: "toPromise", value: function () {
                    return this._promise
                }
            }]), t
        }(), yi = function () {
            function t(e) {
                p(this, t), this._elementDefinitionIsRunning = !1, this._internals = e, this._whenDefinedDeferred = new Map, this._flushCallback = function (t) {
                    return t()
                }, this._flushPending = !1, this._unflushedLocalNames = [], this._documentConstructionObserver = new vi(e, document)
            }

            return g(t, [{
                key: "define", value: function (t, e) {
                    var n = this;
                    if (!(e instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
                    if (!r(t)) throw new SyntaxError("The element name '" + t + "' is not valid.");
                    if (this._internals.localNameToDefinition(t)) throw new Error("A custom element with name '" + t + "' has already been defined.");
                    if (this._elementDefinitionIsRunning) throw new Error("A custom element is already being defined.");
                    this._elementDefinitionIsRunning = !0;
                    var i = void 0, o = void 0, a = void 0, s = void 0, l = void 0;
                    try {
                        var u = function (t) {
                            var e = c[t];
                            if (void 0 !== e && !(e instanceof Function)) throw new Error("The '" + t + "' callback must be a function.");
                            return e
                        }, c = e.prototype;
                        if (!(c instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
                        i = u("connectedCallback"), o = u("disconnectedCallback"), a = u("adoptedCallback"), s = u("attributeChangedCallback"), l = e.observedAttributes || []
                    } catch (t) {
                        return
                    } finally {
                        this._elementDefinitionIsRunning = !1
                    }
                    var h = {
                        localName: t,
                        constructor: e,
                        connectedCallback: i,
                        disconnectedCallback: o,
                        adoptedCallback: a,
                        attributeChangedCallback: s,
                        observedAttributes: l,
                        constructionStack: []
                    };
                    this._internals.setDefinition(t, h), this._unflushedLocalNames.push(t), this._flushPending || (this._flushPending = !0, this._flushCallback(function () {
                        return n._flush()
                    }))
                }
            }, {
                key: "_flush", value: function () {
                    if (!1 !== this._flushPending) for (this._flushPending = !1, this._internals.patchAndUpgradeTree(document); this._unflushedLocalNames.length > 0;) {
                        var t = this._unflushedLocalNames.shift(), e = this._whenDefinedDeferred.get(t);
                        e && e.resolve(void 0)
                    }
                }
            }, {
                key: "get", value: function (t) {
                    var e = this._internals.localNameToDefinition(t);
                    if (e) return e.constructor
                }
            }, {
                key: "whenDefined", value: function (t) {
                    if (!r(t)) return Promise.reject(new SyntaxError("'" + t + "' is not a valid custom element name."));
                    var e = this._whenDefinedDeferred.get(t);
                    if (e) return e.toPromise();
                    var n = new bi;
                    this._whenDefinedDeferred.set(t, n);
                    return this._internals.localNameToDefinition(t) && -1 === this._unflushedLocalNames.indexOf(t) && n.resolve(void 0), n.toPromise()
                }
            }, {
                key: "polyfillWrapFlushCallback", value: function (t) {
                    this._documentConstructionObserver.disconnect();
                    var e = this._flushCallback;
                    this._flushCallback = function (n) {
                        return t(function () {
                            return e(n)
                        })
                    }
                }
            }]), t
        }();
    window.CustomElementRegistry = yi, yi.prototype.define = yi.prototype.define, yi.prototype.get = yi.prototype.get, yi.prototype.whenDefined = yi.prototype.whenDefined, yi.prototype.polyfillWrapFlushCallback = yi.prototype.polyfillWrapFlushCallback;
    var ki = {
        Document_createElement: window.Document.prototype.createElement,
        Document_createElementNS: window.Document.prototype.createElementNS,
        Document_importNode: window.Document.prototype.importNode,
        Document_prepend: window.Document.prototype.prepend,
        Document_append: window.Document.prototype.append,
        Node_cloneNode: window.Node.prototype.cloneNode,
        Node_appendChild: window.Node.prototype.appendChild,
        Node_insertBefore: window.Node.prototype.insertBefore,
        Node_removeChild: window.Node.prototype.removeChild,
        Node_replaceChild: window.Node.prototype.replaceChild,
        Node_textContent: Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
        Element_attachShadow: window.Element.prototype.attachShadow,
        Element_innerHTML: Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
        Element_getAttribute: window.Element.prototype.getAttribute,
        Element_setAttribute: window.Element.prototype.setAttribute,
        Element_removeAttribute: window.Element.prototype.removeAttribute,
        Element_getAttributeNS: window.Element.prototype.getAttributeNS,
        Element_setAttributeNS: window.Element.prototype.setAttributeNS,
        Element_removeAttributeNS: window.Element.prototype.removeAttributeNS,
        Element_insertAdjacentElement: window.Element.prototype.insertAdjacentElement,
        Element_prepend: window.Element.prototype.prepend,
        Element_append: window.Element.prototype.append,
        Element_before: window.Element.prototype.before,
        Element_after: window.Element.prototype.after,
        Element_replaceWith: window.Element.prototype.replaceWith,
        Element_remove: window.Element.prototype.remove,
        HTMLElement: window.HTMLElement,
        HTMLElement_innerHTML: Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
        HTMLElement_insertAdjacentElement: window.HTMLElement.prototype.insertAdjacentElement
    }, wi = new function t() {
        p(this, t)
    }, Ei = function (t, e, n) {
        e.prepend = function () {
            for (var e = arguments.length, i = Array(e), o = 0; o < e; o++) i[o] = arguments[o];
            var r = i.filter(function (t) {
                return t instanceof Node && a(t)
            });
            n.prepend.apply(this, i);
            for (var s = 0; s < r.length; s++) t.disconnectTree(r[s]);
            if (a(this)) for (var l = 0; l < i.length; l++) {
                var u = i[l];
                u instanceof Element && t.connectTree(u)
            }
        }, e.append = function () {
            for (var e = arguments.length, i = Array(e), o = 0; o < e; o++) i[o] = arguments[o];
            var r = i.filter(function (t) {
                return t instanceof Node && a(t)
            });
            n.append.apply(this, i);
            for (var s = 0; s < r.length; s++) t.disconnectTree(r[s]);
            if (a(this)) for (var l = 0; l < i.length; l++) {
                var u = i[l];
                u instanceof Element && t.connectTree(u)
            }
        }
    }, Ci = window.customElements;
    if (!Ci || Ci.forcePolyfill || "function" != typeof Ci.define || "function" != typeof Ci.get) {
        var Ai = new _i;
        !function (t) {
            window.HTMLElement = function () {
                function e() {
                    var e = this.constructor, n = t.constructorToDefinition(e);
                    if (!n) throw new Error("The custom element being constructed was not registered with `customElements`.");
                    var i = n.constructionStack;
                    if (0 === i.length) {
                        var o = ki.Document_createElement.call(document, n.localName);
                        return Object.setPrototypeOf(o, e.prototype), o.__CE_state = mi.custom, o.__CE_definition = n, t.patch(o), o
                    }
                    var r = i.length - 1, a = i[r];
                    if (a === wi) throw new Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
                    return i[r] = wi, Object.setPrototypeOf(a, e.prototype), t.patch(a), a
                }

                return e.prototype = ki.HTMLElement.prototype, e
            }()
        }(Ai), function (t) {
            u(Document.prototype, "createElement", function (e) {
                if (this.__CE_hasRegistry) {
                    var n = t.localNameToDefinition(e);
                    if (n) return new n.constructor
                }
                var i = ki.Document_createElement.call(this, e);
                return t.patch(i), i
            }), u(Document.prototype, "importNode", function (e, n) {
                var i = ki.Document_importNode.call(this, e, n);
                return this.__CE_hasRegistry ? t.patchAndUpgradeTree(i) : t.patchTree(i), i
            });
            u(Document.prototype, "createElementNS", function (e, n) {
                if (this.__CE_hasRegistry && (null === e || "http://www.w3.org/1999/xhtml" === e)) {
                    var i = t.localNameToDefinition(n);
                    if (i) return new i.constructor
                }
                var o = ki.Document_createElementNS.call(this, e, n);
                return t.patch(o), o
            }), Ei(t, Document.prototype, {prepend: ki.Document_prepend, append: ki.Document_append})
        }(Ai), function (t) {
            function e(e, n) {
                Object.defineProperty(e, "textContent", {
                    enumerable: n.enumerable,
                    configurable: !0,
                    get: n.get,
                    set: function (e) {
                        if (this.nodeType !== Node.TEXT_NODE) {
                            var i = void 0;
                            if (this.firstChild) {
                                var o = this.childNodes, r = o.length;
                                if (r > 0 && a(this)) {
                                    i = new Array(r);
                                    for (var s = 0; s < r; s++) i[s] = o[s]
                                }
                            }
                            if (n.set.call(this, e), i) for (var l = 0; l < i.length; l++) t.disconnectTree(i[l])
                        } else n.set.call(this, e)
                    }
                })
            }

            u(Node.prototype, "insertBefore", function (e, n) {
                if (e instanceof DocumentFragment) {
                    var i = Array.prototype.slice.apply(e.childNodes), o = ki.Node_insertBefore.call(this, e, n);
                    if (a(this)) for (var r = 0; r < i.length; r++) t.connectTree(i[r]);
                    return o
                }
                var s = a(e), l = ki.Node_insertBefore.call(this, e, n);
                return s && t.disconnectTree(e), a(this) && t.connectTree(e), l
            }), u(Node.prototype, "appendChild", function (e) {
                if (e instanceof DocumentFragment) {
                    var n = Array.prototype.slice.apply(e.childNodes), i = ki.Node_appendChild.call(this, e);
                    if (a(this)) for (var o = 0; o < n.length; o++) t.connectTree(n[o]);
                    return i
                }
                var r = a(e), s = ki.Node_appendChild.call(this, e);
                return r && t.disconnectTree(e), a(this) && t.connectTree(e), s
            }), u(Node.prototype, "cloneNode", function (e) {
                var n = ki.Node_cloneNode.call(this, e);
                return this.ownerDocument.__CE_hasRegistry ? t.patchAndUpgradeTree(n) : t.patchTree(n), n
            }), u(Node.prototype, "removeChild", function (e) {
                var n = a(e), i = ki.Node_removeChild.call(this, e);
                return n && t.disconnectTree(e), i
            }), u(Node.prototype, "replaceChild", function (e, n) {
                if (e instanceof DocumentFragment) {
                    var i = Array.prototype.slice.apply(e.childNodes), o = ki.Node_replaceChild.call(this, e, n);
                    if (a(this)) {
                        t.disconnectTree(n);
                        for (var r = 0; r < i.length; r++) t.connectTree(i[r])
                    }
                    return o
                }
                var s = a(e), l = ki.Node_replaceChild.call(this, e, n), u = a(this);
                return u && t.disconnectTree(n), s && t.disconnectTree(e), u && t.connectTree(e), l
            }), ki.Node_textContent && ki.Node_textContent.get ? e(Node.prototype, ki.Node_textContent) : t.addPatch(function (t) {
                e(t, {
                    enumerable: !0, configurable: !0, get: function () {
                        for (var t = [], e = 0; e < this.childNodes.length; e++) t.push(this.childNodes[e].textContent);
                        return t.join("")
                    }, set: function (t) {
                        for (; this.firstChild;) ki.Node_removeChild.call(this, this.firstChild);
                        ki.Node_appendChild.call(this, document.createTextNode(t))
                    }
                })
            })
        }(Ai), function (t) {
            function e(e, n) {
                Object.defineProperty(e, "innerHTML", {
                    enumerable: n.enumerable,
                    configurable: !0,
                    get: n.get,
                    set: function (e) {
                        var i = this, o = void 0;
                        if (a(this) && (o = [], l(this, function (t) {
                            t !== i && o.push(t)
                        })), n.set.call(this, e), o) for (var r = 0; r < o.length; r++) {
                            var s = o[r];
                            s.__CE_state === mi.custom && t.disconnectedCallback(s)
                        }
                        return this.ownerDocument.__CE_hasRegistry ? t.patchAndUpgradeTree(this) : t.patchTree(this), e
                    }
                })
            }

            function n(e, n) {
                u(e, "insertAdjacentElement", function (e, i) {
                    var o = a(i), r = n.call(this, e, i);
                    return o && t.disconnectTree(i), a(r) && t.connectTree(i), r
                })
            }

            if (ki.Element_attachShadow ? u(Element.prototype, "attachShadow", function (t) {
                var e = ki.Element_attachShadow.call(this, t);
                return this.__CE_shadowRoot = e, e
            }) : console.warn("Custom Elements: `Element#attachShadow` was not patched."), ki.Element_innerHTML && ki.Element_innerHTML.get) e(Element.prototype, ki.Element_innerHTML); else if (ki.HTMLElement_innerHTML && ki.HTMLElement_innerHTML.get) e(HTMLElement.prototype, ki.HTMLElement_innerHTML); else {
                var i = ki.Document_createElement.call(document, "div");
                t.addPatch(function (t) {
                    e(t, {
                        enumerable: !0, configurable: !0, get: function () {
                            return ki.Node_cloneNode.call(this, !0).innerHTML
                        }, set: function (t) {
                            var e = "template" === this.localName ? this.content : this;
                            for (i.innerHTML = t; e.childNodes.length > 0;) ki.Node_removeChild.call(e, e.childNodes[0]);
                            for (; i.childNodes.length > 0;) ki.Node_appendChild.call(e, i.childNodes[0])
                        }
                    })
                })
            }
            u(Element.prototype, "setAttribute", function (e, n) {
                if (this.__CE_state !== mi.custom) return ki.Element_setAttribute.call(this, e, n);
                var i = ki.Element_getAttribute.call(this, e);
                ki.Element_setAttribute.call(this, e, n), n = ki.Element_getAttribute.call(this, e), t.attributeChangedCallback(this, e, i, n, null)
            }), u(Element.prototype, "setAttributeNS", function (e, n, i) {
                if (this.__CE_state !== mi.custom) return ki.Element_setAttributeNS.call(this, e, n, i);
                var o = ki.Element_getAttributeNS.call(this, e, n);
                ki.Element_setAttributeNS.call(this, e, n, i), i = ki.Element_getAttributeNS.call(this, e, n), t.attributeChangedCallback(this, n, o, i, e)
            }), u(Element.prototype, "removeAttribute", function (e) {
                if (this.__CE_state !== mi.custom) return ki.Element_removeAttribute.call(this, e);
                var n = ki.Element_getAttribute.call(this, e);
                ki.Element_removeAttribute.call(this, e), null !== n && t.attributeChangedCallback(this, e, n, null, null)
            }), u(Element.prototype, "removeAttributeNS", function (e, n) {
                if (this.__CE_state !== mi.custom) return ki.Element_removeAttributeNS.call(this, e, n);
                var i = ki.Element_getAttributeNS.call(this, e, n);
                ki.Element_removeAttributeNS.call(this, e, n);
                var o = ki.Element_getAttributeNS.call(this, e, n);
                i !== o && t.attributeChangedCallback(this, n, i, o, e)
            }), ki.HTMLElement_insertAdjacentElement ? n(HTMLElement.prototype, ki.HTMLElement_insertAdjacentElement) : ki.Element_insertAdjacentElement ? n(Element.prototype, ki.Element_insertAdjacentElement) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."), Ei(t, Element.prototype, {
                prepend: ki.Element_prepend,
                append: ki.Element_append
            }), function (t, e, n) {
                e.before = function () {
                    for (var e = arguments.length, i = Array(e), o = 0; o < e; o++) i[o] = arguments[o];
                    var r = i.filter(function (t) {
                        return t instanceof Node && a(t)
                    });
                    n.before.apply(this, i);
                    for (var s = 0; s < r.length; s++) t.disconnectTree(r[s]);
                    if (a(this)) for (var l = 0; l < i.length; l++) {
                        var u = i[l];
                        u instanceof Element && t.connectTree(u)
                    }
                }, e.after = function () {
                    for (var e = arguments.length, i = Array(e), o = 0; o < e; o++) i[o] = arguments[o];
                    var r = i.filter(function (t) {
                        return t instanceof Node && a(t)
                    });
                    n.after.apply(this, i);
                    for (var s = 0; s < r.length; s++) t.disconnectTree(r[s]);
                    if (a(this)) for (var l = 0; l < i.length; l++) {
                        var u = i[l];
                        u instanceof Element && t.connectTree(u)
                    }
                }, e.replaceWith = function () {
                    for (var e = arguments.length, i = Array(e), o = 0; o < e; o++) i[o] = arguments[o];
                    var r = i.filter(function (t) {
                        return t instanceof Node && a(t)
                    }), s = a(this);
                    n.replaceWith.apply(this, i);
                    for (var l = 0; l < r.length; l++) t.disconnectTree(r[l]);
                    if (s) {
                        t.disconnectTree(this);
                        for (var u = 0; u < i.length; u++) {
                            var c = i[u];
                            c instanceof Element && t.connectTree(c)
                        }
                    }
                }, e.remove = function () {
                    var e = a(this);
                    n.remove.call(this), e && t.disconnectTree(this)
                }
            }(t, Element.prototype, {
                before: ki.Element_before,
                after: ki.Element_after,
                replaceWith: ki.Element_replaceWith,
                remove: ki.Element_remove
            })
        }(Ai), document.__CE_hasRegistry = !0;
        var Si = new yi(Ai);
        Object.defineProperty(window, "customElements", {configurable: !0, enumerable: !0, value: Si})
    }
    !function (t) {
        function e() {
            d = !1;
            var t = f;
            f = [], t.sort(function (t, e) {
                return t.uid_ - e.uid_
            });
            var n = !1;
            t.forEach(function (t) {
                var e = t.takeRecords();
                !function (t) {
                    t.nodes_.forEach(function (e) {
                        var n = u.get(e);
                        n && n.forEach(function (e) {
                            e.observer === t && e.removeTransientObservers()
                        })
                    })
                }(t), e.length && (t.callback_(e, t), n = !0)
            }), n && e()
        }

        function n(t, e) {
            for (var n = t; n; n = n.parentNode) {
                var i = u.get(n);
                if (i) for (var o = 0; o < i.length; o++) {
                    var r = i[o], a = r.options;
                    if (n === t || a.subtree) {
                        var s = e(a);
                        s && r.enqueue(s)
                    }
                }
            }
        }

        function i(t) {
            this.callback_ = t, this.nodes_ = [], this.records_ = [], this.uid_ = ++p
        }

        function o(t, e) {
            this.type = t, this.target = e, this.addedNodes = [], this.removedNodes = [], this.previousSibling = null, this.nextSibling = null, this.attributeName = null, this.attributeNamespace = null, this.oldValue = null
        }

        function r(t, e) {
            return g = new o(t, e)
        }

        function a(t) {
            return m || (m = function (t) {
                var e = new o(t.type, t.target);
                return e.addedNodes = t.addedNodes.slice(), e.removedNodes = t.removedNodes.slice(), e.previousSibling = t.previousSibling, e.nextSibling = t.nextSibling, e.attributeName = t.attributeName, e.attributeNamespace = t.attributeNamespace, e.oldValue = t.oldValue, e
            }(g), m.oldValue = t, m)
        }

        function s(t, e, n) {
            this.observer = t, this.target = e, this.options = n, this.transientObservedNodes = []
        }

        if (!t.JsMutationObserver) {
            var l, u = new WeakMap;
            if (/Trident|Edge/.test(navigator.userAgent)) l = setTimeout; else if (window.setImmediate) l = window.setImmediate; else {
                var c = [], h = String(Math.random());
                window.addEventListener("message", function (t) {
                    if (t.data === h) {
                        var e = c;
                        c = [], e.forEach(function (t) {
                            t()
                        })
                    }
                }), l = function (t) {
                    c.push(t), window.postMessage(h, "*")
                }
            }
            var d = !1, f = [], p = 0;
            i.prototype = {
                observe: function (t, e) {
                    if (t = function (t) {
                        return window.ShadowDOMPolyfill && window.ShadowDOMPolyfill.wrapIfNeeded(t) || t
                    }(t), !e.childList && !e.attributes && !e.characterData || e.attributeOldValue && !e.attributes || e.attributeFilter && e.attributeFilter.length && !e.attributes || e.characterDataOldValue && !e.characterData) throw new SyntaxError;
                    var n = u.get(t);
                    n || u.set(t, n = []);
                    for (var i, o = 0; o < n.length; o++) if (n[o].observer === this) {
                        (i = n[o]).removeListeners(), i.options = e;
                        break
                    }
                    i || (i = new s(this, t, e), n.push(i), this.nodes_.push(t)), i.addListeners()
                }, disconnect: function () {
                    this.nodes_.forEach(function (t) {
                        for (var e = u.get(t), n = 0; n < e.length; n++) {
                            var i = e[n];
                            if (i.observer === this) {
                                i.removeListeners(), e.splice(n, 1);
                                break
                            }
                        }
                    }, this), this.records_ = []
                }, takeRecords: function () {
                    var t = this.records_;
                    return this.records_ = [], t
                }
            };
            var g, m;
            s.prototype = {
                enqueue: function (t) {
                    var n = this.observer.records_, i = n.length;
                    if (n.length > 0) {
                        var o = function (t, e) {
                            return t === e ? t : m && function (t) {
                                return t === m || t === g
                            }(t) ? m : null
                        }(n[i - 1], t);
                        if (o) return void (n[i - 1] = o)
                    } else !function (t) {
                        f.push(t), d || (d = !0, l(e))
                    }(this.observer);
                    n[i] = t
                }, addListeners: function () {
                    this.addListeners_(this.target)
                }, addListeners_: function (t) {
                    var e = this.options;
                    e.attributes && t.addEventListener("DOMAttrModified", this, !0), e.characterData && t.addEventListener("DOMCharacterDataModified", this, !0), e.childList && t.addEventListener("DOMNodeInserted", this, !0), (e.childList || e.subtree) && t.addEventListener("DOMNodeRemoved", this, !0)
                }, removeListeners: function () {
                    this.removeListeners_(this.target)
                }, removeListeners_: function (t) {
                    var e = this.options;
                    e.attributes && t.removeEventListener("DOMAttrModified", this, !0), e.characterData && t.removeEventListener("DOMCharacterDataModified", this, !0), e.childList && t.removeEventListener("DOMNodeInserted", this, !0), (e.childList || e.subtree) && t.removeEventListener("DOMNodeRemoved", this, !0)
                }, addTransientObserver: function (t) {
                    if (t !== this.target) {
                        this.addListeners_(t), this.transientObservedNodes.push(t);
                        var e = u.get(t);
                        e || u.set(t, e = []), e.push(this)
                    }
                }, removeTransientObservers: function () {
                    var t = this.transientObservedNodes;
                    this.transientObservedNodes = [], t.forEach(function (t) {
                        this.removeListeners_(t);
                        for (var e = u.get(t), n = 0; n < e.length; n++) if (e[n] === this) {
                            e.splice(n, 1);
                            break
                        }
                    }, this)
                }, handleEvent: function (t) {
                    switch (t.stopImmediatePropagation(), t.type) {
                        case"DOMAttrModified":
                            var e = t.attrName, i = t.relatedNode.namespaceURI, o = t.target;
                            (s = new r("attributes", o)).attributeName = e, s.attributeNamespace = i;
                            l = t.attrChange === MutationEvent.ADDITION ? null : t.prevValue;
                            n(o, function (t) {
                                if (t.attributes && (!t.attributeFilter || !t.attributeFilter.length || -1 !== t.attributeFilter.indexOf(e) || -1 !== t.attributeFilter.indexOf(i))) return t.attributeOldValue ? a(l) : s
                            });
                            break;
                        case"DOMCharacterDataModified":
                            var s = r("characterData", o = t.target), l = t.prevValue;
                            n(o, function (t) {
                                if (t.characterData) return t.characterDataOldValue ? a(l) : s
                            });
                            break;
                        case"DOMNodeRemoved":
                            this.addTransientObserver(t.target);
                        case"DOMNodeInserted":
                            var u, c, h = t.target;
                            "DOMNodeInserted" === t.type ? (u = [h], c = []) : (u = [], c = [h]);
                            var d = h.previousSibling, f = h.nextSibling;
                            (s = r("childList", t.target.parentNode)).addedNodes = u, s.removedNodes = c, s.previousSibling = d, s.nextSibling = f, n(t.relatedNode, function (t) {
                                if (t.childList) return s
                            })
                    }
                    g = m = void 0
                }
            }, t.JsMutationObserver = i, t.MutationObserver || (t.MutationObserver = i, i._isPolyfilled = !0)
        }
    }(self), function (t, e) {
        function n(t) {
            return l[s] = i.apply(e, t), s++
        }

        function i(t) {
            var n = [].slice.call(arguments, 1);
            return function () {
                "function" == typeof t ? t.apply(e, n) : new Function("" + t)()
            }
        }

        function o(t) {
            if (u) setTimeout(i(o, t), 0); else {
                var e = l[t];
                if (e) {
                    u = !0;
                    try {
                        e()
                    } finally {
                        r(t), u = !1
                    }
                }
            }
        }

        function r(t) {
            delete l[t]
        }

        if (!t.setImmediate) {
            var a, s = 1, l = {}, u = !1, c = t.document, h = Object.getPrototypeOf && Object.getPrototypeOf(t);
            h = h && h.setTimeout ? h : t, "[object process]" === {}.toString.call(t.process) ? a = function () {
                var t = n(arguments);
                return process.nextTick(i(o, t)), t
            } : function () {
                if (t.postMessage && !t.importScripts) {
                    var e = !0, n = t.onmessage;
                    return t.onmessage = function () {
                        e = !1
                    }, t.postMessage("", "*"), t.onmessage = n, e
                }
            }() ? function () {
                var e = "setImmediate$" + Math.random() + "$", i = function (n) {
                    n.source === t && "string" == typeof n.data && 0 === n.data.indexOf(e) && o(+n.data.slice(e.length))
                };
                t.addEventListener ? t.addEventListener("message", i, !1) : t.attachEvent("onmessage", i), a = function () {
                    var i = n(arguments);
                    return t.postMessage(e + i, "*"), i
                }
            }() : t.MessageChannel ? function () {
                var t = new MessageChannel;
                t.port1.onmessage = function (t) {
                    o(t.data)
                }, a = function () {
                    var e = n(arguments);
                    return t.port2.postMessage(e), e
                }
            }() : c && "onreadystatechange" in c.createElement("script") ? function () {
                var t = c.documentElement;
                a = function () {
                    var e = n(arguments), i = c.createElement("script");
                    return i.onreadystatechange = function () {
                        o(e), i.onreadystatechange = null, t.removeChild(i), i = null
                    }, t.appendChild(i), e
                }
            }() : a = function () {
                var t = n(arguments);
                return setTimeout(i(o, t), 0), t
            }, h.setImmediate = a, h.clearImmediate = r
        }
    }(self), function () {
        var t = {
            ensureViewportElement: function () {
                var t = document.querySelector("meta[name=viewport]");
                return t || ((t = document.createElement("meta")).name = "viewport", document.head.appendChild(t)), t
            }, setup: function () {
                var e = t.ensureViewportElement();
                e && (e.hasAttribute("content") || e.setAttribute("content", "width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no"))
            }
        };
        window.Viewport = t
    }();
    var Pi = function (t) {
        function e() {
            return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this))
        }

        return b(e, t), e
    }(function () {
        if ("function" != typeof HTMLElement) {
            var t = function () {
            };
            return t.prototype = document.createElement("div"), t
        }
        return HTMLElement
    }()), Oi = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            for (t.template = t.innerHTML; t.firstChild;) t.removeChild(t.firstChild);
            return t
        }

        return b(e, Pi), g(e, [{
            key: "connectedCallback", value: function () {
                this.parentNode && this.parentNode !== document.body && Q.warn("ons-template (id = " + this.getAttribute("id") + ") must be located just under document.body" + (this.parentNode.outerHTML ? ":\n\n" + this.parentNode.outerHTML : "."));
                var t = new CustomEvent("_templateloaded", {bubbles: !0, cancelable: !0});
                t.template = this.template, t.templateId = this.getAttribute("id"), this.dispatchEvent(t)
            }
        }]), e
    }();
    c.Template = Oi, customElements.define("ons-template", Oi);
    var xi = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return n(t, function () {
                if (null !== C._getSelectedPlatform()) t._platformUpdate(); else if (!t._isAllowedPlatform()) {
                    for (; t.childNodes[0];) t.childNodes[0].remove();
                    t._platformUpdate()
                }
            }), t._onOrientationChange(), t
        }

        return b(e, Pi), g(e, [{
            key: "connectedCallback", value: function () {
                Ot.on("change", this._onOrientationChange.bind(this))
            }
        }, {
            key: "attributeChangedCallback", value: function (t) {
                "orientation" === t && this._onOrientationChange()
            }
        }, {
            key: "disconnectedCallback", value: function () {
                Ot.off("change", this._onOrientationChange)
            }
        }, {
            key: "_platformUpdate", value: function () {
                this.style.display = this._isAllowedPlatform() ? "" : "none"
            }
        }, {
            key: "_isAllowedPlatform", value: function () {
                return !this.getAttribute("platform") || this.getAttribute("platform").split(/\s+/).indexOf(C.getMobileOS()) >= 0
            }
        }, {
            key: "_onOrientationChange", value: function () {
                if (this.hasAttribute("orientation") && this._isAllowedPlatform()) {
                    var t = this.getAttribute("orientation").toLowerCase(),
                        e = Ot.isPortrait() ? "portrait" : "landscape";
                    this.style.display = t === e ? "" : "none"
                }
            }
        }], [{
            key: "observedAttributes", get: function () {
                return ["orientation"]
            }
        }]), e
    }();
    c.If = xi, customElements.define("ons-if", xi);
    var Ti = function () {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            p(this, t), this.timing = e.timing || "linear", this.duration = e.duration || 0, this.delay = e.delay || 0, this.def = {
                timing: this.timing,
                duration: this.duration,
                delay: this.delay
            }
        }

        return g(t, null, [{
            key: "extend", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = this, n = function () {
                    e.apply(this, arguments), Q.extend(this, t)
                };
                return n.prototype = this.prototype, n
            }
        }]), t
    }(), Li = {};
    Li.isIPhoneXPortraitPatchActive = function () {
        return null != document.documentElement.getAttribute("onsflag-iphonex-portrait") && window.innerWidth < window.innerHeight
    }, Li.isIPhoneXLandscapePatchActive = function () {
        return null != document.documentElement.getAttribute("onsflag-iphonex-landscape") && window.innerWidth >= window.innerHeight
    }, Li.getSafeAreaLengths = function () {
        return Li.isIPhoneXPortraitPatchActive() ? {
            top: 44,
            right: 0,
            bottom: 34,
            left: 0
        } : Li.isIPhoneXLandscapePatchActive() ? {top: 0, right: 44, bottom: 21, left: 44} : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    }, Li.getSafeAreaDOMRect = function () {
        var t = void 0;
        return t = Li.isIPhoneXPortraitPatchActive() ? {
            x: 0,
            y: 44,
            width: window.innerWidth,
            height: window.innerHeight - 78
        } : Li.isIPhoneXLandscapePatchActive() ? {
            x: 44,
            y: 0,
            width: window.innerWidth - 88,
            height: window.innerHeight - 21
        } : {x: 0, y: 0, width: window.innerWidth, height: window.innerHeight}, _({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        })
    };
    var Mi = function (t) {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.timing,
                i = void 0 === n ? "linear" : n, o = t.delay, r = void 0 === o ? 0 : o, a = t.duration,
                s = void 0 === a ? .2 : a;
            return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
                timing: i,
                delay: r,
                duration: s
            }))
        }

        return b(e, Ti), g(e, [{
            key: "show", value: function (t, e) {
                e()
            }
        }, {
            key: "hide", value: function (t, e) {
                e()
            }
        }]), e
    }(), Di = function (t) {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.timing,
                i = void 0 === n ? "ease" : n, o = t.delay, r = void 0 === o ? 0 : o, a = t.duration,
                s = void 0 === a ? .4 : a;
            p(this, e);
            var l = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {timing: i, delay: r, duration: s}));
            return l.maskTiming = "linear", l.maskDuration = .2, l
        }

        return b(e, Mi), g(e, [{
            key: "show", value: function (t, e) {
                nt.runAll(nt(t._mask).queue({opacity: 0}).wait(this.delay).queue({opacity: 1}, {
                    duration: this.maskDuration,
                    timing: this.maskTiming
                }), nt(t._sheet, this.def).default({
                    transform: "translate3d(0, 80%, 0)",
                    opacity: 0
                }, {transform: "translate3d(0, 0, 0)", opacity: 1}).queue(function (t) {
                    e && e(), t()
                }))
            }
        }, {
            key: "hide", value: function (t, e) {
                nt.runAll(nt(t._mask).queue({opacity: 1}).wait(this.delay).queue({opacity: 0}, {
                    duration: this.maskDuration,
                    timing: this.maskTiming
                }), nt(t._sheet, this.def).default({
                    transform: "translate3d(0, 0, 0)",
                    opacity: 1
                }, {transform: "translate3d(0, 80%, 0)", opacity: 0}).queue(function (t) {
                    e && e(), t()
                }))
            }
        }]), e
    }(), Ii = function (t) {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.timing,
                i = void 0 === n ? "ease" : n, o = t.delay, r = void 0 === o ? 0 : o, a = t.duration,
                s = void 0 === a ? .3 : a;
            p(this, e);
            var l = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {timing: i, delay: r, duration: s}));
            return l.maskTiming = "linear", l.maskDuration = .2, Li.isIPhoneXPortraitPatchActive() ? l.liftAmount = "calc(100% + 48px)" : Li.isIPhoneXLandscapePatchActive() ? l.liftAmount = "calc(100% + 33px)" : l.liftAmount = document.body.clientHeight / 2 - 1 + "px", l
        }

        return b(e, Mi), g(e, [{
            key: "show", value: function (t, e) {
                nt.runAll(nt(t._mask).queue({opacity: 0}).wait(this.delay).queue({opacity: 1}, {
                    duration: this.maskDuration,
                    timing: this.maskTiming
                }), nt(t._sheet, this.def).default({transform: "translate3d(0, " + this.liftAmount + ", 0)"}, {transform: "translate3d(0, 0, 0)"}).queue(function (t) {
                    e && e(), t()
                }))
            }
        }, {
            key: "hide", value: function (t, e) {
                nt.runAll(nt(t._mask).queue({opacity: 1}).wait(this.delay).queue({opacity: 0}, {
                    duration: this.maskDuration,
                    timing: this.maskTiming
                }), nt(t._sheet, this.def).default({transform: "translate3d(0, 0, 0)"}, {transform: "translate3d(0, " + this.liftAmount + ", 0)"}).queue(function (t) {
                    e && e(), t()
                }))
            }
        }]), e
    }(), Ni = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return t.constructor === e && Q.throwAbstract(), t._visible = !1, t._doorLock = new Nt, t._cancel = t._cancel.bind(t), t._selfCamelName = Q.camelize(t.tagName.slice(4)), t._defaultDBB = function (e) {
                return t.cancelable ? t._cancel() : e.callParentHandler()
            }, t._animatorFactory = t._updateAnimatorFactory(), t
        }

        return b(e, Pi), g(e, [{
            key: "_updateAnimatorFactory", value: function () {
                Q.throwMember()
            }
        }, {
            key: "_toggleStyle", value: function (t) {
                this.style.display = t ? "block" : "none"
            }
        }, {
            key: "_scheme", get: function () {
                Q.throwMember()
            }
        }]), g(e, [{
            key: "_cancel", value: function () {
                var t = this;
                this.cancelable && !this._running && (this._running = !0, this.hide().then(function () {
                    t._running = !1, Q.triggerElementEvent(t, "dialog-cancel")
                }, function () {
                    return t._running = !1
                }))
            }
        }, {
            key: "show", value: function () {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return this._setVisible.apply(this, [!0].concat(e))
            }
        }, {
            key: "hide", value: function () {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return this._setVisible.apply(this, [!1].concat(e))
            }
        }, {
            key: "toggle", value: function () {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return this._setVisible.apply(this, [!this.visible].concat(e))
            }
        }, {
            key: "_setVisible", value: function (t) {
                var e, i = this, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = t ? "show" : "hide";
                (o = _({}, o)).animationOptions = Q.extend(o.animationOptions || {}, O.parseAnimationOptionsString(this.getAttribute("animation-options")));
                var a = !1;
                return Q.triggerElementEvent(this, "pre" + r, (e = {}, m(e, this._selfCamelName, this), m(e, "cancel", function () {
                    return a = !0
                }), e)), a ? Promise.reject("Canceled in pre" + r + " event.") : new Promise(function (e) {
                    i._doorLock.waitUnlock(function () {
                        var a = i._doorLock.lock(), s = i._animatorFactory.newAnimator(o);
                        t && i._toggleStyle(!0, o), i._visible = t, Q.iosPageScrollFix(t), n(i, function () {
                            s[r](i, function () {
                                !t && i._toggleStyle(!1, o), a(), Q.propagateAction(i, "_" + r), Q.triggerElementEvent(i, "post" + r, m({}, i._selfCamelName, i)), o.callback instanceof Function && o.callback(i), e(i)
                            })
                        })
                    })
                })
            }
        }, {
            key: "_updateMask", value: function () {
                var t = this;
                n(this, function () {
                    t._mask && t.getAttribute("mask-color") && (t._mask.style.backgroundColor = t.getAttribute("mask-color"))
                })
            }
        }, {
            key: "connectedCallback", value: function () {
                var t = this;
                "function" == typeof this._defaultDBB && (this.onDeviceBackButton = this._defaultDBB.bind(this)), n(this, function () {
                    t._mask && (t._mask.addEventListener("click", t._cancel, !1), Q.iosMaskScrollFix(t._mask, !0))
                })
            }
        }, {
            key: "disconnectedCallback", value: function () {
                this._backButtonHandler && (this._backButtonHandler.destroy(), this._backButtonHandler = null), this._mask && (this._mask.removeEventListener("click", this._cancel, !1), Q.iosMaskScrollFix(this._mask, !1))
            }
        }, {
            key: "attributeChangedCallback", value: function (t, e, n) {
                switch (t) {
                    case"modifier":
                        B.onModifierChanged(e, n, this, this._scheme);
                        break;
                    case"animation":
                        this._animatorFactory = this._updateAnimatorFactory();
                        break;
                    case"mask-color":
                        this._updateMask()
                }
            }
        }, {
            key: "onDeviceBackButton", get: function () {
                return this._backButtonHandler
            }, set: function (t) {
                this._backButtonHandler && this._backButtonHandler.destroy(), this._backButtonHandler = R.createHandler(this, t)
            }
        }, {
            key: "visible", get: function () {
                return this._visible
            }
        }, {
            key: "disabled", set: function (t) {
                return Q.toggleAttribute(this, "disabled", t)
            }, get: function () {
                return this.hasAttribute("disabled")
            }
        }, {
            key: "cancelable", set: function (t) {
                return Q.toggleAttribute(this, "cancelable", t)
            }, get: function () {
                return this.hasAttribute("cancelable")
            }
        }], [{
            key: "observedAttributes", get: function () {
                return ["modifier", "animation", "mask-color"]
            }
        }, {
            key: "events", get: function () {
                return ["preshow", "postshow", "prehide", "posthide", "dialog-cancel"]
            }
        }]), e
    }(), Bi = {
        ".action-sheet": "action-sheet--*",
        ".action-sheet-mask": "action-sheet-mask--*",
        ".action-sheet-title": "action-sheet-title--*"
    }, ji = {
        default: function () {
            return C.isAndroid() ? Di : Ii
        }, none: Mi
    }, Hi = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return n(t, function () {
                return t._compile()
            }), t
        }

        return b(e, Ni), g(e, [{
            key: "_updateAnimatorFactory", value: function () {
                return new O({
                    animators: ji,
                    baseClass: Mi,
                    baseClassName: "ActionSheetAnimator",
                    defaultAnimation: this.getAttribute("animation")
                })
            }
        }, {
            key: "_compile", value: function () {
                if (N.prepare(this), this.style.display = "none", this.style.zIndex = 10001, !this._sheet) {
                    var t = document.createElement("div");
                    for (t.classList.add("action-sheet"); this.firstChild;) t.appendChild(this.firstChild);
                    this.appendChild(t)
                }
                if (!this._title && this.hasAttribute("title")) {
                    var e = document.createElement("div");
                    e.innerHTML = this.getAttribute("title"), e.classList.add("action-sheet-title"), this._sheet.insertBefore(e, this._sheet.firstChild)
                }
                if (!this._mask) {
                    var n = document.createElement("div");
                    n.classList.add("action-sheet-mask"), this.insertBefore(n, this.firstChild)
                }
                this._sheet.style.zIndex = 20001, this._mask.style.zIndex = 2e4, B.initModifier(this, this._scheme)
            }
        }, {
            key: "_updateTitle", value: function () {
                this._title && (this._title.innerHTML = this.getAttribute("title"))
            }
        }, {
            key: "attributeChangedCallback", value: function (t, n, i) {
                "title" === t ? this._updateTitle() : v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "attributeChangedCallback", this).call(this, t, n, i)
            }
        }, {
            key: "_scheme", get: function () {
                return Bi
            }
        }, {
            key: "_mask", get: function () {
                return Q.findChild(this, ".action-sheet-mask")
            }
        }, {
            key: "_sheet", get: function () {
                return Q.findChild(this, ".action-sheet")
            }
        }, {
            key: "_title", get: function () {
                return this.querySelector(".action-sheet-title")
            }
        }], [{
            key: "registerAnimator", value: function (t, e) {
                e.prototype instanceof Mi || Q.throwAnimator("ActionSheet"), ji[t] = e
            }
        }, {
            key: "observedAttributes", get: function () {
                return [].concat(w(v(e.__proto__ || Object.getPrototypeOf(e), "observedAttributes", this)), ["title"])
            }
        }, {
            key: "animators", get: function () {
                return ji
            }
        }, {
            key: "ActionSheetAnimator", get: function () {
                return Mi
            }
        }]), e
    }();
    c.ActionSheet = Hi, customElements.define("ons-action-sheet", Hi);
    var Ri = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return t.constructor === e && Q.throwAbstract(), n(t, function () {
                return t._compile()
            }), t
        }

        return b(e, Pi), g(e, [{
            key: "_scheme", get: function () {
                Q.throwMember()
            }
        }, {
            key: "_defaultClassName", get: function () {
                Q.throwMember()
            }
        }, {
            key: "_rippleOpt", get: function () {
                return [this]
            }
        }]), g(e, [{
            key: "_compile", value: function () {
                if (N.prepare(this), this.classList.add(this._defaultClassName), !this._icon && this.hasAttribute("icon")) {
                    Q.checkMissingImport("Icon");
                    var t = Q.createElement('<ons-icon icon="' + this.getAttribute("icon") + '"></ons-icon>');
                    t.classList.add(this._defaultClassName.replace("button", "icon")), this.insertBefore(t, this.firstChild)
                }
                this._updateRipple(), B.initModifier(this, this._scheme)
            }
        }, {
            key: "_updateIcon", value: function () {
                this._icon && this._icon.setAttribute("icon", this.getAttribute("icon"))
            }
        }, {
            key: "_updateRipple", value: function () {
                this._rippleOpt && Q.updateRipple.apply(Q, w(this._rippleOpt))
            }
        }, {
            key: "attributeChangedCallback", value: function (t, e, n) {
                switch (t) {
                    case"class":
                        Q.restoreClass(this, this._defaultClassName, this._scheme);
                        break;
                    case"modifier":
                        B.onModifierChanged(e, n, this, this._scheme);
                        break;
                    case"icon":
                        this._updateIcon();
                        break;
                    case"ripple":
                        this.classList.contains(this._defaultClassName) && this._updateRipple()
                }
            }
        }, {
            key: "disabled", set: function (t) {
                return Q.toggleAttribute(this, "disabled", t)
            }, get: function () {
                return this.hasAttribute("disabled")
            }
        }, {
            key: "_icon", get: function () {
                return Q.findChild(this, "ons-icon")
            }
        }], [{
            key: "observedAttributes", get: function () {
                return ["modifier", "class", "icon", "ripple"]
            }
        }]), e
    }(), Fi = function (t) {
        function e() {
            return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
        }

        return b(e, Ri), g(e, [{
            key: "_scheme", get: function () {
                return {"": "action-sheet-button--*", ".action-sheet-icon": "action-sheet-icon--*"}
            }
        }, {
            key: "_defaultClassName", get: function () {
                return "action-sheet-button"
            }
        }, {
            key: "_rippleOpt", get: function () {
            }
        }]), e
    }();
    c.ActionSheetButton = Fi, customElements.define("ons-action-sheet-button", Fi);
    var qi = function (t) {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.timing,
                i = void 0 === n ? "linear" : n, o = t.delay, r = void 0 === o ? 0 : o, a = t.duration,
                s = void 0 === a ? .2 : a;
            return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
                timing: i,
                delay: r,
                duration: s
            }))
        }

        return b(e, Ti), g(e, [{
            key: "show", value: function (t, e) {
                e()
            }
        }, {
            key: "hide", value: function (t, e) {
                e()
            }
        }]), e
    }(), zi = function (t) {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.timing,
                i = void 0 === n ? "cubic-bezier(.1, .7, .4, 1)" : n, o = t.duration, r = void 0 === o ? .2 : o,
                a = t.delay, s = void 0 === a ? 0 : a;
            return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
                duration: r,
                timing: i,
                delay: s
            }))
        }

        return b(e, qi), g(e, [{
            key: "show", value: function (t, e) {
                e = e || function () {
                }, nt.runAll(nt(t._mask, this.def).default({opacity: 0}, {opacity: 1}), nt(t._dialog, this.def).default({
                    transform: "translate3d(-50%, -50%, 0) scale3d(.9, .9, 1)",
                    opacity: 0
                }, {transform: "translate3d(-50%, -50%, 0) scale3d(1, 1, 1)", opacity: 1}).queue(function (t) {
                    e(), t()
                }))
            }
        }, {
            key: "hide", value: function (t, e) {
                e = e || function () {
                }, nt.runAll(nt(t._mask, this.def).default({opacity: 1}, {opacity: 0}), nt(t._dialog, this.def).default({
                    transform: "translate3d(-50%, -50%, 0) scale3d(1, 1, 1)",
                    opacity: 1
                }, {transform: "translate3d(-50%, -50%, 0) scale3d(.9, .9, 1)", opacity: 0}).queue(function (t) {
                    e(), t()
                }))
            }
        }]), e
    }(), Vi = function (t) {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.timing,
                i = void 0 === n ? "cubic-bezier(.1, .7, .4, 1)" : n, o = t.duration, r = void 0 === o ? .2 : o,
                a = t.delay, s = void 0 === a ? 0 : a;
            return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
                duration: r,
                timing: i,
                delay: s
            }))
        }

        return b(e, qi), g(e, [{
            key: "show", value: function (t, e) {
                e = e || function () {
                }, nt.runAll(nt(t._mask, this.def).default({opacity: 0}, {opacity: 1}), nt(t._dialog, this.def).default({
                    transform: "translate3d(-50%, -50%, 0) scale3d(1.3, 1.3, 1)",
                    opacity: 0
                }, {transform: "translate3d(-50%, -50%, 0) scale3d(1, 1, 1)", opacity: 1}).queue(function (t) {
                    e(), t()
                }))
            }
        }, {
            key: "hide", value: function (t, e) {
                e = e || function () {
                }, nt.runAll(nt(t._mask, this.def).default({opacity: 1}, {opacity: 0}), nt(t._dialog, this.def).default({opacity: 1}, {opacity: 0}).queue(function (t) {
                    e(), t()
                }))
            }
        }]), e
    }(), Wi = {
        ".alert-dialog": "alert-dialog--*",
        ".alert-dialog-container": "alert-dialog-container--*",
        ".alert-dialog-title": "alert-dialog-title--*",
        ".alert-dialog-content": "alert-dialog-content--*",
        ".alert-dialog-footer": "alert-dialog-footer--*",
        ".alert-dialog-footer--rowfooter": "alert-dialog-footer--rowfooter--*",
        ".alert-dialog-button--rowfooter": "alert-dialog-button--rowfooter--*",
        ".alert-dialog-button--primal": "alert-dialog-button--primal--*",
        ".alert-dialog-button": "alert-dialog-button--*",
        "ons-alert-dialog-button": "alert-dialog-button--*",
        ".alert-dialog-mask": "alert-dialog-mask--*",
        ".text-input": "text-input--*"
    }, Ui = {
        none: qi, default: function () {
            return C.isAndroid() ? zi : Vi
        }, fade: function () {
            return C.isAndroid() ? zi : Vi
        }
    }, Xi = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return n(t, function () {
                return t._compile()
            }), t
        }

        return b(e, Ni), g(e, [{
            key: "_updateAnimatorFactory", value: function () {
                return new O({
                    animators: Ui,
                    baseClass: qi,
                    baseClassName: "AlertDialogAnimator",
                    defaultAnimation: this.getAttribute("animation")
                })
            }
        }, {
            key: "_compile", value: function () {
                N.prepare(this), this.style.display = "none", this.style.zIndex = 10001;
                var t = document.createDocumentFragment();
                if (!this._mask && !this._dialog) for (; this.firstChild;) t.appendChild(this.firstChild);
                if (!this._mask) {
                    var e = document.createElement("div");
                    e.classList.add("alert-dialog-mask"), this.insertBefore(e, this.children[0])
                }
                if (!this._dialog) {
                    var n = document.createElement("div");
                    n.classList.add("alert-dialog"), this.insertBefore(n, null)
                }
                if (!Q.findChild(this._dialog, ".alert-dialog-container")) {
                    var i = document.createElement("div");
                    i.classList.add("alert-dialog-container"), this._dialog.appendChild(i)
                }
                this._dialog.children[0].appendChild(t), this._dialog.style.zIndex = 20001, this._mask.style.zIndex = 2e4, B.initModifier(this, this._scheme)
            }
        }, {
            key: "_scheme", get: function () {
                return Wi
            }
        }, {
            key: "_mask", get: function () {
                return Q.findChild(this, ".alert-dialog-mask")
            }
        }, {
            key: "_dialog", get: function () {
                return Q.findChild(this, ".alert-dialog")
            }
        }, {
            key: "_titleElement", get: function () {
                return Q.findChild(this._dialog.children[0], ".alert-dialog-title")
            }
        }, {
            key: "_contentElement", get: function () {
                return Q.findChild(this._dialog.children[0], ".alert-dialog-content")
            }
        }], [{
            key: "registerAnimator", value: function (t, e) {
                e.prototype instanceof qi || Q.throwAnimator("AlertDialog"), Ui[t] = e
            }
        }, {
            key: "animators", get: function () {
                return Ui
            }
        }, {
            key: "AlertDialogAnimator", get: function () {
                return qi
            }
        }]), e
    }();
    c.AlertDialog = Xi, customElements.define("ons-alert-dialog", Xi);
    var Yi = function (t) {
        function e() {
            return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
        }

        return b(e, Ri), g(e, [{
            key: "_scheme", get: function () {
                return {"": "alert-dialog-button--*"}
            }
        }, {
            key: "_defaultClassName", get: function () {
                return "alert-dialog-button"
            }
        }, {
            key: "_rippleOpt", get: function () {
                return [this, void 0, {modifier: "light-gray"}]
            }
        }]), e
    }();
    c.AlertDialogButton = Yi, customElements.define("ons-alert-dialog-button", Yi);
    var Gi = {
        "": "back-button--*",
        ".back-button__icon": "back-button--*__icon",
        ".back-button__label": "back-button--*__label"
    }, $i = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return n(t, function () {
                t._compile()
            }), t._options = {}, t._boundOnClick = t._onClick.bind(t), t
        }

        return b(e, Pi), g(e, [{
            key: "_updateIcon", value: function () {
                (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q.findChild(this, ".back-button__icon")).innerHTML = "android" === N.getPlatform(this) || Q.hasModifier(this, "material") ? '<?xml version="1.0" encoding="UTF-8"?>\n<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <title>md-back-button-icon</title>\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id="toolbar-back-button" stroke="none" stroke-width="1" fill-rule="evenodd">\n        <g id="android" transform="translate(-32.000000, -32.000000)" fill-rule="nonzero">\n            <polygon id="md-back-button-icon" points="48 39 35.83 39 41.42 33.41 40 32 32 40 40 48 41.41 46.59 35.83 41 48 41"></polygon>\n        </g>\n    </g>\n</svg>\n' : '<?xml version="1.0" encoding="UTF-8"?>\n<svg width="13px" height="21px" viewBox="0 0 13 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <title>ios-back-button-icon</title>\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id="toolbar-back-button" stroke="none" stroke-width="1" fill-rule="evenodd">\n        <g id="ios" transform="translate(-34.000000, -30.000000)">\n            <polygon id="ios-back-button-icon" points="34 40.5 44.5 30 46.5 32 38 40.5 46.5 49 44.5 51"></polygon>\n        </g>\n    </g>\n</svg>\n'
            }
        }, {
            key: "_compile", value: function () {
                if (N.prepare(this), this.classList.add("back-button"), !Q.findChild(this, ".back-button__label")) {
                    for (var t = Q.create("span.back-button__label"); this.childNodes[0];) t.appendChild(this.childNodes[0]);
                    this.appendChild(t)
                }
                if (!Q.findChild(this, ".back-button__icon")) {
                    var e = Q.create("span.back-button__icon");
                    this._updateIcon(e), this.insertBefore(e, this.children[0])
                }
                Q.updateRipple(this, void 0, {
                    center: "",
                    size: "contain",
                    background: "transparent"
                }), B.initModifier(this, Gi)
            }
        }, {
            key: "_onClick", value: function () {
                if (this.onClick) this.onClick.apply(this); else {
                    var t = Q.findParent(this, "ons-navigator");
                    t && t.popPage(this.options)
                }
            }
        }, {
            key: "connectedCallback", value: function () {
                this.addEventListener("click", this._boundOnClick, !1)
            }
        }, {
            key: "attributeChangedCallback", value: function (t, e, n) {
                switch (t) {
                    case"class":
                        Q.restoreClass(this, "back-button", Gi);
                        break;
                    case"modifier":
                        B.onModifierChanged(e, n, this, Gi) && this._updateIcon()
                }
            }
        }, {
            key: "disconnectedCallback", value: function () {
                this.removeEventListener("click", this._boundOnClick, !1)
            }
        }, {
            key: "show", value: function () {
                this.style.display = "inline-block"
            }
        }, {
            key: "hide", value: function () {
                this.style.display = "none"
            }
        }, {
            key: "options", get: function () {
                return this._options
            }, set: function (t) {
                this._options = t
            }
        }], [{
            key: "observedAttributes", get: function () {
                return ["modifier", "class"]
            }
        }]), e
    }();
    c.BackButton = $i, customElements.define("ons-back-button", $i);
    var Ki = "bottom-bar", Qi = {"": "bottom-bar--*"}, Ji = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return t.classList.add(Ki), B.initModifier(t, Qi), t
        }

        return b(e, Pi), g(e, [{
            key: "attributeChangedCallback", value: function (t, e, n) {
                switch (t) {
                    case"class":
                        Q.restoreClass(this, Ki, Qi);
                        break;
                    case"modifier":
                        B.onModifierChanged(e, n, this, Qi)
                }
            }
        }], [{
            key: "observedAttributes", get: function () {
                return ["modifier", "class"]
            }
        }]), e
    }();
    c.BottomToolbar = Ji, customElements.define("ons-bottom-toolbar", Ji);
    var Zi = function (t) {
        function e() {
            return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
        }

        return b(e, Ri), g(e, [{
            key: "_scheme", get: function () {
                return {"": "button--*"}
            }
        }, {
            key: "_defaultClassName", get: function () {
                return "button"
            }
        }]), e
    }();
    c.Button = Zi, customElements.define("ons-button", Zi);
    var to = {"": "card--*", ".card__title": "card--*__title", ".card__content": "card--*__content"},
        eo = function (t) {
            function e() {
                p(this, e);
                var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return n(t, function () {
                    t._compile()
                }), t
            }

            return b(e, Pi), g(e, [{
                key: "_compile", value: function () {
                    for (var t = 0; t < this.children.length; t++) {
                        var e = this.children[t];
                        e.classList.contains("title") ? e.classList.add("card__title") : e.classList.contains("content") && e.classList.add("card__content")
                    }
                    N.prepare(this), this.classList.add("card"), B.initModifier(this, to)
                }
            }, {
                key: "attributeChangedCallback", value: function (t, e, n) {
                    switch (t) {
                        case"class":
                            Q.restoreClass(this, "card", to);
                            break;
                        case"modifier":
                            B.onModifierChanged(e, n, this, to)
                    }
                }
            }], [{
                key: "observedAttributes", get: function () {
                    return ["modifier", "class"]
                }
            }]), e
        }();
    c.Card = eo, customElements.define("ons-card", eo);
    var no = {"": "carousel-item--*"}, io = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return t.style.width = "100%", B.initModifier(t, no), t
        }

        return b(e, Pi), g(e, [{
            key: "attributeChangedCallback", value: function (t, e, n) {
                if ("modifier" === t) return B.onModifierChanged(e, n, this, no)
            }
        }], [{
            key: "observedAttributes", get: function () {
                return ["modifier"]
            }
        }]), e
    }();
    c.CarouselItem = io, customElements.define("ons-carousel-item", io);
    var oo = {
        vertical: {axis: "Y", size: "Height", dir: ["up", "down"], t3d: ["0px, ", "px, 0px"]},
        horizontal: {axis: "X", size: "Width", dir: ["left", "right"], t3d: ["", "px, 0px, 0px"]}
    }, ro = function () {
        function t(e) {
            var n = this;
            p(this, t);
            "getInitialIndex getBubbleWidth isVertical isOverScrollable isCentered\n    isAutoScrollable refreshHook preChangeHook postChangeHook overScrollHook".split(/\s+/).forEach(function (t) {
                return n[t] = e[t] || function () {
                    return !1
                }
            }), this.getElement = e.getElement, this.scrollHook = e.scrollHook, this.itemSize = e.itemSize || "100%", this.getAutoScrollRatio = function () {
                var t = e.getAutoScrollRatio && e.getAutoScrollRatio.apply(e, arguments);
                return ((t = "number" == typeof t && t == t ? t : .5) < 0 || t > 1) && Q.throw("Invalid auto-scroll-ratio " + t + ". Must be between 0 and 1"), t
            }, this.shouldBlock = "other" === Q.globals.actualMobileOS, this.onDragStart = this.onDragStart.bind(this), this.onDrag = this.onDrag.bind(this), this.onDragEnd = this.onDragEnd.bind(this), this.onResize = this.onResize.bind(this), this._shouldFixScroll = "ios" === Q.globals.actualMobileOS
        }

        return g(t, [{
            key: "init", value: function () {
                var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.swipeable,
                    i = e.autoRefresh;
                this.initialized = !0, this.target = this.getElement().children[0], this.blocker = this.getElement().children[1], this.target && this.blocker || Q.throw('Expected "target" and "blocker" elements to exist before initializing Swiper'), this.shouldBlock || (this.blocker.style.display = "none"), this.getElement().classList.add("ons-swiper"), this.target.classList.add("ons-swiper-target"), this.blocker.classList.add("ons-swiper-blocker"), this._gestureDetector = new st(this.getElement(), {
                    dragMinDistance: 1,
                    dragLockToAxis: !0,
                    passive: !this._shouldFixScroll
                }), this._mutationObserver = new MutationObserver(function () {
                    return t.refresh()
                }), this.updateSwipeable(n), this.updateAutoRefresh(i), this._scroll = this._offset = this._lastActiveIndex = 0, this._updateLayout(), this._setupInitialIndex(), setImmediate(function () {
                    return t.initialized && t._setupInitialIndex()
                }), window === window.parent && 0 !== this.offsetHeight || window.requestAnimationFrame(function () {
                    return t.initialized && t.onResize()
                })
            }
        }, {
            key: "dispose", value: function () {
                this.initialized = !1, this.updateSwipeable(!1), this.updateAutoRefresh(!1), this._gestureDetector && this._gestureDetector.dispose(), this.target = this.blocker = this._gestureDetector = this._mutationObserver = null, this.setupResize(!1)
            }
        }, {
            key: "onResize", value: function () {
                var t = this._scroll / this.targetSize;
                this._reset(), this.setActiveIndex(t), this.refresh()
            }
        }, {
            key: "_calculateItemSize", value: function () {
                var t = this.itemSize.match(/^(\d+)(px|%)/);
                t || Q.throw("Invalid state: swiper's size unit must be '%' or 'px'");
                var e = parseInt(t[1], 10);
                return "%" === t[2] ? Math.round(e / 100 * this.targetSize) : e
            }
        }, {
            key: "_setupInitialIndex", value: function () {
                this._reset(), this._lastActiveIndex = Math.max(Math.min(Number(this.getInitialIndex()), this.itemCount), 0), this._scroll = this._offset + this.itemNumSize * this._lastActiveIndex, this._scrollTo(this._scroll)
            }
        }, {
            key: "_setSwiping", value: function (t) {
                this.target.classList.toggle("swiping", t)
            }
        }, {
            key: "setActiveIndex", value: function (t) {
                var e = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this._setSwiping(!0), t = Math.max(0, Math.min(t, this.itemCount - 1));
                var i = Math.max(0, Math.min(this.maxScroll, this._offset + this.itemNumSize * t));
                if (C.isUIWebView()) {
                    var o = function (t) {
                        return Array.prototype.concat.apply([], t)
                    }(Q.arrayFrom(this.target.children).map(function (t) {
                        return Q.arrayFrom(t.children).filter(function (t) {
                            return t.classList.contains("page__content")
                        })
                    })), r = new Map;
                    return new Promise(function (t) {
                        o.forEach(function (t) {
                            r.set(t, t.getAttribute("class")), t.classList.add("page__content--suppress-layer-creation")
                        }), requestAnimationFrame(t)
                    }).then(function () {
                        return e._changeTo(i, n)
                    }).then(function () {
                        return new Promise(function (t) {
                            o.forEach(function (t) {
                                t.setAttribute("class", r.get(t))
                            }), requestAnimationFrame(t)
                        })
                    })
                }
                return this._changeTo(i, n)
            }
        }, {
            key: "getActiveIndex", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._scroll;
                t -= this._offset;
                var e = this.itemCount, n = this.itemNumSize;
                if (0 === this.itemNumSize || !Q.isInteger(t)) return this._lastActiveIndex;
                if (t <= 0) return 0;
                for (var i = 0; i < e; i++) if (n * i <= t && n * (i + 1) > t) return i;
                return e - 1
            }
        }, {
            key: "setupResize", value: function (t) {
                window[(t ? "add" : "remove") + "EventListener"]("resize", this.onResize, !0)
            }
        }, {
            key: "show", value: function () {
                var t = this;
                this.setupResize(!0), this.onResize(), setTimeout(function () {
                    return t.target && t.target.classList.add("active")
                }, 1e3 / 60)
            }
        }, {
            key: "hide", value: function () {
                this.setupResize(!1), this.target.classList.remove("active")
            }
        }, {
            key: "updateSwipeable", value: function (t) {
                if (this._gestureDetector) {
                    var e = t ? "on" : "off";
                    this._gestureDetector[e]("drag", this.onDrag), this._gestureDetector[e]("dragstart", this.onDragStart), this._gestureDetector[e]("dragend", this.onDragEnd)
                }
            }
        }, {
            key: "updateAutoRefresh", value: function (t) {
                this._mutationObserver && (t ? this._mutationObserver.observe(this.target, {childList: !0}) : this._mutationObserver.disconnect())
            }
        }, {
            key: "updateItemSize", value: function (t) {
                this.itemSize = t || "100%", this.refresh()
            }
        }, {
            key: "toggleBlocker", value: function (t) {
                this.blocker.style.pointerEvents = t ? "auto" : "none"
            }
        }, {
            key: "_canConsumeGesture", value: function (t) {
                var e = t.direction, n = 0 === this._scroll && !this.isOverScrollable(),
                    i = this._scroll === this.maxScroll && !this.isOverScrollable();
                return this.isVertical() ? "down" === e && !n || "up" === e && !i : "right" === e && !n || "left" === e && !i
            }
        }, {
            key: "onDragStart", value: function (t) {
                var e = this;
                if (this._ignoreDrag = t.consumed || !Q.isValidGesture(t), !this._ignoreDrag) {
                    var n = t.consume;
                    if (t.consume = function () {
                        n && n(), e._ignoreDrag = !0
                    }, this._canConsumeGesture(t.gesture)) {
                        var i = t.gesture.center && t.gesture.center.clientX || 0, o = this.getBubbleWidth() || 0,
                            r = function () {
                                n && n(), t.consumed = !0, e._started = !0, e.shouldBlock && e.toggleBlocker(!0), e._setSwiping(!0), Q.iosPreventScroll(e._gestureDetector)
                            };
                        i < o || i > this.targetSize - o ? setImmediate(function () {
                            return !e._ignoreDrag && r()
                        }) : r()
                    }
                }
            }
        }, {
            key: "onDrag", value: function (t) {
                t.gesture && !this._ignoreDrag && this._started && (this._continued = !0, t.stopPropagation(), this._scrollTo(this._scroll - this._getDelta(t), {throttle: !0}))
            }
        }, {
            key: "onDragEnd", value: function (t) {
                if (this._started = !1, t.gesture && !this._ignoreDrag && this._continued) {
                    this._continued = !1, t.stopPropagation();
                    var e = this._scroll - this._getDelta(t), n = this._normalizeScroll(e);
                    e === n ? this._startMomentumScroll(e, t) : this._killOverScroll(n), this.shouldBlock && this.toggleBlocker(!1)
                } else this._ignoreDrag = !0
            }
        }, {
            key: "_startMomentumScroll", value: function (t, e) {
                var n = this._getVelocity(e),
                    i = e.gesture.interimDirection === this.dM.dir[this._getDelta(e) < 0 ? 0 : 1],
                    o = this._getAutoScroll(t, n, i), r = Math.abs(o - t) / (n + .01) / 1e3;
                r = Math.min(.25, Math.max(.1, r)), this._changeTo(o, {
                    swipe: !0,
                    animationOptions: {duration: r, timing: "cubic-bezier(.4, .7, .5, 1)"}
                })
            }
        }, {
            key: "_killOverScroll", value: function (t) {
                var e = this;
                this._scroll = t;
                var n = this.dM.dir[Number(t > 0)], i = function () {
                    return e._changeTo(t, {animationOptions: {duration: .4, timing: "cubic-bezier(.1, .4, .1, 1)"}})
                };
                this.overScrollHook({direction: n, killOverScroll: i}) || i()
            }
        }, {
            key: "_changeTo", value: function (t) {
                var e = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = {
                    activeIndex: this.getActiveIndex(t),
                    lastActiveIndex: this._lastActiveIndex,
                    swipe: n.swipe || !1
                }, o = i.activeIndex !== i.lastActiveIndex, r = !!o && this.preChangeHook(i);
                return this._scroll = r ? this._offset + i.lastActiveIndex * this.itemNumSize : t, this._lastActiveIndex = r ? i.lastActiveIndex : i.activeIndex, this._scrollTo(this._scroll, n).then(function () {
                    if (t !== e._scroll || r) {
                        if (n.reject) return e._setSwiping(!1), Promise.reject("Canceled")
                    } else e._setSwiping(!1), o && e.postChangeHook(i)
                })
            }
        }, {
            key: "_scrollTo", value: function (t) {
                var e = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (n.throttle) {
                    if (t < 0) t = this.isOverScrollable() ? Math.round(.35 * t) : 0; else {
                        var i = this.maxScroll;
                        i < t && (t = this.isOverScrollable() ? i + Math.round(.35 * (t - i)) : i)
                    }
                }
                var o = "none" === n.animation ? {} : n.animationOptions;
                return this.scrollHook && this.itemNumSize > 0 && this.scrollHook((t / this.itemNumSize).toFixed(2), n.animationOptions || {}), new Promise(function (n) {
                    return nt(e.target).queue({transform: e._getTransform(t)}, o).play(n)
                })
            }
        }, {
            key: "_getAutoScroll", value: function (t, e, n) {
                var i = this.maxScroll, o = this._offset, r = this.itemNumSize;
                if (!this.isAutoScrollable()) return Math.max(0, Math.min(i, t));
                for (var a = [], s = o; s < i; s += r) a.push(s);
                a.push(i);
                var l = (a = a.sort(function (e, n) {
                    return Math.abs(e - t) - Math.abs(n - t)
                }).filter(function (t, e) {
                    return !e || t !== a[e - 1]
                }))[0], u = this._lastActiveIndex * r + o, c = Math.abs(t - u) / r;
                return c <= this.getAutoScrollRatio(n, e, r) ? l = u : c < 1 && a[0] === u && a.length > 1 && (l = a[1]), Math.max(0, Math.min(i, l))
            }
        }, {
            key: "_reset", value: function () {
                this._targetSize = this._itemNumSize = void 0
            }
        }, {
            key: "_normalizeScroll", value: function (t) {
                return Math.max(Math.min(t, this.maxScroll), 0)
            }
        }, {
            key: "refresh", value: function () {
                if (this._reset(), this._updateLayout(), Q.isInteger(this._scroll)) {
                    var t = this._normalizeScroll(this._scroll);
                    t !== this._scroll ? this._killOverScroll(t) : this._changeTo(t)
                } else this._setupInitialIndex();
                this.refreshHook()
            }
        }, {
            key: "_getDelta", value: function (t) {
                return t.gesture["delta" + this.dM.axis]
            }
        }, {
            key: "_getVelocity", value: function (t) {
                return t.gesture["velocity" + this.dM.axis]
            }
        }, {
            key: "_getTransform", value: function (t) {
                return "translate3d(" + this.dM.t3d[0] + -t + this.dM.t3d[1] + ")"
            }
        }, {
            key: "_updateLayout", value: function () {
                this.dM = oo[this.isVertical() ? "vertical" : "horizontal"], this.target.classList.toggle("ons-swiper-target--vertical", this.isVertical());
                for (var t = this.target.children[0]; t; t = t.nextElementSibling) t.style[this.dM.size.toLowerCase()] = this.itemSize;
                this.isCentered() && (this._offset = (this.targetSize - this.itemNumSize) / -2 || 0)
            }
        }, {
            key: "itemCount", get: function () {
                return this.target.children.length
            }
        }, {
            key: "itemNumSize", get: function () {
                return "number" == typeof this._itemNumSize && this._itemNumSize == this._itemNumSize || (this._itemNumSize = this._calculateItemSize()), this._itemNumSize
            }
        }, {
            key: "maxScroll", get: function () {
                var t = this.itemCount * this.itemNumSize - this.targetSize;
                return Math.ceil(t < 0 ? 0 : t)
            }
        }, {
            key: "targetSize", get: function () {
                return this._targetSize || (this._targetSize = this.target["offset" + this.dM.size]), this._targetSize
            }
        }]), t
    }(), ao = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return n(t, function () {
                return t._compile()
            }), t
        }

        return b(e, Pi), g(e, [{
            key: "_compile", value: function () {
                var t = this.children[0] && "ONS-CAROUSEL-ITEM" !== this.children[0].tagName && this.children[0] || document.createElement("div");
                if (!t.parentNode) {
                    for (; this.firstChild;) t.appendChild(this.firstChild);
                    this.appendChild(t)
                }
                !this.children[1] && this.appendChild(document.createElement("div")), this.appendChild = this.appendChild.bind(t), this.insertBefore = this.insertBefore.bind(t)
            }
        }, {
            key: "connectedCallback", value: function () {
                var t = this;
                this._swiper || (this._swiper = new ro({
                    getElement: function () {
                        return t
                    },
                    getInitialIndex: function () {
                        return t.getAttribute("initial-index")
                    },
                    getAutoScrollRatio: function () {
                        return t.autoScrollRatio
                    },
                    isVertical: function () {
                        return t.vertical
                    },
                    isOverScrollable: function () {
                        return t.overscrollable
                    },
                    isCentered: function () {
                        return t.centered
                    },
                    isAutoScrollable: function () {
                        return t.autoScroll
                    },
                    itemSize: this.itemSize,
                    overScrollHook: this._onOverScroll.bind(this),
                    preChangeHook: this._onChange.bind(this, "prechange"),
                    postChangeHook: this._onChange.bind(this, "postchange"),
                    refreshHook: this._onRefresh.bind(this),
                    scrollHook: function () {
                        return t._onSwipe && t._onSwipe.apply(t, arguments)
                    }
                }), n(this, function () {
                    return t._swiper.init({
                        swipeable: t.hasAttribute("swipeable"),
                        autoRefresh: t.hasAttribute("auto-refresh")
                    })
                }))
            }
        }, {
            key: "disconnectedCallback", value: function () {
                this._swiper && this._swiper.initialized && (this._swiper.dispose(), this._swiper = null)
            }
        }, {
            key: "attributeChangedCallback", value: function (t, e, n) {
                if (this._swiper) switch (t) {
                    case"swipeable":
                        this._swiper.updateSwipeable(this.hasAttribute("swipeable"));
                        break;
                    case"auto-refresh":
                        this._swiper.updateAutoRefresh(this.hasAttribute("auto-refresh"));
                        break;
                    case"item-height":
                        this.vertical && this._swiper.updateItemSize(this.itemSize);
                        break;
                    case"item-width":
                        this.vertical || this._swiper.updateItemSize(this.itemSize);
                        break;
                    case"direction":
                        this._swiper.refresh()
                }
            }
        }, {
            key: "_show", value: function () {
                this._swiper.show()
            }
        }, {
            key: "_hide", value: function () {
                this._swiper.hide()
            }
        }, {
            key: "_onOverScroll", value: function (t) {
                var e = t.direction, n = t.killOverScroll, i = !1;
                return Q.triggerElementEvent(this, "overscroll", {
                    carousel: this,
                    activeIndex: this.getActiveIndex(),
                    direction: e,
                    waitToReturn: function (t) {
                        i = !0, t.then(n)
                    }
                }), i
            }
        }, {
            key: "_onChange", value: function (t, e) {
                var n = e.activeIndex, i = e.lastActiveIndex;
                Q.triggerElementEvent(this, t, {carousel: this, activeIndex: n, lastActiveIndex: i})
            }
        }, {
            key: "_onRefresh", value: function () {
                Q.triggerElementEvent(this, "refresh", {carousel: this})
            }
        }, {
            key: "setActiveIndex", value: function (t) {
                var e = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return n = _({
                    animation: this.getAttribute("animation"),
                    animationOptions: this.hasAttribute("animation-options") ? Q.animationOptionsParse(this.getAttribute("animation-options")) : {
                        duration: .3,
                        timing: "cubic-bezier(.4, .7, .5, 1)"
                    }
                }, n), this._swiper.setActiveIndex(t, n).then(function () {
                    return n.callback instanceof Function && n.callback(e), Promise.resolve(e)
                })
            }
        }, {
            key: "getActiveIndex", value: function () {
                return this._swiper.getActiveIndex()
            }
        }, {
            key: "next", value: function (t) {
                return this.setActiveIndex(this.getActiveIndex() + 1, t)
            }
        }, {
            key: "prev", value: function (t) {
                return this.setActiveIndex(this.getActiveIndex() - 1, t)
            }
        }, {
            key: "first", value: function (t) {
                return this.setActiveIndex(0, t)
            }
        }, {
            key: "last", value: function (t) {
                this.setActiveIndex(Math.max(this.itemCount - 1, 0), t)
            }
        }, {
            key: "refresh", value: function () {
                this._swiper.refresh()
            }
        }, {
            key: "itemCount", get: function () {
                return this._swiper.itemCount
            }
        }, {
            key: "swipeable", get: function () {
                return this.hasAttribute("swipeable")
            }, set: function (t) {
                return Q.toggleAttribute(this, "swipeable", t)
            }
        }, {
            key: "onSwipe", get: function () {
                return this._onSwipe
            }, set: function (t) {
                !t || t instanceof Function || Q.throw('"onSwipe" must be a function'), this._onSwipe = t
            }
        }, {
            key: "autoScroll", get: function () {
                return this.hasAttribute("auto-scroll")
            }, set: function (t) {
                return Q.toggleAttribute(this, "auto-scroll", t)
            }
        }, {
            key: "vertical", get: function () {
                return "vertical" === this.getAttribute("direction")
            }
        }, {
            key: "itemSize", get: function () {
                var t = (this.getAttribute("item-" + (this.vertical ? "height" : "width")) || "").trim();
                return t.match(/^\d+(px|%)$/) ? t : "100%"
            }
        }, {
            key: "autoScrollRatio", get: function () {
                return parseFloat(this.getAttribute("auto-scroll-ratio"))
            }, set: function (t) {
                this.setAttribute("auto-scroll-ratio", t)
            }
        }, {
            key: "disabled", get: function () {
                return this.hasAttribute("disabled")
            }, set: function (t) {
                return Q.toggleAttribute(this, "disabled", t)
            }
        }, {
            key: "overscrollable", get: function () {
                return this.hasAttribute("overscrollable")
            }, set: function (t) {
                return Q.toggleAttribute(this, "overscrollable", t)
            }
        }, {
            key: "centered", get: function () {
                return this.hasAttribute("centered")
            }, set: function (t) {
                return Q.toggleAttribute(this, "centered", t)
            }
        }], [{
            key: "observedAttributes", get: function () {
                return ["swipeable", "auto-refresh", "direction", "item-height", "item-width"]
            }
        }, {
            key: "events", get: function () {
                return ["postchange", "refresh", "overscroll"]
            }
        }]), e
    }();
    c.Carousel = ao, customElements.define("ons-carousel", ao);
    var so = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return t.getAttribute("width") && t._updateWidth(), t
        }

        return b(e, Pi), g(e, [{
            key: "attributeChangedCallback", value: function (t, e, n) {
                "width" === t && this._updateWidth()
            }
        }, {
            key: "_updateWidth", value: function () {
                var t = this.getAttribute("width");
                t ? (t = t.trim().match(/^\d+$/) ? t + "%" : t, d(this, {
                    flex: "0 0 " + t,
                    maxWidth: t
                })) : d.clear(this, "flex maxWidth")
            }
        }], [{
            key: "observedAttributes", get: function () {
                return ["width"]
            }
        }]), e
    }();
    c.Col = so, customElements.define("ons-col", so);
    var lo = function (t) {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.timing,
                    i = void 0 === n ? "linear" : n, o = t.delay, r = void 0 === o ? 0 : o, a = t.duration,
                    s = void 0 === a ? .2 : a;
                return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
                    timing: i,
                    delay: r,
                    duration: s
                }))
            }

            return b(e, Ti), g(e, [{
                key: "show", value: function (t, e) {
                    e()
                }
            }, {
                key: "hide", value: function (t, e) {
                    e()
                }
            }]), e
        }(), uo = function (t) {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.timing,
                    i = void 0 === n ? "ease-in-out" : n, o = t.delay, r = void 0 === o ? 0 : o, a = t.duration,
                    s = void 0 === a ? .3 : a;
                return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
                    timing: i,
                    delay: r,
                    duration: s
                }))
            }

            return b(e, lo), g(e, [{
                key: "show", value: function (t, e) {
                    e = e || function () {
                    }, nt.runAll(nt(t._mask, this.def).default({opacity: 0}, {opacity: 1}), nt(t._dialog, this.def).default({
                        transform: "translate3d(-50%, -60%, 0)",
                        opacity: 0
                    }, {transform: "translate3d(-50%, -50%, 0)", opacity: 1}).queue(function (t) {
                        e(), t()
                    }))
                }
            }, {
                key: "hide", value: function (t, e) {
                    e = e || function () {
                    }, nt.runAll(nt(t._mask, this.def).default({opacity: 1}, {opacity: 0}), nt(t._dialog, this.def).default({
                        transform: "translate3d(-50%, -50%, 0)",
                        opacity: 1
                    }, {transform: "translate3d(-50%, -60%, 0)", opacity: 0}).queue(function (t) {
                        e(), t()
                    }))
                }
            }]), e
        }(), co = function (t) {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.timing,
                    i = void 0 === n ? "ease-in-out" : n, o = t.delay, r = void 0 === o ? 0 : o, a = t.duration,
                    s = void 0 === a ? .2 : a;
                p(this, e);
                var l = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {timing: i, delay: r, duration: s}));
                return l.bodyHeight = document.body.clientHeight, l
            }

            return b(e, lo), g(e, [{
                key: "show", value: function (t, e) {
                    e = e || function () {
                    }, nt.runAll(nt(t._mask, this.def).default({opacity: 0}, {opacity: 1}), nt(t._dialog, this.def).default({transform: "translate3d(-50%, " + (this.bodyHeight / 2 - 1) + "px, 0)"}, {transform: "translate3d(-50%, -50%, 0)"}).queue(function (t) {
                        e(), t()
                    }))
                }
            }, {
                key: "hide", value: function (t, e) {
                    e = e || function () {
                    }, nt.runAll(nt(t._mask, this.def).default({opacity: 1}, {opacity: 0}), nt(t._dialog, this.def).default({transform: "translate3d(-50%, -50%, 0)"}, {transform: "translate3d(-50%, " + (this.bodyHeight / 2 - 1) + "px, 0)"}).queue(function (t) {
                        e(), t()
                    }))
                }
            }]), e
        }(), ho = {".dialog": "dialog--*", ".dialog-container": "dialog-container--*", ".dialog-mask": "dialog-mask--*"},
        fo = {
            default: function () {
                return C.isAndroid() ? uo : co
            }, slide: function (t) {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.timing,
                        i = void 0 === n ? "cubic-bezier(.1, .7, .4, 1)" : n, o = t.delay, r = void 0 === o ? 0 : o,
                        a = t.duration, s = void 0 === a ? .2 : a;
                    p(this, e);
                    var l = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
                        timing: i,
                        delay: r,
                        duration: s
                    }));
                    return l.bodyHeight = document.body.clientHeight, l
                }

                return b(e, lo), g(e, [{
                    key: "show", value: function (t, e) {
                        e = e || function () {
                        }, nt.runAll(nt(t._mask, this.def).default({opacity: 0}, {opacity: 1}), nt(t._dialog, this.def).default({transform: "translate3d(-50%, " + (-this.bodyHeight / 2 + 1 - t._dialog.clientHeight) + "px, 0)"}, {transform: "translate3d(-50%, -50%, 0)"}).queue(function (t) {
                            e(), t()
                        }))
                    }
                }, {
                    key: "hide", value: function (t, e) {
                        e = e || function () {
                        }, nt.runAll(nt(t._mask, this.def).default({opacity: 1}, {opacity: 0}), nt(t._dialog, this.def).default({transform: "translate3d(-50%, -50%, 0)"}, {transform: "translate3d(-50%, " + (-this.bodyHeight / 2 + 1 - t._dialog.clientHeight) + "px, 0)"}).queue(function (t) {
                            e(), t()
                        }))
                    }
                }]), e
            }(), none: lo
        }, po = function (t) {
            function e() {
                p(this, e);
                var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return n(t, function () {
                    return t._compile()
                }), t
            }

            return b(e, Ni), g(e, [{
                key: "_updateAnimatorFactory", value: function () {
                    return new O({
                        animators: fo,
                        baseClass: lo,
                        baseClassName: "DialogAnimator",
                        defaultAnimation: this.getAttribute("animation")
                    })
                }
            }, {
                key: "_compile", value: function () {
                    if (N.prepare(this), this.style.display = "none", this.style.zIndex = 10001, !this._dialog) {
                        var t = document.createElement("div");
                        t.classList.add("dialog");
                        var e = document.createElement("div");
                        for (e.classList.add("dialog-container"); this.firstChild;) e.appendChild(this.firstChild);
                        t.appendChild(e), this.appendChild(t)
                    }
                    if (!this._mask) {
                        var n = document.createElement("div");
                        n.classList.add("dialog-mask"), this.insertBefore(n, this.firstChild)
                    }
                    this._dialog.style.zIndex = 20001, this._mask.style.zIndex = 2e4, this.setAttribute("status-bar-fill", ""), B.initModifier(this, this._scheme)
                }
            }, {
                key: "_scheme", get: function () {
                    return ho
                }
            }, {
                key: "_mask", get: function () {
                    return Q.findChild(this, ".dialog-mask")
                }
            }, {
                key: "_dialog", get: function () {
                    return Q.findChild(this, ".dialog")
                }
            }], [{
                key: "registerAnimator", value: function (t, e) {
                    e.prototype instanceof lo || Q.throwAnimator("Dialog"), fo[t] = e
                }
            }, {
                key: "animators", get: function () {
                    return fo
                }
            }, {
                key: "DialogAnimator", get: function () {
                    return lo
                }
            }]), e
        }();
    c.Dialog = po, customElements.define("ons-dialog", po);
    var go = "fab", mo = {"": "fab--*", ".fab__icon": "fab--*__icon"}, _o = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return t._hide(), t.classList.add(go), n(t, function () {
                t._compile()
            }), t
        }

        return b(e, Pi), g(e, [{
            key: "_compile", value: function () {
                if (N.prepare(this), !Q.findChild(this, ".fab__icon")) {
                    var t = document.createElement("span");
                    t.classList.add("fab__icon"), Q.arrayFrom(this.childNodes).forEach(function (e) {
                        e.tagName && "ons-ripple" === e.tagName.toLowerCase() || t.appendChild(e)
                    }), this.appendChild(t)
                }
                this._updateRipple(), B.initModifier(this, mo), this._updatePosition()
            }
        }, {
            key: "connectedCallback", value: function () {
                var t = this;
                setImmediate(function () {
                    return t._show()
                })
            }
        }, {
            key: "attributeChangedCallback", value: function (t, e, n) {
                switch (t) {
                    case"class":
                        Q.restoreClass(this, go, mo);
                        break;
                    case"modifier":
                        B.onModifierChanged(e, n, this, mo);
                        break;
                    case"ripple":
                        this._updateRipple();
                        break;
                    case"position":
                        this._updatePosition()
                }
            }
        }, {
            key: "_show", value: function () {
                this._manuallyHidden || this._toggle(!0)
            }
        }, {
            key: "_hide", value: function () {
                var t = this;
                setImmediate(function () {
                    return t._toggle(!1)
                })
            }
        }, {
            key: "_updateRipple", value: function () {
                Q.updateRipple(this)
            }
        }, {
            key: "_updatePosition", value: function () {
                var t = this.getAttribute("position");
                switch (this.classList.remove("fab--top__left", "fab--bottom__right", "fab--bottom__left", "fab--top__right", "fab--top__center", "fab--bottom__center"), t) {
                    case"top right":
                    case"right top":
                        this.classList.add("fab--top__right");
                        break;
                    case"top left":
                    case"left top":
                        this.classList.add("fab--top__left");
                        break;
                    case"bottom right":
                    case"right bottom":
                        this.classList.add("fab--bottom__right");
                        break;
                    case"bottom left":
                    case"left bottom":
                        this.classList.add("fab--bottom__left");
                        break;
                    case"center top":
                    case"top center":
                        this.classList.add("fab--top__center");
                        break;
                    case"center bottom":
                    case"bottom center":
                        this.classList.add("fab--bottom__center")
                }
            }
        }, {
            key: "show", value: function () {
                this.toggle(!0)
            }
        }, {
            key: "hide", value: function () {
                this.toggle(!1)
            }
        }, {
            key: "toggle", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !this.visible;
                this._manuallyHidden = !t, this._toggle(t)
            }
        }, {
            key: "_toggle", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !this.visible,
                    e = (this.getAttribute("position") || "").indexOf("bottom") >= 0 ? "translate3d(0px, -" + (Q.globals.fabOffset || 0) + "px, 0px)" : "";
                d(this, {transform: e + " scale(" + Number(t) + ")"})
            }
        }, {
            key: "disabled", set: function (t) {
                return Q.toggleAttribute(this, "disabled", t)
            }, get: function () {
                return this.hasAttribute("disabled")
            }
        }, {
            key: "visible", get: function () {
                return -1 === this.style.transform.indexOf("scale(0)") && "none" !== this.style.display
            }
        }], [{
            key: "observedAttributes", get: function () {
                return ["modifier", "ripple", "position", "class"]
            }
        }]), e
    }();
    c.Fab = _o, customElements.define("ons-fab", _o);
    var vo = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return t._gestureDetector = new st(t, {passive: !0}), t
        }

        return b(e, Pi), e
    }();
    c.GestureDetector = vo, customElements.define("ons-gesture-detector", vo);
    var bo = "fa", yo = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return n(t, function () {
                t._compile()
            }), t
        }

        return b(e, Pi), g(e, [{
            key: "attributeChangedCallback", value: function (t, e, n) {
                this._cleanClassAttribute("icon" === t ? e : this.getAttribute("icon"), "modifier" === t ? e : void 0), this._update()
            }
        }, {
            key: "_compile", value: function () {
                N.prepare(this), this._update()
            }
        }, {
            key: "_update", value: function () {
                var t = this, e = this._buildClassAndStyle(this._parseAttr("icon"), this._parseAttr("size")),
                    n = e.classList, i = e.style;
                Q.extend(this.style, i), n.forEach(function (e) {
                    return t.classList.add(e)
                })
            }
        }, {
            key: "_parseAttr", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getAttribute("modifier") || "",
                    n = (this.getAttribute(t) || t || "").split(/\s*,\s*/), i = n[0], o = n[1];
                return o = (o || "").split(/\s*:\s*/), (e && RegExp("(^|\\s+)" + o[0] + "($|\\s+)", "i").test(e) ? o[1] : i) || ""
            }
        }, {
            key: "_cleanClassAttribute", value: function (t, e) {
                var n = this, i = this._prefixIcon(this._parseAttr(t, e)), o = i.className, r = i.prefix,
                    a = o !== r ? "|" + r + "$|" + r + "-" : "|" + o + "$" || "",
                    s = new RegExp("^(fa$|fa-|ion-|zmdi$|zmdi-|ons-icon--" + a + ")");
                Q.arrayFrom(this.classList).filter(function (t) {
                    return s.test(t)
                }).forEach(function (t) {
                    return n.classList.remove(t)
                })
            }
        }, {
            key: "_prefixIcon", value: function (t) {
                var e = bo + (bo ? "-" : "") + t;
                return {className: e, prefix: e.split("-")[0]}
            }
        }, {
            key: "_buildClassAndStyle", value: function (t, e) {
                var n = ["ons-icon"], i = {};
                if (0 === t.indexOf("ion-")) n.push(t), n.push("ons-icon--ion"); else if (0 === t.indexOf("fa-")) n.push(t), this.classList.contains("far") || this.classList.contains("fab") || this.classList.contains("fal") || n.push("fa"); else if (0 === t.indexOf("md-")) n.push("zmdi"), n.push("zmdi-" + t.split(/-(.+)?/)[1]); else {
                    var o = this._prefixIcon(t), r = o.className, a = o.prefix;
                    a && n.push(a), r && n.push(r)
                }
                return e.match(/^[1-5]x|lg$/) ? (n.push("ons-icon--" + e), this.style.removeProperty("font-size")) : i.fontSize = e, {
                    classList: n,
                    style: i
                }
            }
        }], [{
            key: "setAutoPrefix", value: function (t) {
                bo = t ? "string" == typeof t && t || "fa" : ""
            }
        }, {
            key: "observedAttributes", get: function () {
                return ["icon", "size", "modifier", "class"]
            }
        }]), e
    }();
    c.Icon = yo, customElements.define("ons-icon", yo);
    var ko = function () {
        function t(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            p(this, t), "object" === (void 0 === e ? "undefined" : f(e)) && null !== e || Q.throw('"delegate" parameter must be an object'), this._userDelegate = e, n instanceof Element || null === n || Q.throw('"templateElement" parameter must be an instance of Element or null'), this._templateElement = n
        }

        return g(t, [{
            key: "hasRenderFunction", value: function () {
                return this._userDelegate._render instanceof Function
            }
        }, {
            key: "_render", value: function () {
                this._userDelegate._render.apply(this._userDelegate, arguments)
            }
        }, {
            key: "loadItemElement", value: function (t, e) {
                if (this._userDelegate.loadItemElement instanceof Function) this._userDelegate.loadItemElement(t, e); else {
                    var n = this._userDelegate.createItemContent(t, this._templateElement);
                    n instanceof Element || Q.throw('"createItemContent" must return an instance of Element'), e({element: n})
                }
            }
        }, {
            key: "countItems", value: function () {
                var t = this._userDelegate.countItems();
                return "number" != typeof t && Q.throw('"countItems" must return a number'), t
            }
        }, {
            key: "updateItem", value: function (t, e) {
                this._userDelegate.updateItemContent instanceof Function && this._userDelegate.updateItemContent(t, e)
            }
        }, {
            key: "calculateItemHeight", value: function (t) {
                if (this._userDelegate.calculateItemHeight instanceof Function) {
                    var e = this._userDelegate.calculateItemHeight(t);
                    return "number" != typeof e && Q.throw('"calculateItemHeight" must return a number'), e
                }
                return 0
            }
        }, {
            key: "destroyItem", value: function (t, e) {
                this._userDelegate.destroyItem instanceof Function && this._userDelegate.destroyItem(t, e)
            }
        }, {
            key: "destroy", value: function () {
                this._userDelegate.destroy instanceof Function && this._userDelegate.destroy(), this._userDelegate = this._templateElement = null
            }
        }, {
            key: "itemHeight", get: function () {
                return this._userDelegate.itemHeight
            }
        }]), t
    }(), wo = function () {
        function t(e, n) {
            p(this, t), n instanceof ko || Q.throw('"delegate" parameter must be an instance of LazyRepeatDelegate'), this._wrapperElement = e, this._delegate = n, this._insertIndex = this._wrapperElement.children[0] && "ONS-LAZY-REPEAT" === this._wrapperElement.children[0].tagName ? 1 : 0, "ons-list" === e.tagName.toLowerCase() && e.classList.add("lazy-list"), this._pageContent = this._findPageContentElement(e), this._pageContent || Q.throw("LazyRepeat must be descendant of a Page element"), this.lastScrollTop = this._pageContent.scrollTop, this.padding = 0, this._topPositions = [0], this._renderedItems = {}, this._delegate.itemHeight || this._delegate.calculateItemHeight(0) || (this._unknownItemHeight = !0), this._addEventListeners(), this._onChange()
        }

        return g(t, [{
            key: "_findPageContentElement", value: function (t) {
                var e = Q.findParent(t, ".page__content");
                if (e) return e;
                var n = Q.findParent(t, "ons-page");
                if (n) {
                    var i = Q.findChild(n, ".content");
                    if (i) return i
                }
                return null
            }
        }, {
            key: "_checkItemHeight", value: function (t) {
                var e = this;
                this._delegate.loadItemElement(0, function (n) {
                    e._unknownItemHeight || Q.throw("Invalid state"), e._wrapperElement.appendChild(n.element);
                    var i = function () {
                        e._delegate.destroyItem(0, n), n.element && n.element.remove(), delete e._unknownItemHeight, t()
                    };
                    e._itemHeight = n.element.offsetHeight, e._itemHeight > 0 ? i() : (e._wrapperElement.style.visibility = "hidden", n.element.style.visibility = "hidden", setImmediate(function () {
                        e._itemHeight = n.element.offsetHeight, 0 == e._itemHeight && Q.throw('Invalid state: "itemHeight" must be greater than zero'), e._wrapperElement.style.visibility = "", i()
                    }))
                })
            }
        }, {
            key: "_countItems", value: function () {
                return this._delegate.countItems()
            }
        }, {
            key: "_getItemHeight", value: function (t) {
                return this._renderedItems.hasOwnProperty(t) ? (this._renderedItems[t].hasOwnProperty("height") || (this._renderedItems[t].height = this._renderedItems[t].element.offsetHeight), this._renderedItems[t].height) : this._topPositions[t + 1] && this._topPositions[t] ? this._topPositions[t + 1] - this._topPositions[t] : this.staticItemHeight || this._delegate.calculateItemHeight(t)
            }
        }, {
            key: "_calculateRenderedHeight", value: function () {
                var t = this;
                return Object.keys(this._renderedItems).reduce(function (e, n) {
                    return e + t._getItemHeight(+n)
                }, 0)
            }
        }, {
            key: "_onChange", value: function () {
                this._render()
            }
        }, {
            key: "_lastItemRendered", value: function () {
                return Math.max.apply(Math, w(Object.keys(this._renderedItems)))
            }
        }, {
            key: "_firstItemRendered", value: function () {
                return Math.min.apply(Math, w(Object.keys(this._renderedItems)))
            }
        }, {
            key: "refresh", value: function () {
                var t = {forceScrollDown: !0}, e = this._firstItemRendered();
                Q.isInteger(e) && (this._wrapperElement.style.height = this._topPositions[e] + this._calculateRenderedHeight() + "px", this.padding = this._topPositions[e], t.forceFirstIndex = e), this._removeAllElements(), this._render(t), this._wrapperElement.style.height = "inherit"
            }
        }, {
            key: "_render", value: function () {
                var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.forceScrollDown, i = void 0 !== n && n, o = e.forceFirstIndex, r = e.forceLastIndex;
                if (this._unknownItemHeight) return this._checkItemHeight(this._render.bind(this, arguments[0]));
                var a = !i && this.lastScrollTop > this._pageContent.scrollTop;
                this.lastScrollTop = this._pageContent.scrollTop;
                for (var s = {}, l = this._wrapperElement.getBoundingClientRect().top, u = 4 * window.innerHeight - l, c = this._countItems(), h = o || Math.max(0, this._calculateStartIndex(l) - 30), d = h, f = this._topPositions[d]; d < c && f < u; d++) d >= this._topPositions.length && (this._topPositions.length += 100), this._topPositions[d] = f, f += this._getItemHeight(d);
                if (this._delegate.hasRenderFunction && this._delegate.hasRenderFunction()) return this._delegate._render(h, d, function () {
                    t.padding = t._topPositions[h]
                });
                if (a) for (var p = d - 1; p >= h; p--) s[p] = !0, this._renderElement(p, a); else for (var g = r || Math.max.apply(Math, [d - 1].concat(w(Object.keys(this._renderedItems)))), m = h; m <= g; m++) s[m] = !0, this._renderElement(m, a);
                Object.keys(this._renderedItems).forEach(function (e) {
                    return s[e] || t._removeElement(e, a)
                })
            }
        }, {
            key: "_renderElement", value: function (t, e) {
                var n = this, i = this._renderedItems[t];
                i ? this._delegate.updateItem(t, i) : this._delegate.loadItemElement(t, function (i) {
                    e ? (n._wrapperElement.insertBefore(i.element, n._wrapperElement.children[n._insertIndex]), n.padding = n._topPositions[t], i.height = n._topPositions[t + 1] - n._topPositions[t]) : n._wrapperElement.appendChild(i.element), n._renderedItems[t] = i
                })
            }
        }, {
            key: "_removeElement", value: function (t) {
                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                t = +t;
                var n = this._renderedItems[t];
                this._delegate.destroyItem(t, n), e ? this._topPositions[t + 1] = void 0 : this.padding = this.padding + this._getItemHeight(t), n.element.parentElement && n.element.parentElement.removeChild(n.element), delete this._renderedItems[t]
            }
        }, {
            key: "_removeAllElements", value: function () {
                var t = this;
                Object.keys(this._renderedItems).forEach(function (e) {
                    return t._removeElement(e)
                })
            }
        }, {
            key: "_recalculateTopPositions", value: function (t, e) {
                for (var n = t; n <= e; n++) this._topPositions[n + 1] = this._topPositions[n] + this._getItemHeight(n)
            }
        }, {
            key: "_calculateStartIndex", value: function (t) {
                var e = this._firstItemRendered(), n = this._lastItemRendered();
                this._recalculateTopPositions(e, n);
                for (var i = 0, o = this._countItems() - 1; ;) {
                    var r = Math.floor((i + o) / 2), a = t + this._topPositions[r];
                    if (o < i) return 0;
                    if (a <= 0 && a + this._getItemHeight(r) > 0) return r;
                    isNaN(a) || a >= 0 ? o = r - 1 : i = r + 1
                }
            }
        }, {
            key: "_debounce", value: function (t, e, n) {
                var i = void 0;
                return function () {
                    var o = this, r = arguments, a = n && !i;
                    clearTimeout(i), a ? t.apply(this, arguments) : i = setTimeout(function () {
                        i = null, t.apply(o, r)
                    }, e)
                }
            }
        }, {
            key: "_doubleFireOnTouchend", value: function () {
                this._render(), this._debounce(this._render.bind(this), 100)
            }
        }, {
            key: "_addEventListeners", value: function () {
                Q.bindListeners(this, ["_onChange", "_doubleFireOnTouchend"]), C.isIOS() && (this._boundOnChange = this._debounce(this._boundOnChange, 30)), this._pageContent.addEventListener("scroll", this._boundOnChange, !0), C.isIOS() && (Q.addEventListener(this._pageContent, "touchmove", this._boundOnChange, {
                    capture: !0,
                    passive: !0
                }), this._pageContent.addEventListener("touchend", this._boundDoubleFireOnTouchend, !0)), window.document.addEventListener("resize", this._boundOnChange, !0)
            }
        }, {
            key: "_removeEventListeners", value: function () {
                this._pageContent.removeEventListener("scroll", this._boundOnChange, !0), C.isIOS() && (Q.removeEventListener(this._pageContent, "touchmove", this._boundOnChange, {
                    capture: !0,
                    passive: !0
                }), this._pageContent.removeEventListener("touchend", this._boundDoubleFireOnTouchend, !0)), window.document.removeEventListener("resize", this._boundOnChange, !0)
            }
        }, {
            key: "destroy", value: function () {
                this._removeAllElements(), this._delegate.destroy(), this._parentElement = this._delegate = this._renderedItems = null, this._removeEventListeners()
            }
        }, {
            key: "padding", get: function () {
                return parseInt(this._wrapperElement.style.paddingTop, 10)
            }, set: function (t) {
                this._wrapperElement.style.paddingTop = t + "px"
            }
        }, {
            key: "staticItemHeight", get: function () {
                return this._delegate.itemHeight || this._itemHeight
            }
        }]), t
    }(), Eo = function (t) {
        function e() {
            return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
        }

        return b(e, Pi), g(e, [{
            key: "connectedCallback", value: function () {
                this.hasAttribute("delegate") && (this.delegate = window[this.getAttribute("delegate")])
            }
        }, {
            key: "refresh", value: function () {
                this._lazyRepeatProvider && this._lazyRepeatProvider.refresh()
            }
        }, {
            key: "attributeChangedCallback", value: function (t, e, n) {
            }
        }, {
            key: "disconnectedCallback", value: function () {
                this._lazyRepeatProvider && (this._lazyRepeatProvider.destroy(), this._lazyRepeatProvider = null)
            }
        }, {
            key: "delegate", set: function (t) {
                this._lazyRepeatProvider && this._lazyRepeatProvider.destroy(), !this._templateElement && this.children[0] && (this._templateElement = this.removeChild(this.children[0]));
                var e = new ko(t, this._templateElement || null);
                this._lazyRepeatProvider = new wo(this.parentElement, e)
            }, get: function () {
                Q.throw("No delegate getter")
            }
        }]), e
    }();
    P.LazyRepeatDelegate = ko, P.LazyRepeatProvider = wo, c.LazyRepeat = Eo, customElements.define("ons-lazy-repeat", Eo);
    var Co = {"": "list-header--*"}, Ao = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return t._compile(), t
        }

        return b(e, Pi), g(e, [{
            key: "_compile", value: function () {
                N.prepare(this), this.classList.add("list-header"), B.initModifier(this, Co)
            }
        }, {
            key: "attributeChangedCallback", value: function (t, e, n) {
                switch (t) {
                    case"class":
                        Q.restoreClass(this, "list-header", Co);
                        break;
                    case"modifier":
                        B.onModifierChanged(e, n, this, Co)
                }
            }
        }], [{
            key: "observedAttributes", get: function () {
                return ["modifier", "class"]
            }
        }]), e
    }();
    c.ListHeader = Ao, customElements.define("ons-list-header", Ao);
    var So = {"": "list-title--*"}, Po = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return t._compile(), t
        }

        return b(e, Pi), g(e, [{
            key: "_compile", value: function () {
                N.prepare(this), this.classList.add("list-title"), B.initModifier(this, So)
            }
        }, {
            key: "attributeChangedCallback", value: function (t, e, n) {
                switch (t) {
                    case"class":
                        Q.restoreClass(this, "list-title", So);
                        break;
                    case"modifier":
                        B.onModifierChanged(e, n, this, So)
                }
            }
        }], [{
            key: "observedAttributes", get: function () {
                return ["modifier", "class"]
            }
        }]), e
    }();
    c.ListTitle = Po, customElements.define("ons-list-title", Po);
    var Oo = function (t) {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.timing,
                i = void 0 === n ? "linear" : n, o = t.delay, r = void 0 === o ? 0 : o, a = t.duration,
                s = void 0 === a ? .2 : a;
            return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
                timing: i,
                delay: r,
                duration: s
            }))
        }

        return b(e, Ti), g(e, [{
            key: "showExpansion", value: function (t, e) {
                e()
            }
        }, {
            key: "hideExpansion", value: function (t, e) {
                e()
            }
        }]), e
    }(), xo = {
        ".list-item": "list-item--*",
        ".list-item__left": "list-item--*__left",
        ".list-item__center": "list-item--*__center",
        ".list-item__right": "list-item--*__right",
        ".list-item__label": "list-item--*__label",
        ".list-item__title": "list-item--*__title",
        ".list-item__subtitle": "list-item--*__subtitle",
        ".list-item__thumbnail": "list-item--*__thumbnail",
        ".list-item__icon": "list-item--*__icon"
    }, To = {
        default: function (t) {
            function e() {
                return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }

            return b(e, Oo), g(e, [{
                key: "showExpansion", value: function (t, e) {
                    this._animateExpansion(t, !0, e)
                }
            }, {
                key: "hideExpansion", value: function (t, e) {
                    this._animateExpansion(t, !1, e)
                }
            }, {
                key: "_animateExpansion", value: function (t, e, n) {
                    var i, o = t.expandableContent.style.height, r = t.expandableContent.style.display;
                    t.expandableContent.style.height = "auto", t.expandableContent.style.display = "block";
                    var a = window.getComputedStyle(t.expandableContent),
                        s = [{height: 0, paddingTop: 0, paddingBottom: 0}, {
                            height: a.height,
                            paddingTop: a.paddingTop,
                            paddingBottom: a.paddingBottom
                        }], l = [{transform: "rotate(45deg)"}, {transform: "rotate(225deg)"}];
                    if (t.expandableContent.style.height = o, (i = nt(t.expandableContent, {
                        duration: this.duration,
                        property: "height padding-top padding-bottom"
                    })).default.apply(i, w(e ? s : s.reverse())).play(function () {
                        t.expandableContent.style.display = r, n && n()
                    }), t.expandChevron) {
                        var u;
                        (u = nt(t.expandChevron, {
                            duration: this.duration,
                            property: "transform"
                        })).default.apply(u, w(e ? l : l.reverse())).play()
                    }
                }
            }]), e
        }(), none: Oo
    }, Lo = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            t._animatorFactory = t._updateAnimatorFactory(), t.toggleExpansion = t.toggleExpansion.bind(t);
            var i = /^ons-(?!col$|row$|if$)/i;
            return t._shouldIgnoreTap = function (t) {
                return t.hasAttribute("prevent-tap") || i.test(t.tagName)
            }, t.show = t.showExpansion, t.hide = t.hideExpansion, n(t, function () {
                t._compile()
            }), t
        }

        return b(e, Pi), g(e, [{
            key: "_compile", value: function () {
                N.prepare(this), this.classList.add("list-item");
                var t = void 0, e = void 0, n = [];
                Array.from(this.childNodes).forEach(function (i) {
                    i.nodeType !== Node.ELEMENT_NODE ? n.push(i) : i.classList.contains("top") ? t = i : i.classList.contains("expandable-content") ? e = i : n.push(i), "ONS-RIPPLE" !== i.nodeName && i.remove()
                });
                var i = void 0, o = void 0, r = void 0, a = [];
                if ((n = t ? Array.from(t.childNodes) : n).forEach(function (t) {
                    t.nodeType !== Node.ELEMENT_NODE ? a.push(t) : t.classList.contains("left") ? i = t : t.classList.contains("right") ? o = t : t.classList.contains("center") ? r = t : a.push(t)
                }), this.hasAttribute("expandable")) {
                    if (this.classList.add("list-item--expandable"), t || (t = document.createElement("div")).classList.add("top"), t.classList.add("list-item__top"), this.appendChild(t), this._top = t, e && (e.classList.add("list-item__expandable-content"), this.appendChild(e)), !o) {
                        (o = document.createElement("div")).classList.add("list-item__right", "right");
                        var s = document.createElement("span");
                        s.classList.add("list-item__expand-chevron"), o.appendChild(s)
                    }
                } else t = this;
                r || ((r = document.createElement("div")).classList.add("center"), a.forEach(function (t) {
                    return r.appendChild(t)
                })), r.classList.add("list-item__center"), t.appendChild(r), i && (i.classList.add("list-item__left"), t.appendChild(i)), o && (o.classList.add("list-item__right"), t.appendChild(o)), Q.updateRipple(this), B.initModifier(this, xo)
            }
        }, {
            key: "showExpansion", value: function () {
                var t = this;
                if (this.hasAttribute("expandable") && !this._expanding) {
                    this.expanded = !0, this._expanding = !0;
                    this._animatorFactory.newAnimator().showExpansion(this, function () {
                        t.classList.add("expanded"), t._expanding = !1
                    })
                }
            }
        }, {
            key: "hideExpansion", value: function () {
                var t = this;
                if (this.hasAttribute("expandable") && !this._expanding) {
                    this.expanded = !1, this._expanding = !0;
                    this._animatorFactory.newAnimator().hideExpansion(this, function () {
                        t.classList.remove("expanded"), t._expanding = !1
                    })
                }
            }
        }, {
            key: "toggleExpansion", value: function () {
                this.classList.contains("expanded") ? this.hideExpansion() : this.showExpansion(), this.dispatchEvent(new Event("expansion"))
            }
        }, {
            key: "_updateAnimatorFactory", value: function () {
                return new O({
                    animators: To,
                    baseClass: Oo,
                    baseClassName: "ListItemAnimator",
                    defaultAnimation: this.getAttribute("animation") || "default"
                })
            }
        }, {
            key: "attributeChangedCallback", value: function (t, e, n) {
                switch (t) {
                    case"class":
                        Q.restoreClass(this, "list-item", xo);
                        break;
                    case"modifier":
                        B.onModifierChanged(e, n, this, xo);
                        break;
                    case"ripple":
                        Q.updateRipple(this);
                        break;
                    case"animation":
                        this._animatorFactory = this._updateAnimatorFactory()
                }
            }
        }, {
            key: "connectedCallback", value: function () {
                var t = this;
                n(this, function () {
                    t._setupListeners(!0), t._originalBackgroundColor = t.style.backgroundColor, t.tapped = !1
                })
            }
        }, {
            key: "disconnectedCallback", value: function () {
                this._setupListeners(!1)
            }
        }, {
            key: "_setupListeners", value: function (t) {
                var e = (t ? "add" : "remove") + "EventListener";
                Q[e](this, "touchstart", this._onTouch, {passive: !0}), Q[e](this, "touchmove", this._onRelease, {passive: !0}), this[e]("touchcancel", this._onRelease), this[e]("touchend", this._onRelease), this[e]("touchleave", this._onRelease), this[e]("drag", this._onDrag), this[e]("mousedown", this._onTouch), this[e]("mouseup", this._onRelease), this[e]("mouseout", this._onRelease), this._top && this._top[e]("click", this.toggleExpansion)
            }
        }, {
            key: "_onDrag", value: function (t) {
                var e = t.gesture;
                this.hasAttribute("lock-on-drag") && ["left", "right"].indexOf(e.direction) > -1 && e.preventDefault()
            }
        }, {
            key: "_onTouch", value: function (t) {
                var e = this;
                if (!(this.tapped || this !== t.target && (this._shouldIgnoreTap(t.target) || Q.findParent(t.target, this._shouldIgnoreTap, function (t) {
                    return t === e
                })))) {
                    this.tapped = !0;
                    var n = {transition: "background-color 0.0s linear 0.02s, box-shadow 0.0s linear 0.02s"};
                    this.hasAttribute("tappable") && (this.style.backgroundColor && (this._originalBackgroundColor = this.style.backgroundColor), n.backgroundColor = this.getAttribute("tap-background-color") || "#d9d9d9", n.boxShadow = "0px -1px 0px 0px " + n.backgroundColor), d(this, n)
                }
            }
        }, {
            key: "_onRelease", value: function () {
                this.tapped = !1, this.style.backgroundColor = this._originalBackgroundColor || "", d.clear(this, "transition boxShadow")
            }
        }, {
            key: "expandableContent", get: function () {
                return this.querySelector(".list-item__expandable-content")
            }
        }, {
            key: "expandChevron", get: function () {
                return this.querySelector(".list-item__expand-chevron")
            }
        }], [{
            key: "observedAttributes", get: function () {
                return ["modifier", "class", "ripple", "animation"]
            }
        }]), e
    }();
    c.ListItem = Lo, customElements.define("ons-list-item", Lo);
    var Mo = {"": "list--*"}, Do = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return t._compile(), t
        }

        return b(e, Pi), g(e, [{
            key: "_compile", value: function () {
                N.prepare(this), this.classList.add("list"), B.initModifier(this, Mo)
            }
        }, {
            key: "attributeChangedCallback", value: function (t, e, n) {
                switch (t) {
                    case"class":
                        Q.restoreClass(this, "list", Mo);
                        break;
                    case"modifier":
                        B.onModifierChanged(e, n, this, Mo)
                }
            }
        }], [{
            key: "observedAttributes", get: function () {
                return ["modifier", "class"]
            }
        }]), e
    }();
    c.List = Do, customElements.define("ons-list", Do);
    var Io = ["autocapitalize", "autocomplete", "autocorrect", "autofocus", "disabled", "inputmode", "max", "maxlength", "min", "minlength", "name", "pattern", "placeholder", "readonly", "required", "size", "step", "validator", "value"],
        No = function (t) {
            function e() {
                p(this, e);
                var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return t.constructor === e && Q.throwAbstract(), n(t, function () {
                    return t._compile()
                }), t._boundDelegateEvent = t._delegateEvent.bind(t), t
            }

            return b(e, Pi), g(e, [{
                key: "_update", value: function () {
                }
            }, {
                key: "_scheme", get: function () {
                    Q.throwMember()
                }
            }, {
                key: "_template", get: function () {
                    Q.throwMember()
                }
            }, {
                key: "type", get: function () {
                    Q.throwMember()
                }
            }]), g(e, [{
                key: "_compile", value: function () {
                    N.prepare(this), this._defaultClassName && this.classList.add(this._defaultClassName), 0 === this.children.length && (this.appendChild(Q.createFragment(this._template)), this._setInputId(), this._updateBoundAttributes(), B.initModifier(this, this._scheme))
                }
            }, {
                key: "_updateBoundAttributes", value: function () {
                    var t = this;
                    Io.forEach(function (e) {
                        t.hasAttribute(e) ? t._input.setAttribute(e, t.getAttribute(e)) : t._input.removeAttribute(e)
                    }), this._update()
                }
            }, {
                key: "_delegateEvent", value: function (t) {
                    var e = new CustomEvent(t.type, {bubbles: !1, cancelable: !0});
                    return this.dispatchEvent(e)
                }
            }, {
                key: "_setInputId", value: function () {
                    this.hasAttribute("input-id") && (this._input.id = this.getAttribute("input-id"))
                }
            }, {
                key: "connectedCallback", value: function () {
                    var t = this;
                    n(this, function () {
                        t._input.addEventListener("focus", t._boundDelegateEvent), t._input.addEventListener("blur", t._boundDelegateEvent)
                    })
                }
            }, {
                key: "disconnectedCallback", value: function () {
                    var t = this;
                    n(this, function () {
                        t._input.removeEventListener("focus", t._boundDelegateEvent), t._input.removeEventListener("blur", t._boundDelegateEvent)
                    })
                }
            }, {
                key: "attributeChangedCallback", value: function (t, e, i) {
                    var o = this;
                    switch (t) {
                        case"modifier":
                            n(this, function () {
                                return B.onModifierChanged(e, i, o, o._scheme)
                            });
                            break;
                        case"input-id":
                            n(this, function () {
                                return o._setInputId()
                            });
                            break;
                        case"class":
                            Q.restoreClass(this, this._defaultClassName, this._scheme)
                    }
                    Io.indexOf(t) >= 0 && n(this, function () {
                        return o._updateBoundAttributes()
                    })
                }
            }, {
                key: "_defaultClassName", get: function () {
                    return ""
                }
            }, {
                key: "_input", get: function () {
                    return this.querySelector("input")
                }
            }, {
                key: "value", get: function () {
                    return null === this._input ? this.getAttribute("value") : this._input.value
                }, set: function (t) {
                    var e = this;
                    n(this, function () {
                        t instanceof Date && (t = t.toISOString().substring(0, 10)), e._input.value = t, e._update()
                    })
                }
            }, {
                key: "disabled", set: function (t) {
                    return Q.toggleAttribute(this, "disabled", t)
                }, get: function () {
                    return this.hasAttribute("disabled")
                }
            }], [{
                key: "observedAttributes", get: function () {
                    return ["modifier", "input-id", "class"].concat(Io)
                }
            }]), e
        }(), Bo = {".text-input": "text-input--*", ".text-input__label": "text-input--*__label"}, jo = function (t) {
            function e() {
                p(this, e);
                var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return t._boundOnInput = t._update.bind(t), t._boundOnFocusin = t._update.bind(t), t
            }

            return b(e, No), g(e, [{
                key: "_update", value: function () {
                    this._updateLabel(), this._updateLabelClass()
                }
            }, {
                key: "_updateLabel", value: function () {
                    var t = this.getAttribute("placeholder") || "";
                    void 0 !== this._helper.textContent ? this._helper.textContent = t : this._helper.innerText = t
                }
            }, {
                key: "_updateLabelClass", value: function () {
                    "" === this.value ? this._helper.classList.remove("text-input--material__label--active") : this._helper.classList.add("text-input--material__label--active")
                }
            }, {
                key: "connectedCallback", value: function () {
                    var t = this;
                    v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "connectedCallback", this).call(this), n(this, function () {
                        t._input.addEventListener("input", t._boundOnInput), t._input.addEventListener("focusin", t._boundOnFocusin)
                    });
                    var i = this.getAttribute("type");
                    ["checkbox", "radio"].indexOf(i) >= 0 && Q.warn('Warn: <ons-input type="' + i + '"> is deprecated since v2.4.0. Use <ons-' + i + "> instead.")
                }
            }, {
                key: "disconnectedCallback", value: function () {
                    var t = this;
                    v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "disconnectedCallback", this).call(this), n(this, function () {
                        t._input.removeEventListener("input", t._boundOnInput), t._input.removeEventListener("focusin", t._boundOnFocusin)
                    })
                }
            }, {
                key: "attributeChangedCallback", value: function (t, i, o) {
                    var r = this;
                    switch (t) {
                        case"type":
                            n(this, function () {
                                return r._input.setAttribute("type", r.type)
                            });
                            break;
                        default:
                            v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "attributeChangedCallback", this).call(this, t, i, o)
                    }
                }
            }, {
                key: "_scheme", get: function () {
                    return Bo
                }
            }, {
                key: "_template", get: function () {
                    return '\n      <input type="' + this.type + '" class="text-input">\n      <span class="text-input__label"></span>\n    '
                }
            }, {
                key: "type", get: function () {
                    var t = this.getAttribute("type");
                    return ["checkbox", "radio"].indexOf(t) < 0 && t || "text"
                }
            }, {
                key: "_helper", get: function () {
                    return this.querySelector("span")
                }
            }], [{
                key: "observedAttributes", get: function () {
                    return [].concat(w(v(e.__proto__ || Object.getPrototypeOf(e), "observedAttributes", this)), ["type"])
                }
            }]), e
        }();
    c.Input = jo, customElements.define("ons-input", jo);
    var Ho = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return t.constructor === e && util.throwAbstract(), n(t, function () {
                t.attributeChangedCallback("checked", null, t.getAttribute("checked"))
            }), t
        }

        return b(e, No), g(e, [{
            key: "attributeChangedCallback", value: function (t, n, i) {
                switch (t) {
                    case"checked":
                        this.checked = null !== i;
                        break;
                    default:
                        v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "attributeChangedCallback", this).call(this, t, n, i)
                }
            }
        }, {
            key: "_template", get: function () {
                return '\n      <input type="' + this.type + '" class="' + this._defaultClassName + '__input">\n      <span class="' + this._defaultClassName + '__checkmark"></span>\n    '
            }
        }, {
            key: "_helper", get: function () {
                return this.querySelector("span")
            }
        }, {
            key: "checked", get: function () {
                return this._input.checked
            }, set: function (t) {
                var e = this;
                n(this, function () {
                    e._input.checked = t
                })
            }
        }], [{
            key: "observedAttributes", get: function () {
                return [].concat(w(v(e.__proto__ || Object.getPrototypeOf(e), "observedAttributes", this)), ["checked"])
            }
        }]), e
    }(), Ro = {
        ".checkbox": "checkbox--*",
        ".checkbox__input": "checkbox--*__input",
        ".checkbox__checkmark": "checkbox--*__checkmark"
    }, Fo = function (t) {
        function e() {
            return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
        }

        return b(e, Ho), g(e, [{
            key: "_scheme", get: function () {
                return Ro
            }
        }, {
            key: "_defaultClassName", get: function () {
                return "checkbox"
            }
        }, {
            key: "type", get: function () {
                return "checkbox"
            }
        }]), e
    }();
    c.Checkbox = Fo, customElements.define("ons-checkbox", Fo);
    var qo = {
        ".radio-button": "radio-button--*",
        ".radio-button__input": "radio-button--*__input",
        ".radio-button__checkmark": "radio-button--*__checkmark"
    }, zo = function (t) {
        function e() {
            return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
        }

        return b(e, Ho), g(e, [{
            key: "_scheme", get: function () {
                return qo
            }
        }, {
            key: "_defaultClassName", get: function () {
                return "radio-button"
            }
        }, {
            key: "type", get: function () {
                return "radio"
            }
        }]), e
    }();
    c.Radio = zo, customElements.define("ons-radio", zo);
    var Vo = {".search-input": "search-input--*"}, Wo = function (t) {
        function e() {
            return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
        }

        return b(e, No), g(e, [{
            key: "_scheme", get: function () {
                return Vo
            }
        }, {
            key: "_template", get: function () {
                return '\n      <input type="' + this.type + '" class="search-input">\n    '
            }
        }, {
            key: "type", get: function () {
                return "search"
            }
        }]), e
    }();
    c.SearchInput = Wo, customElements.define("ons-search-input", Wo);
    var Uo = function (t) {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.timing,
                    i = void 0 === n ? "linear" : n, o = t.delay, r = void 0 === o ? 0 : o, a = t.duration,
                    s = void 0 === a ? .2 : a;
                return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
                    timing: i,
                    delay: r,
                    duration: s
                }))
            }

            return b(e, Ti), g(e, [{
                key: "show", value: function (t, e) {
                    e()
                }
            }, {
                key: "hide", value: function (t, e) {
                    e()
                }
            }]), e
        }(), Xo = function (t) {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.timing,
                    i = void 0 === n ? "linear" : n, o = t.delay, r = void 0 === o ? 0 : o, a = t.duration,
                    s = void 0 === a ? .3 : a;
                return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
                    timing: i,
                    delay: r,
                    duration: s
                }))
            }

            return b(e, Uo), g(e, [{
                key: "show", value: function (t, e) {
                    e = e || function () {
                    }, nt(t, this.def).default({opacity: 0}, {opacity: 1}).queue(function (t) {
                        e(), t()
                    }).play()
                }
            }, {
                key: "hide", value: function (t, e) {
                    e = e || function () {
                    }, nt(t, this.def).default({opacity: 1}, {opacity: 0}).queue(function (t) {
                        e(), t()
                    }).play()
                }
            }]), e
        }(), Yo = function (t) {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.timing,
                    i = void 0 === n ? "cubic-bezier( .1, .7, .1, 1)" : n, o = t.delay, r = void 0 === o ? 0 : o,
                    a = t.duration, s = void 0 === a ? .4 : a;
                return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
                    timing: i,
                    delay: r,
                    duration: s
                }))
            }

            return b(e, Uo), g(e, [{
                key: "show", value: function (t, e) {
                    e = e || function () {
                    }, nt(t, this.def).default({transform: "translate3d(0, 100%, 0)"}, {transform: "translate3d(0, 0, 0)"}).queue(function (t) {
                        e(), t()
                    }).play()
                }
            }, {
                key: "hide", value: function (t, e) {
                    e = e || function () {
                    }, nt(t, this.def).default({transform: "translate3d(0, 0, 0)"}, {transform: "translate3d(0, 100%, 0)"}).queue(function (t) {
                        e(), t()
                    }).play()
                }
            }]), e
        }(), Go = {"": "modal--*", modal__content: "modal--*__content"}, $o = {default: Uo, fade: Xo, lift: Yo, none: Uo},
        Ko = function (t) {
            function e() {
                p(this, e);
                var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return t._defaultDBB = function () {
                }, n(t, function () {
                    return t._compile()
                }), t
            }

            return b(e, Ni), g(e, [{
                key: "_updateAnimatorFactory", value: function () {
                    return new O({
                        animators: $o,
                        baseClass: Uo,
                        baseClassName: "ModalAnimator",
                        defaultAnimation: this.getAttribute("animation")
                    })
                }
            }, {
                key: "_compile", value: function () {
                    if (this.style.display = "none", this.style.zIndex = 10001, this.classList.add("modal"), !Q.findChild(this, ".modal__content")) {
                        var t = document.createElement("div");
                        for (t.classList.add("modal__content"); this.childNodes[0];) {
                            var e = this.childNodes[0];
                            this.removeChild(e), t.insertBefore(e, null)
                        }
                        this.appendChild(t)
                    }
                    B.initModifier(this, this._scheme)
                }
            }, {
                key: "_toggleStyle", value: function (t) {
                    this.style.display = t ? "table" : "none"
                }
            }, {
                key: "connectedCallback", value: function () {
                    v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "connectedCallback", this).call(this)
                }
            }, {
                key: "disconnectedCallback", value: function () {
                    v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "disconnectedCallback", this).call(this)
                }
            }, {
                key: "attributeChangedCallback", value: function (t, n, i) {
                    "class" === t ? Q.restoreClass(this, "modal", Go) : v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "attributeChangedCallback", this).call(this, t, n, i)
                }
            }, {
                key: "_scheme", get: function () {
                    return Go
                }
            }], [{
                key: "registerAnimator", value: function (t, e) {
                    e.prototype instanceof Uo || Q.throwAnimator("Modal"), $o[t] = e
                }
            }, {
                key: "observedAttributes", get: function () {
                    return [].concat(w(v(e.__proto__ || Object.getPrototypeOf(e), "observedAttributes", this)), ["class"])
                }
            }, {
                key: "animators", get: function () {
                    return $o
                }
            }, {
                key: "ModalAnimator", get: function () {
                    return Uo
                }
            }]), e
        }();
    c.Modal = Ko, customElements.define("ons-modal", Ko);
    var Qo = function () {
        function t(e) {
            var n = this;
            p(this, t), "element ignoreSwipe isInitialState onDragCallback swipeMax swipeMin swipeMid".split(/\s+/).forEach(function (t) {
                return n[t] = e[t]
            }), this.elementHandler = e.elementHandler || e.element, this.getThreshold = e.getThreshold || function () {
                return .5
            }, this.getSide = e.getSide || function () {
                return "left"
            }, this.handleGesture = this.handleGesture.bind(this), this._shouldFixScroll = "ios" === Q.globals.actualMobileOS
        }

        return g(t, [{
            key: "update", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.element.hasAttribute("swipeable");
                this.gestureDetector || (this.gestureDetector = new st(this.elementHandler, {
                    dragMinDistance: 1,
                    passive: !this._shouldFixScroll
                }));
                var e = t ? "on" : "off";
                this.gestureDetector[e]("drag dragstart dragend", this.handleGesture)
            }
        }, {
            key: "handleGesture", value: function (t) {
                t.gesture && ("dragstart" === t.type ? this.onDragStart(t) : this._ignoreDrag || ("dragend" === t.type ? this.onDragEnd(t) : this.onDrag(t)))
            }
        }, {
            key: "onDragStart", value: function (t) {
                var e = this;
                this._ignoreDrag = t.consumed || !Q.isValidGesture(t) || this.ignoreSwipe(t, "left" === e.getSide() ? t.gesture.center.clientX : window.innerWidth - t.gesture.center.clientX), this._ignoreDrag || (t.consume && t.consume(), t.consumed = !0, this._width = function (t) {
                    var e = [parseInt(t, 10), /px/.test(t)], n = e[0];
                    return e[1] ? n : Math.round(document.body.offsetWidth * n / 100)
                }(this.element.style.width || "100%"), this._startDistance = this._distance = this.isInitialState instanceof Function && !this.isInitialState() ? this._width : 0, Q.iosPreventScroll(this.gestureDetector))
            }
        }, {
            key: "onDrag", value: function (t) {
                t.stopPropagation();
                var e = "left" === this.getSide() ? t.gesture.deltaX : -t.gesture.deltaX,
                    n = Math.max(0, Math.min(this._width, this._startDistance + e));
                n !== this._distance && (this._distance = n, this.swipeMid(this._distance, this._width))
            }
        }, {
            key: "onDragEnd", value: function (t) {
                t.stopPropagation();
                var e = t.gesture.interimDirection;
                this.getSide() !== e && this._distance > this._width * this.getThreshold() ? this.swipeMax() : this.swipeMin()
            }
        }, {
            key: "dispose", value: function () {
                this.gestureDetector && this.gestureDetector.dispose(), this.gestureDetector = this.element = this.elementHandler = null
            }
        }]), t
    }(), Jo = function (t) {
        function e(t) {
            return p(this, e), t = Q.extend({
                timing: "linear",
                duration: "0.4",
                delay: "0"
            }, t || {}), k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t))
        }

        return b(e, Ti), g(e, [{
            key: "push", value: function (t, e, n) {
                n()
            }
        }, {
            key: "pop", value: function (t, e, n) {
                n()
            }
        }, {
            key: "block", value: function (t) {
                var e = Q.createElement('\n      <div style="position: absolute; background-color: transparent; width: 100%; height: 100%; z-index: 100000"></div>\n    ');
                return t.parentNode.appendChild(e), function () {
                    return e.remove()
                }
            }
        }]), e
    }(), Zo = function (t) {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.durationRestore,
                i = void 0 === n ? .1 : n, o = t.durationSwipe, r = void 0 === o ? .15 : o, a = t.timingSwipe,
                s = void 0 === a ? "linear" : a, l = y(t, ["durationRestore", "durationSwipe", "timingSwipe"]);
            p(this, e);
            var u = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, _({}, l)));
            return u.constructor === e && Q.throwAbstract(), u.durationRestore = i, u.durationSwipe = r, u.timingSwipe = s, u.optSwipe = {
                timing: s,
                duration: r
            }, u.optRestore = {
                timing: s,
                duration: i
            }, u.swipeShadow = Q.createElement('<div style="position: absolute; height: 100%; width: 12px; right: 100%; top: 0; bottom: 0; z-index: -1;background: linear-gradient(to right, transparent 0, rgba(0,0,0,.04) 40%, rgba(0,0,0,.12) 80%, rgba(0,0,0,.16) 100%);"></div>'), u.isDragStart = !0, u
        }

        return b(e, Jo), g(e, null, [{
            key: "swipeable", get: function () {
                return !0
            }
        }]), g(e, [{
            key: "_decompose", value: function () {
                Q.throwMember()
            }
        }, {
            key: "_shouldAnimateToolbar", value: function () {
                Q.throwMember()
            }
        }, {
            key: "_calculateDelta", value: function () {
                Q.throwMember()
            }
        }, {
            key: "_dragStartSetup", value: function (t, n) {
                this.isDragStart = !1, this.unblock = v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "block", this).call(this, n), t.parentElement.insertBefore(this.backgroundMask, t), this.target = {
                    enter: Q.findToolbarPage(t) || t,
                    leave: Q.findToolbarPage(n) || n
                }, this.decomp = {
                    enter: this._decompose(this.target.enter),
                    leave: this._decompose(this.target.leave)
                }, this.delta = this._calculateDelta(n, this.decomp.leave), this.shouldAnimateToolbar = this._shouldAnimateToolbar(this.target.enter, this.target.leave), this.shouldAnimateToolbar ? (this.swipeShadow.style.top = this.decomp.leave.toolbar.offsetHeight + "px", this.target.leave.appendChild(this.swipeShadow), this._saveStyle(this.target.enter, this.target.leave)) : (n.appendChild(this.swipeShadow), this._saveStyle(t, n)), n.classList.add("overflow-visible"), this.overflowElement = n, this.decomp.leave.content.classList.add("content-swiping")
            }
        }, {
            key: "translate", value: function (t, e, n, i) {
                this.isSwiping = !0, "none" === n.style.display && (n.style.display = ""), this.isDragStart && (this.maxWidth = e, this._dragStartSetup(n, i));
                var o = (t - e) / e;
                this.shouldAnimateToolbar ? nt.runAll(nt([this.decomp.enter.content, this.decomp.enter.bottomToolbar, this.decomp.enter.background]).queue({
                    transform: "translate3d(" + 25 * o + "%, 0, 0)",
                    opacity: 1 + 10 * o / 100
                }), nt(this.decomp.enter.toolbarCenter).queue({
                    transform: "translate3d(" + this.delta.title * o + "px, 0, 0)",
                    opacity: 1 + o
                }), nt(this.decomp.enter.backButtonLabel).queue({
                    opacity: 1 + 10 * o / 100,
                    transform: "translate3d(" + this.delta.label * o + "px, 0, 0)"
                }), nt(this.decomp.enter.other).queue({opacity: 1 + o}), nt([this.decomp.leave.content, this.decomp.leave.bottomToolbar, this.decomp.leave.background, this.swipeShadow]).queue({transform: "translate3d(" + t + "px, 0, 0)"}), nt(this.decomp.leave.toolbar).queue({opacity: -1 * o}), nt(this.decomp.leave.toolbarCenter).queue({transform: "translate3d(" + 125 * (1 + o) + "%, 0, 0)"}), nt(this.decomp.leave.backButtonLabel).queue({
                    opacity: -1 * o,
                    transform: "translate3d(" + this.delta.title * (1 + o) + "px, 0, 0)"
                }), nt(this.swipeShadow).queue({opacity: -1 * o})) : nt.runAll(nt(i).queue({transform: "translate3d(" + t + "px, 0, 0)"}), nt(n).queue({
                    transform: "translate3d(" + 25 * o + "%, 0, 0)",
                    opacity: 1 + 10 * o / 100
                }), nt(this.swipeShadow).queue({opacity: -1 * o}))
            }
        }, {
            key: "restore", value: function (t, e, n) {
                var i = this;
                this.isDragStart || (this.shouldAnimateToolbar ? nt.runAll(nt([this.decomp.enter.content, this.decomp.enter.bottomToolbar, this.decomp.enter.background]).queue({
                    transform: "translate3d(-25%, 0, 0)",
                    opacity: .9
                }, this.optRestore), nt(this.decomp.enter.toolbarCenter).queue({
                    transform: "translate3d(-" + this.delta.title + "px, 0, 0)",
                    transition: "opacity " + this.durationRestore + "s linear, transform " + this.durationRestore + "s " + this.timingSwipe,
                    opacity: 0
                }), nt(this.decomp.enter.backButtonLabel).queue({transform: "translate3d(-" + this.delta.label + "px, 0, 0)"}, this.optRestore), nt(this.decomp.enter.other).queue({opacity: 0}, this.optRestore), nt([this.decomp.leave.content, this.decomp.leave.bottomToolbar, this.decomp.leave.background, this.swipeShadow]).queue({transform: "translate3d(0, 0, 0)"}, this.optRestore), nt(this.decomp.leave.toolbar).queue({opacity: 1}, this.optRestore), nt(this.decomp.leave.toolbarCenter).queue({transform: "translate3d(0, 0, 0)"}, this.optRestore), nt(this.decomp.leave.backButtonLabel).queue({
                    opacity: 1,
                    transform: "translate3d(0, 0, 0)",
                    transition: "opacity " + this.durationRestore + "s linear, transform " + this.durationRestore + "s " + this.timingSwipe
                }), nt(this.swipeShadow).queue({opacity: 0}, this.optRestore).queue(function (e) {
                    i._reset(i.target.enter, i.target.leave), t.style.display = "none", n && n(), e()
                })) : nt.runAll(nt(t).queue({
                    transform: "translate3D(-25%, 0, 0)",
                    opacity: .9
                }, this.optRestore), nt(e).queue({transform: "translate3D(0, 0, 0)"}, this.optRestore).queue(function (o) {
                    i._reset(t, e), t.style.display = "none", n && n(), o()
                })))
            }
        }, {
            key: "popSwipe", value: function (t, e, n) {
                var i = this;
                this.isDragStart || (this.shouldAnimateToolbar ? nt.runAll(nt([this.decomp.enter.content, this.decomp.enter.bottomToolbar, this.decomp.enter.background]).queue({
                    transform: "translate3d(0, 0, 0)",
                    opacity: 1
                }, this.optSwipe), nt(this.decomp.enter.toolbarCenter).queue({
                    transform: "translate3d(0, 0, 0)",
                    transition: "opacity " + this.durationSwipe + "s linear, transform " + this.durationSwipe + "s " + this.timingSwipe,
                    opacity: 1
                }), nt(this.decomp.enter.backButtonLabel).queue({transform: "translate3d(0, 0, 0)"}, this.optSwipe), nt(this.decomp.enter.other).queue({opacity: 1}, this.optSwipe), nt([this.decomp.leave.content, this.decomp.leave.bottomToolbar, this.decomp.leave.background]).queue({transform: "translate3d(100%, 0, 0)"}, this.optSwipe), nt(this.decomp.leave.toolbar).queue({opacity: 0}, this.optSwipe), nt(this.decomp.leave.toolbarCenter).queue({transform: "translate3d(125%, 0, 0)"}, this.optSwipe), nt(this.decomp.leave.backButtonLabel).queue({
                    opacity: 0,
                    transform: "translate3d(" + this.delta.title + "px, 0, 0)",
                    transition: "opacity " + this.durationSwipe + "s linear, transform " + this.durationSwipe + "s " + this.timingSwipe
                }), nt(this.swipeShadow).queue({
                    opacity: 0,
                    transform: "translate3d(" + this.maxWidth + "px, 0, 0)"
                }, this.optSwipe).queue(function (t) {
                    i._reset(i.target.enter, i.target.leave), n && n(), t()
                })) : nt.runAll(nt(t).queue({
                    transform: "translate3D(0, 0, 0)",
                    opacity: 1
                }, this.optSwipe), nt(e).queue({transform: "translate3D(100%, 0, 0)"}, this.optSwipe).queue(function (o) {
                    i._reset(t, e), n && n(), o()
                })))
            }
        }, {
            key: "_saveStyle", value: function () {
                var t = this;
                this._savedStyle = new WeakMap;
                for (var e = function (e) {
                    return t._savedStyle.set(e, e.getAttribute("style"))
                }, n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                i.forEach(e), Object.keys(this.decomp).forEach(function (n) {
                    Object.keys(t.decomp[n]).forEach(function (i) {
                        (t.decomp[n][i] instanceof Array ? t.decomp[n][i] : [t.decomp[n][i]]).forEach(e)
                    })
                })
            }
        }, {
            key: "_restoreStyle", value: function () {
                for (var t = this, e = function (e) {
                    null === t._savedStyle.get(e) ? e.removeAttribute("style") : e.setAttribute("style", t._savedStyle.get(e)), t._savedStyle.delete(e)
                }, n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                i.forEach(e), Object.keys(this.decomp).forEach(function (n) {
                    Object.keys(t.decomp[n]).forEach(function (i) {
                        (t.decomp[n][i] instanceof Array ? t.decomp[n][i] : [t.decomp[n][i]]).forEach(e)
                    })
                })
            }
        }, {
            key: "_reset", value: function () {
                this.isSwiping = !1, this._savedStyle && this._restoreStyle.apply(this, arguments), this.unblock && this.unblock(), this.swipeShadow.remove(), this.backgroundMask.remove(), this.overflowElement.classList.remove("overflow-visible"), this.decomp.leave.content.classList.remove("content-swiping"), this.decomp = this.target = this.overflowElement = this._savedStyle = null, this.isDragStart = !0
            }
        }]), e
    }(), tr = function () {
        return "translate3d(" + (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) + ", " + (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) + ", " + (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) + ")"
    }, er = function (t) {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.timing,
                i = void 0 === n ? "cubic-bezier(0.3, .4, 0, .9)" : n, o = t.delay, r = void 0 === o ? 0 : o,
                a = t.duration, s = void 0 === a ? .4 : a, l = y(t, ["timing", "delay", "duration"]);
            p(this, e);
            var u = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, _({
                timing: i,
                delay: r,
                duration: s
            }, l)));
            return u.backgroundMask = Q.createElement('<div style="position: absolute; width: 100%; height: 100%;background-color: black; z-index: 2"></div>'), u
        }

        return b(e, Zo), g(e, [{
            key: "_decompose", value: function (t) {
                var e = t._getToolbarElement(), n = e._getToolbarLeftItemsElement(),
                    i = e._getToolbarRightItemsElement(), o = function (t) {
                        for (var e = [], n = 0; n < t.length; n++) "ons-back-button" !== t[n].nodeName.toLowerCase() && e.push(t[n]);
                        return e
                    },
                    r = [].concat(0 === n.children.length ? n : o(n.children)).concat(0 === i.children.length ? i : o(i.children));
                return {
                    toolbarCenter: e._getToolbarCenterItemsElement(),
                    backButtonIcon: e._getToolbarBackButtonIconElement(),
                    backButtonLabel: e._getToolbarBackButtonLabelElement(),
                    other: r,
                    content: t._getContentElement(),
                    background: t._getBackgroundElement(),
                    toolbar: e,
                    bottomToolbar: t._getBottomToolbarElement()
                }
            }
        }, {
            key: "_shouldAnimateToolbar", value: function (t, e) {
                var n = t._canAnimateToolbar() && e._canAnimateToolbar(), i = t._getToolbarElement(),
                    o = e._getToolbarElement(), r = i.hasAttribute("static") || o.hasAttribute("static"),
                    a = Q.hasModifier(i, "material") || Q.hasModifier(o, "material"),
                    s = Q.hasModifier(i, "transparent") || Q.hasModifier(o, "transparent");
                return n && !r && !a && !s
            }
        }, {
            key: "_calculateDelta", value: function (t, e) {
                var n = void 0, i = void 0, o = t.getBoundingClientRect();
                if (e.backButtonLabel.classList.contains("back-button__label")) {
                    var r = e.backButtonLabel.getBoundingClientRect();
                    n = Math.round(o.width / 2 - r.width / 2 - r.left)
                } else n = Math.round(o.width / 2 * .6);
                return e.backButtonIcon.classList.contains("back-button__icon") && (i = e.backButtonIcon.getBoundingClientRect().right - 2), {
                    title: n,
                    label: i
                }
            }
        }, {
            key: "push", value: function (t, i, o) {
                var r = this;
                this.backgroundMask.remove(), i.parentNode.insertBefore(this.backgroundMask, i);
                var a = v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "block", this).call(this, t);
                n(t, function () {
                    var e = Q.findToolbarPage(t) || t, n = Q.findToolbarPage(i) || i, s = r._decompose(e),
                        l = r._decompose(n), u = r._calculateDelta(i, s);
                    r._shouldAnimateToolbar(e, n) ? nt.runAll(nt([s.content, s.bottomToolbar, s.background], r.def).default({transform: tr("100%")}, {transform: tr()}), nt(s.toolbar, r.def).default({opacity: 0}, {opacity: 1}), nt(s.toolbarCenter, r.def).default({
                        transform: tr("125%"),
                        opacity: 1
                    }, {
                        transform: tr(),
                        opacity: 1
                    }), nt(s.backButtonLabel, r.def).default({
                        transform: tr(u.title + "px"),
                        opacity: 0
                    }, {
                        transform: tr(),
                        opacity: 1,
                        transition: "opacity " + r.duration + "s linear, transform " + r.duration + "s " + r.timing
                    }), nt(s.other, r.def).default({opacity: 0}, {
                        css: {opacity: 1},
                        timing: "linear"
                    }), nt([l.content, l.bottomToolbar, l.background], r.def).default({
                        transform: tr(),
                        opacity: 1
                    }, {transform: tr("-25%"), opacity: .9}).queue(function (t) {
                        r.backgroundMask.remove(), a(), o(), t()
                    }), nt(l.toolbarCenter, r.def).default({
                        transform: tr(),
                        opacity: 1
                    }, {
                        transform: tr("-" + u.title + "px"),
                        opacity: 0,
                        transition: "opacity " + r.duration + "s linear, transform " + r.duration + "s " + r.timing
                    }), nt(l.backButtonLabel, r.def).default({
                        transform: tr(),
                        opacity: 1
                    }, {
                        transform: tr("-" + u.label + "px"),
                        opacity: 0
                    }), nt(l.other, r.def).default({opacity: 1}, {
                        css: {opacity: 0},
                        timing: "linear"
                    })) : nt.runAll(nt(t, r.def).default({transform: tr("100%")}, {transform: tr()}), nt(i, r.def).default({
                        transform: tr(),
                        opacity: 1
                    }, {transform: tr("-25%"), opacity: .9}).queue(function (t) {
                        r.backgroundMask.remove(), a(), o(), t()
                    }))
                })
            }
        }, {
            key: "pop", value: function (t, n, i) {
                var o = this;
                if (this.isSwiping) return this.popSwipe(t, n, i);
                this.backgroundMask.remove(), t.parentNode.insertBefore(this.backgroundMask, t);
                var r = v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "block", this).call(this, t),
                    a = Q.findToolbarPage(t) || t, s = Q.findToolbarPage(n) || n, l = this._decompose(a),
                    u = this._decompose(s), c = this._calculateDelta(n, u);
                this._shouldAnimateToolbar(a, s) ? nt.runAll(nt([l.content, l.bottomToolbar, l.background], this.def).default({
                    transform: tr("-25%"),
                    opacity: .9
                }, {
                    transform: tr(),
                    opacity: 1
                }), nt(l.toolbarCenter, this.def).default({
                    transform: tr("-" + c.title + "px"),
                    opacity: 0
                }, {
                    transform: tr(),
                    opacity: 1,
                    transition: "opacity " + this.duration + "s linear, transform " + this.duration + "s " + this.timing
                }), nt(l.backButtonLabel, this.def).default({transform: tr("-" + c.label + "px")}, {transform: tr()}), nt(l.other, this.def).default({opacity: 0}, {
                    css: {opacity: 1},
                    timing: "linear"
                }), nt([u.content, u.bottomToolbar, u.background], this.def).default({transform: tr()}, {transform: tr("100%")}).wait(0).queue(function (t) {
                    o.backgroundMask.remove(), r(), i(), t()
                }), nt(u.toolbar, this.def).default({opacity: 1}, {opacity: 0}), nt(u.toolbarCenter, this.def).default({transform: tr()}, {transform: tr("125%")}), nt(u.backButtonLabel, this.def).default({
                    transform: tr(),
                    opacity: 1
                }, {
                    transform: tr(c.title + "px"),
                    opacity: 0,
                    transition: "opacity " + this.duration + "s linear, transform " + this.duration + "s " + this.timing
                })) : nt.runAll(nt(t, this.def).default({transform: tr("-25%"), opacity: .9}, {
                    transform: tr(),
                    opacity: 1
                }), nt(n, this.def).default({transform: tr()}, {transform: tr("100%")}).queue(function (t) {
                    o.backgroundMask.remove(), r(), i(), t()
                }))
            }
        }]), e
    }(), nr = function (t) {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.timing,
                i = void 0 === n ? "cubic-bezier(.1, .7, .1, 1)" : n, o = t.delay, r = void 0 === o ? 0 : o,
                a = t.duration, s = void 0 === a ? .4 : a;
            p(this, e);
            var l = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {timing: i, delay: r, duration: s}));
            return l.backgroundMask = Q.createElement('<div style="position: absolute; width: 100%; height: 100%;background: linear-gradient(black, white);"></div>'), l
        }

        return b(e, Jo), g(e, [{
            key: "push", value: function (t, n, i) {
                var o = this;
                this.backgroundMask.remove(), n.parentNode.insertBefore(this.backgroundMask, n);
                var r = v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "block", this).call(this, t);
                nt.runAll(nt(t, this.def).default({transform: "translate3D(0, 100%, 0)"}, {transform: "translate3D(0, 0, 0)"}), nt(n, this.def).default({
                    transform: "translate3D(0, 0, 0)",
                    opacity: 1
                }, {transform: "translate3D(0, -10%, 0)", opacity: .9}).queue(function (t) {
                    o.backgroundMask.remove(), r(), i(), t()
                }))
            }
        }, {
            key: "pop", value: function (t, n, i) {
                var o = this;
                this.backgroundMask.remove(), t.parentNode.insertBefore(this.backgroundMask, t);
                var r = v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "block", this).call(this, t);
                nt.runAll(nt(t, this.def).default({
                    transform: "translate3D(0, -43px, 0)",
                    opacity: .9
                }, {transform: "translate3D(0, 0, 0)", opacity: 1}).queue(function (t) {
                    o.backgroundMask.remove(), r(), i(), t()
                }), nt(n, this.def).default({transform: "translate3D(0, 0, 0)"}, {transform: "translate3D(0, 100%, 0)"}))
            }
        }]), e
    }(), ir = "translate3d(0, 0, 0)", or = function (t) {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.timing,
                i = void 0 === n ? "linear" : n, o = t.delay, r = void 0 === o ? 0 : o, a = t.duration,
                s = void 0 === a ? .4 : a;
            return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
                timing: i,
                delay: r,
                duration: s
            }))
        }

        return b(e, Jo), g(e, [{
            key: "push", value: function (t, n, i) {
                var o = v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "block", this).call(this, t);
                nt.runAll(nt(t, this.def).default({transform: ir, opacity: 0}, {
                    transform: ir,
                    opacity: 1
                }).queue(function (t) {
                    o(), i(), t()
                }))
            }
        }, {
            key: "pop", value: function (t, n, i) {
                var o = v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "block", this).call(this, t);
                nt.runAll(nt(n, this.def).default({transform: ir, opacity: 1}, {
                    transform: ir,
                    opacity: 0
                }).queue(function (t) {
                    o(), i(), t()
                }))
            }
        }]), e
    }(), rr = function (t) {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.timing,
                i = void 0 === n ? "cubic-bezier(.1, .7, .4, 1)" : n, o = t.delay, r = void 0 === o ? 0 : o,
                a = t.duration, s = void 0 === a ? .3 : a;
            p(this, e);
            var l = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {timing: i, delay: r, duration: s}));
            return l.blackMaskOpacity = .4, l.backgroundMask = Q.createElement('<div style="position: absolute; width: 100%; height: 100%; z-index: 2;background-color: black; opacity: 0;"></div>'), l
        }

        return b(e, Jo), g(e, [{
            key: "push", value: function (t, n, i) {
                var o = this;
                this.backgroundMask.remove(), n.parentElement.insertBefore(this.backgroundMask, n.nextSibling);
                var r = v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "block", this).call(this, t);
                nt.runAll(nt(this.backgroundMask, this.def).default({
                    transform: "translate3d(0, 0, 0)",
                    opacity: 0
                }, {opacity: this.blackMaskOpacity}).queue(function (t) {
                    o.backgroundMask.remove(), t()
                }), nt(t, this.def).default({transform: "translate3d(100%, 0, 0)"}, {transform: "translate3d(0, 0, 0)"}), nt(n, this.def).default({transform: "translate3d(0, 0, 0)"}, {transform: "translate3d(-45%, 0, 0)"}).queue(function (t) {
                    r(), i(), t()
                }))
            }
        }, {
            key: "pop", value: function (t, n, i) {
                var o = this;
                this.backgroundMask.remove(), t.parentNode.insertBefore(this.backgroundMask, t.nextSibling);
                var r = v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "block", this).call(this, t);
                nt.runAll(nt(this.backgroundMask, this.def).default({
                    transform: "translate3d(0, 0, 0)",
                    opacity: this.blackMaskOpacity
                }, {opacity: 0}).queue(function (t) {
                    o.backgroundMask.remove(), t()
                }), nt(t, this.def).default({
                    transform: "translate3d(-45%, 0, 0)",
                    opacity: .9
                }, {
                    transform: "translate3d(0, 0, 0)",
                    opacity: 1
                }), nt(n, this.def).default({transform: "translate3d(0, 0, 0)"}, {transform: "translate3d(100%, 0, 0)"}).queue(function (t) {
                    r(), i(), t()
                }))
            }
        }]), e
    }(), ar = function (t) {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.timing,
                i = void 0 === n ? "cubic-bezier(.1, .7, .1, 1)" : n, o = t.delay, r = void 0 === o ? .05 : o,
                a = t.duration, s = void 0 === a ? .4 : a;
            p(this, e);
            var l = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {timing: i, delay: r, duration: s}));
            return l.backgroundMask = Q.createElement('<div style="position: absolute; width: 100%; height: 100%;background-color: black;"></div>'), l
        }

        return b(e, Jo), g(e, [{
            key: "push", value: function (t, n, i) {
                var o = this;
                this.backgroundMask.remove(), n.parentNode.insertBefore(this.backgroundMask, n);
                var r = v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "block", this).call(this, t),
                    a = nt(this.backgroundMask).wait(this.delay + this.duration).queue(function (t) {
                        o.backgroundMask.remove(), t()
                    });
                nt.runAll(a, nt(t, this.def).default({transform: "translate3d(0, 100%, 0)"}, {transform: "translate3d(0, 0, 0)"}), nt(n, this.def).default({opacity: 1}, {opacity: .4}).queue(function (t) {
                    r(), i(), t()
                }))
            }
        }, {
            key: "pop", value: function (t, n, i) {
                var o = this;
                this.backgroundMask.remove(), t.parentNode.insertBefore(this.backgroundMask, t);
                var r = v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "block", this).call(this, t);
                nt.runAll(nt(this.backgroundMask).wait(this.delay + this.duration).queue(function (t) {
                    o.backgroundMask.remove(), t()
                }), nt(t, this.def).default({opacity: .4}, {opacity: 1}).queue(function (t) {
                    r(), i(), t()
                }), nt(n, this.def).default({transform: "translate3d(0, 0, 0)"}, {transform: "translate3d(0, 100%, 0)"}))
            }
        }]), e
    }(), sr = function (t) {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.timing,
                i = void 0 === n ? "cubic-bezier(0.4, 0, 0.2, 1)" : n, o = t.timingPop,
                r = void 0 === o ? "cubic-bezier(0.4, 0, 1, 1)" : o, a = t.delay, s = void 0 === a ? 0 : a,
                l = t.duration, u = void 0 === l ? .2 : l;
            p(this, e);
            var c = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {timing: i, delay: s, duration: u}));
            return c.timingPop = r, c
        }

        return b(e, Jo), g(e, [{
            key: "push", value: function (t, n, i) {
                var o = v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "block", this).call(this, t);
                nt.runAll(nt(t, this.def).default({
                    transform: "translate3D(0, 42px, 0)",
                    opacity: 0
                }, {transform: "translate3D(0, 0, 0)", opacity: 1}).queue(function (t) {
                    o(), i(), t()
                }))
            }
        }, {
            key: "pop", value: function (t, n, i) {
                var o = v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "block", this).call(this, t);
                nt.runAll(nt(n, this.def).default({
                    transform: "translate3D(0, 0, 0)",
                    opacity: 1
                }, {
                    css: {transform: "translate3D(0, 38px, 0)", opacity: 0},
                    timing: this.timingPop
                }).queue(function (t) {
                    o(), i(), t()
                }))
            }
        }]), e
    }(), lr = function (t) {
        function e(t) {
            return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t))
        }

        return b(e, Jo), g(e, [{
            key: "push", value: function (t, e, n) {
                n()
            }
        }, {
            key: "pop", value: function (t, e, n) {
                n()
            }
        }]), e
    }(), ur = {
        default: function () {
            return C.isAndroid() ? sr : er
        }, slide: function () {
            return C.isAndroid() ? rr : er
        }, lift: function () {
            return C.isAndroid() ? ar : nr
        }, fade: function () {
            return C.isAndroid() ? sr : or
        }, "slide-ios": er, "slide-md": rr, "lift-ios": nr, "lift-md": ar, "fade-ios": or, "fade-md": sr, none: lr
    }, cr = {
        ready: function (t, e) {
            e()
        }
    }, hr = function (t) {
        return "ONS-PAGE" !== t.nodeName && Q.throw("Only page elements can be children of navigator")
    }, dr = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return t._isRunning = !1, t._initialized = !1, t._pageLoader = jt, t._pageMap = new WeakMap, t._updateAnimatorFactory(), t
        }

        return b(e, Pi), g(e, [{
            key: "animatorFactory", get: function () {
                return this._animatorFactory
            }
        }]), g(e, [{
            key: "_getPageTarget", value: function () {
                return this._page || this.getAttribute("page")
            }
        }, {
            key: "connectedCallback", value: function () {
                var t = this;
                if (this.onDeviceBackButton = this._onDeviceBackButton.bind(this), !C.isAndroid() || "force" === this.getAttribute("swipeable")) {
                    var e = void 0;
                    this._swipe = new Qo({
                        element: this, getThreshold: function () {
                            return Math.max(.2, parseFloat(t.getAttribute("swipe-threshold")) || 0)
                        }, swipeMax: function () {
                            t._onSwipe && t._onSwipe(1, {
                                duration: e.durationSwipe,
                                timing: e.timingSwipe
                            }), t[t.swipeMax ? "swipeMax" : "popPage"]({animator: e}), e = null
                        }, swipeMid: function (n, i) {
                            t._onSwipe && t._onSwipe(n / i), e.translate(n, i, t.topPage.previousElementSibling, t.topPage)
                        }, swipeMin: function () {
                            t._onSwipe && t._onSwipe(0, {
                                duration: e.durationRestore,
                                timing: e.timingSwipe
                            }), e.restore(t.topPage.previousElementSibling, t.topPage), e = null
                        }, ignoreSwipe: function (n, i) {
                            if (!t._isRunning && t.children.length > 1) {
                                var o = parseInt(t.getAttribute("swipe-target-width") || 25, 10);
                                if ("right" === n.gesture.direction && o > i) {
                                    var r = function (t) {
                                        return /ons-back-button/i.test(t.tagName)
                                    };
                                    if (!r(n.target) && !Q.findParent(n.target, r, function (t) {
                                        return /ons-page/i.test(t.tagName)
                                    })) {
                                        var a = (t.topPage.pushedOptions || {}).animation || t.animatorFactory._animation,
                                            s = ur[a] instanceof Function ? ur[a].call() : ur[a];
                                        if (void 0 !== s && s.swipeable) return e = new s, !1
                                    }
                                }
                            }
                            return !0
                        }
                    }), this.attributeChangedCallback("swipeable")
                }
                if (!this._initialized) {
                    this._initialized = !0;
                    var i = Q.defer();
                    this.loaded = i.promise, cr.ready(this, function () {
                        var e = !Q.hasAnyComponentAsParent(t), o = {animation: "none", show: e};
                        if (0 === t.pages.length && t._getPageTarget()) t.pushPage(t._getPageTarget(), o).then(function () {
                            return i.resolve()
                        }); else if (t.pages.length > 0) {
                            for (var r = 0; r < t.pages.length; r++) hr(t.pages[r]);
                            t.topPage && n(t.topPage, function () {
                                return setTimeout(function () {
                                    i.resolve(), e && t.topPage._show(), t._updateLastPageBackButton()
                                }, 0)
                            })
                        } else n(t, function () {
                            0 === t.pages.length && t._getPageTarget() ? t.pushPage(t._getPageTarget(), o).then(function () {
                                return i.resolve()
                            }) : i.resolve()
                        })
                    })
                }
            }
        }, {
            key: "_updateAnimatorFactory", value: function () {
                this._animatorFactory = new O({
                    animators: ur,
                    baseClass: Jo,
                    baseClassName: "NavigatorAnimator",
                    defaultAnimation: this.getAttribute("animation")
                })
            }
        }, {
            key: "disconnectedCallback", value: function () {
                this._backButtonHandler.destroy(), this._backButtonHandler = null, this._swipe && this._swipe.dispose(), this._swipe = null
            }
        }, {
            key: "attributeChangedCallback", value: function (t, e, n) {
                switch (t) {
                    case"animation":
                        this._updateAnimatorFactory();
                        break;
                    case"swipeable":
                        this._swipe && this._swipe.update()
                }
            }
        }, {
            key: "popPage", value: function () {
                var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                e = this._preparePageAndOptions(null, e).options, Q.isInteger(e.times) && e.times > 1 && this._removePages(e.times);
                return this._popPage(e, function () {
                    return new Promise(function (e) {
                        t._pageLoader.unload(t.pages[t.pages.length - 1]), e()
                    })
                })
            }
        }, {
            key: "_popPage", value: function (t) {
                var e = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {
                    return Promise.resolve()
                };
                if (this._isRunning) return Promise.reject("popPage is already running.");
                if (this.pages.length <= 1) return Promise.reject("ons-navigator's page stack is empty.");
                if (this._emitPrePopEvent()) return Promise.reject("Canceled in prepop event.");
                var i = this.pages.length;
                return this._isRunning = !0, this.pages[i - 2].updateBackButton(i - 2 > 0), new Promise(function (o) {
                    var r = e.pages[i - 1], a = e.pages[i - 2];
                    (t = Q.extend({}, e.options || {}, r.pushedOptions || {}, t)).data && (a.data = Q.extend({}, a.data || {}, t.data || {}));
                    r._hide(), a.style.display = "";
                    (t.animator || e._animatorFactory.newAnimator(t)).pop(e.pages[i - 2], e.pages[i - 1], function () {
                        n().then(function () {
                            e._isRunning = !1, a._show(), Q.triggerElementEvent(e, "postpop", {
                                leavePage: r,
                                enterPage: a,
                                navigator: e
                            }), t.callback && t.callback(a), o(a)
                        })
                    })
                }).catch(function () {
                    return e._isRunning = !1
                })
            }
        }, {
            key: "pushPage", value: function (t) {
                var e = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = this._preparePageAndOptions(t, n);
                t = i.page;
                var o = function (i) {
                    hr(i), e._pageMap.set(i, t), (i = Q.extend(i, {data: n.data})).style.visibility = "hidden"
                };
                return (n = i.options).pageHTML ? this._pushPage(n, function () {
                    return new Promise(function (t) {
                        Ht.load({page: n.pageHTML, parent: e, params: n.data}, function (e) {
                            o(e), t()
                        })
                    })
                }) : this._pushPage(n, function () {
                    return new Promise(function (i) {
                        e._pageLoader.load({page: t, parent: e, params: n.data}, function (t) {
                            o(t), i()
                        })
                    })
                })
            }
        }, {
            key: "_pushPage", value: function () {
                var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {
                        return Promise.resolve()
                    };
                if (this._isRunning) return Promise.reject("pushPage is already running.");
                if (this._emitPrePushEvent()) return Promise.reject("Canceled in prepush event.");
                this._isRunning = !0;
                var i = O.parseAnimationOptionsString(this.getAttribute("animation-options"));
                e = Q.extend({}, this.options || {}, {animationOptions: i}, e);
                var o = this._animatorFactory.newAnimator(e);
                return n().then(function () {
                    var n = t.pages.length, i = t.pages[n - 1], r = e.leavePage || t.pages[n - 2];
                    return hr(i), i.updateBackButton(n > (e._replacePage ? 2 : 1)), i.pushedOptions = Q.extend({}, i.pushedOptions || {}, e || {}), i.data = Q.extend({}, i.data || {}, e.data || {}), i.unload = i.unload || e.unload, new Promise(function (n) {
                        var a = function () {
                            t._isRunning = !1, !1 !== e.show && setImmediate(function () {
                                return i._show()
                            }), Q.triggerElementEvent(t, "postpush", {
                                leavePage: r,
                                enterPage: i,
                                navigator: t
                            }), r && (r.style.display = "none"), e.callback && e.callback(i), n(i)
                        };
                        i.style.visibility = "", r ? (r._hide(), o.push(i, r, a)) : a()
                    })
                }).catch(function (e) {
                    throw t._isRunning = !1, e
                })
            }
        }, {
            key: "replacePage", value: function (t) {
                var e = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return this.pushPage(t, n).then(function (t) {
                    return e.pages.length > 1 && e._pageLoader.unload(e.pages[e.pages.length - 2]), e._updateLastPageBackButton(), Promise.resolve(t)
                })
            }
        }, {
            key: "insertPage", value: function (t, e) {
                var n = this, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    o = this._preparePageAndOptions(e, i);
                if (e = o.page, i = o.options, (t = this._normalizeIndex(t)) >= this.pages.length) return this.pushPage(e, i);
                e = "string" == typeof i.pageHTML ? i.pageHTML : e;
                var r = "string" == typeof i.pageHTML ? Ht : this._pageLoader;
                return new Promise(function (o) {
                    r.load({page: e, parent: n}, function (r) {
                        hr(r), n._pageMap.set(r, e), r = Q.extend(r, {
                            data: i.data,
                            pushedOptions: i
                        }), i.animationOptions = Q.extend({}, O.parseAnimationOptionsString(n.getAttribute("animation-options")), i.animationOptions || {}), r.style.display = "none", n.insertBefore(r, n.pages[t]), n.topPage.updateBackButton(!0), setTimeout(function () {
                            r = null, o(n.pages[t])
                        }, 1e3 / 60)
                    })
                })
            }
        }, {
            key: "removePage", value: function (t) {
                var e = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return (t = this._normalizeIndex(t)) < this.pages.length - 1 ? new Promise(function (n) {
                    var i = e.pages[t], o = e.topPage;
                    e._pageMap.delete(i), e._pageLoader.unload(i), 1 === e.pages.length && e.topPage.updateBackButton(!1), n(o)
                }) : this.popPage(n)
            }
        }, {
            key: "resetToPage", value: function (t) {
                var e = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = this._preparePageAndOptions(t, n);
                if (t = i.page, (n = i.options).animator || n.animation || n.pop || (n.animation = "none"), n.page || n.pageHTML || !this._getPageTarget() || (t = n.page = this._getPageTarget()), n.pop) return this._removePages(), this.insertPage(0, t, {data: n.data}).then(function () {
                    return e.popPage(n)
                });
                var o = n.callback;
                return n.callback = function (t) {
                    e._removePages(), t.updateBackButton(!1), o && o(t)
                }, this.pushPage(t, n)
            }
        }, {
            key: "bringPageTop", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                -1 === ["number", "string"].indexOf(void 0 === t ? "undefined" : f(t)) && Q.throw("First argument must be a page name or the index of an existing page. You supplied " + t);
                var n = "number" == typeof t ? this._normalizeIndex(t) : this._lastIndexOfPage(t), i = this.pages[n];
                if (n < 0) return this.pushPage(t, e);
                return e = this._preparePageAndOptions(i, e).options, n === this.pages.length - 1 ? Promise.resolve(i) : (i || Q.throw("Failed to find item " + t), this._isRunning ? Promise.reject("pushPage is already running.") : this._emitPrePushEvent() ? Promise.reject("Canceled in prepush event.") : (i.style.display = "", i.style.visibility = "hidden", i.parentNode.appendChild(i), this._pushPage(e)))
            }
        }, {
            key: "_preparePageAndOptions", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return "object" != (void 0 === e ? "undefined" : f(e)) && Q.throw("options must be an object. You supplied " + e), null !== t && void 0 !== t || !e.page || (t = e.page), e = Q.extend({}, this.options || {}, e, {page: t}), {
                    page: t,
                    options: e
                }
            }
        }, {
            key: "_removePages", value: function (t) {
                var e = this.pages, n = void 0 === t ? 0 : e.length - t;
                n = n < 0 ? 1 : n;
                for (var i = e.length - 2; i >= n; i--) this._pageMap.delete(e[i]), this._pageLoader.unload(e[i])
            }
        }, {
            key: "_updateLastPageBackButton", value: function () {
                var t = this.pages.length - 1;
                t >= 0 && this.pages[t].updateBackButton(t > 0)
            }
        }, {
            key: "_normalizeIndex", value: function (t) {
                return t >= 0 ? t : Math.abs(this.pages.length + t) % this.pages.length
            }
        }, {
            key: "_onDeviceBackButton", value: function (t) {
                this.pages.length > 1 ? this.popPage() : t.callParentHandler()
            }
        }, {
            key: "_lastIndexOfPage", value: function (t) {
                var e = void 0;
                for (e = this.pages.length - 1; e >= 0 && t !== this._pageMap.get(this.pages[e]); e--) ;
                return e
            }
        }, {
            key: "_emitPreEvent", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = !1;
                return Q.triggerElementEvent(this, "pre" + t, Q.extend({
                    navigator: this,
                    currentPage: this.pages[this.pages.length - 1],
                    cancel: function () {
                        return n = !0
                    }
                }, e)), n
            }
        }, {
            key: "_emitPrePushEvent", value: function () {
                return this._emitPreEvent("push")
            }
        }, {
            key: "_emitPrePopEvent", value: function () {
                var t = this.pages.length;
                return this._emitPreEvent("pop", {leavePage: this.pages[t - 1], enterPage: this.pages[t - 2]})
            }
        }, {
            key: "_createPageElement", value: function (t) {
                var e = Q.createElement(P.normalizePageHTML(t));
                return hr(e), e
            }
        }, {
            key: "_show", value: function () {
                var t = this;
                this.loaded.then(function () {
                    return t.topPage && t.topPage._show()
                })
            }
        }, {
            key: "_hide", value: function () {
                this.topPage && this.topPage._hide()
            }
        }, {
            key: "_destroy", value: function () {
                for (var t = this.pages.length - 1; t >= 0; t--) this._pageLoader.unload(this.pages[t]);
                this.remove()
            }
        }, {
            key: "pageLoader", get: function () {
                return this._pageLoader
            }, set: function (t) {
                t instanceof Bt || Q.throwPageLoader(), this._pageLoader = t
            }
        }, {
            key: "page", get: function () {
                return this._page
            }, set: function (t) {
                this._page = t
            }
        }, {
            key: "onDeviceBackButton", get: function () {
                return this._backButtonHandler
            }, set: function (t) {
                this._backButtonHandler && this._backButtonHandler.destroy(), this._backButtonHandler = R.createHandler(this, t)
            }
        }, {
            key: "topPage", get: function () {
                for (var t = this.lastElementChild; t && "ONS-PAGE" !== t.tagName;) t = t.previousElementSibling;
                return t
            }
        }, {
            key: "pages", get: function () {
                return Q.arrayFrom(this.children).filter(function (t) {
                    return "ONS-PAGE" === t.tagName
                })
            }
        }, {
            key: "onSwipe", get: function () {
                return this._onSwipe
            }, set: function (t) {
                !t || t instanceof Function || Q.throw('"onSwipe" must be a function'), this._onSwipe = t
            }
        }, {
            key: "options", get: function () {
                return this._options
            }, set: function (t) {
                this._options = t
            }
        }, {
            key: "_isRunning", set: function (t) {
                this.setAttribute("_is-running", t ? "true" : "false")
            }, get: function () {
                return JSON.parse(this.getAttribute("_is-running"))
            }
        }], [{
            key: "registerAnimator", value: function (t, e) {
                e.prototype instanceof Jo || Q.throwAnimator("Navigator"), ur[t] = e
            }
        }, {
            key: "observedAttributes", get: function () {
                return ["animation", "swipeable"]
            }
        }, {
            key: "animators", get: function () {
                return ur
            }
        }, {
            key: "NavigatorAnimator", get: function () {
                return Jo
            }
        }, {
            key: "events", get: function () {
                return ["prepush", "postpush", "prepop", "postpop"]
            }
        }, {
            key: "rewritables", get: function () {
                return cr
            }
        }]), e
    }();
    c.Navigator = dr, customElements.define("ons-navigator", dr);
    var fr = {
        "": "toolbar--*",
        ".toolbar__left": "toolbar--*__left",
        ".toolbar__center": "toolbar--*__center",
        ".toolbar__right": "toolbar--*__right"
    }, pr = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return n(t, function () {
                t._compile()
            }), t
        }

        return b(e, Pi), g(e, [{
            key: "attributeChangedCallback", value: function (t, e, n) {
                switch (t) {
                    case"class":
                        Q.restoreClass(this, "toolbar", fr);
                        break;
                    case"modifier":
                        B.onModifierChanged(e, n, this, fr)
                }
            }
        }, {
            key: "setVisibility", value: function (t) {
                var e = this;
                n(this, function () {
                    if (e.style.display = t ? "" : "none", e.parentNode) {
                        var n = Q.findChild(e.parentNode, ".page__background");
                        n && (n.style.top = t ? null : 0);
                        var i = Q.findChild(e.parentNode, ".page__content");
                        i && (i.style.top = t ? null : 0)
                    }
                })
            }
        }, {
            key: "show", value: function () {
                this.setVisibility(!0)
            }
        }, {
            key: "hide", value: function () {
                this.setVisibility(!1)
            }
        }, {
            key: "_getToolbarLeftItemsElement", value: function () {
                return this.querySelector(".left") || P.nullElement
            }
        }, {
            key: "_getToolbarCenterItemsElement", value: function () {
                return this.querySelector(".center") || P.nullElement
            }
        }, {
            key: "_getToolbarRightItemsElement", value: function () {
                return this.querySelector(".right") || P.nullElement
            }
        }, {
            key: "_getToolbarBackButtonLabelElement", value: function () {
                return this.querySelector("ons-back-button .back-button__label") || P.nullElement
            }
        }, {
            key: "_getToolbarBackButtonIconElement", value: function () {
                return this.querySelector("ons-back-button .back-button__icon") || P.nullElement
            }
        }, {
            key: "_compile", value: function () {
                N.prepare(this), this.classList.add("toolbar"), this._ensureToolbarItemElements(), B.initModifier(this, fr)
            }
        }, {
            key: "_ensureToolbarItemElements", value: function () {
                for (var t = this.childNodes.length - 1; t >= 0; t--) 1 != this.childNodes[t].nodeType && this.removeChild(this.childNodes[t]);
                var e = this._ensureToolbarElement("center");
                if (e.classList.add("toolbar__title"), 1 !== this.children.length || !this.children[0].classList.contains("center")) {
                    var n = this._ensureToolbarElement("left"), i = this._ensureToolbarElement("right");
                    this.children[0] === n && this.children[1] === e && this.children[2] === i || (this.appendChild(n), this.appendChild(e), this.appendChild(i))
                }
            }
        }, {
            key: "_ensureToolbarElement", value: function (t) {
                if (Q.findChild(this, ".toolbar__" + t)) {
                    var e = Q.findChild(this, ".toolbar__" + t);
                    return e.classList.add(t), e
                }
                var n = Q.findChild(this, "." + t) || Q.create("." + t);
                return n.classList.add("toolbar__" + t), n
            }
        }], [{
            key: "observedAttributes", get: function () {
                return ["modifier", "class"]
            }
        }]), e
    }();
    c.Toolbar = pr, customElements.define("ons-toolbar", pr);
    var gr = "page",
        mr = {"": "page--*", ".page__content": "page--*__content", ".page__background": "page--*__background"},
        _r = function (t) {
            function e() {
                p(this, e);
                var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return t._deriveHooks(), t._defaultClassName = gr, t.classList.add(gr), t._initialized = !1, n(t, function () {
                    t._compile(), t._isShown = !1, t._contentElement = t._getContentElement(), t._backgroundElement = t._getBackgroundElement()
                }), t
            }

            return b(e, Pi), g(e, [{
                key: "_compile", value: function () {
                    var t = this;
                    N.prepare(this);
                    var e = Q.findChild(this, "ons-toolbar"),
                        n = Q.findChild(this, ".page__background") || Q.findChild(this, ".background") || document.createElement("div");
                    n.classList.add("page__background"), this.insertBefore(n, !e && this.firstChild || e && e.nextSibling);
                    var i = Q.findChild(this, ".page__content") || Q.findChild(this, ".content") || document.createElement("div");
                    i.classList.add("page__content"), i.parentElement || Q.arrayFrom(this.childNodes).forEach(function (e) {
                        (1 !== e.nodeType || t._elementShouldBeMoved(e)) && i.appendChild(e)
                    }), this._tryToFillStatusBar(i), this.insertBefore(i, n.nextSibling), e && Q.hasModifier(e, "transparent") || 1 !== i.children.length || !Q.isPageControl(i.children[0]) || (this._defaultClassName += " page--wrapper", this.attributeChangedCallback("class"));
                    Q.findChild(this, "ons-bottom-toolbar") && (this._defaultClassName += " page-with-bottom-toolbar", this.attributeChangedCallback("class")), B.initModifier(this, mr)
                }
            }, {
                key: "_elementShouldBeMoved", value: function (t) {
                    if (t.classList.contains("page__background")) return !1;
                    var e = t.tagName.toLowerCase();
                    if ("ons-fab" === e) return !t.hasAttribute("position");
                    return t.hasAttribute("inline") || -1 === ["script", "ons-toolbar", "ons-bottom-toolbar", "ons-modal", "ons-speed-dial", "ons-dialog", "ons-alert-dialog", "ons-popover", "ons-action-sheet"].indexOf(e)
                }
            }, {
                key: "_tryToFillStatusBar", value: function () {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._contentElement;
                    P.autoStatusBarFill(function () {
                        Q.toggleAttribute(t, "status-bar-fill", !Q.findParent(t, function (t) {
                            return t.hasAttribute("status-bar-fill")
                        }) && (t._canAnimateToolbar(e) || !Q.findChild(e, Q.isPageControl)))
                    })
                }
            }, {
                key: "_canAnimateToolbar", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._contentElement;
                    return !!Q.findChild(this, "ons-toolbar") || !!Q.findChild(t, function (t) {
                        return Q.match(t, "ons-toolbar") && !t.hasAttribute("inline")
                    })
                }
            }, {
                key: "connectedCallback", value: function () {
                    var t = this;
                    Q.isAttached(this) && n(this, function () {
                        t._tryToFillStatusBar(), t.hasAttribute("on-infinite-scroll") && t.attributeChangedCallback("on-infinite-scroll", null, t.getAttribute("on-infinite-scroll")), t._initialized || (t._initialized = !0, setImmediate(function () {
                            t.onInit && t.onInit(), Q.triggerElementEvent(t, "init")
                        }), Q.hasAnyComponentAsParent(t) || setImmediate(function () {
                            return t._show()
                        }))
                    })
                }
            }, {
                key: "updateBackButton", value: function (t) {
                    this.backButton && (t ? this.backButton.show() : this.backButton.hide())
                }
            }, {
                key: "_onScroll", value: function () {
                    var t = this, e = this._contentElement,
                        n = (e.scrollTop + e.clientHeight) / e.scrollHeight >= this._infiniteScrollLimit;
                    this._onInfiniteScroll && !this._loadingContent && n && (this._loadingContent = !0, this._onInfiniteScroll(function () {
                        return t._loadingContent = !1
                    }))
                }
            }, {
                key: "_getContentElement", value: function () {
                    var t = Q.findChild(this, ".page__content");
                    if (t) return t;
                    Q.throw('Fail to get ".page__content" element')
                }
            }, {
                key: "_getBackgroundElement", value: function () {
                    var t = Q.findChild(this, ".page__background");
                    if (t) return t;
                    Q.throw('Fail to get ".page__background" element')
                }
            }, {
                key: "_getBottomToolbarElement", value: function () {
                    return Q.findChild(this, "ons-bottom-toolbar") || P.nullElement
                }
            }, {
                key: "_getToolbarElement", value: function () {
                    return Q.findChild(this, "ons-toolbar") || document.createElement("ons-toolbar")
                }
            }, {
                key: "attributeChangedCallback", value: function (t, e, n) {
                    var i = this;
                    switch (t) {
                        case"class":
                            Q.restoreClass(this, this._defaultClassName, mr);
                            break;
                        case"modifier":
                            B.onModifierChanged(e, n, this, mr);
                            break;
                        case"on-infinite-scroll":
                            this.onInfiniteScroll = null === n ? null : function (t) {
                                var e = Q.findFromPath(n);
                                i.onInfiniteScroll = e, e(t)
                            }
                    }
                }
            }, {
                key: "_show", value: function () {
                    !this._isShown && Q.isAttached(this) && (this._isShown = !0, this.setAttribute("shown", ""), this.onShow && this.onShow(), Q.triggerElementEvent(this, "show"), Q.propagateAction(this, "_show"))
                }
            }, {
                key: "_hide", value: function () {
                    this._isShown && (this._isShown = !1, this.removeAttribute("shown"), this.onHide && this.onHide(), Q.triggerElementEvent(this, "hide"), Q.propagateAction(this, "_hide"))
                }
            }, {
                key: "_destroy", value: function () {
                    this._hide(), this.onDestroy && this.onDestroy(), Q.triggerElementEvent(this, "destroy"), this.onDeviceBackButton && this.onDeviceBackButton.destroy(), Q.propagateAction(this, "_destroy"), this.remove()
                }
            }, {
                key: "_deriveHooks", value: function () {
                    var t = this;
                    this.constructor.events.forEach(function (e) {
                        var n = "on" + e.charAt(0).toUpperCase() + e.slice(1);
                        Object.defineProperty(t, n, {
                            configurable: !0, enumerable: !0, get: function () {
                                return t["_" + n]
                            }, set: function (e) {
                                e instanceof Function || Q.throw('"' + n + '" hook must be a function'), t["_" + n] = e.bind(t)
                            }
                        })
                    })
                }
            }, {
                key: "name", set: function (t) {
                    this.setAttribute("name", t)
                }, get: function () {
                    return this.getAttribute("name")
                }
            }, {
                key: "backButton", get: function () {
                    return this.querySelector("ons-back-button")
                }
            }, {
                key: "onInfiniteScroll", set: function (t) {
                    var e = this;
                    !t || t instanceof Function || Q.throw('"onInfiniteScroll" must be function or null'), n(this, function () {
                        t ? e._onInfiniteScroll || (e._infiniteScrollLimit = .9, e._boundOnScroll = e._onScroll.bind(e), setImmediate(function () {
                            return e._contentElement.addEventListener("scroll", e._boundOnScroll)
                        })) : e._contentElement.removeEventListener("scroll", e._boundOnScroll), e._onInfiniteScroll = t
                    })
                }, get: function () {
                    return this._onInfiniteScroll
                }
            }, {
                key: "onDeviceBackButton", get: function () {
                    return this._backButtonHandler
                }, set: function (t) {
                    this._backButtonHandler && this._backButtonHandler.destroy(), this._backButtonHandler = R.createHandler(this, t)
                }
            }, {
                key: "scrollTop", get: function () {
                    return this._contentElement.scrollTop
                }, set: function (t) {
                    this._contentElement.scrollTop = t
                }
            }], [{
                key: "observedAttributes", get: function () {
                    return ["modifier", "on-infinite-scroll", "class"]
                }
            }, {
                key: "events", get: function () {
                    return ["init", "show", "hide", "destroy"]
                }
            }]), e
        }();
    c.Page = _r, customElements.define("ons-page", _r);
    var vr = function (t) {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.timing,
                    i = void 0 === n ? "cubic-bezier(.1, .7, .4, 1)" : n, o = t.delay, r = void 0 === o ? 0 : o,
                    a = t.duration, s = void 0 === a ? .2 : a;
                return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
                    timing: i,
                    delay: r,
                    duration: s
                }))
            }

            return b(e, Ti), g(e, [{
                key: "show", value: function (t, e) {
                    e()
                }
            }, {
                key: "hide", value: function (t, e) {
                    e()
                }
            }, {
                key: "_animate", value: function (t, e) {
                    var n = e.from, i = e.to, o = e.options, r = e.callback, a = e.restore, s = void 0 !== a && a,
                        l = e.animation;
                    return o = Q.extend({}, this.options, o), l && (n = l.from, i = l.to), l = nt(t), s && (l = l.saveStyle()), l = l.queue(n).wait(this.delay).queue({
                        css: i,
                        duration: this.duration,
                        timing: this.timing
                    }), s && (l = l.restoreStyle()), r && (l = l.queue(function (t) {
                        r(), t()
                    })), l
                }
            }, {
                key: "_animateAll", value: function (t, e) {
                    var n = this;
                    Object.keys(e).forEach(function (i) {
                        return n._animate(t[i], e[i]).play()
                    })
                }
            }]), e
        }(), br = {out: {from: {opacity: 1}, to: {opacity: 0}}, in: {from: {opacity: 0}, to: {opacity: 1}}},
        yr = function (t) {
            function e() {
                return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }

            return b(e, vr), g(e, [{
                key: "show", value: function (t, e) {
                    this._animateAll(t, {_mask: br.in, _popover: {animation: br.in, restore: !0, callback: e}})
                }
            }, {
                key: "hide", value: function (t, e) {
                    this._animateAll(t, {_mask: br.out, _popover: {animation: br.out, restore: !0, callback: e}})
                }
            }]), e
        }(), kr = function (t) {
            function e() {
                return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }

            return b(e, yr), g(e, [{
                key: "show", value: function (t, e) {
                    this._animateAll(t, {
                        _mask: br.in,
                        _popover: {
                            from: {transform: "scale3d(1.3, 1.3, 1.0)", opacity: 0},
                            to: {transform: "scale3d(1.0, 1.0,  1.0)", opacity: 1},
                            restore: !0,
                            callback: e
                        }
                    })
                }
            }]), e
        }(), wr = {
            ".popover": "popover--*",
            ".popover-mask": "popover-mask--*",
            ".popover__content": "popover--*__content",
            ".popover__arrow": "popover--*__arrow"
        }, Er = {
            default: function () {
                return C.isAndroid() ? yr : kr
            }, none: vr, "fade-ios": kr, "fade-md": yr
        }, Cr = {up: "bottom", left: "right", down: "top", right: "left"}, Ar = function (t) {
            function e() {
                p(this, e);
                var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return t._boundOnChange = t._onChange.bind(t), n(t, function () {
                    t._compile(), t.style.display = "none"
                }), t
            }

            return b(e, Ni), g(e, [{
                key: "_updateAnimatorFactory", value: function () {
                    return new O({
                        animators: Er,
                        baseClass: vr,
                        baseClassName: "PopoverAnimator",
                        defaultAnimation: this.getAttribute("animation") || "default"
                    })
                }
            }, {
                key: "_toggleStyle", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    t ? (this.style.display = "block", this._currentTarget = e.target, this._positionPopover(e.target)) : (this.style.display = "none", this._clearStyles())
                }
            }, {
                key: "_positionPopover", value: function (t) {
                    var e = this._radius, n = this._content, i = this._margin, o = Li.getSafeAreaLengths(),
                        r = Li.getSafeAreaDOMRect(), a = t.getBoundingClientRect(), s = Q.hasModifier(this, "material"),
                        l = s && this.hasAttribute("cover-target"),
                        u = (Q.findParent(this, "ons-page") || document.body).getBoundingClientRect(), c = {
                            top: Math.max(u.top, r.top),
                            left: Math.max(u.left, r.left),
                            bottom: Math.min(u.bottom, r.bottom),
                            right: Math.min(u.right, r.right)
                        }, h = {
                            top: a.top - (c.top + i),
                            left: a.left - (c.left + i),
                            bottom: c.bottom - i - a.bottom,
                            right: c.right - i - a.right
                        }, d = {
                            top: a.top + Math.round(a.height / 2) - (c.top + i),
                            left: a.left + Math.round(a.width / 2) - (c.left + i),
                            bottom: c.bottom - i - a.bottom + Math.round(a.height / 2),
                            right: c.right - i - a.right + Math.round(a.width / 2)
                        }, f = this._calculateDirections(h), p = f.vertical, g = f.primary, m = f.secondary;
                    this._currentDirection = g, Q.addModifier(this, g);
                    var _ = p ? "width" : "height", v = function (t) {
                            return {
                                width: parseInt(t.getPropertyValue("width"), 10),
                                height: parseInt(t.getPropertyValue("height"), 10)
                            }
                        }(window.getComputedStyle(n)), b = l ? 0 : (p ? a.height : a.width) + (s ? 0 : 14),
                        y = Math.max(o[g] + i, o[g] + i + h[g] + b), k = Math.max(o[m] + i, o[m] + i + d[m] - v[_] / 2);
                    this._popover.style[g] = y + "px", this._popover.style[m] = k + "px", this._arrow.style[m] = Math.max(e, o[m] + i + d[m] - k) + "px"
                }
            }, {
                key: "_calculateDirections", value: function (t) {
                    var e = (this.getAttribute("direction") || "up down left right").split(/\s+/).map(function (t) {
                        return Cr[t]
                    }).sort(function (e, n) {
                        return t[e] - t[n]
                    })[0], n = "top" == e || "bottom" == e, i = void 0;
                    return i = n ? t.left < t.right ? "left" : "right" : t.top < t.bottom ? "top" : "bottom", {
                        vertical: n,
                        primary: e,
                        secondary: i
                    }
                }
            }, {
                key: "_clearStyles", value: function () {
                    var t = this;
                    this._currentDirection = null, ["top", "bottom", "left", "right"].forEach(function (e) {
                        t._arrow.style[e] = t._content.style[e] = t._popover.style[e] = "", Q.removeModifier(t, e)
                    })
                }
            }, {
                key: "_onChange", value: function () {
                    var t = this;
                    setImmediate(function () {
                        t._currentTarget && t._positionPopover(t._currentTarget)
                    })
                }
            }, {
                key: "_compile", value: function () {
                    if (N.prepare(this), !this._popover || !this._mask) {
                        if (this._popover && this._content) {
                            if (!this._mask) {
                                var t = document.createElement("div");
                                t.classList.add("popover-mask"), this.insertBefore(t, this.firstChild)
                            }
                            if (!this._arrow) {
                                var e = document.createElement("div");
                                e.classList.add("popover__arrow"), this._popover.appendChild(e)
                            }
                        } else {
                            for (var n = Q.createFragment('\n        <div class="popover-mask"></div>\n        <div class="popover">\n          <div class="popover__content"></div>\n          <div class="popover__arrow"></div>\n        </div>\n      '), i = n.querySelector(".popover__content"); this.childNodes[0];) i.appendChild(this.childNodes[0]);
                            this.appendChild(n)
                        }
                        this.hasAttribute("style") && (this._popover.setAttribute("style", this.getAttribute("style")), this.removeAttribute("style")), B.initModifier(this, this._scheme)
                    }
                }
            }, {
                key: "show", value: function (t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return "string" == typeof (n = !t || "object" !== (void 0 === t ? "undefined" : f(t)) || t instanceof Event || t instanceof HTMLElement ? _({}, n, {target: t}) : _({}, t)).target ? n.target = document.querySelector(n.target) : n.target instanceof Event && (n.target = n.target.target), n.target instanceof HTMLElement || Q.throw("Invalid target type or undefined"), v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "show", this).call(this, n)
                }
            }, {
                key: "connectedCallback", value: function () {
                    var t = this;
                    v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "connectedCallback", this).call(this), window.addEventListener("resize", this._boundOnChange, !1), this._margin = this._margin || parseInt(window.getComputedStyle(this).getPropertyValue("top")), this._margin = this._margin || 6, n(this, function () {
                        t._radius = parseInt(window.getComputedStyle(t._content).getPropertyValue("border-top-left-radius"))
                    })
                }
            }, {
                key: "disconnectedCallback", value: function () {
                    v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "disconnectedCallback", this).call(this), window.removeEventListener("resize", this._boundOnChange, !1)
                }
            }, {
                key: "attributeChangedCallback", value: function (t, n, i) {
                    if ("direction" === t) return this._boundOnChange();
                    "modifier" === t && this._currentDirection && Q.addModifier(this, this._currentDirection), v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "attributeChangedCallback", this).call(this, t, n, i)
                }
            }, {
                key: "_scheme", get: function () {
                    return wr
                }
            }, {
                key: "_mask", get: function () {
                    return Q.findChild(this, ".popover-mask")
                }
            }, {
                key: "_popover", get: function () {
                    return Q.findChild(this, ".popover")
                }
            }, {
                key: "_content", get: function () {
                    return Q.findChild(this._popover, ".popover__content")
                }
            }, {
                key: "_arrow", get: function () {
                    return Q.findChild(this._popover, ".popover__arrow")
                }
            }], [{
                key: "registerAnimator", value: function (t, e) {
                    e.prototype instanceof vr || Q.throwAnimator("Popover"), Er[t] = e
                }
            }, {
                key: "observedAttributes", get: function () {
                    return [].concat(w(v(e.__proto__ || Object.getPrototypeOf(e), "observedAttributes", this)), ["direction"])
                }
            }, {
                key: "animators", get: function () {
                    return Er
                }
            }, {
                key: "PopoverAnimator", get: function () {
                    return vr
                }
            }]), e
        }();
    c.Popover = Ar, customElements.define("ons-popover", Ar);
    var Sr = {
            ".progress-bar": "progress-bar--*",
            ".progress-bar__primary": "progress-bar--*__primary",
            ".progress-bar__secondary": "progress-bar--*__secondary"
        },
        Pr = Q.createElement('\n  <div class="progress-bar">\n    <div class="progress-bar__secondary"></div>\n    <div class="progress-bar__primary"></div>\n  </div>\n'),
        Or = "indeterminate", xr = function (t) {
            function e() {
                p(this, e);
                var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return n(t, function () {
                    return t._compile()
                }), t
            }

            return b(e, Pi), g(e, [{
                key: "_compile", value: function () {
                    this._isCompiled() ? this._template = Q.findChild(this, ".progress-bar") : this._template = Pr.cloneNode(!0), this._primary = Q.findChild(this._template, ".progress-bar__primary"), this._secondary = Q.findChild(this._template, ".progress-bar__secondary"), this._updateDeterminate(), this._updateValue(), this.appendChild(this._template), N.prepare(this), B.initModifier(this, Sr)
                }
            }, {
                key: "_isCompiled", value: function () {
                    if (!Q.findChild(this, ".progress-bar")) return !1;
                    var t = Q.findChild(this, ".progress-bar");
                    return !!Q.findChild(t, ".progress-bar__secondary") && !!Q.findChild(t, ".progress-bar__primary")
                }
            }, {
                key: "attributeChangedCallback", value: function (t, e, n) {
                    "modifier" === t ? (B.onModifierChanged(e, n, this, Sr), this.hasAttribute(Or) && this._updateDeterminate()) : "value" === t || "secondary-value" === t ? this._updateValue() : t === Or && this._updateDeterminate()
                }
            }, {
                key: "_updateDeterminate", value: function () {
                    var t = this;
                    n(this, function () {
                        return Q.toggleModifier(t, Or, {force: t.hasAttribute(Or)})
                    })
                }
            }, {
                key: "_updateValue", value: function () {
                    var t = this;
                    n(this, function () {
                        t._primary.style.width = t.hasAttribute("value") ? t.getAttribute("value") + "%" : "0%", t._secondary.style.width = t.hasAttribute("secondary-value") ? t.getAttribute("secondary-value") + "%" : "0%"
                    })
                }
            }, {
                key: "value", set: function (t) {
                    ("number" != typeof t || t < 0 || t > 100) && Q.throw("Invalid value"), this.setAttribute("value", Math.floor(t))
                }, get: function () {
                    return parseInt(this.getAttribute("value") || "0")
                }
            }, {
                key: "secondaryValue", set: function (t) {
                    ("number" != typeof t || t < 0 || t > 100) && Q.throw("Invalid value"), this.setAttribute("secondary-value", Math.floor(t))
                }, get: function () {
                    return parseInt(this.getAttribute("secondary-value") || "0")
                }
            }, {
                key: "indeterminate", set: function (t) {
                    t ? this.setAttribute(Or, "") : this.removeAttribute(Or)
                }, get: function () {
                    return this.hasAttribute(Or)
                }
            }], [{
                key: "observedAttributes", get: function () {
                    return ["modifier", "value", "secondary-value", Or]
                }
            }]), e
        }();
    c.ProgressBar = xr, customElements.define("ons-progress-bar", xr);
    var Tr = {
            ".progress-circular": "progress-circular--*",
            ".progress-circular__background": "progress-circular--*__background",
            ".progress-circular__primary": "progress-circular--*__primary",
            ".progress-circular__secondary": "progress-circular--*__secondary"
        },
        Lr = Q.createElement('\n  <svg class="progress-circular">\n    <circle class="progress-circular__background" />\n    <circle class="progress-circular__secondary" cx="50%" cy="50%" r="40%" />\n    <circle class="progress-circular__primary" cx="50%" cy="50%" r="40%" />\n  </svg>\n'),
        Mr = "indeterminate", Dr = function (t) {
            function e() {
                p(this, e);
                var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return n(t, function () {
                    return t._compile()
                }), t
            }

            return b(e, Pi), g(e, [{
                key: "attributeChangedCallback", value: function (t, e, n) {
                    "modifier" === t ? (B.onModifierChanged(e, n, this, Tr), this.hasAttribute(Mr) && this._updateDeterminate()) : "value" === t || "secondary-value" === t ? this._updateValue() : t === Mr && this._updateDeterminate()
                }
            }, {
                key: "_updateDeterminate", value: function () {
                    var t = this;
                    n(this, function () {
                        return Q.toggleModifier(t, Mr, {force: t.hasAttribute(Mr)})
                    })
                }
            }, {
                key: "_updateValue", value: function () {
                    var t = this;
                    this.hasAttribute("value") && n(this, function () {
                        var e = Math.ceil(251.32 * t.getAttribute("value") * .01);
                        t._primary.style["stroke-dasharray"] = e + "%, 251.32%"
                    }), this.hasAttribute("secondary-value") ? n(this, function () {
                        var e = Math.ceil(251.32 * t.getAttribute("secondary-value") * .01);
                        t._secondary.style.display = null, t._secondary.style["stroke-dasharray"] = e + "%, 251.32%"
                    }) : n(this, function () {
                        t._secondary.style.display = "none"
                    })
                }
            }, {
                key: "_compile", value: function () {
                    this._isCompiled() ? this._template = Q.findChild(this, ".progress-circular") : this._template = Lr.cloneNode(!0), this._primary = Q.findChild(this._template, ".progress-circular__primary"), this._secondary = Q.findChild(this._template, ".progress-circular__secondary"), this._updateDeterminate(), this._updateValue(), this.appendChild(this._template), N.prepare(this), B.initModifier(this, Tr)
                }
            }, {
                key: "_isCompiled", value: function () {
                    if (!Q.findChild(this, ".progress-circular")) return !1;
                    var t = Q.findChild(this, ".progress-circular");
                    return !!Q.findChild(t, ".progress-circular__secondary") && !!Q.findChild(t, ".progress-circular__primary")
                }
            }, {
                key: "value", set: function (t) {
                    ("number" != typeof t || t < 0 || t > 100) && Q.throw("Invalid value"), this.setAttribute("value", Math.floor(t))
                }, get: function () {
                    return parseInt(this.getAttribute("value") || "0")
                }
            }, {
                key: "secondaryValue", set: function (t) {
                    ("number" != typeof t || t < 0 || t > 100) && Q.throw("Invalid value"), this.setAttribute("secondary-value", Math.floor(t))
                }, get: function () {
                    return parseInt(this.getAttribute("secondary-value") || "0")
                }
            }, {
                key: "indeterminate", set: function (t) {
                    t ? this.setAttribute(Mr, "") : this.removeAttribute(Mr)
                }, get: function () {
                    return this.hasAttribute(Mr)
                }
            }], [{
                key: "observedAttributes", get: function () {
                    return ["modifier", "value", "secondary-value", Mr]
                }
            }]), e
        }();
    c.ProgressCircular = Dr, customElements.define("ons-progress-circular", Dr);
    var Ir = "initial", Nr = function (t, e) {
        return Q.throw('"' + t + '" must be ' + e)
    }, Br = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return t._shouldFixScroll = Q.globals.isUIWebView, t._onDrag = t._onDrag.bind(t), t._onDragStart = t._onDragStart.bind(t), t._onDragEnd = t._onDragEnd.bind(t), t._onScroll = t._onScroll.bind(t), t._setState(Ir, !0), t._hide(), t
        }

        return b(e, Pi), g(e, [{
            key: "_setStyle", value: function () {
                var t = this.height + "px";
                d(this, {height: t, lineHeight: t}), "" === this.style.display && this._show()
            }
        }, {
            key: "_onScroll", value: function (t) {
                var e = this._pageElement;
                e.scrollTop < 0 && (e.scrollTop = 0)
            }
        }, {
            key: "_canConsumeGesture", value: function (t) {
                return "up" === t.direction || "down" === t.direction
            }
        }, {
            key: "_onDragStart", value: function (t) {
                var e = this;
                if (t.gesture && !this.disabled) {
                    var n = t.gesture.center.clientY + this._pageElement.scrollTop, i = window.innerHeight,
                        o = this._shouldFixScroll ? .8 : 1;
                    if (this._ignoreDrag = t.consumed || n > i * o, !this._ignoreDrag) {
                        var r = t.consume;
                        t.consume = function () {
                            r && r(), e._ignoreDrag = !0, e._hide()
                        }, this._canConsumeGesture(t.gesture) && (r && r(), t.consumed = !0, this._show())
                    }
                    this._startScroll = this._pageElement.scrollTop
                }
            }
        }, {
            key: "_onDrag", value: function (t) {
                var e = this;
                if (t.gesture && !this.disabled && !this._ignoreDrag && this._canConsumeGesture(t.gesture)) {
                    "none" === this.style.display && this._show(), t.stopPropagation();
                    var n = t.gesture.center.clientY + this._pageElement.scrollTop, i = window.innerHeight;
                    this._shouldFixScroll && (this._pageElement.scrollTop = this._startScroll - t.gesture.deltaY, ("up" !== t.gesture.interimDirection || n <= .5 * i) && t.gesture.preventDefault());
                    var o = Math.max(t.gesture.deltaY - this._startScroll, 0);
                    if (o !== this._currentTranslation) {
                        var r = this.thresholdHeight;
                        r > 0 && o >= r ? (t.gesture.stopDetect(), setImmediate(function () {
                            return e._finish()
                        })) : o >= this.height ? this._setState("preaction") : this._setState(Ir), this._translateTo(o)
                    }
                }
            }
        }, {
            key: "_onDragEnd", value: function (t) {
                if (t.gesture && !this.disabled && !this._ignoreDrag && (t.stopPropagation(), this._currentTranslation > 0)) {
                    this._currentTranslation > this.height ? this._finish() : this._translateTo(0, {animate: !0})
                }
            }
        }, {
            key: "_finish", value: function () {
                var t = this;
                this._setState("action"), this._translateTo(this.height, {animate: !0});
                (this.onAction || function (t) {
                    return t()
                })(function () {
                    t._translateTo(0, {animate: !0}), t._setState(Ir)
                })
            }
        }, {
            key: "_setState", value: function (t, e) {
                var n = this.state;
                this.setAttribute("state", t), e || n === this.state || Q.triggerElementEvent(this, "changestate", {
                    pullHook: this,
                    state: t,
                    lastState: n
                })
            }
        }, {
            key: "_show", value: function () {
                var t = this;
                setImmediate(function () {
                    t.style.display = "", t._pageElement && (t._pageElement.style.marginTop = "-" + t.height + "px")
                })
            }
        }, {
            key: "_hide", value: function () {
                this.style.display = "none", this._pageElement && (this._pageElement.style.marginTop = "")
            }
        }, {
            key: "_translateTo", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (0 != this._currentTranslation || 0 != t) {
                    this._currentTranslation = t;
                    var n = e.animate ? {duration: .3, timing: "cubic-bezier(.1, .7, .1, 1)"} : {};
                    this._onPull && this._onPull((t / this.height).toFixed(2), n);
                    var i = this.hasAttribute("fixed-content") ? this : this._pageElement;
                    nt(i).queue({transform: "translate3d(0px, " + t + "px, 0px)"}, n).play(function () {
                        0 === t && d.clear(i, "transition transform"), e.callback instanceof Function && e.callback()
                    })
                }
            }
        }, {
            key: "_disableDragLock", value: function () {
                this._dragLockDisabled = !0, this._setupListeners(!0)
            }
        }, {
            key: "_setupListeners", value: function (t) {
                var e = this, n = function (t) {
                    return e._pageElement[t + "EventListener"]("scroll", e._onScroll, !1)
                }, i = function (t) {
                    var n = {passive: !0};
                    e._gestureDetector[t]("drag", e._onDrag, n), e._gestureDetector[t]("dragstart", e._onDragStart, n), e._gestureDetector[t]("dragend", e._onDragEnd, n)
                };
                this._gestureDetector && (i("off"), this._gestureDetector.dispose(), this._gestureDetector = null), n("remove"), t && (this._gestureDetector = new st(this._pageElement, {
                    dragMinDistance: 1,
                    dragDistanceCorrection: !1,
                    dragLockToAxis: !this._dragLockDisabled,
                    passive: !this._shouldFixScroll
                }), i("on"), n("add"))
            }
        }, {
            key: "connectedCallback", value: function () {
                this._currentTranslation = 0, this._pageElement = this.parentNode, this._setupListeners(!0), this._setStyle()
            }
        }, {
            key: "disconnectedCallback", value: function () {
                this._hide(), this._setupListeners(!1)
            }
        }, {
            key: "attributeChangedCallback", value: function (t, e, n) {
                "height" === t && this._pageElement && this._setStyle()
            }
        }, {
            key: "onAction", get: function () {
                return this._onAction
            }, set: function (t) {
                !t || t instanceof Function || Nr("onAction", "function or null"), this._onAction = t
            }
        }, {
            key: "onPull", get: function () {
                return this._onPull
            }, set: function (t) {
                !t || t instanceof Function || Nr("onPull", "function or null"), this._onPull = t
            }
        }, {
            key: "height", set: function (t) {
                Q.isInteger(t) || Nr("height", "integer"), this.setAttribute("height", t + "px")
            }, get: function () {
                return parseInt(this.getAttribute("height") || "64", 10)
            }
        }, {
            key: "thresholdHeight", set: function (t) {
                Q.isInteger(t) || Nr("thresholdHeight", "integer"), this.setAttribute("threshold-height", t + "px")
            }, get: function () {
                return parseInt(this.getAttribute("threshold-height") || "96", 10)
            }
        }, {
            key: "state", get: function () {
                return this.getAttribute("state")
            }
        }, {
            key: "pullDistance", get: function () {
                return this._currentTranslation
            }
        }, {
            key: "disabled", set: function (t) {
                return Q.toggleAttribute(this, "disabled", t)
            }, get: function () {
                return this.hasAttribute("disabled")
            }
        }], [{
            key: "observedAttributes", get: function () {
                return ["height"]
            }
        }, {
            key: "events", get: function () {
                return ["changestate"]
            }
        }]), e
    }();
    c.PullHook = Br, customElements.define("ons-pull-hook", Br);
    var jr = {"": "range--*", ".range__input": "range--*__input", ".range__focus-ring": "range--*__focus-ring"},
        Hr = function (t) {
            function e() {
                p(this, e);
                var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return t._onMouseDown = t._onMouseDown.bind(t), t._onMouseUp = t._onMouseUp.bind(t), t._onTouchStart = t._onTouchStart.bind(t), t._onTouchEnd = t._onTouchEnd.bind(t), t._onInput = t._update.bind(t), t._onDragstart = t._onDragstart.bind(t), t._onDragend = t._onDragend.bind(t), t
            }

            return b(e, No), g(e, [{
                key: "_compile", value: function () {
                    v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_compile", this).call(this), this._updateDisabled(this.hasAttribute("disabled"))
                }
            }, {
                key: "_update", value: function () {
                    var t = this._input, e = this._focusRing;
                    t.style.backgroundSize = 100 * this._ratio + "% 2px", e.value = this.value, "" === t.min && "0" === t.value || t.min === t.value ? t.setAttribute("_zero", "") : t.removeAttribute("_zero"), ["min", "max"].forEach(function (n) {
                        return e[n] = t[n]
                    })
                }
            }, {
                key: "_onMouseDown", value: function (t) {
                    var e = this;
                    this._input.classList.add("range__input--active"), setImmediate(function () {
                        return e._input.focus()
                    })
                }
            }, {
                key: "_onTouchStart", value: function (t) {
                    this._onMouseDown()
                }
            }, {
                key: "_onMouseUp", value: function (t) {
                    this._input.classList.remove("range__input--active")
                }
            }, {
                key: "_onTouchEnd", value: function (t) {
                    this._onMouseUp(t)
                }
            }, {
                key: "_onDragstart", value: function (t) {
                    t.consumed = !0, t.gesture.stopPropagation(), this._input.classList.add("range__input--active"), this.addEventListener("drag", this._onDrag)
                }
            }, {
                key: "_onDrag", value: function (t) {
                    t.stopPropagation()
                }
            }, {
                key: "_onDragend", value: function (t) {
                    this._input.classList.remove("range__input--active"), this.removeEventListener("drag", this._onDrag)
                }
            }, {
                key: "attributeChangedCallback", value: function (t, n, i) {
                    "disabled" === t && this._updateDisabled(i), v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "attributeChangedCallback", this).call(this, t, n, i)
                }
            }, {
                key: "_updateDisabled", value: function (t) {
                    t ? this.classList.add("range--disabled") : this.classList.remove("range--disabled")
                }
            }, {
                key: "connectedCallback", value: function () {
                    this._setupListeners(!0)
                }
            }, {
                key: "disconnectedCallback", value: function () {
                    this._setupListeners(!1)
                }
            }, {
                key: "_setupListeners", value: function (t) {
                    var e = (t ? "add" : "remove") + "EventListener";
                    Q[e](this, "touchstart", this._onTouchStart, {passive: !0}), this[e]("mousedown", this._onMouseDown), this[e]("mouseup", this._onMouseUp), this[e]("touchend", this._onTouchEnd), this[e]("dragstart", this._onDragstart), this[e]("dragend", this._onDragend), this[e]("input", this._onInput)
                }
            }, {
                key: "_scheme", get: function () {
                    return jr
                }
            }, {
                key: "_template", get: function () {
                    return '\n      <input type="' + this.type + '" class="' + this._defaultClassName + '__input">\n      <input type="range" class="range__focus-ring" tabIndex="-1">\n    '
                }
            }, {
                key: "_defaultClassName", get: function () {
                    return "range"
                }
            }, {
                key: "type", get: function () {
                    return "range"
                }
            }, {
                key: "_focusRing", get: function () {
                    return this.children[1]
                }
            }, {
                key: "_ratio", get: function () {
                    var t = "" === this._input.min ? 0 : parseInt(this._input.min),
                        e = "" === this._input.max ? 100 : parseInt(this._input.max);
                    return (this.value - t) / (e - t)
                }
            }], [{
                key: "observedAttributes", get: function () {
                    return ["disabled"].concat(w(No.observedAttributes))
                }
            }]), e
        }();
    c.Range = Hr, customElements.define("ons-range", Hr);
    var Rr = function () {
            function t() {
                p(this, t), this._queue = [], this._index = 0
            }

            return g(t, [{
                key: "animate", value: function (t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200, i = (new Date).getTime(),
                        o = {}, r = !1, a = !1, s = !1, l = Object.keys(e), u = {
                            stop: function () {
                                var c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                s && clearTimeout(s);
                                var h = Math.min(1, ((new Date).getTime() - i) / n);
                                return l.forEach(function (n) {
                                    t.style[n] = (1 - h) * o[n] + h * e[n] + ("opacity" == n ? "" : "px")
                                }), t.style.transitionDuration = "0s", c.stopNext ? a = !1 : r || (r = !0, a && a()), u
                            }, then: function (t) {
                                return a = t, r && a && a(), u
                            }, speed: function (a) {
                                if (P.config.animationsDisabled && (a = 0), !r) {
                                    s && clearTimeout(s);
                                    var c = ((new Date).getTime() - i) / n, h = a * (1 - c);
                                    l.forEach(function (n) {
                                        t.style[n] = (1 - c) * o[n] + c * e[n] + ("opacity" == n ? "" : "px")
                                    }), function () {
                                        var e = window.getComputedStyle(t);
                                        l.forEach(e.getPropertyValue.bind(e)), e = t.offsetHeight
                                    }(), i = t.speedUpTime, n = h, t.style.transitionDuration = n / 1e3 + "s", l.forEach(function (n) {
                                        t.style[n] = e[n] + ("opacity" == n ? "" : "px")
                                    }), s = setTimeout(u.stop, h)
                                }
                                return u
                            }, finish: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 50,
                                    e = ((new Date).getTime() - i) / n;
                                return u.speed(t / (1 - e)), u
                            }
                        };
                    if (t.hasAttribute("disabled") || r || P.config.animationsDisabled) return u;
                    var c = window.getComputedStyle(t);
                    return l.forEach(function (t) {
                        var e = parseFloat(c.getPropertyValue(t));
                        o[t] = isNaN(e) ? 0 : e
                    }), r || (t.style.transitionProperty = l.join(","), t.style.transitionDuration = n / 1e3 + "s", l.forEach(function (n) {
                        t.style[n] = e[n] + ("opacity" == n ? "" : "px")
                    })), s = setTimeout(u.stop, n), this._onStopAnimations(t, u.stop), u
                }
            }]), g(t, [{
                key: "_onStopAnimations", value: function (t, e) {
                    var n = this._queue, i = this._index++;
                    n[t] = n[t] || [], n[t][i] = function (o) {
                        return delete n[t][i], n[t] && 0 == n[t].length && delete n[t], e(o)
                    }
                }
            }, {
                key: "stopAnimations", value: function (t) {
                    var e = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (Array.isArray(t)) return t.forEach(function (t) {
                        e.stopAnimations(t, n)
                    });
                    (this._queue[t] || []).forEach(function (t) {
                        t(n || {})
                    })
                }
            }, {
                key: "stopAll", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.stopAnimations(Object.keys(this._queue), t)
                }
            }, {
                key: "fade", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200;
                    return this.animate(t, {opacity: 0}, e)
                }
            }]), t
        }(), Fr = {"": "ripple--*", ".ripple__wave": "ripple--*__wave", ".ripple__background": "ripple--*__background"},
        qr = function (t) {
            function e() {
                p(this, e);
                var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return t._onTap = t._onTap.bind(t), t._onHold = t._onHold.bind(t), t._onDragStart = t._onDragStart.bind(t), t._onRelease = t._onRelease.bind(t), n(t, function () {
                    return t._compile()
                }), t._animator = new Rr, ["color", "center", "start-radius", "background", "modifier"].forEach(function (e) {
                    t.attributeChangedCallback(e, null, t.getAttribute(e))
                }), t
            }

            return b(e, Pi), g(e, [{
                key: "_compile", value: function () {
                    this.classList.add("ripple"), this._wave = this.getElementsByClassName("ripple__wave")[0], this._background = this.getElementsByClassName("ripple__background")[0], this._background && this._wave || (this._wave = Q.create(".ripple__wave"), this._background = Q.create(".ripple__background"), this.appendChild(this._wave), this.appendChild(this._background)), B.initModifier(this, Fr)
                }
            }, {
                key: "_getEffectSize", value: function () {
                    if (this.hasAttribute("size")) {
                        var t = this.getAttribute("size");
                        if (-1 !== ["cover", "contain"].indexOf(t)) return t
                    }
                    return "cover"
                }
            }, {
                key: "_calculateCoords", value: function (t) {
                    var e = void 0, n = void 0, i = void 0, o = void 0, r = void 0, a = this.getBoundingClientRect(),
                        s = this._getEffectSize(), l = function () {
                            return Q.throw("Ripple invalid state")
                        };
                    return this._center ? (e = a.width / 2, n = a.height / 2, "cover" === s ? r = Math.sqrt(e * e + n * n) : "contain" === s ? r = Math.min(e, n) : l()) : (e = ("number" == typeof t.clientX ? t.clientX : t.changedTouches[0].clientX) - a.left, n = ("number" == typeof t.clientY ? t.clientY : t.changedTouches[0].clientY) - a.top, i = Math.max(n, a.height - n), o = Math.max(e, a.width - e), "cover" === s ? r = Math.sqrt(i * i + o * o) : "contain" === s ? r = Math.min(Math.round(i / 2), Math.round(o / 2)) : l()), {
                        x: e,
                        y: n,
                        r: r
                    }
                }
            }, {
                key: "_rippleAnimation", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300, n = this._animator,
                        i = this._wave, o = this._background, r = this._minR, a = this._calculateCoords(t), s = a.x,
                        l = a.y, u = a.r;
                    return n.stopAll({stopNext: 1}), n.animate(o, {opacity: 1}, e), Q.extend(i.style, {
                        opacity: 1,
                        top: l - r + "px",
                        left: s - r + "px",
                        width: 2 * r + "px",
                        height: 2 * r + "px"
                    }), n.animate(i, {top: l - u, left: s - u, height: 2 * u, width: 2 * u}, e)
                }
            }, {
                key: "_updateParent", value: function () {
                    if (!this._parentUpdated && this.parentNode) {
                        "static" === window.getComputedStyle(this.parentNode).getPropertyValue("position") && (this.parentNode.style.position = "relative"), this._parentUpdated = !0
                    }
                }
            }, {
                key: "_onTap", value: function (t) {
                    var e = this;
                    this.disabled || t.ripple || (t.ripple = !0, this._updateParent(), this._rippleAnimation(t.gesture.srcEvent).then(function () {
                        e._animator.fade(e._wave), e._animator.fade(e._background)
                    }))
                }
            }, {
                key: "_onHold", value: function (t) {
                    this.disabled || t.ripple || (t.ripple = !0, this._updateParent(), this._holding = this._rippleAnimation(t.gesture.srcEvent, 2e3), document.addEventListener("release", this._onRelease))
                }
            }, {
                key: "_onRelease", value: function (t) {
                    var e = this;
                    this._holding && !t.ripple && (t.ripple = !0, this._holding.speed(300).then(function () {
                        e._animator.stopAll({stopNext: !0}), e._animator.fade(e._wave), e._animator.fade(e._background)
                    }), this._holding = !1), document.removeEventListener("release", this._onRelease)
                }
            }, {
                key: "_onDragStart", value: function (t) {
                    if (this._holding) return this._onRelease(t);
                    -1 != ["left", "right"].indexOf(t.gesture.direction) && this._onTap(t)
                }
            }, {
                key: "connectedCallback", value: function () {
                    this._parentNode = this.parentNode, P.config.animationsDisabled ? this.disabled = !0 : (this._parentNode.addEventListener("tap", this._onTap), this._parentNode.addEventListener("hold", this._onHold), this._parentNode.addEventListener("dragstart", this._onDragStart))
                }
            }, {
                key: "disconnectedCallback", value: function () {
                    var t = this._parentNode || this.parentNode;
                    t.removeEventListener("tap", this._onTap), t.removeEventListener("hold", this._onHold), t.removeEventListener("dragstart", this._onDragStart)
                }
            }, {
                key: "attributeChangedCallback", value: function (t, e, i) {
                    var o = this;
                    switch (t) {
                        case"class":
                            Q.restoreClass(this, "ripple", Fr);
                            break;
                        case"modifier":
                            B.onModifierChanged(e, i, this, Fr);
                            break;
                        case"start-radius":
                            this._minR = Math.max(0, parseFloat(i) || 0);
                            break;
                        case"color":
                            i && n(this, function () {
                                o._wave.style.background = i, o.hasAttribute("background") || (o._background.style.background = i)
                            });
                            break;
                        case"background":
                            (i || e) && ("none" === i ? n(this, function () {
                                o._background.setAttribute("disabled", "disabled"), o._background.style.background = "transparent"
                            }) : n(this, function () {
                                o._background.hasAttribute("disabled") && o._background.removeAttribute("disabled"), o._background.style.background = i
                            }));
                            break;
                        case"center":
                            "center" === t && (this._center = null != i && "false" != i)
                    }
                }
            }, {
                key: "disabled", set: function (t) {
                    return Q.toggleAttribute(this, "disabled", t)
                }, get: function () {
                    return this.hasAttribute("disabled")
                }
            }], [{
                key: "observedAttributes", get: function () {
                    return ["start-radius", "color", "background", "center", "class", "modifier"]
                }
            }]), e
        }();
    c.Ripple = qr, customElements.define("ons-ripple", qr);
    var zr = function (t) {
        function e() {
            return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
        }

        return b(e, Pi), e
    }();
    c.Row = zr, customElements.define("ons-row", zr);
    var Vr = {
        "": "segment--*",
        ".segment__item": "segment--*__item",
        ".segment__input": "segment--*__input",
        ".segment__button": "segment--*__button"
    }, Wr = function () {
        var t = 0;
        return function () {
            return "ons-segment-gen-" + t++
        }
    }(), Ur = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return t._segmentId = Wr(), t._tabbar = null, t._onChange = t._onChange.bind(t), t._onTabbarPreChange = t._onTabbarPreChange.bind(t), n(t, function () {
                t._compile(), setImmediate(function () {
                    return t._lastActiveIndex = t._tabbar ? t._tabbar.getActiveTabIndex() : t.getActiveButtonIndex()
                })
            }), t
        }

        return b(e, Pi), g(e, [{
            key: "_compile", value: function () {
                N.prepare(this), this.classList.add("segment");
                for (var t = this.children.length - 1; t >= 0; t--) {
                    var e = this.children[t];
                    e.classList.add("segment__item");
                    var n = Q.findChild(e, ".segment__input") || Q.create("input.segment__input");
                    n.type = "radio", n.value = t, n.name = n.name || this._segmentId, n.checked = !this.hasAttribute("tabbar-id") && t === (parseInt(this.getAttribute("active-index")) || 0);
                    var i = Q.findChild(e, ".segment__button") || Q.create(".segment__button");
                    if (i.parentElement !== e) for (; e.firstChild;) i.appendChild(e.firstChild);
                    e.appendChild(n), e.appendChild(i)
                }
                B.initModifier(this, Vr)
            }
        }, {
            key: "connectedCallback", value: function () {
                var t = this;
                n(this, function () {
                    if (t.hasAttribute("tabbar-id")) {
                        var e = Q.findParent(t, "ons-page");
                        t._tabbar = e && e.querySelector("#" + t.getAttribute("tabbar-id")), t._tabbar && "ONS-TABBAR" === t._tabbar.tagName || Q.throw("No tabbar with id " + t.getAttribute("tabbar-id") + " was found."), t._tabbar.setAttribute("hide-tabs", ""), setImmediate(function () {
                            return t._setChecked(t._tabbar.getActiveTabIndex())
                        }), t._tabbar.addEventListener("prechange", t._onTabbarPreChange)
                    }
                }), this.addEventListener("change", this._onChange)
            }
        }, {
            key: "disconnectedCallback", value: function () {
                var t = this;
                n(this, function () {
                    t._tabbar && (t._tabbar.removeEventListener("prechange", t._onTabbarPreChange), t._tabbar = null)
                }), this.removeEventListener("change", this._onChange)
            }
        }, {
            key: "_setChecked", value: function (t) {
                this.children[t].firstElementChild.checked = !0
            }
        }, {
            key: "setActiveButton", value: function (t, e) {
                return this._tabbar ? this._tabbar.setActiveTab(t, e) : (this._setChecked(t), this._postChange(t), Promise.resolve(t))
            }
        }, {
            key: "getActiveButtonIndex", value: function () {
                for (var t = this.children.length - 1; t >= 0; t--) if (this.children[t].firstElementChild.checked) return t;
                return -1
            }
        }, {
            key: "_onChange", value: function (t) {
                t.stopPropagation(), this._tabbar ? this._tabbar.setActiveTab(this.getActiveButtonIndex(), {reject: !1}) : this._postChange(this.getActiveButtonIndex())
            }
        }, {
            key: "_onTabbarPreChange", value: function (t) {
                var e = this;
                setImmediate(function () {
                    t.detail.canceled || (e._setChecked(t.index), e._postChange(t.index))
                })
            }
        }, {
            key: "_postChange", value: function (t) {
                Q.triggerElementEvent(this, "postchange", {
                    index: t,
                    activeIndex: t,
                    lastActiveIndex: this._lastActiveIndex,
                    segmentItem: this.children[t]
                }), this._lastActiveIndex = t
            }
        }, {
            key: "attributeChangedCallback", value: function (t, e, n) {
                switch (t) {
                    case"class":
                        Q.restoreClass(this, "segment", Vr);
                        break;
                    case"modifier":
                        B.onModifierChanged(e, n, this, Vr)
                }
            }
        }, {
            key: "disabled", set: function (t) {
                return Q.toggleAttribute(this, "disabled", t)
            }, get: function () {
                return this.hasAttribute("disabled")
            }
        }], [{
            key: "observedAttributes", get: function () {
                return ["class", "modifier"]
            }
        }, {
            key: "events", get: function () {
                return ["postchange"]
            }
        }]), e
    }();
    c.Segment = Ur, customElements.define("ons-segment", Ur);
    var Xr = {"": "select-* select--*", ".select-input": "select-input--*"},
        Yr = ["autofocus", "disabled", "form", "multiple", "name", "required", "size"], Gr = function (t) {
            function e() {
                p(this, e);
                var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return n(t, function () {
                    return t._compile()
                }), t._deriveGetters(), t
            }

            return b(e, Pi), g(e, [{
                key: "attributeChangedCallback", value: function (t, e, i) {
                    var o = this;
                    switch (t) {
                        case"class":
                            Q.restoreClass(this, "select", Xr);
                            break;
                        case"modifier":
                            B.onModifierChanged(e, i, this, Xr)
                    }
                    Yr.indexOf(t) >= 0 && n(this, function () {
                        return o._updateBoundAttributes()
                    })
                }
            }, {
                key: "_updateBoundAttributes", value: function () {
                    var t = this;
                    Yr.forEach(function (e) {
                        t.hasAttribute(e) ? t._select.setAttribute(e, t.getAttribute(e)) : t._select.removeAttribute(e)
                    })
                }
            }, {
                key: "_compile", value: function () {
                    N.prepare(this), this.classList.add("select");
                    var t = this._select || document.createElement("select");
                    !t.id && this.hasAttribute("select-id") && (t.id = this.getAttribute("select-id")), t.classList.add("select-input"), this._select || (Q.arrayFrom(this.childNodes).forEach(function (e) {
                        return t.appendChild(e)
                    }), this.appendChild(t)), B.initModifier(this, Xr)
                }
            }, {
                key: "_deriveGetters", value: function () {
                    var t = this;
                    ["disabled", "length", "multiple", "name", "options", "selectedIndex", "size", "value", "form", "type"].forEach(function (e) {
                        Object.defineProperty(t, e, {
                            configurable: !0, enumerable: !0, get: function () {
                                return t._select[e]
                            }, set: -1 === ["form", "type"].indexOf(e) ? function (i) {
                                return n(t, function () {
                                    return t._select[e] = i
                                })
                            } : void 0
                        })
                    })
                }
            }, {
                key: "add", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    this._select.add(t, e)
                }
            }, {
                key: "remove", value: function (t) {
                    this._select.remove(t)
                }
            }, {
                key: "_select", get: function () {
                    return this.querySelector("select")
                }
            }], [{
                key: "observedAttributes", get: function () {
                    return ["modifier", "class"].concat(Yr)
                }
            }]), e
        }();
    c.Select = Gr, customElements.define("ons-select", Gr);
    var $r = {"": "fab--* speed-dial__item--*"}, Kr = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return t._compile(), t._boundOnClick = t._onClick.bind(t), t
        }

        return b(e, Pi), g(e, [{
            key: "attributeChangedCallback", value: function (t, e, n) {
                switch (t) {
                    case"class":
                        Q.restoreClass(this, "fab fab--mini speed-dial__item", $r);
                        break;
                    case"modifier":
                        B.onModifierChanged(e, n, this, $r), Q.addModifier(this, "mini");
                        break;
                    case"ripple":
                        this._updateRipple()
                }
            }
        }, {
            key: "connectedCallback", value: function () {
                this.addEventListener("click", this._boundOnClick, !1)
            }
        }, {
            key: "disconnectedCallback", value: function () {
                this.removeEventListener("click", this._boundOnClick, !1)
            }
        }, {
            key: "_updateRipple", value: function () {
                Q.updateRipple(this)
            }
        }, {
            key: "_onClick", value: function (t) {
                t.stopPropagation()
            }
        }, {
            key: "_compile", value: function () {
                var t = this;
                N.prepare(this), "fab fab--mini speed-dial__item".split(/\s+/).forEach(function (e) {
                    return t.classList.add(e)
                }), Q.addModifier(this, "mini"), this._updateRipple(), B.initModifier(this, $r)
            }
        }], [{
            key: "observedAttributes", get: function () {
                return ["modifier", "ripple", "class"]
            }
        }]), e
    }();
    c.SpeedDialItem = Kr, customElements.define("ons-speed-dial-item", Kr);
    var Qr = {"": "speed-dial--*"}, Jr = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return n(t, function () {
                t._compile()
            }), t._itemShown = !1, t._boundOnClick = t._onClick.bind(t), t
        }

        return b(e, Pi), g(e, [{
            key: "_compile", value: function () {
                this.classList.add("speed-dial"), N.prepare(this), this._updateRipple(), B.initModifier(this, Qr), this.hasAttribute("direction") ? this._updateDirection(this.getAttribute("direction")) : this._updateDirection("up"), this._updatePosition()
            }
        }, {
            key: "attributeChangedCallback", value: function (t, e, i) {
                var o = this;
                switch (t) {
                    case"class":
                        Q.restoreClass(this, "speed-dial", Qr);
                        break;
                    case"modifier":
                        B.onModifierChanged(e, i, this, Qr);
                        break;
                    case"ripple":
                        n(this, function () {
                            return o._updateRipple()
                        });
                        break;
                    case"direction":
                        n(this, function () {
                            return o._updateDirection(i)
                        });
                        break;
                    case"position":
                        n(this, function () {
                            return o._updatePosition()
                        })
                }
            }
        }, {
            key: "connectedCallback", value: function () {
                this.addEventListener("click", this._boundOnClick, !1)
            }
        }, {
            key: "disconnectedCallback", value: function () {
                this.removeEventListener("click", this._boundOnClick, !1)
            }
        }, {
            key: "_onClick", value: function (t) {
                return this.onClick ? (this.onClick.apply(this), Promise.resolve()) : !this.disabled && this.visible ? this.toggleItems() : void 0
            }
        }, {
            key: "_show", value: function () {
                return this.inline ? Promise.resolve() : this.show()
            }
        }, {
            key: "_hide", value: function () {
                var t = this;
                return new Promise(function (e) {
                    t.inline ? e() : setImmediate(function () {
                        return t.hide().then(e)
                    })
                })
            }
        }, {
            key: "_updateRipple", value: function () {
                this._fab && (this.hasAttribute("ripple") ? this._fab.setAttribute("ripple", "") : this._fab.removeAttribute("ripple"))
            }
        }, {
            key: "_updateDirection", value: function (t) {
                for (var e = this.items, n = 0; n < e.length; n++) d(e[n], {
                    transitionDelay: 25 * n + "ms",
                    bottom: "auto",
                    right: "auto",
                    top: "auto",
                    left: "auto"
                });
                switch (t) {
                    case"up":
                        for (var i = 0; i < e.length; i++) e[i].style.bottom = 72 + 56 * i + "px", e[i].style.right = "8px";
                        break;
                    case"down":
                        for (var o = 0; o < e.length; o++) e[o].style.top = 72 + 56 * o + "px", e[o].style.left = "8px";
                        break;
                    case"left":
                        for (var r = 0; r < e.length; r++) e[r].style.top = "8px", e[r].style.right = 72 + 56 * r + "px";
                        break;
                    case"right":
                        for (var a = 0; a < e.length; a++) e[a].style.top = "8px", e[a].style.left = 72 + 56 * a + "px";
                        break;
                    default:
                        Q.throw("Argument must be one of up, down, left or right.")
                }
            }
        }, {
            key: "_updatePosition", value: function () {
                var t = this.getAttribute("position");
                switch (this.classList.remove("fab--top__left", "fab--bottom__right", "fab--bottom__left", "fab--top__right", "fab--top__center", "fab--bottom__center"), t) {
                    case"top right":
                    case"right top":
                        this.classList.add("fab--top__right");
                        break;
                    case"top left":
                    case"left top":
                        this.classList.add("fab--top__left");
                        break;
                    case"bottom right":
                    case"right bottom":
                        this.classList.add("fab--bottom__right");
                        break;
                    case"bottom left":
                    case"left bottom":
                        this.classList.add("fab--bottom__left");
                        break;
                    case"center top":
                    case"top center":
                        this.classList.add("fab--top__center");
                        break;
                    case"center bottom":
                    case"bottom center":
                        this.classList.add("fab--bottom__center")
                }
            }
        }, {
            key: "_getTranslate", value: function () {
                return (this.getAttribute("position") || "").indexOf("bottom") >= 0 ? "translate3d(0px, -" + (Q.globals.fabOffset || 0) + "px, 0px) " : ""
            }
        }, {
            key: "show", value: function () {
                return this._fab.show(), d(this, {transform: this._getTranslate}), Promise.resolve()
            }
        }, {
            key: "hide", value: function () {
                var t = this;
                return this.hideItems().then(function () {
                    return t._fab.hide()
                })
            }
        }, {
            key: "showItems", value: function () {
                this.hasAttribute("direction") ? this._updateDirection(this.getAttribute("direction")) : this._updateDirection("up");
                var t = 0;
                if (!this._itemShown) {
                    for (var e = this.items, n = 0; n < e.length; n++) {
                        var i = 25 * n;
                        t += i, d(e[n], {transform: "scale(1)", transitionDelay: i + "ms"})
                    }
                    t += 50, this._itemShown = !0, Q.triggerElementEvent(this, "open")
                }
                var o = Q.defer();
                return setTimeout(o.resolve, t), o.promise
            }
        }, {
            key: "hideItems", value: function () {
                var t = 0;
                if (this._itemShown) {
                    for (var e = this.items, n = 0; n < e.length; n++) {
                        var i = 25 * (e.length - n);
                        t += i, d(e[n], {transform: "scale(0)", transitionDelay: i + "ms"})
                    }
                    t += 50, this._itemShown = !1, Q.triggerElementEvent(this, "close")
                }
                var o = Q.defer();
                return setTimeout(o.resolve, t), o.promise
            }
        }, {
            key: "isOpen", value: function () {
                return this._itemShown
            }
        }, {
            key: "toggle", value: function () {
                return this.visible ? this.hide() : this.show()
            }
        }, {
            key: "toggleItems", value: function () {
                return this.isOpen() ? this.hideItems() : this.showItems()
            }
        }, {
            key: "items", get: function () {
                return Q.arrayFrom(this.querySelectorAll("ons-speed-dial-item"))
            }
        }, {
            key: "_fab", get: function () {
                return Q.findChild(this, "ons-fab")
            }
        }, {
            key: "disabled", set: function (t) {
                return t && this.hideItems(), Q.arrayFrom(this.children).forEach(function (e) {
                    Q.match(e, ".fab") && Q.toggleAttribute(e, "disabled", t)
                }), Q.toggleAttribute(this, "disabled", t)
            }, get: function () {
                return this.hasAttribute("disabled")
            }
        }, {
            key: "inline", get: function () {
                return this.hasAttribute("inline")
            }
        }, {
            key: "visible", get: function () {
                return this._fab.visible && "none" !== this.style.display
            }
        }], [{
            key: "observedAttributes", get: function () {
                return ["class", "modifier", "ripple", "direction", "position"]
            }
        }, {
            key: "events", get: function () {
                return ["open", "close"]
            }
        }]), e
    }();
    c.SpeedDial = Jr, customElements.define("ons-speed-dial", Jr);
    var Zr = {
        ready: function (t, e) {
            setImmediate(e)
        }
    }, ta = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return t._page = null, t._pageLoader = jt, n(t, function () {
                Zr.ready(t, function () {
                    var e = t._getPageTarget();
                    e && t.load(e)
                })
            }), t
        }

        return b(e, Pi), g(e, [{
            key: "connectedCallback", value: function () {
                Q.match(this.parentNode, "ons-splitter") || Q.throw('"ons-splitter-content" must have "ons-splitter" as parent')
            }
        }, {
            key: "_getPageTarget", value: function () {
                return this._page || this.getAttribute("page")
            }
        }, {
            key: "disconnectedCallback", value: function () {
            }
        }, {
            key: "attributeChangedCallback", value: function (t, e, n) {
            }
        }, {
            key: "load", value: function (t) {
                var e = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this._page = t;
                var i = n.callback || function () {
                };
                return new Promise(function (n) {
                    var o = e._content || null;
                    e._pageLoader.load({page: t, parent: e}, function (t) {
                        o && (e._pageLoader.unload(o), o = null), setImmediate(function () {
                            return e._show()
                        }), i(t), n(t)
                    })
                })
            }
        }, {
            key: "_show", value: function () {
                this._content && this._content._show()
            }
        }, {
            key: "_hide", value: function () {
                this._content && this._content._hide()
            }
        }, {
            key: "_destroy", value: function () {
                this._content && this._pageLoader.unload(this._content), this.remove()
            }
        }, {
            key: "page", get: function () {
                return this._page
            }, set: function (t) {
                this._page = t
            }
        }, {
            key: "_content", get: function () {
                return this.children[0]
            }
        }, {
            key: "pageLoader", get: function () {
                return this._pageLoader
            }, set: function (t) {
                t instanceof Bt || Q.throwPageLoader(), this._pageLoader = t
            }
        }], [{
            key: "observedAttributes", get: function () {
                return []
            }
        }, {
            key: "rewritables", get: function () {
                return Zr
            }
        }]), e
    }();
    c.SplitterContent = ta, customElements.define("ons-splitter-content", ta);
    var ea = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return t._boundOnClick = t._onClick.bind(t), n(t, function () {
                t.parentNode._sides.every(function (t) {
                    return "split" === t.mode
                }) && t.setAttribute("style", "display: none !important")
            }), t
        }

        return b(e, Pi), g(e, [{
            key: "_onClick", value: function (t) {
                this.onClick instanceof Function ? this.onClick() : Q.match(this.parentNode, "ons-splitter") && this.parentNode._sides.forEach(function (t) {
                    return t.close("left").catch(function () {
                    })
                }), t.stopPropagation()
            }
        }, {
            key: "attributeChangedCallback", value: function (t, e, n) {
            }
        }, {
            key: "connectedCallback", value: function () {
                this.addEventListener("click", this._boundOnClick), Q.iosMaskScrollFix(this, !0)
            }
        }, {
            key: "disconnectedCallback", value: function () {
                this.removeEventListener("click", this._boundOnClick), Q.iosMaskScrollFix(this, !1)
            }
        }], [{
            key: "observedAttributes", get: function () {
                return []
            }
        }]), e
    }();
    c.SplitterMask = ea, customElements.define("ons-splitter-mask", ea);
    var na = function (t) {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.timing,
                i = void 0 === n ? "cubic-bezier(.1, .7, .1, 1)" : n, o = t.duration, r = void 0 === o ? .3 : o,
                a = t.delay, s = void 0 === a ? 0 : a;
            return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
                timing: i,
                duration: r,
                delay: s
            }))
        }

        return b(e, Ti), g(e, [{
            key: "updateOptions", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                Q.extend(this, {timing: this.timing, duration: this.duration, delay: this.delay}, t)
            }
        }, {
            key: "activate", value: function (t) {
                var e = this, i = t.parentNode;
                n(i, function () {
                    e._side = t, e._oppositeSide = i.right !== t && i.right || i.left !== t && i.left, e._content = i.content, e._mask = i.mask
                })
            }
        }, {
            key: "deactivate", value: function () {
                this.clearTransition(), this._mask && this.clearMask(), this._content = this._side = this._oppositeSide = this._mask = null
            }
        }, {
            key: "clearTransition", value: function () {
                var t = this;
                "side mask content".split(/\s+/).forEach(function (e) {
                    return t["_" + e] && d.clear(t["_" + e], "transform transition")
                })
            }
        }, {
            key: "clearMask", value: function () {
                this._oppositeSide && "split" !== this._oppositeSide.mode && this._oppositeSide.isOpen || (this._mask.style.opacity = "", this._mask.style.display = "none")
            }
        }, {
            key: "translate", value: function (t) {
            }
        }, {
            key: "open", value: function (t) {
                t()
            }
        }, {
            key: "close", value: function (t) {
                t()
            }
        }, {
            key: "minus", get: function () {
                return "right" === this._side.side ? "-" : ""
            }
        }]), e
    }(), ia = function (t) {
        function e() {
            return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
        }

        return b(e, na), g(e, [{
            key: "translate", value: function (t) {
                this._mask.style.display = "block", nt(this._side).queue({transform: "translate3d(" + (this.minus + t) + "px, 0, 0)"}).play()
            }
        }, {
            key: "open", value: function (t) {
                nt.runAll(nt(this._side).wait(this.delay).queue({transform: "translate3d(" + this.minus + "100%, 0, 0)"}, this.def).queue(function (e) {
                    e(), t && t()
                }), nt(this._mask).wait(this.delay).queue({display: "block"}).queue({opacity: "1"}, {
                    duration: this.duration,
                    timing: "linear"
                }))
            }
        }, {
            key: "close", value: function (t) {
                nt.runAll(nt(this._side).wait(this.delay).queue({transform: "translate3d(0, 0, 0)"}, this.def).queue(function (e) {
                    t && t(), e()
                }), nt(this._mask).wait(this.delay).queue({opacity: "0"}, {
                    duration: this.duration,
                    timing: "linear"
                }).queue({display: "none"}))
            }
        }]), e
    }(), oa = {
        default: ia, overlay: ia, push: function (t) {
            function e() {
                return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }

            return b(e, na), g(e, [{
                key: "_getSlidingElements", value: function () {
                    var t = [this._side, this._content];
                    return this._oppositeSide && "split" === this._oppositeSide.mode && t.push(this._oppositeSide), t
                }
            }, {
                key: "translate", value: function (t) {
                    this._slidingElements || (this._slidingElements = this._getSlidingElements()), this._mask.style.display = "block", nt(this._slidingElements).queue({transform: "translate3d(" + (this.minus + t) + "px, 0, 0)"}).play()
                }
            }, {
                key: "open", value: function (t) {
                    var e = this, n = this._side.offsetWidth;
                    this._slidingElements = this._getSlidingElements(), nt.runAll(nt(this._slidingElements).wait(this.delay).queue({transform: "translate3d(" + (this.minus + n) + "px, 0, 0)"}, this.def).queue(function (n) {
                        e._slidingElements = null, n(), t && t()
                    }), nt(this._mask).wait(this.delay).queue({display: "block"}))
                }
            }, {
                key: "close", value: function (t) {
                    var n = this;
                    this._slidingElements = this._getSlidingElements(), nt.runAll(nt(this._slidingElements).wait(this.delay).queue({transform: "translate3d(0, 0, 0)"}, this.def).queue(function (i) {
                        n._slidingElements = null, v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "clearTransition", n).call(n), t && t(), i()
                    }), nt(this._mask).wait(this.delay).queue({display: "none"}))
                }
            }]), e
        }(), reveal: function (t) {
            function e() {
                return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }

            return b(e, na), g(e, [{
                key: "_getSlidingElements", value: function () {
                    var t = [this._content, this._mask];
                    return this._oppositeSide && "split" === this._oppositeSide.mode && t.push(this._oppositeSide), t
                }
            }, {
                key: "activate", value: function (t) {
                    v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "activate", this).call(this, t), "collapse" === t.mode && this._setStyles(t)
                }
            }, {
                key: "deactivate", value: function () {
                    this._side && this._unsetStyles(this._side), v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "deactivate", this).call(this)
                }
            }, {
                key: "_setStyles", value: function (t) {
                    d(t, {
                        left: "right" === t.side ? "auto" : 0,
                        right: "right" === t.side ? 0 : "auto",
                        zIndex: 0,
                        backgroundColor: "black",
                        transform: this._generateBehindPageStyle(0).container.transform,
                        display: "none"
                    });
                    var e = t.parentElement;
                    n(e, function () {
                        return e.content && d(e.content, {boxShadow: "0 0 12px 0 rgba(0, 0, 0, 0.2)"})
                    })
                }
            }, {
                key: "_unsetStyles", value: function (t) {
                    d.clear(t, "left right zIndex backgroundColor display"), t._content && (t._content.style.opacity = ""), this._oppositeSide && "split" !== this._oppositeSide.mode || t.parentElement.content && d.clear(t.parentElement.content, "boxShadow")
                }
            }, {
                key: "_generateBehindPageStyle", value: function (t) {
                    var e = this.maxWidth, n = (t - e) / e * 10;
                    return {
                        content: {opacity: 1 + (n = isNaN(n) ? 0 : Math.max(Math.min(n, 0), -10)) / 100},
                        container: {transform: "translate3d(" + (this.minus ? -1 : 1) * n + "%, 0, 0)"}
                    }
                }
            }, {
                key: "translate", value: function (t) {
                    this._side.style.display = "", this._side.style.zIndex = 1, this.maxWidth = this.maxWidth || this._getMaxWidth();
                    var e = this._generateBehindPageStyle(Math.min(t, this.maxWidth));
                    this._slidingElements || (this._slidingElements = this._getSlidingElements()), this._mask.style.display = "block", nt.runAll(nt(this._slidingElements).queue({transform: "translate3d(" + (this.minus + t) + "px, 0, 0)"}), nt(this._side._content).queue(e.content), nt(this._side).queue(e.container))
                }
            }, {
                key: "open", value: function (t) {
                    var e = this;
                    this._side.style.display = "", this._side.style.zIndex = 1, this.maxWidth = this.maxWidth || this._getMaxWidth();
                    var n = this._generateBehindPageStyle(this.maxWidth);
                    this._slidingElements = this._getSlidingElements(), setTimeout(function () {
                        nt.runAll(nt(e._slidingElements).wait(e.delay).queue({transform: "translate3d(" + (e.minus + e.maxWidth) + "px, 0, 0)"}, e.def), nt(e._mask).wait(e.delay).queue({display: "block"}), nt(e._side._content).wait(e.delay).queue(n.content, e.def), nt(e._side).wait(e.delay).queue(n.container, e.def).queue(function (n) {
                            e._slidingElements = null, n(), t && t()
                        }))
                    }, 1e3 / 60)
                }
            }, {
                key: "close", value: function (t) {
                    var e = this, n = this._generateBehindPageStyle(0);
                    this._slidingElements = this._getSlidingElements(), nt.runAll(nt(this._slidingElements).wait(this.delay).queue({transform: "translate3d(0, 0, 0)"}, this.def), nt(this._mask).wait(this.delay).queue({display: "none"}), nt(this._side._content).wait(this.delay).queue(n.content, this.def), nt(this._side).wait(this.delay).queue(n.container, this.def).queue(function (n) {
                        e._slidingElements = null, e._side.style.zIndex = 0, e._side.style.display = "none", e._side._content.style.opacity = "", t && t(), n()
                    }))
                }
            }, {
                key: "_getMaxWidth", value: function () {
                    return this._side.offsetWidth
                }
            }]), e
        }()
    }, ra = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return t._onModeChange = t._onModeChange.bind(t), n(t, function () {
                !t.mask && t.appendChild(document.createElement("ons-splitter-mask")), t._layout()
            }), t
        }

        return b(e, Pi), g(e, [{
            key: "_getSide", value: function (t) {
                return Q.findChild(this, function (e) {
                    return Q.match(e, "ons-splitter-side") && e.getAttribute("side") === t
                })
            }
        }, {
            key: "_onDeviceBackButton", value: function (t) {
                this._sides.some(function (t) {
                    return !!t.isOpen && t.close()
                }) || t.callParentHandler()
            }
        }, {
            key: "_onModeChange", value: function (t) {
                var e = this;
                t.target.parentNode && n(this, function () {
                    e._layout()
                })
            }
        }, {
            key: "_layout", value: function () {
                var t = this;
                this._sides.forEach(function (e) {
                    t.content && (t.content.style[e.side] = "split" === e.mode ? e.style.width : 0)
                })
            }
        }, {
            key: "left", get: function () {
                return this._getSide("left")
            }
        }, {
            key: "right", get: function () {
                return this._getSide("right")
            }
        }, {
            key: "side", get: function () {
                return Q.findChild(this, "ons-splitter-side")
            }
        }, {
            key: "_sides", get: function () {
                return [this.left, this.right].filter(function (t) {
                    return t
                })
            }
        }, {
            key: "content", get: function () {
                return Q.findChild(this, "ons-splitter-content")
            }
        }, {
            key: "topPage", get: function () {
                return this.content._content
            }
        }, {
            key: "mask", get: function () {
                return Q.findChild(this, "ons-splitter-mask")
            }
        }, {
            key: "onDeviceBackButton", get: function () {
                return this._backButtonHandler
            }, set: function (t) {
                this._backButtonHandler && this._backButtonHandler.destroy(), this._backButtonHandler = R.createHandler(this, t)
            }
        }]), g(e, [{
            key: "connectedCallback", value: function () {
                this.onDeviceBackButton = this._onDeviceBackButton.bind(this), this.addEventListener("modechange", this._onModeChange, !1)
            }
        }, {
            key: "disconnectedCallback", value: function () {
                this._backButtonHandler.destroy(), this._backButtonHandler = null, this.removeEventListener("modechange", this._onModeChange, !1)
            }
        }, {
            key: "attributeChangedCallback", value: function (t, e, n) {
            }
        }, {
            key: "_show", value: function () {
                Q.propagateAction(this, "_show")
            }
        }, {
            key: "_hide", value: function () {
                Q.propagateAction(this, "_hide")
            }
        }, {
            key: "_destroy", value: function () {
                Q.propagateAction(this, "_destroy"), this.remove()
            }
        }], [{
            key: "registerAnimator", value: function (t, e) {
                e instanceof SplitterAnimator || Q.throwAnimator("Splitter"), oa[t] = e
            }
        }, {
            key: "SplitterAnimator", get: function () {
                return SplitterAnimator
            }
        }, {
            key: "animators", get: function () {
                return oa
            }
        }]), e
    }();
    c.Splitter = ra, customElements.define("ons-splitter", ra);
    var aa = "closed", sa = {
        ready: function (t, e) {
            setImmediate(e)
        }
    }, la = function () {
        function t(e, n) {
            p(this, t), this._element = e, this._onChange = this._onChange.bind(this), n && this.changeTarget(n)
        }

        return g(t, [{
            key: "changeTarget", value: function (t) {
                this.disable(), this._target = t, t && (this._orientation = -1 !== ["portrait", "landscape"].indexOf(t), this.activate())
            }
        }, {
            key: "_match", value: function (t) {
                return this._orientation ? this._target === (t.isPortrait ? "portrait" : "landscape") : t.matches
            }
        }, {
            key: "_onChange", value: function (t) {
                this._element._updateMode(this._match(t) ? "collapse" : "split")
            }
        }, {
            key: "activate", value: function () {
                this._orientation ? (Ot.on("change", this._onChange), this._onChange({isPortrait: Ot.isPortrait()})) : (this._queryResult = window.matchMedia(this._target), this._queryResult.addListener(this._onChange), this._onChange(this._queryResult))
            }
        }, {
            key: "disable", value: function () {
                this._orientation ? Ot.off("change", this._onChange) : this._queryResult && (this._queryResult.removeListener(this._onChange), this._queryResult = null)
            }
        }]), t
    }(), ua = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return t._page = null, t._state = aa, t._lock = new Nt, t._pageLoader = jt, t._collapseDetection = new la(t), t._animatorFactory = new O({
                animators: ra.animators,
                baseClass: na,
                baseClassName: "SplitterAnimator",
                defaultAnimation: t.getAttribute("animation")
            }), n(t, function () {
                t.attributeChangedCallback("width"), t.hasAttribute("side") || t.setAttribute("side", "left"), sa.ready(t, function () {
                    var e = t._page || t.getAttribute("page");
                    e && t.load(e)
                })
            }), t
        }

        return b(e, Pi), g(e, [{
            key: "connectedCallback", value: function () {
                var t = this;
                Q.match(this.parentNode, "ons-splitter") || Q.throw("Parent must be an ons-splitter element"), this._swipe = new Qo({
                    element: this,
                    elementHandler: this.parentElement,
                    swipeMax: function () {
                        t._onSwipe && t._onSwipe(1, t._animationOpt), t.open()
                    },
                    swipeMid: function (e, n) {
                        t._onSwipe && t._onSwipe(e / n), t._animator.translate(e)
                    },
                    swipeMin: function () {
                        t._onSwipe && t._onSwipe(0, t._animationOpt), t.close()
                    },
                    getThreshold: function () {
                        return Math.max(0, Math.min(1, parseFloat(t.getAttribute("open-threshold")) || .3))
                    },
                    getSide: function () {
                        return t.side
                    },
                    isInitialState: function () {
                        var e = t._state === aa;
                        return t._state = "changing", e
                    },
                    ignoreSwipe: function (e, n) {
                        var i = t.isOpen, o = Math.max(0, parseInt(t.getAttribute("swipe-target-width"), 10) || 0);
                        return "split" === t._mode || t._lock.isLocked() || t._isOtherSideOpen() || !function (e) {
                            return "left" === t.side ? "left" === e && i || "right" === e && !i : "left" === e && !i || "right" === e && i
                        }(e.gesture.direction) || !i && 0 !== o && n > o
                    }
                }), this.attributeChangedCallback("swipeable"), n(this, function () {
                    t.constructor.observedAttributes.forEach(function (e) {
                        return t.attributeChangedCallback(e, null, t.getAttribute(e))
                    })
                })
            }
        }, {
            key: "disconnectedCallback", value: function () {
                this._swipe && this._swipe.dispose(), this._animator = this._animationOpt = this._swipe = null
            }
        }, {
            key: "attributeChangedCallback", value: function (t, e, n) {
                switch (t) {
                    case"swipeable":
                        this._swipe && this._swipe.update();
                        break;
                    case"width":
                        n = this.getAttribute("width"), this.style.width = /^\d+(px|%)$/.test(n) ? n : "80%";
                        break;
                    default:
                        this[Q.camelize("_update-" + t)](n)
                }
            }
        }, {
            key: "_emitEvent", value: function (t) {
                if ("pre" !== t.slice(0, 3)) return Q.triggerElementEvent(this, t, {side: this});
                var e = !1;
                return Q.triggerElementEvent(this, t, {
                    side: this, cancel: function () {
                        return e = !0
                    }
                }), e
            }
        }, {
            key: "_isOtherSideOpen", value: function () {
                var t = this;
                return !!Q.findChild(this.parentElement, function (e) {
                    return e instanceof t.constructor && e !== t && "collapse" === e._mode && e.isOpen
                })
            }
        }, {
            key: "_updateCollapse", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getAttribute("collapse");
                return null === t || "split" === t ? (this._collapseDetection.disable(), this._updateMode("split")) : "" === t || "collapse" === t ? (this._collapseDetection.disable(), this._updateMode("collapse")) : void this._collapseDetection.changeTarget(t)
            }
        }, {
            key: "_updateMode", value: function (t) {
                t !== this._mode && (this._mode = t, this.setAttribute("mode", t), "split" === t ? (this._animator && this._animator.deactivate(), this._state = aa) : (this._animator && this._animator.activate(this), "open" === this._state && this._animator.open()), Q.triggerElementEvent(this, "modechange", {
                    side: this,
                    mode: t
                }))
            }
        }, {
            key: "_updateAnimation", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getAttribute("animation");
                this.parentNode && (this._animator && this._animator.deactivate(), this._animator = this._animatorFactory.newAnimator({animation: t}), this._animator.activate(this), this._animationOpt = {
                    timing: this._animator.duration,
                    duration: this._animator.duration
                })
            }
        }, {
            key: "_updateAnimationOptions", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getAttribute("animation-options");
                this._animator.updateOptions(O.parseAnimationOptionsString(t))
            }
        }, {
            key: "open", value: function (t) {
                return this.toggle(t, !0)
            }
        }, {
            key: "close", value: function (t) {
                return this.toggle(t, !1)
            }
        }, {
            key: "toggle", value: function () {
                var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = arguments[1],
                    i = "boolean" == typeof n ? n : !this.isOpen, o = i ? "open" : "close", r = i ? "open" : aa;
                if ("split" === this._mode) return Promise.resolve(!1);
                if (this._state === r) return Promise.resolve(this);
                if (this._lock.isLocked()) return Promise.reject("Another splitter-side action is already running.");
                if (i && this._isOtherSideOpen()) return Promise.reject("Another menu is already open.");
                if (this._emitEvent("pre" + o)) return Promise.reject("Canceled in pre" + o + " event.");
                var a = this._lock.lock();
                return this._state = "changing", e.animation && this._updateAnimation(e.animation), new Promise(function (n) {
                    t._animator[o](function () {
                        Q.iosPageScrollFix(i), t._state = r, a(), t._emitEvent("post" + o), e.callback instanceof Function && e.callback(t), n(t)
                    })
                })
            }
        }, {
            key: "load", value: function (t) {
                var e = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this._page = t;
                var i = n.callback || function () {
                };
                return new Promise(function (n) {
                    var o = e._content || null;
                    e._pageLoader.load({page: t, parent: e}, function (t) {
                        o && (e._pageLoader.unload(o), o = null), setImmediate(function () {
                            return e._show()
                        }), i(t), n(t)
                    })
                })
            }
        }, {
            key: "_show", value: function () {
                this._content && this._content._show()
            }
        }, {
            key: "_hide", value: function () {
                this._content && this._content._hide()
            }
        }, {
            key: "_destroy", value: function () {
                this._content && this._pageLoader.unload(this._content), this.remove()
            }
        }, {
            key: "side", get: function () {
                return "right" === this.getAttribute("side") ? "right" : "left"
            }
        }, {
            key: "page", get: function () {
                return this._page
            }, set: function (t) {
                this._page = t
            }
        }, {
            key: "_content", get: function () {
                return this.children[0]
            }
        }, {
            key: "pageLoader", get: function () {
                return this._pageLoader
            }, set: function (t) {
                t instanceof Bt || Q.throwPageLoader(), this._pageLoader = t
            }
        }, {
            key: "mode", get: function () {
                return this._mode
            }
        }, {
            key: "onSwipe", get: function () {
                return this._onSwipe
            }, set: function (t) {
                !t || t instanceof Function || Q.throw('"onSwipe" must be a function'), this._onSwipe = t
            }
        }, {
            key: "isOpen", get: function () {
                return "collapse" === this._mode && this._state !== aa
            }
        }], [{
            key: "observedAttributes", get: function () {
                return ["animation", "width", "collapse", "swipeable", "animation-options"]
            }
        }, {
            key: "events", get: function () {
                return ["preopen", "postopen", "preclose", "postclose", "modechange"]
            }
        }, {
            key: "rewritables", get: function () {
                return sa
            }
        }]), e
    }();
    c.SplitterSide = ua, customElements.define("ons-splitter-side", ua);
    var ca = {
        "": "switch--*",
        ".switch__input": "switch--*__input",
        ".switch__handle": "switch--*__handle",
        ".switch__toggle": "switch--*__toggle"
    }, ha = {ios: [1, 21], material: [0, 16]}, da = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return n(t, function () {
                t.attributeChangedCallback("modifier", null, t.getAttribute("modifier"))
            }), t._onChange = t._onChange.bind(t), t._onRelease = t._onRelease.bind(t), t._lastTimeStamp = 0, t
        }

        return b(e, Ho), g(e, [{
            key: "_getPosition", value: function (t) {
                var e = this._locations;
                return Math.min(e[1], Math.max(e[0], this._startX + t.gesture.deltaX))
            }
        }, {
            key: "_emitChangeEvent", value: function () {
                Q.triggerElementEvent(this, "change", {value: this.checked, switch: this, isInteractive: !0})
            }
        }, {
            key: "_onChange", value: function (t) {
                t && t.stopPropagation && t.stopPropagation(), this._emitChangeEvent()
            }
        }, {
            key: "_onClick", value: function (t) {
                (t.target.classList.contains(this.defaultElementClass + "__touch") || t.timeStamp - this._lastTimeStamp < 50) && t.preventDefault(), this._lastTimeStamp = t.timeStamp
            }
        }, {
            key: "_onHold", value: function (t) {
                this.disabled || (B.addModifier(this, "active"), document.addEventListener("release", this._onRelease))
            }
        }, {
            key: "_onDragStart", value: function (t) {
                this.disabled || -1 === ["left", "right"].indexOf(t.gesture.direction) ? B.removeModifier(this, "active") : (t.consumed = !0, B.addModifier(this, "active"), this._startX = this._locations[this.checked ? 1 : 0], this.addEventListener("drag", this._onDrag), document.addEventListener("release", this._onRelease))
            }
        }, {
            key: "_onDrag", value: function (t) {
                t.stopPropagation(), this._handle.style.left = this._getPosition(t) + "px"
            }
        }, {
            key: "_onRelease", value: function (t) {
                var e = this._locations, n = this._getPosition(t), i = this.checked;
                this.checked = n >= (e[0] + e[1]) / 2, this.checked !== i && this._emitChangeEvent(), this.removeEventListener("drag", this._onDrag), document.removeEventListener("release", this._onRelease), this._handle.style.left = "", B.removeModifier(this, "active")
            }
        }, {
            key: "click", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.disabled || (this.checked = !this.checked, this._emitChangeEvent(), this._lastTimeStamp = t.timeStamp || 0)
            }
        }, {
            key: "connectedCallback", value: function () {
                var t = this;
                n(this, function () {
                    t._input.addEventListener("change", t._onChange)
                }), this.addEventListener("dragstart", this._onDragStart), this.addEventListener("hold", this._onHold), this.addEventListener("tap", this.click), this.addEventListener("click", this._onClick), this._gestureDetector = new st(this, {
                    dragMinDistance: 1,
                    holdTimeout: 251,
                    passive: !0
                })
            }
        }, {
            key: "disconnectedCallback", value: function () {
                var t = this;
                n(this, function () {
                    t._input.removeEventListener("change", t._onChange)
                }), this.removeEventListener("dragstart", this._onDragStart), this.removeEventListener("hold", this._onHold), this.removeEventListener("tap", this.click), this.removeEventListener("click", this._onClick), this._gestureDetector && this._gestureDetector.dispose()
            }
        }, {
            key: "attributeChangedCallback", value: function (t, n, i) {
                if ("modifier" === t) {
                    var o = -1 !== (i || "").indexOf("material");
                    this._locations = ha[o ? "material" : "ios"]
                }
                v(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "attributeChangedCallback", this).call(this, t, n, i)
            }
        }, {
            key: "_scheme", get: function () {
                return ca
            }
        }, {
            key: "_defaultClassName", get: function () {
                return "switch"
            }
        }, {
            key: "_template", get: function () {
                return '\n      <input type="' + this.type + '" class="' + this._defaultClassName + '__input">\n      <div class="' + this._defaultClassName + '__toggle">\n        <div class="' + this._defaultClassName + '__handle">\n          <div class="' + this._defaultClassName + '__touch"></div>\n        </div>\n      </div>\n    '
            }
        }, {
            key: "type", get: function () {
                return "checkbox"
            }
        }, {
            key: "_handle", get: function () {
                return this.querySelector("." + this._defaultClassName + "__handle")
            }
        }, {
            key: "checkbox", get: function () {
                return this._input
            }
        }], [{
            key: "observedAttributes", get: function () {
                return [].concat(w(v(e.__proto__ || Object.getPrototypeOf(e), "observedAttributes", this)), ["modifier"])
            }
        }]), e
    }();
    c.Switch = da, customElements.define("ons-switch", da);
    var fa = {".tabbar__content": "tabbar--*__content", ".tabbar__border": "tabbar--*__border", ".tabbar": "tabbar--*"},
        pa = {
            ready: function (t, e) {
                e()
            }
        }, ga = function (t, e, n) {
            return (1 - n) * t + n * e
        }, ma = function (t) {
            function e() {
                p(this, e);
                var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return t._loadInactive = Q.defer(), n(t, function () {
                    return t._compile()
                }), t
            }

            return b(e, Pi), g(e, [{
                key: "connectedCallback", value: function () {
                    var t = this;
                    this._swiper || (this._swiper = new ro({
                        getElement: function () {
                            return t._contentElement
                        },
                        getInitialIndex: function () {
                            return t.getAttribute("activeIndex") || t.getAttribute("active-index")
                        },
                        getAutoScrollRatio: this._getAutoScrollRatio.bind(this),
                        getBubbleWidth: function () {
                            return parseInt(t.getAttribute("ignore-edge-width") || 25, 10)
                        },
                        isAutoScrollable: function () {
                            return !0
                        },
                        preChangeHook: this._onPreChange.bind(this),
                        postChangeHook: this._onPostChange.bind(this),
                        refreshHook: this._onRefresh.bind(this),
                        scrollHook: this._onScroll.bind(this)
                    }), n(this, function () {
                        t._tabbarBorder = Q.findChild(t._tabbarElement, ".tabbar__border"), t._swiper.init({swipeable: t.hasAttribute("swipeable")})
                    })), n(this, function () {
                        t._updatePosition(), Q.findParent(t, "ons-page", function (t) {
                            return t === document.body
                        }) || t._show()
                    })
                }
            }, {
                key: "disconnectedCallback", value: function () {
                    this._swiper && this._swiper.initialized && (this._swiper.dispose(), this._swiper = null, this._tabbarBorder = null, this._tabsRect = null)
                }
            }, {
                key: "_normalizeEvent", value: function (t) {
                    return _({}, t, {index: t.activeIndex, tabItem: this.tabs[t.activeIndex]})
                }
            }, {
                key: "_onPostChange", value: function (t) {
                    t = this._normalizeEvent(t), Q.triggerElementEvent(this, "postchange", t);
                    var e = t.tabItem.pageElement;
                    e && e._show()
                }
            }, {
                key: "_onPreChange", value: function (t) {
                    if (t = this._normalizeEvent(t), t.cancel = function () {
                        return t.canceled = !0
                    }, Q.triggerElementEvent(this, "prechange", t), !t.canceled) {
                        var e = t, n = e.activeIndex, i = e.lastActiveIndex, o = this.tabs;
                        if (o[n].setActive(!0), i >= 0) {
                            var r = o[i];
                            r.setActive(!1), r.pageElement && r.pageElement._hide()
                        }
                    }
                    return t.canceled
                }
            }, {
                key: "_onScroll", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this._tabbarBorder) if (this._tabbarBorder.style.transition = "all " + (e.duration || 0) + "s " + (e.timing || ""), this._autogrow && this._tabsRect.length > 0) {
                        var n = Math.floor(t), i = Math.ceil(t), o = t % 1;
                        this._tabbarBorder.style.width = ga(this._tabsRect[n].width, this._tabsRect[i].width, o) + "px", this._tabbarBorder.style.transform = "translate3d(" + ga(this._tabsRect[n].left, this._tabsRect[i].left, o) + "px, 0, 0)"
                    } else this._tabbarBorder.style.transform = "translate3d(" + 100 * t + "%, 0, 0)";
                    this._onSwipe && this._onSwipe(t, e)
                }
            }, {
                key: "_onRefresh", value: function () {
                    if (this._autogrow = Q.hasModifier(this, "autogrow"), this._tabsRect = this.tabs.map(function (t) {
                        return t.getBoundingClientRect()
                    }), this._tabbarBorder) {
                        this._tabbarBorder.style.display = this.hasAttribute("tab-border") || Q.hasModifier(this, "material") ? "block" : "none";
                        var t = this.getActiveTabIndex();
                        this._tabsRect.length > 0 && t >= 0 && (this._tabbarBorder.style.width = this._tabsRect[t].width + "px")
                    }
                }
            }, {
                key: "_getAutoScrollRatio", value: function (t, e, n) {
                    var i = n / 300 * (t ? -1 : 1);
                    return Math.min(1, Math.max(0, .6 + e * i))
                }
            }, {
                key: "_compile", value: function () {
                    N.prepare(this);
                    var t = this._contentElement || Q.create(".tabbar__content");
                    t.classList.add("ons-tabbar__content");
                    var e = this._tabbarElement || Q.create(".tabbar");
                    if (e.classList.add("ons-tabbar__footer"), !e.parentNode) for (; this.firstChild;) e.appendChild(this.firstChild);
                    var n = Number(this.getAttribute("activeIndex"));
                    e.children.length > n && !Q.findChild(e, "[active]") && e.children[n].setAttribute("active", ""), this._tabbarBorder = Q.findChild(e, ".tabbar__border") || Q.create(".tabbar__border"), e.appendChild(this._tabbarBorder), e.classList.add("ons-swiper-tabbar"), !t.children[0] && t.appendChild(document.createElement("div")), !t.children[1] && t.appendChild(document.createElement("div")), t.appendChild = t.appendChild.bind(t.children[0]), t.insertBefore = t.insertBefore.bind(t.children[0]), this.appendChild(t), this.appendChild(e), B.initModifier(this, fa)
                }
            }, {
                key: "_updatePosition", value: function () {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getAttribute("position"),
                        i = this._top = "top" === e || "auto" === e && Q.hasModifier(this, "material"),
                        o = i ? Q.addModifier : Q.removeModifier;
                    o(this, "top");
                    var r = Q.findParent(this, "ons-page");
                    r && n(r, function () {
                        var e = 0;
                        r.children[0] && Q.match(r.children[0], "ons-toolbar") && (o(r.children[0], "noshadow"), e = 1);
                        var n = r._getContentElement(), a = window.getComputedStyle(r._getContentElement(), null);
                        t.style.top = i ? parseInt(a.getPropertyValue("padding-top"), 10) - e + "px" : "", n.style.top = a.top, n.style.top = ""
                    }), P.autoStatusBarFill(function () {
                        var e = Q.findParent(t, function (t) {
                            return t.hasAttribute("status-bar-fill")
                        });
                        Q.toggleAttribute(t, "status-bar-fill", i && !e)
                    })
                }
            }, {
                key: "setActiveTab", value: function (t) {
                    var e = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = this.getActiveTabIndex(), o = this.tabs[i], r = this.tabs[t];
                    if (!r) return Promise.reject("Specified index does not match any tab.");
                    if (t === i) return Q.triggerElementEvent(this, "reactive", {
                        index: t,
                        activeIndex: t,
                        tabItem: r
                    }), Promise.resolve(r.pageElement);
                    var a = r.pageElement;
                    return (a ? Promise.resolve(a) : r.loaded).then(function (i) {
                        return e._swiper.setActiveIndex(t, _({reject: !0}, n, {
                            animation: o && i ? n.animation || e.getAttribute("animation") : "none",
                            animationOptions: Q.extend({
                                duration: .3,
                                timing: "cubic-bezier(.4, .7, .5, 1)"
                            }, e.hasAttribute("animation-options") ? Q.animationOptionsParse(e.getAttribute("animation-options")) : {}, n.animationOptions || {})
                        })).then(function () {
                            return n.callback instanceof Function && n.callback(i), i
                        })
                    })
                }
            }, {
                key: "setTabbarVisibility", value: function (t) {
                    var e = this;
                    n(this, function () {
                        e._contentElement.style[e._top ? "top" : "bottom"] = t ? "" : "0px", e._tabbarElement.style.display = t ? "" : "none", t && e._onRefresh()
                    })
                }
            }, {
                key: "show", value: function () {
                    this.setTabbarVisibility(!0)
                }
            }, {
                key: "hide", value: function () {
                    this.setTabbarVisibility(!1)
                }
            }, {
                key: "getActiveTabIndex", value: function () {
                    for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.tabs, e = 0; e < t.length; e++) if (t[e] && "ONS-TAB" === t[e].tagName && t[e].isActive()) return e;
                    return -1
                }
            }, {
                key: "_show", value: function () {
                    var t = this;
                    this._swiper.show(), setImmediate(function () {
                        var e = t.tabs, n = t.getActiveTabIndex(e);
                        t._loadInactive.resolve(), e.length > 0 && n >= 0 && e[n].loaded.then(function (t) {
                            return t && setImmediate(function () {
                                return t._show()
                            })
                        })
                    })
                }
            }, {
                key: "_hide", value: function () {
                    this._swiper.hide();
                    var t = this.topPage;
                    t && t._hide()
                }
            }, {
                key: "_destroy", value: function () {
                    this.tabs.forEach(function (t) {
                        return t.remove()
                    }), this.remove()
                }
            }, {
                key: "attributeChangedCallback", value: function (t, e, n) {
                    if ("modifier" === t) {
                        B.onModifierChanged(e, n, this, fa);
                        var i = function (t) {
                            return /(^|\s+)top($|\s+)/i.test(t)
                        };
                        i(e) !== i(n) && this._updatePosition()
                    } else "position" === t ? Q.isAttached(this) && this._updatePosition() : "swipeable" === t ? this._swiper && this._swiper.updateSwipeable(this.hasAttribute("swipeable")) : "hide-tabs" === t && this.setTabbarVisibility(!this.hasAttribute("hide-tabs") || "false" === n)
                }
            }, {
                key: "_tabbarElement", get: function () {
                    return Q.findChild(this, ".tabbar")
                }
            }, {
                key: "_contentElement", get: function () {
                    return Q.findChild(this, ".tabbar__content")
                }
            }, {
                key: "_targetElement", get: function () {
                    var t = this._contentElement;
                    return t && t.children[0] || null
                }
            }, {
                key: "topPage", get: function () {
                    var t = this.tabs, e = this.getActiveTabIndex();
                    return t[e] ? t[e].pageElement || this.pages[0] || null : null
                }
            }, {
                key: "pages", get: function () {
                    return Q.arrayFrom(this._targetElement.children)
                }
            }, {
                key: "tabs", get: function () {
                    return Array.prototype.filter.call(this._tabbarElement.children, function (t) {
                        return "ONS-TAB" === t.tagName
                    })
                }
            }, {
                key: "visible", get: function () {
                    return "none" !== this._tabbarElement.style.display
                }
            }, {
                key: "swipeable", get: function () {
                    return this.hasAttribute("swipeable")
                }, set: function (t) {
                    return Q.toggleAttribute(this, "swipeable", t)
                }
            }, {
                key: "onSwipe", get: function () {
                    return this._onSwipe
                }, set: function (t) {
                    !t || t instanceof Function || Q.throw('"onSwipe" must be a function'), this._onSwipe = t
                }
            }], [{
                key: "observedAttributes", get: function () {
                    return ["modifier", "position", "swipeable", "tab-border", "hide-tabs"]
                }
            }, {
                key: "rewritables", get: function () {
                    return pa
                }
            }, {
                key: "events", get: function () {
                    return ["prechange", "postchange", "reactive"]
                }
            }]), e
        }();
    c.Tabbar = ma, customElements.define("ons-tabbar", ma);
    var _a = {"": "tabbar--*__item", ".tabbar__button": "tabbar--*__button"}, va = function (t) {
        function e() {
            p(this, e);
            var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return ["label", "icon", "badge"].some(t.hasAttribute.bind(t)) ? t._compile() : n(t, function () {
                return t._compile()
            }), t._pageLoader = jt, t._onClick = t._onClick.bind(t), t
        }

        return b(e, Pi), g(e, [{
            key: "_compile", value: function () {
                if (N.prepare(this), this.classList.add("tabbar__item"), !this._button) {
                    for (var t = Q.create("button.tabbar__button"); this.childNodes[0];) t.appendChild(this.childNodes[0]);
                    var e = Q.create("input", {display: "none"});
                    e.type = "radio", this.appendChild(e), this.appendChild(t), this._updateButtonContent(), B.initModifier(this, _a), this._updateRipple()
                }
            }
        }, {
            key: "_updateRipple", value: function () {
                this._button && Q.updateRipple(this._button, this.hasAttribute("ripple"))
            }
        }, {
            key: "_updateButtonContent", value: function () {
                var t = this, e = this._button, n = this._icon;
                if (this.hasAttribute("icon")) {
                    var i = (n = n || Q.createElement('<div class="tabbar__icon"><ons-icon></ons-icon></div>')).children[0],
                        o = function (e) {
                            return function () {
                                return i.attributeChangedCallback("icon", e, t.getAttribute("icon"))
                            }
                        }(i.getAttribute("icon"));
                    i.setAttribute("icon", this.getAttribute(this.isActive() ? "active-icon" : "icon")), n.parentElement !== e && e.insertBefore(n, e.firstChild), i.attributeChangedCallback instanceof Function ? o() : setImmediate(function () {
                        return i.attributeChangedCallback instanceof Function && o()
                    })
                } else n && n.remove();
                ["label", "badge"].forEach(function (n, i) {
                    var o = t.querySelector(".tabbar__" + n);
                    t.hasAttribute(n) ? ((o = o || Q.create(".tabbar__" + n + ("badge" === n ? " notification" : ""))).textContent = t.getAttribute(n), o.parentElement !== e && e.appendChild(o)) : o && o.remove()
                })
            }
        }, {
            key: "_onClick", value: function () {
                this.onClick instanceof Function ? this.onClick() : this._tabbar.setActiveTab(this.index, {reject: !1})
            }
        }, {
            key: "setActive", value: function () {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this._input.checked = t, this.classList.toggle("active", t), Q.toggleAttribute(this, "active", t), this.hasAttribute("icon") && this.hasAttribute("active-icon") && this._icon.children[0].setAttribute("icon", this.getAttribute(t ? "active-icon" : "icon"))
            }
        }, {
            key: "_loadPageElement", value: function (t, e) {
                var n = this;
                return this._hasLoaded = !0, new Promise(function (i) {
                    n._pageLoader.load({parent: t, page: e}, function (e) {
                        t.replaceChild(e, t.children[n.index]), n._loadedPage = e, i(e)
                    })
                })
            }
        }, {
            key: "isActive", value: function () {
                return this.classList.contains("active")
            }
        }, {
            key: "disconnectedCallback", value: function () {
                this.removeEventListener("click", this._onClick, !1), this._loadedPage && (this._hasLoaded = !1, this.loaded = null)
            }
        }, {
            key: "connectedCallback", value: function () {
                var t = this;
                if (this.addEventListener("click", this._onClick, !1), Q.isAttached(this) && !this.loaded) {
                    var e = Q.defer();
                    this.loaded = e.promise, n(this, function () {
                        var n = t.index, i = t._tabbar;
                        i || Q.throw("Tab elements must be children of Tabbar"), i.hasAttribute("modifier") && Q.addModifier(t, i.getAttribute("modifier")), t._hasLoaded || (t.hasAttribute("active") && (t.setActive(!0), i.setAttribute("activeIndex", n)), n === i.tabs.length - 1 && (i._onRefresh(), setImmediate(function () {
                            return i._onRefresh()
                        })), ma.rewritables.ready(i, function () {
                            var o = t.page || t.getAttribute("page");
                            if (!t.pageElement && o) {
                                var r = i._targetElement,
                                    a = Q.create("div", {height: "100%", width: "100%", visibility: "hidden"});
                                r.insertBefore(a, r.children[n]);
                                var s = function () {
                                    return t._loadPageElement(r, o).then(e.resolve)
                                };
                                return t.isActive() ? s() : i._loadInactive.promise.then(s)
                            }
                            return e.resolve(t.pageElement)
                        }))
                    })
                }
            }
        }, {
            key: "attributeChangedCallback", value: function (t, e, i) {
                var o = this;
                switch (t) {
                    case"class":
                        Q.restoreClass(this, "tabbar__item", _a);
                        break;
                    case"modifier":
                        n(this, function () {
                            return B.onModifierChanged(e, i, o, _a)
                        });
                        break;
                    case"ripple":
                        n(this, function () {
                            return o._updateRipple()
                        });
                        break;
                    case"icon":
                    case"label":
                    case"badge":
                        n(this, function () {
                            return o._updateButtonContent()
                        });
                        break;
                    case"page":
                        this.page = i || ""
                }
            }
        }, {
            key: "pageLoader", set: function (t) {
                t instanceof Bt || Q.throwPageLoader(), this._pageLoader = t
            }, get: function () {
                return this._pageLoader
            }
        }, {
            key: "_input", get: function () {
                return Q.findChild(this, "input")
            }
        }, {
            key: "_button", get: function () {
                return Q.findChild(this, ".tabbar__button")
            }
        }, {
            key: "_icon", get: function () {
                return this.querySelector(".tabbar__icon")
            }
        }, {
            key: "_tabbar", get: function () {
                return Q.findParent(this, "ons-tabbar")
            }
        }, {
            key: "index", get: function () {
                return Array.prototype.indexOf.call(this.parentElement.children, this)
            }
        }, {
            key: "pageElement", get: function () {
                if (this._loadedPage) return this._loadedPage;
                var t = this._tabbar;
                return t.pages.length === t.tabs.length ? t.pages[this.index] : null
            }
        }], [{
            key: "observedAttributes", get: function () {
                return ["modifier", "ripple", "icon", "label", "page", "badge", "class"]
            }
        }]), e
    }();
    c.Tab = va, customElements.define("ons-tab", va);
    var ba = function (t) {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.timing,
                    i = void 0 === n ? "linear" : n, o = t.delay, r = void 0 === o ? 0 : o, a = t.duration,
                    s = void 0 === a ? .2 : a;
                return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
                    timing: i,
                    delay: r,
                    duration: s
                }))
            }

            return b(e, Ti), g(e, [{
                key: "show", value: function (t, e) {
                    e()
                }
            }, {
                key: "hide", value: function (t, e) {
                    e()
                }
            }]), e
        }(), ya = function (t) {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.timing,
                    i = void 0 === n ? "linear" : n, o = t.delay, r = void 0 === o ? 0 : o, a = t.duration,
                    s = void 0 === a ? .3 : a;
                return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
                    timing: i,
                    delay: r,
                    duration: s
                }))
            }

            return b(e, ba), g(e, [{
                key: "show", value: function (t, e) {
                    e = e || function () {
                    }, nt(t, this.def).default({opacity: 0}, {opacity: 1}).queue(function (t) {
                        e(), t()
                    }).play()
                }
            }, {
                key: "hide", value: function (t, e) {
                    e = e || function () {
                    }, nt(t, this.def).default({opacity: 1}, {opacity: 0}).queue(function (t) {
                        e(), t()
                    }).play()
                }
            }]), e
        }(), ka = function (t) {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.timing,
                    i = void 0 === n ? "ease" : n, o = t.delay, r = void 0 === o ? 0 : o, a = t.duration,
                    s = void 0 === a ? .25 : a;
                p(this, e);
                var l = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {timing: i, delay: r, duration: s}));
                return l.messageDelay = .4 * l.duration + l.delay, C.isAndroid() ? l.ascension = 48 : Li.isIPhoneXPortraitPatchActive() ? l.ascension = 98 : Li.isIPhoneXLandscapePatchActive() ? l.ascension = 85 : l.ascension = 64, l
            }

            return b(e, ba), g(e, [{
                key: "show", value: function (t, e) {
                    t = t._toast, Q.globals.fabOffset = this.ascension, nt.runAll(nt(t, this.def).default({transform: "translate3d(0, " + this.ascension + "px, 0)"}, {transform: "translate3d(0, 0, 0)"}).queue(function (t) {
                        e && e(), t()
                    }), nt(this._getFabs()).wait(this.delay).queue({transform: "translate3d(0, -" + this.ascension + "px, 0) scale(1)"}, this.def), nt(Q.arrayFrom(t.children), this.def).default({opacity: 0}, {opacity: 1}))
                }
            }, {
                key: "hide", value: function (t, e) {
                    t = t._toast, Q.globals.fabOffset = 0, nt.runAll(nt(t, this.def).default({transform: "translate3d(0, 0, 0)"}, {transform: "translate3d(0, " + this.ascension + "px, 0)"}).queue(function (t) {
                        e && e(), t()
                    }), nt(this._getFabs(), this.def).wait(this.delay).queue({transform: "translate3d(0, 0, 0) scale(1)"}, this.def), nt(Q.arrayFrom(t.children), this.def).default({opacity: 1}, {opacity: 0}))
                }
            }, {
                key: "_getFabs", value: function () {
                    return Q.arrayFrom(document.querySelectorAll("ons-fab[position~=bottom], ons-speed-dial[position~=bottom]")).filter(function (t) {
                        return t.visible
                    })
                }
            }]), e
        }(), wa = function (t) {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.timing,
                    i = void 0 === n ? "ease" : n, o = t.delay, r = void 0 === o ? 0 : o, a = t.duration,
                    s = void 0 === a ? .35 : a;
                p(this, e);
                var l = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {timing: i, delay: r, duration: s}));
                return l.bodyHeight = document.body.clientHeight, Li.isIPhoneXPortraitPatchActive() ? l.liftAmount = "calc(100% + 34px)" : Li.isIPhoneXLandscapePatchActive() ? l.liftAmount = "calc(100% + 21px)" : l.liftAmount = "100%", l
            }

            return b(e, ba), g(e, [{
                key: "show", value: function (t, e) {
                    t = t._toast, nt.runAll(nt(t, this.def).default({
                        transform: "translate3d(0, " + this.liftAmount + ", 0)",
                        opacity: 0
                    }, {transform: "translate3d(0, 0, 0)", opacity: 1}).queue(function (t) {
                        e && e(), t()
                    }))
                }
            }, {
                key: "hide", value: function (t, e) {
                    t = t._toast, nt.runAll(nt(t, this.def).default({
                        transform: "translate3d(0, 0, 0)",
                        opacity: 1
                    }, {transform: "translate3d(0, " + this.liftAmount + ", 0)", opacity: 0}).queue(function (t) {
                        e && e(), t()
                    }))
                }
            }, {
                key: "_updatePosition", value: function (t) {
                    0 === parseInt(t.style.top, 10) && (t.style.top = t.style.bottom = "")
                }
            }]), e
        }(), Ea = function (t) {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.timing,
                    i = void 0 === n ? "ease" : n, o = t.delay, r = void 0 === o ? 0 : o, a = t.duration,
                    s = void 0 === a ? .35 : a;
                p(this, e);
                var l = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {timing: i, delay: r, duration: s}));
                return Li.isIPhoneXPortraitPatchActive() ? l.fallAmount = "calc(-100% - 44px)" : l.fallAmount = "-100%", l
            }

            return b(e, ba), g(e, [{
                key: "show", value: function (t, e) {
                    t = t._toast, this._updatePosition(t), nt.runAll(nt(t, this.def).default({
                        transform: "translate3d(0, " + this.fallAmount + ", 0)",
                        opacity: 0
                    }, {transform: "translate3d(0, 0, 0)", opacity: 1}).queue(function (t) {
                        e && e(), t()
                    }))
                }
            }, {
                key: "hide", value: function (t, e) {
                    var n = this;
                    t = t._toast, this._updatePosition(t), nt.runAll(nt(t, this.def).default({
                        transform: "translate3d(0, 0, 0)",
                        opacity: 1
                    }, {transform: "translate3d(0, " + this.fallAmount + ", 0)", opacity: 0}).queue(function (i) {
                        n._updatePosition(t, !0), e && e(), i()
                    }))
                }
            }, {
                key: "_updatePosition", value: function (t, e) {
                    var n = void 0;
                    n = Li.isIPhoneXPortraitPatchActive() ? "44px" : "0", t.style.top !== n && (t.style.top = n, t.style.bottom = "initial")
                }
            }]), e
        }(), Ca = {".toast": "toast--*", ".toast__message": "toast--*__message", ".toast__button": "toast--*__button"},
        Aa = {default: C.isAndroid() ? ka : wa, fade: ya, ascend: ka, lift: wa, fall: Ea, none: ba}, Sa = function (t) {
            function e() {
                p(this, e);
                var t = k(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return t._defaultDBB = null, n(t, function () {
                    return t._compile()
                }), t
            }

            return b(e, Ni), g(e, [{
                key: "_updateAnimatorFactory", value: function () {
                    return this._toast && (this._toast.style.top = this._toast.style.bottom = ""), new O({
                        animators: Aa,
                        baseClass: ba,
                        baseClassName: "ToastAnimator",
                        defaultAnimation: this.getAttribute("animation")
                    })
                }
            }, {
                key: "_compile", value: function () {
                    N.prepare(this), this.style.display = "none", this.style.zIndex = 1e4;
                    var t = Q.findChild(this, ".toast");
                    if (!t) for ((t = document.createElement("div")).classList.add("toast"); this.childNodes[0];) t.appendChild(this.childNodes[0]);
                    var e = Q.findChild(t, ".toast__button");
                    if (e || (e = Q.findChild(t, function (t) {
                        return Q.match(t, ".button") || Q.match(t, "button")
                    })) && (e.classList.remove("button"), e.classList.add("toast__button"), t.appendChild(e)), !Q.findChild(t, ".toast__message")) {
                        var n = Q.findChild(t, ".message");
                        if (!n) {
                            n = document.createElement("div");
                            for (var i = t.childNodes.length - 1; i >= 0; i--) t.childNodes[i] !== e && n.insertBefore(t.childNodes[i], n.firstChild)
                        }
                        n.classList.add("toast__message"), t.insertBefore(n, t.firstChild)
                    }
                    t.parentNode !== this && this.appendChild(t), B.initModifier(this, this._scheme)
                }
            }, {
                key: "_scheme", get: function () {
                    return Ca
                }
            }, {
                key: "_toast", get: function () {
                    return Q.findChild(this, ".toast")
                }
            }], [{
                key: "registerAnimator", value: function (t, e) {
                    e.prototype instanceof ba || Q.throw('"Animator" param must inherit OnsToastElement.ToastAnimator'), Aa[t] = e
                }
            }, {
                key: "animators", get: function () {
                    return Aa
                }
            }, {
                key: "ToastAnimator", get: function () {
                    return ba
                }
            }]), e
        }();
    c.Toast = Sa, customElements.define("ons-toast", Sa);
    var Pa = function (t) {
        function e() {
            return p(this, e), k(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
        }

        return b(e, Ri), g(e, [{
            key: "_scheme", get: function () {
                return {"": "toolbar-button--*"}
            }
        }, {
            key: "_defaultClassName", get: function () {
                return "toolbar-button"
            }
        }, {
            key: "_rippleOpt", get: function () {
                return [this, void 0, {center: "", size: "contain", background: "transparent"}]
            }
        }]), e
    }();
    return c.ToolbarButton = Pa, customElements.define("ons-toolbar-button", Pa), function (t) {
        window._onsLoaded && t._util.warn("Onsen UI is loaded more than once."), window._onsLoaded = !0, window.addEventListener("load", function () {
            t.fastClick = zt.attach(document.body);
            var e = "touch-action" in document.body.style;
            t.platform._runOnActualPlatform(function () {
                t.platform.isAndroid() ? t.fastClick.destroy() : t.platform.isIOS() && e && (t.platform.isIOSSafari() || t.platform.isWKWebView()) && t.fastClick.destroy()
            })
        }, !1), t.ready(function () {
            t.enableDeviceBackButtonHandler(), t._defaultDeviceBackButtonHandler = t._internal.dbbDispatcher.createHandler(window.document.body, function () {
                Object.hasOwnProperty.call(navigator, "app") ? navigator.app.exitApp() : console.warn("Could not close the app. Is 'cordova.js' included?\nError: 'window.navigator.app' is undefined.")
            }), document.body._gestureDetector = new t.GestureDetector(document.body, {passive: !0}), t.platform.isWebView() || document.body.addEventListener("keydown", function (e) {
                27 === e.keyCode && t.fireDeviceBackButtonEvent()
            }), t._setupLoadingPlaceHolders()
        }), Viewport.setup()
    }(Rt), window._superSecretOns = Rt, Rt
});