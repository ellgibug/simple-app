import {mapActions, mapGetters} from "vuex"
import request from "../../helpers/request";

export default {


    computed: {
        ...mapGetters("user", ["user"]),
    },


}