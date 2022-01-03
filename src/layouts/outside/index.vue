<template>



    <div style="display: flex">

        <h1>Outside layout</h1>
        <button @click="openLoginPage">Go to login</button>
        <hr>
        <router-view/>


        <div class="a4">
            <div class="logo">
                <img src="https://www.invitro.ru/local/templates/invitro_main/src/image/elements/main-logo.svg" alt="" width="110px">
            </div>
            <div class="top">
                <div class="top__item top-item">
                    <div class="top-item__row text-bold small-ls" style="padding-bottom: 0">ФОМЕНКО ОЛЬГА КОНСТАНТИНОВНА</div>
                    <div class="top-item__row">
                        <dl class="attrs">
                            <template v-for="item in myInfo">
                                <dt :class="[item.isBold ? 'text-bold' : '']">{{ item.id }}:</dt>
                                <dd :class="[item.isBold ? 'text-bold' : '']">{{ item.value }}</dd>
                            </template>
                        </dl>
                    </div>
                </div>
                <div class="top__item top-item">
                    <div class="top-item__row text-bold small-ls">ООО "ИНВИТРО"</div>
                    <div class="top-item__row">8-(495)-363-0-363; 8-(800)-200-363-0</div>
                    <div class="top-item__row">Малаховка, ул. Комсомольская, д. 7А</div>
                </div>
            </div>

            <div class="table">
                <div class="table__row t-row">
                    <div class="t-row__col">Исследование</div>
                    <div class="t-row__col">Результат</div>
                    <div class="t-row__col">Единицы</div>
                    <div class="t-row__col">Референсные<br>значения</div>
                    <div class="t-row__col" style="padding-left: 20px">Комментарий</div>
                </div>
                <div class="table__row t-row" v-for="t in table">
                    <div class="t-row__col text-blue">{{ t.val1 }}</div>
                    <div class="t-row__col text-bold">{{ t.val2 }}</div>
                    <div class="t-row__col">{{ t.val3 }}</div>
                    <div class="t-row__col">{{ t.val4 }}</div>
                    <div class="t-row__col" v-html="t.val5"></div>
                </div>
            </div>

            <div class="hints">
                <div class="hints__item"><span class="text-orange">Внимание!</span> В электронном экземпляре бланка название исследования содержит ссылку на страницу сайта<br/><span class="text-blue">http://www.invitro.ru/</span> с описанием исследования.</div>
                <div class="hints__item"><span class="text-orange">Результаты исследований не являются диагнозом, необходима консультация специалиста.</span></div>
            </div>



        </div>

        <div class="a4">
            <div class="logo">
                <img src="https://www.invitro.ru/local/templates/invitro_main/src/image/elements/main-logo.svg" alt="" width="110px">
            </div>
            <div class="top">
                <div class="top__item top-item">
                    <div class="top-item__row text-bold small-ls" style="padding-bottom: 0">ФОМЕНКО ОЛЬГА КОНСТАНТИНОВНА</div>
                    <div class="top-item__row">
                        <dl class="attrs">
                            <template v-for="item in myInfo">
                                <dt :class="[item.isBold ? 'text-bold' : '']">{{ item.id }}:</dt>
                                <dd :class="[item.isBold ? 'text-bold' : '']">{{ item.isInz ? item.value + 1 : item.value }}</dd>
                            </template>
                        </dl>
                    </div>
                </div>
                <div class="top__item top-item">
                    <div class="top-item__row text-bold small-ls">ООО "ИНВИТРО"</div>
                    <div class="top-item__row">8-(495)-363-0-363; 8-(800)-200-363-0</div>
                    <div class="top-item__row">Малаховка, ул. Комсомольская, д. 7А</div>
                </div>
            </div>

            <div class="table">
                <div class="table__row t2-row">
                    <div class="t2-row__col">Исследование</div>
                    <div class="t2-row__col">Результат</div>
                    <div class="t2-row__col">Единицы</div>
                    <div class="t2-row__col">Референсные значения</div>
                </div>
                <div class="table__row t2-row" v-for="t in table2">
                    <div class="t2-row__col text-blue">{{ t.val1 }}</div>
                    <div class="t2-row__col text-bold">{{ t.val2 }}</div>
                    <div class="t2-row__col">{{ t.val3 }}</div>
                    <div class="t2-row__col">{{ t.val4 }}</div>
                </div>
            </div>

            <div class="hints">
                <div class="hints__item"><span class="text-orange">Внимание!</span> В электронном экземпляре бланка название исследования содержит ссылку на страницу сайта<br/><span class="text-blue">http://www.invitro.ru/</span> с описанием исследования.</div>
                <div class="hints__item"><span class="text-orange">Результаты исследований не являются диагнозом, необходима консультация специалиста.</span></div>
            </div>



        </div>

    </div>


</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>