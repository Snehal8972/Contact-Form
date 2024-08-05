const mongoose = require( "mongoose" );
const conn = async () =>
{
    try
    {
        await mongoose.connect( "mongodb+srv://contact:contact@cluster0.ciupepq.mongodb.net/contacts?retryWrites=true&w=majority&appName=Cluster0").then(
            () => { console.log( "Connected........" ); }, ( error ) =>
        {
            console.log( error );
        }
        )
    } catch ( error )
    {
        console.log( error );
    }
};
conn();