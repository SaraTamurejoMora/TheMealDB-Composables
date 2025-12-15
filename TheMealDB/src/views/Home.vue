
<script setup>
import { useFetch } from "@/composables/useFetch.js";

import MealCard from "@/components/MealCard.vue";
import { ref } from "vue";
import SearchBar from "@/components/SearchBar.vue";
import { useRoute } from "vue-router";


const route = useRoute();
const cerca = ref("chicken");
const url = ref(
  `https://www.themealdb.com/api/json/v1/1/search.php?s=${cerca.value}`
);

const { data, error, loading, fetchData } = useFetch(url);


const buscarCategoriaMeal =(categoria)=>{
    url.value = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${categoria}`)
    fetchData()
  }

</script>

<template>
  <div class="home">
    <div v-if="loading" class="state loading">Carregant...</div>

    <div v-else-if="error" class="state error">
      {{ error }}
    </div>

    <div v-else>
      <SearchBar @buscarCategoriaMeal="buscarCategoriaMeal" />

      <ul v-if="data && data.meals" class="meals-grid">
        <li v-for="meal in data.meals" :key="meal.idMeal" class="meals-item">
          <MealCard
            :id="meal.idMeal"
            :img="meal.strMealThumb"
            :name="meal.strMeal"
          />
        </li>
      </ul>

      <div v-else class="state empty">
        No se han encontrado recetas :C
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  padding: 0.5rem 0;
}

.meals-grid {
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 1.4rem;
}

.state {
  max-width: 520px;
  margin: 1.5rem auto;
  padding: 1.1rem;
  border-radius: 22px;
  text-align: center;
  font-weight: 800;
}

.state.loading {
  background: #9FD7F5;
  color: #004a6f;
}

.state.error {
  background: #FF78A3;
  color: white;
}

.state.empty {
  background: #F8FFB0;
  color: #555;
}

</style>