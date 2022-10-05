const ApiResponse = {
  result: [
    {
      hex: "780695",
      reg_number: "B-5545",
      flag: "CN",
      lat: 28.397377,
      lng: 115.1008,
      alt: 7078,
      dir: 269,
      speed: 775,
      v_speed: -7.8,
      squawk: "0205",
      flight_number: "9429",
      flight_icao: "CSH9429",
      flight_iata: "FM9429",
      dep_icao: "ZSPD",
      dep_iata: "PVG",
      arr_icao: "ZGHY",
      arr_iata: "HNY",
      airline_icao: "CSH",
      airline_iata: "FM",
      aircraft_icao: "B738",
      updated: 1626153069,
      status: "en-route",
    },
    {
      hex: "780695",
      reg_number: "B-5545",
      flag: "CN",
      lat: 28.397377,
      lng: 115.1008,
      alt: 7078,
      dir: 269,
      speed: 775,
      v_speed: -7.8,
      squawk: "0205",
      flight_number: "9429",
      flight_icao: "CSH9429",
      flight_iata: "FM9429",
      dep_icao: "ZSPD",
      dep_iata: "PVG",
      arr_icao: "ZGHY",
      arr_iata: "HNY",
      airline_icao: "CSH",
      airline_iata: "FM",
      aircraft_icao: "B738",
      updated: 1626153069,
      status: "en-route",
    },
    {
      hex: "780695",
      reg_number: "B-5545",
      flag: "CN",
      lat: 28.397377,
      lng: 115.1008,
      alt: 7078,
      dir: 269,
      speed: 775,
      v_speed: -7.8,
      squawk: "0205",
      flight_number: "9429",
      flight_icao: "CSH9429",
      flight_iata: "FM9429",
      dep_icao: "ZSPD",
      dep_iata: "PVG",
      arr_icao: "ZGHY",
      arr_iata: "HNY",
      airline_icao: "CSH",
      airline_iata: "FM",
      aircraft_icao: "B738",
      updated: 1626153069,
      status: "en-route",
    },
    {
      hex: "780695",
      reg_number: "B-5545",
      flag: "CN",
      lat: 28.397377,
      lng: 115.1008,
      alt: 7078,
      dir: 269,
      speed: 775,
      v_speed: -7.8,
      squawk: "0205",
      flight_number: "9429",
      flight_icao: "CSH9429",
      flight_iata: "FM9429",
      dep_icao: "ZSPD",
      dep_iata: "PVG",
      arr_icao: "ZGHY",
      arr_iata: "HNY",
      airline_icao: "CSH",
      airline_iata: "FM",
      aircraft_icao: "B738",
      updated: 1626153069,
      status: "en-route",
    },
  ],
};

$(document).ready(() => {
  let TableDinamicString;
  $.each(ApiResponse.result, (index, flyInformations) => {
    TableDinamicString += MakeDynamicalTable(index, flyInformations);
  });

  $("#tbody").append(TableDinamicString);
});

const MakeDynamicalTable = (id, flyInformations) => {
  return `<tr id='${id}'>
    <td class="text-center">${flyInformations.dep_iata}</td>
    <td class="text-center">${flyInformations.status}</td>
    <td class="text-center">${flyInformations.flight_number}</td>
    <td class="text-center">${flyInformations.arr_iata}</td>
    </tr>`;
};
