const data = {
    generos: ["Ação", "Comédia", "Drama","Anime"],
    plataformas: {
    "Ação": ["Netflix", "Amazon Prime"],
    "Comédia": ["Disney+", "YouCine"],
    "Drama": ["HBO Max", "Apple TV"],
    "Anime": ["AnimeFire","Crunchyroll"]
    },
    filmes: {
    "Netflix": ["Agente Infiltrado", "Vingança & Castigo"],
    "Amazon Prime": ["Guerra Civil", "O Dublê"],
    "Disney+": ["DivertidaMente", "Monstros S.A."],
    "YouCine": ["Tá Rindo do Quê?", "Partiu América"],
    "HBO Max": ["O Jogo da Imitação", "Moonlight"],
    "Apple TV": ["Palmer", "O Banqueiro"],
    "Crounchyroll": ["Soul Eater","Berserk"],
    "AnimeFire": ["Pokemon,","fire force"]
    }
    };
    
    document.addEventListener("DOMContentLoaded", () => {
    const generoSelect = document.getElementById("genero");
    const plataformaSelect = document.getElementById("plataforma");
    const filmeSelect = document.getElementById("filme");
    
    // Preencher o seletor de gêneros
    data.generos.forEach(genero => {
    let option = document.createElement("option");
    option.value = genero;
    option.textContent = genero;
    generoSelect.appendChild(option);
    });
    });
    
    function atualizarPlataformas() {
    const generoSelect = document.getElementById("genero");
    const plataformaSelect = document.getElementById("plataforma");
    const filmeSelect = document.getElementById("filme");
    
    // Limpar plataformas e filmes
    plataformaSelect.innerHTML = '<option value="">Selecione...</option>';
    filmeSelect.innerHTML = '<option value="">Selecione...</option>';
    filmeSelect.disabled = true;
    
    if (generoSelect.value === "") {
    plataformaSelect.disabled = true;
    return;
    }
    
    plataformaSelect.disabled = false;
    
    // Preencher plataformas
    const plataformas = data.plataformas[generoSelect.value];
    plataformas.forEach(plataforma => {
    let option = document.createElement("option");
    option.value = plataforma;
    option.textContent = plataforma;
    plataformaSelect.appendChild(option);
    });
    }
    
    function atualizarFilmes() {
    const plataformaSelect = document.getElementById("plataforma");
    const filmeSelect = document.getElementById("filme");
    
    // Limpar filmes
    filmeSelect.innerHTML = '<option value="">Selecione...</option>';
    
    if (plataformaSelect.value === "") {
    filmeSelect.disabled = true;
    return;
    }
    
    filmeSelect.disabled = false;
    
    // Preencher filmes
    const filmes = data.filmes[plataformaSelect.value];
    filmes.forEach(filme => {
    let option = document.createElement("option");
    option.value = filme;
    option.textContent = filme;
    filmeSelect.appendChild(option);
    });
    }