<script setup>
import { ref } from 'vue';

const categoriaMeal = ref(null)


const emit = defineEmits(['buscarCategoriaMeal'])

const buscarCategoriaMeal = () =>{
    emit('buscarCategoriaMeal',categoriaMeal.value)
}
</script>


<template>

<div>
    <input type="text" v-model="categoriaMeal" placeholder="Buscar categoria"/>
    <button @click="buscarCategoriaMeal">Buscar</button>
</div>


</template>