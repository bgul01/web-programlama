<template>
   
   <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
<hr>
 <h3>Lessons</h3>
    
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
   
    <div>
    <ul class="navbar-nav" style="list-style: none;">
      <div>
        <div class="dropdown">
      <button class="btn btn-warning dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
        A1-A2 
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="width: 100%">
        <li v-for="(lesson, index) in lessonList" :key="index">
          <a class="dropdown-item" :class="{ 'active': selectedLesson === lesson }" @click="selectLesson(lesson)">{{ lesson }}</a>
        </li>
      </ul>

   
  </div>
  <div class="dropdown mt-2">
      <button class="btn btn-warning dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
        B1-B2 
      </button>
      <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton" style="width: 100%">
        <li v-for="(lesson, index) in lessonList" :key="index">
          <a class="dropdown-item" :class="{ 'active': selectedLesson === lesson }" @click="selectLesson(lesson)">{{ lesson }}</a>
        </li>
      </ul>

    
  </div>
  <div class="dropdown mt-2">
      <button class="btn btn-warning dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
        C1-C2 
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="width: 100%">
        <li v-for="(lesson, index) in lessonList" :key="index">
          <a class="dropdown-item" :class="{ 'active': selectedLesson === lesson }" @click="selectLesson(lesson)">{{ lesson }}</a>
        </li>
      </ul>

   
  </div>
</div>

      <hr>
      <h3 class="text-center">Words</h3>
      <div class="dropdown mt-2">
      <button class="btn btn-warning dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
        C1-C2 
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="width: 100%">
        <li v-for="(lesson, index) in lessonList" :key="index">
          <a class="dropdown-item" :class="{ 'active': selectedLesson === lesson }" @click="selectLesson(lesson)">{{ lesson }}</a>
        </li>
      </ul>

   
  </div>
  <div class="dropdown mt-2">
      <button class="btn btn-warning dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
        C1-C2 
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="width: 100%">
        <li v-for="(lesson, index) in lessonList" :key="index">
          <a class="dropdown-item" :class="{ 'active': selectedLesson === lesson }" @click="selectLesson(lesson)">{{ lesson }}</a>
        </li>
      </ul>

   
  </div>
  <div class="dropdown mt-2">
      <button class="btn btn-warning dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
       <strong>C1-C2 </strong> 
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="width: 100%">
        <li v-for="(lesson, index) in lessonList" :key="index">
          <a class="dropdown-item" :class="{ 'active': selectedLesson === lesson }" @click="selectLesson(lesson)">{{ lesson }}</a>
        </li>
      </ul>
<hr>

<h3 class="text-center">Stories</h3>

<div class="dropdown">
      <button class="btn btn-warning dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
        A1-A2 
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="width: 100%">
        <li v-for="(lesson, index) in lessonList" :key="index">
          <a class="dropdown-item" :class="{ 'active': selectedLesson === lesson }" @click="selectLesson(lesson)">{{ lesson }}</a>
        </li>
      </ul>

   
  </div>
  <div class="dropdown mt-2">
      <button class="btn btn-warning dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
      B1-B2
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="width: 100%">
        <li v-for="(lesson, index) in lessonList" :key="index">
          <a class="dropdown-item" :class="{ 'active': selectedLesson === lesson }" @click="selectLesson(lesson)">{{ lesson }}</a>
        </li>
      </ul>

   
  </div>
  <div class="dropdown mt-2">
      <button class="btn btn-warning dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
        A1-A2 
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="width: 100%">
        <li v-for="(lesson, index) in lessonList" :key="index">
          <a class="dropdown-item" :class="{ 'active': selectedLesson === lesson }" @click="selectLesson(lesson)">{{ lesson }}</a>
        </li>
      </ul>

   
  </div>


   
  </div>
      
    </ul>

    
  </div>
  </div>
</div> 
</template>

<script>
export default {
  data() {
    return {
      lessonList: [
        "Greetings and Introductions",
        "Personal Information",
        "Family",
        "Daily Routine",
        "Hobbies and Interests",
        "Shopping",
        "Food and Drinks",
        "Travel and Transportation",
        "At the Restaurant",
        "Weather",
        "Jobs and Professions",
        "Health and Illness",
        "Holidays and Celebrations",
        "Daily Activities",
        "Places and Directions"
      ],
      selectedLesson: null
    };
  },
  methods: {
    selectLesson(lesson) {
      this.selectedLesson = lesson;
    }
  }
};
</script>


<style>
.dropdown-menu .dropdown-item.active {
  background-color: rgb(240, 186, 7);
}

.offcanvas{

  border-radius: 10px;
  
  
}
</style>