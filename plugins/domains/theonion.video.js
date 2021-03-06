module.exports = {

    re: /^https?:\/\/www\.onionstudios\.com\/videos\/(?:[a-zA-Z0-9\-]+)\-(\d{4,5})/i,

    mixins: [
        "*"
    ],

    getLink: function(urlMatch) {

        return {
            href: 'http://www.onionstudios.com/embed?id=' + urlMatch[1],
            type: CONFIG.T.text_html,
            rel: [CONFIG.R.player, CONFIG.R.html5],
            "aspect-ratio": 480 / 270
        };
    },

    tests: [{
        page: "http://www.onionstudios.com/videos/popular/the-onion",
        selector: ".item>a"
    },
        "http://www.onionstudios.com/videos/tips-for-throwing-an-anniversary-party-4004"
    ]
};