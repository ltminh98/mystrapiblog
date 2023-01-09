<template>
  <div class="top-menu">
    <router-link to="/">Starter</router-link>
    <span class="dot"><i class="bi fiber_manual_record"></i></span>
    <router-link to="/lunch">Lunch</router-link>
    <span class="dot"><i class="bi fiber_manual_record"></i></span>
    <router-link to="/desserts">Desserts</router-link>
    <span class="dot"><i class="bi fiber_manual_record"></i></span>
    <router-link to="/your-order"
      >Your Order <i class="bi bi-bag"></i
    ></router-link>
  </div>
</template>

<style lang="scss">
.top-menu {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 40px 80px;
  .golden-lines {
    border-bottom: 1px solid orange;
    &::after {
      display: block;
      content: "";
      height: 1px;
      width: 80%;
      background-color: orange;
      position: relative;
      top: 5px;
      margin: 0px auto;
    }
  }
  a {
    // text-transform: uppercase;
    font-size: 20px;
    font-weight: 100;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    &.nuxt-link-exact-active {
      @extend .golden-lines;
    }
    &:hover {
      @extend .golden-lines;
    }
  }
  .dot {
    color: orange;
    font-size: 7px;
  }
}
</style>
