<template>
    <div class = "blank get-paid-success">
        <h1>You have been signed out</h1>
        <p>You can return to the <a href = "/">Home Page</a> or <router-link to = "/login">Sign In</router-link> again.</p>
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
