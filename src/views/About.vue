<template>
    <div>
        <BannerTop :title="'Nosotros'"/>

        <!-- Grow Business Section Start -->
        <div class="grow-business pb-50 pt-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7">
                        <div class="grow-text">
                            <div class="section-title">
                                <h2>Nuestra Empresa</h2>
                            </div>

                            <p>
                                Nuestra más alta prioridad es el cliente para quien tenemos nuestra mejor actitud de servicio, el cliente es la razón de ser de nuestro trabajo; le servimos con gusto en forma amable y eficiente; nuestro potencial mas valioso es nuestra gente y la capacidad de trabajar en equipo. Consideramos, atendemos y valoramos a los demás, hacemos un esfuerzo colectivo permanente para el logro de los objetivos comunes. Desarrollamos la capacidad de escuchar, reconocer y optimizar nuestras fortalezas y limitaciones para generar un proceso de aprendizaje continuo. Nuestra mente esta abierta al cambio y la innovación permanente. Estamos en capacidad de adaptarnos a nuevas condiciones y retos. Tenemos la habilidad para implementar, estipular y generar nuevas ideas a fin de obtener más y mejores servicios. Nuestro compromiso es irreprochable y transparente, actuamos con claridad dentro de los principio morales y éticos. Somos coherentes dentro de lo que decimos, pensamos y hacemos, manejamos con responsabilidad la información y recursos que nos han sido confiados. Construimos relaciones de confianza entre nosotros y nuestros clientes.
                            </p>

                            <div class="theme-btn">
                                <a href="https://cootranshuila.com/nuestra-empresa" class="default-btn" target="_blank">Mas información</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-5">
                        <div class="grow-img">
                            <img src="@/assets/img/LTDA.jpg" alt="grow image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Grow Business Section End -->

        <!-- Why Choose Section Start -->
        <section class="why-choose-two pt-100 pb-70">
            <div class="container">
                <div class="section-title text-center">
                    <h2>Trabaja con nosotros</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus</p>
                </div>

                <div class="row">
                    <div class="col-lg-4 col-sm-6">
                        <div class="choose-card">
                            <i class="flaticon-resume"></i>
                            <h3>Envia tu hoja de vida</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore   </p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-sm-6">
                        <div class="choose-card">
                            <i class="flaticon-recruitment"></i>
                            <h3>Realiza nuestra entrevista</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore   </p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                        <div class="choose-card">
                            <i class="flaticon-employee"></i>
                            <h3>Haz parte de nuestro equipo</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore   </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Why Choose Section End -->
    </div>
</template>

<script>
import BannerTop from '@/components/layouts/content/BannerTop.vue';
export default {
    components: {
        BannerTop
    },
    data() {
        return {
            
        };
    }
};
</script>

<style scoped>

</style>