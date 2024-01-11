<script setup>
import { onMounted, ref } from 'vue'
import { useHeroesStore } from '@/stores/heroes'
import { useRouter } from 'vue-router'
import BackButton from '@/components/BackButton.vue'

const heroName = ref('');
const input = ref(null);

const heroesStore = useHeroesStore();
const router = useRouter()

const addHero = () => {
  if (heroName.value) {
    heroesStore.add(heroName);
    router.push('/heroes')
  }
}

onMounted(() => input.value.focus());
</script>

<template>
  <div class="container">
    <form @submit.prevent="addHero">
      <h1>Add hero</h1>
      <div class="control">
        <label for="heroName">Name: </label>
        <input id="heroName" type="text" v-model="heroName" ref="input" >
      </div>
      <button class="button" type="submit">Add</button>
      <back-button />
    </form>
  </div>
</template>

<style scoped>
.container {
  margin: 1rem;
  width: 15rem;
}

h1 {
  margin-bottom: 1rem;
}

.control {
 display: flex;
  align-items: center;
  margin: 0.5rem 0;
}

.control label {
 margin-right: 5px;
}

.control input {
  flex-grow: 1;
  padding: 0.5rem;
  border: 1px solid #8d8d8d;
  border-radius: 5px;
}

.button  {
  display: block;
  padding: 0.5rem;
  background-color: #30737c;
  color: white;
  border: none;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 0.5rem;
}

</style>
