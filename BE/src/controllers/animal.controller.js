import Animal from "../models/Animals.js"

//POST: /animals/create
const createAnimal = async (req, res, next) => {
    try {
        const data = req.body; //get data from client
        console.log(data);
        
        //check data
        if(!data.name) {
            return res.json({
                status: 'error',
                message: "name not null"
            })
        } 
        if(!data.category) {
            return res.json({
                status: 'error',
                message: "category not null"
            })
        }

        //xu li
        const newAnimal = new Animal({
            name: data.name,
            category: data.category,
            type: data.type
        });
        const checkSaved = await newAnimal.save()
        
        if(checkSaved) {
            return res.json({
                status: 'succes',
                message: "create new animal successfully"
            })
        } else {
            return res.json({
                status: 'error',
                message: "create new animal failed"
            })
        }
    } catch (error) {
        
    }
}

const getAllAnimal = async (req, res, next) => {
    res.json({
        status: 'success',
        message: 'Thành công lấy tất cả animals',
    })
}



export default {
    getAllAnimal,
    createAnimal
}