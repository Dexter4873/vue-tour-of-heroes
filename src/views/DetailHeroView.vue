<script setup>
import { useRoute } from 'vue-router'
import BackButton from "@/components/BackButton.vue";
import { useHeroesStore } from "@/stores/heroes";

const route = useRoute()
const heroesStore = useHeroesStore();
const hero = heroesStore.findById(parseInt(route.params.id));
</script>

<template>
  <div class="container">
    <h1>{{ hero.name }} details!</h1>
    <div class="details">
      <p>Id: {{hero.id}}</p>
      <p>
        <label for="name">Name: </label>
        <input type="text" :value="hero.name" @input="heroesStore.updateName(hero.id, $event.target.value)">
      </p>
    </div>
    <back-button />
  </div>
</template>

<style scoped>
.container {
  padding: 1rem;
}

.details {
  margin: 1rem 0;
}

p {
  margin: 0.5rem 0;
}

input {
  border: 1px solid #a6a6a6;
  padding: 5px;
  border-radius: 5px;
  outline: none;
  transition: outline 0.2s;
}

input:hover, input:active {
  outline: 2px solid rgba(0, 102, 255, 0.68);
}
</style>
