const app = new Vue({

    el: '#root',
    data: {
        counterPhoto: 0,
        photos: [
            "img/img1.jpg",
            "img/img2.jpg",
            "img/img3.jpg",
            "img/img4.jpg"
        ]
    },

    methods: {
        nextPhoto() {
            this.counterPhoto++;
            if (this.counterPhoto === this.photos.length) this.counterPhoto = 0;
        },
        prevPhoto() {
            this.counterPhoto--;
            if (this.counterPhoto < 0) this.counterPhoto = this.photos.length - 1;
        }
    }

});