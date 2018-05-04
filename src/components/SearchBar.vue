<template>
    <div class="col-md-12 text-center search-bar">
        <h3>Search: <input v-model="searchTerm" @keyup.enter="searchTermChange"/><i class="fas fa-search search-glass" @click="searchTermChange"></i></h3>
    </div>
</template>

<script>

export default {
    data() {
        return {
            searchTerm: ''
        }
    },
    methods: {
        searchTermChange() {
            this.$emit('termChange', this.searchTerm);
        }
    }
    
}

</script>

<style  lang="scss">

@import "../assets/scss/search-bar.scss"

</style>