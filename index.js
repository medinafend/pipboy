$(document).ready(function(){
    if (window.location.pathname.includes("inv.html")) {
            $(".secondnavbarstat").hide();
        }
        
    var weapons = [
        {   "name": "pistol44",
            "damage": 48,
            "fire_rate": 6,
            "range": 119,
            "accuracy": 66,
            "weight": 4.2,
            "value": 99
        },
        {   "name": "pistol10",
            "damage": 18,
            "fire_rate": 46,
            "range": 119,
            "accuracy": 61,
            "weight": 4.2,
            "value": 53
        },
        {   "name": "assault_rifle",
            "damage": 30,
            "fire_rate": 40,
            "range": 119,
            "accuracy": 72,
            "weight": 13.2,
            "value": 144
        }
    ];

    $('.item-list a').on('click', function(e){
        $('.item-list a').removeClass('active');
        $(e.currentTarget).addClass('active'); 
    });

    $('.item-list a').on('mouseenter', function(e){
        var currentItem = $(e.currentTarget).attr('class');

        for (var item in weapons) {
            if (weapons[item].name == currentItem) {
                console.log(weapons[item]);

                var container = $('.item-stats');
                container.find('.damage').html(weapons[item].damage);
                container.find('.fire_rate').html(weapons[item].fire_rate);
                container.find('.range').html(weapons[item].range);
                container.find('.accuracy').html(weapons[item].accuracy);
                container.find('.weight').html(weapons[item].weight);
                container.find('.value').html(weapons[item].value);
            }
        }
    });

    // Captura todas as abas principais
    $('.nav-tabs .nav-link').on('click', function(e) {
        var tabText = $(this).text().trim(); // Obtém o texto da aba clicada
        
        if (tabText === "INV") {
            $('.secondnavbarstat').remove(); // Remove completamente as sub-abas do DOM
        } else {
            // Recria as sub-abas apenas se elas não existirem
            if ($('.secondnavbarstat').length === 0) {
                $('.nav-tabs').after(`
                    <ul class="nav secondnavbarstat">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">STATUS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">PERCS</a>
                        </li>
                    </ul>
                `);
            }
        }
    });

});

$(document).ready(function () {
    var currentPage = window.location.pathname.split("/").pop(); // Obtém o nome do arquivo atual

    if (currentPage === "inv.html") {
        $(".secondnavbarstat").hide(); // Esconde as sub-abas quando em "INV"
    } else {
        $(".secondnavbarstat").show(); // Mostra as sub-abas nas outras páginas
    }

    // Se clicar em INV, as sub-abas desaparecem
    $(".nav-link").on("click", function () {
        var targetPage = $(this).parent("a").attr("href"); // Obtém o link do botão
        if (targetPage === "./inv.html") {
            $(".secondnavbarstat").hide();
        } else {
            $(".secondnavbarstat").show();
        }
    });
});
