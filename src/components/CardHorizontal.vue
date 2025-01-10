<script>
import miFoto from '../assets/img/MiFoto.jpeg'

export default {
  data() {
    return {
      miFoto
    }
  }
}
</script>

<template>
  <div class="card mb-3 custom-card">
    <div class="row g-0">
      <div class="col-md-6 d-flex flex-column justify-content-center align-items-center order-2 order-md-1">
        <div class="card-body text-center mx-md-5 pt-5">
          <p class="card-text">
            Soy Karen Godoy Marín, una persona apasionada por el diseño,
            el desarrollo y la creatividad. Mi enfoque está en hacer realidad ideas a través de la
            tecnología. Soy de La Serena, región de Coquimbo. Me dedico a varias áreas dentro de la
            tecnología y el diseño, y el desarrollo de aplicaciones web y en mis tiempos libres a la
            creación de amigurumis. Me encanta combinar mi creatividad con mis habilidades técnicas
            para ofrecer soluciones visuales y funcionales.
            Soy Ingeniera en Informática, lo que me ha permitido desarrollar una sólida
            comprensión de la programación, el diseño y la gestión de proyectos tecnológicos.
            He colaborado en el diseño y desarrollo de páginas web para mi empresa, donde he podido
            aplicar mis conocimientos en programación y diseño para crear sitios funcionales y atractivos.
            Aunque aún estoy en proceso de expandir mi experiencia profesional, tengo una gran disposición
            para aprender y seguir mejorando mis habilidades.
            Estoy abierta a colaborar en proyectos interesantes y seguir desarrollando mi carrera profesional.
          </p>
          <a class="btn btn-lg button" href="https://drive.google.com/file/d/1awDZj3CtZ-gV9U9Tux7rorsDFXySIksQ/view?usp=sharing" target="_blank">Descargar CV</a>
        </div>
      </div>
      <div class="col-md-6 d-flex justify-content-center align-items-center order-1 order-md-2">
        <img :src="miFoto" class="img-fluid " alt="Mi foto">
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-card {
  border: none; /* Elimina el borde de la tarjeta */
}

.card-body {
  padding: 30px; /* Espaciado interno más cómodo */
}

img {
  width: 80%;
  height: auto;
  max-width: 300px;
  border-radius: 50%;
  border: 4px solid var(--vt-c-light-purple);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card-text {
  font-size: 1.1rem;
  line-height: 1.2;
  color: var(--vt-c-deep-blue);
}

.button {
  background-color: var(--vt-c-soft-pink);
  color: var(--vt-c-deep-blue);
}

.button:hover {
  background-color: var(--vt-c-light-pink2); /* El color que deseas cuando el botón es hover */
  border: var(--vt-c-light-pink2); /* El color de borde cuando se pasa el ratón */
  cursor: pointer; /* Cambia el cursor para indicar que el botón es interactivo */
}

/* Media query para pantallas pequeñas */
/* Media query para pantallas pequeñas */
@media (max-width: 767px) {
  .card-body {
    padding: 20px; /* Reducir el padding en pantallas pequeñas */
    margin: 0;
  }

  .row {
    text-align: center;
  }

  img {
    width: 150px; /* Tamaño reducido de la imagen para móviles */
    height: 200px; /* Hacer la imagen cuadrada */
    margin-bottom: 5px; /* Separar la imagen del texto */
    border-radius: 10px; /* Menos redondeo para móviles */
  }

  .card-text {
    font-size: 1rem; /* Ajustar el tamaño de la fuente */
    line-height: 1.2;
  }

  .button {
    width: 100%; /* Botón más grande para móviles */
  }
}
</style>
