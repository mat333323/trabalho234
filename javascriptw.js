
 function receber ()
 {
    document.getElementById("cod").value = localStorage.getItem("cod")
    document.getElementById("tele").value = localStorage.getItem("telefone")
    document.getElementById("cpf").value = localStorage.getItem("cpf")
    document.getElementById("cep").value = localStorage.getItem("cep")
    document.getElementById("cnpj").value = localStorage.getItem("cnpj")
    document.getElementById("end").value = localStorage.getItem("end")
    document.getElementById("nome").value = localStorage.getItem("nome")
    console.log(localStorage.getItem("end"))
    console.log(localStorage.getItem("nome"))
    console.log(localStorage.getItem("cnpj"))
    console.log(localStorage.getItem("cep"))
    console.log(localStorage.getItem("cpf"))
    console.log(localStorage.getItem("telefone"))
    console.log(localStorage.getItem("cod"))
 }

 document.addEventListener("DOMContentLoaded",receber)