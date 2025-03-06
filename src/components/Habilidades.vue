<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="skill-card">
    <img :src="imageSrc" :alt="title" class="skill-image" />
    <div class="overlay">
      <p class="skill-text ">{{ title }}</p>
    </div>
  </div>
</template>

<style scoped>
/* Contenedor principal */
.skill-card {
  position: relative;
  width: 120px; /* Hacer las tarjetas más pequeñas */
  height: 120px; /* Hacer las tarjetas más pequeñas */
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 8px var(--vt-c-light-purple);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  margin: 10px; /* Espacio entre tarjetas */
}

.skill-card:hover {
  transform: scale(1.1); /* Agrandar al hover */
  box-shadow: 0 8px 16px var(--vt-c-dark-purple);
}

/* Imagen de habilidad */
.skill-image {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Esto asegura que la imagen llene el contenedor sin distorsionarse */
  object-position: center;
  transition: transform 0.3s ease-in-out;
}

.skill-card:hover .skill-image {
  transform: scale(1.1); /* Efecto de zoom en la imagen al hacer hover */
}

/* Capa de superposición */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0; /* Oculto inicialmente */
  transition: opacity 0.3s ease-in-out;
  color: #fff;
}

.skill-card:hover .overlay {
  opacity: 1; /* Mostrar superposición al hover */
}

/* Texto */
.skill-text {
  font-size: 0.9rem; /* Reducir tamaño de texto */
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
}
</style>

