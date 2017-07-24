import * as GridModules from './Grid'
import {combineReducers} from 'redux'
import {createRootReducer as processModules} from 'redux-module-builder'

const modules = {
	grid: {...GridModules}
}


const initialActions = {
}

const initialState = {}

const bundled = processModules(modules, {
    initialInitialState: initialState,
    initialActions,
    initialReducers: {}
})

export default () => {
    return {
        reducers: combineReducers(bundled.reducers),
        actions: bundled.actions,
        initialState: bundled.initialState
    }
}