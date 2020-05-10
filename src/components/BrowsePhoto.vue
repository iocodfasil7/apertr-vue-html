<template>
<div class = "browse">
  <InternalBanner/>
  <BrowsePageCategory/>
         <section id = "photo-gallery" class = "section">
            <p class = "section-title">Trending Photography</p>
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
  <OtherPopularCategory/>
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
    $('.carousel').carousel({
      interval: 3000
    })
    // $('.fa.fa-times').click();
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
