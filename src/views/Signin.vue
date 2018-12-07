<template>
    
<div>
    <b-row class="justify-content-md-center">
        <b-col lg="5" >
              <h1>ВХОД</h1>
    <b-form @submit="sendIdentity" v-if="show">
        
      <b-form-group id="exampleInputGroup1"
                    label="Email:"
                    label-for="exampleInput1"
                    description="">
        <b-form-input id="exampleInput1"
                    
                      type="text"
                      v-model="auth.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="password:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      
                      type="password"
                      v-model="auth.password"
                      required
                      placeholder="Enter password">
        </b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>

    </b-form>


    <!-- <b-form-textarea id="textarea1"
                     v-model="text"
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea> -->
    <!-- <pre class="mt-3">{{ text }}</pre> -->

    </b-col>
    </b-row>
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
                    url: '../auth/check.php',
                };
                // console.log('personForm', personForm)
                axios(options)
                     .then((response)=> {
                        // console.log('response', response)
                        // console.log('response.data', response.data)
                        this.$store.dispatch('STATE_CHANGED', response.data)
                        this.text = response.data
                    })
                    .catch(err => console.log(err));
            },

            toFormData: function(obj) {

                // console.log('obj', obj)

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