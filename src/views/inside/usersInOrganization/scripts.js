import {mapGetters} from "vuex";
import request from "../../../helpers/request";

export default {

    name: "index",

    data(){
        return {
            users: []
        }
    },


    components: {

    },
    computed: {
        ...mapGetters("user", ["user"]),

    },

    methods: {
        getUsers() {

            const that = this;

            request.get(`organization/users/${this.user.organization.code}`)
            // request.get(`organization/users/${this.user.organization.code}?unconfirmed=y`)
                .then(function (response) {

                    that.users = response.data.users
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },

    beforeMount() {
        this.getUsers()

    }
}