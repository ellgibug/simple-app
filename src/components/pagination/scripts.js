import request from "../../helpers/request";
import {mapActions, mapGetters} from "vuex"

export default {
    name: "pagination",

    data: () => ({
        currentPage: 1
    }),

    props: [
        "page",
        "total"
    ],

    watch: {
        currentPage(){
            if(this.currentPage > this.total){
                this.currentPage = this.total
            }

            if(this.currentPage < 1){
                this.currentPage = 1
            }

            this.$emit('pageUpdated', this.currentPage)
        }
    },

    computed: {


    },

    methods: {
        goToNextPage(){
            if(this.currentPage >= this.total){
                return
            }
            this.currentPage ++
        },

        goToPrevPage(){
            if(this.currentPage <= 1){
                return
            }
            this.currentPage --
        }


    },

    mounted() {
        this.currentPage = this.page
    },

    destroyed(){

    }
}