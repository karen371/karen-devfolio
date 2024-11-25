// src/store/index.js
import { createStore } from 'vuex';
import habilidades from './habilidades'
import projects from './proyectos';
import certificados from './certificaciones'

const store = createStore({
  modules: {
    habilidades,
    projects,
    certificados
  },
});

export default store;
