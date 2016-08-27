<template>
  <div class="haru-switch">
    <!--<input type="checkbox" class="haru-switch-input" v-model="value">-->
    <div class="haru-switch-input" :class="checkedClass" @click="startSwitch">
      <div class="input-back"></div>
      <div class="input-front" v-el:btn></div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';

  const util = Vue.util;

  export default {
    name: 'vue-haru-switch',

    ready() {
      util.on(this.$els.btn, util.transitionEndEvent, () => {
        this._animating = false;
        this.$emit('change', this.value);
      }, false);
    },

    props: {
      value: Boolean
    },

    computed: {
      checkedClass() {
        return {
          checked: this.value
        };
      }
    },

    methods: {
      startSwitch() {
        if (!this._animating) {
          this._animating = true;
          this.value = !this.value;
        }
      }
    }
  };
</script>


<style lang="stylus">
  .haru-switch
    display: flex
    align-items: center

    .haru-switch-input
      box-sizing: border-box
      position: relative
      width: 52px
      height: 32px
      border: 1px solid #d9d9d9
      border-radius: 16px
      background-color: #d9d9d9


      .input-front,
      .input-back
        position: absolute
        top: 0
        left: 0
        transition: transform 0.3s
        border-radius: 15px

      .input-back
        width: 50px
        height: 30px
        background-color: #fdfdfd

      .input-front
        width: 30px
        height: 30px
        background-color: #fff
        box-shadow: 0 1px 3px rgba(0, 0, 0, .4)

    .haru-switch-input.checked
      border-color: #04be02
      background-color: #04be02

      .input-front
        transform: translateX(20px)

      .input-back
        transform: scale(0)
</style>