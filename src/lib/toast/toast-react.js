function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["__scopeToast", "onFocusFromOutsideViewport"],
  _excluded2 = ["__scopeToast", "hotkey", "label"],
  _excluded3 = ["forceMount", "open", "defaultOpen", "onOpenChange"],
  _excluded4 = ["__scopeToast", "children"],
  _excluded5 = ["__scopeToast", "type", "duration", "open", "onClose", "onEscapeKeyDown", "onSwipeStart", "onSwipeMove", "onSwipeCancel", "onSwipeEnd"],
  _excluded6 = ["__scopeToast"],
  _excluded7 = ["__scopeToast"],
  _excluded8 = ["__scopeToast", "altText"],
  _excluded9 = ["__scopeToast"],
  _excluded10 = ["altText"];
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/* eslint-disable @typescript-eslint/no-use-before-define */
import { composeEventHandlers } from '@radix-ui/primitive';
import { createCollection } from '@radix-ui/react-collection';
import { useComposedRefs } from '@radix-ui/react-compose-refs';
import { createContextScope } from '@radix-ui/react-context';
import * as DismissableLayer from '@radix-ui/react-dismissable-layer';
import { Portal } from '@radix-ui/react-portal';
import { Presence } from '@radix-ui/react-presence';
import { Primitive, dispatchDiscreteCustomEvent } from '@radix-ui/react-primitive';
import { useCallbackRef } from '@radix-ui/react-use-callback-ref';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { useLayoutEffect } from '@radix-ui/react-use-layout-effect';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
/* -------------------------------------------------------------------------------------------------
 * ToastProvider
 * -----------------------------------------------------------------------------------------------*/

var PROVIDER_NAME = 'ToastProvider';
var _createCollection = createCollection('Toast'),
  _createCollection2 = _slicedToArray(_createCollection, 3),
  Collection = _createCollection2[0],
  useCollection = _createCollection2[1],
  createCollectionScope = _createCollection2[2];
var _createContextScope = createContextScope('Toast', [createCollectionScope]),
  _createContextScope2 = _slicedToArray(_createContextScope, 2),
  createToastContext = _createContextScope2[0],
  createToastScope = _createContextScope2[1];
var _createToastContext = createToastContext(PROVIDER_NAME),
  _createToastContext2 = _slicedToArray(_createToastContext, 2),
  ToastProviderProvider = _createToastContext2[0],
  useToastProviderContext = _createToastContext2[1];
var ToastProvider = function ToastProvider(props) {
  var __scopeToast = props.__scopeToast,
    _props$label = props.label,
    label = _props$label === void 0 ? 'Notification' : _props$label,
    _props$duration = props.duration,
    duration = _props$duration === void 0 ? 5000 : _props$duration,
    _props$swipeDirection = props.swipeDirection,
    swipeDirection = _props$swipeDirection === void 0 ? 'right' : _props$swipeDirection,
    _props$swipeThreshold = props.swipeThreshold,
    swipeThreshold = _props$swipeThreshold === void 0 ? 50 : _props$swipeThreshold,
    children = props.children;
  var _React$useState = React.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    viewport = _React$useState2[0],
    setViewport = _React$useState2[1];
  var _React$useState3 = React.useState(0),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    toastCount = _React$useState4[0],
    setToastCount = _React$useState4[1];
  var isFocusedToastEscapeKeyDownRef = React.useRef(false);
  var isClosePausedRef = React.useRef(false);
  if (!label.trim()) {
    console.error("Invalid prop `label` supplied to `".concat(PROVIDER_NAME, "`. Expected non-empty `string`."));
  }
  return /*#__PURE__*/_jsx(Collection.Provider, {
    scope: __scopeToast,
    children: /*#__PURE__*/_jsx(ToastProviderProvider, {
      scope: __scopeToast,
      label: label,
      duration: duration,
      swipeDirection: swipeDirection,
      swipeThreshold: swipeThreshold,
      toastCount: toastCount,
      viewport: viewport,
      onViewportChange: setViewport,
      onToastAdd: React.useCallback(function () {
        return setToastCount(function (prevCount) {
          return prevCount + 1;
        });
      }, []),
      onToastRemove: React.useCallback(function () {
        return setToastCount(function (prevCount) {
          return prevCount - 1;
        });
      }, []),
      isFocusedToastEscapeKeyDownRef: isFocusedToastEscapeKeyDownRef,
      isClosePausedRef: isClosePausedRef,
      children: children
    })
  });
};
ToastProvider.displayName = PROVIDER_NAME;

