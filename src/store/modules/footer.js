const state = {
    networks:[
        { 
            id: 1, 
            img: 'footer-fb.png'
        },
        { 
            id: 2, 
            img: 'footer-twitter.png'
        },
        { 
            id: 3, 
            img: 'footer-letter.png'
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