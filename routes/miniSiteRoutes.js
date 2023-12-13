import express from 'express';
import {
    createMiniSite, 
    getMiniSites,
    getMiniSiteById,
    updatedMiniSite,
    deleteMiniSite,
} from '../controllers/miniSiteControllers.js';

const router = express.Router();

router.post('/', createMiniSite);
router.get('/', getMiniSites);
router.get('/:id', getMiniSiteById);
router.put('/:id', updatedMiniSite);
router.delete('/:id', deleteMiniSite);

export default router;