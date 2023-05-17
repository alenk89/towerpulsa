
const PulsaTfTelkomsel = ['Pulsa Transfer Telkomsel', '#']
const PulsaRegTelkomsel = ['Pulsa Reguler Telkomsel', 'pulsa-reguler-267083']
const masaAktifTelkomsel = ['Masa Aktif Telkomsel', '#']

const PulsaRegAxis = ['Pulsa Reguler Axis', 'pulsa-reg-axis-443035']
const PulsaTfAxis = ['Pulsa Transfer', '#']
const masaAktifAxis = ['Masa Aktif Axis', '#']



const PulsaTfXl = ['Pulsa Reguler XL', 'pulsa-reg-xl-443036']
const PulsaRegXl = ['Pulsa Transfer XL', '#']
const masaAktifXL = ['Masa Aktif XL', '#']

const PulsaRegIndosat = ['Pulsa Reguler Indosat', 'pulsa-reg-indosat-443032']
const PulsaTfIndosat = ['Pulsa Transfer', '#']
const masaAktifIndosat = ['Masa Aktif Indosat', '#']

const PulsaRegSmartfren = ['Pulsa Reguler Smartfren', 'pulsa-reg-smartfren-443038']
const PulsaTfSmartfren = ['Pulsa Transfer', '#']
const masaAktifSmartfren = ['Masa Aktif Smartfren', '#']

const PulsaRegThree = ['Pulsa Reguler Three', 'pulsa-reg-three-443037']
const PulsaTfThree = ['Pulsa Transfer', '#']
const masaAktifThree = ['Masa Aktif Three', '#']

const PulsaRegByu = ['Pulsa Reguler Byu', 'pulsa-reg-byu-443039']
const PulsaTfByu = ['Pulsa Transfer', '#']
const masaAktifByu = ['Masa Aktif Byu', '#']

const load = `

            <div id="for-ld2" class="container text-center loader" style="margin-top:30%;margin-bottom:30%">
                <div class="loader" role="status">
                    <img src="https://i.ibb.co/HYtCnNc/loading.gif" alt="loading" style="width:120px" >
                </div>
            </div>

`

const dataNull = `
            <div class="container text-center">
                <div class="d-flex justify-content-center flex-column align-items-center" style="margin-top:30%;margin-bottom:30%" id="rol">
                    <img src="https://i.ibb.co/HBBWwj4/out-of-stock.png" alt="logo-new" class="opacity-50" style="width:120px">
                        <h6 class="text-dark mt-3">Tidak Ada Produk</h6>
                </div>
            </div>
    `

function forNumb() {
    var ops = parseOperator($("#nomoHp").val())
    console.log(ops['operator'] + ' ' + ops['prefix']);
    // detecNumber('reg', ops['prefix'])
    swtch('reg', 'PulsaTf', 'Pulsa Transfer', ops['prefix'])
    $("#wh").html(`

    `)


}


// forNumb()