/* -------------------------------------------------------------------------------------------------
 * ToastViewport
 * -----------------------------------------------------------------------------------------------*/

var VIEWPORT_NAME = 'ToastViewport';
var VIEWPORT_DEFAULT_HOTKEY = ['F8'];
var VIEWPORT_PAUSE = 'toast.viewportPause';
var VIEWPORT_RESUME = 'toast.viewportResume';
/* -----------------------------------------------------------------------------------------------*/

var FOCUS_PROXY_NAME = 'ToastFocusProxy';
var FocusProxy = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  var __scopeToast = props.__scopeToast,
    onFocusFromOutsideViewport = props.onFocusFromOutsideViewport,
    proxyProps = _objectWithoutProperties(props, _excluded);
  var context = useToastProviderContext(FOCUS_PROXY_NAME, __scopeToast);
  return /*#__PURE__*/_jsx(VisuallyHidden, _objectSpread(_objectSpread({
    "aria-hidden": true,
    tabIndex: 0
  }, proxyProps), {}, {
    ref: forwardedRef
    // Avoid page scrolling when focus is on the focus proxy
    ,
    style: {
      position: 'fixed'
    },
    onFocus: function onFocus(event) {
      var _context$viewport;
      var prevFocusedElement = event.relatedTarget;
      var isFocusFromOutsideViewport = !((_context$viewport = context.viewport) !== null && _context$viewport !== void 0 && _context$viewport.contains(prevFocusedElement));
      if (isFocusFromOutsideViewport) onFocusFromOutsideViewport();
    }
  }));
});
FocusProxy.displayName = FOCUS_PROXY_NAME;
/* -----------------------------------------------------------------------------------------------*/

