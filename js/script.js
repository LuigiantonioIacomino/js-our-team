let arrayOggetti=[
    {
        name:"Wayne Barnett",
        role:"Founder & CEO",
        image:"wayne-barnett-founder-ceo.jpg"
    },
    {
        name:"Angela Caroll",
        role:"Chief Editor",
        image:"angela-caroll-chief-editor.jpg"
    },
    {
        name:"Walter Gordon",
        role:"Office Manager",
        image:"walter-gordon-office-manager.jpg"
    },
    {
        name:"Angela Lopez",
        role:"Social Media Manager",
        image:"angela-lopez-social-media-manager.jpg"
    },
    {
        name:"Scott Estrada",
        role:"Developer",
        image:"scott-estrada-developer.jpg"
    },
    {
        name:"Barbara Ramos",
        role:"Graphic Designer",
        image:"barbara-ramos-graphic-designer.jpg"
    }
];


let string="";

for (let i = 0; i < arrayOggetti.length; i++) {
     string+="informazioni del "+(i+1)+"° membro:"+"<br>"+ "nome:"+arrayOggetti[i].name+ "<br>"+ "ruolo: "+arrayOggetti[i].role+"<br>"+"immagine: "+arrayOggetti[i].image+"<br><br>";
    
}

document.getElementById('container').innerHTML=string;


let arrayClassi=document.getElementsByClassName('foto');

for (let j = 0; j < arrayClassi.length; j++) {
    arrayClassi[j].src="img/"+arrayOggetti[j].image;
    
}