'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  /* This renders the buttons above... Edit me! */\n  display: inline-block;\n  border-radius: 3px;\n  padding: 0.5rem 0;\n  margin: 0.5rem 1rem;\n  width: auto;\n  background: red;\n  color: white;\n  border: 2px solid white;\n\n  /* The GitHub button is a primary button\n   * edit this to target it specifically! */\n  ', '\n'], ['\n  /* This renders the buttons above... Edit me! */\n  display: inline-block;\n  border-radius: 3px;\n  padding: 0.5rem 0;\n  margin: 0.5rem 1rem;\n  width: auto;\n  background: red;\n  color: white;\n  border: 2px solid white;\n\n  /* The GitHub button is a primary button\n   * edit this to target it specifically! */\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    background: white;\n    color: palevioletred;\n  '], ['\n    background: white;\n    color: palevioletred;\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents2.default.h3(_templateObject, function (props) {
  return props.primary && css(_templateObject2);
});

exports.default = Header;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Header = exports.ButtonPrimary = exports.Button = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  /* This renders the buttons above... Edit me! */\n  display: inline-block;\n  border-radius: 3px;\n  padding: 0.5rem 0;\n  margin: 0.5rem 1rem;\n  width: auto;\n  background: red;\n  color: white;\n  border: 2px solid white;\n\n  /* The GitHub button is a primary button\n   * edit this to target it specifically! */\n  ', '\n'], ['\n  /* This renders the buttons above... Edit me! */\n  display: inline-block;\n  border-radius: 3px;\n  padding: 0.5rem 0;\n  margin: 0.5rem 1rem;\n  width: auto;\n  background: red;\n  color: white;\n  border: 2px solid white;\n\n  /* The GitHub button is a primary button\n   * edit this to target it specifically! */\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    background: white;\n    color: palevioletred;\n  '], ['\n    background: white;\n    color: palevioletred;\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents2.default.a(_templateObject, function (props) {
    return props.primary && css(_templateObject2);
});

var ButtonPrimary = function (_Component) {
    _inherits(ButtonPrimary, _Component);

    function ButtonPrimary(props) {
        _classCallCheck(this, ButtonPrimary);

        return _possibleConstructorReturn(this, (ButtonPrimary.__proto__ || Object.getPrototypeOf(ButtonPrimary)).call(this, props));
    }

    _createClass(ButtonPrimary, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'button',
                null,
                'hello ',
                this.props.text,
                '!'
            );
        }
    }]);

    return ButtonPrimary;
}(_react.Component);

var Header = function (_Component2) {
    _inherits(Header, _Component2);

    function Header(props) {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'h1',
                null,
                'hello ',
                this.props.text,
                '!'
            );
        }
    }]);

    return Header;
}(_react.Component);

exports.Button = Button;
exports.ButtonPrimary = ButtonPrimary;
exports.Header = Header;