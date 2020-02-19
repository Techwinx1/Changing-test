
function myFunction() {
    const str = document.getElementById("demo").innerHTML;
    const res = str.replace(/blue/g, "red");
    document.getElementById("demo").innerHTML = res;
}
