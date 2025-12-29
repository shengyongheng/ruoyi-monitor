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
              console.log("payload eventType:".concat(events[0].eventType), payload);
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

/**
 * 获取唯一 ID
 */
function genRandomUUID() {
  var _crypto;
  return (_crypto = crypto) !== null && _crypto !== void 0 && _crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
}

var UserBehaviorPlugin = /*#__PURE__*/function () {
  function UserBehaviorPlugin() {
    _classCallCheck(this, UserBehaviorPlugin);
    _defineProperty(this, "name", 'userBehavior');
    _defineProperty(this, "sdk", null);
    _defineProperty(this, "enterTime", Date.now());
    _defineProperty(this, "from", location.href);
    _defineProperty(this, "hashEnterTime", 0);
  }
  return _createClass(UserBehaviorPlugin, [{
    key: "install",
    value: function install(sdk) {
      this.sdk = sdk;
      /**
       * MDN：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/popstate_event
       * 备注：
       *  popstate 事件在调用浏览器的前进、后退以及执行 history.forward、history.back、和 history.go 触发。
       *  即，在同一文档的两个历史记录条目之间导航会触发该事件。
       *  调用 history.pushState() 或者 history.replaceState() 不会触发 popstate 事件。
       */
      this.patchHistoryApi();
      // 页面停留时长监控
      {
        document.addEventListener('visibilitychange', this.trackPageStayTime.bind(this), true);
      }

      // 处理用户点击事件
      {
        document.addEventListener('click', this.trackClickBehavior.bind(this), true);
      }

      // 处理用户输入事件
      {
        document.addEventListener('input', this.trackInputBehavior.bind(this), true);
      }

      // 处理页面卸载事件
      {
        window.addEventListener("unload", this.trackPageUnload.bind(this), true);
      }

      // 处理页面路由变化事件
      {
        // 浏览器前进后退触发
        window.addEventListener('popstate', this.trackRouteChange.bind(this, "popstate"), true);
      }

      // 处理页面 hash 变化
      {
        window.addEventListener('hashchange', this.trackHashChange.bind(this), true);
      }
    }

    // 移除事件监听
  }, {
    key: "uninstall",
    value: function uninstall() {
      document.removeEventListener("visibilitychange", this.trackPageStayTime.bind(this), true);
      document.removeEventListener('click', this.trackClickBehavior.bind(this, sdk), true);
      document.removeEventListener('input', this.trackInputBehavior.bind(this, sdk), true);
    }
  }, {
    key: "patchHistoryApi",
    value: function patchHistoryApi() {
      var self = this;
      var originPushState = history.pushState;
      var originReplaceState = history.replaceState;
      history.pushState = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        originPushState.apply(history, args);
        self.trackRouteChange('pushState');
      };
      history.replaceState = function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        originReplaceState.apply(history, args);
        self.trackRouteChange('replaceState');
      };
    }
  }, {
    key: "trackPageStayTime",
    value: function trackPageStayTime() {
      if (document.visibilityState === 'hidden') {
        var stayTime = Date.now() - this.enterTime;
        this.sdk.capture('userAction', {
          id: genRandomUUID(),
          type: 'pageStay',
          stayTime: stayTime
        });
      } else {
        this.enterTime = Date.now();
      }
    }

    // 处理用户点击事件
  }, {
    key: "trackClickBehavior",
    value: function trackClickBehavior(e) {
      var target = e.target;
      var description = "\u70B9\u51FB\u4E86 ".concat(target.tagName);
      if (target.id) description += " #".concat(target.id);
      if (target.className) description += " .".concat(target.className);
      if (target.textContent && target.textContent.length < 30) {
        description += " (".concat(target.textContent.trim(), ")");
      }
      this.sdk.capture('userAction', {
        id: genRandomUUID(),
        type: 'click',
        description: description
      });
    }

    // 处理用户输入事件
  }, {
    key: "trackInputBehavior",
    value: function trackInputBehavior(e) {
      var target = e.target;
      var description = "\u5728 ".concat(target.tagName);
      if (target.id) description += " #".concat(target.id);
      if (target.placeholder) description += " [".concat(target.placeholder, "]");
      description += " \u8F93\u5165: \"".concat(target.value, "\"");
      this.sdk.capture('userAction', {
        id: genRandomUUID(),
        type: 'input',
        description: description
      });
    }

    // 处理用户滚动事件
  }, {
    key: "trackPageUnload",
    value: function trackPageUnload(e) {
      console.log("处理页面卸载事件:", e);
    }
  }, {
    key: "trackRouteChange",
    value: function trackRouteChange(trigerType) {
      this.sdk.capture(this.name, {
        type: "history",
        trigerType: trigerType,
        from: this.from,
        to: location.href
      });
      this.from = location.href;
    }
  }, {
    key: "trackHashChange",
    value: function trackHashChange(e) {
      this.sdk.capture(this.name, {
        type: "hashchange",
        from: e.oldURL,
        to: e.newURL,
        hashStayTime: e.timeStamp - this.hashEnterTime
      });
      this.hashEnterTime = e.timeStamp;
    }
  }]);
}();

// import { Vue2Plugin } from "@plugins/Vue2Plugin";

var RuoyiMonitor = new MonitoringCore({
  // appId: "abc",
  plugins: [
  // new Vue2Plugin(),
  // new PerformancePlugin(),
  // new ResourcePlugin(),
  new UserBehaviorPlugin()
  // new EnvironmentInfoPlugin(),
  // new ErrorTrackingPlugin(),
  ]
});

exports.RuoyiMonitor = RuoyiMonitor;
