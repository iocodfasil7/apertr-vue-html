<template>

    <ul class="nav nav-pills flex-column" id="myTab" role="tablist">
        <li class="nav-item">
            <router-link to = "/account/generalinformation" class="nav-link active"  aria-selected="true">
                Edit General & Profile Information
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to = "/account/changePassword" class="nav-link" aria-selected="false">
                Change Password
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to = "/account/following"  class="nav-link" aria-selected="false">
                Manage Who You Follow
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to = "/account/manage_content" class="nav-link manage-content" aria-selected="false">
                View and Manage Uploaded Content
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to = "/account/saleshistory" class="nav-link" aria-selected="false">
                Sales History
            </router-link>
        </li>
        <li class="nav-item dropdown" v-if = "!is_mobile" style = "position:relative">
            <router-link to="#" class="nav-link dropdown-toggle router-link-exact-active router-link-active" data-toggle = "dropdown" >
                Balance & Payment Details
                <i class = "fa fa-caret-right"></i>
            </router-link>
            <div class = "sub-menu-content dropdown-menu">
                <router-link to="/account/getpaid">
                    Get Paid
                </router-link>
                <router-link to = "/account/getpaid/manage">
                    Manage Payment Account
                </router-link>
                <router-link to = "/account/getpaid/history">
                    View Payment History
                </router-link>
            </div>
        </li>

        <li class="nav-item" v-if="is_mobile">
            <router-link to = "/account/getpaid/sublinks" class="nav-link" aria-selected="false">
                Balance & Payment Details
            </router-link>
        </li>

        <li class="nav-item">
            <router-link to = "/account/notification" class="nav-link" aria-selected="false">
                Notification Settings
            </router-link>
        </li>                            
    </ul>
</template>
<script>

export default {
  name: 'side-bar',
  data() {
    return {
        payment_link: '/account/getpaid',
        is_mobile: false
    }
  },
  mounted() {
    let width = $(window).width();
    if ( width < 768) {
        this.is_mobile = true;
    } else {
        this.is_mobile = false;
    }

    $('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });
  }
}
</script>
