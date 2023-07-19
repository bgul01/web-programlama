// profile.js

import axios from 'axios';

const state = {
  user: null,
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
};

const actions = {
  updateUser({ commit }, updatedUser) {
    return new Promise((resolve, reject) => {
      // Kullanıcının mevcut e-posta adresini al
      const currentUserEmail = state.user.email;

      // Güncellenen e-posta adresi veritabanında başka bir kullanıcı tarafından kullanılıyor mu kontrol et
      axios
        .get(`http://localhost:3000/users?email=${updatedUser.email}`)
        .then(response => {
          const usersWithSameEmail = response.data;

          // Eğer başka kullanıcılar aynı e-posta adresini kullanıyorsa, hata döndür
          if (usersWithSameEmail.length > 0 && updatedUser.email !== currentUserEmail) {
            const error = new Error('Bu e-posta adresi zaten kullanılıyor.');
            reject(error);
            return;
          }

          // Eğer başka kullanıcılar aynı e-posta adresini kullanmıyorsa, kullanıcıyı güncelle
          axios
            .put(`http://localhost:3000/users/${updatedUser.id}`, updatedUser)
            .then(response => {
              const user = response.data;
              commit('setUser', user);
              resolve(user);
            })
            .catch(error => {
              reject(error);
            });
        })
        .catch(error => {
          reject(error);
        });
    });
  },
};

const getters = {
  Profiluser: state => state.user,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
