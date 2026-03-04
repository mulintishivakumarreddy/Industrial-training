
var mytodos=["play cricket"]

function addtodo(){
    var t=document.getElementById("input").value
    mytodos.push(t)
    document.getElementById("input").value=""
    genUI()
}
function deltodo(i){
    mytodos.splice(i, 1)
    genUI()
}
function genUI(){
    var  todo=<div>
            <input type="text" id="input"/>
            <button onClick={()=>{addtodo()}}>ADD TODO</button>
            <ul>{mytodos.map((t,i)=>{
               return <li>{t}<button onClick={() => {deltodo(i)}}>Delete</button> </li>
            })}</ul>
</div>
    ReactDOM.render(todo,document.getElementById("root"))

    // ReactDOM.render(mytodos,document.getElementById("root"))
}
genUI();