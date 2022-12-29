<template>
    <div class="top-menu">
        <nuxt-link to="/">Starter</nuxt-link>
        <span class="dot"><i class="bi bi-circle-fill" ></i></span>
        <nuxt-link to="/lunch">Lunch</nuxt-link>
        <span class="dot"><i class="bi bi-circle-fill" ></i></span>
        <nuxt-link to="/desserts">Desserts</nuxt-link>
        <span class="dot"><i class="bi bi-circle-fill" ></i></span>
        <nuxt-link to="/yourorder">Your Order <i class="bi bi-bag"></i></nuxt-link>


      
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .top-menu {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: 40px 80px;
        a {
            // text-transform: uppercase;
            font-size: 20px;
            font-weight: 100;
            text-decoration: none;
            border-bottom: 1px solid transparent;
            &.nuxt-link-exact-active {
                border-bottom: 1px solid orange;
                &::after {
                display: block;
                content:"";
                height: 1px;
                width: 80%;
                background-color: orange;
                position: relative;
                top: 5px;
                margin: 0px auto;
            }
            }
            &:hover {
                border-bottom: 1px solid orange;

            }

        }
        .dot {
            color: goldenrod;
            font-size: 7px;
        }
    }
</style>