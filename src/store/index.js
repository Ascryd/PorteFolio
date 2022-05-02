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
      // console.log(state.galleryList);
      return state.galleryList
    }
  },

  mutations: {
    setModal (state, images) {
      state.isActive = !state.isActive
      state.galleryList = images
      // console.log(state.isActive);
      console.log(state.galleryList);
      // console.log(images[0]);
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
