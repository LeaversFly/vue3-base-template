<script setup></script>

<template>
    <div class="feature">
        <h1 class="siteCreated">Error 401 - no permission!</h1>
        <p class="goDo">你没有权限去往该页面</p>
        <button @click="$router.push('/')">回到首页</button>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/error.scss'
</style>
  
  