import {mapGetters} from "vuex";
import request from "../../../helpers/request";
import Page from "../../../components/ui/page"
import Breadcrumbs from "../../../ui/breadcrumbs"
import Search from "../../../components/projects/search"
import Pagination from "../../../components/pagination"
import UserCard from "../../../components/users/userCard"
import FilterGroup from "../../../ui/filterGroup"


export default {
    name: "usersInOrganization",

    components: {
        Page,
        Breadcrumbs,
        Search,
        Pagination,
        UserCard,
        FilterGroup
    },

    data() {
        return {
            search: '',
            breadcrumbs: [
                {
                    text: 'Пользователи',
                },
            ],
            users: [],
            organization: {},
            pagination: {
                page: 1,
                total: 0,
                maxPage: 0,
                itemsPerPage: 1,
            },


            filters: {
                userType: {
                    root: false,
                    admin: false,
                    user: false
                },
                needConfirmation: false,
            },
        }
    },


    computed: {
        ...mapGetters("user", ["user"]),

        filterUserType() {
            return [
                {
                    id: 'root',
                    value: "Рут",
                },
                {
                    id: 'admin',
                    value: "Админ",
                },
                {
                    id: 'user',
                    value: "Пользователь",
                },
            ]
        },

        filterNeedConfirmation() {
            return [
                {
                    id: 'needConfirmation',
                    value: "Ждут подтверждения",
                    additional: this.users.filter(u => !u.is_confirmed_in_organization && u.role_id === 3).length
                }
            ]
        },

        filterGroups() {
            const selectedVariants = filters => {
                let res = []
                for (let item in filters) {
                    if (filters.hasOwnProperty(item) && filters[item]) {
                        res.push(item)
                    }
                }
                return res
            }


            const filterUserType = {
                name: 'filterUserType',
                type: 'checkbox',
                selectedVariants: selectedVariants(this.filters.userType),
                variants: this.filterUserType,
            }

            const filterNeedConfirmation = {
                name: 'filterNeedConfirmation',
                type: 'checkbox',
                selectedVariants: selectedVariants(this.filters.needConfirmation),
                variants: this.filterNeedConfirmation,
            }

            return [filterUserType, filterNeedConfirmation]
        },

    },

    methods: {
        getUsers() {

            const that = this;

            request.get(`organization/users/${this.user.organization.code}`)
                // request.get(`organization/users/${this.user.organization.code}?unconfirmed=y`)
                .then(function (response) {

                    that.users = response.data.users
                    that.organization = response.data.organization
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        confirm(user) {
            request.get(`user/${user.code}/confirm`)
                .then(function (response) {

                    that.users = response.data.users
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        startSearch() {
            console.log('startSearch')
        },

        pageUpdated(page) {
            this.pagination.page = page
        },

        /**
         * Ключ для перерендеривания компонентов сгруппированных фильтров
         * @param filter
         * @returns {string|*}
         */
        filterGroupKey(filter) {
            if (Array.isArray(filter.selectedVariants) && filter.selectedVariants.length) {
                return `${filter.name}${filter.selectedVariants.join('')}`
            }

            return filter.name
        },

        getFilterData(filterData) {
            console.log('f d', filterData)
        }
    },

    beforeMount() {

        setTimeout(() => {
            this.getUsers()
        }, 0)


    }
}