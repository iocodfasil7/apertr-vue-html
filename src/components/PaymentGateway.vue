<template>
<div class = "browse payment-gateway-page">
    <section id = "gateway-content" class = "section">
        <div class = "header">
            <p class = "page-title">Payment Information</p>
            <p class = "payment-description">We accept the follow credit cards:</p>
        </div>
        <div class = "credit-card-group">
            <div class = "card-item item-1">
                <img src = "../assets/images/credit-cards/visa.svg"/>
            </div>
            <div class = "card-item item-2">
                <img style = "margin-top: 10px;" src = "../assets/images/credit-cards/Discover_Card_logo.png"/>
            </div>
            <div class = "card-item item-3">
                <img src = "../assets/images/credit-cards/Mastercard.svg"/>
            </div>
            <div class = "card-item item-4">
                <img src = "../assets/images/credit-cards/american-express.svg"/>
            </div>
        </div>
        <div class = "row gateway-row">
            <div class = "col-lg-1"></div>
            <div class = "col-lg-5 col-md-6">
                <div class = "payment-gateway-content content-item-1">
                    <div class = "content-header">
                        card information
                    </div>
                    <div class = "content-body">
                        <div class = "form-fluid">
                            <p>CARD NUMBER</p>
                            <input type = "text" name = "card_number" id = "card_number" value = "1234 5678 3456 2456"/>
                        </div>
                        <div class = "form-fluid-row">
                            <div class = "form-fluid">
                                <p>EXPIRE DATE</p>
                                <input type = "text" name = "expired_date" id = "expired_date" value = "05 / 21"/>
                            </div>
                            <div class = "form-fluid">
                                <p>CVV</p>
                                <input type = "text" name = "cvv" id = "cvv" value = "123"/>
                            </div>
                        </div>

                        <div class = "form-fluid">
                            <p>cardholder name</p>
                            <input type = "text" name = "card_holder_name" id = "card_holder_name" value = "John Doe"/>
                        </div>
                    </div>
                </div>
            </div>

            <div class = "col-lg-5 col-md-6">
                <div class = "payment-gateway-content content-item-2">
                    <div class = "content-header">
                        billing address
                    </div>
                    <div class = "content-body">
                        <div class = "form-fluid">
                            <input type = "text" name = "first_name" id = "first_name" placeholder="First Name"/>
                        </div>

                        <div class = "form-fluid">
                            <input type = "text" name = "last_name" id = "last_name" placeholder="Lsat Name"/>
                        </div>

                        <div class = "form-fluid">
                            <input type = "text" name = "country" id = "country" placeholder="Country"/>
                        </div>
                        
                        <div class = "form-fluid">
                            <input type = "text" name = "address" id = "address" placeholder="Street Address"/>
                        </div>
                        
                        <div class = "form-fluid">
                            <input type = "text" name = "apt_suit" id = "apt_suit" placeholder = "Apt/Suite/Unit (Optional)"/>
                        </div>
                        
                        <div class = "form-fluid">
                            <input type = "text" name = "zipe_code" id = "zipe_code" placeholder="Zipe Code"/>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <div class = "row">
            <div class = "col-lg-1"></div>
            <div class = "col-lg-10">
                <div class = "payment-bottom">
                    <p>Payment is secured by <a href = "#">stripe</a></p>
                    <router-link to = "checkout/success" class = "btn btn-normal btn-rounded">Submit Payment</router-link>
                </div>
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
  name: 'payment-gateway-page',
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

    $('body').addClass('internal');
    $('body').removeClass('account-footer');
    $('body').removeClass('no-footer');
    $('body').removeClass('blank');
    $('#app').removeClass('single-page');

  },
}
</script>
