"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./Days.css");
function Days(props) {
    return (React.createElement("div", { className: "weatherBox" },
        React.createElement("h3", null, props.dayName),
        React.createElement("p", null, props.date),
        React.createElement("img", null),
        React.createElement("h1", null, props.temp),
        React.createElement("p", null, "Clear sky")));
}
exports.default = Days;
//# sourceMappingURL=Days.js.map