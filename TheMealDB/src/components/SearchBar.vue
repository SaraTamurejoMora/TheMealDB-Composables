<script setup>
import { ref } from 'vue';

const categoriaMeal = ref(null)


const emit = defineEmits(['buscarCategoriaMeal'])

const buscarCategoriaMeal = () =>{
    emit('buscarCategoriaMeal',categoriaMeal.value)
}
</script>


<template>
  <div class="search-bar">
    <input
      type="text"
      v-model="categoriaMeal"
      placeholder="Buscar receta"
      class="search-input"
    />
    <button @click="buscarCategoriaMeal" class="search-button">
      Buscar
    </button>
  </div>
</template>

<style scoped>
.search-bar {
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  margin: 1.5rem 0;
}

.search-input {
  width: min(420px, 100%);
  padding: 0.8rem 1rem;

  border-radius: 999px;
  border: 2px solid #BAA6E0;
  outline: none;

  background: #F8FFB0;
  color: #333;
  font-size: 1rem;
}

.search-input::placeholder {
  color: #777;
}

.search-input:focus {
  box-shadow: 0 0 0 4px rgba(186, 166, 224, 0.5);
}

.search-button {
  padding: 0.8rem 1.4rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;

  font-weight: 900;
  color: white;
  background: #FF78A3;

  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.search-button:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 6px 18px rgba(255, 120, 163, 0.6);
}
</style>