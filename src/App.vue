<template>

  <div id="app">
    <div class="top">
      <img src="./assets/kolibri-logo.svg" width="20%">
      <h1>Audit of nomenclature<br>in the Kolibri ecosystem</h1>
      <p>
        Please add any terms that have a special meaning in the context of Kolibri.
      </p>
      <p>
        The goal here is to audit all the technical language that we currently expose
        to our users in Kolibri, Kolibri Studio, training materials, documentation,
        and PR materials. After auditing all the technical terms we use, it will be
        easier to cull the list and create a glossary and usage guide.
      </p>
    </div>

    <div class="wrapper pure-g">
      <section class="pure-u-1-2">
        <h2>Add new term</h2>
        <form class="pure-form" @submit.prevent="add">
          <div>
            <input type="text" v-model="newName" @keyup.esc="newName = ''" autofocus></input>
            <button type="submit" class="pure-button" :disabled="!canSubmit">Add</button>
          </div>
          <p class="validation" v-if="duplicate">(already added)</p>
        </form>
      </section>
      <section class="pure-u-1-2">
        <h2>Added terms</h2>
        <div>
          <ul>
            <li v-for="termObj, index in visibleList" :key="termObj['.key']">
              <span>{{ termObj['.value'] }}</span>
              <a @click.prevent="remove(termObj['.key'])" href="#" title="Remove">✖</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>

</template>


<script>

  import Firebase from 'firebase'
  const config = {
    apiKey: "AIzaSyA4VpWZgF80vNX-xOZj6exp5Bo8551SGNI",
    authDomain: "kolibri-terms.firebaseapp.com",
    databaseURL: "https://kolibri-terms.firebaseio.com",
    projectId: "kolibri-terms",
    storageBucket: "kolibri-terms.appspot.com",
    messagingSenderId: "1068652692071"
  };

  let app = Firebase.initializeApp(config)
  let db = app.database()
  let termsRef = db.ref('kolibri-terms')

  import sortBy from 'lodash/sortBy'
  import find from 'lodash/find'

  export default {
    name: 'app',
    data () {
      return {
        newName: ''
      }
    },
    computed: {
      visibleList() {
        return sortBy(this.terms, o => o['.value'])
      },
      duplicate() {
        return find(this.terms, o => o['.value'] === this.cleaned)
      },
      canSubmit() {
        return this.newName !== '' && !this.duplicate
      },
      cleaned() {
        return this.newName.toLowerCase().trim()
      }
    },
    methods: {
      add() {
        termsRef.push(this.cleaned)
        this.newName = ''
      },
      remove(key) {
        termsRef.child(key).remove()
      }
    },
    firebase: {
      terms: termsRef
    },
  }

</script>

<style>

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 30px;
    text-align: center;
    margin: auto;
    margin-top: 36px;
    margin-bottom: 36px;
    max-width: 600px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  a {
    color: #42b983;
  }

  @keyframes highlight {
    0% {
      background: #DECCE4;
    }
    100% {
      background: none;
    }
  }

  li {
    animation: highlight 1s;
    position: relative;
    border-radius: 8px;
  }

  li a {
    text-decoration: none;
    visibility: hidden;
    padding: 8px;
    color: #cc3232;
    position: absolute;
    right: 0;
    top: -8px;
  }

  li:hover {
    background-color: #EEE;
  }

  li:hover a {
    text-decoration: none;
    visibility: visible;
  }

  .validation {
    color: #cc3232;
    font-size: smaller;
  }

</style>
