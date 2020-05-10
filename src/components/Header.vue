<template>
    <div id = "header">
        <div class = "header-left">
            <div class = "nav-logo">
                <router-link to = "/">
                    <img src = "./../assets/logo_for_home.png" class = "img-home"/>
                    <img src = "./../assets/logo_for_internal.png" class="img-internal internal-logo"/>
                </router-link>
            </div>
            <ul class = "navigation">
                <li><router-link to="/browse/photo">Browse Photos</router-link></li>
                <li><router-link to="/browse/video">Browse Videos</router-link></li>
                <li><router-link to="/feed">Personal Feed</router-link></li>
                <li><router-link to="/upload"><i class = "fa fa-arrow-up"></i> Upload Content</router-link></li>
            </ul>
        </div>
        <div class = "header-right">
            <div class = "current-budget"><router-link to = "/account/getpaid"> Current Balance: $0.00</router-link></div>
            <div class = "shopping-cart dropdown"  v-if="!is_dropdown_show">
                <div class="icon icon_cart dropdown-toggle"  data-toggle = "dropdown">
                    <img src = "./../assets/icon_cart.svg"  class = "img-home">
                    <img src = "./../assets/cart_icon.svg" class = "img-internal internal-cart">
                </div>
                <div class = "dropdown-menu shopping-cart-dropdown-menu">
                    <h4 class = "title">Your Cart (2 Items)</h4>
                    <ul>
                        <li>
                            <div class = "shopping-cart-item">
                                <div class = "image-holder">
                                    <img src = "./../assets/test_1.png"/>
                                </div>
                                <div class = "description">
                                    <p>Spanish Landscape<br>By Kodi Bobo</p>
                                    <div class = "action">
                                        <img src = "./../assets/icon_trash.png" style = "width: 25px;">
                                        <span class = "price">$0.75</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class = "shopping-cart-item">
                                <div class = "image-holder">
                                    <img src = "./../assets/test_1.png"/>
                                </div>
                                <div class = "description">
                                    <p>Spanish Landscape<br>By Kodi Bobo</p>
                                    <div class = "action">
                                        <img src = "./../assets/icon_trash.png" style = "width: 25px;">
                                        <span class = "price">$0.75</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class = "bottom-bar">
                                <div class = "total-calculation">
                                    <span>total</span>
                                    <span>$1.5</span>
                                </div>
                                <div class = "proceed-button-group">
                                    <router-link to = "/cart" class = "btn btn-proceed-cart" >Proceed to Cart</router-link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class = "alarm dropdown">
                <div class="icon icon_bell dropdown-toggle"  data-toggle = "dropdown">
                    <img src = "./../assets/icon_bell.png" style = "max-width:25px;" class = "img-home">
                    <img src = "./../assets/notifi_icon.svg" class = "img-internal internal-bell">
                </div>
                <div class = "dropdown-menu bell-dropdown-menu">
                    <h4 class = "title">Notification</h4>
                    <p class = "description">
                        Check out the latest that has happened with your account. <a href = "#">Click here</a> to manage your notifications.
                    </p>
                    <div class = "bell-group">
                        <div class = "bell-item">
                            <p class = "bell-time">10:00 PM</p>
                            <p class = "bell-description">Your Spanish Landscape Photo was purchased</p>
                        </div>
                        <div class = "bell-item">
                            <p class = "bell-time">10:00 PM</p>
                            <p class = "bell-description">Your Spanish Landscape Photo was purchased</p>
                        </div>
                        <div class = "bell-item">
                            <p class = "bell-time">10:00 PM</p>
                            <p class = "bell-description">Your Spanish Landscape Photo was purchased</p>
                        </div>
                        <div class = "bell-item">
                            <p class = "bell-time">10:00 PM</p>
                            <p class = "bell-description">Your Spanish Landscape Photo was purchased</p>
                        </div>
                    </div>
                    <div class = "read-more-section">
                        <a href = "#">See More</a>
                    </div>
                </div>
            </div>
            <div class = "avatar">
                <p class = "img-avatar dropdown-toggle" data-toggle = "dropdown">
                    <img src = "./../assets/avatar.png"/>
                </p>
                <div class = "dropdown-menu avatar-dropdown-menu">
                    <ul>
                        <li><router-link to ="/profile">Profile</router-link></li>
                        <li><router-link to ="/account/generalinformation">Manage Account</router-link></li>
                        <li><router-link to ="/downloads">My Downloads</router-link></li>
                        <li><router-link to = "/about_us">About Us</router-link></li>
                        <li><router-link to = "/faq">FAQS</router-link></li>
                        <li><router-link to = "/contact">Contact Us</router-link></li>
                        <li><router-link to = "/signout" class = "btn btn-signout">Sign Out</router-link></li>
                    </ul>
                </div>
            </div>
            <i class = "fa fa-times"></i>
            <div class = "mobile-menu-group dropdown">
                <div class = "mobile-menu dropdown-toggle" aria-haspopup ="true" role = "button" data-toggle = "dropdown" aria-expanded="false">
                    <i class = "fa fa-bars"></i>
                </div>

                <div class = "dropdown-menu mobile-navigation-dropdown">
                    <ul>
                        <li class = "mobile-menu-item user-section">
                            <span>Hi USER!</span>
                            <span>Current Balance: $42.70</span>
                        </li>
                        <li class = "mobile-menu-item">
                            <router-link to = "/profile">Profile</router-link>
                        </li>

                        <li class = "mobile-menu-item">
                            <router-link to = "/browse/photo">Browse Photos</router-link>
                        </li>

                        <li class = "mobile-menu-item">
                            <router-link to = "/browse/video">Browse Videos</router-link>
                        </li>

                        <li class = "mobile-menu-item">
                            <router-link to = "/downloads">My Downloads</router-link>
                        </li>


                        <li class = "mobile-menu-item">
                            <router-link to = "/feed">Personal Feed</router-link>
                        </li>

                        <li class = "mobile-menu-item">
                            <router-link to = "/upload">Upload Content</router-link>
                        </li>

                        <li class = "mobile-menu-item">
                            <router-link to = "/account">Manage Account</router-link>
                        </li>

                        <li class = "mobile-menu-item">
                            <router-link to = "/about_us">About Us</router-link>
                        </li>

                        <li class = "mobile-menu-item">
                            <router-link to = "/faq">FAQS</router-link>
                        </li>

                        <li class = "mobile-menu-item">
                            <router-link to = "/contact">Contact Us</router-link>
                        </li>

                        <li class = "mobile-menu-item">
                            <router-link to = "/signout" class = "btn btn-signout">Sign Out</router-link>
                        </li>
                    </ul>
                </div>
            </div>

       </div>
    </div>
