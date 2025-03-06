// src/store/projects.js
import cDesafio from '../assets/img/images.jpg';
import cInovacien from '../assets/img/cropped-favicon.png';
import TSanto from '../assets/img/santo-tomas-erp2-captura-video-06.jpg';
import cStanford from '../assets/img/logostanford.png';
import tdigital from '../assets/img/talento-digital2.png';
const state = () => ({
    certificados: [
    /** Lenguajes de marcado */
    { imageSrc: TSanto, link:'https://drive.google.com/file/d/12KIa1N5mUPQs8X0qDDSDk6yeL51mWfxU/view?usp=sharing', nombre:'TÍTULO INGENIERO EN INFORMÁTICA' },
    { imageSrc: cDesafio, link:'https://cursos.desafiolatam.com/certificates/iotsgfuybi', nombre: 'GIT/GITHUB' },
    { imageSrc: cDesafio, link:'https://cursos.desafiolatam.com/certificates/iotsgfuybi', nombre: 'CSS AVANZADO' },
    { imageSrc: cStanford, link:'https://codeinplace.stanford.edu/cip3/certificate/eds9e6', nombre: 'PROGRAMACIÓN EN PYTHON' },
    { imageSrc: cInovacien, link:'', nombre: 'BIG DATA' },
    { imageSrc: tdigital, link:'https://drive.google.com/file/d/185gWiSktMu7t1pfHp6OI72IXzvjXKM3X/view?usp=sharing', nombre:'DESARROLLO APLICACIONES FRONT- END TRAINEE'}

  ]
});

const getters = {
  getAllCertificados: (state) => state.certificados,
};

export default {
  namespaced: true,
  state,
  getters,
};
