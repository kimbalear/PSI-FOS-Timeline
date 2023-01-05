$(document).ready(function () {
    let orgUnits = [];
    let services = [];
    let years = [];

    let tLtpYr;
    let tLtp01 = [];
    let tLtp02 = [];
    let tLtp03 = [];
    let tLtp04 = [];
    let tLtp05 = [];
    let tLtp06 = [];
    let tLtp07 = [];
    let tLtp08 = [];
    let tLtp09 = [];
    let tLtp10 = [];
    let tLtp11 = [];
    let tLtp12 = [];
    let tL = [];

    let tLbtmYr;
    let tLbtm01 = [];
    let tLbtm02 = [];
    let tLbtm03 = [];
    let tLbtm04 = [];
    let tLbtm05 = [];
    let tLbtm06 = [];
    let tLbtm07 = [];
    let tLbtm08 = [];
    let tLbtm09 = [];
    let tLbtm10 = [];
    let tLbtm11 = [];
    let tLbtm12 = [];
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
                orgUnits.push(response.OUs)
                services.push(response.services)
                years.push(response.years)

                tLtpYr = response.time_lines1[0].t_line[0].yr;

                //timeline

                tLtp01.push(response.time_lines1[0].tp01)
                tLtp02.push(response.time_lines1[0].tp02)
                tLtp03.push(response.time_lines1[0].tp03)
                tLtp04.push(response.time_lines1[0].tp04)
                tLtp05.push(response.time_lines1[0].tp05)
                tLtp06.push(response.time_lines1[0].tp06)
                tLtp07.push(response.time_lines1[0].tp07)
                tLtp08.push(response.time_lines1[0].tp08)
                tLtp09.push(response.time_lines1[0].tp09)
                tLtp10.push(response.time_lines1[0].tp10)
                tLtp11.push(response.time_lines1[0].tp11)
                tLtp12.push(response.time_lines1[0].tp12)

                tL.push(response.time_lines1[0].t_line)

                tLbtm01.push(response.time_lines1[0].btm01)
                tLbtm02.push(response.time_lines1[0].btm02)
                tLbtm03.push(response.time_lines1[0].btm03)
                tLbtm04.push(response.time_lines1[0].btm04)
                tLbtm05.push(response.time_lines1[0].btm05)
                tLbtm06.push(response.time_lines1[0].btm06)
                tLbtm07.push(response.time_lines1[0].btm07)
                tLbtm08.push(response.time_lines1[0].btm08)
                tLbtm09.push(response.time_lines1[0].btm09)
                tLbtm10.push(response.time_lines1[0].btm10)
                tLbtm11.push(response.time_lines1[0].btm11)
                tLbtm12.push(response.time_lines1[0].btm12)

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

        $('.dlg_cnt').html("This is just a test text, we are developing it. This is just a test text, we are developing it. This is just a test text, we are developing it. This is just a test text, we are developing it. This is just a test text, we are developing it. This is just a test text, we are developing it. This is just a test text, we are developing it. This is just a test text, we are developing it. This is just a test text, we are developing it. This is just a test text, we are developing it. This is just a test text, we are developing it. This is just a test text, we are developing it. This is just a test text, we are developing it. This is just a test text, we are developing it.")

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

        createTimeline(ou, srv, yrs);
    };

    function createTimeline(ou, srv, yrs) {

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

                console.log("qry1-qry3 hay datos: " + qry1 + "-" + qry3)
                console.log("OU s: " + qry1)
                console.log("Year s: " + qry3)

                $('<div class="timeline">').appendTo('.timelines')
                
                $('.timeline').css("background-color", "yellow")

            }else {
                $('.timeline').remove()
            }
        } else {
            console.log("qry1-qry3: " + typeof qry1);
            $('.timeline').remove()
        }

    }

})