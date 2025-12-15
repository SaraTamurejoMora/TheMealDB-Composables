<script setup>

const props=defineProps({
    id:String,
    img:String,
    name:String,
})
</script>

<template>
  <div class="meal-card">
    <img :src="props.img" :alt="props.name" class="meal-img" />

    <div class="meal-content">
      <h2 class="meal-title">{{ props.name }}</h2>

      <RouterLink
        :to="`/meal/${props.id}`"
        class="meal-link"
      >
        Ver receta
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.meal-card {
  background: #ffffff;
  border-radius: 22px;
  overflow: hidden;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.meal-card:hover {
  transform: translateY(-6px) rotate(-0.5deg);
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.25);
}

.meal-img {
  width: 100%;
  height: 170px;
  object-fit: cover;
}

.meal-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.meal-title {
  font-size: 1.05rem;
  font-weight: 900;
  color: #BAA6E0;
}

.meal-link {
  align-self: flex-start;
  padding: 0.5rem 1rem;
  border-radius: 999px;

  font-weight: 900;
  color: #ffffff;
  background: #5FDE87;

  transition: transform 0.15s ease;
}

.meal-link:hover {
  transform: scale(1.08);
}
</style>