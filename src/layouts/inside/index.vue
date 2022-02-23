<template>

    <div :class="['wrapper', $route.name === 'Dashboard' ? 'with-pattern' : '']">
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
                <MobileMenu/>
                <button class="close-button clear-button transparent-button" @click="asidePanel.isOpened = false">
                    <unicon name="times"
                            fill="#000"
                            style="display: flex"
                            height="20"/>
                </button>
            </aside>
        </div>


    </div>

</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>