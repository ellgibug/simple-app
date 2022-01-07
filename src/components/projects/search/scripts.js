
export default {


    data: () => ({
        currentSearch: '',
        timer: 0
    }),

    props: [
        "search",
    ],

    watch: {
        currentSearch() {
            if (this.timer) {
                clearTimeout(this.timer)
            }

            let sleep = 300
            switch(this.currentSearch.length) {
                case 1:
                    sleep = 1000
                    break
                case 2:
                case 3:
                    sleep = 700
                    break
                case 4:
                case 5:
                    sleep = 500
            }

            this.timer = setTimeout(() => {
                this.$emit('startSearch', this.currentSearch)
            }, 300)
        }
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