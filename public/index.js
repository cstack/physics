/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./compiled/bouncing-balls.js":
/*!************************************!*\
  !*** ./compiled/bouncing-balls.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Simulation = __importStar(__webpack_require__(/*! ./simulation */ \"./compiled/simulation.js\"));\nvar Render = __importStar(__webpack_require__(/*! ./render */ \"./compiled/render.js\"));\nvar BouncingBalls = /** @class */ (function (_super) {\n    __extends(BouncingBalls, _super);\n    function BouncingBalls() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    BouncingBalls.prototype.initialState = function () {\n        return {\n            entities: [\n                new Simulation.Entity(0, 10, 500, 0, 10),\n                new Simulation.Entity(100, 0, -1000, 0, 20),\n            ]\n        };\n    };\n    BouncingBalls.prototype.simulate = function (dt, state) {\n        state.entities.forEach(function (entity) {\n            // gravity\n            entity.vy += 3000 * dt;\n            // drag\n            entity.vy *= (1 - 0.1 * dt);\n            entity.vx *= (1 - 0.1 * dt);\n            // update position\n            entity.x += entity.vx * dt;\n            entity.y += entity.vy * dt;\n            // bounce off walls\n            if (entity.y > 500) {\n                entity.y = 500;\n                entity.vy *= -0.90;\n            }\n            if (entity.x > 500) {\n                entity.x = 500;\n                entity.vx *= -0.90;\n            }\n            if (entity.x < 0) {\n                entity.x = 0;\n                entity.vx *= -0.90;\n            }\n            // bounce off each other\n            state.entities.forEach(function (other) {\n                if (entity === other) {\n                    return;\n                }\n                var d = Simulation.distance(entity, other);\n                var minD = entity.radius + other.radius;\n                if (d < minD) {\n                    var towardOther = Simulation.direction(entity, other);\n                    var displacement = minD - d;\n                    var displacementPerEntity = displacement / 2;\n                    entity.x -= towardOther.x * displacementPerEntity;\n                    entity.y -= towardOther.y * displacementPerEntity;\n                    other.x += towardOther.x * displacementPerEntity;\n                    other.y += towardOther.y * displacementPerEntity;\n                    var tmpVx = entity.vx;\n                    var tmpVy = entity.vy;\n                    entity.vx = other.vx;\n                    entity.vy = other.vy;\n                    other.vx = tmpVx;\n                    other.vy = tmpVy;\n                }\n                // state.paused = true;\n            });\n        });\n    };\n    BouncingBalls.prototype.renderFrame = function (ctx, state) {\n        ctx.fillStyle = \"rgb(200, 200, 200)\";\n        ctx.fillRect(0, 0, 500, 500);\n        var color = { r: 0.9, g: 0.1, b: 0.1 };\n        state.entities.forEach(function (entity) {\n            state.entities.forEach(function (other) {\n                if (entity !== other && Simulation.overlapping(entity, other)) {\n                    color = { r: 0.9, g: 0.9, b: 0.1 };\n                }\n            });\n            Render.circle(ctx, { x: entity.x, y: entity.y, radius: entity.radius, color: color });\n        });\n        for (var i = 0; i < state.entities.length; i++) {\n            for (var j = i + 1; j < state.entities.length; j++) {\n                var e1 = state.entities[i];\n                var e2 = state.entities[j];\n                var normalVector = Simulation.direction(e1, e2);\n                var line = Simulation.scale(normalVector, 10);\n                Render.line(ctx, e1.x, e1.y, e1.x + line.x, e1.y + line.y);\n            }\n        }\n    };\n    return BouncingBalls;\n}(Simulation.Base));\nexports.default = BouncingBalls;\n//# sourceMappingURL=bouncing-balls.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21waWxlZC9ib3VuY2luZy1iYWxscy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBpbGVkL2JvdW5jaW5nLWJhbGxzLmpzPzNjNDciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTaW11bGF0aW9uID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3NpbXVsYXRpb25cIikpO1xudmFyIFJlbmRlciA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9yZW5kZXJcIikpO1xudmFyIEJvdW5jaW5nQmFsbHMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJvdW5jaW5nQmFsbHMsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQm91bmNpbmdCYWxscygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBCb3VuY2luZ0JhbGxzLnByb3RvdHlwZS5pbml0aWFsU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbnRpdGllczogW1xuICAgICAgICAgICAgICAgIG5ldyBTaW11bGF0aW9uLkVudGl0eSgwLCAxMCwgNTAwLCAwLCAxMCksXG4gICAgICAgICAgICAgICAgbmV3IFNpbXVsYXRpb24uRW50aXR5KDEwMCwgMCwgLTEwMDAsIDAsIDIwKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIEJvdW5jaW5nQmFsbHMucHJvdG90eXBlLnNpbXVsYXRlID0gZnVuY3Rpb24gKGR0LCBzdGF0ZSkge1xuICAgICAgICBzdGF0ZS5lbnRpdGllcy5mb3JFYWNoKGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgICAgICAgICAgIC8vIGdyYXZpdHlcbiAgICAgICAgICAgIGVudGl0eS52eSArPSAzMDAwICogZHQ7XG4gICAgICAgICAgICAvLyBkcmFnXG4gICAgICAgICAgICBlbnRpdHkudnkgKj0gKDEgLSAwLjEgKiBkdCk7XG4gICAgICAgICAgICBlbnRpdHkudnggKj0gKDEgLSAwLjEgKiBkdCk7XG4gICAgICAgICAgICAvLyB1cGRhdGUgcG9zaXRpb25cbiAgICAgICAgICAgIGVudGl0eS54ICs9IGVudGl0eS52eCAqIGR0O1xuICAgICAgICAgICAgZW50aXR5LnkgKz0gZW50aXR5LnZ5ICogZHQ7XG4gICAgICAgICAgICAvLyBib3VuY2Ugb2ZmIHdhbGxzXG4gICAgICAgICAgICBpZiAoZW50aXR5LnkgPiA1MDApIHtcbiAgICAgICAgICAgICAgICBlbnRpdHkueSA9IDUwMDtcbiAgICAgICAgICAgICAgICBlbnRpdHkudnkgKj0gLTAuOTA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZW50aXR5LnggPiA1MDApIHtcbiAgICAgICAgICAgICAgICBlbnRpdHkueCA9IDUwMDtcbiAgICAgICAgICAgICAgICBlbnRpdHkudnggKj0gLTAuOTA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZW50aXR5LnggPCAwKSB7XG4gICAgICAgICAgICAgICAgZW50aXR5LnggPSAwO1xuICAgICAgICAgICAgICAgIGVudGl0eS52eCAqPSAtMC45MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGJvdW5jZSBvZmYgZWFjaCBvdGhlclxuICAgICAgICAgICAgc3RhdGUuZW50aXRpZXMuZm9yRWFjaChmdW5jdGlvbiAob3RoZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5ID09PSBvdGhlcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBkID0gU2ltdWxhdGlvbi5kaXN0YW5jZShlbnRpdHksIG90aGVyKTtcbiAgICAgICAgICAgICAgICB2YXIgbWluRCA9IGVudGl0eS5yYWRpdXMgKyBvdGhlci5yYWRpdXM7XG4gICAgICAgICAgICAgICAgaWYgKGQgPCBtaW5EKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b3dhcmRPdGhlciA9IFNpbXVsYXRpb24uZGlyZWN0aW9uKGVudGl0eSwgb3RoZXIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGlzcGxhY2VtZW50ID0gbWluRCAtIGQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXNwbGFjZW1lbnRQZXJFbnRpdHkgPSBkaXNwbGFjZW1lbnQgLyAyO1xuICAgICAgICAgICAgICAgICAgICBlbnRpdHkueCAtPSB0b3dhcmRPdGhlci54ICogZGlzcGxhY2VtZW50UGVyRW50aXR5O1xuICAgICAgICAgICAgICAgICAgICBlbnRpdHkueSAtPSB0b3dhcmRPdGhlci55ICogZGlzcGxhY2VtZW50UGVyRW50aXR5O1xuICAgICAgICAgICAgICAgICAgICBvdGhlci54ICs9IHRvd2FyZE90aGVyLnggKiBkaXNwbGFjZW1lbnRQZXJFbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgIG90aGVyLnkgKz0gdG93YXJkT3RoZXIueSAqIGRpc3BsYWNlbWVudFBlckVudGl0eTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRtcFZ4ID0gZW50aXR5LnZ4O1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG1wVnkgPSBlbnRpdHkudnk7XG4gICAgICAgICAgICAgICAgICAgIGVudGl0eS52eCA9IG90aGVyLnZ4O1xuICAgICAgICAgICAgICAgICAgICBlbnRpdHkudnkgPSBvdGhlci52eTtcbiAgICAgICAgICAgICAgICAgICAgb3RoZXIudnggPSB0bXBWeDtcbiAgICAgICAgICAgICAgICAgICAgb3RoZXIudnkgPSB0bXBWeTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gc3RhdGUucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEJvdW5jaW5nQmFsbHMucHJvdG90eXBlLnJlbmRlckZyYW1lID0gZnVuY3Rpb24gKGN0eCwgc3RhdGUpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiKDIwMCwgMjAwLCAyMDApXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCA1MDAsIDUwMCk7XG4gICAgICAgIHZhciBjb2xvciA9IHsgcjogMC45LCBnOiAwLjEsIGI6IDAuMSB9O1xuICAgICAgICBzdGF0ZS5lbnRpdGllcy5mb3JFYWNoKGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgICAgICAgICAgIHN0YXRlLmVudGl0aWVzLmZvckVhY2goZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVudGl0eSAhPT0gb3RoZXIgJiYgU2ltdWxhdGlvbi5vdmVybGFwcGluZyhlbnRpdHksIG90aGVyKSkge1xuICAgICAgICAgICAgICAgICAgICBjb2xvciA9IHsgcjogMC45LCBnOiAwLjksIGI6IDAuMSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgUmVuZGVyLmNpcmNsZShjdHgsIHsgeDogZW50aXR5LngsIHk6IGVudGl0eS55LCByYWRpdXM6IGVudGl0eS5yYWRpdXMsIGNvbG9yOiBjb2xvciB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhdGUuZW50aXRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSBpICsgMTsgaiA8IHN0YXRlLmVudGl0aWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUxID0gc3RhdGUuZW50aXRpZXNbaV07XG4gICAgICAgICAgICAgICAgdmFyIGUyID0gc3RhdGUuZW50aXRpZXNbal07XG4gICAgICAgICAgICAgICAgdmFyIG5vcm1hbFZlY3RvciA9IFNpbXVsYXRpb24uZGlyZWN0aW9uKGUxLCBlMik7XG4gICAgICAgICAgICAgICAgdmFyIGxpbmUgPSBTaW11bGF0aW9uLnNjYWxlKG5vcm1hbFZlY3RvciwgMTApO1xuICAgICAgICAgICAgICAgIFJlbmRlci5saW5lKGN0eCwgZTEueCwgZTEueSwgZTEueCArIGxpbmUueCwgZTEueSArIGxpbmUueSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBCb3VuY2luZ0JhbGxzO1xufShTaW11bGF0aW9uLkJhc2UpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEJvdW5jaW5nQmFsbHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ib3VuY2luZy1iYWxscy5qcy5tYXAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./compiled/bouncing-balls.js\n");

