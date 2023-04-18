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

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                            </p>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Consectetur adipiscing elit.
                            </p>

                            <div class="theme-btn">
                                <a href="#" class="default-btn" target="_blank">Mas información</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-5">
                        <div class="grow-img">
                            <img src="@/assets/img/grow-img.jpg" alt="grow image">
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