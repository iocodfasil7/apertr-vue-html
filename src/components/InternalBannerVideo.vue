<template>
<div id="internal-banner" class="carousel slide" data-ride="carousel">
    <!-- <ul class="carousel-indicators">
        <li data-target="#internal-banner" data-slide-to="0" class="active"></li>
        <li data-target="#internal-banner" data-slide-to="1"></li>
        <li data-target="#internal-banner" data-slide-to="2"></li>
    </ul> -->

    <div class="carousel-inner" style = "max-height: calc(40vw + 80px)">
        <h1 class = "banner-title">Browse Eye Catching Footage</h1>
        <!-- <div class="carousel-item video active" id = "carousel-1">
        </div>
        <div class="carousel-item" id = "carousel-2">
        </div>
        <div class="carousel-item" id = "carousel-3">
        </div> -->
        <video autoplay muted loop id="myVideo">
            <source src="../assets/carousel-img/c9_clip.mp4" type="video/mp4">
        </video>
    </div>
</div>
</template>

<script>
export default {
    name: 'InternalBanner',
    data() {
    return {
        video_url: '../assets/carousel-img/c9.MP4'
    }
  },
}
</script>