<template>
  <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div class="flex lg:flex-1">
      <a href="#" class="-m-1.5 p-1.5">
        <span class="sr-only">Your Company</span>
        <router-link to="/" class="h-8 w-auto">
          <img class="w-12" :src="logo" alt="">
        </router-link>
      </a>
    </div>
    <div class="flex lg:hidden">
      <button @click="toggleMobileMenu" type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
        <span class="sr-only">Open main menu</span>
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    <div class="hidden lg:flex lg:gap-x-12">
      <div class="relative">
        <button @click="$router.push('/Lessons')" type="button" class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" :aria-expanded="isLessonsMenuOpen ? 'true' : 'false'">
          Lessons
        </button>
        
      </div>
      <button @click="$router.push('/Words')" class="text-sm font-semibold leading-6 text-gray-900">Words</button>
      <button @click="$router.push('/Stories')" class="text-sm font-semibold leading-6 text-gray-900">Stories</button>
      <button class="text-sm font-semibold leading-6 text-gray-900">Company</button>
    </div>

    <div v-if="isLoggedIn"  class="hidden lg:flex lg:flex-1 lg:justify-end">
        <button @click="toggleProductMenu" type="button" class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" :aria-expanded="isProfileMenuOpen ? 'true' : 'false'">
          <i class="fa-regular fa-user fa-lg" style="color: #1b1c1d;"></i>
          Profilim
         
        </button>
        <ul v-show="isProductMenuOpen"  class="absolute z-10 mt-4 w-36 bg-white rounded-md shadow-lg divide-y divide-gray-200" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
          <!-- Menu items -->
          <li><a type="button" @click="$router.push('profile')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profil Bilgilerim</a></li>
          <li><a type="button" @click="logout()" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Oturumu Kapat</a></li>
        </ul>
      </div>
    <div v-else  class="hidden lg:flex lg:flex-1 lg:justify-end">
      <button @click="$router.push('/Login')" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></button>
    </div>
   
  </nav>
  <!-- Mobile menu, show/hide based on menu open state. -->
  <div v-show="isMobileMenuOpen" class="fixed inset-0 z-10">
    <!-- Background backdrop, show/hide based on slide-over state. -->
    <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div class="flex items-center justify-between">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
        </a>
        <button @click="toggleMobileMenu" type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
          <span class="sr-only">Close menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="space-y-2 py-6">
            <div class="-mx-3">
              <button @click="$router.push('/Lessons')" type="button" class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900" :aria-expanded="isLessonsMenuOpen ? 'true' : 'false'">
          Lessons
        </button>
        <button @click="$router.push('/Words')"  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900">Words</button>
        <button @click="$router.push('/Stories')" class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900">Stories</button>    
        <button class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900">Company</button>
        
            </div>
            <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
            <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
            <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
          </div>
          <div class="py-6">
            

            <div v-if="isLoggedIn"  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
        <button @click="toggleProductMenu" type="button" class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" :aria-expanded="isProfileMenuOpen ? 'true' : 'false'">
          <i class="fa-regular fa-user fa-lg" style="color: #1b1c1d;"></i>
          Profilim
         
        </button>
        <ul v-show="isProductMenuOpen"  class="absolute z-10 mt-4 w-36 bg-white rounded-md shadow-lg divide-y divide-gray-200" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
          <!-- Menu items -->
          <li><a type="button" @click="$router.push('profile')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profil Bilgilerim</a></li>
          <li><a type="button" @click="logout()" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Oturumu Kapat</a></li>
        </ul>
      </div>






            <button v-else  @click="$router.push('/Login')" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import logo from './logo.jpg';

export default {
  data() {
    return {
      logo: logo,
      isMobileMenuOpen: false,
      
      isProductMenuOpen: false
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
   
    toggleProductMenu() {
      this.isProductMenuOpen = !this.isProductMenuOpen;
    },
    
    logout() {
      this.$store.dispatch('logout');
      // Oturumu kapatma işlemlerini gerçekleştirir
      this.$router.push('/')
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
}


}
</script>
