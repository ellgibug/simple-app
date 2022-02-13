
export default {


    props: [

    ],

    computed: {

        showHeader(){
            return this.headerLinks.firstLink.text && this.headerLinks.secondLink.text
        },

        headerLinks() {

            let res = {
                firstLink: {
                    text: '',
                    link: '',
                },
                secondLink: {
                    text: '',
                    link: '',
                },
            }

            if(this.$route.name === 'Login'){
                res.firstLink = {
                    text: 'Логин',
                }
                res.secondLink = {
                    text: 'Регистрация',
                    link: 'Register'
                }
                return res
            }

            if(this.$route.name === 'Register'){
                res.firstLink = {
                    text: 'Логин',
                    link: 'Login'
                }
                res.secondLink = {
                    text: 'Регистрация',
                }
                return res
            }

            return res
        }
    },

    methods: {

    },



}