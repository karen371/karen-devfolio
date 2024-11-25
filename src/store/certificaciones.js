// src/store/projects.js
import cDesafio from '../assets/img/images.jpg';
import cInovacien from '../assets/img/cropped-favicon.png';
import TSanto from '../assets/img/logoSantoTomas.png';
import cStanford from '../assets/img/logostanford.png';
const state = () => ({
    certificados: [
    /** Lenguajes de marcado */
    { imageSrc: TSanto, link:'https://drive.google.com/file/d/12KIa1N5mUPQs8X0qDDSDk6yeL51mWfxU/view?usp=sharing', nombre:'Titulo Profecional'},
    { imageSrc: cDesafio, link:'https://cursos.desafiolatam.com/certificates/iotsgfuybi', nombre: 'Git/GitHub' },
    { imageSrc: cDesafio, link:'https://cursos.desafiolatam.com/certificates/iotsgfuybi', nombre: 'CSS Avanzado' },
    { imageSrc: cStanford, link:'https://codeinplace.stanford.edu/cip3/certificate/eds9e6', nombre: 'Python' },
    { imageSrc: cInovacien, link:'', nombre: 'Big data' },
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
