<template>
    <v-snackbar v-model="snackbar" :timeout="-1"
                absolute right top shaped>
        <v-card-text>
            {{item.item}}
            <v-divider/>
            {{item.code}}
            <v-btn absolute plain right @click="close">x</v-btn>
        </v-card-text>
    </v-snackbar>
</template>

<script>
    export default {
        name: "DiscountSnackbar",
        props: {
            snackbar: Boolean,
            item: Object,
        },
        methods: {
            close () {
                this.$emit('close')
            }
        }

    }
</script>

<style scoped>

</style>