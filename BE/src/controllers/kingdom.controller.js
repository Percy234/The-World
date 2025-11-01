import KingDom from '../models/KingDom.js';


//========== CREATE KINGDOM ==========//
const createKingDom = async (req, res, next) => {
    try {
        const data = req.body; // dữ liệu từ client gửi lên

        //check các dữ liệu bắt buộc
        const requiredFields = ['normal_name', 'science_name', 'cell_type', 'nutrition_mode', 'reproduction_type'];
        requiredFields.forEach(field => {
            if(!data[field]) {
                const error = new Error(`Field ${field} is required.`);
                error.status = 400;
                throw error;
            }
        });

        const newKingDom = new KingDom({
            kingdom_id: new KingDom()._id,
            normal_name: data.normal_name,
            science_name: data.science_name,
            cell_type: data.cell_type,
            nutrition_mode: data.nutrition_mode,
            reproduction_type: data.reproduction_type,
            description: data.description || 'Chưa có mô tả cho giới này.',
            thumnail_url: data.thumnail_url || '/kingdoms/default-kingdom.png'
        });

        await newKingDom.save();
        res.json({
            status: 'success',
            message: 'Tạo giới thành công',
            kingdom: newKingDom
        });
    } catch (error) {
        next(error);
    }
}

//========== GET ALL KINGDOM ==========//
const getAllKingDom = async (req, res, next) => {
    try {
        const kingdoms = await KingDom.find({});
        res.json({
            status: 'success',
            message: 'Lấy danh sách các giới thành công',
            kingdoms
        });
    } catch (error) {
        next(error);
    }
}

export default {
    createKingDom,
    getAllKingDom
}