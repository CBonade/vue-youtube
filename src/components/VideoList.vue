<template>
    <div class="video-list list-group">
        <div class="video-list-item list-group-item">
            <div class="list-group-item" @click="onVideoSelect(video)" >
                <div class="video-list media">
                    <div class="media-left">
                        <img class="media-object" :src="video.snippet.thumbnails.default.url"/>
                    </div>
                    <div class="media-body">
                        <div class="media-heading">{{video.snippet.title}}</div>
                    </div>
                </div>
            </div>
         </div>
    </div>
</template>

<script>


export default {
    props: {
        videos: Array,
        video: Object
    },

    methods: {
        onVideoSelect(video) {
            this.$emit('selectedVideo', this.video);
            console.log("hi!");
        }
    }
}

</script>

<style  lang="scss">

@import "../assets/scss/video-list.scss"

</style>