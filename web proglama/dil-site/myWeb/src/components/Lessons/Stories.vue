<template>
  <NavbarVue />
  <div class="min-vh-100 d-flex flex-column flex-md-row">
    <!-- Sidebar -->
    <aside class="bg-gray-200 col-12 col-sm-3">
      <div class="p-4">
        <h2 class="text-lg font-semibold mb-4">Hikayeler</h2>
        <ul class="list-unstyled">
          <li v-for="story in stories" :key="story.id">
            <button class="w-100 mb-2 text-start text-gray-800 py-2 px-4 rounded transition duration-300 hover:bg-gray-300"
              @click="selectStory(story)" :class="{ 'font-semibold': selectedStory && selectedStory.id === story.id }">
              {{ story.title }}
            </button>
          </li>
        </ul>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-grow p-4">
      <div v-if="selectedStory" class="bg-white p-4 shadow">
        <div class="book-page bg-yellow-200 h-100 w-100 p-4 d-flex align-items-center justify-content-center">
          <p class="text-2xl text-center">
            <span v-html="formattedContent"></span>
          </p>
        </div>
      </div>
      <div v-else class="d-flex align-items-center justify-content-center h-100">
        <p class="text-gray-500">Hikaye seçmek için bir hikaye başlığına tıklayın.</p>
      </div>
    </main>
  </div>
</template>

<script>
import NavbarVue from '../Dashboard/Navbar.vue';

export default {
  components: {
    NavbarVue
  },
  data() {
    return {
      selectedStory: null,
      stories: [
        {
          id: 1,
          title: "Alice's Adventures in Wonderland",
          content: "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, 'and what is the use of a book,' thought Alice 'without pictures or conversations?' So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.",
          words: [
            { id: 1, english: 'Alice', turkish: 'Alice' },
            { id: 2, english: 'was', turkish: 'idi' },
            { id: 3, english: 'beginning', turkish: 'başlangıç' },
            { id: 4, english: 'to', turkish: 'gitmek, yapmak' },
            { id: 5, english: 'get', turkish: 'almak' },
            { id: 6, english: 'very', turkish: 'çok' },
            { id: 7, english: 'tired', turkish: 'yorgun' },
            { id: 8, english: 'of', turkish: '-in, -ın, -de, -da' },
            { id: 9, english: 'sitting', turkish: 'oturma' },
            { id: 10, english: 'by', turkish: 'yakınında' },
            { id: 11, english: 'her', turkish: 'onun' },
            { id: 12, english: 'sister', turkish: 'kız kardeş' },
            { id: 13, english: 'on', turkish: '-de, -da' },
            { id: 14, english: 'the', turkish: 'o' },
            { id: 15, english: 'bank', turkish: 'kıyı' },
            { id: 16, english: 'and', turkish: 've' },
            { id: 17, english: 'of', turkish: '-in, -ın, -de, -da' },
            { id: 18, english: 'having', turkish: 'sahip olma' },
            { id: 19, english: 'nothing', turkish: 'hiçbir şey' },
            { id: 20, english: 'to', turkish: 'gitmek, yapmak' },
            // Diğer kelimeler
          ],
        },
        // Diğer hikayeler
      ],

    };
  },
  computed: {
    formattedContent() {
      if (this.selectedStory) {
        let content = this.selectedStory.content;
        this.selectedStory.words.forEach((word) => {
          const regex = new RegExp(`\\b${word.english}\\b`, 'gi');
          content = content.replace(
            regex,
            `<span class="tooltip-trigger" @click="showTooltip = true" @mouseleave="showTooltip = false">${word.english}<span class="tooltiptext" v-show="showTooltip">${word.turkish}</span></span>`
          );
        });
        return content;
      }
      return '';
    },
  },
  methods: {
    selectStory(story) {
      this.selectedStory = story;
    },
  },
};
</script>
  
<style>
.tooltip-trigger {
  position: relative;
  cursor: pointer;
}

.tooltip-trigger::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background-color: #000;
  transform: scaleX(0);
  transition: transform 0.3s;
}

.tooltip-trigger:hover::after {
  transform: scaleX(1);
}

.tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #000;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip-trigger:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
  