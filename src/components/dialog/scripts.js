import HButton from "../../components/ui/HButton"


export default {
    name: "h-dialog",

    components: {
        HButton,
    },

    data: () => ({
        isOpen2: false
    }),

    props: [
        'isOpen',
        'title',
        'button'
    ],

    watch: {
        isOpen() {
            if(this.isOpen){
                document.body.style.overflow = 'hidden'
                setTimeout(() => {
                    this.isOpen2 = true
                }, 100)
            } else {
                document.body.style.overflow = 'auto'

                    this.isOpen2 = false

            }
        }
    },

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