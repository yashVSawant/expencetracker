
const button = document.getElementById("button");
const ul = document.getElementById("ul");
const amount = document.getElementById('amount');
const descrip = document.getElementById('description')
const category = document.getElementById('category')
const editInput = document.getElementById('hidden');
const IdInput = document.getElementById('hiddenId');

let edit=false;
const arrId = [];
window.addEventListener('DOMContentLoaded',e=>{
    axios
        .get("/expence/get")
        .then(expenses=>{
            for(element of expenses.data ) {
                const expence = element.expense;
                const descrip = element.description;
                const category = element.category;
                const id = element.id;
                creatList(expence,descrip,category,id);
                
            };
        })
})

ul.addEventListener('click',e=>{
    const id = e.target.parentNode.id;
    const li = e.target.parentNode;
    console.log(id);
    arrId[0]=id;
    if(e.target.classList.value == 'edit'){
        e.preventDefault()
        edit=true; 
        axios
        .get(`expence/get/${arrId[0]}`)
        .then(edit=>{
            const values = edit.data;
            amount.value = values.expense;
            descrip.value = values.description;
            category.value = values.category;
            ul.removeChild(li)
            editInput.value='edit';
            IdInput.value=arrId[0];
        }) 
     }
//else{
//         axios
//         .get(`/expence/delete/${arrId[0]}`)
//     }
    
})



function creatList(A,D,C,id){
    const list=document.createElement('li');
    list.className="list-group-item";
    list.id=id;
    list.appendChild(document.createTextNode(A));
    list.appendChild(document.createTextNode(" - "));
    list.appendChild(document.createTextNode(D));
    list.appendChild(document.createTextNode(" - "));
    list.appendChild(document.createTextNode(C));
    list.appendChild(document.createTextNode("  "));
    
    const expence = document.createElement('input');
    const descrip = document.createElement('input');
    const category = document.createElement('input');
    expence.type='hidden';
    descrip.type='hidden';
    category.type='hidden';
    expence.value=A;
    expence.name='expence'
    descrip.value=D;
    descrip.name='description'
    category.value=C;
    category.name='category'
    const delFrom = document.createElement('form');
   
    const del = document.createElement('button');
    const edit = document.createElement('button');

    delFrom.action=`/expence/delete/${id}`;
   
    del.className = 'delete';
    edit.className ='edit';
    del.id=id;
    edit.id=id;

    del.appendChild(document.createTextNode('delete'));
    edit.appendChild(document.createTextNode('edit'));

    list.appendChild(edit);
    delFrom.append(del);
    list.append(delFrom);
    
    ul.appendChild(list);
}