import request from "../../helpers/request";
import {mapActions, mapGetters} from "vuex"

export default {
    name: "h-dialog",

    data: () => ({

    }),

    props: [
        'isOpen',
        'title',
        'button'
    ],

    computed: {


    },

    methods: {

        handleOutsideClick (e) {
            if (this.$refs.dialog && this.$refs.dialog.contains(e.target)) {
                return
            }

            this.closeDialog()
        },

        closeDialog(){
            this.$emit("close");
        },

        actionClick(){
            this.$emit("action");
        }

    },

    mounted() {
            document.addEventListener('mousedown', this.handleOutsideClick)
    },

    destroyed(){
        document.removeEventListener('mousedown', this.handleOutsideClick)
    }
}