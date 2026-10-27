<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    nombre: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <component
    :is="link ? 'a' : 'div'"
    class="certificate-link"
    :href="link || undefined"
    :target="link ? '_blank' : undefined"
    :rel="link ? 'noopener noreferrer' : undefined"
    :aria-label="link ? `Ver certificado: ${nombre}` : undefined"
    data-reveal
  >
    <article class="certificate-card">
      <img
        :src="imageSrc"
        :alt="`Imagen del certificado ${nombre}`"
        class="certificate-image"
        loading="lazy"
        decoding="async"
      >
      <h3 class="certificate-title">{{ nombre }}</h3>
    </article>
  </component>
</template>
