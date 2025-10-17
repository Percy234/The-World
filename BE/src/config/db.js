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

        });
        if(check) {
            console.log('connected');
        } else {
            console.log("lỗi");
        }
    } catch (error) {
        if(error) {
            console.log('lỗi rồi cu');
            
        }
    }
}


export default { connect }