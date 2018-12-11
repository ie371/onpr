<template>
<div>

<b-navbar toggleable="md" type="light" variant="light">
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <b-navbar-brand href="http://intelpribor.ru"><img width="220px" src="build/img/logo.svg"></b-navbar-brand>
  <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav class="ml-auto">
        <b-nav-item  v-for="(item,i) in menuItems"  :key="i" :to="item.route">
            {{item.title}}
        </b-nav-item >
        <b-nav-item  @click.prevent="signout" v-if="isUserAuthenticated">
           Выход
        </b-nav-item>
    </b-navbar-nav>
  </b-collapse>
</b-navbar>
</div>

</template>

<script>
export default {
    data(){
        return{
            drawer: false
        }
    },
    computed:{
        isUserAuthenticated(){
            return this.$store.getters.isUserAuthenticated
            // return true
        },
        menuItems(){
            return this.isUserAuthenticated
            ? 
            [
                {
                    title:'Проект',
                    route:'/'
                },
                {
                    title:'Профиль',
                    route:'/profile'
                }
            ] :
            [
                {
                    title:'Проект',
                    route:'/'
                },
                {
                    title:'Вход ',
                    route:'/signin'
                },
                {
                    title:'Регистрация',
                    route:'/signup'
                }
            ]
        }
    },
    methods:{
        signout(){
              window.location ="index.php?exit=1"
            // this.$store.dispatch('SIGNOUT')
            // this.$router.push("/")
        }
    }
}
</script>
