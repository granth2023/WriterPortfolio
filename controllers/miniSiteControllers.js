import MiniSite from '../models/MiniSite.js';

export const createMiniSite = async (req, res) => {
    try{
        const miniSite = new MiniSite(req.body);
        const savedMiniSite = await miniSite.save();
        res.status(201).json(savedMiniSite);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getMiniSites = async (req, res) => {
    try {
        const miniSites = await MiniSite.find();
        res.json(miniSites);
    } catch (error) {
        res.status(500).json({ message: error.message });
};
};

export const getMiniSiteById = async (req, res) => {
    try {
        const miniSite = await MiniSite.findById(req.params.id);
        if(!miniSite) return res.status(404).json({ message: 'MiniSite not found'});
        res.json(miniSite);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updatedMiniSite = async (req, res) => {
    try{ 
        const updatedMiniSite = await MiniSite.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedMiniSite);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteMiniSite = async (req, res) => { 
    try { 
        await MiniSite.findByIdAndDelete(req.params.id);
        res.json({ message: 'MiniSite deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};