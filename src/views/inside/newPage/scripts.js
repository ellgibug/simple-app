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

import axios from 'axios';



export default {
    name: "NewPage",

    data() {
        return {

            project: {},

            page: {
                title: '',
                body: '',
                is_published: true,
                image: ''
            }

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
                    link: `/projects/${this.project.code}`,
                },
                {
                    text: 'Новая страница',
                },
            ]
        }


    },

    methods: {
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

        savePage(){
            request.post(`projects/${this.project.code}/add-page`, {
                title: this.page.title,
                body: this.page.body,
                is_published: this.page.is_published,
            })
                .then((response) => {
                    console.log(response)
                    this.$router.push({
                        name: "Project",
                        params: {
                            code: this.project.code
                        }
                    })
                })
                .catch(function (error) {
                    console.log(error)
                })
        },

        handleFileUpload() {
            const file = this.$refs.files.files[0];

            console.log('file', file)

            const formData = new FormData();
            formData.append("image", file);

            request.post(`upload-file`, formData, true)
                .then(r => console.log(r))
                .catch(e => console.log(e))
                .finally(() => console.log('finally'))
        },

    },

    beforeMount() {
        this.loadProject(this.$route.params.code)
    },

    mounted() {

    },

    destroyed() {

    }
}