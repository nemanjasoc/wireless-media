const state = {
    boxes:[
        { 
            id: 1, 
            title: 'Lorem ipsum',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
            button_text: 'SHOW MORE',
            class_text:'spriteimagehat-box'
        },
        { 
            id: 2, 
            title: 'Lorem ipsum',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
            button_text: 'SHOW MORE',
            class_text:'spriteimagelike-box' 
        }
    ],
    boxImages:[
        {
            id: 1,
            class_text:'spriteimagecalculator-box'  
        },
        {
            id: 2,
            class_text:'spriteimagecloud-box'  
        },
        {
            id: 3,
            class_text:'spriteimagewatch-box' 
        },
        {
            id: 4,
            class_text:'spriteimageheart-box' 
        }
    ],
    slides:[
        {
            id: 1,
            img: 'carousel-group.png',
            carousel_text: 'LOREM IPSUM DOLOR SIT',
            arrow_text: 'LOREM IPSUM DOLOR SIT'
        },
        {
            id: 2,
            img: 'carousel-group.png',
            carousel_text: 'LOREM IPSUM DOLOR SIT',
            arrow_text: 'LOREM IPSUM DOLOR SIT' 
        },
        {
            id: 3,
            img: 'carousel-group.png',
            carousel_text: 'LOREM IPSUM DOLOR SIT',
            arrow_text: 'LOREM IPSUM DOLOR SIT' 
        }
    ]
}

const getters = {
    boxes: function (state) {
        return state.boxes;
    },
    boxImages: function (state) {
        return state.boxImages;
    },
    slides: function (state) {
        return state.slides;
    }
}

export default {
    state,
    getters
}
