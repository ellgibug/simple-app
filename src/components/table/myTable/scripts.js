import TableRow from "../row"

export default {
    name: "MyTable",

    components: {
        TableRow
    },

    props: [
        "body",
        "header",
    ],

    computed: {
        keys() {
            let res = []

            for (let b in this.header){
                res.push(this.header[b].key)
            }

            return res
        }
    }
}