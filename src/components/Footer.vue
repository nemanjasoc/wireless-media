<template>
    <footer class="footer-container">
        <div class="social-networks">
            <li v-for="network in networks" :key="network.id">
                <div :class="network.class_text"></div>
            </li>
        </div>

        <ul class="menu-text">
            <li v-for="menuLi in dropdown" :key="menuLi.id">
                <a href="">{{ menuLi.menu_text }}</a>
            </li> 
        </ul>

        <div class="back-to-top" @click="scrollToTop()">
            <div class="spriteimagefooter-arrow-up"></div>
        </div>
    </footer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'dropdown',
            'networks'
        ])
    },
    methods: {
        getImgUrl(pic) {
            return require('../assets/images/'+pic)
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/mixins';

.spriteimagefooter-fb-colored, 
.spriteimagefooter-fb { 
    width: 12px; 
    height: 24px; 
    background: url('../assets/images/footer-fb-sprite.png') no-repeat; 
    @include sprite-mixin;
}
 
.spriteimagefooter-fb { 
    background-position: -5px -29px;
    cursor: pointer;
    position: absolute;
    top: 6px;
    left: 12px;

    &:visited, &:hover, &:focus, &:active {
        background-position: -5px -0px
    } 
}

.spriteimagefooter-twitter-colored, 
.spriteimagefooter-twitter { 
    width: 24px; 
    height: 18px; 
    background: url('../assets/images/footer-twitter-sprite.png') no-repeat;
    @include sprite-mixin; 
}
 
.spriteimagefooter-twitter { 
    background-position: -5px -23px;
    cursor: pointer;
    position: absolute;
    top: 8px;
    left: 7px;

    &:visited, &:hover, &:focus, &:active {
        background-position: -5px -0px
    } 
}

.spriteimagefooter-letter-colored, 
.spriteimagefooter-letter { 
    width: 25px; 
    height: 18px; 
    background: url('../assets/images/footer-letter-sprite.png') no-repeat; 
    @include sprite-mixin;
}
 
.spriteimagefooter-letter { 
    background-position: -5px -23px;
    cursor: pointer;
    position: absolute;
    top: 9px;
    left: 7px;

    &:visited, &:hover, &:focus, &:active {
        background-position: -5px -0px
    } 
}

.footer-container {
    background-color: #dbdbdb;
    height: 65px;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.social-networks {
    display: flex;

    li {    
        background-color: #fff;
        border-radius: 50%;
        cursor: pointer;
        width: 24px;
        height: 38px;
        position: relative;

        &:nth-child(1) {
            position: relative;
            margin-left: 25px;
            margin-right: 22px;
        }

        &:nth-child(2) {
            position: relative;
            margin-right: 22px;
        }

        &:nth-child(3) {
            position: relative;
        }
    }
}

.menu-text {
    display: flex;

    li {
        padding: 0 5px;

        a {
            color: #757575;
        }
    }
}

li {
    list-style-type: none;
    padding: 0 8px;

    a {
        text-decoration: none;
    }
}

.back-to-top {
    background-color: #fff;
    border-radius: 50%;
    width: 38px;
    height: 38px;
    position: relative;
    margin-right: 25px;
    cursor: pointer;

    .spriteimagefooter-arrow-up-colored, 
    .spriteimagefooter-arrow-up { 
        width: 13px; 
        height: 24px; 
        background: url('../assets/images/arrow-up-sprite.png') no-repeat; 
        @include sprite-mixin;
    }
    
    .spriteimagefooter-arrow-up { 
        background-position: -5px -29px;
        cursor: pointer;
        position: absolute;
        top: 6px;
        left: 13px;

        &:visited, &:hover, &:focus, &:active {
            background-position: -5px -0px
        } 
    }
}

ul {
    padding: 0;
}

/*media query*/

@media only screen and (max-width: 768px) {
    .menu-text {
        text-align: center;

        li {
            font-size: 13px;
        }
    }
}

@media only screen and (max-width: 600px) {
    .menu-text {
        li {
            font-size: 11px;
        }
    }

    .social-networks {
        li {    

            &:nth-child(1) {
                margin-left: 20px;
                margin-right: 8px;
            }

            &:nth-child(2) {
                margin-right: 8px;
            }

            &:nth-child(3) {
                
            }
        }
    }
}

@media only screen and (max-width: 480px) {
    .menu-text {
        display: none;
    }
}
</style>
