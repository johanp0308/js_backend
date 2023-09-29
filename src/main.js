import crud from "./modules/dataCRUD.js"

const d = document
const $ = (e) => d.querySelector(e)


const myform = $(".addForm");
const dTable = $("#data-table");
const dialog = $("#dialog-edit");
const formedit = $(".edit-form");

myform.addEventListener("submit",(e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    crud.createData(data);
});


addEventListener("DOMContentLoaded",(e)=>{
    e.preventDefault();
    let promis = crud.update(dTable);
    let btnss= promis.then((result)=>{
        result[0].forEach((element)=>{
            element.addEventListener("click",()=>{
                let str = element.id.split("-");
                let idEnter = Number(str[1]);
                crud.deleteData(idEnter);
            })
        });
        result[1].forEach((element)=>{
            element.addEventListener("click",()=>{
                dialog.showModal();
                formedit.addEventListener("submit",(e)=>{
                    e.preventDefault();
                    let str = element.id.split("-");
                    let idEnter = Number(str[1]);
                    let data = Object.fromEntries(new FormData(e.target));
                    data.valor = (typeof data.valor === "string")? Number(data.valor) : null;
                    crud.editData(idEnter,data);
                    dialog.close();
                });
            });
        });
    })
    crud.totalData();
});