<template>
    <div class = "browse account-management">
        <AccountHeader/>
        <div class = "main-content">
            <div class = "row">
                <div class="col-md-2 mb-3">
                    <AccountSidebar/>
                </div>
                <div class = "col-md-10" >

                    <div class = "account-inner-content get-paid-content sub-links-content">
                        <div class = "row title">
                            <h2>Balance and Payment Details</h2>
                            <p>Here you can manage the money you earn.</p>
                        </div>
                        <p class = "current-balance">
                            Current Balance: $42.50
                        </p>
                        <div class = "row body">
                            <div class = "col-12" style = "padding:0px;">
                                <div class = "fluid">
                                    <router-link to = "/account/getpaid">Get Paid
                                        <i class = "fa fa-caret-right"></i>
                                    </router-link>
                                    
                                </div> 
                                <div class = "fluid">
                                    <router-link to = "/account/getpaid/history">View Payment History
                                        <i class = "fa fa-caret-right"></i>
                                    </router-link>
                                </div> 

                                <div class = "fluid">
                                    <router-link to = "/account/getpaid/manage">Manage Payment Account
                                    <i class = "fa fa-caret-right"></i>
                                    </router-link>
                                </div> 
                                <div class = "fluid-back-to-menu">
                                    <router-link to = "/account">Reture to Account Management</router-link>
                                </div>
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
    $('body').addClass('internal');
    $('body').addClass('account-footer');
    $('body').removeClass('no-footer');
    $('body').removeClass('blank');
    $('#app').removeClass('single-page');

  },
}
</script>