function detecNumber(type, x) {
    let operatorPulsa = document.getElementById("operatorPulsa");
    let provider = document.getElementById("provider");

    if (x == 0851) {
        struk.innerHTML = `
            <img src='https://ik.imagekit.io/bomojwm4u1/icon_pulsa_-_ppob/byu.png?updatedAt=1684300837603' width='80' height='80'>
        `;
        operatorPulsa.innerHTML = `
            <img src='https://ik.imagekit.io/bomojwm4u1/icon_pulsa_-_ppob/byu1.png?updatedAt=1684301158317' width='25' height='25'>
            <span class='byu'><strong>By U</strong></span >
        `;
        provider.innerHTML = "By U";
        if (type == 'reg') {
            getData(PulsaRegByu, type)
        } else if (type == 'tf') {
            getData(PulsaTfByu, type)
        } else {
            getData(masaAktifByu, type)
        }
    } else if (x == 0811 || x == 0812 || x == 0813 || x == 0821 || x == 0822 || x == 0852 || x == 0853 || x == 0823 || x == 0851) {
        struk.innerHTML = `
            <img src='https://ik.imagekit.io/bomojwm4u1/icon_provider/tsel.png?updatedAt=1684301617719' width='80' height='80'>
        `;
        operatorPulsa.innerHTML = `
            <img src='https://ik.imagekit.io/bomojwm4u1/icon_provider/tsel.png?updatedAt=1684301617719' width='25' height='25'>
            <span class='tsel'><strong>TELKOMSEL</strong></span >
        `;
        provider.innerHTML = "Telkomsel";

        if (type == 'reg') {
            getData(PulsaRegTelkomsel, type)
        } else if (type == 'tf') {
            getData(PulsaTfTelkomsel, type)
        } else {
            getData(masaAktifTelkomsel, type)
        }
    } else if (x == 0838 || x == 0831 || x == 0832 || x == 0833) {
        struk.innerHTML = `
            <img src='https://ik.imagekit.io/bomojwm4u1/icon_provider/axis.png?updatedAt=1684302381561' width='80' height='80'>
        `;
        
        operatorPulsa.innerHTML = 
            `
                    <img src='https://ik.imagekit.io/bomojwm4u1/icon_provider/axis.png?updatedAt=1684302381561' width='25' height='25'>
                    <span class='axis'><strong>AXIS</strong></span >
                `
        
        ;
        provider.innerHTML = "Axis";
        if (type == 'reg') {
            getData(PulsaRegAxis, type)
        } else if (type == 'tf') {
            getData(PulsaTfAxis, type)
        } else {
            getData(masaAktifAxis, type)
        }
    } else if (x == 0814 || x == 0815 || x == 0816 || x == 0855 || x == 0856 || x == 0857 || x == 0858) {
        struk.innerHTML = `
            <img src='https://ik.imagekit.io/bomojwm4u1/icon_provider/indosat.png?updatedAt=1684302381541' width='80' height='80'>
        `;
        
        operatorPulsa.innerHTML = 
                `
                    <img src='https://ik.imagekit.io/bomojwm4u1/icon_provider/indosat.png?updatedAt=1684302381541' width='25' height='25'>
                    <span class='indosat'><strong>INDOSAT</strong></span >
                `
        ;
        provider.innerHTML = "Indosat";
        if (type == 'reg') {
            getData(PulsaRegIndosat, type)
        } else if (type == 'tf') {
            getData(PulsaTfIndosat, type)
        } else {
            getData(masaAktifIndosat, type)
        }
    } else if (x == 0818 || x == 0817 || x == 0819 || x == 0859 || x == 0877 || x == 0878) {
        struk.innerHTML = `
            <img src='https://ik.imagekit.io/bomojwm4u1/icon_provider/xl.png?updatedAt=1684301975488' width='80' height='80'>
        `;
        operatorPulsa.innerHTML = 
            `
                    <img src='https://ik.imagekit.io/bomojwm4u1/icon_provider/xl.png?updatedAt=1684301975488' width='25' height='25'>
                    <span class='xl'><strong>XL AXIATA</strong></span >
                `
        ;
        provider.innerHTML = "XL Axiata";
        if (type == 'tf') {
            getData(PulsaRegXl, type)
        } else if (type == 'reg') {
            getData(PulsaTfXl, type)
        } else {
            getData(masaAktifXL, type)
        }
    } else if (x == 0881 || x == 0882 || x == 0883 || x == 0884 || x == 0885 || x == 0886 || x == 0887 || x == 0888 || x == 0889) {

        struk.innerHTML = `
            <img src='https://ik.imagekit.io/bomojwm4u1/icon_provider/smartfren.png?updatedAt=1684302381667' width='80' height='80'>
        `;
        operatorPulsa.innerHTML = 
            `
                    <img src='https://ik.imagekit.io/bomojwm4u1/icon_provider/smartfren.png?updatedAt=1684302381667' width='25' height='25'>
                    <span class='smartfreen'><strong>SMARTFREEN</strong></span >
                `
        ;
        provider.innerHTML = "Smartfren";
        if (type == 'reg') {
            getData(PulsaRegSmartfren, type)
        } else if (type == 'tf') {
            getData(PulsaTfSmartfren, type)
        } else {
            getData(masaAktifSmartfren, type)
        }
    } else if (x == 0895 || x == 0896 || x == 0897 || x == 0898 || x == 0899) {
        struk.innerHTML = `
            <img src='https://ik.imagekit.io/bomojwm4u1/icon_provider/three.png?updatedAt=1684302381549' width='80' height='80'>
        `;
        operatorPulsa.innerHTML = 
                `
                    <img src='https://ik.imagekit.io/bomojwm4u1/icon_provider/three.png?updatedAt=1684302381549' width='25' height='25'>
                    <span class='tree'><strong>THREE</strong></span >
                `
                ;
        provider.innerHTML = "Three";
        if (type == 'reg') {
            getData(PulsaRegThree, type)
        } else if (type == 'tf') {
            getData(PulsaTfThree, type)
        } else {
            getData(masaAktifThree, type)
        }
    }
}

function getData(pReg, type) {
    var brand = pReg[0]
    var urls = pReg[1]

    $("#ttl").html(brand)
    $.ajax({
        type: "GET",
        url: `https://api-otomatis-bukaolshop.my.id/api/produk?token=${bigApi}&category=${urls}&auth_token=${bigTkn}&page=1`,
        dataType: "json",
        beforeSend: function () {
            $("#for-ld2").show()
            $("#bigDataReg").html(load)
        },
        success: function (response) {
            $("#for-ld2").hide()
            $("#for-ld").hide()

            if (response.data == null) {
                $("#bigDataReg").html(dataNull)
            } else {
                if (response.data.length == 12) {
                    getNext(urls, type, 2, brand)
                }
                looping(response.data, brand, type)
            }
        }
    });
}

function getNext(urls, type, pages, brand) {
    $.ajax({
        type: "GET",
        url: `https://api-otomatis-bukaolshop.my.id/api/produk?token=${bigApi}&category=${urls}&auth_token=${bigTkn}&page=${pages}`,
        dataType: "json",
        success: function (response) {
            if (response.data.length == 12) {
                var nx = parseInt(pages) + parseInt(1)
                getNext(urls, type, nx, brand)
            }
            looping(response.data, brand, type)
        }
    });
}


