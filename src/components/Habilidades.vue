<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <li class="skill-card">
    <img :src="imageSrc" alt="" class="skill-image">
    <span class="skill-text">{{ title }}</span>
  </li>
</template>
