import request from "../../../helpers/request";
import {mapActions, mapGetters} from "vuex"
import {USER_CONSTANTS} from "../../../constants/user";
import TextInput from "../../../components/auth/textInput"
import AuthCard from "../../../components/auth/authCard"


export default {
    name: "register",

    components: {
        TextInput,
        AuthCard
    },

    data() {
        const STEPS = {
            PERSONAL_DATA: 'personalData',
            ORGANIZATION_DATA: 'organizationData',
        }

        return {
            STEPS,

            step: STEPS.PERSONAL_DATA,

            name: '',
            email: '',
            password: '',
            passwordConfirmation: '',

            isOrganizationExists: false,
            organizationCode: ''
        }
    },

    methods: {
        ...mapActions("user", ["setIsAuthed", "setToken", "setUser"]),

        goToOrganizationStep(){

            if(this.name && this.email && this.password && this.passwordConfirmation && this.password === this.passwordConfirmation){
                this.step = this.STEPS.ORGANIZATION_DATA
            } else {
                alert('Fill the form')
            }

        },


        sendRegisterRequest() {
            const that = this;
            request.post('register', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.passwordConfirmation,
                role: this.isOrganizationExists ? USER_CONSTANTS.REQUEST_USER_TYPE_WITH_ORGANIZATION : USER_CONSTANTS.REQUEST_USER_TYPE_WITHOUT_ORGANIZATION,
                organization_code: this.organizationCode
            })
                .then(function (response) {
                    if(response.data.token){
                        that.setToken(response.data.token)
                        that.setIsAuthed(true)
                        that.setUser(response.data.user)
                        window.location.reload()
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    }
}