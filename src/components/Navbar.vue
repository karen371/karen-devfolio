<script>
export default {
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    closeMenu() {
      this.menuOpen = false
    }
  }
}
</script>

<template>
  <nav class="site-nav" aria-label="Navegación principal">
    <a class="nav-brand" href="#inicio" @click="closeMenu">
      KAREN <span>GODOY</span>
    </a>
    <button
      class="nav-toggle"
      type="button"
      :aria-expanded="menuOpen"
      aria-controls="primary-navigation"
      :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'"
      @click="menuOpen = !menuOpen"
    >
      <span></span>
      <span></span>
    </button>
    <ul id="primary-navigation" class="nav-links" :class="{ 'is-open': menuOpen }">
      <li><a href="#about" class="nav-link" @click="closeMenu">Sobre mí</a></li>
      <li><a href="#projects" class="nav-link" @click="closeMenu">Proyectos</a></li>
      <li><a href="#skills" class="nav-link" @click="closeMenu">Tecnologías</a></li>
      <li><a href="#certificate" class="nav-link" @click="closeMenu">Certificaciones</a></li>
      <li class="nav-mobile-only"><a href="#contact" class="nav-link" @click="closeMenu">Contacto</a></li>
    </ul>
    <a class="nav-contact" href="#contact">Contacto <span aria-hidden="true">↗</span></a>
  </nav>
</template>
