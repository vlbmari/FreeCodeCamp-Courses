//Build a Book Organizer
const books = [
  {
    title: "The Chronicles of Narnia",
    authorName: "C.S. Lewis",
    releaseYear: 1950,
  },
  {
    title: "Sherlock Holmes (A Study in Scarlet)",
    authorName: "Arthur Conan Doyle",
    releaseYear: 1887, 
  },
  {
    title: "The Vampire Diaries",
    authorName: "L. J. Smith",
    releaseYear: 1991,
  },
  {
    title: "Pretty Little Liars",
    authorName: "Sara Shepard",
    releaseYear: 2006,
  },
  {
    title: "Game of Thrones (A Game of Thrones)",
    authorName: "George R. R. Martin",
    releaseYear: 1996,
  }
]


function sortByYear(book1, book2){
  if(book1.releaseYear < book2.releaseYear){
    return -1;
  }else if(book1.releaseYear > book2.releaseYear){
    return 1;
  }else{
    return 0;
  }
}

let filteredBooks = books.filter((book) => book.releaseYear <= 1950)
filteredBooks.sort(sortByYear)
