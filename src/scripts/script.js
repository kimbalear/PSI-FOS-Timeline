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
    });

    $('#lgnd2').click(function () {
        $(".card_lgnd2").toggle(this.checked);
        //$(".card_lgnd2").parent().parent().parent().toggle(this.show);
    });

    $('#lgnd3').click(function () {
        $(".card_lgnd3").toggle(this.checked);
        //$(".card_lgnd3").parent().parent().parent().toggle(this.show);
    });

    $('#lgnd4').click(function () {
        $(".card_lgnd4").toggle(this.checked);
        //$(".card_lgnd4").parent().parent().parent().toggle(this.show);
    });

    $('#lgnd5').click(function () {
        $(".card_lgnd5").toggle(this.checked);
        //$(".card_lgnd5").parent().parent().parent().toggle(this.show);
    });

    $('#lgnd6').click(function () {
        $(".card_lgnd6").toggle(this.checked);
        //$(".card_lgnd6").parent().parent().parent().toggle(this.show);
    });

    $('#lgnd7').click(function () {
        $(".card_lgnd7").toggle(this.checked);
        //$(".card_lgnd7").parent().parent().parent().toggle(this.show);
    });

    $('#lgnd8').click(function () {
        $(".card_lgnd8").toggle(this.checked);
        //$(".card_lgnd8").parent().parent().parent().toggle(this.show);
    });

    // dialog cta

    $('.btn-lgnd-inf').click(function () {
        $(".Scrim").toggle(this.show);
    });

    $('.btn-sys-close').click(function () {
        $(".Scrim").hide();
    });

    $('.dlg_bar').children().html("color");

});