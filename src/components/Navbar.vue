<script>
import logoImg from '../assets/img/logo1.png'

export default {
  components: {},
  data() {
    return {
      logoImg
    }
  }
}
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="navbar">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img :src="logoImg" alt="Logo" class="logo">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#inicio" class="nav-link"  aria-current="page">Inicio</a>
          </li>
          <li class="nav-item">
            <a href="#about" class="nav-link">Acerca de mí</a>
          </li>
          <li class="nav-item">
            <a href="#projects" class="nav-link">Proyectos</a>
          </li>
          <li class="nav-item">
            <a href="#skills" class="nav-link">Habilidades</a>
          </li>
          <li class="nav-item">
            <a href="#certificate" class="nav-link">Certificaciones</a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link">Contacto</a>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
#navbar {
  background-color: var(--vt-c-light-pink);
}

.nav-link {
  color: var(--vt-c-deep-blue); /* Color predeterminado de los enlaces */
  font-weight: bold;
  transition: color 0.3s ease, text-decoration 0.3s ease; /* Transición suave para el color y subrayado */
}

.nav-link:hover {
  color: var(--vt-c-soft-blue); /* Color en el hover */
  text-decoration: underline; /* Subrayado al hacer hover */
}

.navbar-brand .logo {
  width: 100px;
}

.nav-item.active .nav-link {
  color: var(--vt-c-soft-blue); /* Color para el enlace activo */
}
</style>
