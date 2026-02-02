'use strict';

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = !0, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _regenerator() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e,
    t,
    r = "function" == typeof Symbol ? Symbol : {},
    n = r.iterator || "@@iterator",
    o = r.toStringTag || "@@toStringTag";
  function i(r, n, o, i) {
    var c = n && n.prototype instanceof Generator ? n : Generator,
      u = Object.create(c.prototype);
    return _regeneratorDefine(u, "_invoke", function (r, n, o) {
      var i,
        c,
        u,
        f = 0,
        p = o || [],
        y = !1,
        G = {
          p: 0,
          n: 0,
          v: e,
          a: d,
          f: d.bind(e, 4),
          d: function (t, r) {
            return i = t, c = 0, u = e, G.n = r, a;
          }
        };
      function d(r, n) {
        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
          var o,
            i = p[t],
            d = G.p,
            l = i[2];
          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
        }
        if (o || r > 1) return a;
        throw y = !0, n;
      }
      return function (o, p, l) {
        if (f > 1) throw TypeError("Generator is already running");
        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
          try {
            if (f = 2, i) {
              if (c || (o = "next"), t = i[o]) {
                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u = t.value, c < 2 && (c = 0);
              } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
              i = e;
            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
          } catch (t) {
            i = e, c = 1, u = t;
          } finally {
            f = 1;
          }
        }
        return {
          value: t,
          done: y
        };
      };
    }(r, o, i), !0), u;
  }
  var a = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (_regeneratorDefine(t = {}, n, function () {
      return this;
    }), t),
    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine(u), _regeneratorDefine(u, o, "Generator"), _regeneratorDefine(u, n, function () {
    return this;
  }), _regeneratorDefine(u, "toString", function () {
    return "[object Generator]";
  }), (_regenerator = function () {
    return {
      w: i,
      m: f
    };
  })();
}
function _regeneratorDefine(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e) {
    i = 0;
  }
  _regeneratorDefine = function (e, r, n, t) {
    function o(r, n) {
      _regeneratorDefine(e, r, function (e) {
        return this._invoke(r, n, e);
      });
    }
    r ? i ? i(e, r, {
      value: n,
      enumerable: !t,
      configurable: !t,
      writable: !t
    }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, _regeneratorDefine(e, r, n, t);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

// event
var SESSIONID_REFRESH_EVENT = "sessionid_refresh_event";

var EventBus = /*#__PURE__*/function () {
  function EventBus() {
    _classCallCheck(this, EventBus);
  } // 使用 Map 存储事件与回调列表
  // key: eventName, value: Set<handler>
  // this._events = new Map();

  // 订阅事件
  return _createClass(EventBus, [{
    key: "on",
    value: function on(event, handler) {
      if (!EventBus._events.has(event)) {
        EventBus._events.set(event, new Set());
      }
      EventBus._events.get(event).add(handler);
    }

    // 取消订阅
  }, {
    key: "off",
    value: function off(event, handler) {
      if (!EventBus._events.has(event)) return;
      var handlers = EventBus._events.get(event);
      handlers["delete"](handler);

      // 若此事件无监听者则自动清理
      if (handlers.size === 0) {
        EventBus._events["delete"](event);
      }
    }

    // 发布事件
  }, {
    key: "emit",
    value: function emit(event, data) {
      if (!EventBus._events.has(event)) return;
      var handlers = EventBus._events.get(event);
      var _iterator = _createForOfIteratorHelper(handlers),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var handler = _step.value;
          handler(data);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    // 一次性订阅
  }, {
    key: "once",
    value: function once(event, handler) {
      var _this = this;
      var _wrapper = function wrapper(data) {
        handler(data);
        _this.unsubscribe(event, _wrapper);
      };
      this.subscribe(event, _wrapper);
    }
  }]);
}();
_defineProperty(EventBus, "_events", new Map());

var PROJECT_KEY_RE = /^[a-zA-Z0-9]{4,12}$/;
function validateDsn(dsn) {
  var parsed;
  try {
    parsed = parseDsn(dsn);
  } catch (_unused) {
    throw new Error("DSN parse failed");
  }

  // if (parsed.protocol !== "https") {
  //     throw new Error("DSN must use https");
  // }

  if (!parsed.publicKey || parsed.publicKey.length < 16) {
    throw new Error("Invalid publicKey");
  }
  if (!PROJECT_KEY_RE.test(parsed.projectKey)) {
    throw new Error("Invalid projectKey");
  }
  var allowedParams = ["env", "app", "version"];
  Object.keys(parsed.params).forEach(function (key) {
    if (!allowedParams.includes(key)) {
      throw new Error("Invalid DSN param: ".concat(key));
    }
  });
}
function parseDsn(dsn) {
  try {
    var url = new URL(dsn);
    if (!url.username) {
      throw new Error("DSN missing publicKey");
    }
    var projectKey = url.pathname.replace("/", "");
    if (!projectKey) {
      throw new Error("DSN missing projectKey");
    }
    var params = {};
    url.searchParams.forEach(function (v, k) {
      params[k] = v;
    });
    return {
      protocol: url.protocol.replace(":", ""),
      host: url.host,
      publicKey: url.username,
      projectKey: projectKey,
      params: params
    };
  } catch (e) {
    throw new Error("Invalid DSN: ".concat(dsn));
  }
}

// import md5 from 'blueimp-md5';

function genPageViewId() {
  var url = location.protocol + '//' + location.hostname + location.pathname;
  var query = new URLSearchParams(location.search);
  var sortedQueryString = _toConsumableArray(query.entries()).sort(function (a, b) {
    return a[0].localeCompare(b[0]);
  }).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      k = _ref2[0],
      v = _ref2[1];
    return "".concat(k, "=").concat(v);
  }).join('&');
  var canonicalURL = url + (sortedQueryString ? '?' + sortedQueryString : '') + (location.hash || '');
  return canonicalURL;
  // return md5(canonicalURL).slice(0, 12); // 截短以降低存储成本
}

function generateSessionId() {
  return 's_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 8);
}

// import { genRandomUUID } from "@common/utils/randomUUID";
var ConfigManager = /*#__PURE__*/function () {
  function ConfigManager() {
    _classCallCheck(this, ConfigManager);
    _defineProperty(this, "defaultConfig", {
      appId: '',
      appVersion: '1.0.0',
      debug: false,
      enabled: true,
      dsnInfo: {
        protocol: "",
        // 协议
        host: "",
        // 域
        publicKey: "",
        // SDK 使用的公钥（可公开）
        projectKey: "",
        // 对外暴露的 projectId（短 ID）
        params: {}
      },
      reportUrl: "",
      reportStrategy: 'immediate',
      // immediate batch throttle
      batchSize: 5,
      reportInterval: 10000,
      // 延迟上报时间 reportStrategy 为 batch throttle 时有效
      maxQueueSize: 100,
      sampleRate: 1,
      errorSampleRate: 1,
      performanceSampleRate: 0.1,
      user: {
        // userId: genRandomUUID(),
        userId: 0,
        username: "游客"
      },
      sessionId: "",
      // 会话 id
      plugins: [],
      hooks: {}
    });
  }
  return _createClass(ConfigManager, [{
    key: "mergeConfig",
    value: function mergeConfig(userConfig) {
      var merged = _objectSpread2(_objectSpread2({}, this.defaultConfig), userConfig);

      // // 环境特定配置
      // if (typeof window !== 'undefined') {
      //     merged.reportUrl = merged.reportUrl || '/monitoring/report';
      // }

      // 初始化 sessionId
      merged.sessionId = generateSessionId();

      // 验证必要配置
      this.validateConfig(merged);
      return merged;
    }
  }, {
    key: "validateConfig",
    value: function validateConfig(config) {
      // if (!config.appId) {
      //     throw new Error('appId is required');
      // }

      if (config.sampleRate < 0 || config.sampleRate > 1) {
        throw new Error('sampleRate must be between 0 and 1');
      }
    }
  }]);
}();

// 数据上报层 - 上报管理器
var DataReporter = /*#__PURE__*/function () {
  function DataReporter(config) {
    _classCallCheck(this, DataReporter);
    this.config = config;
    this.queue = [];
    this.timer = null;
    this.isReporting = false;
  }
  return _createClass(DataReporter, [{
    key: "sendHeaders",
    get: function get() {
      return {
        "Content-Type": 'application/json',
        'Ruoyi-monitor-SDK-Key': this.config.dsnInfo.publicKey
      };
    }
  }, {
    key: "init",
    value: function init() {}
  }, {
    key: "report",
    value: function () {
      var _report = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(event) {
        var _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _t = this.config.reportStrategy;
              _context.n = _t === 'immediate' ? 1 : _t === 'batch' ? 3 : _t === 'throttle' ? 5 : 7;
              break;
            case 1:
              _context.n = 2;
              return this.reportImmediate([event]);
            case 2:
              return _context.a(3, 7);
            case 3:
              _context.n = 4;
              return this.reportBatch(event);
            case 4:
              return _context.a(3, 7);
            case 5:
              _context.n = 6;
              return this.reportThrottle(event);
            case 6:
              return _context.a(3, 7);
            case 7:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function report(_x) {
        return _report.apply(this, arguments);
      }
      return report;
    }()
  }, {
    key: "reportBatch",
    value: function () {
      var _reportBatch = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(event) {
        var _this = this;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              this.queue.push(event);

              // 达到批量大小立即上报
              if (!(this.queue.length >= this.config.batchSize)) {
                _context2.n = 2;
                break;
              }
              _context2.n = 1;
              return this.flush();
            case 1:
              return _context2.a(2);
            case 2:
              // 设置定时上报
              if (!this.timer) {
                this.timer = setTimeout(function () {
                  _this.flush();
                }, this.config.reportInterval);
              }
            case 3:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function reportBatch(_x2) {
        return _reportBatch.apply(this, arguments);
      }
      return reportBatch;
    }()
  }, {
    key: "reportImmediate",
    value: function () {
      var _reportImmediate = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(events) {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return this.sendRequest(events);
            case 1:
              return _context3.a(2);
          }
        }, _callee3, this);
      }));
      function reportImmediate(_x3) {
        return _reportImmediate.apply(this, arguments);
      }
      return reportImmediate;
    }()
  }, {
    key: "reportThrottle",
    value: function () {
      var _reportThrottle = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(event) {
        var _this2 = this;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              this.queue.push(event);
              if (!this.timer) {
                this.timer = setTimeout(function () {
                  _this2.flush();
                }, this.config.reportInterval);
              }
            case 1:
              return _context4.a(2);
          }
        }, _callee4, this);
      }));
      function reportThrottle(_x4) {
        return _reportThrottle.apply(this, arguments);
      }
      return reportThrottle;
    }()
  }, {
    key: "flush",
    value: function () {
      var _flush = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var eventsToReport, _this$queue, _t2;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              if (!(this.isReporting || this.queue.length === 0)) {
                _context5.n = 1;
                break;
              }
              return _context5.a(2);
            case 1:
              this.isReporting = true;
              clearTimeout(this.timer);
              this.timer = null;
              eventsToReport = _toConsumableArray(this.queue);
              this.queue = [];
              _context5.p = 2;
              _context5.n = 3;
              return this.sendRequest(eventsToReport);
            case 3:
              _context5.n = 5;
              break;
            case 4:
              _context5.p = 4;
              _t2 = _context5.v;
              // 上报失败，重新加入队列
              (_this$queue = this.queue).unshift.apply(_this$queue, _toConsumableArray(eventsToReport));

              // 队列超过最大限制，丢弃旧数据
              if (this.queue.length > this.config.maxQueueSize) {
                this.queue = this.queue.slice(0, this.config.maxQueueSize);
              }
              console.error('Report failed:', _t2);
            case 5:
              _context5.p = 5;
              this.isReporting = false;
              return _context5.f(5);
            case 6:
              return _context5.a(2);
          }
        }, _callee5, this, [[2, 4, 5, 6]]);
      }));
      function flush() {
        return _flush.apply(this, arguments);
      }
      return flush;
    }()
  }, {
    key: "sendRequest",
    value: function () {
      var _sendRequest = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(events) {
        var payload;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              if (!(events.length === 0)) {
                _context6.n = 1;
                break;
              }
              return _context6.a(2);
            case 1:
              payload = {
                projectKey: this.config.dsnInfo.projectKey,
                appVersion: this.config.appVersion,
                events: events
              };
              console.log("payload eventType:".concat(events[0].eventType, " \u2014\u2014 type:").concat(events[0].data.type), payload);
              // 使用多种方式上报，提高成功率
              _context6.n = 2;
              return Promise.race([
                // this.sendBeacon(payload),
                // this.sendFetch(payload),
                // this.sendXHR(payload)
              ]);
            case 2:
              return _context6.a(2);
          }
        }, _callee6, this);
      }));
      function sendRequest(_x5) {
        return _sendRequest.apply(this, arguments);
      }
      return sendRequest;
    }()
  }, {
    key: "sendBeacon",
    value: function () {
      var _sendBeacon = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(payload) {
        var blob;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              if (navigator.sendBeacon) {
                _context7.n = 1;
                break;
              }
              return _context7.a(2, false);
            case 1:
              blob = new Blob([JSON.stringify(payload)], this.sendHeaders);
              return _context7.a(2, navigator.sendBeacon(this.config.reportUrl, blob));
          }
        }, _callee7, this);
      }));
      function sendBeacon(_x6) {
        return _sendBeacon.apply(this, arguments);
      }
      return sendBeacon;
    }()
  }, {
    key: "sendFetch",
    value: function () {
      var _sendFetch = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(payload) {
        var response, _t3;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              _context8.p = 0;
              _context8.n = 1;
              return fetch(this.config.reportUrl, {
                method: 'POST',
                headers: this.sendHeaders,
                body: JSON.stringify(payload),
                keepalive: true // 关键参数！防止页面关闭时请求被杀
              });
            case 1:
              response = _context8.v;
              if (response.ok) {
                _context8.n = 2;
                break;
              }
              throw new Error("HTTP ".concat(response.status));
            case 2:
              _context8.n = 4;
              break;
            case 3:
              _context8.p = 3;
              _t3 = _context8.v;
              throw _t3;
            case 4:
              return _context8.a(2);
          }
        }, _callee8, this, [[0, 3]]);
      }));
      function sendFetch(_x7) {
        return _sendFetch.apply(this, arguments);
      }
      return sendFetch;
    }()
  }, {
    key: "sendXHR",
    value: function sendXHR(payload) {
      var _this3 = this;
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', _this3.config.reportUrl, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Ruoyi-monitor-SDK-Key', _this3.config.dsnInfo.publicKey);
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              resolve();
            } else {
              reject(new Error("HTTP ".concat(xhr.status)));
            }
          }
        };
        xhr.send(JSON.stringify(payload));
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      clearTimeout(this.timer);
      this.flush(); // 销毁前上报剩余数据
    }
  }]);
}();

var MonitoringCore = /*#__PURE__*/function (_EventBus) {
  function MonitoringCore() {
    var _this;
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, MonitoringCore);
    _this = _callSuper(this, MonitoringCore);
    _defineProperty(_this, "plugins", new Map());
    _defineProperty(_this, "config", {});
    _defineProperty(_this, "reporter", null);
    _defineProperty(_this, "processor", null);
    _this.config = config;
    _this.state = {
      initialized: false,
      enabled: true,
      queue: []
    };
    _this.on(SESSIONID_REFRESH_EVENT, _this.refreshSessionId.bind(_this));
    return _this;
  }

  // 初始化SDK
  _inherits(MonitoringCore, _EventBus);
  return _createClass(MonitoringCore, [{
    key: "init",
    value: function init() {
      var _this2 = this;
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (this.state.initialized) return;

      // 初始化配置
      var configManager = new ConfigManager();
      this.config = configManager.mergeConfig(_objectSpread2(_objectSpread2({}, this.config), options));
      try {
        // 校验并解析 dsn
        validateDsn(this.config.dsn);
        var dsnInfo = parseDsn(this.config.dsn);
        this.config.dsnInfo = dsnInfo;

        // 设置上报地址
        this.config.reportUrl = dsnInfo.protocol + "://" + dsnInfo.host + "/ruoyi-monitor/report";

        // 注册内置插件
        // this.registerCorePlugins();

        // 初始化处理器和上报器
        // this.processor = new DataProcessor(this.config); // 数据处理器
        this.reporter = new DataReporter(this.config); // 上报器

        // this.processor.init();
        this.reporter.init();

        // 设置全局错误捕获
        // this.setupGlobalErrorHandling();

        // 初始化插件
        this.config.plugins.forEach(function (plugin) {
          return _this2.use(plugin);
        });
        this.state.initialized = true;
        this.emit('sdk:init');
      } catch (error) {
        console.error('SDK initialization failed:', error);
      }
    }

    // 注册插件
  }, {
    key: "use",
    value: function use(plugin) {
      var pluginName = plugin.name;
      if (this.plugins.has(pluginName)) {
        console.warn("Plugin ".concat(pluginName, " already registered"));
        return this;
      }
      try {
        plugin.install(this);
        this.plugins.set(pluginName, plugin);
        this.emit('plugin:registered', {
          plugin: pluginName
        });
      } catch (error) {
        console.error("Failed to register plugin ".concat(pluginName, ":"), error);
      }
      return this;
    }

    // 数据采集入口
  }, {
    key: "capture",
    value: function capture(eventType, data) {
      if (!this.state.enabled) return;
      var event = {
        eventType: eventType,
        timestamp: Date.now(),
        data: data,
        sessionId: this.config.sessionId,
        pageViewId: genPageViewId(),
        userInfo: this.config.user
      };

      // 处理并上报数据
      this.processEvent(event);
    }

    // 处理事件
  }, {
    key: "processEvent",
    value: function () {
      var _processEvent = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(event) {
        var finalEvent, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              // const finalEvent = await this.triggerPluginHooks('beforeReport', processedEvent);
              finalEvent = event;
              if (!(finalEvent !== null)) {
                _context.n = 2;
                break;
              }
              // 添加到队列
              this.state.queue.push(finalEvent);

              // 触发上报
              _context.n = 1;
              return this.reporter.report(finalEvent);
            case 1:
              this.emit('event:reported', finalEvent);
            case 2:
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              console.error('Event processing failed:', _t);
              this.emit('event:error', {
                event: event,
                error: _t
              });
            case 4:
              return _context.a(2);
          }
        }, _callee, this, [[0, 3]]);
      }));
      function processEvent(_x) {
        return _processEvent.apply(this, arguments);
      }
      return processEvent;
    }() // 设置用户
  }, {
    key: "setUser",
    value: function setUser(userInfo) {
      this.config.user = userInfo;
    }

    // 刷新 sessionId
  }, {
    key: "refreshSessionId",
    value: function refreshSessionId(sessionId) {
      this.config.sessionId = sessionId;
    }

    // 销毁SDK
  }, {
    key: "destroy",
    value: function destroy() {
      this.plugins.forEach(function (plugin) {
        try {
          var _plugin$uninstall;
          (_plugin$uninstall = plugin.uninstall) === null || _plugin$uninstall === void 0 || _plugin$uninstall.call(plugin);
        } catch (error) {
          console.error("Plugin ".concat(plugin.name, " uninstall failed:"), error);
        }
      });
      this.reporter.destroy();
      // this.processor.destroy();
      this.state.initialized = false;
      this.emit('sdk:destroyed');
    }
  }]);
}(EventBus);

// event
var RRWEB_RECORD_START_EVENT = "rrweb_record_start_event";
var RRWEB_RECORD_STOP_EVENT = "rrweb_record_stop_event";

