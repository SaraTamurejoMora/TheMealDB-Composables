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
  <div v-if="loading" class="detail-state loading">
    <p>Cargando…</p>
  </div>

  <div v-else-if="error" class="detail-state error">
    <p>Error: {{ error }}</p>
  </div>

  <div v-else>
    <div v-if="data && data.meals">
      <article v-for="meal in data.meals" :key="meal.idMeal" class="detail">
        
        <header class="detail-hero">
          <img class="detail-photo" :src="meal.strMealThumb" :alt="meal.strMeal" />

          <div class="detail-overlay">
            <h1 class="detail-title">{{ meal.strMeal }}</h1>

            <div class="detail-tags">
              <span v-if="meal.strCategory" class="tag tag-cat">{{ meal.strCategory }}</span>
              <span v-if="meal.strArea" class="tag tag-area">{{ meal.strArea }}</span>
              <a
                v-if="meal.strYoutube"
                class="tag tag-yt"
                :href="meal.strYoutube"
                target="_blank"
                rel="noreferrer"
              >
                YouTube
              </a>
            </div>
          </div>
        </header>

        
        <section class="detail-body">
          <h2 class="detail-subtitle">Instrucciones</h2>
          <p class="detail-text">{{ meal.strInstructions }}</p>
        </section>
      </article>
    </div>
  </div>
</template>

<style scoped>
.detail-state {
  max-width: 520px;
  margin: 1.5rem auto;
  padding: 1.1rem;
  border-radius: 22px;
  text-align: center;
  font-weight: 800;
}

.detail-state.loading {
  background: #9FD7F5;
  color: #004a6f;
}

.detail-state.error {
  background: #FF78A3;
  color: white;
}


.detail {
  max-width: 980px;
  margin: 0 auto;
  border-radius: 26px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.22);
}


.detail-hero {
  position: relative;
  height: 360px;
  background: #BAA6E0;
}

.detail-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}


.detail-overlay {
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 16px;

  padding: 14px 14px 12px;
  border-radius: 22px;

  background: rgba(186, 166, 224, 0.85);
  backdrop-filter: blur(8px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
}

.detail-title {
  margin: 0 0 10px;
  font-size: 1.9rem;
  font-weight: 900;
  color: white;
  line-height: 1.1;
}


.detail-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  font-weight: 900;
  font-size: 0.9rem;
  color: #333;
  background: #F8FFB0; 
}

.tag-cat {
  background: #F8FFB0;
}

.tag-area {
  background: #9FD7F5; 
}

.tag-yt {
  background: #FF78A3;
  text-decoration: none;
  transition: transform 0.15s ease;
}

.tag-yt:hover {
  transform: scale(1.06);
}


.detail-body {
  padding: 1.4rem 1.4rem 1.7rem;
  background: #ffffff;
}

.detail-subtitle {
  margin: 0 0 0.8rem;
  font-size: 1.2rem;
  font-weight: 900;
  color: #BAA6E0;
}

.detail-text {
  margin: 0;
  line-height: 1.75;
  color: #333;
  white-space: pre-line;
}


@media (max-width: 820px) {
  .detail-hero {
    height: 280px;
  }
  .detail-title {
    font-size: 1.45rem;
  }
}
</style>