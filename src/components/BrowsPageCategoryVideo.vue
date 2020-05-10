<template>
        <section id = "category" class = "video-category section">
            <p class = "section-title">
                Browse by category
            </p>
            <div class = "category-body">
                <div class = "outer">
                    <div class = "category-item" id = "category-nature">
                        <p>Nature</p>
                    </div>
                </div>
                <div class = "outer">
                    <div class = "category-item" id = "category-travel">
                        <p>Travel</p>
                    </div>
                </div>
                <div class = "outer">
                    <div class = "category-item" id = "category-business">
                        <p>Business</p>
                    </div>
                </div>
                <div class = "outer">
                    <div class = "category-item" id = "category-people">
                        <p>people</p>
                    </div>
                </div>
                <div class = "outer">
                    <div class = "category-item" id = "category-motion">
                        <p>slow motion</p>
                    </div>
                </div>
                <div class = "outer">
                    <div class = "category-item" id = "category-animation">
                        <p>animation</p>
                    </div>
                </div>
                <div class = "outer">
                    <div class = "category-item" id = "category-family">
                        <p>family</p>
                    </div>
                </div>
                <div class = "outer">
                    <div class = "category-item" id = "category-sunsets">
                        <p>sunsets</p>
                    </div>
                </div>
                <div class = "outer">
                    <div class = "category-item" id = "category-abstract">
                        <p>abstract</p>
                    </div>
                </div>
                <div class = "outer">
                    <div class = "category-item" id = "category-timelapse">
                        <p>time lapse</p>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
export default {
    name : "category",
    data () {
        return {
            category_type : 0,
            img_arrange: []
        }
    }, 
    mounted() {
        for(let i = 1 ; i < 20 ; i ++ ) {
            this.img_arrange[i] = i;
        }
    },

    methods: {
        getFileName(index) {
            return '../assets/img' + index + '.png';
        }
    }
}
</script>