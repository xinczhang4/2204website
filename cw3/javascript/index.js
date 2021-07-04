var tablinks = document.getElementsByClassName("tablinks");
var tabcontent = document.getElementsByClassName("tabcontent");
// 显示时间
var noprint=document.getElementsByClassName("noprints")[0];
window.onload = function() {
    window.setInterval("Systime()", 1000);
}
function Systime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var data = now.getDate();
    var day = now.getDay();
    var hour = now.getHours();
    var minu = now.getMinutes();
    var sec = now.getSeconds();
    month = month + 1;
    var arr_week = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var week = arr_week[day];
    var time = data + "/ " + month + "/ " + year + "      " + week + "      " + hour + ":" + minu + ":" + sec;
    noprint.innerText = time;
}

for (var i=0;i<tablinks.length;i++) {
    (function(i){
        tablinks[i].onclick=function(){
            display(i);
        }
    })(i);
};
function display(i){
    switch (i) {
        case 0:
        tablinks[0].classList.add("tabActive");   
        tablinks[1].classList.remove("tabActive");   
        tablinks[2].classList.remove("tabActive");   

        tabcontent[0].classList.add("active");   
        tabcontent[1].classList.remove("active");   
        tabcontent[2].classList.remove("active");   
        break;
        case 1:
        tablinks[0].classList.remove("tabActive");   
        tablinks[1].classList.add("tabActive");   
        tablinks[2].classList.remove("tabActive");   

        tabcontent[0].classList.remove("active");   
        tabcontent[1].classList.add("active");   
        tabcontent[2].classList.remove("active"); 
        break;
        case 2:
        tablinks[0].classList.remove("tabActive");   
        tablinks[1].classList.remove("tabActive");   
        tablinks[2].classList.add("tabActive");   

        tabcontent[0].classList.remove("active");   
        tabcontent[1].classList.remove("active");   
        tabcontent[2].classList.add("active"); 
        break;
        default:
            break;
    }
};
var tbody= document.getElementById("tbody");
var tbodyList=tbody.children;
function obtain(){
    
    var num=tbodyList.length-1;
    return num;
}
var undo=document.getElementById("undo");
undo.onclick=function(){
    // console.log(obtain());
    if(obtain() >-1){
        tbody.removeChild(tbodyList[obtain()]);
        subtraction();
    }else{
        alert("No more dishes!");
    }
};
// 添加
function add(_this){
    var name=_this.parentNode.children[0].getAttribute("alt");
    var number=_this.parentNode.children[1].value;
    if(number > 0){
        var str="<td>"+name+"</td><td id='num' class='num'>"+number+"</td>";
        var tr=document.createElement("tr");  
        // sum= sum+parseInt(number);
        //tr.id="num";
        tr.innerHTML=str;  
        tbody.appendChild(tr);  
        countes(number);
		_this.parentNode.children[1].value="";
    }else{
        alert("Please input a correct number!");
    }
   
}
// 计算总和
var sum=0;
var count=0;
var numes=document.getElementsByClassName("numes")[0];
function sums(){
    var num=document.getElementsByClassName("num");
    for(var i=0;i<num.length;i++){
        sum+=parseInt(num[i].innerText);
    }
    count=sum;
    numes.innerText=sum;
}
sums();
function countes(number){  
    console.log(number);
    if(number !=null){
        sum+= parseInt(number);
        numes.innerText=sum;
    }
}
function subtraction(){
    var num=document.getElementsByClassName("num");
    var sub =0;
    for(var i=0;i<num.length;i++){
        sub+=parseInt(num[i].innerText);
    }
    numes.innerText=sub;
} 