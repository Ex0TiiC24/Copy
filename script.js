const btn = document.getElementById("btn")
const text = document.getElementById("text")


btn.addEventListener("click",()=>{
    text.select()
    text.setSelectionRange(0,99999)
    navigator.clipboard.writeText(text.value)
    btn.textContent="Copied"
    setTimeout(()=>{
        btn.textContent="cool"
    },3000)
})