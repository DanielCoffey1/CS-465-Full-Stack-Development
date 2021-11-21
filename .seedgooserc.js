module.exports = {
    modelBaseDirectory: 'app_server/models', // model directory
    models: ['*.js', '!db.js'], // include all .js files except db.js
    data: 'data', // data directory
    db: 'mongodb://localhost:27017/travlr' // db connection url
};