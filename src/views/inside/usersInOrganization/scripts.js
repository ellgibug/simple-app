import {mapGetters} from "vuex";
import request from "../../../helpers/request";
import Page from "../../../components/ui/page"
import Breadcrumbs from "../../../ui/breadcrumbs"
import Search from "../../../components/projects/search"
import Pagination from "../../../components/pagination"
import UserCard from "../../../components/users/userCard"



export default {

    name: "index",


    components: {
        Page,
        Breadcrumbs,
        Search,
        Pagination,
        UserCard
    },

    data(){
        return {
            search: '',
            breadcrumbs: [
                {
                    text: 'Пользователи',
                },
            ],
            users: [],
            organization: {},
            pagination: {
                page: 1,
                total: 0,
                maxPage: 0,
                itemsPerPage: 1,
            },

            smallWindow: false
        }
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
                    that.organization = response.data.organization
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        confirm(user) {
            request.get(`user/${user.code}/confirm`)
                .then(function (response) {

                    that.users = response.data.users
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        startSearch(){
            console.log('startSearch')
        },

        pageUpdated(page) {
            this.pagination.page = page
        },
    },

    beforeMount() {

        setTimeout(() => {
            this.getUsers()
        }, 0)


    }
}