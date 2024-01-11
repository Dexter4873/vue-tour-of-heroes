<script setup>
import { useHeroesStore } from '@/stores/heroes'
import BackButton from "@/components/BackButton.vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref, watch } from 'vue'

const heroesStore = useHeroesStore()
const sort = ref('id');

watch(sort, (newSort) => {
  if (newSort === 'id') {
    heroesStore.sortById();
  } else {
    heroesStore.sortByName();
  }
})

const handleDelete = (id) => {
  heroesStore.deleteById(id)
}
</script>

<template>
  <div class="container">
    <h1>
      My heroes
      <select v-model="sort">
        <option value="id">Id</option>
        <option value="name">Name</option>
      </select>
    </h1>
    <ul>
      <li v-if="heroesStore.heroes.length" v-for="hero in heroesStore.heroes" :key="hero.id">
        <router-link :to="`/heroes/detail/${hero.id}`">
          <span class="badge">{{hero.id}}</span>
          <span class="name">{{ hero.name}}</span>
        </router-link>
        <span @click="handleDelete(hero.id)" class="delete">
          <font-awesome-icon icon="fa-solid fa-trash" />
        </span>
      </li>
      <li v-else class="no-heroes">
        There's no heroes add some...
      </li>
      <router-link to="/heroes/add" class="add-btn" >
        Add new hero
        <font-awesome-icon icon="fa-solid fa-plus" />
      </router-link>
    </ul>
    <back-button />
  </div>
</template>

<style scoped>
  .container {
    padding: 1rem;
    width: 17rem;
  }

  ul {
    margin: 1rem 0;
    display: flex;
    flex-flow: column;
    gap: 0.5rem;
  }

  ul li {
    list-style: none;
    border-radius: 5px;
    display: flex;
  }

  ul li a {
    color: #737373;
    text-decoration: none;
    background-color: rgba(180, 179, 179, 0.76);
    transition: background-color 0.2s;
    display: flex;
    flex-grow: 1;
  }

  ul li a:hover {
    background-color: rgba(180, 179, 179, 0.93);
  }

  .badge {
    padding: .5rem;
    color: white;
    background-color: #30737c;
    border-radius: 5px 0 0 5px;
  }

  .name {
    padding: .5rem;
    flex-grow: 1;
    text-align: center;
  }

  .delete {
    padding: .5rem;
    color: white;
    background-color: #ee6262;
    border-radius: 0 5px 5px 0;
    transition: background-color 0.2s;
    cursor: pointer;
  }

  .delete:hover {
    background-color: #ec3434;
  }

  .add-btn {
    padding: .5rem;
    border-radius: 5px;
    background-color: #30737c;
    border: 2px dashed gray;
    color: white;
    text-decoration: none;
    text-align: center;
  }

  .no-heroes {
    color: gray;
    font-size: small;
    text-decoration: underline;
  }
</style>
