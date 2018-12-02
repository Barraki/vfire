<template>
  <div id="app">
    <div>
			<label>Name:</label>
			<input type="text" v-model="name">
			<button @click="submitName()">Add</button>
		</div>
  </div>
</template>

<script>
import { namesRef } from './firebase'
console.log( namesRef )

export default {
  data () {
    return {
      name: 'Paul'
    }
	},
	methods: {
		submitName() {
			namesRef.push({ name: this.name, edit: false});
		},
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
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

button {
	background-color: transparent;
	border: 2px solid black;
}
</style>