var ToastViewport = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  var __scopeToast = props.__scopeToast,
    _props$hotkey = props.hotkey,
    hotkey = _props$hotkey === void 0 ? VIEWPORT_DEFAULT_HOTKEY : _props$hotkey,
    _props$label2 = props.label,
    label = _props$label2 === void 0 ? 'Notifications ({hotkey})' : _props$label2,
    viewportProps = _objectWithoutProperties(props, _excluded2);
  var context = useToastProviderContext(VIEWPORT_NAME, __scopeToast);
  var getItems = useCollection(__scopeToast);
  var wrapperRef = React.useRef(null);
  var headFocusProxyRef = React.useRef(null);
  var tailFocusProxyRef = React.useRef(null);
  var ref = React.useRef(null);
  var composedRefs = useComposedRefs(forwardedRef, ref, context.onViewportChange);
  var hotkeyLabel = hotkey.join('+').replace(/Key/g, '').replace(/Digit/g, '');
  var hasToasts = context.toastCount > 0;
  React.useEffect(function () {
    var handleKeyDown = function handleKeyDown(event) {
      var _ref$current;
      // we use `event.code` as it is consistent regardless of meta keys that were pressed.
      // for example, `event.key` for `Control+Alt+t` is `†` and `t !== †`
      var isHotkeyPressed = hotkey.every(function (key) {
        return event[key] || event.code === key;
      });
      if (isHotkeyPressed) (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.focus();
    };
    document.addEventListener('keydown', handleKeyDown);
    return function () {
      return document.removeEventListener('keydown', handleKeyDown);
    };
  }, [hotkey]);

  /**
   * Returns a list of potential tabbable candidates.
   *
   * NOTE: This is only a close approximation. For example it doesn't take into account cases like when
   * elements are not visible. This cannot be worked out easily by just reading a property, but rather
   * necessitate runtime knowledge (computed styles, etc). We deal with these cases separately.
   *
   * See: https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker
   * Credit: https://github.com/discord/focus-layers/blob/master/src/util/wrapFocus.tsx#L1
   */
  function getTabbableCandidates(container) {
    var nodes = [];
    var walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
      acceptNode: function acceptNode(node) {
        var isHiddenInput = node.tagName === 'INPUT' && node.type === 'hidden';
        if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
        // `.tabIndex` is not the same as the `tabindex` attribute. It works on the
        // runtime's understanding of tabbability, so this automatically accounts
        // for any kind of element that could be tabbed to.
        return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    while (walker.nextNode()) nodes.push(walker.currentNode);
    // we do not take into account the order of nodes with positive `tabIndex` as it
    // hinders accessibility to have tab order different from visual order.
    return nodes;
  }
  var getSortedTabbableCandidates = React.useCallback(function (_ref) {
    var tabbingDirection = _ref.tabbingDirection;
    var toastItems = getItems();
    var tabbableCandidates = toastItems.map(function (toastItem) {
      var toastNode = toastItem.ref.current;
      var toastTabbableCandidates = [toastNode].concat(_toConsumableArray(getTabbableCandidates(toastNode)));
      return tabbingDirection === 'forwards' ? toastTabbableCandidates : toastTabbableCandidates.reverse();
    });
    return (tabbingDirection === 'forwards' ? tabbableCandidates.reverse() : tabbableCandidates).flat();
  }, [getItems]);
  function focusFirst(candidates) {
    var previouslyFocusedElement = document.activeElement;
    return candidates.some(function (candidate) {
      // if focus is already where we want to go, we don't want to keep going through the candidates
      if (candidate === previouslyFocusedElement) return true;
      candidate.focus();
      return document.activeElement !== previouslyFocusedElement;
    });
  }
  React.useEffect(function () {
    var viewport = ref.current;
    // We programmatically manage tabbing as we are unable to influence
    // the source order with portals, this allows us to reverse the
    // tab order so that it runs from most recent toast to least
    if (viewport) {
      var handleKeyDown = function handleKeyDown(event) {
        var isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
        var isTabKey = event.key === 'Tab' && !isMetaKey;
        if (isTabKey) {
          var focusedElement = document.activeElement;
          var isTabbingBackwards = event.shiftKey;
          var targetIsViewport = event.target === viewport;

          // If we're back tabbing after jumping to the viewport then we simply
          // proxy focus out to the preceding document
          if (targetIsViewport && isTabbingBackwards) {
            var _headFocusProxyRef$cu;
            (_headFocusProxyRef$cu = headFocusProxyRef.current) === null || _headFocusProxyRef$cu === void 0 || _headFocusProxyRef$cu.focus();
            return;
          }
          var tabbingDirection = isTabbingBackwards ? 'backwards' : 'forwards';
          var sortedCandidates = getSortedTabbableCandidates({
            tabbingDirection: tabbingDirection
          });
          var index = sortedCandidates.findIndex(function (candidate) {
            return candidate === focusedElement;
          });
          if (focusFirst(sortedCandidates.slice(index + 1))) {
            event.preventDefault();
          } else {
            var _headFocusProxyRef$cu2, _tailFocusProxyRef$cu;
            // If we can't focus that means we're at the edges so we
            // proxy to the corresponding exit point and let the browser handle
            // tab/shift+tab keypress and implicitly pass focus to the next valid element in the document
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            isTabbingBackwards ? (_headFocusProxyRef$cu2 = headFocusProxyRef.current) === null || _headFocusProxyRef$cu2 === void 0 ? void 0 : _headFocusProxyRef$cu2.focus() : (_tailFocusProxyRef$cu = tailFocusProxyRef.current) === null || _tailFocusProxyRef$cu === void 0 ? void 0 : _tailFocusProxyRef$cu.focus();
          }
        }
      };

      // Toasts are not in the viewport React tree so we need to bind DOM events
      viewport.addEventListener('keydown', handleKeyDown);
      return function () {
        return viewport.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [getItems, getSortedTabbableCandidates]);
  return /*#__PURE__*/_jsxs(DismissableLayer.Branch, {
    ref: wrapperRef,
    role: "region",
    "aria-label": label.replace('{hotkey}', hotkeyLabel)
    // Ensure virtual cursor from landmarks menus triggers focus/blur for pause/resume
    ,
    tabIndex: -1
    // incase list has size when empty (e.g. padding), we remove pointer events so
    // it doesn't prevent interactions with page elements that it overlays
    ,
    style: {
      pointerEvents: hasToasts ? undefined : 'none'
    },
    children: [hasToasts && /*#__PURE__*/_jsx(FocusProxy, {
      ref: headFocusProxyRef,
      onFocusFromOutsideViewport: function onFocusFromOutsideViewport() {
        var tabbableCandidates = getSortedTabbableCandidates({
          tabbingDirection: 'forwards'
        });
        focusFirst(tabbableCandidates);
      }
    }), /*#__PURE__*/_jsx(Collection.Slot, {
      scope: __scopeToast,
      children: /*#__PURE__*/_jsx(Primitive.ol, _objectSpread(_objectSpread({
        tabIndex: -1
      }, viewportProps), {}, {
        ref: composedRefs
      }))
    }), hasToasts && /*#__PURE__*/_jsx(FocusProxy, {
      ref: tailFocusProxyRef,
      onFocusFromOutsideViewport: function onFocusFromOutsideViewport() {
        var tabbableCandidates = getSortedTabbableCandidates({
          tabbingDirection: 'backwards'
        });
        focusFirst(tabbableCandidates);
      }
    })]
  });
});
ToastViewport.displayName = VIEWPORT_NAME;

/* -------------------------------------------------------------------------------------------------
 * Toast
 * -----------------------------------------------------------------------------------------------*/

var TOAST_NAME = 'Toast';
var TOAST_SWIPE_START = 'toast.swipeStart';
var TOAST_SWIPE_MOVE = 'toast.swipeMove';
var TOAST_SWIPE_CANCEL = 'toast.swipeCancel';
var TOAST_SWIPE_END = 'toast.swipeEnd';
var Toast = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  var forceMount = props.forceMount,
    openProp = props.open,
    defaultOpen = props.defaultOpen,
    onOpenChange = props.onOpenChange,
    toastProps = _objectWithoutProperties(props, _excluded3);
  var _useControllableState = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen,
      onChange: onOpenChange
    }),
    _useControllableState2 = _slicedToArray(_useControllableState, 2),
    _useControllableState3 = _useControllableState2[0],
    open = _useControllableState3 === void 0 ? true : _useControllableState3,
    setOpen = _useControllableState2[1];
  return /*#__PURE__*/_jsx(Presence, {
    present: forceMount || open,
    children: /*#__PURE__*/_jsx(ToastImpl, _objectSpread(_objectSpread({
      open: open
    }, toastProps), {}, {
      ref: forwardedRef,
      onClose: function onClose() {
        return setOpen(false);
      },
      onSwipeStart: composeEventHandlers(props.onSwipeStart, function (event) {
        event.currentTarget.setAttribute('data-swipe', 'start');
      }),
      onSwipeMove: composeEventHandlers(props.onSwipeMove, function (event) {
        var _event$detail$delta = event.detail.delta,
          x = _event$detail$delta.x,
          y = _event$detail$delta.y;
        event.currentTarget.setAttribute('data-swipe', 'move');
        event.currentTarget.style.setProperty('--radix-toast-swipe-move-x', "".concat(x, "px"));
        event.currentTarget.style.setProperty('--radix-toast-swipe-move-y', "".concat(y, "px"));
      }),
      onSwipeCancel: composeEventHandlers(props.onSwipeCancel, function (event) {
        event.currentTarget.setAttribute('data-swipe', 'cancel');
        event.currentTarget.style.removeProperty('--radix-toast-swipe-move-x');
        event.currentTarget.style.removeProperty('--radix-toast-swipe-move-y');
        event.currentTarget.style.removeProperty('--radix-toast-swipe-end-x');
        event.currentTarget.style.removeProperty('--radix-toast-swipe-end-y');
      }),
      onSwipeEnd: composeEventHandlers(props.onSwipeEnd, function (event) {
        var _event$detail$delta2 = event.detail.delta,
          x = _event$detail$delta2.x,
          y = _event$detail$delta2.y;
        event.currentTarget.setAttribute('data-swipe', 'end');
        event.currentTarget.style.removeProperty('--radix-toast-swipe-move-x');
        event.currentTarget.style.removeProperty('--radix-toast-swipe-move-y');
        event.currentTarget.style.setProperty('--radix-toast-swipe-end-x', "".concat(x, "px"));
        event.currentTarget.style.setProperty('--radix-toast-swipe-end-y', "".concat(y, "px"));
        setOpen(false);
      })
    }))
  });
});
Toast.displayName = TOAST_NAME;

