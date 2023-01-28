'use strict';



const express = require('express');
const hadithRouter = express.Router();
const hadithHandlers = require('../controllers/hadithFunc');
console.log(hadithHandlers);

hadithRouter.get('/hadithapi',hadithHandlers.getAllHadithApiHandler);
hadithRouter.get('/hadith',hadithHandlers.getAllHadithToDatabaseHandler);
hadithRouter.post('/hadith',hadithHandlers.addHadithInDatabaseHandler);
hadithRouter.delete('/hadith/:id',hadithHandlers.delHadithInDatabaseHandler);
// hadithRouter.put('/hadith/:id',hadithHandlers.updateHadithInDatabaseHandler);





module.exports = hadithRouter;