import express from 'express';
import {
    createMiniSite, 
    getMiniSites,
    getMiniSiteById,
    updateMiniSite,
    deleteMiniSite,
} from '../controllers/miniSiteControllers.js';

const router = express.Router();

router.post('/', createMiniSite);
router.get('/', getMiniSites);