/* -----------------------------------------------------------------------------------------------*/

var _createToastContext3 = createToastContext(TOAST_NAME, {
    onClose: function onClose() {}
  }),
  _createToastContext4 = _slicedToArray(_createToastContext3, 2),
  ToastInteractiveProvider = _createToastContext4[0],
  useToastInteractiveContext = _createToastContext4[1];
var isDeltaInDirection = function isDeltaInDirection(delta, direction) {
  var threshold = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var deltaX = Math.abs(delta.x);
  var deltaY = Math.abs(delta.y);
  var isDeltaX = deltaX > deltaY;
  if (direction === 'left' || direction === 'right') {
    return isDeltaX && deltaX > threshold;
  } else {
    return !isDeltaX && deltaY > threshold;
  }
};
function handleAndDispatchCustomEvent(name, handler, detail, _ref2) {
  var discrete = _ref2.discrete;
  var currentTarget = detail.originalEvent.currentTarget;
  var event = new CustomEvent(name, {
    bubbles: true,
    cancelable: true,
    detail: detail
  });
  if (handler) currentTarget.addEventListener(name, handler, {
    once: true
  });
  if (discrete) {
    dispatchDiscreteCustomEvent(currentTarget, event);
  } else {
    currentTarget.dispatchEvent(event);
  }
}

