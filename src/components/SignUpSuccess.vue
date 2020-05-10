<template>
    <div class = "blank get-paid-success sign-success">
        <img src = "../assets/images/icons/icon-check.png"/>
        <h1>Congratulations!</h1>
        <p>Your information has been successfully submitted to Apert.com. You should receive a confirmation link in your email within the next 5 to 10 minutes. Go ahead and log in to get started.</p>
        <p style = "margin-top:0px;">Go ahead and log in to get started</p>
        <router-link to = "/" class = "btn btn-normal btn-rounded">Log in</router-link>
        <router-link to = "/" class = "link">or go back to Home Page</router-link>

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
