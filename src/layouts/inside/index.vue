<template>
<!--    <div class="inside-layout">-->
<!--        <div class="inside-layout__navbar">-->
<!--            <div class="container navbar">-->
<!--                <navbar/>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="inside-layout__content inside-layout-content">-->
<!--            <main class="inside-layout-content__main">-->
<!--                <div class="content">-->
<!--                    <router-view/>-->
<!--                </div>-->
<!--            </main>-->
<!--            <footer class="inside-layout-content__footer">-->
<!--                <div class="container">-->
<!--                    <a href="https://iconscout.com/icons/home" target="_blank">Home Icon</a> by <a href="https://iconscout.com/contributors/fauzanadiima" target="_blank">Fauzan Adiima</a>-->


<!--                    <a href="https://iconscout.com/icon-pack/essential-icons" target="_blank">Essential Icons Icon Pack</a> by <a href="https://iconscout.com/contributors/bryn-taylor" target="_blank">Bryn Taylor</a>-->


<!--                    https://iconscout.com/icon-pack/essential-icons-->


<!--                </div>-->
<!--            </footer>-->
<!--        </div>-->
<!--    </div>-->

    <div class="wrapper">
        <div class="wrapper__header">
            <h_header/>
        </div>
        <main class="wrapper__main">
            <Container>
                <Col className="flex-grow-1">
                    <router-view/>
                </Col>
            </Container>
        </main>
        <div class="wrapper__footer">
            <Container>
            Footer уриурпиоукп

                coming soon - upload image, file
                Пока только название страницы и текст

            </Container>
        </div>
    </div>

</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>