function looping(data, brand, target) {
    $.each(data, function (i, v) {
        $("." + target).append(`
<div class="mb-1x" data-bs-toggle="modal" data-bs-target="#Id2" onclick="detail('${v.title}', '${v.harga}', '${v.short_url}')">
    <div class="card-1 d-flex align-items-center alert alert-pro alert-primary bg-transparent">
            <div class="col-2 img-produk">
        <img src="https://ik.imagekit.io/bomojwm4u1/icon_pulsa_-_ppob/simvard.png?updatedAt=1684284615736" alt="simcard" border="0">
      </div>
            <div class="col-7">
                <div class="ui-produk">
                    <span class="text-primary fs-15">
                        <b>${v.title}</b>
                    </span>
                    <span class="text-gray">
                        ${brand}
                    </span>
                </div>
            </div>
            <div class="col-3 d-flex" style="justify-content: flex-end;">
                <span class="badge bg-primary badge-produk ">
                     ${v.harga}
                </span>
            </div>
    </div>
</div>
            
    `)
    });
}

function detail(namaproduk, harga, produk) {
    var numb = $("#nomoHp").val()
    $.ajax({
        type: "GET",
        url: `https://api-otomatis-bukaolshop.my.id/api/produk_detail?token=${bigApi}&produk=/produk/${produk}&auth_token=${bigTkn}`,
        dataType: "json",
        success: function (response) {
            $("#prod").html(namaproduk)
            $("#prc").html(harga)
            $("#numb").html(numb)
            $("#desc").html(response.data.description)
            $("#btnBli").attr("href", urlTko + "/produk/" + produk + "?catatan=" + numb)
        }
    });
}

function clr(content) {
    var num = $("#nomoHp").val()
    if (content == 'default') {
        content = 'Masukan Nomor Handphone Tujuan'
        $(".reg").remove()
        $(".tf").remove()
        $(".masa").remove()
        $("#bigDataReg").html(`
    <div id="for-ld" class="container text-center">
        <div class="loader"></div>
        <div class="for-load">
            <div class="col-3">
                <img src="https://i.ibb.co/XDQxr7q/bill.png" alt="" style="width: 150px;margin-bottom: 10px;">
            </div>
            <p >
                ${content}
            </p>
        </div>
    </div>
    `)
        $("#for-ld").show()
    } else {
        if (num == 08) {
            $(".reg").remove()
            $(".tf").remove()
            $(".masa").remove()
            $("#bigDataReg").html(`<div id="for-ld" class="container text-center">
            <span class="loader"></span>
            <a href="#" class="btn btn-sm btn-dim btn-primary">
                Tampilkan Produk
            </a>
    </div>
    `)
        } else {
            content = 'Masukan Nomor Handphone Tujuan'
        }
    }
} clr('default')

$(".dataPulsa").hide()
$(".reg").show()
function swtch(target, value, title, no) {
    var num = $("#nomoHp").val()
    if (num.length > 3) {
        detecNumber(target, no)
        $("#for-ld").hide()
        $(".reg").remove()
        $(".tf").remove()
        $(".masa").remove()
        $("#bigDataReg").append(`<div class="dataPulsa reg animate_animated animate_fadeIn"></div>`)
        $("#bigDataReg").append(`<div class="dataPulsa tf animate_animated animate_fadeIn"></div>`)
        $("#bigDataReg").append(`<div class="dataPulsa masa animate_animated animate_fadeIn"></div>`)

        $(".dataPulsa").hide()
        $("." + target).show()
        $(".btn-select").removeClass("btn-select-act")
        $("#" + target).addClass("btn-select-act")
    }
}

$(document).ready(function () {
    $("#search").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("section .card").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

function parseOperator(phone) {

    var str4 = "" + phone + ""

    var xPlus = str4.substring(0, 3)
    var xsisa = str4.substring(4, 15)

    if (xPlus == '+62') {
        phone = '08' + xsisa
        $("#nomoHp").val(phone)
    } else {
        phone
        $("#nomoHp").val(phone)
    }

    var OperatorPrefix = {
        BYU: ["0851"],
        INDOSAT: ["0814", "0815", "0816", "0855", "0856", "0857", "0858"],
        TELKOMSEL: ["0811", "0812", "0813", "0821", "0822", "0823", "0852", "0853"],
        TRI: ["0895", "0896", "0897", "0898", "0899"],
        SMART: ["0881", "0882", "0883", "0884", "0885", "0886", "0887", "0888", "0889"],
        XL: ["0817", "0818", "0819", "0859", "0877", "0878"],
        AXIS: ["0838", "0831", "0832", "0833"]
    }
    if (phone.length > 13) return {
        operator: null
    }
    for (var name in OperatorPrefix) {
        var _operator = OperatorPrefix[name];
        for (var index in _operator) {
            if (phone.startsWith(_operator[index])) return {
                operator: name,
                prefix: _operator[index],
                phone: phone
            }
        }
    }

    return {
        operator: null
    }
}
