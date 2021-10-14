import {mapGetters} from "vuex";
import request from "../../../helpers/request";
import HDialog from "../../../components/dialog/index"
import ProjectInfo from "../../../components/projectInfo/index"
import Breadcrumbs from "../../../ui/breadcrumbs"


export default {

    name: "page",

    data() {
        return {
            project: {},
            page: {},
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
                    link: `/projects/${this.project.code}`,
                },
                {
                    text: this.page.title,
                },
            ]
        }

    },

    methods: {

        getPage() {
            const that = this;

            request.get(`page/${this.$route.params.code}`)
                .then(function (response) {

                    // that.project = response.data.project;
                    that.page = response.data.page;
                    that.project = response.data.page.project;
                    console.log(response)

                    // rte.document.body.innerHTML = that.page.body
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        updatePageBody() {
            // let body = rte.document.body.innerHTML
            // let body = document.getElementById('textarea').innerHTML;
            let body = this.page.body
            //
            //
            request.patch(`page/${this.page.code}/edit/body`, {
                body
            })
                .then((response) => {

                    console.log(1, response.data.page.body)

                })
                .catch(function (error) {
                    console.log(error);
                })


            console.log(body)
        },

        execCmd(cmd) {
            console.log(cmd)

            document.execCommand(cmd, false, null)


            rte.document.execCommand(cmd, false, null)
        },

        wrapText(openTag, closeTag) {
            // var textArea = document.getElementById('myTa');
            // var len = textArea.value.length;
            // var start = textArea.selectionStart;
            // var end = textArea.selectionEnd;
            // var selectedText = textArea.value.substring(start, end);
            // var replacement = openTag + selectedText + closeTag;
            //
            // console.log(start, end)
            //
            // if (end !== start) {
            //     textArea.value = textArea.value.substring(0, start) + replacement + textArea.value.substring(end, len);
            // }


            var textArea = document.getElementById('textarea');
            var len = textArea.innerHTML.length;
            var start = textArea.selectionStart;
            var end = textArea.selectionEnd;
            var selectedText = textArea.innerHTML.substring(start, end);
            var replacement = openTag + selectedText + closeTag;

            console.log(start, end)

            if (end !== start) {
                textArea.innerHTML = textArea.innerHTML.substring(0, start) + replacement + textArea.innerHTML.substring(end, len);
            }
        }
    },

    beforeMount() {
        this.getPage()


    },

    mounted() {
        // let body = document.getElementById('textarea')
        //
        // if(body){
        //     body.designMode = 'On'
        //
        //     console.log(2, body)
        //     console.log(3, body.designMode)
        // }
        //
        // rte.document.designMode = 'On'


    }
}