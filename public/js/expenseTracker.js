
const button = document.getElementById("button");
const ul = document.getElementById("ul");

window.addEventListener('DOMContentLoaded',e=>{
    axios
        .get("/expence/get")
        .then(expenses=>{
            for(element of expenses.data ) {
                console.log(element);
                const expence = element.expense;
                const descrip = element.description;
                const category = element.category;
                const id = element.id;
                creatList(expence,descrip,category,id);
                
            };
        })
})



function creatList(Amount,Description,Category,id){
    const list=document.createElement('li');
    list.className="list-group-item";
    list.appendChild(document.createTextNode(Amount));
    list.appendChild(document.createTextNode(" - "));
    list.appendChild(document.createTextNode(Description));
    list.appendChild(document.createTextNode(" - "));
    list.appendChild(document.createTextNode(Category));
    list.appendChild(document.createTextNode("  "));
    

    const delFrom = document.createElement('form');
    const del = document.createElement('button');
    const edit = document.createElement('button');

    delFrom.action=`/expence/delete/${id}`;
    del.className = 'btn';
    edit.className ='btn';

    del.appendChild(document.createTextNode('delete'));
    edit.appendChild(document.createTextNode('edit'));

    list.appendChild(edit);
    delFrom.append(del);
    list.append(delFrom);

    ul.appendChild(list);
}