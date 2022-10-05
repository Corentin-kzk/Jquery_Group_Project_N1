var jqxhr = $.get("https://opensky-network.org/api/states/all?time=1458564121&icao24=3c6444", function (data) {
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


    var fakeDataAirLabs = [{
        "hex": "780695",
        "reg_number": "B-5545",
        "flag": "CN",
        "lat": 28.397377,
        "lng": 115.1008,
        "alt": 7078,
        "dir": 269,
        "speed": 775,
        "v_speed": -7.8,
        "squawk": "0205",
        "flight_number": "9429",
        "flight_icao": "CSH9429",
        "flight_iata": "FM9429",
        "dep_icao": "ZSPD",
        "dep_iata": "PVG",
        "arr_icao": "ZGHY",
        "arr_iata": "HNY",
        "airline_icao": "CSH",
        "airline_iata": "FM",
        "aircraft_icao": "B738",
        "updated": 1626153069,
        "status": "en-route"
      },]


// Data icao24 test :
// 39D304
// 39828E
// 40600D
// 406A59


//RETURNED ARRAY DATA
// 0 icao24

// 1 callsign

// 2 origin_country

// 3 time_position

// 4 last_contact

// 5 longitude

// 6 latitude

// 7 baro_altitude

// 8 on_ground

// 9 velocity

// 10 true_track

// 11 vertical_rate

// 12 sensors

// 13 geo_altitude

// 14 squawk

// 15 spi

// 16 position_source

// 17 category