var NodeType;
(function (NodeType) {
  NodeType[NodeType["Document"] = 0] = "Document";
  NodeType[NodeType["DocumentType"] = 1] = "DocumentType";
  NodeType[NodeType["Element"] = 2] = "Element";
  NodeType[NodeType["Text"] = 3] = "Text";
  NodeType[NodeType["CDATA"] = 4] = "CDATA";
  NodeType[NodeType["Comment"] = 5] = "Comment";
})(NodeType || (NodeType = {}));
function isElement(n) {
  return n.nodeType === n.ELEMENT_NODE;
}
function isShadowRoot(n) {
  var host = n === null || n === void 0 ? void 0 : n.host;
  return Boolean((host === null || host === void 0 ? void 0 : host.shadowRoot) === n);
}
function isNativeShadowDom(shadowRoot) {
  return Object.prototype.toString.call(shadowRoot) === '[object ShadowRoot]';
}
function fixBrowserCompatibilityIssuesInCSS(cssText) {
  if (cssText.includes(' background-clip: text;') && !cssText.includes(' -webkit-background-clip: text;')) {
    cssText = cssText.replace(' background-clip: text;', ' -webkit-background-clip: text; background-clip: text;');
  }
  return cssText;
}
function getCssRulesString(s) {
  try {
    var rules = s.rules || s.cssRules;
    return rules ? fixBrowserCompatibilityIssuesInCSS(Array.from(rules).map(getCssRuleString).join('')) : null;
  } catch (error) {
    return null;
  }
}
function getCssRuleString(rule) {
  var cssStringified = rule.cssText;
  if (isCSSImportRule(rule)) {
    try {
      cssStringified = getCssRulesString(rule.styleSheet) || cssStringified;
    } catch (_a) {}
  }
  return cssStringified;
}
function isCSSImportRule(rule) {
  return 'styleSheet' in rule;
}
var Mirror = function () {
  function Mirror() {
    this.idNodeMap = new Map();
    this.nodeMetaMap = new WeakMap();
  }
  Mirror.prototype.getId = function (n) {
    var _a;
    if (!n) return -1;
    var id = (_a = this.getMeta(n)) === null || _a === void 0 ? void 0 : _a.id;
    return id !== null && id !== void 0 ? id : -1;
  };
  Mirror.prototype.getNode = function (id) {
    return this.idNodeMap.get(id) || null;
  };
  Mirror.prototype.getIds = function () {
    return Array.from(this.idNodeMap.keys());
  };
  Mirror.prototype.getMeta = function (n) {
    return this.nodeMetaMap.get(n) || null;
  };
  Mirror.prototype.removeNodeFromMap = function (n) {
    var _this = this;
    var id = this.getId(n);
    this.idNodeMap["delete"](id);
    if (n.childNodes) {
      n.childNodes.forEach(function (childNode) {
        return _this.removeNodeFromMap(childNode);
      });
    }
  };
  Mirror.prototype.has = function (id) {
    return this.idNodeMap.has(id);
  };
  Mirror.prototype.hasNode = function (node) {
    return this.nodeMetaMap.has(node);
  };
  Mirror.prototype.add = function (n, meta) {
    var id = meta.id;
    this.idNodeMap.set(id, n);
    this.nodeMetaMap.set(n, meta);
  };
  Mirror.prototype.replace = function (id, n) {
    var oldNode = this.getNode(id);
    if (oldNode) {
      var meta = this.nodeMetaMap.get(oldNode);
      if (meta) this.nodeMetaMap.set(n, meta);
    }
    this.idNodeMap.set(id, n);
  };
  Mirror.prototype.reset = function () {
    this.idNodeMap = new Map();
    this.nodeMetaMap = new WeakMap();
  };
  return Mirror;
}();
function createMirror() {
  return new Mirror();
}
function maskInputValue(_a) {
  var maskInputOptions = _a.maskInputOptions,
    tagName = _a.tagName,
    type = _a.type,
    value = _a.value,
    maskInputFn = _a.maskInputFn;
  var text = value || '';
  if (maskInputOptions[tagName.toLowerCase()] || maskInputOptions[type]) {
    if (maskInputFn) {
      text = maskInputFn(text);
    } else {
      text = '*'.repeat(text.length);
    }
  }
  return text;
}
var ORIGINAL_ATTRIBUTE_NAME = '__rrweb_original__';
function is2DCanvasBlank(canvas) {
  var ctx = canvas.getContext('2d');
  if (!ctx) return true;
  var chunkSize = 50;
  for (var x = 0; x < canvas.width; x += chunkSize) {
    for (var y = 0; y < canvas.height; y += chunkSize) {
      var getImageData = ctx.getImageData;
      var originalGetImageData = ORIGINAL_ATTRIBUTE_NAME in getImageData ? getImageData[ORIGINAL_ATTRIBUTE_NAME] : getImageData;
      var pixelBuffer = new Uint32Array(originalGetImageData.call(ctx, x, y, Math.min(chunkSize, canvas.width - x), Math.min(chunkSize, canvas.height - y)).data.buffer);
      if (pixelBuffer.some(function (pixel) {
        return pixel !== 0;
      })) return false;
    }
  }
  return true;
}
var _id = 1;
var tagNameRegex = new RegExp('[^a-z0-9-_:]');
var IGNORED_NODE = -2;
function genId() {
  return _id++;
}
function getValidTagName(element) {
  if (element instanceof HTMLFormElement) {
    return 'form';
  }
  var processedTagName = element.tagName.toLowerCase().trim();
  if (tagNameRegex.test(processedTagName)) {
    return 'div';
  }
  return processedTagName;
}
function stringifyStyleSheet(sheet) {
  return sheet.cssRules ? Array.from(sheet.cssRules).map(function (rule) {
    return rule.cssText || '';
  }).join('') : '';
}
function extractOrigin(url) {
  var origin = '';
  if (url.indexOf('//') > -1) {
    origin = url.split('/').slice(0, 3).join('/');
  } else {
    origin = url.split('/')[0];
  }
  origin = origin.split('?')[0];
  return origin;
}
var canvasService;
var canvasCtx;
var URL_IN_CSS_REF = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm;
var RELATIVE_PATH = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/;
var DATA_URI = /^(data:)([^,]*),(.*)/i;
function absoluteToStylesheet(cssText, href) {
  return (cssText || '').replace(URL_IN_CSS_REF, function (origin, quote1, path1, quote2, path2, path3) {
    var filePath = path1 || path2 || path3;
    var maybeQuote = quote1 || quote2 || '';
    if (!filePath) {
      return origin;
    }
    if (!RELATIVE_PATH.test(filePath)) {
      return "url(".concat(maybeQuote).concat(filePath).concat(maybeQuote, ")");
    }
    if (DATA_URI.test(filePath)) {
      return "url(".concat(maybeQuote).concat(filePath).concat(maybeQuote, ")");
    }
    if (filePath[0] === '/') {
      return "url(".concat(maybeQuote).concat(extractOrigin(href) + filePath).concat(maybeQuote, ")");
    }
    var stack = href.split('/');
    var parts = filePath.split('/');
    stack.pop();
    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
      var part = parts_1[_i];
      if (part === '.') {
        continue;
      } else if (part === '..') {
        stack.pop();
      } else {
        stack.push(part);
      }
    }
    return "url(".concat(maybeQuote).concat(stack.join('/')).concat(maybeQuote, ")");
  });
}
var SRCSET_NOT_SPACES = /^[^ \t\n\r\u000c]+/;
var SRCSET_COMMAS_OR_SPACES = /^[, \t\n\r\u000c]+/;
function getAbsoluteSrcsetString(doc, attributeValue) {
  if (attributeValue.trim() === '') {
    return attributeValue;
  }
  var pos = 0;
  function collectCharacters(regEx) {
    var chars;
    var match = regEx.exec(attributeValue.substring(pos));
    if (match) {
      chars = match[0];
      pos += chars.length;
      return chars;
    }
    return '';
  }
  var output = [];
  while (true) {
    collectCharacters(SRCSET_COMMAS_OR_SPACES);
    if (pos >= attributeValue.length) {
      break;
    }
    var url = collectCharacters(SRCSET_NOT_SPACES);
    if (url.slice(-1) === ',') {
      url = absoluteToDoc(doc, url.substring(0, url.length - 1));
      output.push(url);
    } else {
      var descriptorsStr = '';
      url = absoluteToDoc(doc, url);
      var inParens = false;
      while (true) {
        var c = attributeValue.charAt(pos);
        if (c === '') {
          output.push((url + descriptorsStr).trim());
          break;
        } else if (!inParens) {
          if (c === ',') {
            pos += 1;
            output.push((url + descriptorsStr).trim());
            break;
          } else if (c === '(') {
            inParens = true;
          }
        } else {
          if (c === ')') {
            inParens = false;
          }
        }
        descriptorsStr += c;
        pos += 1;
      }
    }
  }
  return output.join(', ');
}
function absoluteToDoc(doc, attributeValue) {
  if (!attributeValue || attributeValue.trim() === '') {
    return attributeValue;
  }
  var a = doc.createElement('a');
  a.href = attributeValue;
  return a.href;
}
function isSVGElement(el) {
  return Boolean(el.tagName === 'svg' || el.ownerSVGElement);
}
function getHref() {
  var a = document.createElement('a');
  a.href = '';
  return a.href;
}
function transformAttribute(doc, tagName, name, value) {
  if (name === 'src' || name === 'href' && value && !(tagName === 'use' && value[0] === '#')) {
    return absoluteToDoc(doc, value);
  } else if (name === 'xlink:href' && value && value[0] !== '#') {
    return absoluteToDoc(doc, value);
  } else if (name === 'background' && value && (tagName === 'table' || tagName === 'td' || tagName === 'th')) {
    return absoluteToDoc(doc, value);
  } else if (name === 'srcset' && value) {
    return getAbsoluteSrcsetString(doc, value);
  } else if (name === 'style' && value) {
    return absoluteToStylesheet(value, getHref());
  } else if (tagName === 'object' && name === 'data' && value) {
    return absoluteToDoc(doc, value);
  } else {
    return value;
  }
}
function _isBlockedElement(element, blockClass, blockSelector) {
  if (typeof blockClass === 'string') {
    if (element.classList.contains(blockClass)) {
      return true;
    }
  } else {
    for (var eIndex = element.classList.length; eIndex--;) {
      var className = element.classList[eIndex];
      if (blockClass.test(className)) {
        return true;
      }
    }
  }
  if (blockSelector) {
    return element.matches(blockSelector);
  }
  return false;
}
function classMatchesRegex(node, regex, checkAncestors) {
  if (!node) return false;
  if (node.nodeType !== node.ELEMENT_NODE) {
    if (!checkAncestors) return false;
    return classMatchesRegex(node.parentNode, regex, checkAncestors);
  }
  for (var eIndex = node.classList.length; eIndex--;) {
    var className = node.classList[eIndex];
    if (regex.test(className)) {
      return true;
    }
  }
  if (!checkAncestors) return false;
  return classMatchesRegex(node.parentNode, regex, checkAncestors);
}
function needMaskingText(node, maskTextClass, maskTextSelector) {
  var el = node.nodeType === node.ELEMENT_NODE ? node : node.parentElement;
  if (el === null) return false;
  if (typeof maskTextClass === 'string') {
    if (el.classList.contains(maskTextClass)) return true;
    if (el.closest(".".concat(maskTextClass))) return true;
  } else {
    if (classMatchesRegex(el, maskTextClass, true)) return true;
  }
  if (maskTextSelector) {
    if (el.matches(maskTextSelector)) return true;
    if (el.closest(maskTextSelector)) return true;
  }
  return false;
}
function onceIframeLoaded(iframeEl, listener, iframeLoadTimeout) {
  var win = iframeEl.contentWindow;
  if (!win) {
    return;
  }
  var fired = false;
  var readyState;
  try {
    readyState = win.document.readyState;
  } catch (error) {
    return;
  }
  if (readyState !== 'complete') {
    var timer_1 = setTimeout(function () {
      if (!fired) {
        listener();
        fired = true;
      }
    }, iframeLoadTimeout);
    iframeEl.addEventListener('load', function () {
      clearTimeout(timer_1);
      fired = true;
      listener();
    });
    return;
  }
  var blankUrl = 'about:blank';
  if (win.location.href !== blankUrl || iframeEl.src === blankUrl || iframeEl.src === '') {
    setTimeout(listener, 0);
    return iframeEl.addEventListener('load', listener);
  }
  iframeEl.addEventListener('load', listener);
}
function onceStylesheetLoaded(link, listener, styleSheetLoadTimeout) {
  var fired = false;
  var styleSheetLoaded;
  try {
    styleSheetLoaded = link.sheet;
  } catch (error) {
    return;
  }
  if (styleSheetLoaded) return;
  var timer = setTimeout(function () {
    if (!fired) {
      listener();
      fired = true;
    }
  }, styleSheetLoadTimeout);
  link.addEventListener('load', function () {
    clearTimeout(timer);
    fired = true;
    listener();
  });
}
function serializeNode(n, options) {
  var doc = options.doc,
    mirror = options.mirror,
    blockClass = options.blockClass,
    blockSelector = options.blockSelector,
    maskTextClass = options.maskTextClass,
    maskTextSelector = options.maskTextSelector,
    inlineStylesheet = options.inlineStylesheet,
    _a = options.maskInputOptions,
    maskInputOptions = _a === void 0 ? {} : _a,
    maskTextFn = options.maskTextFn,
    maskInputFn = options.maskInputFn,
    _b = options.dataURLOptions,
    dataURLOptions = _b === void 0 ? {} : _b,
    inlineImages = options.inlineImages,
    recordCanvas = options.recordCanvas,
    keepIframeSrcFn = options.keepIframeSrcFn,
    _c = options.newlyAddedElement,
    newlyAddedElement = _c === void 0 ? false : _c;
  var rootId = getRootId(doc, mirror);
  switch (n.nodeType) {
    case n.DOCUMENT_NODE:
      if (n.compatMode !== 'CSS1Compat') {
        return {
          type: NodeType.Document,
          childNodes: [],
          compatMode: n.compatMode
        };
      } else {
        return {
          type: NodeType.Document,
          childNodes: []
        };
      }
    case n.DOCUMENT_TYPE_NODE:
      return {
        type: NodeType.DocumentType,
        name: n.name,
        publicId: n.publicId,
        systemId: n.systemId,
        rootId: rootId
      };
    case n.ELEMENT_NODE:
      return serializeElementNode(n, {
        doc: doc,
        blockClass: blockClass,
        blockSelector: blockSelector,
        inlineStylesheet: inlineStylesheet,
        maskInputOptions: maskInputOptions,
        maskInputFn: maskInputFn,
        dataURLOptions: dataURLOptions,
        inlineImages: inlineImages,
        recordCanvas: recordCanvas,
        keepIframeSrcFn: keepIframeSrcFn,
        newlyAddedElement: newlyAddedElement,
        rootId: rootId
      });
    case n.TEXT_NODE:
      return serializeTextNode(n, {
        maskTextClass: maskTextClass,
        maskTextSelector: maskTextSelector,
        maskTextFn: maskTextFn,
        rootId: rootId
      });
    case n.CDATA_SECTION_NODE:
      return {
        type: NodeType.CDATA,
        textContent: '',
        rootId: rootId
      };
    case n.COMMENT_NODE:
      return {
        type: NodeType.Comment,
        textContent: n.textContent || '',
        rootId: rootId
      };
    default:
      return false;
  }
}
function getRootId(doc, mirror) {
  if (!mirror.hasNode(doc)) return undefined;
  var docId = mirror.getId(doc);
  return docId === 1 ? undefined : docId;
}
function serializeTextNode(n, options) {
  var _a;
  var maskTextClass = options.maskTextClass,
    maskTextSelector = options.maskTextSelector,
    maskTextFn = options.maskTextFn,
    rootId = options.rootId;
  var parentTagName = n.parentNode && n.parentNode.tagName;
  var textContent = n.textContent;
  var isStyle = parentTagName === 'STYLE' ? true : undefined;
  var isScript = parentTagName === 'SCRIPT' ? true : undefined;
  if (isStyle && textContent) {
    try {
      if (n.nextSibling || n.previousSibling) {} else if ((_a = n.parentNode.sheet) === null || _a === void 0 ? void 0 : _a.cssRules) {
        textContent = stringifyStyleSheet(n.parentNode.sheet);
      }
    } catch (err) {
      console.warn("Cannot get CSS styles from text's parentNode. Error: ".concat(err), n);
    }
    textContent = absoluteToStylesheet(textContent, getHref());
  }
  if (isScript) {
    textContent = 'SCRIPT_PLACEHOLDER';
  }
  if (!isStyle && !isScript && textContent && needMaskingText(n, maskTextClass, maskTextSelector)) {
    textContent = maskTextFn ? maskTextFn(textContent) : textContent.replace(/[\S]/g, '*');
  }
  return {
    type: NodeType.Text,
    textContent: textContent || '',
    isStyle: isStyle,
    rootId: rootId
  };
}
function serializeElementNode(n, options) {
  var doc = options.doc,
    blockClass = options.blockClass,
    blockSelector = options.blockSelector,
    inlineStylesheet = options.inlineStylesheet,
    _a = options.maskInputOptions,
    maskInputOptions = _a === void 0 ? {} : _a,
    maskInputFn = options.maskInputFn,
    _b = options.dataURLOptions,
    dataURLOptions = _b === void 0 ? {} : _b,
    inlineImages = options.inlineImages,
    recordCanvas = options.recordCanvas,
    keepIframeSrcFn = options.keepIframeSrcFn,
    _c = options.newlyAddedElement,
    newlyAddedElement = _c === void 0 ? false : _c,
    rootId = options.rootId;
  var needBlock = _isBlockedElement(n, blockClass, blockSelector);
  var tagName = getValidTagName(n);
  var attributes = {};
  var len = n.attributes.length;
  for (var i = 0; i < len; i++) {
    var attr = n.attributes[i];
    attributes[attr.name] = transformAttribute(doc, tagName, attr.name, attr.value);
  }
  if (tagName === 'link' && inlineStylesheet) {
    var stylesheet = Array.from(doc.styleSheets).find(function (s) {
      return s.href === n.href;
    });
    var cssText = null;
    if (stylesheet) {
      cssText = getCssRulesString(stylesheet);
    }
    if (cssText) {
      delete attributes.rel;
      delete attributes.href;
      attributes._cssText = absoluteToStylesheet(cssText, stylesheet.href);
    }
  }
  if (tagName === 'style' && n.sheet && !(n.innerText || n.textContent || '').trim().length) {
    var cssText = getCssRulesString(n.sheet);
    if (cssText) {
      attributes._cssText = absoluteToStylesheet(cssText, getHref());
    }
  }
  if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
    var value = n.value;
    var checked = n.checked;
    if (attributes.type !== 'radio' && attributes.type !== 'checkbox' && attributes.type !== 'submit' && attributes.type !== 'button' && value) {
      attributes.value = maskInputValue({
        type: attributes.type,
        tagName: tagName,
        value: value,
        maskInputOptions: maskInputOptions,
        maskInputFn: maskInputFn
      });
    } else if (checked) {
      attributes.checked = checked;
    }
  }
  if (tagName === 'option') {
    if (n.selected && !maskInputOptions['select']) {
      attributes.selected = true;
    } else {
      delete attributes.selected;
    }
  }
  if (tagName === 'canvas' && recordCanvas) {
    if (n.__context === '2d') {
      if (!is2DCanvasBlank(n)) {
        attributes.rr_dataURL = n.toDataURL(dataURLOptions.type, dataURLOptions.quality);
      }
    } else if (!('__context' in n)) {
      var canvasDataURL = n.toDataURL(dataURLOptions.type, dataURLOptions.quality);
      var blankCanvas = document.createElement('canvas');
      blankCanvas.width = n.width;
      blankCanvas.height = n.height;
      var blankCanvasDataURL = blankCanvas.toDataURL(dataURLOptions.type, dataURLOptions.quality);
      if (canvasDataURL !== blankCanvasDataURL) {
        attributes.rr_dataURL = canvasDataURL;
      }
    }
  }
  if (tagName === 'img' && inlineImages) {
    if (!canvasService) {
      canvasService = doc.createElement('canvas');
      canvasCtx = canvasService.getContext('2d');
    }
    var image_1 = n;
    var oldValue_1 = image_1.crossOrigin;
    image_1.crossOrigin = 'anonymous';
    var recordInlineImage = function recordInlineImage() {
      try {
        canvasService.width = image_1.naturalWidth;
        canvasService.height = image_1.naturalHeight;
        canvasCtx.drawImage(image_1, 0, 0);
        attributes.rr_dataURL = canvasService.toDataURL(dataURLOptions.type, dataURLOptions.quality);
      } catch (err) {
        console.warn("Cannot inline img src=".concat(image_1.currentSrc, "! Error: ").concat(err));
      }
      oldValue_1 ? attributes.crossOrigin = oldValue_1 : image_1.removeAttribute('crossorigin');
    };
    if (image_1.complete && image_1.naturalWidth !== 0) recordInlineImage();else image_1.onload = recordInlineImage;
  }
  if (tagName === 'audio' || tagName === 'video') {
    attributes.rr_mediaState = n.paused ? 'paused' : 'played';
    attributes.rr_mediaCurrentTime = n.currentTime;
  }
  if (!newlyAddedElement) {
    if (n.scrollLeft) {
      attributes.rr_scrollLeft = n.scrollLeft;
    }
    if (n.scrollTop) {
      attributes.rr_scrollTop = n.scrollTop;
    }
  }
  if (needBlock) {
    var _d = n.getBoundingClientRect(),
      width = _d.width,
      height = _d.height;
    attributes = {
      "class": attributes["class"],
      rr_width: "".concat(width, "px"),
      rr_height: "".concat(height, "px")
    };
  }
  if (tagName === 'iframe' && !keepIframeSrcFn(attributes.src)) {
    if (!n.contentDocument) {
      attributes.rr_src = attributes.src;
    }
    delete attributes.src;
  }
  return {
    type: NodeType.Element,
    tagName: tagName,
    attributes: attributes,
    childNodes: [],
    isSVG: isSVGElement(n) || undefined,
    needBlock: needBlock,
    rootId: rootId
  };
}
function lowerIfExists(maybeAttr) {
  if (maybeAttr === undefined) {
    return '';
  } else {
    return maybeAttr.toLowerCase();
  }
}
function slimDOMExcluded(sn, slimDOMOptions) {
  if (slimDOMOptions.comment && sn.type === NodeType.Comment) {
    return true;
  } else if (sn.type === NodeType.Element) {
    if (slimDOMOptions.script && (sn.tagName === 'script' || sn.tagName === 'link' && sn.attributes.rel === 'preload' && sn.attributes.as === 'script' || sn.tagName === 'link' && sn.attributes.rel === 'prefetch' && typeof sn.attributes.href === 'string' && sn.attributes.href.endsWith('.js'))) {
      return true;
    } else if (slimDOMOptions.headFavicon && (sn.tagName === 'link' && sn.attributes.rel === 'shortcut icon' || sn.tagName === 'meta' && (lowerIfExists(sn.attributes.name).match(/^msapplication-tile(image|color)$/) || lowerIfExists(sn.attributes.name) === 'application-name' || lowerIfExists(sn.attributes.rel) === 'icon' || lowerIfExists(sn.attributes.rel) === 'apple-touch-icon' || lowerIfExists(sn.attributes.rel) === 'shortcut icon'))) {
      return true;
    } else if (sn.tagName === 'meta') {
      if (slimDOMOptions.headMetaDescKeywords && lowerIfExists(sn.attributes.name).match(/^description|keywords$/)) {
        return true;
      } else if (slimDOMOptions.headMetaSocial && (lowerIfExists(sn.attributes.property).match(/^(og|twitter|fb):/) || lowerIfExists(sn.attributes.name).match(/^(og|twitter):/) || lowerIfExists(sn.attributes.name) === 'pinterest')) {
        return true;
      } else if (slimDOMOptions.headMetaRobots && (lowerIfExists(sn.attributes.name) === 'robots' || lowerIfExists(sn.attributes.name) === 'googlebot' || lowerIfExists(sn.attributes.name) === 'bingbot')) {
        return true;
      } else if (slimDOMOptions.headMetaHttpEquiv && sn.attributes['http-equiv'] !== undefined) {
        return true;
      } else if (slimDOMOptions.headMetaAuthorship && (lowerIfExists(sn.attributes.name) === 'author' || lowerIfExists(sn.attributes.name) === 'generator' || lowerIfExists(sn.attributes.name) === 'framework' || lowerIfExists(sn.attributes.name) === 'publisher' || lowerIfExists(sn.attributes.name) === 'progid' || lowerIfExists(sn.attributes.property).match(/^article:/) || lowerIfExists(sn.attributes.property).match(/^product:/))) {
        return true;
      } else if (slimDOMOptions.headMetaVerification && (lowerIfExists(sn.attributes.name) === 'google-site-verification' || lowerIfExists(sn.attributes.name) === 'yandex-verification' || lowerIfExists(sn.attributes.name) === 'csrf-token' || lowerIfExists(sn.attributes.name) === 'p:domain_verify' || lowerIfExists(sn.attributes.name) === 'verify-v1' || lowerIfExists(sn.attributes.name) === 'verification' || lowerIfExists(sn.attributes.name) === 'shopify-checkout-api-token')) {
        return true;
      }
    }
  }
  return false;
}
function serializeNodeWithId(n, options) {
  var doc = options.doc,
    mirror = options.mirror,
    blockClass = options.blockClass,
    blockSelector = options.blockSelector,
    maskTextClass = options.maskTextClass,
    maskTextSelector = options.maskTextSelector,
    _a = options.skipChild,
    skipChild = _a === void 0 ? false : _a,
    _b = options.inlineStylesheet,
    inlineStylesheet = _b === void 0 ? true : _b,
    _c = options.maskInputOptions,
    maskInputOptions = _c === void 0 ? {} : _c,
    maskTextFn = options.maskTextFn,
    maskInputFn = options.maskInputFn,
    slimDOMOptions = options.slimDOMOptions,
    _d = options.dataURLOptions,
    dataURLOptions = _d === void 0 ? {} : _d,
    _e = options.inlineImages,
    inlineImages = _e === void 0 ? false : _e,
    _f = options.recordCanvas,
    recordCanvas = _f === void 0 ? false : _f,
    onSerialize = options.onSerialize,
    onIframeLoad = options.onIframeLoad,
    _g = options.iframeLoadTimeout,
    iframeLoadTimeout = _g === void 0 ? 5000 : _g,
    onStylesheetLoad = options.onStylesheetLoad,
    _h = options.stylesheetLoadTimeout,
    stylesheetLoadTimeout = _h === void 0 ? 5000 : _h,
    _j = options.keepIframeSrcFn,
    keepIframeSrcFn = _j === void 0 ? function () {
      return false;
    } : _j,
    _k = options.newlyAddedElement,
    newlyAddedElement = _k === void 0 ? false : _k;
  var _l = options.preserveWhiteSpace,
    preserveWhiteSpace = _l === void 0 ? true : _l;
  var _serializedNode = serializeNode(n, {
    doc: doc,
    mirror: mirror,
    blockClass: blockClass,
    blockSelector: blockSelector,
    maskTextClass: maskTextClass,
    maskTextSelector: maskTextSelector,
    inlineStylesheet: inlineStylesheet,
    maskInputOptions: maskInputOptions,
    maskTextFn: maskTextFn,
    maskInputFn: maskInputFn,
    dataURLOptions: dataURLOptions,
    inlineImages: inlineImages,
    recordCanvas: recordCanvas,
    keepIframeSrcFn: keepIframeSrcFn,
    newlyAddedElement: newlyAddedElement
  });
  if (!_serializedNode) {
    console.warn(n, 'not serialized');
    return null;
  }
  var id;
  if (mirror.hasNode(n)) {
    id = mirror.getId(n);
  } else if (slimDOMExcluded(_serializedNode, slimDOMOptions) || !preserveWhiteSpace && _serializedNode.type === NodeType.Text && !_serializedNode.isStyle && !_serializedNode.textContent.replace(/^\s+|\s+$/gm, '').length) {
    id = IGNORED_NODE;
  } else {
    id = genId();
  }
  var serializedNode = Object.assign(_serializedNode, {
    id: id
  });
  mirror.add(n, serializedNode);
  if (id === IGNORED_NODE) {
    return null;
  }
  if (onSerialize) {
    onSerialize(n);
  }
  var recordChild = !skipChild;
  if (serializedNode.type === NodeType.Element) {
    recordChild = recordChild && !serializedNode.needBlock;
    delete serializedNode.needBlock;
    var shadowRoot = n.shadowRoot;
    if (shadowRoot && isNativeShadowDom(shadowRoot)) serializedNode.isShadowHost = true;
  }
  if ((serializedNode.type === NodeType.Document || serializedNode.type === NodeType.Element) && recordChild) {
    if (slimDOMOptions.headWhitespace && serializedNode.type === NodeType.Element && serializedNode.tagName === 'head') {
      preserveWhiteSpace = false;
    }
    var bypassOptions = {
      doc: doc,
      mirror: mirror,
      blockClass: blockClass,
      blockSelector: blockSelector,
      maskTextClass: maskTextClass,
      maskTextSelector: maskTextSelector,
      skipChild: skipChild,
      inlineStylesheet: inlineStylesheet,
      maskInputOptions: maskInputOptions,
      maskTextFn: maskTextFn,
      maskInputFn: maskInputFn,
      slimDOMOptions: slimDOMOptions,
      dataURLOptions: dataURLOptions,
      inlineImages: inlineImages,
      recordCanvas: recordCanvas,
      preserveWhiteSpace: preserveWhiteSpace,
      onSerialize: onSerialize,
      onIframeLoad: onIframeLoad,
      iframeLoadTimeout: iframeLoadTimeout,
      onStylesheetLoad: onStylesheetLoad,
      stylesheetLoadTimeout: stylesheetLoadTimeout,
      keepIframeSrcFn: keepIframeSrcFn
    };
    for (var _i = 0, _m = Array.from(n.childNodes); _i < _m.length; _i++) {
      var childN = _m[_i];
      var serializedChildNode = serializeNodeWithId(childN, bypassOptions);
      if (serializedChildNode) {
        serializedNode.childNodes.push(serializedChildNode);
      }
    }
    if (isElement(n) && n.shadowRoot) {
      for (var _o = 0, _p = Array.from(n.shadowRoot.childNodes); _o < _p.length; _o++) {
        var childN = _p[_o];
        var serializedChildNode = serializeNodeWithId(childN, bypassOptions);
        if (serializedChildNode) {
          isNativeShadowDom(n.shadowRoot) && (serializedChildNode.isShadow = true);
          serializedNode.childNodes.push(serializedChildNode);
        }
      }
    }
  }
  if (n.parentNode && isShadowRoot(n.parentNode) && isNativeShadowDom(n.parentNode)) {
    serializedNode.isShadow = true;
  }
  if (serializedNode.type === NodeType.Element && serializedNode.tagName === 'iframe') {
    onceIframeLoaded(n, function () {
      var iframeDoc = n.contentDocument;
      if (iframeDoc && onIframeLoad) {
        var serializedIframeNode = serializeNodeWithId(iframeDoc, {
          doc: iframeDoc,
          mirror: mirror,
          blockClass: blockClass,
          blockSelector: blockSelector,
          maskTextClass: maskTextClass,
          maskTextSelector: maskTextSelector,
          skipChild: false,
          inlineStylesheet: inlineStylesheet,
          maskInputOptions: maskInputOptions,
          maskTextFn: maskTextFn,
          maskInputFn: maskInputFn,
          slimDOMOptions: slimDOMOptions,
          dataURLOptions: dataURLOptions,
          inlineImages: inlineImages,
          recordCanvas: recordCanvas,
          preserveWhiteSpace: preserveWhiteSpace,
          onSerialize: onSerialize,
          onIframeLoad: onIframeLoad,
          iframeLoadTimeout: iframeLoadTimeout,
          onStylesheetLoad: onStylesheetLoad,
          stylesheetLoadTimeout: stylesheetLoadTimeout,
          keepIframeSrcFn: keepIframeSrcFn
        });
        if (serializedIframeNode) {
          onIframeLoad(n, serializedIframeNode);
        }
      }
    }, iframeLoadTimeout);
  }
  if (serializedNode.type === NodeType.Element && serializedNode.tagName === 'link' && serializedNode.attributes.rel === 'stylesheet') {
    onceStylesheetLoaded(n, function () {
      if (onStylesheetLoad) {
        var serializedLinkNode = serializeNodeWithId(n, {
          doc: doc,
          mirror: mirror,
          blockClass: blockClass,
          blockSelector: blockSelector,
          maskTextClass: maskTextClass,
          maskTextSelector: maskTextSelector,
          skipChild: false,
          inlineStylesheet: inlineStylesheet,
          maskInputOptions: maskInputOptions,
          maskTextFn: maskTextFn,
          maskInputFn: maskInputFn,
          slimDOMOptions: slimDOMOptions,
          dataURLOptions: dataURLOptions,
          inlineImages: inlineImages,
          recordCanvas: recordCanvas,
          preserveWhiteSpace: preserveWhiteSpace,
          onSerialize: onSerialize,
          onIframeLoad: onIframeLoad,
          iframeLoadTimeout: iframeLoadTimeout,
          onStylesheetLoad: onStylesheetLoad,
          stylesheetLoadTimeout: stylesheetLoadTimeout,
          keepIframeSrcFn: keepIframeSrcFn
        });
        if (serializedLinkNode) {
          onStylesheetLoad(n, serializedLinkNode);
        }
      }
    }, stylesheetLoadTimeout);
  }
  return serializedNode;
}
function snapshot(n, options) {
  var _a = options || {},
    _b = _a.mirror,
    mirror = _b === void 0 ? new Mirror() : _b,
    _c = _a.blockClass,
    blockClass = _c === void 0 ? 'rr-block' : _c,
    _d = _a.blockSelector,
    blockSelector = _d === void 0 ? null : _d,
    _e = _a.maskTextClass,
    maskTextClass = _e === void 0 ? 'rr-mask' : _e,
    _f = _a.maskTextSelector,
    maskTextSelector = _f === void 0 ? null : _f,
    _g = _a.inlineStylesheet,
    inlineStylesheet = _g === void 0 ? true : _g,
    _h = _a.inlineImages,
    inlineImages = _h === void 0 ? false : _h,
    _j = _a.recordCanvas,
    recordCanvas = _j === void 0 ? false : _j,
    _k = _a.maskAllInputs,
    maskAllInputs = _k === void 0 ? false : _k,
    maskTextFn = _a.maskTextFn,
    maskInputFn = _a.maskInputFn,
    _l = _a.slimDOM,
    slimDOM = _l === void 0 ? false : _l,
    dataURLOptions = _a.dataURLOptions,
    preserveWhiteSpace = _a.preserveWhiteSpace,
    onSerialize = _a.onSerialize,
    onIframeLoad = _a.onIframeLoad,
    iframeLoadTimeout = _a.iframeLoadTimeout,
    onStylesheetLoad = _a.onStylesheetLoad,
    stylesheetLoadTimeout = _a.stylesheetLoadTimeout,
    _m = _a.keepIframeSrcFn,
    keepIframeSrcFn = _m === void 0 ? function () {
      return false;
    } : _m;
  var maskInputOptions = maskAllInputs === true ? {
    color: true,
    date: true,
    'datetime-local': true,
    email: true,
    month: true,
    number: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true,
    textarea: true,
    select: true,
    password: true
  } : maskAllInputs === false ? {
    password: true
  } : maskAllInputs;
  var slimDOMOptions = slimDOM === true || slimDOM === 'all' ? {
    script: true,
    comment: true,
    headFavicon: true,
    headWhitespace: true,
    headMetaDescKeywords: slimDOM === 'all',
    headMetaSocial: true,
    headMetaRobots: true,
    headMetaHttpEquiv: true,
    headMetaAuthorship: true,
    headMetaVerification: true
  } : slimDOM === false ? {} : slimDOM;
  return serializeNodeWithId(n, {
    doc: n,
    mirror: mirror,
    blockClass: blockClass,
    blockSelector: blockSelector,
    maskTextClass: maskTextClass,
    maskTextSelector: maskTextSelector,
    skipChild: false,
    inlineStylesheet: inlineStylesheet,
    maskInputOptions: maskInputOptions,
    maskTextFn: maskTextFn,
    maskInputFn: maskInputFn,
    slimDOMOptions: slimDOMOptions,
    dataURLOptions: dataURLOptions,
    inlineImages: inlineImages,
    recordCanvas: recordCanvas,
    preserveWhiteSpace: preserveWhiteSpace,
    onSerialize: onSerialize,
    onIframeLoad: onIframeLoad,
    iframeLoadTimeout: iframeLoadTimeout,
    onStylesheetLoad: onStylesheetLoad,
    stylesheetLoadTimeout: stylesheetLoadTimeout,
    keepIframeSrcFn: keepIframeSrcFn,
    newlyAddedElement: false
  });
}

