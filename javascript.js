var endereço;

function mascara_telefone() {


    //máscara
    var tel_formatado = document.getElementById("tele").value
    if (tel_formatado[0] != "(") {
        if (tel_formatado[0] != undefined) {
            document.getElementById("tele").value = "(" + tel_formatado[0];
        }
    }

    if (tel_formatado[3] != ")") {
        if (tel_formatado[3] != undefined) {
            document.getElementById("tele").value = tel_formatado.slice(0, 3) + ")" + tel_formatado[3]
        }
    }
    if (tel_formatado[4] != " ") {
        if (tel_formatado[4] != undefined) {
            document.getElementById("tele").value = tel_formatado.slice(0, 4) + " " + tel_formatado[4]
        }
    }
    if (tel_formatado[6] != " ") {
        if (tel_formatado[6] != undefined) {
            document.getElementById("tele").value = tel_formatado.slice(0, 6) + " " + tel_formatado[6]
        }
    }
    if (tel_formatado[11] != "-") {
        if (tel_formatado[11] != undefined) {
            document.getElementById("tele").value = tel_formatado.slice(0, 11) + "-" + tel_formatado[11]
        }
    }
}

var cpf_formato
function mascara_cpf() {
    //máscara
    var cpf_formato = document.getElementById("cpf").value
    if (cpf_formato[3] != ".") {
        if (cpf_formato[3] != undefined) {
            document.getElementById("cpf").value = cpf_formato.slice(0, 3) + "." + cpf_formato[3]
        }
    }

    if (cpf_formato[7] != ".") {
        if (cpf_formato[7] != undefined) {
            document.getElementById("cpf").value = cpf_formato.slice(0, 7) + "." + cpf_formato[7]
        }
    }
    if (cpf_formato[11] != "-") {
        if (cpf_formato[11] != undefined) {
            document.getElementById("cpf").value = cpf_formato.slice(0, 11) + "-" + cpf_formato[11]
        }
    }





}

function mascara_cep() {
    //máscara
    var cep_formato = document.getElementById("cep").value
    if (cep_formato[2] != ".") {
        if (cep_formato[2] != undefined) {
            document.getElementById("cep").value = cep_formato.slice(0, 2) + "." + cep_formato[2]
        }
    }

    var cep_formato = document.getElementById("cep").value
    if (cep_formato[6] != "-") {
        if (cep_formato[6] != undefined) {
            document.getElementById("cep").value = cep_formato.slice(0, 6) + "-" + cep_formato[5]
        }
    }




}
function mascara_codigo() {
    //máscara
    var codigo_formato = document.getElementById("cod").value
    if (codigo_formato[2] != "_") {
        if (codigo_formato[2] != undefined) {
            document.getElementById("cod").value = codigo_formato.slice(0, 2) + "_" + codigo_formato[2]
        }
    }

    var cep_formato = document.getElementById("cod").value
    if (cep_formato[5] != "/") {
        if (cep_formato[5] != undefined) {
            document.getElementById("cod").value = codigo_formato.slice(0, 5) + "/" + codigo_formato[5]
        }
    }

    if (cep_formato[6] != "/") {
        if (cep_formato[6] != undefined) {
            document.getElementById("cod").value = codigo_formato.slice(0, 6) + "/" + codigo_formato[6]
        }
    }
    if (cep_formato[10] != "-") {
        if (cep_formato[10] != undefined) {
            document.getElementById("cod").value = codigo_formato.slice(0, 10) + "-" + codigo_formato[10]
        }
    }

    if (cep_formato[14] != ".") {
        if (cep_formato[14] != undefined) {
            document.getElementById("cod").value = codigo_formato.slice(0, 14) + "." + codigo_formato[14]
        }
    }


    if (cep_formato[15] != "9") {
        if (cep_formato[15] != undefined) {
            document.getElementById("cod").value = codigo_formato.slice(0, 15) + "9" + codigo_formato[15]
        }
    }
    if (cep_formato[16] != ".") {
        if (cep_formato[16] != undefined) {
            document.getElementById("cod").value = codigo_formato.slice(0, 16) + "." + codigo_formato[16]
        }
    }






}
function nome() {
    var nome2 = document.getElementById("nome").value

}
function end() {
     endereço = document.getElementById("end").value

}
function mascara_cnpj() {
    //máscara
    var cnpj_formato = document.getElementById("cnpj").value
    if (cnpj_formato[2] != ".") {
        if (cnpj_formato[2] != undefined) {
            document.getElementById("cnpj").value = cnpj_formato.slice(0, 2) + "." + cnpj_formato[2]
        }
    }

    var cnpj_formato = document.getElementById("cnpj").value
    if (cnpj_formato[6] != ".") {
        if (cnpj_formato[6] != undefined) {
            document.getElementById("cnpj").value = cnpj_formato.slice(0, 6) + "." + cnpj_formato[6]
        }
    }
    var cnpj_formato = document.getElementById("cnpj").value
    if (cnpj_formato[10] != "/") {
        if (cnpj_formato[10] != undefined) {
            document.getElementById("cnpj").value = cnpj_formato.slice(0, 10) + "/" + cnpj_formato[10]
        }
    }

    if (cnpj_formato[14] != "1") {
        if (cnpj_formato[14] != undefined) {
            document.getElementById("cnpj").value = cnpj_formato.slice(0, 14) + "1" + cnpj_formato[14]
        }
    }

    if (cnpj_formato[12] != "0") {
        if (cnpj_formato[12] != undefined) {
            document.getElementById("cnpj").value = cnpj_formato.slice(0, 12) + "0" + cnpj_formato[12]
        }
    }

    if (cnpj_formato[13] != "0") {
        if (cnpj_formato[13] != undefined) {
            document.getElementById("cnpj").value = cnpj_formato.slice(0, 13) + "0" + cnpj_formato[13]
        }
    }
    if (cnpj_formato[11] != "0") {
        if (cnpj_formato[11] != undefined) {
            document.getElementById("cnpj").value = cnpj_formato.slice(0, 11) + "0" + cnpj_formato[11]
        }
    }

    if (cnpj_formato[15] != "-") {
        if (cnpj_formato[15] != undefined) {
            document.getElementById("cnpj").value = cnpj_formato.slice(0, 15) + "-" + cnpj_formato[15]
            console.log(cnpj_formato)
        }
    }
}

function arm() {
    localStorage.setItem("end", endereço)
    localStorage.setItem("cnpj", cnpj_formato)
    localStorage.setItem("nome", nome2)

    localStorage.setItem("cod", codigo_formato)


    localStorage.setItem("cep", cep_formato)


    localStorage.setItem("cpf", cpf_formato)


    localStorage.setItem("telefone", tel_formatado)



}




document.getElementById("teste").addEventListener("click", arm)