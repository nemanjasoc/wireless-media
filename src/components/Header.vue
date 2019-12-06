<template>
    <div class="header-wrapper" :class="{ 'menu-open': dropdownMenu }">
        <div class="top-container">
            <img class="logo" src="../assets/images/logo.png" alt="logo">

            <div class="menu">
                <ul class="menu-text">
                    <li v-for="menuLi in menuText" :key="menuLi.id">
                        <a href="">{{ menuLi.menu_text }}</a>
                    </li> 
                </ul>

                <ul class="menu-icons">
                    <div v-for="menuIcon in menuIcons" :class="menuIcon.class_text" :key="menuIcon.id"></div>
                </ul>

                <div class="menu-bar">
                    <div class="dropbtn">
                        <div class="spriteimagebar" @click="dropdownMenu = !dropdownMenu"></div>
                    </div>
                </div>

                <div class="spriteimagesearch" @click="isSearchClicked = !isSearchClicked"></div>
            </div>
        </div>

        <form class="search-form" :class="{ inactive: !isSearchClicked }">
            <input class="form-input" type="search">
        </form>

        <div id="dropdown-content" class="dropdown-content" :class="{ inactive: !dropdownMenu }">
            <ul class="menu-text-mobile">
                <li v-for="dropdownLi in dropdown" :key="dropdownLi.id">
                    <a href="">{{ dropdownLi.menu_text }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            isSearchClicked: false,
            dropdownMenu: false
        }
    },
    computed: {
        ...mapGetters([
            'menuText',
            'menuIcons',
            'dropdown'
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
@import 'src/scss/mixins';

.header-wrapper {
    display: flex;
    flex-direction: column;

    .top-container {
        display: flex;
        justify-content: space-between;
        height: 95px;
        width: 100%;
    }    

    &::after {
        content: '';
        background-color: #b9d448;
        height: 4px;
        background-image: linear-gradient(to right, #b9d448, #1375b8);
    }
}

.logo {
    margin: auto 0 auto 15px;
}

.menu {
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu-text {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    li {
        font-size: 14px;

        a {
            cursor: pointer;
            @include transition-vendors(color 0.3s ease);

            &:visited {
                color: #1375b8;
            }

            &:hover {
                color: #d6e49e;  
            }

            &:focus {
                color: #74a8af;
            }

            &:active {
                color: #bfd6b8;
            }
        }
    }
}

.menu-text-mobile {
    display: none;
}

.menu-icons {
    display: none;
}

.menu-bar {
    display: none;
    cursor: pointer;
}

.spriteimagesearch-colored,
.spriteimagesearch { 
    width: 17px; 
    height: 16px;
    @include sprite-mixin;  
    background: url('../assets/images/search-sprite.png') no-repeat; 
}
 
.spriteimagesearch { 
    background-position: -5px -21px; 
    cursor: pointer;

    &:visited, &:hover, &:focus, &:active {
        background-position: -5px -0px
    } 
}

li {
    display: inline;
    padding: 0 6px;

    a {
        text-decoration: none;
    }
}

.spriteimagesearch {
    margin-left: 50px;
    margin-right: 15px;
    cursor: pointer;
}

.search-form {
    display: block;
    margin: 0 15px 10px 15px;

    &.inactive {
        display: none;
    }
}

.form-input {
    width: 100%;
    height: 25px;
    padding: 3px;
}

/*media query*/

@media only screen and (max-width: 768px) {
    .menu-text {
        li {
            font-size: 13px;
        }
    }

    .spriteimagesearch {
        margin-left: 35px;
    }
}

@media only screen and (max-width: 600px) {
    .menu-text  {
        li {
            font-size: 12px;
        }
    }

    .spriteimagesearch {
        margin-left: 25px;
    }
}

@media only screen and (max-width: 480px) {
    .menu-text {
        display: none;
    }

    ul {
        padding: 0;
    }

    .menu-icons {
        display: inline;
        position: relative;
        cursor: pointer;

        .spriteimagehome-active, 
        .spriteimagehome-focus, 
        .spriteimagehome-hover, 
        .spriteimagehove-visited, 
        .spriteimagetablet-menu-home { 
            width: 24px; 
            height: 21px; 
            background: url('../assets/images/menu-home.png') no-repeat; 
            @include sprite-mixin;
        }

        .spriteimagetablet-menu-home { 
            background-position: -5px -52px;
            position: absolute;
            left: -125px;
            bottom: -10px;
            
            &:visited {
                background-position: -34px -26px;
            }

            &:hover {
                background-position: -5px -26px;
            }

            &:focus {
                background-position: -34px -0px;
            }

            &:active {
                background-position: -5px -0px;
            }
        }

        .spriteimagequestion-mark-active, 
        .spriteimagequestion-mark-focus, 
        .spriteimagequestion-mark-hover, 
        .spriteimagequestion-mark-visited, 
        .spriteimagetablet-menu-question-mark { 
            width: 21px; 
            height: 21px; 
            background: url('../assets/images/menu-question-mark.png') no-repeat; 
            @include sprite-mixin;
        }

        .spriteimagetablet-menu-question-mark { 
            background-position: -5px -52px;
            position: absolute;
            left: -90px;
            bottom: -10px; 

            &:visited {
                background-position: -31px -26px;
            }

            &:hover {
                background-position: -5px -26px;
            }

            &:focus {
                background-position: -31px -0px;
            }

            &:active {
                background-position: -5px -0px;
            }
        }

        .spriteimagehat-active, 
        .spriteimagehat-focus, 
        .spriteimagehat-hover, 
        .spriteimagehat-visited, 
        .spriteimagetablet-menu-hat { 
            width: 28px; 
            height: 21px;
            background: url('../assets/images/menu-hat.png') no-repeat; 
            @include sprite-mixin;
        }
        
        .spriteimagetablet-menu-hat { 
            background-position: -5px -52px; 
            position: absolute;
            left: -60px;
            bottom: -10px;

            &:visited {
                background-position: -38px -26px;
            }

            &:hover {
                background-position: -5px -26px;
            }

            &:focus {
                background-position: -38px -0px;
            }

            &:active {
                background-position: -5px -0px;
            }
        }

        .spriteimageletter-active, 
        .spriteimageletter-focus, 
        .spriteimageletter-hover, 
        .spriteimageletter-visited, 
        .spriteimagetablet-menu-letter {
            width: 26px; 
            height: 18px; 
            background: url('../assets/images/menu-letter.png') no-repeat; 
            @include sprite-mixin;
        }
        
        .spriteimagetablet-menu-letter { 
            background-position: -5px -46px;
            position: absolute;
            left: -20px;
            bottom: -10px;
            
            &:visited {
                background-position: -36px -23px;
            }

            &:hover {
                background-position: -5px -23px;  
            }

            &:focus {
                background-position: -36px -0px;
            }

            &:active {
                background-position: -5px -0px;
            }
        }
    }

    .spriteimagesearch {
        margin-left: 20px;
    }
}

@media only screen and (max-width: 420px) {
    .logo {
        width: 103px;
        height: 40px;
    }

    .menu-icons {
        li {
            padding: 0 4px;
        }
    }

    .spriteimagesearch {
        margin-left: 12px;
    }
}

@media only screen and (max-width: 320px) {
    .menu-text {
        display: none;
    }

    .menu-icons {
        display: none;
    }

    .menu-bar {
        display: block;

        .dropbtn {
            .spriteimagebar-colored, 
            .spriteimagebar { 
                width: 20px; 
                height: 16px; 
                background: url('../assets/images/bar-sprite.png') no-repeat; 
                @include sprite-mixin;
            }
            
            .spriteimagebar { 
                background-position: -5px -21px; 
                cursor: pointer;

                &:visited, &:hover, &:focus, &:active {
                    background-position: -5px -0px;
                } 
            }
        }
    }

    .dropdown-content {
        .menu-text-mobile {
            display: flex;
            flex-direction: column;
            margin: 0px;
            padding: 0 0 5px 0px;

            li {
                padding: 5px;

                &:nth-child(1) {
                    background-color: #bbd547;
                    margin-bottom: 1px;
                }

                &:nth-child(2) {
                    background-color: #81b36e;
                    margin-bottom: 1px;
                }

                &:nth-child(3) {
                    background-color: #429099;
                    margin-bottom: 1px;
                }

                &:nth-child(4) {
                    background-color: #1375b8;
                }

                a {
                    padding-left: 10px;
                    color: #ffffff;
                    @include transition-vendors(color 0.3s ease);

                    &:hover {
                        color: #9d9d9c;
                    }
                }
            }

        }

        &.inactive {
            display: none;
        }
    }

    .header-wrapper {
        &.menu-open {
            &::after {
                display: none;
            }
        }
    }
}
</style>
