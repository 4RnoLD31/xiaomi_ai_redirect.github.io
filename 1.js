const searchString = new URLSearchParams(window.location.search);
const clickid = searchString.get('clickid');
console.log(clickid);
document.write(clickid);
if (clickid == 45) {
  document.write( "Правильно!" );
  document.write( "Вы такой умный!" );
} if (clickid == 23) {
  document.write( "Правильно!" )
}
