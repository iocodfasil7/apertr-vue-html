<template>
<div class = "browse">
    <InternalBannerVideo/>
    <BrowsePageCategoryVideo/>
            <section id = "photo-gallery" class = "video section">
                <p class = "section-title">Popular Footage</p>
                    <div class="gallery clearfix">
                        <a href = "#" class = "video-link"><img class = "picture" src = "../assets/test/test1.jpeg"></a>
                        <a href = "#" class = "video-link"><img class = "picture" src = "../assets/test/test2.jpeg"></a>
                        <a href = "#" class = "video-link"><img class = "picture" src = "../assets/test/test3.jpeg"></a>
                        <a href = "#" class = "video-link"><img class = "picture" src = "../assets/test/test4.jpeg"></a>
                        <a href = "#" class = "video-link"><img class = "picture" src = "../assets/test/test5.jpeg"></a>
                        <a href = "#" class = "video-link"><img class = "picture" src = "../assets/test/test6.jpeg"></a>
                        <a href = "#" class = "video-link"><img class = "picture" src = "../assets/test/test7.jpeg"></a>
                        <a href = "#" class = "video-link"><img class = "picture" src = "../assets/test/test8.jpeg"></a>
                        <a href = "#" class = "video-link"><img class = "picture" src = "../assets/test/test9.jpeg"></a>
                        <a href = "#" class = "video-link"><img class = "picture" src = "../assets/test/test10.jpeg"></a>
                        <a href = "#" class = "video-link"><img class = "picture" src = "../assets/test/test11.jpeg"></a>
                        <a href = "#" class = "video-link"><img class = "picture" src = "../assets/test/test12.jpeg"></a>
                        <a href = "#" class = "video-link"><img class = "picture" src = "../assets/test/test13.jpeg"></a>
                    </div>

                <div class = "see-more-link">
                    <a href = "#">See More</a>
                </div>
            </section>
    <OtherPopularCategory/>
</div>
</template>
<script>
import InternalBannerVideo from "./InternalBannerVideo";
import OtherPopularCategory from "./PopularCategory";
import BrowsePageCategoryVideo from "./BrowsPageCategoryVideo";
export default {
  name: 'browse-video',
  data() {
    return {

    }
  },
  components : {
      InternalBannerVideo,
      OtherPopularCategory,
      BrowsePageCategoryVideo
  },
  mounted() {
    $(window).scrollTop(0);
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
