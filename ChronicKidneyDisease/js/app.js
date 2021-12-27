var per = 1
function Enviar(){
    var pergunta = document.getElementById('pergunta')
    var p = document.getElementById('resposta') 
    var texto = document.getElementById('texto')
    var ajd = document.getElementById('ajuda')
   switch(per){
       case 1: 
            if(pergunta.value != '')
            {
                if(pergunta.value <= 13) 
                {
                    pergunta.value = ''
                    per = 2;                
                    texto.innerText = "Qual o nivel de creatina sérica"  
                    p.innerText = ""      
                    ajd.innerHTML = "Referências de Medidas comum:" + "<br> " + "Mulheres: entre 0,5 a 1,1 mg/dL" +  '<br>' +
                     "Homens: entre 0,6 a 1,2 mg/dL"
                }                
                else
                {
                    pergunta.value = ''
                    per = 3;                
                    texto.innerText = "Qual o nivel de densidade da urina"
                    p.innerText = ""
                    ajd.innerHTML = "Referências de Medidas comum:" + "<br>" + "Intervalo entre 1.005 a 1.025"
                }
            }
            else
                p.innerText = "Campo vazio!"
            break
       case 2:   
            
            if(pergunta.value != '')
            {
                if(pergunta.value <= 1.10)
                {
                    pergunta.value = ''
                    per = 4
                    texto.innerText = "Qual o nivel de sódio"
                    p.innerText = ""
                    ajd.innerHTML = "Referências de Medidas comum:" + "<br>" + "135 a 145 mEq/L."
                }                              
                else
                {
                    p.innerText = "Doença crônica renal"  
                    pergunta.setAttribute("disabled", "disabled")                   
                }
                    
            }
            else
                p.innerText = "Campo vazio!"
            break
        case 3:
            
            if(pergunta.value != '')
            {
                if(pergunta.value <= 1.015)
                {                
                    p.innerText = "Doença crônica renal"
                    pergunta.setAttribute("disabled", "disabled")
                }                        
                else{
                    per = 5
                    texto.innerText = "Qual o nivel de albumina no sangue"
                    p.innerText = ""
                    ajd.innerHTML = "Referências de Medidas comum:" + "<br>" + "0 a 4 meses: 2 a 4.5 g/dL" + "<br>" + "4 meses a 16 anos: 3.2 a 5.2 g/dL" + "<br>" + "3.5 a 5 g/dL"

                }
            }
            else    
                p.innerText = "Campo vazio!"
          
            break
        case 4: 
        
        if(pergunta.value != '')
        {
            if(pergunta.value <= 139.00){
                pergunta.value = ''
                per = 6
                texto.innerText = "Quantidade de ureia no sangue"
                p.innerText = ""
                ajd.innerHTML = "Referências de medidas comum: <br>"  + "Para crianças até 1 ano: entre 9 e 40 mg/ dL <br>" +
                "Para crianças acima de 1 ano: entre 11 e 38 mg/ dL <br>" +
                "Para adultos: entre 13 e 43 mg/ dL."
            }
            else
            {
                pergunta.value = ''
                per = 7
                texto.innerText = "Qual o seu nivel de hemoglobina"
                p.innerText = ""
                ajd.innerHTML = "Referências de medidas comum: <br>" 
                + "Crianças de 2 a 6 anos: 11,5 a 13,5 g/dL <br>"
                + "Crianças de 6 a 12 anos: 11,5 a 15,5 g/dL;<br>"
                +"Homens: 14 a 18 g/dL;<br>"
                + "Mulheres: 12 a 16 g/dL;<br>"
                +"Grávidas: 11 g/dL"
            }
        }
        else
            p.innerText = "Campo vazio!"
           
            break
        case 5:
            if(pergunta.value != '')
            {
                if(pergunta.value <= 1.0)
            {
                pergunta.setAttribute("disabled", "disabled")
                p.innerText = "Não possui doença crônica renal"
            }                
            else
            {
                p.innerText = "Doença crônica renal"
                pergunta.setAttribute("disabled", "disabled")
            }    
            }
            else
                p.innerText = "Campo vazio!"
                     
            break
        case 6:
            if(pergunta.value != '')
            {
                if(pergunta.value <= 31.0)
                {
                    pergunta.setAttribute("disabled", "disabled")
                    p.innerText = "Doença crônica renal"
                }
                    
                else
                {
                    pergunta.value = ''
                    per = 8
                    texto.innerText = "Pressão sanguinea"
                    p.innerText = ""
                    ajd.innerHTML = "Referências de Medidas comum: <br> < 85 Normal <br> 85-89 Normal limítrofe <br> 90-99 Hipertensão leve (estágio 1) <br> 100-109 Hipertensão moderada (estágio 2) <br> Hipertensão leve (estágio 1) > 110 Hipertensão grave (estágio 3)" 
                }
            }
            else
                p.innerText = "Campo vazio!"
        
                
            break
        case 7:
            if(pergunta.value != '')
            {
                if(pergunta.value <= 11.30)
                {
                    p.innerText = "Doença crônica renal"
                    pergunta.setAttribute("disabled", "disabled")
                } 
                else
                {
                    pergunta.setAttribute("disabled", "disabled")
                    p.innerText = "Não possui doença crônica renal"
                }  
            }
            else
                p.innerText = "Campo vazio!"
          
            break
        case 8:
            if(pergunta.value != '')
            {
                if(pergunta.value <= 60.0)
                {
                    p.innerText = "Doença crônica renal"
                    pergunta.setAttribute("disabled", "disabled")
                } 
                else
                {
                    pergunta.setAttribute("disabled", "disabled")
                    p.innerText = "Não possui doença crônica renal"
                }  
            }
            else
                p.innerText = "Campo vazio!"          
            break
   }
}

function Reset(){
    window.location.href="index.html"
}