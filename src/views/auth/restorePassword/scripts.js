import request from "../../../helpers/request";
import {mapActions, mapGetters} from "vuex"

export default {
    name: "restorePassword",

    data: () => ({
        code: '',
        password: '',
        passwordConfirmation: '',
    }),

    methods: {
        ...mapActions("user", ["setIsAuthed", "setToken", "setUser"]),


        sendRestorePasswordRequest() {
            request.post('restore-password', {
                code: this.$route.params.userCode,
                password_reset_code: this.code,
                password_reset_token: this.$route.params.restoreToken,
                password: this.password,
                password_confirmation: this.passwordConfirmation,
            })
                .then((response) => {
                    console.log(response)
                    this.$router.push({
                        name: 'Login'
                    })
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
    }
}