<template>
   <div class="pagination">

       <div class="pagination__item">
           <button class="prev-page">
               <unicon name="angle-left-b"
                       fill="#91a5af"
                       style="display: flex; align-items: center"
                       height="25" width="25"
               />
           </button>
       </div>
       <div class="pagination__item">
           <input class="current-page" type="number"/>
       </div>
       <div class="pagination__item">
            <span class="pagination-delimiter">
                &#47;
            </span>
       </div>
       <div class="pagination__item">
           <span class="pagination-total">
                100
            </span>
       </div>
       <div class="pagination__item">
           <button class="next-page">
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