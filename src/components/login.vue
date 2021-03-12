<template>
  <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3 jumbotron">
                <div class="form-group">
                    <label for="email" class="email">Email:</label>
                    <input type="text" class="form-control" id="email" tabindex="1" v-model="login.email" v-validate="'required'" placeholder="Enter email" name="email">
                    <em class="text-danger">{{errors.first('email')}}</em>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" class="form-control" tabindex="2" @keyup.enter="Login()"  v-model="login.password" v-validate="'required'" id="password" placeholder="Enter password" name="password">
                     <em class="text-danger">{{errors.first('password')}}</em>
                </div>
                <div class="login_button">
                    <button type="submit" class="form-control btn btn-primary" @click="Login()">Login</button>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Login',
  data(){
      return{
        APP_BASE_URL:'http://localhost:3000',
         login:{
             email:'',
             password:''
         }
      }
  },
  methods:{
            Login(){
                this.$validator.validateAll().then(result =>{
                    var formdata = new FormData();
                    formdata.append('email',this.login.email);
                    formdata.append('password',this.login.password);
                   if(result){
                      axios({
                        method: 'post',
                        url: this.APP_BASE_URL+'/login',
                        data:formdata,
                        headers: { 
                            'Accept': 'application/json',
                             'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        },
                        })
                        .then(response => {
                            this.$toasted.show(response.data.message);
                            this.$store.commit('addLoginUser',response.data.loginUser);
                            this.$router.push({name:'Home'});
                            
                            });

                    }

                }).catch(error=>{
                    console.log(error);
                });
            }

  }
}
</script>

<style scoped>
        .form-control {
            height: 42px;
        }

        .form-group {
            padding: 5px;
        }

        .login_button {
            display: flex;
            justify-content: center;
        }

        .btn-primary {
            width: 25%;
        }

        .navbar-default .navbar-nav>li>a {
            font-size: 16px;
        }
</style>