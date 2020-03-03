"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// https://blog.crowdbotics.com/setup-a-react-app-with-typescript-storybook-and-crowdbotics/
var path = require("path");
var react_1 = require("react");
var react_2 = __importDefault(require("react"));
require("./App.css");
var logoFileImage = path.resolve(__dirname, "../images/logo.svg");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (react_2.default.createElement("div", { className: "App" },
            react_2.default.createElement("header", { className: "App-header" },
                react_2.default.createElement("img", { src: logoFileImage, className: "App-logo", alt: "logo" }),
                react_2.default.createElement("h1", { className: "App-title" }, "Welcome to React")),
            react_2.default.createElement("p", { className: "App-intro" },
                "To get started, edit ",
                react_2.default.createElement("code", null, "./src/App.tsx"),
                " and save to reload.")));
    };
    return App;
}(react_1.Component));
exports.default = App;
//# sourceMappingURL=App.js.map