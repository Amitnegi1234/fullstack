import { Sequelize } from "sequelize";

const sequelize = new Sequelize('expense', 'root', 'Amitnegi@123', {
    host: 'localhost',
    dialect: 'mysql'
});


(async()=>{
    try {
        await sequelize.authenticate();
        console.log("connection created");
    } catch (error) {
        console.log(error);
    }
})()

export const db=sequelize;