import request from "../../../helpers/request";
import {mapActions, mapGetters} from "vuex"
import TextInput from "../../../components/auth/textInput"
import AuthCard from "../../../components/auth/authCard"
import {NOTIFICATION_TYPE} from "../../../store/notification";

export default {
    name: "login",


    components: {
        TextInput,
        AuthCard
    },

    data: () => ({
        email: 'johndoe@gmail.com',
        password: 'password',

        // email: '',
        // password: '',
    }),

    methods: {
        ...mapActions("user", ["setIsAuthed", "setToken", "setUser"]),
        ...mapActions("notification", ["setNotification"]),


        sendLoginRequest() {
            const that = this;
            request.post('login', {
                email: this.email,
                password: this.password
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

        onSubmit() {
            const that = this;
            request.post('login', {
                email: this.email,
                password: this.password,
                source: 'login'
            })
                .then(function (response) {

                    console.log('r', response)

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
        },
    }
}