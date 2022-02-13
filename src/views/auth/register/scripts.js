import request from "../../../helpers/request";
import {mapActions, mapGetters} from "vuex"
import {USER_CONSTANTS} from "../../../constants/user";
import TextInput from "../../../components/auth/textInput"
import AuthCheckbox from "../../../components/auth/authCheckbox"
import AuthCard from "../../../components/auth/authCard"
import {NOTIFICATION_TYPE} from "../../../store/notification";



export default {
    name: "register",

    components: {
        TextInput,
        AuthCheckbox,
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
        ...mapActions("notification", ["setNotification"]),


        onSubmit() {
            const that = this;

            if(this.step === this.STEPS.PERSONAL_DATA){
                this.step = this.STEPS.ORGANIZATION_DATA
                return
            }

            if(this.step === this.STEPS.ORGANIZATION_DATA){


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
                    .catch(error => {
                        this.setNotification({
                            type: NOTIFICATION_TYPE.ERROR,
                            isVisible: true,
                            text: 'Неверный логин или пароль'
                        })
                        console.log(error);
                    });


            }


        },

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