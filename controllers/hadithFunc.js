'use strict';

const axios = require('axios');
require("dotenv").config();
const hadithModel = require('../models/scheModel');


async function getAllHadithApiHandler(req,res){
    let allHadithApi = await axios.get(`https://hadithapi.com/public/api/hadiths?apiKey=${process.env.API_KEY}&paginate=100`);
    console.log(allHadithApi.data.hadiths.data[0])
    res.send(allHadithApi.data.hadiths.data);
}


async function getAllHadithToDatabaseHandler(req,res){
    let username = req.query.username
    let allHadith = await hadithModel.find({username:username});
    // let allHadiths = await hadithModel.find({});
    // console.log(allHadith)
    res.send(allHadith)    

}




async function addHadithInDatabaseHandler(req,res){
    const {hadithName,hadithNarrator,hadithEnglish,hadithChapter,username} = req.body
    console.log(req.body)
    // const {hadithName,hadithNarrator,hadithEnglish,hadithChapter} = req.body
    //   const {englishNarrator,hadithEnglish,bookName,chapterEnglish,email} = req.body
      let newHadith = await hadithModel.create({
        username,
        hadithChapter,
        hadithName,
        hadithNarrator,
        hadithEnglish,
      });

      res.send(newHadith);

}


async function delHadithInDatabaseHandler(req,res){
    const id = req.params.id;
    let username = req.query.username;
    let deletedHadith = await hadithModel.findByIdAndDelete(id);
    console.log(deletedHadith);
    let allHadiths = await hadithModel.find({username});
    // let allHadith = await hadithModel.find({});
    res.send(allHadiths)
    // res.send(`${deletedHadith.hadithName} has been deleted`);    
}


// async function updateHadithInDatabaseHandler(req,res){
//     const id = req.params.id;
//     console.log(`inside update`, req.body);
//     const {hadithName,hadithNarrator,hadithEnglish,hadithChapter} = req.body
//     await hadithModel.findByIdAndUpdate(id,{
//         hadithName,
//         hadithNarrator,
//         hadithEnglish,
//         hadithChapter

//     });
//     // let allHadith = await hadithModel.find({username});
//     let allHadith = await hadithModel.find({});
//     res.send(allHadith)
//     // res.send(`${updatedHadith.hadithName} has been updated`);
// }






module.exports = {
 getAllHadithApiHandler,
getAllHadithToDatabaseHandler,
addHadithInDatabaseHandler,
delHadithInDatabaseHandler,
// updateHadithInDatabaseHandler

    
}