<script>
import Navbar from './Navbar.vue';
import Button from './Button.vue';
import imgFondo from '../assets/img/web_developmen.svg'
export default {
    components:{
        Navbar,
        Button
    },
    data(){
        return{
            imgFondo
        }
    }
}
</script>
<template>
<header id="inicio">
    <Navbar />
    <div class="contenido">
        <div class="description-container">
            <h1>Karen Emilly Godoy Marín</h1>
            <h3>Desarrolladora FrontEnd</h3>
            <Button/>
        </div>
    </div>
</header>
</template>
<style scoped>
#inicio {
    width: 100%;
    height: auto; 
    position: relative;
}
.contenido {
    width: 100%;
    height: 430px;
    background-image: 
    linear-gradient(rgba(244, 241, 244, 0.5), rgba(244, 241, 244, 0.5)), 
    url('../assets/img/web_developmen.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: background-color 0.5s ease-in-out;
}
.description-container{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
h1,p{
    color: var(--vt-c-deep-blue);
}
h3{
    color: var(--vt-c-dark-purple);
}
</style>
