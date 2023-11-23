<script setup>
</script>

<template>
  <h1>Tour of heroes</h1>
  <nav>
    <router-link to="/" exact-active-class="active">Dashboard</router-link>
    <router-link to="/heroes" exact-active-class="active">Heroes</router-link>
  </nav>
  <router-view />
</template>

<style scoped>
h1 {
  padding: 1rem;
  color: #8d8d8d;
}

nav {
  margin: 1.5rem 0;
  padding: 0 1rem;
}

nav a {
  text-decoration: none;
  margin-right: .8rem;
  padding: 0.8rem;
  color: #737373;
  background-color: rgba(180, 179, 179, 0.76);
  border-radius: 5px;
  transition: background-color 0.2s;
}

nav a:hover {
  background-color: rgba(180, 179, 179, 0.93);
}

.active {
  color: #288bef
}
</style>
