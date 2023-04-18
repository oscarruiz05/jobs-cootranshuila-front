<template>
    <div>
        <BannerTop :title="'Empleos'"/>

        <!-- Job Section End -->   
        <section class="job-style-two job-list-section pt-100 pb-70">
            <div class="container">
                <div class="section-title text-center">
                    <h2>Nuestras Vacantes</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</p>
                </div>

                <div class="row">
                    <div class="col-lg-12" v-for="item in jobs">
                        <div class="job-card-two">
                            <div class="row align-items-center">
                                <div class="col-md-1">
                                    <div class="company-logo">
                                        <a href="#"></a>
                                        <img src="@/assets/img/logos/logo-sm-light.png" alt="logo">
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="job-info">
                                        <h3>
                                            <a href="#">{{item.attributes.name}}</a>
                                        </h3>
                                        <ul>                                          
                                            <li>
                                                <i class='bx bx-briefcase' ></i>
                                                {{item.attributes.category.data.attributes.name}}
                                            </li>
                                            <li>
                                                <i class='bx bx-briefcase' ></i>
                                                ${{item.attributes.salary}}
                                            </li>
                                            <li>
                                                <i class='bx bx-location-plus'></i>
                                                {{item.attributes.agency_id.data.attributes.name}}
                                            </li>
                                            <li>
                                                <i class='bx bx-stopwatch' ></i>
                                                {{formatDate(item.attributes.publishedAt)}}
                                            </li>
                                        </ul>

                                        <span>{{item.attributes.job_type}}</span>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="theme-btn text-end">
                                        <a href="/" class="default-btn">
                                            Aplicar
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                                <i class='bx bx-chevrons-left bx-fade-left'></i>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link active" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                <i class='bx bx-chevrons-right bx-fade-right'></i>
                            </a>
                        </li>
                    </ul>
                </nav> -->
            </div>
        </section>
    </div>
</template>

<script>
import BannerTop from '@/components/layouts/content/BannerTop.vue';
import Axios from '@/services/index';
import moment from 'moment';
export default {
    components: {
        BannerTop
    },
    methods: {
        async getJobs(){
			const response = await Axios.getJobs();
			this.jobs = response;
		},
        formatDate(date){
            const splitDate = date.split('T');
            moment.locale('es-co');
            return moment(splitDate[0]).format('LL');
        },
    },
    mounted(){
        this.getJobs();
    },
    data() {
        return {
            jobs: [],
        };
    }
};
</script>

<style scoped>

</style>