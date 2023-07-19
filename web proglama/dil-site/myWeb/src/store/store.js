import { createStore } from 'vuex';
import axios from 'axios';
import profileModule from './Profile'


const store = createStore({


  modules: {
    profile: profileModule
  },


  state() {

    return {
      user: null,
      isLoggedIn: false,
      error: null,
      users: [],

    };
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
      state.isLoggedIn = true;
    },
    setError(state, error) {
      state.error = error;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setLoggedIn(state, value) {
      state.isLoggedIn = value;
    }
  },
  actions: {
    async login({ commit, state }, credentials) {
      try {
        const response = await axios.get('http://localhost:3000/users', {
          params: {
            email: credentials.email,
            password: credentials.password
          }
        });

        if (response && response.data && response.data.length > 0) {
          const user = response.data[0];
          commit('setUser', user);
          commit('setError', null); // Hata mesajını sıfırla
          commit('setLoggedIn', true); // Oturum açıldı olarak işaretle
          return user;
        } else {
          const error = 'Giriş bilgileri geçersiz';
          commit('setError', error);
          throw error;
        }
      } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
          commit('setError', error.response.data.error);
          throw error.response.data.error;
        } else {
          commit('setError', 'Giriş bilgileri geçersiz');
          throw 'Giriş bilgileri geçersiz';
        }
      }
    },
    signup({ commit, state }, newUser) {
      return new Promise((resolve, reject) => {
        // Kullanıcıların listesini alın
        axios
          .get('http://localhost:3000/users')
          .then(response => {
            const users = response.data;

            // Yeni kullanıcının e-posta adresini kontrol edin
            const isEmailExists = users.some(user => user.email === newUser.email);
            if (isEmailExists) {
              commit('setError', 'Bu e-posta adresi zaten kayıtlı.');
              reject('Bu e-posta adresi zaten kayıtlı.');
              return;
            }

            // Yeni kullanıcıyı ekleyin
            axios
              .post('http://localhost:3000/users', newUser)
              .then(response => {
                const user = response.data.user;
                commit('setUser', user);
                commit('setError', null); // Hata mesajını sıfırla
                commit('setUsers', [...state.users, user]); // Kullanıcı listesini güncelle
                commit('setLoggedIn', true);
                resolve(user);
              })
              .catch(error => {
                commit('setError', error.response.data.error);
                reject(error.response.data.error);
              });
          })
          .catch(error => {
            commit('setError', 'Kullanıcılar alınırken bir hata oluştu.');
            reject('Kullanıcılar alınırken bir hata oluştu.');
          });
      });
    },
    logout({ commit }) {
      commit('setUser', null);
      commit('setError', null);
      commit('setLoggedIn', false);
    }
  },
  getters: {

    isLoggedIn: state => state.isLoggedIn,
    user: state => state.user,
    error: state => state.error,
    users: state => state.users
  }
});

export default store;
