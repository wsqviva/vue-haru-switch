import Vue from 'vue';
import HaruSwitch from '../src/HaruSwitch.vue';

new Vue({
  el: 'body',
  components: { 
    'vue-haru-switch': HaruSwitch
  },

  data: {
    checkValue: false
  },

  methods: {
    switchOnChange(newValue) {
      console.log(newValue);
    }
  }

});