// middleware : what do I know about a middleware -> I know that it is a function which is called before the final operation which is used for performing authentication checks




// function middleware1(req,res,next){
//     if(my_favouriteNotebook.cost>50){
//         console.log("the price is too high ");
//         console.error("find a new book ");
        
//     }
//     next();
// } 

// app.post('/',(req,res)=>{
// //    res.send("enter the book data in json format ");
//    const book = res.body.book;
//    console.log(book);
// })
// app.listen(3000,()=>{
//     console.log("the server is running on port 3000");
// });

// now let me just implement it using postman I'll ask the user to enter his favourite book data ie the title, author and price of the book


const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static('public')); // Serve static files from the 'public' directory

let my_favourite_books_list = [{
    title: "the first book",
    author: "the first author",
    price: 12
}];

app.post('/add_books', (req, res) => {
    const title = req.body.title;
    const author = req.body.author;
    const price = req.body.price;

    if (price > 50) {
        res.status(400).json("An error occurred while checking the data. Find a new book!");
    } else {
        const newBook = {
            title: title,
            author: author,
            price: price
        }

        my_favourite_books_list.push(newBook);
        res.status(200).json({ message: "Book added successfully!", newBook });
    }
});

app.get('/', (req, res) => {
    res.json(my_favourite_books_list);
});

const port = 3000;
app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
