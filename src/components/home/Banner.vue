<template>
    <div class="banner-section" style="background-image: url('@/assets/img/banner/1.jpg') center cover;">
        <div class="d-table">
        <div class="d-table-cell">
            <div class="container">
            <div class="banner-content text-center">
                <p>Que esperas para ser parte de esta familia</p>
                <h1>¡Deja tu CV para conseguir el trabajo que deseas!</h1>

                <form class="banner-form">
                <div class="row">
                    <div class="col-md-4">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Trabajo:</label>
                        <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Escriba el trabajo"
                        v-model="query.job"
                        />
                    </div>
                    </div>

                    <div class="col-md-4">
                    <div class="form-group">
                        <label for="selectSede">Sede:</label>
                        <select id="selectSede" class="form-control" v-model="query.sede">
                            <option value="">Seleccione..</option>
                            <option v-for="item in sedes" :value="item.id">
                                {{item.attributes.name}}
                            </option>
                        </select>
                    </div>
                    </div>

                    <div class="col-md-4">
                    <button type="submit" class="find-btn">
                        Buscar
                        <i class="bx bx-search"></i>
                    </button>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import Axios from '@/services/index';

export default {
    mounted() {
        this.getSedes();
    },
    methods: {
        async getSedes(){
            const response = await Axios.getAgencies();
            this.sedes = response;
        }
    },
    data(){
        return {
            sedes: [],
            query: {
                job: null,
                sede: null
            }
        }
    }
}
</script>


<style scoped>
.banner-section{
    background-image: url(@/assets/img/banner/1.jpg);
    background-position: center center;
    background-size: cover;
}
.banner-section::after{
    background-image: url(@/assets/img/banner/white-shape.png);
}
</style>