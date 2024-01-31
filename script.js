console.log("DO NOT CHECK THE CONSOLE AND DO NOT RUN SCRIPTS ON THIS IDOITIC 'website' cause it has no servers")


function killcurly() {
  //let x = window.open("https://www.securly.com");
  //x.document.write('<script>fetch("https://raw.githubusercontent.com/zek-c/Securly-Kill-V111/main/kill.js").then(r => r.text()).then(r => eval(r))</script>')
  //x.document.close()
  alert("reworking")
  console.log("user bro you really thought")
}
function coderunner() {
  var x = prompt("Code to run:"); var y = confirm("This will open a about:blank tab to write script. Are you sure?"); if (y) { var tab = window.open("about:blank", "_blank"); tab.document.write("<script>" + x + "</script>"); tab.document.close(); };
console.log("wow running code, how about you use 2.0")
}
function runcode() {
  let code = document.getElementById("code").value;
  let x = confirm("Code may cause viruses & problems with computer. Are you sure?");
  if (x) {
    let tab = window.open("about:blank", "_blank");
    tab.document.write("<script>" + code + "</script>");
    tab.document.close();
  }
  else {
    alert('k')
    console.log('no')
  }
}
function runbrow() {
  let e = document.getElementById("code").value;
  let x = confirm("running code on this page may lead to some problems. Are you sure?");;
  if (x) {
    eval(e);
    console.log("stop checking the console")
  }
  else {
    console.log(null)
  }
}
function htmlrunner() {
  let e = document.getElementById("htmcode").value;
  let x = confirm("running code on this page may lead to some problems. Are you sure?");;
  if (x) {
    let tab = window.open("about:blank", "_blank");
    tab.document.write(e);
    tab.document.close();
  }
  else {
    console.log(null)
  }
}
function htmlrunnew(code) {
  try {
    let encode = btoa(code);
    let outputbox = document.getElementById("output");
    outputbox.setAttribute("src", "/pages/scriptoutput.html?code=" + encode)} catch(err) {
    console.log(err)
    }
  
}
function fullpage(code) {
  try{
    window.location.replace('/pages/scriptoutput.html?code=' + btoa(code))
    
  } catch (err) {
    console.log("fu")
  }
}

/* 

hello world guys today in our video wa

*/

