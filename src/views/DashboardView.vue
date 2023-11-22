<script setup>
  import { useHeroesStore } from "@/stores/heroes";

  const heroesStore = useHeroesStore();
</script>

<template>
  <h1>Dashboard</h1>
  <ul>
    <li v-for="hero in heroesStore.top" :key="hero.id">
      <router-link :to="`/heroes/detail/${hero.id}`">{{hero.name}}</router-link>
    </li>
  </ul>
</template>

<style scoped></style>
