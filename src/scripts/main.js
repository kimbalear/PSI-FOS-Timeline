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

    function readJson() {
        $.ajax({
            type: "GET",
            url: "data.json",
            success: function (response) {
                console.log(response)

                // Selectores
                orgUnits.push(response.OUs);
                services.push(response.services);
                years.push(response.years);

                tLtpYr = response.time_lines1[0].t_line[0].yr;

                //timeline

                tLtp01.push(response.time_lines1[0].tp01);
                tLtp02.push(response.time_lines1[0].tp02);
                tLtp03.push(response.time_lines1[0].tp03);
                tLtp04.push(response.time_lines1[0].tp04);
                tLtp05.push(response.time_lines1[0].tp05);
                tLtp06.push(response.time_lines1[0].tp06);
                tLtp07.push(response.time_lines1[0].tp07);
                tLtp08.push(response.time_lines1[0].tp08);
                tLtp09.push(response.time_lines1[0].tp09);
                tLtp10.push(response.time_lines1[0].tp10);
                tLtp11.push(response.time_lines1[0].tp11);
                tLtp12.push(response.time_lines1[0].tp12);

                tL.push(response.time_lines1[0].t_line);

                tLbtm01.push(response.time_lines1[0].btm01);
                tLbtm02.push(response.time_lines1[0].btm02);
                tLbtm03.push(response.time_lines1[0].btm03);
                tLbtm04.push(response.time_lines1[0].btm04);
                tLbtm05.push(response.time_lines1[0].btm05);
                tLbtm06.push(response.time_lines1[0].btm06);
                tLbtm07.push(response.time_lines1[0].btm07);
                tLbtm08.push(response.time_lines1[0].btm08);
                tLbtm09.push(response.time_lines1[0].btm09);
                tLbtm10.push(response.time_lines1[0].btm10);
                tLbtm11.push(response.time_lines1[0].btm11);
                tLbtm12.push(response.time_lines1[0].btm12);

                // Selectores
                /*
                console.log("orgUnits:" + orgUnits + "\nservices: " + services + "\nyears: " + years);
                */

                //timeline

                /*
                console.log("tLtpYr: " + tLtpYr);

                console.log("tLtp01");
                console.log(tLtp01);
                console.log("tLtp02");
                console.log(tLtp02);
                console.log("tLtp03");
                console.log(tLtp03);
                console.log("tLtp04");
                console.log(tLtp04);
                console.log("tLtp05");
                console.log(tLtp05);
                console.log("tLtp06");
                console.log(tLtp06);
                console.log("tLtp07");
                console.log(tLtp07);
                console.log("tLtp08");
                console.log(tLtp08);
                console.log("tLtp09");
                console.log(tLtp09);
                console.log("tLtp10");
                console.log(tLtp10);
                console.log("tLtp11");
                console.log(tLtp11);
                console.log("tLtp12");
                console.log(tLtp12);

                console.log("tL");
                console.log(tL);

                console.log(tLbtm01);
                console.log("tLbtm02");
                console.log(tLbtm02);
                console.log("tLbtm03");
                console.log(tLbtm03);
                console.log("tLbtm04");
                console.log(tLbtm04);
                console.log("tLbtm05");
                console.log(tLbtm05);
                console.log("tLbtm06");
                console.log(tLbtm06);
                console.log("tLbtm07");
                console.log(tLbtm07);
                console.log("tLbtm08");
                console.log(tLbtm08);
                console.log("tLbtm09");
                console.log(tLbtm09);
                console.log("tLbtm10");
                console.log(tLbtm10);
                console.log("tLbtm11");
                console.log(tLbtm11);
                console.log("tLbtm12");
                console.log(tLbtm12);
                */
            }
        });
    };

    readJson();

    function readOu(data) {

        readJson();
    };

    $(".scrim").hide();

    function selector(field, typ) { // seleccion de Selectores
        let array = field.val();

        // Iterar sobre cada elemento del array y aplicar una función a cada uno de ellos
        let result = $.map(array, function (value, index) {
            return value;
        });

        switch (typ) {
            case "ou":
                //console.log("ORG UNITS: " + result + " \ntyp: " + typ)
                SetOrgUnits(result)
                break;
            case "srv":
                //console.log("SERVICES: " + result + " \ntyp: " + typ)
                SetServices(result)
                break;
            case "yrs":
                console.log("Years: " + result + " \ntyp: " + typ)
                SetYears(result)
                break;
            default:
                break;
        }

    };

    $('.msbx-ou').each(function (e) {
        var self = $(this);
        var field = self.find('.msbx-ou_field');
        var fieldOption = field.find('option');
        var placeholder = field.attr('data-placeholder');

        field.hide().after(`<div class="msbx-ou_dropdown"></div>
                            <span class="msbx-ou_placeholder">` + placeholder + `</span>
                            <ul class="msbx-ou_list"></ul>
                            <span class="msbx-ou_arrow"></span>`);

        fieldOption.each(function (e) {
            $('.msbx-ou_list').append(`<li class="msbx-ou_option" data-value="` + $(this).val() + `">
                                                <a class="msbx-ou_text">`+ $(this).text() + `</a>
                                              </li>`);
        });

        var dropdown = self.find('.msbx-ou_dropdown');
        var list = self.find('.msbx-ou_list');
        var option = self.find('.msbx-ou_option');
        var optionText = self.find('.msbx-ou_text');

        dropdown.attr('data-multiple', 'true');
        list.css('top', dropdown.height() + 5);

        option.click(function (e) {
            var self = $(this);
            e.stopPropagation();
            self.addClass('-selected');
            field.find('option:contains(' + self.children().text() + ')').prop('selected', true);

            dropdown.append(function (e) {
                return $('<span class="msbx-ou_choice">' + self.children().text() + '<svg class="msbx-ou_deselect -iconX"><use href="#iconX"></use></svg></span>').click(function (e) {
                    var self = $(this);
                    e.stopPropagation();
                    self.remove();

                    list.find('.msbx-ou_option:contains(' + self.text() + ')').removeClass('-selected');
                    list.css('top', dropdown.height() + 5).find('.msbx-ou_noselections').remove();
                    field.find('option:contains(' + self.text() + ')').prop('selected', false);
                    selector(field, "ou");


                    if (dropdown.children(':visible').length === 0) {
                        dropdown.removeClass('-hasValue');

                    }
                });
            }).addClass('-hasValue');
            list.css('top', dropdown.height() + 5);
            if (!option.not('.-selected').length) {
                list.append('<h5 class="msbx-ou_noselections">No Selections</h5>');
            }

            selector(field, "ou");
        });

        dropdown.click(function (e) {
            e.stopPropagation();
            e.preventDefault();
            dropdown.toggleClass('-open');
            list.toggleClass('-open').scrollTop(0).css('top', dropdown.height() + 5);
        });

        $(document).on('click touch', function (e) {
            if (dropdown.hasClass('-open')) {
                dropdown.toggleClass('-open');
                list.removeClass('-open');
            }
        });
    });

    $('.msbx-srv').each(function (e) {
        var self = $(this);
        var field = self.find('.msbx-srv_field');
        var fieldOption = field.find('option');
        var placeholder = field.attr('data-placeholder');

        field.hide().after(`<div class="msbx-srv_dropdown"></div>
                            <span class="msbx-srv_placeholder">` + placeholder + `</span>
                            <ul class="msbx-srv_list"></ul>
                            <span class="msbx-srv_arrow"></span>`);

        fieldOption.each(function (e) {
            $('.msbx-srv_list').append(`<li class="msbx-srv_option" data-value="` + $(this).val() + `">
                                                <a class="msbx-srv_text">`+ $(this).text() + `</a>
                                              </li>`);
        });

        var dropdown = self.find('.msbx-srv_dropdown');
        var list = self.find('.msbx-srv_list');
        var option = self.find('.msbx-srv_option');
        var optionText = self.find('.msbx-srv_text');

        dropdown.attr('data-multiple', 'true');
        list.css('top', dropdown.height() + 5);

        option.click(function (e) {
            var self = $(this);
            e.stopPropagation();
            self.addClass('-selected');
            field.find('option:contains(' + self.children().text() + ')').prop('selected', true);
            dropdown.append(function (e) {
                return $('<span class="msbx-srv_choice">' + self.children().text() + '<svg class="msbx-srv_deselect -iconX"><use href="#iconX"></use></svg></span>').click(function (e) {
                    var self = $(this);
                    e.stopPropagation();
                    self.remove();
                    list.find('.msbx-srv_option:contains(' + self.text() + ')').removeClass('-selected');
                    list.css('top', dropdown.height() + 5).find('.msbx-srv_noselections').remove();
                    field.find('option:contains(' + self.text() + ')').prop('selected', false);
                    selector(field, "srv");

                    if (dropdown.children(':visible').length === 0) {
                        dropdown.removeClass('-hasValue');
                    }
                });
            }).addClass('-hasValue');
            list.css('top', dropdown.height() + 5);
            if (!option.not('.-selected').length) {
                list.append('<h5 class="msbx-srv_noselections">No Selections</h5>');
            }

            selector(field, "srv");
        });

        dropdown.click(function (e) {
            e.stopPropagation();
            e.preventDefault();
            dropdown.toggleClass('-open');
            list.toggleClass('-open').scrollTop(0).css('top', dropdown.height() + 5);
        });

        $(document).on('click touch', function (e) {
            if (dropdown.hasClass('-open')) {
                dropdown.toggleClass('-open');
                list.removeClass('-open');
            }
        });
    });

    $('.msbx-yrs').each(function (e) {
        var self = $(this);
        var field = self.find('.msbx-yrs_field');
        var fieldOption = field.find('option');
        var placeholder = field.attr('data-placeholder');

        field.hide().after(`<div class="msbx-yrs_dropdown"></div>
                            <span class="msbx-yrs_placeholder">` + placeholder + `</span>
                            <ul class="msbx-yrs_list"></ul>
                            <span class="msbx-yrs_arrow"></span>`);

        fieldOption.each(function (e) {
            $('.msbx-yrs_list').append(`<li class="msbx-yrs_option" data-value="` + $(this).val() + `">
                                                <a class="msbx-yrs_text">`+ $(this).text() + `</a>
                                              </li>`);
        });

        var dropdown = self.find('.msbx-yrs_dropdown');
        var list = self.find('.msbx-yrs_list');
        var option = self.find('.msbx-yrs_option');
        var optionText = self.find('.msbx-yrs_text');

        dropdown.attr('data-multiple', 'true');
        list.css('top', dropdown.height() + 5);

        option.click(function (e) {
            var self = $(this);
            e.stopPropagation();
            self.addClass('-selected');
            field.find('option:contains(' + self.children().text() + ')').prop('selected', true);
            dropdown.append(function (e) {
                return $('<span class="msbx-yrs_choice">' + self.children().text() + '<svg class="msbx-yrs_deselect -iconX"><use href="#iconX"></use></svg></span>').click(function (e) {
                    var self = $(this);
                    e.stopPropagation();
                    self.remove();
                    list.find('.msbx-yrs_option:contains(' + self.text() + ')').removeClass('-selected');
                    list.css('top', dropdown.height() + 5).find('.msbx-yrs_noselections').remove();
                    field.find('option:contains(' + self.text() + ')').prop('selected', false);
                    selector(field, "yrs");

                    if (dropdown.children(':visible').length === 0) {
                        dropdown.removeClass('-hasValue');
                    }
                });
            }).addClass('-hasValue');
            list.css('top', dropdown.height() + 5);
            if (!option.not('.-selected').length) {
                list.append('<h5 class="msbx-yrs_noselections">No Selections</h5>');
            }

            selector(field, "yrs");
        });

        dropdown.click(function (e) {
            e.stopPropagation();
            e.preventDefault();
            dropdown.toggleClass('-open');
            list.toggleClass('-open').scrollTop(0).css('top', dropdown.height() + 5);
        });

        $(document).on('click touch', function (e) {
            if (dropdown.hasClass('-open')) {
                dropdown.toggleClass('-open');
                list.removeClass('-open');
            }
        });
    });

    function SetOrgUnits(st) {
        var nameOu = ""
        for (var i = 0; i < st.length; i++) {

            if (i >= 1) {
                nameOu = nameOu + ", " + st[i];
                console.log("nameOu2:" + nameOu)
            } else {
                nameOu = nameOu + st[i];
                console.log("nameOu1:" + nameOu)
            }

        }

        $("#top_ou").text(nameOu);
    };

    function SetServices(st) {
        var nameSrv = ""
        for (var i = 0; i < st.length; i++) {

            if (i >= 1) {
                nameSrv = nameSrv + ", " + st[i];
                console.log("nameSrv:" + nameSrv)
            } else {
                nameSrv = nameSrv + st[i];
                console.log("nameSrv:" + nameSrv)
            }

        }

        $("#top_srv").text(nameSrv);
    };

    function SetYears(st) {
        var firstYear = ""
        var lastTwo = ""
        var years = ""

        for (var i = 0; i < st.length; i++) {

            if (i >= 1) {

                //years = lastTwo.substring(lastTwo.length - 4);
                lastTwo = " " + lastTwo + "/" + st[i].slice(-2);

                console.log("***lastTwo:" + lastTwo)
            } else {
                firstYear = firstYear + st[i];
                console.log("firstYear:" + firstYear)
            }
        }

        console.log("FIRST" + firstYear)
        console.log("LAST" + lastTwo)

        years = firstYear + lastTwo;

        //var years = firstYear + lastTwo;
        console.log("YEARS:" + years)

        $("#top_yrs").text(years);
    };

});