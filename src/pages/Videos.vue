<template>
  <main>
    <section class="container">
      <h1>Videos</h1>
      <section class="videos">
        <div v-for="(video, index) in videos" :key="index" class="video">
          <a href="video.link" target="_blank">
            <img :src="video.thumb" :alt="video.title" />
            <div class="video_texto">{{ video.title }}</div>
          </a>
        </div>
      </section>
    </section>
  </main>
</template>
<script>
import api from "../services/api";
export default {
  name: "Videos",
  data() {
    return {
      videos: [],
    };
  },
  mounted() {
    api.get("/videos.json").then((response) => {
      this.videos = response.data;
    });
  },
};
</script>
<style scoped lang="scss">
main {
  align-items: center;
  text-align: center;
}
.videos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    margin: 20px 0;
  }
}
.video {
  width: 80%;
  img {
    width: 100%;
  }
  a {
    color: var(--color-text-dark);
    font-weight: 800;
  }
}
</style>
