import * as React from 'react';
import React__default, { isValidElement, cloneElement, Children, forwardRef, useState, useRef, useEffect, useMemo, useReducer, useCallback, createContext, useContext } from 'react';
import styled, { keyframes, css, useTheme, ThemeProvider, createGlobalStyle } from 'styled-components';
import { space, typography, layout, variant as variant$1, background, border, position, flexbox, grid, color } from 'styled-system';
import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import { uniqueId as uniqueId$1, noop as noop$1 } from 'lodash';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';
import { Link as Link$1 } from 'react-router-dom';
import noop from 'lodash/noop';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) {
    return function (theme) {
        return get(theme, path, fallback);
    };
};

var rotate$1 = keyframes(templateObject_1$1a || (templateObject_1$1a = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = css(templateObject_2$z || (templateObject_2$z = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate$1);
var Svg = styled.svg(templateObject_3$g || (templateObject_3$g = __makeTemplateObject(["\n  /* align-self: center; // Safari fix */\n  align-self: ", ";\n  fill: ", ";\n  flex-shrink: 0;\n  ", "\n  ", "\n"], ["\n  /* align-self: center; // Safari fix */\n  align-self: ", ";\n  fill: ", ";\n  flex-shrink: 0;\n  ", "\n  ", "\n"])), function (_a) {
    var alignSelf = _a.alignSelf;
    return alignSelf || 'center';
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1$1a, templateObject_2$z, templateObject_3$g;

var Icon$2l = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$2k = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$2j = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$2i = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled.div(templateObject_1$19 || (templateObject_1$19 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n\n  ", "\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ",
    "\n\n  ", "\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, function (_a) {
    var ellipsis = _a.ellipsis;
    return ellipsis &&
        "white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;";
}, space, typography, layout);
Text.defaultProps = {
    color: "text",
    small: false,
    ellipsis: false,
};
var templateObject_1$19;

var TooltipText = styled(Text)(templateObject_1$18 || (templateObject_1$18 = __makeTemplateObject(["\n  text-decoration: ", ";\n  text-underline-offset: 0.1em;\n"], ["\n  text-decoration: ", ";\n  text-underline-offset: 0.1em;\n"])), function (_a) {
    var theme = _a.theme;
    return "underline dotted " + theme.colors.textSubtle;
});
var templateObject_1$18;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var scales$8 = {
    MD: "md",
    SM: "sm",
    XS: "xs",
};
var variants$6 = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
    LIGHT: "light",
};

var _a$4, _b$3;
var scaleVariants$1 = (_a$4 = {},
    _a$4[scales$8.MD] = {
        height: "40px",
        padding: "0 24px",
        fontWeight: "normal",
    },
    _a$4[scales$8.SM] = {
        height: "32px",
        padding: "0 16px",
        fontWeight: "normal",
    },
    _a$4[scales$8.XS] = {
        height: "20px",
        fontSize: "12px",
        padding: "0 8px",
        fontWeight: "normal",
    },
    _a$4);
var styleVariants$2 = (_b$3 = {},
    _b$3[variants$6.PRIMARY] = {
        backgroundColor: "greyPrimary",
        color: "white",
    },
    _b$3[variants$6.SECONDARY] = {
        backgroundColor: "transparent",
        border: "2px solid",
        borderColor: "greyPrimary",
        boxShadow: "none",
        color: "greyPrimary",
        ":disabled": {
            color: "disableGrey",
        },
    },
    _b$3[variants$6.TERTIARY] = {
        backgroundColor: "tertiary",
        boxShadow: "none",
        color: "text",
    },
    _b$3[variants$6.SUBTLE] = {
        backgroundColor: "textSubtle",
        color: "backgroundAlt",
    },
    _b$3[variants$6.DANGER] = {
        backgroundColor: "failure",
        color: "white",
    },
    _b$3[variants$6.SUCCESS] = {
        backgroundColor: "success",
        color: "white",
    },
    _b$3[variants$6.TEXT] = {
        backgroundColor: "transparent",
        color: "greyPrimary",
        boxShadow: "none",
    },
    _b$3[variants$6.LIGHT] = {
        backgroundColor: "input",
        color: "textSubtle",
        boxShadow: "none",
    },
    _b$3);

var getDisabledStyles = function (_a) {
    var $isLoading = _a.$isLoading, theme = _a.theme;
    if ($isLoading === true) {
        return "\n      &:disabled,\n      &.pancake-button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.pancake-button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */
var getOpacity = function (_a) {
    var _b = _a.$isLoading, $isLoading = _b === void 0 ? false : _b;
    return $isLoading ? ".5" : "1";
};
var StyledButton = styled.button(templateObject_1$17 || (templateObject_1$17 = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  border-radius: 20px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n    box-shadow: none;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  border: 0;\n  border-radius: 20px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n    box-shadow: none;\n  }\n\n  ", "\n  ",
    "\n  ",
    "\n  ", "\n  ", "\n"])), getOpacity, getDisabledStyles, variant$1({
    prop: "scale",
    variants: scaleVariants$1,
}), variant$1({
    variants: styleVariants$2,
}), layout, space);
var templateObject_1$17;

var Button = function (props) {
    var startIcon = props.startIcon, endIcon = props.endIcon, external = props.external, className = props.className, isLoading = props.isLoading, disabled = props.disabled, children = props.children, rest = __rest(props, ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    var classNames = className ? [className] : [];
    if (isLoading) {
        classNames.push("pancake-button--loading");
    }
    if (isDisabled && !isLoading) {
        classNames.push("pancake-button--disabled");
    }
    return (React__default.createElement(StyledButton, __assign({ "$isLoading": isLoading, className: classNames.join(" "), disabled: isDisabled }, internalProps, rest),
        React__default.createElement(React__default.Fragment, null,
            isValidElement(startIcon) &&
                cloneElement(startIcon, {
                    mr: "0.5rem",
                }),
            children,
            isValidElement(endIcon) &&
                cloneElement(endIcon, {
                    ml: "0.5rem",
                }))));
};
Button.defaultProps = {
    isLoading: false,
    external: false,
    variant: variants$6.PRIMARY,
    scale: scales$8.MD,
    disabled: false,
};

var IconButton = styled(Button)(templateObject_1$16 || (templateObject_1$16 = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var scale = _a.scale;
    return (scale === "sm" ? "32px" : "48px");
});
var templateObject_1$16;

var Icon$2h = function (props) { return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 14.2619C9.69993 14.2619 7.57238 14.6197 5.98327 15.2327C5.19201 15.5379 4.48317 15.9258 3.95486 16.4076C3.42611 16.8898 3 17.544 3 18.3476C3 20.0992 4.33478 21.5622 6.07901 21.7223L6.21662 21.735C10.0641 22.0883 13.9359 22.0883 17.7834 21.735L17.921 21.7223C19.6652 21.5622 21 20.0992 21 18.3476C21 17.544 20.5739 16.8898 20.0451 16.4076C19.5168 15.9258 18.808 15.5379 18.0167 15.2327C16.4276 14.6197 14.3001 14.2619 12 14.2619ZM5 18.3476C5 18.2991 5.0216 18.1416 5.3025 17.8854C5.58383 17.6289 6.04656 17.3519 6.70302 17.0987C8.00934 16.5948 9.88179 16.2619 12 16.2619C14.1182 16.2619 15.9907 16.5948 17.297 17.0987C17.9534 17.3519 18.4162 17.6289 18.6975 17.8854C18.9784 18.1416 19 18.2991 19 18.3476C19 19.0655 18.453 19.6651 17.7381 19.7307L17.6005 19.7434C13.8747 20.0855 10.1253 20.0855 6.39952 19.7434L6.26191 19.7307C5.54705 19.6651 5 19.0655 5 18.3476Z" }),
    React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.5 7.7619C17.5 10.7995 15.0376 13.2619 12 13.2619C8.96243 13.2619 6.5 10.7995 6.5 7.7619C6.5 4.72433 8.96243 2.2619 12 2.2619C15.0376 2.2619 17.5 4.72433 17.5 7.7619ZM15.5 7.7619C15.5 9.6949 13.933 11.2619 12 11.2619C10.067 11.2619 8.5 9.6949 8.5 7.7619C8.5 5.82891 10.067 4.2619 12 4.2619C13.933 4.2619 15.5 5.82891 15.5 7.7619Z" }))); };

var Icon$2g = function (props) { return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default.createElement("path", { d: "M5.98327 15.2932C7.57238 14.6803 9.69993 14.3224 12 14.3224C14.3001 14.3224 16.4276 14.6803 18.0167 15.2932C18.808 15.5984 19.5168 15.9864 20.0451 16.4682C20.5739 16.9503 21 17.6045 21 18.4081C21 20.1597 19.6652 21.6227 17.921 21.7829L17.7834 21.7955C13.9359 22.1489 10.0641 22.1489 6.21662 21.7955L6.07901 21.7829C4.33478 21.6227 3 20.1597 3 18.4081C3 17.6045 3.42611 16.9503 3.95486 16.4682C4.48317 15.9864 5.19201 15.5984 5.98327 15.2932Z" }),
    React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.7256 1C8.72367 1 7.96795 1.90072 8.15187 2.87568L8.58709 5.18266C7.11275 5.82653 6 6.93833 6 8.33333V9.18182C6 10.3351 6.77077 11.3007 7.84829 11.9526C8.93423 12.6095 10.4033 13 12 13C13.5967 13 15.0658 12.6095 16.1517 11.9526C17.2292 11.3007 18 10.3351 18 9.18182V8.33333C18 6.9309 16.8757 5.81482 15.3888 5.17222L15.8221 2.87568C16.006 1.90072 15.2503 1 14.2483 1C13.3642 1 12.6474 1.70952 12.6474 2.58476V4.53674C12.4347 4.52247 12.2187 4.51515 12 4.51515C11.7724 4.51515 11.5477 4.52308 11.3265 4.53853V2.58476C11.3265 1.70952 10.6098 1 9.7256 1Z" }))); };

var Icon$2f = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$2e = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$2d = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$2c = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$2b = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$2a = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M21 11.1835L9.83 11.1835L14.71 6.30347C15.1 5.91347 15.1 5.27347 14.71 4.88347C14.32 4.49347 13.69 4.49347 13.3 4.88347L6.71 11.4735C6.32 11.8635 6.32 12.4935 6.71 12.8835L13.29 19.4835C13.68 19.8735 14.31 19.8735 14.7 19.4835C15.09 19.0935 15.09 18.4635 14.7 18.0735L9.83 13.1835L21 13.1835C21.55 13.1835 22 12.7335 22 12.1835C22 11.6335 21.55 11.1835 21 11.1835Z" }),
        React__default.createElement("path", { d: "M4 19.1835C3.44771 19.1835 3 18.7358 3 18.1835L3 6.18347C3 5.63119 3.44772 5.18347 4 5.18347C4.55229 5.18347 5 5.63119 5 6.18347L5 18.1835C5 18.7358 4.55228 19.1835 4 19.1835Z" })));
};

var Icon$29 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z" })));
};

var Icon$28 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M3 13.1835H14.17L9.29 18.0635C8.9 18.4535 8.9 19.0935 9.29 19.4835C9.68 19.8735 10.31 19.8735 10.7 19.4835L17.29 12.8935C17.68 12.5035 17.68 11.8735 17.29 11.4835L10.71 4.88347C10.32 4.49347 9.69 4.49347 9.3 4.88347C8.91 5.27347 8.91 5.90347 9.3 6.29347L14.17 11.1835H3C2.45 11.1835 2 11.6335 2 12.1835C2 12.7335 2.45 13.1835 3 13.1835Z" }),
        React__default.createElement("path", { d: "M20 5.18347C20.5523 5.18347 21 5.63119 21 6.18347V18.1835C21 18.7358 20.5523 19.1835 20 19.1835C19.4477 19.1835 19 18.7358 19 18.1835V6.18347C19 5.63119 19.4477 5.18347 20 5.18347Z" })));
};

var Icon$27 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z" })));
};

var Icon$26 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$25 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default.createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React__default.createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$24 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 40 40" }, props),
        React__default.createElement("path", { d: "M14.2487 9.59637L10.7888 7.58546L20.1999 2.08337L29.6387 7.58546L26.1787 9.59637L20.1999 6.13313L14.2487 9.59637ZM32.1022 13.0596V17.1094L35.5622 15.0985V11.0487L32.1022 9.00986L28.6422 11.0208L32.1022 13.0596ZM16.7399 11.0487L20.1999 13.0596L23.6599 11.0487L20.1999 9.00986L16.7399 11.0487ZM29.6387 14.5119L26.1787 12.501L20.1999 15.9643L14.2487 12.501L10.7888 14.5119V18.5617L16.7399 22.0249V28.9514L20.1999 30.9623L23.6599 28.9514V22.0249L29.6387 18.5617V14.5119ZM32.1022 26.9405L26.1511 30.4038V34.4535L35.5899 28.9514V17.9752L32.1022 20.014V26.9405ZM26.1511 27.527L29.611 25.5161V21.4384L26.1511 23.4493V27.527ZM16.7399 31.8561V35.9058L20.1999 37.9168L23.6599 35.9058V31.8561L20.1999 33.867L16.7399 31.8561ZM4.80992 15.0985L8.2699 17.1094V13.0596L11.7299 11.0487L8.29758 9.00986L4.8376 11.0208V15.0985H4.80992ZM8.29758 20.014L4.8376 18.0031V28.9794L14.2764 34.4814V30.4317L8.29758 26.9405V20.014ZM14.2487 23.4773L10.7888 21.4664V25.5161L14.2487 27.527V23.4773Z", fill: "#F1BA0D" })));
};

var Icon$23 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default.createElement("path", { d: "M58.6666 34.1665C58.6666 48.8523 46.7275 59.6665 31.9999 59.6665C17.2723 59.6665 5.33325 48.8523 5.33325 34.1665C5.33325 19.4808 17.2723 8.6665 31.9999 8.6665C46.7275 8.6665 58.6666 19.4808 58.6666 34.1665Z", fill: "#EB8C00" }),
        React__default.createElement("path", { d: "M58.6666 29.8335C58.6666 44.5192 46.7275 55.3335 31.9999 55.3335C17.2723 55.3335 5.33325 44.5192 5.33325 29.8335C5.33325 15.1477 17.2723 4.3335 31.9999 4.3335C46.7275 4.3335 58.6666 15.1477 58.6666 29.8335Z", fill: "#FFD800" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M50.4313 11.0848C48.0923 9.01961 45.3538 7.36511 42.3351 6.21094L7.60376 40.5648C8.9535 43.3887 10.8247 45.9001 13.0998 48.0105L50.4313 11.0848ZM24.6139 54.2485C22.7419 53.762 20.9537 53.0928 19.2734 52.259L55.1875 16.7354C56.1366 18.2849 56.918 19.9495 57.5084 21.7116L24.6139 54.2485Z", fill: "#FFE971" }),
        React__default.createElement("path", { d: "M53.6667 29.5002C53.6667 41.2698 44.0409 49.6668 32.1667 49.6668C20.2926 49.6668 10.6667 41.2698 10.6667 29.5002C10.6667 17.7305 20.2926 9.3335 32.1667 9.3335C44.0409 9.3335 53.6667 17.7305 53.6667 29.5002Z", fill: "#FFC700" }),
        React__default.createElement("path", { d: "M51.6667 20.6615C45.1982 12.2514 33.2898 9.7153 23.8129 15.1469C14.5027 20.483 10.7276 31.6814 14.4875 41.3335C12.0783 38.0902 10.6667 34.0691 10.6667 29.5527C10.6667 17.7524 20.303 9.3335 32.19 9.3335C40.7965 9.33349 48.2231 13.7468 51.6667 20.6615Z", fill: "#FFAF00" }),
        React__default.createElement("path", { d: "M23.4077 30.5L19.8827 34.0117L16.3333 30.5L19.8827 26.9883L23.4077 30.5ZM31.9999 21.9992L38.0708 28.0055L41.6202 24.4938L35.5494 18.5117L31.9999 15L28.4504 18.5117L22.4041 24.4938L25.9536 28.0055L31.9999 21.9992ZM44.1171 26.9883L40.5921 30.5L44.1416 34.0117L47.6666 30.5L44.1171 26.9883ZM31.9999 39.0008L25.9291 32.9945L22.4041 36.5063L28.4749 42.5125L31.9999 46L35.5494 42.4883L41.6202 36.482L38.0708 32.9945L31.9999 39.0008ZM31.9999 34.0117L35.5494 30.5L31.9999 26.9883L28.4504 30.5L31.9999 34.0117Z", fill: "#191326" })));
};

var Icon$22 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.7792 21.9928 11.5602 21.9788 11.343C18.6515 16.824 10.797 19.3967 6.32085 20.232C7.93393 21.3469 9.8907 22 12 22ZM3.6987 17.5775C2.62604 15.9842 2 14.0652 2 12C2 6.47715 6.47715 2 12 2C16.6548 2 20.5667 5.18031 21.6815 9.48656C20.7816 11.0755 19.4244 12.3811 17.8282 13.4444V7.27607C17.8282 6.86948 17.4986 6.53988 17.092 6.53988H15.3742C14.9676 6.53988 14.638 6.86948 14.638 7.27607V15.0795C14.638 15.1034 14.6392 15.1269 14.6413 15.1501C14.2758 15.3076 13.906 15.4562 13.5337 15.5963V9.36196C13.5337 8.95537 13.2041 8.62577 12.7975 8.62577H11.0798C10.6732 8.62577 10.3436 8.95537 10.3436 9.36196V16.592C9.97218 16.6864 9.60348 16.7732 9.23926 16.8528V11.4479C9.23926 11.0413 8.90966 10.7117 8.50307 10.7117H6.78528C6.37869 10.7117 6.04908 11.0413 6.04908 11.4479V17.3941C5.17906 17.4987 4.38348 17.5575 3.6987 17.5775Z" })));
};

var Icon$21 = function (props) {
    var id = uniqueId("svg");
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default.createElement("g", { clipPath: "url(#" + id + ")" },
            React__default.createElement("rect", { width: "32", height: "40", rx: "5.33333", transform: "matrix(-0.866025 -0.5 -0.5 0.866025 65.6667 24.29)", fill: "#7645D9" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M47.988 26.8647C48.913 25.2625 50.9618 24.7135 52.5641 25.6386C54.3798 26.6868 54.7973 29.1264 53.4335 30.7188L49.9995 34.7284C51.4808 37.0281 52.089 39.7267 50.7938 41.97C49.6296 43.9866 47.3505 44.856 44.9724 44.9153C42.5675 44.9753 39.8188 44.2341 37.2483 42.7501C34.6778 41.266 32.6615 39.2561 31.5111 37.1434C30.3734 35.0542 29.9868 32.6458 31.1511 30.6292C32.4387 28.3989 35.0576 27.5731 37.7711 27.694L39.534 22.694C40.2312 20.7167 42.5527 19.8585 44.3684 20.9068C45.9706 21.8318 46.5196 23.8807 45.5945 25.4829L43.4518 29.1943C43.8691 29.3931 44.2848 29.6114 44.6966 29.8492C45.0944 30.0788 45.4782 30.3206 45.847 30.573L47.988 26.8647ZM39.6099 34.0874C39.0216 35.1064 37.9767 35.6046 37.2761 35.2001C36.5755 34.7956 36.4845 33.6416 37.0728 32.6226C37.6612 31.6035 38.7061 31.1053 39.4067 31.5098C40.1073 31.9143 40.1982 33.0683 39.6099 34.0874ZM43.9649 39.0619C44.6655 39.4663 45.7104 38.9681 46.2987 37.9491C46.8871 36.93 46.7961 35.776 46.0955 35.3715C45.3949 34.9671 44.35 35.4653 43.7616 36.4843C43.1733 37.5034 43.2643 38.6574 43.9649 39.0619Z", fill: "#523193" }),
            React__default.createElement("path", { opacity: "0.7", d: "M49.6666 15.0524L42.5726 10.9566C40.0217 9.48387 36.7599 10.3579 35.2871 12.9088L20.6205 38.3122C19.1477 40.8631 20.0217 44.1249 22.5726 45.5976L26.7339 48.0002L44.3333 48.0002C47.2788 48.0002 49.6666 45.6124 49.6666 42.6668L49.6666 15.0524Z", fill: "#452A7A" }),
            React__default.createElement("path", { d: "M33.7371 52.0434L43.094 46.6412C45.6449 45.1684 46.5189 41.9066 45.0461 39.3557L32.532 17.6807L20.6205 38.3121C19.1477 40.863 20.0217 44.1249 22.5726 45.5976L33.7371 52.0434Z", fill: "#452A7A" }),
            React__default.createElement("rect", { x: "16", y: "6.3335", width: "32", height: "40", rx: "5.33333", fill: "#9A6AFF" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.3938 16.122C33.3938 14.113 35.0224 12.4844 37.0314 12.4844C39.3079 12.4844 41.0251 14.5519 40.6071 16.7897L39.5548 22.4247C42.1963 23.783 44.2335 25.9905 44.2335 28.8033C44.2335 31.3318 42.5623 33.3867 40.3582 34.7336C38.1293 36.0958 35.142 36.8911 31.919 36.8911C28.696 36.8911 25.7087 36.0958 23.4798 34.7336C21.2757 33.3867 19.6045 31.3318 19.6045 28.8033C19.6045 26.0068 21.6189 23.8083 24.2362 22.4489L23.1794 16.7898C22.7615 14.5519 24.4786 12.4844 26.7552 12.4844C28.7642 12.4844 30.3928 14.113 30.3928 16.122L30.3928 20.7755C30.8932 20.7359 31.4026 20.7155 31.919 20.7155C32.4177 20.7155 32.9099 20.7345 33.3938 20.7715V16.122ZM29.4367 27.4631C29.4367 28.7408 28.7246 29.7766 27.8461 29.7766C26.9677 29.7766 26.2556 28.7408 26.2556 27.4631C26.2556 26.1854 26.9677 25.1496 27.8461 25.1496C28.7246 25.1496 29.4367 26.1854 29.4367 27.4631ZM36.233 29.7763C37.1115 29.7763 37.8236 28.7405 37.8236 27.4627C37.8236 26.185 37.1115 25.1492 36.233 25.1492C35.3546 25.1492 34.6425 26.185 34.6425 27.4627C34.6425 28.7405 35.3546 29.7763 36.233 29.7763Z", fill: "#7645D9" }),
            React__default.createElement("path", { opacity: "0.7", d: "M21.3333 46.3334C18.3878 46.3334 16 43.9456 16 41.0001L16 15.2882L23.4272 11.0001C25.9781 9.52733 29.24 10.4013 30.7127 12.9522L45.3794 38.3556C46.8521 40.9065 45.9781 44.1684 43.4273 45.6411L42.2282 46.3334H21.3333Z", fill: "#7645D9" }),
            React__default.createElement("rect", { x: "-1.66675", y: "24.29", width: "32", height: "40", rx: "5.33333", transform: "rotate(-30 -1.66675 24.29)", fill: "#CAB3F8" }),
            React__default.createElement("path", { opacity: "0.7", fillRule: "evenodd", clipRule: "evenodd", d: "M19.5708 25.8631C18.6224 24.2205 19.1853 22.12 20.828 21.1715C22.6894 20.0968 25.0695 20.9767 25.7842 23.0038L27.584 28.1082C30.3851 27.9718 33.0929 28.8151 34.4208 31.1151C35.6144 33.1825 35.218 35.6517 34.0517 37.7935C32.8722 39.9595 30.805 42.0202 28.1697 43.5417C25.5344 45.0632 22.7162 45.8231 20.2507 45.7615C17.8126 45.7007 15.476 44.8094 14.2824 42.7419C12.9623 40.4553 13.5715 37.7068 15.0698 35.3595L11.5341 31.2312C10.136 29.5986 10.564 27.0975 12.4255 26.0228C14.0681 25.0743 16.1686 25.6372 17.1171 27.2799L19.3139 31.0849C19.7043 30.8162 20.1112 30.5591 20.5335 30.3153C20.9413 30.0799 21.3527 29.8631 21.7658 29.6649L19.5708 25.8631ZM21.6892 37.0043C22.2924 38.049 22.1991 39.2322 21.4809 39.6469C20.7626 40.0615 19.6913 39.5508 19.0881 38.506C18.485 37.4613 18.5782 36.2781 19.2965 35.8634C20.0148 35.4487 21.086 35.9595 21.6892 37.0043ZM28.3382 35.6877C29.0564 35.273 29.1497 34.0898 28.5465 33.0451C27.9433 32.0003 26.8721 31.4896 26.1538 31.9043C25.4355 32.3189 25.3422 33.5021 25.9454 34.5468C26.5486 35.5916 27.6199 36.1024 28.3382 35.6877Z", fill: "#9A6AFF" }),
            React__default.createElement("g", { opacity: "0.1" },
                React__default.createElement("path", { d: "M13.0716 49.8608L8.23887 41.4903L26.0423 10.6538C27.1289 11.0794 28.0839 11.8629 28.7127 12.952L31.5468 17.8608L13.0716 49.8608Z", fill: "white" }),
                React__default.createElement("path", { d: "M30.936 51.698L26.3172 54.3647L39.4698 31.5838L41.0094 34.2505L30.936 51.698Z", fill: "white" }),
                React__default.createElement("path", { d: "M24.0449 10.2847L7.1336 39.5759L5.59399 36.9092L20.1155 11.7572L21.4272 10.9999C22.2535 10.5229 23.1544 10.292 24.0449 10.2847Z", fill: "white" }))),
        React__default.createElement("defs", null,
            React__default.createElement("clipPath", { id: id },
                React__default.createElement("rect", { width: "64", height: "64", fill: "white" })))));
};

var Icon$20 = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React__default.createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React__default.createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React__default.createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React__default.createElement("g", { mask: "url(#mask0)" },
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React__default.createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React__default.createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React__default.createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React__default.createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$1$ = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 38 48" }, props),
        React__default.createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
            React__default.createElement("g", { transform: "translate(-906.000000, -1406.000000)" },
                React__default.createElement("g", { transform: "translate(906.000000, 1406.000000)" },
                    React__default.createElement("path", { d: "M16.3371722,0.00108030388 C16.3598586,0.0450126618 16.3710218,0.105869781 16.4066718,0.128916263 C16.5087571,0.191334243 16.6151328,0.24644745 16.7250013,0.293842656 C16.8834459,0.365862915 17.0490925,0.421318515 17.203576,0.498380192 C17.3580594,0.575441869 17.4992191,0.669788408 17.6483011,0.75369201 C17.744088,0.807347102 17.8409553,0.85956179 17.9407033,0.904934553 C18.103109,0.978755319 18.2712763,1.04033264 18.4315214,1.11847462 C18.5917664,1.1966166 18.7455297,1.28916263 18.9018137,1.37558695 C18.9273809,1.389991 18.9500672,1.40907637 18.9759945,1.42240011 C19.205019,1.54195374 19.436204,1.65754626 19.6634279,1.78250141 C19.8568023,1.88729088 20.0483762,1.99496117 20.2349087,2.11091379 C20.4354851,2.23586894 20.6274191,2.37522814 20.8265551,2.502704 C20.9410673,2.57472426 21.0649421,2.63378087 21.1805347,2.70472082 C21.4102793,2.84588053 21.6378633,2.99064125 21.8647271,3.13684238 C22.0750263,3.27043996 22.287486,3.40115673 22.4931039,3.54195633 C22.6828773,3.66835189 22.8607673,3.81239241 23.0494604,3.94382938 C23.1596514,4.02161126 23.2817257,4.08282848 23.3915566,4.15989015 C23.549281,4.27296196 23.702324,4.39251559 23.8539267,4.51350963 C23.9641177,4.60101424 24.0642258,4.7011224 24.1780178,4.7853861 C24.4812231,5.01261002 24.7984724,5.22290918 25.0919549,5.46201644 C25.3854375,5.7011237 25.6529927,5.96615825 25.934952,6.21822915 C26.1848623,6.44113186 26.4470161,6.65035071 26.6893643,6.88117564 C27.0455044,7.22039106 27.388681,7.57293023 27.737259,7.91970777 C27.9803274,8.16169584 28.2291574,8.39864249 28.4653838,8.64711239 C28.6490355,8.84048678 28.7955967,9.07383242 28.9972535,9.24416033 C29.3184638,9.51603681 29.5374054,9.86749567 29.8049607,10.1782631 C30.0289437,10.4368158 30.2417635,10.70041 30.4481016,10.9726465 C30.5968234,11.1689018 30.7858766,11.3327478 30.9356787,11.5297232 C31.1452577,11.8066411 31.3332306,12.1015641 31.5392085,12.3828032 C31.6800081,12.5772579 31.8355719,12.7612697 31.9767316,12.9553643 C32.1049276,13.1310937 32.2241212,13.313305 32.3440349,13.4955162 C32.4700703,13.6863699 32.5921447,13.8801044 32.7156594,14.0716783 C32.7999231,14.2031153 32.8820262,14.3363527 32.9677303,14.4677897 C33.0606365,14.6093095 33.1589441,14.7475884 33.2511301,14.8898284 C33.2983033,14.9618487 33.3382746,15.0399907 33.3796862,15.115972 C33.4617893,15.2664944 33.538851,15.4198975 33.6252753,15.5675391 C33.7116996,15.7151806 33.8024451,15.8455373 33.8881492,15.9859768 C33.9608938,16.0991768 34.0278389,16.2160002 34.0887257,16.3359952 C34.2043182,16.5754626 34.3047864,16.8232123 34.4236199,17.0601589 C34.4978007,17.206 34.6036705,17.3359965 34.6850534,17.4782365 C34.7463472,17.5872613 34.801411,17.6996732 34.8499798,17.8149312 C34.9220001,17.9794975 34.9835774,18.1491052 35.0591987,18.3122311 C35.1459831,18.500204 35.2432104,18.6831355 35.3361165,18.8682275 C35.3440388,18.884072 35.3570024,18.8973957 35.3631241,18.9136003 C35.483398,19.2351708 35.5979102,19.5589018 35.7232254,19.8779516 C35.7952457,20.060883 35.8885119,20.235172 35.9698948,20.4145025 C35.9868196,20.4523131 35.9897004,20.4958854 36.005905,20.5347763 C36.0458762,20.6341643 36.0894485,20.7324719 36.1308601,20.8314998 C36.1410828,20.8529266 36.1485832,20.8755488 36.1531864,20.8988387 C36.1794738,21.0594439 36.2082819,21.2070854 36.2947062,21.3626492 C36.4124593,21.575109 36.4293841,21.841944 36.5042851,22.0806912 C36.5921499,22.3615702 36.6954989,22.6374078 36.7923662,22.9150459 C36.7948394,22.9205627 36.7970034,22.9262131 36.798848,22.9319706 C36.8611455,23.2142901 36.9205622,23.4973297 36.9868209,23.7789289 C37.0588411,24.0936574 37.1409442,24.4073056 37.2194463,24.7209539 C37.2284488,24.756964 37.2511352,24.7872125 37.2554564,24.8217822 C37.3227954,25.2434609 37.3904944,25.6651395 37.4531521,26.0875383 C37.5078875,26.4588027 37.5572213,26.8304273 37.6069153,27.2038523 C37.6566093,27.5772773 37.7390725,27.9474615 37.7462745,28.3201663 C37.76572,29.339253 37.8128933,30.3637412 37.73007,31.376346 C37.6796558,31.9885182 37.6443658,32.6006904 37.5766668,33.2128626 C37.538136,33.5596401 37.4056187,33.8970551 37.3152333,34.2369907 C37.3071902,34.2594194 37.3003387,34.2822577 37.2947075,34.3054099 C37.2352908,34.6619102 37.1931589,35.0227317 37.1121361,35.3741906 C37.0577608,35.6096968 36.9475698,35.8322394 36.8622258,36.0605436 C36.8582647,36.0717068 36.8525031,36.0825098 36.8492622,36.093673 C36.7826434,36.335661 36.7477136,36.5931335 36.6411236,36.8156761 C36.5345337,37.0382187 36.5370544,37.2870486 36.3778896,37.4879852 C36.2875042,37.6014171 36.2586961,37.7623824 36.1949581,37.8985006 C36.0887283,38.1253645 35.9731357,38.347547 35.870867,38.575131 C35.7988467,38.7292543 35.7484325,38.8912999 35.6796532,39.0461435 C35.6252779,39.1682178 35.5608198,39.2856108 35.4960015,39.4026438 C35.4005747,39.5762126 35.3029872,39.7487011 35.2017988,39.9186689 C35.1791124,39.9568396 35.1319391,39.979526 35.106732,40.0169766 C34.9799764,40.2053095 34.8607828,40.3994041 34.7307863,40.5855765 C34.6007897,40.7717489 34.4538684,40.9611622 34.3145092,41.1484148 C34.189554,41.3165821 34.0700004,41.4890707 33.937123,41.6525566 C33.8042456,41.8160426 33.6645263,41.9600831 33.524807,42.1109656 C33.350518,42.2996587 33.1783896,42.4908725 32.9968985,42.6720034 C32.8017236,42.8668182 32.5943053,43.0490295 32.3966097,43.2416837 C32.2572505,43.3778019 32.134816,43.5326455 31.9882548,43.6601214 C31.772194,43.8484543 31.5464105,44.0263444 31.3155856,44.1959521 C31.0847607,44.3655598 30.8474539,44.5153619 30.6126679,44.6748868 C30.4571041,44.7811167 30.3022605,44.888787 30.147417,44.9964573 C29.9414391,45.1404978 29.7415828,45.2924605 29.528763,45.4242576 C29.3883235,45.5114021 29.2251976,45.5618163 29.0793566,45.6403184 C28.8668968,45.7569912 28.6616391,45.8866277 28.4520601,46.0079818 C28.3296321,46.0850929 28.2022384,46.1540227 28.0707128,46.2143198 C27.8773384,46.2939022 27.6746014,46.3471972 27.4790664,46.424619 C27.2835314,46.5020408 27.0919575,46.5971075 26.8993033,46.6853323 C26.883819,46.6925344 26.873376,46.7134202 26.8575316,46.7181016 C26.63859,46.7803991 26.4189282,46.8401759 26.1999866,46.9021133 C26.1434163,46.9177032 26.0879562,46.9370722 26.0339799,46.9600896 C25.9792445,46.9838563 25.9309909,47.0267084 25.8748151,47.0414725 C25.6227442,47.1077312 25.3685127,47.1603059 25.1186024,47.2312459 C24.8424047,47.3090278 24.5701681,47.4015738 24.2961311,47.487638 C24.2849418,47.4915892 24.2735163,47.4948365 24.2619214,47.4973608 C23.8297999,47.5628992 23.3976783,47.6259169 22.9655568,47.6939761 C22.7963092,47.7209837 22.6295823,47.768517 22.461415,47.7908433 C22.23059,47.8210918 21.9972444,47.8326151 21.7656993,47.8585424 C21.5759259,47.8797883 21.3695878,47.818211 21.2053816,47.9798965 C21.1754932,48.0090647 21.1016725,47.9979016 21.0480174,47.9979016 C19.2551931,47.999342 17.4622487,47.9986218 15.6691843,47.9957409 C15.571957,47.9957409 15.4765302,47.932003 15.3782225,47.9046353 C15.3062022,47.8841095 15.2277002,47.8747469 15.152439,47.8603429 C14.9208939,47.8153302 14.6900689,47.768517 14.4581637,47.7253049 C14.370299,47.7091003 14.278113,47.7076599 14.1924089,47.6892947 C14.032524,47.6532846 13.8747996,47.6097124 13.7156348,47.5708214 C13.6576585,47.5567775 13.5971615,47.5524563 13.5399054,47.5369719 C13.3872224,47.4959203 13.2356198,47.4512678 13.083657,47.4076955 C13.0606106,47.4012137 13.0390045,47.3900506 13.015958,47.3842889 C12.7692886,47.3219914 12.5186581,47.2726575 12.27667,47.1955959 C12.0829356,47.1336584 11.9000041,47.0389518 11.7127514,46.957929 C11.6965469,46.9510871 11.6850236,46.933082 11.6688191,46.9273204 C11.4855275,46.8625022 11.2975546,46.8081269 11.1185843,46.7325056 C10.9234094,46.6500424 10.7365168,46.5477736 10.5460232,46.4545074 C10.5255391,46.442729 10.503286,46.4343385 10.4801247,46.4296604 C10.2511003,46.4051735 10.0908552,46.2496098 9.90864393,46.1343774 C9.79628704,46.0665401 9.67946725,46.0063857 9.55898558,45.9543267 C9.41242435,45.8866277 9.25469998,45.8387342 9.11534078,45.7591518 C8.89928,45.6345568 8.69114146,45.489796 8.47868169,45.3551182 C8.36128867,45.2809373 8.23921433,45.2139584 8.12362182,45.1368968 C7.90756104,44.9928563 7.69654168,44.8459349 7.48300161,44.6997338 C7.38829497,44.6349156 7.29034742,44.5740584 7.19924179,44.5045589 C6.98318102,44.3399926 6.76964095,44.1718253 6.55574078,44.0043782 C6.34940274,43.8423326 6.13406216,43.6900098 5.94068777,43.5139202 C5.71526436,43.3083024 5.50856621,43.0796381 5.29250544,42.8635773 C5.0868876,42.6590398 4.86830611,42.4674659 4.67277111,42.2514051 C4.44302648,41.9993342 4.23236723,41.7317789 4.01306554,41.4710656 C3.86902502,41.3007377 3.7228239,41.1325704 3.58094398,40.9600819 C3.51180454,40.8758182 3.45058732,40.7850726 3.38864989,40.6950473 C3.22660431,40.4613416 3.0566365,40.2326772 2.90791467,39.9910493 C2.72786402,39.7000874 2.57158006,39.396522 2.39945164,39.1015991 C2.31374753,38.9543176 2.20715755,38.8192797 2.12613475,38.6694775 C2.04511196,38.5196754 1.99001647,38.3543889 1.91007398,38.2013458 C1.83013149,38.0483028 1.73614505,37.899581 1.64828034,37.7490586 C1.63788264,37.7348678 1.62872626,37.7198079 1.62091264,37.7040459 C1.4988383,37.3846361 1.38000487,37.0634257 1.25432952,36.7454563 C1.18771078,36.5762087 1.110289,36.4120025 1.03502783,36.2452756 C1.01594246,36.2020634 0.993616183,36.1599316 0.978491929,36.115279 C0.933839369,35.9824017 0.886666099,35.8502445 0.850295868,35.7155666 C0.778275609,35.450532 0.715617984,35.183697 0.64503813,34.9186624 C0.619470938,34.8232356 0.58382091,34.7306896 0.55033149,34.6374233 C0.540248654,34.6096955 0.51432136,34.5862889 0.509279942,34.558201 C0.446982418,34.27012 0.378203071,33.982039 0.329229295,33.6910771 C0.293219165,33.4818583 0.320586864,33.2693985 0.201753437,33.0677418 C0.138375609,32.9597114 0.16934432,32.798386 0.154220066,32.6615475 C0.106686695,32.229426 0.031065423,31.7998251 0.0152209661,31.3677036 C-0.00710531421,30.7555314 -0.00530480774,30.1433592 0.0235032958,29.5333476 C0.0465497787,29.0450502 0.0847205159,28.5495508 0.194911512,28.0756575 C0.259729745,27.7958588 0.269812581,27.5041768 0.3583975,27.242023 C0.434738974,27.0162395 0.445542013,26.7897358 0.502438018,26.5686336 C0.559334022,26.3475314 0.682488665,26.1336313 0.769273077,25.9150498 C0.790879155,25.8613947 0.785117534,25.7972966 0.805283206,25.741841 C0.841293336,25.638492 0.884505491,25.5380237 0.92591714,25.4364751 C0.934559571,25.4148691 0.951124231,25.3961438 0.957606054,25.3738175 C1.01810307,25.1649588 1.06347583,24.9503384 1.14125771,24.7483216 C1.20247493,24.5895169 1.3036634,24.4461966 1.3868468,24.2960343 C1.39618779,24.2808907 1.40448923,24.26513 1.41169379,24.2488611 C1.47759232,24.0792534 1.53232772,23.9042441 1.61155,23.7414784 C1.68789148,23.5855545 1.79448146,23.4447549 1.87838506,23.2920719 C1.95688715,23.150192 2.01990487,23.0000298 2.09660645,22.8570696 C2.14245347,22.7786648 2.1927082,22.702922 2.24712879,22.6302058 C2.38180667,22.4371915 2.51936537,22.2456176 2.65260285,22.051523 C2.72858422,21.9406118 2.79340245,21.8217784 2.87226464,21.7130278 C3.02170667,21.50777 3.17222902,21.3025123 3.33211399,21.1051768 C3.61011219,20.7616401 3.88775029,20.4170232 4.18195305,20.0875305 C4.3645244,19.8833531 4.57554376,19.7040226 4.77792069,19.5182104 C5.05087747,19.2661395 5.32059334,19.0119079 5.60615367,18.7749613 C5.78116289,18.6309208 5.98209942,18.514248 6.1711526,18.3849716 C6.254336,18.3280756 6.33463858,18.2672185 6.41962249,18.2128432 C6.6716934,18.052238 6.92628501,17.8984747 7.17583521,17.7335484 C7.36524849,17.607873 7.53197539,17.4379052 7.73543262,17.3460794 C7.95725502,17.2456111 8.17259559,17.1120135 8.44087106,17.1202958 C8.76316172,17.1303787 9.08509227,17.1087726 9.3717329,17.2960253 C9.54170071,17.4072966 9.71346903,17.5156871 9.88307674,17.6276786 C9.90015492,17.6439106 9.91364774,17.6635366 9.92268788,17.6852948 C10.0710496,17.9373657 10.2226523,18.1861957 10.3656125,18.4415075 C10.4376327,18.5715041 10.4927282,18.7123037 10.5622278,18.845181 C10.6587349,19.0302731 10.7674855,19.2092435 10.8600316,19.396136 C10.9352927,19.5480988 10.9875074,19.7115848 11.0627686,19.8642677 C11.1262176,19.9849173 11.1968026,20.1016772 11.274148,20.2139261 C11.4181886,20.4332278 11.558268,20.6536098 11.7105908,20.8664296 C11.9507784,21.2016839 12.1927664,21.5358579 12.4459177,21.8610294 C12.6655794,22.1429887 12.9010857,22.4123445 13.1301101,22.6856614 C13.243542,22.8203392 13.3576941,22.9542969 13.4765276,23.0842935 C13.595361,23.2142901 13.6713424,23.1984456 13.7736111,23.0526046 C13.9057683,22.8635514 14.0526896,22.684221 14.1751241,22.4894062 C14.3094419,22.2751459 14.423594,22.047922 14.5456683,21.8260996 C14.643976,21.6485696 14.7494856,21.4739205 14.8359099,21.2906289 C14.9165726,21.1195808 14.9741888,20.9377297 15.045849,20.7620002 C15.1272319,20.562144 15.2132961,20.3640883 15.2979199,20.1656725 C15.3047618,20.1494679 15.3224068,20.1372245 15.3270881,20.1206598 C15.3922664,19.886594 15.4549241,19.6525282 15.5215428,19.417382 C15.5535918,19.3043102 15.5935631,19.1930389 15.6295732,19.0814075 C15.6458704,19.0496212 15.6597146,19.0166359 15.6709848,18.9827397 C15.7350829,18.5679031 15.7952198,18.1519861 15.8603981,17.7371494 C15.8845249,17.5844664 15.9226957,17.4343042 15.9482628,17.2819813 C15.97383,17.1296585 16.0062392,16.9863382 16.0065993,16.8383365 C16.0065993,15.6334376 16.0184826,14.4281786 15.9929154,13.2239998 C15.9855009,12.7647966 15.926065,12.3079131 15.8157456,11.8620967 C15.7437253,11.5740157 15.7095157,11.2913362 15.6670237,11.0036153 C15.6277727,10.7346196 15.5914025,10.4537406 15.4812115,10.2113924 C15.3955074,10.0230594 15.3868649,9.83760727 15.347974,9.64891419 C15.3044017,9.43681453 15.273433,9.20454919 15.1607213,9.02990006 C15.0649344,8.88153833 15.0699758,8.7335367 15.0231626,8.58733557 C14.953303,8.36767378 14.8517544,8.15773473 14.7635296,7.94347446 C14.7545271,7.92150828 14.7415634,7.90134261 14.732921,7.87901633 C14.5798779,7.4829049 14.4261147,7.08679348 14.274512,6.68780124 C14.2064529,6.5077506 14.1509973,6.32769995 14.0746558,6.15233062 C14.0026356,5.98884463 13.9093693,5.83508138 13.8283465,5.6751964 C13.7502045,5.52323366 13.6781843,5.37019061 13.602563,5.21678745 C13.5237008,5.05474187 13.4473594,4.89269629 13.3656164,4.73137091 C13.2787119,4.5614031 13.1891667,4.39335583 13.0969808,4.2272291 C13.0213595,4.0900305 12.9356554,3.95823343 12.8636352,3.81887423 C12.7916149,3.67951503 12.7048305,3.54195633 12.6717012,3.3928744 C12.5981268,3.05723809 12.5417574,2.71806025 12.5028137,2.37666854 C12.4909303,2.27475988 12.5568289,2.16384868 12.5877976,2.0572587 C12.5993208,2.01728745 12.6238077,1.97767631 12.6238077,1.93806517 C12.6169658,1.57796387 12.8261846,1.29996567 12.9907509,1.01188464 C13.0757348,0.862802702 13.2348996,0.756212719 13.3620153,0.631617671 C13.445919,0.549154474 13.5327034,0.469211987 13.6176873,0.388189196 C13.6306509,0.375945752 13.6392933,0.356500282 13.6536974,0.350018458 C13.815743,0.277998199 13.9817497,0.21426027 14.1398341,0.133957682 C14.1870074,0.110551097 14.2118544,0.0460929657 14.2478645,0 L16.3371722,0.00108030388 Z M19.5060636,15.1555832 L19.5204677,15.1555832 C19.5204677,15.5455729 19.5204677,15.9352025 19.5204677,16.3251922 C19.5204677,16.7151819 19.4567298,17.1062519 19.397313,17.4973219 C19.3252928,17.9607723 19.3202514,18.4357459 19.2172624,18.8988361 C19.1452421,19.2229273 19.0937477,19.5527801 19.0307299,19.879392 C19.0164557,19.9247698 18.9995012,19.9692605 18.9799556,20.0126294 C18.9522278,20.0968931 18.9248601,20.181517 18.9018137,20.266861 C18.8333944,20.5189319 18.7667757,20.7735235 18.6994367,21.0270348 C18.6951131,21.0381003 18.6901843,21.0489196 18.6846726,21.0594439 C18.597168,21.2845072 18.5107437,21.5102907 18.4210784,21.7346338 C18.3411359,21.9355704 18.2626339,22.1372271 18.1740489,22.3342025 C18.1020287,22.4966082 18.0112832,22.6518118 17.9338614,22.812417 C17.8060254,23.0778117 17.6853915,23.3464472 17.5561151,23.6107616 C17.5091974,23.6961914 17.4578739,23.7791264 17.4023519,23.8592315 C17.3155675,23.9978705 17.2259022,24.134709 17.1437991,24.2758687 C17.0717789,24.4001036 17.0228051,24.540183 16.9381813,24.6543351 C16.8049438,24.8343858 16.6328154,24.9849081 16.5082204,25.16928 C16.2741545,25.5138969 16.051972,25.8599543 15.7242798,26.1332712 C15.4977761,26.3226844 15.319526,26.5693538 15.1103071,26.7814535 C14.9890153,26.9053672 14.8576033,27.0189525 14.7174366,27.121029 C14.5807304,27.2206306 14.4346857,27.3067379 14.281354,27.3781413 C14.1521433,27.4326734 14.0172214,27.472534 13.8791208,27.4969748 C13.7998985,27.5135394 13.695109,27.5308243 13.6353322,27.4933737 C13.3929841,27.3424913 13.072854,27.4364777 12.8495912,27.2168159 C12.6965482,27.0662936 12.500293,26.9607839 12.3357267,26.8207045 C12.1873649,26.6935888 12.0573684,26.5445068 11.9169289,26.4076683 C11.7296762,26.225097 11.5388225,26.047567 11.35229,25.8635553 C11.1657576,25.6795435 10.9774246,25.4904903 10.7937729,25.3032377 C10.6598152,25.165679 10.5258576,25.02704 10.4009024,24.8815591 C10.2514604,24.7065498 10.1157022,24.5214578 9.96590004,24.3457283 C9.80097365,24.1534342 9.61336087,23.9791452 9.45959762,23.7785688 C9.28890961,23.5556661 9.14522919,23.3104371 8.98894523,23.0770915 C8.9262876,22.9834651 8.85858856,22.8927196 8.79917184,22.7969327 C8.66053285,22.57403 8.52981608,22.3464459 8.38757607,22.1260639 C8.26982294,21.9434926 8.13334455,21.7724445 8.01775204,21.5884327 C7.91656357,21.4267472 7.86542919,21.4145038 7.72354928,21.5506221 C7.69005986,21.5826711 7.64900831,21.6067979 7.61551889,21.6388469 C7.4246652,21.8188975 7.23345142,22.0021891 7.04547854,22.1869211 C6.92160369,22.3089954 6.80385057,22.438992 6.68105603,22.5610663 C6.54673825,22.6961043 6.39873662,22.8188988 6.27738248,22.9643798 C6.07356515,23.2085284 5.88127105,23.4627599 5.69293808,23.7205925 C5.5607809,23.9006431 5.44410808,24.0947377 5.32095344,24.2827106 C5.22768721,24.4245905 5.12901945,24.5635896 5.04439565,24.7105109 C4.95977184,24.8574323 4.88919199,25.0090349 4.81573132,25.1606376 C4.74227066,25.3122402 4.66628929,25.475006 4.59498923,25.6338107 C4.49992249,25.8455502 4.40773656,26.0587302 4.31519052,26.2719101 C4.30114657,26.3039592 4.29538495,26.3399693 4.28278141,26.3727385 C4.19959801,26.5887993 4.09732924,26.8030596 4.03719233,27.0266825 C3.95797004,27.320165 3.79412395,27.5960026 3.83121438,27.9168529 C3.83373509,27.9370185 3.80996841,27.9589847 3.80276638,27.981311 C3.76387374,28.0852898 3.73199336,28.1917582 3.70733954,28.3000006 C3.68069204,28.4530437 3.68033194,28.6107681 3.65476475,28.7638111 C3.62271574,28.9543047 3.55357629,29.1408372 3.54133284,29.3316908 C3.51828636,29.7025952 3.5294495,30.0749399 3.51648585,30.4480049 C3.48980626,31.2715814 3.56124874,32.0954063 3.72930572,32.9020952 C3.77755929,33.1383216 3.85714168,33.3702269 3.87082553,33.6136553 C3.87804805,33.6489116 3.88928439,33.6832247 3.90431495,33.7159241 C3.9457266,33.8498818 3.98785845,33.9834794 4.02782969,34.1177972 C4.04439435,34.1746932 4.05231658,34.2337498 4.07068175,34.2899256 C4.14990403,34.5301131 4.23308743,34.7688603 4.31194961,35.0101282 C4.37964866,35.215746 4.43150324,35.4274856 4.51324624,35.6273418 C4.59498923,35.827198 4.70734083,36.0148108 4.80132727,36.2099857 C4.92880313,36.4714192 5.04475575,36.7386144 5.17943363,36.9960868 C5.31951304,37.2636421 5.47507679,37.522915 5.62595924,37.7847086 C5.68465575,37.8858971 5.74479266,37.9867255 5.8110513,38.0828725 C5.94752969,38.2809282 6.08580859,38.4789839 6.22912891,38.671278 C6.32635625,38.8023549 6.43258614,38.9265898 6.53665541,39.0522652 C6.59715243,39.126086 6.66377117,39.1963057 6.72282778,39.268326 C6.90827995,39.503112 7.07788766,39.7526622 7.27990448,39.9726841 C7.50568799,40.2182732 7.7577589,40.4408158 8.00226768,40.6683998 C8.17655671,40.8318858 8.35480685,40.992491 8.5352176,41.1487749 C8.73975513,41.3288256 8.94501287,41.504555 9.15603223,41.675243 C9.32600004,41.8124416 9.49848856,41.9485599 9.68105992,42.0684736 C9.89712069,42.2125142 10.1279456,42.3338683 10.3508483,42.4681861 C10.4984899,42.556771 10.6389294,42.656159 10.7901719,42.7397025 C10.9111659,42.8066813 11.0451236,42.8477328 11.1664778,42.915792 C11.3155597,42.9971749 11.4513179,43.1052053 11.6043609,43.1765053 C11.7800904,43.2578882 11.9687834,43.3108231 12.1509947,43.3778019 C12.1787225,43.3878848 12.201769,43.4094909 12.2287766,43.4220944 C12.4120681,43.505998 12.5913986,43.6021451 12.7808119,43.6691239 C13.0163181,43.7519472 13.2608269,43.8102836 13.5010144,43.8790629 C13.5125377,43.8823039 13.5237008,43.8869852 13.534864,43.8909463 C13.7995384,43.9784509 14.0595316,44.0836005 14.3296075,44.149499 C14.6637815,44.2305218 15.0058778,44.2787754 15.344373,44.3417931 C15.3739013,44.3471946 15.4016291,44.3605184 15.4311574,44.3659199 C15.6342545,44.40193 15.8366314,44.4530644 16.0415291,44.4739503 C16.4163945,44.5099604 16.7930605,44.5301261 17.1693663,44.5484913 C17.5690788,44.5679367 17.9695114,44.5931438 18.3688637,44.5845014 C18.6778307,44.5783797 18.9849971,44.5103205 19.293964,44.4962766 C19.7012385,44.4782715 20.1095934,44.4919554 20.5183084,44.4811523 C20.8063894,44.4732301 21.0926699,44.4566654 21.3782303,44.426777 C21.608335,44.4026502 21.8355589,44.3504355 22.0624227,44.3137052 C22.4653761,44.2492471 22.8686895,44.1869496 23.272003,44.1232116 C23.2953694,44.1180714 23.318448,44.1117008 23.3411424,44.1041263 C23.6652336,44.0187822 23.9893248,43.932718 24.3134159,43.8484543 C24.562606,43.7836361 24.8125163,43.7216987 25.0620665,43.6579608 C25.0678188,43.6562403 25.0734694,43.6541965 25.0789913,43.651839 C25.3407849,43.5535314 25.6025786,43.4559439 25.8640121,43.3561959 C26.0339799,43.2913776 26.2068285,43.2326811 26.3703145,43.1548992 C26.5338005,43.0771174 26.6735198,42.9748486 26.8308841,42.898147 C27.0854757,42.7731919 27.3469092,42.6626408 27.6025811,42.5380457 C27.7176063,42.4832745 27.8285613,42.4203359 27.9345945,42.3497127 C28.23852,42.1466156 28.5384844,41.9377569 28.8402493,41.7314188 C28.9263135,41.6727223 29.0202999,41.6233884 29.098802,41.5564096 C29.3433108,41.3540327 29.5838585,41.1469744 29.8236859,40.939196 C29.9605244,40.8207227 30.0980831,40.7026094 30.2262792,40.5751336 C30.3609571,40.4411759 30.4826713,40.2938945 30.6133881,40.1556156 C30.7556281,40.0054533 30.9111918,39.8675345 31.0429889,39.70909 C31.1650633,39.5632489 31.2608502,39.3958018 31.3732018,39.2409583 C31.5327267,39.0223768 31.697293,38.8088367 31.8586183,38.5906153 C31.93568,38.486186 32.0077003,38.3777955 32.0793604,38.269405 C32.2122378,38.0677483 32.3573586,37.8732936 32.4715107,37.6608338 C32.604028,37.4148846 32.7091776,37.1538112 32.8258504,36.8992196 C32.8816661,36.7778654 32.9140752,36.6381461 32.9958182,36.5391183 C33.1449002,36.3590676 33.1801901,36.1322038 33.2705755,35.9294668 C33.3609609,35.7267297 33.4059736,35.5020265 33.4722322,35.2870461 C33.4772737,35.2708415 33.4931181,35.2585981 33.5006802,35.2427536 C33.5348899,35.1707333 33.5806227,35.1012338 33.5989879,35.0266928 C33.6710082,34.7353709 33.7311451,34.4422484 33.7963234,34.1498462 C33.7992042,34.1383229 33.8049658,34.1275199 33.8082068,34.1159966 C33.8485381,33.9719561 33.8946311,33.8261151 33.9274003,33.6784736 C33.9479261,33.5855674 33.9421644,33.4872598 33.9598094,33.3932734 C34.0361509,32.99032 34.1560646,32.5909677 34.1881136,32.1847734 C34.2460899,31.4444051 34.3011854,30.6979152 34.2684162,29.957907 C34.2291652,29.0695371 34.3008253,28.1746854 34.1092514,27.2931574 C34.0051822,26.8131424 33.9785347,26.3158425 33.9151568,25.8268249 C33.9104755,25.7908148 33.8877891,25.7602062 33.8791467,25.7256365 C33.8380952,25.5535081 33.798364,25.3810195 33.7599532,25.2081709 C33.6969355,24.9200899 33.6360783,24.6341695 33.5730606,24.3471687 C33.5694596,24.3306041 33.5525348,24.3172803 33.5467732,24.3003556 C33.5089626,24.1894444 33.4668307,24.0792534 33.4387428,23.9661816 C33.3728443,23.7141107 33.3134276,23.4620397 33.2511301,23.2078082 C33.2487467,23.2022702 33.2458535,23.1969659 33.2424876,23.1919638 C33.1535426,22.9895868 33.0541546,22.7915311 32.9785334,22.5844729 C32.866902,22.2783868 32.7651133,21.9690598 32.6731675,21.6564919 C32.5498175,21.2581757 32.3892232,20.8723637 32.1935125,20.5041677 C32.1260731,20.3697221 32.0659681,20.2317211 32.0134619,20.0907714 C31.946123,19.9132415 31.8885068,19.7306701 31.8251289,19.5531402 C31.8193673,19.5372957 31.7999218,19.5272129 31.7912794,19.5117285 C31.7005339,19.3511234 31.6061873,19.1915985 31.5215635,19.0273923 C31.4473827,18.8833518 31.3854452,18.7328294 31.3152255,18.5862682 C31.2630108,18.4782378 31.2097158,18.3680468 31.1510193,18.2621771 C31.0685561,18.1134552 30.9774505,17.9694147 30.8953474,17.8203328 C30.7725528,17.5967099 30.663082,17.3658849 30.5320052,17.1473034 C30.3922859,16.9132376 30.2345615,16.6896147 30.0840392,16.463111 C30.0343452,16.3878498 29.9806901,16.3154695 29.934237,16.2384078 C29.8298077,16.0655592 29.7358212,15.8858686 29.6245499,15.7177013 C29.4679058,15.4800345 29.3004587,15.2495696 29.1366127,15.0165841 C29.0818773,14.9384421 29.0249813,14.8624607 28.9749272,14.7814379 C28.9003862,14.6600838 28.8406094,14.529367 28.7570659,14.4134144 C28.6213077,14.227242 28.4689849,14.0533131 28.3281853,13.8707418 C28.1006012,13.5732981 27.8856208,13.2657716 27.6504746,12.9744496 C27.4614214,12.7400237 27.2453607,12.5272038 27.0501858,12.2974592 C26.8823786,12.1001237 26.7358173,11.884423 26.5633288,11.6917688 C26.3602317,11.464905 26.1351684,11.2596473 25.9273899,11.034584 C25.7440984,10.8379687 25.5784518,10.6251488 25.3929996,10.430334 C25.1971045,10.2247162 24.9882457,10.0309817 24.782988,9.83436635 C24.6567125,9.71433259 24.5281563,9.59573923 24.3973195,9.47858628 C24.1634937,9.26924739 23.9285877,9.06134891 23.6926013,8.85489083 C23.5521618,8.73137609 23.4128026,8.60678104 23.2687621,8.48794761 C23.0955533,8.3439071 22.9180234,8.2063484 22.7419339,8.0669892 C22.5831292,7.94131385 22.4239644,7.81491829 22.2633592,7.69248385 C22.1672122,7.6204636 22.0656636,7.55168425 21.970957,7.47642308 C21.7833442,7.31977901 21.6004128,7.16133445 21.4099192,7.01261261 C21.327456,6.94851458 21.2273478,6.90746303 21.1412836,6.84768622 C20.932785,6.7036457 20.7286075,6.55312336 20.5211892,6.40764244 C20.3523017,6.28880901 20.1794531,6.1760973 20.0109257,6.05690377 C19.8125098,5.91646427 19.6234567,5.76198081 19.418559,5.63234435 C19.169729,5.47498008 18.9082955,5.33742139 18.6533438,5.18977986 C18.5395518,5.12388132 18.4293608,5.05114086 18.3155688,4.98560242 C18.1525629,4.89197609 17.9883567,4.80027029 17.8229502,4.71048503 C17.676389,4.63126275 17.5276671,4.55672178 17.3803857,4.4793 C17.3497771,4.46345555 17.3220493,4.44328987 17.2918008,4.42564491 C17.2514694,4.40295853 17.2096977,4.38207265 17.1686461,4.36046658 C17.1578431,4.40367873 17.1272345,4.45445301 17.1401981,4.48866264 C17.1780088,4.5887708 17.239226,4.67987642 17.2802775,4.77890428 C17.3555387,4.96147564 17.4217973,5.14764801 17.4934575,5.33129967 C17.5906849,5.58048976 17.6897127,5.82895966 17.7880204,6.07742955 C17.8056653,6.12172201 17.8240305,6.16565437 17.8438361,6.20922662 C17.9226982,6.38927727 18.0156044,6.5639264 18.0771817,6.74937856 C18.1538833,6.9812838 18.199256,7.22363197 18.2694758,7.45805791 C18.3008046,7.56212719 18.3742653,7.65395302 18.4048739,7.75802229 C18.4797749,8.01477451 18.5395518,8.27764846 18.607971,8.53476078 C18.6126523,8.55204564 18.6227352,8.56753 18.6288569,8.58445476 C18.6695053,8.68014965 18.7041424,8.77828792 18.7325661,8.87829742 C18.8009853,9.18150271 18.8607621,9.48686861 18.9241399,9.7911542 C18.9263006,9.80267744 18.9335026,9.81348048 18.9363834,9.82500372 C18.9795955,10.007215 19.0253284,10.1890661 19.0645794,10.3723577 C19.0858254,10.4713855 19.0923072,10.5736543 19.1110325,10.6730423 C19.1906149,11.0936406 19.2946842,11.510998 19.3465388,11.9333968 C19.3965928,12.3413916 19.333215,12.7616298 19.4848177,13.1599018 C19.5093045,13.2243599 19.5053434,13.3021418 19.5053434,13.373802 C19.5067838,13.9679691 19.5071439,14.5618962 19.5064237,15.1555832 L19.5060636,15.1555832 Z", fill: "#FAB126", fillRule: "nonzero" }),
                    React__default.createElement("path", { d: "M29.1322914,31.2657949 C29.1322914,31.5232673 29.1463354,31.7821802 29.12725,32.0382122 C29.1146465,32.2052992 29.0552298,32.3684251 29.0138181,32.5333515 C29.0069762,32.5625197 28.9976136,32.5909677 28.9914918,32.620496 C28.9284741,32.9182997 28.9133499,33.2387899 28.7873144,33.5067053 C28.6893669,33.7148438 28.6976492,33.9582723 28.5305622,34.145525 C28.426853,34.2611175 28.3998454,34.4433287 28.3303459,34.5920506 C28.2179943,34.8343987 28.1207669,35.0875499 27.9767264,35.3100925 C27.8074788,35.5718862 27.5928584,35.8037914 27.4023648,36.0522613 C27.3382668,36.1358048 27.2982955,36.2391539 27.2295162,36.3172959 C27.0336211,36.5398385 26.8334048,36.7580598 26.6259864,36.9694393 C26.4480964,37.1512905 26.2615639,37.3252194 26.0717905,37.494467 C25.9565581,37.5970959 25.8294424,37.6867611 25.7052074,37.7793071 C25.518675,37.9183062 25.3317824,38.0573053 25.1412888,38.1909029 C25.0579142,38.2471458 24.9705365,38.2972135 24.8798553,38.340705 C24.7192501,38.4206475 24.5536035,38.4905072 24.3940786,38.5729704 C24.2475174,38.6489517 24.1059976,38.7357362 23.9619571,38.8181994 C23.9464727,38.8268418 23.9356697,38.8455671 23.9198252,38.8509686 C23.7106064,38.9186676 23.5003072,38.9834858 23.2910883,39.0522652 C23.2028635,39.0814334 23.1167993,39.1170834 23.0300149,39.1505728 C23.0101541,39.163051 22.9891783,39.1736594 22.9673573,39.1822618 C22.5971731,39.2478002 22.2280693,39.3201806 21.8564448,39.3738357 C21.5546799,39.417768 21.2507544,39.4512574 20.9464688,39.4663817 C20.74692,39.4790405 20.5465724,39.4656033 20.3505012,39.4264104 C20.1344404,39.3795973 19.9140584,39.3158593 19.7271658,39.2053082 C19.4232403,39.0252576 19.1664881,38.8045155 19.0177663,38.4454945 C18.9068551,38.1764988 18.8884899,37.9204668 18.8838086,37.6482302 C18.8751662,37.1559718 19.0775431,36.7685028 19.45745,36.4631369 C19.5445945,36.3929171 19.6126536,36.2992908 19.6893552,36.2164675 C19.6972774,36.2078251 19.703039,36.193421 19.7124017,36.1905402 C19.9111776,36.1271624 20.1063525,36.0371371 20.3101698,36.0076087 C20.8229541,35.9334279 21.3451009,35.9157829 21.8514034,35.8149546 C22.0649434,35.7728227 22.2817244,35.6990019 22.4967049,35.6381448 C22.6580303,35.5927721 22.7847859,35.4181229 22.9443108,35.3749108 C23.1711746,35.3140537 23.3472641,35.1854975 23.5204729,35.0508196 C23.6936816,34.9161417 23.8510459,34.7548163 24.0138116,34.6039339 C24.2097067,34.4238833 24.4210862,34.2539154 24.594655,34.053339 C24.7426567,33.8822909 24.8510472,33.6759529 24.9695205,33.480778 C25.0336185,33.3749082 25.0811519,33.2593157 25.1380479,33.1491247 C25.2219515,32.9877993 25.3072955,32.826834 25.3901188,32.6658687 C25.400873,32.6513914 25.4088128,32.6350232 25.4135254,32.6176152 C25.4556572,32.215382 25.6378685,31.8444777 25.6331872,31.4253198 C25.629226,31.0616175 25.6998059,30.6928737 25.7772277,30.3352932 C25.8114373,30.1793693 25.938193,30.0389298 26.0401016,29.9031716 C26.1433194,29.7595073 26.2625609,29.6280638 26.3955216,29.5113814 C26.5265028,29.4111591 26.6694895,29.3276897 26.8211613,29.2629115 C27.0803687,29.1348581 27.3737089,29.0929704 27.6583968,29.1433579 C27.9688042,29.204215 28.2871337,29.268313 28.5204793,29.5221844 C28.6486754,29.6622638 28.8121614,29.7742553 28.9219923,29.9254979 C29.0188595,30.0587354 29.1042035,30.2254623 29.1214884,30.3853472 C29.1531773,30.6755889 29.1304909,30.971232 29.1304909,31.2647146 L29.1322914,31.2657949 Z", fill: "#FAB126", fillRule: "nonzero" }))))));
};

var Icon$1_ = function (props) { return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default.createElement("path", { d: "M15 12.1757C15 13.8325 13.6569 15.1757 12 15.1757C10.3431 15.1757 9 13.8325 9 12.1757C9 10.5188 10.3431 9.17566 12 9.17566C13.6569 9.17566 15 10.5188 15 12.1757Z" }),
    React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.83 4.17566H20C21.1 4.17566 22 5.07566 22 6.17566V18.1757C22 19.2757 21.1 20.1757 20 20.1757H4C2.9 20.1757 2 19.2757 2 18.1757V6.17566C2 5.07566 2.9 4.17566 4 4.17566H7.17L8.4 2.82566C8.78 2.41566 9.32 2.17566 9.88 2.17566H14.12C14.68 2.17566 15.22 2.41566 15.59 2.82566L16.83 4.17566ZM7 12.1757C7 14.9357 9.24 17.1757 12 17.1757C14.76 17.1757 17 14.9357 17 12.1757C17 9.41566 14.76 7.17566 12 7.17566C9.24 7.17566 7 9.41566 7 12.1757Z" }))); };

var Icon$1Z = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.0967 17.8521L7.87565 20.2891C6.91907 20.8414 5.69589 20.5136 5.1436 19.557L0.999729 12.3796C0.447444 11.4231 0.775193 10.1999 1.73178 9.64759L6.31754 7C6.53486 6.87453 6.76593 6.79448 6.99977 6.75691V6C6.99977 4.89543 7.8952 4 8.99977 4H14.9998C16.1043 4 16.9998 4.89543 16.9998 6V6.73545C17.299 6.75379 17.5986 6.83993 17.8759 7L22.4616 9.64759C23.4182 10.1999 23.746 11.4231 23.1937 12.3796L19.0498 19.557C18.4975 20.5136 17.2743 20.8414 16.3178 20.2891L12.0967 17.8521ZM8.99977 6L14.9998 6L14.9998 7.98154L11.2363 14.5H8.99977L8.99977 6ZM6.99977 14.5L6.99977 8.91551L2.73178 11.3796L6.87565 18.557L10.4386 16.5H8.99977C7.8952 16.5 6.99977 15.6046 6.99977 14.5ZM16.8759 8.73205L21.4616 11.3796L17.3178 18.557L12.732 15.9094L16.8759 8.73205Z" })));
};

var Icon$1Y = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$1X = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" }),
        React__default.createElement("path", { d: "M11.25 7.72H6.25V9.22H11.25V7.72Z" }),
        React__default.createElement("path", { d: "M18 15.75H13V17.25H18V15.75Z" }),
        React__default.createElement("path", { d: "M18 13.25H13V14.75H18V13.25Z" }),
        React__default.createElement("path", { d: "M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z" }),
        React__default.createElement("path", { d: "M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z" })));
};

var Icon$1W = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var Icon$1V = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$1U = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M9.00012 16.2L5.50012 12.7C5.11012 12.31 4.49012 12.31 4.10012 12.7C3.71012 13.09 3.71012 13.71 4.10012 14.1L8.29012 18.29C8.68012 18.68 9.31012 18.68 9.70012 18.29L20.3001 7.70001C20.6901 7.31001 20.6901 6.69001 20.3001 6.30001C19.9101 5.91001 19.2901 5.91001 18.9001 6.30001L9.00012 16.2Z" })));
};

var Icon$1T = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M12 2.75711C6.48 2.75711 2 7.23711 2 12.7571C2 18.2771 6.48 22.7571 12 22.7571C17.52 22.7571 22 18.2771 22 12.7571C22 7.23711 17.52 2.75711 12 2.75711ZM9.29 17.0471L5.7 13.4571C5.31 13.0671 5.31 12.4371 5.7 12.0471C6.09 11.6571 6.72 11.6571 7.11 12.0471L10 14.9271L16.88 8.04711C17.27 7.65711 17.9 7.65711 18.29 8.04711C18.68 8.43711 18.68 9.06711 18.29 9.45711L10.7 17.0471C10.32 17.4371 9.68 17.4371 9.29 17.0471Z" })));
};

var Icon$1S = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$1R = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$1Q = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$1P = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$1O = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$1N = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$1M = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 40 40" }, props),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.13298 26.6579C3.13253 26.6921 3.1323 26.7263 3.1323 26.7606C3.1323 30.9564 6.53367 34.3577 10.7295 34.3577C14.9253 34.3577 18.3266 30.9564 18.3266 26.7606C18.3266 26.7263 18.3264 26.6921 18.326 26.6579H14.732C14.7329 26.692 14.7333 26.7262 14.7333 26.7606C14.7333 28.9719 12.9407 30.7645 10.7294 30.7645C8.51812 30.7645 6.7255 28.9719 6.7255 26.7606C6.7255 26.7262 6.72593 26.692 6.72679 26.6579H3.13298ZM10.7295 5.71436C15.6624 5.71436 19.6613 9.71326 19.6613 14.6462C19.6613 19.5791 15.6624 23.578 10.7295 23.578C5.79663 23.578 1.79773 19.5791 1.79773 14.6462C1.79773 9.71326 5.79663 5.71436 10.7295 5.71436ZM10.7295 9.3076C13.6779 9.3076 16.0681 11.6977 16.0681 14.6461C16.0681 17.5945 13.6779 19.9847 10.7295 19.9847C7.78111 19.9847 5.39096 17.5945 5.39096 14.6461C5.39096 11.6977 7.78111 9.3076 10.7295 9.3076ZM11.3454 12.9033C12.0632 13.157 12.5775 13.8415 12.5775 14.6462C12.5775 15.6668 11.7501 16.4941 10.7295 16.4941C9.70893 16.4941 8.88157 15.6668 8.88157 14.6462C8.88157 13.8416 9.39577 13.1571 10.1135 12.9034V11.6689H11.3454V12.9033ZM22.7464 16.9552C22.154 15.8735 21.8172 14.6318 21.8172 13.3115C21.8172 9.11573 25.2186 5.71436 29.4144 5.71436C33.6102 5.71436 37.0115 9.11573 37.0115 13.3115C37.0115 14.6319 36.6747 15.8735 36.0823 16.9553C35.1444 16.216 34.0807 15.6291 32.9286 15.232C33.2408 14.6618 33.4183 14.0074 33.4183 13.3115C33.4183 11.1002 31.6257 9.30761 29.4144 9.30761C27.2031 9.30761 25.4105 11.1002 25.4105 13.3115C25.4105 14.0074 25.588 14.6618 25.9002 15.2319C24.7481 15.629 23.6844 16.2159 22.7464 16.9552ZM29.4144 34.3577C34.3473 34.3577 38.3462 30.3588 38.3462 25.4259C38.3462 20.493 34.3473 16.4941 29.4144 16.4941C24.4815 16.4941 20.4826 20.493 20.4826 25.4259C20.4826 30.3588 24.4815 34.3577 29.4144 34.3577ZM29.4144 30.7645C32.3628 30.7645 34.7529 28.3743 34.7529 25.4259C34.7529 22.4775 32.3628 20.0874 29.4144 20.0874C26.466 20.0874 24.0758 22.4775 24.0758 25.4259C24.0758 28.3743 26.466 30.7645 29.4144 30.7645ZM30.0303 27.1688C30.7481 26.9151 31.2624 26.2306 31.2624 25.4259C31.2624 24.4053 30.435 23.578 29.4144 23.578C28.3938 23.578 27.5665 24.4053 27.5665 25.4259C27.5665 26.2305 28.0807 26.915 28.7984 27.1687V28.4032H30.0303V27.1688Z", fill: "#DEAE30" })));
};

var Icon$1L = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.5523 0.447715 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.5523 18 24 17.5523 24 17V16.43ZM16.24 13.65C15.07 13.13 13.63 12.75 12 12.75C10.37 12.75 8.93 13.14 7.76 13.65C6.68 14.13 6 15.21 6 16.39V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V16.39C18 15.21 17.32 14.13 16.24 13.65ZM8.07 16C8.16 15.77 8.2 15.61 8.98 15.31C9.95 14.93 10.97 14.75 12 14.75C13.03 14.75 14.05 14.93 15.02 15.31C15.79 15.61 15.83 15.77 15.93 16H8.07ZM12 8C12.55 8 13 8.45 13 9C13 9.55 12.55 10 12 10C11.45 10 11 9.55 11 9C11 8.45 11.45 8 12 8ZM12 6C10.34 6 9 7.34 9 9C9 10.66 10.34 12 12 12C13.66 12 15 10.66 15 9C15 7.34 13.66 6 12 6Z" })));
};

var Icon$1K = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M9.43458 5.26321C9.31196 4.60661 9.81578 4 10.4837 4C11.0732 4 11.551 4.47784 11.551 5.06729V6.38309C11.6985 6.37268 11.8483 6.36735 12 6.36735C12.1458 6.36735 12.2898 6.37227 12.4316 6.38189V5.06729C12.4316 4.47784 12.9094 4 13.4989 4C14.1668 4 14.6707 4.60661 14.548 5.26321L14.2592 6.80987C15.2505 7.24263 16 7.99428 16 8.93878V9.5102C16 10.2869 15.4862 10.9372 14.7678 11.3762C14.0438 11.8186 13.0645 12.0816 12 12.0816C10.9355 12.0816 9.95615 11.8186 9.23219 11.3762C8.51384 10.9372 8 10.2869 8 9.5102V8.93878C8 7.99928 8.74184 7.25052 9.72473 6.81689L9.43458 5.26321Z" }),
        React__default.createElement("path", { d: "M6 11C6 12.1 5.1 13 4 13C2.9 13 2 12.1 2 11C2 9.9 2.9 9 4 9C5.1 9 6 9.9 6 11Z" }),
        React__default.createElement("path", { d: "M4 14C4.39 14 4.76 14.04 5.13 14.1C4.73 14.78 4.5 15.56 4.5 16.39V18H1C0.447715 18 0 17.5523 0 17V16.43C0 15.62 0.48 14.9 1.22 14.58C2.07 14.21 3.01 14 4 14Z" }),
        React__default.createElement("path", { d: "M22 11C22 12.1 21.1 13 20 13C18.9 13 18 12.1 18 11C18 9.9 18.9 9 20 9C21.1 9 22 9.9 22 11Z" }),
        React__default.createElement("path", { d: "M22.78 14.58C23.52 14.9 24 15.62 24 16.43V17C24 17.5523 23.5523 18 23 18H19.5V16.39C19.5 15.56 19.27 14.78 18.87 14.1C19.24 14.04 19.61 14 20 14C20.99 14 21.93 14.21 22.78 14.58Z" }),
        React__default.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.13 16.24 13.65C17.32 14.13 18 15.21 18 16.39V17C18 17.5523 17.5523 18 17 18H7C6.44772 18 6 17.5523 6 17V16.39C6 15.21 6.68 14.13 7.76 13.65C8.93 13.14 10.37 12.75 12 12.75Z" })));
};

var Icon$1J = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$1I = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default.createElement("path", { d: "M15.6772 2.8668C15.9878 1.97095 15.2658 1.05469 14.2495 1.05469C13.4213 1.05469 12.75 1.67612 12.75 2.4427L12.75 5.07933C12.75 5.61801 13.2217 6.05469 13.8037 6.05469C14.2615 6.05469 14.667 5.78094 14.8069 5.37734L15.6772 2.8668Z", fill: "#FFC700" }),
        React__default.createElement("path", { d: "M9.32279 2.8668C9.01225 1.97095 9.73416 1.05469 10.7505 1.05469C11.5787 1.05469 12.25 1.67612 12.25 2.4427L12.25 5.07934C12.25 5.61801 11.7783 6.05469 11.1963 6.05469C10.7385 6.05469 10.333 5.78094 10.1931 5.37734L9.32279 2.8668Z", fill: "#FFC700" }),
        React__default.createElement("path", { d: "M10.825 1.26941C11.1413 1.50339 10.6373 1.71436 10.293 2.17982C9.94869 2.64527 9.89449 3.18896 9.57817 2.95498C9.26185 2.72101 9.32403 2.18322 9.66832 1.71776C10.0126 1.2523 10.5086 1.03544 10.825 1.26941Z", fill: "#FFD800" }),
        React__default.createElement("path", { d: "M14.6507 1.39423C14.8957 1.70211 14.3543 1.77544 13.9012 2.13593C13.4482 2.49642 13.2551 3.00755 13.0102 2.69968C12.7652 2.3918 12.9644 1.88843 13.4174 1.52794C13.8705 1.16746 14.4057 1.08636 14.6507 1.39423Z", fill: "#FFD800" }),
        React__default.createElement("path", { d: "M10.3026 1.54788C10.4525 1.65871 10.1853 1.79706 9.98717 2.06492C9.78903 2.33278 9.73495 2.62873 9.58511 2.51789C9.43528 2.40706 9.49314 2.11391 9.69127 1.84605C9.88941 1.57819 10.1528 1.43705 10.3026 1.54788Z", fill: "#FEED8D" }),
        React__default.createElement("path", { d: "M14.0738 1.5278C14.1899 1.67363 13.896 1.73812 13.6353 1.94557C13.3746 2.15302 13.2458 2.42489 13.1297 2.27905C13.0137 2.13322 13.1454 1.86503 13.4061 1.65758C13.6668 1.45012 13.9578 1.38196 14.0738 1.5278Z", fill: "#FEED8D" }),
        React__default.createElement("path", { d: "M13.406 5.80534C13.1769 5.64322 13.6402 5.49916 14.0299 5.10944C14.4196 4.71971 14.4298 4.07338 14.6827 4.32626C14.9356 4.57915 14.7916 5.0668 14.4019 5.45652C14.0122 5.84624 13.6351 5.96747 13.406 5.80534Z", fill: "#FFAF00" }),
        React__default.createElement("path", { d: "M10.6248 5.80534C10.3957 5.64322 10.8589 5.49916 11.2486 5.10944C11.6383 4.71971 11.6486 4.07338 11.9015 4.32626C12.1543 4.57915 12.0103 5.0668 11.6206 5.45652C11.2309 5.84624 10.8538 5.96747 10.6248 5.80534Z", fill: "#FFAF00" }),
        React__default.createElement("path", { d: "M13.9914 10.3006C12.9839 8.40915 12.4375 6.30469 12.4375 6.30469C12.4375 6.30469 11.9087 8.34165 10.9321 10.2086C10.6414 11.6927 9.56271 12.9024 8.10162 13.3682C6.2379 13.9624 4.40451 13.1384 3.73966 11.239C3.00517 10.5247 2.41808 9.75079 2.125 9.15553V10.3668C2.125 14.1503 3.02673 17.8564 4.72554 21.0547H20.1495C21.8483 17.8564 22.75 14.1503 22.75 10.3668V9.15553C22.4628 9.73876 21.8934 10.4935 21.1797 11.1956C20.5277 13.1259 18.6807 13.967 16.8028 13.3682C15.372 12.912 14.3079 11.7426 13.9914 10.3006Z", fill: "#FFC700" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.7881 7.51367C13.0461 8.29103 13.4582 9.39262 14.0101 10.4296C14.2401 11.4788 14.8691 12.3823 15.7478 12.9675L14.8711 21.0453L12.4716 21.026L6.31499 21.0756C5.03757 17.5852 4.57523 15.3977 4.04834 11.8082C4.82141 13.3685 6.48748 14.0096 8.17878 13.4698C9.62537 13.0081 10.6933 11.8093 10.9812 10.3385C11.509 9.3285 11.9046 8.26831 12.1552 7.51367H12.7881Z", fill: "#FFD800" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.335 21.0354L10.6112 11.4121C10.1532 12.3105 9.37201 13.0219 8.40008 13.3927C8.66771 15.748 9.05381 17.902 9.86757 21.0472L11.335 21.0354ZM8.91436 21.0549C8.26697 18.1715 7.86567 16.0604 7.58788 13.6114C6.85387 13.7286 6.14425 13.6244 5.53223 13.3211C5.85194 15.8033 6.40755 18.9391 7.32573 21.0677L8.91436 21.0549Z", fill: "#FFE971" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.1731 9.68799C11.1115 9.81472 11.0477 9.94136 10.982 10.0672C10.6941 11.538 9.62616 12.7368 8.17957 13.1985C6.33435 13.7874 4.51917 12.9708 3.86091 11.0883C3.82538 11.0537 3.79019 11.019 3.75537 10.9842C3.76298 11.1884 3.78916 11.3929 3.8348 11.5958C4.24757 13.4306 6.09537 14.4351 8.21827 13.7576C10.1825 13.1307 11.3382 11.3971 11.1731 9.68799Z", fill: "#FFE971" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8289 9.68799C13.8905 9.81475 13.9542 9.94142 14.02 10.0673C14.3079 11.5381 15.3758 12.7369 16.8224 13.1986C18.6677 13.7875 20.4828 12.9709 21.1411 11.0884C21.1766 11.0538 21.2118 11.0191 21.2466 10.9843C21.239 11.1885 21.2128 11.393 21.1672 11.5959C20.7544 13.4308 18.9066 14.4353 16.7837 13.7578C14.8194 13.1309 13.6636 11.3971 13.8289 9.68799Z", fill: "#FFD800" }),
        React__default.createElement("path", { d: "M16.25 7.99219C16.25 9.80885 14.5431 11.0547 12.4375 11.0547C10.3319 11.0547 8.625 9.80885 8.625 7.99219C8.625 6.17553 10.3319 4.92969 12.4375 4.92969C14.5431 4.92969 16.25 6.17553 16.25 7.99219Z", fill: "#FFC700" }),
        React__default.createElement("path", { d: "M14.5349 6.09354C14.807 7.1091 13.4021 6.71163 11.9077 7.11205C10.4134 7.51246 9.39541 8.55914 9.12329 7.54357C8.85117 6.52801 9.87598 5.50694 11.3704 5.10652C12.8647 4.70611 14.2628 5.07797 14.5349 6.09354Z", fill: "#FFD800" }),
        React__default.createElement("path", { d: "M11.0893 10.2853C10.7875 9.70556 11.9478 9.89409 13.237 9.49295C14.5262 9.09181 15.3014 7.75528 15.5484 8.54928C15.7955 9.34329 14.9187 10.2079 13.6295 10.609C12.3403 11.0102 11.3911 10.865 11.0893 10.2853Z", fill: "#FFAF00" }),
        React__default.createElement("path", { d: "M12.979 5.80657C13.1079 6.28763 12.3191 6.1324 11.4591 6.36283C10.5992 6.59326 9.99366 7.1221 9.86476 6.64104C9.73586 6.15998 10.3446 5.64328 11.2046 5.41284C12.0646 5.18241 12.8501 5.32552 12.979 5.80657Z", fill: "#FEED8D" }),
        React__default.createElement("path", { d: "M11.7222 8.09327C11.7222 8.76484 11.4227 9.01955 11.0533 9.01955C10.6838 9.01955 10.3843 8.76484 10.3843 8.09327C10.3843 7.4217 10.6838 7.16699 11.0533 7.16699C11.4227 7.16699 11.7222 7.4217 11.7222 8.09327Z", fill: "#FEED8D" }),
        React__default.createElement("path", { d: "M11.7222 7.94581C11.7222 8.61738 11.4227 8.87209 11.0533 8.87209C10.6838 8.87209 10.3843 8.61738 10.3843 7.94581C10.3843 7.27424 10.6838 7.01953 11.0533 7.01953C11.4227 7.01953 11.7222 7.27424 11.7222 7.94581Z", fill: "#CC240E" }),
        React__default.createElement("path", { d: "M11.4119 7.41061C11.4587 7.67736 11.217 7.57296 10.9599 7.67813C10.7028 7.78331 10.5276 8.05822 10.4808 7.79148C10.434 7.52473 10.6103 7.25654 10.8674 7.15136C11.1245 7.04619 11.3651 7.14386 11.4119 7.41061Z", fill: "#FA7048" }),
        React__default.createElement("path", { d: "M10.796 8.61486C10.7456 8.421 10.9921 8.50242 11.2088 8.3668C11.4256 8.23119 11.5783 7.83458 11.6194 8.10027C11.6605 8.36596 11.4909 8.60461 11.2742 8.74023C11.0575 8.87584 10.8465 8.80873 10.796 8.61486Z", fill: "#9F0400" }),
        React__default.createElement("path", { d: "M14.1924 8.09327C14.1924 8.76484 13.8929 9.01955 13.5235 9.01955C13.154 9.01955 12.8545 8.76484 12.8545 8.09327C12.8545 7.4217 13.154 7.16699 13.5235 7.16699C13.8929 7.16699 14.1924 7.4217 14.1924 8.09327Z", fill: "#FEED8D" }),
        React__default.createElement("path", { d: "M14.1924 7.94581C14.1924 8.61738 13.8929 8.87209 13.5235 8.87209C13.154 8.87209 12.8545 8.61738 12.8545 7.94581C12.8545 7.27424 13.154 7.01953 13.5235 7.01953C13.8929 7.01953 14.1924 7.27424 14.1924 7.94581Z", fill: "#CC240E" }),
        React__default.createElement("path", { d: "M13.8821 7.41061C13.9289 7.67736 13.6872 7.57296 13.4301 7.67813C13.173 7.78331 12.9978 8.05822 12.951 7.79148C12.9042 7.52473 13.0805 7.25654 13.3376 7.15136C13.5947 7.04619 13.8353 7.14386 13.8821 7.41061Z", fill: "#FA7048" }),
        React__default.createElement("path", { d: "M13.2663 8.61486C13.2158 8.421 13.4623 8.50242 13.6791 8.3668C13.8958 8.23119 14.0485 7.83458 14.0896 8.10027C14.1307 8.36596 13.9612 8.60461 13.7444 8.74023C13.5277 8.87584 13.3167 8.80873 13.2663 8.61486Z", fill: "#9F0400" }),
        React__default.createElement("path", { d: "M24.3751 9.78352C24.3751 10.8765 23.4126 11.6261 22.2254 11.6261C21.0381 11.6261 20.0757 10.8765 20.0757 9.78352C20.0757 8.6905 21.0381 7.94092 22.2254 7.94092C23.4126 7.94092 24.3751 8.6905 24.3751 9.78352Z", fill: "#FFC700" }),
        React__default.createElement("path", { d: "M23.4327 8.66844C23.5873 9.24565 22.7888 9.01974 21.9395 9.24732C21.0902 9.47491 20.5116 10.0698 20.3569 9.49259C20.2023 8.91538 20.7847 8.33504 21.6341 8.10746C22.4834 7.87987 23.278 8.09123 23.4327 8.66844Z", fill: "#FFD800" }),
        React__default.createElement("path", { d: "M21.468 11.1604C21.2965 10.8309 21.956 10.938 22.6887 10.7101C23.4214 10.4821 23.862 9.72242 24.0024 10.1737C24.1429 10.625 23.6445 11.1164 22.9118 11.3444C22.179 11.5724 21.6396 11.4899 21.468 11.1604Z", fill: "#FFAF00" }),
        React__default.createElement("path", { d: "M22.5483 8.5052C22.6216 8.77861 22.1733 8.69038 21.6845 8.82135C21.1957 8.95232 20.8516 9.2529 20.7783 8.97948C20.705 8.70606 21.051 8.41238 21.5398 8.28141C22.0286 8.15044 22.4751 8.23178 22.5483 8.5052Z", fill: "#FEED8D" }),
        React__default.createElement("path", { d: "M4.92439 9.78352C4.92439 10.8765 3.96194 11.6261 2.7747 11.6261C1.58745 11.6261 0.625 10.8765 0.625 9.78352C0.625 8.6905 1.58745 7.94092 2.7747 7.94092C3.96194 7.94092 4.92439 8.6905 4.92439 9.78352Z", fill: "#FFC700" }),
        React__default.createElement("path", { d: "M3.982 8.66844C4.13667 9.24565 3.33817 9.01974 2.48882 9.24732C1.63947 9.47491 1.0609 10.0698 0.906238 9.49259C0.751574 8.91538 1.33404 8.33504 2.18339 8.10746C3.03274 7.87987 3.82734 8.09123 3.982 8.66844Z", fill: "#FFD800" }),
        React__default.createElement("path", { d: "M2.01735 11.1604C1.8458 10.8309 2.5053 10.938 3.23802 10.7101C3.97074 10.4821 4.41134 9.72242 4.55176 10.1737C4.69218 10.625 4.19381 11.1164 3.46109 11.3444C2.72837 11.5724 2.1889 11.4899 2.01735 11.1604Z", fill: "#FFAF00" }),
        React__default.createElement("path", { d: "M3.09716 8.5052C3.17042 8.77861 2.72209 8.69038 2.23331 8.82135C1.74453 8.95232 1.40038 9.2529 1.32712 8.97948C1.25386 8.70606 1.59985 8.41238 2.08863 8.28141C2.57742 8.15044 3.0239 8.23178 3.09716 8.5052Z", fill: "#FEED8D" }),
        React__default.createElement("path", { d: "M21 21.4833C21 22.5878 20.7489 23.0547 12.4375 23.0547C4.12611 23.0547 3.875 22.5878 3.875 21.4833C3.875 20.3787 4.12611 20.3047 12.4375 20.3047C20.7489 20.3047 21 20.3787 21 21.4833Z", fill: "#D8D8D8" }),
        React__default.createElement("path", { d: "M14.6123 21.583C14.5965 22.6393 13.9077 22.7662 9.15269 22.6767C5.64021 22.6106 4.71703 22.5202 4.72814 21.7777C4.73925 21.0352 5.09021 20.7512 9.18036 20.8281C13.9354 20.9176 14.6234 20.8405 14.6123 21.583Z", fill: "#EFF3F5" }),
        React__default.createElement("path", { d: "M5.36878 22.06C5.19105 21.8607 5.32313 21.5819 5.55794 21.3186C5.79275 21.0553 6.04136 20.9072 6.21909 21.1065C6.39682 21.3058 6.26473 21.5845 6.02992 21.8478C5.79512 22.1111 5.54651 22.2593 5.36878 22.06Z", fill: "#7D7D7D" }),
        React__default.createElement("path", { d: "M5.33188 22.0183C5.18225 21.8505 5.32355 21.5821 5.55836 21.3188C5.79317 21.0555 6.03256 20.897 6.18219 21.0648C6.33181 21.2326 6.19051 21.501 5.9557 21.7644C5.7209 22.0277 5.4815 22.1861 5.33188 22.0183Z", fill: "#373333" }),
        React__default.createElement("path", { d: "M19.1715 22.06C18.9938 21.8607 19.1259 21.5819 19.3607 21.3186C19.5955 21.0553 19.8441 20.9072 20.0218 21.1065C20.1995 21.3058 20.0675 21.5845 19.8327 21.8478C19.5978 22.1111 19.3492 22.2593 19.1715 22.06Z", fill: "#7D7D7D" }),
        React__default.createElement("path", { d: "M19.1374 22.0217C18.9855 21.8514 19.1261 21.5821 19.3609 21.3188C19.5957 21.0555 19.8358 20.8979 19.9877 21.0682C20.1397 21.2386 19.9991 21.5079 19.7643 21.7712C19.5295 22.0345 19.2893 22.1921 19.1374 22.0217Z", fill: "#373333" }),
        React__default.createElement("path", { d: "M8.71657 22.2374C8.50579 22.001 8.66243 21.6704 8.94091 21.3581C9.21938 21.0459 9.51422 20.8702 9.725 21.1066C9.93579 21.3429 9.77914 21.6736 9.50066 21.9858C9.22219 22.2981 8.92735 22.4738 8.71657 22.2374Z", fill: "#7D7D7D" }),
        React__default.createElement("path", { d: "M8.65967 22.1742C8.49136 21.9854 8.66193 21.6704 8.9404 21.3581C9.21887 21.0459 9.4998 20.8546 9.66811 21.0433C9.83643 21.2321 9.66585 21.5471 9.38738 21.8594C9.10891 22.1716 8.82799 22.3629 8.65967 22.1742Z", fill: "#373333" }),
        React__default.createElement("path", { d: "M15.8196 22.2374C15.6088 22.001 15.7655 21.6704 16.0439 21.3581C16.3224 21.0459 16.6172 20.8702 16.828 21.1066C17.0388 21.3429 16.8822 21.6736 16.6037 21.9858C16.3252 22.2981 16.0304 22.4738 15.8196 22.2374Z", fill: "#7D7D7D" }),
        React__default.createElement("path", { d: "M15.7716 22.1835C15.597 21.9878 15.7656 21.6705 16.0441 21.3582C16.3225 21.0459 16.6055 20.857 16.78 21.0527C16.9545 21.2483 16.786 21.5656 16.5075 21.8779C16.229 22.1902 15.9461 22.3792 15.7716 22.1835Z", fill: "#373333" }),
        React__default.createElement("path", { d: "M12.1406 22.3976C11.8957 22.1229 12.0777 21.7387 12.4013 21.3759C12.7249 21.013 13.0675 20.8089 13.3125 21.0835C13.5574 21.3582 13.3754 21.7424 13.0518 22.1053C12.7282 22.4681 12.3856 22.6723 12.1406 22.3976Z", fill: "#7D7D7D" }),
        React__default.createElement("path", { d: "M12.0921 22.3438C11.8835 22.1098 12.0775 21.7389 12.401 21.3761C12.7246 21.0132 13.0554 20.7957 13.264 21.0297C13.4726 21.2636 13.2787 21.6345 12.9551 21.9974C12.6315 22.3602 12.3008 22.5777 12.0921 22.3438Z", fill: "#373333" }),
        React__default.createElement("path", { d: "M12.0489 13.7369C12.2981 13.494 12.7019 13.494 12.9511 13.7369L14.8132 15.5524C15.0623 15.7953 15.0623 16.1891 14.8132 16.432L12.9511 18.2475C12.7019 18.4904 12.2981 18.4904 12.0489 18.2475L10.1868 16.432C9.93772 16.1891 9.93772 15.7953 10.1868 15.5524L12.0489 13.7369Z", fill: "#FFE971" }),
        React__default.createElement("path", { d: "M12.4726 13.2256V15.5732H10.125C10.125 15.4162 10.1849 15.2593 10.3046 15.1396L12.039 13.4052C12.1587 13.2855 12.3157 13.2256 12.4726 13.2256Z", fill: "#FA7048" }),
        React__default.createElement("path", { d: "M12.4726 17.9209V15.5733H10.125C10.125 15.7302 10.1849 15.8872 10.3046 16.0069L12.039 17.7413C12.1587 17.861 12.3157 17.9209 12.4726 17.9209Z", fill: "#CC240E" }),
        React__default.createElement("path", { d: "M12.4727 13.2256V15.5732H14.8203C14.8203 15.4162 14.7604 15.2593 14.6407 15.1396L12.9063 13.4052C12.7866 13.2855 12.6296 13.2256 12.4727 13.2256Z", fill: "#CC240E" }),
        React__default.createElement("path", { d: "M12.4727 17.9209V15.5733H14.8203C14.8203 15.7302 14.7604 15.8872 14.6407 16.0069L12.9063 17.7413C12.7866 17.861 12.6296 17.9209 12.4727 17.9209Z", fill: "#9F0400" }),
        React__default.createElement("path", { d: "M18.6595 15.807C18.7972 15.6548 19.0203 15.6548 19.158 15.807L20.1869 16.9442C20.3246 17.0964 20.3246 17.343 20.1869 17.4952L19.158 18.6324C19.0203 18.7846 18.7972 18.7846 18.6595 18.6324L17.6306 17.4952C17.4929 17.343 17.4929 17.0964 17.6306 16.9442L18.6595 15.807Z", fill: "#FFE971" }),
        React__default.createElement("path", { d: "M18.9132 15.5596V16.9244H17.5483C17.5483 16.8332 17.5831 16.742 17.6528 16.6724L18.6611 15.664C18.7307 15.5944 18.822 15.5596 18.9132 15.5596Z", fill: "#FA7048" }),
        React__default.createElement("path", { d: "M18.9132 18.2896V16.9247H17.5483C17.5483 17.0159 17.5831 17.1072 17.6528 17.1768L18.6611 18.1851C18.7307 18.2547 18.822 18.2896 18.9132 18.2896Z", fill: "#CC240E" }),
        React__default.createElement("path", { d: "M18.9134 15.5596V16.9245H20.2783C20.2783 16.8332 20.2435 16.742 20.1739 16.6724L19.1655 15.664C19.0959 15.5944 19.0047 15.5596 18.9134 15.5596Z", fill: "#CC240E" }),
        React__default.createElement("path", { d: "M18.9134 18.2896V16.9247H20.2783C20.2783 17.0159 20.2435 17.1072 20.1739 17.1768L19.1655 18.1851C19.0959 18.2547 19.0047 18.2896 18.9134 18.2896Z", fill: "#9F0400" }),
        React__default.createElement("path", { d: "M5.64194 15.807C5.77959 15.6548 6.00277 15.6548 6.14042 15.807L7.16936 16.9442C7.30701 17.0964 7.30701 17.343 7.16936 17.4952L6.14042 18.6324C6.00277 18.7846 5.77959 18.7846 5.64194 18.6324L4.613 17.4952C4.47535 17.343 4.47535 17.0964 4.613 16.9442L5.64194 15.807Z", fill: "#FFE971" }),
        React__default.createElement("path", { d: "M5.90931 15.5596V16.9245H4.54443C4.54443 16.8332 4.57924 16.742 4.64885 16.6724L5.65722 15.664C5.72683 15.5944 5.81807 15.5596 5.90931 15.5596Z", fill: "#FA7048" }),
        React__default.createElement("path", { d: "M5.90931 18.2896V16.9247H4.54443C4.54443 17.0159 4.57924 17.1072 4.64885 17.1768L5.65722 18.1851C5.72683 18.2547 5.81807 18.2896 5.90931 18.2896Z", fill: "#CC240E" }),
        React__default.createElement("path", { d: "M5.90905 15.5596V16.9245H7.27393C7.27393 16.8332 7.23912 16.742 7.16951 16.6724L6.16114 15.664C6.09153 15.5944 6.00029 15.5596 5.90905 15.5596Z", fill: "#CC240E" }),
        React__default.createElement("path", { d: "M5.90905 18.2896V16.9247H7.27393C7.27393 17.0159 7.23912 17.1072 7.16951 17.1768L6.16114 18.1851C6.09153 18.2547 6.00029 18.2896 5.90905 18.2896Z", fill: "#9F0400" })));
};

var Icon$1H = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M13 7C13 6.44772 12.5523 6 12 6C11.4478 6 11 6.44772 11 7V7.51206C9.97631 7.76875 9.16137 8.59434 8.94664 9.66796C8.60189 11.3917 9.92035 13 11.6783 13H12.7143C13.1483 13 13.5 13.3518 13.5 13.7857C13.5 14.2197 13.1483 14.5714 12.7143 14.5714H11.4947C11.3096 14.5714 11.1282 14.5201 10.9706 14.4231L10.5241 14.1483C10.0538 13.8589 9.43783 14.0055 9.14838 14.4759C8.85893 14.9463 9.00559 15.5622 9.47594 15.8517L9.92241 16.1264C10.2535 16.3302 10.6197 16.4668 11 16.5304V17C11 17.5523 11.4478 18 12 18C12.5523 18 13 17.5523 13 17V16.557C14.4043 16.4139 15.5 15.2278 15.5 13.7857C15.5 12.2472 14.2528 11 12.7143 11H11.6783C11.1824 11 10.8106 10.5464 10.9078 10.0602C10.9813 9.69293 11.3037 9.42857 11.6783 9.42857H12.2948C12.5269 9.42857 12.7494 9.52076 12.9135 9.68485L13.0786 9.84996C13.4692 10.2405 14.1023 10.2405 14.4929 9.84996C14.8834 9.45944 14.8834 8.82627 14.4929 8.43575L14.3278 8.27064C13.9582 7.90106 13.4983 7.64249 13 7.5164V7Z" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12Z" })));
};

var Icon$1G = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default.createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
            React__default.createElement("g", { transform: "translate(-1461.000000, -1406.000000)" },
                React__default.createElement("g", { transform: "translate(1461.000000, 1406.000000)" },
                    React__default.createElement("path", { d: "M31.6493256,47.9795489 C31.5988828,47.9331416 31.5428913,47.8468844 31.4904308,47.8468844 C30.93556,47.8468844 30.4755217,47.5568383 30.0064036,47.3283324 C29.7037468,47.1815439 29.4379133,46.9409317 29.194779,46.7023373 C28.8563078,46.3689104 28.5057303,46.0299347 28.2509942,45.6344632 C27.9962581,45.2389916 27.7622035,44.8157766 27.6376098,44.325977 C27.455763,43.5991093 27.3662781,42.8522157 27.3712718,42.1029628 C27.3712718,38.9714738 27.3652186,35.838976 27.3788382,32.707487 C27.3764673,32.2393356 27.4303222,31.7725932 27.5392463,31.3172835 C27.7217338,30.5888871 28.0606597,29.9089698 28.532465,29.3247929 C28.8858031,28.8857593 29.3099755,28.5088118 29.7874819,28.2095026 C30.1708471,27.968386 30.6086906,27.8009159 31.040481,27.6546318 C31.7249898,27.4220905 32.4422864,27.3721521 33.1621051,27.3721521 C36.2774524,27.3721521 39.3927997,27.3655946 42.5086514,27.3792141 C43.0370975,27.377851 43.564236,27.4317821 44.0814579,27.5401266 C44.4991243,27.6309237 44.8986313,27.8306772 45.2880497,28.0183244 C45.8096282,28.2705384 46.2388964,28.6468417 46.6399167,29.064508 C47.0686805,29.5114312 47.4439749,30.0082928 47.6407018,30.5828363 C47.842473,31.1699905 48.00389,31.7742952 47.9999286,32.4250073 C47.975642,36.0185524 47.9847217,39.6120974 47.9877483,43.2061468 C47.9877483,43.6480258 47.8364199,44.0460194 47.723428,44.462677 C47.6268799,44.837828 47.4607335,45.1915094 47.2336284,45.5053296 C46.9299209,45.9217045 46.5986077,46.3172243 46.241923,46.6892221 C45.8426723,47.0941649 45.3609743,47.4084729 44.8295246,47.6108121 C44.5773106,47.7116977 44.3044151,47.7530608 44.0446347,47.8347781 C43.9543421,47.8630261 43.8761557,47.9306194 43.7924207,47.9800534 L31.6493256,47.9795489 Z M37.7059925,44.47327 C39.4608975,44.47327 41.2158025,44.4687301 42.9707075,44.4773054 C43.2841461,44.48218 43.5901067,44.3814369 43.8393325,44.1912947 C44.3387162,43.8230623 44.5127439,43.317121 44.5117394,42.7173561 C44.5076996,39.3588745 44.5117394,36.0003929 44.5041686,32.6419114 C44.5041686,32.3513608 44.4880269,32.0668635 44.3230789,31.7803484 C43.9730059,31.1750348 43.5008613,30.872378 42.7946621,30.872378 C39.3938086,30.8814577 35.992955,30.875909 32.5921015,30.8779267 C32.4251358,30.8779267 32.248586,30.8693514 32.0927178,30.9172721 C31.4874042,31.1023971 30.8760375,31.845924 30.882046,32.5733092 C30.9057987,35.965083 30.889657,39.3573612 30.8977279,42.7496395 C30.9037433,42.9788319 30.9473687,43.2054794 31.0268614,43.4205287 C31.2790754,44.1413563 31.7628219,44.47327 32.5169417,44.4737744 L37.7059925,44.47327 Z", fill: "#FAB126", fillRule: "nonzero" }),
                    React__default.createElement("path", { d: "M0,4.19015483 C0.0504427993,4.10692421 0.131151278,4.02873787 0.146284118,3.93794083 C0.23551691,3.42542011 0.445040356,2.94137254 0.757650846,2.52554245 C0.997254143,2.19917754 1.18994564,1.82438754 1.47847845,1.55098757 C1.91531309,1.13735661 2.35416545,0.704052965 2.93324878,0.475547084 C3.32619819,0.320183262 3.72267859,0.172890288 4.12067228,0.02912831 C4.19438677,0.012147971 4.27038777,0.00737660767 4.34564716,0.0150043262 C8.28371651,0.0150043262 12.2217859,0.00743790627 16.1598552,0.0240840301 C16.4842024,0.0240840301 16.8156116,0.168350436 17.1288614,0.276298027 C17.387789,0.355983578 17.6349469,0.469808529 17.863813,0.61476921 C18.2833013,0.891412222 18.6830951,1.19681969 19.0603162,1.52879273 C19.3387413,1.7794027 19.5788849,2.06951257 19.7730729,2.38985132 C19.9975434,2.76514575 20.2083943,3.14649331 20.3420677,3.58282352 C20.6840699,4.69710496 20.6169809,5.83156352 20.6200075,6.96249108 C20.6274058,9.65748171 20.6262288,12.3526405 20.6164765,15.0479674 C20.6139544,15.5650061 20.588733,16.0946555 20.4701924,16.5940392 C20.3621729,17.0855156 20.1747582,17.5560966 19.9153216,17.9872693 C19.6252755,18.4533608 19.306477,18.8952397 18.8928461,19.2448083 C18.5525487,19.52398 18.1896231,19.7743666 17.8078215,19.9933794 C17.2771632,20.3101602 16.6854692,20.4196211 16.0746069,20.5179845 C15.3270446,20.6380384 14.5855354,20.605755 13.8420086,20.6087816 C11.0373889,20.6185339 8.23276928,20.617525 5.42814964,20.605755 C4.92472804,20.6084487 4.4225765,20.5549851 3.93100735,20.4463558 C3.37613656,20.3157089 2.82126577,20.1149466 2.36072301,19.7613426 C1.9186542,19.4292217 1.51120127,19.0533713 1.14454712,18.6394947 C0.825748625,18.2677313 0.589676324,17.8203036 0.346037603,17.390531 C0.250196285,17.2230609 0.234559017,17.0106967 0.175036514,16.8210318 C0.124593714,16.6560838 0.0600269312,16.4946669 0.00151328398,16.3317366 L0,4.19015483 Z M10.2903311,3.52884973 L10.2903311,3.51371689 C8.63631168,3.51371689 6.98178786,3.50816818 5.32726404,3.51876117 C5.00443012,3.51876117 4.67705636,3.47437151 4.364311,3.67008957 C3.91486566,3.95458695 3.56378377,4.28650057 3.51989854,4.84540679 C3.49619042,5.14806359 3.48761515,5.45072038 3.48711072,5.75337718 C3.48509301,8.85998105 3.48509301,11.9667531 3.48711072,15.0736932 C3.48711072,15.3259072 3.48357972,15.5816522 3.53099595,15.8257954 C3.57135019,16.0310975 3.63843912,16.2631344 3.77312139,16.4109318 C4.16556637,16.8422178 4.63064898,17.1211664 5.26118397,17.1171742 C8.62874526,17.1025026 11.9963065,17.1125912 15.3638678,17.1045203 C15.5807719,17.1045203 15.803729,17.0414668 16.0130667,16.973369 C16.6274599,16.7715978 17.1384455,16.0875935 17.1334383,15.344571 C17.1117108,12.0446031 17.1217994,8.74463518 17.1273481,5.44517168 C17.1273481,5.08147909 17.107171,4.73291935 16.9427274,4.39898802 C16.7515492,4.01007403 16.2082803,3.52380545 15.7321003,3.52531873 C13.9191861,3.53238072 12.105263,3.52884973 10.2913399,3.52884973 L10.2903311,3.52884973 Z", fill: "#FAB126", fillRule: "nonzero" }),
                    React__default.createElement("path", { d: "M0,31.6512148 C0.100885599,31.3631864 0.195718061,31.071627 0.309718788,30.7881385 C0.428763794,30.4915348 0.536206957,30.1828249 0.707208047,29.9154781 C0.922231597,29.5830795 1.16868324,29.2721011 1.44316849,28.9868261 C1.83309133,28.5787439 2.25731527,28.202945 2.79049566,27.9779701 C3.13703769,27.8337037 3.48257087,27.6874196 3.8291129,27.5431532 C3.86018652,27.53057 3.89303298,27.5229115 3.9264675,27.520454 C4.51866597,27.4700112 5.11136886,27.3777008 5.70407175,27.3746743 C8.84430415,27.360214 11.9843684,27.360214 15.1242645,27.3746743 C15.6434549,27.3737397 16.161255,27.4283607 16.668823,27.5376045 C17.085985,27.6309237 17.4870052,27.8266417 17.8744059,28.0188288 C18.4054518,28.2889518 18.8809795,28.6565062 19.2762113,29.1023401 C19.7190991,29.590122 20.0797651,30.1318777 20.2850673,30.7477843 C20.5096077,31.4284603 20.6222133,32.1410608 20.6184942,32.8578065 C20.6228659,36.1069954 20.6215208,39.3560161 20.6144588,42.6048687 C20.6144588,43.0618804 20.5806621,43.5330162 20.4631304,43.9718685 C20.3375278,44.4530928 20.1266769,44.9181754 19.9042242,45.3656031 C19.5087526,46.1605816 18.8696424,46.7386561 18.1301509,47.2102962 C17.6504399,47.5159796 17.1571093,47.7903884 16.5694507,47.835787 C16.4842024,47.8423445 16.4055116,47.9270884 16.3237943,47.9755135 L4.23315972,47.9755135 C4.16455751,47.9280973 4.09645973,47.8423445 4.02583982,47.8398224 C3.46088046,47.8186364 2.96301003,47.5639003 2.5226444,47.2763763 C1.8164452,46.8143203 1.17077737,46.2614672 0.750084426,45.4866658 C0.49787043,45.0220876 0.233045733,44.5736511 0.152337254,44.0404707 C0.138717698,43.9521958 0.0514516553,43.8750184 0.00100885599,43.7927966 L0,31.6512148 Z M10.2827646,44.4717567 L15.4970368,44.4717567 C15.7724545,44.4717567 16.0327393,44.4535973 16.2839445,44.2952069 C16.7676909,43.9925501 17.1021267,43.5461313 17.1066665,43.0099243 C17.1369322,39.4920435 17.1273481,35.9746671 17.1137285,32.4567863 C17.1067862,32.1984879 17.0302833,31.9468473 16.8922846,31.7283923 C16.5270788,31.1563709 16.0241641,30.8557318 15.2942568,30.8621844 C12.3554593,30.8905374 9.41666178,30.8738913 6.47786429,30.8743957 C5.96586988,30.8743957 5.45185775,30.8562363 4.94188105,30.8915462 C4.70332655,30.9132303 4.47335943,30.9913845 4.27099182,31.1195477 C3.70704132,31.4761783 3.48206644,32.0138985 3.48357214,32.679239 C3.492155,35.9953487 3.48357214,39.3114583 3.49518157,42.6275679 C3.49518157,42.9403133 3.4795443,43.2581029 3.65306753,43.5703438 C3.97640587,44.1519493 4.40970952,44.4783142 5.09371388,44.4748116 C6.82339747,44.4672168 8.55308106,44.47327 10.2827646,44.47327 L10.2827646,44.4717567 Z", fill: "#FAB126", fillRule: "nonzero" }),
                    React__default.createElement("path", { d: "M37.7392848,0.0144998982 C39.6873857,0.0144998982 41.6354866,0.00340248232 43.5835875,0.025597314 C43.8963328,0.02912831 44.2136181,0.164315012 44.5182926,0.268731607 C44.7890063,0.364938652 45.0523435,0.480759831 45.3062091,0.615273638 C45.8520002,0.897753315 46.2928702,1.31239313 46.7085189,1.7588119 C47.0853266,2.16235429 47.3446026,2.64458746 47.6164893,3.11622763 C47.7091312,3.29148251 47.772838,3.4805589 47.8051454,3.6761427 C47.8782874,4.04891499 47.9746332,4.42622713 47.9776597,4.80253041 C47.9948103,7.26262574 47.9902704,9.72272106 47.9909642,12.1828164 C47.9909642,13.4000011 47.9811907,14.6171859 47.9867394,15.8348751 C47.9867394,16.2757451 47.835411,16.67273 47.7239325,17.0878742 C47.6246221,17.4678033 47.4533884,17.8251681 47.2195045,18.1406154 C46.900751,18.5798766 46.5435533,18.9899112 46.1521348,19.365871 C45.8293009,19.6685278 45.4287851,19.887954 45.0529862,20.1300794 C44.9379767,20.2037259 44.7942147,20.238027 44.659028,20.2743458 C44.3800793,20.3495056 44.1041572,20.4397982 43.8171376,20.476117 C41.76916,20.7510303 39.7100849,20.5734716 37.6560541,20.6082772 C36.0272561,20.6355163 34.3979537,20.6254277 32.7691557,20.6082772 C32.2864181,20.6027284 31.790061,20.5664096 31.3269961,20.4433292 C30.8678797,20.321741 30.4268784,20.1399128 30.0154833,19.9025824 C29.5155952,19.6150584 29.0661498,19.282136 28.7039705,18.8513545 C28.3417912,18.420573 28.0129042,17.9797029 27.8081064,17.4485402 C27.655838,17.0411857 27.5441542,16.6197946 27.4746795,16.1904968 C27.3470592,15.4631116 27.3737939,14.7372397 27.3737939,14.0098546 C27.3693158,11.1295707 27.3647142,8.24979132 27.3788382,5.3700119 C27.3777133,4.8929967 27.4311945,4.41742037 27.5382374,3.95256924 C27.6478667,3.47932983 27.8353778,3.02759854 28.0931082,2.61583506 C28.3387647,2.22742551 28.592492,1.85667093 28.9158303,1.53131487 C29.3985679,1.04655957 29.930235,0.614264782 30.5653098,0.364068498 C31.1131186,0.147668888 31.6811046,-0.00870378952 32.2970111,0.000375914362 C34.1129519,0.027110598 35.9243528,0.00996004624 37.7382759,0.00996004624 L37.7392848,0.0144998982 Z M37.6716914,3.52683202 L37.6716914,3.51371689 C36.0166632,3.51371689 34.3621393,3.50867261 32.7076155,3.51825674 C32.3827639,3.51825674 32.0553901,3.48345121 31.7436536,3.68270027 C31.2341814,4.00856075 30.9007544,4.43934226 30.8987367,5.04465585 C30.8886482,8.56354553 30.889657,12.0824352 30.9017633,15.6013249 C30.9017633,15.8222644 30.956746,16.0845669 31.0838618,16.2570813 C31.450581,16.7504119 31.9121326,17.1146089 32.582013,17.1146089 C36.0003533,17.1105735 39.4188618,17.1115823 42.8375385,17.1176354 C43.275382,17.1176354 43.6153665,16.9269617 43.9447579,16.6918982 C44.4118583,16.3589757 44.5107261,15.863123 44.5102236,15.3299426 C44.5102236,11.9872665 44.5087084,8.64459029 44.5056819,5.30191413 C44.5056819,4.98412449 44.5056819,4.66734371 44.3230789,4.36216477 C44.039086,3.88850689 43.6824554,3.53843386 43.1124517,3.53389401 C41.300042,3.51775231 39.4856145,3.52683202 37.6716914,3.52683202 Z", fill: "#FAB126", fillRule: "nonzero" }))))));
};

var Icon$1F = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 13 7" }, props),
        React__default.createElement("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
            React__default.createElement("g", { transform: "translate(-1597.000000, -58.000000)", fill: "#F4F9F6" },
                React__default.createElement("polygon", { points: "1603.5 65.003 1597 58.943 1598.01 58 1603.5 63.117 1608.99 58.003 1610 58.946" })))));
};

var Icon$1E = function (props) { return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.4063 19.9329C12.066 19.9329 12.6742 19.779 13.207 19.5106V21.6632C12.6449 21.8378 12.0415 21.9329 11.4063 21.9329H7.00792C2.52538 21.9329 -0.374267 17.1964 1.66429 13.2043L3.70684 9.20426C4.30576 8.03138 5.25922 7.11243 6.39803 6.55101L5.46396 4.68288C5.08785 3.93066 5.54693 3.02913 6.3765 2.89087L11.6153 2.01773C12.5647 1.8595 13.3292 2.78847 12.9912 3.68962L11.9333 6.51092C13.1087 7.06815 14.094 8.00302 14.7074 9.20426L16.6114 12.9329H14.3657L12.9261 10.1138C12.2427 8.77534 10.8666 7.93292 9.36372 7.93292H9.05047C7.54759 7.93292 6.17153 8.77534 5.48805 10.1138L3.4455 14.1138C2.08646 16.7753 4.01956 19.9329 7.00792 19.9329H11.4063ZM10.6623 4.20415L7.70695 4.69671L8.32504 5.93291H10.014L10.6623 4.20415Z" }),
    React__default.createElement("path", { d: "M14.707 13.9329C14.4309 13.9329 14.207 14.1568 14.207 14.4329V15.4329C14.207 15.7091 14.4309 15.9329 14.707 15.9329H20.707C20.9832 15.9329 21.207 15.7091 21.207 15.4329V14.4329C21.207 14.1568 20.9832 13.9329 20.707 13.9329H14.707Z" }),
    React__default.createElement("path", { d: "M15.207 17.4329C15.207 17.1568 15.4309 16.9329 15.707 16.9329H21.707C21.9832 16.9329 22.207 17.1568 22.207 17.4329V18.4329C22.207 18.7091 21.9832 18.9329 21.707 18.9329H15.707C15.4309 18.9329 15.207 18.7091 15.207 18.4329V17.4329Z" }),
    React__default.createElement("path", { d: "M14.707 19.9329C14.4309 19.9329 14.207 20.1568 14.207 20.4329V21.4329C14.207 21.7091 14.4309 21.9329 14.707 21.9329L20.707 21.9329C20.9832 21.9329 21.207 21.7091 21.207 21.4329V20.4329C21.207 20.1568 20.9832 19.9329 20.707 19.9329L14.707 19.9329Z" }),
    React__default.createElement("path", { d: "M9.9212 9.93292C9.9212 9.51871 9.58541 9.18292 9.1712 9.18292C8.75699 9.18292 8.4212 9.51871 8.4212 9.93292V10.2471C7.4372 10.4874 6.70692 11.3749 6.70692 12.4329C6.70692 13.6756 7.71427 14.6829 8.95691 14.6829H9.64423C10.0043 14.6829 10.3136 14.9388 10.381 15.2926C10.469 15.7548 10.1147 16.1829 9.64423 16.1829H8.89883C8.62969 16.1829 8.38118 16.0387 8.24765 15.805L8.1081 15.5608C7.90259 15.2012 7.44445 15.0762 7.08481 15.2817C6.72517 15.4872 6.60023 15.9454 6.80573 16.305L6.94528 16.5492C7.26526 17.1092 7.80531 17.4979 8.4212 17.6317V17.9329C8.4212 18.3471 8.75699 18.6829 9.1712 18.6829C9.58541 18.6829 9.9212 18.3471 9.9212 17.9329V17.6662C11.1913 17.5114 12.101 16.3061 11.8545 15.0119C11.6524 13.9507 10.7245 13.1829 9.64423 13.1829H8.95691C8.5427 13.1829 8.20692 12.8471 8.20692 12.4329C8.20692 12.0187 8.5427 11.6829 8.95691 11.6829H9.44357C9.71272 11.6829 9.96123 11.8271 10.0948 12.0608L10.2343 12.305C10.4398 12.6647 10.898 12.7896 11.2576 12.5841C11.6172 12.3786 11.7422 11.9205 11.5367 11.5608L11.3971 11.3166C11.0771 10.7566 10.5371 10.3679 9.9212 10.2341V9.93292Z" }))); };

var Icon$1D = function (props) { return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.207 19.4326C13.207 18.8803 13.6547 18.4326 14.207 18.4326V16.4326C13.6547 16.4326 13.207 15.9849 13.207 15.4326V13.4326C13.207 12.8803 13.6547 12.4326 14.207 12.4326H16.6114L14.7074 8.70395C14.0154 7.34887 12.8502 6.33275 11.4726 5.81533L12.5232 3.01377C12.726 2.47308 12.2673 1.9157 11.6977 2.01064L6.45885 2.88377C5.96111 2.96673 5.68566 3.50765 5.91133 3.95898L6.85595 5.84823C5.51579 6.37512 4.38442 7.37702 3.70684 8.70395L1.66429 12.704C-0.374266 16.6961 2.52538 21.4326 7.00792 21.4326H11.4063C12.0415 21.4326 12.6449 21.3375 13.207 21.1629V19.4326ZM9.17123 8.68262C9.58544 8.68262 9.92123 9.0184 9.92123 9.43262V9.73384C10.5371 9.86761 11.0772 10.2563 11.3971 10.8163L11.5367 11.0605C11.7422 11.4202 11.6173 11.8783 11.2576 12.0838C10.898 12.2893 10.4398 12.1644 10.2343 11.8047L10.0948 11.5605C9.96125 11.3268 9.71274 11.1826 9.4436 11.1826H8.95694C8.54273 11.1826 8.20694 11.5184 8.20694 11.9326C8.20694 12.3468 8.54273 12.6826 8.95694 12.6826H9.64426C10.7246 12.6826 11.6524 13.4504 11.8545 14.5116C12.101 15.8058 11.1913 17.0111 9.92123 17.1659V17.4326C9.92123 17.8468 9.58544 18.1826 9.17123 18.1826C8.75701 18.1826 8.42123 17.8468 8.42123 17.4326V17.1314C7.80534 16.9976 7.26529 16.6089 6.94531 16.0489L6.80576 15.8047C6.60025 15.4451 6.7252 14.9869 7.08484 14.7814C7.44448 14.5759 7.90262 14.7009 8.10812 15.0605L8.24767 15.3047C8.3812 15.5384 8.62971 15.6826 8.89885 15.6826H9.64426C10.1147 15.6826 10.469 15.2545 10.381 14.7923C10.3136 14.4385 10.0044 14.1826 9.64426 14.1826H8.95694C7.7143 14.1826 6.70694 13.1753 6.70694 11.9326C6.70694 10.8746 7.43722 9.98712 8.42123 9.74678V9.43262C8.42123 9.0184 8.75701 8.68262 9.17123 8.68262Z" }),
    React__default.createElement("path", { d: "M15.7071 16.4326C15.4309 16.4326 15.2071 16.6565 15.2071 16.9326V17.9326C15.2071 18.2088 15.4309 18.4326 15.7071 18.4326H21.7071C21.9832 18.4326 22.2071 18.2088 22.2071 17.9326V16.9326C22.2071 16.6565 21.9832 16.4326 21.7071 16.4326H15.7071Z" }),
    React__default.createElement("path", { d: "M14.7071 13.4326C14.4309 13.4326 14.2071 13.6565 14.2071 13.9326V14.9326C14.2071 15.2088 14.4309 15.4326 14.7071 15.4326H20.7071C20.9832 15.4326 21.2071 15.2088 21.2071 14.9326V13.9326C21.2071 13.6565 20.9832 13.4326 20.7071 13.4326H14.7071Z" }),
    React__default.createElement("path", { d: "M14.7071 19.4326C14.4309 19.4326 14.2071 19.6565 14.2071 19.9326V20.9326C14.2071 21.2088 14.4309 21.4326 14.7071 21.4326L20.7071 21.4326C20.9832 21.4326 21.2071 21.2088 21.2071 20.9326V19.9326C21.2071 19.6565 20.9832 19.4326 20.7071 19.4326L14.7071 19.4326Z" }))); };

var Icon$1C = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 16 5" }, props),
        React__default.createElement("path", { d: "M2 0.00384521C0.9 0.00384521 0 0.903845 0 2.00384C0 3.10384 0.9 4.00384 2 4.00384C3.1 4.00384 4 3.10384 4 2.00384C4 0.903845 3.1 0.00384521 2 0.00384521ZM14 0.00384521C12.9 0.00384521 12 0.903845 12 2.00384C12 3.10384 12.9 4.00384 14 4.00384C15.1 4.00384 16 3.10384 16 2.00384C16 0.903845 15.1 0.00384521 14 0.00384521ZM8 0.00384521C6.9 0.00384521 6 0.903845 6 2.00384C6 3.10384 6.9 4.00384 8 4.00384C9.1 4.00384 10 3.10384 10 2.00384C10 0.903845 9.1 0.00384521 8 0.00384521Z" })));
};

var Icon$1B = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 18", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M9 1.625c2.407 0 2.685.01 3.641.052.874.04 1.358.185 1.666.308.422.165.72.36 1.04.669.318.319.514.617.668 1.039.123.318.267.792.308 1.666.042.946.052 1.234.052 3.641s-.01 2.685-.052 3.641c-.04.874-.185 1.358-.308 1.666-.165.422-.36.72-.669 1.04a2.66 2.66 0 01-1.039.668c-.318.123-.792.267-1.666.308-.946.042-1.234.052-3.641.052s-2.685-.01-3.641-.052c-.874-.04-1.358-.185-1.666-.308a2.911 2.911 0 01-1.04-.669 2.659 2.659 0 01-.668-1.039c-.123-.318-.267-.792-.308-1.666-.042-.946-.052-1.234-.052-3.641s.01-2.685.052-3.641c.04-.874.185-1.358.308-1.666.165-.422.36-.72.669-1.04a2.658 2.658 0 011.039-.668c.318-.123.792-.267 1.666-.308.956-.042 1.234-.052 3.641-.052zM9 0C6.552 0 6.254.01 5.287.051c-.957.052-1.615.196-2.18.422a4.311 4.311 0 00-1.595 1.039A4.311 4.311 0 00.473 3.106c-.226.566-.37 1.224-.422 2.18C.011 6.255 0 6.553 0 9s.01 2.746.051 3.713c.042.957.196 1.615.422 2.18.226.597.535 1.091 1.039 1.595.504.504.998.813 1.594 1.039.576.226 1.224.37 2.18.422.957.04 1.266.051 3.714.051s2.746-.01 3.713-.051c.957-.042 1.615-.196 2.18-.422a4.311 4.311 0 001.595-1.039 4.311 4.311 0 001.039-1.594c.226-.576.37-1.224.422-2.18.04-.957.051-1.266.051-3.714s-.01-2.746-.051-3.713c-.042-.957-.196-1.615-.422-2.18a4.312 4.312 0 00-1.039-1.595A4.311 4.311 0 0014.894.473c-.576-.226-1.224-.37-2.18-.422C11.745.011 11.447 0 9 0z" }),
        React.createElement("path", { d: "M9 4.382a4.618 4.618 0 100 9.236 4.618 4.618 0 000-9.236zm0 7.621A3.007 3.007 0 015.997 9 3.007 3.007 0 019 5.997 3.007 3.007 0 0112.003 9 3.007 3.007 0 019 12.003zM13.803 5.277a1.08 1.08 0 100-2.16 1.08 1.08 0 000 2.16z" })));
};

var Icon$1A = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.97 0C4.464 0 0 4.465 0 9.97c0 4.403 2.875 8.134 6.789 9.48.49.06.673-.245.673-.49v-1.712c-2.753.611-3.364-1.346-3.364-1.346-.428-1.162-1.101-1.468-1.101-1.468-.917-.611.061-.611.061-.611.979.06 1.53 1.04 1.53 1.04.917 1.528 2.323 1.1 2.874.856a2.13 2.13 0 01.611-1.346c-2.201-.245-4.526-1.1-4.526-4.954 0-1.101.367-1.957 1.04-2.691-.061-.184-.428-1.223.122-2.569 0 0 .857-.245 2.753 1.04.795-.245 1.651-.306 2.507-.306.857 0 1.713.122 2.508.306 1.896-1.285 2.752-1.04 2.752-1.04.55 1.346.184 2.385.123 2.63a3.956 3.956 0 011.04 2.691c0 3.853-2.325 4.648-4.527 4.893.367.306.673.918.673 1.835v2.752c0 .245.184.55.673.49A9.98 9.98 0 0020 9.97C19.939 4.464 15.474 0 9.97 0z" })));
};

var Icon$1z = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" })));
};

var Icon$1y = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z" })));
};

var Icon$1x = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 15 15" }, props),
        React__default.createElement("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
            React__default.createElement("g", { transform: "translate(-1500.000000, -52.000000)", fill: "#FFFFFF" },
                React__default.createElement("path", { d: "M1507.5,52 C1503.35786,52 1500,55.3578644 1500,59.5 C1500,63.6421356 1503.35786,67 1507.5,67 C1511.64214,67 1515,63.6421356 1515,59.5 C1515,55.3578644 1511.64214,52 1507.5,52 Z M1513.96,59 L1511.98,59 C1511.96121,57.0897462 1511.38039,55.2273058 1510.31,53.645 C1512.39668,54.6489213 1513.7884,56.6907505 1513.96,59 L1513.96,59 Z M1510.97,59 L1508,59 L1508,53.074 C1509.61,53.5 1510.85,55.958 1510.97,59 Z M1507,53.074 L1507,59 L1504.02,59 C1504.15,55.958 1505.39,53.5 1507,53.074 Z M1504.69,53.645 C1503.61527,55.2252111 1503.03403,57.0889994 1503.02,59 L1501.04,59 C1501.2116,56.6907505 1502.60332,54.6489213 1504.69,53.645 L1504.69,53.645 Z M1501.04,60 L1503.02,60 C1503.03403,61.9110006 1503.61527,63.7747889 1504.69,65.355 C1502.60332,64.3510787 1501.2116,62.3092495 1501.04,60 Z M1504.02,60 L1507,60 L1507,65.926 C1505.39,65.5 1504.15,63.042 1504.02,60 Z M1508,65.926 L1508,60 L1510.97,60 C1510.85,63.042 1509.61,65.5 1508,65.926 Z M1510.31,65.355 C1511.38039,63.7726942 1511.96121,61.9102538 1511.98,60 L1513.96,60 C1513.7884,62.3092495 1512.39668,64.3510787 1510.31,65.355 Z" })))));
};

var Icon$1w = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M1.1423 6.58983C1.049 7.04537 1 7.517 1 8C1 11.864 4.136 15 8 15L8.06193 14.9997C8.12656 14.4816 8.24075 13.9788 8.3996 13.4963C8.26762 13.5058 8.13436 13.5106 8 13.5106C4.96231 13.5106 2.48936 11.0377 2.48936 8C2.48936 4.96231 4.96231 2.48936 8 2.48936C11.0377 2.48936 13.5106 4.96231 13.5106 8C13.5106 8.13436 13.5058 8.26762 13.4963 8.3996C13.9788 8.24075 14.4816 8.12656 14.9997 8.06193L15 8C15 6.31095 14.4008 4.761 13.4035 3.55129C13.1174 3.20432 12.7986 2.88535 12.4518 2.5991C11.2417 1.60025 9.6905 1 8 1C7.11135 1 6.2612 1.16587 5.47885 1.46832C3.28464 2.31657 1.62372 4.23914 1.1423 6.58983Z" }),
        React__default.createElement("path", { d: "M8.00003 3.78014C7.58875 3.78014 7.25535 4.11355 7.25535 4.52482V4.84238C6.54327 5.03587 5.97957 5.61723 5.82913 6.36941C5.58337 7.59822 6.52324 8.74468 7.77638 8.74468H8.49648C8.77067 8.74468 8.99294 8.96695 8.99294 9.24113C8.99294 9.51532 8.77067 9.73759 8.49648 9.73759H7.6488C7.52936 9.73759 7.41227 9.70444 7.31055 9.64185L7.00024 9.45089C6.64998 9.23534 6.19129 9.34455 5.97574 9.69482C5.7602 10.0451 5.86941 10.5038 6.21967 10.7193L6.52998 10.9103C6.75353 11.0478 6.99954 11.1424 7.25535 11.1904V11.4752C7.25535 11.8865 7.58875 12.2199 8.00003 12.2199C8.4113 12.2199 8.74471 11.8865 8.74471 11.4752V11.2116C9.72431 11.0894 10.4823 10.2538 10.4823 9.24113C10.4823 8.1444 9.59322 7.25532 8.49648 7.25532H7.77638C7.4631 7.25532 7.22813 6.9687 7.28957 6.6615C7.33598 6.42945 7.53973 6.26241 7.77638 6.26241H8.20491C8.35304 6.26241 8.49509 6.32125 8.59984 6.426L8.71459 6.54075C9.00541 6.83157 9.47692 6.83157 9.76773 6.54075C10.0585 6.24994 10.0585 5.77843 9.76773 5.48762L9.65297 5.37286C9.39901 5.11889 9.08521 4.93852 8.74471 4.84547V4.52482C8.74471 4.11355 8.4113 3.78014 8.00003 3.78014Z" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9 16.0002C9 12.1361 12.1291 9 15.9932 9C19.8643 9 23.0004 12.136 23.0004 16.0002C23.0004 19.8643 19.8643 23.0004 15.9932 23.0004C12.1291 23.0004 9 19.8643 9 16.0002ZM17.2607 13.1703C16.9706 12.2293 16.5425 11.3516 16.0002 10.5553C15.4579 11.3516 15.0297 12.2293 14.7397 13.1703H17.2607ZM11.2773 13.1703H13.2024C13.4143 12.3535 13.7122 11.5675 14.0961 10.8352C12.9095 11.2722 11.9193 12.0993 11.2773 13.1703ZM17.9043 10.8352C18.2882 11.5675 18.5861 12.3536 18.798 13.1703H20.7229C20.0808 12.1054 19.0906 11.2726 17.9043 10.8352ZM10.6593 14.6597C10.5544 15.09 10.4894 15.5389 10.4894 16.0002C10.4894 16.4615 10.5544 16.9104 10.6593 17.3407H12.9138C12.8614 16.8994 12.8228 16.4565 12.8228 16.0002C12.8228 15.5439 12.8614 15.1009 12.9138 14.6597H10.6593ZM14.4171 14.6597C14.3575 15.097 14.3122 15.5457 14.3122 16.0002C14.3122 16.4549 14.3575 16.8972 14.4171 17.3407H17.5832C17.6428 16.8972 17.6882 16.4549 17.6882 16.0002C17.6882 15.5457 17.6429 15.097 17.5833 14.6597H14.4171ZM19.0866 14.6597C19.139 15.1009 19.1776 15.5439 19.1776 16.0002C19.1776 16.4565 19.139 16.8994 19.0866 17.3407H21.341C21.446 16.9104 21.511 16.4615 21.511 16.0002C21.511 15.5389 21.446 15.09 21.341 14.6597H19.0866ZM13.2024 18.8301H11.2773C11.9193 19.9011 12.9095 20.7281 14.0961 21.1652C13.7122 20.4329 13.4143 19.6468 13.2024 18.8301ZM14.7397 18.8301C15.0297 19.7711 15.4579 20.6488 16.0002 21.4451C16.5425 20.6488 16.9706 19.7711 17.2607 18.8301H14.7397ZM17.9043 21.1652C19.0906 20.7278 20.0808 19.895 20.7229 18.8301H18.798C18.5861 19.6468 18.2882 20.4329 17.9043 21.1652Z" })));
};

var Icon$1v = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default.createElement("path", { d: "M4.68179 7.04592C5.06573 7.78505 5.47899 8.47752 5.91436 9.12605C4.76866 8.20293 3.15483 7.94918 1.72791 8.60664L0.865295 9.00408L0.949991 9.1879C1.87444 11.1943 4.25037 12.0714 6.25678 11.147L7.1194 10.7495C7.7588 11.5306 8.42708 12.2337 9.10661 12.8671C7.54917 12.0868 5.60297 12.3946 4.36752 13.7424L4.07604 14.0604L5.17158 15.0646C6.8001 16.5573 9.33037 16.4472 10.8231 14.8187L11.0984 14.5183C11.8534 15.0744 12.6001 15.5528 13.3138 15.9628C13.5418 16.0939 13.7667 16.218 13.9874 16.3354C12.2933 15.9571 10.485 16.7202 9.6092 18.3189L9.47337 18.5669L10.514 19.137C12.4515 20.1983 14.8825 19.4881 15.9439 17.5507L16.0715 17.3177C16.4836 17.4877 16.862 17.6297 17.1977 17.747C17.6961 17.9213 18.1016 18.0417 18.3855 18.1191L18.8453 18.2339C19.2507 18.3192 19.6484 18.0598 19.7338 17.6545C19.819 17.2494 19.56 16.8519 19.1551 16.7662L19.1524 16.7657C19.1551 16.7662 19.0729 16.7518 18.7802 16.6719C18.527 16.6029 18.1551 16.4928 17.6927 16.3311C17.1224 16.1317 16.416 15.8546 15.6253 15.4802L15.9997 14.8317C17.1043 12.9186 16.4488 10.4722 14.5356 9.36762L13.8989 9.00001L13.4324 9.80801C12.4895 11.4411 12.8291 13.4627 14.1387 14.7066C14.1128 14.6919 14.0869 14.6771 14.0609 14.6622C12.797 13.9361 11.4285 12.9847 10.1078 11.7498L10.5391 11.324C12.1111 9.77192 12.1274 7.23931 10.5753 5.66723L9.93826 5.02195L9.41242 5.5411C8.11055 6.82638 7.87565 8.78411 8.71479 10.3119C7.73795 9.1976 6.82187 7.90232 6.03634 6.39938C7.08943 4.4961 6.42732 2.09216 4.53566 1.00001L3.4039 0.346588L2.82248 1.35364C1.71791 3.26682 2.37341 5.71318 4.28658 6.81775L4.68179 7.04592Z" })));
};

var Icon$1u = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default.createElement("path", { d: "M15.3182 7.04592C14.9343 7.78505 14.521 8.47752 14.0856 9.12605C15.2313 8.20293 16.8452 7.94918 18.2721 8.60664L19.1347 9.00408L19.05 9.1879C18.1256 11.1943 15.7496 12.0714 13.7432 11.147L12.8806 10.7495C12.2412 11.5306 11.5729 12.2337 10.8934 12.8671C12.4508 12.0868 14.397 12.3946 15.6325 13.7424L15.924 14.0604L14.8284 15.0646C13.1999 16.5573 10.6696 16.4472 9.17692 14.8187L8.90162 14.5183C8.1466 15.0744 7.39992 15.5528 6.68625 15.9628C6.45816 16.0939 6.23335 16.218 6.01259 16.3354C7.70668 15.9571 9.51501 16.7202 10.3908 18.3189L10.5266 18.5669L9.486 19.137C7.54854 20.1983 5.11749 19.4881 4.05611 17.5507L3.92849 17.3177C3.51637 17.4877 3.13804 17.6297 2.80235 17.747C2.30389 17.9213 1.89839 18.0417 1.61448 18.1191L1.15466 18.2339C0.749332 18.3192 0.351572 18.0598 0.26624 17.6545C0.180958 17.2494 0.440012 16.8519 0.844932 16.7662L0.847556 16.7657C0.844932 16.7662 0.927067 16.7518 1.21981 16.6719C1.47301 16.6029 1.84485 16.4928 2.30733 16.3311C2.87756 16.1317 3.58397 15.8546 4.3747 15.4802L4.0003 14.8317C2.89573 12.9186 3.55123 10.4722 5.4644 9.36762L6.10112 9.00001L6.56763 9.80801C7.51049 11.4411 7.1709 13.4627 5.86133 14.7066C5.88719 14.6919 5.9131 14.6771 5.93906 14.6622C7.20296 13.9361 8.57146 12.9847 9.89223 11.7498L9.46094 11.324C7.88886 9.77192 7.87263 7.23931 9.42468 5.66723L10.0617 5.02195L10.5876 5.5411C11.8895 6.82638 12.1243 8.78411 11.2852 10.3119C12.2621 9.1976 13.1781 7.90232 13.9637 6.39938C12.9106 4.4961 13.5727 2.09216 15.4643 1.00001L16.5961 0.346588L17.1775 1.35364C18.2821 3.26682 17.6266 5.71318 15.7134 6.81775L15.3182 7.04592Z" })));
};

var Icon$1t = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$1s = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M10.3 8.09014C9.91 8.48014 9.91 9.10014 10.3 9.49014L12.2 11.3901H3C2.45 11.3901 2 11.8401 2 12.3901C2 12.9401 2.45 13.3901 3 13.3901H12.2L10.3 15.2901C9.91 15.6801 9.91 16.3001 10.3 16.6901C10.69 17.0801 11.31 17.0801 11.7 16.6901L15.29 13.1001C15.68 12.7101 15.68 12.0801 15.29 11.6901L11.7 8.09014C11.31 7.70014 10.69 7.70014 10.3 8.09014ZM20 19.3901H13C12.45 19.3901 12 19.8401 12 20.3901C12 20.9401 12.45 21.3901 13 21.3901H20C21.1 21.3901 22 20.4901 22 19.3901V5.39014C22 4.29014 21.1 3.39014 20 3.39014H13C12.45 3.39014 12 3.84014 12 4.39014C12 4.94014 12.45 5.39014 13 5.39014H20V19.3901Z" })));
};

var Icon$1r = function (_a) {
    _a.isDark; var props = __rest(_a, ["isDark"]);
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 2173 381" }, props),
        React__default.createElement("defs", null,
            React__default.createElement("polygon", { id: "path-1", points: "273.783 26.908 273.783 97.45 273.248 97.56 147.546 124.357 21.953 101.435 -2.84217094e-14 97.45 -2.84217094e-14 26.908 21.953 22.927 147.546 0 273.248 26.802" }),
            React__default.createElement("linearGradient", { x1: "6.66951564e-05%", y1: "50.0002429%", x2: "99.9996839%", y2: "50.0002429%", id: "linearGradient-3" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("polygon", { id: "path-4", points: "21.952 22.926 -2.84217094e-14 26.908 -2.84217094e-14 97.45 21.952 101.434 147.546 124.357 273.248 97.56 273.781 97.45 273.781 26.908 273.248 26.802 147.546 0" }),
            React__default.createElement("linearGradient", { x1: "-0.00032084038%", y1: "50.0002798%", x2: "100.000038%", y2: "50.0002798%", id: "linearGradient-6" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("polygon", { id: "path-7", points: "376.993 76.466 376.993 119.46 270.608 105.09 147.546 88.519 23.836 114.453 -2.84217094e-14 119.46 -2.84217094e-14 72.591 29.165 58.225 147.546 0 263.29 38.582 341.206 64.52 341.206 64.573" }),
            React__default.createElement("linearGradient", { x1: "4.84359126e-05%", y1: "50.0002464%", x2: "99.9999867%", y2: "50.0002464%", id: "linearGradient-9" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("polygon", { id: "path-10", points: "29.164 58.225 -2.84217094e-14 72.592 -2.84217094e-14 119.46 23.835 114.453 147.546 88.519 270.607 105.09 376.992 119.46 376.992 76.466 341.206 64.573 341.206 64.52 263.289 38.582 147.546 0" }),
            React__default.createElement("linearGradient", { x1: "-0.000216821577%", y1: "50.0003487%", x2: "99.9999867%", y2: "50.0003487%", id: "linearGradient-12" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("path", { d: "M147.546,6.673 C101.43,12.753 59.837,22.764 25.343,35.676 L25.343,35.676 C16.411,39.013 7.908,42.565 2.84217094e-14,46.277 L2.84217094e-14,46.277 L2.84217094e-14,59.727 L23.835,54.724 L147.546,28.79 L270.607,45.361 L376.989,59.727 L376.989,16.737 L341.206,4.844 L341.206,4.791 C317.153,2.151 292.027,0.538 266.088,0.105 L266.088,0.105 C261.46,0.057 256.832,0 252.15,0 L252.15,0 C215.561,0 180.426,2.367 147.546,6.673", id: "path-13" }),
            React__default.createElement("linearGradient", { x1: "-0.000216823303%", y1: "49.9999617%", x2: "99.9997868%", y2: "49.9999617%", id: "linearGradient-15" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("path", { d: "M147.546,6.673 C101.43,12.753 59.837,22.764 25.343,35.676 L25.343,35.676 C16.411,39.013 7.908,42.565 0,46.277 L0,46.277 L0,59.727 L23.835,54.724 L147.546,28.79 L270.607,45.361 L376.989,59.727 L376.989,16.737 L341.206,4.844 L341.206,4.791 C317.153,2.151 292.027,0.538 266.088,0.105 L266.088,0.105 C261.46,0.057 256.832,0 252.15,0 L252.15,0 C215.561,0 180.426,2.367 147.546,6.673", id: "path-16" }),
            React__default.createElement("linearGradient", { x1: "80.4024777%", y1: "50.0001659%", x2: "-1.56407381%", y2: "50.0001659%", id: "linearGradient-18" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("polygon", { id: "path-19", points: "270.607 14.367 147.546 30.937 23.835 5.004 2.84217094e-14 0 2.84217094e-14 46.819 29.164 61.183 147.546 119.404 263.289 80.875 341.206 54.937 376.989 42.998 376.989 0" }),
            React__default.createElement("linearGradient", { x1: "-0.000216823303%", y1: "49.9997274%", x2: "99.9997868%", y2: "49.9997274%", id: "linearGradient-21" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("polygon", { id: "path-22", points: "270.607 14.367 147.546 30.937 23.835 5.004 2.84217094e-14 0 2.84217094e-14 46.819 29.164 61.183 147.546 119.404 263.289 80.875 341.206 54.937 376.989 42.998 376.989 0" }),
            React__default.createElement("linearGradient", { x1: "-0.000216823303%", y1: "49.9998232%", x2: "99.9997706%", y2: "49.9998232%", id: "linearGradient-24" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("path", { d: "M270.607,14.367 L147.546,30.937 L23.835,5.004 L2.84217094e-14,0 L2.84217094e-14,13.45 C7.908,17.166 16.411,20.715 25.343,24.052 L25.343,24.052 C59.837,36.964 101.43,46.974 147.546,53.057 L147.546,53.057 C180.426,57.361 215.561,59.733 252.15,59.733 L252.15,59.733 C256.832,59.733 261.46,59.671 266.088,59.622 L266.088,59.622 C292.027,59.19 317.153,57.577 341.206,54.937 L341.206,54.937 L376.989,42.998 L376.989,0 L270.607,14.367 Z", id: "path-25" }),
            React__default.createElement("linearGradient", { x1: "-0.000216823303%", y1: "49.999208%", x2: "99.9997868%", y2: "49.999208%", id: "linearGradient-27" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("path", { d: "M270.607,14.367 L147.546,30.937 L23.835,5.004 L2.84217094e-14,0 L2.84217094e-14,13.45 C7.908,17.166 16.411,20.715 25.343,24.052 L25.343,24.052 C59.837,36.964 101.43,46.974 147.546,53.057 L147.546,53.057 C180.426,57.361 215.561,59.733 252.15,59.733 L252.15,59.733 C256.832,59.733 261.46,59.671 266.088,59.622 L266.088,59.622 C292.027,59.19 317.153,57.577 341.206,54.937 L341.206,54.937 L376.989,42.998 L376.989,0 L270.607,14.367 Z", id: "path-28" }),
            React__default.createElement("linearGradient", { x1: "80.4024777%", y1: "49.9993997%", x2: "-1.56407381%", y2: "49.9993997%", id: "linearGradient-30" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("path", { d: "M5.329,58.225 C3.822,70.33 2.53,82.762 1.508,95.405 L1.508,95.405 C0.916,101.699 0.432,108.052 0,114.453 L0,114.453 L123.711,88.519 L246.772,105.09 C245.59,89.648 244.082,74.523 242.253,59.834 L242.253,59.834 C241.394,52.626 240.477,45.577 239.454,38.582 L239.454,38.582 L123.711,-5.68434189e-14 L5.329,58.225 Z", id: "path-31" }),
            React__default.createElement("linearGradient", { x1: "4.86684065e-05%", y1: "50.0001422%", x2: "100.000025%", y2: "50.0001422%", id: "linearGradient-33" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("path", { d: "M123.713,0 L239.453,38.581 L239.83175,41.2068613 C240.704344,47.3407344 241.500375,53.526 242.252,59.833 L242.252,59.833 L242.613519,62.7765781 C244.280618,76.5400756 245.6678,90.6764667 246.771,105.089 L246.771,105.089 L123.71,88.518 L-5.68434189e-14,114.452 L-5.68434189e-14,114.437 L0.219592593,111.255551 C0.520185185,106.999088 0.848037037,102.764773 1.21974074,98.5558657 L1.507,95.404 L1.74761402,92.490183 C2.72904142,80.8503195 3.93692308,69.3978462 5.328,58.224 L5.328,58.224 L123.708,0 L123.713,0 Z", id: "path-34" }),
            React__default.createElement("linearGradient", { x1: "-0.000381284673%", y1: "50.0001422%", x2: "100%", y2: "50.0001422%", id: "linearGradient-36" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("path", { d: "M1.508,19.048 C2.53,31.695 3.822,44.065 5.329,56.179 L5.329,56.179 L123.711,114.4 L239.454,75.871 C240.477,68.878 241.394,61.826 242.253,54.618 L242.253,54.618 C244.082,39.925 245.59,24.809 246.772,9.363 L246.772,9.363 L123.711,25.933 L0,0 C0.432,6.401 0.916,12.753 1.508,19.048", id: "path-37" }),
            React__default.createElement("linearGradient", { x1: "4.86684065e-05%", y1: "49.9994878%", x2: "100.000025%", y2: "49.9994878%", id: "linearGradient-39" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("path", { d: "M0,0 L123.711,25.933 L246.772,9.363 L246.531255,12.4477724 C245.387507,26.8225867 243.960067,40.9045333 242.253,54.618 L242.253,54.618 L241.928063,57.313877 C241.163094,63.5880781 240.349125,69.752125 239.454,75.871 L239.454,75.871 L123.714,114.399 L123.709,114.399 L5.329,56.179 L4.956761,53.1451545 C3.60854167,42.0014097 2.44483333,30.6410833 1.508,19.048 C0.916,12.753 0.432,6.401 0,0 L0,0.015 L0,0 Z", id: "path-40" }),
            React__default.createElement("linearGradient", { x1: "-0.000381284673%", y1: "50.0000248%", x2: "100%", y2: "50.0000248%", id: "linearGradient-42" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("path", { d: "M0.647,22.926 C0.22,35.843 0,48.914 0,62.152 L0,62.152 C0,75.443 0.22,88.518 0.647,101.434 L0.647,101.434 L126.241,124.357 L251.943,97.56 C252.322,85.882 252.476,74.095 252.476,62.152 L252.476,62.152 C252.476,50.263 252.322,38.423 251.943,26.802 L251.943,26.802 L126.241,0 L0.647,22.926 Z", id: "path-43" }),
            React__default.createElement("linearGradient", { x1: "-2.44775741e-05%", y1: "50.0002429%", x2: "100.000053%", y2: "50.0002429%", id: "linearGradient-45" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("path", { d: "M126.241,0 L251.943,26.802 L252.050021,30.2947 C252.35126,40.79149 252.476,51.4519 252.476,62.152 L252.476,62.152 L252.470199,66.1272867 C252.439,76.7129877 252.279889,87.1795556 251.943,97.56 L251.943,97.56 L126.241,124.357 L0.647,101.434 L0.535687453,97.9074696 C0.181818182,86.1389421 0,74.2347273 0,62.152 L0,62.152 L0.006587,58.185597 C0.04607,46.30134 0.2627,34.5513 0.647,22.926 L0.647,22.926 L126.241,0 Z", id: "path-46" }),
            React__default.createElement("linearGradient", { x1: "-4.86380938e-05%", y1: "50.0003288%", x2: "99.999633%", y2: "50.0003288%", id: "linearGradient-48" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("polygon", { id: "path-49", points: "0 0 125.699 26.801 126.237 26.907 126.237 97.453 125.699 97.56 0 124.357" }),
            React__default.createElement("linearGradient", { x1: "0.000547699961%", y1: "50.0000466%", x2: "99.9999308%", y2: "50.0000466%", id: "linearGradient-51" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("polygon", { id: "path-52", points: "0 0 115.745 38.582 193.665 64.516 193.665 64.569 229.448 76.462 229.448 119.456 123.067 105.09 0 88.515" }),
            React__default.createElement("polygon", { id: "path-54", points: "229.448 0 229.448 42.998 193.665 54.94 115.745 80.879 0 119.403 0 30.942 123.067 14.367" })),
        React__default.createElement("g", { id: "\u9875\u9762-1", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
            React__default.createElement("g", { id: "\u7F16\u7EC4", transform: "translate(0.987000, 0.609000)" },
                React__default.createElement("g", { transform: "translate(491.535500, 75.645800)", fill: "#FFFFFF" },
                    React__default.createElement("polygon", { id: "Fill-1", points: "0 14.5392 103.679 14.5392 103.679 37.6582 27.648 37.6582 27.648 86.5182 92 86.5182 92 109.8762 27.648 109.8762 27.648 166.6012 106.301 166.6012 106.301 189.9592 0 189.9592" }),
                    React__default.createElement("path", { d: "M211.4063,156.1144 L211.4063,123.9384 C172.5563,128.7054 159.4473,138.4774 159.4473,153.2554 C159.4473,166.1254 168.2653,171.3684 179.9443,171.3684 C191.3853,171.3684 200.6803,165.8854 211.4063,156.1144 M132.9913,155.1614 C132.9913,127.0364 156.8253,112.4974 211.4063,106.5394 C211.1683,91.2854 205.6853,77.9384 186.3803,77.9384 C172.5563,77.9384 159.6853,84.1354 148.4833,91.2854 L138.2353,72.6944 C151.8203,64.1144 170.1733,55.5344 191.1463,55.5344 C223.8003,55.5344 238.8153,76.2694 238.8153,111.0674 L238.8153,189.9594 L216.4113,189.9594 L214.0273,174.9434 L213.3123,174.9434 C201.3953,185.1924 187.3333,193.0574 171.6023,193.0574 C148.9603,193.0574 132.9913,178.2804 132.9913,155.1614", id: "Fill-3" }),
                    React__default.createElement("path", { d: "M277.6631,58.8703 L300.0671,58.8703 L302.2121,76.9853 L302.9271,76.9853 C315.0821,65.3063 328.4301,55.5343 346.3051,55.5343 C374.1911,55.5343 386.5851,74.1243 386.5851,107.4933 L386.5851,189.9593 L359.1761,189.9593 L359.1761,110.8293 C359.1761,88.1863 352.5021,79.1303 337.0101,79.1303 C324.8541,79.1303 316.5131,85.3273 304.8341,97.0053 L304.8341,189.9593 L277.6631,189.9593 L277.6631,58.8703 Z", id: "Fill-5" }),
                    React__default.createElement("path", { d: "M496.9345,102.7257 C496.9345,85.0887 485.9705,74.8397 472.1465,74.8397 C458.3235,74.8397 447.3595,84.8507 447.3595,102.7257 C447.3595,120.1237 458.5615,130.8507 472.1465,130.8507 C485.7325,130.8507 496.9345,120.1237 496.9345,102.7257 M513.3795,207.3587 C513.3795,196.3947 504.7995,193.0577 488.8305,193.0577 L469.0485,193.0577 C462.8515,193.0577 456.8925,192.3427 451.4115,191.1507 C443.5455,196.8717 440.2085,203.5447 440.2085,210.2177 C440.2085,223.0887 453.5565,230.7157 475.2455,230.7157 C498.1255,230.7157 513.3795,219.5137 513.3795,207.3587 M416.8515,214.2697 C416.8515,203.3067 423.7635,193.0577 435.9185,185.6687 L435.9185,184.4777 C429.2455,180.4257 424.0015,173.5137 424.0015,162.7887 C424.0015,152.5387 431.3905,143.7207 438.5405,138.4777 L438.5405,137.5237 C429.7215,130.6127 421.3795,118.2177 421.3795,102.7257 C421.3795,72.9327 444.9755,55.5347 472.1465,55.5347 C479.5355,55.5347 486.2085,56.9637 491.2135,58.8707 L537.6915,58.8707 L537.6915,79.3687 L512.6645,79.3687 C517.6695,84.6127 521.2455,93.4307 521.2455,103.4407 C521.2455,132.0417 499.5565,148.4877 472.1465,148.4877 C466.1885,148.4877 459.5145,147.0577 453.7945,144.4357 C449.5035,148.2487 446.6445,152.0627 446.6445,158.2587 C446.6445,166.1247 451.8875,171.1297 468.5725,171.1297 L492.6445,171.1297 C523.6285,171.1297 539.8355,180.6637 539.8355,203.0677 C539.8355,228.3317 513.1415,248.8297 471.1935,248.8297 C439.7325,248.8297 416.8515,237.1507 416.8515,214.2697", id: "Fill-7" }),
                    React__default.createElement("path", { d: "M644.4629,112.7365 C644.4629,90.0935 634.2149,76.9855 615.1479,76.9855 C598.7009,76.9855 584.1629,89.6165 581.5409,112.7365 L644.4629,112.7365 Z M554.8469,124.6535 C554.8469,81.9895 583.9249,55.5345 614.6709,55.5345 C649.4689,55.5345 668.0599,80.5595 668.0599,117.7415 C668.0599,122.9855 667.5829,128.4665 666.8669,131.5655 L581.7789,131.5655 C583.9249,156.5905 599.6549,171.6065 622.2979,171.6065 C633.9769,171.6065 643.9859,168.0315 653.5209,161.8355 L663.0539,179.2335 C650.8989,187.3375 635.8829,193.0575 618.7229,193.0575 C583.2089,193.0575 554.8469,167.7935 554.8469,124.6535 L554.8469,124.6535 Z", id: "Fill-9" }),
                    React__default.createElement("path", { d: "M698.8007,159.213 L698.8007,0 L725.9727,0 L725.9727,160.644 C725.9727,168.031 729.3087,170.653 732.6457,170.653 C733.8377,170.653 734.7907,170.653 737.1737,170.177 L740.7487,190.912 C737.4127,192.105 732.6457,193.058 725.9727,193.058 C706.1897,193.058 698.8007,180.426 698.8007,159.213", id: "Fill-11" }),
                    React__default.createElement("path", { d: "M769.8232,58.8703 L792.2272,58.8703 L794.3732,77.2243 L795.0882,77.2243 C806.2902,65.3063 819.3982,55.5343 835.6062,55.5343 C855.1502,55.5343 866.1142,64.5913 871.8342,79.6063 C884.7052,65.7823 898.0522,55.5343 914.4972,55.5343 C941.9072,55.5343 954.7772,74.1243 954.7772,107.4933 L954.7772,189.9593 L927.3682,189.9593 L927.3682,110.8293 C927.3682,88.1863 920.2182,79.1303 905.4402,79.1303 C896.3842,79.1303 886.8492,85.0893 875.8862,97.0053 L875.8862,189.9593 L848.4762,189.9593 L848.4762,110.8293 C848.4762,88.1863 841.5642,79.1303 826.5492,79.1303 C817.7302,79.1303 807.9582,85.0893 796.9952,97.0053 L796.9952,189.9593 L769.8232,189.9593 L769.8232,58.8703 Z", id: "Fill-13" }),
                    React__default.createElement("path", { d: "M1065.123,156.1144 L1065.123,123.9384 C1026.273,128.7054 1013.164,138.4774 1013.164,153.2554 C1013.164,166.1254 1021.983,171.3684 1033.662,171.3684 C1045.102,171.3684 1054.397,165.8854 1065.123,156.1144 M986.708,155.1614 C986.708,127.0364 1010.543,112.4974 1065.123,106.5394 C1064.885,91.2854 1059.402,77.9384 1040.097,77.9384 C1026.273,77.9384 1013.402,84.1354 1002.201,91.2854 L991.952,72.6944 C1005.537,64.1144 1023.89,55.5344 1044.864,55.5344 C1077.517,55.5344 1092.532,76.2694 1092.532,111.0674 L1092.532,189.9594 L1070.128,189.9594 L1067.745,174.9434 L1067.029,174.9434 C1055.112,185.1924 1041.051,193.0574 1025.32,193.0574 C1002.678,193.0574 986.708,178.2804 986.708,155.1614", id: "Fill-15" }),
                    React__default.createElement("path", { d: "M1131.3798,58.8703 L1153.7838,58.8703 L1155.9298,82.4673 L1156.6448,82.4673 C1165.9398,65.5443 1179.7638,55.5343 1193.8258,55.5343 C1200.2618,55.5343 1204.5518,56.4873 1208.6038,58.3933 L1203.5978,82.2283 C1199.0688,80.7983 1195.7328,80.0833 1190.4888,80.0833 C1179.7638,80.0833 1166.8938,87.4723 1158.5518,108.2083 L1158.5518,189.9593 L1131.3798,189.9593 L1131.3798,58.8703 Z", id: "Fill-17" }),
                    React__default.createElement("polygon", { id: "Fill-19", points: "1228.8593 0.0001 1255.5533 0.0001 1255.5533 122.5091 1256.2693 122.5091 1307.7513 58.8701 1338.0203 58.8701 1293.4503 112.0201 1343.0253 189.9591 1313.2333 189.9591 1277.7193 130.6121 1255.5533 156.1141 1255.5533 189.9591 1228.8593 189.9591" }),
                    React__default.createElement("path", { d: "M1446.2265,112.7365 C1446.2265,90.0935 1435.9775,76.9855 1416.9105,76.9855 C1400.4645,76.9855 1385.9255,89.6165 1383.3035,112.7365 L1446.2265,112.7365 Z M1356.6095,124.6535 C1356.6095,81.9895 1385.6875,55.5345 1416.4335,55.5345 C1451.2315,55.5345 1469.8225,80.5595 1469.8225,117.7415 C1469.8225,122.9855 1469.3455,128.4665 1468.6295,131.5655 L1383.5415,131.5655 C1385.6875,156.5905 1401.4175,171.6065 1424.0605,171.6065 C1435.7395,171.6065 1445.7485,168.0315 1455.2835,161.8355 L1464.8165,179.2335 C1452.6615,187.3375 1437.6455,193.0575 1420.4855,193.0575 C1384.9715,193.0575 1356.6095,167.7935 1356.6095,124.6535 L1356.6095,124.6535 Z", id: "Fill-21" }),
                    React__default.createElement("path", { d: "M1504.8535,147.0577 L1504.8535,80.7977 L1485.7865,80.7977 L1485.7865,60.3007 L1506.0445,58.8707 L1509.1435,22.6427 L1532.2625,22.6427 L1532.2625,58.8707 L1566.3455,58.8707 L1566.3455,80.7977 L1532.2625,80.7977 L1532.2625,147.2957 C1532.2625,163.0267 1537.7445,171.1297 1551.3305,171.1297 C1555.8585,171.1297 1561.5785,169.7007 1565.3915,168.0317 L1570.3975,188.2907 C1563.0085,190.6737 1554.1895,193.0577 1544.6565,193.0577 C1515.1015,193.0577 1504.8535,174.7047 1504.8535,147.0577", id: "Fill-23" }),
                    React__default.createElement("path", { d: "M1581.1211,174.9435 L1593.9911,157.3055 C1605.6701,166.6015 1617.1101,172.3215 1631.1731,172.3215 C1646.9031,172.3215 1654.2921,164.6945 1654.2921,154.6845 C1654.2921,142.7665 1639.5151,137.5235 1625.2141,132.0425 C1607.8151,125.3685 1587.7951,116.0735 1587.7951,93.9075 C1587.7951,71.9795 1605.4321,55.5345 1634.2711,55.5345 C1651.9081,55.5345 1666.2091,62.6845 1676.9341,71.0265 L1664.0641,87.9485 C1655.0071,81.2745 1645.7121,76.5075 1634.7481,76.5075 C1620.4471,76.5075 1613.7731,83.6585 1613.7731,92.7155 C1613.7731,103.9175 1627.3591,108.2085 1641.6601,113.4515 C1660.0121,120.3635 1680.2711,128.4665 1680.2711,153.2555 C1680.2711,175.1815 1662.8721,193.0575 1630.4581,193.0575 C1612.3441,193.0575 1593.7531,185.4305 1581.1211,174.9435", id: "Fill-25" })),
                React__default.createElement("g", { transform: "translate(-0.000000, 127.850000)" },
                    React__default.createElement("mask", { id: "mask-2", fill: "white" },
                        React__default.createElement("use", { href: "#path-1" })),
                    React__default.createElement("g", { id: "Clip-29" }),
                    React__default.createElement("polygon", { id: "Fill-28", fill: "url(#linearGradient-3)", mask: "url(#mask-2)", points: "273.783 26.908 273.783 97.45 273.248 97.56 147.546 124.357 21.953 101.435 -2.84217094e-14 97.45 -2.84217094e-14 26.908 21.953 22.927 147.546 0 273.248 26.802" })),
                React__default.createElement("g", { transform: "translate(0.001000, 127.850000)" },
                    React__default.createElement("mask", { id: "mask-5", fill: "white" },
                        React__default.createElement("use", { href: "#path-4" })),
                    React__default.createElement("g", { id: "Clip-31" }),
                    React__default.createElement("polygon", { id: "Fill-30", fill: "url(#linearGradient-6)", mask: "url(#mask-5)", points: "21.952 22.926 -2.84217094e-14 26.908 -2.84217094e-14 97.45 21.952 101.434 147.546 124.357 273.248 97.56 273.781 97.45 273.781 26.908 273.248 26.802 147.546 0" })),
                React__default.createElement("g", { transform: "translate(-0.000000, 0.000000)" },
                    React__default.createElement("mask", { id: "mask-8", fill: "white" },
                        React__default.createElement("use", { href: "#path-7" })),
                    React__default.createElement("g", { id: "Clip-33" }),
                    React__default.createElement("polygon", { id: "Fill-32", fill: "url(#linearGradient-9)", mask: "url(#mask-8)", points: "376.993 76.466 376.993 119.46 270.608 105.09 147.546 88.519 23.836 114.453 -2.84217094e-14 119.46 -2.84217094e-14 72.591 29.165 58.225 147.546 0 263.29 38.582 341.206 64.52 341.206 64.573" })),
                React__default.createElement("g", { transform: "translate(0.001000, 0.000000)" },
                    React__default.createElement("mask", { id: "mask-11", fill: "white" },
                        React__default.createElement("use", { href: "#path-10" })),
                    React__default.createElement("g", { id: "Clip-35" }),
                    React__default.createElement("polygon", { id: "Fill-34", fill: "url(#linearGradient-12)", mask: "url(#mask-11)", points: "29.164 58.225 -2.84217094e-14 72.592 -2.84217094e-14 119.46 23.835 114.453 147.546 88.519 270.607 105.09 376.992 119.46 376.992 76.466 341.206 64.573 341.206 64.52 263.289 38.582 147.546 0" })),
                React__default.createElement("g", { transform: "translate(0.001000, 59.729000)" },
                    React__default.createElement("mask", { id: "mask-14", fill: "white" },
                        React__default.createElement("use", { href: "#path-13" })),
                    React__default.createElement("g", { id: "Clip-37" }),
                    React__default.createElement("path", { d: "M147.546,6.673 C101.43,12.753 59.837,22.764 25.343,35.676 L25.343,35.676 C16.411,39.013 7.908,42.565 2.84217094e-14,46.277 L2.84217094e-14,46.277 L2.84217094e-14,59.727 L23.835,54.724 L147.546,28.79 L270.607,45.361 L376.989,59.727 L376.989,16.737 L341.206,4.844 L341.206,4.791 C317.153,2.151 292.027,0.538 266.088,0.105 L266.088,0.105 C261.46,0.057 256.832,0 252.15,0 L252.15,0 C215.561,0 180.426,2.367 147.546,6.673", id: "Fill-36", fill: "url(#linearGradient-15)", mask: "url(#mask-14)" })),
                React__default.createElement("g", { transform: "translate(0.001000, 59.729000)" },
                    React__default.createElement("mask", { id: "mask-17", fill: "white" },
                        React__default.createElement("use", { href: "#path-16" })),
                    React__default.createElement("g", { id: "Clip-39" }),
                    React__default.createElement("path", { d: "M147.546,6.673 C101.43,12.753 59.837,22.764 25.343,35.676 L25.343,35.676 C16.411,39.013 7.908,42.565 0,46.277 L0,46.277 L0,59.727 L23.835,54.724 L147.546,28.79 L270.607,45.361 L376.989,59.727 L376.989,16.737 L341.206,4.844 L341.206,4.791 C317.153,2.151 292.027,0.538 266.088,0.105 L266.088,0.105 C261.46,0.057 256.832,0 252.15,0 L252.15,0 C215.561,0 180.426,2.367 147.546,6.673", id: "Fill-38", fill: "url(#linearGradient-18)", mask: "url(#mask-17)" })),
                React__default.createElement("g", { transform: "translate(0.001000, 260.601000)" },
                    React__default.createElement("mask", { id: "mask-20", fill: "white" },
                        React__default.createElement("use", { href: "#path-19" })),
                    React__default.createElement("g", { id: "Clip-41" }),
                    React__default.createElement("polygon", { id: "Fill-40", fill: "url(#linearGradient-21)", mask: "url(#mask-20)", points: "270.607 14.367 147.546 30.937 23.835 5.004 2.84217094e-14 0 2.84217094e-14 46.819 29.164 61.183 147.546 119.404 263.289 80.875 341.206 54.937 376.989 42.998 376.989 0" })),
                React__default.createElement("g", { transform: "translate(0.001000, 260.601000)" },
                    React__default.createElement("mask", { id: "mask-23", fill: "white" },
                        React__default.createElement("use", { href: "#path-22" })),
                    React__default.createElement("g", { id: "Clip-43" }),
                    React__default.createElement("polygon", { id: "Fill-42", fill: "url(#linearGradient-24)", mask: "url(#mask-23)", points: "270.607 14.367 147.546 30.937 23.835 5.004 2.84217094e-14 0 2.84217094e-14 46.819 29.164 61.183 147.546 119.404 263.289 80.875 341.206 54.937 376.989 42.998 376.989 0" })),
                React__default.createElement("g", { transform: "translate(0.001000, 260.601000)" },
                    React__default.createElement("mask", { id: "mask-26", fill: "white" },
                        React__default.createElement("use", { href: "#path-25" })),
                    React__default.createElement("g", { id: "Clip-45" }),
                    React__default.createElement("path", { d: "M270.607,14.367 L147.546,30.937 L23.835,5.004 L2.84217094e-14,0 L2.84217094e-14,13.45 C7.908,17.166 16.411,20.715 25.343,24.052 L25.343,24.052 C59.837,36.964 101.43,46.974 147.546,53.057 L147.546,53.057 C180.426,57.361 215.561,59.733 252.15,59.733 L252.15,59.733 C256.832,59.733 261.46,59.671 266.088,59.622 L266.088,59.622 C292.027,59.19 317.153,57.577 341.206,54.937 L341.206,54.937 L376.989,42.998 L376.989,0 L270.607,14.367 Z", id: "Fill-44", fill: "url(#linearGradient-27)", mask: "url(#mask-26)" })),
                React__default.createElement("g", { transform: "translate(0.001000, 260.601000)" },
                    React__default.createElement("mask", { id: "mask-29", fill: "white" },
                        React__default.createElement("use", { href: "#path-28" })),
                    React__default.createElement("g", { id: "Clip-47" }),
                    React__default.createElement("path", { d: "M270.607,14.367 L147.546,30.937 L23.835,5.004 L2.84217094e-14,0 L2.84217094e-14,13.45 C7.908,17.166 16.411,20.715 25.343,24.052 L25.343,24.052 C59.837,36.964 101.43,46.974 147.546,53.057 L147.546,53.057 C180.426,57.361 215.561,59.733 252.15,59.733 L252.15,59.733 C256.832,59.733 261.46,59.671 266.088,59.622 L266.088,59.622 C292.027,59.19 317.153,57.577 341.206,54.937 L341.206,54.937 L376.989,42.998 L376.989,0 L270.607,14.367 Z", id: "Fill-46", fill: "url(#linearGradient-30)", mask: "url(#mask-29)" })),
                React__default.createElement("g", { transform: "translate(23.836000, 0.000000)" },
                    React__default.createElement("mask", { id: "mask-32", fill: "white" },
                        React__default.createElement("use", { href: "#path-31" })),
                    React__default.createElement("g", { id: "Clip-49" }),
                    React__default.createElement("path", { d: "M5.329,58.225 C3.822,70.33 2.53,82.762 1.508,95.405 L1.508,95.405 C0.916,101.699 0.432,108.052 0,114.453 L0,114.453 L123.711,88.519 L246.772,105.09 C245.59,89.648 244.082,74.523 242.253,59.834 L242.253,59.834 C241.394,52.626 240.477,45.577 239.454,38.582 L239.454,38.582 L123.711,-5.68434189e-14 L5.329,58.225 Z", id: "Fill-48", fill: "url(#linearGradient-33)", mask: "url(#mask-32)" })),
                React__default.createElement("g", { transform: "translate(23.837000, 0.001000)" },
                    React__default.createElement("mask", { id: "mask-35", fill: "white" },
                        React__default.createElement("use", { href: "#path-34" })),
                    React__default.createElement("g", { id: "Clip-51" }),
                    React__default.createElement("polygon", { id: "Fill-50", fill: "url(#linearGradient-36)", mask: "url(#mask-35)", points: "-5.68434189e-14 114.452 246.771 114.452 246.771 -0.001 -5.68434189e-14 -0.001" })),
                React__default.createElement("g", { transform: "translate(23.836000, 265.605000)" },
                    React__default.createElement("mask", { id: "mask-38", fill: "white" },
                        React__default.createElement("use", { href: "#path-37" })),
                    React__default.createElement("g", { id: "Clip-53" }),
                    React__default.createElement("path", { d: "M1.508,19.048 C2.53,31.695 3.822,44.065 5.329,56.179 L5.329,56.179 L123.711,114.4 L239.454,75.871 C240.477,68.878 241.394,61.826 242.253,54.618 L242.253,54.618 C244.082,39.925 245.59,24.809 246.772,9.363 L246.772,9.363 L123.711,25.933 L0,0 C0.432,6.401 0.916,12.753 1.508,19.048", id: "Fill-52", fill: "url(#linearGradient-39)", mask: "url(#mask-38)" })),
                React__default.createElement("g", { transform: "translate(23.836000, 265.605000)" },
                    React__default.createElement("mask", { id: "mask-41", fill: "white" },
                        React__default.createElement("use", { href: "#path-40" })),
                    React__default.createElement("g", { id: "Clip-55" }),
                    React__default.createElement("polygon", { id: "Fill-54", fill: "url(#linearGradient-42)", mask: "url(#mask-41)", points: "0.001 114.399 246.772 114.399 246.772 0 0.001 0" })),
                React__default.createElement("g", { transform: "translate(21.306000, 127.850000)" },
                    React__default.createElement("mask", { id: "mask-44", fill: "white" },
                        React__default.createElement("use", { href: "#path-43" })),
                    React__default.createElement("g", { id: "Clip-57" }),
                    React__default.createElement("path", { d: "M0.647,22.926 C0.22,35.843 0,48.914 0,62.152 L0,62.152 C0,75.443 0.22,88.518 0.647,101.434 L0.647,101.434 L126.241,124.357 L251.943,97.56 C252.322,85.882 252.476,74.095 252.476,62.152 L252.476,62.152 C252.476,50.263 252.322,38.423 251.943,26.802 L251.943,26.802 L126.241,0 L0.647,22.926 Z", id: "Fill-56", fill: "url(#linearGradient-45)", mask: "url(#mask-44)" })),
                React__default.createElement("g", { transform: "translate(21.306000, 127.850000)" },
                    React__default.createElement("mask", { id: "mask-47", fill: "white" },
                        React__default.createElement("use", { href: "#path-46" })),
                    React__default.createElement("g", { id: "Clip-59" }),
                    React__default.createElement("polygon", { id: "Fill-58", fill: "url(#linearGradient-48)", mask: "url(#mask-47)", points: "0 124.357 252.477 124.357 252.477 0 0 0" })),
                React__default.createElement("g", { transform: "translate(147.544000, 0.002000)" },
                    React__default.createElement("g", { transform: "translate(0.002000, 127.848000)" },
                        React__default.createElement("mask", { id: "mask-50", fill: "white" },
                            React__default.createElement("use", { href: "#path-49" })),
                        React__default.createElement("g", { id: "Clip-61" }),
                        React__default.createElement("polygon", { id: "Fill-60", fill: "url(#linearGradient-51)", mask: "url(#mask-50)", points: "126.237 26.907 126.237 97.453 125.699 97.56 0 124.357 0 0 125.699 26.801" })),
                    React__default.createElement("g", { transform: "translate(0.000000, 0.000000)" },
                        React__default.createElement("mask", { id: "mask-53", fill: "white" },
                            React__default.createElement("use", { href: "#path-52" })),
                        React__default.createElement("g", { id: "Clip-63" })),
                    React__default.createElement("g", { transform: "translate(0.000000, 260.598000)" },
                        React__default.createElement("mask", { id: "mask-55", fill: "white" },
                            React__default.createElement("use", { href: "#path-54" })),
                        React__default.createElement("g", { id: "Clip-65" })),
                    React__default.createElement("path", { d: "M12.1273,161.328 C18.0813,162.159 21.0583,162.575 27.0113,163.406 C26.6743,165.815 26.5233,167.022 26.2583,169.439 C21.8773,168.957 19.6863,168.716 15.3043,168.235 C14.7133,173.611 14.5013,176.306 14.2433,181.702 C17.9703,181.88 19.8323,181.969 23.5593,182.147 C23.4403,184.617 23.4003,185.852 23.3553,188.324 C19.6243,188.255 17.7603,188.221 14.0293,188.153 C13.9143,194.422 13.9693,197.56 14.3033,203.824 C18.8563,203.581 21.1333,203.46 25.6873,203.217 C25.8163,205.662 25.8993,206.884 26.1033,209.325 C19.9603,209.833 16.8903,210.088 10.7473,210.597 C9.4953,194.224 9.7343,177.598 12.1273,161.328", id: "Fill-21298", fill: "#FFFFFF" }),
                    React__default.createElement("path", { d: "M40.7825,199.8632 C40.6575,196.7412 40.6265,195.1792 40.6285,192.0552 C34.9965,193.2092 33.0945,195.7172 33.2295,199.4432 C33.3465,202.6882 34.7235,203.9322 36.4135,203.8322 C38.0685,203.7342 39.3235,202.2972 40.7825,199.8632 M29.4155,200.0722 C29.1355,192.8462 32.7355,189.1002 40.6775,187.8312 C40.7255,184.1292 40.1315,180.8452 37.3375,180.6812 C35.3385,180.5642 33.3825,182.0002 31.6835,183.7492 C31.1695,181.8352 30.9235,180.8712 30.4555,178.9312 C32.5625,176.8662 35.4005,174.9482 38.4285,175.2122 C43.1435,175.6232 44.7665,180.7272 44.6285,188.9982 C44.5015,196.4992 44.6255,200.2562 45.2455,207.7382 C43.9505,207.8452 43.3035,207.8992 42.0095,208.0062 C41.7515,206.5692 41.6295,205.8492 41.3985,204.4052 C41.3565,204.4082 41.3365,204.4092 41.2955,204.4122 C39.7295,207.0012 37.8735,209.1192 35.6015,209.3162 C32.3325,209.6002 29.6455,206.0132 29.4155,200.0722", id: "Fill-21300", fill: "#FFFFFF" }),
                    React__default.createElement("path", { d: "M50.8577,177.0682 C52.1527,177.1752 52.7997,177.2292 54.0947,177.3362 C54.0837,178.9842 54.0867,179.8062 54.1127,181.4502 C54.1537,181.4522 54.1737,181.4532 54.2157,181.4562 C56.1317,178.9262 58.2537,176.9392 60.8357,177.1642 C64.8617,177.5152 66.2097,181.5752 66.0597,188.6052 C65.9117,195.5542 66.0177,199.0362 66.5917,205.9682 C65.0087,206.1002 64.2167,206.1662 62.6327,206.2972 C62.0687,199.4862 61.9567,196.0672 62.0737,189.2392 C62.1577,184.3572 61.3617,182.3512 59.1207,182.2232 C57.3607,182.1222 56.0617,183.4112 54.2787,185.9862 C53.9887,194.3722 54.0887,198.5792 54.7827,206.9472 C53.2127,207.0772 52.4277,207.1432 50.8577,207.2732 C49.9527,197.3892 49.9527,186.9522 50.8577,177.0682", id: "Fill-21302", fill: "#FFFFFF" }),
                    React__default.createElement("path", { d: "M82.0736,188.0385 C82.1656,184.6795 80.7256,182.6315 78.7256,182.5055 C76.7256,182.3805 74.9876,184.2755 74.8896,187.8415 C74.7956,191.3145 76.4606,193.4415 78.4286,193.42559 C80.3976,193.4095 81.9826,191.3525 82.0736,188.0385 M85.2146,207.7035 C84.9996,205.6555 83.7186,205.1385 81.4126,205.3385 C80.2696,205.4375 79.6986,205.4875 78.5556,205.5865 C77.6616,205.6645 76.7886,205.5985 75.9766,205.4295 C74.9366,206.6605 74.5826,208.0485 74.7276,209.3835 C75.0076,211.9575 77.1436,213.2205 80.2596,212.7995 C83.5466,212.3555 85.4526,209.9735 85.2146,207.7035 M71.4536,210.5765 C71.1986,208.3375 72.0096,206.1385 73.6496,204.5155 C73.6426,204.4195 73.6386,204.3715 73.6326,204.2755 C72.6046,203.5335 71.7406,202.1765 71.6356,199.9915 C71.5336,197.9045 72.5606,196.0725 73.5776,194.9995 C73.5766,194.9225 73.5756,194.8845 73.5746,194.8085 C72.2736,193.4385 71.0396,190.9045 71.1266,187.7385 C71.2926,181.6535 75.0846,178.4055 79.0086,178.7475 C80.0746,178.8405 81.0136,179.2005 81.7066,179.6245 C84.3916,179.8475 85.7346,179.9585 88.4206,180.1815 C88.2966,181.6785 88.2436,182.4275 88.1586,183.9265 C86.7106,183.8445 85.9856,183.8035 84.5376,183.7205 C85.2056,184.7445 85.6406,186.4065 85.5926,188.2685 C85.4516,193.5895 82.4666,196.7455 78.4956,196.8655 C77.6326,196.8915 76.6556,196.6415 75.8136,196.1425 C75.2116,196.9155 74.8186,197.6925 74.8726,198.9295 C74.9386,200.4975 75.7616,201.4525 78.1756,201.3095 C79.5676,201.2275 80.2646,201.1865 81.6586,201.1045 C86.1416,200.8395 88.5416,202.4445 88.9476,206.5225 C89.4056,211.1205 86.1966,215.4355 80.1916,216.3865 C75.6876,217.0995 71.9856,215.2475 71.4536,210.5765", id: "Fill-21304", fill: "#FFFFFF" }),
                    React__default.createElement("path", { d: "M103.4163,190.2606 C103.4713,186.5576 102.1513,184.3276 99.3933,184.1626 C97.0133,184.0196 94.7363,186.0856 94.2963,190.1256 C97.9443,190.1796 99.7683,190.2066 103.4163,190.2606 M90.4122994,192.2136 C90.4103,184.5366 95.1493,180.1536 99.5893,180.5406 C104.6143,180.9786 106.8763,185.1876 106.8263,191.1086 C106.8193,191.9436 106.7533,192.8156 106.6543,193.3116 C101.7213,193.3556 99.2543,193.3776 94.3213,193.4226 C94.6723,197.7986 97.1473,200.2726 100.4243,200.0766 C102.1133,199.9766 103.5243,199.2946 104.8573,198.2266 C105.4633,199.3266 105.7713,199.8706 106.3993,200.9456 C104.7313,202.3626 102.6483,203.4946 100.1703,203.7106 C95.0423,204.1556 90.4143,199.9766 90.4122994,192.2136", id: "Fill-21306", fill: "#FFFFFF" }),
                    React__default.createElement("path", { d: "M111.3968,197.5155 C110.9668,187.7395 111.2438,182.8095 112.7788,173.1175 C114.3348,173.3645 115.1128,173.4875 116.6688,173.7335 C115.1698,183.1965 114.9038,188.0105 115.3408,197.5555 C115.3908,198.6525 115.9008,199.0135 116.3828,198.9855 C116.5558,198.9745 116.6948,198.9665 117.0348,198.8775 C117.3118,200.0795 117.4588,200.6775 117.7658,201.8675 C117.2988,202.0815 116.6228,202.2815 115.6598,202.3655 C112.8028,202.6135 111.5398,200.7715 111.3968,197.5155", id: "Fill-21308", fill: "#FFFFFF" }))))));
};

var Icon$1q = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 231 93" }, props),
        React__default.createElement("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
            React__default.createElement("g", { transform: "translate(-355.000000, -169.000000)" },
                React__default.createElement("g", { transform: "translate(355.234483, 169.666667)" },
                    React__default.createElement("path", { d: "M39.7655172,88.3333333 L39.7655172,76.8190476 L10.9655172,76.8190476 L10.9655172,65.3047619 L39.7655172,65.3047619 L39.7655172,35.4435374 L30.9039788,26.3333333 L8.6270557,26.3333333 L-0.234482759,35.4435374 L-0.234482759,79.0965986 L8.6270557,88.3333333 L39.7655172,88.3333333 Z M29.7655172,56.3333333 L10.7655172,56.3333333 L10.7655172,40.3333333 L29.7655172,40.3333333 L29.7655172,56.3333333 Z M56.864713,91.3333333 L68.0872331,69.7362637 L78.8164556,91.3333333 L90.4089489,91.3333333 L74.1301285,58.2014652 L91.7655172,24.3333333 L80.0496995,24.3333333 L68.4572062,46.9120879 L57.4813349,24.3333333 L45.7655172,24.3333333 L62.5376352,58.4468864 L45.7655172,91.3333333 L56.864713,91.3333333 Z M175.780902,88.3333333 L184.765517,79.3862581 L184.765517,37.2246982 L175.780902,28.277623 L155.965517,28.277623 L155.965517,0.333333333 L144.765517,0.333333333 L144.765517,88.3333333 L175.780902,88.3333333 Z M174.765517,77.3333333 L155.765517,77.3333333 L155.765517,40.3333333 L174.765517,40.3333333 L174.765517,77.3333333 Z M230.765517,88.3333333 L230.765517,76.795501 L201.965517,76.795501 L201.965517,37.8711656 L230.765517,37.8711656 L230.765517,26.3333333 L199.750133,26.3333333 L190.765517,35.5889571 L190.765517,79.0777096 L199.750133,88.3333333 L230.765517,88.3333333 Z", fill: "#0D0C33", "fill-rule": "nonzero" }),
                    React__default.createElement("path", { d: "M128.417956,26.3333333 L137.765517,35.3841463 L137.765517,87.3333333 L105.113078,87.3333333 L95.7655172,78.2825203 L95.7655172,56.8333333 L105.113078,47.9065041 L126.113078,47.9065041 L126.113078,37.6158537 L96.1496636,37.6158537 L96.1496636,26.3333333 L128.417956,26.3333333 Z M125.765517,58.3333333 L106.765517,58.3333333 L106.765517,77.3333333 L125.765517,77.3333333 L125.765517,58.3333333 Z", fill: "#FAB126" }))))));
};

var Icon$1p = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 231 93" }, props),
        React__default.createElement("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
            React__default.createElement("g", { transform: "translate(-481.000000, -151.000000)" },
                React__default.createElement("g", { transform: "translate(481.234483, 151.666667)" },
                    React__default.createElement("path", { d: "M39.7655172,88.3333333 L39.7655172,76.8190476 L10.9655172,76.8190476 L10.9655172,65.3047619 L39.7655172,65.3047619 L39.7655172,35.4435374 L30.9039788,26.3333333 L8.6270557,26.3333333 L-0.234482759,35.4435374 L-0.234482759,79.0965986 L8.6270557,88.3333333 L39.7655172,88.3333333 Z M29.7655172,56.3333333 L10.7655172,56.3333333 L10.7655172,40.3333333 L29.7655172,40.3333333 L29.7655172,56.3333333 Z M56.864713,91.3333333 L68.0872331,69.7362637 L78.8164556,91.3333333 L90.4089489,91.3333333 L74.1301285,58.2014652 L91.7655172,24.3333333 L80.0496995,24.3333333 L68.4572062,46.9120879 L57.4813349,24.3333333 L45.7655172,24.3333333 L62.5376352,58.4468864 L45.7655172,91.3333333 L56.864713,91.3333333 Z M175.780902,88.3333333 L184.765517,79.3862581 L184.765517,37.2246982 L175.780902,28.277623 L155.965517,28.277623 L155.965517,0.333333333 L144.765517,0.333333333 L144.765517,88.3333333 L175.780902,88.3333333 Z M174.765517,77.3333333 L155.765517,77.3333333 L155.765517,40.3333333 L174.765517,40.3333333 L174.765517,77.3333333 Z M230.765517,88.3333333 L230.765517,76.795501 L201.965517,76.795501 L201.965517,37.8711656 L230.765517,37.8711656 L230.765517,26.3333333 L199.750133,26.3333333 L190.765517,35.5889571 L190.765517,79.0777096 L199.750133,88.3333333 L230.765517,88.3333333 Z", fill: "#FFFFFF", "fill-rule": "nonzero" }),
                    React__default.createElement("path", { d: "M128.417956,26.3333333 L137.765517,35.3841463 L137.765517,87.3333333 L105.113078,87.3333333 L95.7655172,78.2825203 L95.7655172,56.8333333 L105.113078,47.9065041 L126.113078,47.9065041 L126.113078,37.6158537 L96.1496636,37.6158537 L96.1496636,26.3333333 L128.417956,26.3333333 Z M125.765517,58.3333333 L106.765517,58.3333333 L106.765517,77.3333333 L125.765517,77.3333333 L125.765517,58.3333333 Z", fill: "#FAB126" }))))));
};

var Logo$2 = function (_a) {
    _a.isDark; var props = __rest(_a, ["isDark"]);
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 2173 381" }, props),
        React__default.createElement("defs", null,
            React__default.createElement("polygon", { id: "path-1", points: "273.783 26.908 273.783 97.45 273.248 97.56 147.546 124.357 21.953 101.435 -2.84217094e-14 97.45 -2.84217094e-14 26.908 21.953 22.927 147.546 0 273.248 26.802" }),
            React__default.createElement("linearGradient", { x1: "6.66951564e-05%", y1: "50.0002429%", x2: "99.9996839%", y2: "50.0002429%", id: "linearGradient-3" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("polygon", { id: "path-4", points: "21.952 22.926 -2.84217094e-14 26.908 -2.84217094e-14 97.45 21.952 101.434 147.546 124.357 273.248 97.56 273.781 97.45 273.781 26.908 273.248 26.802 147.546 0" }),
            React__default.createElement("linearGradient", { x1: "-0.00032084038%", y1: "50.0002798%", x2: "100.000038%", y2: "50.0002798%", id: "linearGradient-6" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("polygon", { id: "path-7", points: "376.993 76.466 376.993 119.46 270.608 105.09 147.546 88.519 23.836 114.453 -2.84217094e-14 119.46 -2.84217094e-14 72.591 29.165 58.225 147.546 0 263.29 38.582 341.206 64.52 341.206 64.573" }),
            React__default.createElement("linearGradient", { x1: "4.84359126e-05%", y1: "50.0002464%", x2: "99.9999867%", y2: "50.0002464%", id: "linearGradient-9" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("polygon", { id: "path-10", points: "29.164 58.225 -2.84217094e-14 72.592 -2.84217094e-14 119.46 23.835 114.453 147.546 88.519 270.607 105.09 376.992 119.46 376.992 76.466 341.206 64.573 341.206 64.52 263.289 38.582 147.546 0" }),
            React__default.createElement("linearGradient", { x1: "-0.000216821577%", y1: "50.0003487%", x2: "99.9999867%", y2: "50.0003487%", id: "linearGradient-12" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("path", { d: "M147.546,6.673 C101.43,12.753 59.837,22.764 25.343,35.676 L25.343,35.676 C16.411,39.013 7.908,42.565 2.84217094e-14,46.277 L2.84217094e-14,46.277 L2.84217094e-14,59.727 L23.835,54.724 L147.546,28.79 L270.607,45.361 L376.989,59.727 L376.989,16.737 L341.206,4.844 L341.206,4.791 C317.153,2.151 292.027,0.538 266.088,0.105 L266.088,0.105 C261.46,0.057 256.832,0 252.15,0 L252.15,0 C215.561,0 180.426,2.367 147.546,6.673", id: "path-13" }),
            React__default.createElement("linearGradient", { x1: "-0.000216823303%", y1: "49.9999617%", x2: "99.9997868%", y2: "49.9999617%", id: "linearGradient-15" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("path", { d: "M147.546,6.673 C101.43,12.753 59.837,22.764 25.343,35.676 L25.343,35.676 C16.411,39.013 7.908,42.565 0,46.277 L0,46.277 L0,59.727 L23.835,54.724 L147.546,28.79 L270.607,45.361 L376.989,59.727 L376.989,16.737 L341.206,4.844 L341.206,4.791 C317.153,2.151 292.027,0.538 266.088,0.105 L266.088,0.105 C261.46,0.057 256.832,0 252.15,0 L252.15,0 C215.561,0 180.426,2.367 147.546,6.673", id: "path-16" }),
            React__default.createElement("linearGradient", { x1: "80.4024777%", y1: "50.0001659%", x2: "-1.56407381%", y2: "50.0001659%", id: "linearGradient-18" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("polygon", { id: "path-19", points: "270.607 14.367 147.546 30.937 23.835 5.004 2.84217094e-14 0 2.84217094e-14 46.819 29.164 61.183 147.546 119.404 263.289 80.875 341.206 54.937 376.989 42.998 376.989 0" }),
            React__default.createElement("linearGradient", { x1: "-0.000216823303%", y1: "49.9997274%", x2: "99.9997868%", y2: "49.9997274%", id: "linearGradient-21" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("polygon", { id: "path-22", points: "270.607 14.367 147.546 30.937 23.835 5.004 2.84217094e-14 0 2.84217094e-14 46.819 29.164 61.183 147.546 119.404 263.289 80.875 341.206 54.937 376.989 42.998 376.989 0" }),
            React__default.createElement("linearGradient", { x1: "-0.000216823303%", y1: "49.9998232%", x2: "99.9997706%", y2: "49.9998232%", id: "linearGradient-24" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("path", { d: "M270.607,14.367 L147.546,30.937 L23.835,5.004 L2.84217094e-14,0 L2.84217094e-14,13.45 C7.908,17.166 16.411,20.715 25.343,24.052 L25.343,24.052 C59.837,36.964 101.43,46.974 147.546,53.057 L147.546,53.057 C180.426,57.361 215.561,59.733 252.15,59.733 L252.15,59.733 C256.832,59.733 261.46,59.671 266.088,59.622 L266.088,59.622 C292.027,59.19 317.153,57.577 341.206,54.937 L341.206,54.937 L376.989,42.998 L376.989,0 L270.607,14.367 Z", id: "path-25" }),
            React__default.createElement("linearGradient", { x1: "-0.000216823303%", y1: "49.999208%", x2: "99.9997868%", y2: "49.999208%", id: "linearGradient-27" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("path", { d: "M270.607,14.367 L147.546,30.937 L23.835,5.004 L2.84217094e-14,0 L2.84217094e-14,13.45 C7.908,17.166 16.411,20.715 25.343,24.052 L25.343,24.052 C59.837,36.964 101.43,46.974 147.546,53.057 L147.546,53.057 C180.426,57.361 215.561,59.733 252.15,59.733 L252.15,59.733 C256.832,59.733 261.46,59.671 266.088,59.622 L266.088,59.622 C292.027,59.19 317.153,57.577 341.206,54.937 L341.206,54.937 L376.989,42.998 L376.989,0 L270.607,14.367 Z", id: "path-28" }),
            React__default.createElement("linearGradient", { x1: "80.4024777%", y1: "49.9993997%", x2: "-1.56407381%", y2: "49.9993997%", id: "linearGradient-30" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("path", { d: "M5.329,58.225 C3.822,70.33 2.53,82.762 1.508,95.405 L1.508,95.405 C0.916,101.699 0.432,108.052 0,114.453 L0,114.453 L123.711,88.519 L246.772,105.09 C245.59,89.648 244.082,74.523 242.253,59.834 L242.253,59.834 C241.394,52.626 240.477,45.577 239.454,38.582 L239.454,38.582 L123.711,-5.68434189e-14 L5.329,58.225 Z", id: "path-31" }),
            React__default.createElement("linearGradient", { x1: "4.86684065e-05%", y1: "50.0001422%", x2: "100.000025%", y2: "50.0001422%", id: "linearGradient-33" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("path", { d: "M123.713,0 L239.453,38.581 L239.83175,41.2068613 C240.704344,47.3407344 241.500375,53.526 242.252,59.833 L242.252,59.833 L242.613519,62.7765781 C244.280618,76.5400756 245.6678,90.6764667 246.771,105.089 L246.771,105.089 L123.71,88.518 L-5.68434189e-14,114.452 L-5.68434189e-14,114.437 L0.219592593,111.255551 C0.520185185,106.999088 0.848037037,102.764773 1.21974074,98.5558657 L1.507,95.404 L1.74761402,92.490183 C2.72904142,80.8503195 3.93692308,69.3978462 5.328,58.224 L5.328,58.224 L123.708,0 L123.713,0 Z", id: "path-34" }),
            React__default.createElement("linearGradient", { x1: "-0.000381284673%", y1: "50.0001422%", x2: "100%", y2: "50.0001422%", id: "linearGradient-36" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("path", { d: "M1.508,19.048 C2.53,31.695 3.822,44.065 5.329,56.179 L5.329,56.179 L123.711,114.4 L239.454,75.871 C240.477,68.878 241.394,61.826 242.253,54.618 L242.253,54.618 C244.082,39.925 245.59,24.809 246.772,9.363 L246.772,9.363 L123.711,25.933 L0,0 C0.432,6.401 0.916,12.753 1.508,19.048", id: "path-37" }),
            React__default.createElement("linearGradient", { x1: "4.86684065e-05%", y1: "49.9994878%", x2: "100.000025%", y2: "49.9994878%", id: "linearGradient-39" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("path", { d: "M0,0 L123.711,25.933 L246.772,9.363 L246.531255,12.4477724 C245.387507,26.8225867 243.960067,40.9045333 242.253,54.618 L242.253,54.618 L241.928063,57.313877 C241.163094,63.5880781 240.349125,69.752125 239.454,75.871 L239.454,75.871 L123.714,114.399 L123.709,114.399 L5.329,56.179 L4.956761,53.1451545 C3.60854167,42.0014097 2.44483333,30.6410833 1.508,19.048 C0.916,12.753 0.432,6.401 0,0 L0,0.015 L0,0 Z", id: "path-40" }),
            React__default.createElement("linearGradient", { x1: "-0.000381284673%", y1: "50.0000248%", x2: "100%", y2: "50.0000248%", id: "linearGradient-42" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("path", { d: "M0.647,22.926 C0.22,35.843 0,48.914 0,62.152 L0,62.152 C0,75.443 0.22,88.518 0.647,101.434 L0.647,101.434 L126.241,124.357 L251.943,97.56 C252.322,85.882 252.476,74.095 252.476,62.152 L252.476,62.152 C252.476,50.263 252.322,38.423 251.943,26.802 L251.943,26.802 L126.241,0 L0.647,22.926 Z", id: "path-43" }),
            React__default.createElement("linearGradient", { x1: "-2.44775741e-05%", y1: "50.0002429%", x2: "100.000053%", y2: "50.0002429%", id: "linearGradient-45" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("path", { d: "M126.241,0 L251.943,26.802 L252.050021,30.2947 C252.35126,40.79149 252.476,51.4519 252.476,62.152 L252.476,62.152 L252.470199,66.1272867 C252.439,76.7129877 252.279889,87.1795556 251.943,97.56 L251.943,97.56 L126.241,124.357 L0.647,101.434 L0.535687453,97.9074696 C0.181818182,86.1389421 0,74.2347273 0,62.152 L0,62.152 L0.006587,58.185597 C0.04607,46.30134 0.2627,34.5513 0.647,22.926 L0.647,22.926 L126.241,0 Z", id: "path-46" }),
            React__default.createElement("linearGradient", { x1: "-4.86380938e-05%", y1: "50.0003288%", x2: "99.999633%", y2: "50.0003288%", id: "linearGradient-48" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("polygon", { id: "path-49", points: "0 0 125.699 26.801 126.237 26.907 126.237 97.453 125.699 97.56 0 124.357" }),
            React__default.createElement("linearGradient", { x1: "0.000547699961%", y1: "50.0000466%", x2: "99.9999308%", y2: "50.0000466%", id: "linearGradient-51" },
                React__default.createElement("stop", { "stop-color": "#565454", offset: "0%" }),
                React__default.createElement("stop", { "stop-color": "#AAAAAA", offset: "100%" })),
            React__default.createElement("polygon", { id: "path-52", points: "0 0 115.745 38.582 193.665 64.516 193.665 64.569 229.448 76.462 229.448 119.456 123.067 105.09 0 88.515" }),
            React__default.createElement("polygon", { id: "path-54", points: "229.448 0 229.448 42.998 193.665 54.94 115.745 80.879 0 119.403 0 30.942 123.067 14.367" })),
        React__default.createElement("g", { id: "\u9875\u9762-1", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
            React__default.createElement("g", { id: "\u7F16\u7EC4", transform: "translate(0.987000, 0.609000)" },
                React__default.createElement("g", { transform: "translate(491.535500, 75.645800)", fill: "#FFFFFF" },
                    React__default.createElement("polygon", { id: "Fill-1", points: "0 14.5392 103.679 14.5392 103.679 37.6582 27.648 37.6582 27.648 86.5182 92 86.5182 92 109.8762 27.648 109.8762 27.648 166.6012 106.301 166.6012 106.301 189.9592 0 189.9592" }),
                    React__default.createElement("path", { d: "M211.4063,156.1144 L211.4063,123.9384 C172.5563,128.7054 159.4473,138.4774 159.4473,153.2554 C159.4473,166.1254 168.2653,171.3684 179.9443,171.3684 C191.3853,171.3684 200.6803,165.8854 211.4063,156.1144 M132.9913,155.1614 C132.9913,127.0364 156.8253,112.4974 211.4063,106.5394 C211.1683,91.2854 205.6853,77.9384 186.3803,77.9384 C172.5563,77.9384 159.6853,84.1354 148.4833,91.2854 L138.2353,72.6944 C151.8203,64.1144 170.1733,55.5344 191.1463,55.5344 C223.8003,55.5344 238.8153,76.2694 238.8153,111.0674 L238.8153,189.9594 L216.4113,189.9594 L214.0273,174.9434 L213.3123,174.9434 C201.3953,185.1924 187.3333,193.0574 171.6023,193.0574 C148.9603,193.0574 132.9913,178.2804 132.9913,155.1614", id: "Fill-3" }),
                    React__default.createElement("path", { d: "M277.6631,58.8703 L300.0671,58.8703 L302.2121,76.9853 L302.9271,76.9853 C315.0821,65.3063 328.4301,55.5343 346.3051,55.5343 C374.1911,55.5343 386.5851,74.1243 386.5851,107.4933 L386.5851,189.9593 L359.1761,189.9593 L359.1761,110.8293 C359.1761,88.1863 352.5021,79.1303 337.0101,79.1303 C324.8541,79.1303 316.5131,85.3273 304.8341,97.0053 L304.8341,189.9593 L277.6631,189.9593 L277.6631,58.8703 Z", id: "Fill-5" }),
                    React__default.createElement("path", { d: "M496.9345,102.7257 C496.9345,85.0887 485.9705,74.8397 472.1465,74.8397 C458.3235,74.8397 447.3595,84.8507 447.3595,102.7257 C447.3595,120.1237 458.5615,130.8507 472.1465,130.8507 C485.7325,130.8507 496.9345,120.1237 496.9345,102.7257 M513.3795,207.3587 C513.3795,196.3947 504.7995,193.0577 488.8305,193.0577 L469.0485,193.0577 C462.8515,193.0577 456.8925,192.3427 451.4115,191.1507 C443.5455,196.8717 440.2085,203.5447 440.2085,210.2177 C440.2085,223.0887 453.5565,230.7157 475.2455,230.7157 C498.1255,230.7157 513.3795,219.5137 513.3795,207.3587 M416.8515,214.2697 C416.8515,203.3067 423.7635,193.0577 435.9185,185.6687 L435.9185,184.4777 C429.2455,180.4257 424.0015,173.5137 424.0015,162.7887 C424.0015,152.5387 431.3905,143.7207 438.5405,138.4777 L438.5405,137.5237 C429.7215,130.6127 421.3795,118.2177 421.3795,102.7257 C421.3795,72.9327 444.9755,55.5347 472.1465,55.5347 C479.5355,55.5347 486.2085,56.9637 491.2135,58.8707 L537.6915,58.8707 L537.6915,79.3687 L512.6645,79.3687 C517.6695,84.6127 521.2455,93.4307 521.2455,103.4407 C521.2455,132.0417 499.5565,148.4877 472.1465,148.4877 C466.1885,148.4877 459.5145,147.0577 453.7945,144.4357 C449.5035,148.2487 446.6445,152.0627 446.6445,158.2587 C446.6445,166.1247 451.8875,171.1297 468.5725,171.1297 L492.6445,171.1297 C523.6285,171.1297 539.8355,180.6637 539.8355,203.0677 C539.8355,228.3317 513.1415,248.8297 471.1935,248.8297 C439.7325,248.8297 416.8515,237.1507 416.8515,214.2697", id: "Fill-7" }),
                    React__default.createElement("path", { d: "M644.4629,112.7365 C644.4629,90.0935 634.2149,76.9855 615.1479,76.9855 C598.7009,76.9855 584.1629,89.6165 581.5409,112.7365 L644.4629,112.7365 Z M554.8469,124.6535 C554.8469,81.9895 583.9249,55.5345 614.6709,55.5345 C649.4689,55.5345 668.0599,80.5595 668.0599,117.7415 C668.0599,122.9855 667.5829,128.4665 666.8669,131.5655 L581.7789,131.5655 C583.9249,156.5905 599.6549,171.6065 622.2979,171.6065 C633.9769,171.6065 643.9859,168.0315 653.5209,161.8355 L663.0539,179.2335 C650.8989,187.3375 635.8829,193.0575 618.7229,193.0575 C583.2089,193.0575 554.8469,167.7935 554.8469,124.6535 L554.8469,124.6535 Z", id: "Fill-9" }),
                    React__default.createElement("path", { d: "M698.8007,159.213 L698.8007,0 L725.9727,0 L725.9727,160.644 C725.9727,168.031 729.3087,170.653 732.6457,170.653 C733.8377,170.653 734.7907,170.653 737.1737,170.177 L740.7487,190.912 C737.4127,192.105 732.6457,193.058 725.9727,193.058 C706.1897,193.058 698.8007,180.426 698.8007,159.213", id: "Fill-11" }),
                    React__default.createElement("path", { d: "M769.8232,58.8703 L792.2272,58.8703 L794.3732,77.2243 L795.0882,77.2243 C806.2902,65.3063 819.3982,55.5343 835.6062,55.5343 C855.1502,55.5343 866.1142,64.5913 871.8342,79.6063 C884.7052,65.7823 898.0522,55.5343 914.4972,55.5343 C941.9072,55.5343 954.7772,74.1243 954.7772,107.4933 L954.7772,189.9593 L927.3682,189.9593 L927.3682,110.8293 C927.3682,88.1863 920.2182,79.1303 905.4402,79.1303 C896.3842,79.1303 886.8492,85.0893 875.8862,97.0053 L875.8862,189.9593 L848.4762,189.9593 L848.4762,110.8293 C848.4762,88.1863 841.5642,79.1303 826.5492,79.1303 C817.7302,79.1303 807.9582,85.0893 796.9952,97.0053 L796.9952,189.9593 L769.8232,189.9593 L769.8232,58.8703 Z", id: "Fill-13" }),
                    React__default.createElement("path", { d: "M1065.123,156.1144 L1065.123,123.9384 C1026.273,128.7054 1013.164,138.4774 1013.164,153.2554 C1013.164,166.1254 1021.983,171.3684 1033.662,171.3684 C1045.102,171.3684 1054.397,165.8854 1065.123,156.1144 M986.708,155.1614 C986.708,127.0364 1010.543,112.4974 1065.123,106.5394 C1064.885,91.2854 1059.402,77.9384 1040.097,77.9384 C1026.273,77.9384 1013.402,84.1354 1002.201,91.2854 L991.952,72.6944 C1005.537,64.1144 1023.89,55.5344 1044.864,55.5344 C1077.517,55.5344 1092.532,76.2694 1092.532,111.0674 L1092.532,189.9594 L1070.128,189.9594 L1067.745,174.9434 L1067.029,174.9434 C1055.112,185.1924 1041.051,193.0574 1025.32,193.0574 C1002.678,193.0574 986.708,178.2804 986.708,155.1614", id: "Fill-15" }),
                    React__default.createElement("path", { d: "M1131.3798,58.8703 L1153.7838,58.8703 L1155.9298,82.4673 L1156.6448,82.4673 C1165.9398,65.5443 1179.7638,55.5343 1193.8258,55.5343 C1200.2618,55.5343 1204.5518,56.4873 1208.6038,58.3933 L1203.5978,82.2283 C1199.0688,80.7983 1195.7328,80.0833 1190.4888,80.0833 C1179.7638,80.0833 1166.8938,87.4723 1158.5518,108.2083 L1158.5518,189.9593 L1131.3798,189.9593 L1131.3798,58.8703 Z", id: "Fill-17" }),
                    React__default.createElement("polygon", { id: "Fill-19", points: "1228.8593 0.0001 1255.5533 0.0001 1255.5533 122.5091 1256.2693 122.5091 1307.7513 58.8701 1338.0203 58.8701 1293.4503 112.0201 1343.0253 189.9591 1313.2333 189.9591 1277.7193 130.6121 1255.5533 156.1141 1255.5533 189.9591 1228.8593 189.9591" }),
                    React__default.createElement("path", { d: "M1446.2265,112.7365 C1446.2265,90.0935 1435.9775,76.9855 1416.9105,76.9855 C1400.4645,76.9855 1385.9255,89.6165 1383.3035,112.7365 L1446.2265,112.7365 Z M1356.6095,124.6535 C1356.6095,81.9895 1385.6875,55.5345 1416.4335,55.5345 C1451.2315,55.5345 1469.8225,80.5595 1469.8225,117.7415 C1469.8225,122.9855 1469.3455,128.4665 1468.6295,131.5655 L1383.5415,131.5655 C1385.6875,156.5905 1401.4175,171.6065 1424.0605,171.6065 C1435.7395,171.6065 1445.7485,168.0315 1455.2835,161.8355 L1464.8165,179.2335 C1452.6615,187.3375 1437.6455,193.0575 1420.4855,193.0575 C1384.9715,193.0575 1356.6095,167.7935 1356.6095,124.6535 L1356.6095,124.6535 Z", id: "Fill-21" }),
                    React__default.createElement("path", { d: "M1504.8535,147.0577 L1504.8535,80.7977 L1485.7865,80.7977 L1485.7865,60.3007 L1506.0445,58.8707 L1509.1435,22.6427 L1532.2625,22.6427 L1532.2625,58.8707 L1566.3455,58.8707 L1566.3455,80.7977 L1532.2625,80.7977 L1532.2625,147.2957 C1532.2625,163.0267 1537.7445,171.1297 1551.3305,171.1297 C1555.8585,171.1297 1561.5785,169.7007 1565.3915,168.0317 L1570.3975,188.2907 C1563.0085,190.6737 1554.1895,193.0577 1544.6565,193.0577 C1515.1015,193.0577 1504.8535,174.7047 1504.8535,147.0577", id: "Fill-23" }),
                    React__default.createElement("path", { d: "M1581.1211,174.9435 L1593.9911,157.3055 C1605.6701,166.6015 1617.1101,172.3215 1631.1731,172.3215 C1646.9031,172.3215 1654.2921,164.6945 1654.2921,154.6845 C1654.2921,142.7665 1639.5151,137.5235 1625.2141,132.0425 C1607.8151,125.3685 1587.7951,116.0735 1587.7951,93.9075 C1587.7951,71.9795 1605.4321,55.5345 1634.2711,55.5345 C1651.9081,55.5345 1666.2091,62.6845 1676.9341,71.0265 L1664.0641,87.9485 C1655.0071,81.2745 1645.7121,76.5075 1634.7481,76.5075 C1620.4471,76.5075 1613.7731,83.6585 1613.7731,92.7155 C1613.7731,103.9175 1627.3591,108.2085 1641.6601,113.4515 C1660.0121,120.3635 1680.2711,128.4665 1680.2711,153.2555 C1680.2711,175.1815 1662.8721,193.0575 1630.4581,193.0575 C1612.3441,193.0575 1593.7531,185.4305 1581.1211,174.9435", id: "Fill-25" })),
                React__default.createElement("g", { transform: "translate(-0.000000, 127.850000)" },
                    React__default.createElement("mask", { id: "mask-2", fill: "white" },
                        React__default.createElement("use", { href: "#path-1" })),
                    React__default.createElement("g", { id: "Clip-29" }),
                    React__default.createElement("polygon", { id: "Fill-28", fill: "url(#linearGradient-3)", mask: "url(#mask-2)", points: "273.783 26.908 273.783 97.45 273.248 97.56 147.546 124.357 21.953 101.435 -2.84217094e-14 97.45 -2.84217094e-14 26.908 21.953 22.927 147.546 0 273.248 26.802" })),
                React__default.createElement("g", { transform: "translate(0.001000, 127.850000)" },
                    React__default.createElement("mask", { id: "mask-5", fill: "white" },
                        React__default.createElement("use", { href: "#path-4" })),
                    React__default.createElement("g", { id: "Clip-31" }),
                    React__default.createElement("polygon", { id: "Fill-30", fill: "url(#linearGradient-6)", mask: "url(#mask-5)", points: "21.952 22.926 -2.84217094e-14 26.908 -2.84217094e-14 97.45 21.952 101.434 147.546 124.357 273.248 97.56 273.781 97.45 273.781 26.908 273.248 26.802 147.546 0" })),
                React__default.createElement("g", { transform: "translate(-0.000000, 0.000000)" },
                    React__default.createElement("mask", { id: "mask-8", fill: "white" },
                        React__default.createElement("use", { href: "#path-7" })),
                    React__default.createElement("g", { id: "Clip-33" }),
                    React__default.createElement("polygon", { id: "Fill-32", fill: "url(#linearGradient-9)", mask: "url(#mask-8)", points: "376.993 76.466 376.993 119.46 270.608 105.09 147.546 88.519 23.836 114.453 -2.84217094e-14 119.46 -2.84217094e-14 72.591 29.165 58.225 147.546 0 263.29 38.582 341.206 64.52 341.206 64.573" })),
                React__default.createElement("g", { transform: "translate(0.001000, 0.000000)" },
                    React__default.createElement("mask", { id: "mask-11", fill: "white" },
                        React__default.createElement("use", { href: "#path-10" })),
                    React__default.createElement("g", { id: "Clip-35" }),
                    React__default.createElement("polygon", { id: "Fill-34", fill: "url(#linearGradient-12)", mask: "url(#mask-11)", points: "29.164 58.225 -2.84217094e-14 72.592 -2.84217094e-14 119.46 23.835 114.453 147.546 88.519 270.607 105.09 376.992 119.46 376.992 76.466 341.206 64.573 341.206 64.52 263.289 38.582 147.546 0" })),
                React__default.createElement("g", { transform: "translate(0.001000, 59.729000)" },
                    React__default.createElement("mask", { id: "mask-14", fill: "white" },
                        React__default.createElement("use", { href: "#path-13" })),
                    React__default.createElement("g", { id: "Clip-37" }),
                    React__default.createElement("path", { d: "M147.546,6.673 C101.43,12.753 59.837,22.764 25.343,35.676 L25.343,35.676 C16.411,39.013 7.908,42.565 2.84217094e-14,46.277 L2.84217094e-14,46.277 L2.84217094e-14,59.727 L23.835,54.724 L147.546,28.79 L270.607,45.361 L376.989,59.727 L376.989,16.737 L341.206,4.844 L341.206,4.791 C317.153,2.151 292.027,0.538 266.088,0.105 L266.088,0.105 C261.46,0.057 256.832,0 252.15,0 L252.15,0 C215.561,0 180.426,2.367 147.546,6.673", id: "Fill-36", fill: "url(#linearGradient-15)", mask: "url(#mask-14)" })),
                React__default.createElement("g", { transform: "translate(0.001000, 59.729000)" },
                    React__default.createElement("mask", { id: "mask-17", fill: "white" },
                        React__default.createElement("use", { href: "#path-16" })),
                    React__default.createElement("g", { id: "Clip-39" }),
                    React__default.createElement("path", { d: "M147.546,6.673 C101.43,12.753 59.837,22.764 25.343,35.676 L25.343,35.676 C16.411,39.013 7.908,42.565 0,46.277 L0,46.277 L0,59.727 L23.835,54.724 L147.546,28.79 L270.607,45.361 L376.989,59.727 L376.989,16.737 L341.206,4.844 L341.206,4.791 C317.153,2.151 292.027,0.538 266.088,0.105 L266.088,0.105 C261.46,0.057 256.832,0 252.15,0 L252.15,0 C215.561,0 180.426,2.367 147.546,6.673", id: "Fill-38", fill: "url(#linearGradient-18)", mask: "url(#mask-17)" })),
                React__default.createElement("g", { transform: "translate(0.001000, 260.601000)" },
                    React__default.createElement("mask", { id: "mask-20", fill: "white" },
                        React__default.createElement("use", { href: "#path-19" })),
                    React__default.createElement("g", { id: "Clip-41" }),
                    React__default.createElement("polygon", { id: "Fill-40", fill: "url(#linearGradient-21)", mask: "url(#mask-20)", points: "270.607 14.367 147.546 30.937 23.835 5.004 2.84217094e-14 0 2.84217094e-14 46.819 29.164 61.183 147.546 119.404 263.289 80.875 341.206 54.937 376.989 42.998 376.989 0" })),
                React__default.createElement("g", { transform: "translate(0.001000, 260.601000)" },
                    React__default.createElement("mask", { id: "mask-23", fill: "white" },
                        React__default.createElement("use", { href: "#path-22" })),
                    React__default.createElement("g", { id: "Clip-43" }),
                    React__default.createElement("polygon", { id: "Fill-42", fill: "url(#linearGradient-24)", mask: "url(#mask-23)", points: "270.607 14.367 147.546 30.937 23.835 5.004 2.84217094e-14 0 2.84217094e-14 46.819 29.164 61.183 147.546 119.404 263.289 80.875 341.206 54.937 376.989 42.998 376.989 0" })),
                React__default.createElement("g", { transform: "translate(0.001000, 260.601000)" },
                    React__default.createElement("mask", { id: "mask-26", fill: "white" },
                        React__default.createElement("use", { href: "#path-25" })),
                    React__default.createElement("g", { id: "Clip-45" }),
                    React__default.createElement("path", { d: "M270.607,14.367 L147.546,30.937 L23.835,5.004 L2.84217094e-14,0 L2.84217094e-14,13.45 C7.908,17.166 16.411,20.715 25.343,24.052 L25.343,24.052 C59.837,36.964 101.43,46.974 147.546,53.057 L147.546,53.057 C180.426,57.361 215.561,59.733 252.15,59.733 L252.15,59.733 C256.832,59.733 261.46,59.671 266.088,59.622 L266.088,59.622 C292.027,59.19 317.153,57.577 341.206,54.937 L341.206,54.937 L376.989,42.998 L376.989,0 L270.607,14.367 Z", id: "Fill-44", fill: "url(#linearGradient-27)", mask: "url(#mask-26)" })),
                React__default.createElement("g", { transform: "translate(0.001000, 260.601000)" },
                    React__default.createElement("mask", { id: "mask-29", fill: "white" },
                        React__default.createElement("use", { href: "#path-28" })),
                    React__default.createElement("g", { id: "Clip-47" }),
                    React__default.createElement("path", { d: "M270.607,14.367 L147.546,30.937 L23.835,5.004 L2.84217094e-14,0 L2.84217094e-14,13.45 C7.908,17.166 16.411,20.715 25.343,24.052 L25.343,24.052 C59.837,36.964 101.43,46.974 147.546,53.057 L147.546,53.057 C180.426,57.361 215.561,59.733 252.15,59.733 L252.15,59.733 C256.832,59.733 261.46,59.671 266.088,59.622 L266.088,59.622 C292.027,59.19 317.153,57.577 341.206,54.937 L341.206,54.937 L376.989,42.998 L376.989,0 L270.607,14.367 Z", id: "Fill-46", fill: "url(#linearGradient-30)", mask: "url(#mask-29)" })),
                React__default.createElement("g", { transform: "translate(23.836000, 0.000000)" },
                    React__default.createElement("mask", { id: "mask-32", fill: "white" },
                        React__default.createElement("use", { href: "#path-31" })),
                    React__default.createElement("g", { id: "Clip-49" }),
                    React__default.createElement("path", { d: "M5.329,58.225 C3.822,70.33 2.53,82.762 1.508,95.405 L1.508,95.405 C0.916,101.699 0.432,108.052 0,114.453 L0,114.453 L123.711,88.519 L246.772,105.09 C245.59,89.648 244.082,74.523 242.253,59.834 L242.253,59.834 C241.394,52.626 240.477,45.577 239.454,38.582 L239.454,38.582 L123.711,-5.68434189e-14 L5.329,58.225 Z", id: "Fill-48", fill: "url(#linearGradient-33)", mask: "url(#mask-32)" })),
                React__default.createElement("g", { transform: "translate(23.837000, 0.001000)" },
                    React__default.createElement("mask", { id: "mask-35", fill: "white" },
                        React__default.createElement("use", { href: "#path-34" })),
                    React__default.createElement("g", { id: "Clip-51" }),
                    React__default.createElement("polygon", { id: "Fill-50", fill: "url(#linearGradient-36)", mask: "url(#mask-35)", points: "-5.68434189e-14 114.452 246.771 114.452 246.771 -0.001 -5.68434189e-14 -0.001" })),
                React__default.createElement("g", { transform: "translate(23.836000, 265.605000)" },
                    React__default.createElement("mask", { id: "mask-38", fill: "white" },
                        React__default.createElement("use", { href: "#path-37" })),
                    React__default.createElement("g", { id: "Clip-53" }),
                    React__default.createElement("path", { d: "M1.508,19.048 C2.53,31.695 3.822,44.065 5.329,56.179 L5.329,56.179 L123.711,114.4 L239.454,75.871 C240.477,68.878 241.394,61.826 242.253,54.618 L242.253,54.618 C244.082,39.925 245.59,24.809 246.772,9.363 L246.772,9.363 L123.711,25.933 L0,0 C0.432,6.401 0.916,12.753 1.508,19.048", id: "Fill-52", fill: "url(#linearGradient-39)", mask: "url(#mask-38)" })),
                React__default.createElement("g", { transform: "translate(23.836000, 265.605000)" },
                    React__default.createElement("mask", { id: "mask-41", fill: "white" },
                        React__default.createElement("use", { href: "#path-40" })),
                    React__default.createElement("g", { id: "Clip-55" }),
                    React__default.createElement("polygon", { id: "Fill-54", fill: "url(#linearGradient-42)", mask: "url(#mask-41)", points: "0.001 114.399 246.772 114.399 246.772 0 0.001 0" })),
                React__default.createElement("g", { transform: "translate(21.306000, 127.850000)" },
                    React__default.createElement("mask", { id: "mask-44", fill: "white" },
                        React__default.createElement("use", { href: "#path-43" })),
                    React__default.createElement("g", { id: "Clip-57" }),
                    React__default.createElement("path", { d: "M0.647,22.926 C0.22,35.843 0,48.914 0,62.152 L0,62.152 C0,75.443 0.22,88.518 0.647,101.434 L0.647,101.434 L126.241,124.357 L251.943,97.56 C252.322,85.882 252.476,74.095 252.476,62.152 L252.476,62.152 C252.476,50.263 252.322,38.423 251.943,26.802 L251.943,26.802 L126.241,0 L0.647,22.926 Z", id: "Fill-56", fill: "url(#linearGradient-45)", mask: "url(#mask-44)" })),
                React__default.createElement("g", { transform: "translate(21.306000, 127.850000)" },
                    React__default.createElement("mask", { id: "mask-47", fill: "white" },
                        React__default.createElement("use", { href: "#path-46" })),
                    React__default.createElement("g", { id: "Clip-59" }),
                    React__default.createElement("polygon", { id: "Fill-58", fill: "url(#linearGradient-48)", mask: "url(#mask-47)", points: "0 124.357 252.477 124.357 252.477 0 0 0" })),
                React__default.createElement("g", { transform: "translate(147.544000, 0.002000)" },
                    React__default.createElement("g", { transform: "translate(0.002000, 127.848000)" },
                        React__default.createElement("mask", { id: "mask-50", fill: "white" },
                            React__default.createElement("use", { href: "#path-49" })),
                        React__default.createElement("g", { id: "Clip-61" }),
                        React__default.createElement("polygon", { id: "Fill-60", fill: "url(#linearGradient-51)", mask: "url(#mask-50)", points: "126.237 26.907 126.237 97.453 125.699 97.56 0 124.357 0 0 125.699 26.801" })),
                    React__default.createElement("g", { transform: "translate(0.000000, 0.000000)" },
                        React__default.createElement("mask", { id: "mask-53", fill: "white" },
                            React__default.createElement("use", { href: "#path-52" })),
                        React__default.createElement("g", { id: "Clip-63" })),
                    React__default.createElement("g", { transform: "translate(0.000000, 260.598000)" },
                        React__default.createElement("mask", { id: "mask-55", fill: "white" },
                            React__default.createElement("use", { href: "#path-54" })),
                        React__default.createElement("g", { id: "Clip-65" })),
                    React__default.createElement("path", { d: "M12.1273,161.328 C18.0813,162.159 21.0583,162.575 27.0113,163.406 C26.6743,165.815 26.5233,167.022 26.2583,169.439 C21.8773,168.957 19.6863,168.716 15.3043,168.235 C14.7133,173.611 14.5013,176.306 14.2433,181.702 C17.9703,181.88 19.8323,181.969 23.5593,182.147 C23.4403,184.617 23.4003,185.852 23.3553,188.324 C19.6243,188.255 17.7603,188.221 14.0293,188.153 C13.9143,194.422 13.9693,197.56 14.3033,203.824 C18.8563,203.581 21.1333,203.46 25.6873,203.217 C25.8163,205.662 25.8993,206.884 26.1033,209.325 C19.9603,209.833 16.8903,210.088 10.7473,210.597 C9.4953,194.224 9.7343,177.598 12.1273,161.328", id: "Fill-21298", fill: "#FFFFFF" }),
                    React__default.createElement("path", { d: "M40.7825,199.8632 C40.6575,196.7412 40.6265,195.1792 40.6285,192.0552 C34.9965,193.2092 33.0945,195.7172 33.2295,199.4432 C33.3465,202.6882 34.7235,203.9322 36.4135,203.8322 C38.0685,203.7342 39.3235,202.2972 40.7825,199.8632 M29.4155,200.0722 C29.1355,192.8462 32.7355,189.1002 40.6775,187.8312 C40.7255,184.1292 40.1315,180.8452 37.3375,180.6812 C35.3385,180.5642 33.3825,182.0002 31.6835,183.7492 C31.1695,181.8352 30.9235,180.8712 30.4555,178.9312 C32.5625,176.8662 35.4005,174.9482 38.4285,175.2122 C43.1435,175.6232 44.7665,180.7272 44.6285,188.9982 C44.5015,196.4992 44.6255,200.2562 45.2455,207.7382 C43.9505,207.8452 43.3035,207.8992 42.0095,208.0062 C41.7515,206.5692 41.6295,205.8492 41.3985,204.4052 C41.3565,204.4082 41.3365,204.4092 41.2955,204.4122 C39.7295,207.0012 37.8735,209.1192 35.6015,209.3162 C32.3325,209.6002 29.6455,206.0132 29.4155,200.0722", id: "Fill-21300", fill: "#FFFFFF" }),
                    React__default.createElement("path", { d: "M50.8577,177.0682 C52.1527,177.1752 52.7997,177.2292 54.0947,177.3362 C54.0837,178.9842 54.0867,179.8062 54.1127,181.4502 C54.1537,181.4522 54.1737,181.4532 54.2157,181.4562 C56.1317,178.9262 58.2537,176.9392 60.8357,177.1642 C64.8617,177.5152 66.2097,181.5752 66.0597,188.6052 C65.9117,195.5542 66.0177,199.0362 66.5917,205.9682 C65.0087,206.1002 64.2167,206.1662 62.6327,206.2972 C62.0687,199.4862 61.9567,196.0672 62.0737,189.2392 C62.1577,184.3572 61.3617,182.3512 59.1207,182.2232 C57.3607,182.1222 56.0617,183.4112 54.2787,185.9862 C53.9887,194.3722 54.0887,198.5792 54.7827,206.9472 C53.2127,207.0772 52.4277,207.1432 50.8577,207.2732 C49.9527,197.3892 49.9527,186.9522 50.8577,177.0682", id: "Fill-21302", fill: "#FFFFFF" }),
                    React__default.createElement("path", { d: "M82.0736,188.0385 C82.1656,184.6795 80.7256,182.6315 78.7256,182.5055 C76.7256,182.3805 74.9876,184.2755 74.8896,187.8415 C74.7956,191.3145 76.4606,193.4415 78.4286,193.42559 C80.3976,193.4095 81.9826,191.3525 82.0736,188.0385 M85.2146,207.7035 C84.9996,205.6555 83.7186,205.1385 81.4126,205.3385 C80.2696,205.4375 79.6986,205.4875 78.5556,205.5865 C77.6616,205.6645 76.7886,205.5985 75.9766,205.4295 C74.9366,206.6605 74.5826,208.0485 74.7276,209.3835 C75.0076,211.9575 77.1436,213.2205 80.2596,212.7995 C83.5466,212.3555 85.4526,209.9735 85.2146,207.7035 M71.4536,210.5765 C71.1986,208.3375 72.0096,206.1385 73.6496,204.5155 C73.6426,204.4195 73.6386,204.3715 73.6326,204.2755 C72.6046,203.5335 71.7406,202.1765 71.6356,199.9915 C71.5336,197.9045 72.5606,196.0725 73.5776,194.9995 C73.5766,194.9225 73.5756,194.8845 73.5746,194.8085 C72.2736,193.4385 71.0396,190.9045 71.1266,187.7385 C71.2926,181.6535 75.0846,178.4055 79.0086,178.7475 C80.0746,178.8405 81.0136,179.2005 81.7066,179.6245 C84.3916,179.8475 85.7346,179.9585 88.4206,180.1815 C88.2966,181.6785 88.2436,182.4275 88.1586,183.9265 C86.7106,183.8445 85.9856,183.8035 84.5376,183.7205 C85.2056,184.7445 85.6406,186.4065 85.5926,188.2685 C85.4516,193.5895 82.4666,196.7455 78.4956,196.8655 C77.6326,196.8915 76.6556,196.6415 75.8136,196.1425 C75.2116,196.9155 74.8186,197.6925 74.8726,198.9295 C74.9386,200.4975 75.7616,201.4525 78.1756,201.3095 C79.5676,201.2275 80.2646,201.1865 81.6586,201.1045 C86.1416,200.8395 88.5416,202.4445 88.9476,206.5225 C89.4056,211.1205 86.1966,215.4355 80.1916,216.3865 C75.6876,217.0995 71.9856,215.2475 71.4536,210.5765", id: "Fill-21304", fill: "#FFFFFF" }),
                    React__default.createElement("path", { d: "M103.4163,190.2606 C103.4713,186.5576 102.1513,184.3276 99.3933,184.1626 C97.0133,184.0196 94.7363,186.0856 94.2963,190.1256 C97.9443,190.1796 99.7683,190.2066 103.4163,190.2606 M90.4122994,192.2136 C90.4103,184.5366 95.1493,180.1536 99.5893,180.5406 C104.6143,180.9786 106.8763,185.1876 106.8263,191.1086 C106.8193,191.9436 106.7533,192.8156 106.6543,193.3116 C101.7213,193.3556 99.2543,193.3776 94.3213,193.4226 C94.6723,197.7986 97.1473,200.2726 100.4243,200.0766 C102.1133,199.9766 103.5243,199.2946 104.8573,198.2266 C105.4633,199.3266 105.7713,199.8706 106.3993,200.9456 C104.7313,202.3626 102.6483,203.4946 100.1703,203.7106 C95.0423,204.1556 90.4143,199.9766 90.4122994,192.2136", id: "Fill-21306", fill: "#FFFFFF" }),
                    React__default.createElement("path", { d: "M111.3968,197.5155 C110.9668,187.7395 111.2438,182.8095 112.7788,173.1175 C114.3348,173.3645 115.1128,173.4875 116.6688,173.7335 C115.1698,183.1965 114.9038,188.0105 115.3408,197.5555 C115.3908,198.6525 115.9008,199.0135 116.3828,198.9855 C116.5558,198.9745 116.6948,198.9665 117.0348,198.8775 C117.3118,200.0795 117.4588,200.6775 117.7658,201.8675 C117.2988,202.0815 116.6228,202.2815 115.6598,202.3655 C112.8028,202.6135 111.5398,200.7715 111.3968,197.5155", id: "Fill-21308", fill: "#FFFFFF" }))))));
};
var LogoWithTextIcon = React__default.memo(Logo$2, function (prev, next) { return prev.isDark === next.isDark; });

var Icon$1o = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React__default.createElement("circle", { cx: "256", cy: "256", r: "256", fill: "url(#paint0_linear_logoround)" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M149.813 139.861C144.738 112.406 165.591 87.0417 193.238 87.0417C217.636 87.0417 237.414 107.022 237.414 131.669V186.687C243.517 186.252 249.718 186.028 255.998 186.028C262.032 186.028 267.992 186.234 273.862 186.636V131.669C273.862 107.022 293.641 87.0417 318.039 87.0417C345.686 87.0417 366.539 112.406 361.464 139.861L349.509 204.532C390.538 222.627 421.562 254.056 421.562 293.548V317.442C421.562 349.919 400.293 377.11 370.56 395.466C340.595 413.965 300.058 424.962 255.998 424.962C211.939 424.962 171.401 413.965 141.436 395.466C111.703 377.11 90.4342 349.919 90.4342 317.442V293.548C90.4342 254.265 121.139 222.957 161.822 204.825L149.813 139.861ZM334.189 213.028L348.178 137.354C351.701 118.299 337.227 100.695 318.039 100.695C301.105 100.695 287.378 114.562 287.378 131.669V201.683C282.941 201.108 278.433 200.653 273.862 200.323C268.003 199.899 262.042 199.682 255.998 199.682C249.707 199.682 243.505 199.918 237.414 200.376C232.844 200.72 228.335 201.189 223.899 201.777V131.669C223.899 114.562 210.172 100.695 193.238 100.695C174.05 100.695 159.576 118.299 163.099 137.354L177.134 213.279C133.257 229.744 103.95 259.533 103.95 293.548V317.442C103.95 369.283 172.024 411.308 255.998 411.308C339.972 411.308 408.047 369.283 408.047 317.442V293.548C408.047 259.36 378.439 229.44 334.189 213.028Z", fill: "#633001" }),
        React__default.createElement("path", { d: "M408.047 317.442C408.047 369.283 339.972 411.308 255.998 411.308C172.024 411.308 103.95 369.283 103.95 317.442V293.548H408.047V317.442Z", fill: "#FEDC90" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M163.099 137.354C159.576 118.299 174.05 100.695 193.238 100.695C210.172 100.695 223.899 114.562 223.899 131.669V201.777C234.247 200.404 244.986 199.682 255.998 199.682C266.755 199.682 277.252 200.371 287.378 201.683V131.669C287.378 114.562 301.105 100.695 318.039 100.695C337.227 100.695 351.701 118.299 348.178 137.354L334.189 213.028C378.439 229.44 408.047 259.36 408.047 293.548C408.047 345.389 339.972 387.415 255.998 387.415C172.024 387.415 103.95 345.389 103.95 293.548C103.95 259.533 133.257 229.744 177.134 213.279L163.099 137.354Z", fill: "#D1884F" }),
        React__default.createElement("path", { d: "M213.762 286.722C213.762 300.86 206.199 312.322 196.868 312.322C187.538 312.322 179.974 300.86 179.974 286.722C179.974 272.583 187.538 261.122 196.868 261.122C206.199 261.122 213.762 272.583 213.762 286.722Z", fill: "#633001" }),
        React__default.createElement("path", { d: "M330.333 286.722C330.333 300.86 322.769 312.322 313.439 312.322C304.108 312.322 296.544 300.86 296.544 286.722C296.544 272.583 304.108 261.122 313.439 261.122C322.769 261.122 330.333 272.583 330.333 286.722Z", fill: "#633001" }),
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "paint0_linear_logoround", x1: "256", y1: "0", x2: "256", y2: "512", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { stopColor: "#54DADE" }),
                React__default.createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$1n = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 40 40" }, props),
        React__default.createElement("path", { d: "M0 10C0 4.47715 4.47715 0 10 0H30C35.5228 0 40 4.47715 40 10V30C40 35.5228 35.5228 40 30 40H10C4.47715 40 0 35.5228 0 30V10Z", fill: "white" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30 0.416667H10C4.70727 0.416667 0.416667 4.70727 0.416667 10V30C0.416667 35.2927 4.70727 39.5833 10 39.5833H30C35.2927 39.5833 39.5833 35.2927 39.5833 30V10C39.5833 4.70727 35.2927 0.416667 30 0.416667ZM10 0C4.47715 0 0 4.47715 0 10V30C0 35.5228 4.47715 40 10 40H30C35.5228 40 40 35.5228 40 30V10C40 4.47715 35.5228 0 30 0H10Z", fill: "#E7E3EB" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M27.6906 18.2129C27.0383 17.5606 27.0383 16.503 27.6906 15.8508C28.3429 15.1985 29.4004 15.1985 30.0527 15.8508C30.705 16.503 30.705 17.5606 30.0527 18.2129C29.4004 18.8651 28.3429 18.8651 27.6906 18.2129ZM22.0806 23.8229C21.5914 23.3337 21.5914 22.5405 22.0806 22.0513C22.5698 21.5621 23.363 21.5621 23.8522 22.0513C24.3414 22.5405 24.3414 23.3337 23.8522 23.8229C23.363 24.3121 22.5698 24.3121 22.0806 23.8229ZM30.9385 20.8702C30.4493 20.381 30.4493 19.5879 30.9385 19.0987C31.4277 18.6094 32.2208 18.6094 32.7101 19.0987C33.1993 19.5879 33.1993 20.381 32.7101 20.8702C32.2208 21.3594 31.4277 21.3594 30.9385 20.8702ZM27.9859 23.8229C27.4966 23.3337 27.4966 22.5405 27.9859 22.0513C28.4751 21.5621 29.2682 21.5621 29.7574 22.0513C30.2466 22.5405 30.2466 23.3337 29.7574 23.8229C29.2682 24.3121 28.4751 24.3121 27.9859 23.8229ZM34.1864 23.5276C33.8602 23.2015 33.8602 22.6727 34.1864 22.3465C34.5125 22.0204 35.0413 22.0204 35.3674 22.3465C35.6936 22.6727 35.6936 23.2015 35.3674 23.5276C35.0413 23.8537 34.5125 23.8537 34.1864 23.5276ZM31.2337 26.4802C30.9076 26.1541 30.9076 25.6253 31.2337 25.2992C31.5599 24.973 32.0887 24.973 32.4148 25.2992C32.7409 25.6253 32.7409 26.1541 32.4148 26.4802C32.0887 26.8064 31.5599 26.8064 31.2337 26.4802ZM24.738 21.1655C24.0857 20.5132 24.0857 19.4557 24.738 18.8034C25.3902 18.1511 26.4478 18.1511 27.1001 18.8034C27.7523 19.4557 27.7523 20.5132 27.1001 21.1655C26.4478 21.8178 25.3902 21.8178 24.738 21.1655ZM24.738 15.2602C24.0857 14.608 24.0857 13.5504 24.738 12.8981C25.3902 12.2459 26.4478 12.2459 27.1001 12.8981C27.7523 13.5504 27.7523 14.608 27.1001 15.2602C26.4478 15.9125 25.3902 15.9125 24.738 15.2602ZM21.7853 18.2129C21.1331 17.5606 21.1331 16.503 21.7853 15.8508C22.4376 15.1985 23.4952 15.1985 24.1474 15.8508C24.7997 16.503 24.7997 17.5606 24.1474 18.2129C23.4952 18.8651 22.4376 18.8651 21.7853 18.2129ZM15.8526 18.2129C15.2004 17.5606 15.2004 16.503 15.8526 15.8508C16.5049 15.1985 17.5625 15.1985 18.2147 15.8508C18.867 16.503 18.867 17.5606 18.2147 18.2129C17.5625 18.8651 16.5049 18.8651 15.8526 18.2129ZM10.2427 23.8229C9.75345 23.3337 9.75345 22.5405 10.2427 22.0513C10.7319 21.5621 11.525 21.5621 12.0142 22.0513C12.5034 22.5405 12.5034 23.3337 12.0142 23.8229C11.525 24.3121 10.7319 24.3121 10.2427 23.8229ZM19.1005 20.8702C18.6113 20.381 18.6113 19.5879 19.1005 19.0987C19.5897 18.6094 20.3829 18.6094 20.8721 19.0987C21.3613 19.5879 21.3613 20.381 20.8721 20.8702C20.3829 21.3594 19.5897 21.3594 19.1005 20.8702ZM16.1479 23.8229C15.6587 23.3337 15.6587 22.5405 16.1479 22.0513C16.6371 21.5621 17.4303 21.5621 17.9195 22.0513C18.4087 22.5405 18.4087 23.3337 17.9195 23.8229C17.4303 24.3121 16.6371 24.3121 16.1479 23.8229ZM4.63267 23.5276C4.30653 23.2015 4.30653 22.6727 4.63267 22.3465C4.9588 22.0204 5.48758 22.0204 5.81372 22.3465C6.13985 22.6727 6.13985 23.2015 5.81372 23.5276C5.48758 23.8537 4.9588 23.8537 4.63267 23.5276ZM7.58529 26.4802C7.25915 26.1541 7.25915 25.6253 7.58529 25.2992C7.91143 24.973 8.4402 24.973 8.76634 25.2992C9.09248 25.6253 9.09248 26.1541 8.76634 26.4802C8.4402 26.8064 7.91143 26.8064 7.58529 26.4802ZM19.3958 26.4802C19.0697 26.1541 19.0697 25.6253 19.3958 25.2992C19.7219 24.973 20.2507 24.973 20.5768 25.2992C20.903 25.6253 20.903 26.1541 20.5768 26.4802C20.2507 26.8064 19.7219 26.8064 19.3958 26.4802ZM7.29003 20.8702C6.80082 20.381 6.80082 19.5879 7.29003 19.0987C7.77924 18.6094 8.5724 18.6094 9.0616 19.0987C9.55081 19.5879 9.55081 20.381 9.0616 20.8702C8.5724 21.3594 7.77924 21.3594 7.29003 20.8702ZM12.9 21.1655C12.2477 20.5132 12.2477 19.4557 12.9 18.8034C13.5523 18.1511 14.6098 18.1511 15.2621 18.8034C15.9144 19.4557 15.9144 20.5132 15.2621 21.1655C14.6098 21.8178 13.5523 21.8178 12.9 21.1655ZM12.9 15.2602C12.2477 14.608 12.2477 13.5504 12.9 12.8981C13.5523 12.2459 14.6098 12.2459 15.2621 12.8981C15.9144 13.5504 15.9144 14.608 15.2621 15.2602C14.6098 15.9125 13.5523 15.9125 12.9 15.2602ZM9.94739 18.2129C9.29512 17.5606 9.29512 16.503 9.94739 15.8508C10.5997 15.1985 11.6572 15.1985 12.3095 15.8508C12.9618 16.503 12.9618 17.5606 12.3095 18.2129C11.6572 18.8651 10.5997 18.8651 9.94739 18.2129Z", fill: "#1D222A" })));
};

var Icon$1m = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M16.3 8.09014C15.91 8.48014 15.91 9.10014 16.3 9.49014L18.2 11.3901H9C8.45 11.3901 8 11.8401 8 12.3901C8 12.9401 8.45 13.3901 9 13.3901H18.2L16.3 15.2901C15.91 15.6801 15.91 16.3001 16.3 16.6901C16.69 17.0801 17.31 17.0801 17.7 16.6901L21.29 13.1001C21.68 12.7101 21.68 12.0801 21.29 11.6901L17.7 8.09014C17.31 7.70014 16.69 7.70014 16.3 8.09014ZM4 19.3901H11C11.55 19.3901 12 19.8401 12 20.3901C12 20.9401 11.55 21.3901 11 21.3901H4C2.9 21.3901 2 20.4901 2 19.3901V5.39014C2 4.29014 2.9 3.39014 4 3.39014H11C11.55 3.39014 12 3.84014 12 4.39014C12 4.94014 11.55 5.39014 11 5.39014H4V19.3901Z" })));
};

var Icon$1l = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default.createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
            React__default.createElement("g", { transform: "translate(-1230.000000, -1406.000000)" },
                React__default.createElement("g", { transform: "translate(1230.000000, 1406.000000)" },
                    React__default.createElement("path", { d: "M22.0949818,0 L25.9394146,0 C25.9708248,0.0270025189 26.000023,0.0725969361 26.03453,0.0774662427 C26.5985866,0.157588471 27.1639704,0.22841475 27.7275846,0.310307635 C28.1527284,0.371837965 28.5756603,0.445762894 28.9999193,0.514375852 C29.0140761,0.517031837 29.0277904,0.524114465 29.0441591,0.527655779 L30.0152212,0.781745055 C30.4894712,0.906133708 30.9685875,1.01502911 31.4366438,1.16066565 C31.813124,1.27752901 32.1758898,1.43954412 32.5452916,1.58031135 C32.8655872,1.70292935 33.1889797,1.81669406 33.5052938,1.94772267 C33.6689808,2.0154503 33.8189535,2.11504976 33.9782165,2.19340133 C34.1259772,2.2655556 34.2777195,2.32974192 34.4281346,2.39614155 C34.6196927,2.48024776 34.8174443,2.55240203 35.0032511,2.65023083 C35.2173715,2.76355288 35.4173351,2.90432011 35.6292434,3.02295412 C35.78364,3.10883099 35.9544054,3.16593467 36.1052629,3.25668084 C36.414941,3.4417145 36.7148864,3.64002808 37.0188134,3.83214436 C37.3076989,4.01540736 37.6049899,4.18627576 37.8828154,4.38547467 C38.2106318,4.61964405 38.5211947,4.87771731 38.8397208,5.12428129 C39.0166798,5.25708056 39.1971779,5.3841252 39.3644041,5.52754842 C39.638248,5.7630458 39.9014744,6.01138044 40.1713368,6.25174712 C40.3717428,6.42881282 40.5902871,6.5899426 40.7752092,6.78294421 C41.1618644,7.18753933 41.5449805,7.59788909 41.9055343,8.02594541 C42.4023465,8.61645951 42.88279,9.22113887 43.3588096,9.82891688 C43.6180544,10.1600297 43.8649121,10.5022092 44.0954011,10.8532419 C44.2971343,11.1600083 44.4674573,11.4871371 44.6528218,11.8040847 C44.785541,12.0329422 44.9310897,12.2560449 45.054961,12.4897717 C45.2478462,12.8527563 45.4329157,13.219725 45.6101696,13.5906776 C45.7344833,13.8531775 45.8313683,14.1285147 45.9539123,14.3923426 C46.0339863,14.5663096 46.1560879,14.7216848 46.2246595,14.8991931 C46.3622451,15.2555378 46.4719596,15.6229492 46.6011396,15.9832779 C46.7338588,16.3551158 46.8917947,16.7194285 47.0103572,17.0961358 C47.13821,17.5011736 47.2386342,17.9150646 47.3412704,18.3276277 C47.4496577,18.76498 47.5708746,19.2014469 47.6421006,19.6449965 C47.73058,20.1934575 47.7646446,20.7516571 47.8394098,21.3005608 C47.868608,21.5156956 47.9451427,21.7237478 48,21.9353413 L48,25.9596019 C47.9447003,26.2159045 47.8721472,26.4695511 47.8367554,26.7285097 C47.7611054,27.2782987 47.7040362,27.830301 47.640331,28.381418 C47.6357915,28.4105968 47.6292882,28.4394355 47.6208655,28.4677375 C47.5407916,28.7776025 47.4514273,29.0848115 47.3815285,29.3973325 C47.3072058,29.7293306 47.2510213,30.0653128 47.1851041,30.3995243 C47.1746031,30.4268523 47.1623376,30.4534683 47.1483851,30.4792039 C47.0625601,30.7244399 46.9714262,30.9683479 46.8940067,31.2153545 C46.8218959,31.4415559 46.7661538,31.673512 46.6940431,31.8997134 C46.6396282,32.0705818 46.5741534,32.2383516 46.5086786,32.4056787 C46.4201991,32.6270108 46.3290653,32.8483429 46.2383738,33.0661337 C46.1220233,33.3481108 46.0140784,33.6340719 45.884456,33.9111798 C45.7517368,34.2028955 45.5995521,34.4866433 45.4504642,34.7721617 C45.2584637,35.1391304 45.0660209,35.506099 44.8642877,35.8673131 C44.6908679,36.177178 44.5037339,36.4799604 44.3227934,36.786284 C44.1989221,36.9965495 44.0914196,37.2183243 43.94941,37.4153099 C43.6008009,37.8978139 43.2353807,38.3679234 42.8796933,38.8455581 C42.7518404,39.0173118 42.6478771,39.2089854 42.5067523,39.3683446 C42.264761,39.6414684 41.9993226,39.893787 41.7489257,40.1598282 C41.3742151,40.5582261 41.0176429,40.9734451 40.6278908,41.3550217 C40.2841481,41.6914465 39.8802393,41.967669 39.5502109,42.3156031 C39.200717,42.6838998 38.7839788,42.9543676 38.3853788,43.2540513 C38.1283459,43.4474956 37.873525,43.6449238 37.6076442,43.8259735 C37.2566757,44.0653073 36.9002509,44.2965256 36.5383699,44.5196284 C36.3171712,44.654641 36.0827006,44.7604377 35.861502,44.8914663 C35.6403033,45.022495 35.4394549,45.1809688 35.2147171,45.2996028 C34.8913246,45.4709138 34.555545,45.6187637 34.2228623,45.7723682 C34.0812951,45.8374398 33.9339768,45.8905595 33.7901977,45.9494339 C33.5058836,46.0674777 33.2217171,46.1855215 32.937698,46.3035653 C32.7164993,46.3969674 32.4983974,46.5036495 32.2714476,46.5824438 C32.0502489,46.658582 31.8228567,46.7024058 31.6003309,46.7679201 C31.4233719,46.8205971 31.246413,46.8852261 31.0694541,46.9449858 C30.7699511,47.0432572 30.4735449,47.1521526 30.1696179,47.2340455 C29.8656909,47.3159384 29.5449529,47.3712714 29.2330627,47.4420977 C28.8561402,47.5279746 28.4836416,47.639526 28.1031799,47.6997283 C27.7660732,47.7537333 27.4267544,47.7391254 27.0856661,47.8325276 C26.6598399,47.9460059 26.2208146,48.0022756 25.7801515,47.9999296 C24.4945449,47.9999296 23.2090857,47.9777214 21.923774,47.933455 C21.4813767,47.9175191 21.0456153,47.7825065 20.603218,47.7439947 C20.1608206,47.7054829 19.7184233,47.6842351 19.2813347,47.5602891 C18.9464399,47.4646736 18.5907525,47.444311 18.2540881,47.3548929 C17.7811654,47.2296189 17.3179754,47.0693744 16.8494766,46.9272792 C16.455743,46.8082025 16.0597973,46.6957658 15.6665061,46.5731478 C15.4941278,46.5251642 15.3254319,46.4648054 15.1617308,46.3925408 C14.7746331,46.2097205 14.3946138,46.0118495 14.0114977,45.8228319 C13.8730273,45.7551043 13.7305754,45.6953446 13.5894506,45.6333716 C13.3978926,45.5497081 13.1988138,45.4806524 13.0143341,45.382381 C12.6776697,45.2022166 12.3507381,45.0061164 12.0189401,44.8153281 C11.7163403,44.641361 11.4093166,44.4744766 11.11468,44.2876723 C10.8200433,44.100868 10.5395634,43.8985704 10.2577563,43.6949449 C9.7795248,43.3492241 9.29288773,43.0141273 8.83500649,42.6431746 C8.45985356,42.3390643 8.13292193,41.9760796 7.76396255,41.664444 C7.29325179,41.2660462 6.8260802,40.8703043 6.43677055,40.388243 C6.23105579,40.1341537 5.97490773,39.9212322 5.76034503,39.6733402 C5.56170863,39.4449255 5.38873127,39.1939349 5.20336679,38.9540108 C4.96004825,38.6392766 4.70168821,38.3342809 4.47473838,38.0080373 C4.17567778,37.5768824 3.89962184,37.1302341 3.61604515,36.6880126 C3.42094793,36.3830169 3.21788755,36.0811199 3.04092862,35.7655003 C2.85600654,35.4352728 2.69143473,35.0930933 2.5295173,34.7504712 C2.36759988,34.407849 2.21320321,34.0457497 2.05349777,33.6938316 C1.99200454,33.5579337 1.92077857,33.4260197 1.86017014,33.2901218 C1.76328512,33.0745443 1.66418812,32.8602948 1.57880544,32.6402907 C1.49784672,32.4317959 1.43856548,32.215333 1.36070355,32.0055102 C1.28284162,31.7956873 1.18374462,31.5987017 1.11428824,31.3884362 C1.03067514,31.129035 0.971393897,30.8616658 0.901052721,30.5982806 C0.764794342,30.086118 0.607743289,29.5801528 0.497586353,29.0613503 C0.399374145,28.5992088 0.352922425,28.1260008 0.283023646,27.657662 C0.273290905,27.5921477 0.257806998,27.5279614 0.24763186,27.462447 C0.167115545,26.9591378 0.0308571665,26.4571566 0.0180276438,25.951634 C-0.0147097588,24.6555131 0.00696771052,23.3576215 0.00785250518,22.0606153 C0.00725227558,21.9865631 0.0122806081,21.9125724 0.0228940145,21.8392832 C0.111373481,21.2394731 0.207373702,20.6405484 0.296295566,20.0402957 C0.32062742,19.8738539 0.311337076,19.7003295 0.350710438,19.5378717 C0.428129972,19.2156122 0.539171702,18.9013206 0.616148838,18.579061 C0.693125974,18.2568014 0.721439404,17.9292299 0.814785241,17.6162663 C0.937329302,17.2068018 1.10676748,16.81106 1.24833463,16.4069075 C1.36026115,16.0868613 1.45095261,15.7588471 1.56951509,15.4410142 C1.73497169,14.9983499 1.90662186,14.5587843 2.09641031,14.1271867 C2.28619877,13.6955891 2.49456791,13.2706314 2.70868822,12.851871 C2.8790112,12.5220861 3.07366602,12.2051385 3.26212729,11.8850923 C3.45058855,11.565046 3.63285625,11.2520824 3.83281985,10.9448734 C4.05401851,10.6062353 4.28539232,10.2742371 4.52295969,9.94666557 C4.76760541,9.60979808 5.02198388,9.27957055 5.27768954,8.95022835 C5.44358854,8.73642152 5.61125713,8.52261469 5.79264003,8.32208779 C6.02932261,8.06047322 6.28281628,7.8143519 6.52480762,7.55716398 C6.73715834,7.33140521 6.93004358,7.08572656 7.15478142,6.87413305 C7.57815567,6.47573523 8.01480184,6.09061734 8.45365999,5.70859809 C8.80757786,5.39873312 9.1654773,5.09240947 9.53709106,4.80467771 C9.85782913,4.5559004 10.1967055,4.33014164 10.5338123,4.10438287 C10.8487992,3.89323203 11.1717492,3.69359045 11.4933721,3.49262089 C11.7105892,3.35672296 11.930903,3.22702234 12.1521017,3.09422307 C12.3733004,2.96142379 12.6015774,2.81711525 12.8378176,2.70246521 C13.1103343,2.56966594 13.398335,2.47006648 13.6752757,2.34567783 C13.9991106,2.20048396 14.3176366,2.04422348 14.6383747,1.89327497 C14.7741907,1.82997399 14.9086795,1.7604757 15.0471498,1.70647066 C15.292238,1.60731387 15.5395381,1.51258372 15.7872806,1.42050956 C16.0350231,1.3284354 16.2703785,1.24344386 16.513697,1.16110831 C16.7450708,1.08187141 16.974675,0.995551885 17.2109152,0.935349548 C17.4989159,0.861424619 17.7948797,0.818928852 18.0842075,0.748545237 C18.6482641,0.611319321 19.2034728,0.425843003 19.7741654,0.332440847 C20.2112539,0.26072924 20.6616144,0.279763802 21.0969334,0.15537515 C21.2769891,0.103583433 21.4791647,0.135455259 21.6680683,0.108010076 C21.8118475,0.0956154768 21.9520874,0.0402824462 22.0949818,0 Z M44.453743,23.992402 L44.4608213,23.992402 C44.4608213,23.395248 44.4608213,22.7972086 44.4608213,22.2013825 C44.4616687,22.0542703 44.4511674,21.907312 44.4294111,21.7618169 C44.3409317,21.2222092 44.2475858,20.6834868 44.1515856,20.1452071 C44.1250418,19.9947012 44.0865532,19.8464087 44.0498342,19.6976735 C43.9830322,19.4245497 43.9118062,19.1518685 43.845889,18.878302 C43.7728935,18.576405 43.7220178,18.267868 43.6282296,17.9730536 C43.5083399,17.5959037 43.3539432,17.2298204 43.2168,16.8579824 C43.08762,16.5082777 42.9641912,16.1563596 42.8323568,15.8070975 C42.7770571,15.6596903 42.7102551,15.5158244 42.6425683,15.3732865 C42.5571856,15.1962208 42.4633974,15.0191551 42.3771299,14.8420894 C42.2585674,14.5981814 42.1528344,14.3471908 42.023212,14.1094801 C41.8878384,13.8602602 41.7312298,13.6225495 41.5830267,13.3808548 C41.4060677,13.0953363 41.2468047,12.8009646 41.0521499,12.5287261 C40.8234305,12.2073519 40.5619736,11.9089962 40.3230791,11.5938192 C40.1297514,11.338402 39.9691612,11.0533262 39.7581377,10.8165008 C39.3157404,10.3269142 38.8644951,9.84750878 38.3928995,9.38846596 C37.9544838,8.96129496 37.4895242,8.56112648 37.0285461,8.15830202 C36.7927484,7.95202048 36.5419091,7.7599042 36.2941666,7.57044391 C36.0004147,7.34379981 35.7102021,7.11051576 35.4018511,6.90644754 C35.0612052,6.67936078 34.7033058,6.47662056 34.3489455,6.27033902 C33.9742349,6.05299088 33.6017364,5.82767478 33.2150811,5.63555849 C32.9390252,5.49700459 32.6399646,5.40315977 32.3528487,5.28718173 C32.1918161,5.22255275 32.0318157,5.15497268 31.8728476,5.08444151 C31.6675753,4.99590866 31.4662845,4.89321056 31.2592425,4.80777636 C31.0522006,4.72234216 30.8279051,4.64531858 30.6124576,4.56519635 C30.410282,4.48994343 30.2143,4.39609861 30.0054885,4.34386423 C29.6763449,4.26108602 29.3343717,4.22744353 29.0087673,4.13448404 C28.5389413,4.00168477 28.0766361,3.84498163 27.5820359,3.8317017 C27.5530837,3.82738187 27.5245292,3.82072007 27.4966532,3.81178181 C26.9958594,3.71970764 26.4986048,3.58115374 25.9925023,3.54618326 C25.2293669,3.49439154 24.4613651,3.50191684 23.6955753,3.5085568 C22.8461724,3.51563943 21.9945576,3.50103151 21.1535602,3.67278523 C20.7177989,3.76131808 20.2740743,3.81266714 19.833889,3.88128009 C19.8268106,3.88128009 19.8201747,3.88659206 19.8130963,3.88836272 L18.6022548,4.17343849 C18.5522639,4.18539043 18.5031578,4.20044101 18.4540517,4.21770492 C18.1753414,4.30933642 17.8970735,4.40406657 17.6174784,4.49304208 C17.4108788,4.55899905 17.2007401,4.61344675 16.9950253,4.68073172 C16.8295189,4.73181632 16.667045,4.79226351 16.5083882,4.86178139 C16.3358533,4.94013297 16.1761478,5.04548706 16.0040553,5.12737994 C15.6709301,5.28186976 15.3324961,5.42529298 14.9971589,5.57535616 C14.8551494,5.63909981 14.7153518,5.70815543 14.5751119,5.77544039 C14.4220424,5.84892266 14.2654338,5.91576496 14.1181154,6.00031383 C13.7872022,6.19021679 13.462925,6.39074369 13.1342238,6.58418797 C12.9223155,6.70857662 12.6975776,6.81393071 12.4962868,6.95381261 C12.241466,7.13087831 12.0056682,7.33494653 11.7605801,7.52662015 C11.5154919,7.71829376 11.2518231,7.90775406 11.0085046,8.11447826 C10.6218493,8.44603378 10.2458116,8.79042656 9.86756187,9.13260602 C9.6131834,9.3619061 9.35261137,9.58589421 9.1154864,9.83024487 C8.86907109,10.0812355 8.63637009,10.3472767 8.41207464,10.6186299 C8.14663624,10.9386761 7.89358497,11.2680183 7.64318808,11.5995739 C7.46888353,11.8306446 7.30342693,12.068798 7.1415095,12.3078366 C6.88491905,12.6885279 6.63009819,13.0701045 6.38368287,13.4587637 C6.25627244,13.6588479 6.15098187,13.8726548 6.03241939,14.0784936 C5.88996745,14.3272709 5.72849242,14.5654243 5.60462117,14.8234975 C5.47190197,15.1001627 5.3834225,15.3989611 5.25778166,15.6782822 C5.12240807,15.9881472 4.94810352,16.2794202 4.82821385,16.5923839 C4.64683094,17.0586569 4.48270153,17.5308321 4.33582562,18.0089094 C4.21195436,18.4104059 4.11462695,18.8207557 4.02172351,19.2315481 C3.93899521,19.6055994 3.88104116,19.9840773 3.81202717,20.3625552 C3.8080456,20.3842458 3.80229443,20.4068217 3.79875525,20.4276269 C3.7076214,20.9530693 3.57180542,21.4754131 3.53597124,22.0043969 C3.48244116,22.7972086 3.49880986,23.5948895 3.48553794,24.3903572 C3.47005403,25.34784 3.58109577,26.2964694 3.68151996,27.2455416 C3.69132418,27.303397 3.70462043,27.3606054 3.72133572,27.4168526 C3.81423916,27.8187918 3.90979698,28.2202882 3.99827645,28.6231127 C4.06375126,28.9219111 4.11595414,29.2233654 4.18319854,29.5217211 C4.21991751,29.6850642 4.271678,29.8444233 4.32299609,30.0046678 C4.38006535,30.1897015 4.43492262,30.3756204 4.50260941,30.5571128 C4.59507045,30.8050048 4.69903383,31.0484701 4.79724603,31.2945914 C4.9197901,31.6009151 5.03260142,31.9112227 5.16576301,32.2131197 C5.29317344,32.5021795 5.44270374,32.7819433 5.57896212,33.067019 C5.70548776,33.3326176 5.81122072,33.6092827 5.95588465,33.8638147 C6.13815235,34.1851889 6.35138787,34.4888566 6.54958187,34.8009349 C6.78493725,35.1710022 7.00392393,35.5534641 7.2574176,35.9098088 C7.53524313,36.3020093 7.83253414,36.6818153 8.14221227,37.0505546 C8.53771549,37.52332 8.94427863,37.9881174 9.36367131,38.4405203 C9.6468056,38.7459586 9.95073257,39.0332477 10.2612955,39.3112409 C10.6447065,39.653863 11.0377028,39.9860087 11.4402844,40.3076781 C11.7216491,40.5329942 12.0215945,40.7352917 12.3175583,40.9411306 C12.56884,41.115983 12.8223337,41.2872941 13.0815785,41.4488665 C13.2987956,41.5843218 13.5239758,41.7038411 13.7482713,41.8295578 C14.0995348,42.026986 14.4459319,42.2345955 14.8051585,42.4174159 C15.1170486,42.5758897 15.4439803,42.704705 15.7638335,42.8476855 C15.9208846,42.9180691 16.0735117,43.0017327 16.2336595,43.0610497 C16.4345079,43.134532 16.642877,43.1863237 16.8463798,43.253166 C17.0317443,43.313811 17.2153392,43.3810959 17.3984917,43.4479382 C17.6196903,43.5285031 17.8333682,43.6285452 18.0585485,43.6905182 C18.3651298,43.7746245 18.6840983,43.8135789 18.9875829,43.9029971 C19.4428097,44.0357964 19.891843,44.1889582 20.3727289,44.1978115 C20.4241717,44.2010764 20.4752369,44.2087778 20.525356,44.22083 C21.0093387,44.3133468 21.4902246,44.4545567 21.9781889,44.4864286 C22.7338035,44.5386629 23.4947269,44.5329083 24.2534383,44.5244977 C25.1090348,44.5152017 25.9672856,44.5324656 26.8149189,44.3584986 C27.2506803,44.2699657 27.695732,44.222158 28.1359173,44.154873 C28.164143,44.1462868 28.191904,44.1362395 28.219088,44.1247719 C28.5190334,44.0411083 28.818094,43.9521328 29.1206938,43.8773226 C29.4144456,43.8047256 29.712179,43.7476219 30.0085853,43.682993 C30.0221324,43.6782563 30.0352956,43.6724846 30.0479586,43.665729 C30.2691573,43.5745402 30.490356,43.4753834 30.7190754,43.3957039 C30.940274,43.3191229 31.1658967,43.2686592 31.3862106,43.1960623 C31.5351671,43.144668 31.6813552,43.0855665 31.8241839,43.0189966 C32.0272443,42.9304637 32.2267655,42.8317496 32.4289411,42.7387901 C32.6089968,42.6560119 32.7912645,42.5763323 32.9713202,42.4922261 C33.1442976,42.4116612 33.3172749,42.3306537 33.4875979,42.2434488 C33.7216261,42.1239295 33.9565391,42.0057381 34.1839313,41.8742668 C34.40513,41.7463369 34.6157111,41.601143 34.8333706,41.4670157 C35.0390853,41.3399711 35.2576296,41.2315184 35.4527268,41.0894231 C35.7668289,40.8592377 36.0623504,40.6024925 36.3729133,40.3669951 C36.6702043,40.141679 36.9922696,39.9442507 37.2754038,39.7029987 C37.5687133,39.4564347 37.8345941,39.1775563 38.1066684,38.9062031 C38.4756278,38.5396771 38.847684,38.1749218 39.2020442,37.7942305 C39.4312061,37.5481092 39.6294001,37.2736574 39.8444052,37.0142561 C40.0987836,36.7070471 40.375282,36.4162167 40.6075406,36.0926292 C40.9127947,35.6650155 41.193717,35.2192526 41.4644642,34.7686204 C41.7352114,34.3179882 41.9820691,33.8536334 42.2355627,33.3932626 C42.3041343,33.2684313 42.3585492,33.1360747 42.421812,33.007702 C42.5178122,32.8129298 42.6235452,32.6225841 42.7111399,32.4238279 C42.8363383,32.1396375 42.9473801,31.8483644 43.0650577,31.5632886 C43.1535372,31.3463831 43.2566158,31.1339043 43.3340353,30.9130148 C43.4114549,30.6921254 43.4556946,30.4517587 43.5366533,30.2286559 C43.6693725,29.8612446 43.8361563,29.5048999 43.8494282,29.1047314 C43.8512851,29.0748018 43.8561766,29.0451385 43.8640273,29.0161985 C43.9609123,28.6085048 44.0600094,28.2012537 44.1551248,27.7931172 C44.1714935,27.7218483 44.1679543,27.6461527 44.1807838,27.5717851 C44.2692633,27.0693612 44.4072913,26.5704786 44.4400287,26.0667267 C44.4873652,25.3801544 44.453743,24.6851716 44.453743,23.995058 L44.453743,23.992402 Z", fill: "#FAB126", fillRule: "nonzero" }),
                    React__default.createElement("path", { d: "M25.743875,11.9001429 C25.743875,12.4676384 25.743875,13.035134 25.743875,13.6026296 C25.743875,13.8766387 25.7752852,13.9076252 26.0447052,13.9222331 C26.3993346,13.944423 26.7448162,14.0439902 27.0569102,14.2139489 C27.2197125,14.2993831 27.4108281,14.3299269 27.5807087,14.4038518 C27.8509983,14.5146757 28.1149263,14.6404386 28.3712727,14.7805591 C28.8610778,15.0584167 29.3049046,15.4105267 29.6869624,15.8243614 C29.9824838,16.145293 30.2063369,16.5073923 30.4222268,16.8867556 C30.656255,17.2993187 30.7376561,17.7441962 30.8327715,18.1819912 C30.9654907,18.7844572 30.9163846,19.3984325 30.5266325,19.9141364 C30.3877198,20.0987273 30.1572308,20.2142627 29.9661151,20.3568006 C29.7046583,20.5551142 29.4016161,20.6613536 29.0813204,20.6254978 C28.7220938,20.585658 28.3580008,20.5157171 28.0907928,20.2271 C27.9138339,20.0354264 27.697944,19.86323 27.5745151,19.6405699 C27.4528618,19.4175332 27.3862728,19.1686223 27.3803027,18.9146005 C27.3754363,18.4692803 27.161316,18.1678259 26.8255364,17.9349845 C26.4996695,17.7025817 26.1367722,17.5271604 25.7522805,17.416182 C25.4868421,17.3418144 25.2214037,17.3338465 24.9648133,17.2692175 C24.336609,17.1111864 23.7008841,17.2028179 23.0709103,17.1806846 C22.5493238,17.1625354 22.0211014,17.2400017 21.5008421,17.3112706 C20.9553662,17.3856382 20.6571904,17.7512789 20.6386097,18.3063798 C20.6315314,18.5277119 20.6302042,18.7490441 20.6324162,18.9703762 C20.6381673,19.557349 20.9367855,19.9911599 21.3601598,20.3612272 C21.561893,20.5382929 21.7468151,20.7357212 21.9596082,20.8972936 C22.1454151,21.0380609 22.3577658,21.1465136 22.5621533,21.259393 C23.0747444,21.5409289 23.5892525,21.8192157 24.1056776,22.0942578 C24.5206463,22.3155899 24.9418086,22.5218714 25.3567773,22.7414329 C25.8527047,23.0034901 26.3517289,23.2602354 26.8370388,23.5408845 C27.2679338,23.7901045 27.7028104,24.0419804 28.0983136,24.3421068 C28.5584936,24.6847736 28.9916945,25.0622957 29.3940954,25.4713433 C29.789787,25.8818332 30.1145109,26.3553006 30.3549824,26.8723756 C30.5438331,27.2926829 30.6852422,27.7327557 30.776587,28.1844324 C30.9137302,28.817885 30.8969191,29.4429269 30.8327715,30.0679688 C30.7870176,30.5229012 30.6863007,30.9706036 30.5328261,31.4012735 C30.4045309,31.7554049 30.1554612,32.0630565 29.9731935,32.398596 C29.7325293,32.8412603 29.3538372,33.1511253 28.9441773,33.4109692 C28.6937804,33.570771 28.451789,33.7704125 28.126627,33.8071537 C27.9394929,33.8279589 27.764746,33.9430516 27.5771695,33.9793501 C27.0462927,34.0820482 26.5154159,34.1825329 25.9845391,34.2489326 C25.7889995,34.2728364 25.7407782,34.3281695 25.741663,34.5145311 C25.7487413,35.5534641 25.7447598,36.5928398 25.7452022,37.6317727 C25.7452022,38.1669538 25.5788608,38.6344072 25.174952,38.9978346 C24.8601897,39.2902885 24.4535175,39.464011 24.0247189,39.4891919 C23.7867092,39.5007012 23.5380819,39.3732139 23.3005145,39.2930916 C23.0452161,39.2129551 22.8193763,39.0589155 22.6515176,38.8504274 C22.3958119,38.5286105 22.2374337,38.1682818 22.2338945,37.7583747 C22.225489,36.6897832 22.2307977,35.6207491 22.2303553,34.5521576 C22.2303553,34.2608845 22.1418759,34.165269 21.8609536,34.1187893 C21.525174,34.0638989 21.1814313,34.0302564 20.8580388,33.931985 C20.5116417,33.8257456 20.1816133,33.6619598 19.8507001,33.5096833 C19.6295014,33.4074278 19.4012244,33.3056151 19.2078968,33.1608639 C18.8734444,32.9112012 18.5407616,32.6509147 18.2509913,32.352559 C18.0054388,32.1030309 17.7980753,31.818573 17.6356166,31.5083982 C17.47016,31.1848107 17.3865469,30.81917 17.271966,30.4703506 C17.2277263,30.3331247 17.1901225,30.1923574 17.1578275,30.0515902 C17.1315615,29.9453313 17.1152695,29.8368503 17.1091638,29.72756 C17.1012007,29.5062279 17.0985463,29.2848957 17.1091638,29.0635636 C17.1321685,28.4991667 17.4082244,28.0485345 17.8461978,27.7355709 C18.1558759,27.5142388 18.5354528,27.3469117 18.9389192,27.401802 C19.2782379,27.4460685 19.6272894,27.5124681 19.8790135,27.7931172 C20.0559725,27.9883322 20.2360282,28.1777925 20.4134295,28.3707941 C20.433304,28.3917183 20.446941,28.4177823 20.4528029,28.446047 C20.4970426,28.7674212 20.6616144,29.0582516 20.6487849,29.3991031 C20.633301,29.7997143 20.9226288,30.0272437 21.2048783,30.2658397 C21.5114597,30.5247983 21.8866126,30.6013792 22.2431849,30.6916827 C22.6714255,30.8001355 23.123998,30.8275806 23.5703769,30.8514845 C24.0508204,30.8767164 24.5352454,30.875831 25.0161314,30.8514845 C25.5130022,30.8308771 26.0084393,30.784037 26.5003744,30.7111599 C27.0383296,30.6274964 27.3466805,30.2313119 27.3581828,29.6819656 C27.3630492,29.4606334 27.3581828,29.2393013 27.363934,29.0179692 C27.37057,28.6275393 27.2082101,28.2959838 26.9569285,28.0233026 C26.6643493,27.6963006 26.3443628,27.3949291 26.0004654,27.1224809 C25.7111376,26.9011488 25.3647404,26.7515283 25.0448872,26.5682653 C24.8170526,26.435466 24.5958539,26.2960268 24.3644801,26.1698675 C24.0990417,26.0286576 23.8251977,25.9095809 23.5619713,25.767043 C23.2169014,25.5806813 22.8815642,25.3761705 22.5369367,25.1889235 C22.3759041,25.1003906 22.1989451,25.0441723 22.0361429,24.9596234 C21.7963636,24.8352348 21.5601234,24.7024355 21.3283072,24.5660949 C21.018629,24.3854879 20.7089509,24.2119635 20.4121023,24.0105513 C20.0081935,23.7369848 19.6007456,23.4643036 19.2291318,23.150012 C18.9004306,22.8720188 18.6071212,22.5488739 18.3213325,22.2248437 C18.1580879,22.0393674 18.0333318,21.8175926 17.9068062,21.6024578 C17.7581607,21.3492538 17.6192479,21.0889673 17.4905103,20.8251394 C17.4172764,20.6754141 17.360323,20.5182526 17.3206297,20.3563579 C17.2423254,20.0309997 17.1507492,19.7038708 17.1215509,19.372758 C17.0810707,18.9838225 17.0810707,18.5917319 17.1215509,18.2027964 C17.172869,17.7738547 17.2945283,17.352881 17.3976069,16.931022 C17.4459587,16.713626 17.5137718,16.5010269 17.6002249,16.2957988 C17.6944555,16.0842053 17.8276171,15.889433 17.9457372,15.6889061 C18.2164843,15.2285353 18.6093332,14.8797159 19.0495185,14.6034934 C19.3003578,14.4454623 19.5432339,14.2343114 19.8790135,14.2148342 C20.0497789,14.2046529 20.2116963,14.0820349 20.3846737,14.0510484 C20.935016,13.9470223 21.4866854,13.8483082 22.0414517,13.7739406 C22.2184106,13.7504794 22.2378761,13.6761118 22.2374337,13.5331313 C22.2338945,12.5017236 22.2223922,11.4694306 22.2427425,10.4380229 C22.2484936,10.1396672 22.2869822,9.81076765 22.4197014,9.55269439 C22.5816188,9.24282942 22.8081263,8.95819631 23.1381547,8.76696536 C23.6416028,8.47480696 24.1614197,8.49472685 24.6719462,8.66338192 C25.0086106,8.77449065 25.2590075,9.05381179 25.4496807,9.35836479 C25.6535928,9.6796389 25.7582382,10.0539719 25.7505109,10.4344816 C25.7381238,10.9271669 25.743875,11.4136549 25.743875,11.9001429 Z", fill: "#FAB126", fillRule: "nonzero" }))))));
};

var Icon$1k = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default.createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#F6AF5B" }),
        React__default.createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#F6AF5B" }),
        React__default.createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#AE5714" }),
        React__default.createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#AE5714" }),
        React__default.createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#E17A2F" }),
        React__default.createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#F6AF5B" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#F7D29B" }),
        React__default.createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#E7974D" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#E17A2F" }),
        React__default.createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#AE5714" }),
        React__default.createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#AE5714" })));
};

var Icon$1j = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default.createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#FFD800" }),
        React__default.createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#FFD800" }),
        React__default.createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#FFAF00" }),
        React__default.createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#FFAF00" }),
        React__default.createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#EB8C00" }),
        React__default.createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#FFD800" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#FEED8D" }),
        React__default.createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#FFC700" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#FFAF00" }),
        React__default.createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#EB8C00" }),
        React__default.createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#EB8C00" })));
};

var Icon$1i = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default.createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#9A6AFF" }),
        React__default.createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#9A6AFF" }),
        React__default.createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#A880FD" }),
        React__default.createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#A880FD" }),
        React__default.createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#7645D9" }),
        React__default.createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#9A6AFF" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#CAB3F8" }),
        React__default.createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#8F5BFD" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#7645D9" }),
        React__default.createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#452A7A" }),
        React__default.createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#452A7A" })));
};

var Icon$1h = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default.createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#C0C4C6" }),
        React__default.createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#C0C4C6" }),
        React__default.createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#7D7D7D" }),
        React__default.createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#7D7D7D" }),
        React__default.createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#969696" }),
        React__default.createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#C0C4C6" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#D8D8D8" }),
        React__default.createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#B2B2B2" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#969696" }),
        React__default.createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#7D7D7D" }),
        React__default.createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#7D7D7D" })));
};

var Icon$1g = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default.createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#53DEE9" }),
        React__default.createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#53DEE9" }),
        React__default.createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#1FC7D4" }),
        React__default.createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#1FC7D4" }),
        React__default.createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#0098A1" }),
        React__default.createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#53DEE9" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0022L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#84F0F9" }),
        React__default.createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#1FC7D4" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#0098A1" }),
        React__default.createElement("path", { d: "M9.95096 14.0798C9.03126 14.1218 8.69439 13.361 8.65076 12.4055C8.60713 11.4501 8.87326 10.6617 9.79296 10.6197C10.7127 10.5777 11.0495 11.3385 11.0932 12.294C11.1368 13.2495 10.8707 14.0378 9.95096 14.0798Z", fill: "#017178" }),
        React__default.createElement("path", { d: "M15.1199 14.0803C14.2002 14.1223 13.8633 13.3615 13.8197 12.406C13.7761 11.4505 14.0422 10.6622 14.9619 10.6202C15.8816 10.5782 16.2185 11.339 16.2621 12.2945C16.3057 13.25 16.0396 14.0383 15.1199 14.0803Z", fill: "#017178" })));
};

var Icon$1f = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 40 40" }, props),
        React__default.createElement("path", { d: "M36.0112 3.33337L22.1207 13.6277L24.7012 7.56091L36.0112 3.33337Z", fill: "#E17726" }),
        React__default.createElement("path", { d: "M4.00261 3.33337L17.7558 13.7238L15.2989 7.56091L4.00261 3.33337Z", fill: "#E27625" }),
        React__default.createElement("path", { d: "M31.0149 27.2023L27.3227 32.8573L35.2287 35.0397L37.4797 27.3258L31.0149 27.2023Z", fill: "#E27625" }),
        React__default.createElement("path", { d: "M2.53386 27.3258L4.77116 35.0397L12.6772 32.8573L8.9987 27.2023L2.53386 27.3258Z", fill: "#E27625" }),
        React__default.createElement("path", { d: "M12.2518 17.6496L10.0419 20.9712L17.8793 21.3281L17.6048 12.8867L12.2518 17.6496Z", fill: "#E27625" }),
        React__default.createElement("path", { d: "M27.762 17.6494L22.3129 12.7905L22.1207 21.3279L29.9581 20.9711L27.762 17.6494Z", fill: "#E27625" }),
        React__default.createElement("path", { d: "M12.6772 32.8574L17.3989 30.5652L13.336 27.3809L12.6772 32.8574Z", fill: "#E27625" }),
        React__default.createElement("path", { d: "M22.6009 30.5652L27.3226 32.8574L26.6637 27.3809L22.6009 30.5652Z", fill: "#E27625" }),
        React__default.createElement("path", { d: "M27.3226 32.8575L22.6009 30.5653L22.9715 33.6399L22.9303 34.9301L27.3226 32.8575Z", fill: "#D5BFB2" }),
        React__default.createElement("path", { d: "M12.6772 32.8575L17.0694 34.9301L17.042 33.6399L17.3989 30.5653L12.6772 32.8575Z", fill: "#D5BFB2" }),
        React__default.createElement("path", { d: "M17.1518 25.3495L13.2262 24.1965L15.9988 22.92L17.1518 25.3495Z", fill: "#233447" }),
        React__default.createElement("path", { d: "M22.848 25.3495L24.001 22.92L26.801 24.1965L22.848 25.3495Z", fill: "#233447" }),
        React__default.createElement("path", { d: "M12.6773 32.8573L13.3635 27.2023L8.99876 27.3258L12.6773 32.8573Z", fill: "#CC6228" }),
        React__default.createElement("path", { d: "M26.6364 27.2023L27.3227 32.8573L31.0149 27.3258L26.6364 27.2023Z", fill: "#CC6228" }),
        React__default.createElement("path", { d: "M29.9581 20.9709L22.1207 21.3278L22.8482 25.3495L24.0011 22.92L26.8012 24.1965L29.9581 20.9709Z", fill: "#CC6228" }),
        React__default.createElement("path", { d: "M13.2263 24.1965L15.9989 22.92L17.1519 25.3495L17.8793 21.3278L10.0419 20.9709L13.2263 24.1965Z", fill: "#CC6228" }),
        React__default.createElement("path", { d: "M10.0419 20.9709L13.3361 27.3809L13.2263 24.1965L10.0419 20.9709Z", fill: "#E27525" }),
        React__default.createElement("path", { d: "M26.8011 24.1965L26.6638 27.3809L29.958 20.9709L26.8011 24.1965Z", fill: "#E27525" }),
        React__default.createElement("path", { d: "M17.8793 21.3278L17.1519 25.3494L18.0715 30.0985L18.2637 23.8396L17.8793 21.3278Z", fill: "#E27525" }),
        React__default.createElement("path", { d: "M22.1205 21.3278L21.7499 23.8258L21.9283 30.0985L22.848 25.3494L22.1205 21.3278Z", fill: "#E27525" }),
        React__default.createElement("path", { d: "M22.848 25.3496L21.9284 30.0987L22.601 30.5654L26.6638 27.381L26.8011 24.1967L22.848 25.3496Z", fill: "#F5841F" }),
        React__default.createElement("path", { d: "M13.2262 24.1967L13.336 27.381L17.3989 30.5654L18.0714 30.0987L17.1518 25.3496L13.2262 24.1967Z", fill: "#F5841F" }),
        React__default.createElement("path", { d: "M22.9303 34.93L22.9715 33.6398L22.6284 33.3378H17.3714L17.042 33.6398L17.0694 34.93L12.6772 32.8574L14.2145 34.1202L17.3302 36.2751H22.6696L25.7853 34.1202L27.3226 32.8574L22.9303 34.93Z", fill: "#C0AC9D" }),
        React__default.createElement("path", { d: "M22.601 30.5653L21.9284 30.0986H18.0715L17.3989 30.5653L17.0421 33.6399L17.3715 33.3379H22.6285L22.9716 33.6399L22.601 30.5653Z", fill: "#161616" }),
        React__default.createElement("path", { d: "M36.5875 14.3003L37.7542 8.61779L36.011 3.33337L22.6009 13.2846L27.7618 17.6493L35.0365 19.7768L36.6424 17.8964L35.9424 17.3886L37.0679 16.3728L36.2169 15.7003L37.3287 14.863L36.5875 14.3003Z", fill: "#763E1A" }),
        React__default.createElement("path", { d: "M2.24573 8.61779L3.42615 14.3003L2.67123 14.863L3.78302 15.7003L2.93202 16.3728L4.05753 17.3886L3.35752 17.8964L4.96343 19.7768L12.2518 17.6493L17.399 13.2846L4.00263 3.33337L2.24573 8.61779Z", fill: "#763E1A" }),
        React__default.createElement("path", { d: "M35.0365 19.777L27.7619 17.6495L29.958 20.9712L26.6638 27.3811L31.0149 27.3262H37.4797L35.0365 19.777Z", fill: "#F5841F" }),
        React__default.createElement("path", { d: "M12.2517 17.6495L4.96332 19.777L2.53386 27.3262H8.99869L13.336 27.3811L10.0419 20.9712L12.2517 17.6495Z", fill: "#F5841F" }),
        React__default.createElement("path", { d: "M22.1205 21.3276L22.6009 13.2843L24.701 7.56067H15.2988L17.3988 13.2843L17.8792 21.3276L18.0577 23.8531L18.0714 30.0984H21.9283L21.9421 23.8531L22.1205 21.3276Z", fill: "#F5841F" })));
};

var Icon$1e = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M18 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$1d = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$1c = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" })));
};

var Icon$1b = function (props) { return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default.createElement("path", { d: "M12.8533 3.39627C12.4633 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02255 10.1449 7.50212 11 8.28305 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM2.99999 19.5C2.99999 20.6046 3.89542 21.5 4.99999 21.5H8.99999C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 8.99999 13.5H4.99999C3.89542 13.5 2.99999 14.3954 2.99999 15.5V19.5ZM4.99999 15.5H8.99999V19.5H4.99999V15.5Z" }))); };

var Icon$1a = function (props) { return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default.createElement("path", { d: "M12.8533 3.39627C12.4633 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02255 10.1449 7.50212 11 8.28305 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM2.99999 19.5C2.99999 20.6046 3.89542 21.5 4.99999 21.5H8.99999C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 8.99999 13.5H4.99999C3.89542 13.5 2.99999 14.3954 2.99999 15.5V19.5Z" }))); };

var Icon$19 = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React__default.createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React__default.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React__default.createElement("g", { mask: "url(#A)" },
            React__default.createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React__default.createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React__default.createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React__default.createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var Icon$18 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$17 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.43832 38.1153C2.43048 38.3002 2.42654 38.4857 2.42654 38.6718C2.42654 39.3754 2.48287 40.0702 2.59273 40.7545H2.42654V41.8317C2.42654 42.3575 2.45801 42.8784 2.51976 43.3937C3.7248 53.4491 16.4632 61.3609 32 61.3609C47.5368 61.3609 60.2752 53.4491 61.4802 43.3937C61.542 42.8784 61.5735 42.3575 61.5735 41.8317V40.7545H61.4073C61.5171 40.0702 61.5735 39.3754 61.5735 38.6718C61.5735 38.4857 61.5695 38.3002 61.5617 38.1153C61.1156 27.587 48.0511 19.1426 32 19.1426C15.9489 19.1426 2.88444 27.587 2.43832 38.1153ZM0.00951064 38.1153C0.229456 31.6916 4.24297 26.2955 9.82907 22.6067C15.6197 18.7827 23.4643 16.5034 32 16.5034C40.5358 16.5034 48.3803 18.7827 54.1709 22.6067C59.757 26.2955 63.7705 31.6916 63.9905 38.1153H64V41.8317C64 48.5003 59.9176 54.102 54.1709 57.8969C48.3803 61.7208 40.5358 64.0001 32 64.0001C23.4643 64.0001 15.6197 61.7208 9.82907 57.8969C4.08238 54.102 0 48.5003 0 41.8317V38.1153H0.00951064Z", fill: "#606063" }),
        React__default.createElement("path", { d: "M61.5734 41.832C61.5734 52.6177 48.3329 61.3612 32 61.3612C15.667 61.3612 2.42651 52.6177 2.42651 41.832V38.7405H61.5734V41.832Z", fill: "#BEBEBE" }),
        React__default.createElement("path", { d: "M61.5734 38.6718C61.5734 49.4575 48.3329 58.201 32 58.201C15.667 58.201 2.42651 49.4575 2.42651 38.6718C2.42651 27.8861 15.667 19.1426 32 19.1426C48.3329 19.1426 61.5734 27.8861 61.5734 38.6718Z", fill: "#FAF9FA" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 33.1548C6.97663 33.167 6.97661 33.1792 6.97661 33.1915C6.97661 34.0795 7.09495 34.9492 7.32173 35.794H6.97634V36.9377C6.97634 37.4425 7.01459 37.9414 7.08925 38.4332C8.21673 45.8588 17.6492 51.6547 29.1184 51.6547C40.5876 51.6547 50.0201 45.8588 51.1475 38.4332C51.2222 37.9414 51.2604 37.4425 51.2604 36.9377V35.794H50.9156C51.1362 34.9723 51.2542 34.127 51.2604 33.2641C51.2606 33.2399 51.2607 33.2157 51.2607 33.1915C51.2607 33.1792 51.2607 33.167 51.2606 33.1548C51.2309 25.0436 41.329 18.4744 29.1187 18.4744C16.9083 18.4744 7.00645 25.0436 6.97668 33.1548ZM4.55012 33.1548H4.5498V36.9377C4.5498 42.269 7.79116 46.6683 12.1963 49.5962C16.643 52.5518 22.632 54.2939 29.1184 54.2939C35.6048 54.2939 41.5937 52.5518 46.0405 49.5962C50.4456 46.6683 53.687 42.269 53.687 36.9377V33.2739C53.6872 33.2464 53.6872 33.2189 53.6872 33.1915C53.6872 27.8601 50.4459 23.4609 46.0408 20.533C41.594 17.5773 35.6051 15.8352 29.1187 15.8352C22.6322 15.8352 16.6433 17.5773 12.1965 20.533C7.80153 23.4542 4.56495 27.84 4.55012 33.1548Z", fill: "#633001" }),
        React__default.createElement("path", { d: "M51.2604 36.9379C51.2604 45.0659 41.3471 51.6549 29.1184 51.6549C16.8897 51.6549 6.97632 45.0659 6.97632 36.9379V33.4849H51.2604V36.9379Z", fill: "#FEDC90" }),
        React__default.createElement("path", { d: "M51.2604 33.1914C51.2604 41.3195 41.3471 47.9085 29.1184 47.9085C16.8897 47.9085 6.97632 41.3195 6.97632 33.1914C6.97632 25.0634 16.8897 18.4744 29.1184 18.4744C41.3471 18.4744 51.2604 25.0634 51.2604 33.1914Z", fill: "#D1884F" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.6497 25.2371C13.6496 25.2493 13.6496 25.2615 13.6496 25.2737C13.6496 26.1618 13.7679 27.0315 13.9947 27.8762H13.6493V29.0199C13.6493 29.5248 13.6876 30.0237 13.7622 30.5154C14.8897 37.941 24.3222 43.737 35.7914 43.737C47.2605 43.737 56.693 37.941 57.8205 30.5154C57.8952 30.0237 57.9334 29.5248 57.9334 29.0199V27.8762H57.5886C57.8092 27.0545 57.9271 26.2092 57.9334 25.3464C57.9336 25.3222 57.9337 25.298 57.9337 25.2737C57.9337 25.2615 57.9337 25.2493 57.9336 25.2371C57.9038 17.1259 48.0019 10.5567 35.7916 10.5567C23.5813 10.5567 13.6794 17.1259 13.6497 25.2371ZM11.2231 25.2371H11.2228V29.0199C11.2228 34.3513 14.4641 38.7505 18.8693 41.6785C23.316 44.6341 29.3049 46.3762 35.7914 46.3762C42.2778 46.3762 48.2667 44.6341 52.7135 41.6785C57.1186 38.7505 60.36 34.3513 60.36 29.0199V25.3561C60.3601 25.3287 60.3602 25.3012 60.3602 25.2737C60.3602 19.9424 57.1189 15.5432 52.7137 12.6152C48.267 9.65961 42.2781 7.91748 35.7916 7.91748C29.3052 7.91748 23.3163 9.65961 18.8695 12.6152C14.4745 15.5364 11.2379 19.9222 11.2231 25.2371Z", fill: "#633001" }),
        React__default.createElement("path", { d: "M57.9334 29.0201C57.9334 37.1481 48.0201 43.7372 35.7913 43.7372C23.5626 43.7372 13.6493 37.1481 13.6493 29.0201V25.5671H57.9334V29.0201Z", fill: "#FEDC90" }),
        React__default.createElement("path", { d: "M57.9334 25.274C57.9334 33.402 48.0201 39.991 35.7913 39.991C23.5626 39.991 13.6493 33.402 13.6493 25.274C13.6493 17.1459 23.5626 10.5569 35.7913 10.5569C48.0201 10.5569 57.9334 17.1459 57.9334 25.274Z", fill: "#D1884F" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 17.3196C6.97663 17.3318 6.97661 17.344 6.97661 17.3563C6.97661 18.2443 7.09495 19.114 7.32173 19.9588H6.97634V21.1025C6.97634 21.6073 7.01459 22.1062 7.08925 22.598C8.21673 30.0236 17.6492 35.8195 29.1184 35.8195C40.5876 35.8195 50.0201 30.0236 51.1475 22.598C51.2222 22.1062 51.2604 21.6073 51.2604 21.1025V19.9588H50.9156C51.1362 19.1371 51.2542 18.2917 51.2604 17.4289C51.2606 17.4047 51.2607 17.3805 51.2607 17.3563C51.2607 17.344 51.2607 17.3318 51.2606 17.3196C51.2309 9.20843 41.329 2.63919 29.1187 2.63919C16.9083 2.63919 7.00645 9.20843 6.97668 17.3196ZM4.55012 17.3196H4.5498V21.1025C4.5498 26.4338 7.79116 30.833 12.1963 33.761C16.643 36.7166 22.632 38.4587 29.1184 38.4587C35.6048 38.4587 41.5937 36.7166 46.0405 33.761C50.4456 30.833 53.687 26.4338 53.687 21.1025V17.4387C53.6872 17.4112 53.6872 17.3837 53.6872 17.3563C53.6872 12.0249 50.4459 7.62568 46.0408 4.69775C41.594 1.74213 35.6051 0 29.1187 0C22.6322 0 16.6433 1.74213 12.1965 4.69775C7.80153 7.61896 4.56495 12.0047 4.55012 17.3196Z", fill: "#633001" }),
        React__default.createElement("path", { d: "M51.2604 21.1027C51.2604 29.2307 41.3471 35.8197 29.1184 35.8197C16.8897 35.8197 6.97632 29.2307 6.97632 21.1027V17.6497H51.2604V21.1027Z", fill: "#FEDC90" }),
        React__default.createElement("path", { d: "M51.2604 17.3562C51.2604 25.4842 41.3471 32.0733 29.1184 32.0733C16.8897 32.0733 6.97632 25.4842 6.97632 17.3562C6.97632 9.22822 16.8897 2.63916 29.1184 2.63916C41.3471 2.63916 51.2604 9.22822 51.2604 17.3562Z", fill: "#D1884F" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.214 18.272C12.214 20.9856 14.0269 23.4161 16.8871 25.0513L14.9054 28.7844L14.9059 28.7847H14.9054V38.2326C14.9054 39.4819 15.8366 40.4947 16.9853 40.4947C18.134 40.4947 19.0652 39.4819 19.0652 38.2326V30.7188L21.1972 26.7024C22.5605 27.0169 24.0238 27.1876 25.5468 27.1876C32.9103 27.1876 38.8796 23.196 38.8796 18.272C38.8796 13.3481 32.9103 9.35645 25.5468 9.35645C18.1833 9.35645 12.214 13.3481 12.214 18.272Z", fill: "url(#paint0_linear_pancakes)" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8871 25.0513C16.5702 24.8701 16.2663 24.6792 15.9762 24.4793C13.6475 22.8741 12.2139 20.685 12.2139 18.272C12.2139 13.3481 18.1832 9.35641 25.5468 9.35641C32.9103 9.35641 38.8796 13.3481 38.8796 18.272C38.8796 23.1959 32.9103 27.1876 25.5468 27.1876C24.0238 27.1876 22.5604 27.0168 21.1972 26.7024L19.0652 30.7187V38.2325C19.0652 39.4819 18.134 40.4947 16.9853 40.4947C15.8366 40.4947 14.9054 39.4819 14.9054 38.2325V28.7847L16.8871 25.0513ZM12.7822 28.8244V38.2325C12.7822 40.7573 14.664 42.804 16.9853 42.804C19.3066 42.804 21.1884 40.7573 21.1884 38.2325V31.3375L22.2942 29.2544C23.3445 29.4135 24.433 29.4969 25.5468 29.4969C29.5564 29.4969 33.2881 28.4148 36.0865 26.5435C38.8503 24.6954 41.0028 21.836 41.0028 18.272C41.0028 14.708 38.8503 11.8486 36.0865 10.0005C33.2881 8.12923 29.5564 7.04712 25.5468 7.04712C21.5371 7.04712 17.8054 8.12923 15.007 10.0005C12.2432 11.8486 10.0907 14.708 10.0907 18.272C10.0907 21.4 11.738 23.9758 14.0266 25.8213L13.0813 27.6021C12.9912 27.7662 12.9192 27.9435 12.8685 28.1307C12.8064 28.3589 12.7783 28.5928 12.7822 28.8244Z", fill: "#633001" }),
        React__default.createElement("path", { d: "M16.3791 14.5156C16.3791 17.0663 19.3667 19.1341 23.0521 19.1341C26.7375 19.1341 29.7251 17.0663 29.7251 14.5156C29.7251 11.9648 26.7375 9.89697 23.0521 9.89697C19.3667 9.89697 16.3791 11.9648 16.3791 14.5156Z", fill: "#9E7200" }),
        React__default.createElement("path", { d: "M16.3792 12.5361H29.7251V14.5155H16.3792V12.5361Z", fill: "#9E7200" }),
        React__default.createElement("path", { d: "M16.3791 12.5361C16.3791 15.0868 19.3667 17.1546 23.0521 17.1546C26.7375 17.1546 29.7251 15.0868 29.7251 12.5361C29.7251 9.98529 26.7375 7.91748 23.0521 7.91748C19.3667 7.91748 16.3791 9.98529 16.3791 12.5361Z", fill: "#F0B90B" }),
        React__default.createElement("path", { d: "M20.52 11.9795L22.4008 10.6777C22.7983 10.4027 23.3062 10.4027 23.7036 10.6777L25.5845 11.9795C25.959 12.2388 25.959 12.8336 25.5845 13.0928L23.7036 14.3946C23.3062 14.6697 22.7983 14.6697 22.4008 14.3946L20.52 13.0928C20.1454 12.8336 20.1454 12.2388 20.52 11.9795Z", fill: "#9E7200" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.1938 7.32218C18.7911 6.21664 20.8681 5.6084 23.0522 5.6084C25.2363 5.6084 27.3133 6.21664 28.9106 7.32218C30.4827 8.41029 31.8484 10.1975 31.8484 12.5363V14.5157C31.8484 16.8545 30.4827 18.6417 28.9106 19.7298C27.3133 20.8353 25.2363 21.4435 23.0522 21.4435C20.8681 21.4435 18.7911 20.8353 17.1938 19.7298C15.6217 18.6417 14.256 16.8545 14.256 14.5157V12.5363C14.256 10.1975 15.6217 8.41029 17.1938 7.32218ZM23.0522 7.91769C19.3668 7.91769 16.3792 9.9855 16.3792 12.5363V14.5157C16.3792 17.0664 19.3668 19.1343 23.0522 19.1343C26.7376 19.1343 29.7252 17.0664 29.7252 14.5157V12.5363C29.7252 9.9855 26.7376 7.91769 23.0522 7.91769Z", fill: "#633001" }),
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "paint0_linear_pancakes", x1: "25.691", y1: "9.6549", x2: "25.691", y2: "40.2608", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { stopColor: "#9F4A08" }),
                React__default.createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$16 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 19 19" }, props),
        React__default.createElement("path", { d: "M0 15.46V18.5C0 18.78 0.22 19 0.5 19H3.54C3.67 19 3.8 18.95 3.89 18.85L14.81 7.94L11.06 4.19L0.15 15.1C0.0500001 15.2 0 15.32 0 15.46ZM17.71 5.04C18.1 4.65 18.1 4.02 17.71 3.63L15.37 1.29C14.98 0.899998 14.35 0.899998 13.96 1.29L12.13 3.12L15.88 6.87L17.71 5.04Z" })));
};

var Icon$15 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React__default.createElement("circle", { cx: "45", cy: "45", r: "45", fill: "url(#paint0_linear_pancakeround)" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.7703 49.9442C15.7626 50.1122 15.7587 50.2809 15.7587 50.4501C15.7587 51.0897 15.8144 51.7214 15.923 52.3435H15.7587V53.3228C15.7587 53.8008 15.7898 54.2744 15.8508 54.7428C17.0423 63.8844 29.6377 71.0772 45 71.0772C60.3623 71.0772 72.9577 63.8844 74.1492 54.7428C74.2102 54.2744 74.2413 53.8008 74.2413 53.3228V52.3435H74.077C74.1856 51.7214 74.2413 51.0897 74.2413 50.4501C74.2413 50.2809 74.2374 50.1122 74.2297 49.9442C73.7886 40.3727 60.8709 32.6957 45 32.6957C29.1291 32.6957 16.2114 40.3727 15.7703 49.9442ZM13.3688 49.9442C13.5863 44.1042 17.5547 39.1986 23.0781 35.845C28.8037 32.3686 36.5601 30.2964 45 30.2964C53.4399 30.2964 61.1964 32.3686 66.9219 35.845C72.4453 39.1986 76.4137 44.1042 76.6312 49.9442H76.6406V53.3228C76.6406 59.3853 72.6041 64.4779 66.9219 67.9279C61.1964 71.4043 53.4399 73.4765 45 73.4765C36.5601 73.4765 28.8037 71.4043 23.0781 67.9279C17.3959 64.4779 13.3594 59.3853 13.3594 53.3228V49.9442H13.3688Z", fill: "#606063" }),
        React__default.createElement("path", { d: "M74.2412 53.3233C74.2412 63.1287 61.1494 71.0776 44.9999 71.0776C28.8503 71.0776 15.7585 63.1287 15.7585 53.3233V50.5127H74.2412V53.3233Z", fill: "#BEBEBE" }),
        React__default.createElement("path", { d: "M74.2412 50.4502C74.2412 60.2557 61.1494 68.2046 44.9999 68.2046C28.8503 68.2046 15.7585 60.2557 15.7585 50.4502C15.7585 40.6447 28.8503 32.6958 44.9999 32.6958C61.1494 32.6958 74.2412 40.6447 74.2412 50.4502Z", fill: "#FAF9FA" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.2578 45.4345C20.2577 45.4456 20.2577 45.4567 20.2577 45.4679C20.2577 46.2752 20.3747 47.0659 20.5989 47.8338H20.2574V48.8736C20.2574 49.3326 20.2953 49.7861 20.3691 50.2332C21.4839 56.9839 30.8104 62.2532 42.1508 62.2532C53.4912 62.2532 62.8178 56.9839 63.9326 50.2332C64.0064 49.7861 64.0442 49.3326 64.0442 48.8736V47.8338H63.7032C63.9213 47.0868 64.038 46.3183 64.0442 45.5339C64.0444 45.5119 64.0445 45.4899 64.0445 45.4679C64.0445 45.4567 64.0444 45.4456 64.0444 45.4345C64.015 38.0605 54.2243 32.0883 42.1511 32.0883C30.0779 32.0883 20.2872 38.0605 20.2578 45.4345ZM17.8585 45.4345H17.8582V48.8736C17.8582 53.7204 21.0631 57.7199 25.4188 60.3817C29.8156 63.0687 35.7372 64.6525 42.1508 64.6525C48.5644 64.6525 54.4861 63.0687 58.8829 60.3817C63.2385 57.7199 66.4435 53.7204 66.4435 48.8736V45.5428C66.4437 45.5178 66.4438 45.4928 66.4438 45.4679C66.4438 40.621 63.2388 36.6216 58.8832 33.9598C54.4863 31.2728 48.5647 29.689 42.1511 29.689C35.7375 29.689 29.8158 31.2728 25.419 33.9598C21.0734 36.6155 17.8731 40.6027 17.8585 45.4345Z", fill: "#633001" }),
        React__default.createElement("path", { d: "M64.0441 48.8738C64.0441 56.2631 54.2421 62.2534 42.1507 62.2534C30.0593 62.2534 20.2573 56.2631 20.2573 48.8738V45.7346H64.0441V48.8738Z", fill: "#FEDC90" }),
        React__default.createElement("path", { d: "M64.0441 45.4679C64.0441 52.8573 54.2421 58.8475 42.1507 58.8475C30.0593 58.8475 20.2573 52.8573 20.2573 45.4679C20.2573 38.0786 30.0593 32.0884 42.1507 32.0884C54.2421 32.0884 64.0441 38.0786 64.0441 45.4679Z", fill: "#D1884F" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.8557 38.2365C26.8556 38.2476 26.8556 38.2587 26.8556 38.2699C26.8556 39.0772 26.9726 39.8679 27.1968 40.6359H26.8553V41.6756C26.8553 42.1346 26.8932 42.5881 26.967 43.0352C28.0818 49.7859 37.4083 55.0552 48.7487 55.0552C60.0891 55.0552 69.4157 49.7859 70.5305 43.0352C70.6043 42.5881 70.6421 42.1346 70.6421 41.6756V40.6359H70.3011C70.5192 39.8888 70.6359 39.1203 70.6421 38.3359C70.6423 38.3139 70.6424 38.2919 70.6424 38.2699C70.6424 38.2587 70.6423 38.2476 70.6423 38.2365C70.6129 30.8625 60.8222 24.8903 48.749 24.8903C36.6758 24.8903 26.8851 30.8625 26.8557 38.2365ZM24.4564 38.2365H24.4561V41.6756C24.4561 46.5224 27.661 50.5219 32.0167 53.1837C36.4135 55.8707 42.3351 57.4545 48.7487 57.4545C55.1623 57.4545 61.084 55.8707 65.4808 53.1837C69.8364 50.5219 73.0414 46.5224 73.0414 41.6756V38.3448C73.0416 38.3198 73.0417 38.2948 73.0417 38.2699C73.0417 33.4231 69.8367 29.4236 65.4811 26.7618C61.0842 24.0748 55.1626 22.491 48.749 22.491C42.3354 22.491 36.4137 24.0748 32.0169 26.7618C27.6713 29.4175 24.471 33.4047 24.4564 38.2365Z", fill: "#633001" }),
        React__default.createElement("path", { d: "M70.6422 41.6758C70.6422 49.0651 60.8402 55.0554 48.7488 55.0554C36.6575 55.0554 26.8555 49.0651 26.8555 41.6758V38.5366H70.6422V41.6758Z", fill: "#FEDC90" }),
        React__default.createElement("path", { d: "M70.6422 38.2699C70.6422 45.6593 60.8402 51.6495 48.7488 51.6495C36.6575 51.6495 26.8555 45.6593 26.8555 38.2699C26.8555 30.8806 36.6575 24.8904 48.7488 24.8904C60.8402 24.8904 70.6422 30.8806 70.6422 38.2699Z", fill: "#D1884F" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.2578 31.0385C20.2577 31.0496 20.2577 31.0607 20.2577 31.0719C20.2577 31.8792 20.3747 32.6699 20.5989 33.4379H20.2574V34.4776C20.2574 34.9366 20.2953 35.3901 20.3691 35.8372C21.4839 42.5879 30.8104 47.8572 42.1508 47.8572C53.4912 47.8572 62.8178 42.5879 63.9326 35.8372C64.0064 35.3901 64.0442 34.9366 64.0442 34.4776V33.4379H63.7032C63.9213 32.6908 64.038 31.9223 64.0442 31.1379C64.0444 31.1159 64.0445 31.0939 64.0445 31.0719C64.0445 31.0607 64.0444 31.0496 64.0444 31.0385C64.015 23.6645 54.2243 17.6923 42.1511 17.6923C30.0779 17.6923 20.2872 23.6645 20.2578 31.0385ZM17.8585 31.0385H17.8582V34.4776C17.8582 39.3244 21.0631 43.3239 25.4188 45.9857C29.8156 48.6727 35.7372 50.2565 42.1508 50.2565C48.5644 50.2565 54.4861 48.6727 58.8829 45.9857C63.2385 43.3239 66.4435 39.3244 66.4435 34.4776V31.1468C66.4437 31.1218 66.4438 31.0968 66.4438 31.0719C66.4438 26.2251 63.2388 22.2256 58.8832 19.5638C54.4863 16.8768 48.5647 15.293 42.1511 15.293C35.7375 15.293 29.8158 16.8768 25.419 19.5638C21.0734 22.2195 17.8731 26.2067 17.8585 31.0385Z", fill: "#633001" }),
        React__default.createElement("path", { d: "M64.0441 34.4778C64.0441 41.8671 54.2421 47.8574 42.1507 47.8574C30.0593 47.8574 20.2573 41.8671 20.2573 34.4778V31.3386H64.0441V34.4778Z", fill: "#FEDC90" }),
        React__default.createElement("path", { d: "M64.0441 31.0719C64.0441 38.4613 54.2421 44.4515 42.1507 44.4515C30.0593 44.4515 20.2573 38.4613 20.2573 31.0719C20.2573 23.6826 30.0593 17.6924 42.1507 17.6924C54.2421 17.6924 64.0441 23.6826 64.0441 31.0719Z", fill: "#D1884F" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.4361 31.9044C25.4361 34.3714 27.2287 36.5809 30.0567 38.0676L28.0973 41.4614L28.0977 41.4617H28.0973V50.0509C28.0973 51.1867 29.018 52.1075 30.1538 52.1075C31.2896 52.1075 32.2104 51.1867 32.2104 50.0509V43.22L34.3184 39.5686C35.6663 39.8545 37.1133 40.0097 38.6192 40.0097C45.9 40.0097 51.8022 36.3808 51.8022 31.9044C51.8022 27.428 45.9 23.7991 38.6192 23.7991C31.3383 23.7991 25.4361 27.428 25.4361 31.9044Z", fill: "url(#paint1_linear_pancakeround)" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0569 38.0676C29.7437 37.9029 29.4431 37.7294 29.1563 37.5476C26.8538 36.0883 25.4363 34.0982 25.4363 31.9045C25.4363 27.428 31.3386 23.7991 38.6194 23.7991C45.9002 23.7991 51.8025 27.428 51.8025 31.9045C51.8025 36.3809 45.9002 40.0098 38.6194 40.0098C37.1135 40.0098 35.6666 39.8545 34.3187 39.5687L32.2106 43.22V50.0509C32.2106 51.1868 31.2899 52.1075 30.1541 52.1075C29.0183 52.1075 28.0975 51.1868 28.0975 50.0509V41.4617L30.0569 38.0676ZM25.9981 41.4978V50.0509C25.9981 52.3462 27.8588 54.2069 30.1541 54.2069C32.4493 54.2069 34.31 52.3462 34.31 50.0509V43.7826L35.4034 41.8887C36.4418 42.0334 37.5181 42.1092 38.6194 42.1092C42.584 42.1092 46.2738 41.1254 49.0408 39.4242C51.7735 37.7441 53.9019 35.1446 53.9019 31.9045C53.9019 28.6643 51.7735 26.0648 49.0408 24.3847C46.2738 22.6835 42.584 21.6997 38.6194 21.6997C34.6548 21.6997 30.965 22.6835 28.198 24.3847C25.4652 26.0648 23.3369 28.6643 23.3369 31.9045C23.3369 34.7481 24.9657 37.0898 27.2286 38.7677L26.2939 40.3867C26.2048 40.5358 26.1337 40.697 26.0835 40.8672C26.0221 41.0746 25.9943 41.2873 25.9981 41.4978Z", fill: "#633001" }),
        React__default.createElement("path", { d: "M29.5544 28.4894C29.5544 30.8083 32.5084 32.6882 36.1524 32.6882C39.7964 32.6882 42.7505 30.8083 42.7505 28.4894C42.7505 26.1704 39.7964 24.2905 36.1524 24.2905C32.5084 24.2905 29.5544 26.1704 29.5544 28.4894Z", fill: "#9E7200" }),
        React__default.createElement("path", { d: "M29.5547 26.6899H42.7508V28.4894H29.5547V26.6899Z", fill: "#9E7200" }),
        React__default.createElement("path", { d: "M29.5544 26.6898C29.5544 29.0088 32.5084 30.8887 36.1524 30.8887C39.7964 30.8887 42.7505 29.0088 42.7505 26.6898C42.7505 24.3709 39.7964 22.491 36.1524 22.491C32.5084 22.491 29.5544 24.3709 29.5544 26.6898Z", fill: "#F0B90B" }),
        React__default.createElement("path", { d: "M33.6489 26.1838L35.5086 25.0003C35.9016 24.7502 36.4038 24.7502 36.7968 25.0003L38.6565 26.1838C39.0269 26.4195 39.0269 26.9602 38.6565 27.1959L36.7968 28.3794C36.4038 28.6295 35.9016 28.6295 35.5086 28.3794L33.6489 27.1959C33.2785 26.9602 33.2785 26.4195 33.6489 26.1838Z", fill: "#9E7200" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.3599 21.9496C31.9392 20.9446 33.9929 20.3916 36.1525 20.3916C38.3121 20.3916 40.3658 20.9446 41.9451 21.9496C43.4996 22.9389 44.8499 24.5636 44.8499 26.6899V28.4894C44.8499 30.6156 43.4996 32.2404 41.9451 33.2296C40.3658 34.2347 38.3121 34.7876 36.1525 34.7876C33.9929 34.7876 31.9392 34.2347 30.3599 33.2296C28.8054 32.2404 27.4551 30.6156 27.4551 28.4894V26.6899C27.4551 24.5636 28.8054 22.9389 30.3599 21.9496ZM36.1525 22.491C32.5085 22.491 29.5545 24.3709 29.5545 26.6899V28.4894C29.5545 30.8083 32.5085 32.6882 36.1525 32.6882C39.7965 32.6882 42.7505 30.8083 42.7505 28.4894V26.6899C42.7505 24.3709 39.7965 22.491 36.1525 22.491Z", fill: "#633001" }),
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "paint0_linear_pancakeround", x1: "45", y1: "0", x2: "45", y2: "90", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { stopColor: "#54DADE" }),
                React__default.createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })),
            React__default.createElement("linearGradient", { id: "paint1_linear_pancakeround", x1: "38.7618", y1: "24.0704", x2: "38.7618", y2: "51.8948", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { stopColor: "#9F4A08" }),
                React__default.createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$14 = function (props) {
    var id = uniqueId("svg");
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default.createElement("g", { clipPath: "url(#" + id + ")" },
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M44.4825 9.78846C44.9985 10.9575 44.934 12.0841 44.3506 13.0946C43.7672 14.105 42.8238 14.7242 41.5534 14.8619C40.2449 15.0037 38.5223 14.6345 36.5148 13.4755C34.5072 12.3164 33.3262 11.0092 32.7948 9.80511C32.2788 8.63603 32.3433 7.50943 32.9267 6.49898C33.5101 5.48854 34.4535 4.86941 35.7239 4.73171C37.0324 4.5899 38.755 4.95904 40.7625 6.1181C42.7701 7.27716 43.9511 8.58438 44.4825 9.78846ZM46.7339 8.79481C45.9315 6.97669 44.3045 5.3214 41.993 3.98688C39.6815 2.65235 37.4345 2.07098 35.4588 2.28512C33.445 2.50338 31.7896 3.54667 30.7955 5.26852C29.8014 6.99038 29.7255 8.94565 30.5434 10.7988C31.3458 12.6169 32.9728 14.2722 35.2843 15.6067C37.5958 16.9412 39.8428 17.5226 41.8185 17.3085C43.8323 17.0902 45.4877 16.0469 46.4818 14.325C47.4759 12.6032 47.5518 10.6479 46.7339 8.79481Z", fill: "#FFAF00" }),
            React__default.createElement("path", { d: "M39.2061 12.466C39.4779 11.9952 39.3166 11.3932 38.8458 11.1213L37.3879 10.2796C36.9171 10.0078 36.315 10.1691 36.0432 10.6399L33.7667 14.5829C33.4949 15.0537 33.6562 15.6558 34.127 15.9276L35.5849 16.7693C36.0557 17.0411 36.6577 16.8798 36.9296 16.409L39.2061 12.466Z", fill: "#EB8C00" }),
            React__default.createElement("path", { d: "M42.8521 10.8222C43.1239 10.3514 42.9626 9.74937 42.4917 9.47754L36.9885 6.30023C36.5177 6.02841 35.9156 6.18972 35.6438 6.66054L34.4249 8.77169C34.1531 9.2425 34.3144 9.84453 34.7852 10.1164L40.2885 13.2937C40.7593 13.5655 41.3614 13.4042 41.6332 12.9334L42.8521 10.8222Z", fill: "#FFAF00" }),
            React__default.createElement("path", { d: "M42.8521 10.8222C43.1239 10.3514 42.9626 9.74937 42.4917 9.47754L38.2605 7.03465C37.7897 6.76282 37.1877 6.92413 36.9159 7.39495L35.9418 9.08208C35.67 9.5529 35.8313 10.1549 36.3021 10.4268L40.5333 12.8697C41.0041 13.1415 41.6062 12.9802 41.878 12.5093L42.8521 10.8222Z", fill: "#FFD800" }),
            React__default.createElement("path", { d: "M42.2502 9.90623C42.3862 9.67082 42.3055 9.3698 42.0701 9.23389L41.2265 8.74685C40.9911 8.61094 40.6901 8.6916 40.5542 8.92701L39.0879 11.4666C38.952 11.702 39.0327 12.0031 39.2681 12.139L40.1117 12.626C40.3471 12.7619 40.6481 12.6813 40.784 12.4458L42.2502 9.90623Z", fill: "#FFE971" }),
            React__default.createElement("path", { d: "M14.4276 37.9808C19.0474 45.9826 29.0239 48.079 37.1341 43.3966C45.2442 38.7142 48.4169 29.0261 43.7971 21.0244C39.1773 13.0227 29.2008 10.9262 21.0907 15.6086C12.9805 20.291 9.80785 29.9791 14.4276 37.9808Z", fill: "#EB8C00" }),
            React__default.createElement("path", { d: "M12.9928 35.4957C17.6126 43.4975 27.5891 45.5939 35.6993 40.9115C43.8094 36.2291 46.9821 26.541 42.3623 18.5393C37.7425 10.5375 27.766 8.4411 19.6558 13.1235C11.5457 17.8059 8.37303 27.494 12.9928 35.4957Z", fill: "#FFD800" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.7043 22.6394C12.3316 20.7707 13.3072 19.0005 14.5942 17.4155L44.4474 25.2401C44.6009 27.2114 44.3704 29.1765 43.7923 31.0497L11.7043 22.6394ZM39.463 38.0997C40.3335 37.2422 41.1005 36.3113 41.7564 35.3244L10.887 27.2335C10.8573 28.381 10.9556 29.5386 11.1892 30.6891L39.463 38.0997Z", fill: "#FFE971" }),
            React__default.createElement("path", { d: "M15.0259 34.3218C19.0448 41.2826 27.6684 43.1382 34.6556 39.1041C41.6428 35.07 44.3477 26.674 40.3288 19.7131C36.31 12.7523 27.6863 10.8967 20.6991 14.9308C13.7119 18.9649 11.0071 27.3609 15.0259 34.3218Z", fill: "#FFC700" }),
            React__default.createElement("path", { d: "M16.5423 33.2959C20.044 39.3611 27.4985 40.8267 33.6123 37.2969C39.7261 33.7671 42.1841 26.5785 38.6824 20.5134C35.1806 14.4482 27.7262 12.9826 21.6123 16.5124C15.4985 20.0422 13.0406 27.2308 16.5423 33.2959Z", fill: "white" }),
            React__default.createElement("path", { d: "M19.6485 19.4094C18.7716 20.2171 20.1105 20.7851 21.1076 20.1316C22.9645 18.9145 25.1882 18.2126 27.5811 18.2248C31.0292 18.2423 34.1409 19.7388 36.319 22.1137C37.0584 22.9199 38.4114 22.545 37.8645 21.5976C34.5623 15.878 27.6235 14.4433 21.9702 17.7072C21.1156 18.2006 20.3393 18.7732 19.6485 19.4094Z", fill: "#E7E8E8" }),
            React__default.createElement("path", { d: "M34.6395 35.043C35.5545 34.2788 34.2368 33.6843 33.2067 34.2845C31.5603 35.2437 29.6432 35.7884 27.5946 35.7783C24.3428 35.7623 21.4084 34.3516 19.3546 32.1127C18.6572 31.3525 17.381 31.706 17.8968 32.5993C21.0104 37.9921 27.5541 39.344 32.8862 36.2656C33.5169 35.9014 34.1025 35.4916 34.6395 35.043Z", fill: "#E7E8E8" }),
            React__default.createElement("path", { d: "M32.5972 20.6118C32.801 20.2587 32.6801 19.8071 32.3269 19.6033L32.0205 19.4263C31.6673 19.2225 31.2158 19.3434 31.0119 19.6966L28.0893 24.7587C27.8854 25.1118 28.0064 25.5633 28.3595 25.7672L28.666 25.9442C29.0191 26.148 29.4707 26.027 29.6745 25.6739L32.5972 20.6118Z", fill: "#452A7A" }),
            React__default.createElement("path", { d: "M21.2036 27.5233C20.8098 27.6288 20.576 28.0336 20.6816 28.4275L20.7784 28.789C20.884 29.1828 21.2888 29.4166 21.6826 29.311L26.2569 28.0854C26.6507 27.9798 26.8844 27.575 26.7789 27.1812L26.682 26.8197C26.5765 26.4258 26.1717 26.1921 25.7778 26.2976L21.2036 27.5233Z", fill: "#452A7A" }),
            React__default.createElement("path", { d: "M25.4809 25.6151C26.244 24.2934 27.8023 23.9359 29.053 24.658C30.3037 25.3801 30.7732 26.9084 30.0101 28.23C29.247 29.5517 27.6887 29.9093 26.438 29.1872C25.1873 28.4651 24.7178 26.9368 25.4809 25.6151Z", fill: "#452A7A" }),
            React__default.createElement("path", { d: "M17.0126 14.6084C16.4241 14.2686 15.5801 14.6286 15.1275 15.4126L10.989 22.5807C10.5364 23.3647 10.6466 24.2756 11.2351 24.6154L11.8085 24.9464C12.397 25.2862 13.241 24.9262 13.6936 24.1422L17.8321 16.9741C18.2847 16.1901 18.1745 15.2792 17.586 14.9394L17.0126 14.6084Z", fill: "#EB8C00" }),
            React__default.createElement("path", { d: "M1.87053 28.4667C-1.14632 26.725 -0.193534 19.9443 3.7222 13.162C7.63794 6.37974 13.0338 2.16425 16.0507 3.90603C19.0675 5.64781 18.1147 12.4285 14.199 19.2108C10.2833 25.993 4.88739 30.2085 1.87053 28.4667Z", fill: "#FFC700" }),
            React__default.createElement("path", { d: "M3.24974 28.6111C0.902471 27.273 2.13775 21.219 5.79373 14.9665C9.44971 8.71396 14.1419 4.63067 16.4892 5.96878C18.8365 7.30688 17.6012 13.3609 13.9452 19.6134C10.2892 25.8659 5.59701 29.9492 3.24974 28.6111Z", fill: "#FFD800" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.32523 23.3938C2.57644 22.2148 2.99217 20.9038 3.55715 19.5196L17.6473 7.92463C17.7625 8.75342 17.6984 9.77478 17.4703 10.9308L2.32523 23.3938ZM15.6081 16.3772C15.9949 15.5396 16.3319 14.7209 16.6159 13.9331L2.04567 25.923C2.0571 26.4661 2.12846 26.9487 2.26274 27.3591L15.6081 16.3772Z", fill: "#FFE971" })),
        React__default.createElement("defs", null,
            React__default.createElement("clipPath", { id: id },
                React__default.createElement("rect", { width: "48", height: "48", fill: "white", transform: "matrix(-1 0 0 1 48 0)" })))));
};

var Icon$13 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M9 14.7902C9 15.555 9.82366 16.0367 10.4903 15.6617L15.4505 12.8716C16.1302 12.4893 16.1302 11.5107 15.4505 11.1284L10.4903 8.33827C9.82366 7.96331 9 8.44502 9 9.20985V14.7902ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var Icon$12 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M3.18731 5.68438C2.44993 5.52604 2.44993 4.47393 3.18731 4.31559L5.3203 3.85755C5.58957 3.79973 5.79991 3.58939 5.85774 3.32012L6.31577 1.18713C6.47411 0.449748 7.52622 0.449751 7.68457 1.18713L8.1426 3.32012C8.20042 3.58939 8.41076 3.79973 8.68003 3.85755L10.813 4.31559C11.5504 4.47393 11.5504 5.52604 10.813 5.68438L8.68003 6.14241C8.41076 6.20024 8.20042 6.41058 8.1426 6.67985L7.68457 8.81284C7.52622 9.55022 6.47411 9.55022 6.31577 8.81284L5.85774 6.67985C5.79991 6.41058 5.58957 6.20024 5.3203 6.14241L3.18731 5.68438Z" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.99998C15.866 2.99998 19 6.13399 19 9.99998C19 13.866 15.866 17 12 17C8.13401 17 5 13.866 5 9.99998C5 9.4477 4.55228 8.99998 4 8.99998C3.44772 8.99998 3 9.4477 3 9.99998C3 12.8894 4.36163 15.4608 6.47822 17.1075L5.58579 18C5.21071 18.3751 5 18.8838 5 19.4142V21.5C5 22.3284 5.67157 23 6.5 23H17.5C18.3284 23 19 22.3284 19 21.5V19.4142C19 18.8838 18.7893 18.3751 18.4142 18L17.5218 17.1075C19.6384 15.4608 21 12.8894 21 9.99998C21 5.02942 16.9706 0.999985 12 0.999985C11.4477 0.999985 11 1.4477 11 1.99998C11 2.55227 11.4477 2.99998 12 2.99998ZM12 19C10.6564 19 9.38156 18.7056 8.23649 18.1777L7 19.4142L7 21H17V19.4142L15.7635 18.1777C14.6184 18.7056 13.3436 19 12 19Z" })));
};

var Icon$11 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default.createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$10 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M8.99984 5.89661V6.27661C8.16984 5.94661 7.27984 5.77661 6.38984 5.77661C4.96985 5.77661 3.54985 6.20661 2.33985 7.06661C1.82985 7.42661 1.76985 8.15661 2.20985 8.59661L4.77985 11.1666H5.88984V12.2766C6.74984 13.1366 7.86984 13.5866 8.99984 13.6366V15.8966H6.99985C6.44984 15.8966 5.99985 16.3466 5.99985 16.8966V18.8966C5.99985 19.9966 6.89985 20.8966 7.99984 20.8966H17.9998C19.6598 20.8966 20.9998 19.5566 20.9998 17.8966V5.89661C20.9998 5.34661 20.5498 4.89661 19.9998 4.89661H9.99984C9.44984 4.89661 8.99984 5.34661 8.99984 5.89661ZM7.88984 11.3066V9.15661H5.60984L4.56985 8.11661C5.13985 7.89661 5.75985 7.77661 6.38984 7.77661C7.72984 7.77661 8.97985 8.29661 9.92984 9.23661L11.3398 10.6466L11.1398 10.8466C10.6298 11.3566 9.94984 11.6466 9.21984 11.6466C8.74985 11.6466 8.28984 11.5266 7.88984 11.3066ZM18.9998 17.8966C18.9998 18.4466 18.5498 18.8966 17.9998 18.8966C17.4498 18.8966 16.9998 18.4466 16.9998 17.8966V16.8966C16.9998 16.3466 16.5498 15.8966 15.9998 15.8966H10.9998V13.3066C11.5698 13.0766 12.0998 12.7366 12.5598 12.2766L12.7598 12.0766L15.5898 14.8966H16.9998V13.4866L10.9998 7.51661V6.89661H18.9998V17.8966Z" })));
};

var Icon$$ = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default.createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$_ = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$Z = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React__default.createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default.createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default.createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React__default.createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React__default.createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$Y = function (props) {
    var id = uniqueId$1("svg");
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default.createElement("g", { clipPath: "url(#" + id + ")" },
            React__default.createElement("g", { opacity: "0.5" },
                React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.9614 22.6577C22.1497 21.837 20.8799 22.1545 20.6502 23.2356C20.4793 24.0399 20.9887 24.8972 21.775 25.1283L26.8237 26.6119L25.8006 25.5283L22.9614 22.6577ZM17.0022 22.0363C17.8377 18.1041 22.4563 16.9493 25.4089 19.9345L28.2841 22.8415L34.1925 29.0996L28.1494 30.7189C27.8283 30.8049 27.4835 30.7985 27.1491 30.7002L21.0935 28.9207C18.2337 28.0803 16.3806 24.9621 17.0022 22.0363Z", fill: "#7A6EAA" }),
                React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M34.5943 19.5405C34.887 18.4239 36.1454 18.064 36.8848 18.8854C37.435 19.4965 37.4224 20.4937 36.8571 21.0869L33.2266 24.8961L33.5708 23.4462L34.5943 19.5405ZM39.4444 16.0228C36.7547 13.0352 32.1775 14.3444 31.1131 18.4059L30.0766 22.3611L28.0888 30.735L34.132 29.1157C34.4531 29.0297 34.7485 28.8517 34.989 28.5994L39.3434 24.0306C41.3999 21.8728 41.4456 18.2458 39.4444 16.0228Z", fill: "#7A6EAA" }),
                React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.4563 42.0674L47.2386 34.6231L50.6382 47.3106C51.0042 48.6763 50.1937 50.08 48.828 50.4459L25.9913 56.565C24.6256 56.9309 23.2219 56.1205 22.8559 54.7548L19.4563 42.0674ZM49.0488 31.4878L53.111 46.648C53.8429 49.3793 52.222 52.1868 49.4906 52.9187L26.6538 59.0378C23.9225 59.7696 21.115 58.1487 20.3832 55.4174L16.321 40.2572L49.0488 31.4878Z", fill: "#7A6EAA" }),
                React__default.createElement("path", { d: "M36.1074 37.606L30.6528 39.0675L35.3736 56.686L40.8283 55.2244L36.1074 37.606Z", fill: "#7A6EAA" }),
                React__default.createElement("path", { d: "M17.9272 46.1213L19.5837 52.3033L52.3115 43.5339L50.6551 37.3519L17.9272 46.1213Z", fill: "#7A6EAA" }),
                React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.2885 33.8966L45.9617 25.9456C46.6446 25.7627 47.3464 26.1679 47.5294 26.8507L48.4404 30.2508C48.6234 30.9336 48.2182 31.6355 47.5353 31.8185L17.8621 39.7694C17.1793 39.9524 16.4774 39.5471 16.2944 38.8643L15.3834 35.4642C15.2004 34.7814 15.6056 34.0795 16.2885 33.8966ZM45.2991 23.4729C47.3477 22.924 49.4533 24.1396 50.0022 26.1882L50.9132 29.5882C51.4621 31.6367 50.2464 33.7423 48.1979 34.2912L18.5247 42.2422C16.4762 42.7911 14.3706 41.5754 13.8217 39.5269L12.9106 36.1268C12.3617 34.0783 13.5774 31.9727 15.6259 31.4238L45.2991 23.4729Z", fill: "#7A6EAA" }),
                React__default.createElement("path", { d: "M33.2085 26.7876L27.7539 28.2492L30.6526 39.0675L36.1073 37.606L33.2085 26.7876Z", fill: "#7A6EAA" }),
                React__default.createElement("path", { d: "M47.6246 14.7703V14.3912C47.6246 13.8593 47.731 13.4137 47.9437 13.0547C48.1698 12.6956 48.4691 12.3431 48.8414 11.9974C49.1872 11.6649 49.5264 11.379 49.8588 11.1396C50.1913 10.9002 50.464 10.6475 50.6767 10.3815C50.8895 10.1155 50.9959 9.80299 50.9959 9.44391C50.9959 8.92524 50.8097 8.55951 50.4374 8.34672C50.0783 8.12063 49.4732 8.00759 48.622 8.00759C48.0634 8.00759 47.5115 8.08073 46.9662 8.22703C46.421 8.36002 45.9555 8.53291 45.5698 8.7457V6.05259C46.0619 5.81321 46.6404 5.62037 47.3054 5.47408C47.9836 5.32778 48.7217 5.25464 49.5197 5.25464C51.0624 5.25464 52.2394 5.59377 53.0507 6.27203C53.8619 6.937 54.2675 7.85465 54.2675 9.02498C54.2675 9.76974 54.1146 10.3749 53.8087 10.8403C53.5028 11.2925 53.0573 11.758 52.4721 12.2368C51.9801 12.649 51.5678 13.0081 51.2353 13.314C50.9028 13.6066 50.7366 14.0056 50.7366 14.5109V14.7703L47.6246 14.7703ZM47.4849 18.3012V15.9871L50.8563 15.9871V18.3012L47.4849 18.3012Z", fill: "#7A6EAA" }),
                React__default.createElement("path", { d: "M10.6586 50.2406L10.5388 50.0331C10.3706 49.7418 10.2881 49.4643 10.291 49.2004C10.3013 48.9324 10.3538 48.6448 10.4483 48.3378C10.5325 48.0465 10.6278 47.7827 10.7342 47.5466C10.8405 47.3104 10.9099 47.0859 10.9424 46.873C10.9748 46.6602 10.9342 46.4554 10.8207 46.2588C10.6568 45.9749 10.4393 45.8335 10.1681 45.8347C9.90008 45.8244 9.53305 45.9538 9.06706 46.2228C8.76126 46.3994 8.48221 46.6139 8.22993 46.8664C7.97344 47.1115 7.77325 47.3533 7.62936 47.5917L6.7781 46.1173C6.97184 45.8307 7.22761 45.5422 7.54542 45.252C7.87052 44.9575 8.2515 44.6841 8.68836 44.4319C9.53297 43.9443 10.2845 43.7579 10.9431 43.8728C11.5974 43.9804 12.1095 44.3546 12.4795 44.9954C12.7149 45.4031 12.8224 45.7827 12.8021 46.1343C12.7776 46.4785 12.6808 46.8742 12.5117 47.3213C12.3726 47.7025 12.2604 48.0294 12.1751 48.302C12.0855 48.5672 12.1206 48.8382 12.2804 49.1149L12.3624 49.2569L10.6586 50.2406ZM11.6982 52.2178L10.9668 50.9509L12.8125 49.8853L13.544 51.1522L11.6982 52.2178Z", fill: "#7A6EAA" }),
                React__default.createElement("path", { d: "M8.75569 24.6564L8.59567 24.3793C8.37108 23.9903 8.26079 23.6196 8.26479 23.2672C8.27852 22.9091 8.34854 22.5251 8.47485 22.115C8.58734 21.7259 8.71461 21.3737 8.85667 21.0582C8.99873 20.7428 9.09141 20.4429 9.13471 20.1586C9.17802 19.8743 9.12387 19.6008 8.97227 19.3382C8.7533 18.959 8.46275 18.7701 8.10061 18.7717C7.74259 18.758 7.25237 18.9308 6.62997 19.2902C6.22152 19.526 5.84882 19.8125 5.51186 20.1497C5.16928 20.4771 4.90189 20.8001 4.70971 21.1185L3.57272 19.1492C3.83148 18.7664 4.17311 18.3811 4.59759 17.9934C5.03181 17.6001 5.54066 17.235 6.12416 16.8981C7.25226 16.2468 8.2561 15.9979 9.13567 16.1514C10.0096 16.2951 10.6937 16.7949 11.1878 17.6507C11.5022 18.1953 11.6458 18.7023 11.6187 19.1718C11.5859 19.6316 11.4566 20.1601 11.2308 20.7573C11.0451 21.2665 10.8952 21.7031 10.7812 22.0671C10.6616 22.4215 10.7085 22.7834 10.9218 23.1529L11.0313 23.3426L8.75569 24.6564ZM10.1443 27.2974L9.16732 25.6052L11.6326 24.1819L12.6096 25.874L10.1443 27.2974Z", fill: "#7A6EAA" }))),
        React__default.createElement("defs", null,
            React__default.createElement("clipPath", { id: "clip_present_0" },
                React__default.createElement("rect", { width: "64", height: "64", fill: "white" })))));
};

var Icon$X = function (props) {
    var id = uniqueId("svg");
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default.createElement("g", { clipPath: "url(#" + id + ")" },
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M43.1934 10.6907C44.0412 9.92381 45.4 10.3246 45.6959 11.4288C45.9144 12.2444 45.4304 13.0827 44.6148 13.3012L38.4955 14.9409L43.1934 10.6907ZM49.112 10.5134C48.1317 6.85481 43.6295 5.52698 40.8207 8.06806L31.0187 16.9358C29.5584 18.2569 30.8604 20.6481 32.7625 20.1385L45.5302 16.7174C48.2324 15.9933 49.8361 13.2157 49.112 10.5134Z", fill: "#7645D9" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.1886 8.0841C29.8078 6.90274 28.3125 6.54189 27.4349 7.41956C26.7866 8.06782 26.7866 9.11885 27.4349 9.7671L32.2987 14.6309L30.1886 8.0841ZM24.7196 4.70427C27.6276 1.79628 32.5818 2.99187 33.8434 6.90609L38.2461 20.5658C38.902 22.6007 36.3796 24.1424 34.8677 22.6306L24.7196 12.4824C22.5717 10.3345 22.5717 6.85214 24.7196 4.70427Z", fill: "#7645D9" }),
            React__default.createElement("path", { opacity: "0.6", d: "M7.27624 34.0431C7.01094 35.0539 5.57594 35.054 5.31064 34.0431L4.51492 31.0112C4.42182 30.6565 4.14478 30.3794 3.79005 30.2863L0.758148 29.4906C-0.252715 29.2253 -0.252717 27.7903 0.758146 27.525L3.79005 26.7293C4.14478 26.6362 4.42182 26.3591 4.51492 26.0044L5.31064 22.9725C5.57594 21.9616 7.01094 21.9616 7.27624 22.9725L8.07196 26.0044C8.16506 26.3591 8.44209 26.6362 8.79682 26.7293L11.8287 27.525C12.8396 27.7903 12.8396 29.2253 11.8287 29.4906L8.79683 30.2863C8.44209 30.3794 8.16506 30.6565 8.07196 31.0112L7.27624 34.0431Z", fill: "#53DEE9" }),
            React__default.createElement("path", { d: "M9.62029 11.6637C9.62344 12.2763 8.81089 12.494 8.5073 11.9619L7.59673 10.3659C7.4902 10.1791 7.2913 10.0643 7.07631 10.0654L5.23882 10.0748C4.62619 10.078 4.40847 9.26545 4.9406 8.96185L6.53663 8.05128C6.72337 7.94475 6.8382 7.74585 6.8371 7.53087L6.82766 5.69337C6.82451 5.08074 7.63705 4.86302 7.94064 5.39515L8.85121 6.99119C8.95775 7.17792 9.15664 7.29275 9.37163 7.29165L11.2091 7.28221C11.8218 7.27906 12.0395 8.0916 11.5073 8.39519L9.91131 9.30576C9.72458 9.4123 9.60974 9.6112 9.61085 9.82618L9.62029 11.6637Z", fill: "#53DEE9" }),
            React__default.createElement("path", { opacity: "0.8", d: "M53.8712 15.7857C53.2964 15.6348 53.2964 14.8189 53.8712 14.6681L56.9643 13.8563C57.166 13.8033 57.3235 13.6458 57.3764 13.4441L58.1882 10.351C58.3391 9.77623 59.155 9.77623 59.3058 10.351L60.1176 13.4441C60.1706 13.6458 60.3281 13.8033 60.5298 13.8563L63.6229 14.6681C64.1977 14.8189 64.1977 15.6348 63.6229 15.7857L60.5298 16.5975C60.3281 16.6504 60.1706 16.8079 60.1176 17.0096L59.3058 20.1027C59.155 20.6775 58.3391 20.6775 58.1882 20.1027L57.3764 17.0096C57.3235 16.8079 57.166 16.6504 56.9643 16.5975L53.8712 15.7857Z", fill: "#53DEE9" }),
            React__default.createElement("path", { d: "M51.0823 29.9055C50.3505 27.1742 47.543 25.5533 44.8116 26.2851L17.6112 33.5735C14.8798 34.3053 13.2589 37.1128 13.9908 39.8441L18.546 56.8444C19.2778 59.5758 22.0853 61.1967 24.8167 60.4648L52.0171 53.1765C54.7485 52.4446 56.3694 49.6371 55.6375 46.9058L51.0823 29.9055Z", fill: "url(#paint0_linear_won)" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.2737 36.0462L45.4742 28.7579C46.8399 28.392 48.2436 29.2024 48.6095 30.5681L53.1648 47.5684C53.5307 48.934 52.7202 50.3378 51.3546 50.7037L24.1541 57.9921C22.7884 58.358 21.3847 57.5475 21.0187 56.1819L16.4635 39.1816C16.0976 37.8159 16.9081 36.4122 18.2737 36.0462ZM44.8116 26.2851C47.543 25.5533 50.3505 27.1742 51.0823 29.9055L55.6375 46.9058C56.3694 49.6371 54.7485 52.4446 52.0171 53.1765L24.8167 60.4648C22.0853 61.1967 19.2778 59.5758 18.546 56.8444L13.9908 39.8441C13.2589 37.1128 14.8798 34.3053 17.6112 33.5735L44.8116 26.2851Z", fill: "#7645D9" }),
            React__default.createElement("path", { d: "M35.2297 28.8525L27.1932 31.0059L34.3987 57.8973L42.4352 55.7439L35.2297 28.8525Z", fill: "#7645D9" }),
            React__default.createElement("path", { d: "M54.5173 42.4023L52.3639 34.3658L15.1113 44.3476L17.2647 52.3841L54.5173 42.4023Z", fill: "#7645D9" }),
            React__default.createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9264 46.3239L31.8613 48.485L32.1926 49.7213L40.2577 47.5603L39.9264 46.3239ZM29.7019 40.4262L37.767 38.2651L37.4358 37.0287L29.3707 39.1898L29.7019 40.4262Z", fill: "#7645D9" })),
            React__default.createElement("path", { d: "M54.8306 24.9448C55.3795 22.8962 54.1638 20.7906 52.1153 20.2417L17.4965 10.9657C15.448 10.4168 13.3424 11.6324 12.7935 13.681L11.8824 17.081C11.3335 19.1295 12.5492 21.2351 14.5977 21.784L49.2165 31.0601C51.265 31.609 53.3706 30.3933 53.9195 28.3448L54.8306 24.9448Z", fill: "url(#paint1_linear_won)" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8339 13.4384L51.4527 22.7145C52.1355 22.8975 52.5408 23.5993 52.3578 24.2822L51.4468 27.6822C51.2638 28.3651 50.5619 28.7703 49.8791 28.5873L15.2603 19.3113C14.5775 19.1283 14.1722 18.4264 14.3552 17.7436L15.2662 14.3435C15.4492 13.6607 16.1511 13.2555 16.8339 13.4384ZM52.1153 20.2417C54.1638 20.7906 55.3795 22.8962 54.8306 24.9448L53.9195 28.3448C53.3706 30.3933 51.265 31.609 49.2165 31.0601L14.5977 21.784C12.5492 21.2351 11.3335 19.1295 11.8824 17.081L12.7935 13.681C13.3424 11.6324 15.448 10.4168 17.4965 10.9657L52.1153 20.2417Z", fill: "#7645D9" }),
            React__default.createElement("path", { d: "M38.8242 16.6804L30.7877 14.527L27.8889 25.3454L35.9254 27.4988L38.8242 16.6804Z", fill: "#7645D9" }),
            React__default.createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M38.4257 18.0799L30.4256 15.8399L30.7455 14.3999L38.8813 16.6573L38.4257 18.0799Z", fill: "#7645D9" }))),
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "paint0_linear_won", x1: "31.2114", y1: "29.9293", x2: "38.4169", y2: "56.8207", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { stopColor: "#53DEE9" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default.createElement("linearGradient", { id: "paint1_linear_won", x1: "34.8059", y1: "15.6037", x2: "31.9071", y2: "26.4221", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { stopColor: "#53DEE9" }),
                React__default.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default.createElement("clipPath", { id: id },
                React__default.createElement("rect", { width: "64", height: "64", fill: "white" })))));
};

var Icon$W = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default.createElement("g", { opacity: "0.5" },
            React__default.createElement("g", { opacity: "0.7" },
                React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.4056 18.7282C25.9843 18.048 25.022 18.0595 24.6402 18.7492C24.3536 19.267 24.543 19.9348 25.0585 20.2242L28.5292 22.1722L28.3615 21.8862L26.4056 18.7282ZM21.3507 16.7681C23.1299 13.5535 27.6151 13.5002 29.5786 16.6703L31.5602 19.8696L35.5898 26.7422L29.3273 26.7422C28.996 26.7422 28.6685 26.6559 28.3751 26.4912L23.3004 23.6429C20.8974 22.2942 20.0147 19.1817 21.3507 16.7681Z", fill: "#BDC2C4" }),
                React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M38.1027 18.7282C38.524 18.048 39.4863 18.0595 39.8681 18.7492C40.1547 19.267 39.9653 19.9348 39.4498 20.2242L35.9791 22.1722L36.1468 21.8862L38.1027 18.7282ZM43.1576 16.7681C41.3784 13.5535 36.8932 13.5002 34.9297 16.6703L32.9481 19.8696L28.9185 26.7422L35.181 26.7422C35.5123 26.7422 35.8398 26.6559 36.1332 26.4912L41.2079 23.6429C43.6109 22.2942 44.4936 19.1817 43.1576 16.7681Z", fill: "#BDC2C4" }),
                React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.0715 34.3107L45.3455 34.3107L45.3455 44.3815C45.3455 45.7953 44.1994 46.9415 42.7855 46.9415L21.6315 46.9415C20.2176 46.9415 19.0715 45.7953 19.0715 44.3815L19.0715 34.3107ZM47.9055 31.7507L47.9055 44.3815C47.9055 47.2092 45.6132 49.5015 42.7855 49.5015L21.6315 49.5015C18.8038 49.5015 16.5115 47.2092 16.5115 44.3815L16.5115 31.7507L47.9055 31.7507Z", fill: "#BDC2C4" }),
                React__default.createElement("path", { d: "M34.8555 33.9338L29.6231 33.9338L29.6231 49.4886L34.8555 49.4886L34.8555 33.9338Z", fill: "#BDC2C4" }),
                React__default.createElement("path", { d: "M16.5422 36.9358L16.5422 42.3936L47.9363 42.3936L47.9363 36.9358L16.5422 36.9358Z", fill: "#BDC2C4" }),
                React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.2894 26.8808L46.1893 26.8808C46.8962 26.8808 47.4693 27.4539 47.4693 28.1608L47.4693 30.032C47.4693 30.7389 46.8962 31.312 46.1893 31.312L18.2894 31.312C17.5825 31.312 17.0094 30.7389 17.0094 30.032L17.0094 28.1608C17.0094 27.4539 17.5825 26.8808 18.2894 26.8808ZM46.1893 24.3208C48.3101 24.3208 50.0293 26.04 50.0293 28.1608L50.0293 30.032C50.0293 32.1528 48.3101 33.872 46.1893 33.872L18.2894 33.872C16.1686 33.872 14.4494 32.1528 14.4494 30.032L14.4494 28.1608C14.4494 26.04 16.1686 24.3208 18.2894 24.3208L46.1893 24.3208Z", fill: "#BDC2C4" }),
                React__default.createElement("path", { d: "M34.8555 24.3828L29.6231 24.3828L29.6231 33.934L34.8555 33.934L34.8555 24.3828Z", fill: "#BDC2C4" })),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M51.8824 12.0828C51.4644 11.6649 51.0366 11.2628 50.5996 10.8766C39.5466 1.1084 22.6552 1.51047 12.0828 12.0828C1.51047 22.6552 1.1084 39.5466 10.8766 50.5996C11.2628 51.0366 11.6649 51.4644 12.0828 51.8824C12.5008 52.3004 12.9287 52.7025 13.3656 53.0886C24.4186 62.8569 41.31 62.4548 51.8824 51.8824C62.4548 41.31 62.8569 24.4186 53.0886 13.3656C52.7025 12.9287 52.3004 12.5008 51.8824 12.0828ZM48.1051 13.3711C38.4321 4.97437 23.7691 5.37461 14.5719 14.5719C5.37461 23.7691 4.97437 38.4321 13.3711 48.1051L48.1051 13.3711ZM15.8602 50.5941L50.5941 15.8602C58.9909 25.5331 58.5907 40.1961 49.3934 49.3934C40.1961 58.5907 25.5331 58.9909 15.8602 50.5941Z", fill: "#BDC2C4" }))));
};

var Icon$V = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M12.09 13.412c-.448.447-1.408.607-2.09.607-.682 0-1.642-.16-2.09-.607a.27.27 0 00-.383 0 .27.27 0 000 .383c.714.704 2.068.757 2.473.757.405 0 1.76-.053 2.473-.767a.27.27 0 000-.384.28.28 0 00-.383.01zM8.753 11.034c0-.576-.47-1.045-1.045-1.045-.576 0-1.045.47-1.045 1.045 0 .576.47 1.045 1.045 1.045.576 0 1.045-.47 1.045-1.045z" }),
        React.createElement("path", { d: "M10 0C4.478 0 0 4.478 0 10s4.478 10 10 10 10-4.467 10-10c-.01-5.522-4.478-10-10-10zm5.8 11.333c.02.138.032.287.032.437 0 2.25-2.612 4.062-5.832 4.062-3.22 0-5.832-1.813-5.832-4.062 0-.15.011-.299.032-.437A1.447 1.447 0 013.337 10 1.463 1.463 0 015.81 8.945c1.013-.736 2.41-1.194 3.966-1.237 0-.021.736-3.486.736-3.486 0-.064.042-.128.096-.16a.263.263 0 01.202-.043l2.42.523c.17-.342.523-.587.928-.587A1.04 1.04 0 0115.203 5a1.04 1.04 0 01-1.045 1.045 1.034 1.034 0 01-1.034-.992l-2.175-.469-.661 3.124c1.535.053 2.91.522 3.902 1.237a1.454 1.454 0 012.473 1.044 1.48 1.48 0 01-.863 1.344z" }),
        React.createElement("path", { d: "M12.292 10c-.576 0-1.045.47-1.045 1.045s.47 1.045 1.045 1.045c.576 0 1.045-.47 1.045-1.045A1.06 1.06 0 0012.292 10z" })));
};

var Icon$U = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M17.65 6.35C16.02 4.72 13.71 3.78 11.17 4.04C7.50002 4.41 4.48002 7.39 4.07002 11.06C3.52002 15.91 7.27002 20 12 20C15.19 20 17.93 18.13 19.21 15.44C19.53 14.77 19.05 14 18.31 14C17.94 14 17.59 14.2 17.43 14.53C16.3 16.96 13.59 18.5 10.63 17.84C8.41002 17.35 6.62002 15.54 6.15002 13.32C5.31002 9.44 8.26002 6 12 6C13.66 6 15.14 6.69 16.22 7.78L14.71 9.29C14.08 9.92 14.52 11 15.41 11H19C19.55 11 20 10.55 20 10V6.41C20 5.52 18.92 5.07 18.29 5.7L17.65 6.35Z" })));
};

var Icon$T = function (props) { return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default.createElement("path", { d: "M7.20816 9.75C7.724 9.75 8.32379 9.92663 8.90251 10.1849C9.28077 10.3537 9.72425 10.1839 9.89305 9.80565C10.0619 9.42739 9.89206 8.98391 9.5138 8.81511C8.84819 8.51806 8.02565 8.25 7.20816 8.25C6.41131 8.25 5.60257 8.34774 4.86317 8.48493C4.45591 8.5605 4.18702 8.95191 4.26258 9.35917C4.33815 9.76644 4.72956 10.0353 5.13682 9.95976C5.81429 9.83406 6.528 9.75 7.20816 9.75Z" }),
    React__default.createElement("path", { d: "M7.20816 12.75C7.724 12.75 8.32379 12.9266 8.90251 13.1849C9.28077 13.3537 9.72425 13.1839 9.89305 12.8056C10.0619 12.4274 9.89206 11.9839 9.5138 11.8151C8.84819 11.5181 8.02565 11.25 7.20816 11.25C6.41131 11.25 5.60257 11.3477 4.86317 11.4849C4.45591 11.5605 4.18702 11.9519 4.26258 12.3592C4.33815 12.7664 4.72956 13.0353 5.13682 12.9598C5.81429 12.8341 6.528 12.75 7.20816 12.75Z" }),
    React__default.createElement("path", { d: "M7.20816 15.75C7.724 15.75 8.32379 15.9266 8.90251 16.1849C9.28077 16.3537 9.72425 16.1839 9.89305 15.8056C10.0619 15.4274 9.89206 14.9839 9.5138 14.8151C8.84819 14.5181 8.02565 14.25 7.20816 14.25C6.41131 14.25 5.60257 14.3477 4.86317 14.4849C4.45591 14.5605 4.18702 14.9519 4.26258 15.3592C4.33815 15.7664 4.72956 16.0353 5.13682 15.9598C5.81429 15.8341 6.528 15.75 7.20816 15.75Z" }),
    React__default.createElement("path", { d: "M15.3057 10.1849C15.8844 9.92663 16.4842 9.75 17 9.75C17.6802 9.75 18.3939 9.83406 19.0713 9.95976C19.4786 10.0353 19.87 9.76644 19.9456 9.35917C20.0211 8.95191 19.7523 8.5605 19.345 8.48493C18.6056 8.34774 17.7969 8.25 17 8.25C16.1825 8.25 15.36 8.51806 14.6944 8.81511C14.3161 8.98391 14.1463 9.42739 14.3151 9.80565C14.4839 10.1839 14.9274 10.3537 15.3057 10.1849Z" }),
    React__default.createElement("path", { d: "M15.3057 13.1849C15.8844 12.9266 16.4842 12.75 17 12.75C17.6802 12.75 18.3939 12.8341 19.0713 12.9598C19.4786 13.0353 19.87 12.7664 19.9456 12.3592C20.0211 11.9519 19.7523 11.5605 19.345 11.4849C18.6056 11.3477 17.7969 11.25 17 11.25C16.1825 11.25 15.36 11.5181 14.6944 11.8151C14.3161 11.9839 14.1463 12.4274 14.3151 12.8056C14.4839 13.1839 14.9274 13.3537 15.3057 13.1849Z" }),
    React__default.createElement("path", { d: "M15.3057 16.1849C15.8844 15.9266 16.4842 15.75 17 15.75C17.6802 15.75 18.3939 15.8341 19.0713 15.9598C19.4786 16.0353 19.87 15.7664 19.9456 15.3592C20.0211 14.9519 19.7523 14.5605 19.345 14.4849C18.6056 14.3477 17.7969 14.25 17 14.25C16.1825 14.25 15.36 14.5181 14.6944 14.8151C14.3161 14.9839 14.1463 15.4274 14.3151 15.8056C14.4839 16.1839 14.9274 16.3537 15.3057 16.1849Z" }),
    React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.85855C10.8901 5.28809 8.91267 4.5 7 4.5C4.82602 4.5 2.52707 5.21214 1.62861 5.57152C1.24895 5.72339 1 6.0911 1 6.5V19.5C1 19.7996 1.13432 20.0834 1.36601 20.2733C1.5977 20.4633 1.90234 20.5393 2.19612 20.4806C2.98922 20.322 5.08674 20 7 20C8.73758 20 10.7177 20.8973 11.4837 21.3564C11.4915 21.3611 11.4993 21.3657 11.5073 21.3702C11.8124 21.543 12.1865 21.5436 12.4927 21.3702C12.5007 21.3657 12.5085 21.3611 12.5163 21.3564C13.2823 20.8973 15.2624 20 17 20C18.9133 20 21.0108 20.322 21.8039 20.4806C22.0977 20.5393 22.4023 20.4633 22.634 20.2733C22.8657 20.0834 23 19.7996 23 19.5V6.5C23 6.0911 22.751 5.72339 22.3714 5.57152C21.4729 5.21214 19.174 4.5 17 4.5C15.0873 4.5 13.1099 5.28809 12 5.85855ZM7 18C8.42616 18 9.88831 18.4382 11 18.8976V7.59336C10.0573 7.12035 8.4448 6.5 7 6.5C5.55289 6.5 3.97492 6.89014 3 7.20499V18.318C4.08257 18.1605 5.576 18 7 18ZM13 7.59336V18.8976C14.1117 18.4382 15.5738 18 17 18C18.424 18 19.9174 18.1605 21 18.318V7.20499C20.0251 6.89014 18.4471 6.5 17 6.5C15.5552 6.5 13.9427 7.12035 13 7.59336Z" }))); };

var Icon$S = function (props) { return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17 20C15.2624 20 13.2823 20.8973 12.5163 21.3564C12.512 21.359 12.5076 21.3616 12.5031 21.3642C12.4997 21.3662 12.4962 21.3682 12.4927 21.3702C12.1865 21.5436 11.8124 21.543 11.5073 21.3702C11.4993 21.3657 11.4915 21.3611 11.4837 21.3564C10.7177 20.8973 8.73758 20 7 20C5.08674 20 2.98922 20.322 2.19612 20.4806C1.90234 20.5393 1.5977 20.4633 1.36601 20.2733C1.13432 20.0834 1 19.7996 1 19.5V6.5C1 6.0911 1.24895 5.72339 1.62861 5.57152C2.52707 5.21214 4.82602 4.5 7 4.5C8.91267 4.5 10.8901 5.28809 12 5.85855C13.1099 5.28809 15.0873 4.5 17 4.5C19.174 4.5 21.4729 5.21214 22.3714 5.57152C22.751 5.72339 23 6.0911 23 6.5V19.5C23 19.7996 22.8657 20.0834 22.634 20.2733C22.4023 20.4633 22.0977 20.5393 21.8039 20.4806C21.0108 20.322 18.9133 20 17 20ZM9.76044 10.2492C8.91215 9.96324 7.98498 9.75 7.1484 9.75C6.13948 9.75 5.09021 9.84399 4.10409 9.98219C3.69389 10.0397 3.31475 9.75375 3.25726 9.34354C3.19977 8.93334 3.4857 8.5542 3.89591 8.49671C4.92996 8.35179 6.05141 8.25 7.1484 8.25C8.21288 8.25 9.31368 8.51566 10.2396 8.82775C10.6321 8.96006 10.843 9.38551 10.7107 9.77802C10.5784 10.1705 10.153 10.3815 9.76044 10.2492ZM9.76044 13.4799C8.91215 13.194 7.98498 12.9808 7.1484 12.9808C6.13948 12.9808 5.09021 13.0748 4.10409 13.213C3.69389 13.2705 3.31475 12.9845 3.25726 12.5743C3.19977 12.1641 3.4857 11.785 3.89591 11.7275C4.92996 11.5826 6.05141 11.4808 7.1484 11.4808C8.21288 11.4808 9.31368 11.7464 10.2396 12.0585C10.6321 12.1908 10.843 12.6163 10.7107 13.0088C10.5784 13.4013 10.153 13.6123 9.76044 13.4799ZM7.1484 16.2115C7.98498 16.2115 8.91215 16.4248 9.76044 16.7107C10.153 16.843 10.5784 16.6321 10.7107 16.2396C10.843 15.8471 10.6321 15.4216 10.2396 15.2893C9.31368 14.9772 8.21288 14.7115 7.1484 14.7115C6.05141 14.7115 4.92996 14.8133 3.89591 14.9583C3.4857 15.0157 3.19977 15.3949 3.25726 15.8051C3.31475 16.2153 3.69389 16.5012 4.10409 16.4437C5.09021 16.3055 6.13948 16.2115 7.1484 16.2115ZM15.4837 8.4949C14.8158 8.4949 14.312 9.10151 14.4346 9.75811L14.7247 11.3118C13.7418 11.7454 13 12.4942 13 13.4337V14.0051C13 14.7818 13.5138 15.4321 14.2322 15.8711C14.9562 16.3135 15.9355 16.5765 17 16.5765C18.0645 16.5765 19.0438 16.3135 19.7678 15.8711C20.4862 15.4321 21 14.7818 21 14.0051V13.4337C21 12.4892 20.2505 11.7375 19.2592 11.3048L19.548 9.75812C19.6707 9.10151 19.1668 8.4949 18.4989 8.4949C17.9094 8.4949 17.4316 8.97274 17.4316 9.56219V10.8768C17.2898 10.8672 17.1458 10.8623 17 10.8623C16.8483 10.8623 16.6985 10.8676 16.551 10.878V9.56219C16.551 8.97274 16.0732 8.4949 15.4837 8.4949Z" }))); };

var Icon$R = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 40 40" }, props),
        React__default.createElement("path", { d: "M0 10C0 4.47715 4.47715 0 10 0L30 0C35.5228 0 40 4.47715 40 10V30C40 35.5228 35.5228 40 30 40H10C4.47715 40 0 35.5228 0 30L0 10Z", fill: "white" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30 0.416667L10 0.416667C4.70727 0.416667 0.416667 4.70727 0.416667 10L0.416667 30C0.416667 35.2927 4.70727 39.5833 10 39.5833H30C35.2927 39.5833 39.5833 35.2927 39.5833 30V10C39.5833 4.70727 35.2927 0.416667 30 0.416667ZM10 0C4.47715 0 0 4.47715 0 10L0 30C0 35.5228 4.47715 40 10 40H30C35.5228 40 40 35.5228 40 30V10C40 4.47715 35.5228 0 30 0L10 0Z", fill: "#E7E3EB" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.011 17.9331H23.3104V21.0158H20.011V33.6838L19.1439 33.3587C18.7466 33.2142 18.0963 32.9613 17.3015 32.6L16.9283 32.4314V8.09489L20.2157 7.08337L23.3225 8.03468V11.3703L20.2157 10.4069L20.011 10.4671V17.9331ZM12.8823 21.016H8.67969V10.6601L15.965 8.40824V11.7197L11.7624 13.0203V17.9333H15.953V32.1788L15.0257 31.6972C12.1357 30.204 8.67969 27.6872 8.67969 24.1831V22.5333H11.7624V24.1831C11.7624 24.9056 12.1357 25.6762 12.8823 26.459V21.016ZM24.2498 8.33581V27.8677C26.3451 26.796 27.3325 25.5075 27.3325 25.5075V21.0159H31.7157V10.6358L24.2498 8.33581ZM28.633 17.9332H27.3325V12.5986L28.633 12.996V17.9332ZM21.3597 30.3243C24.9843 28.9636 28.633 26.6034 28.633 24.3997V22.5212H31.7157V24.3997C31.7157 29.6379 24.1173 32.6484 21.7932 33.4432L20.9503 33.7322V30.4809L21.3597 30.3243Z", fill: "black" })));
};

var Icon$Q = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$P = function (props) { return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default.createElement("path", { d: "M21.9 9.78661L20.85 5.41661C20.63 4.51661 19.85 3.89661 18.94 3.89661H16.73H14.72H13H11H9.27999H7.25999H5.04999C4.14999 3.89661 3.35999 4.52661 3.14999 5.41661L2.09999 9.78661C1.85999 10.8066 2.07999 11.8466 2.71999 12.6666C2.79999 12.7766 2.90999 12.8566 2.99999 12.9566V19.8966C2.99999 20.9966 3.89999 21.8966 4.99999 21.8966H19C20.1 21.8966 21 20.9966 21 19.8966V12.9566C21.09 12.8666 21.2 12.7766 21.28 12.6766C21.92 11.8566 22.15 10.8066 21.9 9.78661ZM7.01999 5.89661L6.43999 10.7566C6.35999 11.4066 5.83999 11.8966 5.22999 11.8966C4.73999 11.8966 4.42999 11.6066 4.29999 11.4266C4.03999 11.0966 3.94999 10.6666 4.04999 10.2566L5.04999 5.89661H7.01999ZM18.91 5.88661L19.96 10.2566C20.06 10.6766 19.97 11.0966 19.71 11.4266C19.57 11.6066 19.27 11.8966 18.77 11.8966C18.16 11.8966 17.63 11.4066 17.56 10.7566L16.98 5.89661L18.91 5.88661ZM15.51 10.4166C15.56 10.8066 15.44 11.1966 15.18 11.4866C14.95 11.7466 14.63 11.8966 14.22 11.8966C13.55 11.8966 13 11.3066 13 10.5866V5.89661H14.96L15.51 10.4166ZM11 10.5866C11 11.3066 10.45 11.8966 9.70999 11.8966C9.36999 11.8966 9.05999 11.7466 8.81999 11.4866C8.56999 11.1966 8.44999 10.8066 8.48999 10.4166L9.03999 5.89661H11V10.5866ZM18 19.8966H5.99999C5.44999 19.8966 4.99999 19.4466 4.99999 18.8966V13.8666C5.07999 13.8766 5.14999 13.8966 5.22999 13.8966C6.09999 13.8966 6.88999 13.5366 7.46999 12.9466C8.06999 13.5466 8.86999 13.8966 9.77999 13.8966C10.65 13.8966 11.43 13.5366 12.01 12.9666C12.6 13.5366 13.4 13.8966 14.3 13.8966C15.14 13.8966 15.94 13.5466 16.54 12.9466C17.12 13.5366 17.91 13.8966 18.78 13.8966C18.86 13.8966 18.93 13.8766 19.01 13.8666V18.8966C19 19.4466 18.55 19.8966 18 19.8966Z" }))); };

var Icon$O = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M18 16.1162C17.24 16.1162 16.56 16.4162 16.04 16.8862L8.91 12.7362C8.96 12.5062 9 12.2762 9 12.0362C9 11.7962 8.96 11.5662 8.91 11.3362L15.96 7.22619C16.5 7.72619 17.21 8.03619 18 8.03619C19.66 8.03619 21 6.69619 21 5.03619C21 3.37619 19.66 2.03619 18 2.03619C16.34 2.03619 15 3.37619 15 5.03619C15 5.27619 15.04 5.50619 15.09 5.73619L8.04 9.84619C7.5 9.34619 6.79 9.03619 6 9.03619C4.34 9.03619 3 10.3762 3 12.0362C3 13.6962 4.34 15.0362 6 15.0362C6.79 15.0362 7.5 14.7262 8.04 14.2262L15.16 18.3862C15.11 18.5962 15.08 18.8162 15.08 19.0362C15.08 20.6462 16.39 21.9562 18 21.9562C19.61 21.9562 20.92 20.6462 20.92 19.0362C20.92 17.4262 19.61 16.1162 18 16.1162Z" })));
};

var Icon$N = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z", fill: "black" })));
};

var Icon$M = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8382 2.20573L16.12 6.82916L21.2222 7.57057C22.9037 7.81489 23.5751 9.88123 22.3584 11.0672L18.6663 14.6661L19.5379 19.7477C19.8251 21.4224 18.0674 22.6995 16.5635 21.9088L11.9998 19.5096L7.43624 21.9088C5.93232 22.6995 4.17457 21.4224 4.4618 19.7477L5.33337 14.6661L1.64134 11.0672C0.424631 9.88125 1.09601 7.8149 2.77747 7.57057L7.87974 6.82916L10.1615 2.20573C10.9135 0.682081 13.0862 0.682068 13.8382 2.20573Z" })));
};

var Icon$L = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.17726 8.2193C9.10443 8.36687 8.96365 8.46916 8.80079 8.49282L3.49187 9.26425C3.08176 9.32385 2.918 9.82783 3.21476 10.1171L7.05633 13.8617C7.17418 13.9766 7.22795 14.1421 7.20013 14.3043L6.29326 19.5917C6.22321 20.0002 6.65192 20.3117 7.01873 20.1188L11.7672 17.6224C11.9128 17.5458 12.0869 17.5458 12.2325 17.6224L16.981 20.1188C17.3478 20.3117 17.7765 20.0002 17.7064 19.5917L16.7996 14.3043C16.7718 14.1421 16.8255 13.9766 16.9434 13.8617L20.7849 10.1171C21.0817 9.82783 20.9179 9.32385 20.5078 9.26425L15.1989 8.49282C15.0361 8.46916 14.8953 8.36687 14.8224 8.2193L12.4482 3.4086C12.2648 3.03698 11.7349 3.03698 11.5515 3.4086L9.17726 8.2193ZM16.2669 6.62701L14.2417 2.52347C13.3247 0.665354 10.675 0.665354 9.75801 2.52347L7.73279 6.62701L3.20427 7.28504C1.15372 7.583 0.334945 10.1029 1.81874 11.5493L5.09561 14.7434L4.32204 19.2537C3.97177 21.2959 6.11535 22.8533 7.94942 21.8891L11.9999 19.7597L16.0503 21.8891C17.8844 22.8533 20.0279 21.2959 19.6777 19.2537L18.9041 14.7434L22.181 11.5493C23.6648 10.1029 22.846 7.583 20.7954 7.28504L16.2669 6.62701Z" })));
};

var Icon$K = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M21.2628 15.8306C21.5556 16.1235 21.5556 16.5983 21.2628 16.8912L18.654 19.5H20.3789C20.7931 19.5 21.1289 19.8358 21.1289 20.25C21.1289 20.6642 20.7931 21 20.3789 21L16.8433 21C16.4291 21 16.0933 20.6642 16.0933 20.25V16.7145C16.0933 16.3002 16.4291 15.9645 16.8433 15.9645C17.2575 15.9645 17.5933 16.3002 17.5933 16.7145V18.4393L20.2021 15.8306C20.495 15.5377 20.9699 15.5377 21.2628 15.8306Z" }),
        React__default.createElement("path", { d: "M2.81293 7.78034C3.10583 8.07323 3.5807 8.07323 3.87359 7.78034L6.48235 5.17158L6.48235 6.89645C6.48235 7.31067 6.81814 7.64645 7.23235 7.64645C7.64656 7.64645 7.98235 7.31067 7.98235 6.89645L7.98235 3.36092C7.98235 3.16201 7.90333 2.97124 7.76268 2.83059C7.62203 2.68994 7.43126 2.61092 7.23235 2.61092L3.69682 2.61092C3.2826 2.61092 2.94682 2.9467 2.94682 3.36092C2.94682 3.77513 3.2826 4.11092 3.69682 4.11092H5.42169L2.81293 6.71968C2.52004 7.01257 2.52004 7.48744 2.81293 7.78034Z" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.46203 20.5622C8.66377 20.5827 8.86846 20.5932 9.07561 20.5932C12.3893 20.5932 15.0756 17.9069 15.0756 14.5932C18.3893 14.5932 21.0756 11.9069 21.0756 8.59315C21.0756 5.69362 19.0189 3.27448 16.2847 2.71504C15.9185 2.64011 15.5402 2.59853 15.153 2.59363C15.1272 2.5933 15.1014 2.59314 15.0755 2.59314C11.7618 2.59314 9.07549 5.27943 9.07549 8.59314C5.76179 8.59314 3.07549 11.2794 3.07549 14.5931C3.07549 17.5962 5.28172 20.0839 8.16175 20.524C8.26107 20.5392 8.36118 20.5519 8.46203 20.5622ZM5.07549 14.5931C5.07549 12.384 6.86636 10.5931 9.07549 10.5931C9.19246 10.5931 9.30806 10.5981 9.42214 10.6079C10.0255 12.3008 11.3678 13.6431 13.0607 14.2465C13.0705 14.3606 13.0755 14.4762 13.0755 14.5931C13.0755 16.8023 11.2846 18.5931 9.07549 18.5931C6.86636 18.5931 5.07549 16.8023 5.07549 14.5931ZM11.0755 8.59314C11.0755 6.384 12.8664 4.59314 15.0755 4.59314C17.2846 4.59314 19.0755 6.384 19.0755 8.59314C19.0755 10.8023 17.2846 12.5931 15.0755 12.5931C12.8664 12.5931 11.0755 10.8023 11.0755 8.59314Z" })));
};

var Icon$J = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M1.87 6.163a.75.75 0 01-1.06-1.06l2.608-2.61H1.694a.75.75 0 110-1.5h3.535a.75.75 0 01.75.75V5.28a.75.75 0 11-1.5 0V3.554L1.87 6.164zM13.072 1.976a5 5 0 01.421 9.983A6.505 6.505 0 008.09 6.555a5 5 0 014.982-4.579z" }),
        React.createElement("path", { d: "M12.072 12.976a5 5 0 10-10 0 5 5 0 0010 0zM19.26 14.213a.75.75 0 010 1.061l-2.61 2.609h1.726a.75.75 0 010 1.5H14.84a.75.75 0 01-.75-.75v-3.536a.75.75 0 011.5 0v1.725l2.609-2.609a.75.75 0 011.06 0z" })));
};

var Icon$I = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default.createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$H = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$G = function (props) {
    var id = uniqueId("svg");
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default.createElement("g", { clipPath: "url(#" + id + ")" },
            React__default.createElement("path", { d: "M15.9617 4.03476C16.5597 2.82143 15.6818 1.40061 14.2254 1.22477C13.0389 1.08149 11.9708 1.84428 11.8399 2.9285L11.3896 6.65764C11.2976 7.41951 11.899 8.11875 12.7328 8.21943C13.3889 8.29864 14.0166 7.98162 14.286 7.435L15.9617 4.03476Z", fill: "#1FC7D4" }),
            React__default.createElement("path", { d: "M6.27612 5.16903C5.36287 4.17118 5.80868 2.56162 7.15782 1.98574C8.25706 1.51653 9.49573 1.95041 9.92446 2.95482L11.3991 6.40949C11.7004 7.11529 11.3184 7.95473 10.546 8.28444C9.93817 8.54388 9.24684 8.41494 8.83541 7.9654L6.27612 5.16903Z", fill: "#1FC7D4" }),
            React__default.createElement("path", { d: "M17.0349 9.11691C17.3916 11.6186 15.2219 13.6784 12.2437 14.1031C9.26546 14.5278 6.60649 13.1564 6.24978 10.6548C5.89307 8.15311 8.06278 6.09324 11.041 5.66857C14.0192 5.24391 16.6782 6.61525 17.0349 9.11691Z", fill: "#1FC7D4" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.53552 12.9725C8.66378 13.937 10.392 14.3672 12.2437 14.1032C14.913 13.7225 16.9328 12.0284 17.0663 9.87986C16.4991 11.4567 14.8084 12.7917 12.6007 13.3832C10.6865 13.8961 8.82955 13.7307 7.53552 12.9725Z", fill: "#0098A1" }),
            React__default.createElement("path", { d: "M11.1696 9.94964C11.3325 10.6295 11.0911 10.9601 10.717 11.0497C10.343 11.1393 9.97795 10.9541 9.81504 10.2742C9.65212 9.5943 9.89356 9.26377 10.2676 9.17414C10.6417 9.08451 11.0067 9.26973 11.1696 9.94964Z", fill: "#017178" }),
            React__default.createElement("path", { d: "M14.4407 9.58045C14.4649 10.2792 14.1625 10.555 13.7781 10.5684C13.3937 10.5817 13.0729 10.3275 13.0486 9.62879C13.0243 8.93005 13.3268 8.65422 13.7112 8.64087C14.0956 8.62753 14.4164 8.88172 14.4407 9.58045Z", fill: "#017178" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.3337 10.8946C12.1996 10.9121 12.1051 11.0349 12.1226 11.169C12.1855 11.6513 12.654 11.9486 13.1254 11.8872C13.3584 11.8568 13.563 11.7451 13.7062 11.5832C13.7958 11.4819 13.7863 11.3272 13.685 11.2376C13.5838 11.148 13.429 11.1575 13.3395 11.2588C13.2753 11.3313 13.1788 11.3864 13.0621 11.4016C12.8142 11.4339 12.6305 11.2773 12.6082 11.1057C12.5907 10.9716 12.4678 10.8771 12.3337 10.8946Z", fill: "#017178" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.3339 10.8945C12.1998 10.9119 12.1053 11.0348 12.1228 11.1689C12.1452 11.3405 12.0078 11.539 11.76 11.5713C11.6411 11.5868 11.5319 11.557 11.4508 11.5014C11.3393 11.425 11.1869 11.4535 11.1104 11.565C11.034 11.6765 11.0625 11.8289 11.174 11.9054C11.3555 12.0297 11.586 12.0878 11.8233 12.0569C12.2947 11.9954 12.6712 11.5878 12.6083 11.1056C12.5908 10.9715 12.468 10.877 12.3339 10.8945Z", fill: "#017178" }),
            React__default.createElement("path", { d: "M9.50991 12.781C9.67816 11.447 8.51926 10.3246 7.21792 10.5612C6.15761 10.7539 5.45717 11.7854 5.65344 12.8651L6.32848 16.5785C6.4664 17.3372 7.1822 17.8424 7.92727 17.7069C8.51353 17.6004 8.9626 17.1204 9.0384 16.5195L9.50991 12.781Z", fill: "#9A6AFF" }),
            React__default.createElement("path", { d: "M4.93123 13.9946C4.62613 12.6768 3.04713 12.1326 1.80838 12.9183C0.799086 13.5584 0.455077 14.825 1.04002 15.7472L3.05191 18.9192C3.46294 19.5673 4.37109 19.7279 5.08032 19.2781C5.63839 18.9241 5.92368 18.2814 5.78623 17.6877L4.93123 13.9946Z", fill: "#9A6AFF" }),
            React__default.createElement("path", { d: "M12.3621 17.3922C13.4422 19.6768 11.9781 22.2858 9.25833 23.5716C6.53859 24.8574 3.59314 24.333 2.5131 22.0485C1.43306 19.764 2.89716 17.1549 5.6169 15.8691C8.33664 14.5833 11.2821 15.1077 12.3621 17.3922Z", fill: "#9A6AFF" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.5245 20.1686C11.9455 21.2367 10.9163 22.1811 9.58715 22.8094C6.86742 24.0952 3.92196 23.5709 2.84192 21.2863C2.41234 20.3777 2.38525 19.4177 2.67957 18.51C2.0738 19.6275 1.96092 20.8804 2.51314 22.0485C3.59318 24.333 6.53864 24.8574 9.25837 23.5716C10.8963 22.7972 12.0789 21.5429 12.5245 20.1686Z", fill: "#7645D9" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.75939 18.7345C8.86973 18.6564 9.02253 18.6825 9.10068 18.7928C9.45793 19.2972 9.2815 19.9886 8.77528 20.3471C8.66494 20.4253 8.51213 20.3992 8.43398 20.2889C8.35583 20.1785 8.38193 20.0257 8.49227 19.9476C8.8145 19.7193 8.87726 19.3246 8.7011 19.0758C8.62294 18.9655 8.64904 18.8127 8.75939 18.7345Z", fill: "#452A7A" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.75936 18.7345C8.86971 18.6563 9.02251 18.6824 9.10066 18.7928C9.27683 19.0415 9.67007 19.1133 9.9923 18.8851C10.1026 18.807 10.2554 18.8331 10.3336 18.9434C10.4117 19.0537 10.3856 19.2065 10.2753 19.2847C9.76908 19.6432 9.05832 19.5802 8.70107 19.0758C8.62292 18.9654 8.64902 18.8126 8.75936 18.7345Z", fill: "#452A7A" }),
            React__default.createElement("path", { d: "M7.26609 18.6401C7.75355 19.1413 7.7149 19.5488 7.43915 19.8169C7.16341 20.0851 6.755 20.1124 6.26755 19.6112C5.7801 19.11 5.81875 18.7025 6.09449 18.4343C6.37023 18.1662 6.77864 18.1389 7.26609 18.6401Z", fill: "#452A7A" }),
            React__default.createElement("path", { d: "M10.0286 16.8059C10.429 17.3791 10.3252 17.775 10.0099 17.9953C9.69452 18.2156 9.28705 18.1767 8.88668 17.6036C8.48632 17.0304 8.5901 16.6344 8.90543 16.4142C9.22077 16.1939 9.62825 16.2327 10.0286 16.8059Z", fill: "#452A7A" }),
            React__default.createElement("path", { d: "M15.821 11.1076C15.5183 9.7976 16.5573 8.56337 17.876 8.66668C18.9503 8.75086 19.7518 9.70595 19.6661 10.7999L19.3713 14.5627C19.3111 15.3315 18.6502 15.9067 17.8953 15.8475C17.3012 15.801 16.8058 15.3691 16.6694 14.7789L15.821 11.1076Z", fill: "#FFC700" }),
            React__default.createElement("path", { d: "M20.4641 11.4595C20.469 10.121 21.7611 9.16422 23.0195 9.56738C24.0448 9.89586 24.6059 11.0053 24.2727 12.0453L23.1267 15.6224C22.8925 16.3532 22.1187 16.7586 21.3982 16.5277C20.8313 16.3461 20.4482 15.8139 20.4504 15.2108L20.4641 11.4595Z", fill: "#FFC700" }),
            React__default.createElement("path", { d: "M13.6364 16.264C13.1079 18.7351 15.1302 20.9398 18.072 21.569C21.0138 22.1983 23.7611 21.0137 24.2897 18.5427C24.8182 16.0716 22.7959 13.8669 19.854 13.2376C16.9122 12.6084 14.1649 13.793 13.6364 16.264Z", fill: "#FFC700" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.7678 17.3277C18.638 17.2898 18.5021 17.3644 18.4643 17.4942C18.2913 18.0876 18.6839 18.6835 19.2794 18.8571C19.4092 18.8949 19.5451 18.8203 19.583 18.6905C19.6208 18.5607 19.5462 18.4248 19.4164 18.387C19.0373 18.2765 18.8491 17.9238 18.9344 17.6312C18.9722 17.5014 18.8976 17.3655 18.7678 17.3277Z", fill: "#AE5714" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.7679 17.3275C18.6381 17.2897 18.5022 17.3642 18.4643 17.494C18.379 17.7867 18.0308 17.983 17.6517 17.8725C17.5219 17.8347 17.386 17.9092 17.3482 18.039C17.3103 18.1689 17.3849 18.3048 17.5147 18.3426C18.1103 18.5162 18.7615 18.2245 18.9344 17.631C18.9723 17.5012 18.8977 17.3653 18.7679 17.3275Z", fill: "#AE5714" }),
            React__default.createElement("path", { d: "M17.78 16.2187C17.6338 16.9024 17.2734 17.0965 16.8973 17.016C16.5212 16.9356 16.2717 16.6111 16.4179 15.9274C16.5642 15.2437 16.9245 15.0496 17.3007 15.13C17.6768 15.2105 17.9263 15.535 17.78 16.2187Z", fill: "#AE5714" }),
            React__default.createElement("path", { d: "M21.344 17.3356C21.0937 17.9884 20.7077 18.1244 20.3485 17.9867C19.9894 17.849 19.7931 17.4897 20.0434 16.8369C20.2937 16.1841 20.6798 16.0482 21.039 16.1859C21.3981 16.3236 21.5943 16.6828 21.344 17.3356Z", fill: "#AE5714" }),
            React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.9627 18.7486C14.73 19.7089 15.9227 20.4634 17.3569 20.8477C20.2916 21.6341 23.1259 20.5724 23.7898 18.0947C24.0539 17.1092 23.9086 16.1461 23.4531 15.2939C24.2558 16.2986 24.5929 17.5285 24.2534 18.7954C23.5895 21.2731 20.7552 22.3347 17.8205 21.5484C16.0531 21.0748 14.6523 20.0389 13.9627 18.7486Z", fill: "#EB8C00" })),
        React__default.createElement("defs", null,
            React__default.createElement("clipPath", { id: id },
                React__default.createElement("rect", { width: "24", height: "24", fill: "white", transform: "translate(0.5 0.5)" })))));
};

var Icon$F = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M10 0C4.478 0 0 4.478 0 9.99 0 15.511 4.478 20 10 20s10-4.488 10-10.01C20 4.477 15.522 0 10 0zm4.925 6.28c-.064.927-1.78 7.856-1.78 7.856s-.107.406-.48.416a.644.644 0 01-.49-.192c-.395-.33-1.29-.97-2.132-1.556a.953.953 0 01-.107.096c-.192.17-.48.416-.789.714a10.7 10.7 0 00-.373.352l-.01.01a2.214 2.214 0 01-.193.171c-.415.341-.458.053-.458-.096l.224-2.441v-.021l.01-.022c.011-.032.033-.043.033-.043s4.36-3.88 4.477-4.296c.01-.021-.021-.042-.074-.021-.288.096-5.31 3.273-5.864 3.625-.032.02-.128.01-.128.01l-2.441-.8s-.288-.117-.192-.383c.021-.053.053-.107.17-.181.544-.384 10-3.785 10-3.785s.267-.085.427-.032c.074.032.117.064.16.17.01.043.021.128.021.224 0 .054-.01.118-.01.224z" })));
};

var Icon$E = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 18 16" }, props),
        React__default.createElement("path", { d: "M10.0002 7.33L15.0002 14H3.00018L8.00018 7.33V2H10.0002V7.33ZM12.9602 0H5.04018C4.62018 0 4.39018 0.48 4.65018 0.81L6.00018 2.5V6.67L0.200175 14.4C-0.289825 15.06 0.180175 16 1.00018 16H17.0002C17.8202 16 18.2902 15.06 17.8002 14.4L12.0002 6.67V2.5L13.3502 0.81C13.6102 0.48 13.3802 0 12.9602 0Z" })));
};

var Icon$D = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default.createElement("path", { d: "M76.2856 28.6526C77.0883 29.4553 77.1989 30.7184 76.548 31.6485C64.6385 48.6643 49.9116 63.5221 33.0019 75.5817L31.6665 76.5341C30.6872 77.2325 29.3467 77.121 28.4962 76.2705L22.4847 70.259C26.0334 66.5844 25.9945 60.7286 22.3678 57.1019C18.7411 53.4752 12.8853 53.4362 9.21067 56.985L3.68116 51.4555C2.62962 50.4039 2.77462 48.6597 3.98536 47.7962L5.32156 46.8433C21.8225 35.0751 36.1934 20.5765 47.815 3.97204C48.6291 2.80897 50.296 2.66297 51.2998 3.66682L56.9276 9.29459C53.3922 12.97 53.4356 18.8158 57.0578 22.438C60.6799 26.0601 66.5257 26.1035 70.2011 22.5681L76.2856 28.6526Z", fill: "#DBCDF9" }),
        React__default.createElement("path", { d: "M78.9507 30.3151L57.459 57.5291L29.6615 78.5708L24.3156 73.1863L22.3868 70.8482L24.3156 68.0575L24.9915 65.2668L24.6194 62.29L23.5031 59.4993L21.6426 57.2668L19.4101 55.7784L16.9915 55.0342H14.0147L10.8519 56.1505L8.99148 57.8249L4.52637 52.4296L11.7898 51.3463C34.3187 47.9863 55.6053 38.8899 73.6048 24.9307L78.9507 30.3151Z", fill: "#A28BD4" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.7724 70.5193C19.7732 69.7287 20.0885 68.971 20.6487 68.4131L20.6586 68.4032C23.1622 65.8996 23.1622 61.8405 20.6586 59.3369C18.155 56.8333 14.0958 56.8333 11.5922 59.3369L11.5823 59.3468C11.0245 59.907 10.2667 60.2223 9.47617 60.2231C8.68561 60.2239 7.92718 59.9103 7.36817 59.3512L1.57656 53.5596C-0.776282 51.2068 -0.451848 47.304 2.25722 45.372L3.59342 44.419L5.32184 46.8426L3.98564 47.7955C2.7749 48.659 2.6299 50.4032 3.68144 51.4548L9.47304 57.2464L9.48735 57.232C9.49192 57.2275 9.49649 57.2229 9.50106 57.2183C13.1682 53.5659 19.1019 53.5705 22.7635 57.232C26.4247 60.8933 26.4295 66.8263 22.778 70.4936C22.7731 70.4984 22.7683 70.5033 22.7635 70.5081L22.7491 70.5224L28.4965 76.2698C29.347 77.1203 30.6875 77.2318 31.6668 76.5334L33.0022 75.581C49.9119 63.5214 64.6388 48.6636 76.5483 31.6478C77.1992 30.7178 77.0886 29.4546 76.2859 28.6519L70.2487 22.6148C70.2268 22.6371 70.2047 22.6594 70.1825 22.6816C70.1603 22.7038 70.138 22.7259 70.1156 22.7479C66.4445 26.3475 60.5503 26.3254 56.9064 22.6816C53.2625 19.0376 53.2405 13.1434 56.8404 9.47221C56.8623 9.44989 56.8843 9.42764 56.9064 9.40548C56.9286 9.38329 56.9509 9.36124 56.9733 9.33932L51.3001 3.66613C50.2962 2.66229 48.6293 2.80829 47.8153 3.97136C36.1937 20.5758 21.8228 35.0744 5.32184 46.8426L3.59342 44.419C19.8185 32.8476 33.9492 18.5913 45.3766 2.26445C47.252 -0.415092 51.0922 -0.751452 53.4049 1.56125L59.0781 7.23444C59.64 7.79626 59.9539 8.55937 59.95 9.35389C59.9461 10.1484 59.6247 10.9084 59.0574 11.4647C59.042 11.4798 59.0267 11.495 59.0113 11.5104C56.5077 14.014 56.5077 18.0731 59.0113 20.5767C61.5149 23.0803 65.5741 23.0803 68.0777 20.5767C68.0929 20.5615 68.1081 20.5461 68.1233 20.5306C68.6796 19.9633 69.4396 19.6419 70.2341 19.6381C71.0287 19.6342 71.7918 19.9481 72.3536 20.5099L78.3907 26.547C80.2148 28.3711 80.4662 31.2413 78.987 33.3547C66.8832 50.648 51.9161 65.7482 34.7306 78.0046L33.3952 78.9569C31.2319 80.4997 28.2705 80.2536 26.3916 78.3747L20.6442 72.6273C20.0852 72.0683 19.7715 71.3099 19.7724 70.5193Z", fill: "#633001" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9888 14.0672L41.3044 15.3827C41.8856 15.964 41.8856 16.9064 41.3044 17.4876C40.7231 18.0688 39.7808 18.0688 39.1995 17.4876L37.884 16.1721C37.3027 15.5908 37.3027 14.6484 37.884 14.0672C38.4652 13.4859 39.4076 13.4859 39.9888 14.0672Z", fill: "#633001" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.5142 19.5926L46.8298 20.9081C47.411 21.4894 47.411 22.4317 46.8298 23.013C46.2485 23.5942 45.3062 23.5942 44.7249 23.013L43.4094 21.6974C42.8281 21.1162 42.8281 20.1738 43.4094 19.5926C43.9906 19.0113 44.933 19.0113 45.5142 19.5926Z", fill: "#633001" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M52.3542 28.5384C51.773 29.1196 50.8306 29.1196 50.2493 28.5384L48.6707 26.9597C48.0894 26.3785 48.0894 25.4361 48.6707 24.8549C49.2519 24.2736 50.1943 24.2736 50.7755 24.8549L52.3542 26.4335C52.9354 27.0148 52.9354 27.9571 52.3542 28.5384Z", fill: "#633001" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.8796 34.0638C57.2983 34.645 56.356 34.645 55.7747 34.0638L54.1961 32.4851C53.6148 31.9039 53.6148 30.9615 54.1961 30.3802C54.7773 29.799 55.7197 29.799 56.3009 30.3802L57.8796 31.9589C58.4608 32.5401 58.4608 33.4825 57.8796 34.0638Z", fill: "#633001" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M61.8267 35.9051L63.1423 37.2206C63.7235 37.8019 63.7235 38.7442 63.1423 39.3255C62.561 39.9067 61.6187 39.9067 61.0374 39.3255L59.7219 38.0099C59.1406 37.4287 59.1406 36.4863 59.7219 35.9051C60.3031 35.3238 61.2455 35.3238 61.8267 35.9051Z", fill: "#633001" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M67.3521 41.4305L68.6677 42.746C69.2489 43.3273 69.2489 44.2696 68.6677 44.8509C68.0864 45.4321 67.144 45.4321 66.5628 44.8509L65.2472 43.5353C64.666 42.9541 64.666 42.0117 65.2472 41.4305C65.8285 40.8492 66.7709 40.8492 67.3521 41.4305Z", fill: "#633001" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.2915 37.1288C30.6927 35.53 30.6927 32.9378 32.2915 31.3389C34.1033 29.5272 37.1152 29.806 38.5636 31.9196L42.2107 37.2416C45.3939 36.2204 48.7719 36.3559 51.0104 38.5945C53.0227 40.6067 53.3281 43.5721 52.6459 46.3981C51.9561 49.256 50.2117 52.2664 47.6467 54.8314C45.0817 57.3964 42.0713 59.1408 39.2134 59.8306C36.3874 60.5128 33.422 60.2073 31.4098 58.1951C29.1842 55.9696 29.0377 52.6168 30.0388 49.4519L24.694 45.7892C22.5804 44.3408 22.3016 41.3289 24.1134 39.5171C25.7122 37.9183 28.3044 37.9183 29.9032 39.5171L33.6067 43.2206C33.9734 42.7908 34.3625 42.3691 34.7735 41.9582C35.1704 41.5613 35.5772 41.1847 35.9918 40.8291L32.2915 37.1288Z", fill: "#633001" }),
        React__default.createElement("ellipse", { cx: "36.9019", cy: "50.5685", rx: "1.79015", ry: "2.60385", transform: "rotate(-45 36.9019 50.5685)", fill: "#DBCDF9" }),
        React__default.createElement("ellipse", { rx: "1.79015", ry: "2.60385", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 43.5768 43.8947)", fill: "#DBCDF9" })));
};

var Icon$C = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.4144 13.4824L9.36944 5.52736L10.0765 6.23446C10.3694 6.52736 10.8443 6.52736 11.1372 6.23446C11.4301 5.94157 11.4301 5.4667 11.1372 5.1738L10.4301 4.4667L12.7281 2.16869C13.5092 1.38764 14.7755 1.38764 15.5565 2.16869L16.6173 3.22943C16.8125 3.42465 16.8125 3.74115 16.6173 3.93637C15.641 4.91268 15.641 6.49559 16.6173 7.4719C17.5936 8.44821 19.1765 8.44821 20.1528 7.4719C20.348 7.27669 20.6645 7.27669 20.8597 7.4719L21.9205 8.53265C22.7015 9.3137 22.7015 10.58 21.9205 11.3611L19.6224 13.6592L18.9153 12.9521C18.6224 12.6592 18.1475 12.6592 17.8546 12.9521C17.5617 13.245 17.5617 13.7198 17.8546 14.0127L18.5617 14.7198L10.6068 22.6748C9.82574 23.4558 8.55941 23.4558 7.77836 22.6748L6.7177 21.6141C6.52244 21.4189 6.52244 21.1023 6.7177 20.907C7.69401 19.9307 7.69401 18.3478 6.7177 17.3715C5.74139 16.3952 4.15848 16.3952 3.18217 17.3715C2.9869 17.5667 2.67032 17.5667 2.47506 17.3715L1.4144 16.3108C0.633351 15.5298 0.633351 14.2634 1.4144 13.4824ZM13.2584 7.29521C12.9655 7.00232 12.4907 7.00232 12.1978 7.29521C11.9049 7.5881 11.9049 8.06298 12.1978 8.35587L12.9049 9.06298C13.1978 9.35587 13.6727 9.35587 13.9655 9.06298C14.2584 8.77009 14.2584 8.29521 13.9655 8.00232L13.2584 7.29521ZM15.0262 10.1236C15.3191 9.83075 15.794 9.83074 16.0869 10.1236L16.794 10.8307C17.0869 11.1236 17.0869 11.5985 16.794 11.8914C16.5011 12.1843 16.0262 12.1843 15.7333 11.8914L15.0262 11.1843C14.7333 10.8914 14.7333 10.4165 15.0262 10.1236Z" })));
};

var Icon$B = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default.createElement("circle", { cx: "24", cy: "24", r: "24", fill: "url(#paint0_linear_ticketround)" }),
        React__default.createElement("path", { d: "M39.0623 18.9777C39.3983 19.3138 39.4447 19.8426 39.1721 20.232C34.1862 27.3557 28.0207 33.576 20.9413 38.6248L20.3823 39.0235C19.9723 39.3159 19.4111 39.2692 19.055 38.9132L16.5383 36.3964C18.024 34.858 18.0077 32.4065 16.4893 30.8881C14.971 29.3698 12.5194 29.3535 10.981 30.8392L8.66608 28.5242C8.22585 28.084 8.28655 27.3538 8.79343 26.9923L9.35284 26.5933C16.261 21.6665 22.2775 15.5966 27.1429 8.64507C27.4837 8.15815 28.1816 8.09702 28.6019 8.51729L30.958 10.8734C29.4778 12.4121 29.496 14.8595 31.0125 16.3759C32.5289 17.8924 34.9762 17.9105 36.515 16.4304L39.0623 18.9777Z", fill: "#DBCDF9" }),
        React__default.createElement("path", { d: "M40.1776 19.6742L31.18 31.0674L19.5425 39.8766L17.3044 37.6224L16.4969 36.6435L17.3044 35.4752L17.5873 34.3068L17.4316 33.0606L16.9642 31.8923L16.1853 30.9576L15.2507 30.3345L14.2381 30.0229H12.9919L11.6678 30.4903L10.8889 31.1913L9.01953 28.9325L12.0604 28.4789C21.4923 27.0723 30.404 23.264 37.9396 17.4199L40.1776 19.6742Z", fill: "#A28BD4" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.4028 36.5059C15.4031 36.1749 15.5351 35.8577 15.7697 35.6241L15.7738 35.62C16.822 34.5718 16.822 32.8725 15.7738 31.8243C14.7257 30.7762 13.0263 30.7762 11.9781 31.8243L11.974 31.8285C11.7405 32.063 11.4232 32.195 11.0922 32.1953C10.7613 32.1957 10.4438 32.0643 10.2097 31.8303L7.78504 29.4056C6.80001 28.4206 6.93583 26.7867 8.07 25.9778L8.6294 25.5789L9.35301 26.5935L8.79361 26.9925C8.28673 27.354 8.22602 28.0842 8.66625 28.5244L11.0909 30.9491L11.0969 30.9431C11.0988 30.9412 11.1008 30.9393 11.1027 30.9374C12.638 29.4083 15.1221 29.4102 16.655 30.9431C18.1878 32.4759 18.1899 34.9598 16.6611 36.4951C16.6591 36.4971 16.6571 36.4992 16.655 36.5012L16.649 36.5072L19.0552 38.9134C19.4113 39.2694 19.9725 39.3161 20.3824 39.0237L20.9415 38.625C28.0208 33.5762 34.1863 27.3559 39.1723 20.2321C39.4448 19.8428 39.3985 19.314 39.0625 18.9779L36.535 16.4504C36.5258 16.4598 36.5166 16.4691 36.5073 16.4784C36.498 16.4877 36.4886 16.4969 36.4792 16.5061C34.9423 18.0132 32.4747 18.0039 30.9492 16.4784C29.4236 14.9528 29.4144 12.4852 30.9215 10.9482C30.9307 10.9389 30.9399 10.9296 30.9492 10.9203C30.9585 10.911 30.9678 10.9018 30.9771 10.8926L28.602 8.51747C28.1818 8.0972 27.4839 8.15833 27.1431 8.64525C22.2777 15.5968 16.2612 21.6667 9.35301 26.5935L8.6294 25.5789C15.4221 20.7344 21.338 14.766 26.1221 7.93065C26.9073 6.80885 28.515 6.66803 29.4832 7.63625L31.8584 10.0114C32.0936 10.2466 32.225 10.566 32.2234 10.8987C32.2217 11.2313 32.0872 11.5495 31.8497 11.7824C31.8432 11.7887 31.8368 11.7951 31.8304 11.8015C30.7822 12.8496 30.7822 14.549 31.8304 15.5972C32.8785 16.6453 34.5779 16.6453 35.626 15.5972C35.6324 15.5908 35.6388 15.5844 35.6452 15.5779C35.8781 15.3404 36.1962 15.2058 36.5289 15.2042C36.8615 15.2026 37.181 15.334 37.4162 15.5692L39.9437 18.0967C40.7073 18.8603 40.8126 20.062 40.1933 20.9467C35.126 28.1867 28.8599 34.5084 21.6651 39.6396L21.1061 40.0383C20.2004 40.6842 18.9606 40.5812 18.174 39.7946L15.7678 37.3884C15.5338 37.1544 15.4025 36.8369 15.4028 36.5059Z", fill: "#633001" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.8664 12.8716L24.4172 13.4223C24.6605 13.6657 24.6605 14.0602 24.4172 14.3035C24.1738 14.5469 23.7793 14.5469 23.536 14.3035L22.9852 13.7528C22.7419 13.5094 22.7419 13.1149 22.9852 12.8716C23.2285 12.6282 23.6231 12.6282 23.8664 12.8716Z", fill: "#633001" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.1799 15.1841L26.7306 15.7348C26.974 15.9782 26.974 16.3727 26.7306 16.616C26.4873 16.8594 26.0928 16.8594 25.8494 16.616L25.2987 16.0653C25.0553 15.8219 25.0553 15.4274 25.2987 15.1841C25.542 14.9407 25.9365 14.9407 26.1799 15.1841Z", fill: "#633001" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.0441 18.9295C28.8008 19.1729 28.4062 19.1728 28.1629 18.9295L27.502 18.2686C27.2587 18.0253 27.2587 17.6307 27.502 17.3874C27.7453 17.144 28.1399 17.144 28.3832 17.3874L29.0441 18.0483C29.2875 18.2916 29.2875 18.6862 29.0441 18.9295Z", fill: "#633001" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.3576 21.243C31.1143 21.4863 30.7197 21.4863 30.4764 21.243L29.8155 20.5821C29.5721 20.3387 29.5721 19.9442 29.8155 19.7009C30.0588 19.4575 30.4533 19.4575 30.6967 19.7009L31.3576 20.3618C31.6009 20.6051 31.6009 20.9996 31.3576 21.243Z", fill: "#633001" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.009 22.0141L33.5597 22.5649C33.8031 22.8082 33.8031 23.2028 33.5597 23.4461C33.3164 23.6895 32.9219 23.6895 32.6785 23.4461L32.1278 22.8953C31.8844 22.652 31.8844 22.2575 32.1278 22.0141C32.3711 21.7708 32.7656 21.7708 33.009 22.0141Z", fill: "#633001" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.3225 24.3266L35.8732 24.8774C36.1166 25.1207 36.1166 25.5153 35.8732 25.7586C35.6299 26.002 35.2354 26.002 34.992 25.7586L34.4412 25.2078C34.1979 24.9645 34.1979 24.57 34.4412 24.3266C34.6846 24.0833 35.0791 24.0833 35.3225 24.3266Z", fill: "#633001" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.6437 22.5266C19.9743 21.8573 19.9743 20.772 20.6437 20.1027C21.4022 19.3442 22.6632 19.4609 23.2695 20.3458L24.7964 22.5738C26.1291 22.1463 27.5433 22.2031 28.4805 23.1402C29.3229 23.9827 29.4507 25.2241 29.1652 26.4073C28.8764 27.6037 28.1461 28.8641 27.0722 29.9379C25.9984 31.0117 24.7381 31.742 23.5416 32.0308C22.3584 32.3164 21.117 32.1886 20.2745 31.3461C19.3428 30.4144 19.2815 29.0108 19.7006 27.6858L17.4629 26.1524C16.5781 25.546 16.4614 24.285 17.2199 23.5265C17.8892 22.8572 18.9745 22.8572 19.6438 23.5265L21.1943 25.077C21.3478 24.897 21.5107 24.7205 21.6828 24.5485C21.8489 24.3823 22.0193 24.2247 22.1928 24.0758L20.6437 22.5266Z", fill: "#633001" }),
        React__default.createElement("ellipse", { rx: "0.749452", ry: "1.09011", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 22.5742 28.153)", fill: "#DBCDF9" }),
        React__default.createElement("ellipse", { cx: "25.3682", cy: "25.359", rx: "0.749453", ry: "1.09011", transform: "rotate(-45 25.3682 25.359)", fill: "#DBCDF9" }),
        React__default.createElement("path", { d: "M40.2095 34.2904C40.0804 34.7825 39.3818 34.7825 39.2527 34.2904L38.5576 31.6422C38.5123 31.4695 38.3775 31.3346 38.2048 31.2893L35.5566 30.5943C35.0645 30.4651 35.0645 29.7666 35.5566 29.6374L38.2048 28.9424C38.3775 28.8971 38.5123 28.7622 38.5576 28.5895L39.2527 25.9413C39.3818 25.4492 40.0804 25.4492 40.2095 25.9413L40.9045 28.5895C40.9499 28.7622 41.0847 28.8971 41.2574 28.9424L43.9056 29.6374C44.3977 29.7666 44.3977 30.4651 43.9056 30.5943L41.2574 31.2893C41.0847 31.3346 40.9499 31.4695 40.9045 31.6422L40.2095 34.2904Z", fill: "#53DEE9" }),
        React__default.createElement("path", { d: "M16.4183 7.94926C16.5088 7.60415 16.9988 7.60415 17.0893 7.94926L17.5767 9.80644C17.6085 9.92754 17.7031 10.0221 17.8242 10.0539L19.6814 10.5413C20.0265 10.6319 20.0265 11.1218 19.6814 11.2124L17.8242 11.6998C17.7031 11.7316 17.6085 11.8261 17.5767 11.9473L17.0893 13.8044C16.9988 14.1495 16.5088 14.1495 16.4183 13.8044L15.9309 11.9473C15.8991 11.8261 15.8045 11.7316 15.6834 11.6998L13.8262 11.2124C13.4811 11.1218 13.4811 10.6319 13.8262 10.5413L15.6834 10.0539C15.8045 10.0221 15.8991 9.92754 15.9309 9.80644L16.4183 7.94926Z", fill: "#53DEE9" }),
        React__default.createElement("path", { d: "M10.3511 38.7118C10.2924 38.9355 9.97486 38.9355 9.91616 38.7118L9.60024 37.5081C9.57964 37.4296 9.51834 37.3683 9.43985 37.3477L8.23612 37.0318C8.01244 36.9731 8.01244 36.6555 8.23612 36.5968L9.43985 36.2809C9.51834 36.2603 9.57964 36.199 9.60024 36.1205L9.91616 34.9168C9.97486 34.6931 10.2924 34.6931 10.3511 34.9168L10.667 36.1205C10.6876 36.199 10.7489 36.2603 10.8274 36.2809L12.0311 36.5968C12.2548 36.6555 12.2548 36.9731 12.0311 37.0318L10.8274 37.3477C10.7489 37.3683 10.6876 37.4296 10.667 37.5081L10.3511 38.7118Z", fill: "#53DEE9" }),
        React__default.createElement("defs", null,
            React__default.createElement("linearGradient", { id: "paint0_linear_ticketround", x1: "24", y1: "0", x2: "24", y2: "48", gradientUnits: "userSpaceOnUse" },
                React__default.createElement("stop", { stopColor: "#54DADE" }),
                React__default.createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$A = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M15.0701 1.01H9.07007V3.01H15.0701V1.01ZM11.0701 14.01H13.0701V8.01H11.0701V14.01ZM19.1001 7.39L20.5201 5.97C20.0901 5.46 19.6201 4.98 19.1101 4.56L17.6901 5.98C16.1401 4.74 14.1901 4 12.0701 4C7.10007 4 3.07007 8.03 3.07007 13C3.07007 17.97 7.09007 22 12.0701 22C17.0501 22 21.0701 17.97 21.0701 13C21.0701 10.89 20.3301 8.94 19.1001 7.39ZM12.0701 20.01C8.20007 20.01 5.07007 16.88 5.07007 13.01C5.07007 9.14 8.20007 6.01 12.0701 6.01C15.9401 6.01 19.0701 9.14 19.0701 13.01C19.0701 16.88 15.9401 20.01 12.0701 20.01Z" })));
};

var Icon$z = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 40 40" }, props),
        React__default.createElement("path", { d: "M17.6755 13.1415V5.73914H3.98114C3.70355 5.73914 3.51849 5.92419 3.51849 6.20178V16.6576C3.51849 16.9352 3.70355 17.1203 3.98114 17.1203H9.25532V36.1814C9.25532 36.4589 9.44038 36.644 9.71797 36.644H18.3232C18.6008 36.644 18.7859 36.4589 18.7859 36.1814V13.1415H17.6755Z", fill: "#29AEFF" }),
        React__default.createElement("path", { d: "M27.2061 3.33337H23.875H14.8997C14.6221 3.33337 14.437 3.51843 14.437 3.79602V33.7756C14.437 34.0532 14.6221 34.2382 14.8997 34.2382H23.5049C23.7825 34.2382 23.9676 34.0532 23.9676 33.7756V26.1882H27.2986C33.5906 26.1882 38.6797 21.099 38.6797 14.807C38.6797 8.4225 33.4981 3.33337 27.2061 3.33337Z", fill: "#2761E7" })));
};

var Icon$y = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default.createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", "fill-rule": "evenodd" },
            React__default.createElement("g", { transform: "translate(-561.000000, -1406.000000)" },
                React__default.createElement("g", { transform: "translate(561.000000, 1406.000000)" },
                    React__default.createElement("path", { d: "M47.9968891,40.2993801 C47.9440033,40.3745332 47.8706743,40.4425712 47.8426759,40.5257287 C47.7826795,40.7036057 47.7511258,40.8917107 47.6986844,41.0727006 C47.5768592,41.5226253 47.3610067,41.9415619 47.0653884,42.3018311 C46.8360686,42.5757617 46.6676341,42.9030555 46.4245373,43.1623113 C46.094779,43.5136185 45.7272451,43.8293502 45.3610444,44.1464161 C45.1117111,44.3558957 44.8508755,44.551272 44.5797571,44.7316316 C44.3775468,44.8694863 44.1580042,44.9815488 43.9451279,45.1029499 C43.6829211,45.2523667 43.4256029,45.4142348 43.1545078,45.544085 C42.8705245,45.6819397 42.5709866,45.7868872 42.2825592,45.9154034 C42.0887928,46.0021184 41.9043593,46.1106234 41.7110373,46.1982279 C41.5770106,46.2563262 41.4395804,46.3062237 41.299506,46.3476446 C41.0719639,46.4192401 40.8408664,46.4810524 40.6133242,46.5535373 C40.3328963,46.6424758 40.0555793,46.7447551 39.774707,46.834583 C39.5524979,46.9052892 39.3302887,46.9679908 39.1080796,47.0298031 C38.9245349,47.0796087 38.7396569,47.1276355 38.5530012,47.1632109 C38.1850229,47.2321382 37.8130448,47.2814991 37.4468442,47.3584309 C37.0708664,47.4371415 36.7002215,47.5398655 36.3269102,47.6319169 C36.2776763,47.6459919 36.2274677,47.6563965 36.1766968,47.6630454 C35.4056312,47.7288599 34.631899,47.7688822 33.8657219,47.8631571 C32.0369408,48.0877269 30.2032711,47.9707727 28.3722679,47.9601001 C27.7091959,47.9565425 27.0470127,47.7964532 26.3848295,47.7079594 C26.3626086,47.7048465 26.3403877,47.6990655 26.3190556,47.696842 C25.7208686,47.6305828 25.1191263,47.5807773 24.5249391,47.4931728 C24.1809594,47.4424779 23.8454236,47.3326388 23.5063325,47.2477025 C23.2516808,47.1836667 22.9965847,47.1222992 22.7437108,47.0507036 C22.3912871,46.9510925 22.0406411,46.8430322 21.6895507,46.7394188 C21.2993514,46.6229093 20.9060413,46.5144043 20.5202862,46.3836647 C20.3309641,46.3205183 20.1563077,46.2146815 19.9723185,46.1341921 C19.7883294,46.0537028 19.6114509,45.9923352 19.4345724,45.9118458 C19.1359234,45.778438 18.8399408,45.6405833 18.5457359,45.5013945 C18.4035221,45.4346906 18.2633822,45.3638363 18.1253163,45.2888314 C17.895552,45.1647622 17.664899,45.042027 17.4404678,44.9081746 C17.1991486,44.7645388 16.9560519,44.6200137 16.7293985,44.4550328 C16.4361482,44.2497401 16.156196,44.026056 15.8912257,43.7853257 C15.5725778,43.4838241 15.25393,43.1720945 14.9939453,42.8216767 C14.7010736,42.4272344 14.4664208,41.9883228 14.2193243,41.5614178 C13.7926827,40.8241175 13.7304642,40.0049936 13.7273533,39.1800888 C13.7202426,36.1148225 13.7273533,33.0491115 13.7220202,29.9838452 C13.7220202,29.7708375 13.6775784,29.5587191 13.6624682,29.3457113 C13.6509928,29.2133641 13.648617,29.0803844 13.6553575,28.9477114 C13.6735786,28.6324243 13.7211314,28.3171373 13.7215758,28.0018502 C13.7269088,25.1955432 13.7269088,22.3892363 13.7215758,19.5829293 C13.7215758,19.42284 13.6726898,19.2627506 13.66869,19.1022166 C13.6703693,18.9585499 13.6831474,18.8152282 13.70691,18.6735329 C13.7175761,18.5939329 13.7651288,18.5143329 13.758907,18.4378458 C13.7171316,17.8899845 13.9113424,17.3839243 14.1197746,16.911216 C14.3419837,16.4096027 14.6579651,15.9328922 15.0059446,15.5082108 C15.405921,15.0163807 15.8730046,14.5743562 16.3423103,14.142115 C16.632071,13.8752994 16.9729398,13.663181 17.305809,13.4492839 C17.6297899,13.2411677 17.966659,13.0490605 18.3079722,12.8711835 C18.596844,12.7208774 18.901715,12.6021444 19.1968087,12.4647344 C19.4919024,12.3273244 19.7852184,12.1725713 20.0856452,12.0440552 C20.2931885,11.9551166 20.5153976,11.9030876 20.7278296,11.8266005 C20.9642601,11.7412195 21.1975797,11.6487234 21.4322325,11.5557827 C21.4522313,11.5482229 21.4686748,11.5291011 21.489118,11.5246542 C21.7642129,11.4588397 22.0410855,11.4014743 22.3139583,11.3289894 C22.573943,11.2600621 22.8299279,11.1755705 23.0872461,11.098194 C23.1218915,11.0853453 23.1571992,11.0743605 23.1930176,11.0652867 C23.544108,10.9999169 23.919197,10.9914677 24.2409558,10.8562812 C24.6409323,10.6881873 25.0497971,10.7424398 25.4519956,10.6850745 C25.8141965,10.6334902 26.1755085,10.5765695 26.5377094,10.5236511 C28.5638122,10.2274858 30.6014699,10.1990255 32.6422385,10.2781807 C33.291978,10.3035282 33.941273,10.3582254 34.5892348,10.4155908 C35.0292089,10.454279 35.4669609,10.5174254 35.9047129,10.5774589 C36.2233607,10.6219281 36.5522303,10.6401605 36.8557679,10.7353248 C37.3819591,10.9003057 37.9268159,10.9496666 38.459229,11.0657314 C38.9196463,11.1662319 39.3631757,11.3423302 39.8164823,11.4770721 C40.0795779,11.5548933 40.3497842,11.6104799 40.6133242,11.6874117 C40.8142013,11.7443323 41.0133007,11.8061446 41.2097335,11.8804083 C41.3981669,11.9524485 41.5794895,12.0409423 41.7625898,12.1254339 C42.2025639,12.3277691 42.6407603,12.5323277 43.0807344,12.7346628 C43.3607179,12.863179 43.6482565,12.9770203 43.9202404,13.1202113 C44.1170029,13.2319201 44.3061473,13.3565591 44.4864293,13.4933085 C44.8344088,13.7392235 45.1908322,13.9762446 45.521035,14.2452837 C45.7752984,14.4576622 46.0130103,14.6891284 46.2321042,14.9376701 C46.5516409,15.2912008 46.8689555,15.6491783 47.1533832,16.0302799 C47.3111517,16.2423983 47.4200342,16.4985412 47.5160285,16.7471244 C47.6435766,17.0713053 47.7346823,17.4092717 47.8520087,17.7374549 C47.8800071,17.8157208 47.9497807,17.8788672 48,17.9491286 L47.9968891,40.2993801 Z M30.8867864,13.7810246 L30.8867864,13.7712413 C30.3534845,13.7712413 29.8175161,13.731219 29.2891028,13.7801352 C28.4029328,13.8619586 27.5140963,13.891753 26.6301484,14.0469508 C25.9604101,14.1630156 25.2853387,14.2612926 24.6138228,14.3769127 C24.1596273,14.4556233 23.7249863,14.5792479 23.280568,14.6881975 C22.9154279,14.7759401 22.5570479,14.889777 22.2081868,15.0288321 C21.7864338,15.1987047 21.3526816,15.3401169 20.9282622,15.5033191 C20.6225024,15.6216074 20.3114097,15.7341146 20.0252043,15.8906464 C19.5936742,16.1272229 19.1808096,16.3953726 18.7630565,16.6581859 C18.2297546,16.9943735 17.8128902,17.4524069 17.4697994,17.9691398 C17.2364798,18.3204469 17.1311526,18.7139999 17.2529232,19.1573585 C17.3297433,19.4261648 17.4482123,19.6812554 17.6040137,19.9133359 C17.9257725,20.4149492 18.3839677,20.7609201 18.8483848,21.1060016 C19.073658,21.2685486 19.3074598,21.4189214 19.5487879,21.5564752 C19.7537586,21.6813517 19.9661392,21.7936221 20.1847505,21.8926628 C20.4905102,22.0260706 20.806936,22.1359097 21.1180288,22.2577555 C21.2802414,22.3213465 21.440232,22.3911633 21.6015558,22.4565331 C21.8002108,22.5383565 21.9939772,22.6344101 22.198854,22.6993353 C22.4655049,22.7824928 22.7428219,22.83719 23.0148059,22.9074514 C23.3952279,23.0052838 23.7747611,23.1057843 24.1542943,23.2053955 C24.2040691,23.2187363 24.2542884,23.230743 24.3036188,23.2445284 C24.6116007,23.3303541 24.9146939,23.4410826 25.2280088,23.4944457 C25.5413236,23.5478088 25.860416,23.5584814 26.1808415,23.642973 C26.6519249,23.7670423 27.1536731,23.7808277 27.6438664,23.8248523 C28.1882788,23.8742132 28.7331355,23.9275763 29.2788811,23.9391383 C30.5628055,23.9662646 31.8462854,24.0787718 33.1310985,23.8839964 C33.8506117,23.7750467 34.5839018,23.7568143 35.308748,23.6816613 C35.7829423,23.6327451 36.2535812,23.5558133 36.7259978,23.4908881 C36.7410071,23.4883926 36.7558489,23.4849769 36.7704396,23.4806602 C37.1379735,23.3872748 37.5046186,23.2921105 37.8725969,23.2013932 C38.149025,23.1333553 38.4285641,23.077324 38.7041034,23.0048391 C38.8710143,22.9583328 39.0353777,22.9031153 39.1965189,22.8394134 C39.4382824,22.7504749 39.6756017,22.6450828 39.9182541,22.5561442 C40.1217977,22.4814359 40.3382293,22.437856 40.5342178,22.3484728 C40.9284168,22.1705957 41.3075055,21.9558092 41.702149,21.7783768 C42.1823484,21.5576484 42.6359029,21.2829905 43.0540693,20.9596977 C43.5252368,20.6135637 43.9340247,20.1896356 44.2628869,19.7061092 C44.5508699,19.2743126 44.5579806,18.7664737 44.4157668,18.327562 C44.2939962,17.9495733 43.9740151,17.6262817 43.7078085,17.304769 C43.4073818,16.9454573 43.0234044,16.6777524 42.6145396,16.4474016 C42.3527773,16.2997636 42.0981256,16.1392296 41.8376965,15.9893682 C41.707482,15.9146598 41.5710456,15.8506241 41.4377201,15.7816967 C41.2746186,15.6972051 41.1186278,15.5944811 40.94886,15.5308901 C40.6026582,15.4014845 40.2480124,15.2956477 39.8986997,15.175136 C39.7355982,15.11866 39.5769409,15.0483986 39.4147282,14.9874757 C39.1738535,14.8985372 38.9369786,14.7927003 38.689882,14.7259964 C38.3725674,14.6401707 38.0468088,14.5854735 37.7241612,14.5178803 C37.4952858,14.4702982 37.2646327,14.4289417 37.037535,14.3751339 C36.7046657,14.2924211 36.3789071,14.1750223 36.0424825,14.1158781 C35.6625049,14.0491742 35.2767499,14.0269396 34.8932169,13.9611251 C34.169704,13.8392793 33.4266367,13.8206022 32.6902356,13.7899184 C32.0876045,13.7610134 31.4871954,13.7810246 30.8881196,13.7810246 L30.8867864,13.7810246 Z M17.1773721,24.2095114 C17.1711503,24.3237974 17.1618175,24.418517 17.1613731,24.5132365 C17.1613731,25.0904475 17.1613731,25.668548 17.1613731,26.2475378 C17.1613731,27.0840046 17.1533736,27.9209161 17.1649284,28.7569383 C17.1711503,29.1820644 17.2124812,29.615195 17.4480229,29.9802877 C17.6348451,30.263679 17.8513137,30.5263446 18.0937626,30.7638361 C18.3581018,31.0308159 18.6460774,31.2732756 18.9541563,31.4882404 C19.2652491,31.7016929 19.6132286,31.8662291 19.9500976,32.041438 C20.3238534,32.2357687 20.6958314,32.4367698 21.0829197,32.599972 C21.4233441,32.743163 21.7833229,32.8387719 22.1353022,32.9557261 C22.3197357,33.016649 22.5041693,33.0780165 22.6894917,33.1336031 C23.0121394,33.2341037 23.3330094,33.3417193 23.6592123,33.4284343 C23.9485286,33.5053662 24.2454,33.5529483 24.5373828,33.6218756 C24.8986949,33.7068119 25.253785,33.8237661 25.6190968,33.8829102 C25.9724093,33.9398309 26.330166,33.9620655 26.6857006,34.0287694 C27.3458218,34.1472761 28.0149302,34.2085745 28.6855828,34.2119827 C30.5236967,34.2355515 32.3640326,34.3124833 34.1963691,34.078575 C34.8078886,34.0003091 35.4229635,33.9487247 36.0362607,33.8842443 C36.0653092,33.8793582 36.0940865,33.8729758 36.1224778,33.8651225 C36.5440826,33.7741087 36.9656874,33.683095 37.3872921,33.5920812 C37.6939407,33.5253773 38.0014782,33.4586734 38.3067935,33.3879673 C38.4885606,33.343498 38.6698832,33.2954712 38.8463173,33.2345483 C39.103191,33.1456098 39.3538429,33.0384389 39.6098278,32.9477216 C39.8160379,32.8752367 40.0338028,32.8329909 40.2320134,32.7471652 C40.6639879,32.5621731 41.0964069,32.3758469 41.5119379,32.1575028 C41.9896876,31.9066962 42.4514381,31.6238716 42.9158552,31.349941 C43.3802723,31.0760103 43.7531392,30.7126964 44.0757868,30.2920172 C44.3077732,29.9905156 44.4757633,29.6650006 44.4695414,29.2594409 C44.4602086,28.770279 44.4966509,28.2811171 44.4993174,27.7946234 C44.5046504,26.7807242 44.5046504,25.7666768 44.4993174,24.7524811 C44.4993174,24.6043985 44.5095391,24.4016186 44.4242107,24.3229081 C44.3095508,24.2170712 44.197113,24.3993952 44.0828975,24.4665438 C43.8215796,24.619518 43.5495956,24.7524811 43.2798337,24.893004 C43.0309595,25.0224096 42.7856407,25.1598196 42.5314334,25.2767737 C42.3483331,25.3621547 42.1519002,25.418186 41.9643557,25.4955625 C41.6457078,25.6289703 41.3337262,25.7766083 41.0101897,25.8957859 C40.6728763,26.0202998 40.3271189,26.1216897 39.9826947,26.2253031 C39.6200494,26.3346975 39.2578486,26.4449813 38.8907591,26.536588 C38.410343,26.6557656 37.9285936,26.7704963 37.4424,26.8612136 C36.9682057,26.9501521 36.488234,27.0044046 36.0109288,27.0742214 C35.95271,27.0826705 35.8940468,27.0915644 35.8353836,27.0977901 C35.0216538,27.1845051 34.2097016,27.2881185 33.3941942,27.3525989 C32.7684533,27.4019598 32.1382682,27.4028492 31.5103052,27.4228604 C31.0023351,27.439314 30.4881432,27.5055732 29.9872838,27.4557676 C28.7873546,27.3374794 27.5780925,27.4184134 26.387496,27.19918 C25.9537438,27.1191353 25.5137697,27.0755554 25.0769066,27.0155219 C25.0622408,27.0132985 25.047575,27.0097409 25.0324647,27.0061834 C24.6440432,26.9132426 24.2573993,26.811408 23.8667557,26.7291399 C23.5169985,26.6548762 23.1627972,26.6024025 22.8108179,26.5388114 C22.7747577,26.53082 22.7392729,26.5204206 22.7046019,26.5076829 C22.4410619,26.4267489 22.1784107,26.3422573 21.913093,26.2657702 C21.6699963,26.1955087 21.424233,26.1412562 21.1802473,26.0669925 C20.9958138,26.0105166 20.8162688,25.9335848 20.6362794,25.8646574 C20.4140703,25.7779423 20.1967497,25.6845569 19.9754295,25.5978418 C19.7976622,25.5298038 19.6141174,25.4831111 19.4447941,25.4012877 C19.1741434,25.270548 18.9150475,25.1162397 18.648841,24.9766062 C18.1697581,24.7235761 17.6888976,24.4749929 17.1787054,24.2095114 L17.1773721,24.2095114 Z M30.6659105,44.4639266 L30.6659105,44.4732652 C31.3614251,44.4732652 32.0578285,44.4941657 32.7520098,44.4665948 C33.3177542,44.4439155 33.881721,44.3652049 34.4456877,44.3069501 C35.0678733,44.2424697 35.6865035,44.1735423 36.3069114,44.104615 C36.3286879,44.1019468 36.3513532,44.0934977 36.371352,44.088606 C36.7491075,44.0050038 37.1270112,43.9214016 37.505063,43.8377994 C37.8023788,43.7724296 38.1014723,43.7132855 38.3970104,43.6408006 C38.5925544,43.5923291 38.7858764,43.5318509 38.9747541,43.4629235 C39.2111847,43.3788766 39.4409489,43.2761526 39.6773794,43.1921057 C40.0249145,43.0693705 40.3777826,42.9604208 40.7248732,42.8363516 C40.8767389,42.7796167 41.0251351,42.7139851 41.1692915,42.6397975 C41.3319486,42.5593081 41.4888282,42.4672567 41.6492632,42.3823204 C41.9825769,42.2044434 42.3398891,42.0630311 42.6447601,41.8464658 C43.0269598,41.575648 43.3718283,41.250133 43.7233632,40.9375141 C44.2211116,40.4954896 44.5099835,39.9618584 44.503001,39.269472 C44.4873181,37.8019863 44.4984286,36.3376135 44.4975398,34.8719066 C44.4975398,34.7980876 44.5082058,34.7175983 44.4815407,34.6531178 C44.4659861,34.615319 44.3699917,34.570405 44.338438,34.5859692 C44.1380054,34.6851357 43.9469055,34.8034239 43.7500283,34.9092608 C43.2802782,35.1618462 42.8167499,35.4273277 42.3350005,35.6563444 C42.0239078,35.8039824 41.6874832,35.8973678 41.3617246,36.0120985 C41.177291,36.0788024 40.992413,36.1455063 40.8070906,36.208208 C40.5555499,36.2971465 40.3057868,36.3896426 40.0515796,36.4634615 C39.7809289,36.5417274 39.5040563,36.5999822 39.2298502,36.6675754 C38.8334291,36.7645184 38.4374525,36.8627955 38.040587,36.9584044 C37.9690356,36.9757474 37.8943734,36.9784156 37.822822,36.9962033 C37.4726205,37.0851418 37.1259742,37.1865317 36.7726617,37.2581273 C36.4660131,37.3208289 36.1504762,37.3546256 35.8393834,37.391535 C35.2905268,37.4577942 34.7416703,37.5302791 34.1910361,37.5747484 C33.4764115,37.6321138 32.7595649,37.65924 32.0440515,37.7081562 C30.3623728,37.824221 28.6895825,37.6445652 27.0132369,37.5685227 C26.9839053,37.5685227 26.9545737,37.5605182 26.9243532,37.556516 C26.2715028,37.4613518 25.618208,37.3701898 24.965802,37.270134 C24.5929351,37.2127686 24.2222903,37.1407284 23.8507566,37.0753586 C23.8436459,37.0753586 23.8378685,37.0677988 23.8307578,37.06602 C23.4996662,36.9770815 23.1699079,36.8810279 22.8370386,36.796981 C22.5614993,36.7271643 22.2810714,36.6746905 22.0050876,36.6053185 C21.8230045,36.5611045 21.6436087,36.5064656 21.4677859,36.4416716 C21.2397994,36.3567353 21.0233677,36.2460068 20.7927146,36.163294 C20.450957,36.0392248 20.1025331,35.9333879 19.7594422,35.8124315 C19.5984297,35.7542575 19.4407214,35.6873051 19.2870256,35.6118751 C19.0168193,35.4784674 18.7497239,35.3410573 18.4839618,35.2005345 C18.1364267,35.0168764 17.7920026,34.8274373 17.4444675,34.6437793 C17.3763602,34.6126701 17.306463,34.5856443 17.2351465,34.5628452 C17.2093703,34.6335514 17.1613731,34.7042575 17.1609287,34.7749636 C17.1569289,36.3073744 17.1498182,37.8397852 17.1662617,39.372196 C17.1769306,39.6299173 17.2399884,39.882758 17.3515841,40.1152774 C17.452467,40.3376237 17.6231237,40.5279522 17.7808921,40.7182806 C18.1595365,41.1754246 18.621287,41.5489664 19.1101471,41.8744814 C19.5154566,42.141297 19.9772071,42.3253998 20.4149591,42.5446332 C20.5601357,42.6175628 20.7067938,42.6878243 20.8549332,42.7554175 C21.0438109,42.8421326 21.2313554,42.9310711 21.424233,43.0075583 C21.6677742,43.1036119 21.913093,43.1907716 22.1615228,43.2743738 C22.3801766,43.3504163 22.598386,43.4286822 22.8210395,43.4887157 C23.1072449,43.5656475 23.3987833,43.6199 23.6872107,43.693719 C24.0178579,43.7795447 24.3418388,43.8978329 24.6764857,43.9605346 C25.120904,44.0463602 25.5906541,44.0445815 26.0221842,44.1717636 C26.431049,44.2922753 26.8368028,44.2758216 27.2447788,44.311397 C27.3103129,44.32097 27.3752902,44.3340329 27.439434,44.35053 C27.6172013,44.3865501 27.7976351,44.4510305 27.9771801,44.4528093 C28.8766826,44.4697076 29.7721854,44.4639266 30.6672438,44.4639266 L30.6659105,44.4639266 Z", fill: "#FAB126", "fill-rule": "nonzero" }),
                    React__default.createElement("path", { d: "M20.9984803,0.00266815578 C21.1789141,0.0471374187 21.3566814,0.11161785 21.5397817,0.140078178 C22.0028655,0.211673692 22.47306,0.251251336 22.9316997,0.335742935 C23.4178932,0.424681461 23.8987538,0.546527241 24.3796143,0.662147325 C24.7835905,0.759535011 25.1893444,0.853365156 25.5848766,0.977879092 C25.9679652,1.09883549 26.3377212,1.26025891 26.7159211,1.39811363 C26.9150205,1.47059853 27.1221194,1.52084879 27.3189967,1.59822531 C27.5052079,1.6711549 27.6816419,1.76854259 27.8642978,1.85125542 C28.0340656,1.92818724 28.2073887,1.9971146 28.3771565,2.07360173 C28.6882493,2.21560691 28.9984532,2.35953909 29.3077683,2.50539827 C29.5744193,2.63213567 29.8459588,2.75664961 30.1077212,2.89405963 C30.3241529,3.00745625 30.5299185,3.14041935 30.7427949,3.26048636 C30.902341,3.34942488 31.0783306,3.41879693 31.2245442,3.52730194 C31.4414204,3.68694659 31.6689625,3.84837001 31.8369526,4.05381801 C32.1455867,4.41640992 32.2836581,4.8942083 32.2160414,5.36566127 C32.1436012,5.97489017 31.7965105,6.37022192 31.3334267,6.65526989 C30.9712258,6.87761621 30.5254743,6.98523182 30.0890556,6.8598285 C29.8455144,6.78956706 29.6237497,6.63748219 29.396652,6.51385763 C29.0202297,6.30929902 28.6478072,6.09673595 28.2722738,5.89128795 C27.9167392,5.6956232 27.5652044,5.48661766 27.1976705,5.31318754 C26.8936884,5.1704412 26.5665966,5.07705575 26.2532817,4.95387589 C25.9039689,4.81602118 25.5595448,4.66438099 25.2097876,4.52830504 C25.0360201,4.46071176 24.854253,4.41001681 24.6764857,4.35932185 C24.4320557,4.2899498 24.1849591,4.2290269 23.9396403,4.1627677 C23.6232145,4.07738672 23.3069368,3.99111635 22.9908073,3.90395659 C22.9694752,3.89817559 22.949032,3.88705827 22.9276999,3.88350073 C22.5001695,3.81724153 22.0695283,3.76610188 21.6455533,3.68294436 C21.0077544,3.56249007 20.3604834,3.49924099 19.711445,3.49394999 C19.2465835,3.4872796 18.781722,3.41301593 18.3177494,3.4210204 C17.0982657,3.44177272 15.8792264,3.48001629 14.6606316,3.5357511 C14.0828879,3.56243265 13.5051441,3.63491755 12.9274004,3.71362815 C12.318103,3.79767505 11.7114721,3.9035119 11.1079521,4.02135545 C10.7524175,4.0907275 10.4026603,4.2054582 10.0489034,4.29306264 C9.76047594,4.36421346 9.46760431,4.41668719 9.18095454,4.49406371 C8.96541169,4.55231845 8.75609069,4.63458658 8.54543644,4.70973964 C8.32322732,4.7906737 8.09612959,4.87160775 7.87436488,4.96010159 C7.63704554,5.05482112 7.40372595,5.15798981 7.1686287,5.25804565 C6.90197775,5.37055288 6.63177145,5.47105342 6.37445328,5.60045897 C6.10780233,5.73386676 5.85181742,5.89173265 5.59672134,6.0451516 C5.31718226,6.21635827 5.02386622,6.37333476 4.77188107,6.57878276 C4.2807989,6.97900612 3.77060675,7.4085792 3.58839526,8.0302595 C3.45506979,8.49051637 3.47417977,8.99479781 3.76616256,9.45327591 C4.06614488,9.91931379 4.46167713,10.2888534 4.86476448,10.6490544 C5.10297266,10.8620622 5.39806638,11.0137024 5.67138361,11.1826855 C5.93447921,11.3454431 6.19890807,11.5090899 6.47489181,11.647834 C6.73176556,11.7767949 7.00819371,11.8670675 7.26995606,11.9875792 C7.42972767,12.0657652 7.58520038,12.1524561 7.73570639,12.2472797 C7.84769979,12.3144283 7.96902597,12.3757959 8.06102055,12.4656238 C8.43210979,12.828493 8.66809588,13.2736303 8.62365405,13.7943654 C8.58765618,14.2168234 8.40144493,14.5916992 8.07613077,14.9060969 C7.75970497,15.2129348 7.37617202,15.3507896 6.9788621,15.477527 C6.89222231,15.4970826 6.80172842,15.4904268 6.71887743,15.4584052 C6.318901,15.3205505 5.91892457,15.1938131 5.53405837,15.0221617 C5.15719169,14.8527338 4.80343476,14.6321663 4.43723412,14.4378356 C4.1541397,14.2875295 3.86793434,14.1430044 3.55150855,13.9793575 C3.52881508,14.0740277 3.51395092,14.1704069 3.50706672,14.2675183 C3.51817718,15.888423 3.52395462,17.5097723 3.55150855,19.1306769 C3.55728598,19.4601942 3.71905423,19.7532466 3.96348427,19.9947147 C4.1932485,20.2210632 4.3927923,20.4816531 4.63944443,20.685767 C4.97053603,20.9596977 5.32962597,21.2007211 5.68516057,21.4417445 C5.89962921,21.586577 6.12220188,21.7190152 6.35178795,21.8384103 C6.52955525,21.9317958 6.72643254,21.9878271 6.90419984,22.0807678 C7.37661644,22.3271275 7.88191999,22.4849934 8.23167716,22.9701531 C8.44096302,23.2561867 8.56625472,23.595022 8.59343361,23.9484769 C8.61395463,24.3077219 8.5088318,24.6629074 8.2961178,24.9530375 C8.12723887,25.1824989 7.95080482,25.3830553 7.69615316,25.5226888 C7.2588456,25.7623781 6.82020479,25.857987 6.34378842,25.6494262 C6.03980634,25.5160184 5.7247138,25.406624 5.4251759,25.2643224 C5.08297384,25.1024542 4.74921574,24.921909 4.41856856,24.7373616 C4.19635943,24.6128476 3.98659402,24.4634309 3.76660698,24.333136 C3.59950572,24.2339695 3.50262254,24.3020075 3.49995603,24.5234644 C3.4968451,25.3012318 3.49506743,26.0798886 3.49995603,26.8558773 C3.50440021,27.6776692 3.52706554,28.4990165 3.52217694,29.3208085 C3.51951043,29.7072464 3.72394283,29.9931838 3.92215337,30.2826787 C4.25813357,30.7718406 4.75854852,31.0897958 5.20652212,31.4553331 C5.48917212,31.6861286 5.84870649,31.8213152 6.17179856,32.0023051 C6.43133882,32.1472749 6.68465722,32.3038067 6.94686399,32.4429955 C7.26817839,32.6137574 7.60993602,32.748944 7.91702903,32.9406065 C8.23212157,33.13805 8.44633117,33.4297684 8.50454996,33.8157616 C8.52223541,33.9084902 8.54478376,34.0002236 8.57210154,34.0905817 C8.57921223,34.119042 8.60587732,34.1510599 8.59832221,34.1732945 C8.49966136,34.4659022 8.5809899,34.8016452 8.38100169,35.0706842 C8.25478691,35.2401121 8.16768093,35.4606796 8.00502385,35.5754103 C7.74770568,35.7564002 7.50416448,35.998313 7.15085197,35.996979 C6.95841887,35.996979 6.75887507,36.0289968 6.57577475,35.9880851 C6.34956586,35.9378348 6.13446743,35.8315533 5.91936899,35.7395019 C5.77759957,35.6790237 5.64471851,35.5985344 5.50517118,35.5318305 C5.14697007,35.3606238 4.77854734,35.2089836 4.43056785,35.0190999 C4.06199955,34.8188932 3.70487373,34.5982798 3.36085312,34.3582866 C2.94798856,34.0687917 2.53334633,33.7748499 2.16092384,33.4359941 C1.74955995,33.0686531 1.3711023,32.6660053 1.02987939,32.2326559 C0.763228435,31.8853509 0.574350678,31.4726761 0.380139902,31.076455 C0.277034868,30.8638919 0.246814427,30.6157535 0.164152632,30.3925178 C-0.075833224,29.7561626 0.0183834454,29.09446 0.0174946089,28.4438746 C0.00979135915,21.8241802 0.0084581044,15.2044857 0.0134948446,8.58479121 C0.0134948446,8.3922393 -0.0113925775,8.19435108 0.0254941374,8.00669079 C0.0930457117,7.66739031 0.194373073,7.33387084 0.289478579,7.00035137 C0.34503086,6.805576 0.38591734,6.59745985 0.485467028,6.42580849 C0.714342428,6.03092144 0.964105485,5.64670701 1.22720109,5.27360989 C1.39343103,5.03098085 1.58469328,4.80651139 1.79783413,4.60390279 C2.1598248,4.26485582 2.53991552,3.94569128 2.93643369,3.64781364 C3.32407359,3.36697426 3.72672101,3.10748192 4.14258482,2.87049092 C4.54263269,2.63503637 4.95456429,2.42040877 5.37673431,2.22746538 C5.89937017,1.99177829 6.43533858,1.78277275 6.97086258,1.57910353 C7.28639954,1.45814713 7.61082486,1.35675721 7.93436135,1.25892483 C8.31256128,1.14286006 8.68987237,1.02501651 9.07429416,0.932520444 C9.56315424,0.814232204 10.0600138,0.715065748 10.5546514,0.617678062 C10.8697439,0.555865787 11.2070574,0.562091483 11.499929,0.449139556 C11.8599078,0.310395455 12.2229975,0.334408857 12.5856428,0.291718365 C13.0447268,0.237465864 13.5020332,0.171206662 13.9588952,0.101389919 C14.0397793,0.0889385259 14.1139971,0.0346860251 14.1908815,0 L20.9984803,0.00266815578 Z", fill: "#FAB126", "fill-rule": "nonzero" }))))));
};

var Icon$x = function (props) { return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default.createElement("path", { d: "M21.2627 15.8306C21.5556 16.1235 21.5556 16.5983 21.2627 16.8912L18.6539 19.5H20.3788C20.793 19.5 21.1288 19.8358 21.1288 20.25C21.1288 20.6642 20.793 21 20.3788 21L16.8433 21C16.429 21 16.0933 20.6642 16.0933 20.25V16.7145C16.0933 16.3002 16.429 15.9645 16.8433 15.9645C17.2575 15.9645 17.5933 16.3002 17.5933 16.7145V18.4393L20.202 15.8306C20.4949 15.5377 20.9698 15.5377 21.2627 15.8306Z" }),
    React__default.createElement("path", { d: "M2.81285 7.78034C3.10575 8.07323 3.58062 8.07323 3.87352 7.78034L6.48227 5.17158L6.48227 6.89645C6.48227 7.31067 6.81806 7.64645 7.23227 7.64645C7.64649 7.64645 7.98227 7.31067 7.98227 6.89645L7.98227 3.36092C7.98227 3.16201 7.90326 2.97124 7.7626 2.83059C7.62195 2.68994 7.43119 2.61092 7.23227 2.61092L3.69674 2.61092C3.28253 2.61092 2.94674 2.9467 2.94674 3.36092C2.94674 3.77513 3.28253 4.11092 3.69674 4.11092H5.42161L2.81285 6.71968C2.51996 7.01257 2.51996 7.48744 2.81285 7.78034Z" }),
    React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.46195 20.5622C8.66369 20.5827 8.86838 20.5932 9.07553 20.5932C12.3892 20.5932 15.0755 17.9069 15.0755 14.5932C18.3892 14.5932 21.0755 11.9069 21.0755 8.59315C21.0755 5.69362 19.0188 3.27448 16.2846 2.71504C15.9185 2.64011 15.5401 2.59853 15.153 2.59363C15.1272 2.5933 15.1013 2.59314 15.0754 2.59314C11.7617 2.59314 9.07542 5.27943 9.07542 8.59314C5.76171 8.59314 3.07542 11.2794 3.07542 14.5931C3.07542 17.5962 5.28164 20.0839 8.16168 20.524C8.26099 20.5392 8.3611 20.5519 8.46195 20.5622ZM5.07542 14.5931C5.07542 12.384 6.86628 10.5931 9.07542 10.5931C9.19238 10.5931 9.30799 10.5981 9.42207 10.6079C10.0255 12.3008 11.3677 13.6431 13.0607 14.2465C13.0704 14.3606 13.0754 14.4762 13.0754 14.5931C13.0754 16.8023 11.2846 18.5931 9.07542 18.5931C6.86628 18.5931 5.07542 16.8023 5.07542 14.5931ZM11.0754 8.59314C11.0754 6.384 12.8663 4.59314 15.0754 4.59314C17.2846 4.59314 19.0754 6.384 19.0754 8.59314C19.0754 10.8023 17.2846 12.5931 15.0754 12.5931C12.8663 12.5931 11.0754 10.8023 11.0754 8.59314Z" }))); };

var Icon$w = function (props) { return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
    React__default.createElement("path", { d: "M3.87033 7.75941C3.57743 8.05231 3.10256 8.05231 2.80967 7.75941C2.51677 7.46652 2.51677 6.99165 2.80967 6.69875L5.41842 4.09L3.69355 4.09C3.27934 4.09 2.94355 3.75421 2.94355 3.34C2.94355 2.92578 3.27934 2.59 3.69355 2.59H7.22908C7.428 2.59 7.61876 2.66901 7.75941 2.80967C7.90007 2.95032 7.97908 3.14108 7.97908 3.34L7.97908 6.87553C7.97908 7.28974 7.6433 7.62553 7.22908 7.62553C6.81487 7.62553 6.47908 7.28974 6.47908 6.87553L6.47908 5.15066L3.87033 7.75941Z" }),
    React__default.createElement("path", { d: "M15.0722 3.57222C17.8337 3.57222 20.0722 5.81079 20.0722 8.57222C20.0722 11.1919 18.0576 13.341 15.4931 13.5548C15.0568 10.7797 12.8647 8.58763 10.0897 8.15139C10.3034 5.5869 12.4525 3.57222 15.0722 3.57222Z" }),
    React__default.createElement("path", { d: "M14.0721 14.5722C14.0721 11.8108 11.8335 9.57222 9.07212 9.57222C6.31069 9.57222 4.07212 11.8108 4.07212 14.5722C4.07212 17.3336 6.31069 19.5722 9.07212 19.5722C11.8335 19.5722 14.0721 17.3336 14.0721 14.5722Z" }),
    React__default.createElement("path", { d: "M21.2594 15.8096C21.5523 16.1025 21.5523 16.5774 21.2594 16.8703L18.6506 19.4791H20.3755C20.7897 19.4791 21.1255 19.8148 21.1255 20.2291C21.1255 20.6433 20.7897 20.9791 20.3755 20.9791H16.84C16.4257 20.9791 16.09 20.6433 16.09 20.2291L16.09 16.6935C16.09 16.2793 16.4257 15.9435 16.84 15.9435C17.2542 15.9435 17.59 16.2793 17.59 16.6935L17.59 18.4184L20.1987 15.8096C20.4916 15.5168 20.9665 15.5168 21.2594 15.8096Z", fill: "black" }))); };

var Icon$v = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React__default.createElement("path", { d: "M16.8196 4.04526C17.2184 2.78478 16.2774 1.5 14.9553 1.5C13.8754 1.5 13 2.37543 13 3.45534L13 7.25679C13 8.01243 13.6126 8.625 14.3682 8.625C14.9648 8.625 15.4927 8.2384 15.6727 7.66958L16.8196 4.04526Z", fill: "#FFD800" }),
        React__default.createElement("path", { d: "M8.05539 4.04526C7.65652 2.78478 8.59753 1.5 9.91962 1.5C10.9995 1.5 11.875 2.37543 11.875 3.45534L11.875 7.25679C11.875 8.01243 11.2624 8.625 10.5067 8.625C9.91013 8.625 9.3823 8.2384 9.2023 7.66958L8.05539 4.04526Z", fill: "#FFD800" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.24713 8.9375L13.4374 8.9375V17.0625H7.96396C7.92764 17.0625 7.89183 17.0625 7.85651 17.0625C7.06169 17.0627 6.51444 17.0629 6.00729 16.9494C4.88983 16.6995 3.90253 16.0491 3.23171 15.1211C2.92726 14.6999 2.71136 14.1971 2.39779 13.4667C2.38385 13.4342 2.36972 13.4013 2.35539 13.368L2.34484 13.3434C2.19078 12.9849 2.05946 12.6793 1.96737 12.4255C1.87345 12.1667 1.79043 11.8847 1.78065 11.583C1.7455 10.4988 2.39693 9.50984 3.40701 9.11409C3.68809 9.00396 3.97989 8.96895 4.25478 8.95306C4.5243 8.93749 4.85692 8.93749 5.24713 8.9375ZM4.36295 10.8249C4.15337 10.837 4.09575 10.858 4.09101 10.8599C3.82001 10.9661 3.64524 11.2314 3.65467 11.5223C3.65483 11.5274 3.65831 11.5886 3.72992 11.7859C3.80127 11.9825 3.91061 12.238 4.0781 12.6278C4.4505 13.4945 4.5838 13.791 4.75127 14.0227C5.15376 14.5795 5.74615 14.9697 6.41662 15.1197C6.6956 15.1821 7.02062 15.1875 7.96396 15.1875H11.5624V10.8125H5.27387C4.84961 10.8125 4.57176 10.8129 4.36295 10.8249Z", fill: "#FFD800" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.637 10.8249C20.4282 10.8129 20.1503 10.8125 19.7261 10.8125H13.4375V15.1875H17.036C17.9793 15.1875 18.3043 15.1821 18.5833 15.1197C19.2538 14.9697 19.8462 14.5795 20.2487 14.0227C20.4161 13.791 20.5494 13.4945 20.9218 12.6278C21.0893 12.238 21.1987 11.9825 21.27 11.7859C21.3416 11.5886 21.3451 11.5274 21.3453 11.5223C21.3547 11.2314 21.1799 10.9661 20.9089 10.8599C20.9042 10.858 20.8466 10.837 20.637 10.8249ZM20.7452 8.95306C21.0201 8.96895 21.3118 9.00396 21.5929 9.11409C22.603 9.50984 23.2544 10.4988 23.2193 11.583C23.2095 11.8847 23.1265 12.1667 23.0326 12.4255C22.9405 12.6793 22.8092 12.9849 22.6551 13.3434L22.6446 13.368C22.6302 13.4013 22.6161 13.4342 22.6022 13.4667C22.2886 14.197 22.0727 14.6999 21.7682 15.1211C21.0974 16.0491 20.1101 16.6995 18.9927 16.9494C18.4855 17.0629 17.9383 17.0627 17.1434 17.0625C17.1081 17.0625 17.0723 17.0625 17.036 17.0625H11.5625V8.9375L19.7528 8.9375C20.143 8.93749 20.4756 8.93749 20.7452 8.95306Z", fill: "#FFD800" }),
        React__default.createElement("path", { d: "M8.07961 10.8125H4.6577C4.61915 10.8125 4.58174 10.8125 4.5454 10.8125C4.39673 10.5329 4.3125 10.2138 4.3125 9.875C4.3125 9.53623 4.39673 9.21713 4.54539 8.9375C4.57317 8.9375 4.60124 8.9375 4.62961 8.9375L8.07961 8.9375C8.22827 9.21713 8.3125 9.53623 8.3125 9.875C8.3125 10.2138 8.22827 10.5329 8.07961 10.8125Z", fill: "#FFAF00" }),
        React__default.createElement("path", { d: "M8.4231 15.1875L9.18751 17.0104L9.06332 17.0625L7.23815 17.0625C7.0893 17.0626 6.94898 17.0626 6.81591 17.0619L6.01688 15.1564C6.27346 15.1844 6.63759 15.1875 7.3468 15.1875H8.4231Z", fill: "#FFAF00" }),
        React__default.createElement("path", { d: "M16.9204 10.8125H20.3423C20.3809 10.8125 20.4183 10.8125 20.4546 10.8125C20.6033 10.5329 20.6875 10.2138 20.6875 9.875C20.6875 9.53623 20.6033 9.21713 20.4546 8.9375C20.4268 8.9375 20.3988 8.9375 20.3704 8.9375L16.9204 8.9375C16.7717 9.21713 16.6875 9.53623 16.6875 9.875C16.6875 10.2138 16.7717 10.5329 16.9204 10.8125Z", fill: "#EB8C00" }),
        React__default.createElement("path", { d: "M16.5769 15.1875L15.8125 17.0104L15.9367 17.0625L17.7619 17.0625C17.9107 17.0626 18.051 17.0626 18.1841 17.0619L18.9831 15.1564C18.7266 15.1844 18.3624 15.1875 17.6532 15.1875H16.5769Z", fill: "#EB8C00" }),
        React__default.createElement("path", { d: "M10.9347 16.6152C10.8361 15.6854 11.5651 14.875 12.5002 14.875C13.4353 14.875 14.1642 15.6853 14.0656 16.6152L13.7087 19.9805C13.6547 20.4891 13.2257 20.875 12.7142 20.875H12.2861C11.7746 20.875 11.3456 20.4891 11.2917 19.9805L10.9347 16.6152Z", fill: "#EB8C00" }),
        React__default.createElement("path", { d: "M8.875 21.5312C8.875 20.5475 9.67249 19.75 10.6562 19.75H14.3438C15.3275 19.75 16.125 20.5475 16.125 21.5312C16.125 21.8592 15.8592 22.125 15.5312 22.125H9.46875C9.14083 22.125 8.875 21.8592 8.875 21.5312Z", fill: "#FFD800" }),
        React__default.createElement("path", { d: "M6.88325 14.6524C5.89136 12.0714 5.39541 10.7809 5.56796 9.74082C5.75596 8.6076 6.43705 7.61619 7.42741 7.03418C8.33639 6.5 9.72434 6.5 12.5002 6.5C15.2761 6.5 16.664 6.5 17.573 7.03418C18.5634 7.61619 19.2445 8.6076 19.4325 9.74082C19.605 10.7809 19.1091 12.0714 18.1172 14.6524C17.6137 15.9625 17.362 16.6176 16.9476 17.1125C16.494 17.6543 15.9009 18.0617 15.2324 18.2908C14.6218 18.5 13.9146 18.5 12.5002 18.5C11.0858 18.5 10.3786 18.5 9.768 18.2908C9.09952 18.0617 8.5064 17.6543 8.0528 17.1125C7.63848 16.6176 7.38674 15.9625 6.88325 14.6524Z", fill: "#FFD800" }),
        React__default.createElement("path", { d: "M17.903 7.86713C18.1516 8.78956 17.8918 9.94993 17.3722 12.2707L17.1257 13.372C16.8386 14.6541 16.6951 15.2952 16.4026 15.8048C15.9154 16.6532 15.1253 17.286 14.1908 17.5761C13.6297 17.7503 12.9728 17.7503 11.6589 17.7503C10.5622 17.7503 10.0139 17.7503 9.52467 17.6202C8.79145 17.4253 8.13341 17.02 7.63037 16.4569C7.76277 16.7161 7.89603 16.9258 8.05248 17.1127C8.50608 17.6545 9.0992 18.062 9.76768 18.291C10.3783 18.5002 11.0855 18.5002 12.4999 18.5002C13.9143 18.5002 14.6215 18.5002 15.2321 18.291C15.9006 18.062 16.4937 17.6545 16.9473 17.1127C17.3616 16.6178 17.6134 15.9627 18.1169 14.6526C19.1088 12.0716 19.6047 10.7811 19.4321 9.74103C19.2442 8.60781 18.5631 7.6164 17.5727 7.0344C17.572 7.034 17.5713 7.0336 17.5707 7.0332C17.7122 7.29512 17.8242 7.57465 17.903 7.86713Z", fill: "#FFAF00" }),
        React__default.createElement("path", { d: "M20.1942 7.55201C20.1249 7.816 19.7501 7.816 19.6808 7.55201L19.308 6.13133C19.2837 6.03869 19.2113 5.96634 19.1187 5.94202L17.698 5.56917C17.434 5.49988 17.434 5.12512 17.698 5.05584L19.1187 4.68298C19.2113 4.65867 19.2837 4.58632 19.308 4.49368L19.6808 3.073C19.7501 2.809 20.1249 2.809 20.1942 3.073L20.567 4.49368C20.5913 4.58632 20.6637 4.65867 20.7563 4.68298L22.177 5.05584C22.441 5.12512 22.441 5.49988 22.177 5.56917L20.7563 5.94202C20.6637 5.96634 20.5913 6.03869 20.567 6.13133L20.1942 7.55201Z", fill: "#FEED8D" }),
        React__default.createElement("path", { d: "M4.46705 4.12184C4.50969 3.95939 4.74031 3.95939 4.78295 4.12184L5.0124 4.99611C5.02736 5.05312 5.07188 5.09764 5.12889 5.1126L6.00316 5.34205C6.16561 5.38469 6.16561 5.61531 6.00316 5.65795L5.12889 5.8874C5.07188 5.90236 5.02736 5.94688 5.0124 6.00389L4.78295 6.87816C4.74031 7.04061 4.50969 7.04061 4.46705 6.87816L4.2376 6.00389C4.22264 5.94688 4.17812 5.90236 4.12111 5.8874L3.24684 5.65795C3.08439 5.61531 3.08439 5.38469 3.24684 5.34205L4.12111 5.1126C4.17812 5.09764 4.22264 5.05312 4.2376 4.99611L4.46705 4.12184Z", fill: "#FEED8D" }),
        React__default.createElement("path", { d: "M5.3257 21.0184C5.2884 21.1605 5.0866 21.1605 5.0493 21.0184L4.84853 20.2534C4.83543 20.2035 4.79648 20.1646 4.74659 20.1515L3.98161 19.9507C3.83946 19.9134 3.83946 19.7116 3.98161 19.6743L4.74659 19.4735C4.79648 19.4604 4.83543 19.4215 4.84853 19.3716L5.0493 18.6066C5.0866 18.4645 5.2884 18.4645 5.3257 18.6066L5.52647 19.3716C5.53957 19.4215 5.57852 19.4604 5.62841 19.4735L6.39339 19.6743C6.53554 19.7116 6.53554 19.9134 6.39339 19.9507L5.62841 20.1515C5.57852 20.1646 5.53957 20.2035 5.52647 20.2534L5.3257 21.0184Z", fill: "#FEED8D" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.13603 7.98393C8.40807 8.2437 8.418 8.67482 8.15822 8.94685L8.04567 9.06471C7.79436 9.32787 7.65414 9.67776 7.65414 10.0416L7.65414 10.2898C7.65414 10.6659 7.34921 10.9708 6.97306 10.9708C6.59692 10.9708 6.29199 10.6659 6.29199 10.2898L6.29199 10.0416C6.29199 9.32735 6.56725 8.64055 7.06056 8.12398L7.17311 8.00611C7.43289 7.73408 7.864 7.72415 8.13603 7.98393Z", fill: "#FEED8D" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.93527 2.21472C10.1387 2.409 10.1461 2.73142 9.95187 2.93487L9.86769 3.02302C9.67974 3.21983 9.57487 3.4815 9.57487 3.75363V3.93921C9.57487 4.22052 9.34682 4.44857 9.06551 4.44857C8.7842 4.44857 8.55615 4.22052 8.55615 3.93921V3.75363C8.55615 3.21944 8.76201 2.70579 9.13094 2.31946L9.21512 2.23131C9.4094 2.02786 9.73183 2.02044 9.93527 2.21472Z", fill: "#FEED8D" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.8469 2.21472C15.0503 2.409 15.0578 2.73142 14.8635 2.93487L14.7793 3.02302C14.5914 3.21983 14.4865 3.4815 14.4865 3.75363V3.93921C14.4865 4.22052 14.2584 4.44857 13.9771 4.44857C13.6958 4.44857 13.4678 4.22052 13.4678 3.93921V3.75363C13.4678 3.21944 13.6736 2.70579 14.0426 2.31946L14.1267 2.23131C14.321 2.02786 14.6434 2.02044 14.8469 2.21472Z", fill: "#FEED8D" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.789 9.61642C12.789 9.0473 13.2462 8.58594 13.8102 8.58594C14.4493 8.58594 14.9313 9.17163 14.814 9.80558L14.5186 11.4019C15.2601 11.7867 15.832 12.412 15.832 13.2088C15.832 13.9251 15.3629 14.5072 14.7441 14.8888C14.1184 15.2747 13.2798 15.5 12.375 15.5C11.4702 15.5 10.6316 15.2747 10.0059 14.8888C9.38712 14.5072 8.91797 13.9251 8.91797 13.2088C8.91797 12.4166 9.48346 11.7938 10.2182 11.4087L9.92155 9.80559C9.80423 9.17163 10.2863 8.58594 10.9254 8.58594C11.4894 8.58594 11.9466 9.04731 11.9466 9.61642L11.9466 10.9347C12.087 10.9235 12.23 10.9177 12.375 10.9177C12.515 10.9177 12.6532 10.9231 12.789 10.9336V9.61642Z", fill: "#FFAF00" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.789 9.15548C12.789 8.58636 13.2462 8.125 13.8102 8.125C14.4493 8.125 14.9313 8.71069 14.814 9.34464L14.5186 10.9409C15.2601 11.3257 15.832 11.9511 15.832 12.7479C15.832 13.4642 15.3629 14.0463 14.7441 14.4279C14.1184 14.8137 13.2798 15.0391 12.375 15.0391C11.4702 15.0391 10.6316 14.8137 10.0059 14.4279C9.38712 14.0463 8.91797 13.4642 8.91797 12.7479C8.91797 11.9557 9.48346 11.3329 10.2182 10.9478L9.92155 9.34465C9.80423 8.7107 10.2863 8.12501 10.9254 8.12501C11.4894 8.12501 11.9466 8.58637 11.9466 9.15548L11.9466 10.4738C12.087 10.4625 12.23 10.4567 12.375 10.4567C12.515 10.4567 12.6532 10.4621 12.789 10.4726V9.15548ZM11.6782 12.3681C11.6782 12.73 11.4783 13.0234 11.2317 13.0234C10.9851 13.0234 10.7852 12.73 10.7852 12.3681C10.7852 12.0061 10.9851 11.7127 11.2317 11.7127C11.4783 11.7127 11.6782 12.0061 11.6782 12.3681ZM13.5861 13.0234C13.8327 13.0234 14.0326 12.73 14.0326 12.368C14.0326 12.0061 13.8327 11.7127 13.5861 11.7127C13.3395 11.7127 13.1396 12.0061 13.1396 12.368C13.1396 12.73 13.3395 13.0234 13.5861 13.0234Z", fill: "#ED8103" })));
};

var Icon$u = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 40 40" }, props),
        React__default.createElement("path", { opacity: "0.9", d: "M19.9959 4.8377L20.7771 3.82105C20.5523 3.64825 20.2766 3.55457 19.9931 3.55457C19.7095 3.55457 19.4339 3.64825 19.209 3.82105L19.9959 4.8377ZM33.425 8.7837H34.7059C34.7081 8.61378 34.6767 8.44509 34.6134 8.28737C34.5502 8.12965 34.4563 7.98603 34.3372 7.8648C34.2181 7.74358 34.0762 7.64714 33.9196 7.58107C33.763 7.515 33.5949 7.4806 33.425 7.47985V8.7837ZM19.9959 36.2161L19.2837 37.2845C19.4936 37.425 19.7405 37.5 19.9931 37.5C20.2457 37.5 20.4925 37.425 20.7024 37.2845L19.9959 36.2161ZM6.57841 8.7837V7.49709C6.40847 7.49783 6.24036 7.53223 6.0838 7.5983C5.92723 7.66437 5.7853 7.76081 5.66621 7.88204C5.54712 8.00326 5.45322 8.14688 5.38995 8.3046C5.32667 8.46232 5.29526 8.63101 5.29754 8.80093L6.57841 8.7837ZM19.2148 5.84861C25.0275 10.3518 31.6846 10.0646 33.4307 10.0646V7.49709C31.6214 7.49709 25.8259 7.72684 20.7943 3.82105L19.2148 5.84861ZM32.1499 8.76073C32.0522 14.7113 31.7995 18.91 31.317 22.0174C30.8345 25.1248 30.1682 26.9399 29.2894 28.238C28.4106 29.5361 27.2848 30.3804 25.6364 31.3626C23.9879 32.3448 21.8799 33.4361 19.2837 35.1535L20.7312 37.2845C23.1895 35.6475 25.2343 34.6021 26.9747 33.5625C28.7284 32.6075 30.2502 31.2779 31.4319 29.6682C32.5806 27.9451 33.3675 25.6475 33.873 22.408C34.3785 19.1685 34.6369 14.809 34.7346 8.80093L32.1499 8.76073ZM20.7312 35.1535C18.1522 33.4304 16.05 32.362 14.413 31.3684C12.776 30.3747 11.6502 29.582 10.7656 28.238C9.8811 26.8939 9.16312 25.1076 8.66915 22.0174C8.17519 18.9273 7.95692 14.7113 7.85928 8.76073L5.29754 8.80093C5.39518 14.809 5.6594 19.18 6.15911 22.408C6.65882 25.636 7.42275 27.9336 8.59448 29.6682C9.77051 31.2788 11.2888 32.6088 13.0402 33.5625C14.7633 34.6021 16.8254 35.6475 19.2837 37.2845L20.7312 35.1535ZM6.57841 10.0646C8.30155 10.0646 14.9644 10.3518 20.7771 5.84861L19.209 3.82105C14.166 7.72684 8.37048 7.49709 6.57266 7.49709L6.57841 10.0646Z", fill: "#3688EB" })));
};

var Icon$t = function (_a) {
    var _b = _a.fillColor, fillColor = _b === void 0 ? "#B8ADD2" : _b, props = __rest(_a, ["fillColor"]);
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 15" }, props),
        React.createElement("path", { d: "M5.659 15c6.79 0 10.507-5.766 10.507-10.763 0-.16 0-.32-.01-.49A7.578 7.578 0 0018 1.79c-.663.3-1.376.5-2.127.6a3.824 3.824 0 001.63-2.1c-.713.44-1.503.75-2.352.92A3.6 3.6 0 0012.46 0C10.419 0 8.76 1.699 8.76 3.787c0 .3.039.58.098.86-3.064-.15-5.786-1.669-7.61-3.957A3.858 3.858 0 00.75 2.598c0 1.31.654 2.469 1.64 3.148a3.638 3.638 0 01-1.669-.47v.05c0 1.83 1.278 3.368 2.956 3.708-.312.09-.634.13-.976.13-.234 0-.468-.02-.692-.07.468 1.509 1.834 2.598 3.453 2.628a7.284 7.284 0 01-4.585 1.62c-.293 0-.595-.01-.878-.05A10.206 10.206 0 005.659 15z", fill: fillColor })));
};

var Icon$s = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
        React__default.createElement("path", { d: "M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" })));
};

var Icon$r = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M12 6.49999C14.76 6.49999 17 8.73999 17 11.5C17 12.01 16.9 12.5 16.76 12.96L19.82 16.02C21.21 14.79 22.31 13.25 23 11.49C21.27 7.10999 17 3.99999 12 3.99999C10.73 3.99999 9.51 4.19999 8.36 4.56999L10.53 6.73999C11 6.59999 11.49 6.49999 12 6.49999ZM2.71 3.15999C2.32 3.54999 2.32 4.17999 2.71 4.56999L4.68 6.53999C3.06 7.82999 1.77 9.52999 1 11.5C2.73 15.89 7 19 12 19C13.52 19 14.97 18.7 16.31 18.18L19.03 20.9C19.42 21.29 20.05 21.29 20.44 20.9C20.83 20.51 20.83 19.88 20.44 19.49L4.13 3.15999C3.74 2.76999 3.1 2.76999 2.71 3.15999ZM12 16.5C9.24 16.5 7 14.26 7 11.5C7 10.73 7.18 9.99999 7.49 9.35999L9.06 10.93C9.03 11.11 9 11.3 9 11.5C9 13.16 10.34 14.5 12 14.5C12.2 14.5 12.38 14.47 12.57 14.43L14.14 16C13.49 16.32 12.77 16.5 12 16.5ZM14.97 11.17C14.82 9.76999 13.72 8.67999 12.33 8.52999L14.97 11.17Z" })));
};

var Icon$q = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M12 4C7 4 2.73 7.11 1 11.5C2.73 15.89 7 19 12 19C17 19 21.27 15.89 23 11.5C21.27 7.11 17 4 12 4ZM12 16.5C9.24 16.5 7 14.26 7 11.5C7 8.74 9.24 6.5 12 6.5C14.76 6.5 17 8.74 17 11.5C17 14.26 14.76 16.5 12 16.5ZM12 8.5C10.34 8.5 9 9.84 9 11.5C9 13.16 10.34 14.5 12 14.5C13.66 14.5 15 13.16 15 11.5C15 9.84 13.66 8.5 12 8.5Z" })));
};

var Icon$p = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M3.63 3.63C3.24 4.02 3.24 4.65 3.63 5.04L7.29 8.7L7 9H4C3.45 9 3 9.45 3 10V14C3 14.55 3.45 15 4 15H7L10.29 18.29C10.92 18.92 12 18.47 12 17.58V13.41L16.18 17.59C15.69 17.96 15.16 18.27 14.58 18.5C14.22 18.65 14 19.03 14 19.42C14 20.14 14.73 20.6 15.39 20.33C16.19 20 16.94 19.56 17.61 19.02L18.95 20.36C19.34 20.75 19.97 20.75 20.36 20.36C20.75 19.97 20.75 19.34 20.36 18.95L5.05 3.63C4.66 3.24 4.03 3.24 3.63 3.63ZM19 12C19 12.82 18.85 13.61 18.59 14.34L20.12 15.87C20.68 14.7 21 13.39 21 12C21 8.17 18.6 4.89 15.22 3.6C14.63 3.37 14 3.83 14 4.46V4.65C14 5.03 14.25 5.36 14.61 5.5C17.18 6.54 19 9.06 19 12ZM10.29 5.71L10.12 5.88L12 7.76V6.41C12 5.52 10.92 5.08 10.29 5.71ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V9.76L16.48 12.24C16.49 12.16 16.5 12.08 16.5 12Z" })));
};

var Icon$o = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M3 10V14C3 14.55 3.45 15 4 15H7L10.29 18.29C10.92 18.92 12 18.47 12 17.58V6.41C12 5.52 10.92 5.07 10.29 5.7L7 9H4C3.45 9 3 9.45 3 10ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 4.45V4.65C14 5.03 14.25 5.36 14.6 5.5C17.18 6.53 19 9.06 19 12C19 14.94 17.18 17.47 14.6 18.5C14.24 18.64 14 18.97 14 19.35V19.55C14 20.18 14.63 20.62 15.21 20.4C18.6 19.11 21 15.84 21 12C21 8.16 18.6 4.89 15.21 3.6C14.63 3.37 14 3.82 14 4.45Z" })));
};

var Icon$n = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M2 21.8966H12C12.55 21.8966 13 22.3466 13 22.8966C13 23.4466 12.55 23.8966 12 23.8966H2C1.45 23.8966 1 23.4466 1 22.8966C1 22.3466 1.45 21.8966 2 21.8966ZM5.24 8.96661L8.07 6.13661L20.8 18.8666C21.58 19.6466 21.58 20.9166 20.8 21.6966C20.02 22.4766 18.75 22.4766 17.97 21.6966L5.24 8.96661ZM13.73 3.30661L16.56 6.13661C17.34 6.91661 17.34 8.18661 16.56 8.96661L15.14 10.3866L9.49 4.72661L10.9 3.31661C11.68 2.52661 12.95 2.52661 13.73 3.30661ZM3.83 10.3766L9.49 16.0366L8.08 17.4466C7.3 18.2266 6.03 18.2266 5.25 17.4466L2.42 14.6166C1.64 13.8366 1.64 12.5666 2.42 11.7866L3.83 10.3766Z" })));
};

var Icon$m = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Icon$l = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 40 40" }, props),
        React__default.createElement("path", { d: "M8.68096 12.4756C14.9323 6.39698 25.0677 6.39698 31.3191 12.4756L32.0714 13.2071C32.384 13.511 32.384 14.0038 32.0714 14.3077L29.4978 16.8103C29.3415 16.9622 29.0881 16.9622 28.9318 16.8103L27.8965 15.8036C23.5354 11.563 16.4647 11.563 12.1036 15.8036L10.9948 16.8817C10.8385 17.0336 10.5851 17.0336 10.4288 16.8817L7.85517 14.3791C7.54261 14.0752 7.54261 13.5824 7.85517 13.2785L8.68096 12.4756ZM36.6417 17.6511L38.9322 19.8783C39.2448 20.1823 39.2448 20.675 38.9322 20.979L28.6039 31.022C28.2913 31.3259 27.7846 31.3259 27.472 31.022C27.472 31.022 27.472 31.022 27.472 31.022L20.1416 23.8942C20.0634 23.8182 19.9367 23.8182 19.8586 23.8942C19.8586 23.8942 19.8586 23.8942 19.8586 23.8942L12.5283 31.022C12.2157 31.3259 11.709 31.3259 11.3964 31.022C11.3964 31.022 11.3964 31.022 11.3964 31.022L1.06775 20.9788C0.755186 20.6749 0.755186 20.1821 1.06775 19.8782L3.35833 17.6509C3.6709 17.347 4.17767 17.347 4.49024 17.6509L11.8208 24.7789C11.8989 24.8549 12.0256 24.8549 12.1038 24.7789C12.1038 24.7789 12.1038 24.7789 12.1038 24.7789L19.4339 17.6509C19.7465 17.347 20.2533 17.347 20.5658 17.6509C20.5658 17.6509 20.5658 17.6509 20.5658 17.6509L27.8964 24.7789C27.9745 24.8549 28.1012 24.8549 28.1794 24.7789L35.5098 17.6511C35.8223 17.3471 36.3291 17.3471 36.6417 17.6511Z", fill: "#3389FB" })));
};

var Icon$k = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M17.5 12.323C17.5 13.1514 16.8284 13.823 16 13.823C15.1716 13.823 14.5 13.1514 14.5 12.323C14.5 11.4946 15.1716 10.823 16 10.823C16.8284 10.823 17.5 11.4946 17.5 12.323Z" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21 5.323V7.603C21.59 7.953 22 8.583 22 9.323V15.323C22 16.063 21.59 16.693 21 17.043V19.323C21 20.423 20.1 21.323 19 21.323H5C3.89 21.323 3 20.423 3 19.323V5.323C3 4.223 3.89 3.323 5 3.323H19C20.1 3.323 21 4.223 21 5.323ZM13 15.323H20V9.323H13V15.323ZM5 5.323V19.323H19V17.323H13C11.9 17.323 11 16.423 11 15.323V9.323C11 8.223 11.9 7.323 13 7.323H19V5.323H5Z" })));
};

var Icon$j = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17 4C18.5 4 19 4.5 19 6L19 8C20.1046 8 21 8.89543 21 10L21 17C21 19 20 20 17.999 20H6C4 20 3 19 3 17L3 7C3 5.5 4.5 4 6 4L17 4ZM5 7C5 6.44772 5.44772 6 6 6L19 6L19 8L6 8C5.44772 8 5 7.55229 5 7ZM17 16C18 16 19.001 15 19 14C18.999 13 18 12 17 12C16 12 15 13 15 14C15 15 16 16 17 16Z" })));
};

var Icon$i = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7.75C12.5 7.33579 12.1642 7 11.75 7C11.3358 7 11 7.33579 11 7.75V13L15.5537 15.8022C15.9106 16.0219 16.3781 15.9106 16.5978 15.5537C16.8192 15.1938 16.7041 14.7225 16.3419 14.5051L12.5 12.2V7.75Z" })));
};

var Icon$h = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z" }),
        React__default.createElement("path", { d: "M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z" })));
};

var Icon$g = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$f = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$e = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$d = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" })));
};

var Icon$c = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" })));
};

var Icon$b = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$a = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$9 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 19 20" }, props),
        React.createElement("path", { d: "M9.853.8a1 1 0 00-1.706 0L4.43 6.882a1 1 0 00.853 1.522h7.434a1 1 0 00.853-1.522L9.853.8zm4.647 9.604c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zM0 16.904a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2H2a2 2 0 00-2 2v4z" })));
};

var Icon$8 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z" })));
};

var Icon$7 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React__default.createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React__default.createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React__default.createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React__default.createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React__default.createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React__default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React__default.createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React__default.createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$6 = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M19 5H17C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5H5C3.9 5 3 5.9 3 7V8C3 10.55 4.92 12.63 7.39 12.94C8.02 14.44 9.37 15.57 11 15.9V19H8C7.44772 19 7 19.4477 7 20C7 20.5523 7.44772 21 8 21H16C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19H13V15.9C14.63 15.57 15.98 14.44 16.61 12.94C19.08 12.63 21 10.55 21 8V7C21 5.9 20.1 5 19 5ZM5 8V7H7V10.82C5.84 10.4 5 9.3 5 8ZM12 14C10.35 14 9 12.65 9 11V5H15V11C15 12.65 13.65 14 12 14ZM19 8C19 9.3 18.16 10.4 17 10.82V7H19V8Z" })));
};

var Icon$5 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 22 20" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.207 17.836a1 1 0 011-1v-2a1 1 0 01-1-1v-2a1 1 0 011-1h2.404l-1.904-3.728a6 6 0 00-3.234-2.889l1.05-2.801a.75.75 0 00-.825-1.004l-5.24.874a.75.75 0 00-.547 1.075l.945 1.889a6 6 0 00-3.15 2.856l-2.042 4c-2.038 3.992.861 8.728 5.344 8.728h4.398c.635 0 1.239-.095 1.801-.27v-1.73zM8.171 7.086a.75.75 0 01.75.75v.302a2.25 2.25 0 011.476 1.082l.14.244a.75.75 0 11-1.303.745l-.14-.245a.75.75 0 00-.65-.378h-.487a.75.75 0 100 1.5h.687a2.25 2.25 0 01.277 4.484v.266a.75.75 0 01-1.5 0v-.3a2.25 2.25 0 01-1.476-1.083l-.14-.244a.75.75 0 011.303-.745l.14.245a.75.75 0 00.65.377h.746a.75.75 0 100-1.5h-.687a2.25 2.25 0 01-.536-4.435v-.315a.75.75 0 01.75-.75z" }),
        React.createElement("path", { d: "M14.707 14.836a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-6zM13.707 11.836a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-6zM13.707 17.836a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-6z" })));
};

var Icon$4 = function (props) { return (React.createElement(Svg, __assign({ viewBox: "0 0 19 17" }, props),
    React.createElement("path", { d: "M16.5 2h-2a2 2 0 00-2-2h-6a2 2 0 00-2 2h-2c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 008.5 12.9V15h-3a1 1 0 100 2h8a1 1 0 100-2h-3v-2.1a5.01 5.01 0 003.61-2.96C16.58 9.63 18.5 7.55 18.5 5V4c0-1.1-.9-2-2-2zm-14 3V4h2v3.82C3.34 7.4 2.5 6.3 2.5 5zm7 6c-1.65 0-3-1.35-3-3V2h6v6c0 1.65-1.35 3-3 3zm7-6c0 1.3-.84 2.4-2 2.82V4h2v1z" }))); };

var Icon$3 = function (props) { return (React.createElement(Svg, __assign({ viewBox: "0 0 18 20" }, props),
    React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.95.446a1.5 1.5 0 00-1.11 1.808c.08.327.457 1.213.877 2.15H2c-1.1 0-2 .9-2 2v1c0 .319.03.63.087.931.401 2.111 2.142 3.738 4.303 4.009A5.01 5.01 0 008 15.304v2.1H5a1 1 0 100 2h8.006a1 1 0 00-.006-2h-3v-2.1a5.013 5.013 0 003.61-2.96c.309-.039.609-.105.898-.197C16.53 11.507 18 9.635 18 7.404v-1c0-1.1-.9-2-2-2h-3.718c.42-.937.798-1.823.877-2.15a1.5 1.5 0 00-2.918-.7l-.683 2.85H8.442l-.684-2.85A1.5 1.5 0 005.949.446zM16 7.404c0 1.3-.84 2.4-2 2.82v-3.82h2v1zm-12 2.82c-1.16-.42-2-1.52-2-2.82v-1h2v3.82z" }))); };

var Icon$2 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 24" }, props),
        React.createElement("path", { d: "M20.497 4.6l-.004-.028-.006-.036-.008-.033-.007-.03-.012-.032-.01-.03-.014-.028-.014-.03-.016-.027-.018-.03-.021-.028-.018-.024a.663.663 0 00-.044-.048v-.001a.66.66 0 00-.049-.044l-.024-.018-.028-.02-.03-.018-.026-.016-.03-.015c-.01-.004-.02-.01-.03-.013l-.03-.011-.03-.011-.031-.008-.033-.008-.035-.005-.03-.005A.684.684 0 0019.834 4h-4.667a.667.667 0 100 1.333h3.057l-4.862 4.862a.667.667 0 10.943.943l4.862-4.862v3.057a.667.667 0 101.333 0V4.667a.658.658 0 00-.003-.066zM10.696 12.861l-4.862 4.862v-3.057a.667.667 0 10-1.333 0v4.667l.003.066.005.029.005.035.008.033.008.03.01.032.012.03.013.029.015.03.016.027.017.029.021.028.018.024a.663.663 0 00.093.093l.024.018.029.021.029.018.026.016.03.014.03.014.03.01.031.012.03.007.033.008.036.006.029.004a.657.657 0 00.066.003h4.666a.667.667 0 000-1.333H6.777l4.862-4.862a.667.667 0 00-.943-.943z" })));
};

var Icon$1 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("path", { d: "M12.327 13.27c0-.01-.003-.019-.004-.028l-.005-.036-.009-.033-.007-.03-.011-.032-.011-.03-.014-.028-.014-.03c-.005-.01-.01-.019-.016-.027l-.018-.03-.021-.028-.018-.024a.692.692 0 00-.044-.049.674.674 0 00-.049-.044l-.024-.018-.028-.02-.03-.018-.026-.016-.03-.015c-.01-.005-.02-.01-.03-.013l-.03-.011-.03-.011-.031-.008-.033-.008-.035-.006-.03-.004a.689.689 0 00-.065-.003H6.997a.667.667 0 000 1.333h3.057l-4.862 4.862a.667.667 0 10.943.943l4.862-4.862v3.057a.667.667 0 001.333 0v-4.666a.689.689 0 00-.003-.066zM19.862 4.195L15 9.057V6a.667.667 0 10-1.333 0v4.667c0 .022.001.044.003.065l.005.03.005.035.008.033.008.03.01.032.012.03.013.029.015.03.016.027.017.029.021.028.018.024a.692.692 0 00.093.093l.024.018.028.021.03.018.027.015.03.015.029.014.03.01.031.012.03.007.033.008.036.006.029.004a.688.688 0 00.066.003H19A.667.667 0 0019 10h-3.057l4.862-4.862a.667.667 0 00-.943-.943z" })));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AccountIcon: Icon$2h,
    AccountFilledIcon: Icon$2g,
    AddIcon: Icon$2f,
    ArrowBackIcon: Icon$2e,
    ArrowDownIcon: Icon$2d,
    ArrowDropDownIcon: Icon$2c,
    ArrowDropUpIcon: Icon$2b,
    ArrowFirstIcon: Icon$2a,
    ArrowForwardIcon: Icon$29,
    ArrowLastIcon: Icon$28,
    ArrowUpIcon: Icon$27,
    AutoRenewIcon: Icon$26,
    BinanceIcon: Icon$25,
    BinanceChainIcon: Icon$24,
    BlockIcon: Icon$2j,
    BnbUsdtPairTokenIcon: Icon$23,
    BscScanIcon: Icon$22,
    BunnyCardsIcon: Icon$21,
    BunnyPlaceholderIcon: Icon$20,
    BurnedAmountIcon: Icon$1$,
    CameraIcon: Icon$1_,
    Cards: Icon$1Z,
    CardViewIcon: Icon$1Y,
    CalculateIcon: Icon$1X,
    CircleOutlineIcon: Icon$1W,
    ChartIcon: Icon$1V,
    CheckmarkIcon: Icon$1U,
    CheckmarkCircleIcon: Icon$2l,
    CheckmarkCircleFillIcon: Icon$1T,
    ChevronDownIcon: Icon$1S,
    ChevronLeftIcon: Icon$1R,
    ChevronRightIcon: Icon$1Q,
    ChevronUpIcon: Icon$1P,
    CloseIcon: Icon$1O,
    CogIcon: Icon$1N,
    Coin98Icon: Icon$1M,
    CommunityIcon: Icon$1L,
    CommunityFilledIcon: Icon$1K,
    CopyIcon: Icon$1J,
    CrownIcon: Icon$1I,
    CurrencyIcon: Icon$1H,
    CurrentDistributionIcon: Icon$1G,
    DownArrowIcon: Icon$1F,
    EarnIcon: Icon$1E,
    EarnFilledIcon: Icon$1D,
    ErrorIcon: Icon$2k,
    EllipsisIcon: Icon$1C,
    InstagramIcon: Icon$1B,
    GithubIcon: Icon$1A,
    HelpIcon: Icon$1z,
    HistoryIcon: Icon$1y,
    InfoIcon: Icon$2i,
    LanguageIcon: Icon$1x,
    LanguageCurrencyIcon: Icon$1w,
    LaurelLeftIcon: Icon$1v,
    LaurelRightIcon: Icon$1u,
    ListViewIcon: Icon$1t,
    LoginIcon: Icon$1s,
    LogoIcon: Icon$1r,
    LogoExabcIcon: Icon$1q,
    LogoExabcWhiteIcon: Icon$1p,
    LogoWithTextIcon: LogoWithTextIcon,
    LogoRoundIcon: Icon$1o,
    MathWalletIcon: Icon$1n,
    LogoutIcon: Icon$1m,
    MarketValueIcon: Icon$1l,
    MedalBronzeIcon: Icon$1k,
    MedalGoldIcon: Icon$1j,
    MedalPurpleIcon: Icon$1i,
    MedalSilverIcon: Icon$1h,
    MedalTealIcon: Icon$1g,
    MetamaskIcon: Icon$1f,
    MinusIcon: Icon$1e,
    MoreHorizontalIcon: Icon$1d,
    MoreVerticalIcon: Icon$1c,
    NftIcon: Icon$1b,
    NftFilledIcon: Icon$1a,
    NoProfileAvatarIcon: Icon$19,
    OpenNewIcon: Icon$18,
    PancakesIcon: Icon$17,
    PencilIcon: Icon$16,
    PancakeRoundIcon: Icon$15,
    PocketWatchIcon: Icon$14,
    PlayCircleOutlineIcon: Icon$13,
    PredictionsIcon: Icon$12,
    PrizeIcon: Icon$11,
    ProposalIcon: Icon$10,
    RemoveIcon: Icon$$,
    VerifiedIcon: Icon$_,
    ProgressBunny: Icon$Z,
    PresentCheckIcon: Icon$Y,
    PresentWonIcon: Icon$X,
    PresentNoneIcon: Icon$W,
    RedditIcon: Icon$V,
    RefreshIcon: Icon$U,
    ResourcesIcon: Icon$T,
    ResourcesFilledIcon: Icon$S,
    SafePalIcon: Icon$R,
    SearchIcon: Icon$Q,
    SellIcon: Icon$P,
    ShareIcon: Icon$O,
    SmallDotIcon: Icon$N,
    StarFillIcon: Icon$M,
    StarLineIcon: Icon$L,
    SwapIcon: Icon$K,
    SwapFillIcon: Icon$J,
    SwapVertIcon: Icon$I,
    SyncAltIcon: Icon$H,
    TeamPlayerIcon: Icon$G,
    TelegramIcon: Icon$F,
    TestnetIcon: Icon$E,
    Ticket: Icon$D,
    TicketFillIcon: Icon$C,
    TicketRound: Icon$B,
    TimerIcon: Icon$A,
    TokenPocketIcon: Icon$z,
    TotalSupplyIcon: Icon$y,
    TradeIcon: Icon$x,
    TradeFilledIcon: Icon$w,
    TrophyGoldIcon: Icon$v,
    TrustWalletIcon: Icon$u,
    TwitterIcon: Icon$t,
    TuneIcon: Icon$s,
    VisibilityOff: Icon$r,
    VisibilityOn: Icon$q,
    VolumeOffIcon: Icon$p,
    VolumeUpIcon: Icon$o,
    VoteIcon: Icon$n,
    WarningIcon: Icon$m,
    WalletConnectIcon: Icon$l,
    WalletIcon: Icon$k,
    WalletFilledIcon: Icon$j,
    WaitIcon: Icon$i,
    FarmIcon: Icon$h,
    GroupsIcon: Icon$g,
    HamburgerIcon: Icon$f,
    HamburgerCloseIcon: Icon$e,
    HomeIcon: Icon$d,
    IfoIcon: Icon$c,
    MoonIcon: Icon$b,
    MoreIcon: Icon$a,
    NftFillIcon: Icon$9,
    PoolIcon: Icon$8,
    SunIcon: Icon$7,
    TeamBattleIcon: Icon$6,
    TicketIcon: Icon$D,
    EarnFillIcon: Icon$5,
    TrophyIcon: Icon$4,
    TrophyFillIcon: Icon$3,
    ExpandIcon: Icon$2,
    ShrinkIcon: Icon$1,
    Svg: Svg
});

var ExpandableButton = function (_a) {
    var onClick = _a.onClick, expanded = _a.expanded, children = _a.children;
    return (React__default.createElement(IconButton, { "aria-label": "Hide or show expandable content", onClick: onClick },
        children,
        expanded ? React__default.createElement(Icon$1P, { color: "invertedContrast" }) : React__default.createElement(Icon$1S, { color: "invertedContrast" })));
};
ExpandableButton.defaultProps = {
    expanded: false,
};
var ExpandableLabel = function (_a) {
    var onClick = _a.onClick, expanded = _a.expanded, children = _a.children;
    return (React__default.createElement(Button, { variant: "text", "aria-label": "Hide or show expandable content", onClick: onClick, endIcon: expanded ? React__default.createElement(Icon$1P, { color: "primary" }) : React__default.createElement(Icon$1S, { color: "primary" }) }, children));
};
ExpandableLabel.defaultProps = {
    expanded: false,
};

var Box = styled.div(templateObject_1$15 || (templateObject_1$15 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), background, border, layout, position, space);
var templateObject_1$15;

var Flex = styled(Box)(templateObject_1$14 || (templateObject_1$14 = __makeTemplateObject(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), flexbox);
var templateObject_1$14;

var variants$5 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$5.INFO : _b;
    switch (variant) {
        case variants$5.DANGER:
            return theme.colors.failure;
        case variants$5.WARNING:
            return theme.colors.warning;
        case variants$5.SUCCESS:
            return theme.colors.success;
        case variants$5.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$5.INFO; }
    switch (variant) {
        case variants$5.DANGER:
            return Icon$2j;
        case variants$5.WARNING:
            return Icon$2k;
        case variants$5.SUCCESS:
            return Icon$2l;
        case variants$5.INFO:
        default:
            return Icon$2i;
    }
};
var IconLabel = styled.div(templateObject_1$13 || (templateObject_1$13 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled.div(templateObject_2$y || (templateObject_2$y = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled.div(templateObject_3$f || (templateObject_3$f = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled(Flex)(templateObject_4$a || (templateObject_4$a = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React__default.createElement(StyledAlert, null,
        React__default.createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React__default.createElement(Icon, { color: "currentColor", width: "24px" })),
        React__default.createElement(Details, { hasHandler: !!onClick },
            React__default.createElement(Text, { bold: true }, title),
            typeof children === "string" ? React__default.createElement(Text, { as: "p" }, children) : children),
        onClick && (React__default.createElement(CloseHandler, null,
            React__default.createElement(IconButton, { scale: "sm", variant: "text", onClick: onClick },
                React__default.createElement(Icon$1O, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$13, templateObject_2$y, templateObject_3$f, templateObject_4$a;

var Grid = styled(Box)(templateObject_1$12 || (templateObject_1$12 = __makeTemplateObject(["\n  display: grid;\n  ", "\n  ", "\n"], ["\n  display: grid;\n  ", "\n  ", "\n"])), flexbox, grid);
var templateObject_1$12;

var scales$7 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$7.MD : _b;
    switch (scale) {
        case scales$7.SM:
            return "32px";
        case scales$7.LG:
            return "48px";
        case scales$7.MD:
        default:
            return "40px";
    }
};
var Input$1 = styled.input(templateObject_1$11 || (templateObject_1$11 = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n  border: 1px solid ", ";\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n  border: 1px solid ", ";\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.inputSecondary;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input$1.defaultProps = {
    scale: scales$7.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$11;

var SwitchUnitsButton = styled(IconButton)(templateObject_1$10 || (templateObject_1$10 = __makeTemplateObject(["\n  width: 16px;\n"], ["\n  width: 16px;\n"])));
var UnitContainer = styled(Text)(templateObject_2$x || (templateObject_2$x = __makeTemplateObject(["\n  margin-left: 4px;\n  text-align: right;\n  color: ", ";\n  white-space: nowrap;\n"], ["\n  margin-left: 4px;\n  text-align: right;\n  color: ", ";\n  white-space: nowrap;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var StyledBalanceInput = styled(Box)(templateObject_3$e || (templateObject_3$e = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  padding: 8px 16px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  padding: 8px 16px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme, isWarning = _a.isWarning;
    return theme.shadows[isWarning ? "warning" : "inset"];
});
var StyledInput$1 = styled(Input$1)(templateObject_4$9 || (templateObject_4$9 = __makeTemplateObject(["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: ", ";\n  border: none;\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"], ["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: ", ";\n  border: none;\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"])), function (_a) {
    var _b = _a.textAlign, textAlign = _b === void 0 ? "right" : _b;
    return textAlign;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var templateObject_1$10, templateObject_2$x, templateObject_3$e, templateObject_4$9;

var BalanceInput = function (_a) {
    var value = _a.value, _b = _a.placeholder, placeholder = _b === void 0 ? "0.0" : _b, onUserInput = _a.onUserInput, currencyValue = _a.currencyValue, inputProps = _a.inputProps, innerRef = _a.innerRef, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, _d = _a.decimals, decimals = _d === void 0 ? 18 : _d, unit = _a.unit, switchEditingUnits = _a.switchEditingUnits, props = __rest(_a, ["value", "placeholder", "onUserInput", "currencyValue", "inputProps", "innerRef", "isWarning", "decimals", "unit", "switchEditingUnits"]);
    var handleOnChange = function (e) {
        if (e.currentTarget.validity.valid) {
            onUserInput(e.currentTarget.value.replace(/,/g, "."));
        }
    };
    return (React__default.createElement(StyledBalanceInput, __assign({ isWarning: isWarning }, props),
        React__default.createElement(Flex, { justifyContent: "flex-end" },
            React__default.createElement(Box, null,
                React__default.createElement(Flex, { alignItems: "center" },
                    React__default.createElement(StyledInput$1, __assign({ pattern: "^[0-9]*[.,]?[0-9]{0," + decimals + "}$", inputMode: "decimal", min: "0", value: value, onChange: handleOnChange, placeholder: placeholder, ref: innerRef }, inputProps)),
                    unit && React__default.createElement(UnitContainer, null, unit)),
                currencyValue && (React__default.createElement(Text, { fontSize: "12px", textAlign: "right", color: "textSubtle" }, currencyValue))),
            switchEditingUnits && (React__default.createElement(Flex, { alignItems: "center", pl: "12px" },
                React__default.createElement(SwitchUnitsButton, { scale: "sm", variant: "text", onClick: switchEditingUnits },
                    React__default.createElement(Icon$I, { color: "textSubtle" })))))));
};

var Textfield = function (_a) {
    var label = _a.label, value = _a.value, placeholder = _a.placeholder, onUserInput = _a.onUserInput, inputProps = _a.inputProps, _b = _a.isWarning, isWarning = _b === void 0 ? false : _b;
    var handleOnChange = function (e) {
        onUserInput(e.target.value);
    };
    return (React__default.createElement(StyledBalanceInput, { isWarning: isWarning },
        React__default.createElement(Text, { fontSize: "14px" }, label),
        React__default.createElement(StyledInput$1, __assign({ value: value, onChange: handleOnChange, placeholder: placeholder, textAlign: "left" }, inputProps))));
};

var Separator = styled.div(templateObject_1$$ || (templateObject_1$$ = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled.ul(templateObject_2$w || (templateObject_2$w = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  a {\n    color: ", ";\n\n    &:hover {\n      color: ", ";\n    }\n  }\n\n  ", "\n"], ["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  a {\n    color: ", ";\n\n    &:hover {\n      color: ", ";\n    }\n  }\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primaryBright;
}, space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArray(__spreadArray([], accum), [item]);
        }
        return __spreadArray(__spreadArray([], accum), [
            React__default.createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React__default.createElement(Icon$1Q, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = Children.toArray(children).filter(function (child) { return isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React__default.createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React__default.createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$$, templateObject_2$w;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants$6.SUBTLE ? "input" : "deepGreyPrimary"];
};
var getBorderColor$1 = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants$6.SUBTLE ? "inputSecondary" : "disabled"];
};
var StyledButtonMenu = styled.div(templateObject_1$_ || (templateObject_1$_ = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50px;\n  display: ", ";\n  border: 1px solid ", ";\n  width: ", ";\n\n  & > button,\n  & > a {\n    flex: ", ";\n  }\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n\n  & > button,\n  & a {\n    box-shadow: none;\n  }\n\n  ", "\n  ", "\n"], ["\n  background-color: ", ";\n  border-radius: 50px;\n  display: ", ";\n  border: 1px solid ", ";\n  width: ", ";\n\n  & > button,\n  & > a {\n    flex: ", ";\n  }\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n\n  & > button,\n  & a {\n    box-shadow: none;\n  }\n\n  ",
    "\n  ", "\n"])), getBackgroundColor, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "flex" : "inline-flex");
}, getBorderColor$1, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "auto");
}, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? 1 : "auto");
}, function (_a) {
    var disabled = _a.disabled, theme = _a.theme, variant = _a.variant;
    if (disabled) {
        return "\n        opacity: 0.5;\n\n        & > button:disabled {\n          background-color: transparent;\n          color: " + (variant === variants$6.PRIMARY ? theme.colors.primary : theme.colors.textSubtle) + ";\n        }\n    ";
    }
    return "";
}, space);
var ButtonMenu$1 = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.scale, scale = _c === void 0 ? scales$8.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants$6.PRIMARY : _d, onItemClick = _a.onItemClick, disabled = _a.disabled, children = _a.children, _e = _a.fullWidth, fullWidth = _e === void 0 ? false : _e, props = __rest(_a, ["activeIndex", "scale", "variant", "onItemClick", "disabled", "children", "fullWidth"]);
    return (React__default.createElement(StyledButtonMenu, __assign({ disabled: disabled, variant: variant, fullWidth: fullWidth }, props), Children.map(children, function (child, index) {
        return cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
            scale: scale,
            variant: variant,
            disabled: disabled,
        });
    })));
};
var templateObject_1$_;

var InactiveButton = styled(Button)(templateObject_1$Z || (templateObject_1$Z = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return (variant === variants$6.PRIMARY ? theme.colors.primary : theme.colors.textSubtle);
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? variants$6.PRIMARY : _c, as = _a.as, props = __rest(_a, ["isActive", "variant", "as"]);
    if (!isActive) {
        return React__default.createElement(InactiveButton, __assign({ forwardedAs: as, variant: variant }, props));
    }
    return React__default.createElement(Button, __assign({ as: as, variant: variant }, props));
};
var templateObject_1$Z;

var PromotedGradient = keyframes(templateObject_1$Y || (templateObject_1$Y = __makeTemplateObject(["\n  0% {\n    background-position: 50% 0%;\n  }\n  50% {\n    background-position: 50% 100%;\n  }\n  100% {\n    background-position: 50% 0%;\n  }\n"], ["\n  0% {\n    background-position: 50% 0%;\n  }\n  50% {\n    background-position: 50% 100%;\n  }\n  100% {\n    background-position: 50% 0%;\n  }\n"])));
/**
 * Priority: Warning --> Success --> Active
 */
var getBorderColor = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, borderBackground = _a.borderBackground, theme = _a.theme;
    if (borderBackground) {
        return borderBackground;
    }
    if (isWarning) {
        return theme.colors.warning;
    }
    if (isSuccess) {
        return theme.colors.success;
    }
    if (isActive) {
        return "linear-gradient(180deg, " + theme.colors.primaryBright + ", " + theme.colors.secondary + ")";
    }
    return theme.colors.gradients.cardBorderGradients;
};
var StyledCard = styled.div(templateObject_3$d || (templateObject_3$d = __makeTemplateObject(["\n  background: ", ";\n  border-radius: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n\n  padding: 1px;\n\n  ", "\n"], ["\n  background: ", ";\n  border-radius: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ",
    "\n\n  padding: 1px;\n\n  ", "\n"])), getBorderColor, function (_a) {
    var theme = _a.theme;
    return theme.radii.card;
}, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, function (_a) {
    var isActive = _a.isActive;
    return isActive && css(templateObject_2$v || (templateObject_2$v = __makeTemplateObject(["\n      animation: ", " 3s ease infinite;\n      background-size: 400% 400%;\n    "], ["\n      animation: ", " 3s ease infinite;\n      background-size: 400% 400%;\n    "])), PromotedGradient);
}, space);
var StyledCardInner = styled(Box)(templateObject_4$8 || (templateObject_4$8 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  overflow: ", ";\n  background: ", ";\n  border-radius: ", ";\n"], ["\n  width: 100%;\n  height: 100%;\n  overflow: ", ";\n  background: ", ";\n  border-radius: ", ";\n"])), function (_a) {
    var hasCustomBorder = _a.hasCustomBorder;
    return (hasCustomBorder ? "initial" : "inherit");
}, function (_a) {
    var theme = _a.theme, background = _a.background;
    return background !== null && background !== void 0 ? background : theme.colors.cardBackground;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.card;
});
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$Y, templateObject_2$v, templateObject_3$d, templateObject_4$8;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, background = _a.background, props = __rest(_a, ["ribbon", "children", "background"]);
    return (React__default.createElement(StyledCard, __assign({}, props),
        React__default.createElement(StyledCardInner, { background: background, hasCustomBorder: !!props.borderBackground },
            ribbon,
            children)));
};

var CardBody = styled.div(templateObject_1$X || (templateObject_1$X = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$X;

var CardHeader = styled.div(templateObject_1$W || (templateObject_1$W = __makeTemplateObject(["\n  background: ", ";\n  border-radius: ", ";\n  ", "\n"], ["\n  background: ", ";\n  border-radius: ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "default" : _b;
    return theme.card.cardHeaderBackground[variant];
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.card + " " + theme.radii.card + " 0 0";
}, space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$W;

var CardFooter = styled.div(templateObject_1$V || (templateObject_1$V = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
}, space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$V;

var StyledCardRibbon = styled.div(templateObject_1$U || (templateObject_1$U = __makeTemplateObject(["\n  z-index: 10;\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: ", ";\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform: ", ";\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  z-index: 10;\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: ", ";\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform: ",
    ";\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var ribbonPosition = _a.ribbonPosition;
    return (ribbonPosition === "right" ? 0 : "auto");
}, function (_a) {
    var ribbonPosition = _a.ribbonPosition;
    return ribbonPosition === "right"
        ? "translateX(30%) translateY(0%) rotate(45deg)"
        : "translateX(0%) translateY(200%) rotate(-45deg)";
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text, ribbonPosition = _a.ribbonPosition, props = __rest(_a, ["variantColor", "text", "ribbonPosition"]);
    return (React__default.createElement(StyledCardRibbon, __assign({ variantColor: variantColor, ribbonPosition: ribbonPosition }, props),
        React__default.createElement("div", { title: text }, text)));
};
CardRibbon.defaultProps = {
    ribbonPosition: "right",
};
var templateObject_1$U;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = keyframes(templateObject_1$T || (templateObject_1$T = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = keyframes(templateObject_2$u || (templateObject_2$u = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled.div(templateObject_3$c || (templateObject_3$c = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, layout, space);
var Pulse = styled(Root)(templateObject_4$7 || (templateObject_4$7 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled(Root)(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React__default.createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React__default.createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$T, templateObject_2$u, templateObject_3$c, templateObject_4$7, templateObject_5$4;

var PriceLink = styled.a(templateObject_1$S || (templateObject_1$S = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var CakePrice = function (_a) {
    var cakePriceUsd = _a.cakePriceUsd, _b = _a.color, color = _b === void 0 ? "textSubtle" : _b;
    return cakePriceUsd ? (React__default.createElement(PriceLink, { href: "https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82", target: "_blank" },
        React__default.createElement(Icon$15, { width: "24px", mr: "8px" }),
        React__default.createElement(Text, { color: color, bold: true }, "$" + cakePriceUsd.toFixed(3)))) : (React__default.createElement(Skeleton, { width: 80, height: 24 }));
};
var CakePrice$1 = React__default.memo(CakePrice);
var templateObject_1$S;

var scales$6 = {
    SM: "sm",
    MD: "md",
};

var getScale$3 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$6.SM:
            return "24px";
        case scales$6.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled.input.attrs({ type: "checkbox" })(templateObject_1$R || (templateObject_1$R = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale$3, getScale$3, function (_a) {
    var theme = _a.theme;
    return theme.colors.greyPrimary;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales$6.MD,
};
var templateObject_1$R;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled.div(templateObject_1$Q || (templateObject_1$Q = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 400px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 400px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.colors.greyPrimary;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container$1 = styled.div(templateObject_2$t || (templateObject_2$t = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React__default.createElement(Container$1, null,
        target,
        React__default.createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$Q, templateObject_2$t;

var bunnyFall = keyframes(templateObject_1$P || (templateObject_1$P = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"])));
var Bunny = styled.div(templateObject_2$s || (templateObject_2$s = __makeTemplateObject(["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"], ["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"])), function (_a) {
    var position = _a.position;
    return position + "vw";
}, bunnyFall, function (_a) {
    var duration = _a.duration;
    return duration + "s";
}, function (_a) {
    var iterations = _a.iterations;
    return (Number.isFinite(iterations) ? String(iterations) : "infinite");
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.3 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 2.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 3.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 5.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 8 + "s";
});
var FallingBunnies = function (_a) {
    var _b = _a.count, count = _b === void 0 ? 30 : _b, _c = _a.size, size = _c === void 0 ? 32 : _c, _d = _a.iterations, iterations = _d === void 0 ? Infinity : _d, _e = _a.duration, duration = _e === void 0 ? 10 : _e;
    var bunnies = __spreadArray([], Array(count)).map(function (_, index) { return (React__default.createElement(Bunny, { key: String(index), position: Math.random() * 100, iterations: iterations, duration: duration },
        React__default.createElement(Icon$1r, { width: size, height: size }))); });
    return React__default.createElement("div", null, bunnies);
};
var templateObject_1$P, templateObject_2$s;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var scales$5 = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a$3;
var style = (_a$3 = {},
    _a$3[scales$5.MD] = {
        fontSize: "20px",
        fontSizeLg: "20px",
    },
    _a$3[scales$5.LG] = {
        fontSize: "24px",
        fontSizeLg: "24px",
    },
    _a$3[scales$5.XL] = {
        fontSize: "32px",
        fontSizeLg: "40px",
    },
    _a$3[scales$5.XXL] = {
        fontSize: "48px",
        fontSizeLg: "64px",
    },
    _a$3);
var Heading = styled(Text).attrs({ bold: true })(templateObject_1$O || (templateObject_1$O = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var scale = _a.scale;
    return style[scale || scales$5.MD].fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var scale = _a.scale;
    return style[scale || scales$5.MD].fontSizeLg;
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$O;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var StyledWrapper = styled.div(templateObject_1$N || (templateObject_1$N = __makeTemplateObject(["\n  max-height: ", "px;\n  max-width: ", "px;\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: \"\";\n    display: block;\n    padding-top: ", "%;\n  }\n\n  ", "\n"], ["\n  max-height: ", "px;\n  max-width: ", "px;\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: \"\";\n    display: block;\n    padding-top: ", "%;\n  }\n\n  ", "\n"])), function (_a) {
    var $height = _a.$height;
    return $height;
}, function (_a) {
    var $width = _a.$width;
    return $width;
}, function (_a) {
    var $width = _a.$width, $height = _a.$height;
    return ($height / $width) * 100;
}, space);
var Wrapper$3 = forwardRef(function (_a, ref) {
    var width = _a.width, height = _a.height, props = __rest(_a, ["width", "height"]);
    return React__default.createElement(StyledWrapper, __assign({ ref: ref, "$width": width, "$height": height }, props));
});
var templateObject_1$N;

var Placeholder = styled.div(templateObject_1$M || (templateObject_1$M = __makeTemplateObject(["\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"], ["\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"])));
var templateObject_1$M;

var StyledBackgroundImage = styled(Wrapper$3)(templateObject_1$L || (templateObject_1$L = __makeTemplateObject(["\n  background-repeat: no-repeat;\n  background-size: contain;\n"], ["\n  background-repeat: no-repeat;\n  background-size: contain;\n"])));
var BackgroundImage = function (_a) {
    var loadingPlaceholder = _a.loadingPlaceholder, src = _a.src, width = _a.width, height = _a.height, props = __rest(_a, ["loadingPlaceholder", "src", "width", "height"]);
    var _b = useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    var ref = useRef(null);
    var placeholder = loadingPlaceholder || React__default.createElement(Placeholder, null);
    useEffect(function () {
        var observer;
        if (ref.current) {
            var div_1 = ref.current;
            observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    var isIntersecting = entry.isIntersecting;
                    if (isIntersecting) {
                        if (src) {
                            // Load the image via an image element so we can show a placeholder until the image is downloaded
                            var img = document.createElement("img");
                            img.onload = function () {
                                div_1.style.backgroundImage = "url(\"" + src + "\")";
                                setIsLoaded(true);
                            };
                            img.src = src;
                        }
                        observer.disconnect();
                    }
                });
            }, observerOptions);
            observer.observe(div_1);
        }
        return function () {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [src, setIsLoaded]);
    return (React__default.createElement(StyledBackgroundImage, __assign({ ref: ref, width: width, height: height }, props), !isLoaded && placeholder));
};
var templateObject_1$L;

var StyledImage = styled.img(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"], ["\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, width = _a.width, height = _a.height, props = __rest(_a, ["src", "alt", "width", "height"]);
    var imgRef = useRef(null);
    var _b = useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    useEffect(function () {
        var observer;
        if (imgRef.current) {
            observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    var isIntersecting = entry.isIntersecting;
                    if (isIntersecting) {
                        setIsLoaded(true);
                        observer.disconnect();
                    }
                });
            }, observerOptions);
            observer.observe(imgRef.current);
        }
        return function () {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [src]);
    return (React__default.createElement(Wrapper$3, __assign({ ref: imgRef, height: height, width: width }, props), isLoaded ? React__default.createElement(StyledImage, { src: src, alt: alt }) : React__default.createElement(Placeholder, null)));
};
var templateObject_1$K;

var TokenImage = styled(Image)(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  &:before {\n    border-radius: 50%;\n    border: 1px solid rgba(0, 0, 0, 0.25);\n    content: \"\";\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 7;\n  }\n"], ["\n  &:before {\n    border-radius: 50%;\n    border: 1px solid rgba(0, 0, 0, 0.25);\n    content: \"\";\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 7;\n  }\n"])));
var templateObject_1$J;

var variants$4 = {
    DEFAULT: "default",
    INVERTED: "inverted",
};

var _a$2, _b$2;
var StyledPrimaryImage = styled(TokenImage)(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  position: absolute;\n  width: ", "; // 92, 82 are arbitrary numbers to fit the variant\n\n  ", "\n"], ["\n  position: absolute;\n  width: ",
    "; // 92, 82 are arbitrary numbers to fit the variant\n\n  ",
    "\n"])), function (_a) {
    var variant = _a.variant;
    return variant === variants$4.DEFAULT ? "92%" : "82%";
}, variant$1({
    variants: (_a$2 = {},
        _a$2[variants$4.DEFAULT] = {
            bottom: "auto",
            left: 0,
            right: "auto",
            top: 0,
            zIndex: 5,
        },
        _a$2[variants$4.INVERTED] = {
            bottom: 0,
            left: "auto",
            right: 0,
            top: "auto",
            zIndex: 6,
        },
        _a$2),
}));
var StyledSecondaryImage = styled(TokenImage)(templateObject_2$r || (templateObject_2$r = __makeTemplateObject(["\n  position: absolute;\n  width: 50%;\n\n  ", "\n"], ["\n  position: absolute;\n  width: 50%;\n\n  ",
    "\n"])), variant$1({
    variants: (_b$2 = {},
        _b$2[variants$4.DEFAULT] = {
            bottom: 0,
            left: "auto",
            right: 0,
            top: "auto",
            zIndex: 6,
        },
        _b$2[variants$4.INVERTED] = {
            bottom: "auto",
            left: 0,
            right: "auto",
            top: 0,
            zIndex: 5,
        },
        _b$2),
}));
var templateObject_1$I, templateObject_2$r;

var TokenPairImage = function (_a) {
    var primarySrc = _a.primarySrc, secondarySrc = _a.secondarySrc, width = _a.width, height = _a.height, _b = _a.variant, variant = _b === void 0 ? variants$4.DEFAULT : _b, _c = _a.primaryImageProps, primaryImageProps = _c === void 0 ? {} : _c, _d = _a.secondaryImageProps, secondaryImageProps = _d === void 0 ? {} : _d, props = __rest(_a, ["primarySrc", "secondarySrc", "width", "height", "variant", "primaryImageProps", "secondaryImageProps"]);
    var secondaryImageSize = Math.floor(width / 2);
    return (React__default.createElement(Wrapper$3, __assign({ position: "relative", width: width, height: height }, props),
        React__default.createElement(StyledPrimaryImage, __assign({ variant: variant, src: primarySrc, width: width, height: height }, primaryImageProps)),
        React__default.createElement(StyledSecondaryImage, __assign({ variant: variant, src: secondarySrc, width: secondaryImageSize, height: secondaryImageSize }, secondaryImageProps))));
};

var StyledProfileAvatar = styled(BackgroundImage)(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  border-radius: 50%;\n"], ["\n  border-radius: 50%;\n"])));
var StyledBunnyPlaceholder = styled(Icon$20)(templateObject_2$q || (templateObject_2$q = __makeTemplateObject(["\n  height: 100%;\n  width: 100%;\n"], ["\n  height: 100%;\n  width: 100%;\n"])));
var ProfileAvatar = function (props) { return (React__default.createElement(StyledProfileAvatar, __assign({ loadingPlaceholder: React__default.createElement(StyledBunnyPlaceholder, null) }, props))); };
var templateObject_1$H, templateObject_2$q;

var getPadding$1 = function (scale, hasIcon) {
    if (!hasIcon) {
        return "16px";
    }
    switch (scale) {
        case scales$7.SM:
            return "32px";
        case scales$7.LG:
            return "56px";
        case scales$7.MD:
        default:
            return "48px";
    }
};
var StyledInputGroup = styled(Box)(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  ", " {\n    padding-left: ", ";\n    padding-right: ", ";\n  }\n"], ["\n  ", " {\n    padding-left: ", ";\n    padding-right: ", ";\n  }\n"])), Input$1, function (_a) {
    var hasStartIcon = _a.hasStartIcon, scale = _a.scale;
    return getPadding$1(scale, hasStartIcon);
}, function (_a) {
    var hasEndIcon = _a.hasEndIcon, scale = _a.scale;
    return getPadding$1(scale, hasEndIcon);
});
var InputIcon = styled.div(templateObject_2$p || (templateObject_2$p = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  height: 100%;\n  position: absolute;\n  top: 0;\n\n  ", "\n"], ["\n  align-items: center;\n  display: flex;\n  height: 100%;\n  position: absolute;\n  top: 0;\n\n  ",
    "\n"])), function (_a) {
    var isEndIcon = _a.isEndIcon, scale = _a.scale;
    return isEndIcon
        ? "\n    right: " + (scale === scales$7.SM ? "8px" : "16px") + ";\n  "
        : "\n    left: " + (scale === scales$7.SM ? "8px" : "16px") + ";\n  ";
});
var InputGroup = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$7.MD : _b, startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["scale", "startIcon", "endIcon", "children"]);
    return (React__default.createElement(StyledInputGroup, __assign({ scale: scale, width: "100%", position: "relative", hasStartIcon: !!startIcon, hasEndIcon: !!endIcon }, props),
        startIcon && React__default.createElement(InputIcon, { scale: scale }, startIcon),
        cloneElement(children, { scale: scale }),
        endIcon && (React__default.createElement(InputIcon, { scale: scale, isEndIcon: true }, endIcon))));
};
var templateObject_1$G, templateObject_2$p;

var GridLayout$1 = styled(Grid)(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$F;

var GridLayout = styled(GridLayout$1)(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$E;

var StyledLink$1 = styled(Text)(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React__default.createElement(StyledLink$1, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$D;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default.createElement(Link, __assign({ external: true }, props),
        children,
        React__default.createElement(Icon$18, { color: props.color ? props.color : "primary", ml: "4px" })));
};

var variants$3 = {
    warning: {
        background: "#FFB23719",
        borderColor: "warning",
    },
    danger: {
        background: "#ED4B9E19",
        borderColor: "failure",
    },
};

var Icons$2 = {
    warning: Icon$m,
    danger: Icon$2k,
};
var MessageContainer = styled.div(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  display: flex;\n  background-color: gray;\n  padding: 16px;\n  border-radius: 16px;\n  border: solid 1px;\n\n  ", "\n  ", "\n"], ["\n  display: flex;\n  background-color: gray;\n  padding: 16px;\n  border-radius: 16px;\n  border: solid 1px;\n\n  ", "\n  ",
    "\n"])), space, variant$1({
    variants: variants$3,
}));
var Message = function (_a) {
    var children = _a.children, variant = _a.variant, icon = _a.icon, props = __rest(_a, ["children", "variant", "icon"]);
    var Icon = Icons$2[variant];
    return (React__default.createElement(MessageContainer, __assign({ variant: variant }, props),
        React__default.createElement(Box, { mr: "12px" }, icon !== null && icon !== void 0 ? icon : React__default.createElement(Icon, { color: variants$3[variant].borderColor, width: "24px" })),
        children));
};
var templateObject_1$C;

var NotificationDotRoot = styled.span(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  display: inline-flex;\n  position: relative;\n"], ["\n  display: inline-flex;\n  position: relative;\n"])));
var Dot = styled.span(templateObject_2$o || (templateObject_2$o = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"], ["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? "inline-flex" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
});
var NotificationDot = function (_a) {
    var _b = _a.show, show = _b === void 0 ? false : _b, _c = _a.color, color = _c === void 0 ? "failure" : _c, children = _a.children, props = __rest(_a, ["show", "color", "children"]);
    return (React__default.createElement(NotificationDotRoot, null,
        Children.map(children, function (child) { return cloneElement(child, props); }),
        React__default.createElement(Dot, { show: show, color: color })));
};
var templateObject_1$B, templateObject_2$o;

var Overlay = styled.div.attrs({ role: "presentation" })(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.overlay;
}, function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$A;

var scales$4 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

var scaleKeyValues$1 = {
    sm: {
        pancakeSize: "14px",
        travelDistance: "14px",
        toggleHeight: "20px",
        toggleWidth: "36px",
        pancakeThickness: "1px",
        pancakeTwoOffset: "0px",
        pancakeThreeOffset: "-3px",
        butterTop: "3px",
        butterLeft: "10px",
        butterWidth: "6px",
        butterHeight: "5px",
        butterThickness: "0.5px",
        butterRadius: "2px",
        butterSmearOneTop: "10px",
        butterSmearOneLeft: "2.5px",
        butterSmearTwoTop: "11px",
        butterSmearTwoRight: "2.5px", // these values adjust the position of it
    },
    md: {
        pancakeSize: "24px",
        travelDistance: "24px",
        toggleHeight: "32px",
        toggleWidth: "56px",
        pancakeThickness: "1.5px",
        pancakeTwoOffset: "-1px",
        pancakeThreeOffset: "-6px",
        butterTop: "5px",
        butterLeft: "13px",
        butterWidth: "10px",
        butterHeight: "8px",
        butterThickness: "0.75px",
        butterRadius: "3px",
        butterSmearOneTop: "15px",
        butterSmearOneLeft: "3.75px",
        butterSmearTwoTop: "16px",
        butterSmearTwoRight: "3.75px",
    },
    lg: {
        pancakeSize: "31px",
        travelDistance: "31px",
        toggleHeight: "40px",
        toggleWidth: "72px",
        pancakeThickness: "2px",
        pancakeTwoOffset: "-3px",
        pancakeThreeOffset: "-8px",
        butterTop: "3px",
        butterLeft: "16px",
        butterWidth: "12px",
        butterHeight: "11px",
        butterThickness: "1px",
        butterRadius: "4px",
        butterSmearOneTop: "20px",
        butterSmearOneLeft: "5px",
        butterSmearTwoTop: "22px",
        butterSmearTwoRight: "5px",
    },
};
var getScale$2 = function (property) {
    return function (_a) {
        var _b = _a.scale, scale = _b === void 0 ? scales$4.LG : _b;
        return scaleKeyValues$1[scale][property];
    };
};
var PancakeStack = styled.div(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n\n  &:label:before {\n    content: none;\n  }\n\n  .pancakes {\n    position: absolute;\n    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  }\n\n  .pancake {\n    background: ", ";\n    border-radius: 50%;\n    width: ", ";\n    height: ", ";\n    position: absolute;\n    transition: 0.4s ease;\n    top: 4px;\n    left: 4px;\n    /* box-shadow: 0 ", " 0 ", " #fbbe7c; */\n  }\n\n  .pancake:nth-child(1) {\n    background: ", ";\n    /* box-shadow: 0 ", " 0 ", "\n      ", "; */\n  }\n\n  /* .pancake:nth-child(2) {\n    left: 0;\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3) {\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3):before,\n  .pancake:nth-child(3):after {\n    content: \"\";\n    position: absolute;\n    background: #ef8927;\n    border-radius: 20px;\n    width: 50%;\n    height: 20%;\n  }\n\n  .pancake:nth-child(3):before {\n    top: ", ";\n    left: ", ";\n  }\n\n  .pancake:nth-child(3):after {\n    top: ", ";\n    right: ", ";\n  }\n\n  .butter {\n    width: ", ";\n    height: ", ";\n    background: #fbdb60;\n    top: ", ";\n    left: ", ";\n    position: absolute;\n    border-radius: ", ";\n    box-shadow: 0 ", " 0 ", " #d67823;\n    transform: scale(0);\n    transition: 0.2s ease;\n  } */\n"], ["\n  position: relative;\n  display: inline-block;\n\n  &:label:before {\n    content: none;\n  }\n\n  .pancakes {\n    position: absolute;\n    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  }\n\n  .pancake {\n    background: ", ";\n    border-radius: 50%;\n    width: ", ";\n    height: ", ";\n    position: absolute;\n    transition: 0.4s ease;\n    top: 4px;\n    left: 4px;\n    /* box-shadow: 0 ", " 0 ", " #fbbe7c; */\n  }\n\n  .pancake:nth-child(1) {\n    background: ", ";\n    /* box-shadow: 0 ", " 0 ", "\n      ", "; */\n  }\n\n  /* .pancake:nth-child(2) {\n    left: 0;\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3) {\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3):before,\n  .pancake:nth-child(3):after {\n    content: \"\";\n    position: absolute;\n    background: #ef8927;\n    border-radius: 20px;\n    width: 50%;\n    height: 20%;\n  }\n\n  .pancake:nth-child(3):before {\n    top: ", ";\n    left: ", ";\n  }\n\n  .pancake:nth-child(3):after {\n    top: ", ";\n    right: ", ";\n  }\n\n  .butter {\n    width: ", ";\n    height: ", ";\n    background: #fbdb60;\n    top: ", ";\n    left: ", ";\n    position: absolute;\n    border-radius: ", ";\n    box-shadow: 0 ", " 0 ", " #d67823;\n    transform: scale(0);\n    transition: 0.2s ease;\n  } */\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.deepGreyPrimary;
}, getScale$2("pancakeSize"), getScale$2("pancakeSize"), getScale$2("pancakeThickness"), getScale$2("pancakeThickness"), function (_a) {
    var theme = _a.theme;
    return theme.pancakeToggle.handleBackground;
}, getScale$2("pancakeThickness"), getScale$2("pancakeThickness"), function (_a) {
    var theme = _a.theme;
    return theme.pancakeToggle.handleShadow;
}, getScale$2("pancakeTwoOffset"), getScale$2("pancakeThreeOffset"), getScale$2("butterSmearOneTop"), getScale$2("butterSmearOneLeft"), getScale$2("butterSmearTwoTop"), getScale$2("butterSmearTwoRight"), getScale$2("butterWidth"), getScale$2("butterHeight"), getScale$2("butterTop"), getScale$2("butterLeft"), getScale$2("butterRadius"), getScale$2("butterThickness"), getScale$2("butterThickness"));
var PancakeInput = styled.input(templateObject_2$n || (templateObject_2$n = __makeTemplateObject(["\n  height: 40px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 40px;\n\n  &:focus + label {\n    box-shadow: ", ";\n  }\n\n  &:checked + label .pancakes {\n    transform: translateX(", ");\n  }\n\n  &:checked + label .pancake:nth-child(1) {\n    background: #e27c31;\n    /* box-shadow: 0 ", " 0 ", " #fbbe7c; */\n    transition-delay: 0.2s;\n  }\n\n  /* &:checked + label .pancake:nth-child(2) {\n    transform: scale(1);\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(3) {\n    transform: scale(1);\n    transition-delay: 0.4s;\n  }\n\n  &:checked + label .butter {\n    transform: scale(1);\n    transition-delay: 0.6s;\n  } */\n"], ["\n  height: 40px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 40px;\n\n  &:focus + label {\n    box-shadow: ", ";\n  }\n\n  &:checked + label .pancakes {\n    transform: translateX(", ");\n  }\n\n  &:checked + label .pancake:nth-child(1) {\n    background: #e27c31;\n    /* box-shadow: 0 ", " 0 ", " #fbbe7c; */\n    transition-delay: 0.2s;\n  }\n\n  /* &:checked + label .pancake:nth-child(2) {\n    transform: scale(1);\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(3) {\n    transform: scale(1);\n    transition-delay: 0.4s;\n  }\n\n  &:checked + label .butter {\n    transform: scale(1);\n    transition-delay: 0.6s;\n  } */\n"])), function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, getScale$2("travelDistance"), getScale$2("pancakeThickness"), getScale$2("pancakeThickness"));
var PancakeLabel = styled.label(templateObject_3$b || (templateObject_3$b = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  box-shadow: ", ";\n  display: inline-block;\n  border-radius: 50px;\n  position: relative;\n  transition: all 0.3s ease;\n  transform-origin: 20% center;\n  cursor: pointer;\n"], ["\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  box-shadow: ", ";\n  display: inline-block;\n  border-radius: 50px;\n  position: relative;\n  transition: all 0.3s ease;\n  transform-origin: 20% center;\n  cursor: pointer;\n"])), getScale$2("toggleWidth"), getScale$2("toggleHeight"), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "greyPrimary"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$z, templateObject_2$n, templateObject_3$b;

var PancakeToggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales$4.LG : _b, props = __rest(_a, ["checked", "scale"]);
    return (React__default.createElement(PancakeStack, { scale: scale },
        React__default.createElement(PancakeInput, __assign({ id: props.id || "pancake-toggle", scale: scale, type: "checkbox", checked: checked }, props)),
        React__default.createElement(PancakeLabel, { scale: scale, checked: checked, htmlFor: props.id || "pancake-toggle" },
            React__default.createElement("div", { className: "pancakes" },
                React__default.createElement("div", { className: "pancake" }),
                React__default.createElement("div", { className: "pancake" }),
                React__default.createElement("div", { className: "pancake" }),
                React__default.createElement("div", { className: "butter" })))));
};

var baseColors = {
    failure: "#ED4B9E",
    primary: "#fff",
    primaryBright: "#fff",
    primaryDark: "#fff",
    secondary: "#6d6d6d",
    success: "#31D0AA",
    warning: "#FFB237",
    greyPrimary: "#666",
    deepGreyPrimary: "#333",
    disableGrey: "#ffffffb2"
};
var additionalColors = {
    binance: "#F0B90B",
    overlay: "#525252",
    gold: "#FFC700",
    silver: "#B2B2B2",
    bronze: "#E7974D",
};
var lightColors = __assign(__assign(__assign({}, baseColors), additionalColors), { background: "#FAF9FA", backgroundDisabled: "#E9EAEB", backgroundAlt: "#000", backgroundAlt2: "rgba(255, 255, 255, 0.7)", cardBorder: "#E7E3EB", cardBackground: "#1a1a1a", contrast: "#191326", dropdown: "#F6F6F6", dropdownDeep: "#EEEEEE", invertedContrast: "#FFFFFF", input: "#070707", inputSecondary: "#808080", inputBackground: "#070707", tertiary: "grey", text: "#fff", textDisabled: "#BDC2C4", textSubtle: "#999", textCommon: "#fff", textCommonSecond: "#0D0C33B2", textGrey: "#0A1127", disabled: "#E9EAEB", gradients: {
        cardBorderGradients: "linear-gradient(225deg, #444 0%, #181818 100%)",
        bubblegum: "linear-gradient(139.73deg, #242424 0%, #242424 100%)",
        inverseBubblegum: "linear-gradient(139.73deg, #C8DEFF 0%, #FFFCF7 100%)",
        cardHeader: "linear-gradient(111.68deg, #000 0%, #000 100%)",
        blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
        violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
        violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
        gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), additionalColors), { secondary: "#9A6AFF", background: "#08060B", backgroundDisabled: "#3c3742", backgroundAlt: "#000", backgroundAlt2: "rgba(39, 38, 44, 0.7)", cardBorder: "#383241", cardBackground: "#1a1a1a", contrast: "#FFFFFF", dropdown: "#1E1D20", dropdownDeep: "#100C18", invertedContrast: "#191326", input: "#070707", inputSecondary: "#808080", inputBackground: "#070707", primaryDark: "#0098A1", tertiary: "grey", text: "#fff", textDisabled: "#666171", textSubtle: "#FAB126", textCommon: "#fff", textCommonSecond: "#FCFCFFB2", textGrey: "#FCFCFF", disabled: "#524B63", gradients: {
        cardBorderGradients: "linear-gradient(225deg, #444 0%, #181818 100%)",
        bubblegum: "linear-gradient(139.73deg, #242424 0%, #242424 100%)",
        inverseBubblegum: "linear-gradient(139.73deg, #0F2240 0%, #4D4A43 100%)",
        cardHeader: "linear-gradient(111.68deg, #000 0%, #000 100%)",
        blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
        violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
        violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
        gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
    } });

var light$7 = {
    background: lightColors.backgroundAlt,
};
var dark$7 = {
    background: darkColors.backgroundAlt,
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
    xxl: 1200,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries$1 = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    xxl: "@media screen and (min-width: " + breakpointMap.xxl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #333, 0px 0px 0px 4px rgba(33, 33, 33, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
    tooltip: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "24px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries$1,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

var light$6 = {
    background: lightColors.backgroundAlt,
    boxShadow: shadows.level1,
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: {
        default: lightColors.gradients.cardHeader,
        blue: lightColors.gradients.blue,
        bubblegum: lightColors.gradients.bubblegum,
        violet: lightColors.gradients.violet,
    },
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
var dark$6 = {
    background: darkColors.backgroundAlt,
    boxShadow: shadows.level1,
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: {
        default: darkColors.gradients.cardHeader,
        blue: darkColors.gradients.blue,
        bubblegum: lightColors.gradients.bubblegum,
        violet: darkColors.gradients.violet,
    },
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

var light$5 = {
    handleBackground: lightColors.backgroundAlt,
    handleShadow: lightColors.textDisabled,
};
var dark$5 = {
    handleBackground: darkColors.backgroundAlt,
    handleShadow: darkColors.textDisabled,
};

var light$4 = {
    handleBackground: lightColors.backgroundAlt,
};
var dark$4 = {
    handleBackground: darkColors.backgroundAlt,
};

var light$3 = {
    handleBackground: lightColors.backgroundAlt,
};
var dark$3 = {
    handleBackground: darkColors.backgroundAlt,
};

var light$2 = {
    background: lightColors.backgroundAlt,
};
var dark$2 = {
    background: darkColors.backgroundAlt,
};

var light$1 = {
    background: lightColors.backgroundAlt,
};
var dark$1 = {
    background: darkColors.backgroundAlt,
};

var light = {
    background: darkColors.backgroundAlt,
    text: darkColors.text,
    boxShadow: shadows.tooltip,
};
var dark = {
    background: lightColors.backgroundAlt,
    text: lightColors.text,
    boxShadow: shadows.tooltip,
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark$7, colors: darkColors, card: dark$6, toggle: dark$3, nav: dark$2, modal: dark$1, pancakeToggle: dark$5, radio: dark$4, tooltip: dark });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light$7, colors: lightColors, card: light$6, toggle: light$3, nav: light$2, modal: light$1, pancakeToggle: light$5, radio: light$4, tooltip: light });

var variants$2 = {
    ROUND: "round",
    FLAT: "flat",
};
var scales$3 = {
    MD: "md",
    SM: "sm",
};

var _a$1, _b$1;
var styleVariants$1 = (_a$1 = {},
    _a$1[variants$2.ROUND] = {
        borderRadius: "32px",
    },
    _a$1[variants$2.FLAT] = {
        borderRadius: 0,
    },
    _a$1);
var styleScales = (_b$1 = {},
    _b$1[scales$3.MD] = {
        height: "16px",
    },
    _b$1[scales$3.SM] = {
        height: "8px",
    },
    _b$1);

var Bar = styled.div(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 100%;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ",
    ";\n  height: 100%;\n  transition: width 200ms ease;\n"])), function (_a) {
    var theme = _a.theme, $useDark = _a.$useDark, primary = _a.primary;
    if ($useDark)
        return primary ? theme.colors.secondary : theme.colors.secondary + "80";
    return primary ? lightColors.secondary : lightColors.secondary + "80";
});
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled.div(templateObject_2$m || (templateObject_2$m = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ",
    "\n  ",
    "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, $useDark = _a.$useDark;
    return ($useDark ? theme.colors.input : lightColors.input);
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, Bar, function (_a) {
    var variant = _a.variant;
    return (variant === variants$2.FLAT ? "0" : "32px");
}, function (_a) {
    var variant = _a.variant;
    return (variant === variants$2.FLAT ? "0" : "32px");
}, variant$1({
    variants: styleVariants$1,
}), variant$1({
    prop: "scale",
    variants: styleScales,
}), space);
var templateObject_1$y, templateObject_2$m;

var ProgressBunnyWrapper = styled.div(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$x;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? variants$2.ROUND : _b, _c = _a.scale, scale = _c === void 0 ? scales$3.MD : _c, _d = _a.primaryStep, primaryStep = _d === void 0 ? 0 : _d, _e = _a.secondaryStep, secondaryStep = _e === void 0 ? null : _e, _f = _a.showProgressBunny, showProgressBunny = _f === void 0 ? false : _f, _g = _a.useDark, useDark = _g === void 0 ? true : _g;
    return (React__default.createElement(StyledProgress, { "$useDark": useDark, variant: variant, scale: scale },
        showProgressBunny && (React__default.createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React__default.createElement(Icon$Z, null))),
        React__default.createElement(Bar, { "$useDark": useDark, primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React__default.createElement(Bar, { "$useDark": useDark, style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "12px";
        case scales$2.MD:
        default:
            return "20px";
    }
};
var Radio = styled.input.attrs({ type: "radio" })(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, space);
Radio.defaultProps = {
    scale: scales$2.MD,
    m: 0,
};
var templateObject_1$w;

var getCursorStyle = function (_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    return disabled ? "not-allowed" : "cursor";
};
var getBaseThumbStyles = function (_a) {
    _a.isMax; var disabled = _a.disabled;
    return "\n  -webkit-appearance: none;\n  background-color: grey;\n  border: 0;\n  border-radius: 50%;\n  cursor: " + getCursorStyle + ";\n  width: 24px;\n  height: 24px;\n  filter: " + (disabled ? "grayscale(100%)" : "none") + ";\n  transform: translate(4px, 4px);\n  transition: 200ms transform;\n\n  &:hover {\n    transform: " + (disabled ? "scale(1) translate(-2px, -2px)" : "scale(1.1) translate(-3px, -3px)") + ";\n  }\n";
};
var SliderLabelContainer = styled.div(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  bottom: 0;\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 30px);\n"], ["\n  bottom: 0;\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 30px);\n"])));
var SliderLabel = styled(Text)(templateObject_2$l || (templateObject_2$l = __makeTemplateObject(["\n  bottom: 0;\n  font-size: 12px;\n  left: ", ";\n  position: absolute;\n  text-align: center;\n  min-width: 24px; // Slider thumb size\n"], ["\n  bottom: 0;\n  font-size: 12px;\n  left: ", ";\n  position: absolute;\n  text-align: center;\n  min-width: 24px; // Slider thumb size\n"])), function (_a) {
    var progress = _a.progress;
    return progress;
});
var BunnyButt = styled.div(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n  height: 32px;\n  filter: ", ";\n  position: absolute;\n  width: 15px;\n"], ["\n  height: 32px;\n  filter: ", ";\n  position: absolute;\n  width: 15px;\n"])), function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "grayscale(100%)" : "none");
});
var BunnySlider = styled.div(templateObject_4$6 || (templateObject_4$6 = __makeTemplateObject(["\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 14px);\n"], ["\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 14px);\n"])));
var StyledInput = styled.input(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  cursor: ", ";\n  height: 32px;\n  position: relative;\n\n  ::-webkit-slider-thumb {\n    ", "\n  }\n\n  ::-moz-range-thumb {\n    ", "\n  }\n\n  ::-ms-thumb {\n    ", "\n  }\n"], ["\n  cursor: ", ";\n  height: 32px;\n  position: relative;\n\n  ::-webkit-slider-thumb {\n    ", "\n  }\n\n  ::-moz-range-thumb {\n    ", "\n  }\n\n  ::-ms-thumb {\n    ", "\n  }\n"])), getCursorStyle, getBaseThumbStyles, getBaseThumbStyles, getBaseThumbStyles);
var BarBackground = styled.div(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["\n  background-color: ", ";\n  height: 2px;\n  position: absolute;\n  top: 18px;\n  width: 100%;\n"], ["\n  background-color: ", ";\n  height: 2px;\n  position: absolute;\n  top: 18px;\n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return theme.colors[disabled ? "textDisabled" : "inputSecondary"];
});
var BarProgress = styled.div(templateObject_7$2 || (templateObject_7$2 = __makeTemplateObject(["\n  background-color: ", ";\n  filter: ", ";\n  height: 10px;\n  position: absolute;\n  top: 18px;\n"], ["\n  background-color: ", ";\n  filter: ", ";\n  height: 10px;\n  position: absolute;\n  top: 18px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "grayscale(100%)" : "none");
});
var templateObject_1$v, templateObject_2$l, templateObject_3$a, templateObject_4$6, templateObject_5$3, templateObject_6$2, templateObject_7$2;

var Slider = function (_a) {
    var name = _a.name, min = _a.min, max = _a.max, value = _a.value, onValueChanged = _a.onValueChanged, valueLabel = _a.valueLabel, _b = _a.step, step = _b === void 0 ? "any" : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, props = __rest(_a, ["name", "min", "max", "value", "onValueChanged", "valueLabel", "step", "disabled"]);
    var handleChange = function (_a) {
        var target = _a.target;
        onValueChanged(parseFloat(target.value));
    };
    var progressPercentage = (value / max) * 100;
    var isMax = value === max;
    var progressWidth;
    if (progressPercentage <= 10) {
        progressWidth = progressPercentage + 0.5 + "%";
    }
    else if (progressPercentage >= 90) {
        progressWidth = progressPercentage - 4 + "%";
    }
    else if (progressPercentage >= 60) {
        progressWidth = progressPercentage - 2.5 + "%";
    }
    else {
        progressWidth = progressPercentage + "%";
    }
    var labelProgress = isMax ? "calc(100% - 12px)" : progressPercentage + "%";
    var displayValueLabel = isMax ? "MAX" : valueLabel;
    return (React__default.createElement(Box, __assign({ position: "relative", height: "48px" }, props),
        React__default.createElement(BunnyButt, { disabled: disabled }),
        React__default.createElement(BunnySlider, null,
            React__default.createElement(BarBackground, { disabled: disabled }),
            React__default.createElement(BarProgress, { style: { width: progressWidth }, disabled: disabled }),
            React__default.createElement(StyledInput, { name: name, type: "range", min: min, max: max, value: value, step: step, onChange: handleChange, isMax: isMax, disabled: disabled })),
        valueLabel && (React__default.createElement(SliderLabelContainer, null,
            React__default.createElement(SliderLabel, { progress: labelProgress }, displayValueLabel)))));
};

var Icon = function (props) {
    return (React__default.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default.createElement("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
            React__default.createElement("circle", { fill: "#666", cx: "12", cy: "12", r: "12" }))));
};

var rotate = keyframes(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  0%   {\n    transform: scale(0);\n    opacity: 1;\n  }\n  75%  {\n    transform: scale(.75)\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 0;\n  }\n"], ["\n  0%   {\n    transform: scale(0);\n    opacity: 1;\n  }\n  75%  {\n    transform: scale(.75)\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 0;\n  }\n"])));
var Container = styled.div(templateObject_2$k || (templateObject_2$k = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPancakeIcon = styled(Icon)(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin-top: -64px;\n  margin-left: -30px;\n  animation: ", " 1.4s infinite;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin-top: -64px;\n  margin-left: -30px;\n  animation: ", " 1.4s infinite;\n"])), rotate);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React__default.createElement(Container, null,
        React__default.createElement(RotatingPancakeIcon, { width: size * 0.5 + "px" })));
};
var templateObject_1$u, templateObject_2$k, templateObject_3$9;

var StepperWrapper = styled.div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n"])));
var Stepper = function (_a) {
    var children = _a.children;
    var numberOfSteps = React__default.Children.count(children);
    return (React__default.createElement(StepperWrapper, null, React__default.Children.map(children, function (child) {
        if (React__default.isValidElement(child)) {
            return React__default.cloneElement(child, { numberOfSteps: numberOfSteps });
        }
        return child;
    })));
};
var templateObject_1$t;

var getStepNumberFontColor = function (_a) {
    var theme = _a.theme, status = _a.status;
    if (status === "past") {
        return theme.colors.success;
    }
    if (status === "current") {
        return theme.colors.invertedContrast;
    }
    return theme.colors.textDisabled;
};
var StyledStep = styled(Flex)(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  ", " {\n    justify-content: center;\n  }\n"], ["\n  ", " {\n    justify-content: center;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Connector = styled.div(templateObject_2$j || (templateObject_2$j = __makeTemplateObject(["\n  position: absolute;\n  width: 4px;\n  height: calc(50% + 20px);\n  ", "\n  left: calc(50% - 2px);\n  background-color: ", ";\n"], ["\n  position: absolute;\n  width: 4px;\n  height: calc(50% + 20px);\n  ",
    "\n  left: calc(50% - 2px);\n  background-color: ",
    ";\n"])), function (_a) {
    var $isFirstStep = _a.$isFirstStep, $isLastStep = _a.$isLastStep, $isFirstPart = _a.$isFirstPart;
    if ($isFirstStep)
        return "top: 50%;";
    if ($isLastStep)
        return "top: 0;";
    return $isFirstPart ? "top:0;" : "top:50%;";
}, function (_a) {
    var theme = _a.theme, status = _a.status;
    return theme.colors[status === "past" || status === "current" ? "success" : "textDisabled"];
});
var ChildrenWrapper = styled(Box)(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  ", " {\n    visibility: ", ";\n  }\n"], ["\n  ", " {\n    visibility: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var isVisible = _a.isVisible;
    return (isVisible ? "visible" : "hidden");
});
var ChildrenLeftWrapper = styled(ChildrenWrapper)(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n  display: none;\n  ", " {\n    display: block;\n    margin-right: 16px;\n  }\n"], ["\n  display: none;\n  ", " {\n    display: block;\n    margin-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var ChildrenRightWrapper = styled(ChildrenWrapper)(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  margin-left: 8px;\n  ", " {\n    margin-left: 16px;\n  }\n"], ["\n  margin-left: 8px;\n  ", " {\n    margin-left: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Wrapper$2 = styled.div(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n"])));
var StepNumber = styled.div(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  font-size: 32px;\n  width: 48px;\n  height: 48px;\n  z-index: 5;\n  ", " {\n    font-size: 40px;\n    width: 80px;\n    height: 80px;\n  }\n"], ["\n  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  font-size: 32px;\n  width: 48px;\n  height: 48px;\n  z-index: 5;\n  ", " {\n    font-size: 40px;\n    width: 80px;\n    height: 80px;\n  }\n"])), function (_a) {
    var theme = _a.theme, status = _a.status;
    return theme.colors[status === "current" ? "secondary" : "invertedContrast"];
}, function (_a) {
    var theme = _a.theme, status = _a.status;
    return (status === "past" ? theme.colors.success : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.circle;
}, getStepNumberFontColor, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
/**
 * ChildrenLeftWrapper and ChildrenRightWrapper are used on the non mobile version, to force the alternate layout.
 * One of the child is hidden based on the step number.
 */
var Step = function (_a) {
    var index = _a.index, statusFirstPart = _a.statusFirstPart, statusSecondPart = _a.statusSecondPart, _b = _a.numberOfSteps, numberOfSteps = _b === void 0 ? 0 : _b, children = _a.children;
    var isIndexPair = index % 2 === 0;
    var isFirst = index === 0;
    var isLast = index === numberOfSteps - 1;
    return (React__default.createElement(StyledStep, { mb: index < numberOfSteps - 1 ? "16px" : 0 },
        React__default.createElement(ChildrenLeftWrapper, { isVisible: !isIndexPair }, children),
        React__default.createElement(Wrapper$2, null,
            React__default.createElement(StepNumber, { status: statusFirstPart }, index + 1),
            React__default.createElement(Connector, { "$isFirstStep": isFirst, "$isLastStep": isLast, status: statusFirstPart, "$isFirstPart": true }),
            !isFirst && !isLast && React__default.createElement(Connector, { "$isFirstStep": isFirst, "$isLastStep": isLast, status: statusSecondPart })),
        React__default.createElement(ChildrenRightWrapper, { isVisible: isIndexPair }, children)));
};
var templateObject_1$s, templateObject_2$j, templateObject_3$8, templateObject_4$5, templateObject_5$2, templateObject_6$1, templateObject_7$1;

var InlineMenuContainer = styled(Box)(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n"], ["\n  background-color: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundAlt;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.card;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.tooltip;
});
var SubMenuContainer = styled(Flex)(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["\n  flex-direction: column;\n  overflow: hidden;\n  min-width: 136px;\n  background: ", ";\n  border-radius: ", ";\n  border: ", ";\n"], ["\n  flex-direction: column;\n  overflow: hidden;\n  min-width: 136px;\n  background: ", ";\n  border-radius: ", ";\n  border: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.default;
}, function (_a) {
    var theme = _a.theme;
    return "1px solid " + theme.colors.inputSecondary;
});
var ClickableElementContainer = styled.div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  cursor: pointer;\n  display: inline-flex;\n"], ["\n  cursor: pointer;\n  display: inline-flex;\n"])));
var SubMenuItem = styled.button(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  background: transparent;\n  padding: 8px 16px;\n  color: ", ";\n  width: 100%;\n  font-size: 16px;\n  text-align: left;\n\n  &:hover {\n    background-color: ", ";\n    text-decoration: none;\n  }\n"], ["\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  background: transparent;\n  padding: 8px 16px;\n  color: ", ";\n  width: 100%;\n  font-size: 16px;\n  text-align: left;\n\n  &:hover {\n    background-color: ", ";\n    text-decoration: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.inputSecondary;
});
var templateObject_1$r, templateObject_2$i, templateObject_3$7, templateObject_4$4;

var portalRoot$1 = document.getElementById("portal-root");
var BaseMenu = function (_a) {
    var _b, _c, _d;
    var component = _a.component, options = _a.options, children = _a.children, _e = _a.isOpen, isOpen = _e === void 0 ? false : _e;
    var _f = useState(null), targetElement = _f[0], setTargetElement = _f[1];
    var _g = useState(null), menuElement = _g[0], setMenuElement = _g[1];
    var placement = (_b = options === null || options === void 0 ? void 0 : options.placement) !== null && _b !== void 0 ? _b : "bottom";
    var offset = (_c = options === null || options === void 0 ? void 0 : options.offset) !== null && _c !== void 0 ? _c : [0, 10];
    var padding = (_d = options === null || options === void 0 ? void 0 : options.padding) !== null && _d !== void 0 ? _d : { left: 16, right: 16 };
    var _h = useState(isOpen), isMenuOpen = _h[0], setIsMenuOpen = _h[1];
    var toggle = function () {
        setIsMenuOpen(function (prev) { return !prev; });
    };
    var open = function () {
        setIsMenuOpen(true);
    };
    var close = function () {
        setIsMenuOpen(false);
    };
    // Allow for component to be controlled
    useEffect(function () {
        setIsMenuOpen(isOpen);
    }, [isOpen, setIsMenuOpen]);
    useEffect(function () {
        var handleClickOutside = function (_a) {
            var target = _a.target;
            if (target instanceof Node) {
                if (menuElement !== null &&
                    targetElement !== null &&
                    !menuElement.contains(target) &&
                    !targetElement.contains(target)) {
                    setIsMenuOpen(false);
                }
            }
        };
        if (menuElement !== null) {
            document.addEventListener("click", handleClickOutside);
        }
        return function () {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [menuElement, targetElement]);
    var _j = usePopper(targetElement, menuElement, {
        placement: placement,
        modifiers: [
            { name: "offset", options: { offset: offset } },
            { name: "preventOverflow", options: { padding: padding } },
        ],
    }), styles = _j.styles, attributes = _j.attributes;
    var menu = (React__default.createElement("div", __assign({ ref: setMenuElement, style: styles.popper }, attributes.popper), typeof children === "function" ? children({ toggle: toggle, open: open, close: close }) : children));
    var renderMenu = portalRoot$1 ? createPortal(menu, portalRoot$1) : menu;
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(ClickableElementContainer, { ref: setTargetElement, onClick: toggle }, component),
        isMenuOpen && renderMenu));
};

var InlineMenu = function (_a) {
    var children = _a.children, component = _a.component, _b = _a.isOpen, isOpen = _b === void 0 ? false : _b, props = __rest(_a, ["children", "component", "isOpen"]);
    return (React__default.createElement(BaseMenu, { options: { placement: "bottom" }, component: component, isOpen: isOpen },
        React__default.createElement(InlineMenuContainer, __assign({}, props), children)));
};

var SubMenu = function (_a) {
    var children = _a.children, component = _a.component, options = _a.options, _b = _a.isOpen, isOpen = _b === void 0 ? false : _b, props = __rest(_a, ["children", "component", "options", "isOpen"]);
    return (React__default.createElement(BaseMenu, { component: component, options: options, isOpen: isOpen },
        React__default.createElement(SubMenuContainer, __assign({}, props), children)));
};

var StyledMenuItemContainer = styled.div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  position: relative;\n\n  ", ";\n"], ["\n  position: relative;\n\n  ",
    ";\n"])), function (_a) {
    var $isActive = _a.$isActive, $variant = _a.$variant, theme = _a.theme;
    return $isActive &&
        $variant === "subMenu" &&
        "\n      &:before{\n        content: \"\";\n        position: absolute;\n        bottom: 0;\n        height: 4px;\n        width: 100%;\n        background-color: " + theme.colors.primary + ";\n        border-radius: 2px 2px 0 0;\n      }\n    ";
});
var StyledMenuItem = styled.a(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n\n  color: ", ";\n  font-size: 16px;\n  /* font-weight: ", "; */\n\n  ", "\n\n  ", "\n\n  ", "\n\n  &:hover {\n    /* background: ", "; */\n    ", ";\n  }\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n\n  color: ", ";\n  font-size: 16px;\n  /* font-weight: ", "; */\n\n  ",
    "\n\n  ",
    "\n\n  ",
    "\n\n  &:hover {\n    /* background: ", "; */\n    ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme, $isActive = _a.$isActive;
    return ($isActive ? theme.colors.textCommon : theme.colors.textCommon);
}, function (_a) {
    var $isActive = _a.$isActive;
    return ($isActive ? "600" : "400");
}, function (_a) {
    var $isActive = _a.$isActive, $isMain = _a.$isMain;
    return $isMain && $isActive &&
        "\n    &:before {\n      content: \"\";\n      position: absolute;\n      width: calc(100% - 32px);\n      height: 2px;\n      bottom: 8px;\n      background: linear-gradient(90deg, #9F9F9F 0%, #3C3C3C 100%);\n    }\n  ";
}, function (_a) {
    var $statusColor = _a.$statusColor, theme = _a.theme;
    return $statusColor &&
        "\n    &:after {\n      content: \"\";\n      border-radius: 100%;\n      background: " + theme.colors[$statusColor] + ";\n      height: 8px;\n      width: 8px;\n      margin-left: 12px;\n    }\n  ";
}, function (_a) {
    var $variant = _a.$variant;
    return $variant === "default"
        ? "\n    padding: 0 16px;\n    height: 48px;\n  "
        : "\n    padding: 4px 4px 0px 4px;\n    height: 42px;\n  ";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, function (_a) {
    var $variant = _a.$variant;
    return $variant === "default" && "border-radius: 16px;";
});
var templateObject_1$q, templateObject_2$h;

var MenuItem$1 = function (_a) {
    var children = _a.children, href = _a.href, _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.isMain, isMain = _c === void 0 ? false : _c, _d = _a.variant, variant = _d === void 0 ? "default" : _d, statusColor = _a.statusColor, props = __rest(_a, ["children", "href", "isActive", "isMain", "variant", "statusColor"]);
    return (React__default.createElement(StyledMenuItemContainer, { "$isActive": isActive, "$variant": variant },
        React__default.createElement(StyledMenuItem, __assign({ "$isMain": isMain, as: Link$1, to: href, "$isActive": isActive, "$variant": variant, "$statusColor": statusColor }, props), children)));
};

var Icons$1 = IconModule;
var IconComponent = function (_a) {
    var iconName = _a.iconName, props = __rest(_a, ["iconName"]);
    var IconElement = Icons$1[iconName + "Icon"];
    return IconElement ? React__default.createElement(IconElement, __assign({}, props)) : null;
};

var StyledSubMenuItems = styled(Flex)(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  ", " {\n    ", ";\n  }\n  flex-grow: 1;\n  background-color: ", ";\n  box-shadow: inset 0px -2px 0px -8px rgba(133, 133, 133, 0.1);\n  overflow-x: scroll;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"], ["\n  ", " {\n    ", ";\n  }\n  flex-grow: 1;\n  background-color: ", ";\n  box-shadow: inset 0px -2px 0px -8px rgba(133, 133, 133, 0.1);\n  overflow-x: scroll;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var $isMobileOnly = _a.$isMobileOnly;
    return ($isMobileOnly ? "display:none" : "");
}, function (_a) {
    var theme = _a.theme;
    return "" + theme.colors.backgroundAlt2;
});
var templateObject_1$p;

var SubMenuItems = function (_a) {
    var _b = _a.items, items = _b === void 0 ? [] : _b, activeItem = _a.activeItem, _c = _a.isMobileOnly, isMobileOnly = _c === void 0 ? false : _c, props = __rest(_a, ["items", "activeItem", "isMobileOnly"]);
    return (React__default.createElement(StyledSubMenuItems, __assign({ justifyContent: [isMobileOnly ? "flex-end" : "start", null, "center"] }, props, { pl: ["12px", null, "0px"], "$isMobileOnly": isMobileOnly }), items.map(function (_a) {
        var label = _a.label, href = _a.href, iconName = _a.iconName;
        return label && (React__default.createElement(Box, { key: label, mr: "20px" },
            React__default.createElement(MenuItem$1, { href: href, isActive: href === activeItem, variant: "subMenu" },
                iconName && (React__default.createElement(IconComponent, { color: href === activeItem ? "secondary" : "textSubtle", iconName: iconName, mr: "4px" })),
                label)));
    })));
};

var Td = styled.td(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  border-bottom: 1px solid ", ";\n  color: ", ";\n  padding: 16px;\n  vertical-align: middle;\n\n  ", "\n"], ["\n  border-bottom: 1px solid ", ";\n  color: ", ";\n  padding: 16px;\n  vertical-align: middle;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, typography);
var Th = styled(Td).attrs({ as: "th" })(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  color: ", ";\n  font-size: 12px;\n  text-transform: uppercase;\n"], ["\n  color: ", ";\n  font-size: 12px;\n  text-transform: uppercase;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.secondary;
});
var templateObject_1$o, templateObject_2$g;

var Table = styled.table(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  max-width: 100%;\n  width: 100%;\n\n  tbody tr:last-child {\n    ", " {\n      border-bottom: 0;\n    }\n  }\n\n  ", "\n"], ["\n  max-width: 100%;\n  width: 100%;\n\n  tbody tr:last-child {\n    ", " {\n      border-bottom: 0;\n    }\n  }\n\n  ", "\n"])), Td, space);
var templateObject_1$n;

var byTextAscending = function (getTextProperty) {
    return function (objectA, objectB) {
        var upperA = getTextProperty(objectA).toUpperCase();
        var upperB = getTextProperty(objectB).toUpperCase();
        if (upperA < upperB) {
            return -1;
        }
        if (upperA > upperB) {
            return 1;
        }
        return 0;
    };
};
var byTextDescending = function (getTextProperty) {
    return function (objectA, objectB) {
        var upperA = getTextProperty(objectA).toUpperCase();
        var upperB = getTextProperty(objectB).toUpperCase();
        if (upperA > upperB) {
            return -1;
        }
        if (upperA < upperB) {
            return 1;
        }
        return 0;
    };
};

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArray([], data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () {
    return function (state, action) {
        var rows = [];
        var nextPage = 0;
        var prevPage = 0;
        var isAscending = null;
        var sortedRows = [];
        var columnCopy = [];
        var filteredRows = [];
        var selectedRowsById = {};
        var stateCopy = __assign({}, state);
        var rowIds = {};
        switch (action.type) {
            case "SET_ROWS":
                rows = __spreadArray([], action.data);
                // preserve sorting if a sort is already enabled when data changes
                if (state.sortColumn) {
                    rows = sortByColumn(action.data, state.sortColumn, state.columns);
                }
                if (state.paginationEnabled === true) {
                    rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
                }
                if (state.paginationEnabled === true) {
                    rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
                }
                columnCopy = state.columns.map(function (column) {
                    if (state.sortColumn === column.name) {
                        return __assign(__assign({}, column), { sorted: {
                                on: true,
                                asc: column.sorted.asc,
                            } });
                    }
                    return column;
                });
                return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
            case "NEXT_PAGE":
                nextPage = state.pagination.page + 1;
                return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
            case "PREV_PAGE":
                prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
                return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
            case "TOGGLE_SORT":
                if (!(action.columnName in state.columnsByName)) {
                    throw new Error("Invalid column, " + action.columnName + " not found");
                }
                // loop through all columns and set the sort parameter to off unless
                // it's the specified column (only one column at a time for )
                columnCopy = state.columns.map(function (column) {
                    // if the row was found
                    if (action.columnName === column.name) {
                        if (action.isAscOverride !== undefined) {
                            // force the sort order
                            isAscending = action.isAscOverride;
                        }
                        else {
                            // if it's undefined, start by setting to ascending, otherwise toggle
                            isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                        }
                        if (column.sort) {
                            sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                            // default to sort by string
                        }
                        else {
                            sortedRows = isAscending
                                ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                                : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                        }
                        return __assign(__assign({}, column), { sorted: {
                                on: true,
                                asc: isAscending,
                            } });
                    }
                    // set sorting to false for all other columns
                    return __assign(__assign({}, column), { sorted: {
                            on: false,
                            asc: false,
                        } });
                });
                return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
            case "GLOBAL_FILTER":
                filteredRows = action.filter(state.originalRows);
                selectedRowsById = {};
                state.selectedRows.forEach(function (row) {
                    var _a;
                    selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
                });
                return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                        return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                    }), filterOn: true });
            case "SELECT_ROW":
                stateCopy = __assign({}, state);
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    var newRow = __assign({}, row);
                    if (newRow.id === action.rowId) {
                        newRow.selected = !newRow.selected;
                    }
                    return newRow;
                });
                stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                    var newRow = __assign({}, row);
                    if (newRow.id === action.rowId) {
                        newRow.selected = !newRow.selected;
                    }
                    return newRow;
                });
                stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
                stateCopy.toggleAllState =
                    stateCopy.selectedRows.length === stateCopy.rows.length
                        ? (stateCopy.toggleAllState = true)
                        : (stateCopy.toggleAllState = false);
                return stateCopy;
            case "SEARCH_STRING":
                stateCopy = __assign({}, state);
                stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                    return (row.cells.filter(function (cell) {
                        if (cell.value.includes(action.searchString)) {
                            return true;
                        }
                        return false;
                    }).length > 0);
                });
                return stateCopy;
            case "TOGGLE_ALL":
                if (state.selectedRows.length < state.rows.length) {
                    stateCopy.rows = stateCopy.rows.map(function (row) {
                        rowIds[row.id] = true;
                        return __assign(__assign({}, row), { selected: true });
                    });
                    stateCopy.toggleAllState = true;
                }
                else {
                    stateCopy.rows = stateCopy.rows.map(function (row) {
                        rowIds[row.id] = false;
                        return __assign(__assign({}, row), { selected: false });
                    });
                    stateCopy.toggleAllState = false;
                }
                stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                    return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
                });
                stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
                return stateCopy;
            default:
                throw new Error("Invalid reducer action");
        }
    };
};
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop,
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = useMemo(function () {
        return __spreadArray([], state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var scales$1 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

var scaleKeyValues = {
    sm: {
        handleHeight: "16px",
        handleWidth: "16px",
        handleLeft: "2px",
        handleTop: "2px",
        checkedLeft: "calc(100% - 18px)",
        toggleHeight: "20px",
        toggleWidth: "36px",
    },
    md: {
        handleHeight: "26px",
        handleWidth: "26px",
        handleLeft: "3px",
        handleTop: "3px",
        checkedLeft: "calc(100% - 30px)",
        toggleHeight: "32px",
        toggleWidth: "56px",
    },
    lg: {
        handleHeight: "32px",
        handleWidth: "32px",
        handleLeft: "4px",
        handleTop: "4px",
        checkedLeft: "calc(100% - 36px)",
        toggleHeight: "40px",
        toggleWidth: "72px",
    },
};
var getScale = function (property) {
    return function (_a) {
        var _b = _a.scale, scale = _b === void 0 ? scales$1.LG : _b;
        return scaleKeyValues[scale][property];
    };
};
var Handle = styled.div(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
}, getScale("handleHeight"), getScale("handleLeft"), getScale("handleTop"), getScale("handleWidth"));
var Input = styled.input(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, getScale("checkedLeft"), Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled.div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"], ["\n  align-items: center;\n  background-color: ",
    ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"])), function (_a) {
    var theme = _a.theme, $checked = _a.$checked, $checkedColor = _a.$checkedColor, $defaultColor = _a.$defaultColor;
    return theme.colors[$checked ? $checkedColor : $defaultColor];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getScale("toggleHeight"), getScale("toggleWidth"));
var templateObject_1$m, templateObject_2$f, templateObject_3$6;

var Toggle = function (_a) {
    var checked = _a.checked, _b = _a.defaultColor, defaultColor = _b === void 0 ? "greyPrimary" : _b, _c = _a.checkedColor, checkedColor = _c === void 0 ? "success" : _c, _d = _a.scale, scale = _d === void 0 ? scales$1.LG : _d, startIcon = _a.startIcon, endIcon = _a.endIcon, props = __rest(_a, ["checked", "defaultColor", "checkedColor", "scale", "startIcon", "endIcon"]);
    var isChecked = !!checked;
    return (React__default.createElement(StyledToggle, { "$checked": isChecked, "$checkedColor": checkedColor, "$defaultColor": defaultColor, scale: scale },
        React__default.createElement(Input, __assign({ checked: checked, scale: scale }, props, { type: "checkbox" })),
        startIcon && endIcon ? (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(Handle, { scale: scale },
                React__default.createElement(Flex, { height: "100%", alignItems: "center", justifyContent: "center" }, checked ? endIcon(checked) : startIcon(!checked))),
            React__default.createElement(Flex, { width: "100%", height: "100%", justifyContent: "space-around", alignItems: "center" },
                startIcon(),
                endIcon()))) : (React__default.createElement(Handle, { scale: scale }))));
};

var ThemeSwitcher = function (_a) {
    var isDark = _a.isDark, toggleTheme = _a.toggleTheme;
    return (React__default.createElement(Toggle, { checked: isDark, defaultColor: "textDisabled", checkedColor: "textDisabled", onChange: function () { return toggleTheme(!isDark); }, scale: "md", startIcon: function (isActive) {
            if (isActive === void 0) { isActive = false; }
            return React__default.createElement(IconComponent, { iconName: "Sun", color: isActive ? "warning" : "backgroundAlt" });
        }, endIcon: function (isActive) {
            if (isActive === void 0) { isActive = false; }
            return React__default.createElement(IconComponent, { iconName: "Moon", color: isActive ? "secondary" : "backgroundAlt" });
        } }));
};
var ThemeSwitcher$1 = React__default.memo(ThemeSwitcher, function (prev, next) { return prev.isDark === next.isDark; });

var Wrapper$1 = styled(Flex)(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  border-bottom: 2px solid ", ";\n  overflow-x: scroll;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n"], ["\n  border-bottom: 2px solid ", ";\n  overflow-x: scroll;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var Inner$1 = styled(Flex)(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  justify-content: space-between;\n  flex-grow: 1;\n\n  & > button + button {\n    margin-left: 4px;\n  }\n\n  ", " {\n    flex-grow: 0;\n  }\n"], ["\n  justify-content: space-between;\n  flex-grow: 1;\n\n  & > button + button {\n    margin-left: 4px;\n  }\n\n  ", " {\n    flex-grow: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, onItemClick = _a.onItemClick, children = _a.children;
    return (React__default.createElement(Wrapper$1, { p: ["0 4px", "0 16px"] },
        React__default.createElement(Inner$1, null, Children.map(children, function (child, index) {
            var isActive = activeIndex === index;
            return cloneElement(child, {
                isActive: isActive,
                onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
                color: isActive ? "backgroundAlt" : "textSubtle",
                backgroundColor: isActive ? "textSubtle" : "input",
            });
        }))));
};
var templateObject_1$l, templateObject_2$e;

var getBorderRadius = function (_a) {
    var scale = _a.scale;
    return (scale === "md" ? "16px 16px 0 0" : "24px 24px 0 0");
};
var getPadding = function (_a) {
    var scale = _a.scale;
    return (scale === "md" ? "8px" : "16px");
};
var Tab = styled.button(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  flex-grow: 1;\n  padding: ", ";\n  border-radius: ", ";\n  font-size: 16px;\n  font-weight: 600;\n\n  ", " {\n    flex-grow: 0;\n  }\n\n  ", "\n"], ["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  flex-grow: 1;\n  padding: ", ";\n  border-radius: ", ";\n  font-size: 16px;\n  font-weight: 600;\n\n  ", " {\n    flex-grow: 0;\n  }\n\n  ", "\n"])), getPadding, getBorderRadius, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, color);
Tab.defaultProps = {
    scale: "md",
};
var templateObject_1$k;

var variants$1 = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    SUCCESS: "success",
    TEXTDISABLED: "textDisabled",
    TEXTSUBTLE: "textSubtle",
    BINANCE: "binance",
    FAILURE: "failure",
    WARNING: "warning",
};
var scales = {
    MD: "md",
    SM: "sm",
};

var _a, _b;
var scaleVariants = (_a = {},
    _a[scales.MD] = {
        height: "28px",
        padding: "0 8px",
        fontSize: "14px",
    },
    _a[scales.SM] = {
        height: "24px",
        padding: "0 4px",
        fontSize: "12px",
    },
    _a);
var styleVariants = (_b = {},
    _b[variants$1.PRIMARY] = {
        backgroundColor: "primary",
    },
    _b[variants$1.SECONDARY] = {
        backgroundColor: "secondary",
    },
    _b[variants$1.SUCCESS] = {
        backgroundColor: "success",
    },
    _b[variants$1.TEXTDISABLED] = {
        backgroundColor: "textDisabled",
    },
    _b[variants$1.TEXTSUBTLE] = {
        backgroundColor: "textSubtle",
    },
    _b[variants$1.BINANCE] = {
        backgroundColor: "binance",
    },
    _b[variants$1.FAILURE] = {
        backgroundColor: "failure",
    },
    _b[variants$1.WARNING] = {
        backgroundColor: "warning",
    },
    _b);

var getOutlineStyles = function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variantKey = _b === void 0 ? variants$1.PRIMARY : _b;
    if (outline) {
        var themeColorKey = styleVariants[variantKey].backgroundColor;
        var color = theme.colors[themeColorKey];
        return "\n      color: " + color + ";\n      background: " + theme.colors.background + ";\n      border: 2px solid " + color + ";\n    ";
    }
    return "";
};
var StyledTag = styled.div(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n"], ["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ", "\n\n  ",
    "\n  ",
    "\n  ", "\n  ", "\n\n  ", "\n"])), function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, variant$1({
    prop: "scale",
    variants: scaleVariants,
}), variant$1({
    variants: styleVariants,
}), space, typography, getOutlineStyles);
var templateObject_1$j;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React__default.createElement(StyledTag, __assign({}, props),
        React__default.isValidElement(startIcon) &&
            React__default.cloneElement(startIcon, {
                mr: "0.5em",
            }),
        children,
        React__default.isValidElement(endIcon) &&
            React__default.cloneElement(endIcon, {
                ml: "0.5em",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    scale: scales.MD,
    outline: false,
};

var isTouchDevice = function () {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
};

var Arrow = styled.div(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 2px;\n    z-index: -1;\n  }\n\n  &::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n"], ["\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 2px;\n    z-index: -1;\n  }\n\n  &::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.tooltip.background;
});
var StyledTooltip = styled.div(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  padding: 16px;\n  font-size: 16px;\n  line-height: 130%;\n  border-radius: 16px;\n  max-width: 320px;\n  z-index: 101;\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  &[data-popper-placement^=\"top\"] > ", " {\n    bottom: -4px;\n  }\n\n  &[data-popper-placement^=\"bottom\"] > ", " {\n    top: -4px;\n  }\n\n  &[data-popper-placement^=\"left\"] > ", " {\n    right: -4px;\n  }\n\n  &[data-popper-placement^=\"right\"] > ", " {\n    left: -4px;\n  }\n"], ["\n  padding: 16px;\n  font-size: 16px;\n  line-height: 130%;\n  border-radius: 16px;\n  max-width: 320px;\n  z-index: 101;\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  &[data-popper-placement^=\"top\"] > ", " {\n    bottom: -4px;\n  }\n\n  &[data-popper-placement^=\"bottom\"] > ", " {\n    top: -4px;\n  }\n\n  &[data-popper-placement^=\"left\"] > ", " {\n    right: -4px;\n  }\n\n  &[data-popper-placement^=\"right\"] > ", " {\n    left: -4px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.tooltip.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.tooltip.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.tooltip.boxShadow;
}, Arrow, Arrow, Arrow, Arrow);
var templateObject_1$i, templateObject_2$d;

var invertTheme = function (currentTheme) {
    if (currentTheme.isDark) {
        return lightTheme;
    }
    return darkTheme;
};
var portalRoot = document.getElementById("portal-root");
var useTooltip = function (content, options) {
    var _a = options.placement, placement = _a === void 0 ? "auto" : _a, _b = options.trigger, trigger = _b === void 0 ? "hover" : _b, _c = options.arrowPadding, arrowPadding = _c === void 0 ? 16 : _c, _d = options.tooltipPadding, tooltipPadding = _d === void 0 ? { left: 16, right: 16 } : _d, _e = options.tooltipOffset, tooltipOffset = _e === void 0 ? [0, 10] : _e;
    var _f = useState(null), targetElement = _f[0], setTargetElement = _f[1];
    var _g = useState(null), tooltipElement = _g[0], setTooltipElement = _g[1];
    var _h = useState(null), arrowElement = _h[0], setArrowElement = _h[1];
    var _j = useState(false), visible = _j[0], setVisible = _j[1];
    var isHoveringOverTooltip = useRef(false);
    var hideTimeout = useRef();
    var hideTooltip = useCallback(function (e) {
        var hide = function () {
            e.stopPropagation();
            e.preventDefault();
            setVisible(false);
        };
        if (trigger === "hover") {
            if (hideTimeout.current) {
                window.clearTimeout(hideTimeout.current);
            }
            if (e.target === tooltipElement) {
                isHoveringOverTooltip.current = false;
            }
            if (!isHoveringOverTooltip.current) {
                hideTimeout.current = window.setTimeout(function () {
                    if (!isHoveringOverTooltip.current) {
                        hide();
                    }
                }, 100);
            }
        }
        else {
            hide();
        }
    }, [tooltipElement, trigger]);
    var showTooltip = useCallback(function (e) {
        e.stopPropagation();
        e.preventDefault();
        setVisible(true);
        if (trigger === "hover") {
            if (e.target === targetElement) {
                // If we were about to close the tooltip and got back to it
                // then prevent closing it.
                clearTimeout(hideTimeout.current);
            }
            if (e.target === tooltipElement) {
                isHoveringOverTooltip.current = true;
            }
        }
    }, [tooltipElement, targetElement, trigger]);
    var toggleTooltip = useCallback(function (e) {
        e.stopPropagation();
        setVisible(!visible);
    }, [visible]);
    // Trigger = hover
    useEffect(function () {
        if (targetElement === null || trigger !== "hover")
            return undefined;
        if (isTouchDevice()) {
            targetElement.addEventListener("touchstart", showTooltip);
            targetElement.addEventListener("touchend", hideTooltip);
        }
        else {
            targetElement.addEventListener("mouseenter", showTooltip);
            targetElement.addEventListener("mouseleave", hideTooltip);
        }
        return function () {
            targetElement.removeEventListener("touchstart", showTooltip);
            targetElement.removeEventListener("touchend", hideTooltip);
            targetElement.removeEventListener("mouseenter", showTooltip);
            targetElement.removeEventListener("mouseleave", showTooltip);
        };
    }, [trigger, targetElement, hideTooltip, showTooltip]);
    // Keep tooltip open when cursor moves from the targetElement to the tooltip
    useEffect(function () {
        if (tooltipElement === null || trigger !== "hover")
            return undefined;
        tooltipElement.addEventListener("mouseenter", showTooltip);
        tooltipElement.addEventListener("mouseleave", hideTooltip);
        return function () {
            tooltipElement.removeEventListener("mouseenter", showTooltip);
            tooltipElement.removeEventListener("mouseleave", hideTooltip);
        };
    }, [trigger, tooltipElement, hideTooltip, showTooltip]);
    // Trigger = click
    useEffect(function () {
        if (targetElement === null || trigger !== "click")
            return undefined;
        targetElement.addEventListener("click", toggleTooltip);
        return function () { return targetElement.removeEventListener("click", toggleTooltip); };
    }, [trigger, targetElement, visible, toggleTooltip]);
    // Handle click outside
    useEffect(function () {
        if (trigger !== "click")
            return undefined;
        var handleClickOutside = function (_a) {
            var target = _a.target;
            if (target instanceof Node) {
                if (tooltipElement != null &&
                    targetElement != null &&
                    !tooltipElement.contains(target) &&
                    !targetElement.contains(target)) {
                    setVisible(false);
                }
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () { return document.removeEventListener("mousedown", handleClickOutside); };
    }, [trigger, targetElement, tooltipElement]);
    // Trigger = focus
    useEffect(function () {
        if (targetElement === null || trigger !== "focus")
            return undefined;
        targetElement.addEventListener("focus", showTooltip);
        targetElement.addEventListener("blur", hideTooltip);
        return function () {
            targetElement.removeEventListener("focus", showTooltip);
            targetElement.removeEventListener("blur", hideTooltip);
        };
    }, [trigger, targetElement, showTooltip, hideTooltip]);
    // On small screens Popper.js tries to squeeze the tooltip to available space without overflowing beyound the edge
    // of the screen. While it works fine when the element is in the middle of the screen it does not handle well the
    // cases when the target element is very close to the edge of the screen - no margin is applied between the tooltip
    // and the screen edge.
    // preventOverflow mitigates this behaviour, default 16px paddings on left and right solve the problem for all screen sizes
    // that we support.
    // Note that in the farm page where there are tooltips very close to the edge of the screen this padding works perfectly
    // even on the iPhone 5 screen (320px wide), BUT in the storybook with the contrived example ScreenEdges example
    // iPhone 5 behaves differently overflowing beyound the edge. All paddings are identical so I have no idea why it is,
    // and fixing that seems like a very bad use of time.
    var _k = usePopper(targetElement, tooltipElement, {
        placement: placement,
        modifiers: [
            {
                name: "arrow",
                options: { element: arrowElement, padding: arrowPadding },
            },
            { name: "offset", options: { offset: tooltipOffset } },
            { name: "preventOverflow", options: { padding: tooltipPadding } },
        ],
    }), styles = _k.styles, attributes = _k.attributes;
    var tooltip = (React__default.createElement(StyledTooltip, __assign({ ref: setTooltipElement, style: styles.popper }, attributes.popper),
        React__default.createElement(ThemeProvider, { theme: invertTheme }, content),
        React__default.createElement(Arrow, { ref: setArrowElement, style: styles.arrow })));
    var tooltipInPortal = portalRoot ? createPortal(tooltip, portalRoot) : null;
    return {
        targetRef: setTargetElement,
        tooltip: tooltipInPortal !== null && tooltipInPortal !== void 0 ? tooltipInPortal : tooltip,
        tooltipVisible: visible,
    };
};

var InfoTooltip = function (_a) {
    var text = _a.text, _b = _a.iconColor, iconColor = _b === void 0 ? "textSubtle" : _b, props = __rest(_a, ["text", "iconColor"]);
    var _c = useTooltip(text, {}), targetRef = _c.targetRef, tooltip = _c.tooltip, tooltipVisible = _c.tooltipVisible;
    return (React__default.createElement(Flex, __assign({}, props, { alignItems: "center" }),
        tooltipVisible && tooltip,
        React__default.createElement(Flex, { ref: targetRef, alignItems: "center" },
            React__default.createElement(IconComponent, { iconName: "Info", color: iconColor }))));
};

var TimelineContainer = styled.ul(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n"], ["\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n"])));
var TimelineEvent = styled.li(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  display: flex;\n  position: relative;\n  margin-bottom: 14px;\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    left: 9px;\n    top: 26px;\n    width: 2px;\n    height: 10px;\n    background-color: ", ";\n  }\n\n  &:last-child:after {\n    display: none;\n  }\n"], ["\n  display: flex;\n  position: relative;\n  margin-bottom: 14px;\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    left: 9px;\n    top: 26px;\n    width: 2px;\n    height: 10px;\n    background-color: ", ";\n  }\n\n  &:last-child:after {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme, $useDark = _a.$useDark;
    return ($useDark ? theme.colors.textSubtle : lightColors.textSubtle);
});
var templateObject_1$h, templateObject_2$c;

var getTextColor$1 = function (_a) {
    var eventStatus = _a.eventStatus, useDark = _a.useDark;
    if (eventStatus === "upcoming")
        return useDark ? "textDisabled" : lightColors.textDisabled;
    if (eventStatus === "live")
        return "success";
    return useDark ? "textSubtle" : lightColors.textSubtle;
};
var Timeline = function (_a) {
    var events = _a.events, _b = _a.useDark, useDark = _b === void 0 ? true : _b;
    return (React__default.createElement(TimelineContainer, null, events.map(function (_a) {
        var text = _a.text, status = _a.status, altText = _a.altText, infoText = _a.infoText;
        var isUpcoming = status === "upcoming";
        var isLive = status === "live";
        var isPast = status === "past";
        return (React__default.createElement(TimelineEvent, { key: text, "$useDark": useDark },
            React__default.createElement(Flex, { mr: "10px", alignItems: "center" },
                isUpcoming && (React__default.createElement(IconComponent, { iconName: "CircleOutline", color: useDark ? "textDisabled" : lightColors.textDisabled })),
                isLive && React__default.createElement(IconComponent, { iconName: "Logo" }),
                isPast && (React__default.createElement(IconComponent, { iconName: "CheckmarkCircleFill", color: useDark ? "textSubtle" : lightColors.textSubtle }))),
            React__default.createElement(Text, { color: getTextColor$1({ eventStatus: status, useDark: useDark }), bold: true }, text),
            altText && (React__default.createElement(Text, { color: "warning", ml: "2px", bold: true }, altText)),
            infoText && (React__default.createElement(InfoTooltip, { text: infoText, ml: "10px", iconColor: useDark ? "textSubtle" : lightColors.textSubtle }))));
    })));
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = useState(function () {
        return Object.keys(mediaQueries).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries).map(function (size) {
            var mql = window.matchMedia(mediaQueries[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return __assign(__assign({}, state), { isMobile: state.isXs || state.isSm, isTablet: state.isMd || state.isLg, isDesktop: state.isXl || state.isXxl });
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = useCallback(function () {
        return debounce(function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var useKonamiCheatCode = function (matchedCodeHandler) {
    useEffect(function () {
        var pattern = [
            "ArrowUp",
            "ArrowUp",
            "ArrowDown",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "ArrowLeft",
            "ArrowRight",
        ];
        var currentIndex = 0;
        var onKeyUpHandler = function (event) {
            var key = event.key;
            // is key in correct order otherwise reset
            if (key !== pattern[currentIndex]) {
                currentIndex = 0;
                return;
            }
            currentIndex += 1;
            if (pattern.length === currentIndex) {
                currentIndex = 0;
                matchedCodeHandler();
            }
        };
        document.addEventListener("keyup", onKeyUpHandler);
        return function () { return document.removeEventListener("keyup", onKeyUpHandler); };
    }, [matchedCodeHandler]);
};

var ModalHeader = styled.div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  align-items: center;\n  background: ", ";\n  border-bottom: 1px solid ", ";\n  display: flex;\n  padding: 12px 24px;\n"], ["\n  align-items: center;\n  background: ", ";\n  border-bottom: 1px solid ", ";\n  display: flex;\n  padding: 12px 24px;\n"])), function (_a) {
    var background = _a.background;
    return background || "transparent";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
});
var ModalTitle = styled(Flex)(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var ModalBody = styled(Flex)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  flex-direction: column;\n  max-height: 90vh;\n  overflow-y: auto;\n"], ["\n  flex-direction: column;\n  max-height: 90vh;\n  overflow-y: auto;\n"])));
var ModalCloseButton = function (_a) {
    var onDismiss = _a.onDismiss;
    return (React__default.createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
        React__default.createElement(Icon$1O, { color: "primary" })));
};
var ModalBackButton = function (_a) {
    var onBack = _a.onBack;
    return (React__default.createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
        React__default.createElement(Icon$2e, { color: "primary" })));
};
var ModalContainer = styled(Box)(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  overflow: hidden;\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  max-height: 100vh;\n  z-index: ", ";\n\n  ", " {\n    width: auto;\n    min-width: ", ";\n    max-width: 100%;\n  }\n"], ["\n  overflow: hidden;\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  max-height: 100vh;\n  z-index: ", ";\n\n  ", " {\n    width: auto;\n    min-width: ", ";\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
}, function (_a) {
    var minWidth = _a.minWidth;
    return minWidth;
});
var templateObject_1$g, templateObject_2$b, templateObject_3$5, templateObject_4$3;

var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c, _d = _a.headerBackground, headerBackground = _d === void 0 ? "transparent" : _d, _e = _a.minWidth, minWidth = _e === void 0 ? "320px" : _e, props = __rest(_a, ["title", "onDismiss", "onBack", "children", "hideCloseButton", "bodyPadding", "headerBackground", "minWidth"]);
    var theme = useTheme();
    return (React__default.createElement(ModalContainer, __assign({ minWidth: minWidth }, props),
        React__default.createElement(ModalHeader, { background: getThemeValue("colors." + headerBackground, headerBackground)(theme) },
            React__default.createElement(ModalTitle, null,
                onBack && React__default.createElement(ModalBackButton, { onBack: onBack }),
                React__default.createElement(Heading, null, title)),
            !hideCloseButton && React__default.createElement(ModalCloseButton, { onDismiss: onDismiss })),
        React__default.createElement(ModalBody, { p: bodyPadding }, children)));
};

var ModalWrapper = styled.div(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = createContext({
    isOpen: false,
    nodeId: "",
    modalNode: null,
    setModalNode: function () { return null; },
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = useState(""), nodeId = _d[0], setNodeId = _d[1];
    var _e = useState(true), closeOnOverlayClick = _e[0], setCloseOnOverlayClick = _e[1];
    var handlePresent = function (node, newNodeId) {
        setModalNode(node);
        setIsOpen(true);
        setNodeId(newNodeId);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
        setNodeId("");
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React__default.createElement(Context.Provider, { value: {
            isOpen: isOpen,
            nodeId: nodeId,
            modalNode: modalNode,
            setModalNode: setModalNode,
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React__default.createElement(ModalWrapper, null,
            React__default.createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React__default.isValidElement(modalNode) &&
                React__default.cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$f;

var useModal = function (modal, closeOnOverlayClick, updateOnPropsChange, modalId) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    if (updateOnPropsChange === void 0) { updateOnPropsChange = false; }
    if (modalId === void 0) { modalId = "defaultNodeId"; }
    var _a = useContext(Context), isOpen = _a.isOpen, nodeId = _a.nodeId, modalNode = _a.modalNode, setModalNode = _a.setModalNode, onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = useCallback(function () {
        onPresent(modal, modalId);
    }, [modal, modalId, onPresent]);
    // Updates the "modal" component if props are changed
    // Use carefully since it might result in unnecessary rerenders
    // Typically if modal is staic there is no need for updates, use when you expect props to change
    useEffect(function () {
        // NodeId is needed in case there are 2 useModal hooks on the same page and one has updateOnPropsChange
        if (updateOnPropsChange && isOpen && nodeId === modalId) {
            var modalProps = get(modal, "props");
            var oldModalProps = get(modalNode, "props");
            // Note: I tried to use lodash isEqual to compare props but it is giving false-negatives too easily
            // For example ConfirmSwapModal in exchange has ~500 lines prop object that stringifies to same string
            // and online diff checker says both objects are identical but lodash isEqual thinks they are different
            // Do not try to replace JSON.stringify with isEqual, high risk of infinite rerenders
            // TODO: Find a good way to handle modal updates, this whole flow is just backwards-compatible workaround,
            // would be great to simplify the logic here
            if (modalProps && oldModalProps && JSON.stringify(modalProps) !== JSON.stringify(oldModalProps)) {
                setModalNode(modal);
            }
        }
    }, [updateOnPropsChange, nodeId, modalId, isOpen, modal, modalNode, setModalNode]);
    useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var StyledIconContainer = styled.div(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  background: ", ";\n"], ["\n  background: ",
    ";\n"])), function (_a) {
    var activeBackgroundColor = _a.activeBackgroundColor, theme = _a.theme;
    return activeBackgroundColor ? theme.colors[activeBackgroundColor] : "transparent";
});
var StyledAnimatedIconComponent = styled.div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  position: relative;\n  ", ";\n  ", ";\n\n  div:first-child {\n    ", ";\n    ", ";\n    z-index: 0;\n  }\n  ", "\n\n  ", "\n"], ["\n  position: relative;\n  ", ";\n  ", ";\n\n  div:first-child {\n    ", ";\n    ", ";\n    z-index: 0;\n  }\n  ",
    "\n\n  ",
    "\n"])), function (_a) {
    var height = _a.height;
    return height && "height: " + height;
}, function (_a) {
    var width = _a.width;
    return "width: " + (width || "100%");
}, function (_a) {
    var height = _a.height;
    return height && "height: " + height;
}, function (_a) {
    var width = _a.width;
    return "width: " + (width || "100%");
}, function (_a) {
    var hasFillIcon = _a.hasFillIcon;
    return hasFillIcon &&
        "\n    div, svg {\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      overflow:hidden;\n    }\n\n    div:last-child {\n      height: 0;\n      z-index: 5;\n      transition: height 0.25s ease;\n    }\n  ";
}, function (_a) {
    var isActive = _a.isActive, height = _a.height, width = _a.width, hasFillIcon = _a.hasFillIcon;
    return isActive &&
        "\n    div:last-child {\n      " + (height && hasFillIcon && "height:" + height) + ";\n      " + ("width: " + (width || "100%")) + ";\n    }\n  ";
});
var templateObject_1$e, templateObject_2$a;

var Icons = IconModule;
var AnimatedIconComponent = function (_a) {
    var iconName = _a.iconName, _b = _a.color, color = _b === void 0 ? "textSubtle" : _b, _c = _a.activeColor, activeColor = _c === void 0 ? "secondary" : _c, activeBackgroundColor = _a.activeBackgroundColor, _d = _a.isActive, isActive = _d === void 0 ? false : _d, props = __rest(_a, ["iconName", "color", "activeColor", "activeBackgroundColor", "isActive"]);
    var IconElement = Icons[iconName + "Icon"];
    var IconElementFill = Icons[iconName + "FillIcon"];
    var hasFillIcon = IconElementFill !== undefined;
    return IconElement ? (React__default.createElement(StyledAnimatedIconComponent, __assign({ isActive: isActive, hasFillIcon: hasFillIcon }, props),
        React__default.createElement(StyledIconContainer, { activeBackgroundColor: activeBackgroundColor },
            React__default.createElement(IconElement, { color: color })),
        hasFillIcon && (React__default.createElement(StyledIconContainer, __assign({ activeBackgroundColor: activeBackgroundColor }, props),
            React__default.createElement(IconElementFill, { color: activeColor }))))) : null;
};

var StyledBottomNavItem = styled.button(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  display: block;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  height: 44px;\n  padding: 4px 12px;\n  &:hover {\n    border-radius: 16px;\n  }\n  &:hover,\n  &:hover div {\n    background: ", ";\n  }\n"], ["\n  display: block;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  height: 44px;\n  padding: 4px 12px;\n  &:hover {\n    border-radius: 16px;\n  }\n  &:hover,\n  &:hover div {\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
});
var StyledBottomNavText = styled(Text)(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  display: -webkit-box;\n  overflow: hidden;\n  user-select: none;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  -webkit-user-select: none;\n  -webkit-touch-callout: none;\n"], ["\n  display: -webkit-box;\n  overflow: hidden;\n  user-select: none;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  -webkit-user-select: none;\n  -webkit-touch-callout: none;\n"])));
var templateObject_1$d, templateObject_2$9;

var BottomNavItem = function (_a) {
    var label = _a.label, iconName = _a.iconName, href = _a.href, _b = _a.showItemsOnMobile, showItemsOnMobile = _b === void 0 ? false : _b, _c = _a.isActive, isActive = _c === void 0 ? false : _c, props = __rest(_a, ["label", "iconName", "href", "showItemsOnMobile", "isActive"]);
    var bottomNavItemContent = (React__default.createElement(Flex, { flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%" },
        iconName && (React__default.createElement(AnimatedIconComponent, { iconName: iconName, height: "22px", width: "21px", color: isActive ? "primary" : "primary", activeColor: "primary", isActive: isActive, activeBackgroundColor: "backgroundAlt" })),
        React__default.createElement(StyledBottomNavText, { color: isActive ? "primary" : "primary", fontWeight: isActive ? "600" : "400", fontSize: "10px" }, label)));
    return showItemsOnMobile ? (React__default.createElement(StyledBottomNavItem, __assign({ type: "button" }, props), bottomNavItemContent)) : (React__default.createElement(StyledBottomNavItem, __assign({ as: Link$1, to: href }, props), bottomNavItemContent));
};

var StyledBottomNav = styled(Flex)(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  padding: 5px 8px;\n  background: ", ";\n  border-top: 1px solid ", ";\n  padding-bottom: env(safe-area-inset-bottom);\n  html[data-useragent*=\"TokenPocket_iOS\"] & {\n    padding-bottom: 45px;\n  }\n"], ["\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  padding: 5px 8px;\n  background: ", ";\n  border-top: 1px solid ", ";\n  padding-bottom: env(safe-area-inset-bottom);\n  html[data-useragent*=\"TokenPocket_iOS\"] & {\n    padding-bottom: 45px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundAlt;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
});
var StyledOverlay = styled.div(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  content: \"\";\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: ", ";\n  backdrop-filter: blur(2px);\n"], ["\n  content: \"\";\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: ", ";\n  backdrop-filter: blur(2px);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text + "99";
});
var templateObject_1$c, templateObject_2$8;

var getTextColor = function (_a) {
    var $isActive = _a.$isActive, disabled = _a.disabled, theme = _a.theme;
    if (disabled)
        return theme.colors.textDisabled;
    if ($isActive)
        return theme.colors.textCommon;
    return theme.colors.textCommon;
};
var DropdownMenuItem = styled.button(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  background: transparent;\n  color: ", ";\n  cursor: ", ";\n  font-weight: ", ";\n  display: flex;\n  font-size: 16px;\n  height: 48px;\n  justify-content: space-between;\n  outline: 0;\n  padding-left: 16px;\n  padding-right: 16px;\n  width: 100%;\n\n  &:hover:not(:disabled) {\n    background-color: ", ";\n  }\n\n  &:active:not(:disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n  }\n"], ["\n  align-items: center;\n  border: 0;\n  background: transparent;\n  color: ", ";\n  cursor: ", ";\n  font-weight: ", ";\n  display: flex;\n  font-size: 16px;\n  height: 48px;\n  justify-content: space-between;\n  outline: 0;\n  padding-left: 16px;\n  padding-right: 16px;\n  width: 100%;\n\n  &:hover:not(:disabled) {\n    background-color: ", ";\n  }\n\n  &:active:not(:disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n  }\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled, $isActive = _a.$isActive;
    return getTextColor({ theme: theme, disabled: disabled, $isActive: $isActive });
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "not-allowed" : "pointer");
}, function (_a) {
    var _b = _a.$isActive, $isActive = _b === void 0 ? false : _b;
    return ($isActive ? "600" : "400");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
});
var StyledDropdownMenuItemContainer = styled.div(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  &:first-child > ", " {\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n  }\n\n  &:last-child > ", " {\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n"], ["\n  &:first-child > ", " {\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n  }\n\n  &:last-child > ", " {\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n"])), DropdownMenuItem, DropdownMenuItem);
var DropdownMenuDivider = styled.hr(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0 0;\n  margin: 4px 0;\n"], ["\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0 0;\n  margin: 4px 0;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
});
var StyledDropdownMenu = styled.div(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  padding-bottom: 4px;\n  padding-top: 4px;\n  pointer-events: auto;\n  width: ", ";\n  visibility: visible;\n  z-index: 1001;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  padding-bottom: 4px;\n  padding-top: 4px;\n  pointer-events: auto;\n  width: ", ";\n  visibility: visible;\n  z-index: 1001;\n\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
}, function (_a) {
    var $isBottomNav = _a.$isBottomNav;
    return ($isBottomNav ? "calc(100% - 32px)" : "280px");
}, function (_a) {
    var $isOpen = _a.$isOpen;
    return !$isOpen &&
        "\n    pointer-events: none;\n    visibility: hidden;\n  ";
});
var LinkStatus = styled(Text)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n  margin-left: 8px;\n"], ["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n  margin-left: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.radii.default;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
});
var templateObject_1$b, templateObject_2$7, templateObject_3$4, templateObject_4$2, templateObject_5$1;

var DropdownMenuItemType;
(function (DropdownMenuItemType) {
    DropdownMenuItemType[DropdownMenuItemType["INTERNAL_LINK"] = 0] = "INTERNAL_LINK";
    DropdownMenuItemType[DropdownMenuItemType["EXTERNAL_LINK"] = 1] = "EXTERNAL_LINK";
    DropdownMenuItemType[DropdownMenuItemType["BUTTON"] = 2] = "BUTTON";
    DropdownMenuItemType[DropdownMenuItemType["DIVIDER"] = 3] = "DIVIDER";
})(DropdownMenuItemType || (DropdownMenuItemType = {}));

var DropdownMenu = function (_a) {
    var children = _a.children, _b = _a.isBottomNav, isBottomNav = _b === void 0 ? false : _b, _c = _a.showItemsOnMobile, showItemsOnMobile = _c === void 0 ? false : _c, _d = _a.activeItem, activeItem = _d === void 0 ? "" : _d, _e = _a.items, items = _e === void 0 ? [] : _e, _f = _a.openMenuTimeout, openMenuTimeout = _f === void 0 ? 0 : _f, index = _a.index, setMenuOpenByIndex = _a.setMenuOpenByIndex, props = __rest(_a, ["children", "isBottomNav", "showItemsOnMobile", "activeItem", "items", "openMenuTimeout", "index", "setMenuOpenByIndex"]);
    var _g = useState(false), isOpen = _g[0], setIsOpen = _g[1];
    var _h = useState(null), targetRef = _h[0], setTargetRef = _h[1];
    var _j = useState(null), tooltipRef = _j[0], setTooltipRef = _j[1];
    var hideTimeout = useRef();
    var isHoveringOverTooltip = useRef(false);
    var hasItems = items.length > 0;
    var clickTimeRef = useRef(openMenuTimeout);
    var _k = usePopper(targetRef, tooltipRef, {
        placement: isBottomNav ? "top" : "bottom-start",
        modifiers: [{ name: "offset", options: { offset: [0, isBottomNav ? 6 : 0] } }],
    }), styles = _k.styles, attributes = _k.attributes;
    /**
     * See "useTooltip"
     */
    useEffect(function () {
        var showTooltip = function (evt) {
            setIsOpen(true);
            if (evt.target === targetRef) {
                clearTimeout(hideTimeout.current);
            }
            if (evt.target === tooltipRef) {
                isHoveringOverTooltip.current = true;
            }
        };
        var hideTooltip = function (evt) {
            var target = evt.target;
            return target && !(tooltipRef === null || tooltipRef === void 0 ? void 0 : tooltipRef.contains(target)) && setIsOpen(false);
        };
        var toggleTouch = function (evt) {
            var target = evt.target;
            var isTouchingTargetRef = target && (targetRef === null || targetRef === void 0 ? void 0 : targetRef.contains(target));
            var isTouchingTooltipRef = target && (tooltipRef === null || tooltipRef === void 0 ? void 0 : tooltipRef.contains(target));
            if (isTouchingTargetRef) {
                if (isOpen || openMenuTimeout === 0) {
                    setIsOpen(function (prevOpen) { return !prevOpen; });
                }
            }
            else if (isTouchingTooltipRef) {
                // Don't close the menu immediately so it catches the event
                setTimeout(function () {
                    setIsOpen(false);
                }, 500);
            }
            else {
                setIsOpen(false);
            }
        };
        var handlePointerDown = function (e) {
            var target = e.target;
            var isTouchingTargetRef = target && (targetRef === null || targetRef === void 0 ? void 0 : targetRef.contains(target));
            if (isTouchingTargetRef) {
                clickTimeRef.current = e.timeStamp;
                setTimeout(function () {
                    if (clickTimeRef.current > 0)
                        setIsOpen(true);
                }, openMenuTimeout);
            }
        };
        var handlePointerUp = function () {
            clickTimeRef.current = 0;
        };
        if (isTouchDevice()) {
            document.addEventListener("touchstart", toggleTouch);
            if (openMenuTimeout > 0) {
                document.addEventListener("pointerdown", handlePointerDown);
                document.addEventListener("pointerup", handlePointerUp);
            }
        }
        else {
            targetRef === null || targetRef === void 0 ? void 0 : targetRef.addEventListener("mouseenter", showTooltip);
            targetRef === null || targetRef === void 0 ? void 0 : targetRef.addEventListener("mouseleave", hideTooltip);
            tooltipRef === null || tooltipRef === void 0 ? void 0 : tooltipRef.addEventListener("mouseenter", showTooltip);
            tooltipRef === null || tooltipRef === void 0 ? void 0 : tooltipRef.addEventListener("mouseleave", hideTooltip);
        }
        return function () {
            if (isTouchDevice()) {
                document.removeEventListener("touchstart", toggleTouch);
                if (openMenuTimeout > 0) {
                    document.removeEventListener("pointerdown", handlePointerDown);
                    document.removeEventListener("pointerup", handlePointerUp);
                }
            }
            else {
                targetRef === null || targetRef === void 0 ? void 0 : targetRef.removeEventListener("mouseenter", showTooltip);
                targetRef === null || targetRef === void 0 ? void 0 : targetRef.removeEventListener("mouseleave", hideTooltip);
                tooltipRef === null || tooltipRef === void 0 ? void 0 : tooltipRef.removeEventListener("mouseenter", showTooltip);
                tooltipRef === null || tooltipRef === void 0 ? void 0 : tooltipRef.removeEventListener("mouseleave", hideTooltip);
            }
        };
    }, [targetRef, tooltipRef, hideTimeout, isHoveringOverTooltip, setIsOpen, openMenuTimeout, isOpen, isBottomNav]);
    useEffect(function () {
        if (setMenuOpenByIndex && index !== undefined) {
            showItemsOnMobile && setMenuOpenByIndex(function (prevValue) {
                var _a;
                return (__assign(__assign({}, prevValue), (_a = {}, _a[index] = isOpen, _a)));
            });
        }
    }, [isOpen, setMenuOpenByIndex, index]);
    return (React__default.createElement(Box, __assign({ ref: isBottomNav ? null : setTargetRef }, props),
        React__default.createElement(Box, { ref: isBottomNav ? setTargetRef : null }, children),
        hasItems && (React__default.createElement(StyledDropdownMenu, __assign({ style: styles.popper, ref: setTooltipRef }, attributes.popper, { "$isBottomNav": isBottomNav, "$isOpen": isOpen && ((isBottomNav && showItemsOnMobile) || !isBottomNav) }), items
            .filter(function (item) { return !item.isMobileOnly; })
            .map(function (_a, itemItem) {
            var _b = _a.type, type = _b === void 0 ? DropdownMenuItemType.INTERNAL_LINK : _b, label = _a.label, _c = _a.href, href = _c === void 0 ? "/" : _c, status = _a.status, itemProps = __rest(_a, ["type", "label", "href", "status"]);
            var MenuItemContent = (React__default.createElement(React__default.Fragment, null,
                label,
                status && (React__default.createElement(LinkStatus, { color: status.color, fontSize: "14px" }, status.text))));
            var isActive = href === activeItem;
            return (React__default.createElement(StyledDropdownMenuItemContainer, { key: itemItem },
                type === DropdownMenuItemType.BUTTON && (React__default.createElement(DropdownMenuItem, __assign({ "$isActive": isActive, type: "button" }, itemProps), MenuItemContent)),
                type === DropdownMenuItemType.INTERNAL_LINK && (React__default.createElement(DropdownMenuItem, __assign({ "$isActive": isActive, as: Link$1, to: href }, itemProps), MenuItemContent)),
                type === DropdownMenuItemType.EXTERNAL_LINK && (React__default.createElement(DropdownMenuItem, __assign({ "$isActive": isActive, as: "a", href: href, target: "_blank" }, itemProps),
                    React__default.createElement(Flex, { alignItems: "center", justifyContent: "space-between", width: "100%" },
                        label,
                        React__default.createElement(IconComponent, { iconName: "Logout" })))),
                type === DropdownMenuItemType.DIVIDER && React__default.createElement(DropdownMenuDivider, null)));
        })))));
};

var BottomNav = function (_a) {
    var _b = _a.items, items = _b === void 0 ? [] : _b, _c = _a.activeItem, activeItem = _c === void 0 ? "" : _c, _d = _a.activeSubItem, activeSubItem = _d === void 0 ? "" : _d, props = __rest(_a, ["items", "activeItem", "activeSubItem"]);
    var _e = useState({}), menuOpenByIndex = _e[0], setMenuOpenByIndex = _e[1];
    var isBottomMenuOpen = Object.values(menuOpenByIndex).reduce(function (acc, value) { return acc || value; }, false);
    return (React__default.createElement(React__default.Fragment, null,
        isBottomMenuOpen && React__default.createElement(StyledOverlay, null),
        React__default.createElement(StyledBottomNav, __assign({ justifyContent: "space-around" }, props), items.map(function (_a, index) {
            var _b, _c;
            var label = _a.label, menuItems = _a.items, href = _a.href, icon = _a.icon, _d = _a.showOnMobile, showOnMobile = _d === void 0 ? true : _d, _e = _a.showItemsOnMobile, showItemsOnMobile = _e === void 0 ? true : _e;
            var statusColor = (_c = (_b = menuItems === null || menuItems === void 0 ? void 0 : menuItems.find(function (menuItem) { return menuItem.status !== undefined; })) === null || _b === void 0 ? void 0 : _b.status) === null || _c === void 0 ? void 0 : _c.color;
            return (showOnMobile && (React__default.createElement(DropdownMenu, { key: label, items: menuItems, isBottomNav: true, activeItem: activeSubItem, showItemsOnMobile: showItemsOnMobile, setMenuOpenByIndex: setMenuOpenByIndex, index: index },
                React__default.createElement(Box, null,
                    React__default.createElement(NotificationDot, { show: !!statusColor, color: statusColor },
                        React__default.createElement(BottomNavItem, { href: href, isActive: href === activeItem, label: label, iconName: icon, showItemsOnMobile: showItemsOnMobile }))))));
        }))));
};

var socials = [
    {
        label: "Twitter",
        icon: "Twitter",
        href: "https://twitter.com/pancakeswap",
    },
    {
        label: "Telegram",
        icon: "Telegram",
        items: [
            {
                label: "English",
                href: "https://t.me/pancakeswap",
            },
            {
                label: "Bahasa Indonesia",
                href: "https://t.me/PancakeSwapIndonesia",
            },
            {
                label: "中文",
                href: "https://t.me/PancakeSwap_CN",
            },
            {
                label: "Tiếng Việt",
                href: "https://t.me/PancakeSwapVN",
            },
            {
                label: "Italiano",
                href: "https://t.me/pancakeswap_ita",
            },
            {
                label: "русский",
                href: "https://t.me/pancakeswap_ru",
            },
            {
                label: "Türkiye",
                href: "https://t.me/pancakeswapturkiye",
            },
            {
                label: "Português",
                href: "https://t.me/PancakeSwapPortuguese",
            },
            {
                label: "Español",
                href: "https://t.me/PancakeswapEs",
            },
            {
                label: "日本語",
                href: "https://t.me/pancakeswapjp",
            },
            {
                label: "Français",
                href: "https://t.me/pancakeswapfr",
            },
            {
                label: "Announcements",
                href: "https://t.me/PancakeSwapAnn",
            },
            {
                label: "Whale Alert",
                href: "https://t.me/PancakeSwapWhales",
            },
        ],
    },
    {
        label: "Reddit",
        icon: "Reddit",
        href: "https://reddit.com/r/pancakeswap",
    },
    {
        label: "Instagram",
        icon: "Instagram",
        href: "https://instagram.com/pancakeswap_official",
    },
    {
        label: "Github",
        icon: "Github",
        href: "https://github.com/pancakeswap/",
    },
];
__spreadArray([], Array(20)).map(function (_, i) { return ({
    code: "en" + i,
    language: "English" + i,
    locale: "Locale" + i,
}); });

var SocialLinks = function (_a) {
    var props = __rest(_a, []);
    return (React__default.createElement(Flex, __assign({}, props), socials.map(function (social, index) {
        var iconProps = {
            iconName: social.icon,
            width: "20px",
            color: darkColors.textSubtle,
            style: { cursor: "pointer" },
        };
        var mr = index < socials.length - 1 ? "24px" : 0;
        if (social.items) {
            return (React__default.createElement(Dropdown, { key: social.label, position: "top", target: React__default.createElement(IconComponent, __assign({}, iconProps, { mr: mr })) }, social.items.map(function (item) { return (React__default.createElement(Link, { external: true, key: item.label, href: item.href, "aria-label": item.label, color: "textSubtle" }, item.label)); })));
        }
        return (React__default.createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
            React__default.createElement(IconComponent, __assign({}, iconProps))));
    })));
};
var SocialLinks$1 = React__default.memo(SocialLinks, function () { return true; });

var StyledFooter = styled(Flex)(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  background: ", ";\n"], ["\n  background: ", ";\n"])), darkColors.backgroundAlt);
var StyledList = styled.ul(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  list-style: none;\n  margin-bottom: 40px;\n\n  ", " {\n    margin-bottom: 0px;\n  }\n"], ["\n  list-style: none;\n  margin-bottom: 40px;\n\n  ", " {\n    margin-bottom: 0px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledDesc = styled.div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  margin-top: 60px;\n  font-size: 16px;\n  color: #585858;\n  line-height: 19px;\n"], ["\n  margin-top: 60px;\n  font-size: 16px;\n  color: #585858;\n  line-height: 19px;\n"])));
var StyledListItem = styled.li(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  font-size: 14px;\n  margin-bottom: 8px;\n  text-transform: capitalize;\n\n  &:first-child {\n    font-size: 16px;\n    color: ", ";\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 44px;\n  }\n"], ["\n  font-size: 14px;\n  margin-bottom: 8px;\n  text-transform: capitalize;\n\n  &:first-child {\n    font-size: 16px;\n    color: ", ";\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 44px;\n  }\n"])), darkColors.primary);
styled(Box)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-bottom: 24px;\n"], ["\n  margin-bottom: 24px;\n"])));
styled(Flex)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  border-color: ", ";\n  border-top-width: 1px;\n  border-bottom-width: 1px;\n  border-style: solid;\n  padding: 24px 0;\n  margin-bottom: 24px;\n\n  ", " {\n    border-top-width: 0;\n    border-bottom-width: 0;\n    padding: 0 0;\n    margin-bottom: 0;\n  }\n"], ["\n  border-color: ", ";\n  border-top-width: 1px;\n  border-bottom-width: 1px;\n  border-style: solid;\n  padding: 24px 0;\n  margin-bottom: 24px;\n\n  ", " {\n    border-top-width: 0;\n    border-bottom-width: 0;\n    padding: 0 0;\n    margin-bottom: 0;\n  }\n"])), darkColors.cardBorder, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
styled(SocialLinks$1)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  border-bottom: 1px solid ", ";\n"], ["\n  border-bottom: 1px solid ", ";\n"])), darkColors.cardBorder);
var StyledText = styled.span(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), darkColors.text);
var templateObject_1$a, templateObject_2$6, templateObject_3$3, templateObject_4$1, templateObject_5, templateObject_6, templateObject_7, templateObject_8;

var MenuItem = function (_a) {
    var items = _a.items; _a.isDark; _a.toggleTheme; _a.currentLang; _a.langs; _a.setLang; _a.cakePriceUsd; _a.buyCakeLabel; var props = __rest(_a, ["items", "isDark", "toggleTheme", "currentLang", "langs", "setLang", "cakePriceUsd", "buyCakeLabel"]);
    return (React__default.createElement(StyledFooter, __assign({ p: ["40px 16px", null, "56px 40px 32px 40px"] }, props, { justifyContent: "center" }),
        React__default.createElement(Flex, { flexDirection: "column", width: ["100%", null, "1200px;"] },
            React__default.createElement(Flex, { order: [2, null, 1], flexDirection: ["column", null, "row"], justifyContent: "space-between", alignItems: "flex-start", mb: ["42px", null, "36px"] },
                React__default.createElement(Flex, { maxWidth: "382px", flexDirection: 'column', display: ["none", null, "block"], alignItems: "flex-start" },
                    React__default.createElement(LogoWithTextIcon, { alignSelf: "flex-start", isDark: true, width: "315px" }),
                    React__default.createElement(StyledDesc, null, "Cross-chain decentralized derivatives trading platform Copyrights  Eangelmarkets")), items === null || items === void 0 ? void 0 :
                items.map(function (item) {
                    var _a;
                    return (React__default.createElement(StyledList, { key: item.label },
                        React__default.createElement(StyledListItem, null, item.label), (_a = item.items) === null || _a === void 0 ? void 0 :
                        _a.map(function (_a) {
                            var label = _a.label, href = _a.href, _b = _a.isHighlighted, isHighlighted = _b === void 0 ? false : _b;
                            return (React__default.createElement(StyledListItem, { key: label }, href ? (React__default.createElement(Link, { href: href, target: "_blank", rel: "noreferrer noopener", color: isHighlighted ? baseColors.warning : darkColors.text, bold: false }, label)) : (React__default.createElement(StyledText, null, label))));
                        })));
                }),
                React__default.createElement("ul", null),
                React__default.createElement("ul", null)))));
};

var MenuItems = function (_a) {
    var _b = _a.items, items = _b === void 0 ? [] : _b, activeItem = _a.activeItem, activeSubItem = _a.activeSubItem, isMain = _a.isMain, props = __rest(_a, ["items", "activeItem", "activeSubItem", "isMain"]);
    return (React__default.createElement(Flex, __assign({}, props), items.map(function (_a) {
        var _b, _c;
        var label = _a.label, _d = _a.items, menuItems = _d === void 0 ? [] : _d, href = _a.href, _e = _a.icon, icon = _e === void 0 ? "" : _e;
        var statusColor = (_c = (_b = menuItems === null || menuItems === void 0 ? void 0 : menuItems.find(function (menuItem) { return menuItem.status !== undefined; })) === null || _b === void 0 ? void 0 : _b.status) === null || _c === void 0 ? void 0 : _c.color;
        var isActive = activeItem === href;
        return (React__default.createElement(DropdownMenu, { key: label + "#" + href + "#" + icon, items: menuItems, py: 1, activeItem: activeSubItem },
            React__default.createElement(MenuItem$1, { href: isTouchDevice() && menuItems && menuItems.length > 0 ? "" : href, isMain: isMain, isActive: isActive, statusColor: statusColor }, label || React__default.createElement(IconComponent, { iconName: icon, color: isActive ? "textCommon" : "textCommon" }))));
    })));
};

var StyledLogoImage = styled.img(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  width: 315px;\n  height: 56px;\n"], ["\n  width: 315px;\n  height: 56px;\n"])));
var blink = keyframes(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  0%,  100% { transform: scaleY(1); } \n  50% { transform:  scaleY(0.1); } \n"], ["\n  0%,  100% { transform: scaleY(1); } \n  50% { transform:  scaleY(0.1); } \n"])));
var StyledLink = styled(Link$1)(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 315px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 315px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n  .right-eye {\n    animation-delay: 20ms;\n  }\n  &:hover {\n    .left-eye,\n    .right-eye {\n      transform-origin: center 60%;\n      animation-name: ", ";\n      animation-duration: 350ms;\n      animation-iteration-count: 1;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 315px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 315px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n  .right-eye {\n    animation-delay: 20ms;\n  }\n  &:hover {\n    .left-eye,\n    .right-eye {\n      transform-origin: center 60%;\n      animation-name: ", ";\n      animation-duration: 350ms;\n      animation-iteration-count: 1;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, blink);
var Logo = function (_a) {
    var imgUrl = _a.imgUrl, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(StyledLogoImage, { className: "mobile-icon", src: imgUrl }),
        React__default.createElement(StyledLogoImage, { className: "desktop-icon", src: imgUrl })));
    return (React__default.createElement(Flex, null, isAbsoluteUrl ? (React__default.createElement(StyledLink, { as: "a", href: href, "aria-label": "Pancake home page" }, innerLogo)) : (React__default.createElement(StyledLink, { to: href, "aria-label": "Pancake home page" }, innerLogo))));
};
var Logo$1 = React__default.memo(Logo, function (prev, next) { return true; });
var templateObject_1$9, templateObject_2$5, templateObject_3$2;

var status = {
    LIVE: {
        text: "LIVE",
        color: "failure",
    },
    SOON: {
        text: "SOON",
        color: "warning",
    },
    NEW: {
        text: "NEW",
        color: "success",
    },
};
var links = [
    {
        label: "Trade",
        href: "/swap",
        icon: "Swap",
        items: [
            {
                label: "Exchange",
                href: "https://exchange.pancakeswap.finance",
            },
            {
                label: "Liquidity",
                href: "https://exchange.pancakeswap.finance/#/pool",
            },
            {
                label: "Charts",
                href: "https://exchange.pancakeswap.finance/#/charts",
                iconName: "Chart",
                isMobileOnly: true,
            },
        ],
    },
    {
        label: "Earn",
        href: "/",
        icon: "Earn",
        items: [
            {
                label: "Earn",
                href: "/",
            },
            {
                label: "Yield Farms",
                href: "/",
            },
            {
                label: "Syrup pools",
                href: "/",
            },
        ],
    },
    {
        label: "Win",
        href: "/",
        icon: "Trophy",
        items: [
            {
                label: "Win",
                href: "/",
            },
            {
                label: "Predictions",
                href: "/",
                status: status.LIVE,
            },
            {
                label: "Lottery",
                href: "/",
            },
        ],
    },
    {
        label: "",
        href: "/",
        icon: "More",
        items: [
            {
                label: "Info & Analytics",
                href: "/",
            },
            {
                label: "IFO Token Sales",
                href: "/",
                status: status.SOON,
            },
            {
                type: DropdownMenuItemType.DIVIDER,
            },
            {
                label: "NFT Collectibles",
                href: "/",
            },
            {
                label: "Team Leaderboard",
                href: "/",
            },
            {
                type: DropdownMenuItemType.DIVIDER,
            },
            {
                label: "Blog",
                href: "/",
            },
            {
                label: "Docs & Guides",
                href: "/",
                type: DropdownMenuItemType.EXTERNAL_LINK,
            },
        ],
    },
];
[
    {
        label: "Wallet",
        onClick: noop$1,
        type: DropdownMenuItemType.BUTTON,
    },
    {
        label: "Transactions",
        type: DropdownMenuItemType.BUTTON,
    },
    {
        type: DropdownMenuItemType.DIVIDER,
    },
    {
        type: DropdownMenuItemType.BUTTON,
        disabled: true,
        label: "Dashboard",
    },
    {
        type: DropdownMenuItemType.BUTTON,
        disabled: true,
        label: "Portfolio",
    },
    {
        label: "Profile",
        href: "/profile",
    },
    {
        type: DropdownMenuItemType.EXTERNAL_LINK,
        href: "https://pancakeswap.finance",
        label: "Link",
    },
    {
        type: DropdownMenuItemType.DIVIDER,
    },
    {
        type: DropdownMenuItemType.BUTTON,
        onClick: noop$1,
        label: "Disconnect",
    },
];
var MENU_HEIGHT = 136;
var MOBILE_MENU_HEIGHT = 44;

var MenuButton = styled(Button)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$8;

var LangSelector = function (_a) {
    var currentLang = _a.currentLang, langs = _a.langs, color = _a.color, setLang = _a.setLang, _b = _a.dropdownPosition, dropdownPosition = _b === void 0 ? "bottom" : _b, _c = _a.buttonScale, buttonScale = _c === void 0 ? "md" : _c, _d = _a.hideLanguage, hideLanguage = _d === void 0 ? false : _d;
    return (React__default.createElement(Dropdown, { position: dropdownPosition, target: React__default.createElement(Button
        // mt='7px' 
        , { 
            // mt='7px' 
            my: '7px', scale: buttonScale, variant: "text", startIcon: React__default.createElement(Icon$1x, { color: color, width: "15px" }), endIcon: React__default.createElement(Icon$1F, { color: color, width: "13px" }) }, !hideLanguage && React__default.createElement(Text, { small: true, color: color }, currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase())) }, langs.map(function (lang) { return (React__default.createElement(MenuButton, { key: lang.locale, fullWidth: true, onClick: function () { return setLang(lang); }, 
        // Safari fix
        style: { minHeight: "32px", height: "auto" } }, lang.language)); })));
};
var LangSelector$1 = React__default.memo(LangSelector, function (prev, next) { return prev.currentLang === next.currentLang; });

var Wrapper = styled.div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled.nav(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  /* border-bottom: 1px solid ", "; */\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n\n  padding-left: 16px;\n  padding-right: 16px;\n\n  ", " {\n    width: 1200px;\n    left: 50%;\n    transform: translate3d(-50%, 0, 0);\n  }\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  /* border-bottom: 1px solid ", "; */\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n\n  padding-left: 16px;\n  padding-right: 16px;\n\n  ", " {\n    width: 1200px;\n    left: 50%;\n    transform: translate3d(-50%, 0, 0);\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xxl;
});
var BodyWrapper = styled(Box)(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background-color: #000;\n  flex-grow: 1;\n  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n"], ["\n  background-color: #000;\n  flex-grow: 1;\n  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n"])));
var Menu$1 = function (_a) {
    var _b;
    var userMenu = _a.userMenu, globalMenu = _a.globalMenu, isDark = _a.isDark, toggleTheme = _a.toggleTheme, currentLang = _a.currentLang, setLang = _a.setLang, cakePriceUsd = _a.cakePriceUsd, links = _a.links, subLinks = _a.subLinks, footerLinks = _a.footerLinks, activeItem = _a.activeItem, activeSubItem = _a.activeSubItem, langs = _a.langs, buyCakeLabel = _a.buyCakeLabel, imgUrl = _a.imgUrl, children = _a.children;
    var isMobile = useMatchBreakpoints().isMobile;
    var _c = useState(true), showMenu = _c[0], setShowMenu = _c[1];
    var refPrevOffset = useRef(window.pageYOffset);
    useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current || currentOffset <= MENU_HEIGHT) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle(handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    var subLinksWithoutMobile = subLinks === null || subLinks === void 0 ? void 0 : subLinks.filter(function (subLink) { return !subLink.isMobileOnly; });
    var subLinksMobileOnly = subLinks === null || subLinks === void 0 ? void 0 : subLinks.filter(function (subLink) { return subLink.isMobileOnly; });
    return (React__default.createElement(Wrapper, null,
        React__default.createElement(Flex, { maxWidth: "1200px", justifyContent: "" }),
        React__default.createElement(StyledNav, { showMenu: showMenu },
            React__default.createElement(Flex, null,
                React__default.createElement(Logo$1, { imgUrl: imgUrl, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" })),
            React__default.createElement(Flex, { alignItems: "center" },
                !isMobile && React__default.createElement(MenuItems, { isMain: true, items: links, activeItem: activeItem, activeSubItem: activeSubItem, mr: "24px" }),
                userMenu,
                React__default.createElement(Box, { ml: '16px' },
                    React__default.createElement(LangSelector$1, { currentLang: currentLang, langs: langs, setLang: setLang, buttonScale: "xs", color: "text" })),
                globalMenu)),
        subLinks && (React__default.createElement(Flex, { justifyContent: "space-around", background: "#000" },
            React__default.createElement(SubMenuItems, { items: subLinksWithoutMobile, mt: MENU_HEIGHT + 1 + "px", activeItem: activeSubItem }),
            (subLinksMobileOnly === null || subLinksMobileOnly === void 0 ? void 0 : subLinksMobileOnly.length) > 0 && (React__default.createElement(SubMenuItems, { items: subLinksMobileOnly, mt: MENU_HEIGHT + 1 + "px", activeItem: activeSubItem, isMobileOnly: true })))),
        React__default.createElement(BodyWrapper, { mt: !subLinks ? MENU_HEIGHT + 1 + "px" : "0" },
            React__default.createElement(Inner, { isPushed: false, showMenu: showMenu },
                children,
                React__default.createElement(MenuItem, { items: footerLinks, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, buyCakeLabel: buyCakeLabel, mb: [MOBILE_MENU_HEIGHT + "px", null, "0px"] }))),
        isMobile && React__default.createElement(BottomNav, { items: links, activeItem: activeItem, activeSubItem: activeSubItem })));
};
var templateObject_1$7, templateObject_2$4, templateObject_3$1, templateObject_4;

var variants = {
    DEFAULT: "default",
    WARNING: "warning",
    DANGER: "danger",
    PENDING: "pending",
};

var MenuIconWrapper = styled.div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-color: ", ";\n  border-radius: 50%;\n  border-style: solid;\n  border-width: 2px;\n  display: flex;\n  height: 40px;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  top: -4px;\n  width: 40px;\n  z-index: 102;\n  margin-left: -1px;\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-color: ", ";\n  border-radius: 50%;\n  border-style: solid;\n  border-width: 2px;\n  display: flex;\n  height: 40px;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  top: -4px;\n  width: 40px;\n  z-index: 102;\n  margin-left: -1px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.background;
}, function (_a) {
    var theme = _a.theme, borderColor = _a.borderColor;
    return theme.colors[borderColor];
});
var ProfileIcon = styled(Image)(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  left: 0;\n  position: absolute;\n  top: -4px;\n  z-index: 102;\n\n  & > img {\n    border-radius: 50%;\n  }\n"], ["\n  left: 0;\n  position: absolute;\n  top: -4px;\n  z-index: 102;\n\n  & > img {\n    border-radius: 50%;\n  }\n"])));
var NoProfileMenuIcon = function () { return (React__default.createElement(MenuIconWrapper, { borderColor: "primary" },
    React__default.createElement(Icon$j, { color: "primary", width: "24px" }))); };
var PendingMenuIcon = function () { return (React__default.createElement(MenuIconWrapper, { borderColor: "secondary" },
    React__default.createElement(Icon$U, { color: "secondary", width: "24px", spin: true }))); };
var WarningMenuIcon = function () { return (React__default.createElement(MenuIconWrapper, { borderColor: "warning" },
    React__default.createElement(Icon$m, { color: "warning", width: "24px" }))); };
var DangerMenuIcon = function () { return (React__default.createElement(MenuIconWrapper, { borderColor: "failure" },
    React__default.createElement(Icon$m, { color: "failure", width: "24px" }))); };
var MenuIcon = function (_a) {
    var avatarSrc = _a.avatarSrc, variant = _a.variant;
    if (variant === variants.DANGER) {
        return React__default.createElement(DangerMenuIcon, null);
    }
    if (variant === variants.WARNING) {
        return React__default.createElement(WarningMenuIcon, null);
    }
    if (variant === variants.PENDING) {
        return React__default.createElement(PendingMenuIcon, null);
    }
    if (!avatarSrc) {
        return React__default.createElement(NoProfileMenuIcon, null);
    }
    return React__default.createElement(ProfileIcon, { src: avatarSrc, height: 40, width: 40 });
};
var templateObject_1$6, templateObject_2$3;

var UserMenuDivider = styled.hr(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0 0;\n  margin: 4px 0;\n"], ["\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0 0;\n  margin: 4px 0;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
});
var UserMenuItem = styled.button(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  background: transparent;\n  color: ", ";\n  cursor: ", ";\n  display: flex;\n  font-size: 16px;\n  height: 48px;\n  justify-content: space-between;\n  outline: 0;\n  padding-left: 16px;\n  padding-right: 16px;\n  width: 100%;\n\n  &:hover:not(:disabled) {\n    background-color: ", ";\n  }\n\n  &:active:not(:disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n  }\n"], ["\n  align-items: center;\n  border: 0;\n  background: transparent;\n  color: ", ";\n  cursor: ", ";\n  display: flex;\n  font-size: 16px;\n  height: 48px;\n  justify-content: space-between;\n  outline: 0;\n  padding-left: 16px;\n  padding-right: 16px;\n  width: 100%;\n\n  &:hover:not(:disabled) {\n    background-color: ", ";\n  }\n\n  &:active:not(:disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n  }\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return theme.colors[disabled ? "textDisabled" : "textSubtle"];
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "not-allowed" : "pointer");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
});
var templateObject_1$5, templateObject_2$2;

var StyledUserMenu = styled(Flex)(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  align-items: center;\n  background: linear-gradient(90deg, #585858 0%, #202020 100%);\n  border: 1px solid #828282;\n  border-radius: 16px;\n  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  display: inline-flex;\n  height: 32px;\n  padding-left: 40px;\n  padding-right: 8px;\n  position: relative;\n\n  &:hover {\n    opacity: 0.65;\n  }\n"], ["\n  align-items: center;\n  background: linear-gradient(90deg, #585858 0%, #202020 100%);\n  border: 1px solid #828282;\n  border-radius: 16px;\n  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  display: inline-flex;\n  height: 32px;\n  padding-left: 40px;\n  padding-right: 8px;\n  position: relative;\n\n  &:hover {\n    opacity: 0.65;\n  }\n"])));
var LabelText = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  color: ", ";\n  display: none;\n  font-weight: 600;\n\n  ", " {\n    display: block;\n    margin-left: 8px;\n    margin-right: 4px;\n  }\n"], ["\n  color: ", ";\n  display: none;\n  font-weight: 600;\n\n  ", " {\n    display: block;\n    margin-left: 8px;\n    margin-right: 4px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Menu = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  padding-bottom: 4px;\n  padding-top: 4px;\n  pointer-events: auto;\n  width: 280px;\n  visibility: visible;\n  z-index: 1001;\n\n  ", "\n\n  ", ":first-child {\n    border-radius: 8px 8px 0 0;\n  }\n\n  ", ":last-child {\n    border-radius: 0 0 8px 8px;\n  }\n"], ["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  padding-bottom: 4px;\n  padding-top: 4px;\n  pointer-events: auto;\n  width: 280px;\n  visibility: visible;\n  z-index: 1001;\n\n  ",
    "\n\n  ", ":first-child {\n    border-radius: 8px 8px 0 0;\n  }\n\n  ", ":last-child {\n    border-radius: 0 0 8px 8px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
}, function (_a) {
    var isOpen = _a.isOpen;
    return !isOpen &&
        "\n    pointer-events: none;\n    visibility: hidden;\n  ";
}, UserMenuItem, UserMenuItem);
var UserMenu = function (_a) {
    var account = _a.account, text = _a.text, avatarSrc = _a.avatarSrc, _b = _a.variant, variant = _b === void 0 ? variants.DEFAULT : _b, children = _a.children, props = __rest(_a, ["account", "text", "avatarSrc", "variant", "children"]);
    var _c = useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var _d = useState(null), targetRef = _d[0], setTargetRef = _d[1];
    var _e = useState(null), tooltipRef = _e[0], setTooltipRef = _e[1];
    var hideTimeout = useRef();
    var isHoveringOverTooltip = useRef(false);
    var accountEllipsis = account ? account.substring(0, 2) + "..." + account.substring(account.length - 4) : null;
    var _f = usePopper(targetRef, tooltipRef, {
        placement: "bottom-end",
        modifiers: [{ name: "offset", options: { offset: [0, 12] } }],
    }), styles = _f.styles, attributes = _f.attributes;
    /**
     * See "useTooltip"
     */
    useEffect(function () {
        var showTooltip = function (evt) {
            setIsOpen(true);
            if (evt.target === targetRef) {
                clearTimeout(hideTimeout.current);
            }
            if (evt.target === tooltipRef) {
                isHoveringOverTooltip.current = true;
            }
        };
        var hideTooltip = function (evt) {
            if (hideTimeout.current) {
                window.clearTimeout(hideTimeout.current);
            }
            if (evt.target === tooltipRef) {
                isHoveringOverTooltip.current = false;
            }
            if (!isHoveringOverTooltip.current) {
                hideTimeout.current = window.setTimeout(function () {
                    if (!isHoveringOverTooltip.current) {
                        setIsOpen(false);
                    }
                }, 150);
            }
        };
        var toggleTouch = function (evt) {
            var target = evt.target;
            var isTouchingTargetRef = target && (targetRef === null || targetRef === void 0 ? void 0 : targetRef.contains(target));
            var isTouchingTooltipRef = target && (tooltipRef === null || tooltipRef === void 0 ? void 0 : tooltipRef.contains(target));
            if (isTouchingTargetRef) {
                setIsOpen(function (prevOpen) { return !prevOpen; });
            }
            else if (isTouchingTooltipRef) {
                // Don't close the menu immediately so it catches the event
                setTimeout(function () {
                    setIsOpen(false);
                }, 500);
            }
            else {
                setIsOpen(false);
            }
        };
        if (isTouchDevice()) {
            document.addEventListener("touchstart", toggleTouch);
        }
        else {
            targetRef === null || targetRef === void 0 ? void 0 : targetRef.addEventListener("mouseenter", showTooltip);
            targetRef === null || targetRef === void 0 ? void 0 : targetRef.addEventListener("mouseleave", hideTooltip);
            tooltipRef === null || tooltipRef === void 0 ? void 0 : tooltipRef.addEventListener("mouseenter", showTooltip);
            tooltipRef === null || tooltipRef === void 0 ? void 0 : tooltipRef.addEventListener("mouseleave", hideTooltip);
        }
        return function () {
            if (isTouchDevice()) {
                document.removeEventListener("touchstart", toggleTouch);
            }
            else {
                targetRef === null || targetRef === void 0 ? void 0 : targetRef.removeEventListener("mouseenter", showTooltip);
                targetRef === null || targetRef === void 0 ? void 0 : targetRef.removeEventListener("mouseleave", hideTooltip);
                tooltipRef === null || tooltipRef === void 0 ? void 0 : tooltipRef.removeEventListener("mouseenter", showTooltip);
                tooltipRef === null || tooltipRef === void 0 ? void 0 : tooltipRef.removeEventListener("mouseleave", hideTooltip);
            }
        };
    }, [targetRef, tooltipRef, hideTimeout, isHoveringOverTooltip, setIsOpen]);
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(StyledUserMenu, __assign({ ref: setTargetRef }, props),
            React__default.createElement(MenuIcon, { avatarSrc: avatarSrc, variant: variant }),
            React__default.createElement(LabelText, { title: text || account }, text || accountEllipsis),
            React__default.createElement(Icon$1S, { color: "text", width: "24px" })),
        React__default.createElement(Menu, __assign({ style: styles.popper, ref: setTooltipRef }, attributes.popper, { isOpen: isOpen }), children)));
};
var templateObject_1$4, templateObject_2$1, templateObject_3;

var ConnectorNames;
(function (ConnectorNames) {
    ConnectorNames["Injected"] = "injected";
    ConnectorNames["WalletConnect"] = "walletconnect";
    ConnectorNames["BSC"] = "bsc";
})(ConnectorNames || (ConnectorNames = {}));

var connectors = [
    {
        title: "Metamask",
        icon: Icon$1f,
        connectorId: ConnectorNames.Injected,
        priority: 1,
    },
    {
        title: "WalletConnect",
        icon: Icon$l,
        connectorId: ConnectorNames.WalletConnect,
        priority: 2,
    },
    {
        title: "Trust Wallet",
        icon: Icon$u,
        connectorId: ConnectorNames.Injected,
        priority: 3,
    },
    {
        title: "MathWallet",
        icon: Icon$1n,
        connectorId: ConnectorNames.Injected,
        priority: 999,
    },
    {
        title: "TokenPocket",
        icon: Icon$z,
        connectorId: ConnectorNames.Injected,
        priority: 999,
    },
    {
        title: "Binance Chain",
        icon: Icon$24,
        connectorId: ConnectorNames.BSC,
        priority: 999,
    },
    {
        title: "SafePal",
        icon: Icon$R,
        connectorId: ConnectorNames.Injected,
        priority: 999,
    },
    {
        title: "Coin98",
        icon: Icon$1M,
        connectorId: ConnectorNames.Injected,
        priority: 999,
    },
];
var connectorLocalStorageKey = "connectorIdv2";
var walletLocalStorageKey = "wallet";

var WalletButton = styled(Button).attrs({ width: "100%", variant: "text", py: "16px" })(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n"], ["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n"])));
var MoreWalletCard = function (_a) {
    var t = _a.t, props = __rest(_a, ["t"]);
    return (React__default.createElement(WalletButton, __assign({ variant: "tertiary" }, props),
        React__default.createElement(Icon$1d, { width: "40px", mb: "8px", color: "textSubtle" }),
        React__default.createElement(Text, { fontSize: "14px" }, t("More"))));
};
var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React__default.createElement(WalletButton, { variant: "tertiary", onClick: function () {
            var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            // Since iOS does not support Trust Wallet we fall back to WalletConnect
            if (walletConfig.title === "Trust Wallet" && isIOS) {
                login(ConnectorNames.WalletConnect);
            }
            else {
                login(walletConfig.connectorId);
            }
            localStorage.setItem(walletLocalStorageKey, walletConfig.title);
            localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
            onDismiss();
        }, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React__default.createElement(Icon, { width: "40px", mb: "8px" }),
        React__default.createElement(Text, { fontSize: "14px" }, title)));
};
var templateObject_1$3;

var WalletWrapper = styled(Box)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  border-bottom: 1px solid ", ";\n"], ["\n  border-bottom: 1px solid ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
});
/**
 * Checks local storage if we have saved the last wallet the user connected with
 * If we find something we put it at the top of the list
 *
 * @returns sorted config
 */
var getPreferredConfig = function (walletConfig) {
    var preferredWalletName = localStorage.getItem(walletLocalStorageKey);
    var sortedConfig = walletConfig.sort(function (a, b) { return a.priority - b.priority; });
    if (!preferredWalletName) {
        return sortedConfig;
    }
    var preferredWallet = sortedConfig.find(function (sortedWalletConfig) { return sortedWalletConfig.title === preferredWalletName; });
    if (!preferredWallet) {
        return sortedConfig;
    }
    return __spreadArray([
        preferredWallet
    ], sortedConfig.filter(function (sortedWalletConfig) { return sortedWalletConfig.title !== preferredWalletName; }));
};
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b, _c = _a.displayCount, displayCount = _c === void 0 ? 3 : _c, t = _a.t;
    var _d = useState(false), showMore = _d[0], setShowMore = _d[1];
    var theme = useTheme();
    var sortedConfig = getPreferredConfig(connectors);
    var displayListConfig = showMore ? sortedConfig : sortedConfig.slice(0, displayCount);
    return (React__default.createElement(ModalContainer, { minWidth: "320px" },
        React__default.createElement(ModalHeader, { background: getThemeValue("colors.gradients.bubblegum")(theme) },
            React__default.createElement(ModalTitle, null,
                React__default.createElement(Heading, null, t("Connect Wallet"))),
            React__default.createElement(ModalCloseButton, { onDismiss: onDismiss })),
        React__default.createElement(ModalBody, { width: ["320px", null, "340px"] },
            React__default.createElement(WalletWrapper, { py: "24px", maxHeight: "453px", overflowY: "auto" },
                React__default.createElement(Grid, { gridTemplateColumns: "1fr 1fr" },
                    displayListConfig.map(function (wallet) { return (React__default.createElement(Box, { key: wallet.title },
                        React__default.createElement(WalletCard, { walletConfig: wallet, login: login, onDismiss: onDismiss }))); }),
                    !showMore && React__default.createElement(MoreWalletCard, { t: t, onClick: function () { return setShowMore(true); } }))),
            React__default.createElement(Box, { p: "24px" },
                React__default.createElement(Text, { textAlign: "center", color: "textSubtle", as: "p", mb: "16px" }, t("Haven’t got a crypto wallet yet?")),
                React__default.createElement(Button, __assign({ as: "a", href: "https://docs.pancakeswap.finance/get-started/connection-guide", variant: "subtle", width: "100%" }, getExternalLinkProps()), t("Learn How to Connect"))))));
};
var templateObject_1$2;

var StyleButton = styled(Text).attrs({ role: "button" })(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    var copyToClipboardWithCommand = function (content) {
        var el = document.createElement("textarea");
        el.value = content;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
    };
    function displayTooltip() {
        setIsTooltipDisplayed(true);
        setTimeout(function () {
            setIsTooltipDisplayed(false);
        }, 1000);
    }
    return (React__default.createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard && navigator.permissions) {
                navigator.clipboard.writeText(toCopy).then(function () { return displayTooltip(); });
            }
            else if (document.queryCommandSupported("copy")) {
                copyToClipboardWithCommand(toCopy);
                displayTooltip();
            }
        } }, props),
        children,
        React__default.createElement(Icon$1J, { width: "20px", color: "primary", ml: "4px" }),
        React__default.createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$1, templateObject_2;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b, t = _a.t;
    return (React__default.createElement(Modal, { title: t("Your wallet"), onDismiss: onDismiss },
        React__default.createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React__default.createElement(Flex, { mb: "32px" },
            React__default.createElement(LinkExternal, { small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, t("View on BscScan")),
            React__default.createElement(CopyToClipboard, { toCopy: account }, t("Copy Address"))),
        React__default.createElement(Flex, { justifyContent: "center" },
            React__default.createElement(Button, { scale: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(connectorLocalStorageKey);
                    onDismiss();
                } }, t("Logout")))));
};

var useWalletModal = function (login, logout, t, account) {
    var onPresentConnectModal = useModal(React__default.createElement(ConnectModal, { login: login, t: t }))[0];
    var onPresentAccountModal = useModal(React__default.createElement(AccountModal, { account: account || "", logout: logout, t: t }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var ResetCSS = createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  /* Number */\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  input[type=number] {\n    -moz-appearance: textfield;\n  }\n\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  /* Number */\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  input[type=number] {\n    -moz-appearance: textfield;\n  }\n\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1;

export { Icon$2g as AccountFilledIcon, Icon$2h as AccountIcon, Icon$2f as AddIcon, Alert, Icon$2e as ArrowBackIcon, Icon$2d as ArrowDownIcon, Icon$2c as ArrowDropDownIcon, Icon$2b as ArrowDropUpIcon, Icon$2a as ArrowFirstIcon, Icon$29 as ArrowForwardIcon, Icon$28 as ArrowLastIcon, Icon$27 as ArrowUpIcon, Icon$26 as AutoRenewIcon, BackgroundImage, BalanceInput, GridLayout$1 as BaseLayout, BaseMenu, Icon$24 as BinanceChainIcon, Icon$25 as BinanceIcon, Icon$2j as BlockIcon, Icon$23 as BnbUsdtPairTokenIcon, Box, Breadcrumbs, Icon$22 as BscScanIcon, Icon$21 as BunnyCardsIcon, Icon$20 as BunnyPlaceholderIcon, Icon$1$ as BurnedAmountIcon, Button, ButtonMenu$1 as ButtonMenu, ButtonMenuItem, CakePrice$1 as CakePrice, Icon$1X as CalculateIcon, Icon$1_ as CameraIcon, Card, CardBody, CardFooter, CardHeader, CardRibbon, Icon$1Y as CardViewIcon, Icon$1Z as Cards, GridLayout as CardsLayout, Icon$1V as ChartIcon, Checkbox, Icon$1T as CheckmarkCircleFillIcon, Icon$2l as CheckmarkCircleIcon, Icon$1U as CheckmarkIcon, Icon$1S as ChevronDownIcon, Icon$1R as ChevronLeftIcon, Icon$1Q as ChevronRightIcon, Icon$1P as ChevronUpIcon, Icon$1W as CircleOutlineIcon, ClickableElementContainer, Icon$1O as CloseIcon, Icon$1N as CogIcon, Icon$1M as Coin98Icon, Icon$1K as CommunityFilledIcon, Icon$1L as CommunityIcon, ConnectorNames, Icon$1J as CopyIcon, Icon$1I as CrownIcon, Icon$1H as CurrencyIcon, Icon$1G as CurrentDistributionIcon, Icon$1F as DownArrowIcon, Dropdown, DropdownMenuItemType, Icon$5 as EarnFillIcon, Icon$1D as EarnFilledIcon, Icon$1E as EarnIcon, Icon$1C as EllipsisIcon, Icon$2k as ErrorIcon, Icon$2 as ExpandIcon, ExpandableButton, ExpandableLabel, FallingBunnies, Icon$h as FarmIcon, Flex, Icon$1A as GithubIcon, Grid, Icon$g as GroupsIcon, Icon$e as HamburgerCloseIcon, Icon$f as HamburgerIcon, Heading, Icon$1z as HelpIcon, Icon$1y as HistoryIcon, Icon$d as HomeIcon, IconButton, Icon$c as IfoIcon, Image, Icon$2i as InfoIcon, InlineMenu, InlineMenuContainer, Input$1 as Input, InputGroup, Icon$1B as InstagramIcon, Icon$1w as LanguageCurrencyIcon, Icon$1x as LanguageIcon, Icon$1v as LaurelLeftIcon, Icon$1u as LaurelRightIcon, Link, LinkExternal, Icon$1t as ListViewIcon, Icon$1s as LoginIcon, Icon$1q as LogoExabcIcon, Icon$1p as LogoExabcWhiteIcon, Icon$1r as LogoIcon, Icon$1o as LogoRoundIcon, LogoWithTextIcon, Icon$1m as LogoutIcon, Icon$1l as MarketValueIcon, Icon$1n as MathWalletIcon, Icon$1k as MedalBronzeIcon, Icon$1j as MedalGoldIcon, Icon$1i as MedalPurpleIcon, Icon$1h as MedalSilverIcon, Icon$1g as MedalTealIcon, Menu$1 as Menu, Message, Icon$1f as MetamaskIcon, Icon$1e as MinusIcon, Modal, ModalBackButton, ModalBody, ModalCloseButton, ModalContainer, ModalHeader, ModalProvider, ModalTitle, Icon$b as MoonIcon, Icon$1d as MoreHorizontalIcon, Icon$a as MoreIcon, Icon$1c as MoreVerticalIcon, Icon$9 as NftFillIcon, Icon$1a as NftFilledIcon, Icon$1b as NftIcon, Icon$19 as NoProfileAvatarIcon, NotificationDot, Icon$18 as OpenNewIcon, Overlay, Icon$15 as PancakeRoundIcon, PancakeToggle, Icon$17 as PancakesIcon, Icon$16 as PencilIcon, Icon$13 as PlayCircleOutlineIcon, Icon$14 as PocketWatchIcon, Icon$8 as PoolIcon, Icon$12 as PredictionsIcon, Icon$Y as PresentCheckIcon, Icon$W as PresentNoneIcon, Icon$X as PresentWonIcon, Icon$11 as PrizeIcon, ProfileAvatar, Progress, Icon$Z as ProgressBunny, Icon$10 as ProposalIcon, Radio, Icon$V as RedditIcon, Icon$U as RefreshIcon, Icon$$ as RemoveIcon, ResetCSS, Icon$S as ResourcesFilledIcon, Icon$T as ResourcesIcon, Icon$R as SafePalIcon, Icon$Q as SearchIcon, Icon$P as SellIcon, Icon$O as ShareIcon, Icon$1 as ShrinkIcon, Skeleton, Slider, Icon$N as SmallDotIcon, Spinner, Icon$M as StarFillIcon, Icon$L as StarLineIcon, Step, Stepper, SubMenu, SubMenuContainer, SubMenuItem, SubMenuItems, Icon$7 as SunIcon, Svg, Icon$J as SwapFillIcon, Icon$K as SwapIcon, Icon$I as SwapVertIcon, Icon$H as SyncAltIcon, Tab, ButtonMenu as TabMenu, Table, Tag, Td, Icon$6 as TeamBattleIcon, Icon$G as TeamPlayerIcon, Icon$F as TelegramIcon, Icon$E as TestnetIcon, Text, Textfield as TextField, Th, ThemeSwitcher$1 as ThemeSwitcher, Icon$D as Ticket, Icon$C as TicketFillIcon, Icon$D as TicketIcon, Icon$B as TicketRound, Timeline, Icon$A as TimerIcon, Toggle, TokenImage, TokenPairImage, Icon$z as TokenPocketIcon, TooltipText, Icon$y as TotalSupplyIcon, Icon$w as TradeFilledIcon, Icon$x as TradeIcon, Icon$3 as TrophyFillIcon, Icon$v as TrophyGoldIcon, Icon$4 as TrophyIcon, Icon$u as TrustWalletIcon, Icon$s as TuneIcon, Icon$t as TwitterIcon, UserMenu, UserMenuDivider, UserMenuItem, Icon$_ as VerifiedIcon, Icon$r as VisibilityOff, Icon$q as VisibilityOn, Icon$p as VolumeOffIcon, Icon$o as VolumeUpIcon, Icon$n as VoteIcon, Icon$i as WaitIcon, Icon$l as WalletConnectIcon, Icon$j as WalletFilledIcon, Icon$k as WalletIcon, Icon$m as WarningIcon, variants$5 as alertVariants, byTextAscending, byTextDescending, connectorLocalStorageKey, darkTheme as dark, darkColors, lightTheme as light, lightColors, makeRender, links as menuConfig, status as menuStatus, useKonamiCheatCode, useMatchBreakpoints, useModal, useParticleBurst, useTable, useTooltip, useWalletModal };
