import "./modulepreload-polyfill.js";
import { l as levels } from "./levels.js";
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReact_production_min;
function requireReact_production_min() {
  if (hasRequiredReact_production_min) return react_production_min;
  hasRequiredReact_production_min = 1;
  var l2 = Symbol.for("react.element"), n2 = Symbol.for("react.portal"), p2 = Symbol.for("react.fragment"), q2 = Symbol.for("react.strict_mode"), r2 = Symbol.for("react.profiler"), t2 = Symbol.for("react.provider"), u2 = Symbol.for("react.context"), v2 = Symbol.for("react.forward_ref"), w2 = Symbol.for("react.suspense"), x2 = Symbol.for("react.memo"), y2 = Symbol.for("react.lazy"), z2 = Symbol.iterator;
  function A2(a2) {
    if (null === a2 || "object" !== typeof a2) return null;
    a2 = z2 && a2[z2] || a2["@@iterator"];
    return "function" === typeof a2 ? a2 : null;
  }
  var B2 = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C2 = Object.assign, D2 = {};
  function E2(a2, b2, e) {
    this.props = a2;
    this.context = b2;
    this.refs = D2;
    this.updater = e || B2;
  }
  E2.prototype.isReactComponent = {};
  E2.prototype.setState = function(a2, b2) {
    if ("object" !== typeof a2 && "function" !== typeof a2 && null != a2) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a2, b2, "setState");
  };
  E2.prototype.forceUpdate = function(a2) {
    this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
  };
  function F2() {
  }
  F2.prototype = E2.prototype;
  function G2(a2, b2, e) {
    this.props = a2;
    this.context = b2;
    this.refs = D2;
    this.updater = e || B2;
  }
  var H2 = G2.prototype = new F2();
  H2.constructor = G2;
  C2(H2, E2.prototype);
  H2.isPureReactComponent = true;
  var I2 = Array.isArray, J2 = Object.prototype.hasOwnProperty, K2 = { current: null }, L2 = { key: true, ref: true, __self: true, __source: true };
  function M2(a2, b2, e) {
    var d2, c2 = {}, k2 = null, h2 = null;
    if (null != b2) for (d2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2) J2.call(b2, d2) && !L2.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
    var g2 = arguments.length - 2;
    if (1 === g2) c2.children = e;
    else if (1 < g2) {
      for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++) f2[m2] = arguments[m2 + 2];
      c2.children = f2;
    }
    if (a2 && a2.defaultProps) for (d2 in g2 = a2.defaultProps, g2) void 0 === c2[d2] && (c2[d2] = g2[d2]);
    return { $$typeof: l2, type: a2, key: k2, ref: h2, props: c2, _owner: K2.current };
  }
  function N2(a2, b2) {
    return { $$typeof: l2, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
  }
  function O2(a2) {
    return "object" === typeof a2 && null !== a2 && a2.$$typeof === l2;
  }
  function escape(a2) {
    var b2 = { "=": "=0", ":": "=2" };
    return "$" + a2.replace(/[=:]/g, function(a3) {
      return b2[a3];
    });
  }
  var P2 = /\/+/g;
  function Q2(a2, b2) {
    return "object" === typeof a2 && null !== a2 && null != a2.key ? escape("" + a2.key) : b2.toString(36);
  }
  function R2(a2, b2, e, d2, c2) {
    var k2 = typeof a2;
    if ("undefined" === k2 || "boolean" === k2) a2 = null;
    var h2 = false;
    if (null === a2) h2 = true;
    else switch (k2) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a2.$$typeof) {
          case l2:
          case n2:
            h2 = true;
        }
    }
    if (h2) return h2 = a2, c2 = c2(h2), a2 = "" === d2 ? "." + Q2(h2, 0) : d2, I2(c2) ? (e = "", null != a2 && (e = a2.replace(P2, "$&/") + "/"), R2(c2, b2, e, "", function(a3) {
      return a3;
    })) : null != c2 && (O2(c2) && (c2 = N2(c2, e + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P2, "$&/") + "/") + a2)), b2.push(c2)), 1;
    h2 = 0;
    d2 = "" === d2 ? "." : d2 + ":";
    if (I2(a2)) for (var g2 = 0; g2 < a2.length; g2++) {
      k2 = a2[g2];
      var f2 = d2 + Q2(k2, g2);
      h2 += R2(k2, b2, e, f2, c2);
    }
    else if (f2 = A2(a2), "function" === typeof f2) for (a2 = f2.call(a2), g2 = 0; !(k2 = a2.next()).done; ) k2 = k2.value, f2 = d2 + Q2(k2, g2++), h2 += R2(k2, b2, e, f2, c2);
    else if ("object" === k2) throw b2 = String(a2), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
    return h2;
  }
  function S2(a2, b2, e) {
    if (null == a2) return a2;
    var d2 = [], c2 = 0;
    R2(a2, d2, "", "", function(a3) {
      return b2.call(e, a3, c2++);
    });
    return d2;
  }
  function T2(a2) {
    if (-1 === a2._status) {
      var b2 = a2._result;
      b2 = b2();
      b2.then(function(b3) {
        if (0 === a2._status || -1 === a2._status) a2._status = 1, a2._result = b3;
      }, function(b3) {
        if (0 === a2._status || -1 === a2._status) a2._status = 2, a2._result = b3;
      });
      -1 === a2._status && (a2._status = 0, a2._result = b2);
    }
    if (1 === a2._status) return a2._result.default;
    throw a2._result;
  }
  var U2 = { current: null }, V2 = { transition: null }, W2 = { ReactCurrentDispatcher: U2, ReactCurrentBatchConfig: V2, ReactCurrentOwner: K2 };
  function X2() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  react_production_min.Children = { map: S2, forEach: function(a2, b2, e) {
    S2(a2, function() {
      b2.apply(this, arguments);
    }, e);
  }, count: function(a2) {
    var b2 = 0;
    S2(a2, function() {
      b2++;
    });
    return b2;
  }, toArray: function(a2) {
    return S2(a2, function(a3) {
      return a3;
    }) || [];
  }, only: function(a2) {
    if (!O2(a2)) throw Error("React.Children.only expected to receive a single React element child.");
    return a2;
  } };
  react_production_min.Component = E2;
  react_production_min.Fragment = p2;
  react_production_min.Profiler = r2;
  react_production_min.PureComponent = G2;
  react_production_min.StrictMode = q2;
  react_production_min.Suspense = w2;
  react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W2;
  react_production_min.act = X2;
  react_production_min.cloneElement = function(a2, b2, e) {
    if (null === a2 || void 0 === a2) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
    var d2 = C2({}, a2.props), c2 = a2.key, k2 = a2.ref, h2 = a2._owner;
    if (null != b2) {
      void 0 !== b2.ref && (k2 = b2.ref, h2 = K2.current);
      void 0 !== b2.key && (c2 = "" + b2.key);
      if (a2.type && a2.type.defaultProps) var g2 = a2.type.defaultProps;
      for (f2 in b2) J2.call(b2, f2) && !L2.hasOwnProperty(f2) && (d2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
    }
    var f2 = arguments.length - 2;
    if (1 === f2) d2.children = e;
    else if (1 < f2) {
      g2 = Array(f2);
      for (var m2 = 0; m2 < f2; m2++) g2[m2] = arguments[m2 + 2];
      d2.children = g2;
    }
    return { $$typeof: l2, type: a2.type, key: c2, ref: k2, props: d2, _owner: h2 };
  };
  react_production_min.createContext = function(a2) {
    a2 = { $$typeof: u2, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
    a2.Provider = { $$typeof: t2, _context: a2 };
    return a2.Consumer = a2;
  };
  react_production_min.createElement = M2;
  react_production_min.createFactory = function(a2) {
    var b2 = M2.bind(null, a2);
    b2.type = a2;
    return b2;
  };
  react_production_min.createRef = function() {
    return { current: null };
  };
  react_production_min.forwardRef = function(a2) {
    return { $$typeof: v2, render: a2 };
  };
  react_production_min.isValidElement = O2;
  react_production_min.lazy = function(a2) {
    return { $$typeof: y2, _payload: { _status: -1, _result: a2 }, _init: T2 };
  };
  react_production_min.memo = function(a2, b2) {
    return { $$typeof: x2, type: a2, compare: void 0 === b2 ? null : b2 };
  };
  react_production_min.startTransition = function(a2) {
    var b2 = V2.transition;
    V2.transition = {};
    try {
      a2();
    } finally {
      V2.transition = b2;
    }
  };
  react_production_min.unstable_act = X2;
  react_production_min.useCallback = function(a2, b2) {
    return U2.current.useCallback(a2, b2);
  };
  react_production_min.useContext = function(a2) {
    return U2.current.useContext(a2);
  };
  react_production_min.useDebugValue = function() {
  };
  react_production_min.useDeferredValue = function(a2) {
    return U2.current.useDeferredValue(a2);
  };
  react_production_min.useEffect = function(a2, b2) {
    return U2.current.useEffect(a2, b2);
  };
  react_production_min.useId = function() {
    return U2.current.useId();
  };
  react_production_min.useImperativeHandle = function(a2, b2, e) {
    return U2.current.useImperativeHandle(a2, b2, e);
  };
  react_production_min.useInsertionEffect = function(a2, b2) {
    return U2.current.useInsertionEffect(a2, b2);
  };
  react_production_min.useLayoutEffect = function(a2, b2) {
    return U2.current.useLayoutEffect(a2, b2);
  };
  react_production_min.useMemo = function(a2, b2) {
    return U2.current.useMemo(a2, b2);
  };
  react_production_min.useReducer = function(a2, b2, e) {
    return U2.current.useReducer(a2, b2, e);
  };
  react_production_min.useRef = function(a2) {
    return U2.current.useRef(a2);
  };
  react_production_min.useState = function(a2) {
    return U2.current.useState(a2);
  };
  react_production_min.useSyncExternalStore = function(a2, b2, e) {
    return U2.current.useSyncExternalStore(a2, b2, e);
  };
  react_production_min.useTransition = function() {
    return U2.current.useTransition();
  };
  react_production_min.version = "18.3.1";
  return react_production_min;
}
var hasRequiredReact;
function requireReact() {
  if (hasRequiredReact) return react.exports;
  hasRequiredReact = 1;
  {
    react.exports = requireReact_production_min();
  }
  return react.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_production_min;
function requireReactJsxRuntime_production_min() {
  if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
  hasRequiredReactJsxRuntime_production_min = 1;
  var f2 = requireReact(), k2 = Symbol.for("react.element"), l2 = Symbol.for("react.fragment"), m2 = Object.prototype.hasOwnProperty, n2 = f2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p2 = { key: true, ref: true, __self: true, __source: true };
  function q2(c2, a2, g2) {
    var b2, d2 = {}, e = null, h2 = null;
    void 0 !== g2 && (e = "" + g2);
    void 0 !== a2.key && (e = "" + a2.key);
    void 0 !== a2.ref && (h2 = a2.ref);
    for (b2 in a2) m2.call(a2, b2) && !p2.hasOwnProperty(b2) && (d2[b2] = a2[b2]);
    if (c2 && c2.defaultProps) for (b2 in a2 = c2.defaultProps, a2) void 0 === d2[b2] && (d2[b2] = a2[b2]);
    return { $$typeof: k2, type: c2, key: e, ref: h2, props: d2, _owner: n2.current };
  }
  reactJsxRuntime_production_min.Fragment = l2;
  reactJsxRuntime_production_min.jsx = q2;
  reactJsxRuntime_production_min.jsxs = q2;
  return reactJsxRuntime_production_min;
}
var hasRequiredJsxRuntime;
function requireJsxRuntime() {
  if (hasRequiredJsxRuntime) return jsxRuntime.exports;
  hasRequiredJsxRuntime = 1;
  {
    jsxRuntime.exports = requireReactJsxRuntime_production_min();
  }
  return jsxRuntime.exports;
}
var jsxRuntimeExports = requireJsxRuntime();
var reactExports = requireReact();
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredScheduler_production_min;
function requireScheduler_production_min() {
  if (hasRequiredScheduler_production_min) return scheduler_production_min;
  hasRequiredScheduler_production_min = 1;
  (function(exports) {
    function f2(a2, b2) {
      var c2 = a2.length;
      a2.push(b2);
      a: for (; 0 < c2; ) {
        var d2 = c2 - 1 >>> 1, e = a2[d2];
        if (0 < g2(e, b2)) a2[d2] = b2, a2[c2] = e, c2 = d2;
        else break a;
      }
    }
    function h2(a2) {
      return 0 === a2.length ? null : a2[0];
    }
    function k2(a2) {
      if (0 === a2.length) return null;
      var b2 = a2[0], c2 = a2.pop();
      if (c2 !== b2) {
        a2[0] = c2;
        a: for (var d2 = 0, e = a2.length, w2 = e >>> 1; d2 < w2; ) {
          var m2 = 2 * (d2 + 1) - 1, C2 = a2[m2], n2 = m2 + 1, x2 = a2[n2];
          if (0 > g2(C2, c2)) n2 < e && 0 > g2(x2, C2) ? (a2[d2] = x2, a2[n2] = c2, d2 = n2) : (a2[d2] = C2, a2[m2] = c2, d2 = m2);
          else if (n2 < e && 0 > g2(x2, c2)) a2[d2] = x2, a2[n2] = c2, d2 = n2;
          else break a;
        }
      }
      return b2;
    }
    function g2(a2, b2) {
      var c2 = a2.sortIndex - b2.sortIndex;
      return 0 !== c2 ? c2 : a2.id - b2.id;
    }
    if ("object" === typeof performance && "function" === typeof performance.now) {
      var l2 = performance;
      exports.unstable_now = function() {
        return l2.now();
      };
    } else {
      var p2 = Date, q2 = p2.now();
      exports.unstable_now = function() {
        return p2.now() - q2;
      };
    }
    var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
    "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function G2(a2) {
      for (var b2 = h2(t2); null !== b2; ) {
        if (null === b2.callback) k2(t2);
        else if (b2.startTime <= a2) k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
        else break;
        b2 = h2(t2);
      }
    }
    function H2(a2) {
      B2 = false;
      G2(a2);
      if (!A2) if (null !== h2(r2)) A2 = true, I2(J2);
      else {
        var b2 = h2(t2);
        null !== b2 && K2(H2, b2.startTime - a2);
      }
    }
    function J2(a2, b2) {
      A2 = false;
      B2 && (B2 = false, E2(L2), L2 = -1);
      z2 = true;
      var c2 = y2;
      try {
        G2(b2);
        for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b2) || a2 && !M2()); ) {
          var d2 = v2.callback;
          if ("function" === typeof d2) {
            v2.callback = null;
            y2 = v2.priorityLevel;
            var e = d2(v2.expirationTime <= b2);
            b2 = exports.unstable_now();
            "function" === typeof e ? v2.callback = e : v2 === h2(r2) && k2(r2);
            G2(b2);
          } else k2(r2);
          v2 = h2(r2);
        }
        if (null !== v2) var w2 = true;
        else {
          var m2 = h2(t2);
          null !== m2 && K2(H2, m2.startTime - b2);
          w2 = false;
        }
        return w2;
      } finally {
        v2 = null, y2 = c2, z2 = false;
      }
    }
    var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
    function M2() {
      return exports.unstable_now() - Q2 < P2 ? false : true;
    }
    function R2() {
      if (null !== O2) {
        var a2 = exports.unstable_now();
        Q2 = a2;
        var b2 = true;
        try {
          b2 = O2(true, a2);
        } finally {
          b2 ? S2() : (N2 = false, O2 = null);
        }
      } else N2 = false;
    }
    var S2;
    if ("function" === typeof F2) S2 = function() {
      F2(R2);
    };
    else if ("undefined" !== typeof MessageChannel) {
      var T2 = new MessageChannel(), U2 = T2.port2;
      T2.port1.onmessage = R2;
      S2 = function() {
        U2.postMessage(null);
      };
    } else S2 = function() {
      D2(R2, 0);
    };
    function I2(a2) {
      O2 = a2;
      N2 || (N2 = true, S2());
    }
    function K2(a2, b2) {
      L2 = D2(function() {
        a2(exports.unstable_now());
      }, b2);
    }
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(a2) {
      a2.callback = null;
    };
    exports.unstable_continueExecution = function() {
      A2 || z2 || (A2 = true, I2(J2));
    };
    exports.unstable_forceFrameRate = function(a2) {
      0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
      return y2;
    };
    exports.unstable_getFirstCallbackNode = function() {
      return h2(r2);
    };
    exports.unstable_next = function(a2) {
      switch (y2) {
        case 1:
        case 2:
        case 3:
          var b2 = 3;
          break;
        default:
          b2 = y2;
      }
      var c2 = y2;
      y2 = b2;
      try {
        return a2();
      } finally {
        y2 = c2;
      }
    };
    exports.unstable_pauseExecution = function() {
    };
    exports.unstable_requestPaint = function() {
    };
    exports.unstable_runWithPriority = function(a2, b2) {
      switch (a2) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a2 = 3;
      }
      var c2 = y2;
      y2 = a2;
      try {
        return b2();
      } finally {
        y2 = c2;
      }
    };
    exports.unstable_scheduleCallback = function(a2, b2, c2) {
      var d2 = exports.unstable_now();
      "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
      switch (a2) {
        case 1:
          var e = -1;
          break;
        case 2:
          e = 250;
          break;
        case 5:
          e = 1073741823;
          break;
        case 4:
          e = 1e4;
          break;
        default:
          e = 5e3;
      }
      e = c2 + e;
      a2 = { id: u2++, callback: b2, priorityLevel: a2, startTime: c2, expirationTime: e, sortIndex: -1 };
      c2 > d2 ? (a2.sortIndex = c2, f2(t2, a2), null === h2(r2) && a2 === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a2.sortIndex = e, f2(r2, a2), A2 || z2 || (A2 = true, I2(J2)));
      return a2;
    };
    exports.unstable_shouldYield = M2;
    exports.unstable_wrapCallback = function(a2) {
      var b2 = y2;
      return function() {
        var c2 = y2;
        y2 = b2;
        try {
          return a2.apply(this, arguments);
        } finally {
          y2 = c2;
        }
      };
    };
  })(scheduler_production_min);
  return scheduler_production_min;
}
var hasRequiredScheduler;
function requireScheduler() {
  if (hasRequiredScheduler) return scheduler.exports;
  hasRequiredScheduler = 1;
  {
    scheduler.exports = requireScheduler_production_min();
  }
  return scheduler.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactDom_production_min;
function requireReactDom_production_min() {
  if (hasRequiredReactDom_production_min) return reactDom_production_min;
  hasRequiredReactDom_production_min = 1;
  var aa = requireReact(), ca = requireScheduler();
  function p2(a2) {
    for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++) b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
    return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var da = /* @__PURE__ */ new Set(), ea = {};
  function fa(a2, b2) {
    ha(a2, b2);
    ha(a2 + "Capture", b2);
  }
  function ha(a2, b2) {
    ea[a2] = b2;
    for (a2 = 0; a2 < b2.length; a2++) da.add(b2[a2]);
  }
  var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
  function oa(a2) {
    if (ja.call(ma, a2)) return true;
    if (ja.call(la, a2)) return false;
    if (ka.test(a2)) return ma[a2] = true;
    la[a2] = true;
    return false;
  }
  function pa(a2, b2, c2, d2) {
    if (null !== c2 && 0 === c2.type) return false;
    switch (typeof b2) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        if (d2) return false;
        if (null !== c2) return !c2.acceptsBooleans;
        a2 = a2.toLowerCase().slice(0, 5);
        return "data-" !== a2 && "aria-" !== a2;
      default:
        return false;
    }
  }
  function qa(a2, b2, c2, d2) {
    if (null === b2 || "undefined" === typeof b2 || pa(a2, b2, c2, d2)) return true;
    if (d2) return false;
    if (null !== c2) switch (c2.type) {
      case 3:
        return !b2;
      case 4:
        return false === b2;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
    return false;
  }
  function v2(a2, b2, c2, d2, e, f2, g2) {
    this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
    this.attributeName = d2;
    this.attributeNamespace = e;
    this.mustUseProperty = c2;
    this.propertyName = a2;
    this.type = b2;
    this.sanitizeURL = f2;
    this.removeEmptyString = g2;
  }
  var z2 = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
    z2[a2] = new v2(a2, 0, false, a2, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
    var b2 = a2[0];
    z2[b2] = new v2(b2, 1, false, a2[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
    z2[a2] = new v2(a2, 2, false, a2.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
    z2[a2] = new v2(a2, 2, false, a2, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
    z2[a2] = new v2(a2, 3, false, a2.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(a2) {
    z2[a2] = new v2(a2, 3, true, a2, null, false, false);
  });
  ["capture", "download"].forEach(function(a2) {
    z2[a2] = new v2(a2, 4, false, a2, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(a2) {
    z2[a2] = new v2(a2, 6, false, a2, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(a2) {
    z2[a2] = new v2(a2, 5, false, a2.toLowerCase(), null, false, false);
  });
  var ra = /[\-:]([a-z])/g;
  function sa(a2) {
    return a2[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
    var b2 = a2.replace(
      ra,
      sa
    );
    z2[b2] = new v2(b2, 1, false, a2, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
    var b2 = a2.replace(ra, sa);
    z2[b2] = new v2(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
    var b2 = a2.replace(ra, sa);
    z2[b2] = new v2(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(a2) {
    z2[a2] = new v2(a2, 1, false, a2.toLowerCase(), null, false, false);
  });
  z2.xlinkHref = new v2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(a2) {
    z2[a2] = new v2(a2, 1, false, a2.toLowerCase(), null, true, true);
  });
  function ta(a2, b2, c2, d2) {
    var e = z2.hasOwnProperty(b2) ? z2[b2] : null;
    if (null !== e ? 0 !== e.type : d2 || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1]) qa(b2, c2, e, d2) && (c2 = null), d2 || null === e ? oa(b2) && (null === c2 ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c2)) : e.mustUseProperty ? a2[e.propertyName] = null === c2 ? 3 === e.type ? false : "" : c2 : (b2 = e.attributeName, d2 = e.attributeNamespace, null === c2 ? a2.removeAttribute(b2) : (e = e.type, c2 = 3 === e || 4 === e && true === c2 ? "" : "" + c2, d2 ? a2.setAttributeNS(d2, b2, c2) : a2.setAttribute(b2, c2)));
  }
  var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
  var Ia = Symbol.for("react.offscreen");
  var Ja = Symbol.iterator;
  function Ka(a2) {
    if (null === a2 || "object" !== typeof a2) return null;
    a2 = Ja && a2[Ja] || a2["@@iterator"];
    return "function" === typeof a2 ? a2 : null;
  }
  var A2 = Object.assign, La;
  function Ma(a2) {
    if (void 0 === La) try {
      throw Error();
    } catch (c2) {
      var b2 = c2.stack.trim().match(/\n( *(at )?)/);
      La = b2 && b2[1] || "";
    }
    return "\n" + La + a2;
  }
  var Na = false;
  function Oa(a2, b2) {
    if (!a2 || Na) return "";
    Na = true;
    var c2 = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (b2) if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (l2) {
          var d2 = l2;
        }
        Reflect.construct(a2, [], b2);
      } else {
        try {
          b2.call();
        } catch (l2) {
          d2 = l2;
        }
        a2.call(b2.prototype);
      }
      else {
        try {
          throw Error();
        } catch (l2) {
          d2 = l2;
        }
        a2();
      }
    } catch (l2) {
      if (l2 && d2 && "string" === typeof l2.stack) {
        for (var e = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e[g2] !== f2[h2]; ) h2--;
        for (; 1 <= g2 && 0 <= h2; g2--, h2--) if (e[g2] !== f2[h2]) {
          if (1 !== g2 || 1 !== h2) {
            do
              if (g2--, h2--, 0 > h2 || e[g2] !== f2[h2]) {
                var k2 = "\n" + e[g2].replace(" at new ", " at ");
                a2.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a2.displayName));
                return k2;
              }
            while (1 <= g2 && 0 <= h2);
          }
          break;
        }
      }
    } finally {
      Na = false, Error.prepareStackTrace = c2;
    }
    return (a2 = a2 ? a2.displayName || a2.name : "") ? Ma(a2) : "";
  }
  function Pa(a2) {
    switch (a2.tag) {
      case 5:
        return Ma(a2.type);
      case 16:
        return Ma("Lazy");
      case 13:
        return Ma("Suspense");
      case 19:
        return Ma("SuspenseList");
      case 0:
      case 2:
      case 15:
        return a2 = Oa(a2.type, false), a2;
      case 11:
        return a2 = Oa(a2.type.render, false), a2;
      case 1:
        return a2 = Oa(a2.type, true), a2;
      default:
        return "";
    }
  }
  function Qa(a2) {
    if (null == a2) return null;
    if ("function" === typeof a2) return a2.displayName || a2.name || null;
    if ("string" === typeof a2) return a2;
    switch (a2) {
      case ya:
        return "Fragment";
      case wa:
        return "Portal";
      case Aa:
        return "Profiler";
      case za:
        return "StrictMode";
      case Ea:
        return "Suspense";
      case Fa:
        return "SuspenseList";
    }
    if ("object" === typeof a2) switch (a2.$$typeof) {
      case Ca:
        return (a2.displayName || "Context") + ".Consumer";
      case Ba:
        return (a2._context.displayName || "Context") + ".Provider";
      case Da:
        var b2 = a2.render;
        a2 = a2.displayName;
        a2 || (a2 = b2.displayName || b2.name || "", a2 = "" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
        return a2;
      case Ga:
        return b2 = a2.displayName || null, null !== b2 ? b2 : Qa(a2.type) || "Memo";
      case Ha:
        b2 = a2._payload;
        a2 = a2._init;
        try {
          return Qa(a2(b2));
        } catch (c2) {
        }
    }
    return null;
  }
  function Ra(a2) {
    var b2 = a2.type;
    switch (a2.tag) {
      case 24:
        return "Cache";
      case 9:
        return (b2.displayName || "Context") + ".Consumer";
      case 10:
        return (b2._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return a2 = b2.render, a2 = a2.displayName || a2.name || "", b2.displayName || ("" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return b2;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Qa(b2);
      case 8:
        return b2 === za ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if ("function" === typeof b2) return b2.displayName || b2.name || null;
        if ("string" === typeof b2) return b2;
    }
    return null;
  }
  function Sa(a2) {
    switch (typeof a2) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return a2;
      case "object":
        return a2;
      default:
        return "";
    }
  }
  function Ta(a2) {
    var b2 = a2.type;
    return (a2 = a2.nodeName) && "input" === a2.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
  }
  function Ua(a2) {
    var b2 = Ta(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d2 = "" + a2[b2];
    if (!a2.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
      var e = c2.get, f2 = c2.set;
      Object.defineProperty(a2, b2, { configurable: true, get: function() {
        return e.call(this);
      }, set: function(a3) {
        d2 = "" + a3;
        f2.call(this, a3);
      } });
      Object.defineProperty(a2, b2, { enumerable: c2.enumerable });
      return { getValue: function() {
        return d2;
      }, setValue: function(a3) {
        d2 = "" + a3;
      }, stopTracking: function() {
        a2._valueTracker = null;
        delete a2[b2];
      } };
    }
  }
  function Va(a2) {
    a2._valueTracker || (a2._valueTracker = Ua(a2));
  }
  function Wa(a2) {
    if (!a2) return false;
    var b2 = a2._valueTracker;
    if (!b2) return true;
    var c2 = b2.getValue();
    var d2 = "";
    a2 && (d2 = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
    a2 = d2;
    return a2 !== c2 ? (b2.setValue(a2), true) : false;
  }
  function Xa(a2) {
    a2 = a2 || ("undefined" !== typeof document ? document : void 0);
    if ("undefined" === typeof a2) return null;
    try {
      return a2.activeElement || a2.body;
    } catch (b2) {
      return a2.body;
    }
  }
  function Ya(a2, b2) {
    var c2 = b2.checked;
    return A2({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a2._wrapperState.initialChecked });
  }
  function Za(a2, b2) {
    var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
    c2 = Sa(null != b2.value ? b2.value : c2);
    a2._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
  }
  function ab(a2, b2) {
    b2 = b2.checked;
    null != b2 && ta(a2, "checked", b2, false);
  }
  function bb(a2, b2) {
    ab(a2, b2);
    var c2 = Sa(b2.value), d2 = b2.type;
    if (null != c2) if ("number" === d2) {
      if (0 === c2 && "" === a2.value || a2.value != c2) a2.value = "" + c2;
    } else a2.value !== "" + c2 && (a2.value = "" + c2);
    else if ("submit" === d2 || "reset" === d2) {
      a2.removeAttribute("value");
      return;
    }
    b2.hasOwnProperty("value") ? cb(a2, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a2, b2.type, Sa(b2.defaultValue));
    null == b2.checked && null != b2.defaultChecked && (a2.defaultChecked = !!b2.defaultChecked);
  }
  function db(a2, b2, c2) {
    if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
      var d2 = b2.type;
      if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value)) return;
      b2 = "" + a2._wrapperState.initialValue;
      c2 || b2 === a2.value || (a2.value = b2);
      a2.defaultValue = b2;
    }
    c2 = a2.name;
    "" !== c2 && (a2.name = "");
    a2.defaultChecked = !!a2._wrapperState.initialChecked;
    "" !== c2 && (a2.name = c2);
  }
  function cb(a2, b2, c2) {
    if ("number" !== b2 || Xa(a2.ownerDocument) !== a2) null == c2 ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
  }
  var eb = Array.isArray;
  function fb(a2, b2, c2, d2) {
    a2 = a2.options;
    if (b2) {
      b2 = {};
      for (var e = 0; e < c2.length; e++) b2["$" + c2[e]] = true;
      for (c2 = 0; c2 < a2.length; c2++) e = b2.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e && (a2[c2].selected = e), e && d2 && (a2[c2].defaultSelected = true);
    } else {
      c2 = "" + Sa(c2);
      b2 = null;
      for (e = 0; e < a2.length; e++) {
        if (a2[e].value === c2) {
          a2[e].selected = true;
          d2 && (a2[e].defaultSelected = true);
          return;
        }
        null !== b2 || a2[e].disabled || (b2 = a2[e]);
      }
      null !== b2 && (b2.selected = true);
    }
  }
  function gb(a2, b2) {
    if (null != b2.dangerouslySetInnerHTML) throw Error(p2(91));
    return A2({}, b2, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
  }
  function hb(a2, b2) {
    var c2 = b2.value;
    if (null == c2) {
      c2 = b2.children;
      b2 = b2.defaultValue;
      if (null != c2) {
        if (null != b2) throw Error(p2(92));
        if (eb(c2)) {
          if (1 < c2.length) throw Error(p2(93));
          c2 = c2[0];
        }
        b2 = c2;
      }
      null == b2 && (b2 = "");
      c2 = b2;
    }
    a2._wrapperState = { initialValue: Sa(c2) };
  }
  function ib(a2, b2) {
    var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
    null != c2 && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), null == b2.defaultValue && a2.defaultValue !== c2 && (a2.defaultValue = c2));
    null != d2 && (a2.defaultValue = "" + d2);
  }
  function jb(a2) {
    var b2 = a2.textContent;
    b2 === a2._wrapperState.initialValue && "" !== b2 && null !== b2 && (a2.value = b2);
  }
  function kb(a2) {
    switch (a2) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function lb(a2, b2) {
    return null == a2 || "http://www.w3.org/1999/xhtml" === a2 ? kb(b2) : "http://www.w3.org/2000/svg" === a2 && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a2;
  }
  var mb, nb = function(a2) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e) {
      MSApp.execUnsafeLocalFunction(function() {
        return a2(b2, c2, d2, e);
      });
    } : a2;
  }(function(a2, b2) {
    if ("http://www.w3.org/2000/svg" !== a2.namespaceURI || "innerHTML" in a2) a2.innerHTML = b2;
    else {
      mb = mb || document.createElement("div");
      mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
      for (b2 = mb.firstChild; a2.firstChild; ) a2.removeChild(a2.firstChild);
      for (; b2.firstChild; ) a2.appendChild(b2.firstChild);
    }
  });
  function ob(a2, b2) {
    if (b2) {
      var c2 = a2.firstChild;
      if (c2 && c2 === a2.lastChild && 3 === c2.nodeType) {
        c2.nodeValue = b2;
        return;
      }
    }
    a2.textContent = b2;
  }
  var pb = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  }, qb = ["Webkit", "ms", "Moz", "O"];
  Object.keys(pb).forEach(function(a2) {
    qb.forEach(function(b2) {
      b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
      pb[b2] = pb[a2];
    });
  });
  function rb(a2, b2, c2) {
    return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a2) && pb[a2] ? ("" + b2).trim() : b2 + "px";
  }
  function sb(a2, b2) {
    a2 = a2.style;
    for (var c2 in b2) if (b2.hasOwnProperty(c2)) {
      var d2 = 0 === c2.indexOf("--"), e = rb(c2, b2[c2], d2);
      "float" === c2 && (c2 = "cssFloat");
      d2 ? a2.setProperty(c2, e) : a2[c2] = e;
    }
  }
  var tb = A2({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function ub(a2, b2) {
    if (b2) {
      if (tb[a2] && (null != b2.children || null != b2.dangerouslySetInnerHTML)) throw Error(p2(137, a2));
      if (null != b2.dangerouslySetInnerHTML) {
        if (null != b2.children) throw Error(p2(60));
        if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML)) throw Error(p2(61));
      }
      if (null != b2.style && "object" !== typeof b2.style) throw Error(p2(62));
    }
  }
  function vb(a2, b2) {
    if (-1 === a2.indexOf("-")) return "string" === typeof b2.is;
    switch (a2) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var wb = null;
  function xb(a2) {
    a2 = a2.target || a2.srcElement || window;
    a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
    return 3 === a2.nodeType ? a2.parentNode : a2;
  }
  var yb = null, zb = null, Ab = null;
  function Bb(a2) {
    if (a2 = Cb(a2)) {
      if ("function" !== typeof yb) throw Error(p2(280));
      var b2 = a2.stateNode;
      b2 && (b2 = Db(b2), yb(a2.stateNode, a2.type, b2));
    }
  }
  function Eb(a2) {
    zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
  }
  function Fb() {
    if (zb) {
      var a2 = zb, b2 = Ab;
      Ab = zb = null;
      Bb(a2);
      if (b2) for (a2 = 0; a2 < b2.length; a2++) Bb(b2[a2]);
    }
  }
  function Gb(a2, b2) {
    return a2(b2);
  }
  function Hb() {
  }
  var Ib = false;
  function Jb(a2, b2, c2) {
    if (Ib) return a2(b2, c2);
    Ib = true;
    try {
      return Gb(a2, b2, c2);
    } finally {
      if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
    }
  }
  function Kb(a2, b2) {
    var c2 = a2.stateNode;
    if (null === c2) return null;
    var d2 = Db(c2);
    if (null === d2) return null;
    c2 = d2[b2];
    a: switch (b2) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d2 = !d2.disabled) || (a2 = a2.type, d2 = !("button" === a2 || "input" === a2 || "select" === a2 || "textarea" === a2));
        a2 = !d2;
        break a;
      default:
        a2 = false;
    }
    if (a2) return null;
    if (c2 && "function" !== typeof c2) throw Error(p2(231, b2, typeof c2));
    return c2;
  }
  var Lb = false;
  if (ia) try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", { get: function() {
      Lb = true;
    } });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a2) {
    Lb = false;
  }
  function Nb(a2, b2, c2, d2, e, f2, g2, h2, k2) {
    var l2 = Array.prototype.slice.call(arguments, 3);
    try {
      b2.apply(c2, l2);
    } catch (m2) {
      this.onError(m2);
    }
  }
  var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a2) {
    Ob = true;
    Pb = a2;
  } };
  function Tb(a2, b2, c2, d2, e, f2, g2, h2, k2) {
    Ob = false;
    Pb = null;
    Nb.apply(Sb, arguments);
  }
  function Ub(a2, b2, c2, d2, e, f2, g2, h2, k2) {
    Tb.apply(this, arguments);
    if (Ob) {
      if (Ob) {
        var l2 = Pb;
        Ob = false;
        Pb = null;
      } else throw Error(p2(198));
      Qb || (Qb = true, Rb = l2);
    }
  }
  function Vb(a2) {
    var b2 = a2, c2 = a2;
    if (a2.alternate) for (; b2.return; ) b2 = b2.return;
    else {
      a2 = b2;
      do
        b2 = a2, 0 !== (b2.flags & 4098) && (c2 = b2.return), a2 = b2.return;
      while (a2);
    }
    return 3 === b2.tag ? c2 : null;
  }
  function Wb(a2) {
    if (13 === a2.tag) {
      var b2 = a2.memoizedState;
      null === b2 && (a2 = a2.alternate, null !== a2 && (b2 = a2.memoizedState));
      if (null !== b2) return b2.dehydrated;
    }
    return null;
  }
  function Xb(a2) {
    if (Vb(a2) !== a2) throw Error(p2(188));
  }
  function Yb(a2) {
    var b2 = a2.alternate;
    if (!b2) {
      b2 = Vb(a2);
      if (null === b2) throw Error(p2(188));
      return b2 !== a2 ? null : a2;
    }
    for (var c2 = a2, d2 = b2; ; ) {
      var e = c2.return;
      if (null === e) break;
      var f2 = e.alternate;
      if (null === f2) {
        d2 = e.return;
        if (null !== d2) {
          c2 = d2;
          continue;
        }
        break;
      }
      if (e.child === f2.child) {
        for (f2 = e.child; f2; ) {
          if (f2 === c2) return Xb(e), a2;
          if (f2 === d2) return Xb(e), b2;
          f2 = f2.sibling;
        }
        throw Error(p2(188));
      }
      if (c2.return !== d2.return) c2 = e, d2 = f2;
      else {
        for (var g2 = false, h2 = e.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = e;
            d2 = f2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = e;
            c2 = f2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2) {
          for (h2 = f2.child; h2; ) {
            if (h2 === c2) {
              g2 = true;
              c2 = f2;
              d2 = e;
              break;
            }
            if (h2 === d2) {
              g2 = true;
              d2 = f2;
              c2 = e;
              break;
            }
            h2 = h2.sibling;
          }
          if (!g2) throw Error(p2(189));
        }
      }
      if (c2.alternate !== d2) throw Error(p2(190));
    }
    if (3 !== c2.tag) throw Error(p2(188));
    return c2.stateNode.current === c2 ? a2 : b2;
  }
  function Zb(a2) {
    a2 = Yb(a2);
    return null !== a2 ? $b(a2) : null;
  }
  function $b(a2) {
    if (5 === a2.tag || 6 === a2.tag) return a2;
    for (a2 = a2.child; null !== a2; ) {
      var b2 = $b(a2);
      if (null !== b2) return b2;
      a2 = a2.sibling;
    }
    return null;
  }
  var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B2 = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
  function mc(a2) {
    if (lc && "function" === typeof lc.onCommitFiberRoot) try {
      lc.onCommitFiberRoot(kc, a2, void 0, 128 === (a2.current.flags & 128));
    } catch (b2) {
    }
  }
  var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
  function nc(a2) {
    a2 >>>= 0;
    return 0 === a2 ? 32 : 31 - (pc(a2) / qc | 0) | 0;
  }
  var rc = 64, sc = 4194304;
  function tc(a2) {
    switch (a2 & -a2) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a2 & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return a2 & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return a2;
    }
  }
  function uc(a2, b2) {
    var c2 = a2.pendingLanes;
    if (0 === c2) return 0;
    var d2 = 0, e = a2.suspendedLanes, f2 = a2.pingedLanes, g2 = c2 & 268435455;
    if (0 !== g2) {
      var h2 = g2 & ~e;
      0 !== h2 ? d2 = tc(h2) : (f2 &= g2, 0 !== f2 && (d2 = tc(f2)));
    } else g2 = c2 & ~e, 0 !== g2 ? d2 = tc(g2) : 0 !== f2 && (d2 = tc(f2));
    if (0 === d2) return 0;
    if (0 !== b2 && b2 !== d2 && 0 === (b2 & e) && (e = d2 & -d2, f2 = b2 & -b2, e >= f2 || 16 === e && 0 !== (f2 & 4194240))) return b2;
    0 !== (d2 & 4) && (d2 |= c2 & 16);
    b2 = a2.entangledLanes;
    if (0 !== b2) for (a2 = a2.entanglements, b2 &= d2; 0 < b2; ) c2 = 31 - oc(b2), e = 1 << c2, d2 |= a2[c2], b2 &= ~e;
    return d2;
  }
  function vc(a2, b2) {
    switch (a2) {
      case 1:
      case 2:
      case 4:
        return b2 + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return b2 + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function wc(a2, b2) {
    for (var c2 = a2.suspendedLanes, d2 = a2.pingedLanes, e = a2.expirationTimes, f2 = a2.pendingLanes; 0 < f2; ) {
      var g2 = 31 - oc(f2), h2 = 1 << g2, k2 = e[g2];
      if (-1 === k2) {
        if (0 === (h2 & c2) || 0 !== (h2 & d2)) e[g2] = vc(h2, b2);
      } else k2 <= b2 && (a2.expiredLanes |= h2);
      f2 &= ~h2;
    }
  }
  function xc(a2) {
    a2 = a2.pendingLanes & -1073741825;
    return 0 !== a2 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
  }
  function yc() {
    var a2 = rc;
    rc <<= 1;
    0 === (rc & 4194240) && (rc = 64);
    return a2;
  }
  function zc(a2) {
    for (var b2 = [], c2 = 0; 31 > c2; c2++) b2.push(a2);
    return b2;
  }
  function Ac(a2, b2, c2) {
    a2.pendingLanes |= b2;
    536870912 !== b2 && (a2.suspendedLanes = 0, a2.pingedLanes = 0);
    a2 = a2.eventTimes;
    b2 = 31 - oc(b2);
    a2[b2] = c2;
  }
  function Bc(a2, b2) {
    var c2 = a2.pendingLanes & ~b2;
    a2.pendingLanes = b2;
    a2.suspendedLanes = 0;
    a2.pingedLanes = 0;
    a2.expiredLanes &= b2;
    a2.mutableReadLanes &= b2;
    a2.entangledLanes &= b2;
    b2 = a2.entanglements;
    var d2 = a2.eventTimes;
    for (a2 = a2.expirationTimes; 0 < c2; ) {
      var e = 31 - oc(c2), f2 = 1 << e;
      b2[e] = 0;
      d2[e] = -1;
      a2[e] = -1;
      c2 &= ~f2;
    }
  }
  function Cc(a2, b2) {
    var c2 = a2.entangledLanes |= b2;
    for (a2 = a2.entanglements; c2; ) {
      var d2 = 31 - oc(c2), e = 1 << d2;
      e & b2 | a2[d2] & b2 && (a2[d2] |= b2);
      c2 &= ~e;
    }
  }
  var C2 = 0;
  function Dc(a2) {
    a2 &= -a2;
    return 1 < a2 ? 4 < a2 ? 0 !== (a2 & 268435455) ? 16 : 536870912 : 4 : 1;
  }
  var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Sc(a2, b2) {
    switch (a2) {
      case "focusin":
      case "focusout":
        Lc = null;
        break;
      case "dragenter":
      case "dragleave":
        Mc = null;
        break;
      case "mouseover":
      case "mouseout":
        Nc = null;
        break;
      case "pointerover":
      case "pointerout":
        Oc.delete(b2.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Pc.delete(b2.pointerId);
    }
  }
  function Tc(a2, b2, c2, d2, e, f2) {
    if (null === a2 || a2.nativeEvent !== f2) return a2 = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a2;
    a2.eventSystemFlags |= d2;
    b2 = a2.targetContainers;
    null !== e && -1 === b2.indexOf(e) && b2.push(e);
    return a2;
  }
  function Uc(a2, b2, c2, d2, e) {
    switch (b2) {
      case "focusin":
        return Lc = Tc(Lc, a2, b2, c2, d2, e), true;
      case "dragenter":
        return Mc = Tc(Mc, a2, b2, c2, d2, e), true;
      case "mouseover":
        return Nc = Tc(Nc, a2, b2, c2, d2, e), true;
      case "pointerover":
        var f2 = e.pointerId;
        Oc.set(f2, Tc(Oc.get(f2) || null, a2, b2, c2, d2, e));
        return true;
      case "gotpointercapture":
        return f2 = e.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a2, b2, c2, d2, e)), true;
    }
    return false;
  }
  function Vc(a2) {
    var b2 = Wc(a2.target);
    if (null !== b2) {
      var c2 = Vb(b2);
      if (null !== c2) {
        if (b2 = c2.tag, 13 === b2) {
          if (b2 = Wb(c2), null !== b2) {
            a2.blockedOn = b2;
            Ic(a2.priority, function() {
              Gc(c2);
            });
            return;
          }
        } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
          a2.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
          return;
        }
      }
    }
    a2.blockedOn = null;
  }
  function Xc(a2) {
    if (null !== a2.blockedOn) return false;
    for (var b2 = a2.targetContainers; 0 < b2.length; ) {
      var c2 = Yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
      if (null === c2) {
        c2 = a2.nativeEvent;
        var d2 = new c2.constructor(c2.type, c2);
        wb = d2;
        c2.target.dispatchEvent(d2);
        wb = null;
      } else return b2 = Cb(c2), null !== b2 && Fc(b2), a2.blockedOn = c2, false;
      b2.shift();
    }
    return true;
  }
  function Zc(a2, b2, c2) {
    Xc(a2) && c2.delete(b2);
  }
  function $c() {
    Jc = false;
    null !== Lc && Xc(Lc) && (Lc = null);
    null !== Mc && Xc(Mc) && (Mc = null);
    null !== Nc && Xc(Nc) && (Nc = null);
    Oc.forEach(Zc);
    Pc.forEach(Zc);
  }
  function ad(a2, b2) {
    a2.blockedOn === b2 && (a2.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
  }
  function bd(a2) {
    function b2(b3) {
      return ad(b3, a2);
    }
    if (0 < Kc.length) {
      ad(Kc[0], a2);
      for (var c2 = 1; c2 < Kc.length; c2++) {
        var d2 = Kc[c2];
        d2.blockedOn === a2 && (d2.blockedOn = null);
      }
    }
    null !== Lc && ad(Lc, a2);
    null !== Mc && ad(Mc, a2);
    null !== Nc && ad(Nc, a2);
    Oc.forEach(b2);
    Pc.forEach(b2);
    for (c2 = 0; c2 < Qc.length; c2++) d2 = Qc[c2], d2.blockedOn === a2 && (d2.blockedOn = null);
    for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); ) Vc(c2), null === c2.blockedOn && Qc.shift();
  }
  var cd = ua.ReactCurrentBatchConfig, dd = true;
  function ed(a2, b2, c2, d2) {
    var e = C2, f2 = cd.transition;
    cd.transition = null;
    try {
      C2 = 1, fd(a2, b2, c2, d2);
    } finally {
      C2 = e, cd.transition = f2;
    }
  }
  function gd(a2, b2, c2, d2) {
    var e = C2, f2 = cd.transition;
    cd.transition = null;
    try {
      C2 = 4, fd(a2, b2, c2, d2);
    } finally {
      C2 = e, cd.transition = f2;
    }
  }
  function fd(a2, b2, c2, d2) {
    if (dd) {
      var e = Yc(a2, b2, c2, d2);
      if (null === e) hd(a2, b2, d2, id, c2), Sc(a2, d2);
      else if (Uc(e, a2, b2, c2, d2)) d2.stopPropagation();
      else if (Sc(a2, d2), b2 & 4 && -1 < Rc.indexOf(a2)) {
        for (; null !== e; ) {
          var f2 = Cb(e);
          null !== f2 && Ec(f2);
          f2 = Yc(a2, b2, c2, d2);
          null === f2 && hd(a2, b2, d2, id, c2);
          if (f2 === e) break;
          e = f2;
        }
        null !== e && d2.stopPropagation();
      } else hd(a2, b2, d2, null, c2);
    }
  }
  var id = null;
  function Yc(a2, b2, c2, d2) {
    id = null;
    a2 = xb(d2);
    a2 = Wc(a2);
    if (null !== a2) if (b2 = Vb(a2), null === b2) a2 = null;
    else if (c2 = b2.tag, 13 === c2) {
      a2 = Wb(b2);
      if (null !== a2) return a2;
      a2 = null;
    } else if (3 === c2) {
      if (b2.stateNode.current.memoizedState.isDehydrated) return 3 === b2.tag ? b2.stateNode.containerInfo : null;
      a2 = null;
    } else b2 !== a2 && (a2 = null);
    id = a2;
    return null;
  }
  function jd(a2) {
    switch (a2) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ec()) {
          case fc:
            return 1;
          case gc:
            return 4;
          case hc:
          case ic:
            return 16;
          case jc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var kd = null, ld = null, md = null;
  function nd() {
    if (md) return md;
    var a2, b2 = ld, c2 = b2.length, d2, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
    for (a2 = 0; a2 < c2 && b2[a2] === e[a2]; a2++) ;
    var g2 = c2 - a2;
    for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e[f2 - d2]; d2++) ;
    return md = e.slice(a2, 1 < d2 ? 1 - d2 : void 0);
  }
  function od(a2) {
    var b2 = a2.keyCode;
    "charCode" in a2 ? (a2 = a2.charCode, 0 === a2 && 13 === b2 && (a2 = 13)) : a2 = b2;
    10 === a2 && (a2 = 13);
    return 32 <= a2 || 13 === a2 ? a2 : 0;
  }
  function pd() {
    return true;
  }
  function qd() {
    return false;
  }
  function rd(a2) {
    function b2(b3, d2, e, f2, g2) {
      this._reactName = b3;
      this._targetInst = e;
      this.type = d2;
      this.nativeEvent = f2;
      this.target = g2;
      this.currentTarget = null;
      for (var c2 in a2) a2.hasOwnProperty(c2) && (b3 = a2[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
      this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
      this.isPropagationStopped = qd;
      return this;
    }
    A2(b2.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var a3 = this.nativeEvent;
      a3 && (a3.preventDefault ? a3.preventDefault() : "unknown" !== typeof a3.returnValue && (a3.returnValue = false), this.isDefaultPrevented = pd);
    }, stopPropagation: function() {
      var a3 = this.nativeEvent;
      a3 && (a3.stopPropagation ? a3.stopPropagation() : "unknown" !== typeof a3.cancelBubble && (a3.cancelBubble = true), this.isPropagationStopped = pd);
    }, persist: function() {
    }, isPersistent: pd });
    return b2;
  }
  var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
    return a2.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A2({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A2({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
    return void 0 === a2.relatedTarget ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
  }, movementX: function(a2) {
    if ("movementX" in a2) return a2.movementX;
    a2 !== yd && (yd && "mousemove" === a2.type ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
    return wd;
  }, movementY: function(a2) {
    return "movementY" in a2 ? a2.movementY : xd;
  } }), Bd = rd(Ad), Cd = A2({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A2({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A2({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A2({}, sd, { clipboardData: function(a2) {
    return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
  } }), Jd = rd(Id), Kd = A2({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Nd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Pd(a2) {
    var b2 = this.nativeEvent;
    return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Od[a2]) ? !!b2[a2] : false;
  }
  function zd() {
    return Pd;
  }
  var Qd = A2({}, ud, { key: function(a2) {
    if (a2.key) {
      var b2 = Md[a2.key] || a2.key;
      if ("Unidentified" !== b2) return b2;
    }
    return "keypress" === a2.type ? (a2 = od(a2), 13 === a2 ? "Enter" : String.fromCharCode(a2)) : "keydown" === a2.type || "keyup" === a2.type ? Nd[a2.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
    return "keypress" === a2.type ? od(a2) : 0;
  }, keyCode: function(a2) {
    return "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
  }, which: function(a2) {
    return "keypress" === a2.type ? od(a2) : "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
  } }), Rd = rd(Qd), Sd = A2({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A2({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A2({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A2({}, Ad, {
    deltaX: function(a2) {
      return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
    },
    deltaY: function(a2) {
      return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Zd = rd(Yd), $d = [9, 13, 27, 32], ae2 = ia && "CompositionEvent" in window, be2 = null;
  ia && "documentMode" in document && (be2 = document.documentMode);
  var ce2 = ia && "TextEvent" in window && !be2, de2 = ia && (!ae2 || be2 && 8 < be2 && 11 >= be2), ee2 = String.fromCharCode(32), fe2 = false;
  function ge2(a2, b2) {
    switch (a2) {
      case "keyup":
        return -1 !== $d.indexOf(b2.keyCode);
      case "keydown":
        return 229 !== b2.keyCode;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function he2(a2) {
    a2 = a2.detail;
    return "object" === typeof a2 && "data" in a2 ? a2.data : null;
  }
  var ie2 = false;
  function je2(a2, b2) {
    switch (a2) {
      case "compositionend":
        return he2(b2);
      case "keypress":
        if (32 !== b2.which) return null;
        fe2 = true;
        return ee2;
      case "textInput":
        return a2 = b2.data, a2 === ee2 && fe2 ? null : a2;
      default:
        return null;
    }
  }
  function ke2(a2, b2) {
    if (ie2) return "compositionend" === a2 || !ae2 && ge2(a2, b2) ? (a2 = nd(), md = ld = kd = null, ie2 = false, a2) : null;
    switch (a2) {
      case "paste":
        return null;
      case "keypress":
        if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
          if (b2.char && 1 < b2.char.length) return b2.char;
          if (b2.which) return String.fromCharCode(b2.which);
        }
        return null;
      case "compositionend":
        return de2 && "ko" !== b2.locale ? null : b2.data;
      default:
        return null;
    }
  }
  var le2 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function me2(a2) {
    var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
    return "input" === b2 ? !!le2[a2.type] : "textarea" === b2 ? true : false;
  }
  function ne2(a2, b2, c2, d2) {
    Eb(d2);
    b2 = oe2(b2, "onChange");
    0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a2.push({ event: c2, listeners: b2 }));
  }
  var pe2 = null, qe2 = null;
  function re2(a2) {
    se2(a2, 0);
  }
  function te2(a2) {
    var b2 = ue2(a2);
    if (Wa(b2)) return a2;
  }
  function ve2(a2, b2) {
    if ("change" === a2) return b2;
  }
  var we2 = false;
  if (ia) {
    var xe2;
    if (ia) {
      var ye2 = "oninput" in document;
      if (!ye2) {
        var ze2 = document.createElement("div");
        ze2.setAttribute("oninput", "return;");
        ye2 = "function" === typeof ze2.oninput;
      }
      xe2 = ye2;
    } else xe2 = false;
    we2 = xe2 && (!document.documentMode || 9 < document.documentMode);
  }
  function Ae2() {
    pe2 && (pe2.detachEvent("onpropertychange", Be2), qe2 = pe2 = null);
  }
  function Be2(a2) {
    if ("value" === a2.propertyName && te2(qe2)) {
      var b2 = [];
      ne2(b2, qe2, a2, xb(a2));
      Jb(re2, b2);
    }
  }
  function Ce2(a2, b2, c2) {
    "focusin" === a2 ? (Ae2(), pe2 = b2, qe2 = c2, pe2.attachEvent("onpropertychange", Be2)) : "focusout" === a2 && Ae2();
  }
  function De2(a2) {
    if ("selectionchange" === a2 || "keyup" === a2 || "keydown" === a2) return te2(qe2);
  }
  function Ee2(a2, b2) {
    if ("click" === a2) return te2(b2);
  }
  function Fe2(a2, b2) {
    if ("input" === a2 || "change" === a2) return te2(b2);
  }
  function Ge2(a2, b2) {
    return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
  }
  var He2 = "function" === typeof Object.is ? Object.is : Ge2;
  function Ie2(a2, b2) {
    if (He2(a2, b2)) return true;
    if ("object" !== typeof a2 || null === a2 || "object" !== typeof b2 || null === b2) return false;
    var c2 = Object.keys(a2), d2 = Object.keys(b2);
    if (c2.length !== d2.length) return false;
    for (d2 = 0; d2 < c2.length; d2++) {
      var e = c2[d2];
      if (!ja.call(b2, e) || !He2(a2[e], b2[e])) return false;
    }
    return true;
  }
  function Je(a2) {
    for (; a2 && a2.firstChild; ) a2 = a2.firstChild;
    return a2;
  }
  function Ke(a2, b2) {
    var c2 = Je(a2);
    a2 = 0;
    for (var d2; c2; ) {
      if (3 === c2.nodeType) {
        d2 = a2 + c2.textContent.length;
        if (a2 <= b2 && d2 >= b2) return { node: c2, offset: b2 - a2 };
        a2 = d2;
      }
      a: {
        for (; c2; ) {
          if (c2.nextSibling) {
            c2 = c2.nextSibling;
            break a;
          }
          c2 = c2.parentNode;
        }
        c2 = void 0;
      }
      c2 = Je(c2);
    }
  }
  function Le2(a2, b2) {
    return a2 && b2 ? a2 === b2 ? true : a2 && 3 === a2.nodeType ? false : b2 && 3 === b2.nodeType ? Le2(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
  }
  function Me2() {
    for (var a2 = window, b2 = Xa(); b2 instanceof a2.HTMLIFrameElement; ) {
      try {
        var c2 = "string" === typeof b2.contentWindow.location.href;
      } catch (d2) {
        c2 = false;
      }
      if (c2) a2 = b2.contentWindow;
      else break;
      b2 = Xa(a2.document);
    }
    return b2;
  }
  function Ne2(a2) {
    var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
    return b2 && ("input" === b2 && ("text" === a2.type || "search" === a2.type || "tel" === a2.type || "url" === a2.type || "password" === a2.type) || "textarea" === b2 || "true" === a2.contentEditable);
  }
  function Oe2(a2) {
    var b2 = Me2(), c2 = a2.focusedElem, d2 = a2.selectionRange;
    if (b2 !== c2 && c2 && c2.ownerDocument && Le2(c2.ownerDocument.documentElement, c2)) {
      if (null !== d2 && Ne2(c2)) {
        if (b2 = d2.start, a2 = d2.end, void 0 === a2 && (a2 = b2), "selectionStart" in c2) c2.selectionStart = b2, c2.selectionEnd = Math.min(a2, c2.value.length);
        else if (a2 = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a2.getSelection) {
          a2 = a2.getSelection();
          var e = c2.textContent.length, f2 = Math.min(d2.start, e);
          d2 = void 0 === d2.end ? f2 : Math.min(d2.end, e);
          !a2.extend && f2 > d2 && (e = d2, d2 = f2, f2 = e);
          e = Ke(c2, f2);
          var g2 = Ke(
            c2,
            d2
          );
          e && g2 && (1 !== a2.rangeCount || a2.anchorNode !== e.node || a2.anchorOffset !== e.offset || a2.focusNode !== g2.node || a2.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e.node, e.offset), a2.removeAllRanges(), f2 > d2 ? (a2.addRange(b2), a2.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a2.addRange(b2)));
        }
      }
      b2 = [];
      for (a2 = c2; a2 = a2.parentNode; ) 1 === a2.nodeType && b2.push({ element: a2, left: a2.scrollLeft, top: a2.scrollTop });
      "function" === typeof c2.focus && c2.focus();
      for (c2 = 0; c2 < b2.length; c2++) a2 = b2[c2], a2.element.scrollLeft = a2.left, a2.element.scrollTop = a2.top;
    }
  }
  var Pe2 = ia && "documentMode" in document && 11 >= document.documentMode, Qe2 = null, Re2 = null, Se2 = null, Te2 = false;
  function Ue2(a2, b2, c2) {
    var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
    Te2 || null == Qe2 || Qe2 !== Xa(d2) || (d2 = Qe2, "selectionStart" in d2 && Ne2(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se2 && Ie2(Se2, d2) || (Se2 = d2, d2 = oe2(Re2, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a2.push({ event: b2, listeners: d2 }), b2.target = Qe2)));
  }
  function Ve(a2, b2) {
    var c2 = {};
    c2[a2.toLowerCase()] = b2.toLowerCase();
    c2["Webkit" + a2] = "webkit" + b2;
    c2["Moz" + a2] = "moz" + b2;
    return c2;
  }
  var We2 = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
  ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We2.animationend.animation, delete We2.animationiteration.animation, delete We2.animationstart.animation), "TransitionEvent" in window || delete We2.transitionend.transition);
  function Ze2(a2) {
    if (Xe[a2]) return Xe[a2];
    if (!We2[a2]) return a2;
    var b2 = We2[a2], c2;
    for (c2 in b2) if (b2.hasOwnProperty(c2) && c2 in Ye) return Xe[a2] = b2[c2];
    return a2;
  }
  var $e2 = Ze2("animationend"), af = Ze2("animationiteration"), bf = Ze2("animationstart"), cf = Ze2("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ff(a2, b2) {
    df.set(a2, b2);
    fa(b2, [a2]);
  }
  for (var gf = 0; gf < ef.length; gf++) {
    var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
    ff(jf, "on" + kf);
  }
  ff($e2, "onAnimationEnd");
  ff(af, "onAnimationIteration");
  ff(bf, "onAnimationStart");
  ff("dblclick", "onDoubleClick");
  ff("focusin", "onFocus");
  ff("focusout", "onBlur");
  ff(cf, "onTransitionEnd");
  ha("onMouseEnter", ["mouseout", "mouseover"]);
  ha("onMouseLeave", ["mouseout", "mouseover"]);
  ha("onPointerEnter", ["pointerout", "pointerover"]);
  ha("onPointerLeave", ["pointerout", "pointerover"]);
  fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
  function nf(a2, b2, c2) {
    var d2 = a2.type || "unknown-event";
    a2.currentTarget = c2;
    Ub(d2, b2, void 0, a2);
    a2.currentTarget = null;
  }
  function se2(a2, b2) {
    b2 = 0 !== (b2 & 4);
    for (var c2 = 0; c2 < a2.length; c2++) {
      var d2 = a2[c2], e = d2.event;
      d2 = d2.listeners;
      a: {
        var f2 = void 0;
        if (b2) for (var g2 = d2.length - 1; 0 <= g2; g2--) {
          var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e.isPropagationStopped()) break a;
          nf(e, h2, l2);
          f2 = k2;
        }
        else for (g2 = 0; g2 < d2.length; g2++) {
          h2 = d2[g2];
          k2 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e.isPropagationStopped()) break a;
          nf(e, h2, l2);
          f2 = k2;
        }
      }
    }
    if (Qb) throw a2 = Rb, Qb = false, Rb = null, a2;
  }
  function D2(a2, b2) {
    var c2 = b2[of];
    void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
    var d2 = a2 + "__bubble";
    c2.has(d2) || (pf(b2, a2, 2, false), c2.add(d2));
  }
  function qf(a2, b2, c2) {
    var d2 = 0;
    b2 && (d2 |= 4);
    pf(c2, a2, d2, b2);
  }
  var rf = "_reactListening" + Math.random().toString(36).slice(2);
  function sf(a2) {
    if (!a2[rf]) {
      a2[rf] = true;
      da.forEach(function(b3) {
        "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a2), qf(b3, true, a2));
      });
      var b2 = 9 === a2.nodeType ? a2 : a2.ownerDocument;
      null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
    }
  }
  function pf(a2, b2, c2, d2) {
    switch (jd(b2)) {
      case 1:
        var e = ed;
        break;
      case 4:
        e = gd;
        break;
      default:
        e = fd;
    }
    c2 = e.bind(null, b2, c2, a2);
    e = void 0;
    !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e = true);
    d2 ? void 0 !== e ? a2.addEventListener(b2, c2, { capture: true, passive: e }) : a2.addEventListener(b2, c2, true) : void 0 !== e ? a2.addEventListener(b2, c2, { passive: e }) : a2.addEventListener(b2, c2, false);
  }
  function hd(a2, b2, c2, d2, e) {
    var f2 = d2;
    if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2) a: for (; ; ) {
      if (null === d2) return;
      var g2 = d2.tag;
      if (3 === g2 || 4 === g2) {
        var h2 = d2.stateNode.containerInfo;
        if (h2 === e || 8 === h2.nodeType && h2.parentNode === e) break;
        if (4 === g2) for (g2 = d2.return; null !== g2; ) {
          var k2 = g2.tag;
          if (3 === k2 || 4 === k2) {
            if (k2 = g2.stateNode.containerInfo, k2 === e || 8 === k2.nodeType && k2.parentNode === e) return;
          }
          g2 = g2.return;
        }
        for (; null !== h2; ) {
          g2 = Wc(h2);
          if (null === g2) return;
          k2 = g2.tag;
          if (5 === k2 || 6 === k2) {
            d2 = f2 = g2;
            continue a;
          }
          h2 = h2.parentNode;
        }
      }
      d2 = d2.return;
    }
    Jb(function() {
      var d3 = f2, e2 = xb(c2), g3 = [];
      a: {
        var h3 = df.get(a2);
        if (void 0 !== h3) {
          var k3 = td, n2 = a2;
          switch (a2) {
            case "keypress":
              if (0 === od(c2)) break a;
            case "keydown":
            case "keyup":
              k3 = Rd;
              break;
            case "focusin":
              n2 = "focus";
              k3 = Fd;
              break;
            case "focusout":
              n2 = "blur";
              k3 = Fd;
              break;
            case "beforeblur":
            case "afterblur":
              k3 = Fd;
              break;
            case "click":
              if (2 === c2.button) break a;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k3 = Bd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k3 = Dd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k3 = Vd;
              break;
            case $e2:
            case af:
            case bf:
              k3 = Hd;
              break;
            case cf:
              k3 = Xd;
              break;
            case "scroll":
              k3 = vd;
              break;
            case "wheel":
              k3 = Zd;
              break;
            case "copy":
            case "cut":
            case "paste":
              k3 = Jd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k3 = Td;
          }
          var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a2, x2 = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
          t2 = [];
          for (var w2 = d3, u2; null !== w2; ) {
            u2 = w2;
            var F2 = u2.stateNode;
            5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
            if (J2) break;
            w2 = w2.return;
          }
          0 < t2.length && (h3 = new k3(h3, n2, null, c2, e2), g3.push({ event: h3, listeners: t2 }));
        }
      }
      if (0 === (b2 & 7)) {
        a: {
          h3 = "mouseover" === a2 || "pointerover" === a2;
          k3 = "mouseout" === a2 || "pointerout" === a2;
          if (h3 && c2 !== wb && (n2 = c2.relatedTarget || c2.fromElement) && (Wc(n2) || n2[uf])) break a;
          if (k3 || h3) {
            h3 = e2.window === e2 ? e2 : (h3 = e2.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
            if (k3) {
              if (n2 = c2.relatedTarget || c2.toElement, k3 = d3, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag)) n2 = null;
            } else k3 = null, n2 = d3;
            if (k3 !== n2) {
              t2 = Bd;
              F2 = "onMouseLeave";
              x2 = "onMouseEnter";
              w2 = "mouse";
              if ("pointerout" === a2 || "pointerover" === a2) t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
              J2 = null == k3 ? h3 : ue2(k3);
              u2 = null == n2 ? h3 : ue2(n2);
              h3 = new t2(F2, w2 + "leave", k3, c2, e2);
              h3.target = J2;
              h3.relatedTarget = u2;
              F2 = null;
              Wc(e2) === d3 && (t2 = new t2(x2, w2 + "enter", n2, c2, e2), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
              J2 = F2;
              if (k3 && n2) b: {
                t2 = k3;
                x2 = n2;
                w2 = 0;
                for (u2 = t2; u2; u2 = vf(u2)) w2++;
                u2 = 0;
                for (F2 = x2; F2; F2 = vf(F2)) u2++;
                for (; 0 < w2 - u2; ) t2 = vf(t2), w2--;
                for (; 0 < u2 - w2; ) x2 = vf(x2), u2--;
                for (; w2--; ) {
                  if (t2 === x2 || null !== x2 && t2 === x2.alternate) break b;
                  t2 = vf(t2);
                  x2 = vf(x2);
                }
                t2 = null;
              }
              else t2 = null;
              null !== k3 && wf(g3, h3, k3, t2, false);
              null !== n2 && null !== J2 && wf(g3, J2, n2, t2, true);
            }
          }
        }
        a: {
          h3 = d3 ? ue2(d3) : window;
          k3 = h3.nodeName && h3.nodeName.toLowerCase();
          if ("select" === k3 || "input" === k3 && "file" === h3.type) var na = ve2;
          else if (me2(h3)) if (we2) na = Fe2;
          else {
            na = De2;
            var xa = Ce2;
          }
          else (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee2);
          if (na && (na = na(a2, d3))) {
            ne2(g3, na, c2, e2);
            break a;
          }
          xa && xa(a2, h3, d3);
          "focusout" === a2 && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
        }
        xa = d3 ? ue2(d3) : window;
        switch (a2) {
          case "focusin":
            if (me2(xa) || "true" === xa.contentEditable) Qe2 = xa, Re2 = d3, Se2 = null;
            break;
          case "focusout":
            Se2 = Re2 = Qe2 = null;
            break;
          case "mousedown":
            Te2 = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Te2 = false;
            Ue2(g3, c2, e2);
            break;
          case "selectionchange":
            if (Pe2) break;
          case "keydown":
          case "keyup":
            Ue2(g3, c2, e2);
        }
        var $a;
        if (ae2) b: {
          switch (a2) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
        else ie2 ? ge2(a2, c2) && (ba = "onCompositionEnd") : "keydown" === a2 && 229 === c2.keyCode && (ba = "onCompositionStart");
        ba && (de2 && "ko" !== c2.locale && (ie2 || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie2 && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie2 = true)), xa = oe2(d3, ba), 0 < xa.length && (ba = new Ld(ba, a2, null, c2, e2), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he2(c2), null !== $a && (ba.data = $a))));
        if ($a = ce2 ? je2(a2, c2) : ke2(a2, c2)) d3 = oe2(d3, "onBeforeInput"), 0 < d3.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c2, e2), g3.push({ event: e2, listeners: d3 }), e2.data = $a);
      }
      se2(g3, b2);
    });
  }
  function tf(a2, b2, c2) {
    return { instance: a2, listener: b2, currentTarget: c2 };
  }
  function oe2(a2, b2) {
    for (var c2 = b2 + "Capture", d2 = []; null !== a2; ) {
      var e = a2, f2 = e.stateNode;
      5 === e.tag && null !== f2 && (e = f2, f2 = Kb(a2, c2), null != f2 && d2.unshift(tf(a2, f2, e)), f2 = Kb(a2, b2), null != f2 && d2.push(tf(a2, f2, e)));
      a2 = a2.return;
    }
    return d2;
  }
  function vf(a2) {
    if (null === a2) return null;
    do
      a2 = a2.return;
    while (a2 && 5 !== a2.tag);
    return a2 ? a2 : null;
  }
  function wf(a2, b2, c2, d2, e) {
    for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
      var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
      if (null !== k2 && k2 === d2) break;
      5 === h2.tag && null !== l2 && (h2 = l2, e ? (k2 = Kb(c2, f2), null != k2 && g2.unshift(tf(c2, k2, h2))) : e || (k2 = Kb(c2, f2), null != k2 && g2.push(tf(c2, k2, h2))));
      c2 = c2.return;
    }
    0 !== g2.length && a2.push({ event: b2, listeners: g2 });
  }
  var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
  function zf(a2) {
    return ("string" === typeof a2 ? a2 : "" + a2).replace(xf, "\n").replace(yf, "");
  }
  function Af(a2, b2, c2) {
    b2 = zf(b2);
    if (zf(a2) !== b2 && c2) throw Error(p2(425));
  }
  function Bf() {
  }
  var Cf = null, Df = null;
  function Ef(a2, b2) {
    return "textarea" === a2 || "noscript" === a2 || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
  }
  var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a2) {
    return Hf.resolve(null).then(a2).catch(If);
  } : Ff;
  function If(a2) {
    setTimeout(function() {
      throw a2;
    });
  }
  function Kf(a2, b2) {
    var c2 = b2, d2 = 0;
    do {
      var e = c2.nextSibling;
      a2.removeChild(c2);
      if (e && 8 === e.nodeType) if (c2 = e.data, "/$" === c2) {
        if (0 === d2) {
          a2.removeChild(e);
          bd(b2);
          return;
        }
        d2--;
      } else "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
      c2 = e;
    } while (c2);
    bd(b2);
  }
  function Lf(a2) {
    for (; null != a2; a2 = a2.nextSibling) {
      var b2 = a2.nodeType;
      if (1 === b2 || 3 === b2) break;
      if (8 === b2) {
        b2 = a2.data;
        if ("$" === b2 || "$!" === b2 || "$?" === b2) break;
        if ("/$" === b2) return null;
      }
    }
    return a2;
  }
  function Mf(a2) {
    a2 = a2.previousSibling;
    for (var b2 = 0; a2; ) {
      if (8 === a2.nodeType) {
        var c2 = a2.data;
        if ("$" === c2 || "$!" === c2 || "$?" === c2) {
          if (0 === b2) return a2;
          b2--;
        } else "/$" === c2 && b2++;
      }
      a2 = a2.previousSibling;
    }
    return null;
  }
  var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
  function Wc(a2) {
    var b2 = a2[Of];
    if (b2) return b2;
    for (var c2 = a2.parentNode; c2; ) {
      if (b2 = c2[uf] || c2[Of]) {
        c2 = b2.alternate;
        if (null !== b2.child || null !== c2 && null !== c2.child) for (a2 = Mf(a2); null !== a2; ) {
          if (c2 = a2[Of]) return c2;
          a2 = Mf(a2);
        }
        return b2;
      }
      a2 = c2;
      c2 = a2.parentNode;
    }
    return null;
  }
  function Cb(a2) {
    a2 = a2[Of] || a2[uf];
    return !a2 || 5 !== a2.tag && 6 !== a2.tag && 13 !== a2.tag && 3 !== a2.tag ? null : a2;
  }
  function ue2(a2) {
    if (5 === a2.tag || 6 === a2.tag) return a2.stateNode;
    throw Error(p2(33));
  }
  function Db(a2) {
    return a2[Pf] || null;
  }
  var Sf = [], Tf = -1;
  function Uf(a2) {
    return { current: a2 };
  }
  function E2(a2) {
    0 > Tf || (a2.current = Sf[Tf], Sf[Tf] = null, Tf--);
  }
  function G2(a2, b2) {
    Tf++;
    Sf[Tf] = a2.current;
    a2.current = b2;
  }
  var Vf = {}, H2 = Uf(Vf), Wf = Uf(false), Xf = Vf;
  function Yf(a2, b2) {
    var c2 = a2.type.contextTypes;
    if (!c2) return Vf;
    var d2 = a2.stateNode;
    if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2) return d2.__reactInternalMemoizedMaskedChildContext;
    var e = {}, f2;
    for (f2 in c2) e[f2] = b2[f2];
    d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  }
  function Zf(a2) {
    a2 = a2.childContextTypes;
    return null !== a2 && void 0 !== a2;
  }
  function $f() {
    E2(Wf);
    E2(H2);
  }
  function ag(a2, b2, c2) {
    if (H2.current !== Vf) throw Error(p2(168));
    G2(H2, b2);
    G2(Wf, c2);
  }
  function bg(a2, b2, c2) {
    var d2 = a2.stateNode;
    b2 = b2.childContextTypes;
    if ("function" !== typeof d2.getChildContext) return c2;
    d2 = d2.getChildContext();
    for (var e in d2) if (!(e in b2)) throw Error(p2(108, Ra(a2) || "Unknown", e));
    return A2({}, c2, d2);
  }
  function cg(a2) {
    a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Vf;
    Xf = H2.current;
    G2(H2, a2);
    G2(Wf, Wf.current);
    return true;
  }
  function dg(a2, b2, c2) {
    var d2 = a2.stateNode;
    if (!d2) throw Error(p2(169));
    c2 ? (a2 = bg(a2, b2, Xf), d2.__reactInternalMemoizedMergedChildContext = a2, E2(Wf), E2(H2), G2(H2, a2)) : E2(Wf);
    G2(Wf, c2);
  }
  var eg = null, fg = false, gg = false;
  function hg(a2) {
    null === eg ? eg = [a2] : eg.push(a2);
  }
  function ig(a2) {
    fg = true;
    hg(a2);
  }
  function jg() {
    if (!gg && null !== eg) {
      gg = true;
      var a2 = 0, b2 = C2;
      try {
        var c2 = eg;
        for (C2 = 1; a2 < c2.length; a2++) {
          var d2 = c2[a2];
          do
            d2 = d2(true);
          while (null !== d2);
        }
        eg = null;
        fg = false;
      } catch (e) {
        throw null !== eg && (eg = eg.slice(a2 + 1)), ac(fc, jg), e;
      } finally {
        C2 = b2, gg = false;
      }
    }
    return null;
  }
  var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
  function tg(a2, b2) {
    kg[lg++] = ng;
    kg[lg++] = mg;
    mg = a2;
    ng = b2;
  }
  function ug(a2, b2, c2) {
    og[pg++] = rg;
    og[pg++] = sg;
    og[pg++] = qg;
    qg = a2;
    var d2 = rg;
    a2 = sg;
    var e = 32 - oc(d2) - 1;
    d2 &= ~(1 << e);
    c2 += 1;
    var f2 = 32 - oc(b2) + e;
    if (30 < f2) {
      var g2 = e - e % 5;
      f2 = (d2 & (1 << g2) - 1).toString(32);
      d2 >>= g2;
      e -= g2;
      rg = 1 << 32 - oc(b2) + e | c2 << e | d2;
      sg = f2 + a2;
    } else rg = 1 << f2 | c2 << e | d2, sg = a2;
  }
  function vg(a2) {
    null !== a2.return && (tg(a2, 1), ug(a2, 1, 0));
  }
  function wg(a2) {
    for (; a2 === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
    for (; a2 === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
  }
  var xg = null, yg = null, I2 = false, zg = null;
  function Ag(a2, b2) {
    var c2 = Bg(5, null, null, 0);
    c2.elementType = "DELETED";
    c2.stateNode = b2;
    c2.return = a2;
    b2 = a2.deletions;
    null === b2 ? (a2.deletions = [c2], a2.flags |= 16) : b2.push(c2);
  }
  function Cg(a2, b2) {
    switch (a2.tag) {
      case 5:
        var c2 = a2.type;
        b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
        return null !== b2 ? (a2.stateNode = b2, xg = a2, yg = Lf(b2.firstChild), true) : false;
      case 6:
        return b2 = "" === a2.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a2.stateNode = b2, xg = a2, yg = null, true) : false;
      case 13:
        return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a2.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a2, a2.child = c2, xg = a2, yg = null, true) : false;
      default:
        return false;
    }
  }
  function Dg(a2) {
    return 0 !== (a2.mode & 1) && 0 === (a2.flags & 128);
  }
  function Eg(a2) {
    if (I2) {
      var b2 = yg;
      if (b2) {
        var c2 = b2;
        if (!Cg(a2, b2)) {
          if (Dg(a2)) throw Error(p2(418));
          b2 = Lf(c2.nextSibling);
          var d2 = xg;
          b2 && Cg(a2, b2) ? Ag(d2, c2) : (a2.flags = a2.flags & -4097 | 2, I2 = false, xg = a2);
        }
      } else {
        if (Dg(a2)) throw Error(p2(418));
        a2.flags = a2.flags & -4097 | 2;
        I2 = false;
        xg = a2;
      }
    }
  }
  function Fg(a2) {
    for (a2 = a2.return; null !== a2 && 5 !== a2.tag && 3 !== a2.tag && 13 !== a2.tag; ) a2 = a2.return;
    xg = a2;
  }
  function Gg(a2) {
    if (a2 !== xg) return false;
    if (!I2) return Fg(a2), I2 = true, false;
    var b2;
    (b2 = 3 !== a2.tag) && !(b2 = 5 !== a2.tag) && (b2 = a2.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a2.type, a2.memoizedProps));
    if (b2 && (b2 = yg)) {
      if (Dg(a2)) throw Hg(), Error(p2(418));
      for (; b2; ) Ag(a2, b2), b2 = Lf(b2.nextSibling);
    }
    Fg(a2);
    if (13 === a2.tag) {
      a2 = a2.memoizedState;
      a2 = null !== a2 ? a2.dehydrated : null;
      if (!a2) throw Error(p2(317));
      a: {
        a2 = a2.nextSibling;
        for (b2 = 0; a2; ) {
          if (8 === a2.nodeType) {
            var c2 = a2.data;
            if ("/$" === c2) {
              if (0 === b2) {
                yg = Lf(a2.nextSibling);
                break a;
              }
              b2--;
            } else "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
          }
          a2 = a2.nextSibling;
        }
        yg = null;
      }
    } else yg = xg ? Lf(a2.stateNode.nextSibling) : null;
    return true;
  }
  function Hg() {
    for (var a2 = yg; a2; ) a2 = Lf(a2.nextSibling);
  }
  function Ig() {
    yg = xg = null;
    I2 = false;
  }
  function Jg(a2) {
    null === zg ? zg = [a2] : zg.push(a2);
  }
  var Kg = ua.ReactCurrentBatchConfig;
  function Lg(a2, b2, c2) {
    a2 = c2.ref;
    if (null !== a2 && "function" !== typeof a2 && "object" !== typeof a2) {
      if (c2._owner) {
        c2 = c2._owner;
        if (c2) {
          if (1 !== c2.tag) throw Error(p2(309));
          var d2 = c2.stateNode;
        }
        if (!d2) throw Error(p2(147, a2));
        var e = d2, f2 = "" + a2;
        if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2) return b2.ref;
        b2 = function(a3) {
          var b3 = e.refs;
          null === a3 ? delete b3[f2] : b3[f2] = a3;
        };
        b2._stringRef = f2;
        return b2;
      }
      if ("string" !== typeof a2) throw Error(p2(284));
      if (!c2._owner) throw Error(p2(290, a2));
    }
    return a2;
  }
  function Mg(a2, b2) {
    a2 = Object.prototype.toString.call(b2);
    throw Error(p2(31, "[object Object]" === a2 ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a2));
  }
  function Ng(a2) {
    var b2 = a2._init;
    return b2(a2._payload);
  }
  function Og(a2) {
    function b2(b3, c3) {
      if (a2) {
        var d3 = b3.deletions;
        null === d3 ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
      }
    }
    function c2(c3, d3) {
      if (!a2) return null;
      for (; null !== d3; ) b2(c3, d3), d3 = d3.sibling;
      return null;
    }
    function d2(a3, b3) {
      for (a3 = /* @__PURE__ */ new Map(); null !== b3; ) null !== b3.key ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
      return a3;
    }
    function e(a3, b3) {
      a3 = Pg(a3, b3);
      a3.index = 0;
      a3.sibling = null;
      return a3;
    }
    function f2(b3, c3, d3) {
      b3.index = d3;
      if (!a2) return b3.flags |= 1048576, c3;
      d3 = b3.alternate;
      if (null !== d3) return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
      b3.flags |= 2;
      return c3;
    }
    function g2(b3) {
      a2 && null === b3.alternate && (b3.flags |= 2);
      return b3;
    }
    function h2(a3, b3, c3, d3) {
      if (null === b3 || 6 !== b3.tag) return b3 = Qg(c3, a3.mode, d3), b3.return = a3, b3;
      b3 = e(b3, c3);
      b3.return = a3;
      return b3;
    }
    function k2(a3, b3, c3, d3) {
      var f3 = c3.type;
      if (f3 === ya) return m2(a3, b3, c3.props.children, d3, c3.key);
      if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && Ng(f3) === b3.type)) return d3 = e(b3, c3.props), d3.ref = Lg(a3, b3, c3), d3.return = a3, d3;
      d3 = Rg(c3.type, c3.key, c3.props, null, a3.mode, d3);
      d3.ref = Lg(a3, b3, c3);
      d3.return = a3;
      return d3;
    }
    function l2(a3, b3, c3, d3) {
      if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation) return b3 = Sg(c3, a3.mode, d3), b3.return = a3, b3;
      b3 = e(b3, c3.children || []);
      b3.return = a3;
      return b3;
    }
    function m2(a3, b3, c3, d3, f3) {
      if (null === b3 || 7 !== b3.tag) return b3 = Tg(c3, a3.mode, d3, f3), b3.return = a3, b3;
      b3 = e(b3, c3);
      b3.return = a3;
      return b3;
    }
    function q2(a3, b3, c3) {
      if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3) return b3 = Qg("" + b3, a3.mode, c3), b3.return = a3, b3;
      if ("object" === typeof b3 && null !== b3) {
        switch (b3.$$typeof) {
          case va:
            return c3 = Rg(b3.type, b3.key, b3.props, null, a3.mode, c3), c3.ref = Lg(a3, null, b3), c3.return = a3, c3;
          case wa:
            return b3 = Sg(b3, a3.mode, c3), b3.return = a3, b3;
          case Ha:
            var d3 = b3._init;
            return q2(a3, d3(b3._payload), c3);
        }
        if (eb(b3) || Ka(b3)) return b3 = Tg(b3, a3.mode, c3, null), b3.return = a3, b3;
        Mg(a3, b3);
      }
      return null;
    }
    function r2(a3, b3, c3, d3) {
      var e2 = null !== b3 ? b3.key : null;
      if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3) return null !== e2 ? null : h2(a3, b3, "" + c3, d3);
      if ("object" === typeof c3 && null !== c3) {
        switch (c3.$$typeof) {
          case va:
            return c3.key === e2 ? k2(a3, b3, c3, d3) : null;
          case wa:
            return c3.key === e2 ? l2(a3, b3, c3, d3) : null;
          case Ha:
            return e2 = c3._init, r2(
              a3,
              b3,
              e2(c3._payload),
              d3
            );
        }
        if (eb(c3) || Ka(c3)) return null !== e2 ? null : m2(a3, b3, c3, d3, null);
        Mg(a3, c3);
      }
      return null;
    }
    function y2(a3, b3, c3, d3, e2) {
      if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3) return a3 = a3.get(c3) || null, h2(b3, a3, "" + d3, e2);
      if ("object" === typeof d3 && null !== d3) {
        switch (d3.$$typeof) {
          case va:
            return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, k2(b3, a3, d3, e2);
          case wa:
            return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a3, d3, e2);
          case Ha:
            var f3 = d3._init;
            return y2(a3, b3, c3, f3(d3._payload), e2);
        }
        if (eb(d3) || Ka(d3)) return a3 = a3.get(c3) || null, m2(b3, a3, d3, e2, null);
        Mg(b3, d3);
      }
      return null;
    }
    function n2(e2, g3, h3, k3) {
      for (var l3 = null, m3 = null, u2 = g3, w2 = g3 = 0, x2 = null; null !== u2 && w2 < h3.length; w2++) {
        u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
        var n3 = r2(e2, u2, h3[w2], k3);
        if (null === n3) {
          null === u2 && (u2 = x2);
          break;
        }
        a2 && u2 && null === n3.alternate && b2(e2, u2);
        g3 = f2(n3, g3, w2);
        null === m3 ? l3 = n3 : m3.sibling = n3;
        m3 = n3;
        u2 = x2;
      }
      if (w2 === h3.length) return c2(e2, u2), I2 && tg(e2, w2), l3;
      if (null === u2) {
        for (; w2 < h3.length; w2++) u2 = q2(e2, h3[w2], k3), null !== u2 && (g3 = f2(u2, g3, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
        I2 && tg(e2, w2);
        return l3;
      }
      for (u2 = d2(e2, u2); w2 < h3.length; w2++) x2 = y2(u2, e2, w2, h3[w2], k3), null !== x2 && (a2 && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g3 = f2(x2, g3, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
      a2 && u2.forEach(function(a3) {
        return b2(e2, a3);
      });
      I2 && tg(e2, w2);
      return l3;
    }
    function t2(e2, g3, h3, k3) {
      var l3 = Ka(h3);
      if ("function" !== typeof l3) throw Error(p2(150));
      h3 = l3.call(h3);
      if (null == h3) throw Error(p2(151));
      for (var u2 = l3 = null, m3 = g3, w2 = g3 = 0, x2 = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
        m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
        var t3 = r2(e2, m3, n3.value, k3);
        if (null === t3) {
          null === m3 && (m3 = x2);
          break;
        }
        a2 && m3 && null === t3.alternate && b2(e2, m3);
        g3 = f2(t3, g3, w2);
        null === u2 ? l3 = t3 : u2.sibling = t3;
        u2 = t3;
        m3 = x2;
      }
      if (n3.done) return c2(
        e2,
        m3
      ), I2 && tg(e2, w2), l3;
      if (null === m3) {
        for (; !n3.done; w2++, n3 = h3.next()) n3 = q2(e2, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
        I2 && tg(e2, w2);
        return l3;
      }
      for (m3 = d2(e2, m3); !n3.done; w2++, n3 = h3.next()) n3 = y2(m3, e2, w2, n3.value, k3), null !== n3 && (a2 && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      a2 && m3.forEach(function(a3) {
        return b2(e2, a3);
      });
      I2 && tg(e2, w2);
      return l3;
    }
    function J2(a3, d3, f3, h3) {
      "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
      if ("object" === typeof f3 && null !== f3) {
        switch (f3.$$typeof) {
          case va:
            a: {
              for (var k3 = f3.key, l3 = d3; null !== l3; ) {
                if (l3.key === k3) {
                  k3 = f3.type;
                  if (k3 === ya) {
                    if (7 === l3.tag) {
                      c2(a3, l3.sibling);
                      d3 = e(l3, f3.props.children);
                      d3.return = a3;
                      a3 = d3;
                      break a;
                    }
                  } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && Ng(k3) === l3.type) {
                    c2(a3, l3.sibling);
                    d3 = e(l3, f3.props);
                    d3.ref = Lg(a3, l3, f3);
                    d3.return = a3;
                    a3 = d3;
                    break a;
                  }
                  c2(a3, l3);
                  break;
                } else b2(a3, l3);
                l3 = l3.sibling;
              }
              f3.type === ya ? (d3 = Tg(f3.props.children, a3.mode, h3, f3.key), d3.return = a3, a3 = d3) : (h3 = Rg(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = Lg(a3, d3, f3), h3.return = a3, a3 = h3);
            }
            return g2(a3);
          case wa:
            a: {
              for (l3 = f3.key; null !== d3; ) {
                if (d3.key === l3) if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                  c2(a3, d3.sibling);
                  d3 = e(d3, f3.children || []);
                  d3.return = a3;
                  a3 = d3;
                  break a;
                } else {
                  c2(a3, d3);
                  break;
                }
                else b2(a3, d3);
                d3 = d3.sibling;
              }
              d3 = Sg(f3, a3.mode, h3);
              d3.return = a3;
              a3 = d3;
            }
            return g2(a3);
          case Ha:
            return l3 = f3._init, J2(a3, d3, l3(f3._payload), h3);
        }
        if (eb(f3)) return n2(a3, d3, f3, h3);
        if (Ka(f3)) return t2(a3, d3, f3, h3);
        Mg(a3, f3);
      }
      return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a3, d3.sibling), d3 = e(d3, f3), d3.return = a3, a3 = d3) : (c2(a3, d3), d3 = Qg(f3, a3.mode, h3), d3.return = a3, a3 = d3), g2(a3)) : c2(a3, d3);
    }
    return J2;
  }
  var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
  function $g() {
    Zg = Yg = Xg = null;
  }
  function ah(a2) {
    var b2 = Wg.current;
    E2(Wg);
    a2._currentValue = b2;
  }
  function bh(a2, b2, c2) {
    for (; null !== a2; ) {
      var d2 = a2.alternate;
      (a2.childLanes & b2) !== b2 ? (a2.childLanes |= b2, null !== d2 && (d2.childLanes |= b2)) : null !== d2 && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
      if (a2 === c2) break;
      a2 = a2.return;
    }
  }
  function ch(a2, b2) {
    Xg = a2;
    Zg = Yg = null;
    a2 = a2.dependencies;
    null !== a2 && null !== a2.firstContext && (0 !== (a2.lanes & b2) && (dh = true), a2.firstContext = null);
  }
  function eh(a2) {
    var b2 = a2._currentValue;
    if (Zg !== a2) if (a2 = { context: a2, memoizedValue: b2, next: null }, null === Yg) {
      if (null === Xg) throw Error(p2(308));
      Yg = a2;
      Xg.dependencies = { lanes: 0, firstContext: a2 };
    } else Yg = Yg.next = a2;
    return b2;
  }
  var fh = null;
  function gh(a2) {
    null === fh ? fh = [a2] : fh.push(a2);
  }
  function hh(a2, b2, c2, d2) {
    var e = b2.interleaved;
    null === e ? (c2.next = c2, gh(b2)) : (c2.next = e.next, e.next = c2);
    b2.interleaved = c2;
    return ih(a2, d2);
  }
  function ih(a2, b2) {
    a2.lanes |= b2;
    var c2 = a2.alternate;
    null !== c2 && (c2.lanes |= b2);
    c2 = a2;
    for (a2 = a2.return; null !== a2; ) a2.childLanes |= b2, c2 = a2.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a2, a2 = a2.return;
    return 3 === c2.tag ? c2.stateNode : null;
  }
  var jh = false;
  function kh(a2) {
    a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function lh(a2, b2) {
    a2 = a2.updateQueue;
    b2.updateQueue === a2 && (b2.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
  }
  function mh(a2, b2) {
    return { eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null };
  }
  function nh(a2, b2, c2) {
    var d2 = a2.updateQueue;
    if (null === d2) return null;
    d2 = d2.shared;
    if (0 !== (K2 & 2)) {
      var e = d2.pending;
      null === e ? b2.next = b2 : (b2.next = e.next, e.next = b2);
      d2.pending = b2;
      return ih(a2, c2);
    }
    e = d2.interleaved;
    null === e ? (b2.next = b2, gh(d2)) : (b2.next = e.next, e.next = b2);
    d2.interleaved = b2;
    return ih(a2, c2);
  }
  function oh(a2, b2, c2) {
    b2 = b2.updateQueue;
    if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
      var d2 = b2.lanes;
      d2 &= a2.pendingLanes;
      c2 |= d2;
      b2.lanes = c2;
      Cc(a2, c2);
    }
  }
  function ph(a2, b2) {
    var c2 = a2.updateQueue, d2 = a2.alternate;
    if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
      var e = null, f2 = null;
      c2 = c2.firstBaseUpdate;
      if (null !== c2) {
        do {
          var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
          null === f2 ? e = f2 = g2 : f2 = f2.next = g2;
          c2 = c2.next;
        } while (null !== c2);
        null === f2 ? e = f2 = b2 : f2 = f2.next = b2;
      } else e = f2 = b2;
      c2 = { baseState: d2.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
      a2.updateQueue = c2;
      return;
    }
    a2 = c2.lastBaseUpdate;
    null === a2 ? c2.firstBaseUpdate = b2 : a2.next = b2;
    c2.lastBaseUpdate = b2;
  }
  function qh(a2, b2, c2, d2) {
    var e = a2.updateQueue;
    jh = false;
    var f2 = e.firstBaseUpdate, g2 = e.lastBaseUpdate, h2 = e.shared.pending;
    if (null !== h2) {
      e.shared.pending = null;
      var k2 = h2, l2 = k2.next;
      k2.next = null;
      null === g2 ? f2 = l2 : g2.next = l2;
      g2 = k2;
      var m2 = a2.alternate;
      null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g2 && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
    }
    if (null !== f2) {
      var q2 = e.baseState;
      g2 = 0;
      m2 = l2 = k2 = null;
      h2 = f2;
      do {
        var r2 = h2.lane, y2 = h2.eventTime;
        if ((d2 & r2) === r2) {
          null !== m2 && (m2 = m2.next = {
            eventTime: y2,
            lane: 0,
            tag: h2.tag,
            payload: h2.payload,
            callback: h2.callback,
            next: null
          });
          a: {
            var n2 = a2, t2 = h2;
            r2 = b2;
            y2 = c2;
            switch (t2.tag) {
              case 1:
                n2 = t2.payload;
                if ("function" === typeof n2) {
                  q2 = n2.call(y2, q2, r2);
                  break a;
                }
                q2 = n2;
                break a;
              case 3:
                n2.flags = n2.flags & -65537 | 128;
              case 0:
                n2 = t2.payload;
                r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
                if (null === r2 || void 0 === r2) break a;
                q2 = A2({}, q2, r2);
                break a;
              case 2:
                jh = true;
            }
          }
          null !== h2.callback && 0 !== h2.lane && (a2.flags |= 64, r2 = e.effects, null === r2 ? e.effects = [h2] : r2.push(h2));
        } else y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g2 |= r2;
        h2 = h2.next;
        if (null === h2) if (h2 = e.shared.pending, null === h2) break;
        else r2 = h2, h2 = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
      } while (1);
      null === m2 && (k2 = q2);
      e.baseState = k2;
      e.firstBaseUpdate = l2;
      e.lastBaseUpdate = m2;
      b2 = e.shared.interleaved;
      if (null !== b2) {
        e = b2;
        do
          g2 |= e.lane, e = e.next;
        while (e !== b2);
      } else null === f2 && (e.shared.lanes = 0);
      rh |= g2;
      a2.lanes = g2;
      a2.memoizedState = q2;
    }
  }
  function sh(a2, b2, c2) {
    a2 = b2.effects;
    b2.effects = null;
    if (null !== a2) for (b2 = 0; b2 < a2.length; b2++) {
      var d2 = a2[b2], e = d2.callback;
      if (null !== e) {
        d2.callback = null;
        d2 = c2;
        if ("function" !== typeof e) throw Error(p2(191, e));
        e.call(d2);
      }
    }
  }
  var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
  function xh(a2) {
    if (a2 === th) throw Error(p2(174));
    return a2;
  }
  function yh(a2, b2) {
    G2(wh, b2);
    G2(vh, a2);
    G2(uh, th);
    a2 = b2.nodeType;
    switch (a2) {
      case 9:
      case 11:
        b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
        break;
      default:
        a2 = 8 === a2 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = lb(b2, a2);
    }
    E2(uh);
    G2(uh, b2);
  }
  function zh() {
    E2(uh);
    E2(vh);
    E2(wh);
  }
  function Ah(a2) {
    xh(wh.current);
    var b2 = xh(uh.current);
    var c2 = lb(b2, a2.type);
    b2 !== c2 && (G2(vh, a2), G2(uh, c2));
  }
  function Bh(a2) {
    vh.current === a2 && (E2(uh), E2(vh));
  }
  var L2 = Uf(0);
  function Ch(a2) {
    for (var b2 = a2; null !== b2; ) {
      if (13 === b2.tag) {
        var c2 = b2.memoizedState;
        if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data)) return b2;
      } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
        if (0 !== (b2.flags & 128)) return b2;
      } else if (null !== b2.child) {
        b2.child.return = b2;
        b2 = b2.child;
        continue;
      }
      if (b2 === a2) break;
      for (; null === b2.sibling; ) {
        if (null === b2.return || b2.return === a2) return null;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
    return null;
  }
  var Dh = [];
  function Eh() {
    for (var a2 = 0; a2 < Dh.length; a2++) Dh[a2]._workInProgressVersionPrimary = null;
    Dh.length = 0;
  }
  var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M2 = null, N2 = null, O2 = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
  function P2() {
    throw Error(p2(321));
  }
  function Mh(a2, b2) {
    if (null === b2) return false;
    for (var c2 = 0; c2 < b2.length && c2 < a2.length; c2++) if (!He2(a2[c2], b2[c2])) return false;
    return true;
  }
  function Nh(a2, b2, c2, d2, e, f2) {
    Hh = f2;
    M2 = b2;
    b2.memoizedState = null;
    b2.updateQueue = null;
    b2.lanes = 0;
    Fh.current = null === a2 || null === a2.memoizedState ? Oh : Ph;
    a2 = c2(d2, e);
    if (Jh) {
      f2 = 0;
      do {
        Jh = false;
        Kh = 0;
        if (25 <= f2) throw Error(p2(301));
        f2 += 1;
        O2 = N2 = null;
        b2.updateQueue = null;
        Fh.current = Qh;
        a2 = c2(d2, e);
      } while (Jh);
    }
    Fh.current = Rh;
    b2 = null !== N2 && null !== N2.next;
    Hh = 0;
    O2 = N2 = M2 = null;
    Ih = false;
    if (b2) throw Error(p2(300));
    return a2;
  }
  function Sh() {
    var a2 = 0 !== Kh;
    Kh = 0;
    return a2;
  }
  function Th() {
    var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    null === O2 ? M2.memoizedState = O2 = a2 : O2 = O2.next = a2;
    return O2;
  }
  function Uh() {
    if (null === N2) {
      var a2 = M2.alternate;
      a2 = null !== a2 ? a2.memoizedState : null;
    } else a2 = N2.next;
    var b2 = null === O2 ? M2.memoizedState : O2.next;
    if (null !== b2) O2 = b2, N2 = a2;
    else {
      if (null === a2) throw Error(p2(310));
      N2 = a2;
      a2 = { memoizedState: N2.memoizedState, baseState: N2.baseState, baseQueue: N2.baseQueue, queue: N2.queue, next: null };
      null === O2 ? M2.memoizedState = O2 = a2 : O2 = O2.next = a2;
    }
    return O2;
  }
  function Vh(a2, b2) {
    return "function" === typeof b2 ? b2(a2) : b2;
  }
  function Wh(a2) {
    var b2 = Uh(), c2 = b2.queue;
    if (null === c2) throw Error(p2(311));
    c2.lastRenderedReducer = a2;
    var d2 = N2, e = d2.baseQueue, f2 = c2.pending;
    if (null !== f2) {
      if (null !== e) {
        var g2 = e.next;
        e.next = f2.next;
        f2.next = g2;
      }
      d2.baseQueue = e = f2;
      c2.pending = null;
    }
    if (null !== e) {
      f2 = e.next;
      d2 = d2.baseState;
      var h2 = g2 = null, k2 = null, l2 = f2;
      do {
        var m2 = l2.lane;
        if ((Hh & m2) === m2) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a2(d2, l2.action);
        else {
          var q2 = {
            lane: m2,
            action: l2.action,
            hasEagerState: l2.hasEagerState,
            eagerState: l2.eagerState,
            next: null
          };
          null === k2 ? (h2 = k2 = q2, g2 = d2) : k2 = k2.next = q2;
          M2.lanes |= m2;
          rh |= m2;
        }
        l2 = l2.next;
      } while (null !== l2 && l2 !== f2);
      null === k2 ? g2 = d2 : k2.next = h2;
      He2(d2, b2.memoizedState) || (dh = true);
      b2.memoizedState = d2;
      b2.baseState = g2;
      b2.baseQueue = k2;
      c2.lastRenderedState = d2;
    }
    a2 = c2.interleaved;
    if (null !== a2) {
      e = a2;
      do
        f2 = e.lane, M2.lanes |= f2, rh |= f2, e = e.next;
      while (e !== a2);
    } else null === e && (c2.lanes = 0);
    return [b2.memoizedState, c2.dispatch];
  }
  function Xh(a2) {
    var b2 = Uh(), c2 = b2.queue;
    if (null === c2) throw Error(p2(311));
    c2.lastRenderedReducer = a2;
    var d2 = c2.dispatch, e = c2.pending, f2 = b2.memoizedState;
    if (null !== e) {
      c2.pending = null;
      var g2 = e = e.next;
      do
        f2 = a2(f2, g2.action), g2 = g2.next;
      while (g2 !== e);
      He2(f2, b2.memoizedState) || (dh = true);
      b2.memoizedState = f2;
      null === b2.baseQueue && (b2.baseState = f2);
      c2.lastRenderedState = f2;
    }
    return [f2, d2];
  }
  function Yh() {
  }
  function Zh(a2, b2) {
    var c2 = M2, d2 = Uh(), e = b2(), f2 = !He2(d2.memoizedState, e);
    f2 && (d2.memoizedState = e, dh = true);
    d2 = d2.queue;
    $h(ai.bind(null, c2, d2, a2), [a2]);
    if (d2.getSnapshot !== b2 || f2 || null !== O2 && O2.memoizedState.tag & 1) {
      c2.flags |= 2048;
      bi(9, ci.bind(null, c2, d2, e, b2), void 0, null);
      if (null === Q2) throw Error(p2(349));
      0 !== (Hh & 30) || di(c2, b2, e);
    }
    return e;
  }
  function di(a2, b2, c2) {
    a2.flags |= 16384;
    a2 = { getSnapshot: b2, value: c2 };
    b2 = M2.updateQueue;
    null === b2 ? (b2 = { lastEffect: null, stores: null }, M2.updateQueue = b2, b2.stores = [a2]) : (c2 = b2.stores, null === c2 ? b2.stores = [a2] : c2.push(a2));
  }
  function ci(a2, b2, c2, d2) {
    b2.value = c2;
    b2.getSnapshot = d2;
    ei(b2) && fi(a2);
  }
  function ai(a2, b2, c2) {
    return c2(function() {
      ei(b2) && fi(a2);
    });
  }
  function ei(a2) {
    var b2 = a2.getSnapshot;
    a2 = a2.value;
    try {
      var c2 = b2();
      return !He2(a2, c2);
    } catch (d2) {
      return true;
    }
  }
  function fi(a2) {
    var b2 = ih(a2, 1);
    null !== b2 && gi(b2, a2, 1, -1);
  }
  function hi(a2) {
    var b2 = Th();
    "function" === typeof a2 && (a2 = a2());
    b2.memoizedState = b2.baseState = a2;
    a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a2 };
    b2.queue = a2;
    a2 = a2.dispatch = ii.bind(null, M2, a2);
    return [b2.memoizedState, a2];
  }
  function bi(a2, b2, c2, d2) {
    a2 = { tag: a2, create: b2, destroy: c2, deps: d2, next: null };
    b2 = M2.updateQueue;
    null === b2 ? (b2 = { lastEffect: null, stores: null }, M2.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a2.next = a2 : (d2 = c2.next, c2.next = a2, a2.next = d2, b2.lastEffect = a2));
    return a2;
  }
  function ji() {
    return Uh().memoizedState;
  }
  function ki(a2, b2, c2, d2) {
    var e = Th();
    M2.flags |= a2;
    e.memoizedState = bi(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
  }
  function li(a2, b2, c2, d2) {
    var e = Uh();
    d2 = void 0 === d2 ? null : d2;
    var f2 = void 0;
    if (null !== N2) {
      var g2 = N2.memoizedState;
      f2 = g2.destroy;
      if (null !== d2 && Mh(d2, g2.deps)) {
        e.memoizedState = bi(b2, c2, f2, d2);
        return;
      }
    }
    M2.flags |= a2;
    e.memoizedState = bi(1 | b2, c2, f2, d2);
  }
  function mi(a2, b2) {
    return ki(8390656, 8, a2, b2);
  }
  function $h(a2, b2) {
    return li(2048, 8, a2, b2);
  }
  function ni(a2, b2) {
    return li(4, 2, a2, b2);
  }
  function oi(a2, b2) {
    return li(4, 4, a2, b2);
  }
  function pi(a2, b2) {
    if ("function" === typeof b2) return a2 = a2(), b2(a2), function() {
      b2(null);
    };
    if (null !== b2 && void 0 !== b2) return a2 = a2(), b2.current = a2, function() {
      b2.current = null;
    };
  }
  function qi(a2, b2, c2) {
    c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
    return li(4, 4, pi.bind(null, b2, a2), c2);
  }
  function ri() {
  }
  function si(a2, b2) {
    var c2 = Uh();
    b2 = void 0 === b2 ? null : b2;
    var d2 = c2.memoizedState;
    if (null !== d2 && null !== b2 && Mh(b2, d2[1])) return d2[0];
    c2.memoizedState = [a2, b2];
    return a2;
  }
  function ti(a2, b2) {
    var c2 = Uh();
    b2 = void 0 === b2 ? null : b2;
    var d2 = c2.memoizedState;
    if (null !== d2 && null !== b2 && Mh(b2, d2[1])) return d2[0];
    a2 = a2();
    c2.memoizedState = [a2, b2];
    return a2;
  }
  function ui(a2, b2, c2) {
    if (0 === (Hh & 21)) return a2.baseState && (a2.baseState = false, dh = true), a2.memoizedState = c2;
    He2(c2, b2) || (c2 = yc(), M2.lanes |= c2, rh |= c2, a2.baseState = true);
    return b2;
  }
  function vi(a2, b2) {
    var c2 = C2;
    C2 = 0 !== c2 && 4 > c2 ? c2 : 4;
    a2(true);
    var d2 = Gh.transition;
    Gh.transition = {};
    try {
      a2(false), b2();
    } finally {
      C2 = c2, Gh.transition = d2;
    }
  }
  function wi() {
    return Uh().memoizedState;
  }
  function xi(a2, b2, c2) {
    var d2 = yi(a2);
    c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
    if (zi(a2)) Ai(b2, c2);
    else if (c2 = hh(a2, b2, c2, d2), null !== c2) {
      var e = R2();
      gi(c2, a2, d2, e);
      Bi(c2, b2, d2);
    }
  }
  function ii(a2, b2, c2) {
    var d2 = yi(a2), e = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
    if (zi(a2)) Ai(b2, e);
    else {
      var f2 = a2.alternate;
      if (0 === a2.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2)) try {
        var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
        e.hasEagerState = true;
        e.eagerState = h2;
        if (He2(h2, g2)) {
          var k2 = b2.interleaved;
          null === k2 ? (e.next = e, gh(b2)) : (e.next = k2.next, k2.next = e);
          b2.interleaved = e;
          return;
        }
      } catch (l2) {
      } finally {
      }
      c2 = hh(a2, b2, e, d2);
      null !== c2 && (e = R2(), gi(c2, a2, d2, e), Bi(c2, b2, d2));
    }
  }
  function zi(a2) {
    var b2 = a2.alternate;
    return a2 === M2 || null !== b2 && b2 === M2;
  }
  function Ai(a2, b2) {
    Jh = Ih = true;
    var c2 = a2.pending;
    null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
    a2.pending = b2;
  }
  function Bi(a2, b2, c2) {
    if (0 !== (c2 & 4194240)) {
      var d2 = b2.lanes;
      d2 &= a2.pendingLanes;
      c2 |= d2;
      b2.lanes = c2;
      Cc(a2, c2);
    }
  }
  var Rh = { readContext: eh, useCallback: P2, useContext: P2, useEffect: P2, useImperativeHandle: P2, useInsertionEffect: P2, useLayoutEffect: P2, useMemo: P2, useReducer: P2, useRef: P2, useState: P2, useDebugValue: P2, useDeferredValue: P2, useTransition: P2, useMutableSource: P2, useSyncExternalStore: P2, useId: P2, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a2, b2) {
    Th().memoizedState = [a2, void 0 === b2 ? null : b2];
    return a2;
  }, useContext: eh, useEffect: mi, useImperativeHandle: function(a2, b2, c2) {
    c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
    return ki(
      4194308,
      4,
      pi.bind(null, b2, a2),
      c2
    );
  }, useLayoutEffect: function(a2, b2) {
    return ki(4194308, 4, a2, b2);
  }, useInsertionEffect: function(a2, b2) {
    return ki(4, 2, a2, b2);
  }, useMemo: function(a2, b2) {
    var c2 = Th();
    b2 = void 0 === b2 ? null : b2;
    a2 = a2();
    c2.memoizedState = [a2, b2];
    return a2;
  }, useReducer: function(a2, b2, c2) {
    var d2 = Th();
    b2 = void 0 !== c2 ? c2(b2) : b2;
    d2.memoizedState = d2.baseState = b2;
    a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2 };
    d2.queue = a2;
    a2 = a2.dispatch = xi.bind(null, M2, a2);
    return [d2.memoizedState, a2];
  }, useRef: function(a2) {
    var b2 = Th();
    a2 = { current: a2 };
    return b2.memoizedState = a2;
  }, useState: hi, useDebugValue: ri, useDeferredValue: function(a2) {
    return Th().memoizedState = a2;
  }, useTransition: function() {
    var a2 = hi(false), b2 = a2[0];
    a2 = vi.bind(null, a2[1]);
    Th().memoizedState = a2;
    return [b2, a2];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(a2, b2, c2) {
    var d2 = M2, e = Th();
    if (I2) {
      if (void 0 === c2) throw Error(p2(407));
      c2 = c2();
    } else {
      c2 = b2();
      if (null === Q2) throw Error(p2(349));
      0 !== (Hh & 30) || di(d2, b2, c2);
    }
    e.memoizedState = c2;
    var f2 = { value: c2, getSnapshot: b2 };
    e.queue = f2;
    mi(ai.bind(
      null,
      d2,
      f2,
      a2
    ), [a2]);
    d2.flags |= 2048;
    bi(9, ci.bind(null, d2, f2, c2, b2), void 0, null);
    return c2;
  }, useId: function() {
    var a2 = Th(), b2 = Q2.identifierPrefix;
    if (I2) {
      var c2 = sg;
      var d2 = rg;
      c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
      b2 = ":" + b2 + "R" + c2;
      c2 = Kh++;
      0 < c2 && (b2 += "H" + c2.toString(32));
      b2 += ":";
    } else c2 = Lh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
    return a2.memoizedState = b2;
  }, unstable_isNewReconciler: false }, Ph = {
    readContext: eh,
    useCallback: si,
    useContext: eh,
    useEffect: $h,
    useImperativeHandle: qi,
    useInsertionEffect: ni,
    useLayoutEffect: oi,
    useMemo: ti,
    useReducer: Wh,
    useRef: ji,
    useState: function() {
      return Wh(Vh);
    },
    useDebugValue: ri,
    useDeferredValue: function(a2) {
      var b2 = Uh();
      return ui(b2, N2.memoizedState, a2);
    },
    useTransition: function() {
      var a2 = Wh(Vh)[0], b2 = Uh().memoizedState;
      return [a2, b2];
    },
    useMutableSource: Yh,
    useSyncExternalStore: Zh,
    useId: wi,
    unstable_isNewReconciler: false
  }, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
    return Xh(Vh);
  }, useDebugValue: ri, useDeferredValue: function(a2) {
    var b2 = Uh();
    return null === N2 ? b2.memoizedState = a2 : ui(b2, N2.memoizedState, a2);
  }, useTransition: function() {
    var a2 = Xh(Vh)[0], b2 = Uh().memoizedState;
    return [a2, b2];
  }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
  function Ci(a2, b2) {
    if (a2 && a2.defaultProps) {
      b2 = A2({}, b2);
      a2 = a2.defaultProps;
      for (var c2 in a2) void 0 === b2[c2] && (b2[c2] = a2[c2]);
      return b2;
    }
    return b2;
  }
  function Di(a2, b2, c2, d2) {
    b2 = a2.memoizedState;
    c2 = c2(d2, b2);
    c2 = null === c2 || void 0 === c2 ? b2 : A2({}, b2, c2);
    a2.memoizedState = c2;
    0 === a2.lanes && (a2.updateQueue.baseState = c2);
  }
  var Ei = { isMounted: function(a2) {
    return (a2 = a2._reactInternals) ? Vb(a2) === a2 : false;
  }, enqueueSetState: function(a2, b2, c2) {
    a2 = a2._reactInternals;
    var d2 = R2(), e = yi(a2), f2 = mh(d2, e);
    f2.payload = b2;
    void 0 !== c2 && null !== c2 && (f2.callback = c2);
    b2 = nh(a2, f2, e);
    null !== b2 && (gi(b2, a2, e, d2), oh(b2, a2, e));
  }, enqueueReplaceState: function(a2, b2, c2) {
    a2 = a2._reactInternals;
    var d2 = R2(), e = yi(a2), f2 = mh(d2, e);
    f2.tag = 1;
    f2.payload = b2;
    void 0 !== c2 && null !== c2 && (f2.callback = c2);
    b2 = nh(a2, f2, e);
    null !== b2 && (gi(b2, a2, e, d2), oh(b2, a2, e));
  }, enqueueForceUpdate: function(a2, b2) {
    a2 = a2._reactInternals;
    var c2 = R2(), d2 = yi(a2), e = mh(c2, d2);
    e.tag = 2;
    void 0 !== b2 && null !== b2 && (e.callback = b2);
    b2 = nh(a2, e, d2);
    null !== b2 && (gi(b2, a2, d2, c2), oh(b2, a2, d2));
  } };
  function Fi(a2, b2, c2, d2, e, f2, g2) {
    a2 = a2.stateNode;
    return "function" === typeof a2.shouldComponentUpdate ? a2.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie2(c2, d2) || !Ie2(e, f2) : true;
  }
  function Gi(a2, b2, c2) {
    var d2 = false, e = Vf;
    var f2 = b2.contextType;
    "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e = Zf(b2) ? Xf : H2.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a2, e) : Vf);
    b2 = new b2(c2, f2);
    a2.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
    b2.updater = Ei;
    a2.stateNode = b2;
    b2._reactInternals = a2;
    d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e, a2.__reactInternalMemoizedMaskedChildContext = f2);
    return b2;
  }
  function Hi(a2, b2, c2, d2) {
    a2 = b2.state;
    "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
    "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
    b2.state !== a2 && Ei.enqueueReplaceState(b2, b2.state, null);
  }
  function Ii(a2, b2, c2, d2) {
    var e = a2.stateNode;
    e.props = c2;
    e.state = a2.memoizedState;
    e.refs = {};
    kh(a2);
    var f2 = b2.contextType;
    "object" === typeof f2 && null !== f2 ? e.context = eh(f2) : (f2 = Zf(b2) ? Xf : H2.current, e.context = Yf(a2, f2));
    e.state = a2.memoizedState;
    f2 = b2.getDerivedStateFromProps;
    "function" === typeof f2 && (Di(a2, b2, f2, c2), e.state = a2.memoizedState);
    "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b2 = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b2 !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a2, c2, e, d2), e.state = a2.memoizedState);
    "function" === typeof e.componentDidMount && (a2.flags |= 4194308);
  }
  function Ji(a2, b2) {
    try {
      var c2 = "", d2 = b2;
      do
        c2 += Pa(d2), d2 = d2.return;
      while (d2);
      var e = c2;
    } catch (f2) {
      e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
    }
    return { value: a2, source: b2, stack: e, digest: null };
  }
  function Ki(a2, b2, c2) {
    return { value: a2, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
  }
  function Li(a2, b2) {
    try {
      console.error(b2.value);
    } catch (c2) {
      setTimeout(function() {
        throw c2;
      });
    }
  }
  var Mi = "function" === typeof WeakMap ? WeakMap : Map;
  function Ni(a2, b2, c2) {
    c2 = mh(-1, c2);
    c2.tag = 3;
    c2.payload = { element: null };
    var d2 = b2.value;
    c2.callback = function() {
      Oi || (Oi = true, Pi = d2);
      Li(a2, b2);
    };
    return c2;
  }
  function Qi(a2, b2, c2) {
    c2 = mh(-1, c2);
    c2.tag = 3;
    var d2 = a2.type.getDerivedStateFromError;
    if ("function" === typeof d2) {
      var e = b2.value;
      c2.payload = function() {
        return d2(e);
      };
      c2.callback = function() {
        Li(a2, b2);
      };
    }
    var f2 = a2.stateNode;
    null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
      Li(a2, b2);
      "function" !== typeof d2 && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
      var c3 = b2.stack;
      this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
    });
    return c2;
  }
  function Si(a2, b2, c2) {
    var d2 = a2.pingCache;
    if (null === d2) {
      d2 = a2.pingCache = new Mi();
      var e = /* @__PURE__ */ new Set();
      d2.set(b2, e);
    } else e = d2.get(b2), void 0 === e && (e = /* @__PURE__ */ new Set(), d2.set(b2, e));
    e.has(c2) || (e.add(c2), a2 = Ti.bind(null, a2, b2, c2), b2.then(a2, a2));
  }
  function Ui(a2) {
    do {
      var b2;
      if (b2 = 13 === a2.tag) b2 = a2.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
      if (b2) return a2;
      a2 = a2.return;
    } while (null !== a2);
    return null;
  }
  function Vi(a2, b2, c2, d2, e) {
    if (0 === (a2.mode & 1)) return a2 === b2 ? a2.flags |= 65536 : (a2.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = mh(-1, 1), b2.tag = 2, nh(c2, b2, 1))), c2.lanes |= 1), a2;
    a2.flags |= 65536;
    a2.lanes = e;
    return a2;
  }
  var Wi = ua.ReactCurrentOwner, dh = false;
  function Xi(a2, b2, c2, d2) {
    b2.child = null === a2 ? Vg(b2, null, c2, d2) : Ug(b2, a2.child, c2, d2);
  }
  function Yi(a2, b2, c2, d2, e) {
    c2 = c2.render;
    var f2 = b2.ref;
    ch(b2, e);
    d2 = Nh(a2, b2, c2, d2, f2, e);
    c2 = Sh();
    if (null !== a2 && !dh) return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e, Zi(a2, b2, e);
    I2 && c2 && vg(b2);
    b2.flags |= 1;
    Xi(a2, b2, d2, e);
    return b2.child;
  }
  function $i(a2, b2, c2, d2, e) {
    if (null === a2) {
      var f2 = c2.type;
      if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps) return b2.tag = 15, b2.type = f2, bj(a2, b2, f2, d2, e);
      a2 = Rg(c2.type, null, d2, b2, b2.mode, e);
      a2.ref = b2.ref;
      a2.return = b2;
      return b2.child = a2;
    }
    f2 = a2.child;
    if (0 === (a2.lanes & e)) {
      var g2 = f2.memoizedProps;
      c2 = c2.compare;
      c2 = null !== c2 ? c2 : Ie2;
      if (c2(g2, d2) && a2.ref === b2.ref) return Zi(a2, b2, e);
    }
    b2.flags |= 1;
    a2 = Pg(f2, d2);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  function bj(a2, b2, c2, d2, e) {
    if (null !== a2) {
      var f2 = a2.memoizedProps;
      if (Ie2(f2, d2) && a2.ref === b2.ref) if (dh = false, b2.pendingProps = d2 = f2, 0 !== (a2.lanes & e)) 0 !== (a2.flags & 131072) && (dh = true);
      else return b2.lanes = a2.lanes, Zi(a2, b2, e);
    }
    return cj(a2, b2, c2, d2, e);
  }
  function dj(a2, b2, c2) {
    var d2 = b2.pendingProps, e = d2.children, f2 = null !== a2 ? a2.memoizedState : null;
    if ("hidden" === d2.mode) if (0 === (b2.mode & 1)) b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G2(ej, fj), fj |= c2;
    else {
      if (0 === (c2 & 1073741824)) return a2 = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2, cachePool: null, transitions: null }, b2.updateQueue = null, G2(ej, fj), fj |= a2, null;
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d2 = null !== f2 ? f2.baseLanes : c2;
      G2(ej, fj);
      fj |= d2;
    }
    else null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G2(ej, fj), fj |= d2;
    Xi(a2, b2, e, c2);
    return b2.child;
  }
  function gj(a2, b2) {
    var c2 = b2.ref;
    if (null === a2 && null !== c2 || null !== a2 && a2.ref !== c2) b2.flags |= 512, b2.flags |= 2097152;
  }
  function cj(a2, b2, c2, d2, e) {
    var f2 = Zf(c2) ? Xf : H2.current;
    f2 = Yf(b2, f2);
    ch(b2, e);
    c2 = Nh(a2, b2, c2, d2, f2, e);
    d2 = Sh();
    if (null !== a2 && !dh) return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e, Zi(a2, b2, e);
    I2 && d2 && vg(b2);
    b2.flags |= 1;
    Xi(a2, b2, c2, e);
    return b2.child;
  }
  function hj(a2, b2, c2, d2, e) {
    if (Zf(c2)) {
      var f2 = true;
      cg(b2);
    } else f2 = false;
    ch(b2, e);
    if (null === b2.stateNode) ij(a2, b2), Gi(b2, c2, d2), Ii(b2, c2, d2, e), d2 = true;
    else if (null === a2) {
      var g2 = b2.stateNode, h2 = b2.memoizedProps;
      g2.props = h2;
      var k2 = g2.context, l2 = c2.contextType;
      "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c2) ? Xf : H2.current, l2 = Yf(b2, l2));
      var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
      q2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && Hi(b2, g2, d2, l2);
      jh = false;
      var r2 = b2.memoizedState;
      g2.state = r2;
      qh(b2, d2, g2, e);
      k2 = b2.memoizedState;
      h2 !== d2 || r2 !== k2 || Wf.current || jh ? ("function" === typeof m2 && (Di(b2, c2, m2, d2), k2 = b2.memoizedState), (h2 = jh || Fi(b2, c2, h2, d2, r2, k2, l2)) ? (q2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), d2 = false);
    } else {
      g2 = b2.stateNode;
      lh(a2, b2);
      h2 = b2.memoizedProps;
      l2 = b2.type === b2.elementType ? h2 : Ci(b2.type, h2);
      g2.props = l2;
      q2 = b2.pendingProps;
      r2 = g2.context;
      k2 = c2.contextType;
      "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c2) ? Xf : H2.current, k2 = Yf(b2, k2));
      var y2 = c2.getDerivedStateFromProps;
      (m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && Hi(b2, g2, d2, k2);
      jh = false;
      r2 = b2.memoizedState;
      g2.state = r2;
      qh(b2, d2, g2, e);
      var n2 = b2.memoizedState;
      h2 !== q2 || r2 !== n2 || Wf.current || jh ? ("function" === typeof y2 && (Di(b2, c2, y2, d2), n2 = b2.memoizedState), (l2 = jh || Fi(b2, c2, l2, d2, r2, n2, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n2, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n2, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = n2), g2.props = d2, g2.state = n2, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), d2 = false);
    }
    return jj(a2, b2, c2, d2, f2, e);
  }
  function jj(a2, b2, c2, d2, e, f2) {
    gj(a2, b2);
    var g2 = 0 !== (b2.flags & 128);
    if (!d2 && !g2) return e && dg(b2, c2, false), Zi(a2, b2, f2);
    d2 = b2.stateNode;
    Wi.current = b2;
    var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
    b2.flags |= 1;
    null !== a2 && g2 ? (b2.child = Ug(b2, a2.child, null, f2), b2.child = Ug(b2, null, h2, f2)) : Xi(a2, b2, h2, f2);
    b2.memoizedState = d2.state;
    e && dg(b2, c2, true);
    return b2.child;
  }
  function kj(a2) {
    var b2 = a2.stateNode;
    b2.pendingContext ? ag(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a2, b2.context, false);
    yh(a2, b2.containerInfo);
  }
  function lj(a2, b2, c2, d2, e) {
    Ig();
    Jg(e);
    b2.flags |= 256;
    Xi(a2, b2, c2, d2);
    return b2.child;
  }
  var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
  function nj(a2) {
    return { baseLanes: a2, cachePool: null, transitions: null };
  }
  function oj(a2, b2, c2) {
    var d2 = b2.pendingProps, e = L2.current, f2 = false, g2 = 0 !== (b2.flags & 128), h2;
    (h2 = g2) || (h2 = null !== a2 && null === a2.memoizedState ? false : 0 !== (e & 2));
    if (h2) f2 = true, b2.flags &= -129;
    else if (null === a2 || null !== a2.memoizedState) e |= 1;
    G2(L2, e & 1);
    if (null === a2) {
      Eg(b2);
      a2 = b2.memoizedState;
      if (null !== a2 && (a2 = a2.dehydrated, null !== a2)) return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a2.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
      g2 = d2.children;
      a2 = d2.fallback;
      return f2 ? (d2 = b2.mode, f2 = b2.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = pj(g2, d2, 0, null), a2 = Tg(a2, d2, c2, null), f2.return = b2, a2.return = b2, f2.sibling = a2, b2.child = f2, b2.child.memoizedState = nj(c2), b2.memoizedState = mj, a2) : qj(b2, g2);
    }
    e = a2.memoizedState;
    if (null !== e && (h2 = e.dehydrated, null !== h2)) return rj(a2, b2, g2, d2, h2, e, c2);
    if (f2) {
      f2 = d2.fallback;
      g2 = b2.mode;
      e = a2.child;
      h2 = e.sibling;
      var k2 = { mode: "hidden", children: d2.children };
      0 === (g2 & 1) && b2.child !== e ? (d2 = b2.child, d2.childLanes = 0, d2.pendingProps = k2, b2.deletions = null) : (d2 = Pg(e, k2), d2.subtreeFlags = e.subtreeFlags & 14680064);
      null !== h2 ? f2 = Pg(h2, f2) : (f2 = Tg(f2, g2, c2, null), f2.flags |= 2);
      f2.return = b2;
      d2.return = b2;
      d2.sibling = f2;
      b2.child = d2;
      d2 = f2;
      f2 = b2.child;
      g2 = a2.child.memoizedState;
      g2 = null === g2 ? nj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
      f2.memoizedState = g2;
      f2.childLanes = a2.childLanes & ~c2;
      b2.memoizedState = mj;
      return d2;
    }
    f2 = a2.child;
    a2 = f2.sibling;
    d2 = Pg(f2, { mode: "visible", children: d2.children });
    0 === (b2.mode & 1) && (d2.lanes = c2);
    d2.return = b2;
    d2.sibling = null;
    null !== a2 && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a2], b2.flags |= 16) : c2.push(a2));
    b2.child = d2;
    b2.memoizedState = null;
    return d2;
  }
  function qj(a2, b2) {
    b2 = pj({ mode: "visible", children: b2 }, a2.mode, 0, null);
    b2.return = a2;
    return a2.child = b2;
  }
  function sj(a2, b2, c2, d2) {
    null !== d2 && Jg(d2);
    Ug(b2, a2.child, null, c2);
    a2 = qj(b2, b2.pendingProps.children);
    a2.flags |= 2;
    b2.memoizedState = null;
    return a2;
  }
  function rj(a2, b2, c2, d2, e, f2, g2) {
    if (c2) {
      if (b2.flags & 256) return b2.flags &= -257, d2 = Ki(Error(p2(422))), sj(a2, b2, g2, d2);
      if (null !== b2.memoizedState) return b2.child = a2.child, b2.flags |= 128, null;
      f2 = d2.fallback;
      e = b2.mode;
      d2 = pj({ mode: "visible", children: d2.children }, e, 0, null);
      f2 = Tg(f2, e, g2, null);
      f2.flags |= 2;
      d2.return = b2;
      f2.return = b2;
      d2.sibling = f2;
      b2.child = d2;
      0 !== (b2.mode & 1) && Ug(b2, a2.child, null, g2);
      b2.child.memoizedState = nj(g2);
      b2.memoizedState = mj;
      return f2;
    }
    if (0 === (b2.mode & 1)) return sj(a2, b2, g2, null);
    if ("$!" === e.data) {
      d2 = e.nextSibling && e.nextSibling.dataset;
      if (d2) var h2 = d2.dgst;
      d2 = h2;
      f2 = Error(p2(419));
      d2 = Ki(f2, d2, void 0);
      return sj(a2, b2, g2, d2);
    }
    h2 = 0 !== (g2 & a2.childLanes);
    if (dh || h2) {
      d2 = Q2;
      if (null !== d2) {
        switch (g2 & -g2) {
          case 4:
            e = 2;
            break;
          case 16:
            e = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            e = 32;
            break;
          case 536870912:
            e = 268435456;
            break;
          default:
            e = 0;
        }
        e = 0 !== (e & (d2.suspendedLanes | g2)) ? 0 : e;
        0 !== e && e !== f2.retryLane && (f2.retryLane = e, ih(a2, e), gi(d2, a2, e, -1));
      }
      tj();
      d2 = Ki(Error(p2(421)));
      return sj(a2, b2, g2, d2);
    }
    if ("$?" === e.data) return b2.flags |= 128, b2.child = a2.child, b2 = uj.bind(null, a2), e._reactRetry = b2, null;
    a2 = f2.treeContext;
    yg = Lf(e.nextSibling);
    xg = b2;
    I2 = true;
    zg = null;
    null !== a2 && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a2.id, sg = a2.overflow, qg = b2);
    b2 = qj(b2, d2.children);
    b2.flags |= 4096;
    return b2;
  }
  function vj(a2, b2, c2) {
    a2.lanes |= b2;
    var d2 = a2.alternate;
    null !== d2 && (d2.lanes |= b2);
    bh(a2.return, b2, c2);
  }
  function wj(a2, b2, c2, d2, e) {
    var f2 = a2.memoizedState;
    null === f2 ? a2.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e);
  }
  function xj(a2, b2, c2) {
    var d2 = b2.pendingProps, e = d2.revealOrder, f2 = d2.tail;
    Xi(a2, b2, d2.children, c2);
    d2 = L2.current;
    if (0 !== (d2 & 2)) d2 = d2 & 1 | 2, b2.flags |= 128;
    else {
      if (null !== a2 && 0 !== (a2.flags & 128)) a: for (a2 = b2.child; null !== a2; ) {
        if (13 === a2.tag) null !== a2.memoizedState && vj(a2, c2, b2);
        else if (19 === a2.tag) vj(a2, c2, b2);
        else if (null !== a2.child) {
          a2.child.return = a2;
          a2 = a2.child;
          continue;
        }
        if (a2 === b2) break a;
        for (; null === a2.sibling; ) {
          if (null === a2.return || a2.return === b2) break a;
          a2 = a2.return;
        }
        a2.sibling.return = a2.return;
        a2 = a2.sibling;
      }
      d2 &= 1;
    }
    G2(L2, d2);
    if (0 === (b2.mode & 1)) b2.memoizedState = null;
    else switch (e) {
      case "forwards":
        c2 = b2.child;
        for (e = null; null !== c2; ) a2 = c2.alternate, null !== a2 && null === Ch(a2) && (e = c2), c2 = c2.sibling;
        c2 = e;
        null === c2 ? (e = b2.child, b2.child = null) : (e = c2.sibling, c2.sibling = null);
        wj(b2, false, e, c2, f2);
        break;
      case "backwards":
        c2 = null;
        e = b2.child;
        for (b2.child = null; null !== e; ) {
          a2 = e.alternate;
          if (null !== a2 && null === Ch(a2)) {
            b2.child = e;
            break;
          }
          a2 = e.sibling;
          e.sibling = c2;
          c2 = e;
          e = a2;
        }
        wj(b2, true, c2, null, f2);
        break;
      case "together":
        wj(b2, false, null, null, void 0);
        break;
      default:
        b2.memoizedState = null;
    }
    return b2.child;
  }
  function ij(a2, b2) {
    0 === (b2.mode & 1) && null !== a2 && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
  }
  function Zi(a2, b2, c2) {
    null !== a2 && (b2.dependencies = a2.dependencies);
    rh |= b2.lanes;
    if (0 === (c2 & b2.childLanes)) return null;
    if (null !== a2 && b2.child !== a2.child) throw Error(p2(153));
    if (null !== b2.child) {
      a2 = b2.child;
      c2 = Pg(a2, a2.pendingProps);
      b2.child = c2;
      for (c2.return = b2; null !== a2.sibling; ) a2 = a2.sibling, c2 = c2.sibling = Pg(a2, a2.pendingProps), c2.return = b2;
      c2.sibling = null;
    }
    return b2.child;
  }
  function yj(a2, b2, c2) {
    switch (b2.tag) {
      case 3:
        kj(b2);
        Ig();
        break;
      case 5:
        Ah(b2);
        break;
      case 1:
        Zf(b2.type) && cg(b2);
        break;
      case 4:
        yh(b2, b2.stateNode.containerInfo);
        break;
      case 10:
        var d2 = b2.type._context, e = b2.memoizedProps.value;
        G2(Wg, d2._currentValue);
        d2._currentValue = e;
        break;
      case 13:
        d2 = b2.memoizedState;
        if (null !== d2) {
          if (null !== d2.dehydrated) return G2(L2, L2.current & 1), b2.flags |= 128, null;
          if (0 !== (c2 & b2.child.childLanes)) return oj(a2, b2, c2);
          G2(L2, L2.current & 1);
          a2 = Zi(a2, b2, c2);
          return null !== a2 ? a2.sibling : null;
        }
        G2(L2, L2.current & 1);
        break;
      case 19:
        d2 = 0 !== (c2 & b2.childLanes);
        if (0 !== (a2.flags & 128)) {
          if (d2) return xj(a2, b2, c2);
          b2.flags |= 128;
        }
        e = b2.memoizedState;
        null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
        G2(L2, L2.current);
        if (d2) break;
        else return null;
      case 22:
      case 23:
        return b2.lanes = 0, dj(a2, b2, c2);
    }
    return Zi(a2, b2, c2);
  }
  var zj, Aj, Bj, Cj;
  zj = function(a2, b2) {
    for (var c2 = b2.child; null !== c2; ) {
      if (5 === c2.tag || 6 === c2.tag) a2.appendChild(c2.stateNode);
      else if (4 !== c2.tag && null !== c2.child) {
        c2.child.return = c2;
        c2 = c2.child;
        continue;
      }
      if (c2 === b2) break;
      for (; null === c2.sibling; ) {
        if (null === c2.return || c2.return === b2) return;
        c2 = c2.return;
      }
      c2.sibling.return = c2.return;
      c2 = c2.sibling;
    }
  };
  Aj = function() {
  };
  Bj = function(a2, b2, c2, d2) {
    var e = a2.memoizedProps;
    if (e !== d2) {
      a2 = b2.stateNode;
      xh(uh.current);
      var f2 = null;
      switch (c2) {
        case "input":
          e = Ya(a2, e);
          d2 = Ya(a2, d2);
          f2 = [];
          break;
        case "select":
          e = A2({}, e, { value: void 0 });
          d2 = A2({}, d2, { value: void 0 });
          f2 = [];
          break;
        case "textarea":
          e = gb(a2, e);
          d2 = gb(a2, d2);
          f2 = [];
          break;
        default:
          "function" !== typeof e.onClick && "function" === typeof d2.onClick && (a2.onclick = Bf);
      }
      ub(c2, d2);
      var g2;
      c2 = null;
      for (l2 in e) if (!d2.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2]) if ("style" === l2) {
        var h2 = e[l2];
        for (g2 in h2) h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
      } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
      for (l2 in d2) {
        var k2 = d2[l2];
        h2 = null != e ? e[l2] : void 0;
        if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2)) if ("style" === l2) if (h2) {
          for (g2 in h2) !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
          for (g2 in k2) k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
        } else c2 || (f2 || (f2 = []), f2.push(
          l2,
          c2
        )), c2 = k2;
        else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D2("scroll", a2), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
      }
      c2 && (f2 = f2 || []).push("style", c2);
      var l2 = f2;
      if (b2.updateQueue = l2) b2.flags |= 4;
    }
  };
  Cj = function(a2, b2, c2, d2) {
    c2 !== d2 && (b2.flags |= 4);
  };
  function Dj(a2, b2) {
    if (!I2) switch (a2.tailMode) {
      case "hidden":
        b2 = a2.tail;
        for (var c2 = null; null !== b2; ) null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
        null === c2 ? a2.tail = null : c2.sibling = null;
        break;
      case "collapsed":
        c2 = a2.tail;
        for (var d2 = null; null !== c2; ) null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
        null === d2 ? b2 || null === a2.tail ? a2.tail = null : a2.tail.sibling = null : d2.sibling = null;
    }
  }
  function S2(a2) {
    var b2 = null !== a2.alternate && a2.alternate.child === a2.child, c2 = 0, d2 = 0;
    if (b2) for (var e = a2.child; null !== e; ) c2 |= e.lanes | e.childLanes, d2 |= e.subtreeFlags & 14680064, d2 |= e.flags & 14680064, e.return = a2, e = e.sibling;
    else for (e = a2.child; null !== e; ) c2 |= e.lanes | e.childLanes, d2 |= e.subtreeFlags, d2 |= e.flags, e.return = a2, e = e.sibling;
    a2.subtreeFlags |= d2;
    a2.childLanes = c2;
    return b2;
  }
  function Ej(a2, b2, c2) {
    var d2 = b2.pendingProps;
    wg(b2);
    switch (b2.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return S2(b2), null;
      case 1:
        return Zf(b2.type) && $f(), S2(b2), null;
      case 3:
        d2 = b2.stateNode;
        zh();
        E2(Wf);
        E2(H2);
        Eh();
        d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
        if (null === a2 || null === a2.child) Gg(b2) ? b2.flags |= 4 : null === a2 || a2.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Fj(zg), zg = null));
        Aj(a2, b2);
        S2(b2);
        return null;
      case 5:
        Bh(b2);
        var e = xh(wh.current);
        c2 = b2.type;
        if (null !== a2 && null != b2.stateNode) Bj(a2, b2, c2, d2, e), a2.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
        else {
          if (!d2) {
            if (null === b2.stateNode) throw Error(p2(166));
            S2(b2);
            return null;
          }
          a2 = xh(uh.current);
          if (Gg(b2)) {
            d2 = b2.stateNode;
            c2 = b2.type;
            var f2 = b2.memoizedProps;
            d2[Of] = b2;
            d2[Pf] = f2;
            a2 = 0 !== (b2.mode & 1);
            switch (c2) {
              case "dialog":
                D2("cancel", d2);
                D2("close", d2);
                break;
              case "iframe":
              case "object":
              case "embed":
                D2("load", d2);
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++) D2(lf[e], d2);
                break;
              case "source":
                D2("error", d2);
                break;
              case "img":
              case "image":
              case "link":
                D2(
                  "error",
                  d2
                );
                D2("load", d2);
                break;
              case "details":
                D2("toggle", d2);
                break;
              case "input":
                Za(d2, f2);
                D2("invalid", d2);
                break;
              case "select":
                d2._wrapperState = { wasMultiple: !!f2.multiple };
                D2("invalid", d2);
                break;
              case "textarea":
                hb(d2, f2), D2("invalid", d2);
            }
            ub(c2, f2);
            e = null;
            for (var g2 in f2) if (f2.hasOwnProperty(g2)) {
              var h2 = f2[g2];
              "children" === g2 ? "string" === typeof h2 ? d2.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d2.textContent, h2, a2), e = ["children", h2]) : "number" === typeof h2 && d2.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
                d2.textContent,
                h2,
                a2
              ), e = ["children", "" + h2]) : ea.hasOwnProperty(g2) && null != h2 && "onScroll" === g2 && D2("scroll", d2);
            }
            switch (c2) {
              case "input":
                Va(d2);
                db(d2, f2, true);
                break;
              case "textarea":
                Va(d2);
                jb(d2);
                break;
              case "select":
              case "option":
                break;
              default:
                "function" === typeof f2.onClick && (d2.onclick = Bf);
            }
            d2 = e;
            b2.updateQueue = d2;
            null !== d2 && (b2.flags |= 4);
          } else {
            g2 = 9 === e.nodeType ? e : e.ownerDocument;
            "http://www.w3.org/1999/xhtml" === a2 && (a2 = kb(c2));
            "http://www.w3.org/1999/xhtml" === a2 ? "script" === c2 ? (a2 = g2.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : "string" === typeof d2.is ? a2 = g2.createElement(c2, { is: d2.is }) : (a2 = g2.createElement(c2), "select" === c2 && (g2 = a2, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a2 = g2.createElementNS(a2, c2);
            a2[Of] = b2;
            a2[Pf] = d2;
            zj(a2, b2, false, false);
            b2.stateNode = a2;
            a: {
              g2 = vb(c2, d2);
              switch (c2) {
                case "dialog":
                  D2("cancel", a2);
                  D2("close", a2);
                  e = d2;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D2("load", a2);
                  e = d2;
                  break;
                case "video":
                case "audio":
                  for (e = 0; e < lf.length; e++) D2(lf[e], a2);
                  e = d2;
                  break;
                case "source":
                  D2("error", a2);
                  e = d2;
                  break;
                case "img":
                case "image":
                case "link":
                  D2(
                    "error",
                    a2
                  );
                  D2("load", a2);
                  e = d2;
                  break;
                case "details":
                  D2("toggle", a2);
                  e = d2;
                  break;
                case "input":
                  Za(a2, d2);
                  e = Ya(a2, d2);
                  D2("invalid", a2);
                  break;
                case "option":
                  e = d2;
                  break;
                case "select":
                  a2._wrapperState = { wasMultiple: !!d2.multiple };
                  e = A2({}, d2, { value: void 0 });
                  D2("invalid", a2);
                  break;
                case "textarea":
                  hb(a2, d2);
                  e = gb(a2, d2);
                  D2("invalid", a2);
                  break;
                default:
                  e = d2;
              }
              ub(c2, e);
              h2 = e;
              for (f2 in h2) if (h2.hasOwnProperty(f2)) {
                var k2 = h2[f2];
                "style" === f2 ? sb(a2, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a2, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a2, k2) : "number" === typeof k2 && ob(a2, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D2("scroll", a2) : null != k2 && ta(a2, f2, k2, g2));
              }
              switch (c2) {
                case "input":
                  Va(a2);
                  db(a2, d2, false);
                  break;
                case "textarea":
                  Va(a2);
                  jb(a2);
                  break;
                case "option":
                  null != d2.value && a2.setAttribute("value", "" + Sa(d2.value));
                  break;
                case "select":
                  a2.multiple = !!d2.multiple;
                  f2 = d2.value;
                  null != f2 ? fb(a2, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(
                    a2,
                    !!d2.multiple,
                    d2.defaultValue,
                    true
                  );
                  break;
                default:
                  "function" === typeof e.onClick && (a2.onclick = Bf);
              }
              switch (c2) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  d2 = !!d2.autoFocus;
                  break a;
                case "img":
                  d2 = true;
                  break a;
                default:
                  d2 = false;
              }
            }
            d2 && (b2.flags |= 4);
          }
          null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
        }
        S2(b2);
        return null;
      case 6:
        if (a2 && null != b2.stateNode) Cj(a2, b2, a2.memoizedProps, d2);
        else {
          if ("string" !== typeof d2 && null === b2.stateNode) throw Error(p2(166));
          c2 = xh(wh.current);
          xh(uh.current);
          if (Gg(b2)) {
            d2 = b2.stateNode;
            c2 = b2.memoizedProps;
            d2[Of] = b2;
            if (f2 = d2.nodeValue !== c2) {
              if (a2 = xg, null !== a2) switch (a2.tag) {
                case 3:
                  Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
                  break;
                case 5:
                  true !== a2.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
              }
            }
            f2 && (b2.flags |= 4);
          } else d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b2, b2.stateNode = d2;
        }
        S2(b2);
        return null;
      case 13:
        E2(L2);
        d2 = b2.memoizedState;
        if (null === a2 || null !== a2.memoizedState && null !== a2.memoizedState.dehydrated) {
          if (I2 && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128)) Hg(), Ig(), b2.flags |= 98560, f2 = false;
          else if (f2 = Gg(b2), null !== d2 && null !== d2.dehydrated) {
            if (null === a2) {
              if (!f2) throw Error(p2(318));
              f2 = b2.memoizedState;
              f2 = null !== f2 ? f2.dehydrated : null;
              if (!f2) throw Error(p2(317));
              f2[Of] = b2;
            } else Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
            S2(b2);
            f2 = false;
          } else null !== zg && (Fj(zg), zg = null), f2 = true;
          if (!f2) return b2.flags & 65536 ? b2 : null;
        }
        if (0 !== (b2.flags & 128)) return b2.lanes = c2, b2;
        d2 = null !== d2;
        d2 !== (null !== a2 && null !== a2.memoizedState) && d2 && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a2 || 0 !== (L2.current & 1) ? 0 === T2 && (T2 = 3) : tj()));
        null !== b2.updateQueue && (b2.flags |= 4);
        S2(b2);
        return null;
      case 4:
        return zh(), Aj(a2, b2), null === a2 && sf(b2.stateNode.containerInfo), S2(b2), null;
      case 10:
        return ah(b2.type._context), S2(b2), null;
      case 17:
        return Zf(b2.type) && $f(), S2(b2), null;
      case 19:
        E2(L2);
        f2 = b2.memoizedState;
        if (null === f2) return S2(b2), null;
        d2 = 0 !== (b2.flags & 128);
        g2 = f2.rendering;
        if (null === g2) if (d2) Dj(f2, false);
        else {
          if (0 !== T2 || null !== a2 && 0 !== (a2.flags & 128)) for (a2 = b2.child; null !== a2; ) {
            g2 = Ch(a2);
            if (null !== g2) {
              b2.flags |= 128;
              Dj(f2, false);
              d2 = g2.updateQueue;
              null !== d2 && (b2.updateQueue = d2, b2.flags |= 4);
              b2.subtreeFlags = 0;
              d2 = c2;
              for (c2 = b2.child; null !== c2; ) f2 = c2, a2 = d2, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a2 = g2.dependencies, f2.dependencies = null === a2 ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
              G2(L2, L2.current & 1 | 2);
              return b2.child;
            }
            a2 = a2.sibling;
          }
          null !== f2.tail && B2() > Gj && (b2.flags |= 128, d2 = true, Dj(f2, false), b2.lanes = 4194304);
        }
        else {
          if (!d2) if (a2 = Ch(g2), null !== a2) {
            if (b2.flags |= 128, d2 = true, c2 = a2.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I2) return S2(b2), null;
          } else 2 * B2() - f2.renderingStartTime > Gj && 1073741824 !== c2 && (b2.flags |= 128, d2 = true, Dj(f2, false), b2.lanes = 4194304);
          f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
        }
        if (null !== f2.tail) return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B2(), b2.sibling = null, c2 = L2.current, G2(L2, d2 ? c2 & 1 | 2 : c2 & 1), b2;
        S2(b2);
        return null;
      case 22:
      case 23:
        return Hj(), d2 = null !== b2.memoizedState, null !== a2 && null !== a2.memoizedState !== d2 && (b2.flags |= 8192), d2 && 0 !== (b2.mode & 1) ? 0 !== (fj & 1073741824) && (S2(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S2(b2), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p2(156, b2.tag));
  }
  function Ij(a2, b2) {
    wg(b2);
    switch (b2.tag) {
      case 1:
        return Zf(b2.type) && $f(), a2 = b2.flags, a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
      case 3:
        return zh(), E2(Wf), E2(H2), Eh(), a2 = b2.flags, 0 !== (a2 & 65536) && 0 === (a2 & 128) ? (b2.flags = a2 & -65537 | 128, b2) : null;
      case 5:
        return Bh(b2), null;
      case 13:
        E2(L2);
        a2 = b2.memoizedState;
        if (null !== a2 && null !== a2.dehydrated) {
          if (null === b2.alternate) throw Error(p2(340));
          Ig();
        }
        a2 = b2.flags;
        return a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
      case 19:
        return E2(L2), null;
      case 4:
        return zh(), null;
      case 10:
        return ah(b2.type._context), null;
      case 22:
      case 23:
        return Hj(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Jj = false, U2 = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V2 = null;
  function Lj(a2, b2) {
    var c2 = a2.ref;
    if (null !== c2) if ("function" === typeof c2) try {
      c2(null);
    } catch (d2) {
      W2(a2, b2, d2);
    }
    else c2.current = null;
  }
  function Mj(a2, b2, c2) {
    try {
      c2();
    } catch (d2) {
      W2(a2, b2, d2);
    }
  }
  var Nj = false;
  function Oj(a2, b2) {
    Cf = dd;
    a2 = Me2();
    if (Ne2(a2)) {
      if ("selectionStart" in a2) var c2 = { start: a2.selectionStart, end: a2.selectionEnd };
      else a: {
        c2 = (c2 = a2.ownerDocument) && c2.defaultView || window;
        var d2 = c2.getSelection && c2.getSelection();
        if (d2 && 0 !== d2.rangeCount) {
          c2 = d2.anchorNode;
          var e = d2.anchorOffset, f2 = d2.focusNode;
          d2 = d2.focusOffset;
          try {
            c2.nodeType, f2.nodeType;
          } catch (F2) {
            c2 = null;
            break a;
          }
          var g2 = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a2, r2 = null;
          b: for (; ; ) {
            for (var y2; ; ) {
              q2 !== c2 || 0 !== e && 3 !== q2.nodeType || (h2 = g2 + e);
              q2 !== f2 || 0 !== d2 && 3 !== q2.nodeType || (k2 = g2 + d2);
              3 === q2.nodeType && (g2 += q2.nodeValue.length);
              if (null === (y2 = q2.firstChild)) break;
              r2 = q2;
              q2 = y2;
            }
            for (; ; ) {
              if (q2 === a2) break b;
              r2 === c2 && ++l2 === e && (h2 = g2);
              r2 === f2 && ++m2 === d2 && (k2 = g2);
              if (null !== (y2 = q2.nextSibling)) break;
              q2 = r2;
              r2 = q2.parentNode;
            }
            q2 = y2;
          }
          c2 = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
        } else c2 = null;
      }
      c2 = c2 || { start: 0, end: 0 };
    } else c2 = null;
    Df = { focusedElem: a2, selectionRange: c2 };
    dd = false;
    for (V2 = b2; null !== V2; ) if (b2 = V2, a2 = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a2) a2.return = b2, V2 = a2;
    else for (; null !== V2; ) {
      b2 = V2;
      try {
        var n2 = b2.alternate;
        if (0 !== (b2.flags & 1024)) switch (b2.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (null !== n2) {
              var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Ci(b2.type, t2), J2);
              x2.__reactInternalSnapshotBeforeUpdate = w2;
            }
            break;
          case 3:
            var u2 = b2.stateNode.containerInfo;
            1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(p2(163));
        }
      } catch (F2) {
        W2(b2, b2.return, F2);
      }
      a2 = b2.sibling;
      if (null !== a2) {
        a2.return = b2.return;
        V2 = a2;
        break;
      }
      V2 = b2.return;
    }
    n2 = Nj;
    Nj = false;
    return n2;
  }
  function Pj(a2, b2, c2) {
    var d2 = b2.updateQueue;
    d2 = null !== d2 ? d2.lastEffect : null;
    if (null !== d2) {
      var e = d2 = d2.next;
      do {
        if ((e.tag & a2) === a2) {
          var f2 = e.destroy;
          e.destroy = void 0;
          void 0 !== f2 && Mj(b2, c2, f2);
        }
        e = e.next;
      } while (e !== d2);
    }
  }
  function Qj(a2, b2) {
    b2 = b2.updateQueue;
    b2 = null !== b2 ? b2.lastEffect : null;
    if (null !== b2) {
      var c2 = b2 = b2.next;
      do {
        if ((c2.tag & a2) === a2) {
          var d2 = c2.create;
          c2.destroy = d2();
        }
        c2 = c2.next;
      } while (c2 !== b2);
    }
  }
  function Rj(a2) {
    var b2 = a2.ref;
    if (null !== b2) {
      var c2 = a2.stateNode;
      switch (a2.tag) {
        case 5:
          a2 = c2;
          break;
        default:
          a2 = c2;
      }
      "function" === typeof b2 ? b2(a2) : b2.current = a2;
    }
  }
  function Sj(a2) {
    var b2 = a2.alternate;
    null !== b2 && (a2.alternate = null, Sj(b2));
    a2.child = null;
    a2.deletions = null;
    a2.sibling = null;
    5 === a2.tag && (b2 = a2.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
    a2.stateNode = null;
    a2.return = null;
    a2.dependencies = null;
    a2.memoizedProps = null;
    a2.memoizedState = null;
    a2.pendingProps = null;
    a2.stateNode = null;
    a2.updateQueue = null;
  }
  function Tj(a2) {
    return 5 === a2.tag || 3 === a2.tag || 4 === a2.tag;
  }
  function Uj(a2) {
    a: for (; ; ) {
      for (; null === a2.sibling; ) {
        if (null === a2.return || Tj(a2.return)) return null;
        a2 = a2.return;
      }
      a2.sibling.return = a2.return;
      for (a2 = a2.sibling; 5 !== a2.tag && 6 !== a2.tag && 18 !== a2.tag; ) {
        if (a2.flags & 2) continue a;
        if (null === a2.child || 4 === a2.tag) continue a;
        else a2.child.return = a2, a2 = a2.child;
      }
      if (!(a2.flags & 2)) return a2.stateNode;
    }
  }
  function Vj(a2, b2, c2) {
    var d2 = a2.tag;
    if (5 === d2 || 6 === d2) a2 = a2.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a2, b2) : c2.insertBefore(a2, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a2, c2)) : (b2 = c2, b2.appendChild(a2)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
    else if (4 !== d2 && (a2 = a2.child, null !== a2)) for (Vj(a2, b2, c2), a2 = a2.sibling; null !== a2; ) Vj(a2, b2, c2), a2 = a2.sibling;
  }
  function Wj(a2, b2, c2) {
    var d2 = a2.tag;
    if (5 === d2 || 6 === d2) a2 = a2.stateNode, b2 ? c2.insertBefore(a2, b2) : c2.appendChild(a2);
    else if (4 !== d2 && (a2 = a2.child, null !== a2)) for (Wj(a2, b2, c2), a2 = a2.sibling; null !== a2; ) Wj(a2, b2, c2), a2 = a2.sibling;
  }
  var X2 = null, Xj = false;
  function Yj(a2, b2, c2) {
    for (c2 = c2.child; null !== c2; ) Zj(a2, b2, c2), c2 = c2.sibling;
  }
  function Zj(a2, b2, c2) {
    if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
      lc.onCommitFiberUnmount(kc, c2);
    } catch (h2) {
    }
    switch (c2.tag) {
      case 5:
        U2 || Lj(c2, b2);
      case 6:
        var d2 = X2, e = Xj;
        X2 = null;
        Yj(a2, b2, c2);
        X2 = d2;
        Xj = e;
        null !== X2 && (Xj ? (a2 = X2, c2 = c2.stateNode, 8 === a2.nodeType ? a2.parentNode.removeChild(c2) : a2.removeChild(c2)) : X2.removeChild(c2.stateNode));
        break;
      case 18:
        null !== X2 && (Xj ? (a2 = X2, c2 = c2.stateNode, 8 === a2.nodeType ? Kf(a2.parentNode, c2) : 1 === a2.nodeType && Kf(a2, c2), bd(a2)) : Kf(X2, c2.stateNode));
        break;
      case 4:
        d2 = X2;
        e = Xj;
        X2 = c2.stateNode.containerInfo;
        Xj = true;
        Yj(a2, b2, c2);
        X2 = d2;
        Xj = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!U2 && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
          e = d2 = d2.next;
          do {
            var f2 = e, g2 = f2.destroy;
            f2 = f2.tag;
            void 0 !== g2 && (0 !== (f2 & 2) ? Mj(c2, b2, g2) : 0 !== (f2 & 4) && Mj(c2, b2, g2));
            e = e.next;
          } while (e !== d2);
        }
        Yj(a2, b2, c2);
        break;
      case 1:
        if (!U2 && (Lj(c2, b2), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount)) try {
          d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
        } catch (h2) {
          W2(c2, b2, h2);
        }
        Yj(a2, b2, c2);
        break;
      case 21:
        Yj(a2, b2, c2);
        break;
      case 22:
        c2.mode & 1 ? (U2 = (d2 = U2) || null !== c2.memoizedState, Yj(a2, b2, c2), U2 = d2) : Yj(a2, b2, c2);
        break;
      default:
        Yj(a2, b2, c2);
    }
  }
  function ak(a2) {
    var b2 = a2.updateQueue;
    if (null !== b2) {
      a2.updateQueue = null;
      var c2 = a2.stateNode;
      null === c2 && (c2 = a2.stateNode = new Kj());
      b2.forEach(function(b3) {
        var d2 = bk.bind(null, a2, b3);
        c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
      });
    }
  }
  function ck(a2, b2) {
    var c2 = b2.deletions;
    if (null !== c2) for (var d2 = 0; d2 < c2.length; d2++) {
      var e = c2[d2];
      try {
        var f2 = a2, g2 = b2, h2 = g2;
        a: for (; null !== h2; ) {
          switch (h2.tag) {
            case 5:
              X2 = h2.stateNode;
              Xj = false;
              break a;
            case 3:
              X2 = h2.stateNode.containerInfo;
              Xj = true;
              break a;
            case 4:
              X2 = h2.stateNode.containerInfo;
              Xj = true;
              break a;
          }
          h2 = h2.return;
        }
        if (null === X2) throw Error(p2(160));
        Zj(f2, g2, e);
        X2 = null;
        Xj = false;
        var k2 = e.alternate;
        null !== k2 && (k2.return = null);
        e.return = null;
      } catch (l2) {
        W2(e, b2, l2);
      }
    }
    if (b2.subtreeFlags & 12854) for (b2 = b2.child; null !== b2; ) dk(b2, a2), b2 = b2.sibling;
  }
  function dk(a2, b2) {
    var c2 = a2.alternate, d2 = a2.flags;
    switch (a2.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ck(b2, a2);
        ek(a2);
        if (d2 & 4) {
          try {
            Pj(3, a2, a2.return), Qj(3, a2);
          } catch (t2) {
            W2(a2, a2.return, t2);
          }
          try {
            Pj(5, a2, a2.return);
          } catch (t2) {
            W2(a2, a2.return, t2);
          }
        }
        break;
      case 1:
        ck(b2, a2);
        ek(a2);
        d2 & 512 && null !== c2 && Lj(c2, c2.return);
        break;
      case 5:
        ck(b2, a2);
        ek(a2);
        d2 & 512 && null !== c2 && Lj(c2, c2.return);
        if (a2.flags & 32) {
          var e = a2.stateNode;
          try {
            ob(e, "");
          } catch (t2) {
            W2(a2, a2.return, t2);
          }
        }
        if (d2 & 4 && (e = a2.stateNode, null != e)) {
          var f2 = a2.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h2 = a2.type, k2 = a2.updateQueue;
          a2.updateQueue = null;
          if (null !== k2) try {
            "input" === h2 && "radio" === f2.type && null != f2.name && ab(e, f2);
            vb(h2, g2);
            var l2 = vb(h2, f2);
            for (g2 = 0; g2 < k2.length; g2 += 2) {
              var m2 = k2[g2], q2 = k2[g2 + 1];
              "style" === m2 ? sb(e, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e, q2) : "children" === m2 ? ob(e, q2) : ta(e, m2, q2, l2);
            }
            switch (h2) {
              case "input":
                bb(e, f2);
                break;
              case "textarea":
                ib(e, f2);
                break;
              case "select":
                var r2 = e._wrapperState.wasMultiple;
                e._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                null != y2 ? fb(e, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                  e,
                  !!f2.multiple,
                  f2.defaultValue,
                  true
                ) : fb(e, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e[Pf] = f2;
          } catch (t2) {
            W2(a2, a2.return, t2);
          }
        }
        break;
      case 6:
        ck(b2, a2);
        ek(a2);
        if (d2 & 4) {
          if (null === a2.stateNode) throw Error(p2(162));
          e = a2.stateNode;
          f2 = a2.memoizedProps;
          try {
            e.nodeValue = f2;
          } catch (t2) {
            W2(a2, a2.return, t2);
          }
        }
        break;
      case 3:
        ck(b2, a2);
        ek(a2);
        if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated) try {
          bd(b2.containerInfo);
        } catch (t2) {
          W2(a2, a2.return, t2);
        }
        break;
      case 4:
        ck(b2, a2);
        ek(a2);
        break;
      case 13:
        ck(b2, a2);
        ek(a2);
        e = a2.child;
        e.flags & 8192 && (f2 = null !== e.memoizedState, e.stateNode.isHidden = f2, !f2 || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B2()));
        d2 & 4 && ak(a2);
        break;
      case 22:
        m2 = null !== c2 && null !== c2.memoizedState;
        a2.mode & 1 ? (U2 = (l2 = U2) || m2, ck(b2, a2), U2 = l2) : ck(b2, a2);
        ek(a2);
        if (d2 & 8192) {
          l2 = null !== a2.memoizedState;
          if ((a2.stateNode.isHidden = l2) && !m2 && 0 !== (a2.mode & 1)) for (V2 = a2, m2 = a2.child; null !== m2; ) {
            for (q2 = V2 = m2; null !== V2; ) {
              r2 = V2;
              y2 = r2.child;
              switch (r2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pj(4, r2, r2.return);
                  break;
                case 1:
                  Lj(r2, r2.return);
                  var n2 = r2.stateNode;
                  if ("function" === typeof n2.componentWillUnmount) {
                    d2 = r2;
                    c2 = r2.return;
                    try {
                      b2 = d2, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                    } catch (t2) {
                      W2(d2, c2, t2);
                    }
                  }
                  break;
                case 5:
                  Lj(r2, r2.return);
                  break;
                case 22:
                  if (null !== r2.memoizedState) {
                    gk(q2);
                    continue;
                  }
              }
              null !== y2 ? (y2.return = r2, V2 = y2) : gk(q2);
            }
            m2 = m2.sibling;
          }
          a: for (m2 = null, q2 = a2; ; ) {
            if (5 === q2.tag) {
              if (null === m2) {
                m2 = q2;
                try {
                  e = q2.stateNode, l2 ? (f2 = e.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g2));
                } catch (t2) {
                  W2(a2, a2.return, t2);
                }
              }
            } else if (6 === q2.tag) {
              if (null === m2) try {
                q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
              } catch (t2) {
                W2(a2, a2.return, t2);
              }
            } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a2) && null !== q2.child) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a2) break a;
            for (; null === q2.sibling; ) {
              if (null === q2.return || q2.return === a2) break a;
              m2 === q2 && (m2 = null);
              q2 = q2.return;
            }
            m2 === q2 && (m2 = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
        }
        break;
      case 19:
        ck(b2, a2);
        ek(a2);
        d2 & 4 && ak(a2);
        break;
      case 21:
        break;
      default:
        ck(
          b2,
          a2
        ), ek(a2);
    }
  }
  function ek(a2) {
    var b2 = a2.flags;
    if (b2 & 2) {
      try {
        a: {
          for (var c2 = a2.return; null !== c2; ) {
            if (Tj(c2)) {
              var d2 = c2;
              break a;
            }
            c2 = c2.return;
          }
          throw Error(p2(160));
        }
        switch (d2.tag) {
          case 5:
            var e = d2.stateNode;
            d2.flags & 32 && (ob(e, ""), d2.flags &= -33);
            var f2 = Uj(a2);
            Wj(a2, f2, e);
            break;
          case 3:
          case 4:
            var g2 = d2.stateNode.containerInfo, h2 = Uj(a2);
            Vj(a2, h2, g2);
            break;
          default:
            throw Error(p2(161));
        }
      } catch (k2) {
        W2(a2, a2.return, k2);
      }
      a2.flags &= -3;
    }
    b2 & 4096 && (a2.flags &= -4097);
  }
  function hk(a2, b2, c2) {
    V2 = a2;
    ik(a2);
  }
  function ik(a2, b2, c2) {
    for (var d2 = 0 !== (a2.mode & 1); null !== V2; ) {
      var e = V2, f2 = e.child;
      if (22 === e.tag && d2) {
        var g2 = null !== e.memoizedState || Jj;
        if (!g2) {
          var h2 = e.alternate, k2 = null !== h2 && null !== h2.memoizedState || U2;
          h2 = Jj;
          var l2 = U2;
          Jj = g2;
          if ((U2 = k2) && !l2) for (V2 = e; null !== V2; ) g2 = V2, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? jk(e) : null !== k2 ? (k2.return = g2, V2 = k2) : jk(e);
          for (; null !== f2; ) V2 = f2, ik(f2), f2 = f2.sibling;
          V2 = e;
          Jj = h2;
          U2 = l2;
        }
        kk(a2);
      } else 0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, V2 = f2) : kk(a2);
    }
  }
  function kk(a2) {
    for (; null !== V2; ) {
      var b2 = V2;
      if (0 !== (b2.flags & 8772)) {
        var c2 = b2.alternate;
        try {
          if (0 !== (b2.flags & 8772)) switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              U2 || Qj(5, b2);
              break;
            case 1:
              var d2 = b2.stateNode;
              if (b2.flags & 4 && !U2) if (null === c2) d2.componentDidMount();
              else {
                var e = b2.elementType === b2.type ? c2.memoizedProps : Ci(b2.type, c2.memoizedProps);
                d2.componentDidUpdate(e, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
              }
              var f2 = b2.updateQueue;
              null !== f2 && sh(b2, f2, d2);
              break;
            case 3:
              var g2 = b2.updateQueue;
              if (null !== g2) {
                c2 = null;
                if (null !== b2.child) switch (b2.child.tag) {
                  case 5:
                    c2 = b2.child.stateNode;
                    break;
                  case 1:
                    c2 = b2.child.stateNode;
                }
                sh(b2, g2, c2);
              }
              break;
            case 5:
              var h2 = b2.stateNode;
              if (null === c2 && b2.flags & 4) {
                c2 = h2;
                var k2 = b2.memoizedProps;
                switch (b2.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c2.focus();
                    break;
                  case "img":
                    k2.src && (c2.src = k2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (null === b2.memoizedState) {
                var l2 = b2.alternate;
                if (null !== l2) {
                  var m2 = l2.memoizedState;
                  if (null !== m2) {
                    var q2 = m2.dehydrated;
                    null !== q2 && bd(q2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p2(163));
          }
          U2 || b2.flags & 512 && Rj(b2);
        } catch (r2) {
          W2(b2, b2.return, r2);
        }
      }
      if (b2 === a2) {
        V2 = null;
        break;
      }
      c2 = b2.sibling;
      if (null !== c2) {
        c2.return = b2.return;
        V2 = c2;
        break;
      }
      V2 = b2.return;
    }
  }
  function gk(a2) {
    for (; null !== V2; ) {
      var b2 = V2;
      if (b2 === a2) {
        V2 = null;
        break;
      }
      var c2 = b2.sibling;
      if (null !== c2) {
        c2.return = b2.return;
        V2 = c2;
        break;
      }
      V2 = b2.return;
    }
  }
  function jk(a2) {
    for (; null !== V2; ) {
      var b2 = V2;
      try {
        switch (b2.tag) {
          case 0:
          case 11:
          case 15:
            var c2 = b2.return;
            try {
              Qj(4, b2);
            } catch (k2) {
              W2(b2, c2, k2);
            }
            break;
          case 1:
            var d2 = b2.stateNode;
            if ("function" === typeof d2.componentDidMount) {
              var e = b2.return;
              try {
                d2.componentDidMount();
              } catch (k2) {
                W2(b2, e, k2);
              }
            }
            var f2 = b2.return;
            try {
              Rj(b2);
            } catch (k2) {
              W2(b2, f2, k2);
            }
            break;
          case 5:
            var g2 = b2.return;
            try {
              Rj(b2);
            } catch (k2) {
              W2(b2, g2, k2);
            }
        }
      } catch (k2) {
        W2(b2, b2.return, k2);
      }
      if (b2 === a2) {
        V2 = null;
        break;
      }
      var h2 = b2.sibling;
      if (null !== h2) {
        h2.return = b2.return;
        V2 = h2;
        break;
      }
      V2 = b2.return;
    }
  }
  var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K2 = 0, Q2 = null, Y2 = null, Z2 = 0, fj = 0, ej = Uf(0), T2 = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
  function R2() {
    return 0 !== (K2 & 6) ? B2() : -1 !== Ak ? Ak : Ak = B2();
  }
  function yi(a2) {
    if (0 === (a2.mode & 1)) return 1;
    if (0 !== (K2 & 2) && 0 !== Z2) return Z2 & -Z2;
    if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
    a2 = C2;
    if (0 !== a2) return a2;
    a2 = window.event;
    a2 = void 0 === a2 ? 16 : jd(a2.type);
    return a2;
  }
  function gi(a2, b2, c2, d2) {
    if (50 < yk) throw yk = 0, zk = null, Error(p2(185));
    Ac(a2, c2, d2);
    if (0 === (K2 & 2) || a2 !== Q2) a2 === Q2 && (0 === (K2 & 2) && (qk |= c2), 4 === T2 && Ck(a2, Z2)), Dk(a2, d2), 1 === c2 && 0 === K2 && 0 === (b2.mode & 1) && (Gj = B2() + 500, fg && jg());
  }
  function Dk(a2, b2) {
    var c2 = a2.callbackNode;
    wc(a2, b2);
    var d2 = uc(a2, a2 === Q2 ? Z2 : 0);
    if (0 === d2) null !== c2 && bc(c2), a2.callbackNode = null, a2.callbackPriority = 0;
    else if (b2 = d2 & -d2, a2.callbackPriority !== b2) {
      null != c2 && bc(c2);
      if (1 === b2) 0 === a2.tag ? ig(Ek.bind(null, a2)) : hg(Ek.bind(null, a2)), Jf(function() {
        0 === (K2 & 6) && jg();
      }), c2 = null;
      else {
        switch (Dc(d2)) {
          case 1:
            c2 = fc;
            break;
          case 4:
            c2 = gc;
            break;
          case 16:
            c2 = hc;
            break;
          case 536870912:
            c2 = jc;
            break;
          default:
            c2 = hc;
        }
        c2 = Fk(c2, Gk.bind(null, a2));
      }
      a2.callbackPriority = b2;
      a2.callbackNode = c2;
    }
  }
  function Gk(a2, b2) {
    Ak = -1;
    Bk = 0;
    if (0 !== (K2 & 6)) throw Error(p2(327));
    var c2 = a2.callbackNode;
    if (Hk() && a2.callbackNode !== c2) return null;
    var d2 = uc(a2, a2 === Q2 ? Z2 : 0);
    if (0 === d2) return null;
    if (0 !== (d2 & 30) || 0 !== (d2 & a2.expiredLanes) || b2) b2 = Ik(a2, d2);
    else {
      b2 = d2;
      var e = K2;
      K2 |= 2;
      var f2 = Jk();
      if (Q2 !== a2 || Z2 !== b2) uk = null, Gj = B2() + 500, Kk(a2, b2);
      do
        try {
          Lk();
          break;
        } catch (h2) {
          Mk(a2, h2);
        }
      while (1);
      $g();
      mk.current = f2;
      K2 = e;
      null !== Y2 ? b2 = 0 : (Q2 = null, Z2 = 0, b2 = T2);
    }
    if (0 !== b2) {
      2 === b2 && (e = xc(a2), 0 !== e && (d2 = e, b2 = Nk(a2, e)));
      if (1 === b2) throw c2 = pk, Kk(a2, 0), Ck(a2, d2), Dk(a2, B2()), c2;
      if (6 === b2) Ck(a2, d2);
      else {
        e = a2.current.alternate;
        if (0 === (d2 & 30) && !Ok(e) && (b2 = Ik(a2, d2), 2 === b2 && (f2 = xc(a2), 0 !== f2 && (d2 = f2, b2 = Nk(a2, f2))), 1 === b2)) throw c2 = pk, Kk(a2, 0), Ck(a2, d2), Dk(a2, B2()), c2;
        a2.finishedWork = e;
        a2.finishedLanes = d2;
        switch (b2) {
          case 0:
          case 1:
            throw Error(p2(345));
          case 2:
            Pk(a2, tk, uk);
            break;
          case 3:
            Ck(a2, d2);
            if ((d2 & 130023424) === d2 && (b2 = fk + 500 - B2(), 10 < b2)) {
              if (0 !== uc(a2, 0)) break;
              e = a2.suspendedLanes;
              if ((e & d2) !== d2) {
                R2();
                a2.pingedLanes |= a2.suspendedLanes & e;
                break;
              }
              a2.timeoutHandle = Ff(Pk.bind(null, a2, tk, uk), b2);
              break;
            }
            Pk(a2, tk, uk);
            break;
          case 4:
            Ck(a2, d2);
            if ((d2 & 4194240) === d2) break;
            b2 = a2.eventTimes;
            for (e = -1; 0 < d2; ) {
              var g2 = 31 - oc(d2);
              f2 = 1 << g2;
              g2 = b2[g2];
              g2 > e && (e = g2);
              d2 &= ~f2;
            }
            d2 = e;
            d2 = B2() - d2;
            d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * lk(d2 / 1960)) - d2;
            if (10 < d2) {
              a2.timeoutHandle = Ff(Pk.bind(null, a2, tk, uk), d2);
              break;
            }
            Pk(a2, tk, uk);
            break;
          case 5:
            Pk(a2, tk, uk);
            break;
          default:
            throw Error(p2(329));
        }
      }
    }
    Dk(a2, B2());
    return a2.callbackNode === c2 ? Gk.bind(null, a2) : null;
  }
  function Nk(a2, b2) {
    var c2 = sk;
    a2.current.memoizedState.isDehydrated && (Kk(a2, b2).flags |= 256);
    a2 = Ik(a2, b2);
    2 !== a2 && (b2 = tk, tk = c2, null !== b2 && Fj(b2));
    return a2;
  }
  function Fj(a2) {
    null === tk ? tk = a2 : tk.push.apply(tk, a2);
  }
  function Ok(a2) {
    for (var b2 = a2; ; ) {
      if (b2.flags & 16384) {
        var c2 = b2.updateQueue;
        if (null !== c2 && (c2 = c2.stores, null !== c2)) for (var d2 = 0; d2 < c2.length; d2++) {
          var e = c2[d2], f2 = e.getSnapshot;
          e = e.value;
          try {
            if (!He2(f2(), e)) return false;
          } catch (g2) {
            return false;
          }
        }
      }
      c2 = b2.child;
      if (b2.subtreeFlags & 16384 && null !== c2) c2.return = b2, b2 = c2;
      else {
        if (b2 === a2) break;
        for (; null === b2.sibling; ) {
          if (null === b2.return || b2.return === a2) return true;
          b2 = b2.return;
        }
        b2.sibling.return = b2.return;
        b2 = b2.sibling;
      }
    }
    return true;
  }
  function Ck(a2, b2) {
    b2 &= ~rk;
    b2 &= ~qk;
    a2.suspendedLanes |= b2;
    a2.pingedLanes &= ~b2;
    for (a2 = a2.expirationTimes; 0 < b2; ) {
      var c2 = 31 - oc(b2), d2 = 1 << c2;
      a2[c2] = -1;
      b2 &= ~d2;
    }
  }
  function Ek(a2) {
    if (0 !== (K2 & 6)) throw Error(p2(327));
    Hk();
    var b2 = uc(a2, 0);
    if (0 === (b2 & 1)) return Dk(a2, B2()), null;
    var c2 = Ik(a2, b2);
    if (0 !== a2.tag && 2 === c2) {
      var d2 = xc(a2);
      0 !== d2 && (b2 = d2, c2 = Nk(a2, d2));
    }
    if (1 === c2) throw c2 = pk, Kk(a2, 0), Ck(a2, b2), Dk(a2, B2()), c2;
    if (6 === c2) throw Error(p2(345));
    a2.finishedWork = a2.current.alternate;
    a2.finishedLanes = b2;
    Pk(a2, tk, uk);
    Dk(a2, B2());
    return null;
  }
  function Qk(a2, b2) {
    var c2 = K2;
    K2 |= 1;
    try {
      return a2(b2);
    } finally {
      K2 = c2, 0 === K2 && (Gj = B2() + 500, fg && jg());
    }
  }
  function Rk(a2) {
    null !== wk && 0 === wk.tag && 0 === (K2 & 6) && Hk();
    var b2 = K2;
    K2 |= 1;
    var c2 = ok.transition, d2 = C2;
    try {
      if (ok.transition = null, C2 = 1, a2) return a2();
    } finally {
      C2 = d2, ok.transition = c2, K2 = b2, 0 === (K2 & 6) && jg();
    }
  }
  function Hj() {
    fj = ej.current;
    E2(ej);
  }
  function Kk(a2, b2) {
    a2.finishedWork = null;
    a2.finishedLanes = 0;
    var c2 = a2.timeoutHandle;
    -1 !== c2 && (a2.timeoutHandle = -1, Gf(c2));
    if (null !== Y2) for (c2 = Y2.return; null !== c2; ) {
      var d2 = c2;
      wg(d2);
      switch (d2.tag) {
        case 1:
          d2 = d2.type.childContextTypes;
          null !== d2 && void 0 !== d2 && $f();
          break;
        case 3:
          zh();
          E2(Wf);
          E2(H2);
          Eh();
          break;
        case 5:
          Bh(d2);
          break;
        case 4:
          zh();
          break;
        case 13:
          E2(L2);
          break;
        case 19:
          E2(L2);
          break;
        case 10:
          ah(d2.type._context);
          break;
        case 22:
        case 23:
          Hj();
      }
      c2 = c2.return;
    }
    Q2 = a2;
    Y2 = a2 = Pg(a2.current, null);
    Z2 = fj = b2;
    T2 = 0;
    pk = null;
    rk = qk = rh = 0;
    tk = sk = null;
    if (null !== fh) {
      for (b2 = 0; b2 < fh.length; b2++) if (c2 = fh[b2], d2 = c2.interleaved, null !== d2) {
        c2.interleaved = null;
        var e = d2.next, f2 = c2.pending;
        if (null !== f2) {
          var g2 = f2.next;
          f2.next = e;
          d2.next = g2;
        }
        c2.pending = d2;
      }
      fh = null;
    }
    return a2;
  }
  function Mk(a2, b2) {
    do {
      var c2 = Y2;
      try {
        $g();
        Fh.current = Rh;
        if (Ih) {
          for (var d2 = M2.memoizedState; null !== d2; ) {
            var e = d2.queue;
            null !== e && (e.pending = null);
            d2 = d2.next;
          }
          Ih = false;
        }
        Hh = 0;
        O2 = N2 = M2 = null;
        Jh = false;
        Kh = 0;
        nk.current = null;
        if (null === c2 || null === c2.return) {
          T2 = 1;
          pk = b2;
          Y2 = null;
          break;
        }
        a: {
          var f2 = a2, g2 = c2.return, h2 = c2, k2 = b2;
          b2 = Z2;
          h2.flags |= 32768;
          if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
            var l2 = k2, m2 = h2, q2 = m2.tag;
            if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
              var r2 = m2.alternate;
              r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
            }
            var y2 = Ui(g2);
            if (null !== y2) {
              y2.flags &= -257;
              Vi(y2, g2, h2, f2, b2);
              y2.mode & 1 && Si(f2, l2, b2);
              b2 = y2;
              k2 = l2;
              var n2 = b2.updateQueue;
              if (null === n2) {
                var t2 = /* @__PURE__ */ new Set();
                t2.add(k2);
                b2.updateQueue = t2;
              } else n2.add(k2);
              break a;
            } else {
              if (0 === (b2 & 1)) {
                Si(f2, l2, b2);
                tj();
                break a;
              }
              k2 = Error(p2(426));
            }
          } else if (I2 && h2.mode & 1) {
            var J2 = Ui(g2);
            if (null !== J2) {
              0 === (J2.flags & 65536) && (J2.flags |= 256);
              Vi(J2, g2, h2, f2, b2);
              Jg(Ji(k2, h2));
              break a;
            }
          }
          f2 = k2 = Ji(k2, h2);
          4 !== T2 && (T2 = 2);
          null === sk ? sk = [f2] : sk.push(f2);
          f2 = g2;
          do {
            switch (f2.tag) {
              case 3:
                f2.flags |= 65536;
                b2 &= -b2;
                f2.lanes |= b2;
                var x2 = Ni(f2, k2, b2);
                ph(f2, x2);
                break a;
              case 1:
                h2 = k2;
                var w2 = f2.type, u2 = f2.stateNode;
                if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Ri || !Ri.has(u2)))) {
                  f2.flags |= 65536;
                  b2 &= -b2;
                  f2.lanes |= b2;
                  var F2 = Qi(f2, h2, b2);
                  ph(f2, F2);
                  break a;
                }
            }
            f2 = f2.return;
          } while (null !== f2);
        }
        Sk(c2);
      } catch (na) {
        b2 = na;
        Y2 === c2 && null !== c2 && (Y2 = c2 = c2.return);
        continue;
      }
      break;
    } while (1);
  }
  function Jk() {
    var a2 = mk.current;
    mk.current = Rh;
    return null === a2 ? Rh : a2;
  }
  function tj() {
    if (0 === T2 || 3 === T2 || 2 === T2) T2 = 4;
    null === Q2 || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q2, Z2);
  }
  function Ik(a2, b2) {
    var c2 = K2;
    K2 |= 2;
    var d2 = Jk();
    if (Q2 !== a2 || Z2 !== b2) uk = null, Kk(a2, b2);
    do
      try {
        Tk();
        break;
      } catch (e) {
        Mk(a2, e);
      }
    while (1);
    $g();
    K2 = c2;
    mk.current = d2;
    if (null !== Y2) throw Error(p2(261));
    Q2 = null;
    Z2 = 0;
    return T2;
  }
  function Tk() {
    for (; null !== Y2; ) Uk(Y2);
  }
  function Lk() {
    for (; null !== Y2 && !cc(); ) Uk(Y2);
  }
  function Uk(a2) {
    var b2 = Vk(a2.alternate, a2, fj);
    a2.memoizedProps = a2.pendingProps;
    null === b2 ? Sk(a2) : Y2 = b2;
    nk.current = null;
  }
  function Sk(a2) {
    var b2 = a2;
    do {
      var c2 = b2.alternate;
      a2 = b2.return;
      if (0 === (b2.flags & 32768)) {
        if (c2 = Ej(c2, b2, fj), null !== c2) {
          Y2 = c2;
          return;
        }
      } else {
        c2 = Ij(c2, b2);
        if (null !== c2) {
          c2.flags &= 32767;
          Y2 = c2;
          return;
        }
        if (null !== a2) a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null;
        else {
          T2 = 6;
          Y2 = null;
          return;
        }
      }
      b2 = b2.sibling;
      if (null !== b2) {
        Y2 = b2;
        return;
      }
      Y2 = b2 = a2;
    } while (null !== b2);
    0 === T2 && (T2 = 5);
  }
  function Pk(a2, b2, c2) {
    var d2 = C2, e = ok.transition;
    try {
      ok.transition = null, C2 = 1, Wk(a2, b2, c2, d2);
    } finally {
      ok.transition = e, C2 = d2;
    }
    return null;
  }
  function Wk(a2, b2, c2, d2) {
    do
      Hk();
    while (null !== wk);
    if (0 !== (K2 & 6)) throw Error(p2(327));
    c2 = a2.finishedWork;
    var e = a2.finishedLanes;
    if (null === c2) return null;
    a2.finishedWork = null;
    a2.finishedLanes = 0;
    if (c2 === a2.current) throw Error(p2(177));
    a2.callbackNode = null;
    a2.callbackPriority = 0;
    var f2 = c2.lanes | c2.childLanes;
    Bc(a2, f2);
    a2 === Q2 && (Y2 = Q2 = null, Z2 = 0);
    0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || vk || (vk = true, Fk(hc, function() {
      Hk();
      return null;
    }));
    f2 = 0 !== (c2.flags & 15990);
    if (0 !== (c2.subtreeFlags & 15990) || f2) {
      f2 = ok.transition;
      ok.transition = null;
      var g2 = C2;
      C2 = 1;
      var h2 = K2;
      K2 |= 4;
      nk.current = null;
      Oj(a2, c2);
      dk(c2, a2);
      Oe2(Df);
      dd = !!Cf;
      Df = Cf = null;
      a2.current = c2;
      hk(c2);
      dc();
      K2 = h2;
      C2 = g2;
      ok.transition = f2;
    } else a2.current = c2;
    vk && (vk = false, wk = a2, xk = e);
    f2 = a2.pendingLanes;
    0 === f2 && (Ri = null);
    mc(c2.stateNode);
    Dk(a2, B2());
    if (null !== b2) for (d2 = a2.onRecoverableError, c2 = 0; c2 < b2.length; c2++) e = b2[c2], d2(e.value, { componentStack: e.stack, digest: e.digest });
    if (Oi) throw Oi = false, a2 = Pi, Pi = null, a2;
    0 !== (xk & 1) && 0 !== a2.tag && Hk();
    f2 = a2.pendingLanes;
    0 !== (f2 & 1) ? a2 === zk ? yk++ : (yk = 0, zk = a2) : yk = 0;
    jg();
    return null;
  }
  function Hk() {
    if (null !== wk) {
      var a2 = Dc(xk), b2 = ok.transition, c2 = C2;
      try {
        ok.transition = null;
        C2 = 16 > a2 ? 16 : a2;
        if (null === wk) var d2 = false;
        else {
          a2 = wk;
          wk = null;
          xk = 0;
          if (0 !== (K2 & 6)) throw Error(p2(331));
          var e = K2;
          K2 |= 4;
          for (V2 = a2.current; null !== V2; ) {
            var f2 = V2, g2 = f2.child;
            if (0 !== (V2.flags & 16)) {
              var h2 = f2.deletions;
              if (null !== h2) {
                for (var k2 = 0; k2 < h2.length; k2++) {
                  var l2 = h2[k2];
                  for (V2 = l2; null !== V2; ) {
                    var m2 = V2;
                    switch (m2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pj(8, m2, f2);
                    }
                    var q2 = m2.child;
                    if (null !== q2) q2.return = m2, V2 = q2;
                    else for (; null !== V2; ) {
                      m2 = V2;
                      var r2 = m2.sibling, y2 = m2.return;
                      Sj(m2);
                      if (m2 === l2) {
                        V2 = null;
                        break;
                      }
                      if (null !== r2) {
                        r2.return = y2;
                        V2 = r2;
                        break;
                      }
                      V2 = y2;
                    }
                  }
                }
                var n2 = f2.alternate;
                if (null !== n2) {
                  var t2 = n2.child;
                  if (null !== t2) {
                    n2.child = null;
                    do {
                      var J2 = t2.sibling;
                      t2.sibling = null;
                      t2 = J2;
                    } while (null !== t2);
                  }
                }
                V2 = f2;
              }
            }
            if (0 !== (f2.subtreeFlags & 2064) && null !== g2) g2.return = f2, V2 = g2;
            else b: for (; null !== V2; ) {
              f2 = V2;
              if (0 !== (f2.flags & 2048)) switch (f2.tag) {
                case 0:
                case 11:
                case 15:
                  Pj(9, f2, f2.return);
              }
              var x2 = f2.sibling;
              if (null !== x2) {
                x2.return = f2.return;
                V2 = x2;
                break b;
              }
              V2 = f2.return;
            }
          }
          var w2 = a2.current;
          for (V2 = w2; null !== V2; ) {
            g2 = V2;
            var u2 = g2.child;
            if (0 !== (g2.subtreeFlags & 2064) && null !== u2) u2.return = g2, V2 = u2;
            else b: for (g2 = w2; null !== V2; ) {
              h2 = V2;
              if (0 !== (h2.flags & 2048)) try {
                switch (h2.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qj(9, h2);
                }
              } catch (na) {
                W2(h2, h2.return, na);
              }
              if (h2 === g2) {
                V2 = null;
                break b;
              }
              var F2 = h2.sibling;
              if (null !== F2) {
                F2.return = h2.return;
                V2 = F2;
                break b;
              }
              V2 = h2.return;
            }
          }
          K2 = e;
          jg();
          if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
            lc.onPostCommitFiberRoot(kc, a2);
          } catch (na) {
          }
          d2 = true;
        }
        return d2;
      } finally {
        C2 = c2, ok.transition = b2;
      }
    }
    return false;
  }
  function Xk(a2, b2, c2) {
    b2 = Ji(c2, b2);
    b2 = Ni(a2, b2, 1);
    a2 = nh(a2, b2, 1);
    b2 = R2();
    null !== a2 && (Ac(a2, 1, b2), Dk(a2, b2));
  }
  function W2(a2, b2, c2) {
    if (3 === a2.tag) Xk(a2, a2, c2);
    else for (; null !== b2; ) {
      if (3 === b2.tag) {
        Xk(b2, a2, c2);
        break;
      } else if (1 === b2.tag) {
        var d2 = b2.stateNode;
        if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Ri || !Ri.has(d2))) {
          a2 = Ji(c2, a2);
          a2 = Qi(b2, a2, 1);
          b2 = nh(b2, a2, 1);
          a2 = R2();
          null !== b2 && (Ac(b2, 1, a2), Dk(b2, a2));
          break;
        }
      }
      b2 = b2.return;
    }
  }
  function Ti(a2, b2, c2) {
    var d2 = a2.pingCache;
    null !== d2 && d2.delete(b2);
    b2 = R2();
    a2.pingedLanes |= a2.suspendedLanes & c2;
    Q2 === a2 && (Z2 & c2) === c2 && (4 === T2 || 3 === T2 && (Z2 & 130023424) === Z2 && 500 > B2() - fk ? Kk(a2, 0) : rk |= c2);
    Dk(a2, b2);
  }
  function Yk(a2, b2) {
    0 === b2 && (0 === (a2.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
    var c2 = R2();
    a2 = ih(a2, b2);
    null !== a2 && (Ac(a2, b2, c2), Dk(a2, c2));
  }
  function uj(a2) {
    var b2 = a2.memoizedState, c2 = 0;
    null !== b2 && (c2 = b2.retryLane);
    Yk(a2, c2);
  }
  function bk(a2, b2) {
    var c2 = 0;
    switch (a2.tag) {
      case 13:
        var d2 = a2.stateNode;
        var e = a2.memoizedState;
        null !== e && (c2 = e.retryLane);
        break;
      case 19:
        d2 = a2.stateNode;
        break;
      default:
        throw Error(p2(314));
    }
    null !== d2 && d2.delete(b2);
    Yk(a2, c2);
  }
  var Vk;
  Vk = function(a2, b2, c2) {
    if (null !== a2) if (a2.memoizedProps !== b2.pendingProps || Wf.current) dh = true;
    else {
      if (0 === (a2.lanes & c2) && 0 === (b2.flags & 128)) return dh = false, yj(a2, b2, c2);
      dh = 0 !== (a2.flags & 131072) ? true : false;
    }
    else dh = false, I2 && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
    b2.lanes = 0;
    switch (b2.tag) {
      case 2:
        var d2 = b2.type;
        ij(a2, b2);
        a2 = b2.pendingProps;
        var e = Yf(b2, H2.current);
        ch(b2, c2);
        e = Nh(null, b2, d2, a2, e, c2);
        var f2 = Sh();
        b2.flags |= 1;
        "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d2) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b2), e.updater = Ei, b2.stateNode = e, e._reactInternals = b2, Ii(b2, d2, a2, c2), b2 = jj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I2 && f2 && vg(b2), Xi(null, b2, e, c2), b2 = b2.child);
        return b2;
      case 16:
        d2 = b2.elementType;
        a: {
          ij(a2, b2);
          a2 = b2.pendingProps;
          e = d2._init;
          d2 = e(d2._payload);
          b2.type = d2;
          e = b2.tag = Zk(d2);
          a2 = Ci(d2, a2);
          switch (e) {
            case 0:
              b2 = cj(null, b2, d2, a2, c2);
              break a;
            case 1:
              b2 = hj(null, b2, d2, a2, c2);
              break a;
            case 11:
              b2 = Yi(null, b2, d2, a2, c2);
              break a;
            case 14:
              b2 = $i(null, b2, d2, Ci(d2.type, a2), c2);
              break a;
          }
          throw Error(p2(
            306,
            d2,
            ""
          ));
        }
        return b2;
      case 0:
        return d2 = b2.type, e = b2.pendingProps, e = b2.elementType === d2 ? e : Ci(d2, e), cj(a2, b2, d2, e, c2);
      case 1:
        return d2 = b2.type, e = b2.pendingProps, e = b2.elementType === d2 ? e : Ci(d2, e), hj(a2, b2, d2, e, c2);
      case 3:
        a: {
          kj(b2);
          if (null === a2) throw Error(p2(387));
          d2 = b2.pendingProps;
          f2 = b2.memoizedState;
          e = f2.element;
          lh(a2, b2);
          qh(b2, d2, null, c2);
          var g2 = b2.memoizedState;
          d2 = g2.element;
          if (f2.isDehydrated) if (f2 = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
            e = Ji(Error(p2(423)), b2);
            b2 = lj(a2, b2, d2, c2, e);
            break a;
          } else if (d2 !== e) {
            e = Ji(Error(p2(424)), b2);
            b2 = lj(a2, b2, d2, c2, e);
            break a;
          } else for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I2 = true, zg = null, c2 = Vg(b2, null, d2, c2), b2.child = c2; c2; ) c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
          else {
            Ig();
            if (d2 === e) {
              b2 = Zi(a2, b2, c2);
              break a;
            }
            Xi(a2, b2, d2, c2);
          }
          b2 = b2.child;
        }
        return b2;
      case 5:
        return Ah(b2), null === a2 && Eg(b2), d2 = b2.type, e = b2.pendingProps, f2 = null !== a2 ? a2.memoizedProps : null, g2 = e.children, Ef(d2, e) ? g2 = null : null !== f2 && Ef(d2, f2) && (b2.flags |= 32), gj(a2, b2), Xi(a2, b2, g2, c2), b2.child;
      case 6:
        return null === a2 && Eg(b2), null;
      case 13:
        return oj(a2, b2, c2);
      case 4:
        return yh(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a2 ? b2.child = Ug(b2, null, d2, c2) : Xi(a2, b2, d2, c2), b2.child;
      case 11:
        return d2 = b2.type, e = b2.pendingProps, e = b2.elementType === d2 ? e : Ci(d2, e), Yi(a2, b2, d2, e, c2);
      case 7:
        return Xi(a2, b2, b2.pendingProps, c2), b2.child;
      case 8:
        return Xi(a2, b2, b2.pendingProps.children, c2), b2.child;
      case 12:
        return Xi(a2, b2, b2.pendingProps.children, c2), b2.child;
      case 10:
        a: {
          d2 = b2.type._context;
          e = b2.pendingProps;
          f2 = b2.memoizedProps;
          g2 = e.value;
          G2(Wg, d2._currentValue);
          d2._currentValue = g2;
          if (null !== f2) if (He2(f2.value, g2)) {
            if (f2.children === e.children && !Wf.current) {
              b2 = Zi(a2, b2, c2);
              break a;
            }
          } else for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
            var h2 = f2.dependencies;
            if (null !== h2) {
              g2 = f2.child;
              for (var k2 = h2.firstContext; null !== k2; ) {
                if (k2.context === d2) {
                  if (1 === f2.tag) {
                    k2 = mh(-1, c2 & -c2);
                    k2.tag = 2;
                    var l2 = f2.updateQueue;
                    if (null !== l2) {
                      l2 = l2.shared;
                      var m2 = l2.pending;
                      null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                      l2.pending = k2;
                    }
                  }
                  f2.lanes |= c2;
                  k2 = f2.alternate;
                  null !== k2 && (k2.lanes |= c2);
                  bh(
                    f2.return,
                    c2,
                    b2
                  );
                  h2.lanes |= c2;
                  break;
                }
                k2 = k2.next;
              }
            } else if (10 === f2.tag) g2 = f2.type === b2.type ? null : f2.child;
            else if (18 === f2.tag) {
              g2 = f2.return;
              if (null === g2) throw Error(p2(341));
              g2.lanes |= c2;
              h2 = g2.alternate;
              null !== h2 && (h2.lanes |= c2);
              bh(g2, c2, b2);
              g2 = f2.sibling;
            } else g2 = f2.child;
            if (null !== g2) g2.return = f2;
            else for (g2 = f2; null !== g2; ) {
              if (g2 === b2) {
                g2 = null;
                break;
              }
              f2 = g2.sibling;
              if (null !== f2) {
                f2.return = g2.return;
                g2 = f2;
                break;
              }
              g2 = g2.return;
            }
            f2 = g2;
          }
          Xi(a2, b2, e.children, c2);
          b2 = b2.child;
        }
        return b2;
      case 9:
        return e = b2.type, d2 = b2.pendingProps.children, ch(b2, c2), e = eh(e), d2 = d2(e), b2.flags |= 1, Xi(a2, b2, d2, c2), b2.child;
      case 14:
        return d2 = b2.type, e = Ci(d2, b2.pendingProps), e = Ci(d2.type, e), $i(a2, b2, d2, e, c2);
      case 15:
        return bj(a2, b2, b2.type, b2.pendingProps, c2);
      case 17:
        return d2 = b2.type, e = b2.pendingProps, e = b2.elementType === d2 ? e : Ci(d2, e), ij(a2, b2), b2.tag = 1, Zf(d2) ? (a2 = true, cg(b2)) : a2 = false, ch(b2, c2), Gi(b2, d2, e), Ii(b2, d2, e, c2), jj(null, b2, d2, true, a2, c2);
      case 19:
        return xj(a2, b2, c2);
      case 22:
        return dj(a2, b2, c2);
    }
    throw Error(p2(156, b2.tag));
  };
  function Fk(a2, b2) {
    return ac(a2, b2);
  }
  function $k(a2, b2, c2, d2) {
    this.tag = a2;
    this.key = c2;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b2;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d2;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function Bg(a2, b2, c2, d2) {
    return new $k(a2, b2, c2, d2);
  }
  function aj(a2) {
    a2 = a2.prototype;
    return !(!a2 || !a2.isReactComponent);
  }
  function Zk(a2) {
    if ("function" === typeof a2) return aj(a2) ? 1 : 0;
    if (void 0 !== a2 && null !== a2) {
      a2 = a2.$$typeof;
      if (a2 === Da) return 11;
      if (a2 === Ga) return 14;
    }
    return 2;
  }
  function Pg(a2, b2) {
    var c2 = a2.alternate;
    null === c2 ? (c2 = Bg(a2.tag, b2, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b2, c2.type = a2.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
    c2.flags = a2.flags & 14680064;
    c2.childLanes = a2.childLanes;
    c2.lanes = a2.lanes;
    c2.child = a2.child;
    c2.memoizedProps = a2.memoizedProps;
    c2.memoizedState = a2.memoizedState;
    c2.updateQueue = a2.updateQueue;
    b2 = a2.dependencies;
    c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
    c2.sibling = a2.sibling;
    c2.index = a2.index;
    c2.ref = a2.ref;
    return c2;
  }
  function Rg(a2, b2, c2, d2, e, f2) {
    var g2 = 2;
    d2 = a2;
    if ("function" === typeof a2) aj(a2) && (g2 = 1);
    else if ("string" === typeof a2) g2 = 5;
    else a: switch (a2) {
      case ya:
        return Tg(c2.children, e, f2, b2);
      case za:
        g2 = 8;
        e |= 8;
        break;
      case Aa:
        return a2 = Bg(12, c2, b2, e | 2), a2.elementType = Aa, a2.lanes = f2, a2;
      case Ea:
        return a2 = Bg(13, c2, b2, e), a2.elementType = Ea, a2.lanes = f2, a2;
      case Fa:
        return a2 = Bg(19, c2, b2, e), a2.elementType = Fa, a2.lanes = f2, a2;
      case Ia:
        return pj(c2, e, f2, b2);
      default:
        if ("object" === typeof a2 && null !== a2) switch (a2.$$typeof) {
          case Ba:
            g2 = 10;
            break a;
          case Ca:
            g2 = 9;
            break a;
          case Da:
            g2 = 11;
            break a;
          case Ga:
            g2 = 14;
            break a;
          case Ha:
            g2 = 16;
            d2 = null;
            break a;
        }
        throw Error(p2(130, null == a2 ? a2 : typeof a2, ""));
    }
    b2 = Bg(g2, c2, b2, e);
    b2.elementType = a2;
    b2.type = d2;
    b2.lanes = f2;
    return b2;
  }
  function Tg(a2, b2, c2, d2) {
    a2 = Bg(7, a2, d2, b2);
    a2.lanes = c2;
    return a2;
  }
  function pj(a2, b2, c2, d2) {
    a2 = Bg(22, a2, d2, b2);
    a2.elementType = Ia;
    a2.lanes = c2;
    a2.stateNode = { isHidden: false };
    return a2;
  }
  function Qg(a2, b2, c2) {
    a2 = Bg(6, a2, null, b2);
    a2.lanes = c2;
    return a2;
  }
  function Sg(a2, b2, c2) {
    b2 = Bg(4, null !== a2.children ? a2.children : [], a2.key, b2);
    b2.lanes = c2;
    b2.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
    return b2;
  }
  function al(a2, b2, c2, d2, e) {
    this.tag = b2;
    this.containerInfo = a2;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = zc(0);
    this.expirationTimes = zc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = zc(0);
    this.identifierPrefix = d2;
    this.onRecoverableError = e;
    this.mutableSourceEagerHydrationData = null;
  }
  function bl(a2, b2, c2, d2, e, f2, g2, h2, k2) {
    a2 = new al(a2, b2, c2, h2, k2);
    1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
    f2 = Bg(3, null, null, b2);
    a2.current = f2;
    f2.stateNode = a2;
    f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
    kh(f2);
    return a2;
  }
  function cl(a2, b2, c2) {
    var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return { $$typeof: wa, key: null == d2 ? null : "" + d2, children: a2, containerInfo: b2, implementation: c2 };
  }
  function dl(a2) {
    if (!a2) return Vf;
    a2 = a2._reactInternals;
    a: {
      if (Vb(a2) !== a2 || 1 !== a2.tag) throw Error(p2(170));
      var b2 = a2;
      do {
        switch (b2.tag) {
          case 3:
            b2 = b2.stateNode.context;
            break a;
          case 1:
            if (Zf(b2.type)) {
              b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
              break a;
            }
        }
        b2 = b2.return;
      } while (null !== b2);
      throw Error(p2(171));
    }
    if (1 === a2.tag) {
      var c2 = a2.type;
      if (Zf(c2)) return bg(a2, c2, b2);
    }
    return b2;
  }
  function el(a2, b2, c2, d2, e, f2, g2, h2, k2) {
    a2 = bl(c2, d2, true, a2, e, f2, g2, h2, k2);
    a2.context = dl(null);
    c2 = a2.current;
    d2 = R2();
    e = yi(c2);
    f2 = mh(d2, e);
    f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
    nh(c2, f2, e);
    a2.current.lanes = e;
    Ac(a2, e, d2);
    Dk(a2, d2);
    return a2;
  }
  function fl(a2, b2, c2, d2) {
    var e = b2.current, f2 = R2(), g2 = yi(e);
    c2 = dl(c2);
    null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
    b2 = mh(f2, g2);
    b2.payload = { element: a2 };
    d2 = void 0 === d2 ? null : d2;
    null !== d2 && (b2.callback = d2);
    a2 = nh(e, b2, g2);
    null !== a2 && (gi(a2, e, g2, f2), oh(a2, e, g2));
    return g2;
  }
  function gl(a2) {
    a2 = a2.current;
    if (!a2.child) return null;
    switch (a2.child.tag) {
      case 5:
        return a2.child.stateNode;
      default:
        return a2.child.stateNode;
    }
  }
  function hl(a2, b2) {
    a2 = a2.memoizedState;
    if (null !== a2 && null !== a2.dehydrated) {
      var c2 = a2.retryLane;
      a2.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
    }
  }
  function il(a2, b2) {
    hl(a2, b2);
    (a2 = a2.alternate) && hl(a2, b2);
  }
  function jl() {
    return null;
  }
  var kl = "function" === typeof reportError ? reportError : function(a2) {
    console.error(a2);
  };
  function ll(a2) {
    this._internalRoot = a2;
  }
  ml.prototype.render = ll.prototype.render = function(a2) {
    var b2 = this._internalRoot;
    if (null === b2) throw Error(p2(409));
    fl(a2, b2, null, null);
  };
  ml.prototype.unmount = ll.prototype.unmount = function() {
    var a2 = this._internalRoot;
    if (null !== a2) {
      this._internalRoot = null;
      var b2 = a2.containerInfo;
      Rk(function() {
        fl(null, a2, null, null);
      });
      b2[uf] = null;
    }
  };
  function ml(a2) {
    this._internalRoot = a2;
  }
  ml.prototype.unstable_scheduleHydration = function(a2) {
    if (a2) {
      var b2 = Hc();
      a2 = { blockedOn: null, target: a2, priority: b2 };
      for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++) ;
      Qc.splice(c2, 0, a2);
      0 === c2 && Vc(a2);
    }
  };
  function nl(a2) {
    return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType);
  }
  function ol(a2) {
    return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType && (8 !== a2.nodeType || " react-mount-point-unstable " !== a2.nodeValue));
  }
  function pl() {
  }
  function ql(a2, b2, c2, d2, e) {
    if (e) {
      if ("function" === typeof d2) {
        var f2 = d2;
        d2 = function() {
          var a3 = gl(g2);
          f2.call(a3);
        };
      }
      var g2 = el(b2, d2, a2, 0, null, false, false, "", pl);
      a2._reactRootContainer = g2;
      a2[uf] = g2.current;
      sf(8 === a2.nodeType ? a2.parentNode : a2);
      Rk();
      return g2;
    }
    for (; e = a2.lastChild; ) a2.removeChild(e);
    if ("function" === typeof d2) {
      var h2 = d2;
      d2 = function() {
        var a3 = gl(k2);
        h2.call(a3);
      };
    }
    var k2 = bl(a2, 0, false, null, null, false, false, "", pl);
    a2._reactRootContainer = k2;
    a2[uf] = k2.current;
    sf(8 === a2.nodeType ? a2.parentNode : a2);
    Rk(function() {
      fl(b2, k2, c2, d2);
    });
    return k2;
  }
  function rl(a2, b2, c2, d2, e) {
    var f2 = c2._reactRootContainer;
    if (f2) {
      var g2 = f2;
      if ("function" === typeof e) {
        var h2 = e;
        e = function() {
          var a3 = gl(g2);
          h2.call(a3);
        };
      }
      fl(b2, g2, a2, e);
    } else g2 = ql(c2, b2, a2, e, d2);
    return gl(g2);
  }
  Ec = function(a2) {
    switch (a2.tag) {
      case 3:
        var b2 = a2.stateNode;
        if (b2.current.memoizedState.isDehydrated) {
          var c2 = tc(b2.pendingLanes);
          0 !== c2 && (Cc(b2, c2 | 1), Dk(b2, B2()), 0 === (K2 & 6) && (Gj = B2() + 500, jg()));
        }
        break;
      case 13:
        Rk(function() {
          var b3 = ih(a2, 1);
          if (null !== b3) {
            var c3 = R2();
            gi(b3, a2, 1, c3);
          }
        }), il(a2, 1);
    }
  };
  Fc = function(a2) {
    if (13 === a2.tag) {
      var b2 = ih(a2, 134217728);
      if (null !== b2) {
        var c2 = R2();
        gi(b2, a2, 134217728, c2);
      }
      il(a2, 134217728);
    }
  };
  Gc = function(a2) {
    if (13 === a2.tag) {
      var b2 = yi(a2), c2 = ih(a2, b2);
      if (null !== c2) {
        var d2 = R2();
        gi(c2, a2, b2, d2);
      }
      il(a2, b2);
    }
  };
  Hc = function() {
    return C2;
  };
  Ic = function(a2, b2) {
    var c2 = C2;
    try {
      return C2 = a2, b2();
    } finally {
      C2 = c2;
    }
  };
  yb = function(a2, b2, c2) {
    switch (b2) {
      case "input":
        bb(a2, c2);
        b2 = c2.name;
        if ("radio" === c2.type && null != b2) {
          for (c2 = a2; c2.parentNode; ) c2 = c2.parentNode;
          c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
          for (b2 = 0; b2 < c2.length; b2++) {
            var d2 = c2[b2];
            if (d2 !== a2 && d2.form === a2.form) {
              var e = Db(d2);
              if (!e) throw Error(p2(90));
              Wa(d2);
              bb(d2, e);
            }
          }
        }
        break;
      case "textarea":
        ib(a2, c2);
        break;
      case "select":
        b2 = c2.value, null != b2 && fb(a2, !!c2.multiple, b2, false);
    }
  };
  Gb = Qk;
  Hb = Rk;
  var sl = { usingClientEntryPoint: false, Events: [Cb, ue2, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
  var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
    a2 = Zb(a2);
    return null === a2 ? null : a2.stateNode;
  }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!vl.isDisabled && vl.supportsFiber) try {
      kc = vl.inject(ul), lc = vl;
    } catch (a2) {
    }
  }
  reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
  reactDom_production_min.createPortal = function(a2, b2) {
    var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!nl(b2)) throw Error(p2(200));
    return cl(a2, b2, null, c2);
  };
  reactDom_production_min.createRoot = function(a2, b2) {
    if (!nl(a2)) throw Error(p2(299));
    var c2 = false, d2 = "", e = kl;
    null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d2 = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e = b2.onRecoverableError));
    b2 = bl(a2, 1, false, null, null, c2, false, d2, e);
    a2[uf] = b2.current;
    sf(8 === a2.nodeType ? a2.parentNode : a2);
    return new ll(b2);
  };
  reactDom_production_min.findDOMNode = function(a2) {
    if (null == a2) return null;
    if (1 === a2.nodeType) return a2;
    var b2 = a2._reactInternals;
    if (void 0 === b2) {
      if ("function" === typeof a2.render) throw Error(p2(188));
      a2 = Object.keys(a2).join(",");
      throw Error(p2(268, a2));
    }
    a2 = Zb(b2);
    a2 = null === a2 ? null : a2.stateNode;
    return a2;
  };
  reactDom_production_min.flushSync = function(a2) {
    return Rk(a2);
  };
  reactDom_production_min.hydrate = function(a2, b2, c2) {
    if (!ol(b2)) throw Error(p2(200));
    return rl(null, a2, b2, true, c2);
  };
  reactDom_production_min.hydrateRoot = function(a2, b2, c2) {
    if (!nl(a2)) throw Error(p2(405));
    var d2 = null != c2 && c2.hydratedSources || null, e = false, f2 = "", g2 = kl;
    null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
    b2 = el(b2, null, a2, 1, null != c2 ? c2 : null, e, false, f2, g2);
    a2[uf] = b2.current;
    sf(a2);
    if (d2) for (a2 = 0; a2 < d2.length; a2++) c2 = d2[a2], e = c2._getVersion, e = e(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e] : b2.mutableSourceEagerHydrationData.push(
      c2,
      e
    );
    return new ml(b2);
  };
  reactDom_production_min.render = function(a2, b2, c2) {
    if (!ol(b2)) throw Error(p2(200));
    return rl(null, a2, b2, false, c2);
  };
  reactDom_production_min.unmountComponentAtNode = function(a2) {
    if (!ol(a2)) throw Error(p2(40));
    return a2._reactRootContainer ? (Rk(function() {
      rl(null, null, a2, false, function() {
        a2._reactRootContainer = null;
        a2[uf] = null;
      });
    }), true) : false;
  };
  reactDom_production_min.unstable_batchedUpdates = Qk;
  reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a2, b2, c2, d2) {
    if (!ol(c2)) throw Error(p2(200));
    if (null == a2 || void 0 === a2._reactInternals) throw Error(p2(38));
    return rl(a2, b2, c2, false, d2);
  };
  reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
  return reactDom_production_min;
}
var hasRequiredReactDom;
function requireReactDom() {
  if (hasRequiredReactDom) return reactDom.exports;
  hasRequiredReactDom = 1;
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    reactDom.exports = requireReactDom_production_min();
  }
  return reactDom.exports;
}
var hasRequiredClient;
function requireClient() {
  if (hasRequiredClient) return client;
  hasRequiredClient = 1;
  var m2 = requireReactDom();
  {
    client.createRoot = m2.createRoot;
    client.hydrateRoot = m2.hydrateRoot;
  }
  return client;
}
var clientExports = requireClient();
function t() {
  return t = Object.assign ? Object.assign.bind() : function(e) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e[r2] = n2[r2]);
    }
    return e;
  }, t.apply(this, arguments);
}
const n = ["children", "options"], r$1 = { blockQuote: "0", breakLine: "1", breakThematic: "2", codeBlock: "3", codeFenced: "4", codeInline: "5", footnote: "6", footnoteReference: "7", gfmTask: "8", heading: "9", headingSetext: "10", htmlBlock: "11", htmlComment: "12", htmlSelfClosing: "13", image: "14", link: "15", linkAngleBraceStyleDetector: "16", linkBareUrlDetector: "17", linkMailtoDetector: "18", newlineCoalescer: "19", orderedList: "20", paragraph: "21", ref: "22", refImage: "23", refLink: "24", table: "25", text: "27", textBolded: "28", textEmphasized: "29", textEscaped: "30", textMarked: "31", textStrikethroughed: "32", unorderedList: "33" };
var i;
!function(e) {
  e[e.MAX = 0] = "MAX", e[e.HIGH = 1] = "HIGH", e[e.MED = 2] = "MED", e[e.LOW = 3] = "LOW", e[e.MIN = 4] = "MIN";
}(i || (i = {}));
const l = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e, t2) => (e[t2.toLowerCase()] = t2, e), { class: "className", for: "htmlFor" }), a = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" }, o = ["style", "script"], c = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, s = /mailto:/i, d = /\n{2,}$/, u = /^(\s*>[\s\S]*?)(?=\n\n|$)/, p = /^ *> ?/gm, f = /^(?:\[!([^\]]*)\]\n)?([\s\S]*)/, h = /^ {2,}\n/, m = /^(?:( *[-*_])){3,} *(?:\n *)+\n/, g = /^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/, y = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, k = /^(`+)((?:\\`|[^`])+)\1/, x = /^(?:\n *)*\n/, b = /\r\n?/g, v = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/, C = /^\[\^([^\]]+)]/, $ = /\f/g, S = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/, w = /^\s*?\[(x|\s)\]/, E = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, z = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, L = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/, A = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i, T = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, B = /^<!--[\s\S]*?(?:-->)/, O = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, M = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, R = /^\{.*\}$/, I = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, U = /^<([^ >]+@[^ >]+)>/, D = /^<([^ >]+:\/[^ >]+)>/, N = /-([a-z])?/gi, j = /^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/, H = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, P = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, _ = /^\[([^\]]*)\] ?\[([^\]]*)\]/, F = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, G = /\t/g, W = /(^ *\||\| *$)/g, Z = /^ *:-+: *$/, q = /^ *:-+ *$/, Q = /^ *-+: *$/, V = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|\\\\\\1|[\\s\\S])+?)", X = new RegExp(`^([*_])\\1${V}\\1\\1(?!\\1)`), J = new RegExp(`^([*_])${V}\\1(?!\\1)`), K = new RegExp(`^(==)${V}\\1`), Y = new RegExp(`^(~~)${V}\\1`), ee = /^\\([^0-9A-Za-z\s])/, te = /\\([^0-9A-Za-z\s])/g, ne = /^([\s\S](?:(?!  |[0-9]\.)[^*_~\-\n<`\\\[!])*)/, re = /^\n+/, ie = /^([ \t]*)/, le = /\\([^\\])/g, ae = /(?:^|\n)( *)$/, oe = "(?:\\d+\\.)", ce = "(?:[*+-])";
function se(e) {
  return "( *)(" + (1 === e ? oe : ce) + ") +";
}
const de = se(1), ue = se(2);
function pe(e) {
  return new RegExp("^" + (1 === e ? de : ue));
}
const fe = pe(1), he = pe(2);
function me(e) {
  return new RegExp("^" + (1 === e ? de : ue) + "[^\\n]*(?:\\n(?!\\1" + (1 === e ? oe : ce) + " )[^\\n]*)*(\\n|$)", "gm");
}
const ge = me(1), ye = me(2);
function ke(e) {
  const t2 = 1 === e ? oe : ce;
  return new RegExp("^( *)(" + t2 + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t2 + " (?!" + t2 + " ))\\n*|\\s*\\n*$)");
}
const xe = ke(1), be = ke(2);
function ve(e, t2) {
  const n2 = 1 === t2, i2 = n2 ? xe : be, l2 = n2 ? ge : ye, a2 = n2 ? fe : he;
  return { match: Oe(function(e2, t3) {
    const n3 = ae.exec(t3.prevCapture);
    return n3 && (t3.list || !t3.inline && !t3.simple) ? i2.exec(e2 = n3[1] + e2) : null;
  }), order: 1, parse(e2, t3, r2) {
    const i3 = n2 ? +e2[2] : void 0, o2 = e2[0].replace(d, "\n").match(l2);
    let c2 = false;
    return { items: o2.map(function(e3, n3) {
      const i4 = a2.exec(e3)[0].length, l3 = new RegExp("^ {1," + i4 + "}", "gm"), s2 = e3.replace(l3, "").replace(a2, ""), d2 = n3 === o2.length - 1, u2 = -1 !== s2.indexOf("\n\n") || d2 && c2;
      c2 = u2;
      const p2 = r2.inline, f2 = r2.list;
      let h2;
      r2.list = true, u2 ? (r2.inline = false, h2 = Ee(s2) + "\n\n") : (r2.inline = true, h2 = Ee(s2));
      const m2 = t3(h2, r2);
      return r2.inline = p2, r2.list = f2, m2;
    }), ordered: n2, start: i3 };
  }, render: (t3, n3, i3) => e(t3.ordered ? "ol" : "ul", { key: i3.key, start: t3.type === r$1.orderedList ? t3.start : void 0 }, t3.items.map(function(t4, r2) {
    return e("li", { key: r2 }, n3(t4, i3));
  })) };
}
const Ce = new RegExp(`^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`), $e = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, Se = [u, g, y, E, L, z, j, xe, be], we = [...Se, /^[^\n]+(?:  \n|\n{2,})/, A, B, M];
function Ee(e) {
  let t2 = e.length;
  for (; t2 > 0 && e[t2 - 1] <= " "; ) t2--;
  return e.slice(0, t2);
}
function ze(e) {
  return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function Le(e) {
  return Q.test(e) ? "right" : Z.test(e) ? "center" : q.test(e) ? "left" : null;
}
function Ae(e, t2, n2, r2) {
  const i2 = n2.inTable;
  n2.inTable = true;
  let l2 = [[]], a2 = "";
  function o2() {
    if (!a2) return;
    const e2 = l2[l2.length - 1];
    e2.push.apply(e2, t2(a2, n2)), a2 = "";
  }
  return e.trim().split(/(`[^`]*`|\\\||\|)/).filter(Boolean).forEach((e2, t3, n3) => {
    "|" === e2.trim() && (o2(), r2) ? 0 !== t3 && t3 !== n3.length - 1 && l2.push([]) : a2 += e2;
  }), o2(), n2.inTable = i2, l2;
}
function Te(e, t2, n2) {
  n2.inline = true;
  const i2 = e[2] ? e[2].replace(W, "").split("|").map(Le) : [], l2 = e[3] ? function(e2, t3, n3) {
    return e2.trim().split("\n").map(function(e3) {
      return Ae(e3, t3, n3, true);
    });
  }(e[3], t2, n2) : [], a2 = Ae(e[1], t2, n2, !!l2.length);
  return n2.inline = false, l2.length ? { align: i2, cells: l2, header: a2, type: r$1.table } : { children: a2, type: r$1.paragraph };
}
function Be(e, t2) {
  return null == e.align[t2] ? {} : { textAlign: e.align[t2] };
}
function Oe(e) {
  return e.inline = 1, e;
}
function Me(e) {
  return Oe(function(t2, n2) {
    return n2.inline ? e.exec(t2) : null;
  });
}
function Re(e) {
  return Oe(function(t2, n2) {
    return n2.inline || n2.simple ? e.exec(t2) : null;
  });
}
function Ie(e) {
  return function(t2, n2) {
    return n2.inline || n2.simple ? null : e.exec(t2);
  };
}
function Ue(e) {
  return Oe(function(t2) {
    return e.exec(t2);
  });
}
function De(e, t2) {
  if (t2.inline || t2.simple) return null;
  let n2 = "";
  e.split("\n").every((e2) => (e2 += "\n", !Se.some((t3) => t3.test(e2)) && (n2 += e2, !!e2.trim())));
  const r2 = Ee(n2);
  return "" == r2 ? null : [n2, , r2];
}
function Ne(e) {
  try {
    if (decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i)) return null;
  } catch (e2) {
    return null;
  }
  return e;
}
function je(e) {
  return e.replace(le, "$1");
}
function He(e, t2, n2) {
  const r2 = n2.inline || false, i2 = n2.simple || false;
  n2.inline = true, n2.simple = true;
  const l2 = e(t2, n2);
  return n2.inline = r2, n2.simple = i2, l2;
}
function Pe(e, t2, n2) {
  const r2 = n2.inline || false, i2 = n2.simple || false;
  n2.inline = false, n2.simple = true;
  const l2 = e(t2, n2);
  return n2.inline = r2, n2.simple = i2, l2;
}
function _e(e, t2, n2) {
  const r2 = n2.inline || false;
  n2.inline = false;
  const i2 = e(t2, n2);
  return n2.inline = r2, i2;
}
const Fe = (e, t2, n2) => ({ children: He(t2, e[2], n2) });
function Ge() {
  return {};
}
function We() {
  return null;
}
function Ze(...e) {
  return e.filter(Boolean).join(" ");
}
function qe(e, t2, n2) {
  let r2 = e;
  const i2 = t2.split(".");
  for (; i2.length && (r2 = r2[i2[0]], void 0 !== r2); ) i2.shift();
  return r2 || n2;
}
function Qe(n2 = "", i2 = {}) {
  function d2(e, n3, ...r2) {
    const l2 = qe(i2.overrides, `${e}.props`, {});
    return i2.createElement(function(e2, t2) {
      const n4 = qe(t2, e2);
      return n4 ? "function" == typeof n4 || "object" == typeof n4 && "render" in n4 ? n4 : qe(t2, `${e2}.component`, e2) : e2;
    }(e, i2.overrides), t({}, n3, l2, { className: Ze(null == n3 ? void 0 : n3.className, l2.className) || void 0 }), ...r2);
  }
  function W2(e) {
    e = e.replace(S, "");
    let t2 = false;
    i2.forceInline ? t2 = true : i2.forceBlock || (t2 = false === F.test(e));
    const n3 = ae2(le2(t2 ? e : `${Ee(e).replace(re, "")}

`, { inline: t2 }));
    for (; "string" == typeof n3[n3.length - 1] && !n3[n3.length - 1].trim(); ) n3.pop();
    if (null === i2.wrapper) return n3;
    const r2 = i2.wrapper || (t2 ? "span" : "div");
    let l2;
    if (n3.length > 1 || i2.forceWrapper) l2 = n3;
    else {
      if (1 === n3.length) return l2 = n3[0], "string" == typeof l2 ? d2("span", { key: "outer" }, l2) : l2;
      l2 = null;
    }
    return i2.createElement(r2, { key: "outer" }, l2);
  }
  function Z2(e, t2) {
    const n3 = t2.match(c);
    return n3 ? n3.reduce(function(t3, n4) {
      const r2 = n4.indexOf("=");
      if (-1 !== r2) {
        const a2 = function(e2) {
          return -1 !== e2.indexOf("-") && null === e2.match(O) && (e2 = e2.replace(N, function(e3, t4) {
            return t4.toUpperCase();
          })), e2;
        }(n4.slice(0, r2)).trim(), o2 = function(e2) {
          const t4 = e2[0];
          return ('"' === t4 || "'" === t4) && e2.length >= 2 && e2[e2.length - 1] === t4 ? e2.slice(1, -1) : e2;
        }(n4.slice(r2 + 1).trim()), c2 = l[a2] || a2;
        if ("ref" === c2) return t3;
        const s2 = t3[c2] = function(e2, t4, n5, r3) {
          return "style" === t4 ? n5.split(/;\s?/).reduce(function(e3, t5) {
            const n6 = t5.slice(0, t5.indexOf(":"));
            return e3[n6.trim().replace(/(-[a-z])/g, (e4) => e4[1].toUpperCase())] = t5.slice(n6.length + 1).trim(), e3;
          }, {}) : "href" === t4 || "src" === t4 ? r3(n5, e2, t4) : (n5.match(R) && (n5 = n5.slice(1, n5.length - 1)), "true" === n5 || "false" !== n5 && n5);
        }(e, a2, o2, i2.sanitizer);
        "string" == typeof s2 && (A.test(s2) || M.test(s2)) && (t3[c2] = W2(s2.trim()));
      } else "style" !== n4 && (t3[l[n4] || n4] = true);
      return t3;
    }, {}) : null;
  }
  i2.overrides = i2.overrides || {}, i2.sanitizer = i2.sanitizer || Ne, i2.slugify = i2.slugify || ze, i2.namedCodesToUnicode = i2.namedCodesToUnicode ? t({}, a, i2.namedCodesToUnicode) : a, i2.createElement = i2.createElement || reactExports.createElement;
  const q2 = [], Q2 = {}, V2 = { [r$1.blockQuote]: { match: Ie(u), order: 1, parse(e, t2, n3) {
    const [, r2, i3] = e[0].replace(p, "").match(f);
    return { alert: r2, children: t2(i3, n3) };
  }, render(e, t2, n3) {
    const l2 = { key: n3.key };
    return e.alert && (l2.className = "markdown-alert-" + i2.slugify(e.alert.toLowerCase(), ze), e.children.unshift({ attrs: {}, children: [{ type: r$1.text, text: e.alert }], noInnerParse: true, type: r$1.htmlBlock, tag: "header" })), d2("blockquote", l2, t2(e.children, n3));
  } }, [r$1.breakLine]: { match: Ue(h), order: 1, parse: Ge, render: (e, t2, n3) => d2("br", { key: n3.key }) }, [r$1.breakThematic]: { match: Ie(m), order: 1, parse: Ge, render: (e, t2, n3) => d2("hr", { key: n3.key }) }, [r$1.codeBlock]: { match: Ie(y), order: 0, parse: (e) => ({ lang: void 0, text: Ee(e[0].replace(/^ {4}/gm, "")).replace(te, "$1") }), render: (e, n3, r2) => d2("pre", { key: r2.key }, d2("code", t({}, e.attrs, { className: e.lang ? `lang-${e.lang}` : "" }), e.text)) }, [r$1.codeFenced]: { match: Ie(g), order: 0, parse: (e) => ({ attrs: Z2("code", e[3] || ""), lang: e[2] || void 0, text: e[4].replace(te, "$1"), type: r$1.codeBlock }) }, [r$1.codeInline]: { match: Re(k), order: 3, parse: (e) => ({ text: e[2].replace(te, "$1") }), render: (e, t2, n3) => d2("code", { key: n3.key }, e.text) }, [r$1.footnote]: { match: Ie(v), order: 0, parse: (e) => (q2.push({ footnote: e[2], identifier: e[1] }), {}), render: We }, [r$1.footnoteReference]: { match: Me(C), order: 1, parse: (e) => ({ target: `#${i2.slugify(e[1], ze)}`, text: e[1] }), render: (e, t2, n3) => d2("a", { key: n3.key, href: i2.sanitizer(e.target, "a", "href") }, d2("sup", { key: n3.key }, e.text)) }, [r$1.gfmTask]: { match: Me(w), order: 1, parse: (e) => ({ completed: "x" === e[1].toLowerCase() }), render: (e, t2, n3) => d2("input", { checked: e.completed, key: n3.key, readOnly: true, type: "checkbox" }) }, [r$1.heading]: { match: Ie(i2.enforceAtxHeadings ? z : E), order: 1, parse: (e, t2, n3) => ({ children: He(t2, e[2], n3), id: i2.slugify(e[2], ze), level: e[1].length }), render: (e, t2, n3) => d2(`h${e.level}`, { id: e.id, key: n3.key }, t2(e.children, n3)) }, [r$1.headingSetext]: { match: Ie(L), order: 0, parse: (e, t2, n3) => ({ children: He(t2, e[1], n3), level: "=" === e[2] ? 1 : 2, type: r$1.heading }) }, [r$1.htmlBlock]: { match: Ue(A), order: 1, parse(e, t2, n3) {
    const [, r2] = e[3].match(ie), i3 = new RegExp(`^${r2}`, "gm"), l2 = e[3].replace(i3, ""), a2 = (c2 = l2, we.some((e2) => e2.test(c2)) ? _e : He);
    var c2;
    const s2 = e[1].toLowerCase(), d3 = -1 !== o.indexOf(s2), u2 = (d3 ? s2 : e[1]).trim(), p2 = { attrs: Z2(u2, e[2]), noInnerParse: d3, tag: u2 };
    return n3.inAnchor = n3.inAnchor || "a" === s2, d3 ? p2.text = e[3] : p2.children = a2(t2, l2, n3), n3.inAnchor = false, p2;
  }, render: (e, n3, r2) => d2(e.tag, t({ key: r2.key }, e.attrs), e.text || (e.children ? n3(e.children, r2) : "")) }, [r$1.htmlSelfClosing]: { match: Ue(M), order: 1, parse(e) {
    const t2 = e[1].trim();
    return { attrs: Z2(t2, e[2] || ""), tag: t2 };
  }, render: (e, n3, r2) => d2(e.tag, t({}, e.attrs, { key: r2.key })) }, [r$1.htmlComment]: { match: Ue(B), order: 1, parse: () => ({}), render: We }, [r$1.image]: { match: Re($e), order: 1, parse: (e) => ({ alt: e[1], target: je(e[2]), title: e[3] }), render: (e, t2, n3) => d2("img", { key: n3.key, alt: e.alt || void 0, title: e.title || void 0, src: i2.sanitizer(e.target, "img", "src") }) }, [r$1.link]: { match: Me(Ce), order: 3, parse: (e, t2, n3) => ({ children: Pe(t2, e[1], n3), target: je(e[2]), title: e[3] }), render: (e, t2, n3) => d2("a", { key: n3.key, href: i2.sanitizer(e.target, "a", "href"), title: e.title }, t2(e.children, n3)) }, [r$1.linkAngleBraceStyleDetector]: { match: Me(D), order: 0, parse: (e) => ({ children: [{ text: e[1], type: r$1.text }], target: e[1], type: r$1.link }) }, [r$1.linkBareUrlDetector]: { match: Oe((e, t2) => t2.inAnchor || i2.disableAutoLink ? null : Me(I)(e, t2)), order: 0, parse: (e) => ({ children: [{ text: e[1], type: r$1.text }], target: e[1], title: void 0, type: r$1.link }) }, [r$1.linkMailtoDetector]: { match: Me(U), order: 0, parse(e) {
    let t2 = e[1], n3 = e[1];
    return s.test(n3) || (n3 = "mailto:" + n3), { children: [{ text: t2.replace("mailto:", ""), type: r$1.text }], target: n3, type: r$1.link };
  } }, [r$1.orderedList]: ve(d2, 1), [r$1.unorderedList]: ve(d2, 2), [r$1.newlineCoalescer]: { match: Ie(x), order: 3, parse: Ge, render: () => "\n" }, [r$1.paragraph]: { match: Oe(De), order: 3, parse: Fe, render: (e, t2, n3) => d2("p", { key: n3.key }, t2(e.children, n3)) }, [r$1.ref]: { match: Me(H), order: 0, parse: (e) => (Q2[e[1]] = { target: e[2], title: e[4] }, {}), render: We }, [r$1.refImage]: { match: Re(P), order: 0, parse: (e) => ({ alt: e[1] || void 0, ref: e[2] }), render: (e, t2, n3) => Q2[e.ref] ? d2("img", { key: n3.key, alt: e.alt, src: i2.sanitizer(Q2[e.ref].target, "img", "src"), title: Q2[e.ref].title }) : null }, [r$1.refLink]: { match: Me(_), order: 0, parse: (e, t2, n3) => ({ children: t2(e[1], n3), fallbackChildren: e[0], ref: e[2] }), render: (e, t2, n3) => Q2[e.ref] ? d2("a", { key: n3.key, href: i2.sanitizer(Q2[e.ref].target, "a", "href"), title: Q2[e.ref].title }, t2(e.children, n3)) : d2("span", { key: n3.key }, e.fallbackChildren) }, [r$1.table]: { match: Ie(j), order: 1, parse: Te, render(e, t2, n3) {
    const r2 = e;
    return d2("table", { key: n3.key }, d2("thead", null, d2("tr", null, r2.header.map(function(e2, i3) {
      return d2("th", { key: i3, style: Be(r2, i3) }, t2(e2, n3));
    }))), d2("tbody", null, r2.cells.map(function(e2, i3) {
      return d2("tr", { key: i3 }, e2.map(function(e3, i4) {
        return d2("td", { key: i4, style: Be(r2, i4) }, t2(e3, n3));
      }));
    })));
  } }, [r$1.text]: { match: Ue(ne), order: 4, parse: (e) => ({ text: e[0].replace(T, (e2, t2) => i2.namedCodesToUnicode[t2] ? i2.namedCodesToUnicode[t2] : e2) }), render: (e) => e.text }, [r$1.textBolded]: { match: Re(X), order: 2, parse: (e, t2, n3) => ({ children: t2(e[2], n3) }), render: (e, t2, n3) => d2("strong", { key: n3.key }, t2(e.children, n3)) }, [r$1.textEmphasized]: { match: Re(J), order: 3, parse: (e, t2, n3) => ({ children: t2(e[2], n3) }), render: (e, t2, n3) => d2("em", { key: n3.key }, t2(e.children, n3)) }, [r$1.textEscaped]: { match: Re(ee), order: 1, parse: (e) => ({ text: e[1], type: r$1.text }) }, [r$1.textMarked]: { match: Re(K), order: 3, parse: Fe, render: (e, t2, n3) => d2("mark", { key: n3.key }, t2(e.children, n3)) }, [r$1.textStrikethroughed]: { match: Re(Y), order: 3, parse: Fe, render: (e, t2, n3) => d2("del", { key: n3.key }, t2(e.children, n3)) } };
  true === i2.disableParsingRawHTML && (delete V2[r$1.htmlBlock], delete V2[r$1.htmlSelfClosing]);
  const le2 = function(e) {
    let t2 = Object.keys(e);
    function n3(r2, i3) {
      let l2, a2, o2 = [], c2 = "", s2 = "";
      for (i3.prevCapture = i3.prevCapture || ""; r2; ) {
        let d3 = 0;
        for (; d3 < t2.length; ) {
          if (c2 = t2[d3], l2 = e[c2], i3.inline && !l2.match.inline) {
            d3++;
            continue;
          }
          const u2 = l2.match(r2, i3);
          if (u2) {
            s2 = u2[0], i3.prevCapture += s2, r2 = r2.substring(s2.length), a2 = l2.parse(u2, n3, i3), null == a2.type && (a2.type = c2), o2.push(a2);
            break;
          }
          d3++;
        }
      }
      return i3.prevCapture = "", o2;
    }
    return t2.sort(function(t3, n4) {
      let r2 = e[t3].order, i3 = e[n4].order;
      return r2 !== i3 ? r2 - i3 : t3 < n4 ? -1 : 1;
    }), function(e2, t3) {
      return n3(function(e3) {
        return e3.replace(b, "\n").replace($, "").replace(G, "    ");
      }(e2), t3);
    };
  }(V2), ae2 = (oe2 = /* @__PURE__ */ function(e, t2) {
    return function(n3, r2, i3) {
      const l2 = e[n3.type].render;
      return t2 ? t2(() => l2(n3, r2, i3), n3, r2, i3) : l2(n3, r2, i3);
    };
  }(V2, i2.renderRule), function e(t2, n3 = {}) {
    if (Array.isArray(t2)) {
      const r2 = n3.key, i3 = [];
      let l2 = false;
      for (let r3 = 0; r3 < t2.length; r3++) {
        n3.key = r3;
        const a2 = e(t2[r3], n3), o2 = "string" == typeof a2;
        o2 && l2 ? i3[i3.length - 1] += a2 : null !== a2 && i3.push(a2), l2 = o2;
      }
      return n3.key = r2, i3;
    }
    return oe2(t2, e, n3);
  });
  var oe2;
  const ce2 = W2(n2);
  return q2.length ? d2("div", null, ce2, d2("footer", { key: "footer" }, q2.map(function(e) {
    return d2("div", { id: i2.slugify(e.identifier, ze), key: e.identifier }, e.identifier, ae2(le2(e.footnote, { inline: true })));
  }))) : ce2;
}
const Markdown = (t2) => {
  let { children: r2 = "", options: i2 } = t2, l2 = function(e, t3) {
    if (null == e) return {};
    var n2, r3, i3 = {}, l3 = Object.keys(e);
    for (r3 = 0; r3 < l3.length; r3++) t3.indexOf(n2 = l3[r3]) >= 0 || (i3[n2] = e[n2]);
    return i3;
  }(t2, n);
  return reactExports.cloneElement(Qe(r2, i2), l2);
};
function r(e) {
  var t2, f2, n2 = "";
  if ("string" == typeof e || "number" == typeof e) n2 += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o2 = e.length;
    for (t2 = 0; t2 < o2; t2++) e[t2] && (f2 = r(e[t2])) && (n2 && (n2 += " "), n2 += f2);
  } else for (f2 in e) e[f2] && (n2 && (n2 += " "), n2 += f2);
  return n2;
}
function clsx() {
  for (var e, t2, f2 = 0, n2 = "", o2 = arguments.length; f2 < o2; f2++) (e = arguments[f2]) && (t2 = r(e)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
const CLASS_PART_SEPARATOR = "-";
const createClassGroupUtils = (config) => {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  const getClassGroupId = (className) => {
    const classParts = className.split(CLASS_PART_SEPARATOR);
    if (classParts[0] === "" && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  };
  const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  };
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
};
const getGroupRecursive = (classParts, classPartObject) => {
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return void 0;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return classPartObject.validators.find(({
    validator
  }) => validator(classRest))?.classGroupId;
};
const arbitraryPropertyRegex = /^\[(.+)\]$/;
const getGroupIdForArbitraryProperty = (className) => {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    const property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(":"));
    if (property) {
      return "arbitrary.." + property;
    }
  }
};
const createClassMap = (config) => {
  const {
    theme,
    prefix
  } = config;
  const classMap = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(([classGroupId, classGroup]) => {
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
};
const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
  classGroup.forEach((classDefinition) => {
    if (typeof classDefinition === "string") {
      const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === "function") {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup2]) => {
      processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
    });
  });
};
const getPart = (classPartObject, path) => {
  let currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
};
const isThemeGetter = (func) => func.isThemeGetter;
const getPrefixedClassGroupEntries = (classGroupEntries, prefix) => {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(([classGroupId, classGroup]) => {
    const prefixedClassGroup = classGroup.map((classDefinition) => {
      if (typeof classDefinition === "string") {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === "object") {
        return Object.fromEntries(Object.entries(classDefinition).map(([key, value]) => [prefix + key, value]));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
};
const createLruCache = (maxCacheSize) => {
  if (maxCacheSize < 1) {
    return {
      get: () => void 0,
      set: () => {
      }
    };
  }
  let cacheSize = 0;
  let cache = /* @__PURE__ */ new Map();
  let previousCache = /* @__PURE__ */ new Map();
  const update = (key, value) => {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = /* @__PURE__ */ new Map();
    }
  };
  return {
    get(key) {
      let value = cache.get(key);
      if (value !== void 0) {
        return value;
      }
      if ((value = previousCache.get(key)) !== void 0) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
};
const IMPORTANT_MODIFIER = "!";
const createParseClassName = (config) => {
  const {
    separator,
    experimentalParseClassName
  } = config;
  const isSeparatorSingleCharacter = separator.length === 1;
  const firstSeparatorCharacter = separator[0];
  const separatorLength = separator.length;
  const parseClassName = (className) => {
    const modifiers = [];
    let bracketDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index = 0; index < className.length; index++) {
      let currentCharacter = className[index];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separatorLength;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === "[") {
        bracketDepth++;
      } else if (currentCharacter === "]") {
        bracketDepth--;
      }
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
  if (experimentalParseClassName) {
    return (className) => experimentalParseClassName({
      className,
      parseClassName
    });
  }
  return parseClassName;
};
const sortModifiers = (modifiers) => {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  const sortedModifiers = [];
  let unsortedModifiers = [];
  modifiers.forEach((modifier) => {
    const isArbitraryVariant = modifier[0] === "[";
    if (isArbitraryVariant) {
      sortedModifiers.push(...unsortedModifiers.sort(), modifier);
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push(...unsortedModifiers.sort());
  return sortedModifiers;
};
const createConfigUtils = (config) => ({
  cache: createLruCache(config.cacheSize),
  parseClassName: createParseClassName(config),
  ...createClassGroupUtils(config)
});
const SPLIT_CLASSES_REGEX = /\s+/;
const mergeClassList = (classList, configUtils) => {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds
  } = configUtils;
  const classGroupsInConflict = [];
  const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
  let result = "";
  for (let index = classNames.length - 1; index >= 0; index -= 1) {
    const originalClassName = classNames[index];
    const {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(":");
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.includes(classId)) {
      continue;
    }
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
    for (let i2 = 0; i2 < conflictGroups.length; ++i2) {
      const group = conflictGroups[i2];
      classGroupsInConflict.push(modifierId + group);
    }
    result = originalClassName + (result.length > 0 ? " " + result : result);
  }
  return result;
};
function twJoin() {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = "";
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
const toValue = (mix) => {
  if (typeof mix === "string") {
    return mix;
  }
  let resolvedValue;
  let string = "";
  for (let k2 = 0; k2 < mix.length; k2++) {
    if (mix[k2]) {
      if (resolvedValue = toValue(mix[k2])) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
};
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
const fromTheme = (key) => {
  const themeGetter = (theme) => theme[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
};
const arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
const fractionRegex = /^\d+\/\d+$/;
const stringLengths = /* @__PURE__ */ new Set(["px", "full", "screen"]);
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
const isLength = (value) => isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
const isArbitraryLength = (value) => getIsArbitraryValue(value, "length", isLengthOnly);
const isNumber = (value) => Boolean(value) && !Number.isNaN(Number(value));
const isArbitraryNumber = (value) => getIsArbitraryValue(value, "number", isNumber);
const isInteger = (value) => Boolean(value) && Number.isInteger(Number(value));
const isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
const isArbitraryValue = (value) => arbitraryValueRegex.test(value);
const isTshirtSize = (value) => tshirtUnitRegex.test(value);
const sizeLabels = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
const isArbitrarySize = (value) => getIsArbitraryValue(value, sizeLabels, isNever);
const isArbitraryPosition = (value) => getIsArbitraryValue(value, "position", isNever);
const imageLabels = /* @__PURE__ */ new Set(["image", "url"]);
const isArbitraryImage = (value) => getIsArbitraryValue(value, imageLabels, isImage);
const isArbitraryShadow = (value) => getIsArbitraryValue(value, "", isShadow);
const isAny = () => true;
const getIsArbitraryValue = (value, label, testValue) => {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return typeof label === "string" ? result[1] === label : label.has(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
};
const isLengthOnly = (value) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  lengthUnitRegex.test(value) && !colorFunctionRegex.test(value)
);
const isNever = () => false;
const isShadow = (value) => shadowRegex.test(value);
const isImage = (value) => imageRegex.test(value);
const getDefaultConfig = () => {
  const colors = fromTheme("colors");
  const spacing = fromTheme("spacing");
  const blur = fromTheme("blur");
  const brightness = fromTheme("brightness");
  const borderColor = fromTheme("borderColor");
  const borderRadius = fromTheme("borderRadius");
  const borderSpacing = fromTheme("borderSpacing");
  const borderWidth = fromTheme("borderWidth");
  const contrast = fromTheme("contrast");
  const grayscale = fromTheme("grayscale");
  const hueRotate = fromTheme("hueRotate");
  const invert = fromTheme("invert");
  const gap = fromTheme("gap");
  const gradientColorStops = fromTheme("gradientColorStops");
  const gradientColorStopPositions = fromTheme("gradientColorStopPositions");
  const inset = fromTheme("inset");
  const margin = fromTheme("margin");
  const opacity = fromTheme("opacity");
  const padding = fromTheme("padding");
  const saturate = fromTheme("saturate");
  const scale = fromTheme("scale");
  const sepia = fromTheme("sepia");
  const skew = fromTheme("skew");
  const space = fromTheme("space");
  const translate = fromTheme("translate");
  const getOverscroll = () => ["auto", "contain", "none"];
  const getOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
  const getSpacingWithAutoAndArbitrary = () => ["auto", isArbitraryValue, spacing];
  const getSpacingWithArbitrary = () => [isArbitraryValue, spacing];
  const getLengthWithEmptyAndArbitrary = () => ["", isLength, isArbitraryLength];
  const getNumberWithAutoAndArbitrary = () => ["auto", isNumber, isArbitraryValue];
  const getPositions = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  const getLineStyles = () => ["solid", "dashed", "dotted", "double", "none"];
  const getBlendModes = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
  const getAlign = () => ["start", "end", "center", "between", "around", "evenly", "stretch"];
  const getZeroAndEmpty = () => ["", "0", isArbitraryValue];
  const getBreaks = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  const getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [isAny],
      spacing: [isLength, isArbitraryLength],
      blur: ["none", "", isTshirtSize, isArbitraryValue],
      brightness: getNumberAndArbitrary(),
      borderColor: [colors],
      borderRadius: ["none", "", "full", isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmptyAndArbitrary(),
      contrast: getNumberAndArbitrary(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumberAndArbitrary(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumberAndArbitrary(),
      scale: getNumberAndArbitrary(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...getPositions(), isArbitraryValue]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", isInteger, isArbitraryValue]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", isInteger, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...getAlign()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...getAlign(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...getAlign(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", isArbitraryValue, spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [isArbitraryValue, spacing, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [isArbitraryValue, spacing, "none", "full", "min", "max", "fit", "prose", {
          screen: [isTshirtSize]
        }, isTshirtSize]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [isArbitraryValue, spacing, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [isArbitraryValue, spacing, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [isArbitraryValue, spacing, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [isArbitraryValue, spacing, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", isLength, isArbitraryValue]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...getLineStyles(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", isLength, isArbitraryLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", isLength, isArbitraryValue]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...getPositions(), isArbitraryPosition]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [borderWidth]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [borderWidth]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...getLineStyles(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [borderColor]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [borderColor]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...getLineStyles()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [isLength, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [isLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: getLengthWithEmptyAndArbitrary()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [isLength, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...getBlendModes(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [scale]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [scale]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [isLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
};
const twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Switch({ checked, onCheckedChange, className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      role: "switch",
      "aria-checked": checked,
      onClick: () => onCheckedChange?.(!checked),
      className: cn(
        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
        checked ? "bg-primary" : "bg-gray-200 dark:bg-gray-700",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: cn(
              "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform",
              checked ? "translate-x-6" : "translate-x-1"
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Theme toggle" })
      ]
    }
  );
}
function TrashIcon(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      ...props,
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 6h18" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" })
      ]
    }
  );
}
function App() {
  const [summary, setSummary] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [currentLevel, setCurrentLevel] = reactExports.useState(1);
  const [theme, setTheme] = reactExports.useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  reactExports.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  reactExports.useEffect(() => {
    const messageListener = (message, _sender, sendResponse) => {
      if (message.type === "STREAM_RESPONSE") {
        setLoading(true);
        if (message.isFirst) {
          setSummary("");
          return;
        }
        if (message.chunk !== void 0) {
          if (message.level) {
            setCurrentLevel(message.level);
          }
          setSummary((prev) => prev + message.chunk);
        }
      } else if (message.type === "ERROR") {
        setSummary(message.error || "An error occurred");
        setLoading(false);
      } else if (message.type === "STREAM_COMPLETE") {
        setLoading(false);
        if (message.level) {
          setCurrentLevel(message.level);
        }
      }
      sendResponse();
    };
    chrome.runtime.onMessage.addListener(messageListener);
    return () => {
      chrome.runtime.onMessage.removeListener(messageListener);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "container mx-auto p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: "Engineering Eras" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setSummary(""),
          className: "p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors",
          "aria-label": "Clear summary",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrashIcon, { className: "h-5 w-5" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Switch,
        {
          checked: theme === "dark",
          onCheckedChange: (checked) => setTheme(checked ? "dark" : "light"),
          "aria-label": "Toggle theme"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border p-4 prose dark:prose-invert max-w-none", children: summary || loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/20", children: levels.find((l2) => l2.level === currentLevel)?.name || "" }) }),
      summary ? /* @__PURE__ */ jsxRuntimeExports.jsx(Markdown, { children: summary }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 text-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex space-x-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-[dot_1.4s_infinite] [animation-delay:0.2s] text-blue-500 dark:text-blue-400 text-2xl font-bold", children: "●" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-[dot_1.4s_infinite] [animation-delay:0.4s] text-blue-500 dark:text-blue-400 text-2xl font-bold", children: "●" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-[dot_1.4s_infinite] [animation-delay:0.6s] text-blue-500 dark:text-blue-400 text-2xl font-bold", children: "●" })
      ] }) })
    ] }) : "Select text and use right-click menu to get a technical explanation" })
  ] }) });
}
clientExports.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
//# sourceMappingURL=popup.js.map