function on(type, fn) {
  var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
  var options = {
    capture: true,
    passive: true
  };
  target.addEventListener(type, fn, options);
  return function () {
    return target.removeEventListener(type, fn, options);
  };
}
var DEPARTED_MIRROR_ACCESS_WARNING = 'Please stop import mirror directly. Instead of that,' + '\r\n' + 'now you can use replayer.getMirror() to access the mirror instance of a replayer,' + '\r\n' + 'or you can use record.mirror to access the mirror instance during recording.';
var _mirror = {
  map: {},
  getId: function getId() {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    return -1;
  },
  getNode: function getNode() {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    return null;
  },
  removeNodeFromMap: function removeNodeFromMap() {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
  },
  has: function has() {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    return false;
  },
  reset: function reset() {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
  }
};
if (typeof window !== 'undefined' && window.Proxy && window.Reflect) {
  _mirror = new Proxy(_mirror, {
    get: function get(target, prop, receiver) {
      if (prop === 'map') {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
      }
      return Reflect.get(target, prop, receiver);
    }
  });
}
function throttle(func, wait) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var timeout = null;
  var previous = 0;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var now = Date.now();
    if (!previous && options.leading === false) {
      previous = now;
    }
    var remaining = wait - (now - previous);
    var context = this;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(function () {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        func.apply(context, args);
      }, remaining);
    }
  };
}
function hookSetter(target, key, d, isRevoked) {
  var win = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : window;
  var original = win.Object.getOwnPropertyDescriptor(target, key);
  win.Object.defineProperty(target, key, isRevoked ? d : {
    set: function set(value) {
      var _this = this;
      setTimeout(function () {
        d.set.call(_this, value);
      }, 0);
      if (original && original.set) {
        original.set.call(this, value);
      }
    }
  });
  return function () {
    return hookSetter(target, key, original || {}, true);
  };
}
function patch(source, name, replacement) {
  try {
    if (!(name in source)) {
      return function () {};
    }
    var original = source[name];
    var wrapped = replacement(original);
    if (typeof wrapped === 'function') {
      wrapped.prototype = wrapped.prototype || {};
      Object.defineProperties(wrapped, {
        __rrweb_original__: {
          enumerable: false,
          value: original
        }
      });
    }
    source[name] = wrapped;
    return function () {
      source[name] = original;
    };
  } catch (_a) {
    return function () {};
  }
}
function getWindowHeight() {
  return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight;
}
function getWindowWidth() {
  return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
}
function isBlocked(node, blockClass, blockSelector, checkAncestors) {
  if (!node) {
    return false;
  }
  var el = node.nodeType === node.ELEMENT_NODE ? node : node.parentElement;
  if (!el) return false;
  if (typeof blockClass === 'string') {
    if (el.classList.contains(blockClass)) return true;
    if (checkAncestors && el.closest('.' + blockClass) !== null) return true;
  } else {
    if (classMatchesRegex(el, blockClass, checkAncestors)) return true;
  }
  if (blockSelector) {
    if (node.matches(blockSelector)) return true;
    if (checkAncestors && el.closest(blockSelector) !== null) return true;
  }
  return false;
}
function isSerialized(n, mirror) {
  return mirror.getId(n) !== -1;
}
function isIgnored(n, mirror) {
  return mirror.getId(n) === IGNORED_NODE;
}
function isAncestorRemoved(target, mirror) {
  if (isShadowRoot(target)) {
    return false;
  }
  var id = mirror.getId(target);
  if (!mirror.has(id)) {
    return true;
  }
  if (target.parentNode && target.parentNode.nodeType === target.DOCUMENT_NODE) {
    return false;
  }
  if (!target.parentNode) {
    return true;
  }
  return isAncestorRemoved(target.parentNode, mirror);
}
function isTouchEvent(event) {
  return Boolean(event.changedTouches);
}
function polyfill() {
  var _this2 = this;
  var win = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  if ('NodeList' in win && !win.NodeList.prototype.forEach) {
    win.NodeList.prototype.forEach = Array.prototype.forEach;
  }
  if ('DOMTokenList' in win && !win.DOMTokenList.prototype.forEach) {
    win.DOMTokenList.prototype.forEach = Array.prototype.forEach;
  }
  if (!Node.prototype.contains) {
    Node.prototype.contains = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      var node = args[0];
      if (!(0 in args)) {
        throw new TypeError('1 argument is required');
      }
      do {
        if (_this2 === node) {
          return true;
        }
      } while (node = node && node.parentNode);
      return false;
    };
  }
}
function isSerializedIframe(n, mirror) {
  return Boolean(n.nodeName === 'IFRAME' && mirror.getMeta(n));
}
function isSerializedStylesheet(n, mirror) {
  return Boolean(n.nodeName === 'LINK' && n.nodeType === n.ELEMENT_NODE && n.getAttribute && n.getAttribute('rel') === 'stylesheet' && mirror.getMeta(n));
}
function hasShadowRoot(n) {
  return Boolean(n === null || n === void 0 ? void 0 : n.shadowRoot);
}
var StyleSheetMirror = /*#__PURE__*/function () {
  function StyleSheetMirror() {
    _classCallCheck(this, StyleSheetMirror);
    this.id = 1;
    this.styleIDMap = new WeakMap();
    this.idStyleMap = new Map();
  }
  return _createClass(StyleSheetMirror, [{
    key: "getId",
    value: function getId(stylesheet) {
      var _a;
      return (_a = this.styleIDMap.get(stylesheet)) !== null && _a !== void 0 ? _a : -1;
    }
  }, {
    key: "has",
    value: function has(stylesheet) {
      return this.styleIDMap.has(stylesheet);
    }
  }, {
    key: "add",
    value: function add(stylesheet, id) {
      if (this.has(stylesheet)) return this.getId(stylesheet);
      var newId;
      if (id === undefined) {
        newId = this.id++;
      } else newId = id;
      this.styleIDMap.set(stylesheet, newId);
      this.idStyleMap.set(newId, stylesheet);
      return newId;
    }
  }, {
    key: "getStyle",
    value: function getStyle(id) {
      return this.idStyleMap.get(id) || null;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.styleIDMap = new WeakMap();
      this.idStyleMap = new Map();
      this.id = 1;
    }
  }, {
    key: "generateId",
    value: function generateId() {
      return this.id++;
    }
  }]);
}();

var EventType = /* @__PURE__ */function (EventType2) {
  EventType2[EventType2["DomContentLoaded"] = 0] = "DomContentLoaded";
  EventType2[EventType2["Load"] = 1] = "Load";
  EventType2[EventType2["FullSnapshot"] = 2] = "FullSnapshot";
  EventType2[EventType2["IncrementalSnapshot"] = 3] = "IncrementalSnapshot";
  EventType2[EventType2["Meta"] = 4] = "Meta";
  EventType2[EventType2["Custom"] = 5] = "Custom";
  EventType2[EventType2["Plugin"] = 6] = "Plugin";
  return EventType2;
}(EventType || {});
var IncrementalSource = /* @__PURE__ */function (IncrementalSource2) {
  IncrementalSource2[IncrementalSource2["Mutation"] = 0] = "Mutation";
  IncrementalSource2[IncrementalSource2["MouseMove"] = 1] = "MouseMove";
  IncrementalSource2[IncrementalSource2["MouseInteraction"] = 2] = "MouseInteraction";
  IncrementalSource2[IncrementalSource2["Scroll"] = 3] = "Scroll";
  IncrementalSource2[IncrementalSource2["ViewportResize"] = 4] = "ViewportResize";
  IncrementalSource2[IncrementalSource2["Input"] = 5] = "Input";
  IncrementalSource2[IncrementalSource2["TouchMove"] = 6] = "TouchMove";
  IncrementalSource2[IncrementalSource2["MediaInteraction"] = 7] = "MediaInteraction";
  IncrementalSource2[IncrementalSource2["StyleSheetRule"] = 8] = "StyleSheetRule";
  IncrementalSource2[IncrementalSource2["CanvasMutation"] = 9] = "CanvasMutation";
  IncrementalSource2[IncrementalSource2["Font"] = 10] = "Font";
  IncrementalSource2[IncrementalSource2["Log"] = 11] = "Log";
  IncrementalSource2[IncrementalSource2["Drag"] = 12] = "Drag";
  IncrementalSource2[IncrementalSource2["StyleDeclaration"] = 13] = "StyleDeclaration";
  IncrementalSource2[IncrementalSource2["Selection"] = 14] = "Selection";
  IncrementalSource2[IncrementalSource2["AdoptedStyleSheet"] = 15] = "AdoptedStyleSheet";
  return IncrementalSource2;
}(IncrementalSource || {});
var MouseInteractions = /* @__PURE__ */function (MouseInteractions2) {
  MouseInteractions2[MouseInteractions2["MouseUp"] = 0] = "MouseUp";
  MouseInteractions2[MouseInteractions2["MouseDown"] = 1] = "MouseDown";
  MouseInteractions2[MouseInteractions2["Click"] = 2] = "Click";
  MouseInteractions2[MouseInteractions2["ContextMenu"] = 3] = "ContextMenu";
  MouseInteractions2[MouseInteractions2["DblClick"] = 4] = "DblClick";
  MouseInteractions2[MouseInteractions2["Focus"] = 5] = "Focus";
  MouseInteractions2[MouseInteractions2["Blur"] = 6] = "Blur";
  MouseInteractions2[MouseInteractions2["TouchStart"] = 7] = "TouchStart";
  MouseInteractions2[MouseInteractions2["TouchMove_Departed"] = 8] = "TouchMove_Departed";
  MouseInteractions2[MouseInteractions2["TouchEnd"] = 9] = "TouchEnd";
  MouseInteractions2[MouseInteractions2["TouchCancel"] = 10] = "TouchCancel";
  return MouseInteractions2;
}(MouseInteractions || {});
var CanvasContext = /* @__PURE__ */function (CanvasContext2) {
  CanvasContext2[CanvasContext2["2D"] = 0] = "2D";
  CanvasContext2[CanvasContext2["WebGL"] = 1] = "WebGL";
  CanvasContext2[CanvasContext2["WebGL2"] = 2] = "WebGL2";
  return CanvasContext2;
}(CanvasContext || {});

