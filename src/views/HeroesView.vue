<script setup>
import { useHeroesStore } from '@/stores/heroes'
import BackButton from "@/components/BackButton.vue";

const heroesStore = useHeroesStore()
</script>

<template>
  <div class="container">
    <h1>My heroes</h1>
    <ul>
      <li v-for="hero in heroesStore.heroes" :key="hero.id">
        <router-link :to="`/heroes/detail/${hero.id}`">
          <span class="badge">{{hero.id}}</span>
          <span class="name">{{ hero.name}}</span>
        </router-link>
      </li>
    </ul>
    <back-button />
  </div>
</template>

<style scoped>
  .container {
    padding: 1rem;
    width: 15rem;
  }

  ul {
    margin-top: 1rem;
  }

  ul li {
    list-style: none;
  }

  ul li a {
    display: flex;
    margin: .5rem;
    color: #737373;
    text-decoration: none;
    background-color: rgba(180, 179, 179, 0.76);
    border-radius: 5px;
    transition: background-color 0.2s;
  }

  ul li a:hover {
    background-color: rgba(180, 179, 179, 0.93);
  }

  .badge {
    padding: .5rem;
    color: white;
    background-color: #30737c;
  }

  .name {
    padding: .5rem;
    flex-grow: 1;
    text-align: center;
  }
</style>
