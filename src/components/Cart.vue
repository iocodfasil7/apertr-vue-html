<template>
<div class = "browse cart-page">
    <section id = "intro-section" class="section">
        <div class = "section-body">
            <p class = "page-title">Your Cart(2 Items)</p>
        
            <div class = "cart-item">
                <div class = "article">
                    <div class = "img-holder">
                        <img src = "../assets/images/img1.png"/>
                    </div>
                    <div class = "cart-item-description">
                        <router-link to = "#">
                            <p class = "item-name">Spanish Landscape</p>
                            <p class = "author-name">By Kodi Bobo</p>
                        </router-link>
                        <img src = "../assets/images/trash_icon.svg"/>
                    </div>
                </div>
                <p class = "price-section">
                    $0.75
                </p>
            </div>
            <div class = "cart-item">
                <div class = "article">
                    <div class = "img-holder">
                        <img src = "../assets/images/img1.png"/>
                    </div>
                    <div class = "cart-item-description">
                        <router-link to = "#">
                            <p class = "item-name">Spanish Landscape</p>
                            <p class = "author-name">By Kodi Bobo</p>
                        </router-link>
                        <img src = "../assets/images/trash_icon.svg"/>
                    </div>
                </div>
                <p class = "price-section">
                    $0.75
                </p>
            </div>
            <div class = "cart-item">
                <div class = "article">
                    <div class = "img-holder">
                        <img src = "../assets/images/img1.png"/>
                    </div>
                    <div class = "cart-item-description">
                        <router-link to = "#">
                            <p class = "item-name">Spanish Landscape</p>
                            <p class = "author-name">By Kodi Bobo</p>
                        </router-link>
                        <img src = "../assets/images/trash_icon.svg"/>
                    </div>
                </div>
                <p class = "price-section">
                    $0.75
                </p>
            </div>

            <div class = "cart-bottom">
                <p>Total</p>
                <p class = "total-price">
                    $2.00
                </p>
            </div>

            <div class = "button-row">
                <router-link to = "checkout" class = "btn btn-normal btn-rounded">Proceed to Payment</router-link>
            </div>
        </div>
    </section>
</div>
</template>
<script>
import InternalBanner from "./InternalBanner";
import OtherPopularCategory from "./PopularCategory";
import BrowsePageCategory from "./BrowsPageCategory";
export default {
  name: 'browse-photo',
  data() {
    return {

    }
  },
  components : {
      InternalBanner,
      OtherPopularCategory,
      BrowsePageCategory
  },
  mounted() {
    $(window).scrollTop(0);
    // $('.fa.fa-times').click();
    $('body').addClass('internal');
    $('body').removeClass('account-footer');
    $('body').removeClass('no-footer');
    $('body').removeClass('blank');
    $('#app').removeClass('single-page');

  },
}
</script>
