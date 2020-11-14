import {mapGetters} from "vuex";
import request from "../../../helpers/request";

export default {

    name: "index",

    data(){
        return {
            projects: []
        }
    },


    components: {

    },
    computed: {
        ...mapGetters("user", ["user"]),

    },

    methods: {
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