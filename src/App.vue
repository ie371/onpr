<template>
  <div class="wrapper" id="app">
<header class="main-header">
       <app-header></app-header>
</header>          
<div class="content-wrapper">
        <div class="box">
            <!-- <router-view/> -->
            <Project></Project>
        </div>  
  </div>
 </div>

</template>


<script>

import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import Project from './views/Project.vue'

export default {
  components:{
    AppHeader,
    AppFooter,
    Project
  }
  
}
</script>


