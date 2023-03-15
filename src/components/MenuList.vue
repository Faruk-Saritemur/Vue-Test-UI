<template>
    <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" @click="onItemClick(index)">
            <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
    </v-list>
</template>
  
<script>
export default {
    name: 'MenuList',
    data() {
        return {
            items: ['Item 1', 'Item 2', 'Item 3']
        }
    },
    methods: {
        onItemClick(index) {
            return index;
        }
    }
}
</script>
  