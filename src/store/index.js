import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        songId: '',
        songName: ''
    },
    mutations: {
        playIdChange(state, newId) {
            state.songId = newId

        },
        playSongChange(state, songName) {
            state.songName = songName
        }
    },
    actions: {},
    modules: {}
})