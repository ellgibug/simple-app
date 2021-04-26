import request from "../../helpers/request";
import {mapActions, mapGetters} from "vuex"

export default {
    name: "emailVerification",

    data: () => ({
        verificationCode: '',
    }),

    computed: {
        ...mapGetters("user", ["user"]),



    },

    methods: {
        ...mapActions("user", ["setIsAuthed", "setToken", "setUser"]),

        verifyEmail() {
            const that = this;
            request.post('verify-email', {
                code: this.user.code,
                email_verification_code: this.verificationCode
            })
                .then((response) => {
                    console.log(response)
                    that.setUser(response.data.user)

                })
                .catch(function (error) {
                    console.log(error);
                })

        },

        sendEmailVerificationLetter() {
            const that = this;
            request.post('send-verification-email', {
                code: this.user.code,
            })
                .then((response) => {
                    console.log(response)
                    that.setUser(response.data.user)

                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }
}