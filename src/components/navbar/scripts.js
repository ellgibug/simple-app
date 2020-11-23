import request from "../../helpers/request";
import {mapActions, mapGetters} from "vuex"

export default {
    name: "login",

    data: () => ({
        links:[
            {
                title: 'Профиль',
                route: 'Profile',
                icon: 'setting',
                isHovered: false
            },
            {
                title: 'Проекты',
                route: 'Projects',
                icon: 'book-open',
                isHovered: false
            },
            {
                title: 'Организация',
                route: 'UsersInOrganization',
                icon: 'house-user',
                isHovered: false
            },
        ],

        isOpen: false
    }),

    computed: {
        ...mapGetters("user", ["user"]),

    },

    methods: {
        ...mapActions("user", ["setIsAuthed", "setToken", "setUser"]),

        handleOutsideClick (e) {
            if (this.$refs.menu.contains(e.target)) {
                return
            }

            this.isOpen = false
        },

        setHovered(route){
            if(route) {

                if(route === this.$route.name){
                    return
                }

                this.links.map(l => {
                    if(l.route === route){
                        return l.isHovered = true
                    }
                })
            } else {
                this.links.map(l => {

                    return l.isHovered = false

                })
            }
        },

        goTo(name){
            this.isOpen = false;
            if(name === this.$route.name){
                return
            }
            this.$router.push({
                name
            })
        },

        sendLogoutRequest() {

            const that = this;

            request.post('logout')
                .then(function (response) {
                    if (response.status === 200) {
                        that.setToken('')
                        that.setIsAuthed(false)
                        that.setUser({})
                        window.location.reload()
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

    },

    mounted() {
        if (this.isOpen) {
            document.addEventListener('mousedown', this.handleOutsideClick)
        } else {
            document.removeEventListener('mousedown', this.handleOutsideClick)
        }
    },

    destroyed(){
        document.removeEventListener('mousedown', this.handleOutsideClick)
    }
}