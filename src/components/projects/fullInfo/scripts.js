
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

        closeProject(){
            this.$emit('closeProject')
        }


    },


}