function isNodeInLinkedList(n) {
  return '__ln' in n;
}
var DoubleLinkedList = /*#__PURE__*/function () {
  function DoubleLinkedList() {
    _classCallCheck(this, DoubleLinkedList);
    this.length = 0;
    this.head = null;
  }
  return _createClass(DoubleLinkedList, [{
    key: "get",
    value: function get(position) {
      if (position >= this.length) {
        throw new Error('Position outside of list range');
      }
      var current = this.head;
      for (var index = 0; index < position; index++) {
        current = (current === null || current === void 0 ? void 0 : current.next) || null;
      }
      return current;
    }
  }, {
    key: "addNode",
    value: function addNode(n) {
      var node = {
        value: n,
        previous: null,
        next: null
      };
      n.__ln = node;
      if (n.previousSibling && isNodeInLinkedList(n.previousSibling)) {
        var current = n.previousSibling.__ln.next;
        node.next = current;
        node.previous = n.previousSibling.__ln;
        n.previousSibling.__ln.next = node;
        if (current) {
          current.previous = node;
        }
      } else if (n.nextSibling && isNodeInLinkedList(n.nextSibling) && n.nextSibling.__ln.previous) {
        var _current = n.nextSibling.__ln.previous;
        node.previous = _current;
        node.next = n.nextSibling.__ln;
        n.nextSibling.__ln.previous = node;
        if (_current) {
          _current.next = node;
        }
      } else {
        if (this.head) {
          this.head.previous = node;
        }
        node.next = this.head;
        this.head = node;
      }
      this.length++;
    }
  }, {
    key: "removeNode",
    value: function removeNode(n) {
      var current = n.__ln;
      if (!this.head) {
        return;
      }
      if (!current.previous) {
        this.head = current.next;
        if (this.head) {
          this.head.previous = null;
        }
      } else {
        current.previous.next = current.next;
        if (current.next) {
          current.next.previous = current.previous;
        }
      }
      if (n.__ln) {
        delete n.__ln;
      }
      this.length--;
    }
  }]);
}();
var moveKey = function moveKey(id, parentId) {
  return "".concat(id, "@").concat(parentId);
};
var MutationBuffer = /*#__PURE__*/function () {
  function MutationBuffer() {
    var _this = this;
    _classCallCheck(this, MutationBuffer);
    this.frozen = false;
    this.locked = false;
    this.texts = [];
    this.attributes = [];
    this.removes = [];
    this.mapRemoves = [];
    this.movedMap = {};
    this.addedSet = new Set();
    this.movedSet = new Set();
    this.droppedSet = new Set();
    this.processMutations = function (mutations) {
      mutations.forEach(_this.processMutation);
      _this.emit();
    };
    this.emit = function () {
      if (_this.frozen || _this.locked) {
        return;
      }
      var adds = [];
      var addList = new DoubleLinkedList();
      var getNextId = function getNextId(n) {
        var ns = n;
        var nextId = IGNORED_NODE;
        while (nextId === IGNORED_NODE) {
          ns = ns && ns.nextSibling;
          nextId = ns && _this.mirror.getId(ns);
        }
        return nextId;
      };
      var pushAdd = function pushAdd(n) {
        var _a, _b, _c, _d;
        var shadowHost = null;
        if (((_b = (_a = n.getRootNode) === null || _a === void 0 ? void 0 : _a.call(n)) === null || _b === void 0 ? void 0 : _b.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && n.getRootNode().host) shadowHost = n.getRootNode().host;
        var rootShadowHost = shadowHost;
        while (((_d = (_c = rootShadowHost === null || rootShadowHost === void 0 ? void 0 : rootShadowHost.getRootNode) === null || _c === void 0 ? void 0 : _c.call(rootShadowHost)) === null || _d === void 0 ? void 0 : _d.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && rootShadowHost.getRootNode().host) rootShadowHost = rootShadowHost.getRootNode().host;
        var notInDoc = !_this.doc.contains(n) && (!rootShadowHost || !_this.doc.contains(rootShadowHost));
        if (!n.parentNode || notInDoc) {
          return;
        }
        var parentId = isShadowRoot(n.parentNode) ? _this.mirror.getId(shadowHost) : _this.mirror.getId(n.parentNode);
        var nextId = getNextId(n);
        if (parentId === -1 || nextId === -1) {
          return addList.addNode(n);
        }
        var sn = serializeNodeWithId(n, {
          doc: _this.doc,
          mirror: _this.mirror,
          blockClass: _this.blockClass,
          blockSelector: _this.blockSelector,
          maskTextClass: _this.maskTextClass,
          maskTextSelector: _this.maskTextSelector,
          skipChild: true,
          newlyAddedElement: true,
          inlineStylesheet: _this.inlineStylesheet,
          maskInputOptions: _this.maskInputOptions,
          maskTextFn: _this.maskTextFn,
          maskInputFn: _this.maskInputFn,
          slimDOMOptions: _this.slimDOMOptions,
          dataURLOptions: _this.dataURLOptions,
          recordCanvas: _this.recordCanvas,
          inlineImages: _this.inlineImages,
          onSerialize: function onSerialize(currentN) {
            if (isSerializedIframe(currentN, _this.mirror)) {
              _this.iframeManager.addIframe(currentN);
            }
            if (isSerializedStylesheet(currentN, _this.mirror)) {
              _this.stylesheetManager.trackLinkElement(currentN);
            }
            if (hasShadowRoot(n)) {
              _this.shadowDomManager.addShadowRoot(n.shadowRoot, _this.doc);
            }
          },
          onIframeLoad: function onIframeLoad(iframe, childSn) {
            _this.iframeManager.attachIframe(iframe, childSn);
            _this.shadowDomManager.observeAttachShadow(iframe);
          },
          onStylesheetLoad: function onStylesheetLoad(link, childSn) {
            _this.stylesheetManager.attachLinkElement(link, childSn);
          }
        });
        if (sn) {
          adds.push({
            parentId: parentId,
            nextId: nextId,
            node: sn
          });
        }
      };
      while (_this.mapRemoves.length) {
        _this.mirror.removeNodeFromMap(_this.mapRemoves.shift());
      }
      for (var _i = 0, _Array$from = Array.from(_this.movedSet.values()); _i < _Array$from.length; _i++) {
        var n = _Array$from[_i];
        if (isParentRemoved(_this.removes, n, _this.mirror) && !_this.movedSet.has(n.parentNode)) {
          continue;
        }
        pushAdd(n);
      }
      for (var _i2 = 0, _Array$from2 = Array.from(_this.addedSet.values()); _i2 < _Array$from2.length; _i2++) {
        var _n = _Array$from2[_i2];
        if (!isAncestorInSet(_this.droppedSet, _n) && !isParentRemoved(_this.removes, _n, _this.mirror)) {
          pushAdd(_n);
        } else if (isAncestorInSet(_this.movedSet, _n)) {
          pushAdd(_n);
        } else {
          _this.droppedSet.add(_n);
        }
      }
      var candidate = null;
      while (addList.length) {
        var node = null;
        if (candidate) {
          var parentId = _this.mirror.getId(candidate.value.parentNode);
          var nextId = getNextId(candidate.value);
          if (parentId !== -1 && nextId !== -1) {
            node = candidate;
          }
        }
        if (!node) {
          for (var index = addList.length - 1; index >= 0; index--) {
            var _node = addList.get(index);
            if (_node) {
              var _parentId = _this.mirror.getId(_node.value.parentNode);
              var _nextId = getNextId(_node.value);
              if (_nextId === -1) continue;else if (_parentId !== -1) {
                node = _node;
                break;
              } else {
                var unhandledNode = _node.value;
                if (unhandledNode.parentNode && unhandledNode.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                  var shadowHost = unhandledNode.parentNode.host;
                  var _parentId2 = _this.mirror.getId(shadowHost);
                  if (_parentId2 !== -1) {
                    node = _node;
                    break;
                  }
                }
              }
            }
          }
        }
        if (!node) {
          while (addList.head) {
            addList.removeNode(addList.head.value);
          }
          break;
        }
        candidate = node.previous;
        addList.removeNode(node.value);
        pushAdd(node.value);
      }
      var payload = {
        texts: _this.texts.map(function (text) {
          return {
            id: _this.mirror.getId(text.node),
            value: text.value
          };
        }).filter(function (text) {
          return _this.mirror.has(text.id);
        }),
        attributes: _this.attributes.map(function (attribute) {
          return {
            id: _this.mirror.getId(attribute.node),
            attributes: attribute.attributes
          };
        }).filter(function (attribute) {
          return _this.mirror.has(attribute.id);
        }),
        removes: _this.removes,
        adds: adds
      };
      if (!payload.texts.length && !payload.attributes.length && !payload.removes.length && !payload.adds.length) {
        return;
      }
      _this.texts = [];
      _this.attributes = [];
      _this.removes = [];
      _this.addedSet = new Set();
      _this.movedSet = new Set();
      _this.droppedSet = new Set();
      _this.movedMap = {};
      _this.mutationCb(payload);
    };
    this.processMutation = function (m) {
      if (isIgnored(m.target, _this.mirror)) {
        return;
      }
      switch (m.type) {
        case 'characterData':
          {
            var value = m.target.textContent;
            if (!isBlocked(m.target, _this.blockClass, _this.blockSelector, false) && value !== m.oldValue) {
              _this.texts.push({
                value: needMaskingText(m.target, _this.maskTextClass, _this.maskTextSelector) && value ? _this.maskTextFn ? _this.maskTextFn(value) : value.replace(/[\S]/g, '*') : value,
                node: m.target
              });
            }
            break;
          }
        case 'attributes':
          {
            var target = m.target;
            var _value = m.target.getAttribute(m.attributeName);
            if (m.attributeName === 'value') {
              _value = maskInputValue({
                maskInputOptions: _this.maskInputOptions,
                tagName: m.target.tagName,
                type: m.target.getAttribute('type'),
                value: _value,
                maskInputFn: _this.maskInputFn
              });
            }
            if (isBlocked(m.target, _this.blockClass, _this.blockSelector, false) || _value === m.oldValue) {
              return;
            }
            var item = _this.attributes.find(function (a) {
              return a.node === m.target;
            });
            if (target.tagName === 'IFRAME' && m.attributeName === 'src' && !_this.keepIframeSrcFn(_value)) {
              if (!target.contentDocument) {
                m.attributeName = 'rr_src';
              } else {
                return;
              }
            }
            if (!item) {
              item = {
                node: m.target,
                attributes: {}
              };
              _this.attributes.push(item);
            }
            if (m.attributeName === 'style') {
              var old = _this.doc.createElement('span');
              if (m.oldValue) {
                old.setAttribute('style', m.oldValue);
              }
              if (item.attributes.style === undefined || item.attributes.style === null) {
                item.attributes.style = {};
              }
              var styleObj = item.attributes.style;
              for (var _i3 = 0, _Array$from3 = Array.from(target.style); _i3 < _Array$from3.length; _i3++) {
                var pname = _Array$from3[_i3];
                var newValue = target.style.getPropertyValue(pname);
                var newPriority = target.style.getPropertyPriority(pname);
                if (newValue !== old.style.getPropertyValue(pname) || newPriority !== old.style.getPropertyPriority(pname)) {
                  if (newPriority === '') {
                    styleObj[pname] = newValue;
                  } else {
                    styleObj[pname] = [newValue, newPriority];
                  }
                }
              }
              for (var _i4 = 0, _Array$from4 = Array.from(old.style); _i4 < _Array$from4.length; _i4++) {
                var _pname = _Array$from4[_i4];
                if (target.style.getPropertyValue(_pname) === '') {
                  styleObj[_pname] = false;
                }
              }
            } else {
              item.attributes[m.attributeName] = transformAttribute(_this.doc, target.tagName, m.attributeName, _value);
            }
            break;
          }
        case 'childList':
          {
            if (isBlocked(m.target, _this.blockClass, _this.blockSelector, true)) return;
            m.addedNodes.forEach(function (n) {
              return _this.genAdds(n, m.target);
            });
            m.removedNodes.forEach(function (n) {
              var nodeId = _this.mirror.getId(n);
              var parentId = isShadowRoot(m.target) ? _this.mirror.getId(m.target.host) : _this.mirror.getId(m.target);
              if (isBlocked(m.target, _this.blockClass, _this.blockSelector, false) || isIgnored(n, _this.mirror) || !isSerialized(n, _this.mirror)) {
                return;
              }
              if (_this.addedSet.has(n)) {
                deepDelete(_this.addedSet, n);
                _this.droppedSet.add(n);
              } else if (_this.addedSet.has(m.target) && nodeId === -1) ;else if (isAncestorRemoved(m.target, _this.mirror)) ;else if (_this.movedSet.has(n) && _this.movedMap[moveKey(nodeId, parentId)]) {
                deepDelete(_this.movedSet, n);
              } else {
                _this.removes.push({
                  parentId: parentId,
                  id: nodeId,
                  isShadow: isShadowRoot(m.target) && isNativeShadowDom(m.target) ? true : undefined
                });
              }
              _this.mapRemoves.push(n);
            });
            break;
          }
      }
    };
    this.genAdds = function (n, target) {
      if (_this.mirror.hasNode(n)) {
        if (isIgnored(n, _this.mirror)) {
          return;
        }
        _this.movedSet.add(n);
        var targetId = null;
        if (target && _this.mirror.hasNode(target)) {
          targetId = _this.mirror.getId(target);
        }
        if (targetId && targetId !== -1) {
          _this.movedMap[moveKey(_this.mirror.getId(n), targetId)] = true;
        }
      } else {
        _this.addedSet.add(n);
        _this.droppedSet["delete"](n);
      }
      if (!isBlocked(n, _this.blockClass, _this.blockSelector, false)) n.childNodes.forEach(function (childN) {
        return _this.genAdds(childN);
      });
    };
  }
  return _createClass(MutationBuffer, [{
    key: "init",
    value: function init(options) {
      var _this2 = this;
      ['mutationCb', 'blockClass', 'blockSelector', 'maskTextClass', 'maskTextSelector', 'inlineStylesheet', 'maskInputOptions', 'maskTextFn', 'maskInputFn', 'keepIframeSrcFn', 'recordCanvas', 'inlineImages', 'slimDOMOptions', 'dataURLOptions', 'doc', 'mirror', 'iframeManager', 'stylesheetManager', 'shadowDomManager', 'canvasManager'].forEach(function (key) {
        _this2[key] = options[key];
      });
    }
  }, {
    key: "freeze",
    value: function freeze() {
      this.frozen = true;
      this.canvasManager.freeze();
    }
  }, {
    key: "unfreeze",
    value: function unfreeze() {
      this.frozen = false;
      this.canvasManager.unfreeze();
      this.emit();
    }
  }, {
    key: "isFrozen",
    value: function isFrozen() {
      return this.frozen;
    }
  }, {
    key: "lock",
    value: function lock() {
      this.locked = true;
      this.canvasManager.lock();
    }
  }, {
    key: "unlock",
    value: function unlock() {
      this.locked = false;
      this.canvasManager.unlock();
      this.emit();
    }
  }, {
    key: "reset",
    value: function reset() {
      this.shadowDomManager.reset();
      this.canvasManager.reset();
    }
  }]);
}();
function deepDelete(addsSet, n) {
  addsSet["delete"](n);
  n.childNodes.forEach(function (childN) {
    return deepDelete(addsSet, childN);
  });
}
function isParentRemoved(removes, n, mirror) {
  if (removes.length === 0) return false;
  return _isParentRemoved(removes, n, mirror);
}
function _isParentRemoved(removes, n, mirror) {
  var parentNode = n.parentNode;
  if (!parentNode) {
    return false;
  }
  var parentId = mirror.getId(parentNode);
  if (removes.some(function (r) {
    return r.id === parentId;
  })) {
    return true;
  }
  return _isParentRemoved(removes, parentNode, mirror);
}
function isAncestorInSet(set, n) {
  if (set.size === 0) return false;
  return _isAncestorInSet(set, n);
}
function _isAncestorInSet(set, n) {
  var parentNode = n.parentNode;
  if (!parentNode) {
    return false;
  }
  if (set.has(parentNode)) {
    return true;
  }
  return _isAncestorInSet(set, parentNode);
}

var mutationBuffers = [];
var isCSSGroupingRuleSupported = typeof CSSGroupingRule !== 'undefined';
var isCSSMediaRuleSupported = typeof CSSMediaRule !== 'undefined';
var isCSSSupportsRuleSupported = typeof CSSSupportsRule !== 'undefined';
var isCSSConditionRuleSupported = typeof CSSConditionRule !== 'undefined';
function getEventTarget(event) {
  try {
    if ('composedPath' in event) {
      var path = event.composedPath();
      if (path.length) {
        return path[0];
      }
    } else if ('path' in event && event.path.length) {
      return event.path[0];
    }
    return event.target;
  } catch (_a) {
    return event.target;
  }
}
function initMutationObserver(options, rootEl) {
  var _a, _b;
  var mutationBuffer = new MutationBuffer();
  mutationBuffers.push(mutationBuffer);
  mutationBuffer.init(options);
  var mutationObserverCtor = window.MutationObserver || window.__rrMutationObserver;
  var angularZoneSymbol = (_b = (_a = window === null || window === void 0 ? void 0 : window.Zone) === null || _a === void 0 ? void 0 : _a.__symbol__) === null || _b === void 0 ? void 0 : _b.call(_a, 'MutationObserver');
  if (angularZoneSymbol && window[angularZoneSymbol]) {
    mutationObserverCtor = window[angularZoneSymbol];
  }
  var observer = new mutationObserverCtor(mutationBuffer.processMutations.bind(mutationBuffer));
  observer.observe(rootEl, {
    attributes: true,
    attributeOldValue: true,
    characterData: true,
    characterDataOldValue: true,
    childList: true,
    subtree: true
  });
  return observer;
}
function initMoveObserver(_ref) {
  var mousemoveCb = _ref.mousemoveCb,
    sampling = _ref.sampling,
    doc = _ref.doc,
    mirror = _ref.mirror;
  if (sampling.mousemove === false) {
    return function () {};
  }
  var threshold = typeof sampling.mousemove === 'number' ? sampling.mousemove : 50;
  var callbackThreshold = typeof sampling.mousemoveCallback === 'number' ? sampling.mousemoveCallback : 500;
  var positions = [];
  var timeBaseline;
  var wrappedCb = throttle(function (source) {
    var totalOffset = Date.now() - timeBaseline;
    mousemoveCb(positions.map(function (p) {
      p.timeOffset -= totalOffset;
      return p;
    }), source);
    positions = [];
    timeBaseline = null;
  }, callbackThreshold);
  var updatePosition = throttle(function (evt) {
    var target = getEventTarget(evt);
    var _ref2 = isTouchEvent(evt) ? evt.changedTouches[0] : evt,
      clientX = _ref2.clientX,
      clientY = _ref2.clientY;
    if (!timeBaseline) {
      timeBaseline = Date.now();
    }
    positions.push({
      x: clientX,
      y: clientY,
      id: mirror.getId(target),
      timeOffset: Date.now() - timeBaseline
    });
    wrappedCb(typeof DragEvent !== 'undefined' && evt instanceof DragEvent ? IncrementalSource.Drag : evt instanceof MouseEvent ? IncrementalSource.MouseMove : IncrementalSource.TouchMove);
  }, threshold, {
    trailing: false
  });
  var handlers = [on('mousemove', updatePosition, doc), on('touchmove', updatePosition, doc), on('drag', updatePosition, doc)];
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}
function initMouseInteractionObserver(_ref3) {
  var mouseInteractionCb = _ref3.mouseInteractionCb,
    doc = _ref3.doc,
    mirror = _ref3.mirror,
    blockClass = _ref3.blockClass,
    blockSelector = _ref3.blockSelector,
    sampling = _ref3.sampling;
  if (sampling.mouseInteraction === false) {
    return function () {};
  }
  var disableMap = sampling.mouseInteraction === true || sampling.mouseInteraction === undefined ? {} : sampling.mouseInteraction;
  var handlers = [];
  var getHandler = function getHandler(eventKey) {
    return function (event) {
      var target = getEventTarget(event);
      if (isBlocked(target, blockClass, blockSelector, true)) {
        return;
      }
      var e = isTouchEvent(event) ? event.changedTouches[0] : event;
      if (!e) {
        return;
      }
      var id = mirror.getId(target);
      var clientX = e.clientX,
        clientY = e.clientY;
      mouseInteractionCb({
        type: MouseInteractions[eventKey],
        id: id,
        x: clientX,
        y: clientY
      });
    };
  };
  Object.keys(MouseInteractions).filter(function (key) {
    return Number.isNaN(Number(key)) && !key.endsWith('_Departed') && disableMap[key] !== false;
  }).forEach(function (eventKey) {
    var eventName = eventKey.toLowerCase();
    var handler = getHandler(eventKey);
    handlers.push(on(eventName, handler, doc));
  });
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}
function initScrollObserver(_ref4) {
  var scrollCb = _ref4.scrollCb,
    doc = _ref4.doc,
    mirror = _ref4.mirror,
    blockClass = _ref4.blockClass,
    blockSelector = _ref4.blockSelector,
    sampling = _ref4.sampling;
  var updatePosition = throttle(function (evt) {
    var target = getEventTarget(evt);
    if (!target || isBlocked(target, blockClass, blockSelector, true)) {
      return;
    }
    var id = mirror.getId(target);
    if (target === doc) {
      var scrollEl = doc.scrollingElement || doc.documentElement;
      scrollCb({
        id: id,
        x: scrollEl.scrollLeft,
        y: scrollEl.scrollTop
      });
    } else {
      scrollCb({
        id: id,
        x: target.scrollLeft,
        y: target.scrollTop
      });
    }
  }, sampling.scroll || 100);
  return on('scroll', updatePosition, doc);
}
function initViewportResizeObserver(_ref5) {
  var viewportResizeCb = _ref5.viewportResizeCb;
  var lastH = -1;
  var lastW = -1;
  var updateDimension = throttle(function () {
    var height = getWindowHeight();
    var width = getWindowWidth();
    if (lastH !== height || lastW !== width) {
      viewportResizeCb({
        width: Number(width),
        height: Number(height)
      });
      lastH = height;
      lastW = width;
    }
  }, 200);
  return on('resize', updateDimension, window);
}
function wrapEventWithUserTriggeredFlag(v, enable) {
  var value = Object.assign({}, v);
  if (!enable) delete value.userTriggered;
  return value;
}
var INPUT_TAGS = ['INPUT', 'TEXTAREA', 'SELECT'];
var lastInputValueMap = new WeakMap();
function initInputObserver(_ref6) {
  var inputCb = _ref6.inputCb,
    doc = _ref6.doc,
    mirror = _ref6.mirror,
    blockClass = _ref6.blockClass,
    blockSelector = _ref6.blockSelector,
    ignoreClass = _ref6.ignoreClass,
    maskInputOptions = _ref6.maskInputOptions,
    maskInputFn = _ref6.maskInputFn,
    sampling = _ref6.sampling,
    userTriggeredOnInput = _ref6.userTriggeredOnInput;
  function eventHandler(event) {
    var target = getEventTarget(event);
    var userTriggered = event.isTrusted;
    if (target && target.tagName === 'OPTION') target = target.parentElement;
    if (!target || !target.tagName || INPUT_TAGS.indexOf(target.tagName) < 0 || isBlocked(target, blockClass, blockSelector, true)) {
      return;
    }
    var type = target.type;
    if (target.classList.contains(ignoreClass)) {
      return;
    }
    var text = target.value;
    var isChecked = false;
    if (type === 'radio' || type === 'checkbox') {
      isChecked = target.checked;
    } else if (maskInputOptions[target.tagName.toLowerCase()] || maskInputOptions[type]) {
      text = maskInputValue({
        maskInputOptions: maskInputOptions,
        tagName: target.tagName,
        type: type,
        value: text,
        maskInputFn: maskInputFn
      });
    }
    cbWithDedup(target, wrapEventWithUserTriggeredFlag({
      text: text,
      isChecked: isChecked,
      userTriggered: userTriggered
    }, userTriggeredOnInput));
    var name = target.name;
    if (type === 'radio' && name && isChecked) {
      doc.querySelectorAll("input[type=\"radio\"][name=\"".concat(name, "\"]")).forEach(function (el) {
        if (el !== target) {
          cbWithDedup(el, wrapEventWithUserTriggeredFlag({
            text: el.value,
            isChecked: !isChecked,
            userTriggered: false
          }, userTriggeredOnInput));
        }
      });
    }
  }
  function cbWithDedup(target, v) {
    var lastInputValue = lastInputValueMap.get(target);
    if (!lastInputValue || lastInputValue.text !== v.text || lastInputValue.isChecked !== v.isChecked) {
      lastInputValueMap.set(target, v);
      var id = mirror.getId(target);
      inputCb(Object.assign(Object.assign({}, v), {
        id: id
      }));
    }
  }
  var events = sampling.input === 'last' ? ['change'] : ['input', 'change'];
  var handlers = events.map(function (eventName) {
    return on(eventName, eventHandler, doc);
  });
  var currentWindow = doc.defaultView;
  if (!currentWindow) {
    return function () {
      handlers.forEach(function (h) {
        return h();
      });
    };
  }
  var propertyDescriptor = currentWindow.Object.getOwnPropertyDescriptor(currentWindow.HTMLInputElement.prototype, 'value');
  var hookProperties = [[currentWindow.HTMLInputElement.prototype, 'value'], [currentWindow.HTMLInputElement.prototype, 'checked'], [currentWindow.HTMLSelectElement.prototype, 'value'], [currentWindow.HTMLTextAreaElement.prototype, 'value'], [currentWindow.HTMLSelectElement.prototype, 'selectedIndex'], [currentWindow.HTMLOptionElement.prototype, 'selected']];
  if (propertyDescriptor && propertyDescriptor.set) {
    handlers.push.apply(handlers, _toConsumableArray(hookProperties.map(function (p) {
      return hookSetter(p[0], p[1], {
        set: function set() {
          eventHandler({
            target: this
          });
        }
      }, false, currentWindow);
    })));
  }
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}
function getNestedCSSRulePositions(rule) {
  var positions = [];
  function recurse(childRule, pos) {
    if (isCSSGroupingRuleSupported && childRule.parentRule instanceof CSSGroupingRule || isCSSMediaRuleSupported && childRule.parentRule instanceof CSSMediaRule || isCSSSupportsRuleSupported && childRule.parentRule instanceof CSSSupportsRule || isCSSConditionRuleSupported && childRule.parentRule instanceof CSSConditionRule) {
      var rules = Array.from(childRule.parentRule.cssRules);
      var index = rules.indexOf(childRule);
      pos.unshift(index);
    } else if (childRule.parentStyleSheet) {
      var _rules = Array.from(childRule.parentStyleSheet.cssRules);
      var _index = _rules.indexOf(childRule);
      pos.unshift(_index);
    }
    return pos;
  }
  return recurse(rule, positions);
}
function getIdAndStyleId(sheet, mirror, styleMirror) {
  var id, styleId;
  if (!sheet) return {};
  if (sheet.ownerNode) id = mirror.getId(sheet.ownerNode);else styleId = styleMirror.getId(sheet);
  return {
    styleId: styleId,
    id: id
  };
}
function initStyleSheetObserver(_ref7, _ref8) {
  var styleSheetRuleCb = _ref7.styleSheetRuleCb,
    mirror = _ref7.mirror,
    stylesheetManager = _ref7.stylesheetManager;
  var win = _ref8.win;
  var insertRule = win.CSSStyleSheet.prototype.insertRule;
  win.CSSStyleSheet.prototype.insertRule = function (rule, index) {
    var _getIdAndStyleId = getIdAndStyleId(this, mirror, stylesheetManager.styleMirror),
      id = _getIdAndStyleId.id,
      styleId = _getIdAndStyleId.styleId;
    if (id && id !== -1 || styleId && styleId !== -1) {
      styleSheetRuleCb({
        id: id,
        styleId: styleId,
        adds: [{
          rule: rule,
          index: index
        }]
      });
    }
    return insertRule.apply(this, [rule, index]);
  };
  var deleteRule = win.CSSStyleSheet.prototype.deleteRule;
  win.CSSStyleSheet.prototype.deleteRule = function (index) {
    var _getIdAndStyleId2 = getIdAndStyleId(this, mirror, stylesheetManager.styleMirror),
      id = _getIdAndStyleId2.id,
      styleId = _getIdAndStyleId2.styleId;
    if (id && id !== -1 || styleId && styleId !== -1) {
      styleSheetRuleCb({
        id: id,
        styleId: styleId,
        removes: [{
          index: index
        }]
      });
    }
    return deleteRule.apply(this, [index]);
  };
  var replace;
  if (win.CSSStyleSheet.prototype.replace) {
    replace = win.CSSStyleSheet.prototype.replace;
    win.CSSStyleSheet.prototype.replace = function (text) {
      var _getIdAndStyleId3 = getIdAndStyleId(this, mirror, stylesheetManager.styleMirror),
        id = _getIdAndStyleId3.id,
        styleId = _getIdAndStyleId3.styleId;
      if (id && id !== -1 || styleId && styleId !== -1) {
        styleSheetRuleCb({
          id: id,
          styleId: styleId,
          replace: text
        });
      }
      return replace.apply(this, [text]);
    };
  }
  var replaceSync;
  if (win.CSSStyleSheet.prototype.replaceSync) {
    replaceSync = win.CSSStyleSheet.prototype.replaceSync;
    win.CSSStyleSheet.prototype.replaceSync = function (text) {
      var _getIdAndStyleId4 = getIdAndStyleId(this, mirror, stylesheetManager.styleMirror),
        id = _getIdAndStyleId4.id,
        styleId = _getIdAndStyleId4.styleId;
      if (id && id !== -1 || styleId && styleId !== -1) {
        styleSheetRuleCb({
          id: id,
          styleId: styleId,
          replaceSync: text
        });
      }
      return replaceSync.apply(this, [text]);
    };
  }
  var supportedNestedCSSRuleTypes = {};
  if (isCSSGroupingRuleSupported) {
    supportedNestedCSSRuleTypes.CSSGroupingRule = win.CSSGroupingRule;
  } else {
    if (isCSSMediaRuleSupported) {
      supportedNestedCSSRuleTypes.CSSMediaRule = win.CSSMediaRule;
    }
    if (isCSSConditionRuleSupported) {
      supportedNestedCSSRuleTypes.CSSConditionRule = win.CSSConditionRule;
    }
    if (isCSSSupportsRuleSupported) {
      supportedNestedCSSRuleTypes.CSSSupportsRule = win.CSSSupportsRule;
    }
  }
  var unmodifiedFunctions = {};
  Object.entries(supportedNestedCSSRuleTypes).forEach(function (_ref9) {
    var _ref0 = _slicedToArray(_ref9, 2),
      typeKey = _ref0[0],
      type = _ref0[1];
    unmodifiedFunctions[typeKey] = {
      insertRule: type.prototype.insertRule,
      deleteRule: type.prototype.deleteRule
    };
    type.prototype.insertRule = function (rule, index) {
      var _getIdAndStyleId5 = getIdAndStyleId(this.parentStyleSheet, mirror, stylesheetManager.styleMirror),
        id = _getIdAndStyleId5.id,
        styleId = _getIdAndStyleId5.styleId;
      if (id && id !== -1 || styleId && styleId !== -1) {
        styleSheetRuleCb({
          id: id,
          styleId: styleId,
          adds: [{
            rule: rule,
            index: [].concat(_toConsumableArray(getNestedCSSRulePositions(this)), [index || 0])
          }]
        });
      }
      return unmodifiedFunctions[typeKey].insertRule.apply(this, [rule, index]);
    };
    type.prototype.deleteRule = function (index) {
      var _getIdAndStyleId6 = getIdAndStyleId(this.parentStyleSheet, mirror, stylesheetManager.styleMirror),
        id = _getIdAndStyleId6.id,
        styleId = _getIdAndStyleId6.styleId;
      if (id && id !== -1 || styleId && styleId !== -1) {
        styleSheetRuleCb({
          id: id,
          styleId: styleId,
          removes: [{
            index: [].concat(_toConsumableArray(getNestedCSSRulePositions(this)), [index])
          }]
        });
      }
      return unmodifiedFunctions[typeKey].deleteRule.apply(this, [index]);
    };
  });
  return function () {
    win.CSSStyleSheet.prototype.insertRule = insertRule;
    win.CSSStyleSheet.prototype.deleteRule = deleteRule;
    replace && (win.CSSStyleSheet.prototype.replace = replace);
    replaceSync && (win.CSSStyleSheet.prototype.replaceSync = replaceSync);
    Object.entries(supportedNestedCSSRuleTypes).forEach(function (_ref1) {
      var _ref10 = _slicedToArray(_ref1, 2),
        typeKey = _ref10[0],
        type = _ref10[1];
      type.prototype.insertRule = unmodifiedFunctions[typeKey].insertRule;
      type.prototype.deleteRule = unmodifiedFunctions[typeKey].deleteRule;
    });
  };
}
function initAdoptedStyleSheetObserver(_ref11, host) {
  var mirror = _ref11.mirror,
    stylesheetManager = _ref11.stylesheetManager;
  var _a, _b, _c;
  var hostId = null;
  if (host.nodeName === '#document') hostId = mirror.getId(host);else hostId = mirror.getId(host.host);
  var patchTarget = host.nodeName === '#document' ? (_a = host.defaultView) === null || _a === void 0 ? void 0 : _a.Document : (_c = (_b = host.ownerDocument) === null || _b === void 0 ? void 0 : _b.defaultView) === null || _c === void 0 ? void 0 : _c.ShadowRoot;
  var originalPropertyDescriptor = Object.getOwnPropertyDescriptor(patchTarget === null || patchTarget === void 0 ? void 0 : patchTarget.prototype, 'adoptedStyleSheets');
  if (hostId === null || hostId === -1 || !patchTarget || !originalPropertyDescriptor) return function () {};
  Object.defineProperty(host, 'adoptedStyleSheets', {
    configurable: originalPropertyDescriptor.configurable,
    enumerable: originalPropertyDescriptor.enumerable,
    get: function get() {
      var _a;
      return (_a = originalPropertyDescriptor.get) === null || _a === void 0 ? void 0 : _a.call(this);
    },
    set: function set(sheets) {
      var _a;
      var result = (_a = originalPropertyDescriptor.set) === null || _a === void 0 ? void 0 : _a.call(this, sheets);
      if (hostId !== null && hostId !== -1) {
        try {
          stylesheetManager.adoptStyleSheets(sheets, hostId);
        } catch (e) {}
      }
      return result;
    }
  });
  return function () {
    Object.defineProperty(host, 'adoptedStyleSheets', {
      configurable: originalPropertyDescriptor.configurable,
      enumerable: originalPropertyDescriptor.enumerable,
      get: originalPropertyDescriptor.get,
      set: originalPropertyDescriptor.set
    });
  };
}
function initStyleDeclarationObserver(_ref12, _ref13) {
  var styleDeclarationCb = _ref12.styleDeclarationCb,
    mirror = _ref12.mirror,
    ignoreCSSAttributes = _ref12.ignoreCSSAttributes,
    stylesheetManager = _ref12.stylesheetManager;
  var win = _ref13.win;
  var setProperty = win.CSSStyleDeclaration.prototype.setProperty;
  win.CSSStyleDeclaration.prototype.setProperty = function (property, value, priority) {
    var _a;
    if (ignoreCSSAttributes.has(property)) {
      return setProperty.apply(this, [property, value, priority]);
    }
    var _getIdAndStyleId7 = getIdAndStyleId((_a = this.parentRule) === null || _a === void 0 ? void 0 : _a.parentStyleSheet, mirror, stylesheetManager.styleMirror),
      id = _getIdAndStyleId7.id,
      styleId = _getIdAndStyleId7.styleId;
    if (id && id !== -1 || styleId && styleId !== -1) {
      styleDeclarationCb({
        id: id,
        styleId: styleId,
        set: {
          property: property,
          value: value,
          priority: priority
        },
        index: getNestedCSSRulePositions(this.parentRule)
      });
    }
    return setProperty.apply(this, [property, value, priority]);
  };
  var removeProperty = win.CSSStyleDeclaration.prototype.removeProperty;
  win.CSSStyleDeclaration.prototype.removeProperty = function (property) {
    var _a;
    if (ignoreCSSAttributes.has(property)) {
      return removeProperty.apply(this, [property]);
    }
    var _getIdAndStyleId8 = getIdAndStyleId((_a = this.parentRule) === null || _a === void 0 ? void 0 : _a.parentStyleSheet, mirror, stylesheetManager.styleMirror),
      id = _getIdAndStyleId8.id,
      styleId = _getIdAndStyleId8.styleId;
    if (id && id !== -1 || styleId && styleId !== -1) {
      styleDeclarationCb({
        id: id,
        styleId: styleId,
        remove: {
          property: property
        },
        index: getNestedCSSRulePositions(this.parentRule)
      });
    }
    return removeProperty.apply(this, [property]);
  };
  return function () {
    win.CSSStyleDeclaration.prototype.setProperty = setProperty;
    win.CSSStyleDeclaration.prototype.removeProperty = removeProperty;
  };
}
function initMediaInteractionObserver(_ref14) {
  var mediaInteractionCb = _ref14.mediaInteractionCb,
    blockClass = _ref14.blockClass,
    blockSelector = _ref14.blockSelector,
    mirror = _ref14.mirror,
    sampling = _ref14.sampling;
  var handler = function handler(type) {
    return throttle(function (event) {
      var target = getEventTarget(event);
      if (!target || isBlocked(target, blockClass, blockSelector, true)) {
        return;
      }
      var currentTime = target.currentTime,
        volume = target.volume,
        muted = target.muted,
        playbackRate = target.playbackRate;
      mediaInteractionCb({
        type: type,
        id: mirror.getId(target),
        currentTime: currentTime,
        volume: volume,
        muted: muted,
        playbackRate: playbackRate
      });
    }, sampling.media || 500);
  };
  var handlers = [on('play', handler(0)), on('pause', handler(1)), on('seeked', handler(2)), on('volumechange', handler(3)), on('ratechange', handler(4))];
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}
function initFontObserver(_ref15) {
  var fontCb = _ref15.fontCb,
    doc = _ref15.doc;
  var win = doc.defaultView;
  if (!win) {
    return function () {};
  }
  var handlers = [];
  var fontMap = new WeakMap();
  var originalFontFace = win.FontFace;
  win.FontFace = function FontFace(family, source, descriptors) {
    var fontFace = new originalFontFace(family, source, descriptors);
    fontMap.set(fontFace, {
      family: family,
      buffer: typeof source !== 'string',
      descriptors: descriptors,
      fontSource: typeof source === 'string' ? source : JSON.stringify(Array.from(new Uint8Array(source)))
    });
    return fontFace;
  };
  var restoreHandler = patch(doc.fonts, 'add', function (original) {
    return function (fontFace) {
      setTimeout(function () {
        var p = fontMap.get(fontFace);
        if (p) {
          fontCb(p);
          fontMap["delete"](fontFace);
        }
      }, 0);
      return original.apply(this, [fontFace]);
    };
  });
  handlers.push(function () {
    win.FontFace = originalFontFace;
  });
  handlers.push(restoreHandler);
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}
function initSelectionObserver(param) {
  var doc = param.doc,
    mirror = param.mirror,
    blockClass = param.blockClass,
    blockSelector = param.blockSelector,
    selectionCb = param.selectionCb;
  var collapsed = true;
  var updateSelection = function updateSelection() {
    var selection = doc.getSelection();
    if (!selection || collapsed && (selection === null || selection === void 0 ? void 0 : selection.isCollapsed)) return;
    collapsed = selection.isCollapsed || false;
    var ranges = [];
    var count = selection.rangeCount || 0;
    for (var i = 0; i < count; i++) {
      var range = selection.getRangeAt(i);
      var startContainer = range.startContainer,
        startOffset = range.startOffset,
        endContainer = range.endContainer,
        endOffset = range.endOffset;
      var blocked = isBlocked(startContainer, blockClass, blockSelector, true) || isBlocked(endContainer, blockClass, blockSelector, true);
      if (blocked) continue;
      ranges.push({
        start: mirror.getId(startContainer),
        startOffset: startOffset,
        end: mirror.getId(endContainer),
        endOffset: endOffset
      });
    }
    selectionCb({
      ranges: ranges
    });
  };
  updateSelection();
  return on('selectionchange', updateSelection);
}
function mergeHooks(o, hooks) {
  var mutationCb = o.mutationCb,
    mousemoveCb = o.mousemoveCb,
    mouseInteractionCb = o.mouseInteractionCb,
    scrollCb = o.scrollCb,
    viewportResizeCb = o.viewportResizeCb,
    inputCb = o.inputCb,
    mediaInteractionCb = o.mediaInteractionCb,
    styleSheetRuleCb = o.styleSheetRuleCb,
    styleDeclarationCb = o.styleDeclarationCb,
    canvasMutationCb = o.canvasMutationCb,
    fontCb = o.fontCb,
    selectionCb = o.selectionCb;
  o.mutationCb = function () {
    if (hooks.mutation) {
      hooks.mutation.apply(hooks, arguments);
    }
    mutationCb.apply(void 0, arguments);
  };
  o.mousemoveCb = function () {
    if (hooks.mousemove) {
      hooks.mousemove.apply(hooks, arguments);
    }
    mousemoveCb.apply(void 0, arguments);
  };
  o.mouseInteractionCb = function () {
    if (hooks.mouseInteraction) {
      hooks.mouseInteraction.apply(hooks, arguments);
    }
    mouseInteractionCb.apply(void 0, arguments);
  };
  o.scrollCb = function () {
    if (hooks.scroll) {
      hooks.scroll.apply(hooks, arguments);
    }
    scrollCb.apply(void 0, arguments);
  };
  o.viewportResizeCb = function () {
    if (hooks.viewportResize) {
      hooks.viewportResize.apply(hooks, arguments);
    }
    viewportResizeCb.apply(void 0, arguments);
  };
  o.inputCb = function () {
    if (hooks.input) {
      hooks.input.apply(hooks, arguments);
    }
    inputCb.apply(void 0, arguments);
  };
  o.mediaInteractionCb = function () {
    if (hooks.mediaInteaction) {
      hooks.mediaInteaction.apply(hooks, arguments);
    }
    mediaInteractionCb.apply(void 0, arguments);
  };
  o.styleSheetRuleCb = function () {
    if (hooks.styleSheetRule) {
      hooks.styleSheetRule.apply(hooks, arguments);
    }
    styleSheetRuleCb.apply(void 0, arguments);
  };
  o.styleDeclarationCb = function () {
    if (hooks.styleDeclaration) {
      hooks.styleDeclaration.apply(hooks, arguments);
    }
    styleDeclarationCb.apply(void 0, arguments);
  };
  o.canvasMutationCb = function () {
    if (hooks.canvasMutation) {
      hooks.canvasMutation.apply(hooks, arguments);
    }
    canvasMutationCb.apply(void 0, arguments);
  };
  o.fontCb = function () {
    if (hooks.font) {
      hooks.font.apply(hooks, arguments);
    }
    fontCb.apply(void 0, arguments);
  };
  o.selectionCb = function () {
    if (hooks.selection) {
      hooks.selection.apply(hooks, arguments);
    }
    selectionCb.apply(void 0, arguments);
  };
}
function initObservers(o) {
  var hooks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var currentWindow = o.doc.defaultView;
  if (!currentWindow) {
    return function () {};
  }
  mergeHooks(o, hooks);
  var mutationObserver = initMutationObserver(o, o.doc);
  var mousemoveHandler = initMoveObserver(o);
  var mouseInteractionHandler = initMouseInteractionObserver(o);
  var scrollHandler = initScrollObserver(o);
  var viewportResizeHandler = initViewportResizeObserver(o);
  var inputHandler = initInputObserver(o);
  var mediaInteractionHandler = initMediaInteractionObserver(o);
  var styleSheetObserver = initStyleSheetObserver(o, {
    win: currentWindow
  });
  var adoptedStyleSheetObserver = initAdoptedStyleSheetObserver(o, o.doc);
  var styleDeclarationObserver = initStyleDeclarationObserver(o, {
    win: currentWindow
  });
  var fontObserver = o.collectFonts ? initFontObserver(o) : function () {};
  var selectionObserver = initSelectionObserver(o);
  var pluginHandlers = [];
  var _iterator = _createForOfIteratorHelper(o.plugins),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var plugin = _step.value;
      pluginHandlers.push(plugin.observer(plugin.callback, currentWindow, plugin.options));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return function () {
    mutationBuffers.forEach(function (b) {
      return b.reset();
    });
    mutationObserver.disconnect();
    mousemoveHandler();
    mouseInteractionHandler();
    scrollHandler();
    viewportResizeHandler();
    inputHandler();
    mediaInteractionHandler();
    styleSheetObserver();
    adoptedStyleSheetObserver();
    styleDeclarationObserver();
    fontObserver();
    selectionObserver();
    pluginHandlers.forEach(function (h) {
      return h();
    });
  };
}

var CrossOriginIframeMirror = /*#__PURE__*/function () {
  function CrossOriginIframeMirror(generateIdFn) {
    _classCallCheck(this, CrossOriginIframeMirror);
    this.generateIdFn = generateIdFn;
    this.iframeIdToRemoteIdMap = new WeakMap();
    this.iframeRemoteIdToIdMap = new WeakMap();
  }
  return _createClass(CrossOriginIframeMirror, [{
    key: "getId",
    value: function getId(iframe, remoteId, idToRemoteMap, remoteToIdMap) {
      var idToRemoteIdMap = idToRemoteMap || this.getIdToRemoteIdMap(iframe);
      var remoteIdToIdMap = remoteToIdMap || this.getRemoteIdToIdMap(iframe);
      var id = idToRemoteIdMap.get(remoteId);
      if (!id) {
        id = this.generateIdFn();
        idToRemoteIdMap.set(remoteId, id);
        remoteIdToIdMap.set(id, remoteId);
      }
      return id;
    }
  }, {
    key: "getIds",
    value: function getIds(iframe, remoteId) {
      var _this = this;
      var idToRemoteIdMap = this.getIdToRemoteIdMap(iframe);
      var remoteIdToIdMap = this.getRemoteIdToIdMap(iframe);
      return remoteId.map(function (id) {
        return _this.getId(iframe, id, idToRemoteIdMap, remoteIdToIdMap);
      });
    }
  }, {
    key: "getRemoteId",
    value: function getRemoteId(iframe, id, map) {
      var remoteIdToIdMap = map || this.getRemoteIdToIdMap(iframe);
      if (typeof id !== 'number') return id;
      var remoteId = remoteIdToIdMap.get(id);
      if (!remoteId) return -1;
      return remoteId;
    }
  }, {
    key: "getRemoteIds",
    value: function getRemoteIds(iframe, ids) {
      var _this2 = this;
      var remoteIdToIdMap = this.getRemoteIdToIdMap(iframe);
      return ids.map(function (id) {
        return _this2.getRemoteId(iframe, id, remoteIdToIdMap);
      });
    }
  }, {
    key: "reset",
    value: function reset(iframe) {
      if (!iframe) {
        this.iframeIdToRemoteIdMap = new WeakMap();
        this.iframeRemoteIdToIdMap = new WeakMap();
        return;
      }
      this.iframeIdToRemoteIdMap["delete"](iframe);
      this.iframeRemoteIdToIdMap["delete"](iframe);
    }
  }, {
    key: "getIdToRemoteIdMap",
    value: function getIdToRemoteIdMap(iframe) {
      var idToRemoteIdMap = this.iframeIdToRemoteIdMap.get(iframe);
      if (!idToRemoteIdMap) {
        idToRemoteIdMap = new Map();
        this.iframeIdToRemoteIdMap.set(iframe, idToRemoteIdMap);
      }
      return idToRemoteIdMap;
    }
  }, {
    key: "getRemoteIdToIdMap",
    value: function getRemoteIdToIdMap(iframe) {
      var remoteIdToIdMap = this.iframeRemoteIdToIdMap.get(iframe);
      if (!remoteIdToIdMap) {
        remoteIdToIdMap = new Map();
        this.iframeRemoteIdToIdMap.set(iframe, remoteIdToIdMap);
      }
      return remoteIdToIdMap;
    }
  }]);
}();

var IframeManager = /*#__PURE__*/function () {
  function IframeManager(options) {
    _classCallCheck(this, IframeManager);
    this.iframes = new WeakMap();
    this.crossOriginIframeMap = new WeakMap();
    this.crossOriginIframeMirror = new CrossOriginIframeMirror(genId);
    this.mutationCb = options.mutationCb;
    this.wrappedEmit = options.wrappedEmit;
    this.stylesheetManager = options.stylesheetManager;
    this.recordCrossOriginIframes = options.recordCrossOriginIframes;
    this.crossOriginIframeStyleMirror = new CrossOriginIframeMirror(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror));
    this.mirror = options.mirror;
    if (this.recordCrossOriginIframes) {
      window.addEventListener('message', this.handleMessage.bind(this));
    }
  }
  return _createClass(IframeManager, [{
    key: "addIframe",
    value: function addIframe(iframeEl) {
      this.iframes.set(iframeEl, true);
      if (iframeEl.contentWindow) this.crossOriginIframeMap.set(iframeEl.contentWindow, iframeEl);
    }
  }, {
    key: "addLoadListener",
    value: function addLoadListener(cb) {
      this.loadListener = cb;
    }
  }, {
    key: "attachIframe",
    value: function attachIframe(iframeEl, childSn) {
      var _a;
      this.mutationCb({
        adds: [{
          parentId: this.mirror.getId(iframeEl),
          nextId: null,
          node: childSn
        }],
        removes: [],
        texts: [],
        attributes: [],
        isAttachIframe: true
      });
      (_a = this.loadListener) === null || _a === void 0 ? void 0 : _a.call(this, iframeEl);
      if (iframeEl.contentDocument && iframeEl.contentDocument.adoptedStyleSheets && iframeEl.contentDocument.adoptedStyleSheets.length > 0) this.stylesheetManager.adoptStyleSheets(iframeEl.contentDocument.adoptedStyleSheets, this.mirror.getId(iframeEl.contentDocument));
    }
  }, {
    key: "handleMessage",
    value: function handleMessage(message) {
      if (message.data.type === 'rrweb') {
        var iframeSourceWindow = message.source;
        if (!iframeSourceWindow) return;
        var iframeEl = this.crossOriginIframeMap.get(message.source);
        if (!iframeEl) return;
        var transformedEvent = this.transformCrossOriginEvent(iframeEl, message.data.event);
        if (transformedEvent) this.wrappedEmit(transformedEvent, message.data.isCheckout);
      }
    }
  }, {
    key: "transformCrossOriginEvent",
    value: function transformCrossOriginEvent(iframeEl, e) {
      var _this = this;
      var _a;
      switch (e.type) {
        case EventType.FullSnapshot:
          {
            this.crossOriginIframeMirror.reset(iframeEl);
            this.crossOriginIframeStyleMirror.reset(iframeEl);
            this.replaceIdOnNode(e.data.node, iframeEl);
            return {
              timestamp: e.timestamp,
              type: EventType.IncrementalSnapshot,
              data: {
                source: IncrementalSource.Mutation,
                adds: [{
                  parentId: this.mirror.getId(iframeEl),
                  nextId: null,
                  node: e.data.node
                }],
                removes: [],
                texts: [],
                attributes: [],
                isAttachIframe: true
              }
            };
          }
        case EventType.Meta:
        case EventType.Load:
        case EventType.DomContentLoaded:
          {
            return false;
          }
        case EventType.Plugin:
          {
            return e;
          }
        case EventType.Custom:
          {
            this.replaceIds(e.data.payload, iframeEl, ['id', 'parentId', 'previousId', 'nextId']);
            return e;
          }
        case EventType.IncrementalSnapshot:
          {
            switch (e.data.source) {
              case IncrementalSource.Mutation:
                {
                  e.data.adds.forEach(function (n) {
                    _this.replaceIds(n, iframeEl, ['parentId', 'nextId', 'previousId']);
                    _this.replaceIdOnNode(n.node, iframeEl);
                  });
                  e.data.removes.forEach(function (n) {
                    _this.replaceIds(n, iframeEl, ['parentId', 'id']);
                  });
                  e.data.attributes.forEach(function (n) {
                    _this.replaceIds(n, iframeEl, ['id']);
                  });
                  e.data.texts.forEach(function (n) {
                    _this.replaceIds(n, iframeEl, ['id']);
                  });
                  return e;
                }
              case IncrementalSource.Drag:
              case IncrementalSource.TouchMove:
              case IncrementalSource.MouseMove:
                {
                  e.data.positions.forEach(function (p) {
                    _this.replaceIds(p, iframeEl, ['id']);
                  });
                  return e;
                }
              case IncrementalSource.ViewportResize:
                {
                  return false;
                }
              case IncrementalSource.MediaInteraction:
              case IncrementalSource.MouseInteraction:
              case IncrementalSource.Scroll:
              case IncrementalSource.CanvasMutation:
              case IncrementalSource.Input:
                {
                  this.replaceIds(e.data, iframeEl, ['id']);
                  return e;
                }
              case IncrementalSource.StyleSheetRule:
              case IncrementalSource.StyleDeclaration:
                {
                  this.replaceIds(e.data, iframeEl, ['id']);
                  this.replaceStyleIds(e.data, iframeEl, ['styleId']);
                  return e;
                }
              case IncrementalSource.Font:
                {
                  return e;
                }
              case IncrementalSource.Selection:
                {
                  e.data.ranges.forEach(function (range) {
                    _this.replaceIds(range, iframeEl, ['start', 'end']);
                  });
                  return e;
                }
              case IncrementalSource.AdoptedStyleSheet:
                {
                  this.replaceIds(e.data, iframeEl, ['id']);
                  this.replaceStyleIds(e.data, iframeEl, ['styleIds']);
                  (_a = e.data.styles) === null || _a === void 0 ? void 0 : _a.forEach(function (style) {
                    _this.replaceStyleIds(style, iframeEl, ['styleId']);
                  });
                  return e;
                }
            }
          }
      }
    }
  }, {
    key: "replace",
    value: function replace(iframeMirror, obj, iframeEl, keys) {
      var _iterator = _createForOfIteratorHelper(keys),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;
          if (!Array.isArray(obj[key]) && typeof obj[key] !== 'number') continue;
          if (Array.isArray(obj[key])) {
            obj[key] = iframeMirror.getIds(iframeEl, obj[key]);
          } else {
            obj[key] = iframeMirror.getId(iframeEl, obj[key]);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return obj;
    }
  }, {
    key: "replaceIds",
    value: function replaceIds(obj, iframeEl, keys) {
      return this.replace(this.crossOriginIframeMirror, obj, iframeEl, keys);
    }
  }, {
    key: "replaceStyleIds",
    value: function replaceStyleIds(obj, iframeEl, keys) {
      return this.replace(this.crossOriginIframeStyleMirror, obj, iframeEl, keys);
    }
  }, {
    key: "replaceIdOnNode",
    value: function replaceIdOnNode(node, iframeEl) {
      var _this2 = this;
      this.replaceIds(node, iframeEl, ['id']);
      if ('childNodes' in node) {
        node.childNodes.forEach(function (child) {
          _this2.replaceIdOnNode(child, iframeEl);
        });
      }
    }
  }]);
}();

var ShadowDomManager = /*#__PURE__*/function () {
  function ShadowDomManager(options) {
    _classCallCheck(this, ShadowDomManager);
    this.shadowDoms = new WeakSet();
    this.restorePatches = [];
    this.mutationCb = options.mutationCb;
    this.scrollCb = options.scrollCb;
    this.bypassOptions = options.bypassOptions;
    this.mirror = options.mirror;
    var manager = this;
    this.restorePatches.push(patch(Element.prototype, 'attachShadow', function (original) {
      return function (option) {
        var shadowRoot = original.call(this, option);
        if (this.shadowRoot) manager.addShadowRoot(this.shadowRoot, this.ownerDocument);
        return shadowRoot;
      };
    }));
  }
  return _createClass(ShadowDomManager, [{
    key: "addShadowRoot",
    value: function addShadowRoot(shadowRoot, doc) {
      var _this = this;
      if (!isNativeShadowDom(shadowRoot)) return;
      if (this.shadowDoms.has(shadowRoot)) return;
      this.shadowDoms.add(shadowRoot);
      initMutationObserver(Object.assign(Object.assign({}, this.bypassOptions), {
        doc: doc,
        mutationCb: this.mutationCb,
        mirror: this.mirror,
        shadowDomManager: this
      }), shadowRoot);
      initScrollObserver(Object.assign(Object.assign({}, this.bypassOptions), {
        scrollCb: this.scrollCb,
        doc: shadowRoot,
        mirror: this.mirror
      }));
      setTimeout(function () {
        if (shadowRoot.adoptedStyleSheets && shadowRoot.adoptedStyleSheets.length > 0) _this.bypassOptions.stylesheetManager.adoptStyleSheets(shadowRoot.adoptedStyleSheets, _this.mirror.getId(shadowRoot.host));
        initAdoptedStyleSheetObserver({
          mirror: _this.mirror,
          stylesheetManager: _this.bypassOptions.stylesheetManager
        }, shadowRoot);
      }, 0);
    }
  }, {
    key: "observeAttachShadow",
    value: function observeAttachShadow(iframeElement) {
      if (iframeElement.contentWindow) {
        var manager = this;
        this.restorePatches.push(patch(iframeElement.contentWindow.HTMLElement.prototype, 'attachShadow', function (original) {
          return function (option) {
            var shadowRoot = original.call(this, option);
            if (this.shadowRoot) manager.addShadowRoot(this.shadowRoot, iframeElement.contentDocument);
            return shadowRoot;
          };
        }));
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.restorePatches.forEach(function (restorePatch) {
        return restorePatch();
      });
      this.shadowDoms = new WeakSet();
    }
  }]);
}();

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

/*
 * base64-arraybuffer 1.0.1 <https://github.com/niklasvh/base64-arraybuffer>
 * Copyright (c) 2021 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// Use a lookup table to find the index.
var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (var i$1 = 0; i$1 < chars.length; i$1++) {
  lookup[chars.charCodeAt(i$1)] = i$1;
}
var encode = function encode(arraybuffer) {
  var bytes = new Uint8Array(arraybuffer),
    i,
    len = bytes.length,
    base64 = '';
  for (i = 0; i < len; i += 3) {
    base64 += chars[bytes[i] >> 2];
    base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
    base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
    base64 += chars[bytes[i + 2] & 63];
  }
  if (len % 3 === 2) {
    base64 = base64.substring(0, base64.length - 1) + '=';
  } else if (len % 3 === 1) {
    base64 = base64.substring(0, base64.length - 2) + '==';
  }
  return base64;
};

var canvasVarMap = new Map();
function variableListFor(ctx, ctor) {
  var contextMap = canvasVarMap.get(ctx);
  if (!contextMap) {
    contextMap = new Map();
    canvasVarMap.set(ctx, contextMap);
  }
  if (!contextMap.has(ctor)) {
    contextMap.set(ctor, []);
  }
  return contextMap.get(ctor);
}
var saveWebGLVar = function saveWebGLVar(value, win, ctx) {
  if (!value || !(isInstanceOfWebGLObject(value, win) || _typeof(value) === 'object')) return;
  var name = value.constructor.name;
  var list = variableListFor(ctx, name);
  var index = list.indexOf(value);
  if (index === -1) {
    index = list.length;
    list.push(value);
  }
  return index;
};
function serializeArg(value, win, ctx) {
  if (value instanceof Array) {
    return value.map(function (arg) {
      return serializeArg(arg, win, ctx);
    });
  } else if (value === null) {
    return value;
  } else if (value instanceof Float32Array || value instanceof Float64Array || value instanceof Int32Array || value instanceof Uint32Array || value instanceof Uint8Array || value instanceof Uint16Array || value instanceof Int16Array || value instanceof Int8Array || value instanceof Uint8ClampedArray) {
    var name = value.constructor.name;
    return {
      rr_type: name,
      args: [Object.values(value)]
    };
  } else if (value instanceof ArrayBuffer) {
    var _name = value.constructor.name;
    var base64 = encode(value);
    return {
      rr_type: _name,
      base64: base64
    };
  } else if (value instanceof DataView) {
    var _name2 = value.constructor.name;
    return {
      rr_type: _name2,
      args: [serializeArg(value.buffer, win, ctx), value.byteOffset, value.byteLength]
    };
  } else if (value instanceof HTMLImageElement) {
    var _name3 = value.constructor.name;
    var src = value.src;
    return {
      rr_type: _name3,
      src: src
    };
  } else if (value instanceof HTMLCanvasElement) {
    var _name4 = 'HTMLImageElement';
    var _src = value.toDataURL();
    return {
      rr_type: _name4,
      src: _src
    };
  } else if (value instanceof ImageData) {
    var _name5 = value.constructor.name;
    return {
      rr_type: _name5,
      args: [serializeArg(value.data, win, ctx), value.width, value.height]
    };
  } else if (isInstanceOfWebGLObject(value, win) || _typeof(value) === 'object') {
    var _name6 = value.constructor.name;
    var index = saveWebGLVar(value, win, ctx);
    return {
      rr_type: _name6,
      index: index
    };
  }
  return value;
}
var serializeArgs = function serializeArgs(args, win, ctx) {
  return _toConsumableArray(args).map(function (arg) {
    return serializeArg(arg, win, ctx);
  });
};
var isInstanceOfWebGLObject = function isInstanceOfWebGLObject(value, win) {
  var webGLConstructorNames = ['WebGLActiveInfo', 'WebGLBuffer', 'WebGLFramebuffer', 'WebGLProgram', 'WebGLRenderbuffer', 'WebGLShader', 'WebGLShaderPrecisionFormat', 'WebGLTexture', 'WebGLUniformLocation', 'WebGLVertexArrayObject', 'WebGLVertexArrayObjectOES'];
  var supportedWebGLConstructorNames = webGLConstructorNames.filter(function (name) {
    return typeof win[name] === 'function';
  });
  return Boolean(supportedWebGLConstructorNames.find(function (name) {
    return value instanceof win[name];
  }));
};

function initCanvas2DMutationObserver(cb, win, blockClass, blockSelector) {
  var handlers = [];
  var props2D = Object.getOwnPropertyNames(win.CanvasRenderingContext2D.prototype);
  var _iterator = _createForOfIteratorHelper(props2D),
    _step;
  try {
    var _loop = function _loop() {
      var prop = _step.value;
      try {
        if (typeof win.CanvasRenderingContext2D.prototype[prop] !== 'function') {
          return 1; // continue
        }
        var restoreHandler = patch(win.CanvasRenderingContext2D.prototype, prop, function (original) {
          return function () {
            var _this = this;
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            if (!isBlocked(this.canvas, blockClass, blockSelector, true)) {
              setTimeout(function () {
                var recordArgs = serializeArgs([].concat(args), win, _this);
                cb(_this.canvas, {
                  type: CanvasContext['2D'],
                  property: prop,
                  args: recordArgs
                });
              }, 0);
            }
            return original.apply(this, args);
          };
        });
        handlers.push(restoreHandler);
      } catch (_a) {
        var hookHandler = hookSetter(win.CanvasRenderingContext2D.prototype, prop, {
          set: function set(v) {
            cb(this.canvas, {
              type: CanvasContext['2D'],
              property: prop,
              args: [v],
              setter: true
            });
          }
        });
        handlers.push(hookHandler);
      }
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      if (_loop()) continue;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}

function initCanvasContextObserver(win, blockClass, blockSelector) {
  var handlers = [];
  try {
    var restoreHandler = patch(win.HTMLCanvasElement.prototype, 'getContext', function (original) {
      return function (contextType) {
        if (!isBlocked(this, blockClass, blockSelector, true)) {
          if (!('__context' in this)) this.__context = contextType;
        }
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        return original.apply(this, [contextType].concat(args));
      };
    });
    handlers.push(restoreHandler);
  } catch (_a) {
    console.error('failed to patch HTMLCanvasElement.prototype.getContext');
  }
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}

function patchGLPrototype(prototype, type, cb, blockClass, blockSelector, mirror, win) {
  var handlers = [];
  var props = Object.getOwnPropertyNames(prototype);
  var _iterator = _createForOfIteratorHelper(props),
    _step;
  try {
    var _loop = function _loop() {
        var prop = _step.value;
        if (['isContextLost', 'canvas', 'drawingBufferWidth', 'drawingBufferHeight'].includes(prop)) {
          return 0; // continue
        }
        try {
          if (typeof prototype[prop] !== 'function') {
            return 0; // continue
          }
          var restoreHandler = patch(prototype, prop, function (original) {
            return function () {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              var result = original.apply(this, args);
              saveWebGLVar(result, win, this);
              if (!isBlocked(this.canvas, blockClass, blockSelector, true)) {
                var recordArgs = serializeArgs([].concat(args), win, this);
                var mutation = {
                  type: type,
                  property: prop,
                  args: recordArgs
                };
                cb(this.canvas, mutation);
              }
              return result;
            };
          });
          handlers.push(restoreHandler);
        } catch (_a) {
          var hookHandler = hookSetter(prototype, prop, {
            set: function set(v) {
              cb(this.canvas, {
                type: type,
                property: prop,
                args: [v],
                setter: true
              });
            }
          });
          handlers.push(hookHandler);
        }
      },
      _ret;
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _ret = _loop();
      if (_ret === 0) continue;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return handlers;
}
function initCanvasWebGLMutationObserver(cb, win, blockClass, blockSelector, mirror) {
  var handlers = [];
  handlers.push.apply(handlers, _toConsumableArray(patchGLPrototype(win.WebGLRenderingContext.prototype, CanvasContext.WebGL, cb, blockClass, blockSelector, mirror, win)));
  if (typeof win.WebGL2RenderingContext !== 'undefined') {
    handlers.push.apply(handlers, _toConsumableArray(patchGLPrototype(win.WebGL2RenderingContext.prototype, CanvasContext.WebGL2, cb, blockClass, blockSelector, mirror, win)));
  }
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}

var WorkerClass = null;
try {
  var WorkerThreads = typeof module !== 'undefined' && typeof module.require === 'function' && module.require('worker_threads') || typeof __non_webpack_require__ === 'function' && __non_webpack_require__('worker_threads') || typeof require === 'function' && require('worker_threads');
  WorkerClass = WorkerThreads.Worker;
} catch (e) {} // eslint-disable-line

function decodeBase64$1(base64, enableUnicode) {
  return Buffer.from(base64, 'base64').toString(enableUnicode ? 'utf16' : 'utf8');
}
function createBase64WorkerFactory$2(base64, sourcemapArg, enableUnicodeArg) {
  var sourcemap = sourcemapArg === undefined ? null : sourcemapArg;
  var enableUnicode = enableUnicodeArg === undefined ? false : enableUnicodeArg;
  var source = decodeBase64$1(base64, enableUnicode);
  var start = source.indexOf('\n', 10) + 1;
  var body = source.substring(start) + (sourcemap ? '\/\/# sourceMappingURL=' + sourcemap : '');
  return function WorkerFactory(options) {
    return new WorkerClass(body, Object.assign({}, options, {
      eval: true
    }));
  };
}

function decodeBase64(base64, enableUnicode) {
  var binaryString = atob(base64);
  if (enableUnicode) {
    var binaryView = new Uint8Array(binaryString.length);
    for (var i = 0, n = binaryString.length; i < n; ++i) {
      binaryView[i] = binaryString.charCodeAt(i);
    }
    return String.fromCharCode.apply(null, new Uint16Array(binaryView.buffer));
  }
  return binaryString;
}
function createURL(base64, sourcemapArg, enableUnicodeArg) {
  var sourcemap = sourcemapArg === undefined ? null : sourcemapArg;
  var enableUnicode = enableUnicodeArg === undefined ? false : enableUnicodeArg;
  var source = decodeBase64(base64, enableUnicode);
  var start = source.indexOf('\n', 10) + 1;
  var body = source.substring(start) + (sourcemap ? '\/\/# sourceMappingURL=' + sourcemap : '');
  var blob = new Blob([body], {
    type: 'application/javascript'
  });
  return URL.createObjectURL(blob);
}
function createBase64WorkerFactory$1(base64, sourcemapArg, enableUnicodeArg) {
  var url;
  return function WorkerFactory(options) {
    url = url || createURL(base64, sourcemapArg, enableUnicodeArg);
    return new Worker(url, options);
  };
}

var kIsNodeJS = Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
function isNodeJS() {
  return kIsNodeJS;
}

function createBase64WorkerFactory(base64, sourcemapArg, enableUnicodeArg) {
  if (isNodeJS()) {
    return createBase64WorkerFactory$2(base64, sourcemapArg, enableUnicodeArg);
  }
  return createBase64WorkerFactory$1(base64, sourcemapArg, enableUnicodeArg);
}

var WorkerFactory = createBase64WorkerFactory('Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICAgJ3VzZSBzdHJpY3QnOwoKICAgIC8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLg0KDQogICAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55DQogICAgcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLg0KDQogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEgNCiAgICBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkNCiAgICBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsDQogICAgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NDQogICAgTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1INCiAgICBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SDQogICAgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS4NCiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqLw0KDQogICAgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikgew0KICAgICAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH0NCiAgICAgICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7DQogICAgICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvclsidGhyb3ciXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9DQogICAgICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfQ0KICAgICAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpOw0KICAgICAgICB9KTsNCiAgICB9CgogICAgLyoKICAgICAqIGJhc2U2NC1hcnJheWJ1ZmZlciAxLjAuMSA8aHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3ZoL2Jhc2U2NC1hcnJheWJ1ZmZlcj4KICAgICAqIENvcHlyaWdodCAoYykgMjAyMSBOaWtsYXMgdm9uIEhlcnR6ZW4gPGh0dHBzOi8vaGVydHplbi5jb20+CiAgICAgKiBSZWxlYXNlZCB1bmRlciBNSVQgTGljZW5zZQogICAgICovCiAgICB2YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7CiAgICAvLyBVc2UgYSBsb29rdXAgdGFibGUgdG8gZmluZCB0aGUgaW5kZXguCiAgICB2YXIgbG9va3VwID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gW10gOiBuZXcgVWludDhBcnJheSgyNTYpOwogICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFycy5sZW5ndGg7IGkrKykgewogICAgICAgIGxvb2t1cFtjaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7CiAgICB9CiAgICB2YXIgZW5jb2RlID0gZnVuY3Rpb24gKGFycmF5YnVmZmVyKSB7CiAgICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLCBpLCBsZW4gPSBieXRlcy5sZW5ndGgsIGJhc2U2NCA9ICcnOwogICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gMykgewogICAgICAgICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaV0gPj4gMl07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2ldICYgMykgPDwgNCkgfCAoYnl0ZXNbaSArIDFdID4+IDQpXTsKICAgICAgICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIpIHwgKGJ5dGVzW2kgKyAyXSA+PiA2KV07CiAgICAgICAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpICsgMl0gJiA2M107CiAgICAgICAgfQogICAgICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgJz0nOwogICAgICAgIH0KICAgICAgICBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgJz09JzsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGJhc2U2NDsKICAgIH07CgogICAgY29uc3QgbGFzdEJsb2JNYXAgPSBuZXcgTWFwKCk7DQogICAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gbmV3IE1hcCgpOw0KICAgIGZ1bmN0aW9uIGdldFRyYW5zcGFyZW50QmxvYkZvcih3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucykgew0KICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgew0KICAgICAgICAgICAgY29uc3QgaWQgPSBgJHt3aWR0aH0tJHtoZWlnaHR9YDsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgaWYgKHRyYW5zcGFyZW50QmxvYk1hcC5oYXMoaWQpKQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNwYXJlbnRCbG9iTWFwLmdldChpZCk7DQogICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsNCiAgICAgICAgICAgICAgICBvZmZzY3JlZW4uZ2V0Q29udGV4dCgnMmQnKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0geWllbGQgYmxvYi5hcnJheUJ1ZmZlcigpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7DQogICAgICAgICAgICAgICAgdHJhbnNwYXJlbnRCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZTY0Ow0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgZWxzZSB7DQogICAgICAgICAgICAgICAgcmV0dXJuICcnOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9KTsNCiAgICB9DQogICAgY29uc3Qgd29ya2VyID0gc2VsZjsNCiAgICB3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHsNCiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsNCiAgICAgICAgICAgIGlmICgnT2Zmc2NyZWVuQ2FudmFzJyBpbiBnbG9iYWxUaGlzKSB7DQogICAgICAgICAgICAgICAgY29uc3QgeyBpZCwgYml0bWFwLCB3aWR0aCwgaGVpZ2h0LCBkYXRhVVJMT3B0aW9ucyB9ID0gZS5kYXRhOw0KICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zKTsNCiAgICAgICAgICAgICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOw0KICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IG9mZnNjcmVlbi5nZXRDb250ZXh0KCcyZCcpOw0KICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoYml0bWFwLCAwLCAwKTsNCiAgICAgICAgICAgICAgICBiaXRtYXAuY2xvc2UoKTsNCiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgb2Zmc2NyZWVuLmNvbnZlcnRUb0Jsb2IoZGF0YVVSTE9wdGlvbnMpOw0KICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBibG9iLnR5cGU7DQogICAgICAgICAgICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSB5aWVsZCBibG9iLmFycmF5QnVmZmVyKCk7DQogICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0ID0gZW5jb2RlKGFycmF5QnVmZmVyKTsNCiAgICAgICAgICAgICAgICBpZiAoIWxhc3RCbG9iTWFwLmhhcyhpZCkgJiYgKHlpZWxkIHRyYW5zcGFyZW50QmFzZTY0KSA9PT0gYmFzZTY0KSB7DQogICAgICAgICAgICAgICAgICAgIGxhc3RCbG9iTWFwLnNldChpZCwgYmFzZTY0KTsNCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkIH0pOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7DQogICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHsNCiAgICAgICAgICAgICAgICAgICAgaWQsDQogICAgICAgICAgICAgICAgICAgIHR5cGUsDQogICAgICAgICAgICAgICAgICAgIGJhc2U2NCwNCiAgICAgICAgICAgICAgICAgICAgd2lkdGgsDQogICAgICAgICAgICAgICAgICAgIGhlaWdodCwNCiAgICAgICAgICAgICAgICB9KTsNCiAgICAgICAgICAgICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7DQogICAgICAgICAgICB9DQogICAgICAgICAgICBlbHNlIHsNCiAgICAgICAgICAgICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgfSk7DQogICAgfTsKCn0pKCk7Cgo=', null, false);

var CanvasManager = /*#__PURE__*/function () {
  function CanvasManager(options) {
    var _this = this;
    _classCallCheck(this, CanvasManager);
    this.pendingCanvasMutations = new Map();
    this.rafStamps = {
      latestId: 0,
      invokeId: null
    };
    this.frozen = false;
    this.locked = false;
    this.processMutation = function (target, mutation) {
      var newFrame = _this.rafStamps.invokeId && _this.rafStamps.latestId !== _this.rafStamps.invokeId;
      if (newFrame || !_this.rafStamps.invokeId) _this.rafStamps.invokeId = _this.rafStamps.latestId;
      if (!_this.pendingCanvasMutations.has(target)) {
        _this.pendingCanvasMutations.set(target, []);
      }
      _this.pendingCanvasMutations.get(target).push(mutation);
    };
    var _options$sampling = options.sampling,
      sampling = _options$sampling === void 0 ? 'all' : _options$sampling,
      win = options.win,
      blockClass = options.blockClass,
      blockSelector = options.blockSelector,
      recordCanvas = options.recordCanvas,
      dataURLOptions = options.dataURLOptions;
    this.mutationCb = options.mutationCb;
    this.mirror = options.mirror;
    if (recordCanvas && sampling === 'all') this.initCanvasMutationObserver(win, blockClass, blockSelector);
    if (recordCanvas && typeof sampling === 'number') this.initCanvasFPSObserver(sampling, win, blockClass, blockSelector, {
      dataURLOptions: dataURLOptions
    });
  }
  return _createClass(CanvasManager, [{
    key: "reset",
    value: function reset() {
      this.pendingCanvasMutations.clear();
      this.resetObservers && this.resetObservers();
    }
  }, {
    key: "freeze",
    value: function freeze() {
      this.frozen = true;
    }
  }, {
    key: "unfreeze",
    value: function unfreeze() {
      this.frozen = false;
    }
  }, {
    key: "lock",
    value: function lock() {
      this.locked = true;
    }
  }, {
    key: "unlock",
    value: function unlock() {
      this.locked = false;
    }
  }, {
    key: "initCanvasFPSObserver",
    value: function initCanvasFPSObserver(fps, win, blockClass, blockSelector, options) {
      var _this2 = this;
      var canvasContextReset = initCanvasContextObserver(win, blockClass, blockSelector);
      var snapshotInProgressMap = new Map();
      var worker = new WorkerFactory();
      worker.onmessage = function (e) {
        var id = e.data.id;
        snapshotInProgressMap.set(id, false);
        if (!('base64' in e.data)) return;
        var _e$data = e.data,
          base64 = _e$data.base64,
          type = _e$data.type,
          width = _e$data.width,
          height = _e$data.height;
        _this2.mutationCb({
          id: id,
          type: CanvasContext['2D'],
          commands: [{
            property: 'clearRect',
            args: [0, 0, width, height]
          }, {
            property: 'drawImage',
            args: [{
              rr_type: 'ImageBitmap',
              args: [{
                rr_type: 'Blob',
                data: [{
                  rr_type: 'ArrayBuffer',
                  base64: base64
                }],
                type: type
              }]
            }, 0, 0]
          }]
        });
      };
      var timeBetweenSnapshots = 1000 / fps;
      var lastSnapshotTime = 0;
      var rafId;
      var getCanvas = function getCanvas() {
        var matchedCanvas = [];
        win.document.querySelectorAll('canvas').forEach(function (canvas) {
          if (!isBlocked(canvas, blockClass, blockSelector, true)) {
            matchedCanvas.push(canvas);
          }
        });
        return matchedCanvas;
      };
      var _takeCanvasSnapshots = function takeCanvasSnapshots(timestamp) {
        if (lastSnapshotTime && timestamp - lastSnapshotTime < timeBetweenSnapshots) {
          rafId = requestAnimationFrame(_takeCanvasSnapshots);
          return;
        }
        lastSnapshotTime = timestamp;
        getCanvas().forEach(function (canvas) {
          return __awaiter(_this2, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
            var _a, id, context, bitmap;
            return _regenerator().w(function (_context) {
              while (1) switch (_context.n) {
                case 0:
                  id = this.mirror.getId(canvas);
                  if (!snapshotInProgressMap.get(id)) {
                    _context.n = 1;
                    break;
                  }
                  return _context.a(2);
                case 1:
                  snapshotInProgressMap.set(id, true);
                  if (['webgl', 'webgl2'].includes(canvas.__context)) {
                    context = canvas.getContext(canvas.__context);
                    if (((_a = context === null || context === void 0 ? void 0 : context.getContextAttributes()) === null || _a === void 0 ? void 0 : _a.preserveDrawingBuffer) === false) {
                      context === null || context === void 0 ? void 0 : context.clear(context.COLOR_BUFFER_BIT);
                    }
                  }
                  _context.n = 2;
                  return createImageBitmap(canvas);
                case 2:
                  bitmap = _context.v;
                  worker.postMessage({
                    id: id,
                    bitmap: bitmap,
                    width: canvas.width,
                    height: canvas.height,
                    dataURLOptions: options.dataURLOptions
                  }, [bitmap]);
                case 3:
                  return _context.a(2);
              }
            }, _callee, this);
          }));
        });
        rafId = requestAnimationFrame(_takeCanvasSnapshots);
      };
      rafId = requestAnimationFrame(_takeCanvasSnapshots);
      this.resetObservers = function () {
        canvasContextReset();
        cancelAnimationFrame(rafId);
      };
    }
  }, {
    key: "initCanvasMutationObserver",
    value: function initCanvasMutationObserver(win, blockClass, blockSelector) {
      this.startRAFTimestamping();
      this.startPendingCanvasMutationFlusher();
      var canvasContextReset = initCanvasContextObserver(win, blockClass, blockSelector);
      var canvas2DReset = initCanvas2DMutationObserver(this.processMutation.bind(this), win, blockClass, blockSelector);
      var canvasWebGL1and2Reset = initCanvasWebGLMutationObserver(this.processMutation.bind(this), win, blockClass, blockSelector, this.mirror);
      this.resetObservers = function () {
        canvasContextReset();
        canvas2DReset();
        canvasWebGL1and2Reset();
      };
    }
  }, {
    key: "startPendingCanvasMutationFlusher",
    value: function startPendingCanvasMutationFlusher() {
      var _this3 = this;
      requestAnimationFrame(function () {
        return _this3.flushPendingCanvasMutations();
      });
    }
  }, {
    key: "startRAFTimestamping",
    value: function startRAFTimestamping() {
      var _this4 = this;
      var _setLatestRAFTimestamp = function setLatestRAFTimestamp(timestamp) {
        _this4.rafStamps.latestId = timestamp;
        requestAnimationFrame(_setLatestRAFTimestamp);
      };
      requestAnimationFrame(_setLatestRAFTimestamp);
    }
  }, {
    key: "flushPendingCanvasMutations",
    value: function flushPendingCanvasMutations() {
      var _this5 = this;
      this.pendingCanvasMutations.forEach(function (values, canvas) {
        var id = _this5.mirror.getId(canvas);
        _this5.flushPendingCanvasMutationFor(canvas, id);
      });
      requestAnimationFrame(function () {
        return _this5.flushPendingCanvasMutations();
      });
    }
  }, {
    key: "flushPendingCanvasMutationFor",
    value: function flushPendingCanvasMutationFor(canvas, id) {
      if (this.frozen || this.locked) {
        return;
      }
      var valuesWithType = this.pendingCanvasMutations.get(canvas);
      if (!valuesWithType || id === -1) return;
      var values = valuesWithType.map(function (value) {
        var rest = __rest(value, ["type"]);
        return rest;
      });
      var type = valuesWithType[0].type;
      this.mutationCb({
        id: id,
        type: type,
        commands: values
      });
      this.pendingCanvasMutations["delete"](canvas);
    }
  }]);
}();

var StylesheetManager = /*#__PURE__*/function () {
  function StylesheetManager(options) {
    _classCallCheck(this, StylesheetManager);
    this.trackedLinkElements = new WeakSet();
    this.styleMirror = new StyleSheetMirror();
    this.mutationCb = options.mutationCb;
    this.adoptedStyleSheetCb = options.adoptedStyleSheetCb;
  }
  return _createClass(StylesheetManager, [{
    key: "attachLinkElement",
    value: function attachLinkElement(linkEl, childSn) {
      if ('_cssText' in childSn.attributes) this.mutationCb({
        adds: [],
        removes: [],
        texts: [],
        attributes: [{
          id: childSn.id,
          attributes: childSn.attributes
        }]
      });
      this.trackLinkElement(linkEl);
    }
  }, {
    key: "trackLinkElement",
    value: function trackLinkElement(linkEl) {
      if (this.trackedLinkElements.has(linkEl)) return;
      this.trackedLinkElements.add(linkEl);
      this.trackStylesheetInLinkElement(linkEl);
    }
  }, {
    key: "adoptStyleSheets",
    value: function adoptStyleSheets(sheets, hostId) {
      if (sheets.length === 0) return;
      var adoptedStyleSheetData = {
        id: hostId,
        styleIds: []
      };
      var styles = [];
      var _iterator = _createForOfIteratorHelper(sheets),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var sheet = _step.value;
          var styleId = void 0;
          if (!this.styleMirror.has(sheet)) {
            styleId = this.styleMirror.add(sheet);
            var rules = Array.from(sheet.rules || CSSRule);
            styles.push({
              styleId: styleId,
              rules: rules.map(function (r, index) {
                return {
                  rule: getCssRuleString(r),
                  index: index
                };
              })
            });
          } else styleId = this.styleMirror.getId(sheet);
          adoptedStyleSheetData.styleIds.push(styleId);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (styles.length > 0) adoptedStyleSheetData.styles = styles;
      this.adoptedStyleSheetCb(adoptedStyleSheetData);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.styleMirror.reset();
      this.trackedLinkElements = new WeakSet();
    }
  }, {
    key: "trackStylesheetInLinkElement",
    value: function trackStylesheetInLinkElement(linkEl) {}
  }]);
}();

function wrapEvent(e) {
  return Object.assign(Object.assign({}, e), {
    timestamp: Date.now()
  });
}
var wrappedEmit;
var takeFullSnapshot;
var canvasManager;
var recording = false;
var mirror = createMirror();
function record() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var emit = options.emit,
    checkoutEveryNms = options.checkoutEveryNms,
    checkoutEveryNth = options.checkoutEveryNth,
    _options$blockClass = options.blockClass,
    blockClass = _options$blockClass === void 0 ? 'rr-block' : _options$blockClass,
    _options$blockSelecto = options.blockSelector,
    blockSelector = _options$blockSelecto === void 0 ? null : _options$blockSelecto,
    _options$ignoreClass = options.ignoreClass,
    ignoreClass = _options$ignoreClass === void 0 ? 'rr-ignore' : _options$ignoreClass,
    _options$maskTextClas = options.maskTextClass,
    maskTextClass = _options$maskTextClas === void 0 ? 'rr-mask' : _options$maskTextClas,
    _options$maskTextSele = options.maskTextSelector,
    maskTextSelector = _options$maskTextSele === void 0 ? null : _options$maskTextSele,
    _options$inlineStyles = options.inlineStylesheet,
    inlineStylesheet = _options$inlineStyles === void 0 ? true : _options$inlineStyles,
    maskAllInputs = options.maskAllInputs,
    _maskInputOptions = options.maskInputOptions,
    _slimDOMOptions = options.slimDOMOptions,
    maskInputFn = options.maskInputFn,
    maskTextFn = options.maskTextFn,
    hooks = options.hooks,
    packFn = options.packFn,
    _options$sampling = options.sampling,
    sampling = _options$sampling === void 0 ? {} : _options$sampling,
    _options$dataURLOptio = options.dataURLOptions,
    dataURLOptions = _options$dataURLOptio === void 0 ? {} : _options$dataURLOptio,
    mousemoveWait = options.mousemoveWait,
    _options$recordCanvas = options.recordCanvas,
    recordCanvas = _options$recordCanvas === void 0 ? false : _options$recordCanvas,
    _options$recordCrossO = options.recordCrossOriginIframes,
    recordCrossOriginIframes = _options$recordCrossO === void 0 ? false : _options$recordCrossO,
    _options$userTriggere = options.userTriggeredOnInput,
    userTriggeredOnInput = _options$userTriggere === void 0 ? false : _options$userTriggere,
    _options$collectFonts = options.collectFonts,
    collectFonts = _options$collectFonts === void 0 ? false : _options$collectFonts,
    _options$inlineImages = options.inlineImages,
    inlineImages = _options$inlineImages === void 0 ? false : _options$inlineImages,
    plugins = options.plugins,
    _options$keepIframeSr = options.keepIframeSrcFn,
    keepIframeSrcFn = _options$keepIframeSr === void 0 ? function () {
      return false;
    } : _options$keepIframeSr,
    _options$ignoreCSSAtt = options.ignoreCSSAttributes,
    ignoreCSSAttributes = _options$ignoreCSSAtt === void 0 ? new Set([]) : _options$ignoreCSSAtt;
  var inEmittingFrame = recordCrossOriginIframes ? window.parent === window : true;
  var passEmitsToParent = false;
  if (!inEmittingFrame) {
    try {
      window.parent.document;
      passEmitsToParent = false;
    } catch (e) {
      passEmitsToParent = true;
    }
  }
  if (inEmittingFrame && !emit) {
    throw new Error('emit function is required');
  }
  if (mousemoveWait !== undefined && sampling.mousemove === undefined) {
    sampling.mousemove = mousemoveWait;
  }
  mirror.reset();
  var maskInputOptions = maskAllInputs === true ? {
    color: true,
    date: true,
    'datetime-local': true,
    email: true,
    month: true,
    number: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true,
    textarea: true,
    select: true,
    password: true
  } : _maskInputOptions !== undefined ? _maskInputOptions : {
    password: true
  };
  var slimDOMOptions = _slimDOMOptions === true || _slimDOMOptions === 'all' ? {
    script: true,
    comment: true,
    headFavicon: true,
    headWhitespace: true,
    headMetaSocial: true,
    headMetaRobots: true,
    headMetaHttpEquiv: true,
    headMetaVerification: true,
    headMetaAuthorship: _slimDOMOptions === 'all',
    headMetaDescKeywords: _slimDOMOptions === 'all'
  } : _slimDOMOptions ? _slimDOMOptions : {};
  polyfill();
  var lastFullSnapshotEvent;
  var incrementalSnapshotCount = 0;
  var eventProcessor = function eventProcessor(e) {
    var _iterator = _createForOfIteratorHelper(plugins || []),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var plugin = _step.value;
        if (plugin.eventProcessor) {
          e = plugin.eventProcessor(e);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (packFn) {
      e = packFn(e);
    }
    return e;
  };
  wrappedEmit = function wrappedEmit(e, isCheckout) {
    var _a;
    if (((_a = mutationBuffers[0]) === null || _a === void 0 ? void 0 : _a.isFrozen()) && e.type !== EventType.FullSnapshot && !(e.type === EventType.IncrementalSnapshot && e.data.source === IncrementalSource.Mutation)) {
      mutationBuffers.forEach(function (buf) {
        return buf.unfreeze();
      });
    }
    if (inEmittingFrame) {
      emit === null || emit === void 0 ? void 0 : emit(eventProcessor(e), isCheckout);
    } else if (passEmitsToParent) {
      var message = {
        type: 'rrweb',
        event: eventProcessor(e),
        isCheckout: isCheckout
      };
      window.parent.postMessage(message, '*');
    }
    if (e.type === EventType.FullSnapshot) {
      lastFullSnapshotEvent = e;
      incrementalSnapshotCount = 0;
    } else if (e.type === EventType.IncrementalSnapshot) {
      if (e.data.source === IncrementalSource.Mutation && e.data.isAttachIframe) {
        return;
      }
      incrementalSnapshotCount++;
      var exceedCount = checkoutEveryNth && incrementalSnapshotCount >= checkoutEveryNth;
      var exceedTime = checkoutEveryNms && e.timestamp - lastFullSnapshotEvent.timestamp > checkoutEveryNms;
      if (exceedCount || exceedTime) {
        takeFullSnapshot(true);
      }
    }
  };
  var wrappedMutationEmit = function wrappedMutationEmit(m) {
    wrappedEmit(wrapEvent({
      type: EventType.IncrementalSnapshot,
      data: Object.assign({
        source: IncrementalSource.Mutation
      }, m)
    }));
  };
  var wrappedScrollEmit = function wrappedScrollEmit(p) {
    return wrappedEmit(wrapEvent({
      type: EventType.IncrementalSnapshot,
      data: Object.assign({
        source: IncrementalSource.Scroll
      }, p)
    }));
  };
  var wrappedCanvasMutationEmit = function wrappedCanvasMutationEmit(p) {
    return wrappedEmit(wrapEvent({
      type: EventType.IncrementalSnapshot,
      data: Object.assign({
        source: IncrementalSource.CanvasMutation
      }, p)
    }));
  };
  var wrappedAdoptedStyleSheetEmit = function wrappedAdoptedStyleSheetEmit(a) {
    return wrappedEmit(wrapEvent({
      type: EventType.IncrementalSnapshot,
      data: Object.assign({
        source: IncrementalSource.AdoptedStyleSheet
      }, a)
    }));
  };
  var stylesheetManager = new StylesheetManager({
    mutationCb: wrappedMutationEmit,
    adoptedStyleSheetCb: wrappedAdoptedStyleSheetEmit
  });
  var iframeManager = new IframeManager({
    mirror: mirror,
    mutationCb: wrappedMutationEmit,
    stylesheetManager: stylesheetManager,
    recordCrossOriginIframes: recordCrossOriginIframes,
    wrappedEmit: wrappedEmit
  });
  var _iterator2 = _createForOfIteratorHelper(plugins || []),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var plugin = _step2.value;
      if (plugin.getMirror) plugin.getMirror({
        nodeMirror: mirror,
        crossOriginIframeMirror: iframeManager.crossOriginIframeMirror,
        crossOriginIframeStyleMirror: iframeManager.crossOriginIframeStyleMirror
      });
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  canvasManager = new CanvasManager({
    recordCanvas: recordCanvas,
    mutationCb: wrappedCanvasMutationEmit,
    win: window,
    blockClass: blockClass,
    blockSelector: blockSelector,
    mirror: mirror,
    sampling: sampling.canvas,
    dataURLOptions: dataURLOptions
  });
  var shadowDomManager = new ShadowDomManager({
    mutationCb: wrappedMutationEmit,
    scrollCb: wrappedScrollEmit,
    bypassOptions: {
      blockClass: blockClass,
      blockSelector: blockSelector,
      maskTextClass: maskTextClass,
      maskTextSelector: maskTextSelector,
      inlineStylesheet: inlineStylesheet,
      maskInputOptions: maskInputOptions,
      dataURLOptions: dataURLOptions,
      maskTextFn: maskTextFn,
      maskInputFn: maskInputFn,
      recordCanvas: recordCanvas,
      inlineImages: inlineImages,
      sampling: sampling,
      slimDOMOptions: slimDOMOptions,
      iframeManager: iframeManager,
      stylesheetManager: stylesheetManager,
      canvasManager: canvasManager,
      keepIframeSrcFn: keepIframeSrcFn
    },
    mirror: mirror
  });
  takeFullSnapshot = function takeFullSnapshot() {
    var isCheckout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var _a, _b, _c, _d, _e, _f;
    wrappedEmit(wrapEvent({
      type: EventType.Meta,
      data: {
        href: window.location.href,
        width: getWindowWidth(),
        height: getWindowHeight()
      }
    }), isCheckout);
    stylesheetManager.reset();
    mutationBuffers.forEach(function (buf) {
      return buf.lock();
    });
    var node = snapshot(document, {
      mirror: mirror,
      blockClass: blockClass,
      blockSelector: blockSelector,
      maskTextClass: maskTextClass,
      maskTextSelector: maskTextSelector,
      inlineStylesheet: inlineStylesheet,
      maskAllInputs: maskInputOptions,
      maskTextFn: maskTextFn,
      slimDOM: slimDOMOptions,
      dataURLOptions: dataURLOptions,
      recordCanvas: recordCanvas,
      inlineImages: inlineImages,
      onSerialize: function onSerialize(n) {
        if (isSerializedIframe(n, mirror)) {
          iframeManager.addIframe(n);
        }
        if (isSerializedStylesheet(n, mirror)) {
          stylesheetManager.trackLinkElement(n);
        }
        if (hasShadowRoot(n)) {
          shadowDomManager.addShadowRoot(n.shadowRoot, document);
        }
      },
      onIframeLoad: function onIframeLoad(iframe, childSn) {
        iframeManager.attachIframe(iframe, childSn);
        shadowDomManager.observeAttachShadow(iframe);
      },
      onStylesheetLoad: function onStylesheetLoad(linkEl, childSn) {
        stylesheetManager.attachLinkElement(linkEl, childSn);
      },
      keepIframeSrcFn: keepIframeSrcFn
    });
    if (!node) {
      return console.warn('Failed to snapshot the document');
    }
    wrappedEmit(wrapEvent({
      type: EventType.FullSnapshot,
      data: {
        node: node,
        initialOffset: {
          left: window.pageXOffset !== undefined ? window.pageXOffset : (document === null || document === void 0 ? void 0 : document.documentElement.scrollLeft) || ((_b = (_a = document === null || document === void 0 ? void 0 : document.body) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.scrollLeft) || ((_c = document === null || document === void 0 ? void 0 : document.body) === null || _c === void 0 ? void 0 : _c.scrollLeft) || 0,
          top: window.pageYOffset !== undefined ? window.pageYOffset : (document === null || document === void 0 ? void 0 : document.documentElement.scrollTop) || ((_e = (_d = document === null || document === void 0 ? void 0 : document.body) === null || _d === void 0 ? void 0 : _d.parentElement) === null || _e === void 0 ? void 0 : _e.scrollTop) || ((_f = document === null || document === void 0 ? void 0 : document.body) === null || _f === void 0 ? void 0 : _f.scrollTop) || 0
        }
      }
    }));
    mutationBuffers.forEach(function (buf) {
      return buf.unlock();
    });
    if (document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0) stylesheetManager.adoptStyleSheets(document.adoptedStyleSheets, mirror.getId(document));
  };
  try {
    var handlers = [];
    handlers.push(on('DOMContentLoaded', function () {
      wrappedEmit(wrapEvent({
        type: EventType.DomContentLoaded,
        data: {}
      }));
    }));
    var observe = function observe(doc) {
      var _a;
      return initObservers({
        mutationCb: wrappedMutationEmit,
        mousemoveCb: function mousemoveCb(positions, source) {
          return wrappedEmit(wrapEvent({
            type: EventType.IncrementalSnapshot,
            data: {
              source: source,
              positions: positions
            }
          }));
        },
        mouseInteractionCb: function mouseInteractionCb(d) {
          return wrappedEmit(wrapEvent({
            type: EventType.IncrementalSnapshot,
            data: Object.assign({
              source: IncrementalSource.MouseInteraction
            }, d)
          }));
        },
        scrollCb: wrappedScrollEmit,
        viewportResizeCb: function viewportResizeCb(d) {
          return wrappedEmit(wrapEvent({
            type: EventType.IncrementalSnapshot,
            data: Object.assign({
              source: IncrementalSource.ViewportResize
            }, d)
          }));
        },
        inputCb: function inputCb(v) {
          return wrappedEmit(wrapEvent({
            type: EventType.IncrementalSnapshot,
            data: Object.assign({
              source: IncrementalSource.Input
            }, v)
          }));
        },
        mediaInteractionCb: function mediaInteractionCb(p) {
          return wrappedEmit(wrapEvent({
            type: EventType.IncrementalSnapshot,
            data: Object.assign({
              source: IncrementalSource.MediaInteraction
            }, p)
          }));
        },
        styleSheetRuleCb: function styleSheetRuleCb(r) {
          return wrappedEmit(wrapEvent({
            type: EventType.IncrementalSnapshot,
            data: Object.assign({
              source: IncrementalSource.StyleSheetRule
            }, r)
          }));
        },
        styleDeclarationCb: function styleDeclarationCb(r) {
          return wrappedEmit(wrapEvent({
            type: EventType.IncrementalSnapshot,
            data: Object.assign({
              source: IncrementalSource.StyleDeclaration
            }, r)
          }));
        },
        canvasMutationCb: wrappedCanvasMutationEmit,
        fontCb: function fontCb(p) {
          return wrappedEmit(wrapEvent({
            type: EventType.IncrementalSnapshot,
            data: Object.assign({
              source: IncrementalSource.Font
            }, p)
          }));
        },
        selectionCb: function selectionCb(p) {
          wrappedEmit(wrapEvent({
            type: EventType.IncrementalSnapshot,
            data: Object.assign({
              source: IncrementalSource.Selection
            }, p)
          }));
        },
        blockClass: blockClass,
        ignoreClass: ignoreClass,
        maskTextClass: maskTextClass,
        maskTextSelector: maskTextSelector,
        maskInputOptions: maskInputOptions,
        inlineStylesheet: inlineStylesheet,
        sampling: sampling,
        recordCanvas: recordCanvas,
        inlineImages: inlineImages,
        userTriggeredOnInput: userTriggeredOnInput,
        collectFonts: collectFonts,
        doc: doc,
        maskInputFn: maskInputFn,
        maskTextFn: maskTextFn,
        keepIframeSrcFn: keepIframeSrcFn,
        blockSelector: blockSelector,
        slimDOMOptions: slimDOMOptions,
        dataURLOptions: dataURLOptions,
        mirror: mirror,
        iframeManager: iframeManager,
        stylesheetManager: stylesheetManager,
        shadowDomManager: shadowDomManager,
        canvasManager: canvasManager,
        ignoreCSSAttributes: ignoreCSSAttributes,
        plugins: ((_a = plugins === null || plugins === void 0 ? void 0 : plugins.filter(function (p) {
          return p.observer;
        })) === null || _a === void 0 ? void 0 : _a.map(function (p) {
          return {
            observer: p.observer,
            options: p.options,
            callback: function callback(payload) {
              return wrappedEmit(wrapEvent({
                type: EventType.Plugin,
                data: {
                  plugin: p.name,
                  payload: payload
                }
              }));
            }
          };
        })) || []
      }, hooks);
    };
    iframeManager.addLoadListener(function (iframeEl) {
      handlers.push(observe(iframeEl.contentDocument));
    });
    var init = function init() {
      takeFullSnapshot();
      handlers.push(observe(document));
      recording = true;
    };
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
      init();
    } else {
      handlers.push(on('load', function () {
        wrappedEmit(wrapEvent({
          type: EventType.Load,
          data: {}
        }));
        init();
      }, window));
    }
    return function () {
      handlers.forEach(function (h) {
        return h();
      });
      recording = false;
    };
  } catch (error) {
    console.warn(error);
  }
}
record.addCustomEvent = function (tag, payload) {
  if (!recording) {
    throw new Error('please add custom event after start recording');
  }
  wrappedEmit(wrapEvent({
    type: EventType.Custom,
    data: {
      tag: tag,
      payload: payload
    }
  }));
};
record.freezePage = function () {
  mutationBuffers.forEach(function (buf) {
    return buf.freeze();
  });
};
record.takeFullSnapshot = function (isCheckout) {
  if (!recording) {
    throw new Error('please take full snapshot after start recording');
  }
  takeFullSnapshot(isCheckout);
};
record.mirror = mirror;

var eventsMatrix = [[]];
var stopRecord = null;
function start() {
  // 重置状态
  eventsMatrix = [[]];

  // 开始录制
  stopRecord = record({
    emit: function emit(event, isCheckout) {
      // isCheckout 是一个标识，告诉你重新制作了快照
      // isCheckout is a flag to tell you the events has been checkout
      if (isCheckout) {
        eventsMatrix.push([]);
      }
      var lastEvents = eventsMatrix[eventsMatrix.length - 1];
      lastEvents.push(event);
    },
    checkoutEveryNms: 10 * 1000 // 每 1s 重新制作快照
    // checkoutEveryNth: 200, // 每 200 个 event 重新制作快照
  });
}
function stop(data) {
  var _data$sdk = data.sdk,
    sdk = _data$sdk === void 0 ? null : _data$sdk;
  if (!stopRecord) return;
  // 停止录制
  stopRecord();
  stopRecord = null;
  sdk === null || sdk === void 0 || sdk.capture("rrweb", {
    type: "rrweb",
    events: JSON.stringify(eventsMatrix[eventsMatrix.length - 2] ? eventsMatrix[eventsMatrix.length - 2].concat(eventsMatrix[eventsMatrix.length - 1]) : eventsMatrix[eventsMatrix.length - 1])
  });
  sdk.emit(SESSIONID_REFRESH_EVENT, generateSessionId());
  start();
}

var ErrorTrackingPlugin = /*#__PURE__*/function (_EventBus) {
  function ErrorTrackingPlugin() {
    var _this;
    _classCallCheck(this, ErrorTrackingPlugin);
    _this = _callSuper(this, ErrorTrackingPlugin);
    _defineProperty(_this, "name", 'errorTracking');
    _defineProperty(_this, "slowRequestThreshold", 3000);
    // 慢请求阈值
    _defineProperty(_this, "sdk", null);
    _this.on(RRWEB_RECORD_START_EVENT, start);
    _this.on(RRWEB_RECORD_STOP_EVENT, stop);
    _this.emit(RRWEB_RECORD_START_EVENT);
    return _this;
  }
  _inherits(ErrorTrackingPlugin, _EventBus);
  return _createClass(ErrorTrackingPlugin, [{
    key: "install",
    value: function install(sdk) {
      var _this2 = this;
      this.sdk = sdk;
      {
        var _window$__MONITOR_BOO;
        // console.log("inline 预埋脚本采集的数据:", window.__MONITOR_BOOT__ ?? window.__MONITOR_BOOT__.logs);
        ((_window$__MONITOR_BOO = window.__MONITOR_BOOT__) !== null && _window$__MONITOR_BOO !== void 0 ? _window$__MONITOR_BOO : []).forEach(function (event) {
          return _this2.windowErrorTracking(event);
        });
      }
      {
        // 监听全局错误
        // JS 执行错误（语法错误、运行时错误）
        // 资源加载错误（图片、脚本、样式等）
        // 不能捕获 Promise 错误
        window.addEventListener("error", this.windowErrorTracking.bind(this), true);
      }
      {
        // 监听未处理的Promise拒绝
        window.addEventListener("unhandledrejection", this.unhandledRejectionTracking.bind(this));
      }
      this.xHRErrorTracking();
      this.fetchErrorTracking();
    }

    // 
  }, {
    key: "uninstall",
    value: function uninstall() {
      window.removeEventListener("error", this.windowErrorTracking.bind(this), true);
      window.removeEventListener("unhandledrejection", this.unhandledRejectionTracking.bind(this));
      this.off(RRWEB_RECORD_START_EVENT);
      this.off(RRWEB_RECORD_STOP_EVENT);
    }
  }, {
    key: "windowErrorTracking",
    value: function windowErrorTracking(event) {
      var message = event.message,
        filename = event.filename,
        lineno = event.lineno,
        colno = event.colno,
        error = event.error;

      // 判断错误类型
      var errorType = "js";
      var errorData = {};
      // let severity = "high";

      // 判断是否为资源加载错误
      if (event.target && (event.target.tagName === "IMG" || event.target.tagName === "SCRIPT" || event.target.tagName === "LINK" || event.target.tagName === "VIDEO" || event.target.tagName === "AUDIO")) {
        errorType = "resource";
        // severity = "medium";
        errorData = {
          type: errorType,
          /**
           * tagName src href 加载资源时有效
           */
          tagName: event.target.tagName || "",
          src: event.target.src || "",
          href: event.target.href || ""
        };
      }

      // 判断是否为跨域脚本错误
      if (message && message.includes("Script error")) {
        errorType = "cross-origin";
        console.warn('跨域脚本内部错误，可能缺少 CORS 或 crossorigin 配置');
        // severity = "medium";
        errorData = {
          type: errorType,
          // severity: severity, // 错误优先级
          message: message || "Unknown error",
          filename: filename || "Unknown file",
          lineno: lineno || 0,
          colno: colno || 0,
          stack: error ? error.stack : ""
        };
      }
      if (errorType === "js") {
        errorData = {
          type: errorType,
          // severity: severity, // 错误优先级
          message: message || "Unknown error",
          filename: filename || "Unknown file",
          lineno: lineno || 0,
          colno: colno || 0,
          stack: error ? error.stack : ""
        };
      }
      this.sdk.capture(this.name, errorData);
      if (errorType === "js") {
        this.emit(RRWEB_RECORD_STOP_EVENT, {
          sdk: this.sdk
        });
      }
      // 阻止默认错误处理（避免控制台重复显示）
      event.preventDefault();
    }

    // 处理未处理的Promise拒绝
    // ✅最佳实践：强制将所有错误对象转换为 Error 对象
  }, {
    key: "unhandledRejectionTracking",
    value: function unhandledRejectionTracking(event) {
      var reason = event.reason;
      var message = "";
      var stack = "";
      var line = 0;
      var column = 0;
      var filename = "";
      if (reason instanceof Error) {
        message = reason.message;
      } else {
        message = reason;
      }
      if (reason instanceof Error) {
        if (reason.stack) {
          var matchResult = reason.stack.match(/at\s+(.+):(\d+):(\d+)/);
          if (matchResult) {
            filename = matchResult[1];
            line = matchResult[2];
            column = matchResult[3];
          }
          // stack = getLines(reason.stack);
          stack = reason.stack;
        }
      }
      // console.log("promise event:", message, stack, filename, line, column);

      var errorData = {
        type: "promise",
        // severity: "high",

        // Promise.reject(new Error("something broke")); 
        // reject new Error 时，event 对象的 reson 属性为 object{message: "something broke", stack: "..."}
        // Promise.reject(xxxx); reject 非 Error 对象时，event 对象的 reson 属性为 xxxx
        message: message,
        stack: stack,
        filename: filename,
        lineno: line,
        colno: column
      };
      this.sdk.capture(this.name, errorData);

      // 阻止默认错误处理
      event.preventDefault();
    }

    /**
     * 拦截XMLHttpRequest
     * 重写XMLHttpRequest可以监控到axios的请求，因为axios在浏览器环境中是基于XMLHttpRequest实现的
     * （axios在浏览器端使用XMLHttpRequest，在Node.js中使用http模块）。
     * 但是，axios也可能使用fetch（如果配置了fetch选项，但默认不启用）。
     * */
  }, {
    key: "xHRErrorTracking",
    value: function xHRErrorTracking() {
      var self = this;
      var OriginalXHR = window.XMLHttpRequest;
      window.XMLHttpRequest = function () {
        var xhr = new OriginalXHR();

        // 保存原始方法
        var originalOpen = xhr.open;
        var originalSend = xhr.send;
        var method, url;

        // 拦截open方法
        xhr.open = function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          method = args[0];
          url = args[1];
          return originalOpen.apply(this, args);
        };

        // 拦截send方法
        xhr.send = function () {
          var _JSON$parse;
          var startTime = performance.now(); // 毫秒，带小数
          /**
           *  axios
                  .post("http://127.0.0.1:8080/monitor/test1", {
                  __skipMonitor: true,
                  })
                  .then((response) => {
                  console.log("输出返回的数据:", response.data); // 输出返回的数据
                  })
                  .catch((error) => {
                  console.error("请求出错：", error);
                  });
              
              const xhr = new XMLHttpRequest();
              xhr.open("POST", "http://127.0.0.1:8080/monitor/test1");
              xhr.send(
                  JSON.stringify({
                  __skipMonitor: true,
                  })
              );
           */
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          var __skipMonitor = (_JSON$parse = JSON.parse(args[0] || "{}")) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.__skipMonitor;
          // console.log("xhr this:", args[0], __skipMonitor);
          // 监听加载完成
          xhr.addEventListener("load", function () {
            var duration = performance.now() - startTime;
            if (!__skipMonitor && (xhr.status >= 400 ||
            // 超出慢请求阈值
            self.slowRequestThreshold <= duration)) {
              var errorData = {
                type: "ajax",
                // severity: xhr.status >= 500 ? "high" : "medium",
                message: "\u6162\u8BF7\u6C42\uFF1AHTTP ".concat(xhr.status, " ").concat(xhr.statusText),
                url: url,
                method: method,
                status: xhr.status,
                // response: xhr.responseText,
                duration: duration
              };
              self.sdk.capture(self.name, errorData);
            }
          });

          // 监听错误
          xhr.addEventListener("error", function () {
            var errorData = {
              type: "ajax",
              // severity: "critical",
              message: "网络请求失败",
              url: url,
              method: method,
              status: xhr.status || 0
            };
            if (!__skipMonitor) {
              self.sdk.capture(self.name, errorData);
            }
          });

          // 监听超时
          xhr.addEventListener("timeout", function () {
            var duration = performance.now() - startTime;
            var errorData = {
              type: "ajax",
              // severity: "high",
              message: "请求超时",
              url: url,
              method: method,
              status: xhr.status || 0,
              duration: duration
            };
            if (!__skipMonitor) {
              self.sdk.capture(self.name, errorData);
            }
          });
          return originalSend.apply(this, args);
        };
        return xhr;
      };
    }

    // 拦截fetch API
  }, {
    key: "fetchErrorTracking",
    value: function fetchErrorTracking() {
      var self = this;
      var originalFetch = window.fetch;
      window.fetch = function () {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }
        var url = args[0];
        var options = args[1] || {};
        /**
         *  @description 跳过数据上报请求
        fetch("http://127.0.0.1:8080/monitor/test1", {
            method: "POST",
            __skipMonitor: true,
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
         */
        var __skipMonitor = options.__skipMonitor;
        var method = options.method || "GET";
        var startTime = performance.now();
        return originalFetch.apply(this, args).then(function (response) {
          var duration = performance.now() - startTime;
          if (!__skipMonitor && (!response.ok || self.slowRequestThreshold <= duration)) {
            var errorData = {
              type: "fetch",
              // severity: response.status >= 500 ? "high" : "medium",
              message: "\u6162\u8BF7\u6C42\uFF1AHTTP ".concat(response.status, " ").concat(response.statusText),
              url: url,
              method: method,
              status: response.status,
              duration: duration
            };
            self.sdk.capture(self.name, errorData);
          }
          return response;
        })["catch"](function (error) {
          var errorData = {
            type: "fetch",
            // severity: "critical",
            message: error.message,
            url: url,
            method: method,
            status: 0
          };
          if (!__skipMonitor) {
            self.sdk.capture(self.name, errorData);
          }
          throw error;
        });
      };
    }
  }]);
}(EventBus);

