const state = {
    menuText:[
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
    ],
    menuIcons:[
        { 
            id: 1, 
            class_text:'spriteimagetablet-menu-home'
        },
        { 
            id: 2, 
            class_text:'spriteimagetablet-menu-question-mark'
        },
        { 
            id: 3, 
            class_text:'spriteimagetablet-menu-hat'
        },
        { 
            id: 4, 
            class_text:'spriteimagetablet-menu-letter'
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
