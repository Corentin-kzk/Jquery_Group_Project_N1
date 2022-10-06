var jqxhr = $.get("https://opensky-network.org/api/states/all?time=1458564121&icao24=3c6444", function (data) {
    console.log(data);
})
    .done(function (data) {
        console.log(data);
    })
    .fail(function (error) {
        console.log(error);
    })


// Data icao24 test :
// 39D304
// 39828E
// 40600D
// 406A59