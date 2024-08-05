const router = require( "express" ).Router();
const contact = require( "../models/contact" );
router.post( "/post",async ( req, res ) =>
{ 
    try {
        const { name, email, number, subject, message } = req.body;
        const newContact = new contact( { name, email, number, subject, message } );
        await newContact.save().then( () =>
        {
            res.status( 200 ).json( { message: "Successfully submitted" });
        },
            () =>
            {
                res.status( 200 ).json( { message: "Your form not submitted." } );
            }
        )
    } catch (error) {
        res.status(400).json({message:"technical error show"})
    }
} );
module.exports = router;
