"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/p-is-promise";
exports.ids = ["vendor-chunks/p-is-promise"];
exports.modules = {

/***/ "(ssr)/./node_modules/p-is-promise/index.js":
/*!********************************************!*\
  !*** ./node_modules/p-is-promise/index.js ***!
  \********************************************/
/***/ ((module) => {

eval("\n\nconst isObject = value => value !== null &&\n\t(typeof value === 'object' || typeof value === 'function');\n\nmodule.exports = value => (\n\tvalue instanceof Promise ||\n\t(\n\t\tisObject(value) &&\n\t\ttypeof value.then === 'function' &&\n\t\ttypeof value.catch === 'function'\n\t)\n);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcC1pcy1wcm9taXNlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3BpbmdfYXBwLy4vbm9kZV9tb2R1bGVzL3AtaXMtcHJvbWlzZS9pbmRleC5qcz9kODA3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgaXNPYmplY3QgPSB2YWx1ZSA9PiB2YWx1ZSAhPT0gbnVsbCAmJlxuXHQodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZhbHVlID0+IChcblx0dmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlIHx8XG5cdChcblx0XHRpc09iamVjdCh2YWx1ZSkgJiZcblx0XHR0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdHR5cGVvZiB2YWx1ZS5jYXRjaCA9PT0gJ2Z1bmN0aW9uJ1xuXHQpXG4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/p-is-promise/index.js\n");

/***/ })

};
;