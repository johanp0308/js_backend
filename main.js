import crud from "./modules/dataCRUD.js"


const myform = document.querySelector(".addForm");
const dTable = document.querySelector("#data-table");
const dialog = document.querySelector("#dialog-edit");
const formedit = document.querySelector(".edit-form");

console.log(dialog);

myform.addEventListener("submit",(e) => {
    e.preventDefault();
    crud.createData(e);
});

formedit.addEventListener("submit",(e)=>{
    e.preventDefault();
    let data = 
    crud.editData()
});



addEventListener("DOMContentLoaded",(e)=>{
    e.preventDefault();
    let promis = crud.actulizarTable(dTable);
    let btnss= promis.then((result)=>{
        result[0].forEach((element)=>{
            element.addEventListener("click",()=>crud.deleteData(element.id))
        });
        result[1].forEach((element)=>{
            element.addEventListener("click",()=>{
                dialog.showModal();
            });
        });
    })
});