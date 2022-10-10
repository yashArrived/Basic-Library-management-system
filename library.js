window.onload =  onwindowload();
// showdata();
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

let book_name=new Array();
book_name=JSON.parse(localStorage.getItem("booknames"))?JSON.parse(localStorage.getItem("booknames")):[]


    // let book_name=new Array();
    // book_name=JSON.parse(localStorage.getItem("booknames"))?JSON.parse(localStorage.getItem("booknames")):[]







        // add methods to display prototype
Display.prototype.add = function (book) {
    // let book = new Book(name , author , type);
    console.log('adding to UI');
    let tableBody = document.getElementById('tableBody')
    let book_name=new Array();
    book_name=JSON.parse(localStorage.getItem("booknames"))?JSON.parse(localStorage.getItem("booknames")):[]

   
    if(book_name)
    {
       
    let i = book_name.length-1
    
    {
    let uiString = `    <tr>
                     <td>${book_name[i].name}</td>
                     <td>${book_name[i].author}</td>
                     <td>${book_name[i].type}</td>
                    <td>
                    <a id="cross" class="delete" >X <i class=""></i></a>
                    </td>
                    
                    </tr>`

                        

    tableBody.innerHTML += uiString;}
}
}


Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();

}

Display.prototype.deleteBook = function(target){
    if(target.className ==='delete'){
        // localStorage.clear();
        let deleteddetails = target.parentElement.parentElement ;
    
        console.log(deleteddetails);
        // console.log(book_name);

        // if(deleteddetails===book_name){
            // let index = indexOf(book_name);
        //     name.splice(index,1);
        //     console.log(book_name);
        // }
        // else console.log("no");
        
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
}

//for validating with length of book/author name

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
//validation and error msg show ends here




// add submit event listner to libraryForm
let libraryForm = document.getElementById('libraryForm');

libraryForm.addEventListener('submit', libraryFormsubmit);

let display = new Display();







function libraryFormsubmit(e) {
    console.log('You have submitted the form');
    
    let name = document.getElementById('bookName').value
    let author = document.getElementById('author').value
    let type = document.getElementById("selectbox").value
    
    let book_name = new Array();
    
    book_name=JSON.parse(localStorage.getItem("booknames"))?JSON.parse(localStorage.getItem("booknames")):[];
    if(book_name!=null){
        let book = new Book(name, author, type);
        if(book_name.some((v)=>{return v.name==name})){
            alert("Book already exists!");
            // display.clear();
            display.show('danger', ' sorry you cannot add this book.')
        }
        else{
            book_name.push({
                "name":name,
                "author":author,
                "type":type
            })
            if (display.validate(book)) {
                
                localStorage.setItem("booknames",JSON.stringify(book_name));
                
                display.add(book);
                display.clear();
                display.show('success', ' your book has been successfully added');
            }
            else {
                display.clear();
                display.show('danger', ' sorry you cannot add this book.')
            }
            
            
        }} 
       

        
// let nyame_of_book = JSON.parse(localStorage.getItem("booknames"));


// let book = new Book(name, author, type);

// let display = new Display();

// console.log(document.querySelector("#thetable > tbody > tr:nth-child(1) > td:nth-child(3)").innerHTML);



    e.preventDefault();
}


function onwindowload(){
let tableBody = document.getElementById('tableBody')
let book_name=new Array();
book_name=JSON.parse(localStorage.getItem("booknames"))?JSON.parse(localStorage.getItem("booknames")):[]


if(book_name)
{
   

for(let i=0;i<book_name.length;i++)
{
let uiString = `    <tr>
                 <td>${book_name[i].name}</td>
                 <td>${book_name[i].author}</td>
                 <td>${book_name[i].type}</td>
                <td>
                <a id="cross" class="delete" >X <i class=""></i></a>
                </td>
                
                </tr>`

                    

tableBody.innerHTML += uiString;}
}
}


function deletefromlocal(){
    let deleteddetails = target.parentElement.parentElement;
    
        
    let name =JSON.parse(localStorage.getItem("booknames"))?JSON.parse(localStorage.getItem("booknames")):[]
}


function realfilter(){
    let valfilter=document.getElementById('selectionbox').value.toUpperCase();

    let myTable = document.getElementById('thetable');
    let tr = myTable.getElementsByTagName('tr');
    for(var i = 0 ; i<tr.length;i++){
        let td = tr[i].getElementsByTagName('td')[2];
        console.log(td);
        if(td){
            let textvalue=td.textContent || td.innerHTML;
            if(textvalue.toUpperCase().indexOf(valfilter)>-1){
                  tr[i].style.display="";

            }
            else{
                tr[i].style.display = "none";
            }
        }
    }

    // let  realval = 




}


//Search book feature
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

