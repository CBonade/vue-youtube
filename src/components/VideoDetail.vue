<template>
    <div class="video-detail col-md-8">
        <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" :src="`https://www.youtube.com/embed/${this.selectedVideo.id.videoId}`"></iframe>
        </div>
        <div class="details">
            <div class="title">{{this.selectedVideo.snippet.title}}</div>
            <div class="description">{{this.selectedVideo.snippet.description}}</div>
        </div>
    </div>
</template>

<script>

export default {
    
    props: {
        videos: Array,
        selectedVideo: Object
    }
  
}

</script>

<style lang="scss">

@import "../assets/scss/video-detail.scss"

</style>