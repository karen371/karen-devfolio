// src/store/projects.js
import HtmlImg from '../assets/img/html5-brands-solid.svg';
import CSsImg from '../assets/img/css3-alt-brands-solid.svg';
import JSImg from '../assets/img/js-brands-solid.svg';
import BoostImg from '../assets/img/bootstrap-brands-solid.svg';
import VueImg from '../assets/img/vuejs-brands-solid.svg';
import SaSsImg from '../assets/img/sass-brands-solid.svg'
import MySQLImg from '../assets/img/mysql-brands-solid.png'
import JvImg from '../assets/img/java-brands-solid.svg'
import PHPImg from '../assets/img/php-brands-solid.svg'
import PTImg from '../assets/img/python-brands-solid.svg'
import CImg from '../assets/img/c-brands-solid.png'
import CCImg from '../assets/img/c_-brands-solid.png'
import FirebaseImg from '../assets/img/firebase-brands-solid.png'
import SQLImg from '../assets/img/database-solid.svg'
const state = () => ({
  habilidades: [
    /** Lenguajes de marcado */
    { imageSrc: HtmlImg, title: 'HTML' },
    { imageSrc: CSsImg, title: 'CSS3' },
    { imageSrc: SaSsImg, title: 'Sass' },
  
    /** Frameworks y librerías */
    { imageSrc: VueImg, title: 'Vue' },
    { imageSrc: BoostImg, title: 'Bootstrap' },
  
    /** Bases de datos */
    { imageSrc: SQLImg, title: 'SQL' },
    { imageSrc: MySQLImg, title: 'MySQL' },
    { imageSrc: FirebaseImg, title: 'Firebase' },
  
    /** Lenguajes de programación */
    { imageSrc: JSImg, title: 'JavaScript' },
    { imageSrc: JvImg, title: 'Java' },
    { imageSrc: PHPImg, title: 'PHP' },
    { imageSrc: PTImg, title: 'Python' },
    { imageSrc: CImg, title: 'C' },
    { imageSrc: CCImg, title: 'C#' },
  ]
  
});

const getters = {
  getAllHabilidades: (state) => state.habilidades,
};

export default {
  namespaced: true,
  state,
  getters,
};
