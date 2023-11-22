<script setup>
import { useRoute } from 'vue-router'
import BackButton from "@/components/BackButton.vue";

const route = useRoute()
</script>

<template>
  <h1>Heroes detail {{ route.params.id }}</h1>
  <back-button />
</template>

<style scoped></style>
