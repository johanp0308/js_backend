const create =  async(e)=>{
    let data = Object.fromEntries(new FormData(e.target));
    data.valor = (typeof data.valor === "string") ? Number(data.valor) : null;
    let config ={
        method: "POST",
        header: {"content-type":"application/json"},
        body: JSON.stringify(data)
    };
    let res = await(await fetch("https://6509d04cf6553137159c10aa.mockapi.io/tabla",config)).json();

}