<template>
<div class = "browse">
    <section id = "downloads" class = "section">
        <p class = "page-title">Your Purchased Images</p>
        <span style = "color: #666;">Here is where you can browse and download your purchased content.</span>
        <div class = "content-body">
            <div class = "row">
                <div class = "col-lg-6 col-md-6 col-sm-12">
                    <div class = "download-content">
                        <div class = "img-holder"><img src = "../assets/images/img1.png"/></div>
                        <div class = "action-section">
                            <router-link to = "#">
                                <i class="fa fa-arrow-circle-down"></i> Download
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class = "col-lg-6 col-md-6 col-sm-12">
                    <div class = "download-content">
                        <div class = "img-holder"><img src = "../assets/images/img2.png"/></div>
                        <div class = "action-section">
                            <router-link to = "#">
                                <i class="fa fa-arrow-circle-down"></i> Download
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class = "col-lg-6 col-md-6 col-sm-12">
                    <div class = "download-content">
                        <div class = "img-holder"><img src = "../assets/images/img3.png"/></div>
                        <div class = "action-section">
                            <router-link to = "#">
                                <i class="fa fa-arrow-circle-down"></i> Download
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class = "col-lg-6 col-md-6 col-sm-12">
                    <div class = "download-content">
                        <div class = "img-holder"><img src = "../assets/images/img4.png"/></div>
                        <div class = "action-section">
                            <router-link to = "#">
                                <i class="fa fa-arrow-circle-down"></i> Download
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class = "col-lg-6 col-md-6 col-sm-12">
                    <div class = "download-content">
                        <div class = "img-holder"><img src = "../assets/images/img5.png"/></div>
                        <div class = "action-section">
                            <router-link to = "#">
                                <i class="fa fa-arrow-circle-down"></i> Download
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class = "col-lg-6 col-md-6 col-sm-12">
                    <div class = "download-content">
                        <div class = "img-holder"><img src = "../assets/images/img6.png"/></div>
                        <div class = "action-section">
                            <router-link to = "#">
                                <i class="fa fa-arrow-circle-down"></i> Download
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>
<script>
export default {
  name: 'payment-gateway-page',
  data() {
    return {
        lst_popular_categories: []
    }
  },
 
  mounted() {
    $(window).scrollTop(0);

    $('body').addClass('internal');
    $('body').removeClass('account-footer');
    $('body').removeClass('no-footer');
    $('body').removeClass('blank');
    $('#app').removeClass('single-page');

  },
}
</script>
