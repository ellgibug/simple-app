import request from "../../helpers/request";
import {mapActions, mapGetters} from "vuex"
import h_header from "../../components/new/header/H_Header"

export default {
    name: "InsideLayout",


    components: {
        h_header,

    },

    data: () => ({

    }),

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
    }
}