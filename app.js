let btn = document.getElementById("btn")
let input =  document.getElementById("input")



function createLi(){
    let li =  document.createElement("li")
    let ul = document.querySelector("ul")
    li.textContent = input.value

    let deleteBtn =  document.createElement("button")
    deleteBtn.innerText = "Delete"
    deleteBtn.setAttribute("class","dbtn")
    li.appendChild(deleteBtn)
    ul.appendChild(li)
    input.value = ""

    deleteBtn.addEventListener("click",(e)=>{
      li.remove()
    });

}
btn.addEventListener("click",function(e){
    createLi()
})