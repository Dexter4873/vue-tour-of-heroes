<script setup>
import { useHeroesStore } from '@/stores/heroes'

const heroesStore = useHeroesStore()
</script>

<template>
  <h1>Top Heroes</h1>
  <ul>
    <li v-if="heroesStore.heroes.length" v-for="hero in heroesStore.top" :key="hero.id">
      <router-link :to="`/heroes/detail/${hero.id}`">{{ hero.name }}</router-link>
    </li>
    <li v-else class="no-heroes">
      There's no heroes
      <router-link to="/heroes/add">add some.</router-link>
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

ul li.no-heroes {
  font-size: small;
  color: gray;
  margin-top: 1rem;
}

ul li.no-heroes a {
  background-color: #fff;
  color: #3684ff;
  display: inline;
  padding: 0;
  margin: 0;
  text-decoration: underline;
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
