import {mapGetters} from "vuex";
import request from "../../../helpers/request";
import HDialog from "../../../components/dialog/index"
import Page from "../../../components/ui/page"
import HButton from "../../../components/ui/HButton"
import Breadcrumbs from "../../../ui/breadcrumbs"
import CardOnList from "../../../components/projects/cardOnList"
import Search from "../../../components/projects/search"
import FullInfo from "../../../components/projects/fullInfo"
import Pagination from "../../../components/pagination"


export default {
    name: "Projects",

    data() {
        return {
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

            projects: [],
            project: {},

            search: '',

            pagination: {
                page: 1,
                total: 0,
                maxPage: 0,
                itemsPerPage: 1,
            },

            smallWindow: false
        }
    },


    components: {
        HDialog,
        HButton,
        Page,
        Breadcrumbs,
        // Container,
        // Col,
        CardOnList,
        Pagination,
        Search,
        FullInfo
    },

    watch: {
        'pagination.page'() {
            this.getProjects()
            this.project = {}
        },

        search() {
            this.getProjects()
            this.project = {}
            this.page = 1
        }
    },

    computed: {
        ...mapGetters("user", ["user"]),

        // smallWindow(){
        //     console.log(window.innerWidth)
        //     return window.innerWidth < 576
        // }
    },

    methods: {
        /**
         * Сохранение проекта
         */
        saveProject() {

            const that = this

            request.post('projects/create', {
                title: this.dialogs.create.model.title,
                user_id: this.user.id,
                organization_id: this.user.organization.id,
            })
                .then((response) => {
                    that.search = ''
                    that.pagination.page = that.pagination.maxPage
                    that.dialogs.create.visible = false
                })
                .catch(function (error) {
                    console.log(error)
                })
        },

        /**
         * Получение всех проектов по странице
         */
        getProjects() {

            const that = this

            request.get(`projects?page=${this.pagination.page}&search=${this.search}`)
                .then(function (response) {
                    that.projects = response.data.projects
                    that.total = response.data.total
                    that.pagination.maxPage = Math.ceil(response.data.total / response.data.itemsPerPage)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        /**
         * Загрузка проекта по коду
         * @param code
         */
        loadProject(code) {

            const that = this

            request.get(`project/${code}`)
                .then(function (response) {
                    that.project = response.data.project;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        /**
         * Обновление страницы
         * @param page
         */
        pageUpdated(page) {
            this.pagination.page = page
        },

        /**
         * Обновление поиска
         * @param search
         */
        startSearch(search) {
            this.search = search
        },

        detectWindowSize() {
            this.smallWindow = Boolean(window.innerWidth < 576)
        }
    },

    beforeMount() {
        this.getProjects()
    },

    mounted() {
        this.detectWindowSize()
        window.addEventListener('resize',  this.detectWindowSize)
    },

    destroyed() {
        window.removeEventListener('resize', this.detectWindowSize)
    }
}