<template>
  <section class="page-title title-bg1">
    <div class="d-table">
      <div class="d-table-cell">
        <h2>{{title}}</h2>
        <ul>
          <li>
            <routerLink to="/">Home</routerLink>
          </li>
          <li>{{title}}</li>
        </ul>
      </div>
    </div>
    <div class="lines">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.page-title.title-bg1{
  background-image: url(@/assets/img/banner/banner.jpg);
}
</style>
