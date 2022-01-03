<template>
   <div class="search-wrapper">
       <div class="search-wrapper__item">
           <input type="text" placeholder="Search" class="search-input" v-model="currentSearch">
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