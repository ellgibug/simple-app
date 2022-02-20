<template>

    <div class="wrapper">
        <div class="wrapper__item">
            <div class="wrapper__header">
                <h_header @openMobileMenu="asidePanel.isOpened = true"/>
            </div>
            <main class="wrapper__main">
                <container :xl="1188" >
                    <row>
                        <column>
                            <router-view/>
                        </column>
                    </row>
                </container>
            </main>
        </div>
        <div class="wrapper__item">
            <div class="wrapper__footer">
                <container :xl="1188" >
                    <row>
                        <column>

                            <button @click="asidePanel.isOpened = true">open</button>

                            Footer уриурпиоукп

                            coming soon - upload image, file
                            Пока только название страницы и текст
                        </column>
                    </row>
                </container>
            </div>
        </div>

        <div :class="['wrapper__aside_1', asidePanel.isOpened ? 'opened' : 'closed']" ref="mobileMenuWrapper">
            <aside :class="['wrapper__aside', asidePanel.isOpened ? 'opened' : 'closed']">

                <div>
                    Личный кабинет
                </div>

                <div>
                    Проекты
                </div>


                <div>
                    Организация
                </div>

                <div>
                    Выход
                </div>



                <button @click="asidePanel.isOpened = false">close</button>
            </aside>
        </div>


    </div>

</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>