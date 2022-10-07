import './searchContainer/search.js'
const ApiResponse = {
  result: [
    // {
    //   hex: "780695",
    //   reg_number: "B-5545",
    //   flag: "CN",
    //   lat: 28.397377,
    //   lng: 115.1008,
    //   alt: 7078,
    //   dir: 269,
    //   speed: 775,
    //   v_speed: -7.8,
    //   squawk: "0205",
    //   flight_number: "9429",
    //   flight_icao: "CSH9429",
    //   flight_iata: "FM9429",
    //   dep_icao: "ZSPD",
    //   dep_iata: "PVG",
    //   arr_icao: "ZGHY",
    //   arr_iata: "HNY",
    //   airline_icao: "CSH",
    //   airline_iata: "FM",
    //   aircraft_icao: "B738",
    //   updated: 1626153069,
    //   status: "en-route",
    // },
    // {
    //   hex: "780695",
    //   reg_number: "B-5545",
    //   flag: "CN",
    //   lat: 28.397377,
    //   lng: 115.1008,
    //   alt: 7078,
    //   dir: 269,
    //   speed: 775,
    //   v_speed: -7.8,
    //   squawk: "0205",
    //   flight_number: "9429",
    //   flight_icao: "CSH9429",
    //   flight_iata: "FM9429",
    //   dep_icao: "ZSPD",
    //   dep_iata: "PVG",
    //   arr_icao: "ZGHY",
    //   arr_iata: "HNY",
    //   airline_icao: "CSH",
    //   airline_iata: "FM",
    //   aircraft_icao: "B738",
    //   updated: 1626153069,
    //   status: "landed",
    // },
    // {
    //   hex: "780695",
    //   reg_number: "B-5545",
    //   flag: "CN",
    //   lat: 28.397377,
    //   lng: 115.1008,
    //   alt: 7078,
    //   dir: 269,
    //   speed: 775,
    //   v_speed: -7.8,
    //   squawk: "0205",
    //   flight_number: "9429",
    //   flight_icao: "CSH9429",
    //   flight_iata: "FM9429",
    //   dep_icao: "ZSPD",
    //   dep_iata: "PVG",
    //   arr_icao: "ZGHY",
    //   arr_iata: "HNY",
    //   airline_icao: "CSH",
    //   airline_iata: "FM",
    //   aircraft_icao: "B738",
    //   updated: 1626153069,
    //   status: "en-route",
    // },
    // {
    //   hex: "780695",
    //   reg_number: "B-5545",
    //   flag: "CN",
    //   lat: 28.397377,
    //   lng: 115.1008,
    //   alt: 7078,
    //   dir: 269,
    //   speed: 775,
    //   v_speed: -7.8,
    //   squawk: "0205",
    //   flight_number: "9429",
    //   flight_icao: "CSH9429",
    //   flight_iata: "FM9429",
    //   dep_icao: "ZSPD",
    //   dep_iata: "PVG",
    //   arr_icao: "ZGHY",
    //   arr_iata: "HNY",
    //   airline_icao: "CSH",
    //   airline_iata: "FM",
    //   aircraft_icao: "B738",
    //   updated: 1626153069,
    //   status: "scheduled",
    // },
    {
      "name": "Eolran",
      "race": "Draenei",
      "class": "Shaman",
      "active_spec_name": "Restauration",
      "active_spec_role": "HEALING",
      "gender": "male",
      "faction": "alliance",
      "achievement_points": 10400,
      "honorable_kills": 0,
      "thumbnail_url": "https://render-eu.worldofwarcraft.com/character/hyjal/40/201635368-avatar.jpg?alt=wow/static/images/2d/avatar/11-0.jpg",
      "region": "eu",
      "realm": "Hyjal",
      "last_crawled_at": "2022-09-20T12:58:27.000Z",
      "profile_url": "https://raider.io/characters/eu/hyjal/Eolran",
      "profile_banner": "alliancebanner1"
  },
  {
      "name": "Uzphen",
      "race": "Draenei",
      "class": "Paladin",
      "active_spec_name": "Protection",
      "active_spec_role": "TANK",
      "gender": "male",
      "faction": "alliance",
      "achievement_points": 20435,
      "honorable_kills": 0,
      "thumbnail_url": "https://render-eu.worldofwarcraft.com/character/hyjal/33/196148001-avatar.jpg?alt=wow/static/images/2d/avatar/11-0.jpg",
      "region": "eu",
      "realm": "Hyjal",
      "last_crawled_at": "2022-09-29T02:28:46.000Z",
      "profile_url": "https://raider.io/characters/eu/hyjal/Uzphen",
      "profile_banner": "covenantbanner_kyrian"
  },
  {
      "name": "Lyarel",
      "race": "Void Elf",
      "class": "Rogue",
      "active_spec_name": "Subtlety",
      "active_spec_role": "DPS",
      "gender": "female",
      "faction": "alliance",
      "achievement_points": 10400,
      "honorable_kills": 0,
      "thumbnail_url": "https://render-eu.worldofwarcraft.com/character/kirin-tor/107/152409963-avatar.jpg?alt=wow/static/images/2d/avatar/29-1.jpg",
      "region": "eu",
      "realm": "Kirin Tor",
      "last_crawled_at": "2022-09-27T17:50:15.000Z",
      "profile_url": "https://raider.io/characters/eu/kirin-tor/Lyarel",
      "profile_banner": "alliancebanner1"
  },
  {
      "name": "Acat",
      "race": "Night Elf",
      "class": "Druid",
      "active_spec_name": "Guardian",
      "active_spec_role": "TANK",
      "gender": "female",
      "faction": "alliance",
      "achievement_points": 19240,
      "honorable_kills": 0,
      "thumbnail_url": "https://render-eu.worldofwarcraft.com/character/hyjal/152/184585624-avatar.jpg?alt=wow/static/images/2d/avatar/4-1.jpg",
      "region": "eu",
      "realm": "Hyjal",
      "last_crawled_at": "2022-08-20T19:28:15.000Z",
      "profile_url": "https://raider.io/characters/eu/hyjal/Acat",
      "profile_banner": "alliancebanner1"
  },
  {
      "name": "Jugheadd",
      "race": "Human",
      "class": "Mage",
      "active_spec_name": "Frost",
      "active_spec_role": "DPS",
      "gender": "male",
      "faction": "alliance",
      "achievement_points": 18955,
      "honorable_kills": 0,
      "thumbnail_url": "https://render-eu.worldofwarcraft.com/character/hyjal/190/164912318-avatar.jpg?alt=wow/static/images/2d/avatar/1-0.jpg",
      "region": "eu",
      "realm": "Hyjal",
      "last_crawled_at": "2022-10-05T09:04:34.000Z",
      "profile_url": "https://raider.io/characters/eu/hyjal/Jugheadd",
      "profile_banner": "alliancebanner1"
  },
  {
      "name": "Lynrael",
      "race": "Blood Elf",
      "class": "Mage",
      "active_spec_name": "Arcane",
      "active_spec_role": "DPS",
      "gender": "female",
      "faction": "horde",
      "achievement_points": 8535,
      "honorable_kills": 0,
      "thumbnail_url": "https://render-eu.worldofwarcraft.com/character/kirin-tor/255/153716479-avatar.jpg?alt=wow/static/images/2d/avatar/10-1.jpg",
      "region": "eu",
      "realm": "Kirin Tor",
      "last_crawled_at": "2020-12-13T02:32:59.000Z",
      "profile_url": "https://raider.io/characters/eu/kirin-tor/Lynrael",
      "profile_banner": "hordebanner1"
  },
  {
      "name": "Kelric",
      "race": "Void Elf",
      "class": "Priest",
      "active_spec_name": "Shadow",
      "active_spec_role": "DPS",
      "gender": "male",
      "faction": "alliance",
      "achievement_points": 10400,
      "honorable_kills": 0,
      "thumbnail_url": "https://render-eu.worldofwarcraft.com/character/kirin-tor/231/170374119-avatar.jpg?alt=wow/static/images/2d/avatar/29-0.jpg",
      "region": "eu",
      "realm": "Kirin Tor",
      "last_crawled_at": "2022-09-11T15:08:55.000Z",
      "profile_url": "https://raider.io/characters/eu/kirin-tor/Kelric",
      "profile_banner": "alliancebanner1"
  }
  ],
};

$(document).ready(() => {
  let TableDinamicString;
  $.each(ApiResponse.result, (index, userInformations) => {
    TableDinamicString += MakeDynamicalTable(index, userInformations);
  });

  $("#tbody").append(TableDinamicString);
});

const MakeDynamicalTable = (id, userInformations) => {
  let specIconeStatus;

  switch (userInformations.active_spec_role) {
    case "TANK":
      specIconeStatus = '<i class="fa-solid fa-shield-halved"></i>';
      break;
    case "HEALING":
      specIconeStatus = '<i class="fa-solid fa-kit-medical"></i>';
      break;
    default:
      specIconeStatus = '<i class="fa-solid fa-fire-flame-curved"></i>';
      break;
  }

  return `<tr id='${id}'>
    <td class="text-center"><img style="border-radius:50px;" src="${userInformations.thumbnail_url}"></td>
    <td class="text-center"><a target="_blank" href="${userInformations.profile_url}">${userInformations.name}</a></td>
    <td class="text-center">${userInformations.class}</td>
    <td class="text-center">${specIconeStatus}</td>
    </tr>`;
};
