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
  components: { CardHorizontal, Habilidades, Card, Certificados, Footer, Button },
  data() {
    return {
      revealObserver: null,
      selectedProjectFilter: 'Todos',
      projectFilters: ['Todos', 'Vue', 'JavaScript', 'Sass'],
      showAllProjects: false
    }
  },
  computed: {
    ...mapGetters('projects', ['getAllProyectos']),
    ...mapGetters('habilidades', ['getAllHabilidades']),
    ...mapGetters('certificados', ['getAllCertificados']),
    habilidades() { return this.getAllHabilidades },
    certificado() { return this.getAllCertificados },
    proyectos() { return this.getAllProyectos },
    proyectosFiltrados() {
      const iconClass = projectFilterIcons[this.selectedProjectFilter]
      if (!iconClass) return this.proyectos
      return this.proyectos.filter(project =>
        project.description.some(tech => tech.icon.includes(iconClass))
      )
    },
    proyectosVisibles() {
      if (this.showAllProjects || this.selectedProjectFilter !== 'Todos') return this.proyectosFiltrados
      return this.proyectosFiltrados.slice(0, 3)
    }
  },
  mounted() {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    this.revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -4% 0px' })
    document.documentElement.classList.add('motion-enabled')
    this.observeRevealItems()
  },
  watch: {
    selectedProjectFilter() { this.$nextTick(this.observeRevealItems) },
    showAllProjects() { this.$nextTick(this.observeRevealItems) }
  },
  methods: {
    observeRevealItems() {
      if (!this.revealObserver) return
      document.querySelectorAll('#app [data-reveal]:not(.is-visible)').forEach((item, index) => {
        item.style.setProperty('--reveal-index', index % 4)
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
  <div class="executive-portfolio">
    <div class="expertise-band" aria-label="Áreas de experiencia">
      <div class="page-width expertise-band-inner">
        <span>DIRECCIÓN DIGITAL</span><i aria-hidden="true">✦</i>
        <span>DESARROLLO WEB</span><i aria-hidden="true">✦</i>
        <span>DISEÑO DE EXPERIENCIAS</span>
      </div>
    </div>

    <section class="portfolio-section about-section" id="about">
      <div class="page-width about-grid">
        <div class="section-lead" data-reveal>
          <span class="section-kicker">01 / SOBRE MÍ</span>
          <h2>Más que<br>escribir <em>código.</em></h2>
          <p>Una mirada creativa y estratégica para transformar ideas en soluciones.</p>
        </div>
        <CardHorizontal />
      </div>
    </section>

    <section class="portfolio-section featured-section" id="featured">
      <div class="page-width">
        <div class="section-topline" data-reveal>
          <span class="section-kicker">02 / PROYECTOS & VISIÓN</span>
          <span class="section-side-note">TRABAJO CON INTENCIÓN</span>
        </div>
        <div class="featured-intro" data-reveal>
          <h2>Ideas que se<br>convierten en <em>realidad.</em></h2>
          <p>Además de desarrollar, participo en la construcción de productos y experiencias digitales desde su origen.</p>
        </div>
        <div class="featured-grid">
          <article class="featured-card featured-card--company" data-reveal>
            <div class="featured-art featured-art--company" aria-hidden="true">
              <div class="art-circle art-circle--one"></div><div class="art-circle art-circle--two"></div>
              <div class="art-company-mark">S<span>∕</span>W.</div>
              <div class="art-caption">ESTRATEGIA / DISEÑO / DESARROLLO</div>
            </div>
            <div class="featured-meta"><span>01 / EMPRENDIMIENTO</span><span>COFUNDADORA</span></div>
            <h3>SysifosWeb</h3>
            <p>Una empresa que construimos para ayudar a otras organizaciones a crecer con soluciones digitales pensadas para sus necesidades reales.</p>
            <a href="https://sysifosweb.cl" target="_blank" rel="noopener noreferrer" class="text-link">Conocer la empresa <span aria-hidden="true">↗</span></a>
          </article>
          <article class="featured-card featured-card--product" data-reveal>
            <div class="featured-art featured-art--product" aria-hidden="true">
              <div class="mini-window">
                <div class="mini-window-top"><span>◈</span><span>PLATAFORMA INTELIGENTE</span><span>•••</span></div>
                <div class="mini-window-content">
                  <div class="mini-window-sidebar"><i></i><i></i><i></i><i></i></div>
                  <div class="mini-window-chart"><strong>Una experiencia a tu medida.</strong><div class="mini-window-bars"><i></i><i></i><i></i><i></i><i></i></div><span>Información, conectada.</span></div>
                </div>
              </div>
            </div>
            <div class="featured-meta"><span>02 / DISEÑO DE PRODUCTO</span><span>PROTOTIPO</span></div>
            <h3>Gestión empresarial inteligente</h3>
            <p>Exploramos una plataforma modular que conecte la información y las herramientas que cada empresa necesita, sin sumar complejidad.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="portfolio-section approach-section" id="approach">
      <div class="page-width">
        <div class="section-topline" data-reveal><span class="section-kicker">03 / MI ENFOQUE</span><span class="section-side-note">CÓMO TRABAJO</span></div>
        <div class="approach-grid">
          <div class="approach-head" data-reveal><h2>Primero la visión.<br><em>Después la solución.</em></h2></div>
          <div class="approach-items">
            <div class="approach-item" data-reveal><span>01</span><div><h3>Entender</h3><p>Escuchar a las personas, observar procesos y descubrir lo que realmente importa.</p></div></div>
            <div class="approach-item" data-reveal><span>02</span><div><h3>Diseñar</h3><p>Crear experiencias claras, atractivas y coherentes con el propósito de cada proyecto.</p></div></div>
            <div class="approach-item" data-reveal><span>03</span><div><h3>Construir</h3><p>Llevar las ideas al código, cuidando los detalles y la experiencia de principio a fin.</p></div></div>
          </div>
        </div>
      </div>
    </section>

    <section class="portfolio-section archive-section" id="projects">
      <div class="page-width">
        <div class="section-topline" data-reveal><span class="section-kicker">04 / ARCHIVO DE PROYECTOS</span><span class="section-side-note">PRÁCTICA & APRENDIZAJE</span></div>
        <div class="archive-intro" data-reveal>
          <h2>El camino también<br>forma parte de la <em>historia.</em></h2>
          <p>Una selección de proyectos donde experimenté con herramientas, interfaces y desarrollo frontend.</p>
        </div>
        <div class="project-controls" data-reveal>
          <div class="project-filters" role="group" aria-label="Filtrar proyectos por tecnología">
            <button v-for="filter in projectFilters" :key="filter" type="button" class="project-filter" :class="{ 'is-active': selectedProjectFilter === filter }" :aria-pressed="selectedProjectFilter === filter" @click="selectedProjectFilter = filter">{{ filter }}</button>
          </div>
          <p class="project-count" aria-live="polite">{{ proyectosFiltrados.length }} proyectos</p>
        </div>
        <div class="project-grid">
          <Card v-for="proyecto in proyectosVisibles" :key="proyecto.nombre" :imgCard="proyecto.imgCard" :nombre="proyecto.nombre" :description="proyecto.description" :git="proyecto.git" :gitpage="proyecto.gitpage" data-reveal />
        </div>
        <div v-if="selectedProjectFilter === 'Todos' && proyectosFiltrados.length > 3" class="archive-more">
          <button class="button-outline" type="button" @click="showAllProjects = !showAllProjects">{{ showAllProjects ? 'Ver menos proyectos' : 'Explorar archivo completo' }} <span aria-hidden="true">{{ showAllProjects ? '↑' : '↗' }}</span></button>
        </div>
      </div>
    </section>

    <section class="portfolio-section skills-section" id="skills">
      <div class="page-width skill-layout">
        <div class="section-lead" data-reveal>
          <span class="section-kicker">05 / HERRAMIENTAS</span>
          <h2>La técnica al<br>servicio de <em>las ideas.</em></h2>
          <p>Mi experiencia combina desarrollo, diseño de interfaces y aprendizaje constante.</p>
          <div class="expertise-tags"><span>Vue</span><span>Nuxt</span><span>JavaScript</span><span>UX / UI</span><span>Producto digital</span></div>
        </div>
        <div class="skills-block" data-reveal>
          <h3>Herramientas de mi recorrido</h3>
          <ul class="skills-list"><Habilidades v-for="habilidad in habilidades" :key="habilidad.title" :imageSrc="habilidad.imageSrc" :title="habilidad.title" /></ul>
        </div>
      </div>
    </section>

    <section class="portfolio-section certificate-section" id="certificate">
      <div class="page-width">
        <div class="section-topline" data-reveal><span class="section-kicker">06 / APRENDIZAJE</span><span class="section-side-note">FORMACIÓN CONTINUA</span></div>
        <div class="certificate-intro" data-reveal>
          <h2>Siempre hay algo<br>nuevo por <em>descubrir.</em></h2>
          <p>Formación y certificaciones que acompañan mi desarrollo profesional.</p>
        </div>
        <div class="certificate-grid"><Certificados v-for="cer in certificado" :key="cer.nombre" :imageSrc="cer.imageSrc" :link="cer.link" :nombre="cer.nombre" data-reveal /></div>
      </div>
    </section>

    <section class="contact-section" id="contact">
      <div class="page-width contact-inner" data-reveal>
        <span class="section-kicker">07 / CONVERSEMOS</span>
        <h2>Las buenas ideas<br>comienzan con una <em>conversación.</em></h2>
        <p>¿Tienes un proyecto, una oportunidad de colaboración o una idea para explorar?</p>
        <Button />
        <span class="contact-signature">Hablemos de lo que podemos construir.</span>
      </div>
    </section>
    <Footer />
  </div>
</template>
