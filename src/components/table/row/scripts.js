export default {
    name: "table",

    props: [
        "row",
        "keys"
    ],

    data() {
        return {
            isVisible: false
        }
    },

    methods: {
        toggleVisibility() {
            console.log(111)
            this.isVisible = !this.isVisible
        }
    }
}