/**
 * 获取唯一 ID
 */
function genRandomUUID() {
  var _crypto;
  return (_crypto = crypto) !== null && _crypto !== void 0 && _crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
}

var e = function e() {
    var t = performance.getEntriesByType("navigation")[0];
    if (t && t.responseStart > 0 && t.responseStart < performance.now()) return t;
  },
  n = function n(t) {
    if ("loading" === document.readyState) return "loading";
    {
      var _n = e();
      if (_n) {
        if (t < _n.domInteractive) return "loading";
        if (0 === _n.domContentLoadedEventStart || t < _n.domContentLoadedEventStart) return "dom-interactive";
        if (0 === _n.domComplete || t < _n.domComplete) return "dom-content-loaded";
      }
    }
    return "complete";
  },
  o = function o(t) {
    var e = t.nodeName;
    return 1 === t.nodeType ? e.toLowerCase() : e.toUpperCase().replace(/^#/, "");
  },
  i = function i(t) {
    var e = "";
    try {
      for (; 9 !== ((_t3 = t) === null || _t3 === void 0 ? void 0 : _t3.nodeType);) {
        var _t3;
        var _n2 = t,
          _i = _n2.id ? "#" + _n2.id : [o(_n2)].concat(_toConsumableArray(Array.from(_n2.classList).sort())).join(".");
        if (e.length + _i.length > 99) return e || _i;
        if (e = e ? _i + ">" + e : _i, _n2.id) break;
        t = _n2.parentNode;
      }
    } catch (_unused) {}
    return e;
  },
  r = new WeakMap();
function s(t, e) {
  return r.get(t) || r.set(t, new e()), r.get(t);
}
var a = -1;
var c = function c() {
    return a;
  },
  f = function f(t) {
    addEventListener("pageshow", function (e) {
      e.persisted && (a = e.timeStamp, t(e));
    }, !0);
  },
  u = function u(t, e, n, o) {
    var i, r;
    return function (s) {
      e.value >= 0 && (s || o) && (r = e.value - (i !== null && i !== void 0 ? i : 0), (r || void 0 === i) && (i = e.value, e.delta = r, e.rating = function (t, e) {
        return t > e[1] ? "poor" : t > e[0] ? "needs-improvement" : "good";
      }(e.value, n), t(e)));
    };
  },
  d = function d(t) {
    requestAnimationFrame(function () {
      return requestAnimationFrame(function () {
        return t();
      });
    });
  },
  l = function l() {
    var _t$activationStart;
    var t = e();
    return (_t$activationStart = t === null || t === void 0 ? void 0 : t.activationStart) !== null && _t$activationStart !== void 0 ? _t$activationStart : 0;
  },
  h = function h(t) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
    var o = e();
    var i = "navigate";
    c() >= 0 ? i = "back-forward-cache" : o && (document.prerendering || l() > 0 ? i = "prerender" : document.wasDiscarded ? i = "restore" : o.type && (i = o.type.replace(/_/g, "-")));
    return {
      name: t,
      value: n,
      rating: "good",
      delta: 0,
      entries: [],
      id: "v5-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
      navigationType: i
    };
  },
  m = function m(t, e) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(t)) {
        var _o = new PerformanceObserver(function (t) {
          Promise.resolve().then(function () {
            e(t.getEntries());
          });
        });
        return _o.observe(_objectSpread2({
          type: t,
          buffered: !0
        }, n)), _o;
      }
    } catch (_unused2) {}
  },
  p = function p(t) {
    var e = !1;
    return function () {
      e || (t(), e = !0);
    };
  };
