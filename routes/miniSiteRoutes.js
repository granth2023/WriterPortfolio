import express from 'express';
import {
    createMiniSite, 
    getMiniSites,
    getMiniSiteById,
    updatedMiniSite,
    deleteMiniSite,
} from '../controllers/miniSiteControllers.js';

const router = express.Router();

router.post('/api/minisites', createMiniSite);
router.get('/api/minisites', getMiniSites);
router.get('/api/minisites/:id', getMiniSiteById);
router.put('/api/minisites/:id', updatedMiniSite);
router.delete('/api/minisites/:id', deleteMiniSite);

export default router;