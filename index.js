const fetch = require('node-fetch')
var soleno = {

    requestLyricsFor: function (title) {
        if (!title) throw new TypeError('Input value was undefined!');
        return new Promise(async function(resolve, reject) {
        var response = await fetch(`https://some-random-api.ml/lyrics/?title=${title}`)
        response = await response.json()
        resolve(response.lyrics)
    })
    },
    requestIconFor: function (title) {
        if (!title) throw new TypeError('Input value was undefined!');
        return new Promise(async function (resolve, reject) {
            var response = await fetch(`https://some-random-api.ml/lyrics/?title=${title}`)
            response = await response.json()
            resolve(response.thumbnail.genius)
        })
    },
    requestAuthorFor: function (title) {
        if (!title) throw new TypeError('Input value was undefined!');
        return new Promise(async function (resolve, reject) {
            var response = await fetch(`https://some-random-api.ml/lyrics/?title=${title}`)
            response = await response.json()
            resolve(response.author)
        })
    },
    requestTitleFor: function (title) {
        if (!title) throw new TypeError('Input value was undefined!');
        return new Promise(async function (resolve, reject) {
            var response = await fetch(`https://some-random-api.ml/lyrics/?title=${title}`)
            response = await response.json()
            resolve(response.title)
        })
    }
}

module.exports = soleno;
