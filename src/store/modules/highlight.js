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
        console.log(highlight_data);

        var idExist = false;
        var stateLength = state.highlights.length;        
        
        if (stateLength == 0) {
            state.highlights.push(highlight_data);
        } else {
            for (var i = 0; i <= stateLength - 1; i++) {
                if (state.highlights[i].id == highlight_data.id) {
                    state.highlights.splice(i, 1);
                    state.highlights.push(highlight_data);
                    idExist = true;
                }           
            }
            if (idExist == false) {
                state.highlights.push(highlight_data);
            }
        }
        
        console.log(state.highlights);
        /*
        state.highlights.push(highlight_data);

        console.log("Mutation");
        console.log(state.highlights);
        */
    },


}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}