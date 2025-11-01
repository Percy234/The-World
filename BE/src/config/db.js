import mongoose     from "mongoose";
import dotenv       from 'dotenv'


//========== SETUP ============//
dotenv.config();

//========== VARIABLES ========//
const urlConnect = process.env.DB_CONNECT_STRING
console.log(urlConnect);
console.log(urlConnect);

//========== METHOD ===========//
const connect = async () => {
    try {
        await mongoose.connect(urlConnect, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('> Kết nối database thành công!');
    } catch (error) {
        if(error) {
            console.log('> Lỗi kết nối database: ', error.message);
            
        }
    }
}


export default { connect }