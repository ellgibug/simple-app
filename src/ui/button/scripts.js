export default {
    name: "hButton",

    props: [
        'iconRight',
        'iconLeft',
        'theme',

    ],

    computed: {
        buttonThemeClass(){
            if(!this.theme){
                return 'primary'
            }

            return this.theme
        },

        iconFillColor() {
            if(this.buttonThemeClass === 'primary'){
                return '#fff'
            }

            if(this.buttonThemeClass === 'secondary'){
                return '#9DB1CC'
            }

            return 'transparent'
        }
    },

    methods: {
        handleClick() {
            this.$emit('handleClick')
        }
    }


}