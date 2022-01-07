<template>
   <div class="search-wrapper">
       <div class="search-wrapper__item search-input-wrapper">
           <input type="text" placeholder="Поиск" class="search-input" v-model="currentSearch">
           <button class="clear-button" @click="currentSearch = ''" v-if="currentSearch.length">
               <unicon name="times"
                       fill="#91a5af"
                       style="display: flex"
                       height="20"/>
           </button>
       </div>
       <div class="search-wrapper__item">
           <button class="search-button" @click="applySearch">
               <unicon name="search-alt"
                       fill="#f5f9fa"
                       style="display: flex; align-items: center"
                       height="25" width="25"
               />
           </button>
       </div>
   </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>