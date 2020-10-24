import request from "../../helpers/request";
import {mapActions, mapGetters} from "vuex"

export default {
    name: "login",

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