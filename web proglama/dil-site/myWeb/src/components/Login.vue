<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-lg">
      <h2 class="text-2xl font-semibold text-center mb-6">Giriş Yap</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-700">E-posta Adresi</label>
          <input type="email" id="email" v-model="email"
            class="w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="E-posta adresinizi girin" />
        </div>
        <div class="mb-4">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-700">Şifre</label>
          <input type="password" id="password" v-model="password"
            class="w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Şifrenizi girin" />
        </div>
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center">
            <input type="checkbox" id="remember" class="mr-2 text-indigo-500 focus:ring-2 focus:ring-indigo-400" />
            <label for="remember" class="text-sm text-gray-600">Beni Hatırla</label>
          </div>
          <a href="#" class="text-sm text-indigo-500 hover:underline">Şifremi Unuttum</a>
        </div>
        <button @click="handleSubmit()" type="submit"
          class="w-full py-2 px-4 text-white font-semibold bg-indigo-500 rounded-lg hover:bg-indigo-600">
          Giriş Yap
        </button>
      </form>
      <p class="text-sm text-center text-gray-600 mt-4">Hesabınız yok mu? <a type="button"
          @click="$router.push('/SignUp')" class="text-indigo-500 hover:underline">Kaydol</a></p>
      <p v-if="error" class="text-sm text-red-500 mt-4">{{ error }}</p>
      <transition name="fade">
        <div v-if="success" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4">
          Giriş başarıyla gerçekleşti.
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
      success: false
    };
  },
  methods: {
    handleSubmit() {
      this.error = ''; // Hata mesajını sıfırla

      this.$store
        .dispatch('login', { email: this.email, password: this.password })
        .then(() => {
          
          this.success = true;
          this.$router.push('/profile'); // Giriş başarılı olduğunda success durumunu true olarak ayarla
          console.log(this.$store.getters.isLoggedIn);
        })
        
        .catch(error => {
          this.error = error; // Hata mesajını ayarla
        });
    }
  },
 
};
</script>

<style scoped>
input:focus {
  border-color: #6366f1;
  outline: none;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
