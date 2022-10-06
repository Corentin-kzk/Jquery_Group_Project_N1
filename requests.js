var hallOfFame = $.get("https://raider.io/api/v1/raiding/hall-of-fame?raid=" + $("#raid") + "&difficulty=" + $("#difficulty") + "&region=" + $("#region"), function () {
})
    .done(function (data) {
        console.log(data);
    })
    .fail(function (error) {
        console.log(error);
    })


var Guild = $.get("https://raider.io/api/v1/guilds/profile?region=" + $("#region") + "&realm=" + $("#realm") + "&name=" + $("#guildName"), function () {
})
    .done(function (data) {
        console.log(data);
    })
    .fail(function (error) {
        console.log(error);
    })

//Exemple Guildes pour recherche: Code pour les espaces : %20
//Jetzt Gehts Los
//Les tortues du bosquet
//La Compagnie du Corbeau
//La Rive Noire