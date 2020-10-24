import request from "../../../helpers/request";
import {mapActions, mapGetters} from "vuex"

export default {
    name: "login",

    data: () => ({
        email: 'johndoe@gmail.com',
        password: 'password',
    }),

    methods: {
        ...mapActions("user", ["setIsAuthed", "setToken", "setUser"]),


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
    }
}