<template>
  <div id="app">
    <div class="wrapper">
      <SearchBar @termChange="videoSearch($event)"/>
      <div class="row">
        <div v-if="videoExists">
          <VideoDetail :selectedVideo="selectedVideo" :videos="videos"/>
        </div>
        <div v-else>
          <h3>Loading...</h3>
        </div>
        <div v-for="video in this.videos" class="col-md-4">
          <VideoList :videos="videos" :video="video" @selectedVideo="videoSelect($event)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
import VideoDetail from './components/VideoDetail.vue';
import VideoList from './components/VideoList.vue';
import { API_KEY } from './config.js';
import YouTubeSearch from 'youtube-api-search';

export default {
  name: 'app',
  data () {
    return {
      video: null,
      videos: [],
      selectedVideo: null,
      videoExists: false
    }
  },
  created() {
    this.videoSearch('Marvel');
  },
  methods: {
    videoSearch(searchTerm) {
        YouTubeSearch( {key: API_KEY, term: searchTerm}, (videos) => {
                this.videos = videos;
                this.selectedVideo = videos[0];
                console.log(this.videos);
                console.log(this.selectedVideo);
                this.videoExists = true;
        });
    },
    videoSelect(video) {
      this.selectedVideo = video;
    }
  },
  components: {
    SearchBar,
    VideoDetail,
    VideoList
  }
};

</script>

<style lang="scss">

@import "./assets/scss/main.scss"

</style>
