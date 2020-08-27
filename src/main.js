var state;
var district;

var party = 0;
var healthcare = 0;
var borders = 0;
var climate = 0;
var gun = 0;
var social = 0;
var Trump = 0;

var user = [
  party,
  healthcare,
  borders,
  climate,
  gun,
  social,
  Trump
];

var winners = [];
var winnersScores = [];
var percentage = [];

var states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire" ,
  "New Jersey" ,
  "New Mexico" ,
  "New York" ,
  "North Carolina" ,
  "North Dakota" ,
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island" ,
  "South Carolina" ,
  "South Dakota" ,
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
];
states[4] = [ // Califronia candidates
  "Gavin Newsom", // governor
  "John Cox",
  "Edward Hernandez", // Lt. governor
  " Kounalakis",
  "Dianne Feinstein", // Senate
  "Kevin de León",
  "Brad Sherman", // district 30
  "Mark Reed"
];
states[4][0] = [ // Gavin Newsom
  0, // score
  "democrat", // party
  1, // healthcare
  3, // borders
  5, // climate
  1, // gun
  5, // social
  10, // Trump
  "Gavin Newsom"
];
states[4][1] = [ // John Cox
  0, // score
  "republican",
  1,  // healthcare
  -3, // borders
  -1, // climate
  1,  // gun
  5,  // social
  -2, // Trump
  "John Cox"
];
states[4][2] = [ // Edward Hernandez
  0, // score
  "democrat",
  5, // healthcare
  5, // borders
  5, // climate
  4, // gun
  5, // social
  4, // Trump
  "Edward Hernandez"
];
states[4][3] =[ // Eleni Kounalakis
  0, // score
  "democrat",
  5, // healthcare
  5, // borders
  5, // climate
  4, // gun
  5, // social
  4, // Trump
  "Eleni Kounalakis"
];
states[4][4] =[ // Dianne Feinstein
  0, // score
  "democrat",
  5, // healthcare
  5, // borders
  5, // climate
  5, // gun
  4, // social
  2, // Trump
  "Dianne Feinstein"
];
states[4][5] =[ // Kevin de León
  0, // score
  "democrat",
  5, // healthcare
  5, // borders
  5, // climate
  5, // gun
  0, // social
  8, // Trump
  "Kevin de León"
];
states[4][6] =[ // Brad Sherman
  0, // score
  "democrat",
  5, // healthcare
  0, // borders
  5, // climate
  4, // gun
  4, // social
  2, // Trump
  "Brad Sherman"
];
states[4][7] =[ // Mark Reed
  0, // score
  "republican", // party
  3, // healthcare
  0, // borders
  0, // climate
  0, // gun
  5, // social
  -2,// Trump
  "Mark Reed"
];

onEvent("whatButton", "click", function() {
  setScreen("whatScreen");
});
onEvent("whyButton", "click", function() {
  setScreen("whyScreen");
});
onEvent("whoButton", "click", function() {
  setScreen("whoScreen");
});
onEvent("aboutButton", "click", function() {
  setScreen("aboutScreen");
});
onEvent("toHome1", "click", function() {
  setScreen("HomeScreen");
});
onEvent("toHome2", "click", function() {
  setScreen("HomeScreen");
});
onEvent("toHome3", "click", function() {
  setScreen("HomeScreen");
});
onEvent("toHome4", "click", function() {
  setScreen("HomeScreen");
});
onEvent("quizStart", "click", function() {
  setScreen("State");
});
onEvent("stateNext", "click", function() {
  setScreen("Question1");
});
onEvent("q1", "click", function() {
  setScreen("Question2");
});
onEvent("q2", "click", function() {
  setScreen("Question3");
});
onEvent("q3", "click", function() {
  setScreen("Question4");
});
onEvent("q4", "click", function() {
  setScreen("Question5");
});
onEvent("q5", "click", function() {
  setScreen("Question6");
});
onEvent("q6", "click", function() {
  setScreen("Question7");
});
onEvent("q7", "click", function() {
  setScreen("results");
});
onEvent("b0", "click", function() {
  setScreen("whoScreen");
});
onEvent("b1", "click", function() {
  setScreen("State");
});
onEvent("b2", "click", function() {
  setScreen("Question1");
});
onEvent("b3", "click", function() {
  setScreen("Question2");
});
onEvent("b4", "click", function() {
  setScreen("Question3");
});
onEvent("b5", "click", function() {
  setScreen("Question4");
});
onEvent("b6", "click", function() {
  setScreen("Question5");
});
onEvent("b7", "click", function() {
  setScreen("Question6");
});
onEvent("stateSelection", "click", function() {
  state = getText("stateSelection");
});
onEvent("districtSelection", "click", function() {
  district = getText("districtSelection");
});

