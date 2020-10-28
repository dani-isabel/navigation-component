"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledNavigation = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    &.dark {\n        width: 100%;\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n        background-color:purple;\n        color:white;\n        font-family: Calibri;\n        display:flex;\n    }\n    & .link {\n        margin-left:10%;\n        text-decoration:none;\n        color:white;\n        &:hover {\n            text-decoration: underline;\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Navigation = function Navigation(props) {
  var className = props.className,
      name = props.name,
      classLink = props.classLink;
  return /*#__PURE__*/_react.default.createElement("header", {
    className: className
  }, /*#__PURE__*/_react.default.createElement("h3", null, name), /*#__PURE__*/_react.default.createElement("nav", null, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("a", {
    className: classLink,
    href: "/"
  }, "Home"), /*#__PURE__*/_react.default.createElement("a", {
    className: classLink,
    target: "_blank",
    href: "https://www.linkedin.com/in/daniela-isabel-bolivar/"
  }, "About"), /*#__PURE__*/_react.default.createElement("a", {
    className: classLink,
    target: "_blank",
    href: "https://github.com/dani-isabel"
  }, "Projects"))));
};

var StyledNavigation = (0, _styledComponents.default)(Navigation)(_templateObject());
exports.StyledNavigation = StyledNavigation;