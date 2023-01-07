$(document).ready(function () {
    let orgUnits = [];
    let services = [];
    let years = [];

    let tL1Ou;
    let tL1tp1 = [];
    let tL1tp2 = [];
    let tL1tp3 = [];
    let tL1tp04 = [];
    let tL1tp05 = [];
    let tL1tp06 = [];
    let tL1tp07 = [];
    let tL1tp08 = [];
    let tL1tp09 = [];
    let tL1tp10 = [];
    let tL1tp11 = [];
    let tL1tp12 = [];
    let tL1 = [];

    let tL1btmYr;
    let tL1btm01 = [];
    let tL1btm02 = [];
    let tL1btm03 = [];
    let tL1btm04 = [];
    let tL1btm05 = [];
    let tL1btm06 = [];
    let tL1btm07 = [];
    let tL1btm08 = [];
    let tL1btm09 = [];
    let tL1btm10 = [];
    let tL1btm11 = [];
    let tL1btm12 = [];

    let tL2Ou;
    let tL2tp01 = [];
    let tL2tp02 = [];
    let tL2tp03 = [];
    let tL2tp04 = [];
    let tL2tp05 = [];
    let tL2tp06 = [];
    let tL2tp07 = [];
    let tL2tp08 = [];
    let tL2tp09 = [];
    let tL2tp10 = [];
    let tL2tp11 = [];
    let tL2tp12 = [];
    let tL2 = [];

    let tL2btmYr;
    let tL2btm01 = [];
    let tL2btm02 = [];
    let tL2btm03 = [];
    let tL2btm04 = [];
    let tL2btm05 = [];
    let tL2btm06 = [];
    let tL2btm07 = [];
    let tL2btm08 = [];
    let tL2btm09 = [];
    let tL2btm10 = [];
    let tL2btm11 = [];
    let tL2btm12 = [];

    let tL3Ou;
    let tL3tp01 = [];
    let tL3tp02 = [];
    let tL3tp03 = [];
    let tL3tp04 = [];
    let tL3tp05 = [];
    let tL3tp06 = [];
    let tL3tp07 = [];
    let tL3tp08 = [];
    let tL3tp09 = [];
    let tL3tp10 = [];
    let tL3tp11 = [];
    let tL3tp12 = [];
    let tL3 = [];

    let tL3btmYr;
    let tL3btm01 = [];
    let tL3btm02 = [];
    let tL3btm03 = [];
    let tL3btm04 = [];
    let tL3btm05 = [];
    let tL3btm06 = [];
    let tL3btm07 = [];
    let tL3btm08 = [];
    let tL3btm09 = [];
    let tL3btm10 = [];
    let tL3btm11 = [];
    let tL3btm12 = [];

    let qry1, qry2, qry3

    $('.msbx-ou').each(function (e) {
        var self = $(this)
        var field = self.find('.msbx-ou_field')
        var fieldOption = field.find('option')
        var placeholder = field.attr('data-placeholder')

        field.hide().after(`<div class="msbx-ou_dropdown"></div>
                            <span class="msbx-ou_placeholder">` + placeholder + `</span>
                            <ul class="msbx-ou_list"></ul>
                            <span class="msbx-ou_arrow"></span>`)

        fieldOption.each(function (e) {
            $('.msbx-ou_list').append(`<li class="msbx-ou_option" data-value="` + $(this).val() + `">
                                                <a class="msbx-ou_text">`+ $(this).text() + `</a>
                                              </li>`)
        })

        var dropdown = self.find('.msbx-ou_dropdown')
        var list = self.find('.msbx-ou_list')
        var option = self.find('.msbx-ou_option')
        var optionText = self.find('.msbx-ou_text')

        dropdown.attr('data-multiple', 'true')
        list.css('top', dropdown.height() + 5)

        option.click(function (e) {
            var self = $(this)
            e.stopPropagation()
            self.addClass('-selected')
            field.find('option:contains(' + self.children().text() + ')').prop('selected', true)

            dropdown.append(function (e) {
                return $('<span class="msbx-ou_choice">' + self.children().text() + '<svg class="msbx-ou_deselect -iconX"><use href="#iconX"></use></svg></span>').click(function (e) {
                    var self = $(this)
                    e.stopPropagation()
                    self.remove()

                    list.find('.msbx-ou_option:contains(' + self.text() + ')').removeClass('-selected')
                    list.css('top', dropdown.height() + 5).find('.msbx-ou_noselections').remove()
                    field.find('option:contains(' + self.text() + ')').prop('selected', false)
                    selector(field, "ou")


                    if (dropdown.children(':visible').length === 0) {
                        dropdown.removeClass('-hasValue')

                    }
                })
            }).addClass('-hasValue')
            list.css('top', dropdown.height() + 5)
            if (!option.not('.-selected').length) {
                list.append('<h5 class="msbx-ou_noselections">No Selections</h5>')
            }

            selector(field, "ou")
        })

        dropdown.click(function (e) {
            e.stopPropagation()
            e.preventDefault()
            dropdown.toggleClass('-open')
            list.toggleClass('-open').scrollTop(0).css('top', dropdown.height() + 5)
        })

        $(document).on('click touch', function (e) {
            if (dropdown.hasClass('-open')) {
                dropdown.toggleClass('-open')
                list.removeClass('-open')
            }
        })
    })

    $('.msbx-srv').each(function (e) {
        var self = $(this)
        var field = self.find('.msbx-srv_field')
        var fieldOption = field.find('option')
        var placeholder = field.attr('data-placeholder')

        field.hide().after(`<div class="msbx-srv_dropdown"></div>
                            <span class="msbx-srv_placeholder">` + placeholder + `</span>
                            <ul class="msbx-srv_list"></ul>
                            <span class="msbx-srv_arrow"></span>`)

        fieldOption.each(function (e) {
            $('.msbx-srv_list').append(`<li class="msbx-srv_option" data-value="` + $(this).val() + `">
                                                <a class="msbx-srv_text">`+ $(this).text() + `</a>
                                              </li>`)
        })

        var dropdown = self.find('.msbx-srv_dropdown')
        var list = self.find('.msbx-srv_list')
        var option = self.find('.msbx-srv_option')
        var optionText = self.find('.msbx-srv_text')

        dropdown.attr('data-multiple', 'true')
        list.css('top', dropdown.height() + 5)

        option.click(function (e) {
            var self = $(this)
            e.stopPropagation()
            self.addClass('-selected')
            field.find('option:contains(' + self.children().text() + ')').prop('selected', true)
            dropdown.append(function (e) {
                return $('<span class="msbx-srv_choice">' + self.children().text() + '<svg class="msbx-srv_deselect -iconX"><use href="#iconX"></use></svg></span>').click(function (e) {
                    var self = $(this)
                    e.stopPropagation()
                    self.remove()
                    list.find('.msbx-srv_option:contains(' + self.text() + ')').removeClass('-selected')
                    list.css('top', dropdown.height() + 5).find('.msbx-srv_noselections').remove()
                    field.find('option:contains(' + self.text() + ')').prop('selected', false)
                    selector(field, "srv")

                    if (dropdown.children(':visible').length === 0) {
                        dropdown.removeClass('-hasValue')
                    }
                })
            }).addClass('-hasValue')
            list.css('top', dropdown.height() + 5)
            if (!option.not('.-selected').length) {
                list.append('<h5 class="msbx-srv_noselections">No Selections</h5>')
            }

            selector(field, "srv")
        })

        dropdown.click(function (e) {
            e.stopPropagation()
            e.preventDefault()
            dropdown.toggleClass('-open')
            list.toggleClass('-open').scrollTop(0).css('top', dropdown.height() + 5)
        })

        $(document).on('click touch', function (e) {
            if (dropdown.hasClass('-open')) {
                dropdown.toggleClass('-open')
                list.removeClass('-open')
            }
        })
    })

    $('.msbx-yrs').each(function (e) {
        var self = $(this)
        var field = self.find('.msbx-yrs_field')
        var fieldOption = field.find('option')
        var placeholder = field.attr('data-placeholder')

        field.hide().after(`<div class="msbx-yrs_dropdown"></div>
                            <span class="msbx-yrs_placeholder">` + placeholder + `</span>
                            <ul class="msbx-yrs_list"></ul>
                            <span class="msbx-yrs_arrow"></span>`)

        fieldOption.each(function (e) {
            $('.msbx-yrs_list').append(`<li class="msbx-yrs_option" data-value="` + $(this).val() + `">
                                                <a class="msbx-yrs_text">`+ $(this).text() + `</a>
                                              </li>`)
        })

        var dropdown = self.find('.msbx-yrs_dropdown')
        var list = self.find('.msbx-yrs_list')
        var option = self.find('.msbx-yrs_option')
        var optionText = self.find('.msbx-yrs_text')

        dropdown.attr('data-multiple', 'true')
        list.css('top', dropdown.height() + 5)

        option.click(function (e) {
            var self = $(this)
            e.stopPropagation()
            self.addClass('-selected')
            field.find('option:contains(' + self.children().text() + ')').prop('selected', true)
            dropdown.append(function (e) {
                return $('<span class="msbx-yrs_choice">' + self.children().text() + '<svg class="msbx-yrs_deselect -iconX"><use href="#iconX"></use></svg></span>').click(function (e) {
                    var self = $(this)
                    e.stopPropagation()
                    self.remove()
                    list.find('.msbx-yrs_option:contains(' + self.text() + ')').removeClass('-selected')
                    list.css('top', dropdown.height() + 5).find('.msbx-yrs_noselections').remove()
                    field.find('option:contains(' + self.text() + ')').prop('selected', false)
                    selector(field, "yrs")

                    if (dropdown.children(':visible').length === 0) {
                        dropdown.removeClass('-hasValue')
                    }
                })
            }).addClass('-hasValue')
            list.css('top', dropdown.height() + 5)
            if (!option.not('.-selected').length) {
                list.append('<h5 class="msbx-yrs_noselections">No Selections</h5>')
            }

            selector(field, "yrs")
        })

        dropdown.click(function (e) {
            e.stopPropagation()
            e.preventDefault()
            dropdown.toggleClass('-open')
            list.toggleClass('-open').scrollTop(0).css('top', dropdown.height() + 5)
        })

        $(document).on('click touch', function (e) {
            if (dropdown.hasClass('-open')) {
                dropdown.toggleClass('-open')
                list.removeClass('-open')
            }
        })
    })

    function readJson() {
        $.ajax({
            method: "GET",
            url: "data.json",
            success: function (response) {

                // Selectores
                orgUnits.push(response.Ous)
                services.push(response.services)
                years.push(response.years)

                //timeline1
                tL1Ou = response.time_lines1[0].t_line[0].ou;

                tL1tp1.push(response.time_lines1[0].tp1.length)
                tL1tp2.push(response.time_lines1[0].tp2.length)
                tL1tp3.push(response.time_lines1[0].tp3.length)
                tL1tp04.push(response.time_lines1[0].tp4.length)
                tL1tp05.push(response.time_lines1[0].tp5.length)
                tL1tp06.push(response.time_lines1[0].tp6.length)
                tL1tp07.push(response.time_lines1[0].tp7.length)
                tL1tp08.push(response.time_lines1[0].tp8.length)
                tL1tp09.push(response.time_lines1[0].tp9.length)
                tL1tp10.push(response.time_lines1[0].tp10.length)
                tL1tp11.push(response.time_lines1[0].tp11.length)
                tL1tp12.push(response.time_lines1[0].tp12.length)

                tL1.push(response.time_lines1[0].t_line)

                tL1btm01.push(response.time_lines1[0].btm1.length)
                tL1btm02.push(response.time_lines1[0].btm2.length)
                tL1btm03.push(response.time_lines1[0].btm3.length)
                tL1btm04.push(response.time_lines1[0].btm4.length)
                tL1btm05.push(response.time_lines1[0].btm5.length)
                tL1btm06.push(response.time_lines1[0].btm6.length)
                tL1btm07.push(response.time_lines1[0].btm7.length)
                tL1btm08.push(response.time_lines1[0].btm8.length)
                tL1btm09.push(response.time_lines1[0].btm9.length)
                tL1btm10.push(response.time_lines1[0].btm10.length)
                tL1btm11.push(response.time_lines1[0].btm11.length)
                tL1btm12.push(response.time_lines1[0].btm12.length)

                //timeline2
                tL2Ou = response.time_lines2[0].t_line[0].ou;

                tL2tp01.push(response.time_lines2[0].tp1.length)
                tL2tp02.push(response.time_lines2[0].tp2.length)
                tL2tp03.push(response.time_lines2[0].tp3.length)
                tL2tp04.push(response.time_lines2[0].tp4.length)
                tL2tp05.push(response.time_lines2[0].tp5.length)
                tL2tp06.push(response.time_lines2[0].tp6.length)
                tL2tp07.push(response.time_lines2[0].tp7.length)
                tL2tp08.push(response.time_lines2[0].tp8.length)
                tL2tp09.push(response.time_lines2[0].tp9.length)
                tL2tp10.push(response.time_lines2[0].tp10.length)
                tL2tp11.push(response.time_lines2[0].tp11.length)
                tL2tp12.push(response.time_lines2[0].tp12.length)

                tL2.push(response.time_lines2[0].t_line)

                tL2btm01.push(response.time_lines2[0].btm1.length)
                tL2btm02.push(response.time_lines2[0].btm2.length)
                tL2btm03.push(response.time_lines2[0].btm3.length)
                tL2btm04.push(response.time_lines2[0].btm4.length)
                tL2btm05.push(response.time_lines2[0].btm5.length)
                tL2btm06.push(response.time_lines2[0].btm6.length)
                tL2btm07.push(response.time_lines2[0].btm7.length)
                tL2btm08.push(response.time_lines2[0].btm8.length)
                tL2btm09.push(response.time_lines2[0].btm9.length)
                tL2btm10.push(response.time_lines2[0].btm10.length)
                tL2btm11.push(response.time_lines2[0].btm11.length)
                tL2btm12.push(response.time_lines2[0].btm12.length)

                //timeline3
                tL3Ou = response.time_lines3[0].t_line[0].ou;

                tL3tp01.push(response.time_lines3[0].tp1.length)
                tL3tp02.push(response.time_lines3[0].tp2.length)
                tL3tp03.push(response.time_lines3[0].tp3.length)
                tL3tp04.push(response.time_lines3[0].tp4.length)
                tL3tp05.push(response.time_lines3[0].tp5.length)
                tL3tp06.push(response.time_lines3[0].tp6.length)
                tL3tp07.push(response.time_lines3[0].tp7.length)
                tL3tp08.push(response.time_lines3[0].tp8.length)
                tL3tp09.push(response.time_lines3[0].tp9.length)
                tL3tp10.push(response.time_lines3[0].tp10.length)
                tL3tp11.push(response.time_lines3[0].tp11.length)
                tL3tp12.push(response.time_lines3[0].tp12.length)

                tL3.push(response.time_lines3[0].t_line)

                tL3btm01.push(response.time_lines3[0].btm1.length)
                tL3btm02.push(response.time_lines3[0].btm2.length)
                tL3btm03.push(response.time_lines3[0].btm3.length)
                tL3btm04.push(response.time_lines3[0].btm4.length)
                tL3btm05.push(response.time_lines3[0].btm5.length)
                tL3btm06.push(response.time_lines3[0].btm6.length)
                tL3btm07.push(response.time_lines3[0].btm7.length)
                tL3btm08.push(response.time_lines3[0].btm8.length)
                tL3btm09.push(response.time_lines3[0].btm9.length)
                tL3btm10.push(response.time_lines3[0].btm10.length)
                tL3btm11.push(response.time_lines3[0].btm11.length)
                tL3btm12.push(response.time_lines3[0].btm12.length)

            }
        })
    };

    readJson()

    function selector(field, typ) { // seleccion de Selectores
        let array = field.val()

        // Iterar sobre cada elemento del array y aplicar una función a cada uno de ellos
        let result = $.map(array, function (value, index) {
            return value;
        })

        switch (typ) {
            case "ou":
                SetOrgUnits(result, typ)
                break;
            case "srv":
                SetServices(result, typ)
                break;
            case "yrs":
                SetYears(result, typ)
                break;
            default:
                break;
        }

    };

    function SetOrgUnits(st, typ) {
        var nameOu = ""
        for (var i = 0; i < st.length; i++) {

            if (i >= 1) {
                nameOu = nameOu + ", " + st[i];
            } else {
                nameOu = nameOu + st[i];
            }
        }
        $("#top_ou").text(nameOu)
        setTimeline(nameOu, typ)
    };

    function SetServices(st, typ) {
        var nameSrv = ""
        for (var i = 0; i < st.length; i++) {
            if (i >= 1) {
                nameSrv = nameSrv + ", " + st[i];
            } else {
                nameSrv = nameSrv + st[i];
            }
        }
        $("#top_srv").text(nameSrv)
        setTimeline(nameSrv, typ)
    };

    function SetYears(st, typ) {
        var firstYear = ""
        var lastTwo = ""
        var years = ""
        for (var i = 0; i < st.length; i++) {
            if (i >= 1) {
                lastTwo = lastTwo + "/" + st[i].slice(-2)
            } else {
                firstYear = firstYear + st[i];
            }
        }
        years = firstYear + lastTwo;
        $("#top_yrs").text(years)
        setTimeline(years, typ)
    };


    $('.btn-lgnd-inf').on('click', function () {
        var lgnd_text = $(this).parent().parent().find(".checkbox").text()
        var lgnd = $(this).parent().parent().find("input").attr('id')

        $('<div class="scrim">').appendTo('body')

        $('<div class="dlg">').appendTo('.scrim')
        $('<div class="dlg_bar">').appendTo('.dlg')
        $('<div class="lbl">').appendTo('.dlg_bar')

        $('<div class="dlg_cta">').appendTo('.dlg')
        $('<div class="btn-sys-close">').appendTo('.dlg_cta')

        $('<div class="dlg_cnt">').appendTo('.dlg')
        switch (lgnd) {
            case "lgnd0":
                $('.dlg').addClass("d_" + lgnd)
                $('.dlg_bar').addClass("tt_" + lgnd)
                $('.dlg_cta').addClass("i_" + lgnd)
                break;
            case "lgnd1":
                $('.dlg').addClass("d_" + lgnd)
                $('.dlg_bar').addClass("tt_" + lgnd)
                $('.dlg_cta').addClass("i_" + lgnd)
                break;
            case "lgnd2":
                $('.dlg').addClass("d_" + lgnd)
                $('.dlg_bar').addClass("tt_" + lgnd)
                $('.dlg_cta').addClass("i_" + lgnd)
                break;
            case "lgnd3":
                $('.dlg').addClass("d_" + lgnd)
                $('.dlg_bar').addClass("tt_" + lgnd)
                $('.dlg_cta').addClass("i_" + lgnd)
                break;
            case "lgnd4":
                $('.dlg').addClass("d_" + lgnd)
                $('.dlg_bar').addClass("tt_" + lgnd)
                $('.dlg_cta').addClass("i_" + lgnd)
                break;
            case "lgnd5":
                $('.dlg').addClass("d_" + lgnd)
                $('.dlg_bar').addClass("tt_" + lgnd)
                $('.dlg_cta').addClass("i_" + lgnd)
                break;
            case "lgnd6":
                $('.dlg').addClass("d_" + lgnd)
                $('.dlg_bar').addClass("tt_" + lgnd)
                $('.dlg_cta').addClass("i_" + lgnd)
                break;
            case "lgnd7":
                $('.dlg').addClass("d_" + lgnd)
                $('.dlg_bar').addClass("tt_" + lgnd)
                $('.dlg_cta').addClass("i_" + lgnd)
                break;
            case "lgnd8":
                $('.dlg').addClass("d_" + lgnd)
                $('.dlg_bar').addClass("tt_" + lgnd)
                $('.dlg_cta').addClass("i_" + lgnd)
                break;
        }

        $('.dlg_bar').children().html(lgnd_text)

        $('.dlg_cnt').html("This is")

    })

    $(document).on('click', '.btn-sys-close', function () {
        $('div.scrim').remove()
    })

    $(document).on('click', '.scrim', function () {
        $('div.scrim').remove()
    })

    function setTimeline(stns, typ) {
        let ou, srv, yrs;

        if (typ === "ou") {
            ou = stns;
        } else if (typ === "srv") {
            srv = stns;
        } else if (typ === "yrs") {
            yrs = stns;
        }

        if (typeof ou === 'undefined') {
        } else {
            qry1 = ou
        }

        if (typeof srv === 'undefined') {
        } else {
            qry2 = srv
        }

        if (typeof yrs === 'undefined') {
        } else {
            qry3 = yrs
        }

        if (typeof qry1 === 'string' && qry1 != "") {
            if (typeof qry3 === 'string' && qry3 != "") {
                createTimeline()
                // log
                //$('.timeline').css("background-color", "yellow")
            } else {
                $('.timeline').remove()
            }
        } else {
            console.log("qry1-qry3: " + typeof qry1);
            $('.timeline').remove()
        }

    }

    function createTimeline() {

        $('.timeline').remove()
        $('<div class="timeline">').appendTo('.timelines')
        $('<div class="tp_yr">').appendTo('.timeline')

        for (itp = 1; itp <= 12; itp++) {
            var tp = '<div class="tp' + itp + '">'
            $(tp).appendTo('.timeline')
        }

        $('<div class="t_line">').appendTo('.timeline')
        $('<div class="btm_yr">').appendTo('.timeline')

        for (ibtm = 1; ibtm <= 12; ibtm++) {
            var btm = '<div class="btm' + ibtm + '">'
            $(btm).appendTo('.timeline')
        }

        $('<div class="yr_start">').appendTo('.t_line')

        // Top
        const tlTp1 = `
        <div class="panel_top">
        <div class="contributions">
            <div class="contrs1"></div>
        </div>
        <div class="line"></div>
        </div>
        `;
        const tlTp2 = `
        <div class="panel_top">
        <div class="contributions">
            <div class="contrs2"></div>
        </div>
        <div class="line"></div>
        </div>
        `;
        const tlTp3 = `
        <div class="panel_top">
        <div class="contributions">
            <div class="contrs3"></div>
        </div>
        <div class="line"></div>
        </div>
        `;
        const tlTp4 = `
        <div class="panel_top">
        <div class="contributions">
            <div class="contrs4"></div>
        </div>
        <div class="line"></div>
        </div>
        `;
        const tlTp5 = `
        <div class="panel_top">
        <div class="contributions">
            <div class="contrs5"></div>
        </div>
        <div class="line"></div>
        </div>
        `;
        const tlTp6 = `
        <div class="panel_top">
        <div class="contributions">
            <div class="contrs6"></div>
        </div>
        <div class="line"></div>
        </div>
        `;
        const tlTp7 = `
        <div class="panel_top">
        <div class="contributions">
            <div class="contrs7"></div>
        </div>
        <div class="line"></div>
        </div>
        `;
        const tlTp8 = `
        <div class="panel_top">
        <div class="contributions">
            <div class="contrs8"></div>
        </div>
        <div class="line"></div>
        </div>
        `;
        const tlTp9 = `
        <div class="panel_top">
        <div class="contributions">
            <div class="contrs9"></div>
        </div>
        <div class="line"></div>
        </div>
        `;
        const tlTp10 = `
        <div class="panel_top">
        <div class="contributions">
            <div class="contrs10"></div>
        </div>
        <div class="line"></div>
        </div>
        `;
        const tlTp11 = `
        <div class="panel_top">
        <div class="contributions">
            <div class="contrs11"></div>
        </div>
        <div class="line"></div>
        </div>
        `;
        const tlTp12 = `
        <div class="panel_top">
        <div class="contributions">
            <div class="contrs12"></div>
        </div>
        <div class="line"></div>
        </div>
        `;

        const contrs = `
        <div class="card_contr">
            <div class="title">Service</div>
            <div class="cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem
            ipsum, cond (MAX 100 caracters).</div>
        </div>
        `;

        // Top

        if (tL1tp1 >= 1) {
            $('.tp1').append(tlTp1);
            for (i = 1; i <= tL1tp1; i++) {
                $('.contrs1').append(contrs);
            }
        }
        if (tL1tp2 >= 1) {
            $('.tp2').append(tlTp2);
            for (i = 1; i <= tL1tp2; i++) {
                $('.contrs2').append(contrs);
            }
        }
        if (tL1tp3 >= 1) {
            $('.tp3').append(tlTp3);
            for (i = 1; i <= tL1tp3; i++) {
                $('.contrs3').append(contrs);
            }
        }
        if (tL1tp04 >= 1) {
            $('.tp4').append(tlTp4);
            for (i = 1; i <= tL1tp04; i++) {
                $('.contrs4').append(contrs);
            }
        }
        if (tL1tp05 >= 1) {
            $('.tp5').append(tlTp5);
            for (i = 1; i <= tL1tp05; i++) {
                $('.contrs5').append(contrs);
            }
        }
        if (tL1tp06 >= 1) {
            $('.tp6').append(tlTp6);
            for (i = 1; i <= tL1tp06; i++) {
                $('.contrs6').append(contrs);
            }
        }
        if (tL1tp07 >= 1) {
            $('.tp7').append(tlTp7);
            for (i = 1; i <= tL1tp07; i++) {
                $('.contrs7').append(contrs);
            }
        }
        if (tL1tp08 >= 1) {
            $('.tp8').append(tlTp8);
            for (i = 1; i <= tL1tp08; i++) {
                $('.contrs8').append(contrs);
            }
        }
        if (tL1tp09 >= 1) {
            $('.tp9').append(tlTp9);
            for (i = 1; i <= tL1tp09; i++) {
                $('.contrs9').append(contrs);
            }
        }
        if (tL1tp10 >= 1) {
            $('.tp10').append(tlTp10);
            for (i = 1; i <= tL1tp10; i++) {
                $('.contrs10').append(contrs);
            }
        }
        if (tL1tp11 >= 1) {
            $('.tp11').append(tlTp11);
            for (i = 1; i <= tL1tp11; i++) {
                $('.contrs11').append(contrs);
            }
        }
        if (tL1tp12 >= 1) {
            $('.tp12').append(tlTp12);
            for (i = 1; i <= tL1tp12; i++) {
                $('.contrs12').append(contrs);
            }
        }

        // Line

        const tlJan = `
                        <div class="tl_jan">
                          <div class="cntr_top"></div>
                          <div class="cnt">
                          <div class="lbl">jan</div>
                          </div>
                          <div class="cntr_bttm"></div>
                        </div>
        `;
        const tlFeb = `
                        <div class="tl_feb">
                          <div class="cntr_top"></div>
                          <div class="cnt">
                          <div class="lbl">feb</div>
                          </div>
                          <div class="cntr_bttm"></div>
                        </div>
        `;
        const tlMar = `
                      <div class="tl_mar">
                        <div class="cntr_top"></div>
                        <div class="cnt">
                        <div class="lbl">mar</div>
                        </div>
                        <div class="cntr_bttm"></div>
                      </div>
        `;
        const tlApr = `
                    <div class="tl_apr">
                      <div class="cntr_top"></div>
                      <div class="cnt">
                      <div class="lbl">apr</div></div>
                      <div class="cntr_bttm"></div>
                    </div>
        `;
        const tlMay = `
                  <div class="tl_may">
                    <div class="cntr_top"></div>
                    <div class="cnt">
                    <div class="lbl">may</div></div>
                    <div class="cntr_bttm"></div>
                  </div>
        `;
        const tlJun = `
                  <div class="tl_jun">
                    <div class="cntr_top"></div>
                    <div class="cnt">
                    <div class="lbl">jun</div>
                    </div>
                    <div class="cntr_bttm"></div>
                  </div>
        `;
        const tlJul = `
                  <div class="tl_jul">
                    <div class="cntr_top"></div>
                    <div class="cnt">
                    <div class="lbl">jul</div>
                    </div>
                    <div class="cntr_bttm"></div>
                  </div>
        `;
        const tlAug = `
                  <div class="tl_aug">
                    <div class="cntr_top"></div>
                    <div class="cnt">
                    <div class="lbl">aug</div>
                    </div>
                    <div class="cntr_bttm"></div>
                  </div>
        `;
        const tlSep = `
                  <div class="tl_sep">
                    <div class="cntr_top"></div>
                    <div class="cnt">
                    <div class="lbl">sep</div>
                    </div>
                    <div class="cntr_bttm"></div>
                  </div>
        `;
        const tlOct = `
                  <div class="tl_oct">
                    <div class="cntr_top"></div>
                    <div class="cnt">
                    <div class="lbl">oct</div>
                    </div>
                    <div class="cntr_bttm"></div>
                  </div>
        `;
        const tlNov = `
                        <div class="tl_nov">
                            <div class="cntr_top"></div>
                            <div class="cnt">
                            <div class="lbl">nov</div>
                            </div>
                            <div class="cntr_bttm"></div>
                        </div>
        `;
        const tlDic = `
                        <div class="tl_dic">
                            <div class="cntr_top"></div>
                            <div class="cnt">
                            <div class="lbl">dic</div>
                            </div>
                            <div class="cntr_bttm"></div>
                        </div>
        `;

        $('.t_line').append(tlJan, tlFeb, tlMar, tlApr, tlMay, tlJun, tlJul, tlAug, tlSep, tlOct, tlNov, tlDic);
        console.log(tL1tp1, tL1tp2, tL1tp3)

        // Bottom

        const tlBttm1 = `
        <div class="pnl_bttm1">
        <div class="impacts">
            <div class="cards1">
            </div>
        </div>
        <div class="line"></div>
        </div>
        `;
        const tlBttm2 = `
        <div class="pnl_bttm2">
        <div class="impacts">
            <div class="cards2">
            </div>
        </div>
        <div class="line"></div>
        </div>
        `;
        const tlBttm3 = `
        <div class="pnl_bttm3">
        <div class="impacts">
            <div class="cards3">
            </div>
        </div>
        <div class="line"></div>
        </div>
        `;
        const tlBttm4 = `
        <div class="pnl_bttm4">
        <div class="impacts">
            <div class="cards4">
            </div>
        </div>
        <div class="line"></div>
        </div>
        `;
        const tlBttm5 = `
        <div class="pnl_bttm5">
        <div class="impacts">
            <div class="cards5">
            </div>
        </div>
        <div class="line"></div>
        </div>
        `;
        const tlBttm6 = `
        <div class="pnl_bttm6">
        <div class="impacts">
            <div class="cards6">
            </div>
        </div>
        <div class="line"></div>
        </div>
        `;
        const tlBttm7 = `
        <div class="pnl_bttm7">
        <div class="impacts">
            <div class="cards7">
            </div>
        </div>
        <div class="line"></div>
        </div>
        `;
        const tlBttm8 = `
        <div class="pnl_bttm8">
        <div class="impacts">
            <div class="cards8">
            </div>
        </div>
        <div class="line"></div>
        </div>
        `;
        const tlBttm9 = `
        <div class="pnl_bttm9">
        <div class="impacts">
            <div class="cards9">
            </div>
        </div>
        <div class="line"></div>
        </div>
        `;
        const tlBttm10 = `
        <div class="pnl_bttm10">
        <div class="impacts">
            <div class="cards10">
            </div>
        </div>
        <div class="line"></div>
        </div>
        `;
        const tlBttm11 = `
        <div class="pnl_bttm11">
        <div class="impacts">
            <div class="cards11">
            </div>
        </div>
        <div class="line"></div>
        </div>
        `;
        const tlBttm12 = `
        <div class="pnl_bttm12">
        <div class="impacts">
            <div class="cards12">
            </div>
        </div>
        <div class="line"></div>
        </div>
        `;

        const tlcard1 = `
        <div class="card_lgnd1">
            <div class="title">Service</div>
            <div class="subtitle">Advocacy Stage</div>
            <div class="cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem
            ipsum, cond (MAX 100 caracters).</div>
        </div>
        `;
        const tlcard2 = `
        <div class="card_lgnd2">
            <div class="title">Service</div>
            <div class="subtitle">Regression Introduced</div>
            <div class="cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem
            ipsum, cond (MAX 100 caracters).</div>
        </div>
        `;
        const tlcard3 = `
        <div class="card_lgnd3">
            <div class="title">Service</div>
            <div class="subtitle">Loss</div>
            <div class="cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem
            ipsum, cond (MAX 100 caracters).</div>
        </div>
        `;
        const tlcard4 = `
        <div class="card_lgnd4">
            <div class="title">Service</div>
            <div class="subtitle">Defended</div>
            <div class="cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem
            ipsum, cond (MAX 100 caracters).</div>
        </div>
        `;
        const tlcard5 = `
        <div class="card_lgnd5">
            <div class="title">Service</div>
            <div class="subtitle">Reform Introduced</div>
            <div class="cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem
            ipsum, cond (MAX 100 caracters).</div>
        </div>
        `;
        const tlcard6 = `
        <div class="card_lgnd6">
            <div class="title">Service</div>
            <div class="subtitle">Advanced</div>
            <div class="cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem
            ipsum, cond (MAX 100 caracters).</div>
        </div>
        `;
        const tlcard7 = `
        <div class="card_lgnd7">
            <div class="title">Service</div>
            <div class="subtitle">Approved</div>
            <div class="cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem
            ipsum, cond (MAX 100 caracters).</div>
        </div>
        `;
        const tlcard8 = `
        <div class="card_lgnd8">
            <div class="title">Service</div>
            <div class="subtitle">Implemented</div>
            <div class="cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem
            ipsum, cond (MAX 100 caracters).</div>
        </div>
        `;

        var random_lgnd = [tlcard1, tlcard2, tlcard3, tlcard4, tlcard5, tlcard6, tlcard7, tlcard8];

        if (tL1btm01 >= 1) {
            $('.btm1').append(tlBttm1);
            for (i = 1; i <= tL1btm01; i++) {
                var randomBtm1 = random_lgnd[Math.floor(Math.random() * random_lgnd.length)];
                $('.cards1').append(randomBtm1);
            }
        }
        if (tL1btm02 >= 1) {
            $('.btm2').append(tlBttm2);
            for (i = 1; i <= tL1btm02; i++) {
                var randomBtm2 = random_lgnd[Math.floor(Math.random() * random_lgnd.length)];
                $('.cards2').append(randomBtm2);
            }
        }
        if (tL1btm03 >= 1) {
            $('.btm3').append(tlBttm3);
            for (i = 1; i <= tL1btm03; i++) {
                var randomBtm3 = random_lgnd[Math.floor(Math.random() * random_lgnd.length)];
                $('.cards3').append(randomBtm3);
            }
        }
        if (tL1btm04 >= 1) {
            $('.btm4').append(tlBttm4);
            for (i = 1; i <= tL1btm04; i++) {
                var randomBtm4 = random_lgnd[Math.floor(Math.random() * random_lgnd.length)];
                $('.cards4').append(randomBtm4);
            }
        }
        if (tL1btm05 >= 1) {
            $('.btm5').append(tlBttm5);
            for (i = 1; i <= tL1btm05; i++) {
                var randomBtm5 = random_lgnd[Math.floor(Math.random() * random_lgnd.length)];
                $('.cards5').append(randomBtm5);
            }
        }
        if (tL1btm06 >= 1) {
            $('.btm6').append(tlBttm6);
            for (i = 1; i <= tL1btm06; i++) {
                var randomBtm6 = random_lgnd[Math.floor(Math.random() * random_lgnd.length)];
                $('.cards6').append(randomBtm6);
            }
        }
        if (tL1btm07 >= 1) {
            $('.btm7').append(tlBttm7);
            for (i = 1; i <= tL1btm07; i++) {
                var randomBtm7 = random_lgnd[Math.floor(Math.random() * random_lgnd.length)];
                $('.cards7').append(randomBtm7);
            }
        }
        if (tL1btm08 >= 1) {
            $('.btm8').append(tlBttm8);
            for (i = 1; i <= tL1btm08; i++) {
                var randomBtm8 = random_lgnd[Math.floor(Math.random() * random_lgnd.length)];
                $('.cards8').append(randomBtm8);
            }
        }
        if (tL1btm09 >= 1) {
            $('.btm9').append(tlBttm9);
            for (i = 1; i <= tL1btm09; i++) {
                var randomBtm9 = random_lgnd[Math.floor(Math.random() * random_lgnd.length)];
                $('.cards9').append(randomBtm9);
            }
        }
        if (tL1btm10 >= 1) {
            $('.btm10').append(tlBttm10);
            for (i = 1; i <= tL1btm10; i++) {
                var randomBtm10 = random_lgnd[Math.floor(Math.random() * random_lgnd.length)];
                $('.cards10').append(randomBtm10);
            }
        }
        if (tL1btm11 >= 1) {
            $('.btm11').append(tlBttm11);
            for (i = 1; i <= tL1btm11; i++) {
                var randomBtm11 = random_lgnd[Math.floor(Math.random() * random_lgnd.length)];
                $('.cards11').append(randomBtm10);
            }
        }
        if (tL1btm12 >= 1) {
            $('.btm12').append(tlBttm12);
            for (i = 1; i <= tL1btm12; i++) {
                var randomBtm12 = random_lgnd[Math.floor(Math.random() * random_lgnd.length)];
                $('.cards12').append(randomBtm12);
            }
        }
    }

    // Legends cta

    $('#lgnd0').click(function () {
        $(".card_contr").toggle(this.checked)
        $(".card_contr").parent().parent().parent().toggle(this.show)
    });

    $('#lgnd1').click(function () {
        $(".card_lgnd1").toggle(this.checked)
        //$(".card_lgnd1").parent().parent().parent().toggle(this.show);
        pnlLgnds(1);
    });

    $('#lgnd2').click(function () {
        $(".card_lgnd2").toggle(this.checked)
        pnlLgnds(2);
    });

    $('#lgnd3').click(function () {
        $(".card_lgnd3").toggle(this.checked)
        pnlLgnds(3);
    });

    $('#lgnd4').click(function () {
        $(".card_lgnd4").toggle(this.checked)
        pnlLgnds(4);
    });

    $('#lgnd5').click(function () {
        $(".card_lgnd5").toggle(this.checked)
        pnlLgnds(5);
    });

    $('#lgnd6').click(function () {
        $(".card_lgnd6").toggle(this.checked)
        pnlLgnds(6);
    });

    $('#lgnd7').click(function () {
        $(".card_lgnd7").toggle(this.checked)
        pnlLgnds(7);
    });

    $('#lgnd8').click(function () {
        $(".card_lgnd8").toggle(this.checked)
        pnlLgnds(8);
    });

    function pnlLgnds(lgnd){
        var panel = '$(".pnl_bttm'
/*
        for(i=1; i<=12;i++){
            if(tL1btm01)


        }*/
    }
})