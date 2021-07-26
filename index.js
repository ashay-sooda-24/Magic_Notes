console.log('jello');
showNote();
let addBtn = document.getElementById('addbtn');

addBtn.addEventListener('click',function(){
    let addtitle = document.getElementById('addtitle')
    let text = document.getElementById('text');

    let notes = localStorage.getItem('notes');
    if(notes == null){
        noteObj = [];
    }
    else{
        noteObj = JSON.parse(notes)
    }
    myObj = {
        title: addtitle.value,
        text: text.value
    }
    noteObj.push(myObj);
    localStorage.setItem('notes',JSON.stringify(noteObj))
    addtitle.value="";
    text.value = "";
    console.log(noteObj);

    showNote();
})

function showNote(){
    let notes = localStorage.getItem('notes')
    
    if(notes == null){
        noteObj = [];
    }
    else{
        noteObj = JSON.parse(notes)
    }

    let html = "";

    noteObj.forEach(function(element,index){
        html+=`<div class="card mx-2 my-2 noteCard" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title" id="mynotetitle">${index+1}. ${element.title}</h5>
          <p class="card-text" id="mydata">${element.text}</p>
          <button class="btn btn-primary" id="${index}" onclick="deleteNote(this.id)" id="dltbtn">Delete</button>
        </div>
      </div>`
    });

    let noteC = document.getElementById('notes')
    if(noteObj.length!=0){
        noteC.innerHTML = html;
    }else{
        noteC.innerHTML = `Sorry no notes available. click on "Add button" to add a note`
    }
}




function deleteNote(index){
    console.log("inside delete");
    let notes = localStorage.getItem('notes')
    if(notes == null){
        noteObj = [];
    }
    else{
        noteObj = JSON.parse(notes)
    }

    noteObj.splice(index,1);
    // console.log(noteObj)
    localStorage.setItem("notes", JSON.stringify(noteObj))
    showNote();
}




