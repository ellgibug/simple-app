import {mapGetters} from "vuex";
import request from "../../../helpers/request";
import HDialog from "../../../components/dialog/index"
import Page from "../../../components/ui/page"
import Container from "../../../components/ui/container"
import Col from "../../../components/ui/col"
import Breadcrumbs from "../../../ui/breadcrumbs"
import CardOnList from "../../../components/projects/cardOnList"
import Search from "../../../components/projects/search"
import FullInfo from "../../../components/projects/fullInfo"
import Pagination from "../../../components/pagination"


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
            },
            breadcrumbs: [
                {
                    text: 'Проекты',
                },
            ],
            project: {},
            pages: [],
            page: 1,
            total: 0,
            maxPage: 0,
            search: '',
            itemsPerPage: 1,
        }
    },


    components: {
        'h-dialog': HDialog,
        Page,
        Breadcrumbs,
        Container,
        Col,
        CardOnList,
        Pagination,
        Search,
        FullInfo
    },

    watch: {
        page(){
            this.getProjects()
            this.project = {}
        },

        search(){
            this.getProjects()
            this.project = {}
            this.page = 1
        }
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
                    // this.projects.push(response.data.project)
                    this.getProjects()
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

            request.get(`projects?page=${this.page}&search=${this.search}`)
                .then(function (response) {

                    that.projects = response.data.projects
                    that.total = response.data.total
                    that.maxPage = Math.ceil(response.data.total / response.data.itemsPerPage)
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },



        loadProject(code) {
            const that = this;

            request.get(`project/${code}`)
                .then(function (response) {

                    that.project = response.data.project;
                    that.pages = response.data.pages;
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        pageUpdated(d){
            this.page = d
            console.log('pu', d)
        },

        startSearch(d){
            this.search = d
            console.log('pu', d)
        }
    },

    beforeMount() {
        this.getProjects()

    }
}