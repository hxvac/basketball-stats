let girardPlayers = [

{num:1,name:"Madelyn Scheibe",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:2,name:"Brilee Black",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:3,name:"Avery Brooks",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:5,name:"Macy Mahnken",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:10,name:"Marli Sisney",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:12,name:"Kennedy Keller",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:13,name:"Emma Bowman",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:14,name:"Maddie Coester",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:15,name:"Quinn Poland",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:21,name:"Regan Oplotnik",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0}

];

let osagePlayers = [

{num:5,name:"Addison Watson",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:24,name:"Alaynah Dorsey",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:12,name:"Bryleigh Vandervord",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:11,name:"Brynna Burd",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:44,name:"Colbie Capoun",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:1,name:"Emory Speece",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:22,name:"Harlie Tenbrink",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:40,name:"Izzy Lyda",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0}

];

function render(){

renderTeam(girardPlayers,"girardRows");
renderTeam(osagePlayers,"osageRows");

updatePlayerSelect();
updateScoreboard();

}

function renderTeam(team,element){

let table="";

team.forEach(p=>{

table+=`
<tr>
<td>${p.num}</td>
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

document.getElementById(element).innerHTML=table;

}

function updatePlayerSelect(){

let team=currentTeam();

let select="";

team.forEach((p,i)=>{

select+=`<option value="${i}">#${p.num} ${p.name}</option>`;

});

document.getElementById("playerSelect").innerHTML=select;

}

function currentTeam(){

let team=document.getElementById("teamSelect").value;

return team==="girard"?girardPlayers:osagePlayers;

}

function selected(){

let team=currentTeam();
let index=document.getElementById("playerSelect").value;

return team[index];

}

function add2(){

let p=selected();

p.pts+=2;
p.fgm+=1;
p.fga+=1;

render();

}

function add3(){

let p=selected();

p.pts+=3;
p.fgm+=1;
p.fga+=1;
p.threeM+=1;
p.threeA+=1;

render();

}

function fgMiss(){

selected().fga+=1;

render();

}

function threeMiss(){

selected().threeA+=1;
selected().fga+=1;

render();

}

function ftMake(){

let p=selected();

p.pts+=1;
p.ftm+=1;
p.fta+=1;

render();

}

function ftMiss(){

selected().fta+=1;

render();

}

function reb(){

selected().reb+=1;

render();

}

function ast(){

selected().ast+=1;

render();

}

function pf(){

selected().pf+=1;

render();

}

function turnover(){

selected().to+=1;

render();

}

function updateScoreboard(){

let girardScore=girardPlayers.reduce((sum,p)=>sum+p.pts,0);
let osageScore=osagePlayers.reduce((sum,p)=>sum+p.pts,0);

document.getElementById("girardScore").innerText=girardScore;
document.getElementById("osageScore").innerText=osageScore;

}

render();
