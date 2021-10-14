import request from "../../helpers/request";
import {mapActions, mapGetters} from "vuex"
import HButton from "../../ui/button"

export default {
    name: "login",

    components: {
        HButton
    },

    watch: {
        isOpen(){
            if(this.isOpen){
                document.body.style.overflow = 'hidden'
                document.body.style.height = '100%'
                // document.body.style.pointerEvents = 'none'
            } else {
                document.body.style.overflow = 'auto'
                document.body.style.height = 'auto'
                // document.body.style.pointerEvents = 'auto'

            }
        }
    },

    data: () => ({
        links:[
            {
                title: 'Профиль',
                route: 'Profile',
                icon: require('../../assets/home.svg'),
                isHovered: false
            },
            {
                title: 'Проекты',
                route: 'Projects',
                icon: require('../../assets/book.svg'),
                isHovered: false
            },
            {
                title: 'Организация',
                route: 'UsersInOrganization',
                icon: require('../../assets/users.svg'),
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
                        window.location.reload()
                        that.setToken('')
                        that.setIsAuthed(false)
                        that.setUser({})

                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

    },

    mounted() {
            document.addEventListener('mousedown', this.handleOutsideClick)
    },

    destroyed(){
        document.removeEventListener('mousedown', this.handleOutsideClick)
    }
}