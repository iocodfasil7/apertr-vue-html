<template>
    <div class = "blank get-paid-failed">
        <h1>Oops!</h1>
        <p>Something went wrong. Please go back and try again. If you continue to have issues, feel free to <router-link to = "/"> contact us </router-link> to work it out.</p>
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
    $(window).scrollTop(0);

  },
}
</script>
