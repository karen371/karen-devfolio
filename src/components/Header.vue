<script setup>
import Navbar from './Navbar.vue'
import miFoto from '../assets/img/MiFoto.jpeg'
</script>

<template>
  <header id="inicio" class="site-hero">
    <Navbar />
    <div class="hero-content page-width">
      <div class="hero-copy">
        <div class="hero-eyebrow hero-stagger">
          <span class="eyebrow-line" aria-hidden="true"></span>
          INGENIERÍA · DISEÑO · EMPRENDIMIENTO
        </div>
        <p class="hero-intro hero-stagger">Hola, soy <strong>Karen Godoy.</strong></p>
        <h1 class="hero-title hero-stagger">Tecnología<br>con <em>visión.</em><br>Diseño con<br>propósito<span class="hero-period">.</span></h1>
        <p class="hero-description hero-stagger">
          Ingeniera en Informática y cofundadora de <strong>SysifosWeb</strong>.
          Conecto estrategia, creatividad y desarrollo para construir experiencias digitales que tienen sentido.
        </p>
        <div class="hero-actions hero-stagger">
          <a href="#featured" class="button-primary">Explorar mi trabajo <span aria-hidden="true">↗</span></a>
          <a href="#about" class="text-link">Mi historia <span aria-hidden="true">↗</span></a>
        </div>
      </div>

      <figure class="hero-portrait">
        <div class="portrait-frame">
          <img :src="miFoto" alt="Retrato de Karen Godoy Marín" class="hero-photo" fetchpriority="high" />
        </div>
        <figcaption class="portrait-caption">
          <span>01 / 03</span>
          <span>PERSONAS · PRODUCTO · TECNOLOGÍA</span>
        </figcaption>
        <div class="portrait-monogram" aria-hidden="true">KG.</div>
      </figure>
    </div>
    <div class="hero-footer page-width">
      <span>LA SERENA, CHILE <span aria-hidden="true">·</span> TRABAJANDO DESDE CUALQUIER LUGAR</span>
      <a href="#about" aria-label="Desplazarse a sobre mí">SCROLL PARA DESCUBRIR <span aria-hidden="true">↓</span></a>
    </div>
  </header>
</template>
