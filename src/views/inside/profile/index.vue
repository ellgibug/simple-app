<template>
    <div class="p">
        <div class="p__menu">
            <div class="m">
                <div class="m__item m-item" v-for="i in 5" :class="[i === 1 && 'm-item_active']">
<!--                    <unicon name="user-circle"-->
<!--                            fill="#9db1cc"-->
<!--                            height="16" width="16"-->
<!--                    />-->
                    <div class="m-item__text">
                        Элемент {{ i }}
                    </div>
                </div>
            </div>
        </div>
        <div class="p__content p-content">
            <div class="p-content__breadcrumbs p-content__breadcrumbs_top">
                Элемент 1 / Элемент 2
            </div>
            <div class="p-content__title">
                <h1>Profile</h1>
            </div>
            <div class="p-content__inner p-content__inner_white">
<!--                <pre>{{ user }}</pre>-->
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda debitis delectus
                    exercitationem ipsa labore maxime nam optio quaerat, quo, repellendus tenetur unde? A, at facilis
                    fuga ipsum similique ut!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda debitis delectus
                    exercitationem ipsa labore maxime nam optio quaerat, quo, repellendus tenetur unde? A, at facilis
                    fuga ipsum similique ut!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda debitis delectus
                    exercitationem ipsa labore maxime nam optio quaerat, quo, repellendus tenetur unde? A, at facilis
                    fuga ipsum similique ut!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda debitis delectus
                    exercitationem ipsa labore maxime nam optio quaerat, quo, repellendus tenetur unde? A, at facilis
                    fuga ipsum similique ut!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda debitis delectus
                    exercitationem ipsa labore maxime nam optio quaerat, quo, repellendus tenetur unde? A, at facilis
                    fuga ipsum similique ut!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda debitis delectus
                    exercitationem ipsa labore maxime nam optio quaerat, quo, repellendus tenetur unde? A, at facilis
                    fuga ipsum similique ut!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda debitis delectus
                    exercitationem ipsa labore maxime nam optio quaerat, quo, repellendus tenetur unde? A, at facilis
                    fuga ipsum similique ut!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda debitis delectus
                    exercitationem ipsa labore maxime nam optio quaerat, quo, repellendus tenetur unde? A, at facilis
                    fuga ipsum similique ut!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda debitis delectus
                    exercitationem ipsa labore maxime nam optio quaerat, quo, repellendus tenetur unde? A, at facilis
                    fuga ipsum similique ut!</p>
            </div>
            <div class="p-content__breadcrumbs p-content__breadcrumbs_bottom">
                Элемент 1 / Элемент 2
            </div>





        </div>






    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>