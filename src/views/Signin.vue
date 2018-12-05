<template>
<!-- <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Вход</v-toolbar-title>
   
              </v-toolbar>
              <v-card-text>
                    <v-alert
                    :value="error"
                    type="warning"
                    >
                    {{error}}
                    </v-alert>
                <v-form v-model="valid">

                  <v-text-field prepend-icon="person" name="email" label="e-mail" type="email" required 
                  v-model="email" :rules="emailRules"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Пароль" type="password" required 
                  v-model="password" :rules="passwordRules"></v-text-field>

                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click.prevent="signin" :disabled="processing || !valid">Вход</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container> -->
    
<div>
    <b-row class="justify-content-md-center">
        <b-col lg="5" >
              <h1>ВХОД</h1>
    <b-form @submit="sendIdentity" @reset="onReset" v-if="show">
      <b-form-group id="exampleInputGroup1"
                    label="Email address:"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="exampleInput1"
                      type="email"
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

      <!-- <b-form-group id="exampleGroup4">
        <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group> -->

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>


    <b-form-textarea id="textarea1"
                     v-model="text"
                     
                     :rows="3"
                     :max-rows="6">
                    
    </b-form-textarea>
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
                email: 'weeeee3@jj.qq',
                password: 's00pers3cret'
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
                this.$router.push("/project")
        }
    },
    methods:{

            sendIdentity: function() {
                let personForm = this.toFormData(this.auth);
                const options = {
                    method: 'POST',
                    headers: { 'content-type': 'application/form-data' },
                    data: personForm,
                    url: './pdf/project/test.php',
                };
                // console.log('personForm', personForm)
                axios(options)
                     .then((response)=> {
                        console.log('response', response)
                        console.log('response.data', response.data)
                        // console.log('this', this)
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

        //     onSubmit (evt) {

        //     evt.preventDefault();

        //     // alert(JSON.stringify(this.form));
        //    let jf = JSON.stringify(this.auth);
        //     // axios.defaults.headers.common['Authorization'] = resp.token
        //     // axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}` 
        //     // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        //     let tokenStr = 'xxyyzz'
        //     let config = {
        //           headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': `Bearer ${tokenStr}`
        //             }
        //     };
            
            
        //     axios.post('./pdf/project/test.php', {jf}, config)
        //                 .then((response)=> {
        //                     console.log('это ответ сервера',response)
        //                     console.log(response.config.xsrfCookieName)
        //                     this.text = response.data.email
        //                 })

        //             .catch(function (error) {
        //                 console.log(error);
        //             });
        //     },


            onReset (evt) {
            evt.preventDefault();
            /* Reset our form values */
            this.auth.email = '';
            this.auth.password = '';
            // this.form.food = null;
            // this.form.checked = [];
            /* Trick to reset/clear native browser form validation state */
            this.show = false;
            this.$nextTick(() => { this.show = true });
            }
    }
    
}
</script>