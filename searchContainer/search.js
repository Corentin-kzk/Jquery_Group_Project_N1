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
  $(".search-data").fadegit Out(500);
  $(".close-btn").fadeOut(500);
  $(".search-data .line").removeClass("active");
  $("input").val("");
  $(".search-data label").fadeOut(500);
  $(".search-data span").fadeOut(500);
});

// Anub'Rekhan
// Grand Widow Faerlina
// Maexxna
// Noth the Plaguebringer
// Heigan the Unclean
// Loatheb
// Instructor Razuvious
// Gothik the Harvester
// The Four Horsemen
// Patchwerk – Patchwerk want to play!
// Grobbulus
// Gluth
// Thaddius
// Sapphiron
// Kel'Thuzad
const addFieldWithInputTypeHOF = () => {
  $(".search-data").append(
    `  <form action=""><select name="" id="searchSelect">
      <option value="null">Select a raid</option>
      <option value="Naxxramas">Naxxramas</option>
      <option value="Anub'Rekhan">Anub'Rekhan</option>
      <option value="Grand Widow Faerlinar">Grand Widow Faerlina</option>
      <option value="Grand Widow Faerlina">Grand Widow Faerlina</option>
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

const addFieldWithInputTypeCHAR = () => {
  $(".search-data").append(
    `  <form action=""><select name="" id="searchSelect">
    <option value="null">Select a region</option>
    <option value="affixes">Check the weekly MM+ Affixes</option>
    <option value="guild">Search a Guild</option>
    <option value="char">Search a Character</option>
    <option value="HOF">Raid Hall Of Fame</option>
  </select>
  <select name="" id="searchSelect">
    <option value="null">Select a serveur</option>
    <option value="affixes">Check the weekly MM+ Affixes</option>
    <option value="guild">Search a Guild</option>
    <option value="char">Search a Character</option>
    <option value="HOF">Raid Hall Of Fame</option>
  </select>
  <input type="text" placeholder="Guild Name">
  <input type="submit" value="submit">
  </form>`
  );
};

const addFieldWithInputTypeGUILD = () => {
  $(".search-data").append(
    `  <form action=""><select name="" id="searchSelect">
    <option value="null">Select a region</option>
    <option value="affixes">Check the weekly MM+ Affixes</option>
    <option value="guild">Search a Guild</option>
    <option value="char">Search a Character</option>
    <option value="HOF">Raid Hall Of Fame</option>
  </select>
  <select name="" id="searchSelect">
    <option value="null">Select a realm</option>
    <option value="affixes">Check the weekly MM+ Affixes</option>
    <option value="guild">Search a Guild</option>
    <option value="char">Search a Character</option>
    <option value="HOF">Raid Hall Of Fame</option>
  </select>
  <input type="text" placeholder="Guild Name">
  <input type="submit" value="submit">
  </form>`
  );
};

const addFieldWithInputTypeAFFIXS = () => {
  $(".search-data").append(
    `  <form action=""><select name="" id="searchSelect">
    <option value="null">Select a region</option>
    <option value="affixes">Check the weekly MM+ Affixes</option>
    <option value="guild">Search a Guild</option>
    <option value="char">Search a Character</option>
    <option value="HOF">Raid Hall Of Fame</option>
  </select>
  <input type="submit" value="submit">
  </form>`
  );
};

const RemoveForm = () => {
  $(".search-data form").remove();
};

$("#searchSelect").change(() => {
  switch ($("#searchSelect").val()) {
    case "guild":
      RemoveForm();
      addFieldWithInputTypeGUILD();
      break;
    case "HOF":
      RemoveForm();
      addFieldWithInputTypeHOF();
      break;
    case "char":
      RemoveForm();
      addFieldWithInputTypeCHAR();
      break;
    case "affixes":
      RemoveForm();
      addFieldWithInputTypeAFFIXS();
      break;
    default:
      alert("Field need to be on selected choice");
      break;
  }
});
