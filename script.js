let players = [

{num:1,name:"Madelyn Scheibe",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:2,name:"Brilee Black",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:3,name:"Avery Brooks",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:5,name:"Macy Mahnken",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:10,name:"Marli Sisney",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:12,name:"Kennedy Keller",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:13,name:"Emma Bowman",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:14,name:"Maddie Coester",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:15,name:"Quinn Poland",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:21,name:"Regan Oplotnik",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:22,name:"Karsyn O'Rand",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:23,name:"Erika Boatman",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:24,name:"August Mooneyham",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:25,name:"Khloe Harryman",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:41,name:"Callie Trezona",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0},
{num:52,name:"Hemi Oney",pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0}

];

function render(){

let table="";
let select="";

players.forEach((p,i)=>{

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

select+=`<option value="${i}">#${p.num} ${p.name}</option>`;

});

document.getElementById("playerRows").innerHTML=table;
document.getElementById("playerSelect").innerHTML=select;

updateTotals();
updateLeaders();

}

function selected(){
return players[document.getElementById("playerSelect").value];
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

function updateTotals(){

let totals={pts:0,fgm:0,fga:0,threeM:0,threeA:0,ftm:0,fta:0,reb:0,ast:0,pf:0,to:0};

players.forEach(p=>{
totals.pts+=p.pts;
totals.fgm+=p.fgm;
totals.fga+=p.fga;
totals.threeM+=p.threeM;
totals.threeA+=p.threeA;
totals.ftm+=p.ftm;
totals.fta+=p.fta;
totals.reb+=p.reb;
totals.ast+=p.ast;
totals.pf+=p.pf;
totals.to+=p.to;
});

document.getElementById("tPTS").innerText=totals.pts;
document.getElementById("tFG").innerText=`${totals.fgm}-${totals.fga}`;
document.getElementById("t3FG").innerText=`${totals.threeM}-${totals.threeA}`;
document.getElementById("tFT").innerText=`${totals.ftm}-${totals.fta}`;
document.getElementById("tREB").innerText=totals.reb;
document.getElementById("tAST").innerText=totals.ast;
document.getElementById("tPF").innerText=totals.pf;
document.getElementById("tTO").innerText=totals.to;

}

function updateLeaders(){

let ptsLeader=players.reduce((a,b)=>a.pts>b.pts?a:b);
let rebLeader=players.reduce((a,b)=>a.reb>b.reb?a:b);
let astLeader=players.reduce((a,b)=>a.ast>b.ast?a:b);

document.getElementById("highPTS").innerText=
`#${ptsLeader.num} ${ptsLeader.name} (${ptsLeader.pts})`;

document.getElementById("highREB").innerText=
`#${rebLeader.num} ${rebLeader.name} (${rebLeader.reb})`;

document.getElementById("highAST").innerText=
`#${astLeader.num} ${astLeader.name} (${astLeader.ast})`;

}

render();
