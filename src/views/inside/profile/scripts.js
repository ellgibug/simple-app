import {mapGetters} from "vuex";
import Breadcrumbs from "../../../ui/breadcrumbs"
import PersonalData from "../../../components/personalData"
import EmailVerification from "../../../components/emailVerification"
import OrganizationCard from "../../../components/organizationCard"

export default {
    name: "index",

    components: {
        Breadcrumbs,
        PersonalData,
        EmailVerification,
        OrganizationCard
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