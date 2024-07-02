import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

  // \\\\\\\\\\\\\\\ state
  state: {
    user: null,
  },   
  
  // \\\\\\\\\\\ mutations
  mutations: {
    SET_USER_DATA (state, userData) {
        state.user = userData
        localStorage.setItem('user', JSON.stringify(userData))
        axios.defaults.headers.common['Authorization'] = `Bearer ${
          userData.token
        }`
    },
    CLEAR_USER_DATA(state) {
      state.user = null
      // console.log(state.user, 'state info')
      localStorage.removeItem('user')
      // console.log(localStorage.getItem('user'))
      // console.log('local storage')
      location.reload()
      // axios.defaults.headers.common['Authorization'] = null

    }

  },

  // \\\\\\\\\\\\\ actions
  actions: {
    register ({ commit }, credentials) {
      return axios.post('//localhost:3000/register', credentials).then(
        ({ data }) => {
          commit('SET_USER_DATA ', data)
          console.log('user data is:', data)
        }
      )
    },
    login ({commit}, credentials) {
      return axios.post('//localhost:3000/login', credentials).then(
        ({data}) => {
          commit('SET_USER_DATA', data )
          console.log('user data', data)        
        }
      )
    },
    logout({commit}){
      commit('CLEAR_USER_DATA')
    }
  },

// \\\\\\\\\\\\\\  getters
  getters: {
    loggedIn (state) {  
      return !!state.user
    }
  }
})