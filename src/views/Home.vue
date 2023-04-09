<template>
    <div>
		<!-- banner -->
		<Banner/>

        <section class="categories-section pt-100 pb-70">
			<div class="container">
				<div class="section-title text-center">
					<h2>Choose Your Category</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.</p>
				</div>

				<div class="row">
					<div class="col-lg-3 col-md-4 col-sm-6">
						<a href="job-list.html">
							<div class="category-card">
								<i class='flaticon-accounting'></i>
								<h3>Accountancy</h3>
								<p>301 open position</p>
							</div>
						</a>
					</div>

					<div class="col-lg-3 col-md-4 col-sm-6">
						<a href="job-list.html">
							<div class="category-card">
								<i class='flaticon-graduation-cap'></i>
								<h3>Education</h3>
								<p>210 open position</p>
							</div>
						</a>
					</div>

					<div class="col-lg-3 col-md-4 col-sm-6">
						<a href="job-list.html">
							<div class="category-card">
								<i class='flaticon-wrench-and-screwdriver-in-cross'></i>
								<h3>Automotive Jobs</h3>
								<p>281 open position</p>
							</div>
						</a>
					</div>

					<div class="col-lg-3 col-md-4 col-sm-6">
						<a href="job-list.html">
							<div class="category-card">
								<i class='flaticon-consultation'></i>
								<h3>Business</h3>
								<p>122 open position</p>
							</div>
						</a>
					</div>

					<div class="col-lg-3 col-md-4 col-sm-6">
						<a href="job-list.html">
							<div class="category-card">
								<i class='flaticon-heart'></i>
								<h3>Health Care</h3>
								<p>335 open position</p>
							</div>
						</a>
					</div>

					<div class="col-lg-3  col-md-4 col-sm-6">
						<a href="job-list.html">
							<div class="category-card">
								<i class='flaticon-computer'></i>
								<h3>IT & Agency</h3>
								<p>401 open position</p>
							</div>
						</a>
					</div>

					<div class="col-lg-3  col-md-4 col-sm-6 offset-md-2 offset-lg-0">
						<a href="job-list.html">
							<div class="category-card">
								<i class='flaticon-worker'></i>
								<h3>Engineering</h3>
								<p>100 open position</p>
							</div>
						</a>
					</div>

					<div class="col-lg-3 col-md-4 col-sm-6">
						<a href="job-list.html">
							<div class="category-card">
								<i class='flaticon-auction'></i>
								<h3>Legal</h3>
								<p>201 open position</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>
		<!-- Category Section End -->
		
		<!-- Way To Use Section Start -->
		<section class="use-section pt-100 pb-70">
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

		<!-- Companies Section Start -->
		<section class="company-section pt-100 pb-70">
			<div class="container">
				<div class="section-title text-center">
					<h2>Nuestras sucursales</h2>
					<p>
						Nuestra más alta prioridad es el cliente para quien tenemos nuestra mejor actitud de servicio.
					</p>
				</div>

				<div class="row">
					<div class="col-lg-3 col-sm-6" v-for="item in sedes">
						<div class="company-card">
							<div class="company-logo">
								<a href="/">
									<img src="@/assets/img/logos/logo-dark.png" alt="company logo">
								</a>
							</div>
							<div class="company-text">
								<h3>{{item.name}}</h3>
								<p>
									<i class='bx bx-location-plus'></i>
									{{item.address}}
								</p>
								<a href="/" class="company-btn">
									{{item.cant}} Vacantes
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Companies Section End -->
    </div>
</template>
<script>
import Banner from '@/components/home/Banner.vue';
import sedes from '@/data/sedes';
export default {
    components: {
		Banner,
	},
	data(){
		return{
			sedes,
		}
	}
}
</script>
<style></style>