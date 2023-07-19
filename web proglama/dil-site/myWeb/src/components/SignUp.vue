<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-lg">
      <h2 class="text-2xl font-semibold text-center mb-6">Kaydol</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-700">Ad Soyad</label>
          <input type="text" id="name"
            v-model.trim="name"
            required
            class="w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Adınızı ve soyadınızı girin" />
        </div>
        <div class="mb-4">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-700">E-posta Adresi</label>
          <input type="email" id="email"
            v-model.trim="email"
            required
            :pattern="emailPattern"
            class="w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="E-posta adresinizi girin" />
          <p v-if="email && !isValidEmail" class="text-sm text-red-500 mt-1">Geçerli bir e-posta adresi giriniz.</p>
        </div>
        <div class="mb-4">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-700">Şifre</label>
          <input type="password" id="password"
            v-model.trim="password"
            required
            class="w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Şifre belirleyin" />
        </div>
        <div class="mb-4">
          <label for="confirmPassword" class="block mb-2 text-sm font-medium text-gray-700">Şifre Tekrarı</label>
          <input type="password" id="confirmPassword"
            v-model.trim="confirmPassword"
            required
            class="w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Şifrenizi tekrar girin" />
        </div>
        <button type="submit"
          class="w-full py-2 px-4 text-white font-semibold bg-indigo-500 rounded-lg hover:bg-indigo-600">
          Kaydol
        </button>
      </form>
      <p class="text-sm text-center text-gray-600 mt-4">Zaten bir hesabınız var mı? <a type="button"
          @click="$router.push('/Login')" class="text-indigo-500 hover:underline">Giriş yapın</a></p>
      <p v-if="error" class="text-sm text-red-500 mt-4">{{ error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: '',
    };
  },
  methods: {
    handleSubmit() {
      // ...
      const newUser = {
        name: this.name,
        email: this.email,
        password: this.password
      };

      this.$store.dispatch('signup', newUser)
        .then(() => {
          // Kayıt başarılı, oturum açma işlemi yapılacak
          this.name = '';
          this.email = '';
          this.password = '';
          this.confirmPassword = '';
          this.error = '';

          // Oturum açma işlemini gerçekleştir
          const credentials = {
            email: newUser.email,
            password: newUser.password
          };

          // Oturum açma işlemi yapılıyor
          return this.$store.dispatch('login', credentials);
        })
        .then(() => {
          // Oturum açma başarılı, profil sayfasına yönlendir
          this.$router.push('/profile');
        })
        .catch(error => {
          // Hata oluştu, hata mesajını ayarla
          this.error = error;
        });
    },
    // ...
  },
  computed: {
    isValidEmail() {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(this.email);
    },
    emailPattern() {
      return "[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}";
    }
  }
};
</script>


<style scoped>
input:focus {
  border-color: #6366f1;
  outline: none;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
}
</style>
