'use strict';

const mongoose = require('./index');

const hadithSchema = new mongoose.Schema({
    hadithName: String,
    hadithNarrator: String,
    hadithEnglish: String,
    hadithChapter: String,
    username:String
    
});

const hadithModel = mongoose.model('hadith',hadithSchema);

function seedData() {
    const newHadith = new hadithModel({
        username: "shabitaiwo@yahoo.com",
        hadithName:"Sahih Bukhari",
        hadithNarrator: "Narrated 'Umar bin Al-Khattab:",
       hadithEnglish: "I heard Allah's Messenger (ﷺ) saying, \"The reward of deeds depends upon the intentions and every person will get the reward according to what he has intended. So whoever emigrated for worldly benefits or for a woman to marry, his emigration was for what he emigrated for.\"",
    });
    newHadith.save();
}

seedData();


module.exports = hadithModel;