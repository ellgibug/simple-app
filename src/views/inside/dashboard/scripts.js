import emailVerification from "../../../components/emailVerification/index"
import {mapGetters} from "vuex";

export default {
    name: "index",

    components: {
        'email-verification': emailVerification
    },
    computed: {
        ...mapGetters("user", ["user"]),

    },
}