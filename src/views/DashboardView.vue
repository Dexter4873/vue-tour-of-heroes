<script setup>
import { useHeroesStore } from '@/stores/heroes'

const heroesStore = useHeroesStore()
console.log(heroesStore.heroes)
console.log(heroesStore.top)
</script>

<template>
  <h1>Top Heroes</h1>
  <ul>
    <li v-for="hero in heroesStore.top" :key="hero.id">
      <router-link :to="`/heroes/detail/${hero.id}`">{{ hero.name }}</router-link>
    </li>
  </ul>
</template>

<style scoped>
h1 {
  text-align: center;
}

ul {
  display: flex;
  justify-content: center;
}

ul li {
  list-style: none;
}

ul li a {
  display: block;
  margin: 0.5rem;
  padding: 2rem 2rem;
  background-color: #288bef;
  border-radius: 10px;
  text-decoration: none;
  color: white;
}
</style>
