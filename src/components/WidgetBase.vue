<template>
  <div class="base">
    <component v-bind:is="FortniteStats" />
  </div>
</template>

<script>
import FortniteStats from "./FortniteStats.vue";

import manipulator from "../scripts.js/overlay.js";
export default {
  name: "HelloWorld",
  components: { FortniteStats: FortniteStats },
  props: {
    _style: String,
    msg: String,
  },
  methods: {
    getVisible() {
      return manipulator.getVisible();
    },
    getList() {
      return this.components;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
