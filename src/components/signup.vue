<template>
  <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3 jumbotron">

                <div class="form-group">
                    <label for="first_name" class="first_name">First Name:</label>
                    <input type="text" class="form-control" v-validate="'required'" v-model="signup.first_name" id="first_name" placeholder="First Name" name="first_name">
                    <em class="text-danger">{{errors.first('first_name')}}</em>
                </div>

                <div class="form-group">
                    <label for="last_name" class="last_name">Last Name:</label>
                    <input type="text" class="form-control" id="last_name" v-validate="'required'" v-model="signup.last_name" placeholder="Last Name" name="last_name">
                    <em class="text-danger" >{{errors.first('last_name')}}</em>
                </div>

                <div class="form-group">
                    <label for="email" class="email">Email:</label>
                    <input type="text" v-validate="'required|email'" class="form-control" id="email" v-model="signup.email" placeholder="Enter email" name="email">
                   <em class="text-danger" >{{errors.first('email')}}</em>
                </div>
   
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter password" v-model="signup.password" v-validate="'required'" name="password">
                   <em class="text-danger">{{errors.first('password')}}</em>
                </div>
   
                <div class="login_button">
                    <button type="submit" class="form-control btn btn-primary" @click="signUp()">Sign Up</button>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Signup',
  data(){
      return{
          APP_BASE_URL:'http://localhost:3000',
          signup:{
              first_name:'',
              last_name:'',
              email:'',
              password:'',
          }
      }
  },
  methods:{

      signUp(){
                this.$validator.validateAll().then(result =>{

                   if(result){
                      
                      axios({
                        method: 'post',
                        url: this.APP_BASE_URL+'/register',
                        data:this.signup,
                        headers: { 
                        },
                        })
                        .then(function (response) {
                            console.log(response);
                        });

                    }

                }).catch(error=>{
                    console.log(error);
                })
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