/***/ }),

/***/ "./compiled/index.js":
/*!***************************!*\
  !*** ./compiled/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Simulation = __importStar(__webpack_require__(/*! ./simulation */ \"./compiled/simulation.js\"));\nvar bouncing_balls_1 = __importDefault(__webpack_require__(/*! ./bouncing-balls */ \"./compiled/bouncing-balls.js\"));\nvar ctx;\nvar simulation;\nfunction init() {\n    var canvas = document.getElementById('canvas');\n    if (!canvas) {\n        console.error(\"Could not find an element with id 'canvas'\");\n        return;\n    }\n    canvas.width = 500;\n    canvas.height = 500;\n    var c = canvas.getContext('2d');\n    if (!c) {\n        console.error(\"Failed to get 2d context from canvas element\");\n        return;\n    }\n    ctx = c;\n    simulation = new bouncing_balls_1.default();\n    mainLoop(0);\n}\nfunction mainLoop(timestamp) {\n    if (timestamp > 10000 || simulation.paused) {\n        return;\n    }\n    else {\n        requestAnimationFrame(mainLoop);\n    }\n    if (!timestamp) {\n        return;\n    }\n    var dt = (timestamp - simulation.lastRender) / 1000;\n    simulation.lastRender = timestamp;\n    simulation.t = timestamp;\n    simulation.simulate(dt * Simulation.SIMULATION_SPEED, simulation.state);\n    simulation.renderFrame(ctx, simulation.state);\n}\nwindow.onload = init;\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21waWxlZC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBpbGVkL2luZGV4LmpzPzVhOTQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU2ltdWxhdGlvbiA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9zaW11bGF0aW9uXCIpKTtcbnZhciBib3VuY2luZ19iYWxsc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2JvdW5jaW5nLWJhbGxzXCIpKTtcbnZhciBjdHg7XG52YXIgc2ltdWxhdGlvbjtcbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICBpZiAoIWNhbnZhcykge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQ291bGQgbm90IGZpbmQgYW4gZWxlbWVudCB3aXRoIGlkICdjYW52YXMnXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNhbnZhcy53aWR0aCA9IDUwMDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNTAwO1xuICAgIHZhciBjID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgaWYgKCFjKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZ2V0IDJkIGNvbnRleHQgZnJvbSBjYW52YXMgZWxlbWVudFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjdHggPSBjO1xuICAgIHNpbXVsYXRpb24gPSBuZXcgYm91bmNpbmdfYmFsbHNfMS5kZWZhdWx0KCk7XG4gICAgbWFpbkxvb3AoMCk7XG59XG5mdW5jdGlvbiBtYWluTG9vcCh0aW1lc3RhbXApIHtcbiAgICBpZiAodGltZXN0YW1wID4gMTAwMDAgfHwgc2ltdWxhdGlvbi5wYXVzZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1haW5Mb29wKTtcbiAgICB9XG4gICAgaWYgKCF0aW1lc3RhbXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZHQgPSAodGltZXN0YW1wIC0gc2ltdWxhdGlvbi5sYXN0UmVuZGVyKSAvIDEwMDA7XG4gICAgc2ltdWxhdGlvbi5sYXN0UmVuZGVyID0gdGltZXN0YW1wO1xuICAgIHNpbXVsYXRpb24udCA9IHRpbWVzdGFtcDtcbiAgICBzaW11bGF0aW9uLnNpbXVsYXRlKGR0ICogU2ltdWxhdGlvbi5TSU1VTEFUSU9OX1NQRUVELCBzaW11bGF0aW9uLnN0YXRlKTtcbiAgICBzaW11bGF0aW9uLnJlbmRlckZyYW1lKGN0eCwgc2ltdWxhdGlvbi5zdGF0ZSk7XG59XG53aW5kb3cub25sb2FkID0gaW5pdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./compiled/index.js\n");