</template>
<script>
import { setTimeout } from 'timers';

export default {
    data () {
        return {
            is_dropdown_show : false
        };
    },
    mounted() {
        var width = $(window).width();
        $(window).scroll (function() {
            console.log('here');
            if(!$('.dropdown-menu').hasClass('show')) {
                setTimeout(function() {
                    $('.dropdown-menu').removeAttr('style');
                }, 10);
            }
        });

        // $(document).on('click', '.dropdown-menu', function (e) {
        //   e.stopPropagation();
        // });

        $('.dropdown').on('show.bs.dropdown', function(e){

            if (width <= 767) {

                $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
                $('body').css('overflow', 'hidden');
                $('.icon_cart').css('display', 'none');
                $('.icon_bell').css('display', 'none');
                $('.fa-bars').css('display', 'none');
                $('.fa-times').css('display', 'block');
                $('div#header > div.header-right > div.mobile-menu-group.dropdown').css('margin-left', '-20px');
                $('div#header > div.header-right > div.mobile-menu-group.dropdown').css('z-index', '-1');

            }
        });

        $('.dropdown').on('hide.bs.dropdown', function(e){
            $('.dropdown-menu').removeAttr('style');
            $('.dropdown-menu').removeAttr('x-placement');
            
            if ( width <= 767) {
                $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
                $('body').css('overflow', 'auto');
                $('.icon_cart').css('display', 'flex');
                $('.icon_bell').css('display', 'flex');
                $('.fa-bars').css('display', 'block');
                $('.fa-times').css('display', 'none');
                // $('.mobile-menu.dropdown-toggle').css('pointer-events', 'flex');
                $('div#header > div.header-right > div.mobile-menu-group.dropdown').css('z-index', '1');
                $('div#header > div.header-right > div.mobile-menu-group.dropdown').css('margin-left', '10px');

            }
        });
    }
};
</script>
