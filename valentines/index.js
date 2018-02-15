"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function VevoIframe(props) {
  if (props.show) {
    return React.createElement(
      "div",
      null,
      React.createElement("iframe", { width: "640", height: "360",
        src: "https://embed.vevo.com?isrc=GB1108700010&autoplay=true",
        allowfullscreen: "" })
    );
  } else return React.createElement("div", null);
}

var Root = function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root(props) {
    _classCallCheck(this, Root);

    var _this = _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).call(this, props));

    _this.handleClick = function (e) {
      _this.setState({
        displayIFrame: true
      });
    };

    _this.state = { valentineName: '', displayIFrame: false };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Root, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "button",
          { id: "root_btn", className: "btn btn-primary", onClick: this.handleClick,
            style: { display: this.state.displayIFrame ? 'none' : 'block' } },
          "Generate Random Love Song"
        ),
        React.createElement(VevoIframe, { show: this.state.displayIFrame })
      );
    }
  }]);

  return Root;
}(React.Component);

ReactDOM.render(React.createElement(Root, null), document.getElementById('root'));
