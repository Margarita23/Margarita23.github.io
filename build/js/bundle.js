!function (n) {
  var i = {};

  function r(e) {
    if (i[e]) return i[e].exports;
    var t = i[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return n[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports;
  }

  r.m = n, r.c = i, r.d = function (e, t, n) {
    r.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, r.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, r.t = function (t, e) {
    if (1 & e && (t = r(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var i in t) r.d(n, i, function (e) {
      return t[e];
    }.bind(null, i));
    return n;
  }, r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return r.d(t, "a", t), t;
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, r.p = "", r(r.s = "./src/js/main.js");
}({
  "./src/js/main.js":
  /*!************************!*\
    !*** ./src/js/main.js ***!
    \************************/

  /*! no static exports found */
  function (module, exports) {
    eval("let multiItemSlider = (function () {\n    return function () {\n        let\n            _mainElement = document.querySelector('.banner__container'),\n            _sliderWrapper = _mainElement.querySelector('.banner__list'),\n            _sliderItems = _mainElement.querySelectorAll('.banner__item'),\n            _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width),\n            _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width),\n            _positionLeftItem = 0,\n            _transform = 0,\n            _step = _itemWidth / _wrapperWidth * 100,\n            _items = [];\n\n        _sliderItems.forEach(function (item, index) {\n            _items.push({ item: item, position: index, transform: 0 });\n        });\n\n        let position = {\n            getItemMin: function () {\n                let indexItem = 0;\n                _items.forEach(function (item, index) {\n                    if (item.position < _items[indexItem].position) {\n                        indexItem = index;\n                    }\n                });\n                return indexItem;\n            },\n            getItemMax: function () {\n                let indexItem = 0;\n                _items.forEach(function (item, index) {\n                    if (item.position > _items[indexItem].position) {\n                        indexItem = index;\n                    }\n                });\n                return indexItem;\n            },\n            getMin: function () {\n                return _items[position.getItemMin()].position;\n            },\n            getMax: function () {\n                return _items[position.getItemMax()].position;\n            }\n        }\n\n        let _transformItem = function () {\n            let nextItem;\n            _positionLeftItem++;\n            if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {\n                nextItem = position.getItemMin();\n                _items[nextItem].position = position.getMax() + 1;\n                _items[nextItem].transform += _items.length * 100;\n                _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';\n            }\n            _transform -= _step;\n        \n             _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';\n        }\n\n        let timerId = setInterval(() => _transformItem('right'), 6000);\n    }\n}());\n\nlet slider = multiItemSlider('.slider');\n\n\n//# sourceURL=webpack:///./src/js/main.js?");
  }
});