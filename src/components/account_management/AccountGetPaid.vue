<template>
    <div class = "browse account-management">
        <AccountHeader/>
        <div class = "main-content">
            <div class = "row">
                <div class="col-md-2 mb-3">
                    <AccountSidebar/>
                </div>
                <div class = "col-md-10" >
                    <p class = "current-balance">
                        Current Balance: $42.50
                    </p>
                    <div class = "account-inner-content get-paid-content">
                        <div class = "row title">
                            <h2>Get Paid!</h2>
                            <p>Withdraw money to be deposited directly into your bank account.</p>
                        </div>
                        <div class = "row body">
                            <div class = "col-12">
                                <div class = "fluid" style="margin-bottom: 5px;">
                                    <p style = "margin-bottom: 10px;">How much would you like to send to your bank?</p>
                                </div>
                                <div class = "fluid">
                                    <input type = "text" class = "current-balance" value = "$42.50" name = "current-balance">
                                </div>
                                <div class = "fluid">
                                    <p>Confirm the account info below:</p>
                                    <p class = "property-value name">Kodi Bobo</p>
                                    <p class = "property-value">Bank Account Ending in 123</p>
                                    <p class = "property-value"><router-link to="/account/getpaid/manage">Manage</router-link></p>
                                    <p><router-link to = "/account/getpaid/success" class = "btn btn-normal btn-rounded">Submit</router-link></p>
                                </div>
                            </div>
                            <div class = "fluid align-center button-group">
                                <router-link class = "toBackAccountMenu" to = "/account/getpaid/sublinks">Return to Balance and Payment Details</router-link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
  
<script>
import AccountHeader from "./AccountHeader";
import AccountSidebar from "./AccountSideBar";

export default {
  name: 'browse-photo',
  data() {
    return {

    }
  },
  components : {
      AccountHeader,
      AccountSidebar
  },
  mounted() {
    $(window).scrollTop(0);
    $('a.dropdown-toggle').addClass('click');
    $('body').addClass('internal');
    $('body').addClass('account-footer');
    $('body').removeClass('no-footer');
    $('body').removeClass('blank');
    $('#app').removeClass('single-page');



  },
}
</script>
