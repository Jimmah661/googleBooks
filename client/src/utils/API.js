import axios from "axios";

export default {
    // Get all Saved books
    getBooks: function() {
        return axios.get("/api/books");
      },
    // Add new book to DB
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData)
    },
    // Delete book from DB
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id)
    }
}