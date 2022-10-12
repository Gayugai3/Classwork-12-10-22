function createlabels(tagname,attrname,attrvalue,content){
var ele=document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content;
return ele;
}

function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
}
function createlinebreak(tagname){
var ele=document.createElement(tagname);
return ele;
}
var fname=createlabels("label","for","fname","Firstname");
var br1=createlinebreak("br");
var input1=createinput("input","type","text","id","fname");
var br2=createlinebreak("br");

var mname=createlabels("label","for","mname","Middlename");
var br3=createlinebreak("br");
var input2=createinput("input","type","text","id","mname");
var br4=createlinebreak("br");

var lname=createlabels("label","for","lname","Lastname");
var br5=createlinebreak("br");
var input3=createinput("input","type","text","id","lname");
var br6=createlinebreak("br");

var pno=createlabels("label","for","pno","Phonenumber");
var br7=createlinebreak("br");
var input4=createinput("input","type","text","id","pno");
var br8=createlinebreak("br");


document.body.append(fname,br1,input1,br2,mname,br3,input2,br4,lname,br5,input3,br6,pno,br7,input4,br8);