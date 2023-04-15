<template>
    <div>
        <!-- Sign In Section Start -->
        <div class="signin-section ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-8 offset-md-2 offset-lg-3">
                        <form class="signin-form">
                            <div class="form-group">
                              <label>Correo</label>
                              <input type="email" class="form-control" placeholder="Correo" required>
                            </div>

                            <div class="form-group">
                                <label>Contraseña</label>
                                <input type="password" class="form-control" placeholder="Contraseña" required>
                            </div>

                            <div class="signin-btn text-center">
                                <button type="submit">Iniciar Sesión</button>
                            </div>

                            <div class="create-btn text-center">
                                <p>No tienes una cuenta?
                                    <router-link to="/registro">Registrate <i class='bx bx-chevrons-right bx-fade-right'></i></router-link>
                                </p>
                            </div>
                        </form>
                    </div>  
                </div>
            </div>
        </div>
        <!-- Sign In Section End -->
    </div>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            
        };
    }
};
</script>

<style scoped>

</style>