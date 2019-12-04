<template>
    <div class="header-wrapper" :class="{ 'menu-open': dropdownMenu }">
        <div class="top-container">
            <img class="logo" src="../assets/images/logo.png" alt="logo">

            <div class="menu">
                <ul class="menu-text">
                    <li><a href="">HOME</a></li> /
                    <li><a href="">ABOUT US</a></li> /
                    <li><a href="">OUR WORK</a></li> /
                    <li><a href="">CONTACT</a></li>
                </ul>

                <ul class="menu-icons">
                    <li><a href=""><img src="../assets/images/tablet-menu-home.png" alt="home"></a></li>
                    <li><a href=""><img src="../assets/images/tablet-menu-question-mark.png" alt="question-mark"></a></li>
                    <li><a href=""><img src="../assets/images/tablet-menu-hat.png" alt="hat"></a></li>
                    <li><a href=""><img src="../assets/images/tablet-menu-letter.png" alt="letter"></a></li>
                </ul>

                <div class="menu-bar">
                    <div class="dropbtn"><img src="../assets/images/bar.png" alt="bar" @click="dropdownMenu = !dropdownMenu"></div>
                </div>

                <img class="search" src="../assets/images/search.png" alt="search" @click="isSearchClicked = !isSearchClicked">
            </div>
        </div>

        <form class="search-form" :class="{ inactive: !isSearchClicked }">
            <input class="form-input" type="search">
        </form>

        <div id="dropdown-content" class="dropdown-content" :class="{ inactive: !dropdownMenu }">
            <ul class="menu-text-mobile">
                <li><a href="">HOME</a></li> 
                <li><a href="">ABOUT US</a></li> 
                <li><a href="">OUR WORK</a></li> 
                <li><a href="">CONTACT</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isSearchClicked: false,
            dropdownMenu: false
        }
    }
}
</script>

<style lang="scss">
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
    }

    a {
        cursor: pointer;

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

li {
    display: inline;
    padding: 0 8px;

    a {
        text-decoration: none;
    }
}

.search {
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

    .search {
        margin-left: 35px;
    }
}

@media only screen and (max-width: 600px) {
    .menu-text  {
        li {
            font-size: 12px;
        }
    }

    .search {
        margin-left: 25px;
    }
}

@media only screen and (max-width: 480px) {
    .menu-text {
        display: none;
    }

    .menu-icons {
        display: inline;
    }

    .menu-icons li a img {
        width: 16px;
        height: 16px;
        cursor: pointer;
 
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

    .search {
        margin-left: 20px;
    }
}

@media only screen and (max-width: 420px) {
    .logo {
        width: 120px;
        height: 40px;
    }

    .menu-icons {
        li {
            padding: 0 3px;
        }
    }

    .search {
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
                }

                &:nth-child(2) {
                    background-color: #81b36e;
                }

                &:nth-child(3) {
                    background-color: #429099;
                }

                &:nth-child(4) {
                    background-color: #1375b8;
                }

                a {
                    padding-left: 10px;
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
