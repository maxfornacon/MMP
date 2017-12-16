<script type = 'text/javascript'>
var run = 1;
function lauf() {
var y = window.pageYOffset;
window.scrollBy(0, run);
if (y == window.pageYOffset) {
window.setTimeout('window.scrollTo(0,0);lauf();',2 000);
}
else{
window.setTimeout('lauf()', 50);
}
}
function start() {
window.setTimeout('lauf()', 50);
}
</script>
