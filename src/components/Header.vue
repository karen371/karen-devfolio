<script>
import Navbar from './Navbar.vue'
import miFoto from '../assets/img/MiFoto.jpeg'

export default {
  components: {
    Navbar
  },
  data() {
    return {
      miFoto
    }
  }
}
</script>

<template>
  <header id="inicio" class="site-hero">
    <Navbar />
    <div class="hero-content">
      <div class="hero-copy">
        <h1 class="hero-title">
          Desarrollo
          <br>
          <span>Frontend</span>
        </h1>
        <p class="hero-description">
          Soy Karen Godoy Marín, ingeniera en informática. Diseño y desarrollo experiencias web
          funcionales, cuidadas y pensadas para las personas.
        </p>
        <div class="hero-actions">
          <a class="button-primary" href="#projects">Ver mis proyectos</a>
          <a class="hero-secondary-link" href="#about">Conóceme</a>
        </div>
      </div>
      <div class="hero-photo-wrap">
        <img :src="miFoto" alt="Retrato de Karen Godoy Marín" class="hero-photo">
      </div>
    </div>
    <div class="hero-bottom">
      <span>Karen Emilly Godoy Marín</span>
      <a href="#about">Desliza para descubrir <span aria-hidden="true">↓</span></a>
    </div>
  </header>
</template>
