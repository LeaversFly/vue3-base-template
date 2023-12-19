<script setup>
import { useGetData } from '../../../tests';

const tests = useGetData()
console.log(tests);
</script>

<template>
    这是一个测试
    <button v-for="item in tests" :key="item.id" @click="item.method">{{ item.id }}</button>
</template>

<style scoped></style>
