
<script setup>
import { useFetch } from "@/composables/useFetch.js";
import { RouterLink } from "vue-router";
import MealCard from "@/components/MealCard.vue";
import { ref } from "vue";
import SearchBar from "@/components/SearchBar.vue";

const cerca = ref("chicken");
const url = ref(
  `https://www.themealdb.com/api/json/v1/1/search.php?s=${cerca.value}`
);

const { data, error, loading, fetchData } = useFetch(url);


const buscarCategoriaMeal =(categoria)=>{
    url.value = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${categoria.value}`)
}

</script>

<template>
  <div v-if="loading">Carregant...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>
    <SearchBar @buscarCategoriaMeal="buscarCategoriaMeal"/>
    <ul v-if="data && data.meals">
      <div v-for="meal in data.meals" :key="meal.idMeal">
        <MealCard :id="meal.idMeal" :img="meal.strMealThumb" :name="meal.strMeal"/>
      </div>
    </ul>
  </div>
</template>