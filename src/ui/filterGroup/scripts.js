
export default {
    props: [
        "filterGroup"
    ],

    data: () => ({
        checkedVariants: [],
        canBeLoaded: false,
        FILTER_BEHAVIOR: {
            RADIO: 'radio',
            CHECKBOX: 'checkbox',
        }
    }),

    watch: {
        checkedVariants() {
            this.$emit('sendDataFromChildFilterComponent', {
                name: this.filterGroup.name,
                checkedVariants: this.checkedVariants,
            })
        }
    },

    mounted() {
        if(this.filterGroup.selectedVariants.length){
            if(this.filterGroup.type === this.FILTER_BEHAVIOR.RADIO){
                this.filterGroup.selectedVariants.forEach(v => {
                    this.checkedVariants = v
                })
            } else if(this.filterGroup.type === this.FILTER_BEHAVIOR.CHECKBOX){
                this.filterGroup.selectedVariants.forEach(v => {
                    this.checkedVariants.push(v)
                })
            }
        }
        this.canBeLoaded = true
    }
}