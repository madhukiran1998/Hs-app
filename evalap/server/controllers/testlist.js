import postQuestions from "../models/postQuestions.js";

export const getTestlist = async ( req, res ) => {
  try {
    const postQuestion = await postQuestions.find();
    res.status( 200 ).json( postQuestion );
  } catch ( error ) {
    res.status( 404 ).json( { message: error.message } );
  }
};

export const createQuestions = async ( req, res ) => {
  try {
    const response = await postQuestions( req.body ).save();
    res.status( 201 ).json( response );
  } catch ( error ) {
    res.status( 409 ).json( { message: error.message } );
  }
};
