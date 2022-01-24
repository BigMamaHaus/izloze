const vardi=['Maigonis Maigulis','Stivs Gailis','Eina Huia','Valdis Kulis','Henrijs Suns'];
const Balvas=['Spa masāža','Ābols','Dzēriens','Lamborgini','NFT'];
const naudaKopa=1000000;//kopeja summa
let uzvaretajuSkaits=5;
let rindas= document.querySelector(`.rindas`);
rindas.innerHTML=` `;
for(let i=0;i<5;i++){
let rand= Math.random()*vardi.length;
rand= Math.floor(rand);//noapaļo uz leju
console.log(vardi[rand]);//izvada konsolē
}
rindas.innerHTML=
<tr>
    <td>i</td>
    <td>Uzvarētājs</td>
</tr>