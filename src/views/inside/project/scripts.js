import {mapGetters} from "vuex";
import request from "../../../helpers/request";
import HDialog from "../../../components/dialog/index"

export default {

    name: "index",

    data(){
        return {
            project: {},
            pages:[]

        }
    },


    components: {
        'h-dialog': HDialog
    },
    computed: {
        ...mapGetters("user", ["user"]),

    },

    methods: {

        getProject() {

            const that = this;

            request.get(`project/${this.$route.params.code}`)
                .then(function (response) {

                    that.project = response.data.project;
                    that.pages = response.data.pages;
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },

    beforeMount() {
        this.getProject()

    }
}