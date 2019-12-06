<template>
    <div>
        <carousel :navigationEnabled="true" :perPageCustom="[[200, 1]]" paginationActiveColor="#bcd546" paginationColor="#bababa">
            <slide v-for="slide in slides" :key="slide.id">
                 <div class="carousel-container-background">
                    <div class="carousel-container">
                        <img :src="getImgUrl(slide.img)" :alt="slide.img">
                        <h1 class="carousel-text">{{ slide.carousel_text }}</h1>
                        <div class="carousel-arrows">
                            <h3 class="carousel-arrows-text">{{ slide.arrow_text }}</h3>
                        </div>
                    </div>
                </div>
            </slide>
        </carousel>
        
        <div class="box-wrapper">
            <h2 class="box-title">WHO WE ARE</h2>
            <div class="box-container" v-for="box in boxes" :key="box.id">
                <div class="box">
                    <div :class="box.class_text"></div>
                </div>
                <div class="text-box">
                    <h4>{{ box.title }}</h4>
                    <p :class="{'show': box.showParagraph}">{{ box.text }}</p>
                    <div class="more">
                        <button class="more-button" @click="activateCurrent(box)">{{ box.button_text }}</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="box-wrapper">
            <h2 class="box-title">WHAT WE DO</h2>
            <div class="box-container">
                <div class="box" v-for="boxImage in boxImages" :key="boxImage.id">
                    <div :class="boxImage.class_text"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Carousel, Slide } from 'vue-carousel';

export default {
    computed: {
        ...mapGetters([
            'boxes',
            'boxImages',
            'slides'
        ])
    },
    methods: {
        getImgUrl(pic) {
            return require('../assets/images/'+pic)
        },

        activateCurrent(box) {
           box.showParagraph = !box.showParagraph;
           this.$forceUpdate();
        } 
    },
    components: {
        Carousel,
        Slide
    }
}
</script>

<style lang="scss">
@import 'src/scss/mixins';

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
    padding: 0px 20px;
    border-bottom: 1px solid #d5d5d5;
    height: 320px;

    img {
        padding-right: 25px;
    }

    .carousel-text {
        color: #757575;
        font-size: 40px;
        font-weight: 500;
    }
}

.carousel-arrows {
    display: none;
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
        position: relative;
    }

    .text-box {
        width: 40%;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        margin: 20px 10px 10px 10px;

        h4 {
            font-size: 12px;
        }
    }
}

.spriteimagehat-box-colored, 
.spriteimagehat-box { 
    width: 60px; 
    height: 46px; 
    background: url('../assets/images/hat-box-sprite.png') no-repeat; 
    @include sprite-mixin;
}

.spriteimagehat-box { 
    background-position: -5px -51px; 
    cursor: pointer;
    
    &:visited, &:hover, &:focus, &:active {
        background-position: -5px -0px
    }
}

.spriteimagelike-box-colored, 
.spriteimagelike-box { 
    width: 46px; 
    height: 47px;  
    background: url('../assets/images/like-box-sprite.png') no-repeat; 
    @include sprite-mixin;
}
 
.spriteimagelike-box { 
    background-position: -5px -52px;
    cursor: pointer; 
    
    &:visited, &:hover, &:focus, &:active {
        background-position: -5px -0px
    }
}

.spriteimagecalculator-box-colored, 
.spriteimagecalculator-box { 
    width: 40px; 
    height: 45px; 
    background: url('../assets/images/calculator-box-sprite.png') no-repeat; 
    @include sprite-mixin;
}
 
.spriteimagecalculator-box { 
    background-position: -5px -50px;
    cursor: pointer; 

     &:visited, &:hover, &:focus, &:active {
        background-position: -5px -0px
    }
}

.spriteimagecloud-box-colored, 
.spriteimagecloud-box { 
    width: 57px; 
    height: 39px; 
    background: url('../assets/images/cloud-box-sprite.png') no-repeat;
    @include sprite-mixin;
}
 
.spriteimagecloud-box { 
    background-position: -5px -44px;
    cursor: pointer;

    &:visited, &:hover, &:focus, &:active {
        background-position: -5px -0px
    }
}

.spriteimagewatch-box-colored, 
.spriteimagewatch-box { 
    width: 45px; 
    height: 45px;  
    background: url('../assets/images/watch-box-sprite.png') no-repeat; 
    @include sprite-mixin;
}
 
.spriteimagewatch-box { 
    background-position: -5px -50px; 
    cursor: pointer;

    &:visited, &:hover, &:focus, &:active {
        background-position: -5px -0px
    }
}

.spriteimageheart-box-colored, 
.spriteimageheart-box { 
    width: 50px; 
    height: 45px; 
    background: url('../assets/images/heart-box-sprite.png') no-repeat; 
    @include sprite-mixin;
}
 
.spriteimageheart-box { 
    background-position: -5px -50px;
    cursor: pointer;

    &:visited, &:hover, &:focus, &:active {
        background-position: -5px -0px;
    }
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
        @include transition-vendors(background-color 0.3s ease, color 0.3s ease);

        &:visited {
            background-color: #bbd547;
            color: #ffffff;
        }

        &:hover {
            background-color: #bbd547;
            color: #ffffff;  
        }

        &:focus {
            background-color: #bbd547;
            color: #ffffff;
        }

        &:active {
            background-color: #bbd547;
            color: #ffffff;
        }
    }
}

.VueCarousel {
    position: relative;

    .VueCarousel-pagination {
        position: absolute;
        top: 230px;
    }
}

/*media query*/

@media only screen and (max-width: 600px) {
    .carousel-container {
        img {
            width: 120px;
            height: 120px;
        }

        .carousel-text {
            font-size: 34px;
        }
    }
}

@media only screen and (max-width: 480px) {
    .carousel-container {
        height: 280px;

        img {
            width: 100px;
            height: 100px;
        }

        .carousel-text {
            font-size: 25px;
        }
    }

    .VueCarousel {
        .VueCarousel-pagination {
            top: 190px;
        }
    }
}

@media only screen and (max-width: 420px) {
    .carousel-text {
        font-size: 20px;
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

            h4 {
                font-size: 12px;
            }
        }
    }
}

@media only screen and (max-width: 320px) {
    .carousel-container {
        display: flex;
        flex-direction: column;
        padding: 0;
        height: 190px;
        position: relative;

        img {
            margin-top: -60px;
        }

        .carousel-text {
            display: none;
        }
    }

    .carousel-arrows {
        display: flex;
        background-color: white;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        border-bottom: 1px solid #d5d5d5;
        border-top: 1px solid #d5d5d5;
        position: absolute;
        bottom: 0;
        height: 58px;

        .carousel-arrows-text {
            font-size: 16px;
            color: #757575;
            font-weight: 500;
        }
    }

    .box-container {
        .box {
            width: 80%;
        }

        .text-box {
            width: 80%;

            h4 {
                font-size: 12px;
            }

            p {
                display: none;

                &.show {
                    display: block;
                }
            }
        }
    }

    .box-title {
        font-size: 18px;
    }

    .VueCarousel-pagination {
        display: none;
    }

    .VueCarousel-navigation {
        position: relative;

        .VueCarousel-navigation-prev {
            position: absolute;
            top: -32px;
            left: 28px;
            color: #9d9d9c;
        }

        .VueCarousel-navigation-next {
            position: absolute;
            top: -32px;
            right: 28px;
            color: #9d9d9c;
        }
    }
}
</style>
