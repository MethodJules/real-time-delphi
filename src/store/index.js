import Vue from 'vue'
import Vuex from 'vuex'
import highlight from './modules/highlight'

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        highlight
    }
})

