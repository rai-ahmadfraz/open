<template>
 <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand" href="javascript:void(0)">My Website Name</a>
                <a class="navbar-brand menu-button" href="javascript:void(0)">
                    <img class="menu-button-img" src="https://devpitchie.sixlogics.com/static/images/menu-button-black.svg">
                </a>
            </div>
            <!-- <ul class="nav navbar-nav mobile-screen">
                <li class="active"><a href="javascript:void(0)">Home</a></li>
            </ul> -->
            <ul class="nav navbar-nav navbar-right mobile-screen">
                <li><a href="javascript:void(0)"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                <li><a href="javascript:void(0)"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
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
