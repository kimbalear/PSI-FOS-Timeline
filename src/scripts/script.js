$(document).ready(function () {

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
                    if (dropdown.children(':visible').length === 0) {
                        dropdown.removeClass('-hasValue');
                    }
                });
            }).addClass('-hasValue');
            list.css('top', dropdown.height() + 5);
            if (!option.not('.-selected').length) {
                list.append('<h5 class="msbx-ou_noselections">No Selections</h5>');
            }
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
                    if (dropdown.children(':visible').length === 0) {
                        dropdown.removeClass('-hasValue');
                    }
                });
            }).addClass('-hasValue');
            list.css('top', dropdown.height() + 5);
            if (!option.not('.-selected').length) {
                list.append('<h5 class="msbx-srv_noselections">No Selections</h5>');
            }
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
                    if (dropdown.children(':visible').length === 0) {
                        dropdown.removeClass('-hasValue');
                    }
                });
            }).addClass('-hasValue');
            list.css('top', dropdown.height() + 5);
            if (!option.not('.-selected').length) {
                list.append('<h5 class="msbx-yrs_noselections">No Selections</h5>');
            }
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

    // Legends cta

    $('#lgnd0').click(function () {
        $(".card_contr").toggle(this.checked);
        $(".card_contr").parent().parent().parent().toggle(this.show);
    });

    $('#lgnd1').click(function () {
        $(".card_lgnd1").toggle(this.checked);
        //$(".card_lgnd1").parent().parent().parent().toggle(this.show);
        impactCounterMonth(21, 1);
    });

    $('#lgnd2').click(function () {
        $(".card_lgnd2").toggle(this.checked);
        impactCounterMonth(21, 2);
    });

    $('#lgnd3').click(function () {
        $(".card_lgnd3").toggle(this.checked);
        impactCounterMonth(21, 3);
    });

    $('#lgnd4').click(function () {
        $(".card_lgnd4").toggle(this.checked);
        impactCounterMonth(21, 4);
    });

    $('#lgnd5').click(function () {
        $(".card_lgnd5").toggle(this.checked);
        impactCounterMonth(21, 5);
    });

    $('#lgnd6').click(function () {
        $(".card_lgnd6").toggle(this.checked);
        impactCounterMonth(21, 6);
    });

    $('#lgnd7').click(function () {
        $(".card_lgnd7").toggle(this.checked);
        impactCounterMonth(21, 7);
    });

    $('#lgnd8').click(function () {
        $(".card_lgnd8").toggle(this.checked);
        impactCounterMonth(21, 8);
    });

    function impactCounterMonth(yrs, lgnd) {

        var mxl1, mxl2, mxl3, mxl4, mxl5, mxl6, mxl7, mxl8, mxl9, mxl10, mxl11, mxl12;

        const M = 12, N = 8;

        var arr = new Array(M);            // crea una array vacía de longitud `M`
        for (ar = 0; ar < M; ar++) {
            arr[ar] = new Array(N);        // hacer de cada elemento una array
        }

        for (mnt = 0; mnt <= 11; mnt++) {

            for (x = 0; x <= 7; x++) {
                arr[mnt, x], // lgnd 1
                    arr[mnt, x], // lgnd 2
                    arr[mnt, x], // lgnd 3
                    arr[mnt, x], // lgnd 4
                    arr[mnt, x], // lgnd 5
                    arr[mnt, x], // lgnd 6
                    arr[mnt, x], // lgnd 7
                    arr[mnt, x] // lgnd 8
            }
        }

        for (i = 0; i <= 11; i++) {
            switch (i) {
                case 0:
                    var month = "#feb-" + yrs;
                    var cardserv = ".card_lgnd" + lgnd;
                    // calculo cantidad total y le resto la de los servicios
                    var plgnd = $(month).find(".cntr_bttm > div .lgnd" + lgnd + "_p").length;
                    var mxl1 = $(month).find(".cntr_bttm > div .dot").length;

                    arr[i, 0] = plgnd;

                    if ($(cardserv).css('display') == 'none' || $(cardserv).css("visibility") == "hidden") {
                        console.log("is hidden");
                        if (arr[i, 0] < mxl1) {
                            mxl1 = $(month).find(".cntr_bttm > div .dot").length + plgnd;
                            arr[i, 0] = mxl1;
                            console.log("paso 1.1 " + arr[i, 0] + " Totals:" + mxl1)
                        }

                    } else {
                        console.log("is visible");
                        if (arr[i, 0] == mxl1) {
                            mxl1 = $(month).find(".cntr_bttm > div .dot").length - plgnd;
                            arr[i, 0] = mxl1;
                            console.log("paso 2.1 " + arr[i, 0] + " Totals:" + mxl1);

                        }
                    }

                    if (mxl1 == 0) {
                        console.log("paso 3")
                        $(cardserv).parent().parent().parent().toggle(this.show);
                    }

                    // oculto dot
                    $(month).find(".cntr_bttm > div .lgnd1_p").hide();

                    console.log("year: " + yrs);
                    console.log("mes: " + i);
                    console.log("ID: " + month);
                    console.log("lgnd: " + lgnd);
                    console.log("a restar: " + plgnd);
                    console.log("arr[0]: " + arr[0]);
                    console.log("mxl1: " + mxl1);
                    console.log(arr);
                    console.log("/////////////////////////////////////////////////");
                    break;

                case 1:
                    
                case 2:
                    var month = "#mar-" + yrs;
                    break;
                case 3:
                    var month = "#apr-" + yrs;
                    break;
                case 4:
                    var month = "#may-" + yrs;
                    break;
                case 5:
                    var month = "#jun-" + yrs;
                    break;
                case 6:
                    var month = "#jul-" + yrs;
                    break;
                case 7:
                    var month = "#aug-" + yrs;
                    break;
                case 8:
                    var month = "#sep-" + yrs;
                    break;
                case 9:
                    var month = "#oct-" + yrs;
                    break;
                case 10:
                    var month = "#nov-" + yrs;
                    break;
                case 11:
                    var month = "#dic-" + yrs;
                    break;
            }
        };
    }


    // dialog cta

    $(".scrim").hide();

    $('.btn-lgnd-inf').click(function () {
        $(".scrim").show();
        console.log("click");
    });

    $('.btn-sys-close').click(function () {
        $(".scrim").hide();
    });

    $('.dlg_bar').children().html("color");

});