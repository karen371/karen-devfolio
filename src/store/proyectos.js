// src/store/projects.js
import coffeAgereImg from '../assets/img/coffe-agere.png';
import ricomidaImg from '../assets/img/ricomida.png';
import suricataImg from '../assets/img/suricata.png';
import suricataVImg from '../assets/img/suricata_vue.png';
import SuperImg from '../assets/img/hero.png';
import ViajesImg from '../assets/img/Viejes_chile.png';
import PokemonImg from '../assets/img/pokemon.png'
const state = () => ({
  proyectos: [
    { imgCard: coffeAgereImg, nombre: 'Coffee Agere',  description: [
      { icon: 'fa-brands fa-html5' },  { icon: 'fa-brands fa-css3-alt' },{ icon: 'fa-brands fa-sass', }],
      git:'https://github.com/karen371/coffee-Agrere', gitpage:'https://karen371.github.io/coffee-Agrere/' },
    { imgCard: ricomidaImg, nombre: 'Ricomida', description: [
      { icon: 'fa-brands fa-html5' }, { icon: 'fa-brands fa-css3-alt' }, { icon: 'fa-brands fa-js', }],
      git:'https://github.com/karen371/Ricomida', gitpage: 'https://karen371.github.io/Ricomida/' },
    { imgCard: suricataImg, nombre: 'Suricata', description: [
      { icon: 'fa-brands fa-html5' }, { icon: 'fa-brands fa-css3-alt' }], 
      git:'https://github.com/karen371/suricata_page', gitpage:'https://karen371.github.io/suricata_page/'},
    { imgCard: SuperImg, nombre: 'SuperHero', description: [
      { icon: 'fa-brands fa-html5' }, { icon: 'fa-brands fa-css3-alt' }, { icon: 'fa-brands fa-js', }],
      git:'https://github.com/karen371/superhero', gitpage: 'https://karen371.github.io/superhero/' },
    { imgCard: ViajesImg, nombre: 'Viajes chile', description: [
      { icon: 'fa-brands fa-html5' }, { icon: 'fa-brands fa-css3-alt' }, { icon: 'fa-brands fa-js', }, { icon: 'fa-brands fa-sass', }],git:'https://github.com/karen371/Viajes-chile-sass-bootstrap2', gitpage: 'https://karen371.github.io/Viajes-chile-sass-bootstrap2/' },
    { imgCard: suricataVImg, nombre: 'Suricata vue',description: [
      { icon: 'fa-brands fa-html5' },{ icon: 'fa-brands fa-css3-alt' },{ icon: 'fa-brands fa-js', },{ icon: 'fa-brands fa-vuejs', }],
      git:'https://github.com/karen371/suricata_vue_router', gitpage: 'https://karen371.github.io/suricata_vue_router/#/' },
    { imgCard: PokemonImg, nombre: 'Pokemon', description: [
      { icon: 'fa-brands fa-html5' }, { icon: 'fa-brands fa-css3-alt' }, { icon: 'fa-brands fa-js', },{ icon: 'fa-brands fa-vuejs', }],
      git:'https://github.com/karen371/Prueba-Desarrollo-de-interfaces', gitpage: 'https://karen371.github.io/Prueba-Desarrollo-de-interfaces/#/' },
  ],
});

const getters = {
  getAllProyectos: (state) => state.proyectos,
};

export default {
  namespaced: true,
  state,
  getters,
};
