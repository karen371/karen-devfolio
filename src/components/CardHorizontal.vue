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
            Soy Karen Godoy Marín, Ingeniera en Informática con pasión por el diseño,
            el desarrollo y la creatividad. Me especializo en el desarrollo de aplicaciones web
            y en la creación de amigurumis en mi tiempo libre. Mi enfoque es combinar creatividad 
            con habilidades técnicas para ofrecer soluciones visuales y funcionales. He colaborado 
            en el diseño y desarrollo de páginas web en mi empresa, y aunque sigo ampliando mi 
            experiencia, estoy siempre dispuesta a aprender y colaborar en proyectos interesantes.
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
