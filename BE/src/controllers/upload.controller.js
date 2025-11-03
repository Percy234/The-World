import uploadDirection from '../config/upload.js';

const uploadKingdomThumbnail = async (req, res, next) => {
    try {
        console.log(req.body);
        console.log("hehe");
        if (!req.file) {
            return res.status(400).json({ message: "Không có thumnail được gửi lên!" });
        }
        const filePath = `${uploadDirection.kingdoms.path}${req.file.filename}`;
        
        return res.json({
            message: "Tải thumnail lên thành công!",
            status: "success",
            thumnail_url: filePath,
        })
    } catch (error) {
        next(error);
    }
}

export default {
    uploadKingdomThumbnail,
};