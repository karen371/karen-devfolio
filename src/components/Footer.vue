<script>
import logoImg from '../assets/img/logo1.png'
export default {
    components:{
        
    },
    data(){
        return{
            logoImg
        }
    }
}   
</script>
<template>
    <footer class="py-4">
        <div class="container">
          <div class="row">
            <div class="col-md-4 text-left mb-3">
                <img :src="logoImg" alt="Logo" class="footer-logo mb-2">
            </div>
            <!-- Redes Sociales -->
            <div class="col-md-4 text-center mb-3">
              <h5>Redes Sociales</h5>
              <a href="https://www.linkedin.com/in/karen-emilly-godoy-marin-7b86b9248/" target="_blank" class="mx-2">
                <i class="fa-brands fa-linkedin fa-2x"></i>
              </a>
              <a href="https://github.com/karen371" target="_blank" class="mx-2">
                <i class="fa-brands fa-github fa-2x"></i>
              </a>
              <a href="https://www.instagram.com/k_emilly03/profilecard/?igsh=ZDdkbTRrNW9wMHd6" target="_blank" class="mx-2">
                <i class="fa-brands fa-instagram fa-2x"></i>
              </a>
            </div>
      
            <!-- Enlaces Rápidos -->
            <div class="col-md-4 text-center mb-3">
              <h5>Enlaces Rápidos</h5>
              <ul class="list-unstyled">
                <li><a href="#about" class="nav-link">Acerca de mí</a></li>
                <li><a href="#project" class="nav-link">Proyectos</a></li>
                <li><a href="#skills" class="nav-link">Habilidades</a></li>
                <li><a href="#certificate" class="nav-link">Certificados</a></li>
                <li><a href="#contact" class="nav-link">Contacto</a></li>
              </ul>
            </div>
          </div>
        </div>
                <!-- Copyright Centrado -->
        <div class="text-center mt-4">
           <span class="mb-0">© 2024 Karen <i class="fa-regular fa-heart"></i>. Todos los derechos reservados.</span> 
        </div>
      </footer>      
</template>
<style scoped>
footer {
    background-color: var(--vt-c-light-pink);
    color: var(--vt-c-deep-blue); /* Tono suave para el texto */
  }
  
  footer a {
    color: var(--vt-c-deep-blue); /* Color de los enlaces */
    transition: color 0.3s ease;
  }
  
  footer a:hover {
    color: #b4c6e7; /* Color al pasar el cursor */
  }
  
  footer .fa-2x {
    font-size: 1.5rem;
  }
  .footer-logo {
    width: 150px;
    height: auto;
  }
  
</style>