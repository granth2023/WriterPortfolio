import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
    url: String, 
    isProtected: Boolean, 
    password: String
});

const miniSiteSchema = new mongoose.Schema({
    name: String,
    description: String,
    content: [{ type: Map, of: String }],
    files: [fileSchema]
});

const MiniSite = mongoose.model('MiniSite', miniSiteSchema);

export default MiniSite;

