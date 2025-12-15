<template>
  <nav class="navbar">
    <h1 class="navbar-title">Recetas Vue + TheMealDB</h1>

    <RouterLink to="/" class="navbar-link">
      Home
    </RouterLink>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 1.3rem;
  margin-bottom: 1.5rem;

  background: #BAA6E0;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.navbar-title {
  font-size: 1.3rem;
  font-weight: 900;
  color: #ffffff;
}

.navbar-link {
  padding: 0.55rem 1.2rem;
  border-radius: 999px;
  font-weight: 800;
  color: #ffffff;

  background: #FF78A3;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.navbar-link:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 6px 15px rgba(255, 120, 163, 0.6);
}
</style>