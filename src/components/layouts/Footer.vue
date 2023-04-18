<template>
    <div>
        <footer class="footer-area pt-100 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-sm-6">
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <a href="index.html">
                                    <img src="@/assets/img/logos/logo-light.png" class="logo_foot" alt="logo">
                                </a>
                            </div>
    
                            <p class="text_foot">
                                Nuestra más alta prioridad es el cliente para quien tenemos nuestra mejor actitud de servicio, 
                                el cliente es la razón de ser de nuestro trabajo; le servimos con gusto en forma amable y eficiente; 
                                nuestro potencial mas valioso es nuestra gente y la capacidad de trabajar en equipo.
                            </p>
    
                            <div class="footer-social">
                                <a href="https://www.facebook.com/CootranshuilaLTDA" target="_blank"><i class='bx bxl-facebook'></i></a>
                                <a href="https://twitter.com/Cootranshuila" target="_blank"><i class='bx bxl-twitter'></i></a>
                                <a href="https://www.linkedin.com/company/cootranshuila/about/" target="_blank"><i class='bx bxl-linkedin'></i></a>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-lg-4 col-sm-6">
                        <div class="footer-widget pl-60">
                            <h3>Elaces de interes</h3>
                            <ul>
                                <li>
                                    <routerLink :to="{name: 'jobs'}">
                                        <i class='bx bx-chevrons-right bx-tada'></i>
                                        Empleos
                                    </routerLink>
                                </li>
                                <li>
                                    <routerLink :to="{name: 'perfil'}">
                                        <i class='bx bx-chevrons-right bx-tada'></i>
                                        Perfil
                                    </routerLink>
                                </li>
                                <li>
                                    <routerLink :to="{name: 'about'}">
                                        <i class='bx bx-chevrons-right bx-tada'></i>
                                        Nosotros
                                    </routerLink>
                                </li>
                                <li>
                                    <a href="https://cootranshuila.com/" target="_blank">
                                        <i class='bx bx-chevrons-right bx-tada'></i>
                                        Pagina Web
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
    
                    <div class="col-lg-4 col-sm-6">
                        <div class="footer-widget footer-info">
                            <h3>información</h3>
                            <ul>
                                <li>
                                    <span>
                                        <i class='bx bxs-phone'></i>
                                        telefono:
                                    </span>
                                    <a href="tel:882569756">
                                        +101 984 754
                                    </a>
                                </li>
    
                                <li>
                                    <span>
                                        <i class='bx bxs-envelope'></i>
                                        Correo:
                                    </span>
                                    <a href="mailto:clientes@cootranshuila.com">
                                        clientes@cootranshuila.com
                                    </a>
                                </li>
    
                                <li>
                                    <span>
                                        <i class='bx bx-location-plus'></i>
                                        Dirección:
                                    </span>
                                    Av. 26 # 4 - 82, Neiva - Huila
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div class="copyright-text text-center">
            <p>Copyright &copy; {{year}} <a href="https://cootranshuila.com" target="_blank">Cootranshuila ltda</a>.</p>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    created() {
        this.year = new Date().getFullYear();
    },
    data() {
        return {
            year: ""
        };
    },
    components: { RouterLink }
}
</script>

<style scoped>
.footer-area::before{
    background-image: url(@/assets/img/shape/footer.png);
}
.text_foot{
    text-align: justify;
}
.logo_foot{
    width: 15rem;
}
</style>