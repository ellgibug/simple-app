import {mapGetters} from "vuex";
import request from "../../../helpers/request";
import HDialog from "../../../components/dialog/index"
import ProjectInfo from "../../../components/projectInfo/index"
import Breadcrumbs from "../../../ui/breadcrumbs"


export default {

    name: "index",

    data(){
        return {
            project: {},
            pages:[],

            content: 'hello world'

        }
    },


    components: {
        'h-dialog': HDialog,
        Breadcrumbs,
        ProjectInfo
    },
    computed: {
        ...mapGetters("user", ["user"]),

        breadcrumbs() {
            return [
                {
                    text: 'Проекты',
                    link: '/projects',
                },
                {
                    text: this.project.title,
                },
            ]
        }

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