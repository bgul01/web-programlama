<template>
  <NavbarVue />
  <div class="min-vh-100 d-flex flex-column">
    <div class="min-vh-100 d-flex flex-column flex-sm-row">
      <!-- Sidebar -->
      <aside class="bg-gray-200 col-12 col-sm-3">
        <div class="p-4">
          <h2 class="text-lg font-semibold mb-4">Menü</h2>
          <ul class="list-unstyled">
            <li>
              <button
                class="w-100 mb-2 text-start text-gray-800 py-2 px-4 rounded transition duration-300 hover:bg-gray-300"
                @click="changeMenu('profile')" :class="{ 'font-semibold': currentMenu === 'profile' }"
              >
                Profil Bilgileri
              </button>
            </li>
            <li>
              <button
                class="w-100 mb-2 text-start text-gray-800 py-2 px-4 rounded transition duration-300 hover:bg-gray-300"
                @click="changeMenu('settings')" :class="{ 'font-semibold': currentMenu === 'settings' }"
              >
                Ayarlar
              </button>
            </li>
            <li>
              <button
                class="w-100 mb-2 text-start text-gray-800 py-2 px-4 rounded transition duration-300 hover:bg-gray-300"
                @click="changeMenu('orders')" :class="{ 'font-semibold': currentMenu === 'orders' }"
              >
                Siparişler
              </button>
            </li>
          </ul>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-grow p-4">
        <h1 class="text-2xl font-bold mb-4">Ayarlar</h1>
        <div v-if="currentMenu === 'profile'">
          <div class="bg-white rounded-lg p-4 shadow">
            <h2 class="text-xl font-semibold">{{ user.name }}</h2>
            <p class="mt-2">{{ user.email }}</p>
          </div>
        </div>
        <div v-else-if="currentMenu === 'settings'">
          <h2 class="text-xl font-semibold">Ayarlar</h2>
          <div class="mb-4">
            <label for="name" class="form-label">Ad</label>
            <input type="text" id="name" v-model="newName" class="form-control" />
          </div>
          <div class="mb-4">
            <label for="email" class="form-label">Email</label>
            <input type="email" id="email" v-model="newEmail" class="form-control" />
          </div>
          <div class="mb-4">
            <label for="password" class="form-label">Şifre</label>
            <input type="password" id="password" v-model="newPassword" class="form-control" />
          </div>
          <button class="btn btn-primary" @click="updateSettings">Kaydet</button>
        </div>
        <div v-else-if="currentMenu === 'orders'">
          <h2 class="text-xl font-semibold">Siparişler</h2>
          <p>Bu siparişler sayfasıdır.</p>
        </div>
      </main>
    </div>

    <footer class="bg-gray-800 text-white py-4">
      <div class="container">
        <p class="text-center">© 2023 İngilizce-Türkçe Kelime Sitesi. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import NavbarVue from './Navbar.vue';

export default {
  components:{
    NavbarVue
  },
  computed: {
    ...mapGetters(['user']),
  },
  data() {
    return {
      currentMenu: 'profile',
      newName: '',
      newEmail: '',
      newPassword: '',
    };
  },
  methods: {
    ...mapActions(['updateUser']),
    changeMenu(menu) {
      this.currentMenu = menu;
    },
    updateSettings() {
      const updatedUser = {
        ...this.user,
        name: this.newName,
        email: this.newEmail,
        password: this.newPassword,
      };
      this.updateUser(updatedUser)
        .then(() => {
          alert('Ayarlar güncellendi.');
          this.newName = '';
          this.newEmail = '';
          this.newPassword = '';
        })
        .catch(error => {
          alert('Ayarlar güncellenirken bir hata oluştu: ' + error);
        });
    },
  },
};
</script>

<style>
/* Stil tanımlamalarını buraya ekleyebilirsiniz */
</style>
