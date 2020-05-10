<template>
    <div class = "blank get-paid-failed">
        <h1>Error</h1>
        <p>Something happened with your upload. Please go back and try again.</p>
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
