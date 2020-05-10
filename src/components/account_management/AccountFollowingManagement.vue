<template>
    <div class = "browse account-management">
        <AccountHeader/>
        <div class = "main-content">
            <div class = "row">
                <div class="col-md-2 mb-3">
                    <AccountSidebar/>
                </div>
                <div class = "col-md-10" >
                    <div class = "account-inner-content following-content">
                        <div class = "row title">
                            <h2>You are following 14 people</h2>
                            <p>Manage who you are following</p>
                        </div>
                        <div class = "row body">
                            <div class = "col-lg-6 col-md-12">
                                <div class = "following-user-item" v-for="n in 7" :key = "n">
                                    <div class = "user-section">
                                        <div class = "avatar-holder">
                                            <img src = "../../assets/avatar.png"/>
                                        </div>
                                        <p>
                                            User Name1
                                        </p>
                                    </div>
                                    <div class = "follow-button-section">
                                        <button type = "button" class = "btn btn-normal btn-rounded btn-unfollow" @click="allowUnfollow(n)">Unfollow</button>
                                        <button type = "button" class = "btn btn-normal btn-rounded btn-follow" @click="allowFollow(n)">+ Follow</button>
                                    </div>                    
                                </div>

                            </div>

                            <div class = "col-lg-6 col-md-12">
                                <div class = "following-user-item" v-for="n in 7" :key = "n">
                                    <div class = "user-section">
                                        <div class = "avatar-holder">
                                            <img src = "../../assets/avatar.png"/>
                                        </div>
                                        <p>
                                            User Name1
                                        </p>
                                    </div>
                                    <div class = "follow-button-section">
                                        <button type = "button" class = "btn btn-normal btn-rounded btn-unfollow" @click="allowUnfollow(n+7)">Unfollow</button>
                                        <button type = "button" class = "btn btn-normal btn-rounded btn-follow" @click="allowFollow(n+7)">+ Follow</button>

                                    </div>                    
                                </div>
                            </div>
                            <div class = "fluid align-center button-group">
                                <router-link class = "toBackAccountMenu" to = "/account">Return to Account Management</router-link>
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
  name: 'followingManagement',
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
      allowFollow(n) { 
        if(n<=7) {
            $('.following-content .row.body>div:first-child > div:nth-child(' + n + ')').removeClass('show');
        } else if (n>7) {
            $('.following-content .row.body>div:last-child > div:nth-child(' + (n-7) + ')').removeClass('show');
        }
      },
      allowUnfollow(n) {
        if(n<=7) {
            $('.following-content .row.body>div:first-child > div:nth-child(' + n + ')').addClass('show');
        } else if (n>7) {
            $('.following-content .row.body>div:last-child > div:nth-child(' + (n - 7) + ')').addClass('show');
        }
      }
  }
}
</script>

