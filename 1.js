const searchString = new URLSearchParams(window.location.search);
const clickid = searchString.get('clickid');
console.log(clickid);
document.write(clickid)
