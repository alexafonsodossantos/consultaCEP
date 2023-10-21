function teste(){
    let cep = document.getElementById('cep').value;

    let url = "https://brasilapi.com.br/api/cep/v1/" + cep;

    fetch(url)
    .then(response => response.json())
    .then((response)=>{
        document.querySelector('#rua').innerHTML = response.street
        document.querySelector('#bairro').innerHTML = response.neighborhood
        document.querySelector('#cidade').innerHTML = response.city
        document.querySelector('#estado').innerHTML = response.state
        document.querySelector('#resultado').style.display = "block"
        let endereco = `${response.street.replace(/ /g, '+')},+${response.city.replace(/ /g, '+')}/${response.state}`        
        const url = `https://www.google.com/maps/embed/v1/place?q=${endereco}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`
        document.querySelector('#mapa').src = url
    
    })

}

function limpar(){
    document.querySelector("#cep").value = "";
    document.querySelector("#resultado").style.display = "none";
}


