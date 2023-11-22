<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <button @click="router.go(-1)">Back</button>
</template>

<style scoped></style>
