<template>
    <div>
        <!-- Account Area Start -->
        <section class="account-section ptb-100">
            <div class="container">
                <div class="row">
                    <!-- menu -->
                    <div class="col-md-4">
                        <div class="account-information">
                            <div class="profile-thumb">
                                <img src="@/assets/img/account.jpg" alt="account holder image">
                                <h3>John Smith</h3>
                                <p>Web Developer</p>
                            </div>

                            <ul>
                                <li>
                                    <a href="#" class="active">
                                        <i class='bx bx-user'></i>
                                        My Profile
                                    </a>
                                </li>
                                <li>
                                    <a href="resume.html">
                                        <i class='bx bxs-file-doc'></i>
                                        My Resume
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class='bx bx-briefcase'></i>
                                        Applied Job
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class='bx bx-envelope'></i>
                                        Messages
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class='bx bx-heart'></i>
                                        Saved Jobs
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class='bx bx-lock-alt' ></i>
                                        Change Password
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class='bx bx-coffee-togo'></i>
                                        Delete Account
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class='bx bx-log-out'></i>
                                        Log Out
                                    </a>
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