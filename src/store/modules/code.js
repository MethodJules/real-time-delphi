const state = () => ({
    code: ''
})

const actions = {
    saveCode({commit}, code) {
        commit('SAVE_CODE', code)
    }
}

const mutations = {
    SAVE_CODE(state, code) {
        console.log('Saving the code: ' + code)
        state.code = code;
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}