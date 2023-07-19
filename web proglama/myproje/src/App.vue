<template>
  <div id="container ">
    <div class="row">

      <div class="col-md-12 text-center">
        <button @click="selectedComponent ='appMemory'" class="btn-sm btn btn-primary">appmemory</button>
        <button @click="selectedComponent ='appNewMemory'" class="btn-sm btn btn-primary">appnewmemory</button>
        <button @click="selectedComponent ='appAuthor'" class="btn-sm btn btn-primary">appauthor</button>

<hr>
<p>{{ selectedComponent }}</p>
 <component :is="selectedComponent">
  <h1 slot="yazi1">merhab</h1>
        <p slot="yazi2"> heloo</p>
</component>

        <!---<appMemory   ><h1 slot="yazi1">merhab</h1>
        <p slot="yazi2"> heloo</p>-->
        
      

      </div>
    </div>
   
  </div>
</template>

<script>
import Memory from "./components/Memory.vue";
import Author from "./components/Author.vue";
import NewMemory from "./components/NewMemory.vue";
export default {
  data : 

function(){
  return{

    selectedComponent :"appMemory"
  }
}
,


components : {

  appMemory : Memory,
  appNewMemory:NewMemory,
  appAuthor:Author
},



}
</script>

<style>




</style>
