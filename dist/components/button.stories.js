"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@storybook/react");
var React = __importStar(require("react"));
var Button_1 = __importDefault(require("./Button"));
react_1.storiesOf("Button", module)
    .add("with text", function () { return React.createElement(Button_1.default, null, "Hello Button"); })
    .add("with text", function () { return React.createElement(Button_1.default, null, "emoji "); });
//# sourceMappingURL=button.stories.js.map