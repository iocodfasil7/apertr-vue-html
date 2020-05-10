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

                    <div class = "account-inner-content get-paid-manage-add-content">
                        <div class = "row title">
                            <h2>Manage Payment Account</h2>
                            <p>Here you decide where you want your money to go.</p>
                        </div>
                        <div class = "row body">
                            <div class = "col-lg-7 col-md-12">
                                <div class = "fluid">
                                    <p class = "input-bar-header">Account Holder</p>
                                    <input type = "text" name = "first_name" id = "first_name" placeholder="First Name">
                                    <input type = "text" name = "last_name" id = "last_name" placeholder="Last Name">
                                </div>
                                <div class = "fluid">
                                    <p class = "input-bar-header">Bank Information</p>
                                    <input type = "text" name = "account_number" id = "account_number" placeholder="Account Number">
                                    <input type = "text" name = "routing_number" id = "routing_number" placeholder="Routing Number">
                                </div>
                                <div class = "fluid align-center">
                                    <button class = "btn btn-normal btn-rounded">Save</button>
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
import AccountHeader from "../AccountHeader";
import AccountSidebar from "../AccountSideBar";

export default {
  name: 'account-get-paid-manage',
  data() {
    return {

    }
  },
  components : {
      AccountHeader,
      AccountSidebar
  },
  mounted() {
    $('body').addClass('internal');
    $('body').addClass('account-footer');
    $('body').removeClass('no-footer');
    $('body').removeClass('blank');
    $('#app').removeClass('single-page');
    $(window).scrollTop(0);


    $('a.dropdown-toggle').addClass('click');


  },
}
</script>
