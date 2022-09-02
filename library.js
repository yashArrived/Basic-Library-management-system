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

// //adding filter bar dynamically
// Display.prototype.add = function(e){
//     const srch = document.getElementById('table')
//    let stringsrch = ` <h3> Filter Tasks</h3>
//    <input type="text" id="myInput" placeholder="Press key to filter.." onkeyup="filter()"> </input>`
//    table.innerHTML += stringsrch;
//     e.preventDefault();
// }
// add methods to display prototype
Display.prototype.add = function (book) {
    console.log('adding to UI');
    let tableBody = document.getElementById('tableBody')
    let uiString = ` 
    
                       <tr>                
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                    <td><a button type="submit" class="delete" >Remove</button> </td>
                        </tr>`;
    tableBody.innerHTML += uiString;
}
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();

}
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2 ) {
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
    }, 3000);
}

//del book
Display.prototype.deleteBook = function(target){
    if(target.className ==='delete'){
        target.parentElement.parentElement.remove();
    }
}


// add submit event listner to libraryForm
let libraryForm = document.getElementById('libraryForm');

libraryForm.addEventListener('submit', libraryFormsubmit);

function libraryFormsubmit(e) {
    console.log('You have submitted the form');
    let name = document.getElementById('bookName').value
    let author = document.getElementById('author').value
    let type = document.getElementById('Genre').value



    // let programming = document.getElementById('programming');
    // let hacking = document.getElementById('hacking');
    // let fiction = document.getElementById('fiction');

    // if (programming.checked) {
    //     type = programming.value
    // }
    // else if (Hacking.checked) {
    //     type = Hacking.value
    // }
    // else if (Fiction.checked) {
    //     type = Fiction.value
    // }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', ' your book has been successfully added');
    }
    else {
        display.show('danger', '  Sorry you cannot add this book.')
    }
    e.preventDefault();
}

// Function for filtering books : 

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
    }
}


////Event listener for delete
document.getElementById('tableBody').addEventListener('click',function(e){
    // instantiate UI
const display = new Display();
 display.deleteBook(e.target);
//show alert
display.show( 'success' , 'Book removed successfully from the library.')

    e.preventDefault();
});
