<template>
    <div class = "blank get-paid-success">
        <img src = "../../../assets/images/icons/icon-check.png"/>
        <h1>Payment Successful</h1>
        <p>Your payment has been sent successfully. You will receive a confirmation email of this transacition. Please allow 3-5 business days for funds to appear in your account.</p>
        <router-link to = "/account/getpaid" class = "first">Return to Balance and Payment Details</router-link>
        <div class = "separate"><em>Or</em></div>
        <router-link to = "/" class = "link">Return Home</router-link>

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
    $(window).scrollTop(0);

  },
}
</script>
