<template>
  <NavbarVue />
  <div class="min-vh-100 d-flex flex-column">

    <div class="min-vh-100 d-flex flex-column flex-sm-row">
      <!-- Sidebar -->
      <aside class="bg-gray-200 col-12 col-sm-3">
        <div class="p-4">
          <h2 class="text-lg font-semibold mb-4">Seviyeler</h2>
          <ul class="list-unstyled">
            <li>
              <button class="w-100 mb-2 text-start text-gray-800 py-2 px-4 rounded transition duration-300 hover:bg-gray-300"
                @click="changeLevel('A1-A2')" :class="{ 'font-semibold': currentLevel === 'A1-A2' }">
                A1-A2
              </button>
            </li>
            <li>
              <button class="w-100 mb-2 text-start text-gray-800 py-2 px-4 rounded transition duration-300 hover:bg-gray-300"
                @click="changeLevel('C1-C2')" :class="{ 'font-semibold': currentLevel === 'C1-C2' }">
                C1-C2
              </button>
            </li>
            <li>
              <button class="w-100 mb-2 text-start text-gray-800 py-2 px-4 rounded transition duration-300 hover:bg-gray-300"
                @click="toggleWordGame" :class="{ 'font-semibold': showWordGame }">
                Word Game
              </button>
            </li>
          </ul>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-grow p-4">
        <h1 class="text-2xl font-bold mb-4">İngilizce-Türkçe Kelime Sitesi</h1>
        <div v-if="showWordGame">
          <!-- PlayWord bileşenini burada görüntüleyin -->
          <PlayWord />
        </div>
        <div v-else class="row row-cols-1 row-cols-sm-2 row-cols-md-3 gap-4">
          <!-- İngilizce-Türkçe kelime kartları buraya gelecek -->
          <div v-for="word in filteredWords" :key="word.id" class="col bg-white rounded-lg p-4 shadow">
            <h2 class="text-xl font-semibold">{{ word.english }}</h2>
            <p class="mt-2">{{ word.turkish }}</p>
          </div>
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
import NavbarVue from "../Dashboard/Navbar.vue";
import PlayWord from "../Lessons/PlayWord.vue"
export default {
  components: {

    PlayWord,
    NavbarVue
  },
  data() {
    return {
      currentLevel: 'A1-A2',
      showWordGame: false,
      words: [
        { id: 1, level: 'A1-A2', english: 'Apple', turkish: 'Elma' },
        { id: 2, level: 'A1-A2', english: 'Cat', turkish: 'Kedi' },
        { id: 3, level: 'C1-C2', english: 'Abundant', turkish: 'Bol' },
        { id: 4, level: 'C1-C2', english: 'Captivate', turkish: 'Büyülemek' },
      ],
    };
  },
  computed: {
    filteredWords() {
      return this.words.filter(word => word.level === this.currentLevel);
    },
  },
  methods: {
    changeLevel(level) {
      this.currentLevel = level;
      this.showWordGame = false;

    },
    toggleWordGame() {
      this.showWordGame = !this.showWordGame;
      this.currentLevel = ''
    },
  },
};



</script>




<style>
body {
  font-family: Arial, sans-serif;
}
</style>