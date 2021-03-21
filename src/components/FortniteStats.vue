<template>
  <div
    ref="draggableContainer"
    @mousedown="dragMouseDown"
    :style="fStyle"
    class="hello"
  >
    rrrrrr
  </div>
</template>

<script>
import Client from "fortnite";
import config from "../../config.js";
import dragMixin from "../mixins/DragMixin.js";
export default {
  name: "f",
  mixins: [dragMixin],
  data() {
    return {
      fStyle: "",
    };
  },
  props: {
    msg: String,
  },
  methods: {
    setStyle(s) {
      // Create an instance of the client with your API Key
      const fortnite = new Client(config.fortnite.API_KEY);

      // All methods
      fortnite.user("Boateng9889", "pc").then(console.log);
      fortnite.store().then(console.log);
      fortnite.challenges().then(console.log);
      //fortnite.printKills("API-Key", "solo", "pc", "Gisgar3");
      this.fStyle = s;
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
.hello {
  z-index: 100;
  position: absolute;
}
</style>