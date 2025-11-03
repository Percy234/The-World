import animalRouter     from "./animal.route.js";
import kingdomRouter    from "./kingdom.route.js";
import uploadRouter     from "./upload.js";
//xử lý lỗi chung
import { notFound, handleError } from "./error.js";

const router = (App) => {
    App.use('/animals', animalRouter)
    App.use('/kingdoms', kingdomRouter)

    
    App.use('/uploads', uploadRouter)

    // ========== HANDLE ERROR ========== //
    //lỗi không tìm thấy API
    App.use(notFound);
    //xử lý lỗi chung khi ứng dụng trả về lỗi
    App.use(handleError);
}

export default router;