const state = () => ({
    highlights: [],
})


const actions = {
    addHighlight({ commit }, highlight_data) {
        console.log('RezensionsId: + '+ highlight_data.id + '[' + highlight_data.text + ']')
        commit('pushhighlight', highlight_data)
    }
}


const mutations = {
    pushhighlight(state, highlight_data) {

        state.highlights.push(highlight_data);

        console.log("Mutation");
        console.log(state.highlights);
    },


}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}