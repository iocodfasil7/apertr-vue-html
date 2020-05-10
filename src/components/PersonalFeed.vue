<template>
<div class = "browse feed-page">
    <section id = "feed-head-content" class = "section">
        <div class = "header">
            <p class = "section-title">1890 Followers</p>
        </div>
        <div class = "followers-group">
            <div class = "follower-item item-1">
                <img src = "../assets/images/follower_imgs/follower_1.png"/>
            </div>
            <div class = "follower-item item-1">
                <img src = "../assets/images/follower_imgs/follower_2.png"/>
            </div>
            <div class = "follower-item item-2">
                <img src = "../assets/images/follower_imgs/follower_3.png"/>
            </div>
            <div class = "follower-item item-3">
                <img src = "../assets/images/follower_imgs/follower_4.png"/>
            </div>
            <div class = "follower-item item-4">
                <img src = "../assets/images/follower_imgs/follower_5.png"/>
            </div>
            <div class = "follower-item item-5">
                <img src = "../assets/images/follower_imgs/follower_1.png"/>
            </div>
            <div class = "follower-item item-6">
                <img src = "../assets/images/follower_imgs/follower_2.png"/>
            </div>
            <div class = "follower-item item-7">
                <img src = "../assets/images/follower_imgs/follower_3.png"/>
            </div>
            <div class = "follower-item item-8">
                <img src = "../assets/images/follower_imgs/follower_4.png"/>
            </div>
            <div class = "follower-item item-9">
                <img src = "../assets/images/follower_imgs/follower_5.png"/>
            </div>

        </div>
        <div class = "see-more-link">
            <a href = "#">See More</a>
        </div>
    </section>

    <section id = "photo-gallery" class = "feed section">
        <div class = "title-section">
            <p class = "page-title">A feed personalized to your taste!</p>
            <p class = "section-sub-title">See the latest from people your follow.</p>
        </div>
        <div class = "gallery clearfix">
            <img class = "picture" src = "../assets/test/test1.jpeg">
            <img class = "picture" src = "../assets/test/test2.jpeg">
            <img class = "picture" src = "../assets/test/test3.jpeg">
            <img class = "picture" src = "../assets/test/test4.jpeg">
            <img class = "picture" src = "../assets/test/test5.jpeg">
            <img class = "picture" src = "../assets/test/test6.jpeg">
            <img class = "picture" src = "../assets/test/test7.jpeg">
            <img class = "picture" src = "../assets/test/test8.jpeg">
            <img class = "picture" src = "../assets/test/test9.jpeg">
            <img class = "picture" src = "../assets/test/test10.jpeg">
            <img class = "picture" src = "../assets/test/test11.jpeg">
            <img class = "picture" src = "../assets/test/test12.jpeg">
            <img class = "picture" src = "../assets/test/test13.jpeg">
            <img class = "picture" src = "../assets/test/test14.jpeg">
            <img class = "picture" src = "../assets/test/test15.jpeg">
            <img class = "picture" src = "../assets/test/test16.jpeg">
            <img class = "picture" src = "../assets/test/test17.jpeg">
            <img class = "picture" src = "../assets/test/test18.jpeg">
            <img class = "picture" src = "../assets/test/test19.jpeg">
        </div>
        <div class = "see-more-link">
            <a href = "#">See More</a>
        </div>
    </section>

    <section id = "popularCategory" class = "feed section">
        <p class = "section-title">Looking for something newe and different? Browse our popular categories!</p>
        <ul>
            <li v-for="item in lst_popular_categories" :key="item">
                <a href="#">{{item}}</a>
            </li>
        </ul>
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
        lst_popular_categories: []
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

    this.lst_popular_categories = [
        'Landscapes', 'Sunsets', 'Dogs', 'Sky', 'Travel', 'Forest', 'Aerial',
        'Architecture', 'Food', 'Food1', 'Adventure', 'Abstract', 'Coffee', 'Healthcare',
        'People', 'City', 'Skylines', 'Business', 'Time Lapse', 'Communication', 'Transportation',
        'Abstract1', 'Mother`s Day', 'Floral', 'Military', 'Slow Motion', 'Technology', 'Underwater',
        'Animals', 'Beach', 'Background', 'Education', 'Animation', 'Wedding', 'Summer', 'Space',
        'Biology', 'Marketing', 'Father`s Day', 'Science', 'Textures', 'Clouds', 'Nature', 'Birthday', 'Party', 'Sports'
    ];

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
