<template>

  <div id="app">
    <div class="top">
      <img src="./assets/kolibri-logo.svg" width="20%">
      <h1>Possibly technical terms<br>in the Kolibri ecosystem</h1>
      <p>Please add any terms that might have a technical definition or meaning.</p>
      <p>These could be past or present, user-facing or internal.</p>
    </div>

    <div class="wrapper pure-g">
      <section class="pure-u-1-2">
        <h2>Add new term</h2>
        <form class="pure-form">
          <div>
            <input type="text"></input>
            <button type="submit" class="pure-button">Add</button>
          </div>
          <p class="validation">(already added)</p>
        </form>
      </section>
      <section class="pure-u-1-2">
        <h2>Added terms</h2>
        <div>
          <ul>
            <li>user <a href="#" title="Remove">✖</a></li>
            <li>learner <a href="#" title="Remove">✖</a></li>
            <li>admin <a href="#" title="Remove">✖</a></li>
            <li>coach <a href="#" title="Remove">✖</a></li>
            <li>device owner <a href="#" title="Remove">✖</a></li>
            <li>superuser <a href="#" title="Remove">✖</a></li>
            <li>facility <a href="#" title="Remove">✖</a></li>
            <li>resource <a href="#" title="Remove">✖</a></li>
            <li>content <a href="#" title="Remove">✖</a></li>
            <li>exercise <a href="#" title="Remove">✖</a></li>
          </ul>
        </div>
      </section>
    </div>
  </div>

</template>


<script>
export default {
  name: 'app',
  data () {
    return {}
  let app = Firebase.initializeApp(config)
  let db = app.database()
  let booksRef = db.ref('books')

  export default {
    name: 'app',
    data () {
      return {}
    }
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
    max-width: 600px;
  }

  .top {
    max-width:
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

  li {
    position: relative;
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

  /*li:hover {
    background-color: #EEE;
  }*/

  li:hover a {
    text-decoration: none;
    visibility: visible;
  }

  input {
  }

  .wrapper {
  }

  .validation {
    color: #cc3232;
    font-size: smaller;
  }

</style>
