import {mapGetters} from "vuex";
import request from "../../../helpers/request";
import HDialog from "../../../components/dialog/index"

export default {

    name: "index",

    data(){
        return {
            projects: [],
            dialogs: {
                create: {
                    visible: true
                }
            }
        }
    },


    components: {
        'h-dialog': HDialog
    },
    computed: {
        ...mapGetters("user", ["user"]),

    },

    methods: {
        test1(){
            console.log(111)
        },
        getProjects() {

            const that = this;

            request.get(`projects`)
                .then(function (response) {

                    that.projects = response.data.projects
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },

    beforeMount() {
        this.getProjects()

    }
}