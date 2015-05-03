<!DOCTYPE html>
<html>
<head>
<title>Google+ JavaScript Quickstart</title>
<script type="text/javascript">
      (function() {
       var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
       po.src = 'https://apis.google.com/js/client.js?onload=onLoadCallback';
       var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
     })();

function onLoadCallback()
{
    gapi.client.setApiKey('social-nexus-gplus'); //set your API KEY
    gapi.client.load('plus', 'v1',function(){});//Load Google + API
}

function login() 
{
  var myParams = {
    'clientid' : '508086139160-mc1kt92jqr7vvu6cnkefpsj2c9oi3mm0.apps.googleusercontent.com', //You need to set client id
    'cookiepolicy' : 'single_host_origin',
    'callback' : 'loginCallback', //callback function
    'approvalprompt':'force',
    'scope' : 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
  };
  gapi.auth.signIn(myParams);
}

function loginCallback(result)
{
    if(result['status']['signed_in'])
    { 
        alert("Login Success");
    }   
 
}

function logout()
{
    gapi.auth.signOut();
    location.reload();
}


</script>
<body>
<input type="button"  value="Login" onclick="login()" />
<input type="button"  value="Logout" onclick="logout()" />
<div id="profile">User Information</div>
</body>
</html>
