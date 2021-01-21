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

    </div>
</template>

<script>


    export default {
        name: 'Home',
        data() {
            return {
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

                ]
            }
        },
    }
</script>
