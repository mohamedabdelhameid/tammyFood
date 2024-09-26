let hide = document.getElementById('Hide');
// let hider = document.getElementsByTagName('PPlus');

function hiddden(){
  if(hide.innerHTML === ''){
    hide.innerHTML = `
    <a href="#Home" onclick="hidder()">Home</a>
    <a href="#About" onclick="hidder()">About us</a>
    <a href="#sectionThree" onclick="hidder()">Menu</a>
    <a href="#Blog" onclick="hidder()">Blog</a>
    <a href="#Contact" onclick="hidder()">Contact us</a>
    `
  }
  else{
    hide.innerHTML = '';
  }
}





function hidder(){
  hide.innerHTML = '';
}
// document.onload = () =>{
// }