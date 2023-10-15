const owKey = "20c645ea99033495ecd545228f4aeb5f"

/* tecla enter iniciando a pesquisa */
document.addEventListener("keypress", function(e) {
  if (e.key ==="Enter"){
    const btn = document.querySelector(".btnSearch");
    btn.click();
  }
})

function showResult(dados){ /*Função que exibirá o resultado da pesquisa */
  console.log(dados)
  document.querySelector(".textCity").innerHTML = "Tempo em " + dados.name
  document.querySelector(".temp").innerHTML = "Agora: " + Math.floor(dados.main.temp) + "ºC"
  document.querySelector(".textWeather").innerHTML = dados.weather[0].description
  document.querySelector(".moisture").innerHTML = "Umidade: " + dados.main.humidity + "%"
  document.querySelector(".imgWeather").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function searchCity(city) {

  /* acessando o servidor */
  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${owKey}&lang=pt_br&units=metric`).then(response => response.json())

  showResult(dados) /*levando o resultado da pesquisa para a função que irá exibir o resultado */
}

function clickButton() { /* função de clique no botão */
  const city = document.querySelector(".inputCity").value

  searchCity(city) /* utilizando a função searchCity para pegar o valor do input e pesquisar na API */
}


