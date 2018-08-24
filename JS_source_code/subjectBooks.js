//Establish an index to traverse through the book objects
var bookIndex = 0;
//Make sure the document is loaded
document.addEventListener("DOMContentLoaded", updateBooks() );
function updateBooks() {
//Establish the book Objects
var book1 ={title: "The Autistic Spectrum", author: "Lorna Wing", pubDate: "Revised Mar 20, 2001"}
var book2 ={title: "Autism Spectrum Disorder", author: "Jill Boucher", pubDate: "Mar 1, 2017"}
var book3 ={title: "Emergence, Labeled Autisic", author: "Temple Grandin and Margaret M. Scariano", pubDate: "Sep 1, 1996 Revised 2005"}
var book4 ={title: "Uniquely Human", author: "Barry M. Prizant, PhD", pubDate: "July, 19, 2016"}
var book5 ={title: "The Sound of a Miracle", author: "Annabel Stehli", pubDate: "Jan, 1, 2010"}
//Create an Array of Objects
var books =[book1, book2, book3, book4, book5];
//Establish an Index to traverse through the book objects

var title = document.getElementById("title");
var author = document.getElementById("author");
var pub = document.getElementById("pub");
title.innerHTML=books[bookIndex].title;
author.innerHTML=books[bookIndex].author;
pub.innerHTML=books[bookIndex].pubDate;
bookIndex++;
  if (bookIndex >= books.length) {bookIndex=0}  
  }  