/* -----------------------------------------------------------------------------------------------*/

var ToastAnnounce = function ToastAnnounce(props) {
  var __scopeToast = props.__scopeToast,
    children = props.children,
    announceProps = _objectWithoutProperties(props, _excluded4);
  var context = useToastProviderContext(TOAST_NAME, __scopeToast);
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    renderAnnounceText = _React$useState6[0],
    setRenderAnnounceText = _React$useState6[1];
  var _React$useState7 = React.useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    isAnnounced = _React$useState8[0],
    setIsAnnounced = _React$useState8[1];
  function useNextFrame() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
    var fn = useCallbackRef(callback);
    useLayoutEffect(function () {
      var raf1 = 0;
      var raf2 = 0;
      raf1 = window.requestAnimationFrame(function () {
        return raf2 = window.requestAnimationFrame(fn);
      });
      return function () {
        window.cancelAnimationFrame(raf1);
        window.cancelAnimationFrame(raf2);
      };
    }, [fn]);
  }

  // render text content in the next frame to ensure toast is announced in NVDA
  useNextFrame(function () {
    return setRenderAnnounceText(true);
  });

  // cleanup after announcing
  React.useEffect(function () {
    var timer = window.setTimeout(function () {
      return setIsAnnounced(true);
    }, 1000);
    return function () {
      return window.clearTimeout(timer);
    };
  }, []);
  return isAnnounced ? null : /*#__PURE__*/_jsx(Portal, {
    asChild: true,
    children: /*#__PURE__*/_jsx(VisuallyHidden, _objectSpread(_objectSpread({}, announceProps), {}, {
      children: renderAnnounceText && /*#__PURE__*/_jsxs(_Fragment, {
        children: [context.label, " ", children]
      })
    }))
  });
};
/* -----------------------------------------------------------------------------------------------*/

