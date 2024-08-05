const exprees = require( "express" );
const app = exprees();
const cors = require( "cors" );
const contact = require("./routes/contact")
require( "./connec/connect" );
// app.get( "/", ( req, res ) =>
// {
//     res.send( "Hello,,," );
// } )
app.use( exprees.json() );
app.use( cors() );
app.use("/api/v1",contact)
app.listen( "1000", () =>
{
    console.log( "server running on port" );
} );