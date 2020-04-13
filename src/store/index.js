import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        songId: '',
        count: 0
    },
    mutations: {
        playIdChange(state, newId) {
            state.songId = newId
                // console.log(state.songId, "sss");

        },

        addtb(state) {
            state.count += 1
        }
    },
    actions: {
        add(context) {
            setTimeout(function() {
                context.commit('addtb')
            }, 1000)
        },
    },
    modules: {}
})