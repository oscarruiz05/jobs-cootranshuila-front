<template>
    <div>
        <!-- Account Area Start -->
        <section class="account-section ptb-100">
            <div class="container">
                <div class="row">
                    <!-- menu -->
                    <div class="col-md-4">
                        <div class="account-information sticky-bar">
                            <div class="profile-thumb">
                                <img src="@/assets/img/account.jpg" alt="account holder image">
                                <h3>John Smith</h3>
                                <p>Web Developer</p>
                            </div>

                            <ul>
                                <li>
                                    <router-link :to="{name: 'dashboard'}" class="active">
                                        <i class='bx bx-user'></i>
                                        Perfil
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{name: 'resumen'}">
                                        <i class='bx bxs-file-doc'></i>
                                        Hoja de Vida
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{name: 'dashboard'}">
                                        <i class='bx bx-briefcase'></i>
                                        Aplicaciones
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{name: 'dashboard'}">
                                        <i class='bx bx-lock-alt' ></i>
                                        Cambiar Contraseña
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{name: 'dashboard'}">
                                        <i class='bx bx-log-out'></i>
                                        Cerrar Sesión
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- vista -->
                    <div class="col-md-8">
                        <div class="account-details">
                            <router-view></router-view>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Account Area End -->
    </div>
</template>

<script>
export default {
    mounted() {
        
    },

    methods: {
        
    },
    data() {
        return {
            
        };
    },
};
</script>

<style scoped>

</style>