'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Grid = require('./Grid');

var GridModules = _interopRequireWildcard(_Grid);

var _redux = require('redux');

var _reduxModuleBuilder = require('redux-module-builder');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var modules = {
    grid: _extends({}, GridModules)
};

var initialActions = {};

var initialState = {};

var bundled = (0, _reduxModuleBuilder.createRootReducer)(modules, {
    initialInitialState: initialState,
    initialActions: initialActions,
    initialReducers: {}
});

exports.default = function () {
    return {
        reducers: (0, _redux.combineReducers)(bundled.reducers),
        actions: bundled.actions,
        initialState: bundled.initialState
    };
};
//# sourceMappingURL=index.js.map