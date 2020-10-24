<template>
    <div>
        <h1>Login</h1>
        <div class="form">
            <div class="form__item">
                <label for="email">Email</label>
                <input type="text" id="email" v-model="email"/>
            </div>
            <div class="form__item">
                <label for="password">Password</label>
                <input type="text" id="password" v-model="password"/>
            </div>
            <div class="form__item">
                <button @click="sendLoginRequest">Login</button>
            </div>
        </div>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>