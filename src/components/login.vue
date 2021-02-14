<template>
  <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3 jumbotron">
                <div class="form-group">
                    <label for="email" class="email">Email:</label>
                    <input type="text" class="form-control" id="email" placeholder="Enter email" name="email">
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
                </div>
                <div class="login_button">
                    <button type="submit" class="form-control btn btn-primary">Login</button>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
export default {
  name: 'Login'
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