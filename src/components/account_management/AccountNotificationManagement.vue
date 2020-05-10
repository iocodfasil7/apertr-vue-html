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
                    <div class = "account-inner-content notification-content">
                        <div class = "row title">
                            <h2>Notification Management</h2>
                            <p>Choose what notifications you receive and where you receive them.</p>
                        </div>
                        <div class = "row body">
                            <div class = "col-lg-9 col-md-12">
                                <div class = "fluid">
                                    <ul class="checkbox-list">
                                        <li>
                                            <input type="checkbox" id="test1">
                                            <label for="test1">Notify me when someone purchases my content.</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="test2" checked>
                                            <label for="test2">Notify me when I make purchases.</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="test3">
                                            <label for="test3">Notify me someone likes my content.</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="test4">
                                            <label for="test4">Notify me when funds are deposited to my bank account.</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="test5">
                                            <label for="test5">Notify me when someone new follows me.</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="test6">
                                            <label for="test6">Send Notifications via Email.</label>
                                        </li>
                                    </ul>
                                </div>

                                <div class = "fluid align-center button-group">
                                    <button class = "btn btn-normal btn-rounded btn-save" @click="saveChangedPassword()">Save Changes</button>
                                    <p class = "alert-save">Password Changed!</p>

                                    <router-link class = "toBackAccountMenu" to = "/account">Return to Account Management</router-link>

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
  name: 'account-notification',
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
  methods : {
     saveChangedPassword() {
          $('p.alert-save').addClass('shows');
      }
  }
}
</script>
