const firtsNote1 = document.querySelector('#note1');
const secondNote2 = document.querySelector('#note2');
const thirdNote3 = document.querySelector('#note3');
const name1 = document.querySelector('#name');
const color = document.querySelector('#color');
const send1 = document.querySelector('#send1');
const send2 = document.querySelector('#send2');
const send3 = document.querySelector('#send3');
const container2 = document.querySelector('#section2');
const notes1 = {note1:firtsNote1 , note2:secondNote2 , note3:thirdNote3};
let finalNote;

send1.addEventListener('click',() => {
    if (firtsNote1.value == "" || secondNote2.value == "") {
        setTimeout(() => {empty()}, 5000);
        container2.textContent = "Llene todos los campos!!!"    
    }else{
        takeData(bol = 1);
    }
});
send2.addEventListener('click',() => {
    if (firtsNote1.value == "" || secondNote2.value == "") {
        setTimeout(() => {empty()}, 5000);
        container2.textContent = "Llene todos los campos!!!"    
    }else{
        takeData(bol = 2);
    }
});
send3.addEventListener('click',() => {
    if (firtsNote1.value == "" || secondNote2.value == "" || thirdNote3.value == "") {
        setTimeout(() => {empty()}, 5000);
        container2.textContent = "Llene todos los campos !!!"    
    }else{
        takeData(bol = 3);
    }
});

function takeData(bol){
    setTimeout(() => {empty()}, 5000);
    convert(notes1,bol);
    return;
}

function convert(notes1,bol){
    let note1 = parseFloat(notes1.note1.value);
    let note2 = parseFloat(notes1.note2.value);
    let note3 = parseFloat(notes1.note3.value)

    if (bol == 1) {
        calculateHonor(note1,note2);
    }else if (bol ==2) {
        calculateAsignature(note1,note2);
    }else if (bol == 3){
        calculateGeneral(note1,note2,note3); 
    } 
    return note1,note2;
}

function calculateHonor(note1,note2){

    let actualNote = (note1*0.3)+(note2*0.3);
    finalNote = (4-actualNote)/0.4;

    if (finalNote > 5) {
        container2.textContent = "No es posible conseguir el cuadro de honor, la nota a sacar la proxima vez para poder alcanzarlo  es: "+ finalNote.toFixed(1);

    }else{
        container2.textContent = "Si es posible alcanzar el cuadro de honor la nota a sacar la proxima vez como minimo es: "+ finalNote.toFixed(1);

    }

    console.log("Nota a Sacar "+finalNote);
    console.log("Nota parcial "+actualNote);

    return finalNote;
}

function calculateAsignature(note1,note2){

    let actualNote = (note1*0.3)+(note2*0.3);
    finalNote = (3.5-actualNote)/0.4;

    if (finalNote > 5) {
        container2.textContent = "No es posible Ganar la materia, para ganar deberá sacar en la proxima nota: "+ finalNote.toFixed(1);

    }else{
        container2.textContent = "Si es posible ganar la materia, debe sacar en la proxima nota: "+ finalNote.toFixed(1);

    }

    console.log("Nota obtenida "+actualNote);
    console.log("Nota a Sacar "+finalNote);
    console.log("Nota final "+actualNote);

    return finalNote;
}

function calculateGeneral(note1,note2,note3){

    let actualNote = ((note1*0.3)+(note2*0.3)+(note3*0.4));

    if (actualNote >= 3.5 && actualNote < 4) {
        container2.textContent = "Gano!"+ actualNote.toFixed(1);
    }else if(actualNote <= 3.4 && actualNote > 2){
        container2.textContent = "No Gano pero puede recuperar: "+ actualNote.toFixed(1);
    }else if (actualNote > 4) {
        container2.textContent = "Felicidades! Recibe cuadro de honor: "+ actualNote.toFixed(1);
    }else{
        container2.textContent = "Perdio!: "+ actualNote.toFixed(1);
    }
    console.log(note1,note2,note3);
    console.log("Nota obtenida "+actualNote);
    // console.log("Nota a Sacar "+finalNote);
    console.log("Nota final "+actualNote);
    return finalNote;
}

function empty() {container2.textContent = "";}