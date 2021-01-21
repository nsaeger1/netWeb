<template>
    <v-app dark>
        <v-app-bar
                app
                color="primary"
                dark
        >


                <v-toolbar-title style="cursor: pointer" @click="$router.push('/')"><v-icon large>mdi-compass</v-icon> Northwinds</v-toolbar-title>


            <v-menu
                    open-on-hover
                    offset-y
                    dark
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                            plain
                            v-bind="attrs"
                            v-on="on"
                    >
                        <v-icon>mdi-database</v-icon>
                        Products
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item-group>
                        <v-list-item
                                v-for="(item, index) in products"
                                :key="index"
                        >
                            <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>

                            <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-menu>
            <v-menu
                    open-on-hover
                    offset-y
                    dark
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                            plain
                            v-bind="attrs"
                            v-on="on"
                    >
                        <v-icon>mdi-account-group-outline</v-icon>
                        Customers
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item-group>
                        <v-list-item
                                v-for="(item, index) in customers"
                                :key="index"
                        >
                            <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>

                            <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-menu>

            <v-spacer></v-spacer>
            <v-text-field v-model="search" light dense rounded solo outlined clearable hide-details></v-text-field>

            <v-btn rounded icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

        </v-app-bar>

        <v-main>
            <v-container>
                <router-view/>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>


    export default {
        name: 'App',
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
                ],
                customers: [
                    {
                        title: 'Account',
                        icon: 'mdi-account'
                    },
                    {
                        title: 'Register',
                        icon: 'mdi-account-plus'
                    },
                    {
                        title: 'Sign In',
                        icon: 'mdi-account-arrow-right'
                    },

                ]
            }
        },
    };
</script>