/***/ }),

/***/ "./compiled/render.js":
/*!****************************!*\
  !*** ./compiled/render.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction circle(ctx, params) {\n    ctx.beginPath();\n    ctx.fillStyle = \"rgb(\" + params.color.r * 255 + \", \" + params.color.g * 255 + \", \" + params.color.b * 255 + \")\";\n    ctx.arc(params.x, params.y, params.radius, 0, Math.PI * 2, true);\n    ctx.fill();\n}\nexports.circle = circle;\nfunction line(ctx, x1, y1, x2, y2) {\n    ctx.fillStyle = 'black';\n    ctx.beginPath();\n    ctx.moveTo(x1, y1);\n    ctx.lineTo(x2, y2);\n    ctx.stroke();\n}\nexports.line = line;\n//# sourceMappingURL=render.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21waWxlZC9yZW5kZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21waWxlZC9yZW5kZXIuanM/NDhhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGNpcmNsZShjdHgsIHBhcmFtcykge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2IoXCIgKyBwYXJhbXMuY29sb3IuciAqIDI1NSArIFwiLCBcIiArIHBhcmFtcy5jb2xvci5nICogMjU1ICsgXCIsIFwiICsgcGFyYW1zLmNvbG9yLmIgKiAyNTUgKyBcIilcIjtcbiAgICBjdHguYXJjKHBhcmFtcy54LCBwYXJhbXMueSwgcGFyYW1zLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgIGN0eC5maWxsKCk7XG59XG5leHBvcnRzLmNpcmNsZSA9IGNpcmNsZTtcbmZ1bmN0aW9uIGxpbmUoY3R4LCB4MSwgeTEsIHgyLCB5Mikge1xuICAgIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgxLCB5MSk7XG4gICAgY3R4LmxpbmVUbyh4MiwgeTIpO1xuICAgIGN0eC5zdHJva2UoKTtcbn1cbmV4cG9ydHMubGluZSA9IGxpbmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZW5kZXIuanMubWFwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./compiled/render.js\n");

/***/ }),

