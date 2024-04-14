
var tw = new Date();
if (tw.getTimezoneOffset() == 0) (a = tw.getTime() + (7 * 60 * 60 * 1000))
else (a = tw.getTime());
tw.setTime(a);
var tahun = tw.getFullYear();
var hari = tw.getDay();
var bulan = tw.getMonth();
var tanggal = tw.getDate();
var jam = tw.getHours();
var menit = tw.getMinutes();
var detik = tw.getSeconds();
var hariarray = new Array("Minggu,", "Senin,", "Selasa,", "Rabu,", "Kamis,", "Jum'at,", "Sabtu,");
var bulanarray = new Array("Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember");
document.getElementById("waktu").innerHTML = +tanggal + " " + bulanarray[bulan] + " " + tahun + " " + jam + ":" + menit + ":" + detik;

function rubah(angka) {
    var reverse = angka.toString().split("").reverse().join(""),
        ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join(".").split("").reverse().join("");
    return 'Rp ' + ribuan;
}
document.getElementById("jumlah_topup").innerText = rubah(
    document.getElementById("jumlah_topup").textContent
);

function unik(angka) {
    var reverse = angka.toString().split("").reverse().join(""),
        ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join(".").split("").reverse().join("");
    return 'Rp ' + ribuan;
}

document.getElementById("kode_unik").innerText = unik(
    document.getElementById("kode_unik").textContent
);

function feenya(angka) {
    var reverse = angka.toString().split("").reverse().join(""),
        ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join(".").split("").reverse().join("");
    return 'Rp ' + ribuan;
}

document.getElementById("fee").innerText = feenya(
    document.getElementById("fee").textContent
);

function totalBayar(angka) {
    var reverse = angka.toString().split("").reverse().join(""),
        ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join(".").split("").reverse().join("");
    return 'Rp ' + ribuan;
}

document.getElementById("total_bayar").innerText = totalBayar(
    document.getElementById("total_bayar").textContent
);

function totalTf(angka) {
    var reverse = angka.toString().split("").reverse().join(""),
        ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join(".").split("").reverse().join("");
    return 'Rp ' + ribuan;
}

document.getElementById("total_tf").innerText = totalTf(
    document.getElementById("total_tf").textContent
);

function feeAdmin(angka) {
    var reverse = angka.toString().split("").reverse().join(""),
        ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join(".").split("").reverse().join("");
    return 'Rp ' + ribuan;
}

document.getElementById("fee_admin").innerText = feeAdmin(
    document.getElementById("fee_admin").textContent
);
