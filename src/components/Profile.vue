<template>
<div class = "browse profile-page">
    <section id = "intro-section" class="section">
        <div class = "row">
            <div class = "col-lg-10 col-md-12">
                <div class = "row">
                    <div class = "col-lg-4 col-md-5">
                        <div class = "profile-header">
                            <div class = "left-section">
                                <h1>Kobi Bobo</h1>
                                <router-link to ="#">www.KodiBobo.com</router-link>
                            </div>
                            <div class = "right-section">
                                <button class = "btn btn-normal btn-rounded btn-follow btn-profile">+ Follow</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class = "row">
                    <div class = "col-lg-4 col-md-5">
                        <div class = "img-holder">
                            <img src = "../assets/images/IMG_1999.png"/>
                        </div>        
                        <div class = "share-sections">
                            <div class = "share-item item-1">
                                <h1>24</h1>
                                <p>items uploaded</p>
                            </div>
                            <div class = "share-item item-2">
                                <h1>30K</h1>
                                <p>downloads</p>
                            </div>
                            <div class = "share-item item-3">
                                <h1>1,890</h1>
                                <p>followers</p>
                            </div>
                        </div>
                    </div>
                    <div class = "col-lg-8 col-md-7">
                        <p class = "description">Hi! I am an artist and graphic designer with a bachelor’s in Printmaking and Illustration and Master’s in Printmaking. I spend my time traveling the world, working and snapping photos and taking videos of amazing people and places!</p>
                        <div class = "social-media-links">
                            <p class = "description">You can also follow me here!</p>
                            <div class = "social-media-icons">
                                <img src = "../assets/images/icons/facebook.png">
                                <img src = "../assets/images/icons/twitter.png">
                                <img src = "../assets/images/icons/youtube.png">
                                <img src = "../assets/images/icons/instagram.png">
                                <img src = "../assets/images/icons/linkedin.png">
                            </div>
                        </div>
                    </div>
                </div>
                <div class = "row">
                    <div class = "col-lg-4 col-md-5">

                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id = "photo-gallery" class = "section">
        <p class = "section-title">Photos by Kodi Bobo</p>
        <div class = "gallery clearfix">
            <img class = "picture" src = "../assets/test/test1.jpeg">
            <img class = "picture" src = "../assets/test/test2.jpeg">
            <img class = "picture" src = "../assets/test/test3.jpeg">
            <img class = "picture" src = "../assets/test/test4.jpeg">
            <img class = "picture" src = "../assets/test/test5.jpeg">
            <img class = "picture" src = "../assets/test/test6.jpeg">
            <img class = "picture" src = "../assets/test/test7.jpeg">
            <img class = "picture" src = "../assets/test/test8.jpeg">
        </div>
        <div class = "see-more-link">
            <a href = "#">See More</a>
        </div>
    </section>

    <section id = "photo-gallery" class = "section videos">
        <p class = "section-title">Videos by Kodi Bobo</p>
        <div class = "gallery clearfix">
            <img class = "picture" src = "../assets/test/test1.jpeg">
            <img class = "picture" src = "../assets/test/test2.jpeg">
            <img class = "picture" src = "../assets/test/test3.jpeg">
            <img class = "picture" src = "../assets/test/test4.jpeg">
            <img class = "picture" src = "../assets/test/test5.jpeg">
            <img class = "picture" src = "../assets/test/test6.jpeg">
            <img class = "picture" src = "../assets/test/test7.jpeg">
            <img class = "picture" src = "../assets/test/test8.jpeg">
        </div>
        <div class = "see-more-link">
            <a href = "#">See More</a>
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

    $('body').addClass('internal');
    $('body').removeClass('account-footer');
    $('body').removeClass('no-footer');
    $('body').removeClass('blank');
    $('#app').removeClass('single-page');

    $(document).foundation();
    var images_loaded = 0;
    var total_images = $(".gallery img").length;
    var percent_slice = 100 / total_images;
    var current_percent = 0;

    $(".gallery img").one("load", function() {
        images_loaded++;
        current_percent += percent_slice;
        if(images_loaded == total_images){
            $(".gallery").pycsLayout({
                gutter: 20,
                idealHeight: 350,
            });
            $(".loader-wrapper").hide();
        }
    }).each(function() {
        if(this.complete){
            $(this).load();
        }
    });
  },
}
</script>
