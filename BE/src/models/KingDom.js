import mongoose     from 'mongoose';
const { Schema }    = mongoose;


const KingDom = new Schema({
    kingdom_id: {
        type: mongoose.Types.ObjectId,
        required: true,
        unique: true,
    },
    normal_name: {
        type: String,
        required: true,
    },
    science_name: {
        type: String,
        required: true,
    },
    cell_type: {
        type: String,
        required: true,
        enum: ['P', 'E'], // Prokaryote, Eukaryote | đơn bào, đa bào
    },
    nutrition_mode: {
        type: String,
        required: true,
        enum: ['A', 'H', 'M'], // Autotroph, Heterotroph, Mixotroph | tự dưỡng, dị dưỡng, hỗn hợp
    },
    reproduction_type: {
        type: String,
        required: true,
        enum: ['A', 'S'], // Asexual, Sexual | vô tính, hữu tính
    },
    description: {
        type: String,
        default: 'Chưa có mô tả cho giới này.',
    },
    thumnail_url: {
        type: String,
        default: '/kingdoms/default-kingdom.png'
    }
})

const model = mongoose.model('KingDom', KingDom);
export default model;