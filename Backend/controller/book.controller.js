import Book from "../model/book.model.js";

export const getBooks= async (req,res) => {
    try {      
        const book= await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("error: ",error);
        req.status(500).json({message: "Server Error"});
    }
}