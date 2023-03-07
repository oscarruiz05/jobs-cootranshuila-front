<template>
    <div class="navbar-area">
        <!-- Menu For Mobile Device -->
        <div class="mobile-nav">
            <a href="/" class="logo">
                <img src="@/assets/img/logos/logo-dark.png" class="logo">
            </a>
        </div>
    
        <!-- Menu For Desktop Device -->
        <div class="main-nav">
            <div class="container">
                <!-- menu -->
                <Menu/>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from './content/Menu.vue';
export default {
    components: {
        Menu,
    }
}
</script>

<style>
.logo-desk{
    width: 12rem;
}
</style>