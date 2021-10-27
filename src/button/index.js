import radio from './src/button.vue'

// console.log(Button);
radio.install = function(Vue){
    Vue.component(radio.name, radio);
}

export default radio;