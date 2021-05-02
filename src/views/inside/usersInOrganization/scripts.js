import {mapGetters} from "vuex";
import request from "../../../helpers/request";
import MyTable from "../../../components/table/myTable"

export default {

    name: "index",

    data(){
        return {
            users: [],
            headers: [
                {
                    title: 'Id',
                    key: 'id'
                },
                {
                    title: 'Имя',
                    key: 'name'
                },
                {
                    title: 'E-mail',
                    key: 'email'
                },
                {
                    title: 'Роль',
                    key: 'role_id'
                },
                {
                    title: '',
                    key: ''
                }
            ]
        }
    },


    components: {
        MyTable
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

        setTimeout(() => {
            this.getUsers()
        }, 1000)


    }
}