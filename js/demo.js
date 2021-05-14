// console.log('This is log');
// var a = 6,
//     b = 8;
// var c;
// c = Math.sqrt(a * a + b * b);
// // Kiểm tra kiểu dữ liệu của biến
// console.log(typeof c);
// console.log(c);
// // Dynamic type: có thể gán bất kì giá trị của biến ở nhiều thời điểm khác nhau
// // Các toán tử

// Tính tổng ba số
var n = 678;
var unit;
var hundered;
var ten;
var sum;
// Tách số hàng phần 100
hundered = Math.floor(n / 100);
console.log(hundered);
// Tách số hàng phần 10
ten = Math.floor(n % 100 / 10);
console.log(ten);
// Tách số hàng đơn vị
unit = n % 10;
console.log(unit);
// Tính tổng ba số
sum = hundered + ten + unit;
console.log(sum);

// Tính tiền từ thiện
var tenPhim = 'Zero to Hero at Cybersoft';
var giaVeNguoiLon = 90;
var giaVeTreEm = 40;
var soVeNguoiLon = 200;
var soVeTreEm = 100;
var phanTram = 10;
var tongDoanhThu;
var tienTuThien;
var tienConLai;
var tongVe;
tongVe = giaVeNguoiLon + giaVeTreEm;
tongDoanhThu = (soVeNguoiLon * giaVeNguoiLon) + (soVeTreEm * giaVeTreEm);
console.log(tongDoanhThu);
tienTuThien = (tongDoanhThu * phanTram) / 100;
console.log(tienTuThien)
tienConLai = tongDoanhThu - tienTuThien;
console.log(tienConLai)

//test
var a = 3;
var b = 1;
a += b;
b = (b++) + (a++);

console.log(a)
console.log(b)

// Tính tiền lương