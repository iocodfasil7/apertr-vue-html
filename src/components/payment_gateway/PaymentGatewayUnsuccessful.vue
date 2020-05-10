<template>
    <div class = "blank get-paid-failed">
        <h1>Oops!</h1>
        <p>Your payment couldn't be proceed. Please go back and double check your information.</p>
        <router-link to = "/" class = "link">Try again</router-link>
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