/***/ "./compiled/simulation.js":
/*!********************************!*\
  !*** ./compiled/simulation.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SIMULATION_SPEED = 1;\nvar Base = /** @class */ (function () {\n    function Base() {\n        this.lastRender = 0;\n        this.t = 0;\n        this.paused = false;\n        this.state = this.initialState();\n    }\n    return Base;\n}());\nexports.Base = Base;\n;\nvar Entity = /** @class */ (function () {\n    function Entity(x, y, vx, vy, radius) {\n        this.x = x;\n        this.y = y;\n        this.vx = vx;\n        this.vy = vy;\n        this.radius = radius;\n    }\n    return Entity;\n}());\nexports.Entity = Entity;\nfunction distance(entity1, entity2) {\n    return Math.sqrt(Math.pow((entity1.x - entity2.x), 2) + Math.pow((entity1.y - entity2.y), 2));\n}\nexports.distance = distance;\nfunction direction(from, to) {\n    var dx = to.x - from.x;\n    var dy = to.y - from.y;\n    var d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));\n    return { x: dx / d, y: dy / d };\n}\nexports.direction = direction;\nfunction overlapping(entity1, entity2) {\n    var d = distance(entity1, entity2);\n    return d < (entity1.radius + entity2.radius);\n}\nexports.overlapping = overlapping;\nfunction scale(vector, scale) {\n    return { x: vector.x * scale, y: vector.y * scale };\n}\nexports.scale = scale;\n//# sourceMappingURL=simulation.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21waWxlZC9zaW11bGF0aW9uLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcGlsZWQvc2ltdWxhdGlvbi5qcz81ZDFmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TSU1VTEFUSU9OX1NQRUVEID0gMTtcbnZhciBCYXNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJhc2UoKSB7XG4gICAgICAgIHRoaXMubGFzdFJlbmRlciA9IDA7XG4gICAgICAgIHRoaXMudCA9IDA7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmluaXRpYWxTdGF0ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gQmFzZTtcbn0oKSk7XG5leHBvcnRzLkJhc2UgPSBCYXNlO1xuO1xudmFyIEVudGl0eSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFbnRpdHkoeCwgeSwgdngsIHZ5LCByYWRpdXMpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy52eCA9IHZ4O1xuICAgICAgICB0aGlzLnZ5ID0gdnk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgIH1cbiAgICByZXR1cm4gRW50aXR5O1xufSgpKTtcbmV4cG9ydHMuRW50aXR5ID0gRW50aXR5O1xuZnVuY3Rpb24gZGlzdGFuY2UoZW50aXR5MSwgZW50aXR5Mikge1xuICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coKGVudGl0eTEueCAtIGVudGl0eTIueCksIDIpICsgTWF0aC5wb3coKGVudGl0eTEueSAtIGVudGl0eTIueSksIDIpKTtcbn1cbmV4cG9ydHMuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbmZ1bmN0aW9uIGRpcmVjdGlvbihmcm9tLCB0bykge1xuICAgIHZhciBkeCA9IHRvLnggLSBmcm9tLng7XG4gICAgdmFyIGR5ID0gdG8ueSAtIGZyb20ueTtcbiAgICB2YXIgZCA9IE1hdGguc3FydChNYXRoLnBvdyhkeCwgMikgKyBNYXRoLnBvdyhkeSwgMikpO1xuICAgIHJldHVybiB7IHg6IGR4IC8gZCwgeTogZHkgLyBkIH07XG59XG5leHBvcnRzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbmZ1bmN0aW9uIG92ZXJsYXBwaW5nKGVudGl0eTEsIGVudGl0eTIpIHtcbiAgICB2YXIgZCA9IGRpc3RhbmNlKGVudGl0eTEsIGVudGl0eTIpO1xuICAgIHJldHVybiBkIDwgKGVudGl0eTEucmFkaXVzICsgZW50aXR5Mi5yYWRpdXMpO1xufVxuZXhwb3J0cy5vdmVybGFwcGluZyA9IG92ZXJsYXBwaW5nO1xuZnVuY3Rpb24gc2NhbGUodmVjdG9yLCBzY2FsZSkge1xuICAgIHJldHVybiB7IHg6IHZlY3Rvci54ICogc2NhbGUsIHk6IHZlY3Rvci55ICogc2NhbGUgfTtcbn1cbmV4cG9ydHMuc2NhbGUgPSBzY2FsZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpbXVsYXRpb24uanMubWFwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./compiled/simulation.js\n");

/***/ }),

/***/ 0:
/*!************************************************************************************************************!*\
  !*** multi ./compiled/bouncing-balls.js ./compiled/index.js ./compiled/render.js ./compiled/simulation.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/cstack/Development/physics/compiled/bouncing-balls.js */"./compiled/bouncing-balls.js");
__webpack_require__(/*! /Users/cstack/Development/physics/compiled/index.js */"./compiled/index.js");
__webpack_require__(/*! /Users/cstack/Development/physics/compiled/render.js */"./compiled/render.js");
module.exports = __webpack_require__(/*! /Users/cstack/Development/physics/compiled/simulation.js */"./compiled/simulation.js");


/***/ })

/******/ });
