pro = document.querySelectorAll('.pro');
educate = document.getElementById('educate').style.display = "none";
for(Element of pro){
    Element.addEventListener('click',(e)=>{
        text = e.target.innerText;
        skill = document.getElementById('skill').style.display = "none"
        
        if(text == 'Skills'){
            if(skill == "none"){
                document.getElementById('skill').style.display = "block"  
                document.getElementById('educate').style.display = "none" 
                
                document.getElementById('skills').style.borderBottom = "2px solid blue"
                document.getElementById('education').style.borderBottom = "0px solid red"
             }
        }

        if(text == 'Education'){
            if(educate == "none"){
                console.log(educate)
                document.getElementById('educate').style.display = "block"
                document.getElementById('education').style.borderBottom = "2px solid blue"
                document.getElementById('skills').style.borderBottom = "0px solid red"
            }
        }
    })
}


menuBar = document.getElementById('col');

naving = document.getElementById('naving').style.display="none"
close = document.getElementById('close')
menuBar.addEventListener('click',(e)=>{
    if(naving == "none"){
        document.getElementById('naving').style.display = "block"
    }
})


close.addEventListener('click',(e)=>{
    document.getElementById('naving').style.display = "none"
})
