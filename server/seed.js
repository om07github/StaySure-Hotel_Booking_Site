// seed.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Role from './models/Role.js'; // Adjust the path if needed

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'your-default-fallback';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async () => {
    console.log('Connected to MongoDB');

    const roles = ['Guest', 'Admin', 'Receptionist'];

    for (const roleName of roles) {
        const exists = await Role.findOne({ name: roleName });
        if (!exists) {
            await Role.create({ name: roleName });
            console.log(`Inserted role: ${roleName}`);
        } else {
            console.log(`Role already exists: ${roleName}`);
        }
    }

    mongoose.disconnect();
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});
