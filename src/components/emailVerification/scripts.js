import request from "../../helpers/request";
import {mapActions, mapGetters} from "vuex"
import HButton from "../../components/ui/HButton"


export default {
    name: "emailVerification",

    data: () => ({
        verificationCode: '',
    }),

    components: {
        HButton,
    },

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