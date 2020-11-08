import request from "../../../helpers/request";
import {mapActions, mapGetters} from "vuex"

export default {
    name: "restorePassword",

    data: () => ({
        email: 'johndoe@gmail.com',
    }),

    methods: {
        ...mapActions("user", ["setIsAuthed", "setToken", "setUser"]),


        sendForgotPasswordRequest() {
            request.post('forgot-password', {
                email: this.email,
            })
                .then((response) => {
                    console.log(response)
                    console.log('Следуйте инструкциям в письме')
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
    }
}