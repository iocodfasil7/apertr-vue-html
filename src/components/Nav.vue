<template>
<form action = "/search">
    <nav id = "navbar">
            <div class = "category dropdown-toggle" data-toggle = "dropdown">
                <p class = "category_name">Browse by Category</p>
                <div class = "dropdown-menu category-dropdown-menu">
                    <div>
                        <a @click="on_click_item(item)" v-for='item in categories' :key="item">{{item}}</a>
                    </div>
                </div>
                <input type = "hidden" name = "category" value = "">
            </div>

            <div class = "search-input">
                <input type = "text" name = "search_apertr" placeholder="Search Apertr"/>
                <div class = "search-type dropdown-toggle" data-toggle="dropdown">
                    <p class = "content_name">All</p>
                    <div class = "dropdown-menu search-types-dropdown-menu">
                        <div>
                            <a @click = "on_click_content('Photos')">Photos</a>
                            <a @click = "on_click_content('Videos')">Videos</a>
                            <a @click = "on_click_content('All')">All</a>
                        </div>
                    <input type = "hidden" name = "content_type" value = "">

                    </div>
                </div>
                    <button type = "submit" class = "btn btn-search">
                        <i class="fa fa-search"></i>
                    </button>
            </div>

        <div class = "filter-bar" >
            <p class = "dropdown-toggle" data-toggle="dropdown" style = "height: 40px">Filter</p>
            <div class = "dropdown-menu filter-dropdown-menu">
                <p class = "title">Filter your search with the options below.</p>
                <h5>Image Type</h5>
                <div class = "image-types-opt-group">
                    <div class = "radio-btn">
                        <input type="radio" id="photo-type1" name="content-type"  />
                        <label for="photo-type1">  <span></span> Photo </label>
                    </div>

                    <div class = "radio-btn">
                        <input type="radio" id="video-type1" name="content-type" />
                        <label for="video-type1">  <span></span> Video </label>
                    </div>

                    <div class = "radio-btn">
                        <input type="radio" id="all-type1" name="content-type"  />
                        <label for="all-type1">  <span></span> All </label>
                    </div>

                    <!-- <input type = "radio" name = "image_types" id = "photo">
                    <label for="photo">Photo</label>                    
                    <input type = "radio" name = "image_types">
                    <label for="photo">Video</label>                    
                    <input type = "radio" name = "image_types">
                    <label for="photo">All</label>                     -->
                </div>
                <h5>Price</h5>
                <div class="price-section fluid-filter-section">
                    <input type = "number" name = "min-price" placeholder="Minimum">
                    <label>-</label>
                    <input type = "number" name = "max-price" placeholder="Maximum">
                </div>
                <h5>Size (Larger than)</h5>
                <div class="size-section fluid-filter-section">
                    <input type = "number" name = "width" placeholder="Width">
                    <label>*</label>
                    <input type = "number" name = "height" placeholder="Height">
                </div>
                <h5>Size (Larger than)</h5>
                <div class = "category-section fluid-filter-section">
                    <input type = "text" placeholder="Select">
                </div>

                <div class = "button-section">
                    <button type = "button" class = "btn btn-save">Save</button>
                </div>
            </div>

        </div>
    </nav>
</form>
</template>
<script>
export default {
    name: 'Navbar',

    data() {
        return {
            categories: [],
            search_types: []
        }
    },

    mounted() {
        $(document).on('click', '.dropdown-menu.filter-dropdown-menu', function (e) {
            e.stopPropagation();
        });
        this.categories = [
            'Landscapes','Business','Skylines',
            'Architecture','Military','Floral',
            'People','Education','Background',
            'Abstract','Marketing','Biology',
            'Animals','Birthday','Nature',
            'Summer','Travel','Sky',
            'Textures','Abstract1','Adventure',
            'Sunsets','Time Lapse','Wedding',
            'Food','Slow Motion','Science',
            'City','Animation','Sports',
            'Mothers Day','Fathers Day','Aerial',
            'Beach','Party','Healthcare',
            'Space','Forest','Transportation',
            'Clouds','Coffee','Dogs',
            'Communication', 'Landscapes1'
        ];

        this.search_types = [
            'Photos', 'Videos', 'All'
        ]
    },
    methods: {
        on_click_item(item) {
            $('.category_name').html(item);
            $('input[name=category]').val(item);
        },
        on_click_content(content_type) {
            $('.content_name').html(content_type);
            $('input[name=content_type]').val(content_type);
        }
    }
};
</script>