<template>
    <div class="home">
        <v-card>
          <v-card-title>Northwind</v-card-title>
          <v-card-text>
          We have the best prices and selection of high quality foods &
          beverages on the planet! Check out our featured discounts below



          </v-card-text>
          <v-card-text><v-divider/></v-card-text>
          <v-card-text>For spectacular international cuisine, look no further.</v-card-text>
          <v-card-actions>
            <v-btn color="primary" rounded >Order Now <v-icon>mdi-chevron-double-right</v-icon></v-btn>
          </v-card-actions>

        </v-card>
        <DiscountTicker v-bind:discounts="discounts" v-on:open="open"/>
        <DiscountSnackbar v-bind:snackbar="snackbar" v-bind:item="activeItem" @close="close"/>

    </div>
</template>

<script>


    import DiscountSnackbar from "../components/DiscountSnackbar";
    import DiscountTicker from "../components/DiscountTicker";
    export default {
        name: 'Home',
        components: {DiscountTicker, DiscountSnackbar},
        data() {
            return {
                snackbar:false,
                activeItem: {},
                search: 'Search',
                products: [
                    {
                        title: 'Browse Categories',
                        icon: 'mdi-layers-search'
                    },
                    {
                        title: 'Product Search',
                        icon: 'mdi-card-search'
                    },
                    {
                        title: 'Current Discounts',
                        icon: 'mdi-sale'
                    },

                ],
                discounts: [
                    {
                        title: 'Tis the seasoning',
                        item: 'Chef Anton\'s Italian Seasoning',
                        description: 'Order today! Save 12.5% on Chef Anton\'s Italian Seasoning.\n' +
                            '                    You don\'t want to make Chef Anton mad, do you?',
                        expiration: '2/25/2019',
                        code: '1234',

                    },
                    {
                        title: 'Go Green',
                        item: 'Genen Shouyu',
                        description: 'Genen Shouyu goes on sale very rarely. Order now to save 10%\n' +
                            '                    off our already low price.',
                        expiration: '2/25/2019',
                        code: '2222',

                    },
                    {
                        title: 'Half Price',
                        item: 'Schoggi Schokolade',
                        description: 'Just because you can\'t pronounce "Schoggi Schokolade" doesn\'t mean\n' +
                            '                    you shouldn\'t buy it. Get it now for 50% off!',
                        expiration: '2/25/2019',
                        code: '2122',

                    },
                ],

            }
        },
        methods: {
            open(activeItem) {
                this.activeItem = activeItem;
                this.snackbar = true;
            },
            close() {
                this.snackbar = false;
            }
        }
    }
</script>
