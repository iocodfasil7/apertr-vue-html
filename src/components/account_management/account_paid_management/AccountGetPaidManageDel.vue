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

                    <div class = "account-inner-content get-paid-manage-del-content">
                        <div class = "row title">
                            <h2>Manage Payment Account</h2>
                            <p>Here you decide where you want your money to go.</p>
                        </div>
                        <div class = "row body">
                            <div class = "col-12">
                                <div class = "fluid">
                                    <p class = "property-name">Current Preferred Payment Method</p>
                                    <p class = "property-value">Kodi Bobo</p>
                                    <p class = "del-description">Click Here to add a Payment Method<a href = "#" data-target = "#modal_del_confirm" data-toggle="modal"><img src = "../../../assets/images/trash_icon.svg"></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div aria-hidden="true" aria-labelledby="myModalLabel" class="modal" id="modal_del_confirm" role="dialog" tabindex="-1">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-body mb-0 p-0">
                        <i class = "fa fa-exclamation"></i>
                        <p>Hold up! Are you sure you want to delete this content? You will need to add a new payment method before you can be paid.</p>
                        <div class = "button-group">
                            <button class = "btn btn-normal btn-rounded">Yes. I'm sure.</button>
                            <button class = "btn btn-normal btn-rounded">No. Maybe Not.</button>
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
    $(window).scrollTop(0);

    $('body').addClass('internal');
    $('body').addClass('account-footer');
    $('body').removeClass('no-footer');
    $('body').removeClass('blank');
    $('#app').removeClass('single-page');

    $('a.dropdown-toggle').addClass('click');

  },
}
</script>
