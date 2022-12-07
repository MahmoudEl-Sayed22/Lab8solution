
var siteNameInput= document.getElementById('siteNameInput');
var linksContainer= [];
var search=document.getElementById('searchLink');
var submitBTN=document.getElementById('submitLink');
var done=document.getElementById('donebtn');



function check(){
    if(submitBTN.innerHTML=='Update Link'){
        addUpdate();
    }else{
        addLink();
    }
}

function addLink(){
    var site ={
        name:siteNameInput.value,
    }
    linksContainer.push(site);
    localStorage.setItem('links',JSON.stringify(linksContainer))
    display();
    clearForm();
}
function clearForm(){
   siteNameInput.value='';
   
}

function display(){
    var linkList=``;
    for(var i=0; i<linksContainer.length; i++){
        
        linkList=linkList+`<div class="site d-flex" >
        <h2>${linksContainer[i].name}</h2>
        <button onclick="deleteLink(${i})" class="btn btn-danger">Delete</button>
        <button id="donebtn" onclick="updateLink(${i})" class="btn btn-success">done</button>
    </div>`
    }
    document.getElementById('bookmarkList').innerHTML=linkList;
}

function deleteLink(deleteIndex){
    linksContainer.splice(deleteIndex,1);
    localStorage.setItem('links',JSON.stringify(linksContainer));
    display();
}

function searchLink(){
    var linkList=``;
    for(var i=0; i<linksContainer.length; i++){
        if(linksContainer[i].name.toLowerCase().includes(search.value.toLowerCase())){
        linkList=linkList+`<div class="site d-flex" >
        <h2>${linksContainer[i].name}</h2>
        <button onclick="deleteLink(${i})" class="btn btn-danger">Delete</button>
        <button onclick="updateLink(${i})" class="btn btn-success">Done</button>
        </div>`}
    }
}
var updateRow;

function updateLink(updateIndex){
    updateRow=updateIndex;
    siteNameInput.value="Done";
    var updateContent={
        name:siteNameInput.value
    }
    linksContainer[updateRow]=updateContent;
    clearForm();
    localStorage.setItem('links',JSON.stringify(linksContainer));
    display();
}