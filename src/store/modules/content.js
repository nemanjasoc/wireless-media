const state = {
    boxes:[
        { 
            id: 1, 
            img: 'hat-box.png',
            title: 'Lorem ipsum',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
            button_text: 'SHOW MORE'
        },
        { 
            id: 2, 
            img: 'like-box.png',
            title: 'Lorem ipsum',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
            button_text: 'SHOW MORE' 
        }
    ],
    boxImages:[
        {
            id: 1,
            img: 'calculator-box.png' 
        },
        {
            id: 2,
            img: 'cloud-box.png' 
        },
        {
            id: 3,
            img: 'watch-box.png' 
        },
        {
            id: 4,
            img: 'heart-box.png' 
        }
    ]
}

const getters = {
    boxes: function (state) {
        return state.boxes;
    },
    boxImages: function (state) {
        return state.boxImages;
    }
}

export default {
    state,
    getters
}