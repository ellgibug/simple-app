<template>
   <div class="pagination">

       <div class="pagination__item">
           <button class="prev-page" @click="goToPrevPage">
               <unicon name="angle-left-b"
                       fill="#91a5af"
                       style="display: flex; align-items: center"
                       height="25" width="25"
               />
           </button>
       </div>
       <div class="pagination__item">
           <input class="current-page" type="number" v-model="currentPage" min="1" :max="total"/>
       </div>
       <div class="pagination__item">
            <span class="pagination-delimiter">
                &#47;
            </span>
       </div>
       <div class="pagination__item">
           <span class="pagination-total">
                {{ total }}
            </span>
       </div>
       <div class="pagination__item">
           <button class="next-page" @click="goToNextPage">
               <unicon name="angle-right-b"
                       fill="#91a5af"
                       style="display: flex; align-items: center"
                       height="25" width="25"
               />
           </button>
       </div>
   </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>