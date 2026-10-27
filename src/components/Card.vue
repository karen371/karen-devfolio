<script>
export default {
  props: {
    imgCard: {
      type: String,
      required: true
    },
    nombre: {
      type: String,
      required: true
    },
    description: {
      type: Array,
      required: true
    },
    git: {
      type: String,
      required: true
    },
    gitpage: {
      type: String,
      required: true
    }
  },
  methods: {
    techLabel(iconClass) {
      if (iconClass.includes('html5')) return 'HTML5'
      if (iconClass.includes('css3')) return 'CSS3'
      if (iconClass.includes('sass')) return 'Sass'
      if (iconClass.includes('vuejs')) return 'Vue'
      if (iconClass.includes('js')) return 'JavaScript'
      return 'Tecnología'
    }
  }
}
</script>

<template>
  <article class="tarjeta">
    <div class="project-card">
      <img
        :src="imgCard"
        :alt="`Vista previa del proyecto ${nombre}`"
        class="card-img"
        loading="lazy"
        decoding="async"
      >
      <div class="card-body">
        <h3 class="card-title">{{ nombre }}</h3>
        <div class="project-tech" role="list" :aria-label="`Tecnologías de ${nombre}`">
          <span
            v-for="(tech, index) in description"
            :key="index"
            role="listitem"
            :aria-label="techLabel(tech.icon)"
            :title="techLabel(tech.icon)"
          >
            <i :class="tech.icon" aria-hidden="true"></i>
          </span>
        </div>
        <div class="project-links">
          <a :href="git" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github me-1" aria-hidden="true"></i>
            Código
          </a>
          <a :href="gitpage" target="_blank" rel="noopener noreferrer">
            Ver proyecto
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </div>
  </article>
</template>