var g = -1;
var y = new Set(),
  v = function v() {
    return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0;
  },
  _b = function b(t) {
    if ("hidden" === document.visibilityState) {
      if ("visibilitychange" === t.type) {
        var _iterator = _createForOfIteratorHelper(y),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _t4 = _step.value;
            _t4();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      isFinite(g) || (g = "visibilitychange" === t.type ? t.timeStamp : 0, removeEventListener("prerenderingchange", _b, !0));
    }
  },
  M = function M() {
    if (g < 0) {
      var _globalThis$performan;
      var _t5 = l(),
        _e = document.prerendering ? void 0 : (_globalThis$performan = globalThis.performance.getEntriesByType("visibility-state").filter(function (e) {
          return "hidden" === e.name && e.startTime > _t5;
        })[0]) === null || _globalThis$performan === void 0 ? void 0 : _globalThis$performan.startTime;
      g = _e !== null && _e !== void 0 ? _e : v(), addEventListener("visibilitychange", _b, !0), addEventListener("prerenderingchange", _b, !0), f(function () {
        setTimeout(function () {
          g = v();
        });
      });
    }
    return {
      get firstHiddenTime() {
        return g;
      },
      onHidden: function onHidden(t) {
        y.add(t);
      }
    };
  },
  T = function T(t) {
    document.prerendering ? addEventListener("prerenderingchange", function () {
      return t();
    }, !0) : t();
  },
  E = [1800, 3e3],
  D = function D(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    T(function () {
      var n = M();
      var o,
        i = h("FCP");
      var r = m("paint", function (t) {
        var _iterator2 = _createForOfIteratorHelper(t),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _e2 = _step2.value;
            "first-contentful-paint" === _e2.name && (r.disconnect(), _e2.startTime < n.firstHiddenTime && (i.value = Math.max(_e2.startTime - l(), 0), i.entries.push(_e2), o(!0)));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      });
      r && (o = u(t, i, E, e.reportAllChanges), f(function (n) {
        i = h("FCP"), o = u(t, i, E, e.reportAllChanges), d(function () {
          i.value = performance.now() - n.timeStamp, o(!0);
        });
      }));
    });
  },
  w = function w(t) {
    var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    D(function (o) {
      var i = function (t) {
        var o = {
          timeToFirstByte: 0,
          firstByteToFCP: t.value,
          loadState: n(c())
        };
        if (t.entries.length) {
          var _i2 = e(),
            _r = t.entries.at(-1);
          if (_i2) {
            var _e5 = _i2.activationStart || 0,
              _s = Math.max(0, _i2.responseStart - _e5);
            o = {
              timeToFirstByte: _s,
              firstByteToFCP: t.value - _s,
              loadState: n(t.entries[0].startTime),
              navigationEntry: _i2,
              fcpEntry: _r
            };
          }
        }
        return Object.assign(t, {
          attribution: o
        });
      }(o);
      t(i);
    }, o);
  };
var _ = 0,
  F = 1 / 0,
  k = 0;
var B = function B(t) {
  var _iterator4 = _createForOfIteratorHelper(t),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _e6 = _step4.value;
      _e6.interactionId && (F = Math.min(F, _e6.interactionId), k = Math.max(k, _e6.interactionId), _ = k ? (k - F) / 7 + 1 : 0);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
};
var C;
var O = function O() {
    var _performance$interact;
    return C ? _ : (_performance$interact = performance.interactionCount) !== null && _performance$interact !== void 0 ? _performance$interact : 0;
  },
  j = function j() {
    "interactionCount" in performance || C || (C = m("event", B, {
      type: "event",
      buffered: !0,
      durationThreshold: 0
    }));
  };
var I = 0;
var A = /*#__PURE__*/function () {
  function A() {
    _classCallCheck(this, A);
    _defineProperty(this, "l", []);
    _defineProperty(this, "h", new Map());
    _defineProperty(this, "m", void 0);
    _defineProperty(this, "p", void 0);
  }
  return _createClass(A, [{
    key: "v",
    value: function v() {
      I = O(), this.l.length = 0, this.h.clear();
    }
  }, {
    key: "M",
    value: function M() {
      var t = Math.min(this.l.length - 1, Math.floor((O() - I) / 50));
      return this.l[t];
    }
  }, {
    key: "u",
    value: function u(t) {
      var _this$m;
      if ((_this$m = this.m) !== null && _this$m !== void 0 && _this$m.call(this, t), !t.interactionId && "first-input" !== t.entryType) return;
      var e = this.l.at(-1);
      var n = this.h.get(t.interactionId);
      if (n || this.l.length < 10 || t.duration > e.T) {
        var _this$p;
        if (n ? t.duration > n.T ? (n.entries = [t], n.T = t.duration) : t.duration === n.T && t.startTime === n.entries[0].startTime && n.entries.push(t) : (n = {
          id: t.interactionId,
          entries: [t],
          T: t.duration
        }, this.h.set(n.id, n), this.l.push(n)), this.l.sort(function (t, e) {
          return e.T - t.T;
        }), this.l.length > 10) {
          var _t8 = this.l.splice(10);
          var _iterator5 = _createForOfIteratorHelper(_t8),
            _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var _e7 = _step5.value;
              this.h["delete"](_e7.id);
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
        (_this$p = this.p) === null || _this$p === void 0 || _this$p.call(this, n);
      }
    }
  }]);
}();
var W = function W(t) {
    var e = globalThis.requestIdleCallback || setTimeout;
    "hidden" === document.visibilityState ? t() : (t = p(t), addEventListener("visibilitychange", t, {
      once: !0,
      capture: !0
    }), e(function () {
      t(), removeEventListener("visibilitychange", t, {
        capture: !0
      });
    }));
  },
  q = [200, 500],
  x = function x(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var o = s(e = Object.assign({}, e), A);
    var r = [],
      a = [],
      c = 0;
    var d = new WeakMap(),
      l = new WeakMap();
    var p = !1;
    var g = function g() {
        p || (W(y), p = !0);
      },
      y = function y() {
        var t = o.l.map(function (t) {
            return d.get(t.entries[0]);
          }),
          e = a.length - 50;
        a = a.filter(function (n, o) {
          return o >= e || t.includes(n);
        });
        var n = new Set();
        var _iterator6 = _createForOfIteratorHelper(a),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _t9 = _step6.value;
            var _e8 = v(_t9.startTime, _t9.processingEnd);
            var _iterator7 = _createForOfIteratorHelper(_e8),
              _step7;
            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var _t0 = _step7.value;
                n.add(_t0);
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        var i = r.length - 1 - 50;
        r = r.filter(function (t, e) {
          return t.startTime > c && e > i || n.has(t);
        }), p = !1;
      };
    o.m = function (t) {
      var e = t.startTime + t.duration;
      var n;
      c = Math.max(c, t.processingEnd);
      for (var _o4 = a.length - 1; _o4 >= 0; _o4--) {
        var _i3 = a[_o4];
        if (Math.abs(e - _i3.renderTime) <= 8) {
          n = _i3, n.startTime = Math.min(t.startTime, n.startTime), n.processingStart = Math.min(t.processingStart, n.processingStart), n.processingEnd = Math.max(t.processingEnd, n.processingEnd), n.entries.push(t);
          break;
        }
      }
      n || (n = {
        startTime: t.startTime,
        processingStart: t.processingStart,
        processingEnd: t.processingEnd,
        renderTime: e,
        entries: [t]
      }, a.push(n)), (t.interactionId || "first-input" === t.entryType) && d.set(t, n), g();
    }, o.p = function (t) {
      if (!l.get(t)) {
        var _n4 = t.entries[0].target;
        if (_n4) {
          var _e$generateTarget, _e$generateTarget2, _e9;
          var _o5 = (_e$generateTarget = (_e$generateTarget2 = (_e9 = e).generateTarget) === null || _e$generateTarget2 === void 0 ? void 0 : _e$generateTarget2.call(_e9, _n4)) !== null && _e$generateTarget !== void 0 ? _e$generateTarget : i(_n4);
          l.set(t, _o5);
        }
      }
    };
    var v = function v(t, e) {
        var n = [];
        var _iterator8 = _createForOfIteratorHelper(r),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _o6 = _step8.value;
            if (!(_o6.startTime + _o6.duration < t)) {
              if (_o6.startTime > e) break;
              n.push(_o6);
            }
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
        return n;
      },
      b = function b(t) {
        var e = t.entries[0],
          i = d.get(e),
          r = e.processingStart,
          s = Math.max(e.startTime + e.duration, r),
          a = Math.min(i.processingEnd, s),
          c = i.entries.sort(function (t, e) {
            return t.processingStart - e.processingStart;
          }),
          f = v(e.startTime, a),
          u = o.h.get(e.interactionId),
          h = {
            interactionTarget: l.get(u),
            interactionType: e.name.startsWith("key") ? "keyboard" : "pointer",
            interactionTime: e.startTime,
            nextPaintTime: s,
            processedEventEntries: c,
            longAnimationFrameEntries: f,
            inputDelay: r - e.startTime,
            processingDuration: a - r,
            presentationDelay: s - a,
            loadState: n(e.startTime),
            longestScript: void 0,
            totalScriptDuration: void 0,
            totalStyleAndLayoutDuration: void 0,
            totalPaintDuration: void 0,
            totalUnattributedDuration: void 0
          };
        (function (t, _t$longAnimationFrame) {
          if (!((_t$longAnimationFrame = t.longAnimationFrameEntries) !== null && _t$longAnimationFrame !== void 0 && _t$longAnimationFrame.length)) return;
          var e = t.interactionTime,
            n = t.inputDelay,
            o = t.processingDuration;
          var i,
            r,
            s = 0,
            a = 0,
            c = 0,
            f = 0;
          var _iterator9 = _createForOfIteratorHelper(t.longAnimationFrameEntries),
            _step9;
          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var _c = _step9.value;
              a = a + _c.startTime + _c.duration - _c.styleAndLayoutStart;
              var _iterator0 = _createForOfIteratorHelper(_c.scripts),
                _step0;
              try {
                for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
                  var _t1 = _step0.value;
                  var _c2 = _t1.startTime + _t1.duration;
                  if (_c2 < e) continue;
                  var _u = _c2 - Math.max(e, _t1.startTime),
                    _d = _t1.duration ? _u / _t1.duration * _t1.forcedStyleAndLayoutDuration : 0;
                  s += _u - _d, a += _d, _u > f && (r = _t1.startTime < e + n ? "input-delay" : _t1.startTime >= e + n + o ? "presentation-delay" : "processing-duration", i = _t1, f = _u);
                }
              } catch (err) {
                _iterator0.e(err);
              } finally {
                _iterator0.f();
              }
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
          var u = t.longAnimationFrameEntries.at(-1),
            d = u ? u.startTime + u.duration : 0;
          d >= e + n + o && (c = t.nextPaintTime - d), i && r && (t.longestScript = {
            entry: i,
            subpart: r,
            intersectingDuration: f
          }), t.totalScriptDuration = s, t.totalStyleAndLayoutDuration = a, t.totalPaintDuration = c, t.totalUnattributedDuration = t.nextPaintTime - e - s - a - c;
        })(h);
        return Object.assign(t, {
          attribution: h
        });
      };
    m("long-animation-frame", function (t) {
      r = r.concat(t), g();
    }), function (t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
      var n = M();
      T(function () {
        var _e$durationThreshold;
        j();
        var o,
          i = h("INP");
        var r = s(e, A),
          a = function a(t) {
            W(function () {
              var _iterator1 = _createForOfIteratorHelper(t),
                _step1;
              try {
                for (_iterator1.s(); !(_step1 = _iterator1.n()).done;) {
                  var _e0 = _step1.value;
                  r.u(_e0);
                }
              } catch (err) {
                _iterator1.e(err);
              } finally {
                _iterator1.f();
              }
              var e = r.M();
              e && e.T !== i.value && (i.value = e.T, i.entries = e.entries, o());
            });
          },
          c = m("event", a, {
            durationThreshold: (_e$durationThreshold = e.durationThreshold) !== null && _e$durationThreshold !== void 0 ? _e$durationThreshold : 40
          });
        o = u(t, i, q, e.reportAllChanges), c && (c.observe({
          type: "first-input",
          buffered: !0
        }), n.onHidden(function () {
          a(c.takeRecords()), o(!0);
        }), f(function () {
          r.v(), i = h("INP"), o = u(t, i, q, e.reportAllChanges);
        }));
      });
    }(function (e) {
      var n = b(e);
      t(n);
    }, e);
  };
var U = [800, 1800],
  _V = function V(t) {
    document.prerendering ? T(function () {
      return _V(t);
    }) : "complete" !== document.readyState ? addEventListener("load", function () {
      return _V(t);
    }, !0) : setTimeout(t);
  },
  $ = function $(t) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (function (t) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var o = h("TTFB"),
        i = u(t, o, U, n.reportAllChanges);
      _V(function () {
        var r = e();
        r && (o.value = Math.max(r.responseStart - l(), 0), o.entries = [r], i(!0), f(function () {
          o = h("TTFB", 0), i = u(t, o, U, n.reportAllChanges), i(!0);
        }));
      });
    })(function (e) {
      var n = function (t) {
        var e = {
          waitingDuration: 0,
          cacheDuration: 0,
          dnsDuration: 0,
          connectionDuration: 0,
          requestDuration: 0
        };
        if (t.entries.length) {
          var _n7 = t.entries[0],
            _o9 = _n7.activationStart || 0,
            _i6 = Math.max((_n7.workerStart || _n7.fetchStart) - _o9, 0),
            _r4 = Math.max(_n7.domainLookupStart - _o9, 0),
            _s3 = Math.max(_n7.connectStart - _o9, 0),
            _a2 = Math.max(_n7.connectEnd - _o9, 0);
          e = {
            waitingDuration: _i6,
            cacheDuration: _r4 - _i6,
            dnsDuration: _s3 - _r4,
            connectionDuration: _a2 - _s3,
            requestDuration: t.value - _a2,
            navigationEntry: _n7
          };
        }
        return Object.assign(t, {
          attribution: e
        });
      }(e);
      t(n);
    }, n);
  };

