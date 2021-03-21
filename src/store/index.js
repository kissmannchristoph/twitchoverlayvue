import Vue from 'vue'
import Vuex from 'vuex'

import manipulator from "./scripts.js/overlay.js";

Vue.use(Vuex)

export
default new Vuex.Store({
        state: {
            selectedWidget: null,
            visibleWigets: [],
            manipulator: null
        },
        mutations: {
            SET_SELECTED_WIDGET(state, widget) {
                state.selectedWidget = widget
            },
            SET_VISIBLE_WIDGETS(state, widgets) {
                Vue.set(state, 'visibleWidgets', widgets)
            },
            SET_MANIPUATOR(state, manipulator) {
                state.manipulator = manipulator
            }
        },
        actions: {
            setSelectedWidget({
                commit
            }, widget) {
                commit('SET_SELECTED_WIDGET', widget)
            },
            setVisibleWidgets({
                commit
            }, widgets) {
                commit('SET_VISIBLE_WIDGETS' , widgets)
            },
            setupManipulator({commit}) {
                commit('SET_MANIPUATOR', new manipulator)
            }
        },
        getters: {
            selectedWiget: state => {
                return state.selectedWidge
            },
            visibleWigets: state => {
                return state.visibleWigets
            },
            manipulator: state => {
                return state.manipulator
            }
        }})