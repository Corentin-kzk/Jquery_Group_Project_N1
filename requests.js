var jqxhr = $.get("https://raider.io/api/v1/raiding/hall-of-fame?raid=fated-sepulcher-of-the-first-ones&difficulty=mythic&region=eu", function (data) {
    console.log(data);
})
    .done(function (data) {
        console.log(data);
    })
    .fail(function (error) {
        console.log(error);
    })



    //Exemple Guildes pour recherche:
    //Jetzt Gehts Los


      

// Data icao24 test :
// 39D304
// 39828E
// 40600D
// 406A59