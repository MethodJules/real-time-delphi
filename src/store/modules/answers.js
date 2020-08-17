const state = () => ({
    answers: [],
})


const actions = {
    addAnswer({ commit }, answer) {
        commit('ADD_ANSWER', answer)
    }
}


const mutations = {
    ADD_ANSWER(state, answer) {
        state.answers.push(answer);
    },


}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}