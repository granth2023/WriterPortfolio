import express from 'express';
import {
    createMiniSite, 
    getMiniSites,
    getMiniSiteById,
    updatedMiniSite,
    deleteMiniSite,
} from '../controllers/miniSiteControllers.js';

const router = express.Router();

router.post('/minisites', createMiniSite);
router.get('/minisites', getMiniSites);
router.get('/minisites/:id', getMiniSiteById);
router.put('/minisites/:id', updatedMiniSite);
router.delete('/minisites/:id', deleteMiniSite);

export default router;