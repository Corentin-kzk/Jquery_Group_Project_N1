var jqxhr = $.get("https://opensky-network.og/api/states/all?icao24=D304", function (data) {
    console.log(data);
})
    .done(function (data) {
        console.log(data);
    })
    .fail(function (error) {
        console.log(error);
    })
    .always(function () {
        alert("finished");
    });

    
// Data icao24 test :
// 39D304
// 39828E
// 40600D
// 406A59