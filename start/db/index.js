var phrases;
exports.connect = function () {
    phrases = require('../db/ru')
};

exports.getPhrases = function (name) {
    if (!phrases[name]) {
        throw new Error("Нет такой фразы: " + name)
    }
    return phrases[name];
};
