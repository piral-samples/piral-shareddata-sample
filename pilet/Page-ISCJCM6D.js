System.register(["react"], function (_export, _context) {
  "use strict";

  var r, o, f;
  return {
    setters: [function (_react) {
      r = _react.Fragment;
      o = _react.createElement;
    }],
    execute: function () {
      _export("default", f = function f(_ref) {
        var t = _ref.piral;
        var a = t.getData("foo"),
          e = t.getData("qxz");
        return o(r, null, o("h1", null, "Foo: ", a), o("p", null, "Value of qxz is ", o("strong", null, e)));
      });
    }
  };
});