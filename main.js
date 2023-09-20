import crud from "./modules/dataCRUD.js"

let myform = document.querySelector("form");
let dTable = document.querySelector("#data-table");

myform.addEventListener("submit",(e) => {
    e.preventDefault();
    crud.createData(e);
});


addEventListener("DOMContentLoaded",(e)=>{
    e.preventDefault();
    crud.actulizarTable(dTable);
});