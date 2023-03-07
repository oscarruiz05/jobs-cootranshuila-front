<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <router-link to="/" class="navbar-brand">
            <img src="@/assets/img/logos/logo-dark.png" class="logo-desk">
        </router-link>
        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto">
                <template v-for="(item, i) in mainMenu">
                    <!-- children -->
                    <li class="nav-item" v-if="!item.children">
                        <router-link :to="{name: item.route}" class="nav-link" :class="{'active': $route.name == item.route}">{{item.title}}</router-link>
                    </li>
                    <!-- no children -->
                    <li class="nav-item" v-else>
                        <router-link to="/" class="nav-link dropdown-toggle" :class="{'active': $route.name == item.route}">{{item.title}}</router-link>
                        <ul class="dropdown-menu">
                            <li class="nav-item" v-for="(child, j) in item.children">
                                <router-link :to="{name: child.route}" class="nav-link" :class="{'active': $route.name == item.route}">{{child.title}}</router-link>
                            </li>
                        </ul>
                    </li>
                </template>
            </ul>

            <div class="other-option">
                <a href="#" class="signin-btn">Iniciar Sesión</a>
            </div>
        </div>
    </nav>
</template>

<script>
import mainMenu from '@/data/navigation';
export default {
    data(){
        return {
            mainMenu
        }
    }
}
</script>