const emptyPlayer = (num, name) => ({
  num,
  name,
  pts: 0,
  fgm: 0,
  fga: 0,
  threeM: 0,
  threeA: 0,
  ftm: 0,
  fta: 0,
  reb: 0,
  ast: 0,
  pf: 0,
  to: 0
});

let girardPlayers = [
  emptyPlayer(1, "Madelyn Scheibe"),
  emptyPlayer(2, "Brilee Black"),
  emptyPlayer(3, "Avery Brooks"),
  emptyPlayer(5, "Macy Mahnken"),
  emptyPlayer(10, "Marli Sisney"),
  emptyPlayer(12, "Kennedy Keller"),
  emptyPlayer(13, "Emma Bowman"),
  emptyPlayer(14, "Maddie Coester"),
  emptyPlayer(15, "Quinn Poland"),
  emptyPlayer(21, "Regan Oplotnik"),
  emptyPlayer(22, "Karsyn O'Rand"),
  emptyPlayer(23, "Erika Boatman"),
  emptyPlayer(24, "August Mooneyham"),
  emptyPlayer(25, "Khloe Harryman"),
  emptyPlayer(41, "Callie Trezona"),
  emptyPlayer(52, "Hemi Oney")
];

let osagePlayers = [
  emptyPlayer(5, "Addison Watson"),
  emptyPlayer(24, "Alaynah Dorsey"),
  emptyPlayer(12, "Bryleigh Vandervord"),
  emptyPlayer(11, "Brynna Burd"),
  emptyPlayer(44, "Colbie Capoun"),
  emptyPlayer(1, "Emory Speece"),
  emptyPlayer(22, "Harlie Tenbrink"),
  emptyPlayer(0, "Hayden Lieber"),
  emptyPlayer(40, "Izzy Lyda"),
  emptyPlayer(31, "Jayla Jenkins"),
  emptyPlayer(21, "Jewelia Kitselman"),
  emptyPlayer(23, "Kaelyn Boss"),
  emptyPlayer(55, "Kaiden Bosse"),
  emptyPlayer(3, "Kenna Garren"),
  emptyPlayer(13, "Lillian Lohmeyer"),
  emptyPlayer(24, "McKenzie Haid"),
  emptyPlayer(10, "Peyton Pitts"),
  emptyPlayer(3, "Reagan Farwell"),
  emptyPlayer(20, "Sawyer Serna"),
  emptyPlayer(25, "Sophia Brabb")
];

function render() {
  renderTeam(girardPlayers, "girardRows");
  renderTeam(osagePlayers, "osageRows");
  updatePlayerSelect();
  updateScoreboard();
  updateTeamHighs();
}

function renderTeam(team, elementId) {
  let table = "";

  team.forEach((p) => {
    const displayNum = p.num === 0 ? "-" : p.num;

    table += `
      <tr>
        <td>${displayNum}</td>
        <td>${p.name}</td>
        <td>${p.pts}</td>
        <td>${p.fgm}-${p.fga}</td>
        <td>${p.threeM}-${p.threeA}</td>
        <td>${p.ftm}-${p.fta}</td>
        <td>${p.reb}</td>
        <td>${p.ast}</td>
        <td>${p.pf}</td>
        <td>${p.to}</td>
      </tr>
    `;
  });

  document.getElementById(elementId).innerHTML = table;
}

function currentTeam() {
  const team = document.getElementById("teamSelect").value;
  return team === "girard" ? girardPlayers : osagePlayers;
}

function updatePlayerSelect() {
  const team = currentTeam();
  const playerSelect = document.getElementById("playerSelect");
  const currentValue = playerSelect.value;

  let options = "";

  team.forEach((p, i) => {
    const displayNum = p.num === 0 ? "-" : p.num;
    options += `<option value="${i}">#${displayNum} ${p.name}</option>`;
  });

  playerSelect.innerHTML = options;

  if (currentValue !== "" && team[currentValue]) {
    playerSelect.value = currentValue;
  }
}

function selected() {
  const team = currentTeam();
  const index = Number(document.getElementById("playerSelect").value);
  return team[index];
}

function add2() {
  const p = selected();
  p.pts += 2;
  p.fgm += 1;
  p.fga += 1;
  render();
}

function add3() {
  const p = selected();
  p.pts += 3;
  p.fgm += 1;
  p.fga += 1;
  p.threeM += 1;
  p.threeA += 1;
  render();
}

function fgMiss() {
  const p = selected();
  p.fga += 1;
  render();
}

function threeMiss() {
  const p = selected();
  p.threeA += 1;
  p.fga += 1;
  render();
}

function ftMake() {
  const p = selected();
  p.pts += 1;
  p.ftm += 1;
  p.fta += 1;
  render();
}

function ftMiss() {
  const p = selected();
  p.fta += 1;
  render();
}

function reb() {
  const p = selected();
  p.reb += 1;
  render();
}

function ast() {
  const p = selected();
  p.ast += 1;
  render();
}

function pf() {
  const p = selected();
  p.pf += 1;
  render();
}

function turnover() {
  const p = selected();
  p.to += 1;
  render();
}

function updateScoreboard() {
  const girardScore = girardPlayers.reduce((sum, p) => sum + p.pts, 0);
  const osageScore = osagePlayers.reduce((sum, p) => sum + p.pts, 0);

  document.getElementById("girardScore").innerText = girardScore;
  document.getElementById("osageScore").innerText = osageScore;
}

function updateTeamHighs() {
  updateLeadersForTeam(
    girardPlayers,
    "girardPTSLeader",
    "girardREBLeader",
    "girardASTLeader"
  );

  updateLeadersForTeam(
    osagePlayers,
    "osagePTSLeader",
    "osageREBLeader",
    "osageASTLeader"
  );
}

function updateLeadersForTeam(team, ptsId, rebId, astId) {
  const ptsLeader = team.reduce((a, b) => (b.pts > a.pts ? b : a), team[0]);
  const rebLeader = team.reduce((a, b) => (b.reb > a.reb ? b : a), team[0]);
  const astLeader = team.reduce((a, b) => (b.ast > a.ast ? b : a), team[0]);

  document.getElementById(ptsId).innerText =
    `${formatLeader(ptsLeader)} (${ptsLeader.pts})`;

  document.getElementById(rebId).innerText =
    `${formatLeader(rebLeader)} (${rebLeader.reb})`;

  document.getElementById(astId).innerText =
    `${formatLeader(astLeader)} (${astLeader.ast})`;
}

function formatLeader(player) {
  const displayNum = player.num === 0 ? "-" : player.num;
  return `#${displayNum} ${player.name}`;
}

render();
