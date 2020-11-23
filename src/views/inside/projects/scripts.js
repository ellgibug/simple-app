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
                    visible: false,
                    model: {
                        title: 'Это название нового проекта'
                    }
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
            const that = this;
            request.post('projects/create', {
                title: this.dialogs.create.model.title,
                user_id: this.user.id,
                organization_id: this.user.organization.id,
            })
                .then((response) => {
                    this.projects.push(response.data.project)
                    this.dialogs.create.visible = false;
                    console.log(response)
                    // that.setUser(response.data.user)

                })
                .catch(function (error) {
                    console.log(error);
                })
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