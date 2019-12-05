import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import header from './modules/header';
import content from './modules/content';
import footer from './modules/footer';

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [(createPersistedState())],
    modules: {
        header,
        content,
        footer
    }
})
