<template>
 <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <router-link class="navbar-brand" :to="{name:'MainPage'}">Tree Stack</router-link>
                <a class="navbar-brand menu-button" href="javascript:void(0)">
                    <img class="menu-button-img" src="../assets/menu-button-black.svg">
                </a>
            </div>
            <!-- <ul class="nav navbar-nav mobile-screen">
                <li class="active"><a href="javascript:void(0)">Home</a></li>
            </ul> -->
            <ul class="nav navbar-nav navbar-right mobile-screen">
                <li><router-link :to="{name:'Signup'}"><span class="glyphicon glyphicon-user"></span> Sign Up</router-link></li>
                <li><router-link :to="{name:'Login'}"><span class="glyphicon glyphicon-log-in"></span> Login</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'MainHeader'
}
</script>
<style scoped>

.menu-button {
            display: none;
        }

        @media screen and (max-width: 766px) {
            .menu-button {
                display: block;
                position: absolute;
                right: 0px;
                top: 50%;
                transform: translateY(-50%);
            }

            .menu-button-img {
                height: 20px;
            }

            .mobile-screen {
                display: none;
            }
        }

        .menu-active {
            display: block !important;
        }

        .menu-active-button {
            top: 13% !important;
        }
</style>
