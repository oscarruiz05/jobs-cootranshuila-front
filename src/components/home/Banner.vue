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
                        <label for="exampleInputEmail1">Keyword:</label>
                        <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Job Title"
                        />
                    </div>
                    </div>

                    <div class="col-md-4">
                    <div class="form-group">
                        <label for="exampleInputEmail2">Location:</label>
                        <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail2"
                        placeholder="City or State"
                        />
                    </div>
                    </div>

                    <div class="col-md-4">
                    <button type="submit" class="find-btn">
                        Find A Job
                        <i class="bx bx-search"></i>
                    </button>
                    </div>
                </div>
                </form>

                <ul class="keyword">
                <li>Trending Keywords:</li>
                <li><a href="#">Automotive,</a></li>
                <li><a href="#">Education,</a></li>
                <li><a href="#">Health</a></li>
                <li>and</li>
                <li><a href="#">Care Engineering</a></li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>


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