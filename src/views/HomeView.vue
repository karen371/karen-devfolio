<script>
import CardHorizontal from '../components/CardHorizontal.vue'
import Habilidades from '@/components/Habilidades.vue'
import Card from '@/components/Card.vue'
import { mapGetters } from 'vuex'
import Certificados from '@/components/Certificados.vue'
import Footer from '@/components/Footer.vue'
import Button from '@/components/Button.vue'

const projectFilterIcons = {
  JavaScript: 'fa-js',
  Vue: 'fa-vuejs',
  Sass: 'fa-sass'
}

export default {
  components: {
    CardHorizontal,
    Habilidades,
    Card,
    Certificados,
    Footer,
    Button
  },
  data() {
    return {
      revealObserver: null,
      selectedProjectFilter: 'Todos',
      projectFilters: ['Todos', 'JavaScript', 'Vue', 'Sass']
    }
  },
  computed: {
    ...mapGetters('projects', ['getAllProyectos']),
    ...mapGetters('habilidades', ['getAllHabilidades']),
    ...mapGetters('certificados', ['getAllCertificados']),
    habilidades() {
      return this.getAllHabilidades
    },
    proyectos() {
      return this.getAllProyectos
    },
    proyectosFiltrados() {
      const iconClass = projectFilterIcons[this.selectedProjectFilter]
      if (!iconClass) return this.proyectos

      return this.proyectos.filter((proyecto) =>
        proyecto.description.some((tech) => tech.icon.includes(iconClass))
      )
    },
    certificado() {
      return this.getAllCertificados
    }
  },
  mounted() {
    if (!('IntersectionObserver' in window)) return

    this.revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' }
    )

    document.documentElement.classList.add('motion-enabled')
    this.observeRevealItems()
  },
  watch: {
    selectedProjectFilter() {
      this.$nextTick(() => this.observeRevealItems())
    }
  },
  methods: {
    observeRevealItems() {
      if (!this.revealObserver) return

      document.querySelectorAll('#app [data-reveal]:not(.is-visible)').forEach((item, index) => {
        item.style.setProperty('--reveal-index', index % 5)
        this.revealObserver.observe(item)
      })
    }
  },
  beforeUnmount() {
    this.revealObserver?.disconnect()
    document.documentElement.classList.remove('motion-enabled')
  }
}
</script>

<template>
  <section class="portfolio-section" id="about">
    <div class="page-width">
      <div class="section-heading" data-reveal>
        <h2>Diseño y desarrollo con propósito.</h2>
      </div>
      <div class="about-layout">
        <CardHorizontal />
      </div>
    </div>
  </section>

  <section class="portfolio-section section-soft" id="projects">
    <div class="page-width">
      <div class="section-heading" data-reveal>
        <h2>Proyectos seleccionados</h2>
        <p>Una muestra de experiencias e interfaces que he diseñado y desarrollado.</p>
      </div>
      <div class="project-controls" data-reveal>
        <div class="project-filters" role="group" aria-label="Filtrar proyectos por tecnología">
          <button
            v-for="filter in projectFilters"
            :key="filter"
            class="project-filter"
            :class="{ 'is-active': selectedProjectFilter === filter }"
            type="button"
            :aria-pressed="selectedProjectFilter === filter"
            @click="selectedProjectFilter = filter"
          >
            {{ filter }}
          </button>
        </div>
        <p class="project-count" aria-live="polite">
          {{ proyectosFiltrados.length }} {{ proyectosFiltrados.length === 1 ? 'proyecto' : 'proyectos' }}
        </p>
      </div>
      <div class="project-grid">
        <Card
          v-for="(proyecto, index) in proyectosFiltrados"
          :key="proyecto.nombre"
          :imgCard="proyecto.imgCard"
          :nombre="proyecto.nombre"
          :description="proyecto.description"
          :git="proyecto.git"
          :gitpage="proyecto.gitpage"
          :class="{ 'project-card--featured': index === 0 }"
          data-reveal
        />
      </div>
    </div>
  </section>

  <section class="portfolio-section" id="skills">
    <div class="page-width">
      <div class="section-heading" data-reveal>
        <h2>Tecnologías que uso</h2>
        <p>Herramientas y lenguajes que forman parte de mi trabajo y aprendizaje continuo.</p>
      </div>
      <ul class="skills-list">
        <Habilidades
          v-for="habilidad in habilidades"
          :key="habilidad.title"
          :imageSrc="habilidad.imageSrc"
          :title="habilidad.title"
          data-reveal
        />
      </ul>
    </div>
  </section>

  <section class="portfolio-section section-soft" id="certificate">
    <div class="page-width">
      <div class="section-heading" data-reveal>
        <h2>Formación y certificaciones</h2>
        <p>Formación en informática y cursos que han acompañado mi crecimiento profesional.</p>
      </div>
      <div class="certificate-grid">
        <Certificados
          v-for="cer in certificado"
          :key="cer.nombre"
          :imageSrc="cer.imageSrc"
          :link="cer.link"
          :nombre="cer.nombre"
          data-reveal
        />
      </div>
    </div>
  </section>

  <section class="contact-section" id="contact">
    <div class="page-width" data-reveal>
      <h2>¿Creamos algo juntas?</h2>
      <p>Si tienes una idea, una consulta o quieres conversar sobre un proyecto, escríbeme por WhatsApp.</p>
      <Button />
    </div>
  </section>
  <Footer />
</template>
