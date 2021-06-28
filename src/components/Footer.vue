<template>
  <footer>
    <a
      class="socialLink"
      v-for="(socialLink, index) in socialLinks"
      :key="index"
      :href="socialLink.link"
      target="_blank"
    >
      <img
        :src="socialLink.icon"
        :alt="socialLink.label"
        :title="socialLink.label"
      />
    </a>
  </footer>
</template>
<script>
import api from "../services/api.js";
export default {
  name: "Footer",
  data() {
    return {
      socialLinks: [],
    };
  },
  mounted() {
    api.get("social-links.json").then((response) => {
      this.socialLinks = response.data;
    });
  },
};
</script>
<style lang="scss">
footer {
  width: 100%;
  height: 60px;
  background-color: var(--color-background-nav);
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    border: solid 1px white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
    img {
      width: 20px;
    }
  }
}
</style>
