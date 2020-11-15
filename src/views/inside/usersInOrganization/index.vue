<template>
    <div>
        <h1>Users in organization</h1>




            <div style="margin-top: 50px" v-if="users.length">
                <div v-for="user in users" :key="user.id" style="margin-bottom: 20px">
                        {{ user }}
                </div>
            </div>
            <PuSkeleton v-else/>








    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>