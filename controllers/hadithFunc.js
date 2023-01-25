'use strict';

const axios = require('axios');
const hadithModel = require('../models/scheModel');


async function getAllHadithApiHandler(req,res){
    let allHadith = await axios.get('https://hadithapi.com/public/api/hadiths?apiKey=$2y$10$pBIBRXF2OdREuANcrRWvuMNXgLtSlRvsTxD8ltkuoKX2ZatzKC&paginate=100');
    res.send(allHadith.data);
}


async function getAllHadithToDatabaseHandler(req,res){
    let username = req.query.username
    let allHadith = await hadithModel.find({username:username});
    res.send(allHadith)    

}




async function addHadithInDatabaseHandler(req,res){
      const {englishNarrator,hadithEnglish,hadithArabic,bookName,chapterEnglish} = req.body
      let newHadith = await hadithModel.create({
        hadithName: bookName,
        hadithNarrator: englishNarrator,
        hadithEnglish: hadithEnglish,
        hadithChapter:chapterEnglish
      });

      res.send(newHadith);

}


async function delHadithInDatabaseHandler(req,res){
    const id = req.params.id;
    let username = req.query.username;
    let deletedHadith = await hadithModel.findByIdAndDelete(id);
    let allHadith = await hadithModel.find({username});
    res.send(allHadith)
    // res.send(`${deletedHadith.hadithName} has been deleted`);    
}


async function updateHadithInDatabaseHandler(req,res){
    const id = req.params.id;
    console.log(`inside update`, req.body);
    const {hadithName,hadithNarrator,hadithEnglish,hadithChapter,username} = req.body
    await hadithModel.findByIdAndUpdate(id,{
        hadithName,
        hadithNarrator,
        hadithEnglish,
        hadithChapter

    });
    let allHadith = await hadithModel.find({username});
    res.send(allHadith)
    // res.send(`${updatedHadith.hadithName} has been updated`);
}






module.exports = {
 getAllHadithApiHandler,
getAllHadithToDatabaseHandler,
addHadithInDatabaseHandler,
delHadithInDatabaseHandler,
updateHadithInDatabaseHandler

    
}