<template>
  <div>
    <div class="toggle">toggle</div>
    <div class="widget_list">
      <div class="widget_item" @click="widgetClick">widget</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  computed: {
      manipulator() {
          return this.$store.getters.manipulator
      }
  }
  methods: {
    widgetClick(name) {},
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
.toggle {
}

.widget_list {
  position: absolute;
  width: 80px;
  display: flex;
  flex-flow: row;
}

.widget_item {
  height: 60px;
  width: 60px;
  margin: 0 auto;

  margin-bottom: 10px;
}
</style>
