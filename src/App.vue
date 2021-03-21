<template>
  <div id="app">
    <img @click="add" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld ref="helloworld" msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/WidgetBase.vue";
import overlay from "./scripts.js/overlay.js";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    add() {
      overlay.addComponent(this.$refs.helloworld);
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
