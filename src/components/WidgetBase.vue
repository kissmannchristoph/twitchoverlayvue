<template>
  <div class="base">
   <widget-ui></widgetUI>
   <div v-for="widget in getVisible()">
    <component v-bind:class="{'selectedWidget':selectedWidget == widget}" v-bind:is="widget.component" @click="clickWidget"/>
    <widget-box v-show="selectedWidget == widget" :widget="widget.component" @removeClick="removeClick(widget)" visible="true" ></widget-box>
  </div>
  </div>
</template>

<script>
import FortniteStats from "./FortniteStats.vue";
import widgetUI from "./widgetUI.vue"
import widgetBox from "./widgetBox.vue"
import manipulator from "../scripts.js/overlay.js";
export default {
  name: "HelloWorld",
  components: {widgetBox: widgetBox,widgetUI:widgetUI, FortniteStats: FortniteStats },
  props: {
    _style: String,
    msg: String,
  },
  data(){
      return {
          selectedWidget: null
      }
  },
  methods: {
      clickWidget(widget) {
          this.selectedWidget = widget
      },
    getVisible() {
      return manipulator.getVisible();
    },
    getList() {
      return this.components;
    },
    removeClick(widget){
       manipulator.disableWidget(widget)
    }
  },
  onUpdate() {
      widgetBox.updatePosition()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.selectedWidget{
    
}
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
