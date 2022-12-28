$(document).ready(function () {

    $('.msbx-ou').each(function (e) {
        var self = $(this);
        var field = self.find('.multiSelect_field');
        var fieldOption = field.find('option');
        var placeholder = field.attr('data-placeholder');

        field.hide().after(`<div class="multiSelect_dropdown"></div>
                            <span class="multiSelect_placeholder">` + placeholder + `</span>
                            <ul class="multiSelect_list"></ul>
                            <span class="multiSelect_arrow"></span>`);

        fieldOption.each(function (e) {
            $('.multiSelect_list').append(`<li class="multiSelect_option" data-value="` + $(this).val() + `">
                                                <a class="multiSelect_text">`+ $(this).text() + `</a>
                                              </li>`);
        });

        var dropdown = self.find('.multiSelect_dropdown');
        var list = self.find('.multiSelect_list');
        var option = self.find('.multiSelect_option');
        var optionText = self.find('.multiSelect_text');

        dropdown.attr('data-multiple', 'true');
        list.css('top', dropdown.height() + 5);

        option.click(function (e) {
            var self = $(this);
            e.stopPropagation();
            self.addClass('-selected');
            field.find('option:contains(' + self.children().text() + ')').prop('selected', true);
            dropdown.append(function (e) {
                return $('<span class="multiSelect_choice">' + self.children().text() + '<svg class="multiSelect_deselect -iconX"><use href="#iconX"></use></svg></span>').click(function (e) {
                    var self = $(this);
                    e.stopPropagation();
                    self.remove();
                    list.find('.multiSelect_option:contains(' + self.text() + ')').removeClass('-selected');
                    list.css('top', dropdown.height() + 5).find('.multiSelect_noselections').remove();
                    field.find('option:contains(' + self.text() + ')').prop('selected', false);
                    if (dropdown.children(':visible').length === 0) {
                        dropdown.removeClass('-hasValue');
                    }
                });
            }).addClass('-hasValue');
            list.css('top', dropdown.height() + 5);
            if (!option.not('.-selected').length) {
                list.append('<h5 class="multiSelect_noselections">No Selections</h5>');
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
        var field = self.find('.multiSelect_field');
        var fieldOption = field.find('option');
        var placeholder = field.attr('data-placeholder');

        field.hide().after(`<div class="multiSelect_dropdown"></div>
                            <span class="multiSelect_placeholder">` + placeholder + `</span>
                            <ul class="multiSelect_list"></ul>
                            <span class="multiSelect_arrow"></span>`);

        fieldOption.each(function (e) {
            $('.multiSelect_list').append(`<li class="multiSelect_option" data-value="` + $(this).val() + `">
                                                <a class="multiSelect_text">`+ $(this).text() + `</a>
                                              </li>`);
        });

        var dropdown = self.find('.multiSelect_dropdown');
        var list = self.find('.multiSelect_list');
        var option = self.find('.multiSelect_option');
        var optionText = self.find('.multiSelect_text');

        dropdown.attr('data-multiple', 'true');
        list.css('top', dropdown.height() + 5);

        option.click(function (e) {
            var self = $(this);
            e.stopPropagation();
            self.addClass('-selected');
            field.find('option:contains(' + self.children().text() + ')').prop('selected', true);
            dropdown.append(function (e) {
                return $('<span class="multiSelect_choice">' + self.children().text() + '<svg class="multiSelect_deselect -iconX"><use href="#iconX"></use></svg></span>').click(function (e) {
                    var self = $(this);
                    e.stopPropagation();
                    self.remove();
                    list.find('.multiSelect_option:contains(' + self.text() + ')').removeClass('-selected');
                    list.css('top', dropdown.height() + 5).find('.multiSelect_noselections').remove();
                    field.find('option:contains(' + self.text() + ')').prop('selected', false);
                    if (dropdown.children(':visible').length === 0) {
                        dropdown.removeClass('-hasValue');
                    }
                });
            }).addClass('-hasValue');
            list.css('top', dropdown.height() + 5);
            if (!option.not('.-selected').length) {
                list.append('<h5 class="multiSelect_noselections">No Selections</h5>');
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
        var field = self.find('.multiSelect_field');
        var fieldOption = field.find('option');
        var placeholder = field.attr('data-placeholder');

        field.hide().after(`<div class="multiSelect_dropdown"></div>
                            <span class="multiSelect_placeholder">` + placeholder + `</span>
                            <ul class="multiSelect_list"></ul>
                            <span class="multiSelect_arrow"></span>`);

        fieldOption.each(function (e) {
            $('.multiSelect_list').append(`<li class="multiSelect_option" data-value="` + $(this).val() + `">
                                                <a class="multiSelect_text">`+ $(this).text() + `</a>
                                              </li>`);
        });

        var dropdown = self.find('.multiSelect_dropdown');
        var list = self.find('.multiSelect_list');
        var option = self.find('.multiSelect_option');
        var optionText = self.find('.multiSelect_text');

        dropdown.attr('data-multiple', 'true');
        list.css('top', dropdown.height() + 5);

        option.click(function (e) {
            var self = $(this);
            e.stopPropagation();
            self.addClass('-selected');
            field.find('option:contains(' + self.children().text() + ')').prop('selected', true);
            dropdown.append(function (e) {
                return $('<span class="multiSelect_choice">' + self.children().text() + '<svg class="multiSelect_deselect -iconX"><use href="#iconX"></use></svg></span>').click(function (e) {
                    var self = $(this);
                    e.stopPropagation();
                    self.remove();
                    list.find('.multiSelect_option:contains(' + self.text() + ')').removeClass('-selected');
                    list.css('top', dropdown.height() + 5).find('.multiSelect_noselections').remove();
                    field.find('option:contains(' + self.text() + ')').prop('selected', false);
                    if (dropdown.children(':visible').length === 0) {
                        dropdown.removeClass('-hasValue');
                    }
                });
            }).addClass('-hasValue');
            list.css('top', dropdown.height() + 5);
            if (!option.not('.-selected').length) {
                list.append('<h5 class="multiSelect_noselections">No Selections</h5>');
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