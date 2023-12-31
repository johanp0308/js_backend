
const bdApi = "http://localhost:6880/registros"


const createData =  async(data)=>{
    data.value = (typeof data.value === "string") ? Number(data.value) : null;
    let config ={
        method: "POST",
        headers: {"content-type":"application/json"},
        body: JSON.stringify(data)
    };
    let res = await(await fetch(bdApi,config)).json();
    
    location.reload()
}

const deleteData = async(id)=>{
    let config={
        method:"DELETE",
        headers:{"content-type":"application/json"},
    }
    let res = (await fetch(bdApi+"/"+id,config)).json;
    location.reload();
}

const editData = async(id,data)=>{
    let config = {
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
    }
    let res = (await fetch(bdApi + "/" + id, config));
    location.reload();
}

const update = async(tabla)=>{
    let res = await(await fetch(bdApi)).json();
    res.map((e)=>{      
        tabla.insertAdjacentHTML("beforeend",`
        <tr>
            <td>${e.id}</td>
            <td>${e.value}</td>
            <td>${e.cash}</td>
            <td>
                <button class="btn-del btn btn-primary" id='delet-${e.id}'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-minus" viewBox="0 0 16 16">
                        <path d="M5.5 9a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                    </svg>
                </button> 
                <button class="btn-edit btn btn-primary" id='edit-${e.id}'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                    </svg>
                </button>
            </td>
        </tr>`);
    });
    const btnDel = document.querySelectorAll(".btn-del");
    const btnEdit = document.querySelectorAll(".btn-edit");
    let arrNod = [btnDel,btnEdit]
    return arrNod;
}

const totalData= async()=>{
    let trData = document.querySelector("#total-data")
    let res = await((await fetch(bdApi)).json());
    let total = 0;
    res.map((e)=>{
        (e.cash === 'ingreso') ? total += e.value : total -= e.value ;
    });
    
    trData.insertAdjacentHTML("beforeend",`${total}`);
}


export default{
    update,
    createData,
    deleteData,
    editData,
    totalData
}