const head = document.getElementsByTagName('head')[0];
const body = document.getElementsByTagName('body')[0];

var ouathToken = '';
const endpoint = "https://3058.in";

// Checking for Incoming Token request

const queryString = window.location.search;
if (queryString){
	console.log(queryString)
	const d = new Date();
  	d.setTime(d.getTime() + (5*24*60*60*1000));
  	let expires = "expires="+ d.toUTCString();
  	expires = expires.slice(0, expires.length - 3) + 'UTC'
	const urlParams = new URLSearchParams(queryString);
	ouathToken = urlParams.get('token');
	console.log(ouathToken, expires);
	document.cookie = `auth.token.3058.in=${ouathToken}; ${expires}; path=/`;
  window.location.href = window.location.href.replace(window.location.search, '');
}

// get Cookie Data
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Checking Authentication via tokenisation

if (getCookie("auth.token.3058.in")){
	ouathToken = getCookie("auth.token.3058.in");
	const loginEndpoint = `${endpoint}/api/authentication-status`;
	const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Token ' + ouathToken,
        },  
    };
    fetch(loginEndpoint, options) //  Promise
    .then(response=>{
        console.log(response)
        return response
    })
    .then(authData =>{
        handleAuthData(authData);
    })
    .catch(err=> {
        console.log('err', err)
    })
}
else{
  oautInterface();
}

// OneAuth Page Interface
function oautInterface(){
  head.innerHTML = '<link rel="stylesheet" type="text/css" href="model-auth-style.css">';
  body.innerHTML = '<div class="container"> <div class="cookiesContent" id="cookiesPopup"> <button class="close">✖</button> <img src="https://cdn-icons-png.flaticon.com/512/4009/4009133.png" alt="security-guard" /> <p>For security reasons, we need authentication access from you.</p> <button class="accept" onclick=window.location.href=`https://3058.in/oneauth?q=${window.location.href}`>Continue with OneAuth</button> </div> </div>';
}
function handleAuthData(authData, callback){
  if(authData.status != 200){
    oautInterface(); 
  }
  callback();
}