import { createStore } from 'vuex'

export default createStore({
  state: {
    galleryList: [],
    isActive: false
  },

  getters: {
    isActive (state) {
      return state.isActive
    },

    galleryList (state) {
      return state.galleryList
    }
  },

  mutations: {
    setModal (state, images) {
      state.isActive = !state.isActive
      state.galleryList = images
    }
  },

  actions: {
    toggleModal ({commit}, images) {
      commit('setModal', images)
    }
  },

  modules: {
  }
  
})
