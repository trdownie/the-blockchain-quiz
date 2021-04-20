//-------------------- COOKIES
//---------- set achieved level (on page load)
function storeLevel(level) {
  document.cookie = "userLevel=" + level + ";path=/";
}

// example below should write cookie {userLevel=6;path=/}
storeLevel(6)

