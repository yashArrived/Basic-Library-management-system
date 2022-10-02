selectdata();

console.log("This is index.js");

// constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// display constructor
function Display() {

}

//for dropdownmenu :

// add methods to display prototype
Display.prototype.add = function (book) {
    console.log('adding to UI');
    let tableBody = document.getElementById('tableBody')
    let uiString = `    <tr>
                     <td>${book.name}</td>
                     <td>${book.author}</td>
                     <td>${book.type}</td>
                    <td>
                    <a id="cross" class="delete" >X <i class=""></i></a>
                    </td>
                    
                    </tr>`
                    // <a href="#home" onclick="onedit(this)" id="edit" class="editing" > Edit </a> 
                        

    tableBody.innerHTML += uiString;

}
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();

}
Display.prototype.deleteBook = function(target){
    if(target.className ==='delete'){
        target.parentElement.parentElement.remove();
    }
}
document.getElementById('tableBody').addEventListener('click',function(e){
    // instantiate UI
const display = new Display();
 display.deleteBook(e.target);
//show alert
display.show( 'success' , 'Book removed successfully from the library.')

    e.preventDefault();
});
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
    selectdata();

}













//function for edit button

// function onedit(td){
//     let selectedrow=td.parentElement.parentElement.parentElement;
//     document.getElementById("bookName").value=selectedrow.cells[0].innerHTML;
//     document.getElementById("author").value=selectedrow.cells[1].innerHTML;
//     document.getElementById("selectbox").value=selectedrow.cells[2].innerHTML;
// }
























Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false
    }
    else {
        return true
    }
}

Display.prototype.show = function (type, Smessage) {
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message: </strong> ${Smessage}
    <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close">
     <span aria-hidden="true"></span>
     </button>
</div>`;

    setTimeout(() => {
        message.innerHTML = ''
    }, 5000);
}



// add submit event listner to libraryForm
let libraryForm = document.getElementById('libraryForm');

libraryForm.addEventListener('submit', libraryFormsubmit);

function libraryFormsubmit(e) {
    console.log('You have submitted the form');
    let name = document.getElementById('bookName').value
    let author = document.getElementById('author').value
    let type = document.getElementById("selectbox").value

let book_name = new Array();

book_name=JSON.parse(localStorage.getItem("booknames"))?JSON.parse(localStorage.getItem("booknames")):[];
if(book_name!=null){
if(book_name.some((v)=>{return v.name==name})){
    alert("Book already exists!");
}
else{

    book_name.push({
        "name":name,
        "author":author,
        "type":type
    })
    
        localStorage.setItem("booknames",JSON.stringify(book_name));
    

}}
    // let name_of_book = JSON.parse(localStorage.getItem("booknames"));
    
    // console.log("name",name_of_book);
   
    let book = new Book(name, author, type);

    // console.log(book);
    
    let display = new Display();
    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', ' your book has been successfully added');
    }
    else {
        display.show('danger', ' sorry you cannot add this book.')
    }
    
    


    e.preventDefault();
}

function filter(){
    
    let filterval = document.getElementById('myInput').value.toUpperCase();
    let myTable = document.getElementById('thetable');
    let tr = myTable.getElementsByTagName('tr');
    for(var i = 0 ; i<tr.length ; i++){
        let td = tr[i].getElementsByTagName('td')[0];
        if(td){
            let textvalue=td.textContent || td.innerHTML;
            if(textvalue.toUpperCase().indexOf(filterval)>-1){
                  tr[i].style.display="";

            }
            else{
                tr[i].style.display = "none";
            }
        }
    // for(var i = 0 ; i<name_of_book.length ; i++){
    //     let td = tr[i].getElementsByTagName('td')[0];
    //     if(td){
    //         let textvalue=td.textContent || td.innerHTML;
    //         if(textvalue.toUpperCase().indexOf(filterval)>-1){
    //               tr[i].style.display="";

    //         }
    //         else{
    //             tr[i].style.display = "none";
    //         }
    //     }
    // }

}}










     // Define selector for selecting
        // anchor links with the hash
        // let anchorSelector = 'a[href^="#"]';
     
        // $(anchorSelector).on('click', function (e) {
         
            // Prevent scrolling if the
            // hash value is blank
            // e.preventDefault();
     
            // Get the destination to scroll to
            // using the hash property
            // let destination = $(this.home);
     
            // Get the position of the destination
            // using the coordinates returned by
            // offset() method
            // let scrollPosition
                // = destination.offset().top;
     
            // Specify animation duration
            // let animationduration = 500;
     
            // Animate the html/body with
            // the scrollTop() method
            // $('html, body').animate({
            //     scrollTop: scrollPosition
            // }, animationDuration);
        // });