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

<!-- <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100 p-t-50 p-b-90">
        <form class="login100-form validate-form flex-sb flex-w" style="<?php echo $v_show_form; ?>" action="/reg.php" method="post">

          <input type="hidden" name="create" value="create">
          <span class="login100-form-title p-b-51">
            Регистрация
          </span>

          
          <div class="wrap-input100 validate-input m-b-16">
            <input class="input100" type="text" name="fio" placeholder="ФИО (не менее 5 знаков)" value="<?php echo @$_POST['fio']; ?>" maxlength="150" required>
            <span class="focus-input100"></span>
          </div>
          
          
          <div class="wrap-input100 validate-input m-b-16">
            <input class="input100" type="email" name="email" placeholder="email (действующий e-mail в качестве логина)" value="<?php echo @$_POST['email']; ?>" maxlength="100" required>
            <span class="focus-input100"></span>
          </div>

          <div class="wrap-input100 validate-input m-b-16">
            <input class="input100" type="password" name="password" placeholder="пароль (не менее 5 и не более 15 знаков)" value="<?php echo @$_POST['password']; ?>" maxlength="15" required>
            <span class="focus-input100"></span>
          </div>

          <div class="wrap-input100 validate-input m-b-16">
            <input class="input100" type="text" id="phone" name="phone" placeholder="10 цифр в формате (903)123-4567" value="<?php echo @$_POST['phone']; ?>" maxlength="15" required>
            <span class="focus-input100"></span>
          </div>

          <div class="input-group ">          
          <div class="flex-sb-m w-full p-t-3 p-b-24">
          <div class="contact100-form-checkbox">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="clame" name="clame" required style="margin-left: -23px;" >
              <label class="custom-control-label" for="clame" style="font-size: 0.9em">Настоящим вы даете согласие на обработку персональных данных</label>
            </div>
          </div>
          </div>
          </div>
          
          <div class="input-group ">          
          <div class="flex-sb-m w-full p-t-3 p-b-24">
          <div class="contact100-form-checkbox">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="spam" name="spam" checked style="margin-left: -23px;" >
              <label class="custom-control-label" for="spam" style="font-size: 0.9em">Подписаться на новости</label>
            </div>
          </div>
          </div>
          </div>

          <div class="container-login100-form-btn m-t-17">
            <button class="login100-form-btn">
              Регистрация
            </button>
          </div>

        </form>

        <div class="m-t-17" style="text-align: center;">
          <a href="/index.php" class="txt1">Перейти на страницу авторизации</a>
        </div>


        <div class="m-t-17" style="text-align: center;">
          <a href="#" class="txt2" data-toggle="modal" data-target="#ModalLong">Соглашение на обработку персональных данных сайтом</a>
        </div>

      <div class="modal fade" id="ModalLong" tabindex="-1" role="dialog" aria-labelledby="ModalLongTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="ModalLongTitle">Соглашение на обработку персональных данных сайтом</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              
          <p>Пользователь (субъект персональных данных) дает свое согласие на обработку персональных данных ООО «Интелприбор», которому принадлежит сайт <b>intelpribor.ru</b> и которое расположено по адресу: Московская область, г. Жуковский, ул. Энергетическая, д. 15.

          <p>Регистрируясь на Сайте и/или заполняя Форму обратной связи (далее – «Форма»), пользователь:

          <li>подтверждает, что указанные им персональные данные принадлежат лично ему;</li>
          <li>признает и подтверждает, что он внимательно и в полном объеме ознакомился с настоящим Соглашением и содержащимися в нем условиями обработки его персональных данных, указываемых им в полях Формы на сайте;</li>
          <li>признает и подтверждает, что все положения настоящего Соглашения и условия обработки его персональных данных ему понятны;</li>
          <li>выражает согласие с условиями обработки персональных данных без каких-либо оговорок и ограничений.</li>

          <p>Пользователь дает свое согласие на обработку его персональных данных, а именно совершение действий, предусмотренных п. 3 ст. 3 Федерального закона от 27.07.2006 N 152-ФЗ "О персональных данных", и подтверждает, что, давая такое согласие, он действует свободно, своей волей и в своем интересе.

          <p>Настоящее согласие Пользователя применяется в отношении обработки следующих персональных данных:

          <li>фамилия, имя, отчество;</li>
          <li>номера телефонов;</li>
          <li>адресах электронной почты (E-mail).</li>

          <p>Согласие на обработку персональных данных предоставляется с момента регистрации на сайте и/или заполнения Формы и действительно бессрочно либо до его письменного отзыва.

          <p>Я СОГЛАСЕН на обработку и хранение моих персональных данных, указанных мною в Форме в соответствии с условиями настоящего согласия на обработку персональных данных. Одновременно даю свое согласие и не возражаю, чтобы Сайт или иные лица по его поручению отправляли сообщения, в том числе рекламного характера или иную информацию иного содержания на номер телефона или адрес электронной почты или с использованием иных средств связи, указанных мной в Форме или при регистрации на Сайте.</p>

          <a href="https://intelpribor.ru/upload/docs/privacy-policy.pdf" >Политика компании в отношении обработки персональных данных</a>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Закрыть</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</div> -->

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
                this.$router.push("/")
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