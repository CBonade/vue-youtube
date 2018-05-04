import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        videos: [],
        selectedVideo: videos[0]
    },
    getters: {

    },
    mutations: {
        setState: (state, payload) => {
            state.videos = payload
        }
    },
    actions: {
        setState: (context, payload) => {
            context.commit('setState', payload);
        }
    }
})