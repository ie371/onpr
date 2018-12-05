<template>
<!-- <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Регистрация</v-toolbar-title>
   
              </v-toolbar>
              <v-card-text>
                    <v-alert
                    :value="error"
                    type="warning"
                    >
                    {{error}}
                    </v-alert>
                <v-form v-model="valid">

                  <v-text-field prepend-icon="person" name="name" label="ФИО" type="text" required 
                  v-model="name"></v-text-field>   
                  <v-text-field prepend-icon="person" name="email" label="e-mail" type="email" required 
                  v-model="email" :rules="emailRules"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Пароль" type="password" required 
                  v-model="password" :rules="passwordRules"></v-text-field>
                  <v-text-field prepend-icon="phone" name="phone" label="телефон" type="text" mask="(###) ### ####" required v-model="phone"></v-text-field>


                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click.prevent="signup" :disabled="processing || !valid">Зарегистрироваться</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container> -->
    

<div>
    <b-row class="justify-content-md-center">
        <b-col lg="5" >
            <h1>РЕГИСТРАЦИЯ</h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="exampleInputGroup1"
                    label="Email address:"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Your Name:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Food:"
                    label-for="exampleInput3">
        <b-form-select id="exampleInput3"
                      :options="foods"
                      required
                      v-model="form.food">
        </b-form-select>
      </b-form-group>
      <b-form-group id="exampleGroup4">
        <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    </b-col>
    </b-row>
  </div>



</template>
<script>
export default {
    data(){
        return{
            name: null,
            email: null,
            password:null,
            phone:null,
            valid: false,
            // emailRules: [
            //     (v) => !!v || 'Пожалуйста введите е-майл',
            //     (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Неправильный е-майл'
            // ],
            // passwordRules: [
            //     (v) => !!v || 'Пожалуйста введите пароль',
            //     (v) => (v && v.length >=6) || 'Пароль слишком короткий - минимум 6 символов'
            // ]
            form: {
            email: '',
            name: '',
            food: null,
            checked: []
            },
            foods: [
                { text: 'Select One', value: null },
                'Carrots', 'Beans', 'Tomatoes', 'Corn'
            ],
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
            signup(){
                this.$store.dispatch('SIGNUP',{email:this.email, password: this.password} )
            },
            onSubmit (evt) {
            evt.preventDefault();
            alert(JSON.stringify(this.form));
            },
            
            onReset (evt) {
            evt.preventDefault();
            /* Reset our form values */
            this.form.email = '';
            this.form.name = '';
            this.form.food = null;
            this.form.checked = [];
            /* Trick to reset/clear native browser form validation state */
            this.show = false;
            this.$nextTick(() => { this.show = true });
            }


        },


    
    
}
</script>