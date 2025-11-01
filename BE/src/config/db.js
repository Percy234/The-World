import mongoose     from "mongoose";
import dotenv       from 'dotenv'


//========== SETUP ============//
dotenv.config();

//========== VARIABLES ========//
const urlConnect = process.env.DB_CONNECT_STRING
console.log(urlConnect);

//========== METHOD ===========//
const connect = async () => {
    try {
        const check = await mongoose.connect(urlConnect, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        if(check) {
            console.log('> Kết nối database thành công');
        } else {
            console.log("> Kết nối database thất bại");
        }
    } catch (error) {
        if(error) {
            console.log('> Lỗi kết nối database: ', error.message);
            
        }
    }
}


export default { connect }