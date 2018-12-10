<template>
    
<div>
    <b-container class="bv-example-row bv-example-row-flex-cols">

    <b-row class="justify-content-md-center" align-v="center">

        <b-col align-self="center" lg="5" >

              <h1>ВХОД</h1>

                <b-form action="./check.php" method="post" target="_self" >
                    
                <b-form-group id="exampleInputGroup1"
                                label="Email:"
                                label-for="exampleInput1"
                                description="">
                                <input type="hidden" name="authorize" value="authorize">


                    <b-form-input id="exampleInput1"
                                name="email"
                                type="text"
                                v-model="auth.email"
                                required
                                placeholder="e-mail в качестве логина">
                    </b-form-input>


                </b-form-group>

                <b-form-group id="exampleInputGroup2"
                                label="Пароль:"
                                label-for="exampleInput2">


                    <b-form-input id="exampleInput2"
                                name="password" 
                                type="password"
                                v-model="auth.password"
                                required
                                placeholder="Пароль">
                    </b-form-input>


                </b-form-group>

                <b-button type="submit" variant="primary">ВХОД</b-button>

                </b-form>


    </b-col>
    </b-row>
    </b-container>
  </div>

</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            auth: {
                email: '',
                password: ''
            },

            text:'',
            show: true
            }
    },
    computed:{
        error(){
            return this.$store.getters.getError
        },
        processing(){
            return this.$store.getters.getProcessing
        },
        isUserAuthenticated(){
            return this.$store.getters.isUserAuthenticated
        }
    },
    watch:{
        isUserAuthenticated(val){
            if(val === true)
                this.$router.push("/")
        }
    },
    methods:{

            sendIdentity: function() {
                let personForm = this.toFormData(this.auth);
                const options = {
                    method: 'POST',
                    headers: { 'content-type': 'application/form-data' },
                    data: personForm,
                    url: './check.php',
                };
                // console.log('personForm', personForm)
                axios(options)
                     .then((response)=> {
                        // console.log('response', response)
                        console.log('response.data', response.data)
                        this.$store.dispatch('STATE_CHANGED', response.data)
                        this.text = response.data
                    })
                    .catch(err => console.log(err));
            },

            toFormData: function(obj) {

                let formData = new FormData();
                for(let key in obj) {
                    formData.append(key, obj[key]);
                }
                //  console.log('formData', formData.getAll('key'));
                return formData;
            },


            signin(){
                this.$store.dispatch('SIGNIN',{email:this.form.email, password: this.form.password} )
            },

    }
    
}
</script>