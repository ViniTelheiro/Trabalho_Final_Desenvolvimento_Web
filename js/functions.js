window.alert('esse site foi feito para o uma disciplina da faculdade, portanto essa empresa é ficticia.')

function show(content){
    let contents = ['quem_somos','produtos']
    for(let i = 0; i<contents.length; i++){
        document.getElementById(contents[i]).style.display = 'none'
        
    }
    document.getElementById(content).style.display = 'inline-block'
}

function show_list(content){
    document.getElementById(content).style.display = 'inline-block'
    if (content=='Pf'){
        document.getElementById('Img_pf').style.backgroundColor = 'rgb(34, 34, 34)'
    }
    if(content=='Pj'){
        document.getElementById('Img_pj').style.backgroundColor = 'rgb(34, 34, 34)'
        document.getElementById('Img_pj').style.filter = 'brightness(20%)'
    }

}

function hiden_list(content){
    document.getElementById(content).style.display = 'none'
    if(content=='Pf') {
        document.getElementById('Img_pf').style.backgroundColor = 'whitesmoke'
    }
    if(content=='Pj') {
        document.getElementById('Img_pj').style.backgroundColor = 'whitesmoke'
        document.getElementById('Img_pj').style.filter = 'brightness(100%)'
    }   
}   