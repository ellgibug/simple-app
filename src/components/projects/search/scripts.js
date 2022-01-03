
export default {


    data: () => ({
        currentSearch: ''
    }),

    props: [
        "search",
    ],

    computed: {


    },

    methods: {
        applySearch(){
            this.$emit('startSearch', this.currentSearch)
        }
    },

    mounted(){
        this.currentSearch = this.search
    }


}