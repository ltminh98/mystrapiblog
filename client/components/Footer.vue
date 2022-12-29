<template lang="">
    <footer class="footer text-center">
        <Logo />
        <span>Copyright &copy; 2022</span>
        <span class="dot"><i class="bi bi-circle-fill" ></i></span>
        <nuxt-link to="/">Privacy Policy</nuxt-link>
        <span class="dot"><i class="bi bi-circle-fill" ></i></span>
        <nuxt-link to="/">Term of Use</nuxt-link>
        <span class="dot"><i class="bi bi-circle-fill" ></i></span>
        <nuxt-link to="/">Contact</nuxt-link>

    </footer>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .footer {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: 40px 100px;
        .logo {
        .img {
            max-height: 30px;

            }
            }
        a {
            text-decoration: none;
            &:hover {
                color: gray;
                border-bottom: 1px solid orange;
            }
        }
        .dot {
            color: orange;
            font-size: 7px;
            }
    }
    
</style>