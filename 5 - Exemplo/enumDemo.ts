
function exemploEnum() {
    enum campeoesCampeonatoBrasileiro {
        Vasco,
        Flamengo,
        Botafogo,
        Fluminense
    };

    let titulos = campeoesCampeonatoBrasileiro.Flamengo


    switch(titulos) {
        case campeoesCampeonatoBrasileiro.Vasco:
            console.log("Vasco: Títulos: 4 | Temporadas: 1974, 1989, 1997 e 2000");
            break;
        case campeoesCampeonatoBrasileiro.Flamengo:
            console.log("Flamengo: Títulos: 5 | Temporadas: 1980, 1982, 1983 e 2009");
            break;
        case campeoesCampeonatoBrasileiro.Botafogo:
            console.log("Botafogo: Títulos: 2 | Temporadas: 1968 e 1995");
            break;
        case campeoesCampeonatoBrasileiro.Fluminense:
            console.log("Fluminense: Títulos: 4 | Temporadas: 1970, 1984, 2010 e 2012");
            break;
    }
}

exemploEnum();