webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _phaser = __webpack_require__(0);

var _phaser2 = _interopRequireDefault(_phaser);

var _cutTheString = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gameConfig = {
  type: _phaser2.default.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#000088',
  parent: 'phaser-example',
  scene: _cutTheString.CutTheString
};

var game = new _phaser2.default.Game(gameConfig);

game();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CutTheString = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = __webpack_require__(0);

var _phaser2 = _interopRequireDefault(_phaser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CutTheString = exports.CutTheString = function (_Phaser$Scene) {
  _inherits(CutTheString, _Phaser$Scene);

  function CutTheString() {
    _classCallCheck(this, CutTheString);

    var _this = _possibleConstructorReturn(this, (CutTheString.__proto__ || Object.getPrototypeOf(CutTheString)).call(this));

    _this.count = 0;
    return _this;
  }

  _createClass(CutTheString, [{
    key: 'preload',
    value: function preload() {
      this.load.image('bg', 'assets/new_background');
      this.load.image('snake', 'assets/pipe1.png');
    }
  }, {
    key: 'create',
    value: function create() {
      this.add.image(400, 300, 'bg');
      // (x.pos, y.pos, name, what?(texture frame), number_of_points)
      // the length of the rope is controlled by the image, i.e snake

      // this is the rope we want to cut, can we set the points first
      this.base_target_points = [];
      this.target_points = [];
      for (var i = 0; i < 32; i++) {
        this.base_target_points.push(new _phaser2.default.Math.Vector2(i * 800 / 31, 300));
      }
      this.target_points = this.base_target_points;
      console.log(this.target_points);
      this.target_rope = this.add.rope(0, 0, 'snake', null, this.target_points);

      //  By providing 2 values to the `setAlphas` function
      //  we can set the alpha across the whole Rope from top to bottom:
      this.target_rope.setAlphas(1, 0.9);

      // some stuff for drawing
      this.lineGraphics = this.add.graphics();
      this.input.on('pointerdown', this.startDrawing, this);
      this.input.on('pointerup', this.stopDrawing, this);
      this.input.on('pointermove', this.keepDrawing, this);
      this.isDrawing = false;
    }
  }, {
    key: 'startDrawing',
    value: function startDrawing() {
      this.isDrawing = true;
    }
  }, {
    key: 'keepDrawing',
    value: function keepDrawing(pointer) {
      if (this.isDrawing) {
        this.lineGraphics.clear();
        this.lineGraphics.lineStyle(1, 0x00ff00);
        this.lineGraphics.moveTo(pointer.downX, pointer.downY);
        this.lineGraphics.lineTo(pointer.x, pointer.y);
        this.lineGraphics.strokePath();
      }
    }
  }, {
    key: 'stopDrawing',
    value: function stopDrawing(pointer) {
      // this.lineGraphics.clear();
      this.isDrawing = false;
    }
  }, {
    key: 'update',
    value: function update() {
      this.count += 0.1;

      // let points = this.target_rope.points;

      for (var i = 0; i < this.target_points.length; i++) {
        // we don't want to update until all the points are drawn
        this.target_points[i].y = this.base_target_points[i].y + Math.sin(i * 0.15 + this.count) * 0.5;
      }
      // without setDirty the rope doesn't move
      this.target_rope.setDirty();
    }
  }]);

  return CutTheString;
}(_phaser2.default.Scene);

/***/ })
],[1]);