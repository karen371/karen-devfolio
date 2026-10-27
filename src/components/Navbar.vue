<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
const closeMenu = () => { menuOpen.value = false }
</script>

<template>
  <nav class="site-nav page-width" aria-label="Navegación principal">
    <a class="nav-brand" href="#inicio" @click="closeMenu" aria-label="Karen Godoy, volver al inicio">
      KAREN<span class="brand-dot">.</span> <strong>GODOY</strong>
    </a>
    <div class="nav-middle">PORTAFOLIO / 2026</div>
    <button
      class="nav-toggle" type="button" :aria-expanded="menuOpen"
      aria-controls="primary-navigation"
      :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'"
      @click="menuOpen = !menuOpen"
    >
      <span></span><span></span>
    </button>
    <ul id="primary-navigation" class="nav-links" :class="{ 'is-open': menuOpen }">
      <li><a href="#about" @click="closeMenu">Sobre mí</a></li>
      <li><a href="#featured" @click="closeMenu">Mi trabajo</a></li>
      <li><a href="#skills" @click="closeMenu">Experiencia</a></li>
      <li><a class="nav-contact" href="#contact" @click="closeMenu">Conversemos <span aria-hidden="true">↗</span></a></li>
    </ul>
  </nav>
</template>
