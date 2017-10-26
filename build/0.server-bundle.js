exports.ids = [0];
exports.modules = {

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(6);

var _reactRedux = __webpack_require__(5);

var _renderField = __webpack_require__(18);

var _renderField2 = _interopRequireDefault(_renderField);

var _actions = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactForm = function (_Component) {
  _inherits(ContactForm, _Component);

  function ContactForm() {
    _classCallCheck(this, ContactForm);

    return _possibleConstructorReturn(this, (ContactForm.__proto__ || Object.getPrototypeOf(ContactForm)).apply(this, arguments));
  }

  _createClass(ContactForm, [{
    key: 'handleFormSubmit',
    value: function handleFormSubmit(values) {
      this.props.saveForm(values);
      this.props.dispatch((0, _reduxForm.reset)('ContactForm'));
    }
  }, {
    key: 'render',
    value: function render() {
      var handleSubmit = this.props.handleSubmit;

      return _react2.default.createElement(
        'div',
        { className: 'contact-form-container' },
        _react2.default.createElement(
          'form',
          { className: 'contact-form', onSubmit: handleSubmit(this.handleFormSubmit.bind(this)) },
          _react2.default.createElement(_reduxForm.Field, { label: 'Full Name:', name: 'fname', component: _renderField2.default, type: 'text' }),
          _react2.default.createElement(_reduxForm.Field, { label: 'Email:', name: 'email', component: _renderField2.default, type: 'email' }),
          _react2.default.createElement(_reduxForm.Field, { label: 'Confirm Email:', name: 'emailagain', component: _renderField2.default, type: 'email' }),
          _react2.default.createElement(_reduxForm.Field, { label: 'Message:', name: 'message', component: _renderField2.default, textarea: true }),
          _react2.default.createElement(
            'button',
            { className: 'buttons', type: 'submit' },
            'Submit'
          )
        )
      );
    }
  }]);

  return ContactForm;
}(_react.Component);

var validate = function validate(values) {
  var errors = {};

  if (!values.fname) {
    errors.fname = 'Please enter your full name';
  }
  if (!values.email) {
    errors.email = 'Please Enter Your Email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.emailagain) {
    errors.emailagain = 'Please Enter Your Email Again';
  }
  if (values.email !== values.emailagain) {
    errors.email = 'Email does not match';
  }
  if (!values.message) {
    errors.message = 'Please enter a message';
  }
  return errors;
};

exports.default = (0, _reactRedux.connect)(null, { saveForm: _actions.saveForm })((0, _reduxForm.reduxForm)({
  form: 'ContactForm',
  validate: validate
})(ContactForm));

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var input = _ref.input,
      textarea = _ref.textarea,
      label = _ref.label,
      _ref$meta = _ref.meta,
      error = _ref$meta.error,
      touched = _ref$meta.touched,
      invalid = _ref$meta.invalid;

  var textareaType = _react2.default.createElement("textarea", input);
  var inputType = _react2.default.createElement("input", input);

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "label",
      null,
      label
    ),
    textarea ? textareaType : inputType,
    _react2.default.createElement(
      "div",
      { className: "error" },
      touched && error
    )
  );
};

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SAVE_FORM = exports.SAVE_FORM = 'save_form';

var saveForm = exports.saveForm = function saveForm(values) {
  var json = JSON.stringify(values);
  var storage = localStorage.setItem('form', json);
  return {
    type: SAVE_FORM,
    payload: storage
  };
};

/***/ })

};;