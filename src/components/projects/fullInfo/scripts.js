export default {


    data: () => ({

    }),

    props: [
        "project"
    ],

    computed: {


    },

    methods: {
        goToProject(code){
            this.$router.push({
                name: "Page",
                params: {
                    code
                }
            })
        },

        addPage(){
            this.$router.push({
                name: "NewPage",
                params: {
                    code: this.project.code
                }
            })
        },

        closeProject(){
            this.$emit('closeProject')
        }


    },


}