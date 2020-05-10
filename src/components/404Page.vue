<template>
    <div class = "browse terms single-page">
        <section id = "contact-box" style = "height: 100%;display: flex; flex-direction: column; justify-content: center; align-items: center;" class = "section">
            <h1 class = "section-title" style = "color:#666;">
                404 Errors
            </h1>
            <h6 style = "color:#666;">Page Not Found</h6>
        </section>
    </div>
</template>
<script>
export default {
  name: 'aboutus',
  data() {
    return {

    }
  },
  
  mounted() {
    $('body').addClass('internal');
    $('#app').addClass('single-page');
    $('body').removeClass('account-footer');
    $('body').removeClass('no-footer');
    $('body').removeClass('blank');

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
