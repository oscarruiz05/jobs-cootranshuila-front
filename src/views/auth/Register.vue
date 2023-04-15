<template>
    <div>
        <!-- Sign up Section Start -->
        <div class="signup-section ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-8 offset-md-2 offset-lg-3">
                        <form class="signup-form">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Nombre</label>
                                        <input type="text" class="form-control" placeholder="Nombre" required>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Apellido</label>
                                        <input type="text" class="form-control" placeholder="Apellido" required>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                      <label>Correo</label>
                                      <input type="email" class="form-control" placeholder="Correo" required>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label>Contraseña</label>
                                        <input type="password" class="form-control" placeholder="Contraseña" required>
                                    </div>
                                </div>
                                <div class="signup-btn text-center">
                                    <button type="submit">Registrarse</button>
                                </div>

                                <div class="create-btn text-center">
                                    <p>
                                        Ya tienes cuenta?
                                        <router-link to="login">Iniciar Sesión <i class='bx bx-chevrons-right bx-fade-right'></i></router-link>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>  
                </div>
            </div>
        </div>
        <!-- Sign Up Section End -->
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