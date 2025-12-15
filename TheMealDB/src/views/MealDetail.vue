<script setup>

import { useFetch } from '@/composables/useFetch';
import { watch,ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()


const url = ref(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`)


const { data, error, loading, fetchData } = useFetch(url)


watch(
  () => route.params.id,
  (newId) => {
    url.value = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${newId}`
  }
)

</script>

<template>
   
   <div v-if="loading">
      <p>loading</p>
  </div>

  <div v-else-if="error">
    <p>Error: {{ error }}</p>
  </div>

  <div v-else>
     
    <div  v-if="data && data.meals">  
      <div v-for="meal in data.meals" >
        <h1>{{meal.strMeal }}</h1>
        <img :src="meal.strMealThumb"/> 
        <h2>Instrucciones</h2>
        <p>{{ meal.strInstructions }}</p>
      </div>
    </div>
 

  </div>
</template>