import multer           from "multer";
import uploadDirection  from "../config/upload.js";


const kingdomStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${uploadDirection.kingdoms.upload}`);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});


const uploadKingdom             = multer({ storage: kingdomStorage });

const uploadKingdomThumbnail    = uploadKingdom.single("kingdom-thumbnail");

export {
    uploadKingdomThumbnail,
};
