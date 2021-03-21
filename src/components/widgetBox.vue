<template>
  <div v-show="visible" :style="_style" class="box">
    <div class="item" @click="removeClick">
    delete
    </div>
  </div>
</template>

<script>
      
export default {
  name: 'HelloWorld',
  props: {
     removeClick: Function,
    widget:Object,
    visible: String
  },
  data() {
      return {
          _style: ""
      }
  },
  methods: {
      updatePosition() {
          let top = this.widget.style.top - 25;
          let left = this.widget.style.left;
      
          this._style = "top: " + top + "; left: " + left + ";"
      },
      setStyle(s) {

// Create an instance of the client with your API Key
const fortnite = new Client(config.fortnite.API_KEY);

// All methods
fortnite.user('Boateng9889', 'platform [pc, xbl, psn]').then(console.log);
fortnite.store().then(console.log);
fortnite.challenges().then(console.log);
fortnite.printKills("API-Key", "solo", "pc", "Gisgar3");
          this._style = s;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
    display: flex;
    width: 100px;
    height: 25px;
}
.item {
    height:25px;
    width:50px;
    text-align:center;
    line-height:25px;
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
.hello{
z-index:100;
position:absolute;
}
</style>