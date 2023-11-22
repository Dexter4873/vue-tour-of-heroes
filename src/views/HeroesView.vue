<script setup>
import { useHeroesStore } from '@/stores/heroes'
import BackButton from "@/components/BackButton.vue";

const heroesStore = useHeroesStore()
</script>

<template>
  <h1>My heroes</h1>
  <ul>
    <li v-for="hero in heroesStore.heroes" :key="hero.id">
      <router-link :to="`/heroes/detail/${hero.id}`">
        <span>{{hero.id}}</span>
        <span>{{ hero.name}}</span>
      </router-link>
    </li>
  </ul>
  <back-button />
</template>

<style scoped></style>
