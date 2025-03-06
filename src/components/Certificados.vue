<script>
export default {
  props: {
    imageSrc: { type: String, required: true },
    link: { type: String, required: true },
    nombre: { type: String, required: true },
  },
};
</script>

<template>
  <a :href="link" target="_blank" class="text-decoration-none">
    <div class="card h-100 shadow-sm">
      <img
        :src="imageSrc"
        :alt="nombre"
        class="card-img-top img-fluid"
        style="object-fit: cover;"
      />
      <div class="overlay text-center">
        <h5 class="card-title">{{ nombre }}</h5>
      </div>
    </div>
  </a>
</template>

<style scoped>
.card {
  width: 100%;
  max-width: 250px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  object-position: center;
}

/* Capa de superposición */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0; /* Oculto inicialmente */
  transition: opacity 0.3s ease-in-out;
  color: #fff;
}

.card:hover .overlay {
  opacity: 1; /* Muestra la superposición cuando la card está en hover */
}
</style>
