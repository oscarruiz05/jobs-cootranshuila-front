<template>
    <div>
		<!-- banner -->
		<Banner/>
		<!-- categorias -->
        <section class="categories-section pt-100 pb-70">
			<div class="container">
				<div class="section-title text-center">
					<h2>Selecciona tu categoria</h2>
					<p>

					</p>
				</div>
				<div class="row">
					<div class="col-lg-3 col-md-4 col-sm-6" v-for="item in categories">
						<routerLink to="/empleos">
							<div class="category-card">
								<i :class='item.attributes.icon'></i>
								<h3>{{item.attributes.name}}</h3>
								<p>Ver empleos</p>
							</div>
						</routerLink>
					</div>
				</div>
			</div>
		</section>
		
		<!-- Way To Use Section Start -->
		<section class="use-section pt-100 pb-70" >
			<div class="container">
				<div class="section-title text-center">
					<h2>Postulate</h2>
				</div>

				<div class="row">
					<div class="col-md-4 col-sm-6">
						<div class="use-text">
							<span>1</span>
							<i class='flaticon-website'></i>
							<h3>Busca nuestras vacantes</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
						</div>
					</div>

					<div class="col-md-4 col-sm-6">
						<div class="use-text">
							<span>2</span>
							<i class='flaticon-recruitment'></i>
							<h3>Postulate a la que mas te guste</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
						</div>
					</div>

					<div class="col-md-4 col-sm-6 offset-sm-3 offset-md-0">
						<div class="use-text">
							<span>3</span>
							<i class='flaticon-login'></i>
							<h3>Envia tu hoja de vida</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Way To Use Section End -->

		<!-- sedes -->
		<section class="company-section pt-100 pb-70">
			<div class="container">
				<div class="section-title text-center">
					<h2>Nuestras sucursales</h2>
					<p>
						Nuestra más alta prioridad es el cliente para quien tenemos nuestra mejor actitud de servicio.
					</p>
				</div>

				<div class="row">
					<div class="col-lg-3 col-sm-6" v-for="item in agencies">
						<div class="company-card">
							<div class="company-logo">
								<a href="/">
									<img src="@/assets/img/logos/logo-dark.png" alt="company logo">
								</a>
							</div>
							<div class="company-text">
								<h3>{{item.attributes.name}}</h3>
								<p>
									<i class='bx bx-location-plus'></i>
									{{item.attributes.Address}}
								</p>
								<routerLink to="/empleos" class="company-btn">
									Ver empleos
								</routerLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </div>
</template>
<script>
import Banner from '@/components/home/Banner.vue';
import Axios from '@/services/index';
export default {
    components: {
		Banner,
	},
	mounted(){
		this.getCategories();
		this.getAgencies();
	},
	methods: {
		async getCategories(){
			const response = await Axios.getCategories();
			this.categories = response;
		},
		async getAgencies(){
			const response = await Axios.getAgencies();
			this.agencies = response;
		},
	},
	data(){
		return{
			categories: [],
			agencies: [],
		}
	}
}
</script>
<style>
.use-section{
	background-image: url(@/assets/img/banner/banner.jpg);
    background-position: center center;
    background-size: cover;
    position: relative;
    z-index: 0;
    background-attachment: fixed;
}
</style>