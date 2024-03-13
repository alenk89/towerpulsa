        // cara ini hanya untuk natif atau untuk bukaolshop
        function cetak_data() {
            nama = document.getElementById("nama_barang").innerHTML;
            harga = document.getElementById("harga_barang").innerHTML;
            url_barang = document.getElementById("url_barang").href;
            let nomorInputan = document.getElementById("inputNumber").value.replace(/\s+/g, '');
            let operator = document.getElementById("operatorPulsa").innerHTML;

            // jika nomor tidak terdeteksi kasih hasil respon kosong disemua data
            if (nomorInputan == [] || nomorInputan == null || nomorInputan == 08) {
                nomorTujuan.innerHTML = none;
            }
            cetakNama.innerHTML = nama;
            cetakHarga.innerHTML = harga;
            totalTagihan.innerHTML = harga;
            url = url_barang;
            nomorTujuan.innerHTML = nomorInputan;
            cetakOperator.innerHTML = operator;
        }


        // CEK NOMOR TELEPON
        function cekNomorTelponUser() {

            // operator
            let operatorPulsa = document.getElementById("operatorPulsa");

            // input user
            let x = document.getElementById("inputNumber").value;

            // img operator
            let imgOperator = document.getElementById("img_operator");

            // pulsa Indosat
            let pulsaIndosat = document.getElementById("pulsa_indosat");

            // pulsa Simpati
            let pulsaSimpati = document.getElementById("pulsa_simpati");

            // pulsa Simpati
            let pulsaXl = document.getElementById("pulsa_xl");

            // pulsa Simpati
            let pulsaAxis = document.getElementById("pulsa_axis");

            // pulsa Simpati
            let pulsaTri = document.getElementById("pulsa_tri");

            // pulsa Simpati
            let pulsaSmartfren = document.getElementById("pulsa_smartfren");


            if (x == null || x == ' ' || x < 4 || x == "") {
                operatorPulsa.innerHTML = "";
                pulsaIndosat.style.display = "none";
                pulsaSimpati.style.display = "none";
                pulsaXl.style.display = "none";
                pulsaAxis.style.display = "none";
                pulsaTri.style.display = "none";
                pulsaSmartfren.style.display = "none";

                // CEK  NOMOR
            } else if (x == 08) {
                operatorPulsa.innerHTML = "Input Data";
                imgOperator.src = "https://ik.imagekit.io/bomojwm4u1/icon_provider/Spin-1s-200px%20(1).gif?updatedAt=1710366369593";
                pulsaIndosat.style.display = "none";
                pulsaSimpati.style.display = "none";
                pulsaXl.style.display = "none";
                pulsaAxis.style.display = "none";
                pulsaTri.style.display = "none";
                pulsaSmartfren.style.display = "none";

                // NOMOR TRI
            } else if (x == 0895 || x == 0896 || x == 0897 || x == 0898 || x == 0899) {
                operatorPulsa.innerHTML = "THREE";
                imgOperator.src = "https://ik.imagekit.io/bomojwm4u1/icon_provider/three.png?updatedAt=1684302381549";
                pulsaTri.style.display = "block";

                // NOMOR AXIS
            } else if (x == 0838 || x == 0831 || x == 0832 || x == 0833) {
                operatorPulsa.innerHTML = "AXIS";
                imgOperator.src = "https://ik.imagekit.io/bomojwm4u1/icon_provider/axis.png?updatedAt=1684302381561";
                pulsaAxis.style.display = "block";


                // NOMOR INDOSAT
            } else if (x == 0814 || x == 0815 || x == 0816 || x == 0855 || x == 0856 || x == 0857 || x == 0858) {
                operatorPulsa.innerHTML = "INDOSAT";
                imgOperator.src = "https://ik.imagekit.io/bomojwm4u1/icon_provider/indosat.png?updatedAt=1684302381541";
                pulsaIndosat.style.display = "block";

                // NOMOR XL
            } else if (x == 0818 || x == 0817 || x == 0819 || x == 0859 || x == 0877 || x == 0878) {
                operatorPulsa.innerHTML = "XL Axiata";
                imgOperator.src = "https://ik.imagekit.io/bomojwm4u1/icon_provider/xl.png?updatedAt=1684301975488";
                pulsaXl.style.display = "block";

                // NOMOR SMARTFREN
            } else if (x == 0881 || x == 0882 || x == 0883 || x == 0884 || x == 0885 || x == 0886 || x == 0887 || x == 0888 || x == 0889) {
                operatorPulsa.innerHTML = "SMARTFREN";
                imgOperator.src = "https://ik.imagekit.io/bomojwm4u1/icon_provider/smartfren.png?updatedAt=1684302381667";
                pulsaSmartfren.style.display = "block";

                //  NOMOR TELKOMSEL
            } else if (x == 0811 || x == 0812 || x == 0813 || x == 0821 || x == 0822 || x == 0852 || x == 0853 || x == 0823 || x == 0851 || x == 0835) {
                operatorPulsa.innerHTML = "TELKOMSEL";
                imgOperator.src = "https://ik.imagekit.io/bomojwm4u1/icon_provider/tsel.png?updatedAt=1684301617719";
                pulsaSimpati.style.display = "block";
            }
        }
        // bersihkan konten alert saat diklik oleh user
