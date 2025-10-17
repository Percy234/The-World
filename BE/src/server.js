import express          from 'express';
import dotenv           from 'dotenv';
import chalk            from 'chalk';
import boxen            from 'boxen'
import cors             from 'cors'
import database         from './config/db.js'
//my middleware
import router           from './routers/index.js';

//========== VARIABLES ============//
dotenv.config();
const app   = express();
const port  = process.env.PORT || 3000;


//========== MIDDLEWARE ===========//
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
router(app);
database.connect();


app.listen(port, () => {
    console.clear(); //clear terminal log
    const msg = `
============ SERVER RUNNING ===========
Visit http://localhost:${port}
`;
    console.log(
        boxen(chalk.green(msg), {
            padding: 1,
            margin: 1,
            borderColor: 'green',
            borderStyle: 'round'
        })
    );
    
})