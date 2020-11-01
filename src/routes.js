import {Router} from 'express'


import UserModel from './models/User'

// const UserModel = UserModelFactory(sequelize)

const routes = new Router();

routes.post('/user/create', async (req, res) => {
    try {
        const user = await UserModel.findOne();
        console.log(user)
    } catch (error) {
        console.log(error)
    }
    res.end();
})

export default routes