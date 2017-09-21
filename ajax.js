$( document ).ready(function() {

$(document).ready(function () {
    $('button1').click(function () {
        $.get("ajax1.html", success);
    });

    function success(data) {
        $('#content').html(data);
    }
});

})

// 4


// 3 Дана страница с товарами product.html. На ней по загрузке расположено 12 товаров по 3 в ряд.
// Сделайте так, чтобы при прокрутке страницы до самого низа аяксом подгружалось еще 12 товаров.
// Товары расположены на страницах ajax1.html, alax2.html и так далее. Как только страницы с товаром закончатся -
// страница product.html должна выдать сообщение об этом.


// 2  Дана страница index.html. В ней есть блок #content и N кнопок вне этого блока. Каждая кнопка привязана
// с своей странице - первая кнопка к ajax1.html, вторая к alax2.html и так далее. Сделайте так, чтобы по
// нажатию на любую кнопку в #content аяксом подгружалось содержимое соответствующей страницы.

/*
$(document).ready(function () {
    $('button').click(function () {
        $.get("ajax" + $(this).attr('data-ajax') + ".html", success);
    });

    function success() {
        $('#content').html('прошло');
    }
});
*/

// 1 Дана страница index.html. В ней есть блок #content и кнопка вне этого
// блока. Сделайте так, чтобы по нажатию на кнопку в #content аяксом подгружалось содержимое страницы ajax.html.
/*
$('#button1').on ('click', function (){
    $.ajax({
    url: 'ajax1.html',



    }).done(function(text) {
    $('#content').html(text);

        })
    })

    */

