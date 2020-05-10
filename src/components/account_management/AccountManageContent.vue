<template>
    <div class = "browse account-management">
        <AccountHeader/>
        <div class = "main-content">
            <div class = "row">
                <div class="col-md-2 mb-3">
                    <AccountSidebar/>
                </div>
                <div class = "col-md-10" >
                    <div class = "account-inner-content manage-video-pic-content">
                        <div class = "row title">
                            <h2>Manage your content</h2>
                            <p>Edit or delete your content below.</p>
                        </div>
                        <div class = "row body">
                            <div class = "col-lg-6 col-md-12">
                                <div class = "img-content">
                                    <div class = "img-content-holder">
                                        <img src = "../../assets/images/img1.png">
                                    </div>
                                    <div class = "img-info">
                                        <div class = "left">
                                            <span>Title1 | $1.5</span>
                                        </div>
                                        <div class = "right">
                                            <router-link to = "/account/editphoto"><i class = "fa fa-edit"></i></router-link>
                                            <a href = "#" data-target = "#modal_del_confirm" data-toggle = "modal"> <img src = "../../assets/images/trash_icon.svg" style = "max-width: 30px;"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class = "col-lg-6 col-md-12">
                                <div class = "img-content">
                                    <div class = "img-content-holder video-holder">
                                        <img src = "../../assets/images/img2.png">
                                        <i class = "fa fa-play"></i>
                                    </div>
                                    <div class = "img-info">
                                        <div class = "left">
                                            <span>Title1 | $1.5</span>
                                        </div>
                                        <div class = "right">
                                            <router-link to = "/account/editvideo"><i class = "fa fa-edit"></i></router-link>
                                            <a href = "#" data-target = "#modal_del_confirm" data-toggle = "modal"> <img src = "../../assets/images/trash_icon.svg" style = "max-width: 30px;"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class = "col-lg-6 col-md-12">
                                <div class = "img-content">
                                    <div class = "img-content-holder">
                                        <img src = "../../assets/images/img3.png">
                                    </div>
                                    <div class = "img-info">
                                        <div class = "left">
                                            <span>Title1 | $1.5</span>
                                        </div>
                                        <div class = "right">
                                            <router-link to = "/account/editphoto"><i class = "fa fa-edit"></i></router-link>
                                            <a href = "#" data-target = "#modal_del_confirm" data-toggle = "modal"> <img src = "../../assets/images/trash_icon.svg" style = "max-width: 30px;"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class = "col-lg-6 col-md-12">
                                <div class = "img-content">
                                    <div class = "img-content-holder">
                                        <img src = "../../assets/images/img4.png">
                                    </div>
                                    <div class = "img-info">
                                        <div class = "left">
                                            <span>Title1 | $1.5</span>
                                        </div>
                                        <div class = "right">
                                            <router-link to = "/account/editphoto"><i class = "fa fa-edit"></i></router-link>
                                            <a href = "#" data-target = "#modal_del_confirm" data-toggle = "modal"> <img src = "../../assets/images/trash_icon.svg" style = "max-width: 30px;"></a>
                                        </div>
                                    </div>
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
        <div aria-hidden="true" aria-labelledby="myModalLabel" class="modal" id="modal_del_confirm" role="dialog" tabindex="-1">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-body mb-0 p-0">
                        <i class = "fa fa-exclamation"></i>
                        <p>Hold up! Are you sure you want to delete this content? This action cannot be undone.</p>
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
