export default {
    name: "index",

    data(){
        return {

        }
    },

    computed: {
        links(){
           let links = [
               {
                   title: 'Авторизация',
                   route: 'Login'
               },
               {
                   title: 'Регистрация',
                   route: 'Register'
               },
               {
                   title: 'Забыли пароль',
                   route: 'ForgotPassword'
               }
           ];

           let route = this.$route.name;

           return links.filter(link => link.route !== route)

        }
    }
}