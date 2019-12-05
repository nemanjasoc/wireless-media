<template>
    <div>
        <div class="carousel-container-background">
            <div class="carousel-container">
                <img src="../assets/images/carousel-group.png" alt="carousel-group">
                <h1 class="carousel-text">LOREM IPSUM<br>DOLOR SIT</h1>
                <div class="carousel-arrows">
                    <img src="../assets/images/left-carousel-arrow.png" alt="left-carousel-arrow">
                    <h3 class="carousel-arrows-text">LOREM IPSUM DOLOR SIT</h3>
                    <img src="../assets/images/right-carousel-arrow.png" alt="right-carousel-arrow">
                </div>
            </div>
        </div>

        <div class="box-wrapper">
            <h2 class="box-title">WHO WE ARE</h2>
            <div class="box-container" v-for="box in boxes" :key="box.id">
                <div class="box">
                    <img :src="getImgUrl(box.img)" :alt="box.img">
                </div>
                <div class="text-box">
                    <h4>{{ box.title }}</h4>
                    <p>{{ box.text }}</p>
                    <div class="more">
                        <button class="more-button">{{ box.button_text }}</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="box-wrapper">
            <h2 class="box-title">WHAT WE DO</h2>
            <div class="box-container">
                <div class="box" v-for="boxImage in boxImages" :key="boxImage.id">
                    <img :src="getImgUrl(boxImage.img)" :alt="boxImage.img">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'boxes',
            'boxImages'
        ])
    },
    methods: {
        getImgUrl(pic) {
            return require('../assets/images/'+pic)
        }
    }
}
</script>

<style lang="scss" scoped>
.carousel-container-background {
    background-image: url("../assets/images/carousel-dots.png");
    background-repeat: no-repeat;
    background-position: center;
    background-color: #f3f3f3; 
}

.carousel-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 75px 20px;
    border-bottom: 1px solid #fafafa;

    img {
        padding-right: 25px;
    }
}

.carousel-text {
    color: #757575;
    font-size: 40px;
    font-weight: 500;
}

.carousel-arrows {
    display: none;
}

.box-container {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;

    .box {
        width: 40%;
        background-color: #e9e9e9;
        margin: 20px 10px 10px 10px;
        padding: 30px 0;
        align-items: center;
        display: flex;
        justify-content: center;

        img {
            cursor: pointer;

            &:visited {
                color: #bbd547;
            }

            &:hover {
                color: #bbd547;
            }

            &:focus {
                color: #bbd547;
            }

            &:active {
                color: #bbd547;
            }
        }
    }

    .text-box {
        width: 40%;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        margin: 20px 10px 10px 10px;
    }
}

.box-wrapper {
    display: flex;
    flex-direction: column;
}

.box-title {
    color: #757575;
    text-align: center;
    width: 60%;
    margin-top: 20px;
    margin-bottom: 0;
    font-weight: 500;
    font-size: 25px;
}

h4, p {
    text-align: justify;
    padding: 0 10px;
    color: #959595;
    margin-top: 0;
}

.more {
    display: flex;
    justify-content: flex-end;

    .more-button {
        outline: none;
        background-color: #f3f3f4;
        cursor: pointer;
        border: none;
        padding: 5px;
        font-size: 10px;
        width: 85px;
        height: 20px;
        color: #959595;
        margin: 0 10px;
    }
}

/*media query*/

@media only screen and (max-width: 600px) {
    .carousel-text {
        font-size: 34px;
    }

    .carousel-container {
        img {
            width: 120px;
            height: 120px;
        }
    }
}

@media only screen and (max-width: 480px) {
    .carousel-text {
        font-size: 25px;
    }

    .carousel-container {
        img {
            width: 100px;
            height: 100px;
        }
    }
}

@media only screen and (max-width: 420px) {
    .carousel-text {
        font-size: 20px;
    }

    .carousel-container {
        img {
            width: 90px;
            height: 90px;
        }
    }

    .box-title {
        width: 100%;
    }

    .box-container {
        .box {
            width: 80%;
        }

        .text-box {
            width: 80%;
        }
    }
}

@media only screen and (max-width: 320px) {
    .carousel-text {
        display: none;
    }

    .carousel-container {
        display: flex;
        flex-direction: column;
        padding: 20px 0 0 0;
        
        img {
            width: 80px;
            height: 80px;
        }
    }

    .carousel-arrows {
        display: flex;
        background-color: white;
        margin-top: 20px;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        border-bottom: 1px solid #fafafa;

        .carousel-arrows-text {
            font-size: 12px;
            color: #757575;
            font-weight: 600;
        }

        img {
            width: 8px;
            height: 12px;
            cursor: pointer;
            margin: 0 20px;
        }
    }

    .box-container {
        .box {
            width: 80%;

            img {
                width: 38px;
            }
        }

        .text-box {
            width: 80%;
        }
    }

    .box-title {
        font-size: 18px;
    }

    h4 {
        font-size: 12px;
    }

    p {
        display: none;
    }
}
</style>
