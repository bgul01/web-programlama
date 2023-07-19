<template>
  <div class="flex justify-center items-center h-screen">
    <button
      class="relative w-64 h-32 bg-orange-500 text-white font-bold text-xl rounded-lg overflow-hidden transform transition-transform duration-500"
      @click="flipCard" :class="{ 'flipped': isFlipped }">
      <div class="front absolute inset-0 flex justify-center items-center">
        <span v-if="!isFlipped">English</span>
      </div>
      <div class="back absolute inset-0 flex justify-center items-center">
        <span v-if="isFlipped" class="transform rotate-x-180">{{ flippedText }}</span>
      </div>
    </button>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      isFlipped: false,
      flippedText: 'Türkçe',
    };
  },
  methods: {
    flipCard() {
      this.isFlipped = !this.isFlipped;
    },
  },
};
</script>
  
<style>
button.flipped {
  transform: rotateX(180deg);
}

.front,
.back {
  backface-visibility: hidden;
  transform-style: preserve-3d;
}

.front span {
  color: white;
}

.back span {
  color: white;
}

.transform.rotate-x-180 {
  transform: rotateX(180deg);
}
</style>
  