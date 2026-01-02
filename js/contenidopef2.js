 lucide.createIcons();
        
        const allMoviesSource = [
            { title: "Mortal", rating:5.9, year: 2020, duration: "1h 44m", type: 'Película', image: "https://www.poseidonhd2.co/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fb3QfqB5hYIBaguFxKliDabRIciU.jpg&w=256&q=75", genres: ['accion', 'scifi','destacada', ], description: "Un joven descubre que tiene poderes divinos como los que aparecen en las antiguas historias de la mitología noruega.", cast: "Nat Wolff, Iben Akerlie, Per Frisch, Priyanka Bose.", inMyList: false, videoUrl: "https://g9r6.com/9sed/y4hlpzsxfpa2", dateAdded: '2025-12-27' },
            { title: "El gran diluvio", rating:5.4, year: 2025, duration: "1h 49m", type: 'Película', image: "https://image.tmdb.org/t/p/w342//qIzSyT2AmDxkcQ0zOAeTbtZR9EQ.jpg", genres: ['accion', 'aventura', 'scifi','destacada', ], description: "Una inundación catastrófica inunda el planeta. En lo que podría ser el último día en la Tierra, se libra una lucha desesperada por salvar a un niño de un piso inundado.", cast: " 권민경, 권은성, 김강빈, 김규나, 김다미.", inMyList: false, videoUrl: "https://vimeos.net/embed-j6ydgnuluroa.html", dateAdded: '2025-12-27' },
            { title: "El Conjuro 4: Últimos ritos", rating:6.2, year: 2025, duration: "2h 15m", type: 'Película', image: "https://cdnfiles.cfd/p/v2/w1/Cotcju9cuEXNm1sXIRKjbUu6O2J5dnSGBcILxIN.webp", genres: ['terror', 'misterio', 'suspenso','destacada', ], description: "Los investigadores paranormales Ed y Lorraine Warren se enfrentan a un último y aterrador caso en el que deben enfrentarse a misteriosas entidades.", cast: " Vera Farmiga, Patrick Wilson, Mia Tomlinson.", inMyList: false, videoUrl: "https://nuuuppp.sbs/watch/3cFmo3jz3H9rjw5sXzhfbVQZ3RQzOcgXTUlkSt3jz3wVCXOyE", dateAdded: '2025-12-03' },
            { title: "Trol 2", rating:5.5, year: 2025, duration: "1h 42m", type: 'Película', image: "https://la.movie/wp-content/uploads/thumbs/be63bd049a45e596c9be7079dd937943_hd.webp", genres: ['accion', 'suspenso', 'fantasia', ], description: "Cuando otro despiadado trol desata una ola de destrucción en su país, Nora, Andreas y el comandante Kris se embarcan en la misión más peligrosa de sus vidas.", cast: "Ine Marie Wilmann, Kim S. Falck-Jørgensen, Mads Sjøgård Pettersen  ", inMyList: false, videoUrl: "https://vimeos.net/embed-7hkk4twbwhud.html", dateAdded: '2025-12-03' },
            { title: "Caramelo", rating: 7.2, year: 2025, duration: "1h 41m", type: 'Película', image: "https://m.media-amazon.com/images/M/MV5BNTRlMzI4MDItZDJiNS00YmNmLWE1MmQtNjZjYTVhNDdmYjQ1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", genres: ['drama', 'comedia', 'familiar', ], description: "La película trata sobre un chef cuyo diagnóstico médico lo lleva a encontrar esperanza en un perro callejero llamado Amendoim.", cast: "Ademara Barros, Amendoim, Arianne Botelho, Benício Alves Torres, Bruno Vinicius", inMyList: false, videoUrl: "https://vimeos.net/embed-71fdjopqwc9g.html", dateAdded: '2025-10-19' },
            { title: "F1 La Película", rating: 7.7, year: 2025, duration: "2h 10m", type: 'Película', image: "https://i0.wp.com/tomatazos.buscafs.com/2025/01/238049_f1-la-pelicula-de-formula-1-de-brad-pitt-lanza-.jpg?fit=960,1200&quality=75&strip=all", genres: ['drama', 'accion'], description: "Un ex piloto de Fórmula 1 regresa a la competición para ser mentor de un joven prodigio en el emocionante y peligroso mundo de las carreras.", cast: "Brad Pitt, Damson Idris, Kerry Condon", inMyList: false, videoUrl: "https://vimeos.net/embed-567smpecp27m.html", dateAdded: '2025-10-18' },
            { title: "Superman", rating: 7.2, year: 2025, duration: "2h 30m", type: 'Película', image: "https://image.tmdb.org/t/p/w342/lfMKNOaaS2jGT3QKUaiFA8cO7DC.jpg", genres: ['fantasia', 'scifi', 'accion', 'destacada'], description: "La película sigue a Superman mientras busca reconciliar su herencia kryptoniana con su crianza humana como Clark Kent de Smallville, Kansas.", cast: "David Corenswet, Rachel Brosnahan, Nicholas Hoult", inMyList: true, videoUrl: "https://yuguaab.com/e/zgk5itgv132o", dateAdded: '2025-10-01' },
            { title: "mision imposible 8", rating: 7.2, year: 2025, duration: "2h 45m", type: 'Película', image: "https://image.tmdb.org/t/p/w342/haOjJGUV00dKlZaJWgjM1UD1cJV.jpg", genres: ['accion', 'destacada', 'thriller'], description: "Ethan Hunt y su equipo del FMI se embarcan en su misión más peligrosa hasta la fecha: rastrear una nueva y aterradora arma que amenaza a toda la humanidad.", cast: "Tom Cruise, Hayley Atwell, Ving Rhames", inMyList: false, videoUrl: "https://vimeos.net/embed-heqjtv7ef12.html", dateAdded: '2025-09-28' },
            { title: "Los Cuatro Fantásticos", rating: 7.1, year: 2025, duration: "2h 15m", type: 'Película', image: "https://image.tmdb.org/t/p/w342/ckfiXWGEMWrUP53cc6QyHijLlhl.jpg", genres: ['fantasia', 'scifi', 'accion', 'destacada'], description: "Cuatro astronautas adquieren superpoderes tras una exposición a rayos cósmicos y deben usarlos para defender la Tierra de una amenaza galáctica.", cast: "Pedro Pascal, Vanessa Kirby, Ebon Moss-Bachrach", inMyList: false, videoUrl: "https://bingezove.com/v/l0khu0wlxpd6", dateAdded: '2025-09-25' },
            { title: "Elio", rating: 6.7, year: 2025, duration: "1h 50m", type: 'Película', image: "https://image.tmdb.org/t/p/w342/fGjwHlv8bCjZypi2bHbbSmyIGMV.jpg", genres: ['fantasia', 'scifi', 'familiar'], description: "Un niño es transportado accidentalmente a través de la galaxia y es confundido con el embajador intergaláctico de la Tierra.", cast: "Yonas Kibreab, America Ferrera, Jameela Jamil", inMyList: false, videoUrl: "https://vimeos.net/embed-u5rzs30rp4s5.html", dateAdded: '2025-09-22' },
            { title: "Destino Final: Lazos de Sangre", rating: 6.7, year: 2025, duration: "1h 55m", type: 'Película', image: "https://image.tmdb.org/t/p/w342/frNkbclQpexf3aUzZrnixF3t5Hw.jpg", genres: ['horror', 'destacada'], description: "Un nuevo grupo de jóvenes debe encontrar una manera de escapar del macabro diseño de la Muerte después de que uno de ellos tiene una premonición.", cast: "Brec Bassinger, Teo Briones, Kaitlyn Santa Juana", inMyList: false, videoUrl: "https://vimeos.net/embed-3zh5v5e8teu4.html", dateAdded: '2025-09-20' },
            { title: "Karate Kid: Leyendas", rating: 6.3, year: 2025, duration: "2h 05m", type: 'Película', image: "https://image.tmdb.org/t/p/w342/bwNAjGUsHt35eqT0Aj8NHU02WPl.jpg", genres: ['accion', 'familiar', 'drama', 'destacada'], description: "Un joven prodigio del karate de China se traslada a la Costa Este, donde encuentra un mentor estricto pero sabio que le enseñará más que solo artes marciales.", cast: "Ben Wang, Jackie Chan, Ralph Macchio", inMyList: false, videoUrl: "https://vimeos.net/embed-vps3xcruxazs.html", dateAdded: '2025-09-18' },
            { title: "Jurassic World: Renace", rating: 5.9, year: 2025, duration: "2h 20m", type: 'Película', image: "https://image.tmdb.org/t/p/w342/Aw1FSO4gWk2Zjr2sfuyQ4lnK3Gc.jpg", genres: ['scifi', 'accion', 'destacada'], description: "Una nueva era de dinosaurios comienza, y un grupo de científicos y aventureros debe enfrentarse a nuevas amenazas en un mundo donde los humanos ya no son la especie dominante.", cast: "Scarlett Johansson, Jonathan Bailey, Mahershala Ali", inMyList: false, videoUrl: "https://vimeos.net/embed-r5xuubxljw1k.html", dateAdded: '2025-09-15' },
            { title: "Primitive War", rating: 5.9, year: 2025, duration: "1h 40m", type: 'Película', image: "https://image.tmdb.org/t/p/w342/egDAs0vh2SzTR07eUzdcC1XYkTS.jpg", genres: ['scifi', 'horror'], description: "Un equipo de soldados de élite es enviado a una jungla remota para una misión de rescate, solo para descubrir que están siendo cazados por dinosaurios modificados genéticamente.", cast: "Ryan Kwanten, Tricia Helfer, Jeff Fahey", inMyList: false, videoUrl: "https://vimeos.net/embed-mrywycuhxu5z.html", dateAdded: '2025-09-12' },
            { title: "Hipnosis: Arma Invisible", rating: 5.5, year: 2025, duration: "2h 00m", type: 'Película', image: "https://image.tmdb.org/t/p/w342/3IhGkkalwXguTlceGSl8XUJZOVI.jpg", genres: ['accion', 'thriller'], description: "Un detective debe resolver una serie de atracos de alto riesgo mientras se enfrenta a un misterioso villano que utiliza la hipnosis para controlar a la gente.", cast: "Ben Affleck, Alice Braga, William Fichtner", inMyList: false, videoUrl: "https://vimeos.net/embed-mrywycuhxu5z.html", dateAdded: '2025-09-10' },
            { title: "La Guerra del Mañana", rating: 6.6, year: 2021, duration: "2h 18m", type: 'Película', image: "https://image.tmdb.org/t/p/w342/tzp6VzED2TBc02bkYoYnQa6r2OK.jpg", genres: ['scifi', 'accion', 'drama'], description: "Un grupo de viajeros en el tiempo llega desde el año 2021 para entregar un mensaje urgente: 30 años en el futuro, la humanidad está perdiendo una guerra global contra una mortal especie alienígena.", cast: "Chris Pratt, Yvonne Strahovski, J.K. Simmons", videoUrl: "https://vimeos.net/embed-mbz2fvbnvtv6.html", inMyList: false, dateAdded: '2025-09-05' },
            { title: "Xeno", rating: 5.5, year: 2025, duration: "1h 43m", type: 'Película', image: "https://www.poseidonhd2.co/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fa173ryH3yQXvP2y0jriL3dYjWfX.jpg&w=256&q=75", genres: ['scifi', 'accion', 'drama', 'destacada'], description: "Una adolescente convierte en su amiga a un aterrador extraterrestre después de que se estrella cerca del desierto. La joven logra lidiar con su triste madre y con el violento novio de ella y, al mismo tiempo, protege a su nuevo amigo.", cast: " Lulu Wilson, Omari Hardwick, Paul Schneider, Trae Romano, Wrenn Schmidt, Josh Cooke.", videoUrl: "https://vimeos.net/embed-mbz2fvbnvtv6.html", inMyList: false, dateAdded: '2025-09-01' },
            { title: "Mi Villano Favorito 4", rating: 7.8, year: 2024, duration: "1h 35m", type: 'Película', image: "https://www.poseidonhd2.co/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fb6JX0fBne5yPFNBtdp4Imi3CpiE.jpg&w=256&q=75", genres: ['comedia', 'familiar', 'animacion', 'destacada'], description: "Gru se enfrenta a un nuevo némesis, Maxime Le Mal, y su novia Valentina, por lo cual la familia se ve obligada a huir.", cast: "Steve Carell, Kristen Wiig, Will Ferrell", videoUrl: "https://guxhag.com/e/ok2by17zzeuj", inMyList: false, dateAdded: '2025-08-28' },
            { title: "Amigos Imaginarios", rating: 7.5, year: 2024, duration: "1h 44m", type: 'Película', image: "https://image.tmdb.org/t/p/w342//8RgGuC7w8JxhykauzTC4bwha1J8.jpg", genres: ['comedia', 'familiar', 'fantasia', 'destacada'], description: "Una niña que puede ver a los amigos imaginarios de todo el mundo se embarca en una aventura mágica para reconectar a los amigos imaginarios olvidados con sus niños.", cast: "Cailey Fleming, Ryan Reynolds, John Krasinski", videoUrl: "https://vimeos.net/embed-jhke9mr9bw0b.html", inMyList: false, dateAdded: '2025-08-25' },
            { title: "Cualquiera Menos Tú", rating: 7.1, year: 2023, duration: "1h 43m", type: 'Película', image: "https://www.poseidonhd2.co/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FsmIleWSSXhbBunnWkKmyGj9oVaj.jpg&w=256&q=75", genres: ['romantica', 'comedia', 'destacada'], description: "Después de una primera cita increíble, la ardiente atracción entre Bea y Ben se enfría. Pero cuando se reencuentran inesperadamente en una boda en Australia, fingen ser la pareja perfecta para mantener las apariencias.", cast: "Sydney Sweeney, Glen Powell, Alexandra Shipp", videoUrl: "https://dsvplay.com/e/ekpdaahg7ivq", inMyList: false, dateAdded: '2025-08-20' }
        ];
        const allSeriesContent = [
            { title: "The War Between the Land and the Sea", rating: 6.2, year: 2025, type: 'Serie', duration: "1 Temporada", image: "https://image.tmdb.org/t/p/w200/4wDU61HtpXbcwpgCy1xnodxKRYN.jpg", inMyList: true, description: "Una pequeña ciudad obsesionada con las sirenas se revoluciona con la llegada de una misteriosa joven.", cast: "Eline Powell,Alex Roe,Fola Evans-Akingbola,Ian Verdun,Rena Owen", genres: ['drama', 'scifi', 'destacada'], dateAdded: '2025-12-03', 
                seasons: 
                [{ seasonNumber: 1, episodes: 
                    [{ episode: 1, title: " Homo Aqua", duration: "1h", thumbnail: "https://image.tmdb.org/t/p/w200/4wDU61HtpXbcwpgCy1xnodxKRYN.jpg", description: "La vida cotidiana de Barclay se convierte en un mundo de terror cuando una especie ancestral emerge del mar.", videoUrl: "https://player.cuevana.bot/?token=1VFxBDlxQVR0YAl5J" }, 
                     { episode: 2, title: "El señuelo", duration: "1h", thumbnail: "https://image.tmdb.org/t/p/w200/4wDU61HtpXbcwpgCy1xnodxKRYN.jpg", description: "Ben y la tripulación de North Star descubren un dispositivo que emite un sonido extraño; Ryn encuentra refugio en la casa del experto en folclore local.", videoUrl: "https://videostr.net/embed-1/v3/e-1/wR3gD6dzBLa9?z=" }]}] },  

            { title: "Siren", rating: 7.0, year: 2018, type: 'Serie', duration: "3 Temporada", image: "https://pics.filmaffinity.com/siren-443221358-mmed.jpg", inMyList: true, description: "Una pequeña ciudad obsesionada con las sirenas se revoluciona con la llegada de una misteriosa joven.", cast: "Eline Powell,Alex Roe,Fola Evans-Akingbola,Ian Verdun,Rena Owen", genres: ['drama', 'scifi', 'destacada'], dateAdded: '2025-12-03', 
                seasons: 
                [{ seasonNumber: 1, episodes: 
                    [{ episode: 1, title: "El descubrimiento de la sirena", duration: "1h", thumbnail: "https://pics.filmaffinity.com/siren-443221358-mmed.jpg", description: "Una chica llega a una ciudad donde hay una leyenda de sirenas.", videoUrl: "https://nuuuppp.sbs/wathcpremium/hTBp8lExQlOAoT5walCTwyI1FhIndsFFqgQK9tNLU1c?h=" }, 
                     { episode: 2, title: "El señuelo", duration: "1h", thumbnail: "https://pics.filmaffinity.com/siren-443221358-mmed.jpg", description: "Ben y la tripulación de North Star descubren un dispositivo que emite un sonido extraño; Ryn encuentra refugio en la casa del experto en folclore local.", videoUrl: "https://videostr.net/embed-1/v3/e-1/wR3gD6dzBLa9?z=" }]}] },  

            { title: "Revival", rating: 6.7, year: 2025, type: 'Serie', duration: "1 Temporada", image: "https://cdnfiles.cfd/p/v2/w1/w2rrAdY4Cm2MLtmy403LV8OEiaayoF.webp", inMyList: true, description: "En un día milagroso en la zona rural de Wisconsin, los recién fallecidos se levantan repentinamente de sus tumbas. Pero esta no es una historia de zombis, ya que los «resucitados» aparecen y actúan tal y como lo hacían antes.", cast: "Melanie Scrofano, Romy Weltman, David James Elliott, Andy McQueen", genres: ['drama', 'scifi', 'crimen', 'destacada'], dateAdded: '2025-12-03', 
                seasons: 
                [{ seasonNumber: 1, episodes: 
                    [{ episode: 1, title: "No se lo digas a papá", duration: "45m", thumbnail: "https://cdnfiles.cfd/p/v2/w1/w2rrAdY4Cm2MLtmy403LV8OEiaayoF.webp", description: "Mientras los muertos vuelven a la vida en un pequeño pueblo, la agente Dana Cypress descubre un nuevo y mortal misterio.", videoUrl: "https://nuuuppp.sbs/watch/lgFblhie9Ne8JqJdwpSMwW4E6CfgzLsXigS5eMmsppA" }, 
                     { episode: 2, title: "Manteniendo las apariencias", duration: "45m", thumbnail: "https://cdnfiles.cfd/p/v2/w1/w2rrAdY4Cm2MLtmy403LV8OEiaayoF.webp", description: "El ataque de un Reviver sacude a Wausau mientras Dana comienza una investigación demasiado cerca de casa.", videoUrl: "https://nuuuppp.sbs/watch/yttMlH8bqHQjjq5uogvXZjtTzbuLo5NYZgfG3jz3WrA6v0" }]}] },  

            { title: "Stranger Things", rating: 8.6, year: 2016, type: 'Serie', duration: "5 Temporada", image: "https://la.movie/wp-content/uploads/thumbs/82ab7aa30c681b7318943b9366f1fb94_hd.webp", inMyList: true, description: "Después de la extraña desaparición de un niño, un pueblo se encuentra ante un misterio que revela experimentos secretos, fuerzas sobrenaturales y a una niña muy especial.", cast: "Millie Bobby Brown, Finn Wolfhard, Noah Schnapp", genres: ['misterio', 'scifi', 'terror', 'destacada'], dateAdded: '2025-12-03', 
                seasons: 
                [{ seasonNumber: 1, episodes: 
                    [{ episode: 1, title: "Capítulo uno: La desaparición de Will Byers", duration: "2h", thumbnail: "https://pics.filmaffinity.com/stranger_things-875025085-large.jpg", description: "Cuando vuelve en bici a su casa, Will ve algo horroroso. Cerca de allí, un siniestro secreto acecha en las profundidades de un laboratorio estatal.", videoUrl: "https://vimeos.net/embed-j3zix72mposh.html" }, 
                     { episode: 2, title: " Capítulo dos: El bicho raro de Maple Street", duration: "2h", thumbnail: "https://pics.filmaffinity.com/stranger_things-875025085-large.jpg", description: "Lucas, Mike y Dustin intentan hablar con la niña que encontraron en el bosque. Hopper interroga a Joyce, que se ha puesto muy nerviosa por una llamada telefónica.", videoUrl: "https://vimeos.net/embed-dl8tqs8xdz93.html" },
                     { episode: 3, title: "Capítulo tres: Holly, Jolly", duration: "2h", thumbnail: "https://pics.filmaffinity.com/stranger_things-875025085-large.jpg", description: "Cada vez más preocupada, Nancy sigue buscando a Barb y descubre lo que tenía Jonathan entre manos. Joyce está segura de que Will intenta comunicarse con ella.", videoUrl: "https://vimeos.net/embed-edllt1zz1uza.html" },
                    ]},
                    { seasonNumber: 5, episodes: 
                    [{ episode: 1, title: "Capítulo uno: El rastreo", duration: "2h", thumbnail: "https://la.movie/wp-content/uploads/thumbs/82ab7aa30c681b7318943b9366f1fb94_hd.webp", description: "Noviembre de 1987. La pandilla evade al ejército para buscar a Vecna en el Mundo del Revés, pero no se da cuenta de una amenaza que acecha más cerca de casa.", videoUrl: "https://vimeos.net/embed-q1ht6r6cytjv.html" }, 
                     { episode: 2, title: "Capítulo dos: La desaparición de Holly Wheeler", duration: "2h", thumbnail: "https://la.movie/wp-content/uploads/thumbs/82ab7aa30c681b7318943b9366f1fb94_hd.webp", description: "Tras un brutal ataque en la casa de los Wheeler, Mike y Nancy se enfrentan al precio del secreto, mientras que El y Hopper se embarcan en una misión de rescate.", videoUrl: "https://vimeos.net/embed-dl8tqs8xdz93.html" },
                     { episode: 3, title: " Capítulo tres: La trampa del arco giratorio", duration: "2h", thumbnail: "https://la.movie/wp-content/uploads/thumbs/82ab7aa30c681b7318943b9366f1fb94_hd.webp", description: "Will obtendrá información privilegiada sobre el próximo movimiento de Vecna, lo que dará al equipo la oportunidad de tenderle una trampa.", videoUrl: "https://vimeos.net/embed-edllt1zz1uza.html" },
                     { episode: 4, title: " Capítulo Cuatro: Hechicero", duration: "2h", thumbnail: "https://la.movie/wp-content/uploads/thumbs/82ab7aa30c681b7318943b9366f1fb94_hd.webp", description: "El ejército refuerza su control sobre la ciudad. Mike, Lucas y Robin organizan una audaz fuga. El se encuentra cara a cara con el enemigo.", videoUrl: "https://vimeos.net/embed-pturhmfxsiqb.html" },
                     { episode: 5, title: "Capítulo cinco: Shock Jock", duration: "2h", thumbnail: "https://la.movie/wp-content/uploads/thumbs/82ab7aa30c681b7318943b9366f1fb94_hd.webp", description: "La pandilla urde un plan electrizante para reconectar a Will con la mente colmena. La tensión se intensifica durante una búsqueda en el Laboratorio", videoUrl: "https://vimeos.net/embed-abzzsyi5n2jg.html" },
                     { episode: 6, title: "Capítulo Seis: Escape de Camazotz", duration: "2h", thumbnail: "https://la.movie/wp-content/uploads/thumbs/82ab7aa30c681b7318943b9366f1fb94_hd.webp", description: "Mientras Holly y Max luchan por escapar de la mente de Vecna, El debe encontrar la manera de entrar en la de Will. Joyce lidia con la culpa.", videoUrl: "https://vimeos.net/embed-dkufxap0k3u6.html" },
                     { episode: 7, title: " Capítulo Siete: El Puente", duration: "2h", thumbnail: "https://la.movie/wp-content/uploads/thumbs/82ab7aa30c681b7318943b9366f1fb94_hd.webp", description: "En el aniversario de la desaparición de Will, el grupo se reúne para prepararse para una batalla que tendrá implicaciones que cambiarán el mundo.", videoUrl: "https://vimeos.net/embed-v0seu4u9na98.html" },
                    ]}] }, 

            { title: "IT: Bienvenidos a Derry (2025)", rating: 6.8, year: 2025, type: 'Serie', duration: "1 Temporada", image: "https://la.movie/wp-content/uploads/thumbs/720e36c820ef1b1b88fb4e8c0e71cf86_hd.webp", inMyList: true, description: "En 1958, un grupo de siete amigos están empezando a ver cosas extrañas en el tranquilo pueblito Derry. Con el tiempo, descubren que todos estaban viendo lo mismo: un ser sobrenatural y malvado que puede adoptar muchas formas.", cast: "Jovan Adepo, Bill Skarsgård, Taylour Paige", genres: ['misterio', 'drama', 'terror'], dateAdded: '2025-12-02', 
                seasons: 
                [{ seasonNumber: 1, episodes: 
                    [{ episode: 1, title: "El piloto", duration: "2h", thumbnail: "https://la.movie/wp-content/uploads/thumbs/720e36c820ef1b1b88fb4e8c0e71cf86_hd.webp", description: "Cuatro meses después de que desaparezca un compañero, Teddy, Phil, Lilly y Ronnie investigan niños desaparecidos y sucesos extraños en Derry mientras el Mayor Leroy afronta rechazo.", videoUrl: "https://vimeos.net/embed-s5irm151bw52.html" }, 
                     { episode: 2, title: "La cosa en la oscuridad", duration: "2h", thumbnail: "https://la.movie/wp-content/uploads/thumbs/720e36c820ef1b1b88fb4e8c0e71cf86_hd.webp", description: "Charlotte y Will se adaptan a su nueva vida en Derry, Ronnie se preocupa por el destino de su padre.", videoUrl: "https://vimeos.net/embed-wrqr4y2zyxze.html" }]}] }, 

            { title: "Surface", rating: 7.2, year: 2005, type: 'Serie', duration: "1 Temporada", image: "https://m.media-amazon.com/images/M/MV5BZmI1N2ViYzktZTVhOS00YmQ4LTllM2MtNDUyMDAwZDUwYjkyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", inMyList: true, description: "Una bióloga marina descubre una nueva forma de vida en el océano que podría cambiar el futuro de la humanidad para siempre.", cast: "Lake Bell, Jay R. Ferguson, Carter Jenkins", genres: ['scifi', 'drama'], dateAdded: '2025-09-15', 
                seasons: 
                [{ seasonNumber: 1, episodes: 
                    [{ episode: 1, title: "Hay algo en el agua", duration: "48m", thumbnail: "https://m.media-amazon.com/images/M/MV5BZmI1N2ViYzktZTVhOS00YmQ4LTllM2MtNDUyMDAwZDUwYjkyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", description: "El descubrimiento de una extraña criatura marina desencadena una investigación a nivel mundial.", videoUrl: "https://videostr.net/embed-1/v3/e-1/2UBECDHXXIgW?z=" }, { episode: 2, title: "El misterio se profundiza", duration: "49m", thumbnail: "https://m.media-amazon.com/images/M/MV5BZmI1N2ViYzktZTVhOS00YmQ4LTllM2MtNDUyMDAwZDUwYjkyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", description: "Mientras los científicos intentan comprender a la criatura, ocurren eventos extraños en todo el mundo.", videoUrl: "https://goodstream.one/embed-69cbxnsvsabc.html" }]}] }, 

            { title: "La Brea", rating: 5.8, year: 2021, type: 'Serie', duration: "3 Temporadas", image: "https://image.tmdb.org/t/p/w342/jyHK7qFX2HvaAULSAO7aztdanyr.jpg", inMyList: false, description: "Un enorme socavón se abre en Los Ángeles, arrastrando a cientos de personas a una misteriosa tierra prehistórica.", cast: "Natalie Zea, Eoin Macken, Chiké Okonkwo", genres: ['scifi', 'drama', 'destacada'], dateAdded: '2025-10-17', 
                seasons: 
                [ { seasonNumber: 1, episodes: 
                    [{ episode: 1, title: "Piloto", duration: "43m", thumbnail: "https://image.tmdb.org/t/p/w342/jyHK7qFX2HvaAULSAO7aztdanyr.jpg", description: "Un socavón masivo abre un portal a un mundo primitivo en el corazón de L.A.", videoUrl: "https://guxhag.com/e/dojyrn1jo95h" },
                     { episode: 2, title: "Día dos", duration: "43m", thumbnail: "https://image.tmdb.org/t/p/w342/jyHK7qFX2HvaAULSAO7aztdanyr.jpg", description: "Con la vida de Josh en juego, Eve recorre el peligroso desierto de regreso al claro para salvarlo. ", videoUrl: "https://doodstream.com/e/2wj4q3nbn2wk" },
                     { episode: 3, title: "La caza", duration: "43m", thumbnail: "https://image.tmdb.org/t/p/w342/jyHK7qFX2HvaAULSAO7aztdanyr.jpg", description: "Con la escasez de alimentos, Eve y Ty se adentran en el bosque en una arriesgada expedición de caza ", videoUrl: "https://doodstream.com/e/l7x5b6q0lcb4" },
                     { episode: 4, title: "El recién llegado", duration: "43m", thumbnail: "https://image.tmdb.org/t/p/w342/jyHK7qFX2HvaAULSAO7aztdanyr.jpg", description: "La visión de un avión estrellado infunde una inesperada esperanza mientras los supervivientes buscan a su piloto caído.", videoUrl: "https://doodstream.com/e/1ro0cs7yf783" },
                     { episode: 5, title: "El Fuerte", duration: "43m", thumbnail: "https://image.tmdb.org/t/p/w342/jyHK7qFX2HvaAULSAO7aztdanyr.jpg", description: "Un grupo de búsqueda explora un misterioso fuerte que plantea más preguntas que respuestas. ", videoUrl: "https://doodstream.com/e/x6xw4itqu602" },
                     { episode: 6, title: "El camino a casa", duration: "43m", thumbnail: "https://image.tmdb.org/t/p/w342/jyHK7qFX2HvaAULSAO7aztdanyr.jpg", description: "Cuando el tiempo se acaba antes de que su casa ventana se cierre, los sobrevivientes traman un último intento de escape, pero cuando reciben una severa advertencia de Gavin de que terminará en desastre. ", videoUrl: "https://doodstream.com/e/igexh37y0ksv" },
                     { episode: 7, title: "La Tormenta", duration: "43m", thumbnail: "https://image.tmdb.org/t/p/w342/jyHK7qFX2HvaAULSAO7aztdanyr.jpg", description: "Cuando una supertormenta caótica azota el claro, un derrumbe estructural pone en peligro la vida de Marybeth y Lucas. ", videoUrl: "https://doodstream.com/e/2cw9ea7cgfvw" },
                     { episode: 8, title: "Orígenes", duration: "43m", thumbnail: "https://image.tmdb.org/t/p/w342/jyHK7qFX2HvaAULSAO7aztdanyr.jpg", description: "Con la llegada del frío, Eve, Levi y Ty regresan al fuerte, a pesar de su experiencia cercana a la muerte, con la esperanza de aprender técnicas de supervivencia del siglo 10.000 a. C. ", videoUrl: "https://filemoon.sx/e/i1tn3c3142ad" },
                     { episode: 9, title: "Padre e hijo", duration: "43m", thumbnail: "https://image.tmdb.org/t/p/w342/jyHK7qFX2HvaAULSAO7aztdanyr.jpg", description: "Cuando una revelación impactante pone en peligro la vida de Josh e Izzy, los sobrevivientes buscan desesperadamente al joven que tiene la clave. ", videoUrl: "https://doodstream.com/e/bf0tsgnew4wu" },
                     { episode: 10, title: "Topanga", duration: "43m", thumbnail: "https://image.tmdb.org/t/p/w342/jyHK7qFX2HvaAULSAO7aztdanyr.jpg", description: "Con la noticia de la apertura de un último sumidero, Gavin, Izzy y el Dr. Nathan se apresuran a lanzar un último esfuerzo de rescate antes de que sea demasiado tarde. ", videoUrl: "https://doodstream.com/e/l7x5b6q0lcb4" },

                    ] },
                     
                  { seasonNumber: 2, episodes: 
                    [{ episode: 1, title: "El día siguiente", duration: "44m", thumbnail: "https://www.verseriesonline.net/storage/poster/series/la-brea-saison-2.jpg", description: "Los supervivientes luchan por establecer un campamento y encontrar respuestas sobre su nueva realidad.", videoUrl: "https://goodstream.one/embed-69cbxnsvsabc.html" },
                     { episode: 2, title: "La Cueva", duration: "44m", thumbnail: "https://www.verseriesonline.net/storage/poster/series/la-brea-saison-2.jpg", description: "Gavin pide ayuda a su abuelo para que le guíe hasta su esposa desaparecida. Eve y Levi se enfrentan a una nueva y espeluznante realidad. ", videoUrl: "https://doodstream.com/e/s9zpv7us8my6" },
                     { episode: 3, title: "La gran evasión", duration: "44m", thumbnail: "https://www.verseriesonline.net/storage/poster/series/la-brea-saison-2.jpg", description: "Tras un emotivo reencuentro, Gavin y Eve intentan una audaz huida de sus implacables captores", videoUrl: "https://doodstream.com/e/a223p6c3anro" },
                     { episode: 4, title: "La niebla", duration: "44m", thumbnail: "https://www.verseriesonline.net/storage/poster/series/la-brea-saison-2.jpg", description: "Cuando la niebla cubre el Claro, Eve lidera la defensa contra un grupo de invasores, solo para encontrarse con una amenaza aún más peligrosa.", videoUrl: "https://doodstream.com/e/ot95xyowygcs" },
                     { episode: 5, title: "El atraco", duration: "44m", thumbnail: "https://www.verseriesonline.net/storage/poster/series/la-brea-saison-2.jpg", description: "Eve, Gavin y otros intentan comandar un cargamento de roca negra para acceder al misterioso edificio.", videoUrl: "https://doodstream.com/e/frus3syyq58w" },
                     { episode: 6, title: "Lázaro", duration: "44m", thumbnail: "https://www.verseriesonline.net/storage/poster/series/la-brea-saison-2.jpg", description: "Cuando su plan para infiltrarse en el edificio fracasa, Gavin se encuentra cara a cara con su enigmático líder. ", videoUrl: "https://doodstream.com/e/4mlf8u6y2a2n" },
                     { episode: 7, title: "1988", duration: "44m", thumbnail: "https://www.verseriesonline.net/storage/poster/series/la-brea-saison-2.jpg", description: "Una familia Harris reunificada lidera los esfuerzos para rescatar a Caroline y enfrentarse a fuerzas que amenazan con separar a su familia.", videoUrl: "https://doodstream.com/e/9124zoofgmhd" },
                     { episode: 8, title: "Estampida", duration: "44m", thumbnail: "https://www.verseriesonline.net/storage/poster/series/la-brea-saison-2.jpg", description: "Harris data del 10.000 a.C., decidido a cargar un virus que detenga todos los sumideros, a pesar de saber que esto significará que nunca volverán a casa.", videoUrl: "https://doodstream.com/e/cb7auvtduuiu" },
                     { episode: 9, title: "Asesinato en el claro", duration: "44m", thumbnail: "https://www.verseriesonline.net/storage/poster/series/la-brea-saison-2.jpg", description: "Cuando un Superviviente es asesinado, Lucas y Sam dirigen una polémica investigación para encontrar al asesino.", videoUrl: "https://doodstream.com/e/2jfd4ejig0e7" },
                     { episode: 10, title: "El día siguiente", duration: "44m", thumbnail: "https://www.verseriesonline.net/storage/poster/series/la-brea-saison-2.jpg", description: "Los supervivientes luchan por establecer un campamento y encontrar respuestas sobre su nueva realidad.", videoUrl: "https://goodstream.one/embed-69cbxnsvsabc.html" },
                     { episode: 11, title: "El día siguiente", duration: "44m", thumbnail: "https://www.verseriesonline.net/storage/poster/series/la-brea-saison-2.jpg", description: "Los supervivientes luchan por establecer un campamento y encontrar respuestas sobre su nueva realidad.", videoUrl: "https://goodstream.one/embed-69cbxnsvsabc.html" },
                     { episode: 12, title: "El día siguiente", duration: "44m", thumbnail: "https://www.verseriesonline.net/storage/poster/series/la-brea-saison-2.jpg", description: "Los supervivientes luchan por establecer un campamento y encontrar respuestas sobre su nueva realidad.", videoUrl: "https://goodstream.one/embed-69cbxnsvsabc.html" },
                     { episode: 13, title: "El día siguiente", duration: "44m", thumbnail: "https://www.verseriesonline.net/storage/poster/series/la-brea-saison-2.jpg", description: "Los supervivientes luchan por establecer un campamento y encontrar respuestas sobre su nueva realidad.", videoUrl: "https://goodstream.one/embed-69cbxnsvsabc.html" },
                     { episode: 14, title: "El día siguiente", duration: "44m", thumbnail: "https://www.verseriesonline.net/storage/poster/series/la-brea-saison-2.jpg", description: "Los supervivientes luchan por establecer un campamento y encontrar respuestas sobre su nueva realidad.", videoUrl: "https://goodstream.one/embed-69cbxnsvsabc.html" },


                    ]}
                ] },

            { title: "Monarch: El legado de los monstruos", rating: 8.1, year: 2023, type: 'Serie', duration: "1 Temporada", image: "https://image.tmdb.org/t/p/w342/8ZSrqUsa1JN9FkIQU8iTFOMw4D5.jpg", inMyList: false, description: "Tras la batalla entre Godzilla y los Titanes, dos hermanos siguen los pasos de su padre para descubrir la conexión de su familia con la organización Monarch.", cast: "Anna Sawai, Kiersey Clemons, Ren Watabe", genres: ['scifi', 'accion', 'destacada'], dateAdded: '2025-10-10', 
                seasons: [{ seasonNumber: 1, episodes: 
                    [{ episode: 1, title: "Legado", duration: "50m", thumbnail: "https://image.tmdb.org/t/p/w342/8ZSrqUsa1JN9FkIQU8iTFOMw4D5.jpg", description: "El inicio de la búsqueda de la verdad sobre los monstruos y Monarch.", videoUrl: "https://dinisglows.com/v/fz9d2ysr8bma" }]}] },

            { title: "From", rating: 8.3, year: 2022, type: 'Serie', duration: "2 Temporadas", image: "https://m.media-amazon.com/images/M/MV5BYzM5ZWMxOGEtZjEyMC00YjQ0LThiYjEtZjVkZGEzN2NlOGEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", inMyList: false, description: "Los habitantes de un pueblo aterrador luchan por mantenerse con vida y buscar una salida, pero se ven acosados por criaturas nocturnas.", cast: "Harold Perrineau, Catalina Sandino Moreno, Eion Bailey", genres: ['misterio', 'horror', 'drama', 'destacada'], dateAdded: '2025-09-20', seasons: 
                [{ seasonNumber: 1, episodes: 
                    [{ episode: 1, title: "Un largo camino a casa", duration: "55m", thumbnail: "https://m.media-amazon.com/images/M/MV5BYzM5ZWMxOGEtZjEyMC00YjQ0LThiYjEtZjVkZGEzN2NlOGEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", description: "Una familia se desvía y llega a un pueblo del que no se puede salir.", videoUrl: "https://dinisglows.com/v/q5e4mv754sh5" }, 
                     { episode: 2, title: "Así son las cosas ahora", duration: "55m", thumbnail: "https://m.media-amazon.com/images/M/MV5BYzM5ZWMxOGEtZjEyMC00YjQ0LThiYjEtZjVkZGEzN2NlOGEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", description: "En Colony House, Tabitha y Julie se enfrentan a su nueva realidad de pesadilla. En el bosque, Jim, Boyd y Kristi se esfuerzan por tratar las heridas de Ethan. La tragedia llega de una fuente inesperada cuando surge una nueva amenaza.", videoUrl: "https://dinisglows.com/v/pgxswiuy4gqj" }, 
                     { episode: 3, title: "Así son las cosas ahora", duration: "55m", thumbnail: "https://m.media-amazon.com/images/M/MV5BYzM5ZWMxOGEtZjEyMC00YjQ0LThiYjEtZjVkZGEzN2NlOGEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", description: "La familia Matthews debe elegir a cuál de los dos asentamientos se unirá. Mientras tanto, Jade acepta su situación y Boyd se enfrenta a una decisión imposible que afecta al corazón de la vida en la ciudad.", videoUrl: "https://dinisglows.com/v/hol85a8523wi" }, 
                     { episode: 4, title: "Una roca y un camino lejano", duration: "55m", thumbnail: "https://m.media-amazon.com/images/M/MV5BYzM5ZWMxOGEtZjEyMC00YjQ0LThiYjEtZjVkZGEzN2NlOGEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", description: "Julie y Ethan hacen nuevos amigos, sus padres discuten sus diferencias y Boyd y Khatri hablan sobre el papel de Boyd en la comunidad.", videoUrl: "https://dinisglows.com/v/10olwiedbrvq" }, 
                     { episode: 5, title: "Siluetas", duration: "55m", thumbnail: "https://m.media-amazon.com/images/M/MV5BYzM5ZWMxOGEtZjEyMC00YjQ0LThiYjEtZjVkZGEzN2NlOGEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", description: "Jim, Tabitha y Ethan comienzan a hacerse preguntas sobre dónde se encuentran con la esperanza de que eso los lleve a casa. Ellis y Fatima le muestran a Julie el lado más alegre de la vida en la ciudad.", videoUrl: "https://dinisglows.com/v/5qpphdfwatgw", dateAdded: '2025-10-20' }]}] },

            { title: "Manifest", rating: 7.0, year: 2018, type: 'Serie', duration: "4 Temporadas", image: "https://www.verseriesonline.net/storage/poster/series/manifest-saison-1.jpg", inMyList: false, description: "Cuando el vuelo 828 de Montego Air aterriza de manera segura después de un vuelo turbulento pero de rutina, la crew y los pasajeros se sienten aliviados. Sin embargo, aunque para ellos han pasado pocas horas, el mundo ha envejecido cinco años y sus amigos, familias y colegas, después de llorar su pérdida, han perdido la esperanza y están intentando seguir adelante. Ahora, frente a lo imposible, a todos se les da una segunda oportunidad.", cast: "Melissa Roxburgh , Josh Dallas , J.R. Ramirez , Luna Blaise , Parveen Kaur , Matt Long , Holly Taylor , Daryl Edwards , Ty Doran", genres: ['misterio', 'fantasy', 'drama','scifi', 'destacada'], dateAdded: '2025-08-15', 
                seasons: [{ seasonNumber: 1, episodes: 
                    [{ episode: 1, title: "Piloto", duration: "42m", thumbnail: "https://www.verseriesonline.net/storage/poster/series/manifest-saison-1.jpg", description: "Los pasajeros a bordo de un vuelo que regresa cinco años después de desaparecer deben reconstruir sus antiguas vidas y lidiar con misteriosas", videoUrl: "https://dsvplay.com/e/uee37r2htm49" }, 
                     { episode: 2, title: "Reingreso", duration: "42m", thumbnail: "https://www.verseriesonline.net/storage/poster/series/manifest-saison-1.jpg", description: "Michaela se ve obligada a afrontar el hecho de que Jared está casado; Ben ayuda a un compañero de viaje;", videoUrl: "https://dsvplay.com/e/ihwspibp7485" }, 
                     { episode: 3, title: "Turbulencia", duration: "42m", thumbnail: "https://www.verseriesonline.net/storage/poster/series/manifest-saison-1.jpg", description: "Ben y Michaela investigan un asesinato impactante por temor a que esté relacionado con el vuelo 828.", videoUrl: "https://dsvplay.com/e/kmyusovujme2" }, 
                     { episode: 4, title: "Equipaje no reclamado", duration: "42m", thumbnail: "https://www.verseriesonline.net/storage/poster/series/manifest-saison-1.jpg", description: "Saanvi solicita la ayuda de Ben para descubrir un secreto sobre el avión; Michaela comienza a cuestionar la naturaleza de los llamados.", videoUrl: "https://dsvplay.com/e/2d0fjb81z8xf" }]}] },
            { title: "Shōgun", rating: 8.7, year: 2024, type: 'Serie', duration: "1 Temporada", image: "https://image.tmdb.org/t/p/w342/uIoDvVOQaKjSfz2oihkVS8M7l1v.jpg", inMyList: false, description: "Ambientada en el Japón de 1600, Lord Yoshii Toranaga lucha por su vida mientras sus enemigos en el Consejo de Regentes se unen contra él.", cast: "Hiroyuki Sanada, Cosmo Jarvis, Anna Sawai", genres: ['drama', 'historia', 'destacada'], dateAdded: '2025-08-10', 
                seasons: [{ seasonNumber: 1, episodes: 
                    [{ episode: 1, title: "Anjin", duration: "1h 10m", thumbnail: "https://image.tmdb.org/t/p/w342/uIoDvVOQaKjSfz2oihkVS8M7l1v.jpg", description: "Un misterioso barco europeo es encontrado abandonado en un pueblo pesquero cercano.", videoUrl: "https://goodstream.one/embed-69cbxnsvsabc.html" }]}] },
            { title: "Wynonna Earp", rating: 7.6, year: 2016, type: 'Serie', duration: "4 Temporadas", image: "https://image.tmdb.org/t/p/w342/qnIaDelA81dmFaXrhpz6M6dpGSD.jpg", inMyList: false, description: "La bisnieta de Wyatt Earp lucha contra demonios y otras criaturas sobrenaturales. Con su arma única, envía a los revenants de vuelta al infierno.", cast: "Melanie Scrofano, Tim Rozon, Dominique Provost-Chalkley", genres: ['fantasia', 'accion', 'western', 'destacada'], dateAdded: '2025-08-05', 
                seasons: [{ seasonNumber: 1, episodes: 
                    [{ episode: 1, title: "Purgatorio", duration: "45m", thumbnail: "https://www.verseriesonline.net/storage/poster/series/wynonna-earp-saison-1.jpg", description: "Wynonna regresa a su ciudad natal para asumir el papel que le corresponde como la heredera Earp.", videoUrl: "https://jilliandescribecompany.com/e/cx8w8xfybp0j" }]}] },
            { title: "Wolf Pack", rating: 7.9, year: 2023, type: 'Serie', duration: "1 Temporada", image: "https://image.tmdb.org/t/p/w342/rbCANmS1ogweUkIBghP03EHtdHB.jpg", inMyList: false, description: "Las vidas de dos adolescentes cambian para siempre cuando un incendio forestal en California despierta a una aterradora criatura sobrenatural.", cast: "Sarah Michelle Gellar, Rodrigo Santoro, Armani Jackson", genres: ['fantasia', 'drama', 'misterio', 'destacada'], dateAdded: '2025-08-01', 
                seasons: [{ seasonNumber: 1, episodes: 
                    [{ episode: 1, title: "Del lobo al hombre", duration: "52m", thumbnail: "https://image.tmdb.org/t/p/w342/rbCANmS1ogweUkIBghP03EHtdHB.jpg", description: "Un incendio forestal desata el caos y despierta a una bestia.", videoUrl: "https://guxhag.com/e/vkqwk96gxwb7" }]}] },
            { title: "The Boys", rating: 8.5, year: 2019, type: 'Serie', duration: "4 Temporadas", image: "https://images.justwatch.com/poster/315996736/s718/temporada-1.jpg", inMyList: false, description: "Un grupo de vigilantes se propone acabar con los superhéroes corruptos que abusan de sus superpoderes.", cast: "Karl Urban, Jack Quaid, Antony Starr", genres: ['accion', 'comedia', 'scifi', 'destacada'], dateAdded: '2025-07-28', 
                seasons: [{ seasonNumber: 1, episodes: 
                    [{ episode: 1, title: "El nombre del juego", duration: "1h 1m", thumbnail: "https://images.justwatch.com/poster/315996736/s718/temporada-1.jpg", description: "Cuando un superhéroe mata a su novia, un joven se une a un grupo que busca justicia.", videoUrl: "https://jilliandescribecompany.com/e/28ah4ambmvgf" }]}] },
            { title: "Kaiju Nº 8", rating: 8.6, year: 2024, type: 'Serie', duration: "1 Temporada", image: "https://m.media-amazon.com/images/M/MV5BM2VmNTc3OWQtOTVmMy00MGZlLTk3N2QtM2YwZDE5MWVjZmM5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", inMyList: false, description: "En un mundo plagado de monstruos gigantes conocidos como 'kaiju', Kafka Hibino aspira a unirse a la Fuerza de Defensa. Pero cuando un kaiju lo transforma, debe navegar por la vida bajo el radar.", cast: "Masaya Fukunishi, Asami Seto, Wataru Katoh", genres: ['animacion', 'accion', 'scifi', 'destacada'], dateAdded: '2025-07-25', 
                seasons: [{ seasonNumber: 1, episodes: 
                    [{ episode: 1, title: "El hombre que se convirtió en Kaiju", duration: "24m", thumbnail: "https://m.media-amazon.com/images/M/MV5BM2VmNTc3OWQtOTVmMy00MGZlLTk3N2QtM2YwZDE5MWVjZmM5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", description: "El sueño de Kafka de unirse a la Fuerza de Defensa da un giro inesperado.", videoUrl: "https://jkanime.net/jkplayer/um?e=SnplKytPVWpGUGxYR3FZYUNkZ3U2Sis0VnRGRm9TcFE5R3VGR1VxcFRnV0J2OGJPb0ZQejdGTm1sWXBxc1RzQlNsQXpnaUN5dnBhMklKN25LZWlCVnc9PTo6g7S4B4CVrwPsmuCO0CRhJg--&t=4b96f6bdcd5960355301356f6a89eb68" }, 
                    { episode: 2, title: "El kaiju que elimina a otros kaiju", duration: "24m", thumbnail: "https://m.media-amazon.com/images/M/MV5BM2VmNTc3OWQtOTVmMy00MGZlLTk3N2QtM2YwZDE5MWVjZmM5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", description: "Kafka se ha convertido en kaiju sin todavía comprender muy bien por qué, pero con la ayuda de Reno intenta dominar sus nuevos poderes y comienza protegiendo la ciudad de un ataque.", videoUrl: "https://jkanime.net/jkplayer/um?e=bEVVcDF0d3ZrRWVQK0RlM3BXVGMxM250ZitPdGxUbEdZNHVjNEFwNC9VcUhaMTlob2lzaisydktYbXJQU29TL25DdEl5b2JESG1SVWxZNXZnU2FMWWc9PTo6haR82L.uew2iCHQ7yPFhvA--&t=7d38439991471b50836127994d196d7a" }]}] },
            { title: "Stargate SG-1", rating: 8.4, year: 1997, type: 'Serie', duration: "1 Temporada", image: "https://www.verseriesonline.net/storage/poster/series/stargate-sg-1-saison-1.jpg", inMyList: false, description: "Un equipo de exploradores compuesto de soldados y científicos viaja a través de un portal que da acceso a otros planetas. Ellos usan el paso interestelar para explorar nuevos mundos y proteger a la Tierra de fuerzas enemigas.", cast: "Ben Browder , Amanda Tapping , Christopher Judge , Michael Shanks , Claudia Black , Beau Bridges, Richard Dean Anderson", genres: ['accion', 'scifi', 'drama','aventura', 'destacada'], dateAdded: '2025-07-20', 
                seasons: [{ seasonNumber: 1, episodes: 
                    [{ episode: 1, title: "Children of the Gods", duration: "46m", thumbnail: "https://www.verseriesonline.net/storage/poster/series/stargate-sg-1-saison-1.jpg", description: "El coronel Jack O'Neill sale de su retiro para dirigir una nueva expedición de regreso a Abydos, solo para encontrar un viejo amigo, un nuevo enemigo y un uso mucho más amplio del Stargate.", videoUrl: "https://waaw.to/e/Er8tmWqQS9JC?http_referer=https%3A%2F%2Fwww.verseriesonline.net%2F" }]}] },
            { title: "Invasión", rating: 6.2, year: 2021, type: 'Serie', duration: "1 Temporada", image: "https://www.poseidonhd2.co/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fwe6trvt9PfESlC4Td3SWQvmrmb3.jpg&w=256&q=75", inMyList: false, description: "La Tierra es visitada por una especie alienígena que amenaza la existencia de la humanidad. Los eventos se desarrollan a través de los ojos de cinco personas comunes mientras luchan por dar sentido al caos que se desarrolla a su alrededor.", cast: "Golshifteh Farahani, 忽那汐里, Shamier Anderson, India Brown, Enver Gjokaj, Shane Zaza, Erika Alexander", genres: ['accion', 'scifi', 'drama','aventura', 'destacada'], dateAdded: '2025-07-15', 
                seasons: [{ seasonNumber: 1, episodes: 
                    [{ episode: 1, title: "Last Day", duration: "56m", thumbnail: "https://www.poseidonhd2.co/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fwe6trvt9PfESlC4Td3SWQvmrmb3.jpg&w=256&q=75", description: "En todo el mundo comienzan a desarrollarse sucesos extraños e inexplicables. Un sheriff de pueblo pequeño detecta que algo más grande está en juego", videoUrl: "https://auvexiug.com/e/ljzt1i3iwzx0" }]}] },
            { title: "Rumbo al infierno", rating: 6.6, year: 2021, type: 'Serie', duration: "1 Temporada", image: "https://www.verseriesonline.net/storage/poster/series/rumbo-al-infierno.jpg", inMyList: false, description: "La gente escucha predicciones sobre cuándo morirá. Cuando llega ese momento, un ángel de la muerte aparece frente a ellos y toma su último aliento.", cast: "변봉선 , Han Mi-yeon , 양진모 , Kim Dong-wook , Lee Jae-sung , 김석원.", genres: ['scifi', 'drama', 'destacada'], dateAdded: '2025-10-22', 
                seasons: [{ seasonNumber: 1, episodes: 
                    [{ episode: 1, title: "Episodio #1.1", duration: "51m", thumbnail: "https://www.verseriesonline.net/storage/poster/series/rumbo-al-infierno-saison-1.jpg", description: "Los espectadores horrorizados observan cómo bestias sobrenaturales persiguen y matan a un hombre a plena luz del día.", videoUrl: "https://streamwish.to/e/vhrg7m4h8urj" }]}] },
            { title: "Outcast", rating: 7.3, year: 2016, type: 'Serie', duration: "1 Temporada", image: "https://www.verseriesonline.net/storage/poster/series/outcast.jpg", inMyList: false, description: "Un joven busca respuestas sobre por qué ha estado sufriendo posesiones sobrenaturales toda su vida.", cast: "Sarah Byrd , Summer Eubanks , Ron Cosmo Vecchiarelli , David Auge", genres: ['scifi', 'drama', 'destacada'], dateAdded: '2025-10-22', 
                seasons: [{ seasonNumber: 1, episodes: 
                    [{ episode: 2, title: "(Recuerdo) Cuando ella me amaba", duration: "1h", thumbnail: "https://www.verseriesonline.net/storage/poster/series/outcast.jpg", description: "Kyle comienza a cuestionar su historia familiar.", videoUrl: "https://doodstream.com/e/cuqr6u2eh5h6" }]}] },
            { title: "One tree hill", rating: 7.8, year: 2003, type: 'Serie', duration: "1 Temporada", image: "https://m.media-amazon.com/images/M/MV5BMzk2YjJiNzMtZjk2Mi00ZGU5LWI1ZTUtNjIwMGI2NjZiMTVjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", inMyList: false, description: "Los hermanastros Lucas y Nathan Scott alternan entre su relación de familia y su rivalidad, tanto en la cancha de baloncesto como en los corazones de sus amigos, en la pequeña pero no tan tranquila ciudad de Tree Hill, Carolina del Norte.", cast: "James Lafferty , Bethany Joy Lenz , Sophia Bush , Austin Nichols.", genres: ['drama', 'destacada'], dateAdded: '2025-10-22', 
                seasons: [{ seasonNumber: 1, episodes: 
                    [{ episode: 1, title: "Pilot", duration: "1h", thumbnail: "https://m.media-amazon.com/images/M/MV5BMzk2YjJiNzMtZjk2Mi00ZGU5LWI1ZTUtNjIwMGI2NjZiMTVjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", description: "Nathan Scott es la estrella más importante del baloncesto de Tree Hill High y está saliendo con Peyton, una animadora. ", videoUrl: "https://nuuuppp.sbs/wathcpremium/ZSMCRuJ4j9Y0PJqBIeeQ4Yz0SvYXyTQkuMCf2ZCBpKg?h=" }]}] },
        ];
        
        let continueWatchingData = {};
        let watchedContent = new Set();
        let dynamicNotifications = [];
        let lastNotificationCheck = 0;

        function loadWatchedContent() {
            try {
                const watchedData = JSON.parse(localStorage.getItem('watchedContent') || '[]');
                watchedContent = new Set(watchedData);
            } catch (e) {
                console.error("Error loading watched content from localStorage", e);
                watchedContent = new Set();
            }
        }

        function saveWatchedContent() {
            try {
                localStorage.setItem('watchedContent', JSON.stringify(Array.from(watchedContent)));
            } catch (e) {
                console.error("Error saving watched content to localStorage", e);
            }
        }
        
        function markAsWatched(item, details = null) {
            let key;
            if (item.type === 'Serie' && details) {
                key = `${item.title}-S${details.seasonNumber}-E${details.episodeNumber}`;
            } else {
                key = item.title;
            }
            if (!watchedContent.has(key)) {
                watchedContent.add(key);
                saveWatchedContent();
            }
        }
        
        function loadContinueWatching() { try { continueWatchingData = JSON.parse(localStorage.getItem('continueWatching') || '{}'); } catch (e) { console.error("Error loading from localStorage", e); continueWatchingData = {}; } }
        function saveContinueWatching() { try { localStorage.setItem('continueWatching', JSON.stringify(continueWatchingData)); } catch (e) { console.error("Error saving to localStorage", e); } }

        function updateContinueWatching(item, details) {
            const id = `${item.type}-${item.title.replace(/\s+/g, '-')}`;
            continueWatchingData[id] = {
                title: item.title,
                type: item.type,
                lastWatched: Date.now(),
                ...details
            };
            saveContinueWatching();
            renderContinueWatching();
        }

        function createContinueWatchingCard(item) {
            let action, subtitle, progressPercent;
            const dataSources = { 'Película': allMoviesSource, 'Serie': allSeriesContent, 'TV': allTvContent, 'Deporte': allSportsContent };
            const content = dataSources[item.type]?.find(m => m.title === item.title);
            if (!content) return '';

            if (item.type === 'Película') {
                progressPercent = item.progress || 50; 
                subtitle = `Visto por última vez: ${new Date(item.lastWatched).toLocaleDateString()}`;
                action = `playSimpleContent(${item.originalIndex}, '${item.type}')`;
            } else if (item.type === 'Serie') {
                const season = content.seasons.find(s => s.seasonNumber == item.seasonNumber);
                if (!season) return '';
                const lastWatchedIndex = season.episodes.findIndex(e => e.episode == item.episodeNumber);
                const nextEpisodeIndex = lastWatchedIndex + 1;
                
                progressPercent = ((lastWatchedIndex + 1) / season.episodes.length) * 100;
                
                if (nextEpisodeIndex < season.episodes.length) {
                    const nextEpisode = season.episodes[nextEpisodeIndex];
                    subtitle = `Siguiente: T${item.seasonNumber}:E${nextEpisode.episode} "${nextEpisode.title}"`;
                    action = `playEpisode(${item.originalIndex}, ${item.seasonNumber}, ${nextEpisode.episode})`;
                } else {
                    subtitle = `Temporada ${item.seasonNumber} completada`;
                    action = `openModal(${item.originalIndex}, 'Serie')`; 
                }
            } else if (item.type === 'TV' || item.type === 'Deporte') {
                progressPercent = 0; // No hay progreso para TV en vivo
                subtitle = `Visto por última vez: ${new Date(item.lastWatched).toLocaleDateString()}`;
                action = `playSimpleContent(${item.originalIndex}, '${item.type}')`;
            }
            
            return `<div class="continue-card group cursor-pointer" onclick="${action}">
                <div class="relative aspect-video rounded-xl overflow-hidden shadow-lg bg-card-bg">
                    <img src="${content.image}" alt="${content.title}" class="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300">
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="play-button-overlay"><i data-lucide="play" class="w-6 h-6 text-white fill-white transition-transform group-hover:scale-110"></i></div>
                    </div>
                     <div class="absolute bottom-0 left-0 w-full h-1 bg-gray-700/80" style="${(item.type === 'TV' || item.type === 'Deporte') ? 'display: none;' : ''}">
                        <div class="bg-primary-blue h-1" style="width: ${progressPercent}%;"></div>
                     </div>
                </div>
                <div class="pt-2">
                    <p class="text-sm font-semibold text-white truncate">${content.title}</p>
                    <p class="text-xs text-gray-400 truncate">${subtitle}</p>
                </div>
            </div>`;
        }

        function renderContinueWatching() {
            const container = document.getElementById('continue-watching-inner');
            const section = document.getElementById('continue-watching-section');
            if (!container || !section) return;
            const items = Object.values(continueWatchingData).sort((a, b) => b.lastWatched - a.lastWatched);
            if (items.length === 0) {
                section.classList.add('hidden');
                return;
            }
            section.classList.remove('hidden');
            container.innerHTML = items.map(createContinueWatchingCard).join('');
            lucide.createIcons();
        }

        const newReleasesTitles = ["Mortal","El gran diluvio","The War Between the Land and the Sea","Siren","Revival","El Conjuro 4: Últimos ritos","Stranger Things","Trol 2","IT: Bienvenidos a Derry (2025)","Caramelo", "F1 La Película", "Superman", "mision imposible 8", "Los Cuatro Fantásticos", "Elio", "Destino Final: Lazos de Sangre", "Karate Kid: Leyendas", "Jurassic World: Renace", "Primitive War", "Hipnosis: Arma Invisible", "Mi Villano Favorito 4" ];
        const popularMoviesTitles = ["El gran diluvio","El Conjuro 4: Últimos ritos","Superman","Mortal", "mision imposible 8", "Los Cuatro Fantásticos", "Destino Final: Lazos de Sangre", "La Guerra del Mañana", "Karate Kid: Leyendas", "Jurassic World: Renace", "Hipnosis: Arma Invisible", "Trol 2"];
        const popularSeriesTitles = ["The War Between the Land and the Sea","Siren","Revival","Stranger Things","IT: Bienvenidos a Derry (2025)","Shōgun", "The Boys", "Monarch: El legado de los monstruos", "Kaiju Nº 8", "From", "Wolf Pack", "Surface", "La Brea", "Wynonna Earp", "Stargate SG-1","Invasión", "Rumbo al infierno", "Outcast", "One tree hill", "The War Between the Land and the Sea" ];
        const allNewReleases = allMoviesSource.filter(m => newReleasesTitles.includes(m.title));
        const allPopularMovies = allMoviesSource.filter(m => popularMoviesTitles.includes(m.title));
        const allPopularSeries = allSeriesContent.filter(s => popularSeriesTitles.includes(s.title));
        const allMoviesContent = Array.from(new Map(allMoviesSource.map(movie => [movie.title, movie])).values());
        const allTvContent = [
            { title: "El Trece", rating: 7.5, year: 2024, type: 'TV', image: "https://peliculasenfamilia.github.io/img/canales/trece.png", inMyList: false, videoUrl: "https://tvlibre.cc/html/dash.html?get=aHR0cHM6Ly9saXZlLTAxLTAyLWVsdHJlY2Uudm9kZ2MubmV0L2VsdHJlY2V0di9pbmRleC5tM3U4" }, 
            { title: "TN", rating: 8.9, year: 2024, type: 'TV', image: "https://peliculasenfamilia.github.io/img/canales/Component%2048.png", inMyList: false, videoUrl: "https://www.youtube.com/embed/cb12KmMMDJA" },
            { title: "Telefe", rating: 8.9, year: 2024, type: 'TV', image: "https://peliculasenfamilia.github.io/img/canales/Component%2046.png", inMyList: false, videoUrl: "https://dots.bestleague.world/cvatt.html?get=VGVsZWZlSEQ=&lang=1" },
            { title: "America", rating: 8.9, year: 2024, type: 'TV', image: "https://peliculasenfamilia.github.io/img/canales/Component%2047.png", inMyList: false, videoUrl: "https://dots.bestleague.world/cvatt.html?get=VGVsZWZlSEQ=&lang=1" },
            { title: "Canal 26", rating: 8.9, year: 2024, type: 'TV', image: "https://peliculasenfamilia.github.io/img/canales/Component%2050.png", inMyList: false, videoUrl: "https://dots.bestleague.world/cvatt.html?get=MjZfVFZfSEQ&lang=1" },
            { title: "La Nación +", rating: 8.9, year: 2024, type: 'TV', image: "https://peliculasenfamilia.github.io/img/canales/Component%2049.png", inMyList: false, videoUrl: "https://dots.bestleague.world/cvatt.html?get=TGFfTmFjaW9u&lang=1" },
            { title: "TV Pública", rating: 8.9, year: 2024, type: 'TV', image: "https://peliculasenfamilia.github.io/img/canales/Component%2053.png", inMyList: false, videoUrl: "https://dots.bestleague.world/cvatt.html?get=Q2FuYWw3&lang=1" },
            { title: "Canal Rural", rating: 8.9, year: 2024, type: 'TV', image: "https://peliculasenfamilia.github.io/img/canales/Component%2054.png", inMyList: false, videoUrl: "https://dots.bestleague.world/cvatt.html?get=Q2FuYWxfUnVyYWw=&lang=1" },
            { title: "Diputados TV", rating: 8.9, year: 2024, type: 'TV', image: "https://peliculasenfamilia.github.io/img/canales/Component%2059.png", inMyList: false, videoUrl: "https://dots.bestleague.world/cvatt.html?get=RGlwdXRhZG9zX1RW&lang=1" },
            { title: "Canal Encuentro", rating: 8.9, year: 2024, type: 'TV', image: "https://uploads-ssl.webflow.com/64a5fa02f0bb2c4bf6dbdf77/64a5fa02f0bb2c4bf6dbe00d_Component%2057.png", inMyList: false, videoUrl: "https://dots.bestleague.world/cvatt.html?get=RW5jdWVudHJv&lang=1" },
            
        ]; // Use embed URL for YouTube
        const allSportsContent = [
            { title: "TNT SPORTS", rating: 9.5, year: 2024, type: 'Deporte', image: "https://uploads-ssl.webflow.com/64a5fa02f0bb2c4bf6dbdf77/64a7608246440cf94a360e64_Component%2072.png", inMyList: true, videoUrl: "https://dots.bestleague.world/mpdk/?get=aHR0cHM6Ly9jZG4udHJpbWkuY29tLmFyL2xpdmUvc20tbGl2ZS9UTlRfU1BPUlRTX0JLUDQvc2FfbGl2ZV9kYXNoX2xsL1ROVF9TUE9SVFNfQktQNC5tcGQ=&key=NGM3OWEyN2Y0NmY0NGJmYmI3NzRiOGM3ZjFmMWU1N2Y=&key2=NTMwZmQwY2JhOWRjNTU2YTMzOWIwM2FmNGIwOTUxYjk=&start=true" }, 
            { title: "Tyc Sports", rating: 9.1, year: 2024, type: 'Deporte', image: "https://uploads-ssl.webflow.com/64a5fa02f0bb2c4bf6dbdf77/64a760a538423d0aebe285aa_Component%2071.png", inMyList: false, videoUrl: "https://la14hd.com/vivo/canales.php?stream=tycsports" },
            { title: "FOX SPORTS", rating: 9.1, year: 2024, type: 'Deporte', image: "https://uploads-ssl.webflow.com/64a5fa02f0bb2c4bf6dbdf77/64a7665339a7f4d465af996d_Component%2066.png", inMyList: false, videoUrl: "https://envivolibre.com/canal.php?stream=foxsports" },
            { title: "ESPN PREMIUM", rating: 9.1, year: 2024, type: 'Deporte', image: "https://uploads-ssl.webflow.com/64a5fa02f0bb2c4bf6dbdf77/64a76849a5661885a4caf286_ESPNPREMIUM.png", inMyList: false, videoUrl: "https://envivolibre.com/canal.php?stream=espnpremium" },
            { title: "Telefe", rating: 8.9, year: 2024, type: 'Deporte', image: "https://peliculasenfamilia.github.io/img/canales/Component%2046.png", inMyList: false, videoUrl: "https://dots.bestleague.world/cvatt.html?get=VGVsZWZlSEQ=&lang=1" },
        ]; // Use embed URL for YouTube
        let currentPage = 'home'; 

        function createMovieCard(item, index, type) { 
            const isWatched = watchedContent.has(item.title);
            const watchedClass = isWatched ? 'is-watched' : '';
            return `<div class="movie-card-container group cursor-pointer hover:scale-[1.03] transition-transform duration-300" onclick="openModal(${index}, '${type}')"><div class="movie-card rounded-xl overflow-hidden shadow-lg bg-card-bg"><div class="relative aspect-[2/3] overflow-hidden ${watchedClass}"><img src="${item.image}" alt="${item.title}" onerror="this.onerror=null;this.src='https://placehold.co/300x450/444/white?text=${item.title.split(' ').slice(0, 2).join('+')}'" class="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300">${isWatched ? `<div class="watched-overlay"><i data-lucide="check-circle-2" class="w-10 h-10 text-white opacity-90"></i></div>` : ''}<div class="absolute inset-0 flex items-center justify-center"><div class="play-button-overlay"><i data-lucide="play" class="w-6 h-6 text-white fill-white transition-transform group-hover:scale-110"></i></div></div></div></div><div class="pt-2 h-16"><p class="text-sm font-semibold text-white whitespace-normal">${item.title}</p><div class="mt-1 flex items-center space-x-2 text-xs text-gray-400"><i data-lucide="star" class="w-3 h-3 text-yellow-400 fill-yellow-400"></i><span>${item.rating}</span><span class="text-gray-500">•</span><span>${item.year}</span><span class="text-gray-500">•</span><span>${item.type}</span></div></div></div>`;
        }
        const renderView = (viewId, data, sections) => { const dataSources = { 'Película': allMoviesSource, 'Serie': allSeriesContent, 'TV': allTvContent, 'Deporte': allSportsContent }; Object.entries(sections).forEach(([containerId, filterFn]) => { const filteredList = data.filter(filterFn); const container = document.getElementById(containerId); if (container) { container.innerHTML = filteredList.map(item => { const source = dataSources[item.type]; const originalIndex = source.findIndex(sourceItem => sourceItem.title === item.title); return createMovieCard(item, originalIndex, item.type); }).join(''); } }); };
        function renderAllViews() { const homeContent = [...allNewReleases, ...allPopularMovies, ...allPopularSeries]; const uniqueHomeContent = Array.from(new Map(homeContent.map(item => [item.title, item])).values()); renderView('home-view', uniqueHomeContent, { 'new-releases-inner': item => newReleasesTitles.includes(item.title), 'popular-movies-inner': item => popularMoviesTitles.includes(item.title), 'popular-series-inner': item => popularSeriesTitles.includes(item.title) }); renderView('series-view', allSeriesContent, { 'featured-series-inner': s => s.genres.includes('destacada'), 'scifi-series-inner': s => s.genres.includes('scifi') || s.genres.includes('fantasia'), 'drama-series-inner': s => s.genres.includes('drama') }); renderView('movies-view', allMoviesContent, { 'featured-movies-inner': m => m.genres.includes('destacada'), 'comedy-movies-inner': m => m.genres.includes('comedia'), 'drama-movies-inner': m => m.genres.includes('drama'), 'fantasy-scifi-movies-inner': m => m.genres.includes('fantasia') || m.genres.includes('scifi'), 'family-movies-inner': m => m.genres.includes('familiar'), 'romance-movies-inner': m => m.genres.includes('romantica') }); renderView('tv-view', allTvContent, { 'live-tv-inner': t => true, 'reality-tv-inner': t => false }); renderView('sports-view', allSportsContent, { 'live-sports-inner': s => true, 'replay-sports-inner': s => false }); renderMyListView(); renderContinueWatching(); }
        function updateActiveLink(page) { document.querySelectorAll('.nav-link').forEach(link => { link.classList.remove('bg-primary-blue', 'text-white', 'shadow-lg', 'shadow-primary-blue/30', 'font-semibold'); link.classList.add('text-gray-300', 'hover:bg-white/10'); }); const activeLink = document.getElementById(`nav-${page}`); if (activeLink) { activeLink.classList.remove('text-gray-300', 'hover:bg-white/10'); activeLink.classList.add('bg-primary-blue', 'text-white', 'font-semibold', 'shadow-lg', 'shadow-primary-blue/30'); } }
        function navigateTo(page) { currentPage = page; document.querySelectorAll('.view-container').forEach(view => view.classList.add('hidden')); document.getElementById(`${page}-view`).classList.remove('hidden'); document.getElementById('search-input').value = ''; filterContent(); if (window.innerWidth < 1024) toggleSidebar(); updateActiveLink(page); document.querySelector('.main-content').scrollTop = 0; lucide.createIcons(); }
        window.navigateTo = navigateTo;
        function filterContent() { const searchTerm = document.getElementById('search-input').value.toLowerCase().trim(); const dataMap = { 'home': [...allNewReleases, ...allPopularMovies, ...allSeriesContent], 'series': allSeriesContent, 'movies': allMoviesContent, 'tv': allTvContent, 'sports': allSportsContent, 'mylist': [...allMoviesSource, ...allSeriesContent, ...allTvContent, ...allSportsContent].filter(i => i.inMyList) }; const currentData = dataMap[currentPage]; const filteredData = searchTerm ? currentData.filter(item => item.title.toLowerCase().includes(searchTerm)) : currentData; const carousels = document.getElementById(`${currentPage}-view`).querySelector('[id$="-carousels"], [id$="-grid"]'); const hero = document.getElementById(`${currentPage}-hero-section`); const continueSection = document.getElementById('continue-watching-section'); if (carousels) carousels.style.display = searchTerm ? 'none' : 'block'; if (hero) hero.style.display = searchTerm ? 'none' : 'flex'; if (continueSection) continueSection.style.display = searchTerm ? 'none' : (Object.keys(continueWatchingData).length > 0 ? 'block' : 'none'); document.getElementById('no-results').classList.toggle('hidden', filteredData.length > 0 || !searchTerm); let searchResultsContainer = document.getElementById('search-results'); if (searchTerm) { if(!searchResultsContainer) { searchResultsContainer = document.createElement('div'); searchResultsContainer.id = 'search-results'; searchResultsContainer.className = 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 pt-8'; document.getElementById(`${currentPage}-view`).appendChild(searchResultsContainer); } const dataSources = { 'Película': allMoviesSource, 'Serie': allSeriesContent, 'TV': allTvContent, 'Deporte': allSportsContent }; searchResultsContainer.innerHTML = filteredData.map(item => { const source = dataSources[item.type]; const originalIndex = source.findIndex(sourceItem => sourceItem.title === item.title); return createMovieCard(item, originalIndex, item.type); }).join(''); } else { if(searchResultsContainer) searchResultsContainer.remove(); } lucide.createIcons(); }
        window.filterContent = filterContent;
        const sidebar = document.getElementById('sidebar'); const overlay = document.getElementById('overlay'); function toggleSidebar() { sidebar.classList.toggle('open'); overlay.classList.toggle('hidden'); }
        document.getElementById('open-sidebar').addEventListener('click', toggleSidebar); document.getElementById('close-sidebar').addEventListener('click', toggleSidebar); overlay.addEventListener('click', toggleSidebar);
        
        function scrollCarousel(button, amount) {
            const row = button.closest('.relative').querySelector('.movie-row');
            if (row) {
                row.scrollBy({ left: amount, behavior: 'smooth' });
            }
        }
        window.scrollCarousel = scrollCarousel;

        function toggleInMyList(index, type) { const dataSources = { 'Película': allMoviesSource, 'Serie': allSeriesContent, 'TV': allTvContent, 'Deporte': allSportsContent }; const source = dataSources[type]; const item = source?.[index]; if (!item) return; item.inMyList = !item.inMyList; updateMyListButtons(item); renderMyListView(); }
        window.toggleInMyList = toggleInMyList;
        function updateMyListButtons(item) { const modalTitle = document.getElementById('modal-title').textContent; if (modalTitle === item.title) { const myListButton = document.getElementById('modal-mylist-button'); if (myListButton) { myListButton.innerHTML = item.inMyList ? `<i data-lucide="check" class="w-5 h-5"></i><span>En Mi Lista</span>` : `<i data-lucide="bookmark" class="w-5 h-5"></i><span>Mi Lista</span>`; myListButton.classList.toggle('bg-green-500/20', item.inMyList); myListButton.classList.toggle('text-green-400', item.inMyList); } } if (item.title === 'Superman') { const heroButton = document.getElementById('hero-mylist-button'); if (heroButton) { heroButton.innerHTML = item.inMyList ? `<i data-lucide="check" class="w-5 h-5"></i><span>En Mi Lista</span>` : `<i data-lucide="plus" class="w-5 h-5"></i><span>Mi Lista</span>`; } } lucide.createIcons(); }
        function renderMyListView() { const allContent = [...allMoviesSource, ...allSeriesContent, ...allTvContent, ...allSportsContent]; const myListItems = allContent.filter(item => item.inMyList); const container = document.getElementById('mylist-grid'); if (!container) return; if (myListItems.length === 0) { container.innerHTML = `<div class="col-span-full text-center py-12 text-gray-400"><i data-lucide="list-video" class="w-12 h-12 mx-auto mb-4 text-primary-blue"></i><p class="text-xl font-semibold">Tu lista está vacía.</p><p>Añade películas y series para verlas aquí.</p></div>`; } else { const dataSources = { 'Película': allMoviesSource, 'Serie': allSeriesContent, 'TV': allTvContent, 'Deporte': allSportsContent }; container.innerHTML = myListItems.map(item => { const source = dataSources[item.type]; const originalIndex = source.findIndex(si => si.title === item.title); return createMovieCard(item, originalIndex, item.type); }).join(''); } lucide.createIcons(); }
        const modal = document.getElementById('detail-modal'); let currentModalItem = null;
        function createEpisodeItem(episode, seriesIndex, seasonNumber) { 
            const series = allSeriesContent[seriesIndex];
            const watchedKey = `${series.title}-S${seasonNumber}-E${episode.episode}`;
            const isWatched = watchedContent.has(watchedKey);
            const watchedClass = isWatched ? 'is-watched' : '';
            return `<div class="flex items-start p-3 rounded-lg hover:bg-sidebar-bg group cursor-pointer transition-colors duration-200" onclick="playEpisode(${seriesIndex}, '${seasonNumber}', ${episode.episode})"><span class="text-gray-400 font-semibold mr-4 w-5 text-center">${episode.episode}</span><div class="relative w-28 h-16 flex-shrink-0 ${watchedClass}"><img src="${episode.thumbnail}" class="w-full h-full object-cover rounded-md">${isWatched ? `<div class="watched-overlay"><i data-lucide="check-circle" class="w-6 h-6 text-white"></i></div>` : ''}<div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity play-icon-container"><i data-lucide="play" class="w-6 h-6 text-white"></i></div></div><div class="flex-grow mx-4"><h5 class="font-semibold text-sm text-white">${episode.title}</h5><p class="text-xs text-gray-400 mt-1 line-clamp-2">${episode.description || ''}</p></div><span class="text-xs text-gray-400 ml-4">${episode.duration || ''}</span></div>`;
        }
        function renderEpisodes(item, seasonNumber, seriesIndex) { const seasonData = item.seasons.find(s => s.seasonNumber == seasonNumber); const episodesList = document.getElementById('episodes-list'); if (seasonData && episodesList) { episodesList.innerHTML = seasonData.episodes.map(ep => createEpisodeItem(ep, seriesIndex, seasonNumber)).join(''); lucide.createIcons(); } }
        
        // Función unificada para reproducir Películas, TV y Deportes
        function playSimpleContent(index, type) {
            const dataSources = { 'Película': allMoviesSource, 'TV': allTvContent, 'Deporte': allSportsContent };
            const source = dataSources[type];
            const item = source?.[index];

            if (item) {
                let details = { originalIndex: index };
                if (type === 'Película') {
                    details.progress = 50; // Añadir progreso solo para películas
                }
                
                updateContinueWatching(item, details);
                markAsWatched(item); 
                openPlayerModal(item.videoUrl);
            }
        }
        window.playSimpleContent = playSimpleContent;

        function playEpisode(seriesIndex, seasonNumber, episodeNumber) { 
            const series = allSeriesContent[seriesIndex]; 
            if (!series) return; 
            const season = series.seasons.find(s => s.seasonNumber == seasonNumber); 
            if (!season) return; 
            const episode = season.episodes.find(e => e.episode == episodeNumber); 
            if (!episode) return; 
            updateContinueWatching(series, { originalIndex: seriesIndex, seasonNumber, episodeNumber }); 
            markAsWatched(series, { seasonNumber, episodeNumber }); 
            renderEpisodes(series, seasonNumber, seriesIndex); 
            openPlayerModal(episode.videoUrl); 
        }
        window.playEpisode = playEpisode;

        function openModal(index, type) { 
            const dataSources = { 'Película': allMoviesSource, 'Serie': allSeriesContent, 'TV': allTvContent, 'Deporte': allSportsContent };
            const source = dataSources[type]; 
            const item = source?.[index]; 
            if (!item) return; 
            currentModalItem = { index, type }; 
            document.getElementById('modal-backdrop').style.backgroundImage = `url('${item.image}')`; 
            document.getElementById('modal-title').textContent = item.title; 
            document.getElementById('modal-rating').textContent = item.rating; 
            document.getElementById('modal-year').textContent = item.year; 
            document.getElementById('modal-duration').textContent = item.duration || ''; 
            document.getElementById('modal-description').textContent = item.description || 'Descripción no disponible.'; 
            const castSection = document.getElementById('modal-cast-section'); 
            if (item.cast) { 
                document.getElementById('modal-cast').textContent = item.cast; 
                castSection.classList.remove('hidden'); 
            } else { 
                castSection.classList.add('hidden'); 
            } 
            const genresContainer = document.getElementById('modal-genres'); 
            genresContainer.innerHTML = ''; 
            if (item.genres) { 
                item.genres.forEach(genre => { 
                    const genreEl = document.createElement('span'); 
                    genreEl.className = 'bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full'; 
                    genreEl.textContent = genre.charAt(0).toUpperCase() + genre.slice(1); 
                    genresContainer.appendChild(genreEl); 
                }); 
            } 
            const playButton = document.getElementById('modal-play-button'); 
            const episodesSection = document.getElementById('modal-episodes-section'); 
            
            if (item.type === 'Serie' && item.seasons) { 
                playButton.classList.add('hidden'); 
                episodesSection.classList.remove('hidden'); 
                const seasonSelector = document.getElementById('season-selector'); 
                seasonSelector.innerHTML = item.seasons.map(s => `<option value="${s.seasonNumber}">Temporada ${s.seasonNumber}</option>`).join(''); 
                seasonSelector.onchange = () => renderEpisodes(item, seasonSelector.value, index); 
                renderEpisodes(item, 1, index); 
            } else { // Maneja Película, TV, y Deporte
                playButton.classList.remove('hidden'); 
                episodesSection.classList.add('hidden'); 
                if (item.videoUrl) { 
                    playButton.onclick = () => playSimpleContent(index, type); // Usar la nueva función
                    playButton.disabled = false; 
                    playButton.classList.remove('opacity-50', 'cursor-not-allowed'); 
                } else { 
                    playButton.onclick = null; 
                    playButton.disabled = true; 
                    playButton.classList.add('opacity-50', 'cursor-not-allowed'); 
                } 
            } 
            document.getElementById('modal-mylist-button').onclick = () => toggleInMyList(index, type); 
            updateMyListButtons(item); 
            modal.classList.remove('hidden'); 
            document.body.style.overflow = 'hidden'; 
            lucide.createIcons(); 
        }
        window.openModal = openModal;
        function closeModal() { modal.classList.add('hidden'); if (playerModal.classList.contains('hidden')) { document.body.style.overflow = 'auto'; } }
        window.closeModal = closeModal;
        modal.addEventListener('click', (event) => { if (event.target === modal) { closeModal(); } });
        const playerModal = document.getElementById('video-player-modal'); const playerIframe = document.getElementById('video-player-iframe');
        function openPlayerModal(url) { 
            closeModal(); 
            // Convertir URLs de YouTube watch a embed
            if (url.includes("youtube.com/watch?v=")) {
                const videoId = url.split('v=')[1].split('&')[0];
                url = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            }
            playerIframe.src = url; 
            playerModal.classList.remove('hidden'); 
            document.body.style.overflow = 'hidden'; 
            lucide.createIcons(); 
        }
        window.openPlayerModal = openPlayerModal;
        function closePlayerModal() { playerModal.classList.add('hidden'); playerIframe.src = ''; document.body.style.overflow = 'auto'; renderContinueWatching(); renderAllViews(); }
        window.closePlayerModal = closePlayerModal;
        
        // --- Notification System ---
        const notificationButton = document.getElementById('notification-button');
        const notificationsPanel = document.getElementById('notifications-panel');
        const notificationDot = document.getElementById('notification-dot');
        const notificationList = document.getElementById('notification-list');

        function loadNotificationState() {
            try {
                lastNotificationCheck = parseInt(localStorage.getItem('lastNotificationCheck') || '0', 10);
                if (lastNotificationCheck === 0) {
                    lastNotificationCheck = Date.now() - 7 * 24 * 60 * 60 * 1000;
                    localStorage.setItem('lastNotificationCheck', lastNotificationCheck);
                }
            } catch (e) { console.error("Error loading notification state", e); }
        }

        function generateNotifications() {
            dynamicNotifications = [];
            allMoviesSource.forEach(movie => {
                if(movie.dateAdded) {
                    dynamicNotifications.push({ icon: 'film', color: 'blue-400', title: `${movie.title} ya está disponible`, time: new Date(movie.dateAdded) });
                }
            });
            allSeriesContent.forEach(series => {
                if (series.dateAdded) {
                    dynamicNotifications.push({ icon: 'tv', color: 'green-400', title: `Nueva serie: ${series.title}`, time: new Date(series.dateAdded) });
                }
                series.seasons.forEach(season => {
                    season.episodes.forEach(episode => {
                        if (episode.dateAdded) {
                            dynamicNotifications.push({ icon: 'zap', color: 'yellow-400', title: `Nuevo episodio de ${series.title}`, time: new Date(episode.dateAdded) });
                        }
                    });
                });
            });
            dynamicNotifications.sort((a, b) => b.time - a.time);
        }

        function formatTimeAgo(date) {
            const now = new Date();
            const seconds = Math.floor((now - date) / 1000);
            if (seconds < 60) return 'justo ahora';
            const minutes = Math.floor(seconds / 60);
            if (minutes < 60) return `hace ${minutes} min`;
            const hours = Math.floor(minutes / 60);
            if (hours < 24) return `hace ${hours}h`;
            const days = Math.floor(hours / 24);
            return `hace ${days}d`;
        }

        function renderNotifications() {
            if (!notificationList) return;
            const hasUnseen = dynamicNotifications.some(n => n.time.getTime() > lastNotificationCheck);
            notificationDot.classList.toggle('hidden', !hasUnseen);
            const notificationsToRender = dynamicNotifications.slice(0, 10);
            if (notificationsToRender.length === 0) {
                notificationList.innerHTML = `<p class="text-sm text-gray-400 text-center p-4">No hay notificaciones.</p>`;
                return;
            }
            notificationList.innerHTML = notificationsToRender.map(n => {
                const isNew = n.time.getTime() > lastNotificationCheck;
                return `<a href="#" class="flex items-center p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <div class="flex-shrink-0 h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center mr-3"><i data-lucide="${n.icon}" class="w-4 h-4 text-${n.color}"></i></div>
                    <div class="flex-grow"><p class="text-sm font-semibold text-white">${n.title}</p><p class="text-xs text-gray-400">${formatTimeAgo(n.time)}</p></div>
                    ${isNew ? '<span class="h-2 w-2 bg-primary-blue rounded-full ml-auto self-center"></span>' : ''}
                </a>`;
            }).join('');
            lucide.createIcons();
        }
        
        if (notificationButton) {
            notificationButton.addEventListener('click', (e) => {
                e.stopPropagation();
                notificationsPanel.classList.toggle('hidden');
                if (!notificationsPanel.classList.contains('hidden')) {
                     notificationDot.classList.add('hidden');
                     lastNotificationCheck = Date.now();
                     localStorage.setItem('lastNotificationCheck', lastNotificationCheck);
                     setTimeout(() => renderNotifications(), 300);
                }
            });
        }
        document.getElementById('mark-read-button').addEventListener('click', () => {
            lastNotificationCheck = Date.now();
            localStorage.setItem('lastNotificationCheck', lastNotificationCheck);
            renderNotifications();
        });
        document.addEventListener('click', (e) => { if (notificationsPanel && !notificationsPanel.contains(e.target) && !notificationButton.contains(e.target)) { notificationsPanel.classList.add('hidden'); } });

        window.onload = () => { 
            loadContinueWatching(); 
            loadWatchedContent();
            loadNotificationState();
            generateNotifications();
            renderNotifications();
            renderAllViews(); 
            navigateTo('home'); 
            const supermanIndex = allMoviesSource.findIndex(m => m.title === 'Superman'); 
            if (supermanIndex !== -1) { 
                const superman = allMoviesSource[supermanIndex]; 
                document.getElementById('hero-play-button').onclick = () => playSimpleContent(supermanIndex, 'Película'); 
                document.getElementById('hero-mylist-button').onclick = () => toggleInMyList(supermanIndex, 'Película'); 
                updateMyListButtons(superman); 
            } 
            if (sidebar) { sidebar.classList.remove('open'); } 
            if (overlay) { overlay.classList.add('hidden'); } 
        };