var ToastImpl = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  var __scopeToast = props.__scopeToast,
    _props$type = props.type,
    type = _props$type === void 0 ? 'foreground' : _props$type,
    durationProp = props.duration,
    open = props.open,
    onClose = props.onClose,
    onEscapeKeyDown = props.onEscapeKeyDown,
    onSwipeStart = props.onSwipeStart,
    onSwipeMove = props.onSwipeMove,
    onSwipeCancel = props.onSwipeCancel,
    onSwipeEnd = props.onSwipeEnd,
    toastProps = _objectWithoutProperties(props, _excluded5);
  var context = useToastProviderContext(TOAST_NAME, __scopeToast);
  var _React$useState9 = React.useState(null),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    node = _React$useState10[0],
    setNode = _React$useState10[1];
  var composedRefs = useComposedRefs(forwardedRef, function (node) {
    return setNode(node);
  });
  var pointerStartRef = React.useRef(null);
  var swipeDeltaRef = React.useRef(null);
  var duration = durationProp || context.duration;
  var closeTimerStartTimeRef = React.useRef(0);
  var closeTimerRemainingTimeRef = React.useRef(duration);
  var closeTimerRef = React.useRef(0);
  var onToastAdd = context.onToastAdd,
    onToastRemove = context.onToastRemove;
  var handleClose = useCallbackRef(function () {
    var _context$viewport2;
    // focus viewport if focus is within toast to read the remaining toast
    // count to SR users and ensure focus isn't lost
    var isFocusInToast = node === null || node === void 0 ? void 0 : node.contains(document.activeElement);
    if (isFocusInToast) (_context$viewport2 = context.viewport) === null || _context$viewport2 === void 0 || _context$viewport2.focus();
    onClose();
  });
  var startTimer = React.useCallback(function (duration) {
    if (!duration || duration === Infinity) return;
    window.clearTimeout(closeTimerRef.current);
    closeTimerStartTimeRef.current = new Date().getTime();
    closeTimerRef.current = window.setTimeout(handleClose, duration);
  }, [handleClose]);
  React.useEffect(function () {
    var viewport = context.viewport;
    if (viewport) {
      var handleResume = function handleResume() {
        startTimer(closeTimerRemainingTimeRef.current);
      };
      var handlePause = function handlePause() {
        var elapsedTime = new Date().getTime() - closeTimerStartTimeRef.current;
        closeTimerRemainingTimeRef.current = closeTimerRemainingTimeRef.current - elapsedTime;
        window.clearTimeout(closeTimerRef.current);
      };
      viewport.addEventListener(VIEWPORT_PAUSE, handlePause);
      viewport.addEventListener(VIEWPORT_RESUME, handleResume);
      return function () {
        viewport.removeEventListener(VIEWPORT_PAUSE, handlePause);
        viewport.removeEventListener(VIEWPORT_RESUME, handleResume);
      };
    }
  }, [context.viewport, duration, startTimer]);
  function isHTMLElement(node) {
    return node.nodeType === node.ELEMENT_NODE;
  }

  // start timer when toast opens or duration changes.
  // we include `open` in deps because closed !== unmounted when animating
  // so it could reopen before being completely unmounted
  React.useEffect(function () {
    if (open && !context.isClosePausedRef.current) startTimer(duration);
  }, [open, duration, context.isClosePausedRef, startTimer]);
  React.useEffect(function () {
    onToastAdd();
    return function () {
      return onToastRemove();
    };
  }, [onToastAdd, onToastRemove]);
  function getAnnounceTextContent(container) {
    var textContent = [];
    var childNodes = Array.from(container.childNodes);
    childNodes.forEach(function (node) {
      if (node.nodeType === node.TEXT_NODE && node.textContent) textContent.push(node.textContent);
      if (isHTMLElement(node)) {
        var isHidden = node.ariaHidden || node.hidden || node.style.display === 'none';
        var isExcluded = node.dataset.radixToastAnnounceExclude === '';
        if (!isHidden) {
          if (isExcluded) {
            var altText = node.dataset.radixToastAnnounceAlt;
            if (altText) textContent.push(altText);
          } else {
            textContent.push.apply(textContent, _toConsumableArray(getAnnounceTextContent(node)));
          }
        }
      }
    });

    // We return a collection of text rather than a single concatenated string.
    // This allows SR VO to naturally pause break between nodes while announcing.
    return textContent;
  }
  var announceTextContent = React.useMemo(function () {
    return node ? getAnnounceTextContent(node) : null;
  }, [node]);
  if (!context.viewport) return null;
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [announceTextContent && /*#__PURE__*/_jsx(ToastAnnounce, {
      __scopeToast: __scopeToast
      // Toasts are always role=status to avoid stuttering issues with role=alert in SRs.
      ,
      role: "status",
      "aria-live": type === 'foreground' ? 'assertive' : 'polite',
      "aria-atomic": true,
      children: announceTextContent
    }), /*#__PURE__*/_jsx(ToastInteractiveProvider, {
      scope: __scopeToast,
      onClose: handleClose,
      children: /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/_jsx(Collection.ItemSlot, {
        scope: __scopeToast,
        children: /*#__PURE__*/_jsx(DismissableLayer.Root, {
          asChild: true,
          onEscapeKeyDown: composeEventHandlers(onEscapeKeyDown, function () {
            if (!context.isFocusedToastEscapeKeyDownRef.current) handleClose();
            context.isFocusedToastEscapeKeyDownRef.current = false;
          }),
          children: /*#__PURE__*/_jsx(Primitive.li, _objectSpread(_objectSpread({
            // Ensure toasts are announced as status list or status when focused
            role: "status",
            "aria-live": "off",
            "aria-atomic": true,
            tabIndex: 0,
            "data-state": open ? 'open' : 'closed',
            "data-swipe-direction": context.swipeDirection
          }, toastProps), {}, {
            ref: composedRefs,
            style: _objectSpread({
              userSelect: 'none',
              touchAction: 'none'
            }, props.style),
            onKeyDown: composeEventHandlers(props.onKeyDown, function (event) {
              if (event.key !== 'Escape') return;
              onEscapeKeyDown === null || onEscapeKeyDown === void 0 || onEscapeKeyDown(event.nativeEvent);
              if (!event.nativeEvent.defaultPrevented) {
                context.isFocusedToastEscapeKeyDownRef.current = true;
                handleClose();
              }
            }),
            onPointerDown: composeEventHandlers(props.onPointerDown, function (event) {
              if (event.button !== 0) return;
              pointerStartRef.current = {
                x: event.clientX,
                y: event.clientY
              };
            }),
            onPointerMove: composeEventHandlers(props.onPointerMove, function (event) {
              if (!pointerStartRef.current) return;
              var x = event.clientX - pointerStartRef.current.x;
              var y = event.clientY - pointerStartRef.current.y;
              var hasSwipeMoveStarted = Boolean(swipeDeltaRef.current);
              var isHorizontalSwipe = ['left', 'right'].includes(context.swipeDirection);
              var clamp = ['left', 'up'].includes(context.swipeDirection) ? Math.min : Math.max;
              var clampedX = isHorizontalSwipe ? clamp(0, x) : 0;
              var clampedY = !isHorizontalSwipe ? clamp(0, y) : 0;
              var moveStartBuffer = event.pointerType === 'touch' ? 10 : 2;
              var delta = {
                x: clampedX,
                y: clampedY
              };
              var eventDetail = {
                originalEvent: event,
                delta: delta
              };
              if (hasSwipeMoveStarted) {
                swipeDeltaRef.current = delta;
                handleAndDispatchCustomEvent(TOAST_SWIPE_MOVE, onSwipeMove, eventDetail, {
                  discrete: false
                });
              } else if (isDeltaInDirection(delta, context.swipeDirection, moveStartBuffer)) {
                swipeDeltaRef.current = delta;
                handleAndDispatchCustomEvent(TOAST_SWIPE_START, onSwipeStart, eventDetail, {
                  discrete: false
                });
                event.target.setPointerCapture(event.pointerId);
              } else if (Math.abs(x) > moveStartBuffer || Math.abs(y) > moveStartBuffer) {
                // User is swiping in wrong direction so we disable swipe gesture
                // for the current pointer down interaction
                pointerStartRef.current = null;
              }
            }),
            onPointerUp: composeEventHandlers(props.onPointerUp, function (event) {
              var delta = swipeDeltaRef.current;
              var target = event.target;
              if (target.hasPointerCapture(event.pointerId)) {
                target.releasePointerCapture(event.pointerId);
              }
              swipeDeltaRef.current = null;
              pointerStartRef.current = null;
              if (delta) {
                var toast = event.currentTarget;
                var eventDetail = {
                  originalEvent: event,
                  delta: delta
                };
                if (isDeltaInDirection(delta, context.swipeDirection, context.swipeThreshold)) {
                  handleAndDispatchCustomEvent(TOAST_SWIPE_END, onSwipeEnd, eventDetail, {
                    discrete: true
                  });
                } else {
                  handleAndDispatchCustomEvent(TOAST_SWIPE_CANCEL, onSwipeCancel, eventDetail, {
                    discrete: true
                  });
                }
                // Prevent click event from triggering on items within the toast when
                // pointer up is part of a swipe gesture
                toast.addEventListener('click', function (event) {
                  return event.preventDefault();
                }, {
                  once: true
                });
              }
            })
          }))
        })
      }), context.viewport)
    })]
  });
});

