/*console.log('Loaded!');
var element=document.getElementById('main-text');

element.innerHTML='New Vaue';
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
  //img.style.marginLeft='100px';
  
};*/
//counter code

var button=document.getElementById('counter');

button.onclick=function()
{
    var request=new XMLHttpRequest();
    //capture the response and store in a variable
    request.onreadystatechange=function()
    {
        if(request.readyState===XMLHttpRequest.DONE){
        //take some action.
        if(request.status===200){
           var counter= request.responseText;
           var span=document.getElementById('count');
           span.innerHTML=counter.toString();
           
           
        }
        }
        
    };
    request.open('GET','http://piyushrj100.imad.hasura-app.io/counter',true);
    request.send(null);
    
   // counter=counter+1;
   

};
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    //make a request to the server and send the name
    //capture a list of names and render it on the list
    var names=['name1','name2','name3','name4'];
    var list='';
    for(var i=0;i<names.length;i++){
        list+='<li>'+names[i]+'<li>';
    }
    var ul=document.getElementbyId('namelist');
    ul.innerHTML=list;
    
}
 


