import Vue from 'vue'
import Vuex from 'vuex'

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";
const LOGOUT = "LOGOUT";

const user = JSON.parse(localStorage.getItem("user")) || {};
// console.log("ls User", user);
const login = {
  state: {
    isAuthed: !!localStorage.getItem("token"),
    token: localStorage.getItem("token"),
    loginPending: null,
    loginError: null,
    user: {
      first_name: user.first_name,
      last_name: user.last_name,
      user_name: user.user_name,
      id: user.id,
      role: user.role
    },
    loginPending: null
  },
  mutations: {
    LOGIN(state){
      state.loginPending = true;
    },
    LOGIN_SUCCESS(state, user){
      state.isAuthed = true;
      state.loginPending = false;
      state.user.first_name = user.first_name;
      state.user.last_name = user.last_name;
      state.user.user_name = user.user_name;
      state.user.role = user.role;
      state.user.id = user.id;

      // console.log("User", user);
    },
    LOGIN_FAILURE(state, error){
      state.isAuthed = false;
      state.loginPending = false;
      state.loginError = error;
    },
    LOGOUT(state){
      state.isAuthed = false;
      state.user.first_name = "";
      state.user.last_name = "";
      state.user.user_name = "";
      state.user.role = [];
      state.user.id = "";
      state.token = ""
    }
  },
  actions: {
    login({commit}, credentials){
      commit(LOGIN);
      console.log("credentials", credentials.user_name)
      Vue.axios.post('authenticate/login', credentials)
      .then((response) => {
        localStorage.setItem("token", response.data.id);
        localStorage.setItem("user", JSON.stringify(response.data));
        commit(LOGIN_SUCCESS, response.data);
        window.location.href = "/"
        console.log("this",this)
      })
      .catch((error) => {
        console.log("this",this)

        if(error.response){
          commit(LOGIN_FAILURE, error.response)
        }
        console.log("Errors", error.response)
      })
    },
    logout({commit}){
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      commit(LOGOUT);
    }
  },
  getters: {
    isAuthed(state){
      return state.isAuthed
    },
    userToken(state){
      return state.token
    },
    loginErrors(state){
      return state.loginError
    },
    user(state){
      return state.user
    }
  }
};

export default login;