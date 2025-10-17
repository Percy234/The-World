import animalRouter from "./animal.route.js";


const router = (App) => {
    App.use('/animals', animalRouter)
}

export default router;