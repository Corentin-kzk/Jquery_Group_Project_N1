//https://raider.io/api/v1/raiding/hall-of-fame?raid=nyalotha-the-waking-city&difficulty=mythic&region=eu
var hallOfFame = $.ajax("https://raider.io/api/v1/raiding/hall-of-fame?raid=" + $("#raid") + "&difficulty=" + $("#difficulty") + "&region=" + $("#region"), function () {
})
    .done(function (data) {
        console.log(data);
    })
    .fail(function (error) {
        console.log(error);
    })


//https://raider.io/api/v1/guilds/profile?region=eu&realm=Hyjal&name=Jetzt%20Gehts%20Los
var guildInfo = $.ajax("https://raider.io/api/v1/guilds/profile?region=" + $("#region") + "&realm=" + $("#realm") + "&name=" + $("#guildName"), function () {
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
//

//https://raider.io/api/v1/mythic-plus/affixes?region=eu&locale=fr
var mythicsAffixes = $.ajax("https://raider.io/api/v1/mythic-plus/affixes?region=" + $("#region") + "&locale=en", function () {
})
    .done(function (data) {
        console.log(data);
    })
    .fail(function (error) {
        console.log(error);
    })


//https://raider.io/api/v1/characters/profile?region=eu&realm=Hyjal&name=Eolran
var charInfo = $.ajax("https://raider.io/api/v1/characters/profile?region=" + $("#region") + "&realm=" + $("#realm") + "&name=" + $("#charName"), function () {
})
    .done(function (data) {
        console.log(data);
    })
    .fail(function (error) {
        console.log(error);
    })