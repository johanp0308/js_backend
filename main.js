import crud from "./modules/dataCRUD.js"

const myform = document.querySelector("form");
const dTable = document.querySelector("#data-table");


const crearBtns=()=>{
    btnsDele = document.querySelectorAll(".btn-del");
    btnsEdit = document.querySelectorAll(".btn-edit");
}

const asignarEvents=(element)=>{
    element.forEach((btn)=>{
        btn.addEventListener("click",(btn)=>{
            console.log(btn)
        })
    })
}

myform.addEventListener("submit",(e) => {
    e.preventDefault();
    crud.createData(e);
});

await addEventListener("DOMContentLoaded",(e)=>{
    e.preventDefault();
    let butons = btnsDele;
    crud.actulizarTable(dTable);
});

const btnsDele = 