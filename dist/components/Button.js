"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styles = {
    backgroundColor: "#FFFFFF",
    border: "1px solid #eee",
    borderRadius: 3,
    cursor: "pointer",
    fontSize: 15,
    margin: 10,
    padding: "3px 10px"
};
var Button = function (props) { return (React.createElement("button", { onClick: props.onClick, style: styles, type: "button" }, props.children)); };
Button.defaultProps = {
    children: null,
    // tslint:disable-next-line: no-empty
    onClick: function () { }
};
exports.default = Button;
//# sourceMappingURL=Button.js.map