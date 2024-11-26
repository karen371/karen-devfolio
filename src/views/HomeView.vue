<script>
import CardHorizontal from '../components/CardHorizontal.vue';
import Habilidades from '@/components/Habilidades.vue';
import Card from '@/components/Card.vue';
import { mapGetters } from 'vuex';
import Certificados from '@/components/Certificados.vue';
import Footer from '@/components/Footer.vue';
import Button from '@/components/Button.vue';

export default {
  components: {
    CardHorizontal,
    Habilidades,
    Card,
    Certificados,
    Footer,
    Button
  },
  computed: {
    ...mapGetters('projects', ['getAllProyectos']), 
    ...mapGetters('habilidades',['getAllHabilidades']),
    ...mapGetters('certificados',['getAllCertificados']),
    habilidades() {
      return this.getAllHabilidades;
    },
    proyectos() {
      return this.getAllProyectos;
    },
    certificado(){
      return this.getAllCertificados;
    }
  },
};
</script>

<template>
  <!-- Acerca de mí -->
  <section class="acerca-de-mi d-flex flex-column justify-content-center pb-3" id="about">
    <div class="container text-center mb-4 mt-4">
      <h2 class="display-4">Acerca de mí</h2>
    </div>
    <div class="container d-flex justify-content-center">
      <CardHorizontal />
    </div>
  </section >
  <!--Proyectos-->
  <section class="contenedor__proyectos pb-4" id="projects">
    <div>
      <div class="container text-center mb-4 mt-4">
        <h2 class="display-4">Mis Proyectos</h2>
        <p class="lead">Aquí puedes ver algunos de los proyectos en los que he trabajado</p>
      </div>
      <div class="proyectos__container d-flex flex-wrap justify-content-center">
        <Card
        v-for="(proyecto, index) in proyectos"
        :key="index"
        :imgCard="proyecto.imgCard"
        :nombre="proyecto.nombre"
        :description="proyecto.description"
        :git="proyecto.git"
        :gitpage="proyecto.gitpage"
      />
      </div>   
    </div>
  </section>
  <!-- Habilidades -->
  <section class="contenedor__habilidades pb-3" id="skills">
    <div>
      <div class="container text-center mb-4 mt-4">
        <h2 class="display-4">Mis Habilidades</h2>
        <p class="lead">Descubre algunas de las herramientas y tecnologías en las que tengo experiencia y que uso para construir soluciones efectivas.</p>
      </div>
      <div class="habilidades-container d-flex flex-wrap justify-content-center">
        <Habilidades 
        v-for="(habilidad, index) in habilidades" 
        :key="index" 
        :imageSrc="habilidad.imageSrc" 
        :title="habilidad.title" 
        class="m-3 text-center"
      />
      </div>
    </div>
  </section>
  <!--Certificaciones-->
  <section class="contenedor__certificaciones pb-5 pt-5" id="certificate">
    <div class="container">
      <div class="text-center mb-4">
        <h2 class="display-4">Mis Certificados</h2>
        <p class="lead">Aquí encontrarás una selección de mis certificaciones más relevantes, que abarcan diversas tecnologías y herramientas que me han permitido crecer como desarrollador y profesional en el campo del desarrollo de software.</p>
      </div>
      <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3 justify-content-center">
        <Certificados 
          v-for="(cer, index) in certificado" 
          :key="index" 
          :imageSrc="cer.imageSrc" 
          :link="cer.link"
          :nombre="cer.nombre" 
        />
      </div>      
    </div>
  </section>
  <section class="pb-5 pt-5" id="contact">
    <div id="contacto" class="contacto-seccion pb-5">
      <div class="text-center mb-4">
        <h2 class="display-4">Contacto</h2>
        <p class="lead">Si tienes alguna consulta o necesitas más información, ¡contáctame directamente por WhatsApp!</p>
      </div>
      <div class="d-flex justify-content-center">
        <Button/>
      </div>
    </div>
  </section>
  <Footer/>
  
</template>

<style scoped>

.contenedor__proyectos, .contenedor__certificaciones{
  background-color: var(--vt-c-light-pink);
  height: auto;
}
.proyectos__container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
}
/* Estilos adicionales */
.card-container {
  max-width: 900px; 
  width: 100%; 
}

.acerca-de-mi {
  width: 100%;
  height: auto;
}
.habilidades-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.contenedor__certificaciones {
  background-color: var(--vt-c-light-pink); /* Color de fondo */
  padding: 2rem 0;
}

.row {
  --bs-gutter-x: 1.5rem; /* Espaciado entre columnas */
}

.card {
  border-radius: 10px;
  height: 100%;
  text-align: center;
}

.card-img-top {
  object-fit: cover; /* Asegura que las imágenes se adapten sin deformarse */
  height: 200px; /* Altura uniforme */
}

.card-title {
  font-size: 1.2rem;
  font-weight: bold;
}
@media (max-width: 767px) {
  .acerca-de-mi {
    padding-top: 30px; 
  }
  .contenedor__certificaciones {
    padding: 1rem;
  }
  .card-img-top {
    height: 150px; /* Ajusta altura para pantallas pequeñas */
  }
}
</style>
