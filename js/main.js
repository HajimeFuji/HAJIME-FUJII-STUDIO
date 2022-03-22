Vue.createApp({
    data(){
        return{
            category: '',
            images: [
                { index: 1,
                    src: "./img_photos/animals/bear_01.JPG",
                    category: "Animals"
                },
                { index: 2,
                    src: "./img_photos/animals/bear_02.jpg",
                    category: "Animals"
                },
                { index: 3,
                    src: "./img_photos/animals/hawaii_honu_01.jpg",
                    category: "Animals"
                },
                { index: 4,
                    src: "./img_photos/animals/risu_02.jpg",
                    category: "Animals"
                },
                { index: 5,
                    src: "./img_photos/birds/akagera.jpg",
                    category: "Birds"
                },
                { index: 6,
                    src: "./img_photos/birds/akagera_01.jpg",
                    category: "Birds"
                },                
                { index: 7,
                    src: "./img_photos/birds/owl_04.jpg",
                    category: "Birds"
                },                
                { index: 8,
                    src: "./img_photos/birds/shimaenaga_01.jpg",
                    category: "Birds"
                },
                { index: 9,
                    src: "./img_photos/others/dragonfly_01.jpg",
                    category: "Others"
                },
                { index: 10,
                    src: "./img_photos/others/eggs_01.jpg",
                    category: "Others"
                },
            ]
        }
    },
    computed: {
        filterByCategory: function () {
            return this.images.filter(
                (image) => !image.category.indexOf(this.category)
            );
        }
    }
}).mount('#app')