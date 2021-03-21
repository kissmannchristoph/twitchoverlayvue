<template>
  <div id="app">
    <img @click="add" alt="Vue logo" src="./assets/logo.png" />
     </div>
</template>

<script>
//import h from "./components/WidgetBase.vue";
//import overlay from "./scripts.js/overlay.js";
export default {
  name: "App",
 // components: {
//    h,
//  },
  methods: {
    add() {
      //overlay.addComponent(this.$refs.helloworld);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
