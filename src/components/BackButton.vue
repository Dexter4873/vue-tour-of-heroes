<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <button @click="router.push('/')">Back</button>
</template>

<style scoped>
button {
  text-decoration: none;
  margin-right: .8rem;
  padding: 0.8rem;
  color: #737373;
  background-color: rgba(180, 179, 179, 0.76);
  border-radius: 5px;
  transition: background-color 0.2s;
  outline: none;
  border: none;
}

button:hover {
  background-color: rgba(180, 179, 179, 0.93);
  cursor: pointer;
}
</style>
