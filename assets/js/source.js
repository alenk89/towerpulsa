        var today = new Date()
        var curHr = today.getHours()
        var time = null;
        if (curHr < 10) {
            var time = "Selamat Pagi";
        } else if (curHr < 18) {
            var time = "Selamat Siang";
        } else {
            var time = "Selamat Malam";
        }
        document.getElementById("time").innerHTML = time;

        function rubah(angka) {
            var reverse = angka.toString().split('').reverse().join(''),
                ribuan = reverse.match(/\d{1,3}/g);
            ribuan = ribuan.join('.').split('').reverse().join('');
            return ribuan;
        }
        document.getElementById("saldo_user").innerText = rubah(document.getElementById("saldo_user").textContent);

        function rubah(angka) {
            var reverse = angka.toString().split('').reverse().join(''),
                ribuan = reverse.match(/\d{1,3}/g);
            ribuan = ribuan.join('.').split('').reverse().join('');
            return ribuan;
        }
        document.getElementById("poinku").innerText = rubah(document.getElementById("poinku").textContent);

        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
