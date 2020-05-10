<template>
    <div class = "blank get-paid-success">
        <img src = "../../assets/images/icons/icon-check.png"/>
        <h1>Payment Successful</h1>
        <p><router-link to = "/downloads"> Click here</router-link> to proceed to your downloads or <router-link to = "/checkout"> continue browsing.</router-link></p>
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