/* -------------------------------------------------------------------------------------------------
 * ToastTitle
 * -----------------------------------------------------------------------------------------------*/

var TITLE_NAME = 'ToastTitle';
var ToastTitle = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var __scopeToast = props.__scopeToast,
    titleProps = _objectWithoutProperties(props, _excluded6);
  return /*#__PURE__*/_jsx(Primitive.div, _objectSpread(_objectSpread({}, titleProps), {}, {
    ref: forwardedRef
  }));
});
ToastTitle.displayName = TITLE_NAME;

/* -------------------------------------------------------------------------------------------------
 * ToastDescription
 * -----------------------------------------------------------------------------------------------*/

var DESCRIPTION_NAME = 'ToastDescription';
var ToastDescription = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var __scopeToast = props.__scopeToast,
    descriptionProps = _objectWithoutProperties(props, _excluded7);
  return /*#__PURE__*/_jsx(Primitive.div, _objectSpread(_objectSpread({}, descriptionProps), {}, {
    ref: forwardedRef
  }));
});
ToastDescription.displayName = DESCRIPTION_NAME;

/* ---------------------------------------------------------------------------------------------- */

var ToastAnnounceExclude = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var __scopeToast = props.__scopeToast,
    altText = props.altText,
    announceExcludeProps = _objectWithoutProperties(props, _excluded8);
  return /*#__PURE__*/_jsx(Primitive.div, _objectSpread(_objectSpread({
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": altText || undefined
  }, announceExcludeProps), {}, {
    ref: forwardedRef
  }));
});
/* ---------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------
 * ToastClose
 * -----------------------------------------------------------------------------------------------*/

