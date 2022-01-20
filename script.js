var a = +prompt('Raqamni kiriting');
var b = +prompt('Raqamni kiriting');
var c = +prompt('Raqamni kiriting');


a = Number(a);
b = Number(b);
c = Number(c);

if (a < b && a > c || a > b && a < c) {
    alert(a);
}

if (b < a && b > c || b > a && b < c) {
    alert(b);
}

if (c < a && c > b || c > a && c < b) {
    alert(c);
} else {
    alert('Raqamlar bir-biriga teng');
}