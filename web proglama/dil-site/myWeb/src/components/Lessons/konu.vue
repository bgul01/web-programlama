<template>
  <Navbar />

  <!-- Main Content -->
  <main class="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-4">
    <!-- Konu Başlıkları (Sidebar) -->
    <div class="bg-white rounded-lg shadow-md p-4">
      <h2 class="text-xl font-semibold mb-4">Konu Başlıkları</h2>
      <ul>
        <li v-for="(konu, index) in konular" :key="index">
          <button @click="toggleAltBasliklar(index)" :class="{ 'bg-yellow-300': seciliKonu === konu }"
            class="flex items-center justify-between w-full text-black font-bold hover:underline hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <span>{{ konu.baslik }}</span>
            <span v-if="seciliKonu === konu" class="text-yellow-500">⚡</span>
          </button>
          <ul v-if="seciliKonu === konu" class="ml-4 mt-2">
            <li v-for="(altBaslik, altIndex) in konu.altBasliklar" :key="altIndex">
              <button @click="seciliAltBaslik = altBaslik" :class="{ 'font-bold': seciliAltBaslik === altBaslik }"
                class=" hover:underline w-full text-left">{{ altBaslik }}</button>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- Konu Detayı -->
    <div class="bg-white rounded-lg shadow-md p-4 md:col-span-2">
      <h2 class="text-xl font-semibold mb-4">Konu Detayı</h2>
      <div v-if="seciliAltBaslik">
        <h3 class="text-lg font-semibold">{{ seciliAltBaslik }}</h3>
        <p class="text-lg">{{ konuDetayi }}</p>
      </div>
      <div v-else>
        <p>Bir alt başlık seçin</p>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="bg-gray-800 text-white py-4">
    <div class="container mx-auto px-4">
      <p class="text-center">&copy; 2023 Konu Öğretimi Sitesi. Tüm hakları saklıdır.</p>
    </div>
  </footer>
</template>
  
<script>
import Navbar from '../Dashboard/Navbar.vue'

export default {

  components: {
    Navbar

  },
  data() {
    return {
      konular: [
        {
          baslik: 'Konu Başlığı 1',
          altBasliklar: ['Alt Başlık 1', 'Alt Başlık 2', 'Alt Başlık 3'],
          icerik: 'Bu bir konu açıklamasıdır.'
        },
        {
          baslik: 'Konu Başlığı 2',
          altBasliklar: ['Alt Başlık 4', 'Alt Başlık 5', 'Alt Başlık 6'],
          icerik: 'Bu bir konu açıklamasıdır.'
        },
        {
          baslik: 'Konu Başlığı 3',
          altBasliklar: ['Alt Başlık 7', 'Alt Başlık 8', 'Alt Başlık 9'],
          icerik: 'Bu bir konu açıklamasıdır.'
        },
      ],
      seciliKonu: null,
      seciliAltBaslik: null,
    };
  },
  computed: {
    konuDetayi() {
      if (this.seciliKonu && this.seciliAltBaslik) {
        return this.konular.find(konu => konu === this.seciliKonu).icerik;
      }
      return '';
    },
  },
  methods: {
    toggleAltBasliklar(index) {
      if (this.seciliKonu === this.konular[index]) {
        this.seciliKonu = null;
        this.seciliAltBaslik = null;
      } else {
        this.seciliKonu = this.konular[index];
        this.seciliAltBaslik = null;
      }
    },
  },
};
</script>
  
<style>
/* Genel stiller */
body {
  font-family: Arial, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

/* Özel stiller */
a:hover {
  text-decoration: underline;
}

header {
  background-color: #4F46E5;
}

footer {
  background-color: #333333;
}
</style>
  