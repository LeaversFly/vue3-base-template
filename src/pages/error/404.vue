<script setup></script>

<template>
    <div class="feature">
        <h1 class="siteCreated">Error 404 - not found!</h1>
        <p class="goDo">找不到网页</p>
        <button @click="$router.push('/')">回到首页</button>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/error.scss'
</style>