onEvent("democratButton", "click", function() {
    user[0] = "democrat";
});
onEvent("republicanButton", "click", function() {
    user[0] = "republican";
});

onEvent("proOC", "click", function() {
    user[1] = 1;
});
onEvent("conOC", "click", function() {
    user[1] = -1;
});

onEvent("open", "click", function() {
    user[2] = 1;
});
onEvent("closed", "click", function() {
    user[2] = -1;
});

onEvent("proClimate", "click", function() {
    user[3] = 1;
});
onEvent("conClimate", "click", function() {
    user[3] = -1;
});

onEvent("proGun", "click", function() {
    user[4] = 1;
});
onEvent("conGun", "conTaxes", function() {
    user[4] = -1;
});

onEvent("proSocial", "conTaxes", function() {
    user[5] = 1;
});
onEvent("conSocial", "conTaxes", function() {
    user[5] = -1;
});

onEvent("proTrump", "click", function() {
    user[6] = 1;
});
onEvent("proTrump", "click", function() {
    user[6] = -1;
});

onEvent("q7", "click", function() {
  checkParty();
});

onEvent("toHomeFinal", "click", function() {
  setScreen("HomeScreen");
});

function checkParty() {
  for (var i = 0; i < 8; i++) {
    if (user[0] == states[4][i][1]) {
      states[4][i][0] += 5;
    }
  }
  checkAll();
}

function checkAll() {
  for (var i = 0; i < 8; i++) {
    for (var h = 0; h < 6; h++) {
      if (user[h] > 0 && states[4][i][h] > 0) {
        states[4][i][0] += states[4][i][h];
      } else if (user[h] < 0 && states[4][i][h] < 0) {
        states[4][i][0] += Math.abs(states[4][i][h]);
      }
    }
  }
  checkGovernor();
}

function checkGovernor() {
  if (states[4][0][0] > states [4][1][0]) {
    appendItem(winners, states[4][0][8]);
    appendItem(winnersScores, states[4][0][0]);

  } else {
    appendItem(winners, states[4][1][8]);
    appendItem(winnersScores, states[4][1][0]);
  }
  checkLtGovernor();
}

function checkLtGovernor() {
  if (states[4][2][0] > states [4][3][0]) {
    appendItem(winners, states[4][2][8]);
    appendItem(winnersScores, states[4][2][0]);
  } else {
    appendItem(winners, states[4][3][8]);
    appendItem(winnersScores, states[4][3][0]);
  }
  checkSenate();
}

function checkSenate() {
  if (states[4][4][0] > states [4][5][0]) {
    appendItem(winners, states[4][4][8]);
    appendItem(winnersScores, states[4][4][8]);
  } else {
    appendItem(winners, states[4][5][8]);
    appendItem(winnersScores, states[4][5][0]);
  }
  checkDistrict();
}

function checkDistrict() {
  if (states[4][6][0] > states [4][7][0]) {
    appendItem(winners, states[4][6][8]);
    appendItem(winnersScores, states[4][6][0]);
  } else {
    appendItem(winners, states[4][7][8]);
    appendItem(winnersScores, states[4][7][0]);
  }
  calculatePercentage();
  displayWinners();
}

function calculatePercentage() {
  for (var i = 0; i < 8; i++) {
    appendItem(percentage, ((states[4][i][0])/20)*100);
  }
}

function displayWinners() {
  setText("governorText", winners[0]);
  setText("ltGovernorText", winners[1]);
  setText("senateText", winners[2]);
  setText("houseOfRepsText", winners[3]);


  //console.log(states[4][0][8] + ": " + states[4][0][0]);
  //console.log(states[4][1][8] + ": " + states[4][1][0]);
  //console.log(states[4][2][8] + ": " + states[4][2][0]);
  //console.log(states[4][3][8] + ": " + states[4][3][0]);
  //console.log(states[4][4][8] + ": " + states[4][4][0]);
  //console.log(states[4][5][8] + ": " + states[4][5][0]);
  //console.log(states[4][6][8] + ": " + states[4][6][0]);
  //console.log(states[4][7][8] + ": " + states[4][7][0]);
}
