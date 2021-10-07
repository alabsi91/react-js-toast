"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.parse-int.js");

var _react = _interopRequireWildcard(require("react"));

var _requestAnimationNumber = require("request-animation-number");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const wait = time => new Promise(e => setTimeout(e, time));

let tempStack = [];
let isMounted = true;
const Toast = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  var _props$duration, _props$animationDutat, _props$stackable, _props$rtl;

  const type = props.type || 'info'; // 'warning','error', 'success'

  const position = props.position || 'bottom'; // 'top'

  const animation = props.animation || 'fade'; // 'slide'

  const duration = (_props$duration = props.duration) !== null && _props$duration !== void 0 ? _props$duration : 3000;
  const animation_duration = (_props$animationDutat = props.animationDutation) !== null && _props$animationDutat !== void 0 ? _props$animationDutat : 300;
  const easingFunction = props.ease || 'easeOutExpo';
  const message = props.message || 'Toast message goes here';
  const text_style = props.textStyle || {};
  const toast_style = props.toastStyle || {};
  const CustomIcon = props.customIcon;
  const icon_color = props.iconColor || '#fff';
  const stackable = (_props$stackable = props.stackable) !== null && _props$stackable !== void 0 ? _props$stackable : true;
  const rtl = (_props$rtl = props.rtl) !== null && _props$rtl !== void 0 ? _props$rtl : false;

  const backgroundColor = type => type === 'error' ? '#f44336' : type === 'warning' ? '#ff9800' : type === 'info' ? '#2196f3' : type === 'success' ? '#4caf50' : '#4caf50';

  const icon_style = _objectSpread({
    width: '24px',
    height: '24px',
    fill: icon_color
  }, rtl ? {
    marginRight: '20px'
  } : {
    marginLeft: '20px'
  });

  const [stack, setStack] = (0, _react.useState)(tempStack);

  const Icon = porps => {
    switch (porps.type) {
      case 'error':
        return /*#__PURE__*/_react.default.createElement("svg", {
          style: icon_style,
          viewBox: "0 0 24 24"
        }, /*#__PURE__*/_react.default.createElement("path", {
          d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
        }));

      case 'warning':
        return /*#__PURE__*/_react.default.createElement("svg", {
          style: icon_style,
          viewBox: "0 0 24 24"
        }, /*#__PURE__*/_react.default.createElement("path", {
          d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
        }));

      case 'info':
        return /*#__PURE__*/_react.default.createElement("svg", {
          style: icon_style,
          viewBox: "0 0 24 24"
        }, /*#__PURE__*/_react.default.createElement("path", {
          d: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
        }));

      case 'success':
        return /*#__PURE__*/_react.default.createElement("svg", {
          style: icon_style,
          viewBox: "0 0 24 24"
        }, /*#__PURE__*/_react.default.createElement("path", {
          d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
        }));

      default:
        break;
    }
  };

  const ToastElement = props => {
    let el = null;

    const fadeAnimation = async () => {
      const element = el;
      const height = parseInt(window.getComputedStyle(element).height);
      const margin = parseInt(window.getComputedStyle(element).marginBottom);
      (0, _requestAnimationNumber.requestNum)({
        from: 0,
        to: 1,
        duration: animation_duration,
        easingFunction
      }, o => {
        element.style.opacity = o;
      });
      if (!isMounted) return;
      (0, _requestAnimationNumber.requestNum)({
        from: [height, margin, 1],
        to: [0, 0, 0],
        duration: animation_duration,
        easingFunction,
        delay: duration - animation_duration
      }, (h, m, o) => {
        element.style.height = h + 'px';
        element.style.marginBottom = m + 'px';
        element.style.opacity = o;
      });
    };

    const slideAnimation = async () => {
      const element = el;
      const height = parseInt(window.getComputedStyle(element).height);
      const margin = parseInt(window.getComputedStyle(element).marginBottom);
      const transformValue = ((parseInt(toast_style === null || toast_style === void 0 ? void 0 : toast_style.height) || 50) + 20) * (position === 'top' ? -1 : 1);
      (0, _requestAnimationNumber.requestNum)({
        from: transformValue,
        to: 0,
        duration: animation_duration,
        easingFunction
      }, t => {
        element.style.transform = "translateY(".concat(t, "px)");
      });
      if (!isMounted) return;
      (0, _requestAnimationNumber.requestNum)({
        from: [height, margin, 0],
        to: [0, 0, transformValue],
        duration: animation_duration,
        easingFunction,
        delay: duration - animation_duration
      }, (h, m, t) => {
        element.style.height = h + 'px';
        element.style.marginBottom = m + 'px';
        element.style.transform = "translateY(".concat(t, "px)");
      });
    };

    (0, _react.useEffect)(() => {
      if (animation === 'fade') fadeAnimation();
      if (animation === 'slide') slideAnimation(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/_react.default.createElement("div", {
      ref: node => el = node,
      style: _objectSpread({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '50px',
        width: '90vw',
        maxWidth: '500px',
        borderRadius: '10px',
        backgroundColor: backgroundColor(props.type || type),
        margin: 'auto',
        marginBottom: '20px',
        boxShadow: '#00000050 0px 2px 5px 0px',
        overflow: 'hidden',
        opacity: animation === 'fade' ? 0 : 1,
        transform: "translateY(".concat(animation === 'slide' ? ((parseInt(toast_style === null || toast_style === void 0 ? void 0 : toast_style.height) || 50) + 20) * (position === 'top' ? -1 : 1) : 0, "px)")
      }, toast_style)
    }, CustomIcon ? /*#__PURE__*/_react.default.createElement(CustomIcon, null) : /*#__PURE__*/_react.default.createElement(Icon, {
      type: props.type || type
    }), /*#__PURE__*/_react.default.createElement("p", {
      style: _objectSpread({
        fontFamily: 'system-ui',
        fontSize: '18px',
        color: '#fff',
        textAlign: 'center',
        margin: 'auto'
      }, text_style)
    }, props.message || message));
  };
  /**
   * - message: Toast text message.
   * @param {String} message
   *
   * - type: Every type has different icon and background color.
   * @param {'info' | 'warning' | 'error' | 'success'} type
   */


  const showToast = async (message, type) => {
    const elKey = Math.random() * 1000;
    tempStack = position === 'top' ? [...(stackable ? tempStack : []), /*#__PURE__*/_react.default.createElement(ToastElement, {
      key: elKey,
      message: message,
      type: type
    })] : [/*#__PURE__*/_react.default.createElement(ToastElement, {
      key: elKey,
      message: message,
      type: type
    }), ...(stackable ? tempStack : [])];
    setStack(tempStack);
    await wait(duration);
    if (!isMounted) return;
    tempStack = tempStack.filter(e => e.key !== elKey + '');
    setStack(tempStack);
  };

  (0, _react.useImperativeHandle)(ref, () => ({
    showToast
  }));
  (0, _react.useEffect)(() => {
    isMounted = true;
    return () => {
      isMounted = false;
      tempStack = [];
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: _objectSpread(_objectSpread({
      position: 'fixed'
    }, position === 'top' ? {
      top: '30px'
    } : {
      bottom: '30px'
    }), {}, {
      left: '0px',
      width: '100vw',
      direction: rtl ? 'rtl' : 'ltr',
      zIndex: 1000
    })
  }, stack);
});
var _default = Toast;
exports.default = _default;