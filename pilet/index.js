//@pilet v:2(esbuildpr_pilet,{})
System.register(["react", "react-router-dom"], function (_export, _context) {
  "use strict";

  var r, c, g, f, l, u;
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  function d(t) {
    function i(e) {
      var _f = f(function () {
          return t.getData(e);
        }),
        _f2 = _slicedToArray(_f, 2),
        n = _f2[0],
        s = _f2[1];
      return g(function () {
        var o = function o(a) {
          a.name === e && s(a.value);
        };
        return t.on("store-data", o), function () {
          t.off("store_data", o);
        };
      }, [e]), n;
    }
    t.registerPage("/page", u), t.showNotification("Hello from Piral!", {
      autoClose: 2e3
    }), t.registerMenu(function () {
      return r(l, {
        to: "/page"
      }, "Page");
    }), t.registerTile(function () {
      var e = i("qxz");
      return r("div", null, "Current value of qxz: ", r("strong", null, e));
    }, {
      initialColumns: 2,
      initialRows: 2
    });
  }
  _export("setup", d);
  return {
    setters: [function (_react) {
      r = _react.createElement;
      c = _react.lazy;
      g = _react.useEffect;
      f = _react.useState;
    }, function (_reactRouterDom) {
      l = _reactRouterDom.Link;
    }],
    execute: function () {
      u = c(function () {
        return _context["import"]("./Page-ISCJCM6D.js");
      });
    }
  };
});