<template>
    <div class = "login-template">
        <div class = "login-modal login-window">
            <div class = "header">
                <img src = "./../../assets/logo_for_home.png" class = "img-home"/>
            </div>
            <div class = "login-body" style = "padding-top: 15px;">
                <h1 class = "title">Forgot Password?</h1>
                <div class = "main-body">
                    <input type = "text" name = "username" placeholder="Enter your email Address">
                </div>

                <div class = "button-group">
                    <a href = "javascript:void(0)" class = "btn btn-normal btn-rounded" @click="sendMail()">Submit</a>
                    <label class = "confirm-label" style = "text-align:center; font-size: 14px;color: #666;padding-top: 10px; display: none;">Check your email</label>
                    <!-- <div class = "separate"><em>Or</em></div> -->
                    <!-- <button class = "btn btn-google" style = "margin-bottom: 10px">
                        <i class = "fa fa-google-plus"></i>
                        login with google
                    </button>
                    <button class = "btn btn-facebook">
                        <i class = "fa fa-facebook"></i>                       
                        login with facebook
                    </button> -->

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

  methods: {
        sendMail() {
            $('.confirm-label').css('display', 'block');
        }
  }
}
</script>
