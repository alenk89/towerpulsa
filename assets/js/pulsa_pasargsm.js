var baseUrl = 'https://api.nielz.my.id/api/v2/fitur/bo?';

function getData(_0x5deax3) {
    cekz = '200';
    $('#dataAPI')['html'](loads);
    if (_0x5deax3 == 'nosalah') {
        $('#img-operator')['hide']();
        $('#box-operator')['hide']();
        $('#box-pilihan')['hide']();
        $('#dataAPI')['html'](noSalah);
        $('#img-operator')['removeAttr']('height')
    } else {
        $['ajax']({
            type: 'POST',
            url: baseUrl,
            data: {
                aktivasi: aktivasi,
                param: 'produk',
                url: `${''}${''}${''}${''}${''}${''}${''}${urlToko}${''}${''}${''}${'/kategori/'}${''}${''}${''}${_0x5deax3}${''}${''}${''}${''}${''}${''}${''}`
            },
            dataType: 'JSON',
            success: function(_0x5deax4) {
                if (_0x5deax4['data'] == null) {
                    $('#box-pilihan')['css']('pointer-events', '');
                    $('.img-contact')['css']('pointer-events', '');
                    $('#dataAPI')['html'](produkNone)
                } else {
                    $('#box-pilihan')['css']('pointer-events', '');
                    $('.img-contact')['css']('pointer-events', '');
                    $('#dataAPI')['html'](`${''}${''}${''}${'<div id="dataProduk" class="animate__animated animate__fadeIn row"></div>'}${''}${''}${''}`);
                    loopProduk(_0x5deax4['data'])
                }
            }
        })
    }
}

function showDetail(_0x5deax3, _0x5deax6, _0x5deax7) {
    var _0x5deax8 = $('#nomoTel')['val']();
    if (_0x5deax8['length'] < 10) {
        _0x5deax8 = '<span class=\'text-danger\'>Nomor minimal 10 angka</span>';
        $('#btls')['removeClass']('d-flex');
        $('#btnBli')['hide']()
    } else {
        if (_0x5deax8['length'] > 15) {
            _0x5deax8 = '<span class=\'text-danger\'>Nomor maksimal 15 angka</span>';
            $('#btls')['removeClass']('d-flex');
            $('#btnBli')['hide']()
        } else {
            $('#btls')['addClass']('d-flex');
            $('#btnBli')['show']()
        }
    };
    $['ajax']({
        type: 'POST',
        url: baseUrl,
        data: {
            aktivasi: aktivasi,
            param: 'detail_produk',
            url: _0x5deax7
        },
        dataType: 'JSON',
        beforeSend: function() {
            $('#prod')['html']('Loading...');
            $('#numb')['html']('Loading...');
            $('#desc')['html']('Loading...');
            $('#prc')['html']('Loading...');
            $('#btnBli')['removeAttr']('href')
        },
        success: function(_0x5deax4) {
            $('#prod')['html'](_0x5deax3);
            $('#numb')['html'](_0x5deax8);
            $('#desc')['html'](_0x5deax4['data']);
            $('#prc')['html'](_0x5deax6);
            tombolBeli(_0x5deax7, _0x5deax8)
        }
    })
}
var nohpx = [];
var nohpy = [];
var cekz = '404';
$('#nomoTel')['on']('input', function() {
    var _0x5deax4 = $('#nomoTel')['val']();
    if (_0x5deax4['length'] <= 3) {
        clrAll();
        nohpx[0] = '.';
        nohpy[0] = '.';
        cekz = '404'
    } else {
        if (_0x5deax4['length'] == 4 || _0x5deax4['length'] == 5) {
            cekz = '404'
        } else {
            if (cekz == '404' && _0x5deax4['length'] >= 6) {
                cekInputan()
            }
        }
    }
});
$('#nomoTel')['on']('change', function() {
    var _0x5deax4 = $('#nomoTel')['val']();
    if (_0x5deax4['length'] <= 3) {
        clrAll();
        nohpx[0] = '.';
        nohpy[0] = '.';
        cekz = '404'
    } else {
        if (_0x5deax4['length'] >= 6) {
            cekInputanKe2();
            cekz = '200'
        }
    }
});

function cekInputan() {
    var _0x5deax4 = $('#nomoTel')['val']();
    var _0x5deax3 = _0x5deax4['replace'](/[^\d]/g, '');
    var _0x5deax6 = cekStr(_0x5deax3)['substr'](0, 4);
    var _0x5deax7 = cekStr(_0x5deax3)['substr'](0, 6);
    var _0x5deax8 = cekStr(_0x5deax3);
    $('#nomoTel')['val'](_0x5deax8);
    if (_0x5deax6['length'] == 4 && nohpx[0] != _0x5deax6 || _0x5deax7['length'] == 6 && nohpy[0] != _0x5deax7) {
        nohpx[0] = _0x5deax6;
        nohpy[0] = _0x5deax7;
        $('#box-pilihan')['css']('pointer-events', '');
        $('.img-contact')['css']('pointer-events', '')
    } else {};
    cekNomorUlang(_0x5deax6, _0x5deax7)
}

function cekInputanKe2() {
    var _0x5deax4 = $('#nomoTel')['val']();
    var _0x5deax3 = _0x5deax4['replace'](/[^\d]/g, '');
    var _0x5deax6 = cekStr(_0x5deax3)['substr'](0, 4);
    var _0x5deax7 = cekStr(_0x5deax3)['substr'](0, 6);
    var _0x5deax8 = cekStr(_0x5deax3);
    $('#nomoTel')['val'](_0x5deax8);
    if (_0x5deax6['length'] == 4 && nohpx[0] != _0x5deax6 || _0x5deax7['length'] == 6 && nohpy[0] != _0x5deax7) {
        nohpx[0] = _0x5deax6;
        nohpy[0] = _0x5deax7;
        cekNomorUlang(nohpx[0], nohpy[0]);
        $('#box-pilihan')['css']('pointer-events', 'none');
        $('.img-contact')['css']('pointer-events', 'none')
    } else {}
}

