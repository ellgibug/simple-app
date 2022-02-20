import request from "../../helpers/request";
import {mapActions, mapGetters} from "vuex"
import h_header from "../../components/new/header/H_Header"

export default {
    name: "InsideLayout",


    components: {
        h_header,

    },

    data: () => ({
        asidePanel: {
            isOpened: false
        }
    }),

    watch: {
        'asidePanel.isOpened'(){
            if(this.asidePanel.isOpened){
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = 'auto'
            }
        }
    },

    computed: {
        ...mapGetters("user", ["user"]),

    },

    methods: {
        ...mapActions("user", ["setIsAuthed", "setToken", "setUser"]),


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

        handleOutsideClick (e) {
            if(this.$refs.mobileMenuWrapper === e.target) {
                this.asidePanel.isOpened = false
            }
        },
    },

    mounted() {
        document.addEventListener('mousedown', this.handleOutsideClick)
    },

    destroyed(){
        document.removeEventListener('mousedown', this.handleOutsideClick)
    }
}