<template>
	<div id="app">
		<b-container>
			<b-row>
				<b-col>
					<h1 class="h1">Add your tasks</h1>
					<div class="row">
						<input v-if="names.length === 0" v-on:keyup.enter="clickAdd()" placeholder="Enter your first task" type="text" v-model="name">
						<input v-else placeholder="Enter your next task" type="text" v-model="name">
						<b-button id="add_button" class="btn-primary" @click="submitName()">Add</b-button>
						<b-button class="btn-danger" @click="clearList(names)">Clear all</b-button>
					</div>
					</b-col>
					<div class="col-9">
					<div class="list">
						<ol>
							<li v-for="personName of names" v-bind:key="personName['.key']"> {{ personName.name }} </li>
						</ol>
					</div>
					</div>
				
			</b-row>
		</b-container>
	</div>
</template>

<script>
	import {
		namesRef
	} from './firebase'
	

	export default {
		

	data() {
			return {
				name: ""
			}
	
		},
		firebase: {
			names: namesRef,
	
		},
	
		methods: {
			submitName() {
				namesRef.push({
					name: this.name,
					edit: false
				});
				this.name = ""; 
				return
			
			},
			clearList() {
				namesRef.remove();
				namesRef.remove();
				this.name = ""; 
			},
			
			clickAdd() {
				let elef = "#add_button";
				this.add.click()
				console.log(add)
			}
	
			////   Написать функцию очистки списка с подтверждением    //////
	
		}
	
	}
</script>

<style>


.list {
	margin-top: 50px;
}
.list ol {
	display: flex;
	flex-direction: column;
	font-weight: bold;
	
}

.list ol li {
	text-align: left;
	padding-left: 20px;
	text-transform: uppercase;
}

	#app {
		font-family: 'Helvetica', Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
	
	h1.h1 {
		margin-bottom: 50px;
	}
	
	.row {
		display: flex;
		justify-content: center;
	}
	

	
	input {
		background: #fff;
		width: 300px;
		display: flex;
		border-radius: 8px;
		border: none;
		box-shadow: none;
		height: 39px;
		width: 632px;
		border-radius: 24px;
		width: 630px;
		z-index: 3;
		height: 44px;
		align-items: center;
		display: flex;
		padding: 0 4px 0 16px;
		padding-left: 20px;
		margin-right: 20px;
		box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
		transition: box-shadow 0.3s;
		outline: none;
	}
	
	input:hover,
	button:hover {
		box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);
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
		margin-right: 10px;
		box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
		transition: all 0.3s ease
	}
</style>
