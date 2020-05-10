<template>
<div class = "browse search-page">
    <section id = "search-header" class = "section">
        <p>1-100 out of 3200 Search Results</p>
        <div class = "sort-section">
            <label>Sort by</label>
            <select name = "sorting">
                <option>Relevance</option>
                <option>Newest</option>
                <option>Price Low to High</option>
                <option>Price High to Low</option>
            </select>
        </div>
    </section>

    <section id = "photo-gallery" class = "section">
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
</div>
</template>
<script>
export default {
  name: 'browse-photo',
  data() {
    return {

    }
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
