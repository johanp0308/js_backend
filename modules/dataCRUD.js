
const bdApi = "https://6509d04cf6553137159c10aa.mockapi.io/tabla"

const createData =  async(e)=>{
    let data = Object.fromEntries(new FormData(e.target));
    data.valor = (typeof data.valor === "string") ? Number(data.valor) : null;
    let config ={
        method: "POST",
        headers: {"content-type":"application/json"},
        body: JSON.stringify(data)
    };
    console.log(data);
    let res = await(await fetch(bdApi,config)).json();
}

const deleteData = async(e)=>{

}

const actulizarTable = async(tabla)=>{
    let res = await(await fetch(bdApi)).json();
    res.map((e)=>{
        tabla.insertAdjacementHTML("beforeend",`<tr> <td>${res.id}</td><td>${res.valor}</td><td>${res.caja}</td> </tr>`);
    });
}

export default{
    actulizarTable,
    createData,
}
