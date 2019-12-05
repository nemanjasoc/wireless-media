<template>
    <footer class="footer-container">
        <div class="social-networks">
            <li v-for="network in networks" :key="network.id">
                <img :src="getImgUrl(network.img)" :alt="network.img">
            </li>
        </div>

        <ul class="menu-text">
            <li v-for="menuLi in dropdown" :key="menuLi.id">
                <a href="">{{ menuLi.menu_text }}</a>
            </li> 
        </ul>

        <div class="back-to-top" @click="scrollToTop()">
            <img src="../assets/images/footer-arrow-up.png" alt="arrow-up">
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
    position: relative;

    li {    
        background-color: #fff;
        border-radius: 50%;
        cursor: pointer;
        width: 24px;
        height: 38px;

        &:nth-child(1) {
            position: relative;
            margin-left: 25px;
            margin-right: 22px;

            img {
                position: absolute;
                top: 7px;
                left: 14px;
            }
        }

        &:nth-child(2) {
            position: relative;
            margin-right: 22px;

            img {
                position: absolute;
                top: 9px;
                left: 9px;
            }
        }

        &:nth-child(3) {
            position: relative;

            img {
                position: absolute;
                top: 9px;
                left: 8px;
            }
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

    img {
        position: absolute;
        top: 7px;
        left: 12px;
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
            width: 20px;
            height: 34px;

            &:nth-child(1) {
                margin-right: 15px;
                margin-left: 20px;

                img {
                    top: 7px;
                    left: 13px;
                    width: 10px;
                }
            }

            &:nth-child(2) {
                margin-right: 15px;

                img {
                    top: 8px;
                    left: 8px;
                    width: 20px;
                }
            }

            &:nth-child(3) {
                img {
                    top: 9px;
                    left: 8px;
                    width: 20px;
                }
            }
        }
    }

    .back-to-top {
        width: 34px;
        height: 34px;
        margin-right: 20px;

        img {
            top: 7px;
            left: 11px;
            height: 20px;
        }
    }
}

@media only screen and (max-width: 480px) {
    .menu-text {
        display: none;
    }
}
</style>
