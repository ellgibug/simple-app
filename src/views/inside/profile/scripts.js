import {mapGetters} from "vuex";

export default {
    name: "index",

    components: {

    },
    computed: {
        ...mapGetters("user", ["user"]),

    },
}