var CLOSE_NAME = 'ToastClose';
var ToastClose = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  var __scopeToast = props.__scopeToast,
    closeProps = _objectWithoutProperties(props, _excluded9);
  var interactiveContext = useToastInteractiveContext(CLOSE_NAME, __scopeToast);
  return /*#__PURE__*/_jsx(ToastAnnounceExclude, {
    asChild: true,
    children: /*#__PURE__*/_jsx(Primitive.button, _objectSpread(_objectSpread({
      type: "button"
    }, closeProps), {}, {
      ref: forwardedRef,
      onClick: composeEventHandlers(props.onClick, interactiveContext.onClose)
    }))
  });
});
ToastClose.displayName = CLOSE_NAME;

/* -------------------------------------------------------------------------------------------------
 * ToastAction
 * -----------------------------------------------------------------------------------------------*/

var ACTION_NAME = 'ToastAction';
var ToastAction = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  var altText = props.altText,
    actionProps = _objectWithoutProperties(props, _excluded10);
  if (!altText.trim()) {
    console.error("Invalid prop `altText` supplied to `".concat(ACTION_NAME, "`. Expected non-empty `string`."));
    return null;
  }
  return /*#__PURE__*/_jsx(ToastAnnounceExclude, {
    altText: altText,
    asChild: true,
    children: /*#__PURE__*/_jsx(ToastClose, _objectSpread(_objectSpread({}, actionProps), {}, {
      ref: forwardedRef
    }))
  });
});
ToastAction.displayName = ACTION_NAME;
var Provider = ToastProvider;
var Viewport = ToastViewport;
var Root = Toast;
var Title = ToastTitle;
var Description = ToastDescription;
var Action = ToastAction;
var Close = ToastClose;
export { Action, Close, Description, Provider, Root, Title, Toast, ToastAction, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport, Viewport, createToastScope };