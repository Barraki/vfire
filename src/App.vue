<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col>
          <h1 class="h1">Task manager</h1>

          <div class="row">
            <input v-if="names.length === 0" name="task" v-on:keydown.enter="submitName()" placeholder="Enter your first task"
              type="text" v-model="name">
            <input v-else name="task" v-on:keydown.enter="submitName()" placeholder="Enter your next task" type="text"
              v-model="name">
            <b-button class="btn-primary" @click="submitName()">Add</b-button>
            <b-button class="btn-danger" @click="clearList(names)">Clear all</b-button>

          </div>
          <span class="errors" v-if="!this.submitForm">Please enter your task</span>
					<div> {{ debug }} </div>
        </b-col>
        <div class="col-12">
          <div class="task-list">
            <ul>
              <li v-for="personName of sortNames" v-bind:key="personName['.key']">
                <div v-if="!personName.edit">
                  <h2>{{ personName.name }} </h2>
                  <div class="date"> {{ date }} </div>
                  <b-btn class="btn-primary" @click="setEditPerson(personName['.key'])">Edit</b-btn>
                  <b-btn class="btn-danger" @click="removePerson(personName['.key'])">Remove</b-btn>
                </div>
								
                <div v-else>
                  <input class="edit_input" v-on:keydown.enter="saveEdit(personName)" v-model="personName.name" type="text">
                  <b-btn class="btn-primary" @click="saveEdit(personName)">Save</b-btn>
                  <b-btn class="btn-danger" @click="cancelEdit(personName['.key'])">Cancel</b-btn>
                </div>
              </li>
            </ul>
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

    components: {

    },


    data() {
      return {
        name: "",
        submitForm: true,
        date: "15 minutes ago",
				isModalVisible: false,
				debug: ''
      }
    },

    firebase: {
			names: namesRef,
			

		},

    computed: {
      sortNames() {
				return this.names.slice(0).reverse();
				
			},
			

    },

    methods: {

      submitName() {
        const submitForm = true
        if (!this.name) {
          this.errors = "ошибка";
          this.submitForm = false

        } else {

          this.submitForm = true
          namesRef.push({
            name: this.name,
            edit: false,
          });
          this.name = "";
          return

        }
      },
      removePerson(key) {
        namesRef.child(key).remove();

      },
      clearList() {
        namesRef.remove()
        namesRef.child()
        this.name = "";
        return

			},
			
						
			getDatePost(){
			
			
			},

      setEditPerson(key) {
        namesRef.child(key).update({
          edit: true
				})

				console.log(nowDate);
				
      },

      cancelEdit(key) {
        namesRef.child(key).update({
          edit: false
        })
      },

      saveEdit(person) {
        const key = person['.key']
        namesRef.child(key).set({
          name: person.name,
          edit: false
        })
			},

			
			
    }

  }
</script>

<style>

  @import url('https://fonts.googleapis.com/css?family=Pacifico');
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans');

  .task-list {
    margin-top: 25px;
    font-family: 'Fira Sans', sans-serif;
  }

  .task-list ul {
    display: flex;
    flex-direction: row;
    font-weight: bold;
    flex-wrap: wrap
  }

  .edit_input {
    width: 100%;
    box-shadow: none;
    border-radius: 0;
    display: flex;
    align-items: flex-end;
    border-bottom: 1px solid #1113;
    transition: 0.3s ease
  }

  .edit_input:hover,
  .edit_input:focus {
    box-shadow: none;
    border-bottom: 1px solid #111
  }


  .errors {
    font-family: 'Pacifico', cursive;
    color: red;
    display: block;
    height: 24px;
    margin-top: 20px;
    transition: 0.3s ease
  }


  .task-list ul li {
    text-align: left;
    width: 31%;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
    transition: box-shadow 0.3s;

  }

	.task-list ul li div {
		
	}

  .task-list ul li:hover {
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);

  }

  .task-list ul li .date {
    text-transform: none;
    font-weight: 300;

  }

  .task-list ul li button {
    margin-top: 50px;
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
    font-family: 'Pacifico', cursive;
    font-size: 4.5rem;
  }

  p {
    font-weight: normal;
    margin-top: 10px;
    margin-bottom: 20px;
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
    font-weight: bold;
    font-size: 1.6rem;
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

  button.btn-danger {
    cursor: pointer;
  }
</style>