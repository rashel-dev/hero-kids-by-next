const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.0ocgkty.mongodb.net/?appName=Cluster0`;
const dbName = process.env.DB_NAME;
const collections = {
    PRODUCTS: "products",
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const dbConnect = (collectionName) => {
    return client.db(dbName).collection(collectionName);
};