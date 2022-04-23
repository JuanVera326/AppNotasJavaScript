const firtsNote1 = document.querySelector('#note1');
const secondNote2 = document.querySelector('#note2');
const name1 = document.querySelector('#name');
const color = document.querySelector('#color');
const send1 = document.querySelector('#send1');
const container2 = document.querySelector('#section2');
const notes = {note1:firtsNote1 , note2:secondNote2};
let finalNote;

send1.addEventListener('click',() => {takeData();});

function takeData(){
    return convert(notes);
}

function convert(notes){

    let note1 = parseFloat(notes.note1.value);
    let note2 = parseFloat(notes.note2.value);

    calculate1(note1,note2)

    return note1,note2;
}

function calculate1(note1,note2){

    let actualNote = (note1*0.3)+(note2*0.3);
    finalNote = (3.5-cal)/0.4;

    if (finalNote > 5) {
        container2.textContent = "No es posible conseguir el cuadro de honor "+ finalNote;
    }else{
        container2.textContent = "Si es posible alcanzar el cuadro de honor "+ finalNote;
    }

    console.log("Nota obtenida "+actualNote);
    console.log("Nota a Sacar "+finalNote);
    console.log("Nota final "+actualNote);

    return finalNote;
}