function cekStr(_0x5deax4) {
    let _0x5deaxf;
    if (_0x5deax4['substr'](0, 2) == '62') {
        _0x5deaxf = '0' + _0x5deax4['substr'](2, 20);
        return _0x5deaxf
    } else {
        if (_0x5deax4['substr'](0, 3) == '+62') {
            _0x5deaxf = '0' + _0x5deax4['substr'](3, 20);
            return _0x5deaxf
        } else {
            return _0x5deax4
        }
    }
}

function cekNomorUlang(_0x5deax11, _0x5deax12) {
    let _0x5deax13, _0x5deax14;
    $('#dataAPI')['html'](loads);
    if (_0x5deax12 == '085154' || _0x5deax12 == '085155' || _0x5deax12 == '085156' || _0x5deax12 == '085157' || _0x5deax12 == '085158' || _0x5deax12 == '085159' || _0x5deax12 == '085160' || _0x5deax12 == '085161' || _0x5deax12 == '085162' || _0x5deax12 == '085163' || _0x5deax12 == '085171' || _0x5deax12 == '085172' || _0x5deax12 == '085173' || _0x5deax12 == '085174' || _0x5deax12 == '085175' || _0x5deax12 == '085176' || _0x5deax12 == '085177' || _0x5deax12 == '085178' || _0x5deax12 == '085179' || _0x5deax12 == '085180') {
        loadOperator('By.U');
        _0x5deax13 = urlKategori[0]['By.U']['reguler'];
        _0x5deax14 = urlKategori[0]['By.U']['transfer']
    } else {
        if (_0x5deax11 == '0811' || _0x5deax11 == '0812' || _0x5deax11 == '0813' || _0x5deax11 == '0821' || _0x5deax11 == '0822' || _0x5deax11 == '0852' || _0x5deax11 == '0853' || _0x5deax11 == '0823' || _0x5deax11 == '0851') {
            loadOperator('Telkomsel');
            _0x5deax13 = urlKategori[0]['Telkomsel']['reguler'];
            _0x5deax14 = urlKategori[0]['Telkomsel']['transfer']
        } else {
            if (_0x5deax11 == '0814' || _0x5deax11 == '0815' || _0x5deax11 == '0816' || _0x5deax11 == '0855' || _0x5deax11 == '0856' || _0x5deax11 == '0857' || _0x5deax11 == '0858') {
                loadOperator('Indosat');
                _0x5deax13 = urlKategori[0]['Indosat']['reguler'];
                _0x5deax14 = urlKategori[0]['Indosat']['transfer']
            } else {
                if (_0x5deax11 == '0818' || _0x5deax11 == '0817' || _0x5deax11 == '0819' || _0x5deax11 == '0859' || _0x5deax11 == '0877' || _0x5deax11 == '0878') {
                    loadOperator('XL Axiata');
                    _0x5deax13 = urlKategori[0]['XL Axiata']['reguler'];
                    _0x5deax14 = urlKategori[0]['XL Axiata']['transfer']
                } else {
                    if (_0x5deax11 == '0838' || _0x5deax11 == '0831' || _0x5deax11 == '0832' || _0x5deax11 == '0833') {
                        loadOperator('Axis');
                        _0x5deax13 = urlKategori[0]['Axis']['reguler'];
                        _0x5deax14 = urlKategori[0]['Axis']['transfer']
                    } else {
                        if (_0x5deax11 == '0895' || _0x5deax11 == '0896' || _0x5deax11 == '0897' || _0x5deax11 == '0898' || _0x5deax11 == '0899') {
                            loadOperator('Three');
                            _0x5deax13 = urlKategori[0]['Three']['reguler'];
                            _0x5deax14 = urlKategori[0]['Three']['transfer']
                        } else {
                            if (_0x5deax11 == '0881' || _0x5deax11 == '0882' || _0x5deax11 == '0883' || _0x5deax11 == '0884' || _0x5deax11 == '0885' || _0x5deax11 == '0886' || _0x5deax11 == '0887' || _0x5deax11 == '0888' || _0x5deax11 == '0889') {
                                loadOperator('Smartfren');
                                _0x5deax13 = urlKategori[0]['Smartfren']['reguler'];
                                _0x5deax14 = urlKategori[0]['Smartfren']['transfer']
                            } else {
                                _0x5deax13 = 'nosalah';
                                _0x5deax14 = 'nosalah'
                            }
                        }
                    }
                }
            }
        }
    };
    $('#reg')['off']('click');
    $('#tf')['off']('click');
    $('#reg')['on']('click', function() {
        getData(_0x5deax13);
        $('.btn-pulsa')['removeClass']('bg-pulsa-active');
        $('#reg')['addClass']('bg-pulsa-active')
    });
    $('#tf')['on']('click', function() {
        getData(_0x5deax14);
        $('.btn-pulsa')['removeClass']('bg-pulsa-active');
        $('#tf')['addClass']('bg-pulsa-active')
    });
    if ($('#reg')['hasClass']('bg-pulsa-active')) {
        getData(_0x5deax13)
    } else {
        if ($('#tf')['hasClass']('bg-pulsa-active')) {
            getData(_0x5deax14)
        }
    }
}
