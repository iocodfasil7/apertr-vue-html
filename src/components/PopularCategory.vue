<template>
    <section id = "popularCategory" class = "section">
        <p class = "section-title">Other popular categories</p>
        <ul>
            <li v-for="item in lst_popular_categories" :key="item">
                <a href="#">{{item}}</a>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    name : "PopularCategory",
    data () {
        return {
            lst_popular_categories: []
        }
    },

    mounted() {
        this.lst_popular_categories = [
            'Mother`s Day', 'Skylines', 'Military', 'Party',
            'Beach', 'Floral', 'Education', 'Forest',
            'Space', 'Background', 'Marketing', 'Coffee',
            'Clouds', 'Biology', 'Birthday', 'Communication',
            'Dogs', 'Nature', 'Travel', 'Technology',
            'Food', 'Sky', 'Father`s Day', 'Wedding'
        ];
    }
}

</script>
