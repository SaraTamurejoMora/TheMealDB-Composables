<script setup>

const props=defineProps({
    id:String,
    img:String,
    name:String,
})
</script>

<template>
    <div>
        <img :src="props.img"/>
        <h2>{{ props.name }}</h2>
        <RouterLink :to="`/meal/${props.id}`">Receta</RouterLink>
    </div>
</template>