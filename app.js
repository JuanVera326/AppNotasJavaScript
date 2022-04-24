const body = document.body;
const firtsNote1 = document.querySelector('#note1');
const secondNote2 = document.querySelector('#note2');
const name1 = document.querySelector('#name');
const color = document.querySelector('#color');
const send1 = document.querySelector('#send1');
const send2 = document.querySelector('#send2');
const paint = document.querySelector('#paint');
const container2 = document.querySelector('#section2').style.background = '#ffffff';
const res = document.querySelector('#res');
const notes1 = {note1:firtsNote1 , note2:secondNote2};
let finalNote;

paint.addEventListener('click',()=>{

    if (color.value >= "#000000" && color.value <= "#777777") {
        body.style.color = '#ffffff';
    }else{
        body.style.color = '#000000';
    }
    body.style.background = color.value;    
});

send1.addEventListener('click',() => {
    if (firtsNote1.value == "" || secondNote2.value == "") {
        res.textContent = "Llene todos los campos!!!";
        res.style.color = '#ff9925';
    }else{
        takeData(bol = 1);
    }
});
send2.addEventListener('click',() => {
    if (firtsNote1.value == "" || secondNote2.value == "") {
        res.textContent = "Llene todos los campos!!!";
        res.style.color = '#ff9925';    
    }else{
        takeData(bol = 2);
    }
});

function takeData(bol){
    convert(notes1,bol);
    setTimeout(() => {empty()}, 5000);
    return;
}

function convert(notes1,bol){

    let note1 = parseFloat(notes1.note1.value);
    let note2 = parseFloat(notes1.note2.value);

    if ((note1 < 1.0 || note1 > 5.0)){
        res.textContent = `Solo valores entre 1.0 y 5.0!!`;
        res.style.color = '#ff9925';
    }else if ((note2 < 1 ||  note2 > 5)) {
        res.textContent = `Solo valores entre 1.0 y 5.0!!`; 
        res.style.color = '#ff9925';
    }else{
            if (bol == 1) {
                calculateHonor(note1,note2);
            }else if (bol == 2) {
                calculateAsignature(note1,note2);
            }
    }
    
    return note1,note2;
}

function calculateHonor(note1,note2){

    let actualNote = (note1*0.3)+(note2*0.3);
    finalNote = (4-actualNote)/0.4;

    if (finalNote > 5) {
        res.textContent = `${name1.value} No es posible conseguir el cuadro de honor, la nota a sacar la proxima vez para poder alcanzarlo  es: ${finalNote.toFixed(1)}`;
        res.style.color = '#ff2525';

    }else{
        res.textContent = `${name1.value} Si es posible alcanzar el cuadro de honor la nota a sacar la proxima vez como minimo es: ${finalNote.toFixed(1)}`;
        res.style.color = '#257cff';
    }

    return finalNote;
}

function calculateAsignature(note1,note2){

    let actualNote = (note1*0.3)+(note2*0.3);
    finalNote = (3.5-actualNote)/0.4;

    if (finalNote > 5) {
        res.textContent = `${name1.value} No es posible Ganar la materia, para ganar deberá sacar en la proxima nota: ${finalNote.toFixed(1)} Deberá recuperar.`;
        res.style.color = '#ff2525';
    }else{
        res.textContent = `${name1.value} Si es posible ganar la materia, debe sacar en la proxima nota: ${finalNote.toFixed(1)}`;
        res.style.color = '#3bff25';
    }
    
    return finalNote;
}
function empty() {
    res.textContent = "Esperando Datos..."; 
    if (body.style.color.value >= "#000000" && body.style.color.value <= "#777777") {
        res.style.color = '#ffffff';
    }else{
        res.style.color = '#000000';
    }
}