<template>
    <div class = "login-template">
        <div class = "login-modal signup-window">
            <div class = "header">
                <h4>Create an Account</h4>
            </div>
            <div class = "login-body">
                <div class = "button-group">
                    <p class = "title">Register with us to start buying and selling</p>
                    <div class = "separate"><em>Or</em></div>
                    <router-link to = "/" class = "btn btn-google btn-rounded" style = "margin-bottom: 10px">
                        login with google
                    </router-link>
                    <router-link to = "/" class = "btn btn-facebook btn-rounded">
                        login with facebook
                    </router-link>
                </div>
                <div class = "main-body">
                    <div class = "input-group">
                        <i class = "fa fa-user"></i>
                        <input type = "text" name = "name" placeholder="Username">
                    </div>
                    <div class = "input-group">
                        <i class = "fa fa-envelope"></i>
                        <input type = "text" name = "email" placeholder="Email">
                    </div>
                    <div class = "input-group">
                        <i class = "fa fa-lock"></i>
                        <input type = "password" name = "password" placeholder="Password">
                    </div>
                    <div class = "input-group">
                        <i class = "fa fa-lock"></i>
                        <input type = "password" name = "confirm_password" placeholder="Confirm Password">
                    </div>
                    <span>Must be at least 8 characters long</span>
                </div>

                <div class="terms-body">
                    <input type="checkbox" id="terms_condition">
                    <label for="terms_condition">By creating an account. I understand that I am agreeing to Apertr's <router-link to = "/terms_condition">Terms and Conditions.</router-link></label>
                </div>
                <div class = "button-group">
                    <router-link to = "/login" class = "btn btn-normal btn-rounded">Continue</router-link>
                    <span>Already have an account? Click here to <router-link to ="/login" >sign in.</router-link></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
  name: 'blank',
  data() {
    return {

    }
  },

  mounted() {
    $('body').addClass('blank');
    $('body').removeClass('account-footer');
    $('body').removeClass('no-footer');
    $('#app').removeClass('single-page');

  },
}
</script>
