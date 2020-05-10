<template>
    <div class = "browse account-management">
        <AccountHeader/>
        <div class = "main-content">
            <div class = "row">
                <div class="col-md-2 mb-3">
                    <AccountSidebar/>
                </div>
                <div class = "col-md-10" >
                    <div class = "account-inner-content change-password-content">
                        <div class = "row title">
                            <h2>Change your Password</h2>
                            <p>Use the fields below to change your password.</p>
                        </div>
                        <div class = "row body">
                            <div class = "col-lg-6 col-md-12">
                                <div class = "fluid">
                                    <input class = "grey-background" type = "password" name = "current_password" placeholder="Current Password"/>
                                    <input class = "grey-background" type = "password" name = "new_password" placeholder="New Password"/>
                                    <input class = "grey-background" type = "password" name = "confimr_new_password" placeholder="Confirm New Password"/>
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
  methods: {
      saveChangedPassword() {
          $('p.alert-save').addClass('shows');
      }
  }
}
</script>
