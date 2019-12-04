const state = {
    menuText:[
        { 
            id: 1, 
            menu_text: 'HOME /'
        },
        { 
            id: 2, 
            menu_text: 'ABOUT US /'   
        },
        { 
            id: 3, 
            menu_text: 'OUR WORK /'   
        },
        { 
            id: 4, 
            menu_text: 'CONTACT'   
        }
    ],
    menuIcons:[
        { 
            id: 1, 
            img: 'tablet-menu-home.png'
        },
        { 
            id: 2, 
            img: 'tablet-menu-question-mark.png'
        },
        { 
            id: 3, 
            img: 'tablet-menu-hat.png'
        },
        { 
            id: 4, 
            img: 'tablet-menu-letter.png'
        }
    ],
    dropdown:[
        { 
            id: 1, 
            menu_text: 'HOME'
        },
        { 
            id: 2, 
            menu_text: 'ABOUT US'   
        },
        { 
            id: 3, 
            menu_text: 'OUR WORK'   
        },
        { 
            id: 4, 
            menu_text: 'CONTACT'   
        }
    ]
}

const getters = {
    menuText: function (state) {
        return state.menuText;
    },
    menuIcons: function (state) {
        return state.menuIcons;
    },
    dropdown: function (state) {
        return state.dropdown;
    }
}

export default {
    state,
    getters
}
