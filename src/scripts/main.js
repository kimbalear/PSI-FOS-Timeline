$(document).ready(function () {
    let orgUnits = [];
    let services = [];
    let years = [];

    let tL1Ou;
    let tL1tp1 = [];
    let tL1tp2 = [];
    let tL1tp3 = [];
    let tL1tp4 = [];
    let tL1tp5 = [];
    let tL1tp6 = [];
    let tL1tp7 = [];
    let tL1tp8 = [];
    let tL1tp9 = [];
    let tL1tp10 = [];
    let tL1tp11 = [];
    let tL1tp12 = [];
    let tL1 = [];

    let tL1btmYr;
    let tL1btm1 = [];
    let tL1btm2 = [];
    let tL1btm3 = [];
    let tL1btm4 = [];
    let tL1btm5 = [];
    let tL1btm6 = [];
    let tL1btm7 = [];
    let tL1btm8 = [];
    let tL1btm9 = [];
    let tL1btm10 = [];
    let tL1btm11 = [];
    let tL1btm12 = [];

    let tL2Ou;
    let tL2tp1 = [];
    let tL2tp2 = [];
    let tL2tp3 = [];
    let tL2tp4 = [];
    let tL2tp5 = [];
    let tL2tp6 = [];
    let tL2tp7 = [];
    let tL2tp8 = [];
    let tL2tp9 = [];
    let tL2tp10 = [];
    let tL2tp11 = [];
    let tL2tp12 = [];
    let tL2 = [];

    let tL2btmYr;
    let tL2btm1 = [];
    let tL2btm2 = [];
    let tL2btm3 = [];
    let tL2btm4 = [];
    let tL2btm5 = [];
    let tL2btm6 = [];
    let tL2btm7 = [];
    let tL2btm8 = [];
    let tL2btm9 = [];
    let tL2btm10 = [];
    let tL2btm11 = [];
    let tL2btm12 = [];

    let tL3Ou;
    let tL3tp1 = [];
    let tL3tp2 = [];
    let tL3tp3 = [];
    let tL3tp4 = [];
    let tL3tp5 = [];
    let tL3tp6 = [];
    let tL3tp7 = [];
    let tL3tp8 = [];
    let tL3tp9 = [];
    let tL3tp10 = [];
    let tL3tp11 = [];
    let tL3tp12 = [];
    let tL3 = [];

    let tL3btmYr;
    let tL3btm1 = [];
    let tL3btm2 = [];
    let tL3btm3 = [];
    let tL3btm4 = [];
    let tL3btm5 = [];
    let tL3btm6 = [];
    let tL3btm7 = [];
    let tL3btm8 = [];
    let tL3btm9 = [];
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
                tL1tp4.push(response.time_lines1[0].tp4.length)
                tL1tp5.push(response.time_lines1[0].tp5.length)
                tL1tp6.push(response.time_lines1[0].tp6.length)
                tL1tp7.push(response.time_lines1[0].tp7.length)
                tL1tp8.push(response.time_lines1[0].tp8.length)
                tL1tp9.push(response.time_lines1[0].tp9.length)
                tL1tp10.push(response.time_lines1[0].tp10.length)
                tL1tp11.push(response.time_lines1[0].tp11.length)
                tL1tp12.push(response.time_lines1[0].tp12.length)

                tL1.push(response.time_lines1[0].t_line)

                tL1btm1.push(response.time_lines1[0].btm1.length)
                tL1btm2.push(response.time_lines1[0].btm2.length)
                tL1btm3.push(response.time_lines1[0].btm3.length)
                tL1btm4.push(response.time_lines1[0].btm4.length)
                tL1btm5.push(response.time_lines1[0].btm5.length)
                tL1btm6.push(response.time_lines1[0].btm6.length)
                tL1btm7.push(response.time_lines1[0].btm7.length)
                tL1btm8.push(response.time_lines1[0].btm8.length)
                tL1btm9.push(response.time_lines1[0].btm9.length)
                tL1btm10.push(response.time_lines1[0].btm10.length)
                tL1btm11.push(response.time_lines1[0].btm11.length)
                tL1btm12.push(response.time_lines1[0].btm12.length)

                //timeline2
                tL2Ou = response.time_lines2[0].t_line[0].ou;

                tL2tp1.push(response.time_lines2[0].tp1.length)
                tL2tp2.push(response.time_lines2[0].tp2.length)
                tL2tp3.push(response.time_lines2[0].tp3.length)
                tL2tp4.push(response.time_lines2[0].tp4.length)
                tL2tp5.push(response.time_lines2[0].tp5.length)
                tL2tp6.push(response.time_lines2[0].tp6.length)
                tL2tp7.push(response.time_lines2[0].tp7.length)
                tL2tp8.push(response.time_lines2[0].tp8.length)
                tL2tp9.push(response.time_lines2[0].tp9.length)
                tL2tp10.push(response.time_lines2[0].tp10.length)
                tL2tp11.push(response.time_lines2[0].tp11.length)
                tL2tp12.push(response.time_lines2[0].tp12.length)

                tL2.push(response.time_lines2[0].t_line)

                tL2btm1.push(response.time_lines2[0].btm1.length)
                tL2btm2.push(response.time_lines2[0].btm2.length)
                tL2btm3.push(response.time_lines2[0].btm3.length)
                tL2btm4.push(response.time_lines2[0].btm4.length)
                tL2btm5.push(response.time_lines2[0].btm5.length)
                tL2btm6.push(response.time_lines2[0].btm6.length)
                tL2btm7.push(response.time_lines2[0].btm7.length)
                tL2btm8.push(response.time_lines2[0].btm8.length)
                tL2btm9.push(response.time_lines2[0].btm9.length)
                tL2btm10.push(response.time_lines2[0].btm10.length)
                tL2btm11.push(response.time_lines2[0].btm11.length)
                tL2btm12.push(response.time_lines2[0].btm12.length)

                //timeline3
                tL3Ou = response.time_lines3[0].t_line[0].ou;

                tL3tp1.push(response.time_lines3[0].tp1.length)
                tL3tp2.push(response.time_lines3[0].tp2.length)
                tL3tp3.push(response.time_lines3[0].tp3.length)
                tL3tp4.push(response.time_lines3[0].tp4.length)
                tL3tp5.push(response.time_lines3[0].tp5.length)
                tL3tp6.push(response.time_lines3[0].tp6.length)
                tL3tp7.push(response.time_lines3[0].tp7.length)
                tL3tp8.push(response.time_lines3[0].tp8.length)
                tL3tp9.push(response.time_lines3[0].tp9.length)
                tL3tp10.push(response.time_lines3[0].tp10.length)
                tL3tp11.push(response.time_lines3[0].tp11.length)
                tL3tp12.push(response.time_lines3[0].tp12.length)

                tL3.push(response.time_lines3[0].t_line)

                tL3btm1.push(response.time_lines3[0].btm1.length)
                tL3btm2.push(response.time_lines3[0].btm2.length)
                tL3btm3.push(response.time_lines3[0].btm3.length)
                tL3btm4.push(response.time_lines3[0].btm4.length)
                tL3btm5.push(response.time_lines3[0].btm5.length)
                tL3btm6.push(response.time_lines3[0].btm6.length)
                tL3btm7.push(response.time_lines3[0].btm7.length)
                tL3btm8.push(response.time_lines3[0].btm8.length)
                tL3btm9.push(response.time_lines3[0].btm9.length)
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
    /*
        $(document).on('click', '.scrim', function () {
            $('div.scrim').remove()
        })
    */
    var allCheckboxes = $('[type=checkbox]');

    allCheckboxes.prop('disabled', true)

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
                $(".btn_print").show()
                allCheckboxes.prop('disabled', false)
                timeline(qry3)
            } else {
                allCheckboxes.prop('checked', true)
                allCheckboxes.prop('disabled', true)
                $('.timeline').remove()
                $(".btn_print").hide()
            }
        } else {
            allCheckboxes.prop('checked', true)
            allCheckboxes.prop('disabled', true)
            $('.timeline').remove()
            $(".btn_print").hide()
        }

    }

    function timeline(year) {
        $('.timeline').remove()
        $('<div class="lbl">').appendTo('.yr_start')
        $('.lbl').html(year)

        $('<div class="timeline">').appendTo('.timelines')
        $('<div class="tp_yr">').appendTo('.timeline')
        $('<div class="ce_btn">').appendTo('.timeline')
        $('<div class="area_exp_colaps">').appendTo('.ce_btn')

        var ctabtn = `
            <div class="btn ignore">Hide</div>
        `;
        $('.area_exp_colaps').append(ctabtn)


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

        if (year.length > 4) {
            var dateArray = year.split(",");
            for (x = 0; x <= year.length; x++) {
                $('.t_line').find('.child').eq(dateArray[x])// Falta crear las otras lineas  de años
            }

            console.log("dateArray: " + dateArray);
        } else {
            $('<div class="lbl">').appendTo('.yr_start')
            $('.lbl').html(year)
        }

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
            <div class="title">Title</div>
            <div class="cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem ipsum, cond (MAX 100 caracters).</div>
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
        if (tL1tp4 >= 1) {
            $('.tp4').append(tlTp4);
            for (i = 1; i <= tL1tp4; i++) {
                $('.contrs4').append(contrs);
            }
        }
        if (tL1tp5 >= 1) {
            $('.tp5').append(tlTp5);
            for (i = 1; i <= tL1tp5; i++) {
                $('.contrs5').append(contrs);
            }
        }
        if (tL1tp6 >= 1) {
            $('.tp6').append(tlTp6);
            for (i = 1; i <= tL1tp6; i++) {
                $('.contrs6').append(contrs);
            }
        }
        if (tL1tp7 >= 1) {
            $('.tp7').append(tlTp7);
            for (i = 1; i <= tL1tp7; i++) {
                $('.contrs7').append(contrs);
            }
        }
        if (tL1tp8 >= 1) {
            $('.tp8').append(tlTp8);
            for (i = 1; i <= tL1tp8; i++) {
                $('.contrs8').append(contrs);
            }
        }
        if (tL1tp9 >= 1) {
            $('.tp9').append(tlTp9);
            for (i = 1; i <= tL1tp9; i++) {
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
                          <div class="cntr_top1"></div>
                          <div class="cnt">
                          <div class="lbl">jan</div>
                          </div>
                          <div class="cntr_bttm1"></div>
                        </div>
        `;
        const tlFeb = `
                        <div class="tl_feb">
                          <div class="cntr_top2"></div>
                          <div class="cnt">
                          <div class="lbl">feb</div>
                          </div>
                          <div class="cntr_bttm2"></div>
                        </div>
        `;
        const tlMar = `
                      <div class="tl_mar">
                        <div class="cntr_top3"></div>
                        <div class="cnt">
                        <div class="lbl">mar</div>
                        </div>
                        <div class="cntr_bttm3"></div>
                      </div>
        `;
        const tlApr = `
                    <div class="tl_apr">
                      <div class="cntr_top4"></div>
                      <div class="cnt">
                      <div class="lbl">apr</div></div>
                      <div class="cntr_bttm4"></div>
                    </div>
        `;
        const tlMay = `
                  <div class="tl_may">
                    <div class="cntr_top5"></div>
                    <div class="cnt">
                    <div class="lbl">may</div></div>
                    <div class="cntr_bttm5"></div>
                  </div>
        `;
        const tlJun = `
                  <div class="tl_jun">
                    <div class="cntr_top6"></div>
                    <div class="cnt">
                    <div class="lbl">jun</div>
                    </div>
                    <div class="cntr_bttm6"></div>
                  </div>
        `;
        const tlJul = `
                  <div class="tl_jul">
                    <div class="cntr_top7"></div>
                    <div class="cnt">
                    <div class="lbl">jul</div>
                    </div>
                    <div class="cntr_bttm7"></div>
                  </div>
        `;
        const tlAug = `
                  <div class="tl_aug">
                    <div class="cntr_top8"></div>
                    <div class="cnt">
                    <div class="lbl">aug</div>
                    </div>
                    <div class="cntr_bttm8"></div>
                  </div>
        `;
        const tlSep = `
                  <div class="tl_sep">
                    <div class="cntr_top9"></div>
                    <div class="cnt">
                    <div class="lbl">sep</div>
                    </div>
                    <div class="cntr_bttm9"></div>
                  </div>
        `;
        const tlOct = `
                  <div class="tl_oct">
                    <div class="cntr_top10"></div>
                    <div class="cnt">
                    <div class="lbl">oct</div>
                    </div>
                    <div class="cntr_bttm10"></div>
                  </div>
        `;
        const tlNov = `
                        <div class="tl_nov">
                            <div class="cntr_top11"></div>
                            <div class="cnt">
                            <div class="lbl">nov</div>
                            </div>
                            <div class="cntr_bttm11"></div>
                        </div>
        `;
        const tlDic = `
                        <div class="tl_dic">
                            <div class="cntr_top12"></div>
                            <div class="cnt">
                            <div class="lbl">dic</div>
                            </div>
                            <div class="cntr_bttm12"></div>
                        </div>
        `;

        $('.t_line').append(tlJan, tlFeb, tlMar, tlApr, tlMay, tlJun, tlJul, tlAug, tlSep, tlOct, tlNov, tlDic);

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
            <div class="title">Need</div>
            <div class="subtitle">Regression Introduced</div>
            <div class="cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem ipsum, cond (MAX 100 caracters).</div>
        </div>
        `;
        const tlcard2 = `
        <div class="card_lgnd2">
            <div class="title">Need</div>
            <div class="subtitle">Loss</div>
            <div class="cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem ipsum, cond (MAX 100 caracters).</div>
        </div>
        `;
        const tlcard3 = `
        <div class="card_lgnd3">
            <div class="title">Need</div>
            <div class="subtitle">Defended</div>
            <div class="cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem ipsum, cond (MAX 100 caracters).</div>
        </div>
        `;
        const tlcard4 = `
        <div class="card_lgnd4">
            <div class="title">Need</div>
            <div class="subtitle">Reform Introduced</div>
            <div class="cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem ipsum, cond (MAX 100 caracters).</div>
        </div>
        `;
        const tlcard5 = `
        <div class="card_lgnd5">
            <div class="title">Need</div>
            <div class="subtitle">Advanced</div>
            <div class="cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem ipsum, cond (MAX 100 caracters).</div>
        </div>
        `;
        const tlcard6 = `
        <div class="card_lgnd6">
            <div class="title">Need</div>
            <div class="subtitle">Approved</div>
            <div class="cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem ipsum, cond (MAX 100 caracters).</div>
        </div>
        `;
        const tlcard7 = `
        <div class="card_lgnd7">
            <div class="title">Need</div>
            <div class="subtitle">Implemented</div>
            <div class="cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem ipsum, cond (MAX 100 caracters).</div>
        </div>
        `;

        var random_lgnd = [tlcard1, tlcard2, tlcard3, tlcard4, tlcard5, tlcard6, tlcard7];

        const dtImpacts = `
        <div class="lbl">Impact</div>
    `;

        if (tL1tp1 >= 1) {
            $('<div class="dots_contr1">').appendTo('.cntr_top1')
            var lblc = '<div class="lbl">Contributions</div>'
            $('.dots_contr1').append(lblc)

            var numContr = $(".contrs1").children().length;

            dotlgnd = '<div class="dot1">' + numContr + '</div>'
            $('.dots_contr1').append(dotlgnd)
        }

        if (tL1tp2 >= 1) {
            $('<div class="dots_contr2">').appendTo('.cntr_top2')
            var lblc = '<div class="lbl">Contributions</div>'
            $('.dots_contr2').append(lblc)

            var numContr = $(".contrs2").children().length;

            dotlgnd = '<div class="dot2">' + numContr + '</div>'
            $('.dots_contr2').append(dotlgnd)
        }

        if (tL1tp3 >= 1) {
            $('<div class="dots_contr3">').appendTo('.cntr_top3')
            var lblc = '<div class="lbl">Contributions</div>'
            $('.dots_contr3').append(lblc)

            var numContr = $(".contrs3").children().length;

            dotlgnd = '<div class="dot3">' + numContr + '</div>'
            $('.dots_contr3').append(dotlgnd)
        }

        if (tL1tp4 >= 1) {
            $('<div class="dots_contr4">').appendTo('.cntr_top4')
            var lblc = '<div class="lbl">Contributions</div>'
            $('.dots_contr4').append(lblc)

            var numContr = $(".contrs4").children().length;

            dotlgnd = '<div class="dot4">' + numContr + '</div>'
            $('.dots_contr4').append(dotlgnd)
        }

        if (tL1tp5 >= 1) {
            $('<div class="dots_contr5">').appendTo('.cntr_top5')
            var lblc = '<div class="lbl">Contributions</div>'
            $('.dots_contr5').append(lblc)

            var numContr = $(".contrs5").children().length;

            dotlgnd = '<div class="dot5">' + numContr + '</div>'
            $('.dots_contr5').append(dotlgnd)
        }

        if (tL1tp6 >= 1) {
            $('<div class="dots_contr6">').appendTo('.cntr_top6')
            var lblc = '<div class="lbl">Contributions</div>'
            $('.dots_contr6').append(lblc)

            var numContr = $(".contrs6").children().length;

            dotlgnd = '<div class="dot6">' + numContr + '</div>'
            $('.dots_contr6').append(dotlgnd)
        }

        if (tL1tp7 >= 1) {
            $('<div class="dots_contr7">').appendTo('.cntr_top7')
            var lblc = '<div class="lbl">Contributions</div>'
            $('.dots_contr7').append(lblc)

            var numContr = $(".contrs7").children().length;

            dotlgnd = '<div class="dot7">' + numContr + '</div>'
            $('.dots_contr7').append(dotlgnd)
        }

        if (tL1tp8 >= 1) {
            $('<div class="dots_contr8">').appendTo('.cntr_top8')
            var lblc = '<div class="lbl">Contributions</div>'
            $('.dots_contr8').append(lblc)

            var numContr = $(".contrs8").children().length;

            dotlgnd = '<div class="dot8">' + numContr + '</div>'
            $('.dots_contr8').append(dotlgnd)
        }

        if (tL1tp9 >= 1) {
            $('<div class="dots_contr9">').appendTo('.cntr_top9')
            var lblc = '<div class="lbl">Contributions</div>'
            $('.dots_contr9').append(lblc)

            var numContr = $(".contrs9").children().length;

            dotlgnd = '<div class="dot9">' + numContr + '</div>'
            $('.dots_contr9').append(dotlgnd)
        }

        if (tL1tp10 >= 1) {
            $('<div class="dots_contr10">').appendTo('.cntr_top10')
            var lblc = '<div class="lbl">Contributions</div>'
            $('.dots_contr10').append(lblc)

            var numContr = $(".contrs10").children().length;

            dotlgnd = '<div class="dot10">' + numContr + '</div>'
            $('.dots_contr10').append(dotlgnd)
        }

        if (tL1tp11 >= 1) {
            $('<div class="dots_contr11">').appendTo('.cntr_top11')
            var lblc = '<div class="lbl">Contributions</div>'
            $('.dots_contr11').append(lblc)

            var numContr = $(".contrs11").children().length;

            dotlgnd = '<div class="dot11">' + numContr + '</div>'
            $('.dots_contr11').append(dotlgnd)
        }

        if (tL1tp12 >= 1) {
            $('<div class="dots_contr12">').appendTo('.cntr_top12')
            var lblc = '<div class="lbl">Contributions</div>'
            $('.dots_contr12').append(lblc)

            var numContr = $(".contrs12").children().length;

            dotlgnd = '<div class="dot12">' + numContr + '</div>'
            $('.dots_contr12').append(dotlgnd)
        }
        //
        if (tL1btm1 >= 1) {
            var activ_jan = '<div class="activ_' + tL1btm1 + '">'
            $(activ_jan).appendTo('.cntr_bttm1')
            $(dtImpacts).appendTo('.cntr_bttm1 > .activ_' + tL1btm1)
            $('.btm1').append(tlBttm1)

            for (i = 1; i <= tL1btm1; i++) {
                var randomBtm1 = random_lgnd[Math.floor(Math.random() * random_lgnd.length)]
                $('.cards1').append(randomBtm1)
            }

            var lg1 = $('.cards1').find('.card_lgnd1').length;
            var lg2 = $('.cards1').find('.card_lgnd2').length;
            var lg3 = $('.cards1').find('.card_lgnd3').length;
            var lg4 = $('.cards1').find('.card_lgnd4').length;
            var lg5 = $('.cards1').find('.card_lgnd5').length;
            var lg6 = $('.cards1').find('.card_lgnd6').length;
            var lg7 = $('.cards1').find('.card_lgnd7').length;
            var lg8 = $('.cards1').find('.card_lgnd8').length;
            var dotlgnd = ''

            if (lg1 != 0) {
                dotlgnd = '<div class="dot lgnd1_p">' + lg1 + '</div>'
                var active = $('.activ_' + tL1btm1)
                $('.cntr_bttm1').children(active).append(dotlgnd)
            }

            if (lg2 != 0) {
                dotlgnd = '<div class="dot lgnd2_p">' + lg2 + '</div>'
                var active = $('.activ_' + tL1btm1)
                $('.cntr_bttm1').children(active).append(dotlgnd)
            }

            if (lg3 != 0) {
                dotlgnd = '<div class="dot lgnd3_p">' + lg3 + '</div>'
                var active = $('.activ_' + tL1btm1)
                $('.cntr_bttm1').children(active).append(dotlgnd)
            }

            if (lg4 != 0) {
                dotlgnd = '<div class="dot lgnd4_p">' + lg4 + '</div>'
                var active = $('.activ_' + tL1btm1)
                $('.cntr_bttm1').children(active).append(dotlgnd)
            }

            if (lg5 != 0) {
                dotlgnd = '<div class="dot lgnd5_p">' + lg5 + '</div>'
                var active = $('.activ_' + tL1btm1)
                $('.cntr_bttm1').children(active).append(dotlgnd)
            }
            if (lg6 != 0) {
                dotlgnd = '<div class="dot lgnd6_p">' + lg6 + '</div>'
                var active = $('.activ_' + tL1btm1)
                $('.cntr_bttm1').children(active).append(dotlgnd)
            }
            if (lg7 != 0) {
                dotlgnd = '<div class="dot lgnd7_p">' + lg7 + '</div>'
                var active = $('.activ_' + tL1btm1)
                $('.cntr_bttm1').children(active).append(dotlgnd)
            }
            if (lg8 != 0) {
                dotlgnd = '<div class="dot lgnd8_p">' + lg8 + '</div>'
                var active = $('.activ_' + tL1btm1)
                $('.cntr_bttm1').children(active).append(dotlgnd)
            }
        }

        if (tL1btm2 >= 1) {
            var activ_feb = '<div class="activ_' + tL1btm2 + '">'
            $(activ_feb).appendTo('.cntr_bttm2')
            $(dtImpacts).appendTo('.cntr_bttm2 > .activ_' + tL1btm2)
            $('.btm2').append(tlBttm2)

            for (i = 1; i <= tL1btm2; i++) {
                var randomBtm2 = random_lgnd[Math.floor(Math.random() * random_lgnd.length)]
                $('.cards2').append(randomBtm2)
            }
            var lg1 = $('.cards2').find('.card_lgnd1').length;
            var lg2 = $('.cards2').find('.card_lgnd2').length;
            var lg3 = $('.cards2').find('.card_lgnd3').length;
            var lg4 = $('.cards2').find('.card_lgnd4').length;
            var lg5 = $('.cards2').find('.card_lgnd5').length;
            var lg6 = $('.cards2').find('.card_lgnd6').length;
            var lg7 = $('.cards2').find('.card_lgnd7').length;
            var lg8 = $('.cards2').find('.card_lgnd8').length;
            var dotlgnd = ''

            if (lg1 != 0) {
                dotlgnd = '<div class="dot lgnd1_p">' + lg1 + '</div>'
                var active = $('.activ_' + tL1btm2)
                $('.cntr_bttm2').children(active).append(dotlgnd)
            }

            if (lg2 != 0) {
                dotlgnd = '<div class="dot lgnd2_p">' + lg2 + '</div>'
                var active = $('.activ_' + tL1btm2)
                $('.cntr_bttm2').children(active).append(dotlgnd)
            }

            if (lg3 != 0) {
                dotlgnd = '<div class="dot lgnd3_p">' + lg3 + '</div>'
                var active = $('.activ_' + tL1btm2)
                $('.cntr_bttm2').children(active).append(dotlgnd)
            }

            if (lg4 != 0) {
                dotlgnd = '<div class="dot lgnd4_p">' + lg4 + '</div>'
                var active = $('.activ_' + tL1btm2)
                $('.cntr_bttm2').children(active).append(dotlgnd)
            }

            if (lg5 != 0) {
                dotlgnd = '<div class="dot lgnd5_p">' + lg5 + '</div>'
                var active = $('.activ_' + tL1btm2)
                $('.cntr_bttm2').children(active).append(dotlgnd)
            }
            if (lg6 != 0) {
                dotlgnd = '<div class="dot lgnd6_p">' + lg6 + '</div>'
                var active = $('.activ_' + tL1btm2)
                $('.cntr_bttm2').children(active).append(dotlgnd)
            }
            if (lg7 != 0) {
                dotlgnd = '<div class="dot lgnd7_p">' + lg7 + '</div>'
                var active = $('.activ_' + tL1btm2)
                $('.cntr_bttm2').children(active).append(dotlgnd)
            }
            if (lg8 != 0) {
                dotlgnd = '<div class="dot lgnd8_p">' + lg8 + '</div>'
                var active = $('.activ_' + tL1btm2)
                $('.cntr_bttm2').children(active).append(dotlgnd)
            }

        }

        if (tL1btm3 >= 1) {
            var activ_mar = '<div class="activ_' + tL1btm3 + '">'
            $(activ_mar).appendTo('.cntr_bttm3')
            $(dtImpacts).appendTo('.cntr_bttm3 > .activ_' + tL1btm3)
            $('.btm3').append(tlBttm3)

            for (i = 1; i <= tL1btm3; i++) {
                var randomBtm3 = random_lgnd[Math.floor(Math.random() * random_lgnd.length)]
                $('.cards3').append(randomBtm3)
            }
            var lg1 = $('.cards3').find('.card_lgnd1').length;
            var lg2 = $('.cards3').find('.card_lgnd2').length;
            var lg3 = $('.cards3').find('.card_lgnd3').length;
            var lg4 = $('.cards3').find('.card_lgnd4').length;
            var lg5 = $('.cards3').find('.card_lgnd5').length;
            var lg6 = $('.cards3').find('.card_lgnd6').length;
            var lg7 = $('.cards3').find('.card_lgnd7').length;
            var lg8 = $('.cards3').find('.card_lgnd8').length;
            var dotlgnd = ''

            if (lg1 != 0) {
                dotlgnd = '<div class="dot lgnd1_p">' + lg1 + '</div>'
                var active = $('.activ_' + tL1btm3)
                $('.cntr_bttm3').children(active).append(dotlgnd)
            }

            if (lg2 != 0) {
                dotlgnd = '<div class="dot lgnd2_p">' + lg2 + '</div>'
                var active = $('.activ_' + tL1btm3)
                $('.cntr_bttm3').children(active).append(dotlgnd)
            }

            if (lg3 != 0) {
                dotlgnd = '<div class="dot lgnd3_p">' + lg3 + '</div>'
                var active = $('.activ_' + tL1btm3)
                $('.cntr_bttm3').children(active).append(dotlgnd)
            }

            if (lg4 != 0) {
                dotlgnd = '<div class="dot lgnd4_p">' + lg4 + '</div>'
                var active = $('.activ_' + tL1btm3)
                $('.cntr_bttm3').children(active).append(dotlgnd)
            }

            if (lg5 != 0) {
                dotlgnd = '<div class="dot lgnd5_p">' + lg5 + '</div>'
                var active = $('.activ_' + tL1btm3)
                $('.cntr_bttm3').children(active).append(dotlgnd)
            }
            if (lg6 != 0) {
                dotlgnd = '<div class="dot lgnd6_p">' + lg6 + '</div>'
                var active = $('.activ_' + tL1btm3)
                $('.cntr_bttm3').children(active).append(dotlgnd)
            }
            if (lg7 != 0) {
                dotlgnd = '<div class="dot lgnd7_p">' + lg7 + '</div>'
                var active = $('.activ_' + tL1btm3)
                $('.cntr_bttm3').children(active).append(dotlgnd)
            }
            if (lg8 != 0) {
                dotlgnd = '<div class="dot lgnd8_p">' + lg8 + '</div>'
                var active = $('.activ_' + tL1btm3)
                $('.cntr_bttm3').children(active).append(dotlgnd)
            }
        }

        if (tL1btm4 >= 1) {
            var activ_apr = '<div class="activ_' + tL1btm4 + '">'
            $(activ_apr).appendTo('.cntr_bttm4')
            $(dtImpacts).appendTo('.cntr_bttm4 > .activ_' + tL1btm4)
            $('.btm4').append(tlBttm4)

            for (i = 1; i <= tL1btm4; i++) {
                var randomBtm4 = random_lgnd[Math.floor(Math.random() * random_lgnd.length)]
                $('.cards4').append(randomBtm4)
            }
            var lg1 = $('.cards4').find('.card_lgnd1').length;
            var lg2 = $('.cards4').find('.card_lgnd2').length;
            var lg3 = $('.cards4').find('.card_lgnd3').length;
            var lg4 = $('.cards4').find('.card_lgnd4').length;
            var lg5 = $('.cards4').find('.card_lgnd5').length;
            var lg6 = $('.cards4').find('.card_lgnd6').length;
            var lg7 = $('.cards4').find('.card_lgnd7').length;
            var lg8 = $('.cards4').find('.card_lgnd8').length;
            var dotlgnd = ''

            if (lg1 != 0) {
                dotlgnd = '<div class="dot lgnd1_p">' + lg1 + '</div>'
                var active = $('.activ_' + tL1btm4)
                $('.cntr_bttm4').children(active).append(dotlgnd)
            }

            if (lg2 != 0) {
                dotlgnd = '<div class="dot lgnd2_p">' + lg2 + '</div>'
                var active = $('.activ_' + tL1btm4)
                $('.cntr_bttm4').children(active).append(dotlgnd)
            }

            if (lg3 != 0) {
                dotlgnd = '<div class="dot lgnd3_p">' + lg3 + '</div>'
                var active = $('.activ_' + tL1btm4)
                $('.cntr_bttm4').children(active).append(dotlgnd)
            }

            if (lg4 != 0) {
                dotlgnd = '<div class="dot lgnd4_p">' + lg4 + '</div>'
                var active = $('.activ_' + tL1btm4)
                $('.cntr_bttm4').children(active).append(dotlgnd)
            }

            if (lg5 != 0) {
                dotlgnd = '<div class="dot lgnd5_p">' + lg5 + '</div>'
                var active = $('.activ_' + tL1btm4)
                $('.cntr_bttm4').children(active).append(dotlgnd)
            }
            if (lg6 != 0) {
                dotlgnd = '<div class="dot lgnd6_p">' + lg6 + '</div>'
                var active = $('.activ_' + tL1btm4)
                $('.cntr_bttm4').children(active).append(dotlgnd)
            }
            if (lg7 != 0) {
                dotlgnd = '<div class="dot lgnd7_p">' + lg7 + '</div>'
                var active = $('.activ_' + tL1btm4)
                $('.cntr_bttm4').children(active).append(dotlgnd)
            }
            if (lg8 != 0) {
                dotlgnd = '<div class="dot lgnd8_p">' + lg8 + '</div>'
                var active = $('.activ_' + tL1btm4)
                $('.cntr_bttm4').children(active).append(dotlgnd)
            }
        }

        if (tL1btm5 >= 1) {
            var activ_may = '<div class="activ_' + tL1btm5 + '">'
            $(activ_may).appendTo('.cntr_bttm5')
            $(dtImpacts).appendTo('.cntr_bttm5 > .activ_' + tL1btm5)
            $('.btm5').append(tlBttm5)

            for (i = 1; i <= tL1btm5; i++) {
                var randomBtm5 = random_lgnd[Math.floor(Math.random() * random_lgnd.length)]
                $('.cards5').append(randomBtm5)
            }
            var lg1 = $('.cards5').find('.card_lgnd1').length;
            var lg2 = $('.cards5').find('.card_lgnd2').length;
            var lg3 = $('.cards5').find('.card_lgnd3').length;
            var lg4 = $('.cards5').find('.card_lgnd4').length;
            var lg5 = $('.cards5').find('.card_lgnd5').length;
            var lg6 = $('.cards5').find('.card_lgnd6').length;
            var lg7 = $('.cards5').find('.card_lgnd7').length;
            var lg8 = $('.cards5').find('.card_lgnd8').length;
            var dotlgnd = ''

            if (lg1 != 0) {
                dotlgnd = '<div class="dot lgnd1_p">' + lg1 + '</div>'
                var active = $('.activ_' + tL1btm5)
                $('.cntr_bttm5').children(active).append(dotlgnd)
            }

            if (lg2 != 0) {
                dotlgnd = '<div class="dot lgnd2_p">' + lg2 + '</div>'
                var active = $('.activ_' + tL1btm5)
                $('.cntr_bttm5').children(active).append(dotlgnd)
            }

            if (lg3 != 0) {
                dotlgnd = '<div class="dot lgnd3_p">' + lg3 + '</div>'
                var active = $('.activ_' + tL1btm5)
                $('.cntr_bttm5').children(active).append(dotlgnd)
            }

            if (lg4 != 0) {
                dotlgnd = '<div class="dot lgnd4_p">' + lg4 + '</div>'
                var active = $('.activ_' + tL1btm5)
                $('.cntr_bttm5').children(active).append(dotlgnd)
            }

            if (lg5 != 0) {
                dotlgnd = '<div class="dot lgnd5_p">' + lg5 + '</div>'
                var active = $('.activ_' + tL1btm5)
                $('.cntr_bttm5').children(active).append(dotlgnd)
            }
            if (lg6 != 0) {
                dotlgnd = '<div class="dot lgnd6_p">' + lg6 + '</div>'
                var active = $('.activ_' + tL1btm5)
                $('.cntr_bttm5').children(active).append(dotlgnd)
            }
            if (lg7 != 0) {
                dotlgnd = '<div class="dot lgnd7_p">' + lg7 + '</div>'
                var active = $('.activ_' + tL1btm5)
                $('.cntr_bttm5').children(active).append(dotlgnd)
            }
            if (lg8 != 0) {
                dotlgnd = '<div class="dot lgnd8_p">' + lg8 + '</div>'
                var active = $('.activ_' + tL1btm5)
                $('.cntr_bttm5').children(active).append(dotlgnd)
            }
        }

        if (tL1btm6 >= 1) {
            var activ_jun = '<div class="activ_' + tL1btm6 + '">'
            $(activ_jun).appendTo('.cntr_bttm6')
            $(dtImpacts).appendTo('.cntr_bttm6 > .activ_' + tL1btm6)
            $('.btm6').append(tlBttm6)

            for (i = 1; i <= tL1btm6; i++) {
                var randomBtm6 = random_lgnd[Math.floor(Math.random() * random_lgnd.length)]
                $('.cards6').append(randomBtm6)
            }
            var lg1 = $('.cards6').find('.card_lgnd1').length;
            var lg2 = $('.cards6').find('.card_lgnd2').length;
            var lg3 = $('.cards6').find('.card_lgnd3').length;
            var lg4 = $('.cards6').find('.card_lgnd4').length;
            var lg5 = $('.cards6').find('.card_lgnd5').length;
            var lg6 = $('.cards6').find('.card_lgnd6').length;
            var lg7 = $('.cards6').find('.card_lgnd7').length;
            var lg8 = $('.cards6').find('.card_lgnd8').length;
            var dotlgnd = ''

            if (lg1 != 0) {
                dotlgnd = '<div class="dot lgnd1_p">' + lg1 + '</div>'
                var active = $('.activ_' + tL1btm6)
                $('.cntr_bttm6').children(active).append(dotlgnd)
            }

            if (lg2 != 0) {
                dotlgnd = '<div class="dot lgnd2_p">' + lg2 + '</div>'
                var active = $('.activ_' + tL1btm6)
                $('.cntr_bttm6').children(active).append(dotlgnd)
            }

            if (lg3 != 0) {
                dotlgnd = '<div class="dot lgnd3_p">' + lg3 + '</div>'
                var active = $('.activ_' + tL1btm6)
                $('.cntr_bttm6').children(active).append(dotlgnd)
            }

            if (lg4 != 0) {
                dotlgnd = '<div class="dot lgnd4_p">' + lg4 + '</div>'
                var active = $('.activ_' + tL1btm6)
                $('.cntr_bttm6').children(active).append(dotlgnd)
            }

            if (lg5 != 0) {
                dotlgnd = '<div class="dot lgnd5_p">' + lg5 + '</div>'
                var active = $('.activ_' + tL1btm6)
                $('.cntr_bttm6').children(active).append(dotlgnd)
            }
            if (lg6 != 0) {
                dotlgnd = '<div class="dot lgnd6_p">' + lg6 + '</div>'
                var active = $('.activ_' + tL1btm6)
                $('.cntr_bttm6').children(active).append(dotlgnd)
            }
            if (lg7 != 0) {
                dotlgnd = '<div class="dot lgnd7_p">' + lg7 + '</div>'
                var active = $('.activ_' + tL1btm6)
                $('.cntr_bttm6').children(active).append(dotlgnd)
            }
            if (lg8 != 0) {
                dotlgnd = '<div class="dot lgnd8_p">' + lg8 + '</div>'
                var active = $('.activ_' + tL1btm6)
                $('.cntr_bttm6').children(active).append(dotlgnd)
            }
        }

        if (tL1btm7 >= 1) {
            var activ_jul = '<div class="activ_' + tL1btm7 + '">'
            $(activ_jul).appendTo('.cntr_bttm7')
            $(dtImpacts).appendTo('.cntr_bttm7 > .activ_' + tL1btm6)
            $('.btm7').append(tlBttm7)

            for (i = 1; i <= tL1btm7; i++) {
                var randomBtm7 = random_lgnd[Math.floor(Math.random() * random_lgnd.length)]
                $('.cards7').append(randomBtm7)
            }
            var lg1 = $('.cards7').find('.card_lgnd1').length;
            var lg2 = $('.cards7').find('.card_lgnd2').length;
            var lg3 = $('.cards7').find('.card_lgnd3').length;
            var lg4 = $('.cards7').find('.card_lgnd4').length;
            var lg5 = $('.cards7').find('.card_lgnd5').length;
            var lg6 = $('.cards7').find('.card_lgnd6').length;
            var lg7 = $('.cards7').find('.card_lgnd7').length;
            var lg8 = $('.cards7').find('.card_lgnd8').length;
            var dotlgnd = ''

            if (lg1 != 0) {
                dotlgnd = '<div class="dot lgnd1_p">' + lg1 + '</div>'
                var active = $('.activ_' + tL1btm7)
                $('.cntr_bttm7').children(active).append(dotlgnd)
            }

            if (lg2 != 0) {
                dotlgnd = '<div class="dot lgnd2_p">' + lg2 + '</div>'
                var active = $('.activ_' + tL1btm7)
                $('.cntr_bttm7').children(active).append(dotlgnd)
            }

            if (lg3 != 0) {
                dotlgnd = '<div class="dot lgnd3_p">' + lg3 + '</div>'
                var active = $('.activ_' + tL1btm7)
                $('.cntr_bttm7').children(active).append(dotlgnd)
            }

            if (lg4 != 0) {
                dotlgnd = '<div class="dot lgnd4_p">' + lg4 + '</div>'
                var active = $('.activ_' + tL1btm7)
                $('.cntr_bttm7').children(active).append(dotlgnd)
            }

            if (lg5 != 0) {
                dotlgnd = '<div class="dot lgnd5_p">' + lg5 + '</div>'
                var active = $('.activ_' + tL1btm7)
                $('.cntr_bttm7').children(active).append(dotlgnd)
            }
            if (lg6 != 0) {
                dotlgnd = '<div class="dot lgnd6_p">' + lg6 + '</div>'
                var active = $('.activ_' + tL1btm7)
                $('.cntr_bttm7').children(active).append(dotlgnd)
            }
            if (lg7 != 0) {
                dotlgnd = '<div class="dot lgnd7_p">' + lg7 + '</div>'
                var active = $('.activ_' + tL1btm7)
                $('.cntr_bttm7').children(active).append(dotlgnd)
            }
            if (lg8 != 0) {
                dotlgnd = '<div class="dot lgnd8_p">' + lg8 + '</div>'
                var active = $('.activ_' + tL1btm7)
                $('.cntr_bttm7').children(active).append(dotlgnd)
            }
        }

        if (tL1btm8 >= 1) {
            var activ_aug = '<div class="activ_' + tL1btm8 + '">'
            $(activ_aug).appendTo('.cntr_bttm8')
            $(dtImpacts).appendTo('.cntr_bttm8 > .activ_' + tL1btm8)
            $('.btm8').append(tlBttm8)

            for (i = 1; i <= tL1btm8; i++) {
                var randomBtm8 = random_lgnd[Math.floor(Math.random() * random_lgnd.length)]
                $('.cards8').append(randomBtm8)
            }
            var lg1 = $('.cards8').find('.card_lgnd1').length;
            var lg2 = $('.cards8').find('.card_lgnd2').length;
            var lg3 = $('.cards8').find('.card_lgnd3').length;
            var lg4 = $('.cards8').find('.card_lgnd4').length;
            var lg5 = $('.cards8').find('.card_lgnd5').length;
            var lg6 = $('.cards8').find('.card_lgnd6').length;
            var lg7 = $('.cards8').find('.card_lgnd7').length;
            var lg8 = $('.cards8').find('.card_lgnd8').length;
            var dotlgnd = ''

            if (lg1 != 0) {
                dotlgnd = '<div class="dot lgnd1_p">' + lg1 + '</div>'
                var active = $('.activ_' + tL1btm8)
                $('.cntr_bttm8').children(active).append(dotlgnd)
            }

            if (lg2 != 0) {
                dotlgnd = '<div class="dot lgnd2_p">' + lg2 + '</div>'
                var active = $('.activ_' + tL1btm8)
                $('.cntr_bttm8').children(active).append(dotlgnd)
            }

            if (lg3 != 0) {
                dotlgnd = '<div class="dot lgnd3_p">' + lg3 + '</div>'
                var active = $('.activ_' + tL1btm8)
                $('.cntr_bttm8').children(active).append(dotlgnd)
            }

            if (lg4 != 0) {
                dotlgnd = '<div class="dot lgnd4_p">' + lg4 + '</div>'
                var active = $('.activ_' + tL1btm8)
                $('.cntr_bttm8').children(active).append(dotlgnd)
            }

            if (lg5 != 0) {
                dotlgnd = '<div class="dot lgnd5_p">' + lg5 + '</div>'
                var active = $('.activ_' + tL1btm8)
                $('.cntr_bttm8').children(active).append(dotlgnd)
            }
            if (lg6 != 0) {
                dotlgnd = '<div class="dot lgnd6_p">' + lg6 + '</div>'
                var active = $('.activ_' + tL1btm8)
                $('.cntr_bttm8').children(active).append(dotlgnd)
            }
            if (lg7 != 0) {
                dotlgnd = '<div class="dot lgnd7_p">' + lg7 + '</div>'
                var active = $('.activ_' + tL1btm8)
                $('.cntr_bttm8').children(active).append(dotlgnd)
            }
            if (lg8 != 0) {
                dotlgnd = '<div class="dot lgnd8_p">' + lg8 + '</div>'
                var active = $('.activ_' + tL1btm8)
                $('.cntr_bttm8').children(active).append(dotlgnd)
            }
        }

        if (tL1btm9 >= 1) {
            var activ_sep = '<div class="activ_' + tL1btm9 + '">'
            $(activ_sep).appendTo('.cntr_bttm9')
            $(dtImpacts).appendTo('.cntr_bttm9 > .activ_' + tL1btm9)
            $('.btm9').append(tlBttm9)

            for (i = 1; i <= tL1btm9; i++) {
                var randomBtm9 = random_lgnd[Math.floor(Math.random() * random_lgnd.length)]
                $('.cards9').append(randomBtm9)
            }
            var lg1 = $('.cards9').find('.card_lgnd1').length;
            var lg2 = $('.cards9').find('.card_lgnd2').length;
            var lg3 = $('.cards9').find('.card_lgnd3').length;
            var lg4 = $('.cards9').find('.card_lgnd4').length;
            var lg5 = $('.cards9').find('.card_lgnd5').length;
            var lg6 = $('.cards9').find('.card_lgnd6').length;
            var lg7 = $('.cards9').find('.card_lgnd7').length;
            var lg8 = $('.cards9').find('.card_lgnd8').length;
            var dotlgnd = ''

            if (lg1 != 0) {
                dotlgnd = '<div class="dot lgnd1_p">' + lg1 + '</div>'
                var active = $('.activ_' + tL1btm9)
                $('.cntr_bttm9').children(active).append(dotlgnd)
            }

            if (lg2 != 0) {
                dotlgnd = '<div class="dot lgnd2_p">' + lg2 + '</div>'
                var active = $('.activ_' + tL1btm9)
                $('.cntr_bttm9').children(active).append(dotlgnd)
            }

            if (lg3 != 0) {
                dotlgnd = '<div class="dot lgnd3_p">' + lg3 + '</div>'
                var active = $('.activ_' + tL1btm9)
                $('.cntr_bttm9').children(active).append(dotlgnd)
            }

            if (lg4 != 0) {
                dotlgnd = '<div class="dot lgnd4_p">' + lg4 + '</div>'
                var active = $('.activ_' + tL1btm9)
                $('.cntr_bttm9').children(active).append(dotlgnd)
            }

            if (lg5 != 0) {
                dotlgnd = '<div class="dot lgnd5_p">' + lg5 + '</div>'
                var active = $('.activ_' + tL1btm9)
                $('.cntr_bttm9').children(active).append(dotlgnd)
            }
            if (lg6 != 0) {
                dotlgnd = '<div class="dot lgnd6_p">' + lg6 + '</div>'
                var active = $('.activ_' + tL1btm9)
                $('.cntr_bttm9').children(active).append(dotlgnd)
            }
            if (lg7 != 0) {
                dotlgnd = '<div class="dot lgnd7_p">' + lg7 + '</div>'
                var active = $('.activ_' + tL1btm9)
                $('.cntr_bttm9').children(active).append(dotlgnd)
            }
            if (lg8 != 0) {
                dotlgnd = '<div class="dot lgnd8_p">' + lg8 + '</div>'
                var active = $('.activ_' + tL1btm9)
                $('.cntr_bttm9').children(active).append(dotlgnd)
            }
        }

        if (tL1btm10 >= 1) {
            var activ_oct = '<div class="activ_' + tL1btm10 + '">'
            $(activ_oct).appendTo('.cntr_bttm10')
            $(dtImpacts).appendTo('.cntr_bttm10 > .activ_' + tL1btm10)
            $('.btm10').append(tlBttm10)

            for (i = 1; i <= tL1btm10; i++) {
                var randomBtm10 = random_lgnd[Math.floor(Math.random() * random_lgnd.length)]
                $('.cards10').append(randomBtm10)
            }
            var lg1 = $('.cards10').find('.card_lgnd1').length;
            var lg2 = $('.cards10').find('.card_lgnd2').length;
            var lg3 = $('.cards10').find('.card_lgnd3').length;
            var lg4 = $('.cards10').find('.card_lgnd4').length;
            var lg5 = $('.cards10').find('.card_lgnd5').length;
            var lg6 = $('.cards10').find('.card_lgnd6').length;
            var lg7 = $('.cards10').find('.card_lgnd7').length;
            var lg8 = $('.cards10').find('.card_lgnd8').length;
            var dotlgnd = ''

            if (lg1 != 0) {
                dotlgnd = '<div class="dot lgnd1_p">' + lg1 + '</div>'
                var active = $('.activ_' + tL1btm10)
                $('.cntr_bttm10').children(active).append(dotlgnd)
            }

            if (lg2 != 0) {
                dotlgnd = '<div class="dot lgnd2_p">' + lg2 + '</div>'
                var active = $('.activ_' + tL1btm10)
                $('.cntr_bttm10').children(active).append(dotlgnd)
            }

            if (lg3 != 0) {
                dotlgnd = '<div class="dot lgnd3_p">' + lg3 + '</div>'
                var active = $('.activ_' + tL1btm10)
                $('.cntr_bttm10').children(active).append(dotlgnd)
            }

            if (lg4 != 0) {
                dotlgnd = '<div class="dot lgnd4_p">' + lg4 + '</div>'
                var active = $('.activ_' + tL1btm10)
                $('.cntr_bttm10').children(active).append(dotlgnd)
            }

            if (lg5 != 0) {
                dotlgnd = '<div class="dot lgnd5_p">' + lg5 + '</div>'
                var active = $('.activ_' + tL1btm10)
                $('.cntr_bttm10').children(active).append(dotlgnd)
            }
            if (lg6 != 0) {
                dotlgnd = '<div class="dot lgnd6_p">' + lg6 + '</div>'
                var active = $('.activ_' + tL1btm10)
                $('.cntr_bttm10').children(active).append(dotlgnd)
            }
            if (lg7 != 0) {
                dotlgnd = '<div class="dot lgnd7_p">' + lg7 + '</div>'
                var active = $('.activ_' + tL1btm10)
                $('.cntr_bttm10').children(active).append(dotlgnd)
            }
            if (lg8 != 0) {
                dotlgnd = '<div class="dot lgnd8_p">' + lg8 + '</div>'
                var active = $('.activ_' + tL1btm10)
                $('.cntr_bttm10').children(active).append(dotlgnd)
            }
        }

        if (tL1btm11 >= 1) {
            var activ_nov = '<div class="activ_' + tL1btm11 + '">'
            $(activ_nov).appendTo('.cntr_bttm11')
            $(dtImpacts).appendTo('.cntr_bttm11 > .activ_' + tL1btm11)
            $('.btm11').append(tlBttm11)

            for (i = 1; i <= tL1btm11; i++) {
                var randomBtm11 = random_lgnd[Math.floor(Math.random() * random_lgnd.length)]
                $('.cards11').append(randomBtm11)
            }
            var lg1 = $('.cards11').find('.card_lgnd1').length;
            var lg2 = $('.cards11').find('.card_lgnd2').length;
            var lg3 = $('.cards11').find('.card_lgnd3').length;
            var lg4 = $('.cards11').find('.card_lgnd4').length;
            var lg5 = $('.cards11').find('.card_lgnd5').length;
            var lg6 = $('.cards11').find('.card_lgnd6').length;
            var lg7 = $('.cards11').find('.card_lgnd7').length;
            var lg8 = $('.cards11').find('.card_lgnd8').length;
            var dotlgnd = ''

            if (lg1 != 0) {
                dotlgnd = '<div class="dot lgnd1_p">' + lg1 + '</div>'
                var active = $('.activ_' + tL1btm11)
                $('.cntr_bttm11').children(active).append(dotlgnd)
            }

            if (lg2 != 0) {
                dotlgnd = '<div class="dot lgnd2_p">' + lg2 + '</div>'
                var active = $('.activ_' + tL1btm11)
                $('.cntr_bttm11').children(active).append(dotlgnd)
            }

            if (lg3 != 0) {
                dotlgnd = '<div class="dot lgnd3_p">' + lg3 + '</div>'
                var active = $('.activ_' + tL1btm11)
                $('.cntr_bttm11').children(active).append(dotlgnd)
            }

            if (lg4 != 0) {
                dotlgnd = '<div class="dot lgnd4_p">' + lg4 + '</div>'
                var active = $('.activ_' + tL1btm11)
                $('.cntr_bttm11').children(active).append(dotlgnd)
            }

            if (lg5 != 0) {
                dotlgnd = '<div class="dot lgnd5_p">' + lg5 + '</div>'
                var active = $('.activ_' + tL1btm11)
                $('.cntr_bttm11').children(active).append(dotlgnd)
            }
            if (lg6 != 0) {
                dotlgnd = '<div class="dot lgnd6_p">' + lg6 + '</div>'
                var active = $('.activ_' + tL1btm11)
                $('.cntr_bttm11').children(active).append(dotlgnd)
            }
            if (lg7 != 0) {
                dotlgnd = '<div class="dot lgnd7_p">' + lg7 + '</div>'
                var active = $('.activ_' + tL1btm11)
                $('.cntr_bttm11').children(active).append(dotlgnd)
            }
            if (lg8 != 0) {
                dotlgnd = '<div class="dot lgnd8_p">' + lg8 + '</div>'
                var active = $('.activ_' + tL1btm11)
                $('.cntr_bttm11').children(active).append(dotlgnd)
            }
        }

        if (tL1btm12 >= 1) {
            var activ_dic = '<div class="activ_' + tL1btm12 + '">'
            $(activ_dic).appendTo('.cntr_bttm12')
            $(dtImpacts).appendTo('.cntr_bttm12 > .activ_' + tL1btm12)
            $('.btm12').append(tlBttm12)

            for (i = 1; i <= tL1btm12; i++) {
                var randomBtm12 = random_lgnd[Math.floor(Math.random() * random_lgnd.length)]
                $('.cards12').append(randomBtm12)
            }
            var lg1 = $('.cards12').find('.card_lgnd1').length;
            var lg2 = $('.cards12').find('.card_lgnd2').length;
            var lg3 = $('.cards12').find('.card_lgnd3').length;
            var lg4 = $('.cards12').find('.card_lgnd4').length;
            var lg5 = $('.cards12').find('.card_lgnd5').length;
            var lg6 = $('.cards12').find('.card_lgnd6').length;
            var lg7 = $('.cards12').find('.card_lgnd7').length;
            var lg8 = $('.cards12').find('.card_lgnd8').length;
            var dotlgnd = ''

            if (lg1 != 0) {
                dotlgnd = '<div class="dot lgnd1_p">' + lg1 + '</div>'
                var active = $('.activ_' + tL1btm12)
                $('.cntr_bttm12').children(active).append(dotlgnd)
            }

            if (lg2 != 0) {
                dotlgnd = '<div class="dot lgnd2_p">' + lg2 + '</div>'
                var active = $('.activ_' + tL1btm12)
                $('.cntr_bttm12').children(active).append(dotlgnd)
            }

            if (lg3 != 0) {
                dotlgnd = '<div class="dot lgnd3_p">' + lg3 + '</div>'
                var active = $('.activ_' + tL1btm12)
                $('.cntr_bttm12').children(active).append(dotlgnd)
            }

            if (lg4 != 0) {
                dotlgnd = '<div class="dot lgnd4_p">' + lg4 + '</div>'
                var active = $('.activ_' + tL1btm12)
                $('.cntr_bttm12').children(active).append(dotlgnd)
            }

            if (lg5 != 0) {
                dotlgnd = '<div class="dot lgnd5_p">' + lg5 + '</div>'
                var active = $('.activ_' + tL1btm12)
                $('.cntr_bttm12').children(active).append(dotlgnd)
            }
            if (lg6 != 0) {
                dotlgnd = '<div class="dot lgnd6_p">' + lg6 + '</div>'
                var active = $('.activ_' + tL1btm12)
                $('.cntr_bttm12').children(active).append(dotlgnd)
            }
            if (lg7 != 0) {
                dotlgnd = '<div class="dot lgnd7_p">' + lg7 + '</div>'
                var active = $('.activ_' + tL1btm12)
                $('.cntr_bttm12').children(active).append(dotlgnd)
            }
            if (lg8 != 0) {
                dotlgnd = '<div class="dot lgnd8_p">' + lg8 + '</div>'
                var active = $('.activ_' + tL1btm12)
                $('.cntr_bttm12').children(active).append(dotlgnd)
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
        pnlLgnds();
    });

    $('#lgnd2').click(function () {
        $(".card_lgnd2").toggle(this.checked)
        pnlLgnds();
    });

    $('#lgnd3').click(function () {
        $(".card_lgnd3").toggle(this.checked)
        pnlLgnds();
    });

    $('#lgnd4').click(function () {
        $(".card_lgnd4").toggle(this.checked)
        pnlLgnds();
    });

    $('#lgnd5').click(function () {
        $(".card_lgnd5").toggle(this.checked)
        pnlLgnds();
    });

    $('#lgnd6').click(function () {
        $(".card_lgnd6").toggle(this.checked)
        pnlLgnds();
    });

    $('#lgnd7').click(function () {
        $(".card_lgnd7").toggle(this.checked)
        pnlLgnds();
    });

    $('#lgnd8').click(function () {
        $(".card_lgnd8").toggle(this.checked)
        pnlLgnds();
    });

    $(document).on('click', '.btn', function () {
        $(".tp_yr").toggle();
        $(".btm_yr").toggle();
        for (itp = 1; itp <= 12; itp++) {
            var tp = '.tp' + itp
            $(tp).toggle();
        }

        for (ibtm = 1; ibtm <= 12; ibtm++) {
            var btm = '.btm' + ibtm
            $(btm).toggle();
        }

        if ($(".tp_yr").is(":visible")) {
            $(this).text("Hide");
        } else {
            $(this).text("Show");
        }
    })

    function pnlLgnds() {

        for (i = 1; i <= 12; i++) {
            var panel = '.pnl_bttm' + i
            var cards = '.cards' + i
            var lngtCards = $(cards).children().length;
            var lngtCardsHide = $(cards).children().filter(':hidden').length;
            var isCardshow = $(cards).children().is(':visible')
            var hasChildren = $(panel).has('*').length > 0

            if (hasChildren == true) { // tiene hijos el mes
                if (lngtCardsHide < lngtCards) {
                    $(panel).css("visibility", "visible")
                }
                if (lngtCards != 0 && $(panel).is(':visible') == true) {
                    if ((lngtCards - lngtCardsHide) == 0 && isCardshow == false) {
                        $(panel).css("visibility", "hidden")
                    }
                }
            }
        }
    }

    $(".btn_print").hide()

    $(".btn_print").click(function () {
        $('<div class="scrim">').appendTo('body')

        $('<div class="dlg_pdf">').appendTo('.scrim')
        $('<div class="dlg_pdf_bar">').appendTo('.dlg_pdf')
        $('<div class="lbl">').appendTo('.dlg_pdf_bar')

        $('<div class="dlg_pdf_cta">').appendTo('.dlg_pdf')
        $('<div class="btn-sys-close">').appendTo('.dlg_pdf_cta')

        $('<div class="dlg_cnt">').appendTo('.dlg_pdf')
        $('<div class="dlg_pdf_preview">').appendTo('.dlg_cnt')

        $('<div class="dlg_pdf_canvas">').appendTo('.dlg_pdf_preview')

        $('<div class="dlg_pdf_btns">').appendTo('.dlg_cnt')

        $('<div id="zoomIn">').appendTo('.dlg_pdf_btns')
        $('<div id="zoomOut">').appendTo('.dlg_pdf_btns')
        $('<div id="zoom-reset">').appendTo('.dlg_pdf_btns')

        var save_pdf = '<div id="save_pdf" class="btns">Save</div>'
        $('.dlg_pdf_btns').append(save_pdf)

        $('.dlg_pdf_pdf').addClass("d_lgnd0")
        $('.dlg_pdf_bar').addClass("tt_lgnd0")
        $('.dlg_pdf_cta').addClass("i_lgnd0")

        $('.dlg_pdf_bar').children().html("Export to PDF")

        html2canvas(document.querySelector(".timeline")).then(canvas => {
            canvas.id = "myCanvas";
            $('.dlg_pdf_canvas').append(canvas)
            $('<script src="src/scripts/canvas.js">').appendTo('.dlg_pdf_canvas')
            $('#save_pdf').on('click', function () {
                var imgTimeline = canvas.toDataURL('image/png')
                var pdf = new jsPDF('l', 'mm', 'a4')

                const imgProps = pdf.getImageProperties(imgTimeline);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                pdf.addImage(imgTimeline, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save('download.pdf');
                /*
                doc.addImage(imgTimeline, 'PNG', 0, 0, 210, 297)
                doc.save('sample.pdf')
                */
            })
        })
    })

    $(document).on('click', '.card_lgnd1', function () {
        var ChildTitle = $(this).find(".title").text();
        var ChildSubTitle = $(this).find(".subtitle").text();
        var ChildCont = $(this).find(".cont").text();
        $('<div class="scrim">').appendTo('body')

        $('<div class="dlg d_lgnd1">').appendTo('.scrim')
        $('<div class="dlg_bar tt_lgnd1">').appendTo('.dlg')
        $('<div class="lbl">').appendTo('.dlg_bar')

        $('<div class="dlg_cta i_lgnd1">').appendTo('.dlg')
        $('<div class="btn-sys-edit">').appendTo('.dlg_cta')
        $('<div class="btn-sys-close">').appendTo('.dlg_cta')

        $('<div class="dlg_cnt">').appendTo('.dlg')

        $('.dlg_bar').children().html(ChildTitle + " - " + ChildSubTitle)
        $('.dlg_cnt').html(ChildCont)
    })

    $(document).on('click', '.card_lgnd2', function () {
        var ChildTitle = $(this).find(".title").text();
        var ChildSubTitle = $(this).find(".subtitle").text();
        var ChildCont = $(this).find(".cont").text();
        $('<div class="scrim">').appendTo('body')

        $('<div class="dlg d_lgnd2">').appendTo('.scrim')
        $('<div class="dlg_bar tt_lgnd2">').appendTo('.dlg')
        $('<div class="lbl">').appendTo('.dlg_bar')

        $('<div class="dlg_cta i_lgnd2">').appendTo('.dlg')
        $('<div class="btn-sys-edit">').appendTo('.dlg_cta')
        $('<div class="btn-sys-close">').appendTo('.dlg_cta')

        $('<div class="dlg_cnt">').appendTo('.dlg')

        $('.dlg_bar').children().html(ChildTitle + " - " + ChildSubTitle)
        $('.dlg_cnt').html(ChildCont)
    })

    $(document).on('click', '.card_lgnd3', function () {
        var ChildTitle = $(this).find(".title").text();
        var ChildSubTitle = $(this).find(".subtitle").text();
        var ChildCont = $(this).find(".cont").text();
        $('<div class="scrim">').appendTo('body')

        $('<div class="dlg d_lgnd3">').appendTo('.scrim')
        $('<div class="dlg_bar tt_lgnd3">').appendTo('.dlg')
        $('<div class="lbl">').appendTo('.dlg_bar')

        $('<div class="dlg_cta i_lgnd3">').appendTo('.dlg')
        $('<div class="btn-sys-edit">').appendTo('.dlg_cta')
        $('<div class="btn-sys-close">').appendTo('.dlg_cta')

        $('<div class="dlg_cnt">').appendTo('.dlg')

        $('.dlg_bar').children().html(ChildTitle + " - " + ChildSubTitle)
        $('.dlg_cnt').html(ChildCont)
    })

    $(document).on('click', '.card_lgnd4', function () {
        var ChildTitle = $(this).find(".title").text();
        var ChildSubTitle = $(this).find(".subtitle").text();
        var ChildCont = $(this).find(".cont").text();
        $('<div class="scrim">').appendTo('body')

        $('<div class="dlg d_lgnd4">').appendTo('.scrim')
        $('<div class="dlg_bar tt_lgnd4">').appendTo('.dlg')
        $('<div class="lbl">').appendTo('.dlg_bar')

        $('<div class="dlg_cta i_lgnd4">').appendTo('.dlg')
        $('<div class="btn-sys-edit">').appendTo('.dlg_cta')
        $('<div class="btn-sys-close">').appendTo('.dlg_cta')

        $('<div class="dlg_cnt">').appendTo('.dlg')

        $('.dlg_bar').children().html(ChildTitle + " - " + ChildSubTitle)
        $('.dlg_cnt').html(ChildCont)
    })

    $(document).on('click', '.card_lgnd5', function () {
        var ChildTitle = $(this).find(".title").text();
        var ChildSubTitle = $(this).find(".subtitle").text();
        var ChildCont = $(this).find(".cont").text();
        $('<div class="scrim">').appendTo('body')

        $('<div class="dlg d_lgnd5">').appendTo('.scrim')
        $('<div class="dlg_bar tt_lgnd5">').appendTo('.dlg')
        $('<div class="lbl">').appendTo('.dlg_bar')

        $('<div class="dlg_cta i_lgnd5">').appendTo('.dlg')
        $('<div class="btn-sys-edit">').appendTo('.dlg_cta')
        $('<div class="btn-sys-close">').appendTo('.dlg_cta')

        $('<div class="dlg_cnt">').appendTo('.dlg')

        $('.dlg_bar').children().html(ChildTitle + " - " + ChildSubTitle)
        $('.dlg_cnt').html(ChildCont)
    })

    $(document).on('click', '.card_lgnd6', function () {
        var ChildTitle = $(this).find(".title").text();
        var ChildSubTitle = $(this).find(".subtitle").text();
        var ChildCont = $(this).find(".cont").text();
        $('<div class="scrim">').appendTo('body')

        $('<div class="dlg d_lgnd6">').appendTo('.scrim')
        $('<div class="dlg_bar tt_lgnd6">').appendTo('.dlg')
        $('<div class="lbl">').appendTo('.dlg_bar')

        $('<div class="dlg_cta i_lgnd6">').appendTo('.dlg')
        $('<div class="btn-sys-edit">').appendTo('.dlg_cta')
        $('<div class="btn-sys-close">').appendTo('.dlg_cta')

        $('<div class="dlg_cnt">').appendTo('.dlg')

        $('.dlg_bar').children().html(ChildTitle + " - " + ChildSubTitle)
        $('.dlg_cnt').html(ChildCont)
    })

    $(document).on('click', '.card_lgnd7', function () {
        var ChildTitle = $(this).find(".title").text();
        var ChildSubTitle = $(this).find(".subtitle").text();
        var ChildCont = $(this).find(".cont").text();
        $('<div class="scrim">').appendTo('body')

        $('<div class="dlg d_lgnd7">').appendTo('.scrim')
        $('<div class="dlg_bar tt_lgnd7">').appendTo('.dlg')
        $('<div class="lbl">').appendTo('.dlg_bar')

        $('<div class="dlg_cta i_lgnd7">').appendTo('.dlg')
        $('<div class="btn-sys-edit">').appendTo('.dlg_cta')
        $('<div class="btn-sys-close">').appendTo('.dlg_cta')

        $('<div class="dlg_cnt">').appendTo('.dlg')

        $('.dlg_bar').children().html(ChildTitle + " - " + ChildSubTitle)
        $('.dlg_cnt').html(ChildCont)
    })

    $(document).on('click', '.card_contr', function () {
        var ChildTitle = $(this).find(".title").text();
        var ChildCont = $(this).find(".cont").text();
        $('<div class="scrim">').appendTo('body')

        $('<div class="dlg d_lgnd0">').appendTo('.scrim')
        $('<div class="dlg_bar tt_lgnd0">').appendTo('.dlg')
        $('<div class="lbl">').appendTo('.dlg_bar')

        $('<div class="dlg_cta i_lgnd0">').appendTo('.dlg')
        $('<div class="btn-sys-edit">').appendTo('.dlg_cta')
        $('<div class="btn-sys-close">').appendTo('.dlg_cta')

        $('<div class="dlg_cnt">').appendTo('.dlg')

        $('<textarea class="dlg_tx">').appendTo('.dlg_cnt')

        $('.dlg_bar').children().html(ChildTitle)
        $('.dlg_tx').html(ChildCont)
    })

    $(document).on('click', '.btn-sys-edit', function () {
        $(this).remove();
        $('<div class="btn-sys-save">').prependTo('.dlg_cta')
    })

    $(document).on('click', '.btn-sys-save', function () {
        $(this).remove();
        $('<div class="btn-sys-edit">').prependTo('.dlg_cta')
    })
})