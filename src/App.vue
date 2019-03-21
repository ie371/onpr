<template>
  <div class="wrapper" id="app">
        <header class="main-header">
              <app-header></app-header>
        </header>          
        <div class="box">
            <router-view/>
        </div>  
 </div>
</template>
<script>
import AppHeader from './components/AppHeader.vue'
// import AppFooter from './components/AppFooter.vue'
export default {
  components:{
    AppHeader,
    // AppFooter,
  }
}
</script>


