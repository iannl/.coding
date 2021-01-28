// ©iannl 2020
// you may copy and change this site if you have this copyright
var ids = ['title', 'metaTitle', 'metaDescription', 'metaKeywords', 'metaLanguage', 'metaAuthor']
var props = ['<title><content></title>', '<meta name="title" content="<content>">', '<meta name="description" content="<content>">', '<meta name="keywords" content="<content>">', '<meta name="language" content="<content>">', '<meta name="author" content="<content>">']
var h1count = 0
var h2count = 0
var h3count = 0
var h4count = 0
var h5count = 0
var h6count = 0
var pcount = 0
var bcount = 0
var imgcount = 0
var makewebsite = `<p><b>Note: </b> if you click a button it will clear all the text. Pre-plan website layout before entering text</p>
<input type="text" id="title" placeholder="website title">
<input type="text" id="metaTitle" placeholder="meta title">
<input type="text" id="metaDescription" placeholder="meta description">
<input type="text" id="metaKeywords" placeholder="meta keywords">
<input type="text" id="metaLanguage" placeholder="meta language">
<input type="text" id="metaAuthor" placeholder="meta author">
<br>
<button onclick="h1()">Add head</button>
<button onclick="h2()">Add head 2</button>
<button onclick="h3()">Add head 3</button>
<button onclick="h4()">Add head 4</button>
<button onclick="h5()">Add head 5</button>
<button onclick="h6()">Add head 6</button>
<button onclick="p()">Add paragraph</button>
<button onclick="b()">Add bold text</button>
<button onclick="img()">Add image from URL</button>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button onclick="done()">Finish!</button><br>`
var output = ''
function load() {
    document.getElementById('makewebsite').innerHTML=makewebsite
}

function h1() {
    h1count++
    ids.push('h1ID'+h1count)
    props.push('<h1><content></h1>')
    document.getElementById('makewebsite').innerHTML+='<input type="text" id="h1ID'+h1count+'" placeholder="Head '+h1count+'"></input>'
}

function h2() {
    h2count++
    ids.push('h2ID'+h2count)
    props.push('<h2><content></h2>')
    document.getElementById('makewebsite').innerHTML+='<input type="text" id="h2ID'+h2count+'" placeholder="Head 2 '+h2count+'"></input>'
}

function h3() {
    h3count++
    ids.push('h3ID'+h3count)
    props.push('<h3><content></h3>')
    document.getElementById('makewebsite').innerHTML+='<input type="text" id="h3ID'+h3count+'" placeholder="Head 3 '+h3count+'"></input>'
}

function h4() {
    h4count++
    ids.push('h4ID'+h4count)
    props.push('<h4><content></h4>')
    document.getElementById('makewebsite').innerHTML+='<input type="text" id="h4ID'+h4count+'" placeholder="Head 4 '+h4count+'"></input>'
}

function h5() {
    h5count++
    ids.push('h5ID'+h5count)
    props.push('<h5><content></h5>')
    document.getElementById('makewebsite').innerHTML+='<input type="text" id="h5ID'+h5count+'" placeholder="Head 5 '+h5count+'"></input>'
}

function h6() {
    h6count++
    ids.push('h6ID'+h6count)
    props.push('<h6><content></h6>')
    document.getElementById('makewebsite').innerHTML+='<input type="text" id="h6ID'+h6count+'" placeholder="Head 6 '+h6count+'"></input>'
}

function p() {
    pcount++
    ids.push('pID'+pcount)
    props.push('<p><content></p>')
    document.getElementById('makewebsite').innerHTML+='<input type="text" id="pID'+pcount+'" placeholder="Paragraph '+pcount+'"></input>'
}

function b() {
    bcount++
    ids.push('bID'+bcount)
    props.push('<b><content></b>')
    document.getElementById('makewebsite').innerHTML+='<input type="text" id="bID'+bcount+'" placeholder="Bold text '+bcount+'"></input>'
}

function img() {
    imgcount++
    ids.push('imgID'+imgcount)
    props.push('<img src="<content>" width="500px">')
    document.getElementById('makewebsite').innerHTML+='<input type="text" id="imgID'+imgcount+'" placeholder="Image URL '+imgcount+'"></input>'
}

function done() {
    for (let i = 0; i<ids.length; i++) {
        output+=props[i].replaceAll('<content>', document.getElementById(ids[i]).value)
    }
    document.getElementById('makewebsite').innerHTML='Code:<br><textarea>'+output+'</textarea><br>Result:<br>'+output+'<br>'
    document.getElementById('makewebsite').innerHTML+=`<button id="button" onclick="download()">Download</button>`
}

function download() {
    var createDl = document.createElement('a');
    createDl.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(output));
    createDl.setAttribute('download', 'website.html');
    createDl.style.display = 'none';
    document.body.appendChild(createDl);
    createDl.click();
    document.body.removeChild(createDl);
}