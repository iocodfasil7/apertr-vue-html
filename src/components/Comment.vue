<template>
    <div id = "comments" class = "main-container">
        <div class="main-comments-section">
            <div class = "col-12">
                <div class="title-bar">
                    <h2 class = "title">Spanish Landscape</h2>
                    <h4 class = "price">$0.75</h4>
                </div>
                <p class = "author">by <strong>Kodi Bobo</strong></p>
            </div>
            <div class = "col-12">
                <div class = "img-holder">
                    <img src = "../assets/carousel-img/Photopage_Header_1.png" />
                </div>
            </div>
            <div class = "col-12">
                <div class = "sharing-action">
                    <div class = "left-section">
                        <a href = "#"><i class = "fa fa-heart-o"></i></a>
                        <a href = "#"><i class = "fa fa-share-alt"></i></a>
                        <p class = "likes">42 Likes</p>
                    </div>
                    <div class = "right-section">
                        <button class = "btn btn-normal btn-rounded">Add to Cart</button>
                    </div>
                </div>
                <div class = "description">
                    Photo description goes here. This is a shot of an old, beautiful, medieval town in Rupit, Spain. <span>#Fall #Rupit #Castle #FallLeaves #Medieval #Spain #Mountains #Landscape #TravelPhotography</span>
                </div>
            </div>
            <div class = "col-md-9 col-12">
                <div class = "comment-section">
                    <div class = "comment-input-section">
                        <h6>Leave a comment</h6>
                        <textarea></textarea>
                        <div class = "button-group">
                            <button type = "button" class = "btn btn-normal">Submit</button>
                        </div>
                    </div>

                    <div class = "comment-list">
                        <div class = "comment-item">
                            <div class = "user-avatar-img">
                                <img src = "./../assets/avatar.png"/>
                            </div>
                            <div class = "comment-contents">
                                <p class = "user-name">User 1</p>
                                <p class = "description">Comment sample. Excellent photo! Beutiful Landscape</p>
                            </div>
                        </div>     
                        <div class = "comment-item">
                            <div class = "user-avatar-img">
                                <img src = "./../assets/avatar.png"/>
                            </div>
                            <div class = "comment-contents">
                                <p class = "user-name">User 1</p>
                                <p class = "description">Comment sample. Excellent photo! Beutiful Landscape</p>
                            </div>
                        </div>     
                        <div class = "comment-item">
                            <div class = "user-avatar-img">
                                <img src = "./../assets/avatar.png"/>
                            </div>
                            <div class = "comment-contents">
                                <p class = "user-name">User 1</p>
                                <p class = "description">Comment sample. Excellent photo! Beutiful Landscape</p>
                            </div>
                        </div>                        
                    </div>
                </div>
                <div class = "more-section">
                    <a href = "#">See More Comments</a>
                </div>
            </div>
 
        </div>

        <div class = "section">
            <p class = "section-title">
                Other Photos by Kodi Bobo
            </p>
            <div class = "gallery clearfix">

                    <img src = "../assets/slider-gallery-img-1.png" class = "picture"/>
                    <img src = "../assets/slider-gallery-img-2.png" class = "picture"/>
                    <img src = "../assets/img-gallery-3.png" class = "picture"/>
                    <img src = "../assets/img-gallery-1.png" class = "picture"/>

            </div>
            <div class = "more-section">
                <a href = "#">See More</a>
            </div>
        </div>

        <div class = "section">
            <p class = "section-title">
                Similar Photos
            </p>
            <div class = "gallery clearfix">
                <img src = "../assets/img-gallery-1.png" class = "picture"/>
                <img src = "../assets/img-gallery-2.png" class = "picture"/>
                <img src = "../assets/img-gallery-1.png" class = "picture"/>
                <img src = "../assets/img-gallery-3.png" class = "picture"/>
            </div>
            <div class = "more-section">
                <a href = "#">See More</a>
            </div>
        </div>

    </div>

</template>
<script>
import InternalBanner from "./InternalBanner";
import OtherPopularCategory from "./PopularCategory";
import BrowsePageCategory from "./BrowsPageCategory";
export default {
  name: 'comment',
  data() {
      return {
        count : 0

      }
  },
  components : {
      InternalBanner,
      OtherPopularCategory,
      BrowsePageCategory
  },
  mounted() {
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
                idealHeight: 200,
            });
            $(".loader-wrapper").hide();
        }
    }).each(function() {
        if(this.complete){
            $(this).load();
        }
    });
  }
}
</script>