/**
 * Timing 指标含义:
 *  https://zhuanlan.zhihu.com/p/82981365
 *  https://www.w3.org/TR/navigation-timing-2/#process
 */
var PerformancePlugin = /*#__PURE__*/function () {
  function PerformancePlugin() {
    _classCallCheck(this, PerformancePlugin);
    _defineProperty(this, "name", 'performance');
    _defineProperty(this, "sdk", null);
    _defineProperty(this, "metrics", {
      // Core Web Vitals
      FCP: null,
      LCP: null,
      FID: null,
      CLS: 0,
      // 加载性能
      TTFB: null,
      // 请求响应耗时
      FPT: null,
      // 白屏时间 First Paint Time
      TTI: null,
      // 可交互时间 Time to Interactive
      READY: null,
      // DOM Ready时间
      LOAD: null // 页面完全加载时间
    });
    _defineProperty(this, "performanceObservers", []);
  }
  return _createClass(PerformancePlugin, [{
    key: "install",
    value: function install(sdk) {
      this.sdk = sdk;
      window.addEventListener("load", this.performanceMetricTracking.bind(this));
    }
  }, {
    key: "uninstall",
    value: function uninstall() {
      // 断开所有PerformanceObserver
      this.performanceObservers.forEach(function (observer) {
        if (observer) observer.disconnect();
      });
      this.performanceObservers = [];
      window.removeEventListener("load", this.performanceMetricTracking.bind(this));
    }
  }, {
    key: "performanceMetricTracking",
    value: function performanceMetricTracking() {
      this.collectPerformanceMetrics();
      this.observePerformance();
      // onCLS(this.webVitalsReport.bind(this));
      x(this.webVitalsReport.bind(this));
      // onLCP(this.webVitalsReport.bind(this));
      w(this.webVitalsReport.bind(this)); // 白屏时间
      $(this.webVitalsReport.bind(this));
    }

    // 收集性能指标
  }, {
    key: "collectPerformanceMetrics",
    value: function collectPerformanceMetrics() {
      // 使用Performance Timeline API收集指标
      if (window.performance && window.performance.timing) {
        var timing = window.performance.timing;
        console.log("timing:", timing);

        // TTFB (Time to First Byte)
        this.metrics.TTFB = timing.responseStart - timing.requestStart;

        // 白屏时间 (First Paint Time)
        // 实际中需要通过PerformanceObserver获取FP/FCP
        // 这里使用一个近似值
        // this.metrics.FPT = timing.responseEnd - timing.navigationStart;

        // 首次可交互时间
        this.metrics.TTI = timing.domInteractive - timing.fetchStart;

        // DOM Ready时间
        this.metrics.READY = timing.domContentLoadedEventEnd - timing.navigationStart;

        // setTimeout(() => {
        //     // 页面完全加载时间
        //     this.metrics.LOAD = timing.loadEventStart - timing.fetchStart;
        //     console.log("页面完全加载:", this.metrics.LOAD);
        //     // 页面完全加载
        //     this.sdk.capture(this.name, {
        //         type: "LOAD",
        //         id: genRandomUUID(),
        //         value: this.metrics.LOAD,
        //     })
        // })

        // 性能瀑图：https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ce6f41887a9a469f8384e3302b576850~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?
        // 性能指标采集方案：https://juejin.cn/post/7097157902862909471#heading-16
        // 瀑图渲染数据选择方案 ChatGpt 回答：https://chatgpt.com/s/t_697af925ad9c8191b9be054b7ddd0e8f
        // 页面加载性能指标
        console.log("DNS 查询:", timing.domainLookupEnd - timing.domainLookupStart);
        console.log("TCP 建连:", timing.connectEnd - timing.connectStart);
        console.log("SSL:", timing.connectEnd - timing.secureConnectionStart ? timing.secureConnectionStart : timing.connectEnd);
        console.log("请求响应耗时 TTFB:", timing.responseStart - timing.fetchStart);
        console.log("响应传输:", timing.responseEnd - timing.responseStart);
        console.log("DOM 解析:", timing.domInteractive - timing.responseEnd);
        console.log("HTML加载完成时间 DOM Ready:", this.metrics.READY);
        console.log("同步资源加载 Res:", timing.loadEventStart - timing.domContentLoadedEventEnd);
        this.sdk.capture(this.name, {
          type: "DNS 查询",
          id: genRandomUUID(),
          value: timing.domainLookupEnd - timing.domainLookupStart
        });
        this.sdk.capture(this.name, {
          type: "TCP 建连",
          id: genRandomUUID(),
          value: timing.connectEnd - timing.connectStart
        });
        this.sdk.capture(this.name, {
          type: "SSL",
          id: genRandomUUID(),
          value: timing.connectEnd - timing.secureConnectionStart ? timing.secureConnectionStart : timing.connectEnd
        });
        this.sdk.capture(this.name, {
          type: "响应传输",
          id: genRandomUUID(),
          value: timing.responseEnd - timing.responseStart
        });
        this.sdk.capture(this.name, {
          type: "DOM 解析",
          id: genRandomUUID(),
          value: timing.domInteractive - timing.responseEnd
        });
        this.sdk.capture(this.name, {
          type: "Ready",
          id: genRandomUUID(),
          value: this.metrics.READY
        });
        this.sdk.capture(this.name, {
          type: "资源加载",
          id: genRandomUUID(),
          value: timing.loadEventStart - timing.domContentLoadedEventEnd
        });
      }

      // 使用PerformanceNavigationTiming API (如果可用)
      if (window.performance && window.performance.getEntriesByType) {
        var navigationEntries = performance.getEntriesByType("navigation");
        if (navigationEntries.length > 0) {
          var navigation = navigationEntries[0];

          // 更精确的TTFB
          this.metrics.TTFB = navigation.responseStart;
          // console.log("TTFB (Navigation Timing):", this.metrics.TTFB);
        }
      }
    }

    // 监听性能指标
  }, {
    key: "observePerformance",
    value: function observePerformance() {
      var _this = this;
      if ('PerformanceObserver' in window) {
        var longTaskObserver = new PerformanceObserver(function (list) {
          list.getEntries().forEach(function (entry) {
            console.log("LONG Task:", entry);
            // this.sdk.capture(this.name, {
            //     type: 'long-task',
            //     duration: entry.duration,
            //     startTime: entry.startTime
            // });
          });
        });
        longTaskObserver.observe({
          type: "longtask",
          buffered: true
        });
        this.performanceObservers.push(longTaskObserver);

        // FP(first-paint): 从页面加载开始到第一个像素绘制到屏幕上的时间，也可以把 FP 理解成白屏时间。
        // const fpObserver = new PerformanceObserver((entryList) => {
        //     for (const entry of entryList.getEntries()) {
        //         this.sdk.capture(this.name, {
        //             type: "FP",
        //             metric: entry
        //         })
        //     }
        // });
        // fpObserver.observe({ type: 'paint', buffered: true })
        // this.performanceObservers.push(fpObserver)

        // FCP观察者 https://web.developers.google.cn/articles/fcp?hl=zh-cn
        // const fcpObserver = new PerformanceObserver((entryList) => {
        //     const entries = entryList.getEntries();
        //     for (const entry of entries) {
        //         if (entry.name === "first-contentful-paint") {
        //             this.sdk.capture(this.name, {
        //                 type: 'FCP',
        //                 value: entry.startTime
        //             });
        //         }
        //     }
        // });
        // fcpObserver.observe({ entryTypes: ["paint"] });
        // this.performanceObservers.push(fcpObserver)

        // LCP观察者 https://web.developers.google.cn/articles/clp?hl=zh-cn
        var lcpObserver = new PerformanceObserver(function (entryList) {
          var entries = entryList.getEntries();
          var lastEntry = entries[entries.length - 1];
          _this.sdk.capture(_this.name, {
            type: 'LCP',
            value: lastEntry.renderTime || lastEntry.loadTime
          });
        });
        lcpObserver.observe({
          entryTypes: ['largest-contentful-paint']
        });
        this.performanceObservers.push(lcpObserver);

        // CLS观察者 https://web.developers.google.cn/articles/cls?hl=zh-cn#measure-cls
        var clsObserver = new PerformanceObserver(function (entryList) {
          var _iterator = _createForOfIteratorHelper(entryList.getEntries()),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var entry = _step.value;
              // 过滤掉值为0的CLS
              // if (entry.value === 0) continue;
              _this.sdk.capture(_this.name, {
                type: 'CLS',
                value: entry.value
              });
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        });
        clsObserver.observe({
          type: 'layout-shift',
          buffered: true
        });
        this.performanceObservers.push(clsObserver);

        // TTFB观察者 https://web.developers.google.cn/articles/ttfb?hl=zh-cn
        // const ttfbObserver = new PerformanceObserver((entryList) => {
        //     const [pageNav] = entryList.getEntriesByType('navigation');
        //     this.sdk.capture(this.name, {
        //         type: 'TTFB',
        //         value: pageNav.responseStart
        //     });
        // });
        // ttfbObserver.observe({
        //     type: 'navigation',
        //     buffered: true
        // });
        // this.performanceObservers.push(ttfbObserver)

        // FID观察者 https://web.developers.google.cn/articles/fid?hl=zh-cn#how_to_measure_fid
        var fidObserver = new PerformanceObserver(function (entryList) {
          var _iterator2 = _createForOfIteratorHelper(entryList.getEntries()),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var entry = _step2.value;
              var delay = entry.processingStart - entry.startTime;
              _this.metrics.FID = delay;
              _this.sdk.capture(_this.name, {
                type: "FID",
                value: _this.metrics.FID
              });
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        });
        fidObserver.observe({
          type: 'first-input',
          buffered: true
        });
        this.performanceObservers.push(fidObserver);
      }
    }
    // web-vitals 指标上报
  }, {
    key: "webVitalsReport",
    value: function webVitalsReport(metric) {
      // console.log(`metric name: ${metric.name}`, metric);
      this.metrics[metric.name] = metric.value;
      this.sdk.capture(this.name, {
        type: metric.name,
        value: metric.value
      });
    }
  }]);
}();

