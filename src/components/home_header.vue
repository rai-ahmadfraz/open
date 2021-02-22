<template>
 <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <router-link class="navbar-brand" :to="{name:'Home'}">Tree Stack</router-link>
                <a class="navbar-brand menu-button" href="javascript:void(0)">
                    <img class="menu-button-img" src="../assets/menu-button-black.svg">
                </a>
            </div>
            <!-- <ul class="nav navbar-nav mobile-screen">
                <li class="active"><a href="javascript:void(0)">My Posts</a></li>
            </ul> -->
            <ul class="nav navbar-nav navbar-right mobile-screen">
                <li><router-link :to="{name:'Home'}">Home</router-link></li>
                <li><router-link :to="{name:'Home'}">My posts</router-link></li>
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)">User
                        <!-- <img src="http://localhost/pitch_images/avatars/30/Nhx01DM9QbFUuar4YodAKfFX3mnhbTOKPELv3adG.jpeg" alt="Avatar"> -->
                    <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                    <li><a href="javascript:void(0)">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'HomeHeader'
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
        .dropdown-toggle img{
            height: 40px;
            width: 40px;
            border-radius: 50%;
        }
</style>
