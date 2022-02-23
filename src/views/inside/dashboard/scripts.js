import emailVerification from "../../../components/emailVerification/index"
import DashboardPanel from "../../../components/dashboardPanel/index"
import {mapGetters} from "vuex";
import Page from "../../../components/ui/page"
import Breadcrumbs from "../../../ui/breadcrumbs"
import request from "../../../helpers/request";


export default {
    name: "index",

    components: {
        'email-verification': emailVerification,
        Page,
        Breadcrumbs,
        DashboardPanel,
    },

    data(){
        return{
            countOfProjects: 0,
            countOfUnconfirmedUsers: 0,
        }
    },


    computed: {
        ...mapGetters("user", ["user"]),

    },

    methods: {
        getCountOfProjects() {
            request.get(`count-of-projects`)
                .then(response => {
                    this.countOfProjects = response.data.countOfProjects

                })
                .catch(error => {
                    console.log(error);
                });
        },

        getUnconfirmedUsers() {
            request.get(`organization/unconfirmed-users`)
                .then(response => {
                    this.countOfUnconfirmedUsers = response.data.countOfUnconfirmedUsers
                    // console.log(this.countOfProjects)
                    console.log(response)
                })
                .catch(error => {
                    console.log(error);
                });
        },

    },

    beforeMount(){
        this.getCountOfProjects()
        this.getUnconfirmedUsers()
        console.log(this.countOfProjects)
    }
}