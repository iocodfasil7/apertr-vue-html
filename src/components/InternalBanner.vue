<template>
<div id="internal-banner" class="carousel slide" data-ride="carousel" >
    <ul class="carousel-indicators">
        <li data-target="#internal-banner" data-slide-to="0" class="active"></li>
        <li data-target="#internal-banner" data-slide-to="1"></li>
        <li data-target="#internal-banner" data-slide-to="2"></li>
    </ul>

    <div class="carousel-inner">
        <h1 class = "banner-title">Browse Royalty Free Photos</h1>
        <div class="carousel-item active" id = "carousel-1">
        </div>
        <div class="carousel-item" id = "carousel-2">
        </div>
        <div class="carousel-item" id = "carousel-3">
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'InternalBanner'
}
</script>