// Vue2 集成插件
var Vue2Plugin = /*#__PURE__*/function (_EventBus) {
  function Vue2Plugin() {
    var _this;
    _classCallCheck(this, Vue2Plugin);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Vue2Plugin, [].concat(args));
    _defineProperty(_this, "name", "vue2");
    _defineProperty(_this, "sdk", null);
    return _this;
  }
  _inherits(Vue2Plugin, _EventBus);
  return _createClass(Vue2Plugin, [{
    key: "install",
    value: function () {
      var _install = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(sdk) {
        var sleep;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              sleep = function _sleep(ms) {
                return new Promise(function (resolve) {
                  return setTimeout(resolve, ms);
                });
              }; // TODO 暂时如此，待优化
              _context.n = 1;
              return sleep(0);
            case 1:
              this.sdk = sdk;
              this.globalErrorHandle();
            case 2:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function install(_x) {
        return _install.apply(this, arguments);
      }
      return install;
    }()
  }, {
    key: "uninstall",
    value: function uninstall() {}

    // 全局错误捕获
  }, {
    key: "globalErrorHandle",
    value: function globalErrorHandle() {
      var _this$sdk$config$Vue = this.sdk.config.Vue,
        Vue = _this$sdk$config$Vue === void 0 ? null : _this$sdk$config$Vue;
      var self = this;
      // quit if Vue isn't on the page
      if (!Vue || !Vue.config) return;
      // 为什么这么做？
      var _oldOnError = Vue.config.errorHandler;
      Vue.config.errorHandler = function VueErrorHandler(error, vm, info) {
        var _vm$$options;
        self.sdk.capture(self.name, {
          type: "globalError",
          message: error.message,
          errorType: error.name,
          stack: error.stack,
          // vm,
          component: vm === null || vm === void 0 || (_vm$$options = vm.$options) === null || _vm$$options === void 0 ? void 0 : _vm$$options.name,
          file: vm === null || vm === void 0 ? void 0 : vm.$options.__file,
          info: info
        });
        self.emit(RRWEB_RECORD_STOP_EVENT, {
          sdk: self.sdk
        });
        if (typeof _oldOnError === 'function') {
          _oldOnError.call(this, error, vm, info);
        }
      };
    }
  }]);
}(EventBus);

var RuoyiMonitor = new MonitoringCore({
  // appId: "abc",
  plugins: [new Vue2Plugin(), new PerformancePlugin(),
  // new ResourcePlugin(),
  // new UserBehaviorPlugin(),
  // new EnvironmentInfoPlugin(),
  new ErrorTrackingPlugin()]
});

exports.RuoyiMonitor = RuoyiMonitor;
