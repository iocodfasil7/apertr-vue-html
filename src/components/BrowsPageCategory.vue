<template>
        <section id = "category" class = "section">
            <p class = "section-title">
                Browse by category
            </p>
            <div class = "category-body">
                <div class = "outer">
                    <div class = "category-item" id = "category-landscapes">
                        <p>Landscapes</p>
                    </div>
                </div>
                <div class = "outer">
                    <div class = "category-item" id = "category-architecture">
                        <p>Architecture</p>
                    </div>
                </div>
                <div class = "outer">
                    <div class = "category-item" id = "category-people">
                        <p>People</p>
                    </div>
                </div>
                <div class = "outer">
                    <div class = "category-item" id = "category-abstract">
                        <p>abstract</p>
                    </div>
                </div>
                <div class = "outer">
                    <div class = "category-item" id = "category-animals">
                        <p>animals</p>
                    </div>
                </div>
                <div class = "outer">
                    <div class = "category-item" id = "category-summer">
                        <p>summer</p>
                    </div>
                </div>
                <div class = "outer">
                    <div class = "category-item" id = "category-textures">
                        <p>textures</p>
                    </div>
                </div>
                <div class = "outer">
                    <div class = "category-item" id = "category-sunset">
                        <p>sunsets</p>
                    </div>
                </div>
                <div class = "outer">
                    <div class = "category-item" id = "category-food">
                        <p>textures</p>
                    </div>
                </div>
                <div class = "outer">
                    <div class = "category-item" id = "category-city">
                        <p>sunsets</p>
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