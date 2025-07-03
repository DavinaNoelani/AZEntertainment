const mongoose = require('mongoose');
const uri = "mongodb+srv://davinanoelani:<db_password>@projects.92cv8hg.mongodb.net/?retryWrites=true&w=majority&appName=projects"
require('dotenv').config(); // ← load environment variables
require('colors');



const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);

// exports = run;
export default run;
