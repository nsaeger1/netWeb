<template>
    <v-item-group>
        <v-container>
            <v-row>
                <v-col
                        v-for="n in discounts"
                        :key="n.title"
                        cols="12"
                        md="4">
                    <v-item>
                        <v-card>
                            <v-card-title>
                                {{n.title}}
                            </v-card-title>
                            <v-card-text>
                                {{n.description}}
                            </v-card-text>
                            <v-card-actions>
                                <v-btn text color="primary" v-on:click="$emit('open', n)">Discount Code</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-item>

                </v-col>
            </v-row>
        </v-container>
    </v-item-group>
</template>

<script>
    export default {
        name: "DiscountTicker",
        props: {
            discounts: Array
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>