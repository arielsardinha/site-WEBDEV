<template>
  <main>
    <p class="text-top">Videos novos toda quinta <b>quinta</b> as <b>20h</b></p>
    <a href="https://youtube.com" target="_blank">
      <img
        src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/subscribe.svg
"
        alt="inscrevace"
        class="subscribe"
      />
    </a>
    <p>youtube.com/wdevoficial</p>
  </main>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
main {
  background-color: var(--color-background-home);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    margin: 20px 0;
    width: 300px;
  }
  p {
    color: var(--color-text-light);
    text-align: center;
    font-size: 18px;
    &:last-child {
      font-size: 14px;
    }
  }
  @media (min-width: 700px) {
    img {
      width: 340px;
    }
    p {
      font-size: 22px;
      &:last-child {
        font-size: 18px;
      }
    }
  }
}
</style>
