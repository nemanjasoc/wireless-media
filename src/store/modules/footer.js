const state = {
    networks:[
        { 
            id: 1, 
            class_text:'spriteimagefooter-fb'
        },
        { 
            id: 2, 
            class_text:'spriteimagefooter-twitter'
        },
        { 
            id: 3, 
            class_text:'spriteimagefooter-letter'
        }
    ]
}

const getters = {
    networks: function (state) {
        return state.networks;
    }
}

export default {
    state,
    getters
}