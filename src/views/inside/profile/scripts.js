import {mapGetters} from "vuex";
import Breadcrumbs from "../../../ui/breadcrumbs"
import PersonalData from "../../../components/personalData"
import EmailVerification from "../../../components/emailVerification"

export default {
    name: "index",

    components: {
        Breadcrumbs,
        PersonalData,
        EmailVerification
    },

    data() {
        return {
            breadcrumbs: [
                {
                    text: 'Личный кабинет',
                },
            ]
        }
    },

    computed: {
        ...mapGetters("user", ["user"]),

    },
}