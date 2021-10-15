import request from "../../../../helpers/request";
import {mapActions, mapGetters} from "vuex"
import Container from "../../../ui/container/index"
import Col from "../../../ui/col/index"
import HeaderLink from "../links"

export default {
    name: "H_Header",

    components: {
        Container,
        Col,
        HeaderLink
    },

    watch: {

    },

    computed: {
        ...mapGetters("user", ["user"]),

    },

    methods: {
        ...mapActions("user", ["setIsAuthed", "setToken", "setUser"]),

        goTo(name){
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

        openMenu() {

        }

    },
}