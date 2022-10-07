$(".search-btn").click(function () {
  $(".wrapper").addClass("active");
  $(this).css("display", "none");
  $(".search-data").fadeIn(500);
  $(".close-btn").fadeIn(500);
  $(".search-data .line").addClass("active");
  setTimeout(function () {
    $("input").focus();
    $(".search-data label").fadeIn(500);
    $(".search-data span").fadeIn(500);
  }, 800);
});

$(".close-btn").click(function () {
  $(".wrapper").removeClass("active");
  $(".search-btn").fadeIn(800);
  $(".search-data").fadeOut(500);
  $(".close-btn").fadeOut(500);
  $(".search-data .line").removeClass("active");
  $("input").val("");
  $(".search-data label").fadeOut(500);
  $(".search-data span").fadeOut(500);
});

const addFieldWithInputTypeHOF = (nameRaid, difficulty, region) => {
  $(".search-data").append(
    `  <form action=""><select name="" id="searchSelect">
      <option value="null">Select a raid</option>
      <option value="affixes">Check the weekly MM+ Affixes</option>
      <option value="guild">Search a Guild</option>
      <option value="char">Search a Character</option>
      <option value="HOF">Raid Hall Of Fame</option>
    </select>
    <select name="" id="searchSelect">
      <option value="null">Select a difficulty</option>
      <option value="affixes">Check the weekly MM+ Affixes</option>
      <option value="guild">Search a Guild</option>
      <option value="char">Search a Character</option>
      <option value="HOF">Raid Hall Of Fame</option>
    </select>
    <select name="" id="searchSelect">
      <option value="null">Select a region</option>
      <option value="affixes">Check the weekly MM+ Affixes</option>
      <option value="guild">Search a Guild</option>
      <option value="char">Search a Character</option>
      <option value="HOF">Raid Hall Of Fame</option>
    </select>
    <input class="btn-search" type="submit" value="Search">
    </form>`
  );
};

// const addFieldWithInputTypeHOF = (nameRaid, difficulty, region) => {
//   $(".search-data").append(
//     ` <select name="" id="searchSelect">
//       <option value="null">Select a raid</option>
//       <option value="affixes">Check the weekly MM+ Affixes</option>
//       <option value="guild">Search a Guild</option>
//       <option value="char">Search a Character</option>
//       <option value="HOF">Raid Hall Of Fame</option>
//     </select>
//     <select name="" id="searchSelect">
//       <option value="null">Select a difficulty</option>
//       <option value="affixes">Check the weekly MM+ Affixes</option>
//       <option value="guild">Search a Guild</option>
//       <option value="char">Search a Character</option>
//       <option value="HOF">Raid Hall Of Fame</option>
//     </select>
//     <select name="" id="searchSelect">
//       <option value="null">Select a region</option>
//       <option value="affixes">Check the weekly MM+ Affixes</option>
//       <option value="guild">Search a Guild</option>
//       <option value="char">Search a Character</option>
//       <option value="HOF">Raid Hall Of Fame</option>
//     </select>`
//   );
// };

// const addFieldWithInputTypeHOF = (nameRaid, difficulty, region) => {
//   $(".search-data").append(
//     ` <select name="" id="searchSelect">
//       <option value="null">Select a raid</option>
//       <option value="affixes">Check the weekly MM+ Affixes</option>
//       <option value="guild">Search a Guild</option>
//       <option value="char">Search a Character</option>
//       <option value="HOF">Raid Hall Of Fame</option>
//     </select>
//     <select name="" id="searchSelect">
//       <option value="null">Select a difficulty</option>
//       <option value="affixes">Check the weekly MM+ Affixes</option>
//       <option value="guild">Search a Guild</option>
//       <option value="char">Search a Character</option>
//       <option value="HOF">Raid Hall Of Fame</option>
//     </select>
//     <select name="" id="searchSelect">
//       <option value="null">Select a region</option>
//       <option value="affixes">Check the weekly MM+ Affixes</option>
//       <option value="guild">Search a Guild</option>
//       <option value="char">Search a Character</option>
//       <option value="HOF">Raid Hall Of Fame</option>
//     </select>`
//   );
// };

// const addFieldWithInputTypeHOF = (nameRaid, difficulty, region) => {
//   $(".search-data").append(
//     ` <select name="" id="searchSelect">
//       <option value="null">Select a raid</option>
//       <option value="affixes">Check the weekly MM+ Affixes</option>
//       <option value="guild">Search a Guild</option>
//       <option value="char">Search a Character</option>
//       <option value="HOF">Raid Hall Of Fame</option>
//     </select>
//     <select name="" id="searchSelect">
//       <option value="null">Select a difficulty</option>
//       <option value="affixes">Check the weekly MM+ Affixes</option>
//       <option value="guild">Search a Guild</option>
//       <option value="char">Search a Character</option>
//       <option value="HOF">Raid Hall Of Fame</option>
//     </select>
//     <select name="" id="searchSelect">
//       <option value="null">Select a region</option>
//       <option value="affixes">Check the weekly MM+ Affixes</option>
//       <option value="guild">Search a Guild</option>
//       <option value="char">Search a Character</option>
//       <option value="HOF">Raid Hall Of Fame</option>
//     </select>`
//   );
// };

// const addFieldWithInputTypeHOF = (nameRaid, difficulty, region) => {
//   $(".search-data").append(
//     ` <select name="" id="searchSelect">
//       <option value="null">Select a raid</option>
//       <option value="affixes">Check the weekly MM+ Affixes</option>
//       <option value="guild">Search a Guild</option>
//       <option value="char">Search a Character</option>
//       <option value="HOF">Raid Hall Of Fame</option>
//     </select>
//     <select name="" id="searchSelect">
//       <option value="null">Select a difficulty</option>
//       <option value="affixes">Check the weekly MM+ Affixes</option>
//       <option value="guild">Search a Guild</option>
//       <option value="char">Search a Character</option>
//       <option value="HOF">Raid Hall Of Fame</option>
//     </select>
//     <select name="" id="searchSelect">
//       <option value="null">Select a region</option>
//       <option value="affixes">Check the weekly MM+ Affixes</option>
//       <option value="guild">Search a Guild</option>
//       <option value="char">Search a Character</option>
//       <option value="HOF">Raid Hall Of Fame</option>
//     </select>`
//   );
// };

$("#searchSelect").change(() => {
  switch ($("#searchSelect").val()) {
    case "guild":
      console.log("Guild Selected");
      break;
    case "HOF":
      addFieldWithInputTypeHOF();
      break;
    case "char":
      console.log("Character Selected");
      break;
    case "affixes":
      console.log("MM+ Affixes Selected");
      break;
    default:
      console.log("Other Selected");
      break;
  }
});
