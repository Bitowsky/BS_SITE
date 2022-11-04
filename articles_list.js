// [Article Number] : [Folder with an Article]
var ArticlesAll = {
    "Article1" : "TEST_ART"
};

/*
var parser, xmlDoc;
var article_xml = 

parser = new DOMParser();
xmlDoc = parser.parseFromString("TEST_ART/article.xml","text/xml");

document.getElementById("demo").innerHTML =
xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
*/
for (let x in ArticlesAll) {
    console.log(ArticlesAll[x])

}

if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
 } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
 }

 xmlhttp.open("GET", "text.xml", false);
 xmlhttp.send();
 xmlDoc = xmlhttp.responseXML;

 var x = xmlDoc.getElementsByTagName("CD");

 for ( i = 0; i < x.length; i++) {

     var titleName = x[i].getElementsByTagName("TITLE")[0].innerHTML;

     document.getElementById("text1").innerHTML = titleName ;
     document.getElementById("text2").innerHTML = titleName ;
     document.getElementById("text3").innerHTML = titleName ; 
}     


