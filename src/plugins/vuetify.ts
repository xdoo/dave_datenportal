import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const theme = {
  themes: {
    light: {
      primary: '#1e88e5',
      secondary: '#689f38',
      accent: '#7BA4D9',
      success: '#69BE28',
      error: '#FF0000',
    },
  }
};

export default new Vuetify({
  theme: theme
});