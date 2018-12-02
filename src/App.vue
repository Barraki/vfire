<template>
	<div id="app">
		<h1 class="h1">Add your tasks</h1>
		<div>
			<label>Name:</label>
			<input type="text" v-model="name">
			<button @click="submitName()" key="enter">Add</button>
			<button @click="clearList(names)">Clear all</button>
		</div>
		<div>
			<ul>
				<li v-for="personName of names" v-bind:key="personName['.key']"> {{ personName.name }} </li>
			</ul>
		</div>
	</div>
</template>

<script>
	import {
		namesRef
	} from './firebase'
	console.log(namesRef)
	
	export default {
		data() {
			return {
				name: 'Paul'
			}
		},
		firebase: {
			names: namesRef
		},
		methods: {
			submitName() {
				namesRef.push({
					name: this.name,
					edit: false
				});
			},
			clearList() {
				namesRef.remove();
				namesRef.remove()
				console.log(namesRef)
			},
	
			////   Написать функцию очистки списка с подтверждением    //////
	
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
	
	h1.h1 {
		margin-bottom: 50px;
	}
	
	input {
		background: #fff;
		display: flex;
		border-radius: 8px;
		border: 1px solid #dfe1e5;
		box-shadow: none;
		height: 39px;
		width: 632px;
		border-radius: 24px;
		width: 630px;
		z-index: 3;
		height: 44px;
		margin: 0 auto;
		align-items: center;
		flex: 1;
		display: flex;
		padding: 0 4px 0 16px;
		padding-left: 20px;
	}
	
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		margin: 10px 10px;
	}
	
	a {
		color: #42b983;
	}
	
	button {
		background-color: transparent;
		border: 2px solid black;
	}
</style>
