<template>
    <div class = "blank get-paid-success">
        <img src = "../../assets/images/icons/icon-check.png"/>
        <h1>Upload Successful</h1>
        <p><router-link to = "/account/manage_content"> Click here</router-link> to proceed to your content manager or <router-link to = "/upload"> continue browsing.</router-link></p>
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
