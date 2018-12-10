<template>

<b-navbar toggleable="md" type="dark" variant="light">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="http://intelpribor.ru"><img width="220px" src="build/img/logo.svg"></b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav class="ml-auto">
      <b-nav-form>
        <b-button size="sm" class="my-2 my-sm-0" @click="exit">выход</b-button>
      </b-nav-form>
    </b-navbar-nav>
  </b-collapse>
</b-navbar>
</template>
<script>

    export default {
    methods: {
                exit () {  window.location ="app.php?exit=1"},
            }

    }
</script>
