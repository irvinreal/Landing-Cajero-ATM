import{a as o,f as a}from"./formatName.DNQj8jzL.js";import{g as n}from"./getCookies.DpBZq_2r.js";const r=document.getElementById("saldo"),s=document.getElementById("name"),{token:m}=n();try{const e=await(await fetch("http://localhost:3000/auth/my-account",{headers:{Authorization:"Bearer "+m}})).json();s.innerHTML=`${o(e.client.name)}`,r.innerHTML=`$${a(parseFloat(e.amount))}`}catch(t){console.log(t)}
