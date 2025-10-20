
        lucide.createIcons();
        
        // --- DATOS SIMULADOS ---
        const allMoviesSource = [
            { title: "Caramelo", rating: 7.2, year: 2025, duration: "1h 41m", type: 'Película', image: "https://m.media-amazon.com/images/M/MV5BNTRlMzI4MDItZDJiNS00YmNmLWE1MmQtNjZjYTVhNDdmYjQ1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", genres: ['drama', 'comedia', 'familiar', ], description: "La película trata sobre un chef cuyo diagnóstico médico lo lleva a encontrar esperanza en un perro callejero llamado Amendoim.", cast: "Ademara Barros, Amendoim, Arianne Botelho, Benício Alves Torres, Bruno Vinicius", inMyList: false, videoUrl: "https://vimeos.net/embed-71fdjopqwc9g.html" },
            { title: "F1 La Película", rating: 7.7, year: 2025, duration: "2h 10m", type: 'Película', image: "https://image.tmdb.org/t/p/w342/yKIG63pXN89EfbTA7yKpwxAU1rf.jpg", genres: ['drama', 'accion'], description: "Un ex piloto de Fórmula 1 regresa a la competición para ser mentor de un joven prodigio en el emocionante y peligroso mundo de las carreras.", cast: "Brad Pitt, Damson Idris, Kerry Condon", inMyList: false, videoUrl: "https://vimeos.net/embed-567smpecp27m.html" },
            { title: "Superman", rating: 7.2, year: 2025, duration: "2h 30m", type: 'Película', image: "https://image.tmdb.org/t/p/w342/lfMKNOaaS2jGT3QKUaiFA8cO7DC.jpg", genres: ['fantasia', 'scifi', 'accion', 'destacada'], description: "La película sigue a Superman mientras busca reconciliar su herencia kryptoniana con su crianza humana como Clark Kent de Smallville, Kansas.", cast: "David Corenswet, Rachel Brosnahan, Nicholas Hoult", inMyList: true, videoUrl: "https://yuguaab.com/e/zgk5itgv132o" },
            { title: "mision imposible 8", rating: 7.2, year: 2025, duration: "2h 45m", type: 'Película', image: "https://image.tmdb.org/t/p/w342/haOjJGUV00dKlZaJWgjM1UD1cJV.jpg", genres: ['accion', 'destacada', 'thriller'], description: "Ethan Hunt y su equipo del FMI se embarcan en su misión más peligrosa hasta la fecha: rastrear una nueva y aterradora arma que amenaza a toda la humanidad.", cast: "Tom Cruise, Hayley Atwell, Ving Rhames", inMyList: false, videoUrl: "https://vimeos.net/embed-heqjtv7ef12.html" },
            { title: "Los Cuatro Fantásticos", rating: 7.1, year: 2025, duration: "2h 15m", type: 'Película', image: "https://image.tmdb.org/t/p/w342/ckfiXWGEMWrUP53cc6QyHijLlhl.jpg", genres: ['fantasia', 'scifi', 'accion', 'destacada'], description: "Cuatro astronautas adquieren superpoderes tras una exposición a rayos cósmicos y deben usarlos para defender la Tierra de una amenaza galáctica.", cast: "Pedro Pascal, Vanessa Kirby, Ebon Moss-Bachrach", inMyList: false, videoUrl: "https://bingezove.com/v/l0khu0wlxpd6" },
            { title: "Elio", rating: 6.7, year: 2025, duration: "1h 50m", type: 'Película', image: "https://image.tmdb.org/t/p/w342/fGjwHlv8bCjZypi2bHbbSmyIGMV.jpg", genres: ['fantasia', 'scifi', 'familiar'], description: "Un niño es transportado accidentalmente a través de la galaxia y es confundido con el embajador intergaláctico de la Tierra.", cast: "Yonas Kibreab, America Ferrera, Jameela Jamil", inMyList: false, videoUrl: "https://vimeos.net/embed-u5rzs30rp4s5.html" },
            { title: "Destino Final: Lazos de Sangre", rating: 6.7, year: 2025, duration: "1h 55m", type: 'Película', image: "https://image.tmdb.org/t/p/w342/frNkbclQpexf3aUzZrnixF3t5Hw.jpg", genres: ['horror', 'destacada'], description: "Un nuevo grupo de jóvenes debe encontrar una manera de escapar del macabro diseño de la Muerte después de que uno de ellos tiene una premonición.", cast: "Brec Bassinger, Teo Briones, Kaitlyn Santa Juana", inMyList: false, videoUrl: "https://vimeos.net/embed-3zh5v5e8teu4.html" },
            { title: "Karate Kid: Leyendas", rating: 6.3, year: 2025, duration: "2h 05m", type: 'Película', image: "https://image.tmdb.org/t/p/w342/bwNAjGUsHt35eqT0Aj8NHU02WPl.jpg", genres: ['accion', 'familiar', 'drama', 'destacada'], description: "Un joven prodigio del karate de China se traslada a la Costa Este, donde encuentra un mentor estricto pero sabio que le enseñará más que solo artes marciales.", cast: "Ben Wang, Jackie Chan, Ralph Macchio", inMyList: false, videoUrl: "https://vimeos.net/embed-vps3xcruxazs.html" },
            { title: "Jurassic World: Renace", rating: 5.9, year: 2025, duration: "2h 20m", type: 'Película', image: "https://image.tmdb.org/t/p/w342/Aw1FSO4gWk2Zjr2sfuyQ4lnK3Gc.jpg", genres: ['scifi', 'accion', 'destacada'], description: "Una nueva era de dinosaurios comienza, y un grupo de científicos y aventureros debe enfrentarse a nuevas amenazas en un mundo donde los humanos ya no son la especie dominante.", cast: "Scarlett Johansson, Jonathan Bailey, Mahershala Ali", inMyList: false, videoUrl: "https://vimeos.net/embed-r3hsoz54c3vf.html" },
            { title: "Primitive War", rating: 5.9, year: 2025, duration: "1h 40m", type: 'Película', image: "https://image.tmdb.org/t/p/w342/egDAs0vh2SzTR07eUzdcC1XYkTS.jpg", genres: ['scifi', 'horror'], description: "Un equipo de soldados de élite es enviado a una jungla remota para una misión de rescate, solo para descubrir que están siendo cazados por dinosaurios modificados genéticamente.", cast: "Ryan Kwanten, Tricia Helfer, Jeff Fahey", inMyList: false, videoUrl: "https://vimeos.net/embed-mrywycuhxu5z.html" },
            { title: "Hipnosis: Arma Invisible", rating: 5.5, year: 2025, duration: "2h 00m", type: 'Película', image: "https://image.tmdb.org/t/p/w342/3IhGkkalwXguTlceGSl8XUJZOVI.jpg", genres: ['accion', 'thriller'], description: "Un detective debe resolver una serie de atracos de alto riesgo mientras se enfrenta a un misterioso villano que utiliza la hipnosis para controlar a la gente.", cast: "Ben Affleck, Alice Braga, William Fichtner", inMyList: false, videoUrl: "https://vimeos.net/embed-mrywycuhxu5z.html" },
            { title: "La Guerra del Mañana", rating: 6.6, year: 2021, duration: "2h 18m", type: 'Película', image: "https://image.tmdb.org/t/p/w342/tzp6VzED2TBc02bkYoYnQa6r2OK.jpg", genres: ['scifi', 'accion', 'drama'], description: "Un grupo de viajeros en el tiempo llega desde el año 2021 para entregar un mensaje urgente: 30 años en el futuro, la humanidad está perdiendo una guerra global contra una mortal especie alienígena.", cast: "Chris Pratt, Yvonne Strahovski, J.K. Simmons", videoUrl: "https://vimeos.net/embed-mbz2fvbnvtv6.html", inMyList: false },
            { title: "Xeno", rating: 5.5, year: 2025, duration: "1h 43m", type: 'Película', image: "https://www.poseidonhd2.co/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fa173ryH3yQXvP2y0jriL3dYjWfX.jpg&w=256&q=75", genres: ['scifi', 'accion', 'drama', 'destacada'], description: "Una adolescente convierte en su amiga a un aterrador extraterrestre después de que se estrella cerca del desierto. La joven logra lidiar con su triste madre y con el violento novio de ella y, al mismo tiempo, protege a su nuevo amigo.", cast: " Lulu Wilson, Omari Hardwick, Paul Schneider, Trae Romano, Wrenn Schmidt, Josh Cooke.", videoUrl: "https://vimeos.net/embed-mbz2fvbnvtv6.html", inMyList: false },
            { title: "Mi Villano Favorito 4", rating: 7.8, year: 2024, duration: "1h 35m", type: 'Película', image: "https://www.poseidonhd2.co/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fb6JX0fBne5yPFNBtdp4Imi3CpiE.jpg&w=256&q=75", genres: ['comedia', 'familiar', 'animacion'], description: "Gru se enfrenta a un nuevo némesis, Maxime Le Mal, y su novia Valentina, por lo cual la familia se ve obligada a huir.", cast: "Steve Carell, Kristen Wiig, Will Ferrell", videoUrl: "https://guxhag.com/e/ok2by17zzeuj", inMyList: false },
            { title: "Amigos Imaginarios", rating: 7.5, year: 2024, duration: "1h 44m", type: 'Película', image: "https://image.tmdb.org/t/p/w342//8RgGuC7w8JxhykauzTC4bwha1J8.jpg", genres: ['comedia', 'familiar', 'fantasia', 'destacada'], description: "Una niña que puede ver a los amigos imaginarios de todo el mundo se embarca en una aventura mágica para reconectar a los amigos imaginarios olvidados con sus niños.", cast: "Cailey Fleming, Ryan Reynolds, John Krasinski", videoUrl: "https://vimeos.net/embed-jhke9mr9bw0b.html", inMyList: false },
            { title: "Cualquiera Menos Tú", rating: 7.1, year: 2023, duration: "1h 43m", type: 'Película', image: "https://www.poseidonhd2.co/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FsmIleWSSXhbBunnWkKmyGj9oVaj.jpg&w=256&q=75", genres: ['romantica', 'comedia', 'destacada'], description: "Después de una primera cita increíble, la ardiente atracción entre Bea y Ben se enfría. Pero cuando se reencuentran inesperadamente en una boda en Australia, fingen ser la pareja perfecta para mantener las apariencias.", cast: "Sydney Sweeney, Glen Powell, Alexandra Shipp", videoUrl: "https://dsvplay.com/e/ekpdaahg7ivq", inMyList: false }
        ];

        const allSeriesContent = [
            { 
                title: "Surface", rating: 7.2, year: 2005, type: 'Serie', duration: "1 Temporada", image: "https://m.media-amazon.com/images/M/MV5BZmI1N2ViYzktZTVhOS00YmQ4LTllM2MtNDUyMDAwZDUwYjkyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", inMyList: true, description: "Una bióloga marina descubre una nueva forma de vida en el océano que podría cambiar el futuro de la humanidad para siempre.", cast: "Lake Bell, Jay R. Ferguson, Carter Jenkins", genres: ['scifi', 'drama'],
                seasons: [{ seasonNumber: 1, episodes: [{ episode: 1, title: "Hay algo en el agua", duration: "48m", thumbnail: "https://m.media-amazon.com/images/M/MV5BZmI1N2ViYzktZTVhOS00YmQ4LTllM2MtNDUyMDAwZDUwYjkyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", description: "El descubrimiento de una extraña criatura marina desencadena una investigación a nivel mundial.", videoUrl: "https://videostr.net/embed-1/v3/e-1/2UBECDHXXIgW?z=" }, { episode: 2, title: "El misterio se profundiza", duration: "49m", thumbnail: "https://m.media-amazon.com/images/M/MV5BZmI1N2ViYzktZTVhOS00YmQ4LTllM2MtNDUyMDAwZDUwYjkyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", description: "Mientras los científicos intentan comprender a la criatura, ocurren eventos extraños en todo el mundo.", videoUrl: "https://goodstream.one/embed-69cbxnsvsabc.html" }]}]
            }, 
            { 
                title: "La Brea", rating: 5.8, year: 2021, type: 'Serie', duration: "3 Temporadas", image: "https://image.tmdb.org/t/p/w342/jyHK7qFX2HvaAULSAO7aztdanyr.jpg", inMyList: false, description: "Un enorme socavón se abre en Los Ángeles, arrastrando a cientos de personas a una misteriosa tierra prehistórica.", cast: "Natalie Zea, Eoin Macken, Chiké Okonkwo", genres: ['scifi', 'drama', 'destacada'],
                seasons: [
                    { seasonNumber: 1, episodes: [
                        { episode: 1, title: "Piloto", duration: "43m", thumbnail: "https://image.tmdb.org/t/p/w342/jyHK7qFX2HvaAULSAO7aztdanyr.jpg", description: "Un socavón masivo abre un portal a un mundo primitivo en el corazón de L.A.", videoUrl: "https://guxhag.com/e/dojyrn1jo95h" }] }, 
                    { seasonNumber: 2, episodes: [
                        { episode: 1, title: "El día siguiente", duration: "44m", thumbnail: "https://www.verseriesonline.net/storage/poster/series/la-brea-saison-2.jpg", description: "Los supervivientes luchan por establecer un campamento y encontrar respuestas sobre su nueva realidad.", videoUrl: "https://goodstream.one/embed-69cbxnsvsabc.html" }]}]
            },
            { 
                title: "Monarch: El legado de los monstruos", rating: 8.1, year: 2023, type: 'Serie', duration: "1 Temporada", image: "https://image.tmdb.org/t/p/w342/8ZSrqUsa1JN9FkIQU8iTFOMw4D5.jpg", inMyList: false, description: "Tras la batalla entre Godzilla y los Titanes, dos hermanos siguen los pasos de su padre para descubrir la conexión de su familia con la organización Monarch.", cast: "Anna Sawai, Kiersey Clemons, Ren Watabe", genres: ['scifi', 'accion', 'destacada'],
                seasons: [{ seasonNumber: 1, episodes: [
                    { episode: 1, title: "Legado", duration: "50m", thumbnail: "https://image.tmdb.org/t/p/w342/8ZSrqUsa1JN9FkIQU8iTFOMw4D5.jpg", description: "El inicio de la búsqueda de la verdad sobre los monstruos y Monarch.", videoUrl: "https://dinisglows.com/v/fz9d2ysr8bma" }]}]
            },
            { 
                title: "From", rating: 8.3, year: 2022, type: 'Serie', duration: "2 Temporadas", image: "https://m.media-amazon.com/images/M/MV5BYzM5ZWMxOGEtZjEyMC00YjQ0LThiYjEtZjVkZGEzN2NlOGEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", inMyList: false, description: "Los habitantes de un pueblo aterrador luchan por mantenerse con vida y buscar una salida, pero se ven acosados por criaturas nocturnas.", cast: "Harold Perrineau, Catalina Sandino Moreno, Eion Bailey", genres: ['misterio', 'horror', 'drama', 'destacada'],
                seasons: [{ seasonNumber: 1, episodes: 
                    [{ episode: 1, title: "Un largo camino a casa", duration: "55m", thumbnail: "https://m.media-amazon.com/images/M/MV5BYzM5ZWMxOGEtZjEyMC00YjQ0LThiYjEtZjVkZGEzN2NlOGEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", description: "Una familia se desvía y llega a un pueblo del que no se puede salir.", videoUrl: "https://dinisglows.com/v/q5e4mv754sh5" },
                     { episode: 2, title: "Así son las cosas ahora", duration: "55m", thumbnail: "https://m.media-amazon.com/images/M/MV5BYzM5ZWMxOGEtZjEyMC00YjQ0LThiYjEtZjVkZGEzN2NlOGEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", description: "En Colony House, Tabitha y Julie se enfrentan a su nueva realidad de pesadilla. En el bosque, Jim, Boyd y Kristi se esfuerzan por tratar las heridas de Ethan. La tragedia llega de una fuente inesperada cuando surge una nueva amenaza.", videoUrl: "https://dinisglows.com/v/pgxswiuy4gqj" },
                     { episode: 3, title: "Así son las cosas ahora", duration: "55m", thumbnail: "https://m.media-amazon.com/images/M/MV5BYzM5ZWMxOGEtZjEyMC00YjQ0LThiYjEtZjVkZGEzN2NlOGEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", description: "La familia Matthews debe elegir a cuál de los dos asentamientos se unirá. Mientras tanto, Jade acepta su situación y Boyd se enfrenta a una decisión imposible que afecta al corazón de la vida en la ciudad.", videoUrl: "https://dinisglows.com/v/hol85a8523wi" },
                     { episode: 4, title: "Una roca y un camino lejano", duration: "55m", thumbnail: "https://m.media-amazon.com/images/M/MV5BYzM5ZWMxOGEtZjEyMC00YjQ0LThiYjEtZjVkZGEzN2NlOGEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", description: "Julie y Ethan hacen nuevos amigos, sus padres discuten sus diferencias y Boyd y Khatri hablan sobre el papel de Boyd en la comunidad.", videoUrl: "https://dinisglows.com/v/10olwiedbrvq" },
                     { episode: 5, title: "Siluetas", duration: "55m", thumbnail: "https://m.media-amazon.com/images/M/MV5BYzM5ZWMxOGEtZjEyMC00YjQ0LThiYjEtZjVkZGEzN2NlOGEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", description: "Jim, Tabitha y Ethan comienzan a hacerse preguntas sobre dónde se encuentran con la esperanza de que eso los lleve a casa. Ellis y Fatima le muestran a Julie el lado más alegre de la vida en la ciudad.", videoUrl: "https://dinisglows.com/v/5qpphdfwatgw" },
                    ]}]
            },
            { 
                title: "Manifest", rating: 7.0, year: 2018, type: 'Serie', duration: "4 Temporadas", image: "https://www.verseriesonline.net/storage/poster/series/manifest-saison-1.jpg", inMyList: false, description: "Cuando el vuelo 828 de Montego Air aterriza de manera segura después de un vuelo turbulento pero de rutina, la tripulación y los pasajeros se sienten aliviados. Sin embargo, aunque para ellos han pasado pocas horas, el mundo ha envejecido cinco años y sus amigos, familias y colegas, después de llorar su pérdida, han perdido la esperanza y están intentando seguir adelante. Ahora, frente a lo imposible, a todos se les da una segunda oportunidad.", cast: "Melissa Roxburgh , Josh Dallas , J.R. Ramirez , Luna Blaise , Parveen Kaur , Matt Long , Holly Taylor , Daryl Edwards , Ty Doran", genres: ['misterio', 'fantasy', 'drama','scifi', 'destacada'],
                seasons: [{ seasonNumber: 1, episodes: 
                    [{ episode: 1, title: "Piloto", duration: "42m", thumbnail: "https://www.verseriesonline.net/storage/poster/series/manifest-saison-1.jpg", description: "Los pasajeros a bordo de un vuelo que regresa cinco años después de desaparecer deben reconstruir sus antiguas vidas y lidiar con misteriosas", videoUrl: "https://dsvplay.com/e/uee37r2htm49" },
                     { episode: 2, title: "Reingreso", duration: "42m", thumbnail: "https://www.verseriesonline.net/storage/poster/series/manifest-saison-1.jpg", description: "Michaela se ve obligada a afrontar el hecho de que Jared está casado; Ben ayuda a un compañero de viaje;", videoUrl: "https://dsvplay.com/e/ihwspibp7485" },
                     { episode: 3, title: "Turbulencia", duration: "42m", thumbnail: "https://www.verseriesonline.net/storage/poster/series/manifest-saison-1.jpg", description: "Ben y Michaela investigan un asesinato impactante por temor a que esté relacionado con el vuelo 828.", videoUrl: "https://dsvplay.com/e/kmyusovujme2" },
                     { episode: 4, title: "Equipaje no reclamado", duration: "42m", thumbnail: "https://www.verseriesonline.net/storage/poster/series/manifest-saison-1.jpg", description: "Saanvi solicita la ayuda de Ben para descubrir un secreto sobre el avión; Michaela comienza a cuestionar la naturaleza de los llamados.", videoUrl: "https://dsvplay.com/e/2d0fjb81z8xf" },
                    
                    ]}]
            },
            { 
                title: "Shōgun", rating: 8.7, year: 2024, type: 'Serie', duration: "1 Temporada", image: "https://image.tmdb.org/t/p/w342/uIoDvVOQaKjSfz2oihkVS8M7l1v.jpg", inMyList: false, description: "Ambientada en el Japón de 1600, Lord Yoshii Toranaga lucha por su vida mientras sus enemigos en el Consejo de Regentes se unen contra él.", cast: "Hiroyuki Sanada, Cosmo Jarvis, Anna Sawai", genres: ['drama', 'historia', 'destacada'],
                seasons: [{ seasonNumber: 1, episodes: [{ episode: 1, title: "Anjin", duration: "1h 10m", thumbnail: "https://image.tmdb.org/t/p/w342/uIoDvVOQaKjSfz2oihkVS8M7l1v.jpg", description: "Un misterioso barco europeo es encontrado abandonado en un pueblo pesquero cercano.", videoUrl: "https://goodstream.one/embed-69cbxnsvsabc.html" }]}]
            },
            { 
                title: "Wynonna Earp", rating: 7.6, year: 2016, type: 'Serie', duration: "4 Temporadas", image: "https://image.tmdb.org/t/p/w342/qnIaDelA81dmFaXrhpz6M6dpGSD.jpg", inMyList: false, description: "La bisnieta de Wyatt Earp lucha contra demonios y otras criaturas sobrenaturales. Con su arma única, envía a los revenants de vuelta al infierno.", cast: "Melanie Scrofano, Tim Rozon, Dominique Provost-Chalkley", genres: ['fantasia', 'accion', 'western', 'destacada'],
                seasons: [{ seasonNumber: 1, episodes: 
                    [{ episode: 1, title: "Purgatorio", duration: "45m", thumbnail: "https://www.verseriesonline.net/storage/poster/series/wynonna-earp-saison-1.jpg", description: "Wynonna regresa a su ciudad natal para asumir el papel que le corresponde como la heredera Earp.", videoUrl: "https://jilliandescribecompany.com/e/cx8w8xfybp0j" }]}]
            },
            { 
                title: "Wolf Pack", rating: 7.9, year: 2023, type: 'Serie', duration: "1 Temporada", image: "https://image.tmdb.org/t/p/w342/rbCANmS1ogweUkIBghP03EHtdHB.jpg", inMyList: false, description: "Las vidas de dos adolescentes cambian para siempre cuando un incendio forestal en California despierta a una aterradora criatura sobrenatural.", cast: "Sarah Michelle Gellar, Rodrigo Santoro, Armani Jackson", genres: ['fantasia', 'drama', 'misterio', 'destacada'],
                seasons: [{ seasonNumber: 1, episodes: 
                    [{ episode: 1, title: "Del lobo al hombre", duration: "52m", thumbnail: "https://image.tmdb.org/t/p/w342/rbCANmS1ogweUkIBghP03EHtdHB.jpg", description: "Un incendio forestal desata el caos y despierta a una bestia.", videoUrl: "https://guxhag.com/e/vkqwk96gxwb7" }]}]
            },
            { 
                title: "The Boys", rating: 8.5, year: 2019, type: 'Serie', duration: "4 Temporadas", image: "https://images.justwatch.com/poster/315996736/s718/temporada-1.jpg", inMyList: false, description: "Un grupo de vigilantes se propone acabar con los superhéroes corruptos que abusan de sus superpoderes.", cast: "Karl Urban, Jack Quaid, Antony Starr", genres: ['accion', 'comedia', 'scifi', 'destacada'],
                seasons: [{ seasonNumber: 1, episodes: [{ episode: 1, title: "El nombre del juego", duration: "1h 1m", thumbnail: "https://images.justwatch.com/poster/315996736/s718/temporada-1.jpg", description: "Cuando un superhéroe mata a su novia, un joven se une a un grupo que busca justicia.", videoUrl: "https://jilliandescribecompany.com/e/28ah4ambmvgf" }]}]
            },
            { 
                title: "Kaiju Nº 8", rating: 8.6, year: 2024, type: 'Serie', duration: "1 Temporada", image: "https://m.media-amazon.com/images/M/MV5BM2VmNTc3OWQtOTVmMy00MGZlLTk3N2QtM2YwZDE5MWVjZmM5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", inMyList: false, description: "En un mundo plagado de monstruos gigantes conocidos como 'kaiju', Kafka Hibino aspira a unirse a la Fuerza de Defensa. Pero cuando un kaiju lo transforma, debe navegar por la vida bajo el radar.", cast: "Masaya Fukunishi, Asami Seto, Wataru Katoh", genres: ['animacion', 'accion', 'scifi', 'destacada'],
                seasons: [{ seasonNumber: 1, episodes: 
                    [{ episode: 1, title: "El hombre que se convirtió en Kaiju", duration: "24m", thumbnail: "https://m.media-amazon.com/images/M/MV5BM2VmNTc3OWQtOTVmMy00MGZlLTk3N2QtM2YwZDE5MWVjZmM5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", description: "El sueño de Kafka de unirse a la Fuerza de Defensa da un giro inesperado.", videoUrl: "https://jkanime.net/jkplayer/um?e=SnplKytPVWpGUGxYR3FZYUNkZ3U2Sis0VnRGRm9TcFE5R3VGR1VxcFRnV0J2OGJPb0ZQejdGTm1sWXBxc1RzQlNsQXpnaUN5dnBhMklKN25LZWlCVnc9PTo6g7S4B4CVrwPsmuCO0CRhJg--&t=4b96f6bdcd5960355301356f6a89eb68" },
                     { episode: 2, title: "El kaiju que elimina a otros kaiju", duration: "24m", thumbnail: "https://m.media-amazon.com/images/M/MV5BM2VmNTc3OWQtOTVmMy00MGZlLTk3N2QtM2YwZDE5MWVjZmM5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", description: "Kafka se ha convertido en kaiju sin todavía comprender muy bien por qué, pero con la ayuda de Reno intenta dominar sus nuevos poderes y comienza protegiendo la ciudad de un ataque.", videoUrl: "https://jkanime.net/jkplayer/um?e=bEVVcDF0d3ZrRWVQK0RlM3BXVGMxM250ZitPdGxUbEdZNHVjNEFwNC9VcUhaMTlob2lzaisydktYbXJQU29TL25DdEl5b2JESG1SVWxZNXZnU2FMWWc9PTo6haR82L.uew2iCHQ7yPFhvA--&t=7d38439991471b50836127994d196d7a" }
                    ]}]
            },
            { 
                title: "Stargate SG-1", rating: 8.4, year: 1997, type: 'Serie', duration: "1 Temporada", image: "https://www.verseriesonline.net/storage/poster/series/stargate-sg-1-saison-1.jpg", inMyList: false, description: "Un equipo de exploradores compuesto de soldados y científicos viaja a través de un portal que da acceso a otros planetas. Ellos usan el paso interestelar para explorar nuevos mundos y proteger a la Tierra de fuerzas enemigas.", cast: "Ben Browder , Amanda Tapping , Christopher Judge , Michael Shanks , Claudia Black , Beau Bridges, Richard Dean Anderson", genres: ['accion', 'scifi', 'drama','aventura', 'destacada'],
                seasons: [{ seasonNumber: 1, episodes: [{ episode: 1, title: "Children of the Gods", duration: "46m", thumbnail: "https://www.verseriesonline.net/storage/poster/series/stargate-sg-1-saison-1.jpg", description: "El coronel Jack O'Neill sale de su retiro para dirigir una nueva expedición de regreso a Abydos, solo para encontrar un viejo amigo, un nuevo enemigo y un uso mucho más amplio del Stargate.", videoUrl: "https://waaw.to/e/Er8tmWqQS9JC?http_referer=https%3A%2F%2Fwww.verseriesonline.net%2F" }]}]
            },
            { 
                title: "Invasión", rating: 6.2, year: 2021, type: 'Serie', duration: "1 Temporada", image: "https://www.poseidonhd2.co/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fwe6trvt9PfESlC4Td3SWQvmrmb3.jpg&w=256&q=75", inMyList: false, description: "La Tierra es visitada por una especie alienígena que amenaza la existencia de la humanidad. Los eventos se desarrollan a través de los ojos de cinco personas comunes mientras luchan por dar sentido al caos que se desarrolla a su alrededor.", cast: "Golshifteh Farahani, 忽那汐里, Shamier Anderson, India Brown, Enver Gjokaj, Shane Zaza, Erika Alexander", genres: ['accion', 'scifi', 'drama','aventura', 'destacada'],
                seasons: [{ seasonNumber: 1, episodes: [{ episode: 1, title: "Last Day", duration: "56m", thumbnail: "https://www.poseidonhd2.co/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fwe6trvt9PfESlC4Td3SWQvmrmb3.jpg&w=256&q=75", description: "En todo el mundo comienzan a desarrollarse sucesos extraños e inexplicables. Un sheriff de pueblo pequeño detecta que algo más grande está en juego", videoUrl: "https://auvexiug.com/e/ljzt1i3iwzx0" }]}]
            },
        ];

        const newReleasesTitles = ["Caramelo", "F1 La Película", "Superman", "mision imposible 8", "Los Cuatro Fantásticos", "Elio", "Destino Final: Lazos de Sangre", "Karate Kid: Leyendas", "Jurassic World: Renace", "Primitive War", "Hipnosis: Arma Invisible", "Mi Villano Favorito 4" ];
        const popularMoviesTitles = ["Superman", "mision imposible 8", "Los Cuatro Fantásticos", "Destino Final: Lazos de Sangre", "Mi Villano Favorito 4", "La Guerra del Mañana", "Karate Kid: Leyendas", "Jurassic World: Renace", "Hipnosis: Arma Invisible"];
        const popularSeriesTitles = ["Shōgun", "The Boys", "Monarch: El legado de los monstruos", "Kaiju Nº 8", "From", "Wolf Pack", "Surface", "La Brea", "Wynonna Earp", "Stargate SG-1","Invasión" ];
        
        const allNewReleases = allMoviesSource.filter(m => newReleasesTitles.includes(m.title));
        const allPopularMovies = allMoviesSource.filter(m => popularMoviesTitles.includes(m.title));
        const allPopularSeries = allSeriesContent.filter(s => popularSeriesTitles.includes(s.title));
        const allMoviesContent = Array.from(new Map(allMoviesSource.map(movie => [movie.title, movie])).values());

        const allTvContent = [{ title: "Noticias 24/7", rating: 7.5, year: 2024, type: 'TV', image: "https://placehold.co/300x450/00008B/white?text=NOTICIAS", inMyList: false }, { title: "La Casa del Dragón", rating: 8.9, year: 2024, type: 'TV', image: "https://placehold.co/300x450/A52A2A/white?text=HOTD", inMyList: false }];
        const allSportsContent = [{ title: "Fútbol: Final", rating: 9.5, year: 2024, type: 'Deporte', image: "https://placehold.co/300x450/008000/white?text=FUTBOL", inMyList: true }, { title: "Baloncesto: Playoffs", rating: 9.1, year: 2024, type: 'Deporte', image: "https://placehold.co/300x450/FFA500/black?text=BASKET", inMyList: false }];
        
        let currentPage = 'home'; 

        function createMovieCard(item, index, type) {
            return `<div class="movie-card-container group cursor-pointer hover:scale-[1.03] transition-transform duration-300" onclick="openModal(${index}, '${type}')"><div class="movie-card rounded-xl overflow-hidden shadow-lg bg-card-bg"><div class="relative aspect-[2/3] overflow-hidden"><img src="${item.image}" alt="${item.title}" onerror="this.onerror=null;this.src='https://placehold.co/300x450/444/white?text=${item.title.split(' ').slice(0, 2).join('+')}'" class="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"><div class="absolute inset-0 flex items-center justify-center"><div class="play-button-overlay"><i data-lucide="play" class="w-6 h-6 text-white fill-white transition-transform group-hover:scale-110"></i></div></div></div></div><div class="pt-2 h-16"><p class="text-sm font-semibold text-white whitespace-normal">${item.title}</p><div class="mt-1 flex items-center space-x-2 text-xs text-gray-400"><i data-lucide="star" class="w-3 h-3 text-yellow-400 fill-yellow-400"></i><span>${item.rating}</span><span class="text-gray-500">•</span><span>${item.year}</span><span class="text-gray-500">•</span><span>${item.type}</span></div></div></div>`;
        }
        
        const renderView = (viewId, data, sections) => {
            const dataSources = { 'Película': allMoviesSource, 'Serie': allSeriesContent, 'TV': allTvContent, 'Deporte': allSportsContent };
            Object.entries(sections).forEach(([containerId, filterFn]) => {
                const filteredList = data.filter(filterFn);
                const container = document.getElementById(containerId);
                if (container) {
                     container.innerHTML = filteredList.map(item => {
                         const source = dataSources[item.type];
                         const originalIndex = source.findIndex(sourceItem => sourceItem.title === item.title);
                         return createMovieCard(item, originalIndex, item.type);
                     }).join('');
                }
            });
        };

        function renderAllViews() {
            const homeContent = [...allNewReleases, ...allPopularMovies, ...allPopularSeries];
            const uniqueHomeContent = Array.from(new Map(homeContent.map(item => [item.title, item])).values());
            
            renderView('home-view', uniqueHomeContent, { 
                'new-releases-inner': item => newReleasesTitles.includes(item.title), 
                'popular-movies-inner': item => popularMoviesTitles.includes(item.title), 
                'popular-series-inner': item => popularSeriesTitles.includes(item.title) 
            });
            renderView('series-view', allSeriesContent, { 
                'featured-series-inner': s => s.genres.includes('destacada'), 
                'scifi-series-inner': s => s.genres.includes('scifi') || s.genres.includes('fantasia'), 
                'drama-series-inner': s => s.genres.includes('drama') 
            });
            renderView('movies-view', allMoviesContent, { 'featured-movies-inner': m => m.genres.includes('destacada'), 'comedy-movies-inner': m => m.genres.includes('comedia'), 'drama-movies-inner': m => m.genres.includes('drama'), 'fantasy-scifi-movies-inner': m => m.genres.includes('fantasia') || m.genres.includes('scifi'), 'family-movies-inner': m => m.genres.includes('familiar'), 'romance-movies-inner': m => m.genres.includes('romantica') });
            renderView('tv-view', allTvContent, { 'live-tv-inner': t => t.title.includes('Noticias'), 'reality-tv-inner': t => true });
            renderView('sports-view', allSportsContent, { 'live-sports-inner': s => true, 'replay-sports-inner': s => true });
            renderMyListView();
        }
        
        function updateActiveLink(page) {
            document.querySelectorAll('.nav-link').forEach(link => { link.classList.remove('bg-primary-blue', 'text-white', 'shadow-lg', 'shadow-primary-blue/30', 'font-semibold'); link.classList.add('text-gray-300', 'hover:bg-white/10'); });
            const activeLink = document.getElementById(`nav-${page}`);
            if (activeLink) { activeLink.classList.remove('text-gray-300', 'hover:bg-white/10'); activeLink.classList.add('bg-primary-blue', 'text-white', 'font-semibold', 'shadow-lg', 'shadow-primary-blue/30'); }
        }

        function navigateTo(page) {
            currentPage = page;
            document.querySelectorAll('.view-container').forEach(view => view.classList.add('hidden'));
            document.getElementById(`${page}-view`).classList.remove('hidden');
            document.getElementById('search-input').value = ''; filterContent();
            if (window.innerWidth < 1024) toggleSidebar(); 
            updateActiveLink(page); document.querySelector('.main-content').scrollTop = 0; lucide.createIcons();
        }
        window.navigateTo = navigateTo;
        
        function filterContent() {
            const searchTerm = document.getElementById('search-input').value.toLowerCase().trim();
            const dataMap = { 'home': [...allNewReleases, ...allPopularMovies, ...allSeriesContent], 'series': allSeriesContent, 'movies': allMoviesContent, 'tv': allTvContent, 'sports': allSportsContent, 'mylist': [...allMoviesSource, ...allSeriesContent, ...allTvContent, ...allSportsContent].filter(i => i.inMyList) };
            const currentData = dataMap[currentPage];
            const filteredData = searchTerm ? currentData.filter(item => item.title.toLowerCase().includes(searchTerm)) : currentData;
            
            const carousels = document.getElementById(`${currentPage}-view`).querySelector('[id$="-carousels"], [id$="-grid"]');
            const hero = document.getElementById(`${currentPage}-hero-section`);
            if (carousels) carousels.style.display = searchTerm ? 'none' : 'block';
            if (hero) hero.style.display = searchTerm ? 'none' : 'flex';
            
            document.getElementById('no-results').classList.toggle('hidden', filteredData.length > 0 || !searchTerm);

            let searchResultsContainer = document.getElementById('search-results');
            if (searchTerm) {
                 if(!searchResultsContainer) { searchResultsContainer = document.createElement('div'); searchResultsContainer.id = 'search-results'; searchResultsContainer.className = 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 pt-8'; document.getElementById(`${currentPage}-view`).appendChild(searchResultsContainer); }
                 const dataSources = { 'Película': allMoviesSource, 'Serie': allSeriesContent, 'TV': allTvContent, 'Deporte': allSportsContent };
                 searchResultsContainer.innerHTML = filteredData.map(item => {
                      const source = dataSources[item.type]; const originalIndex = source.findIndex(sourceItem => sourceItem.title === item.title); return createMovieCard(item, originalIndex, item.type);
                 }).join('');
            } else { if(searchResultsContainer) searchResultsContainer.remove(); }
            lucide.createIcons();
        }
        window.filterContent = filterContent;
        
        const sidebar = document.getElementById('sidebar'); const overlay = document.getElementById('overlay'); function toggleSidebar() { sidebar.classList.toggle('open'); overlay.classList.toggle('hidden'); }
        document.getElementById('open-sidebar').addEventListener('click', toggleSidebar); document.getElementById('close-sidebar').addEventListener('click', toggleSidebar); overlay.addEventListener('click', toggleSidebar);
        function scrollRow(rowId, amount) { document.getElementById(rowId)?.scrollBy({ left: amount, behavior: 'smooth' }); }
        window.scrollRow = scrollRow;

        // --- Lógica de "Mi Lista" ---
        function toggleInMyList(index, type) {
            const dataSources = { 'Película': allMoviesSource, 'Serie': allSeriesContent, 'TV': allTvContent, 'Deporte': allSportsContent };
            const source = dataSources[type];
            const item = source?.[index];
            if (!item) return;
            item.inMyList = !item.inMyList;
            updateMyListButtons(item);
            renderMyListView();
        }
        window.toggleInMyList = toggleInMyList;

        function updateMyListButtons(item) {
            const modalTitle = document.getElementById('modal-title').textContent;
            if (modalTitle === item.title) {
                const myListButton = document.getElementById('modal-mylist-button');
                if (myListButton) {
                    myListButton.innerHTML = item.inMyList ? `<i data-lucide="check" class="w-5 h-5"></i><span>En Mi Lista</span>` : `<i data-lucide="bookmark" class="w-5 h-5"></i><span>Mi Lista</span>`;
                    myListButton.classList.toggle('bg-green-500/20', item.inMyList);
                    myListButton.classList.toggle('text-green-400', item.inMyList);
                }
            }
            if (item.title === 'Superman') {
                 const heroButton = document.getElementById('hero-mylist-button');
                 if (heroButton) {
                    heroButton.innerHTML = item.inMyList ? `<i data-lucide="check" class="w-5 h-5"></i><span>En Mi Lista</span>` : `<i data-lucide="plus" class="w-5 h-5"></i><span>Mi Lista</span>`;
                 }
            }
            lucide.createIcons();
        }

        function renderMyListView() {
            const allContent = [...allMoviesSource, ...allSeriesContent, ...allTvContent, ...allSportsContent];
            const myListItems = allContent.filter(item => item.inMyList);
            const container = document.getElementById('mylist-grid');
            if (!container) return;
            if (myListItems.length === 0) {
                container.innerHTML = `<div class="col-span-full text-center py-12 text-gray-400"><i data-lucide="list-video" class="w-12 h-12 mx-auto mb-4 text-primary-blue"></i><p class="text-xl font-semibold">Tu lista está vacía.</p><p>Añade películas y series para verlas aquí.</p></div>`;
            } else {
                const dataSources = { 'Película': allMoviesSource, 'Serie': allSeriesContent, 'TV': allTvContent, 'Deporte': allSportsContent };
                container.innerHTML = myListItems.map(item => {
                    const source = dataSources[item.type]; const originalIndex = source.findIndex(si => si.title === item.title);
                    return createMovieCard(item, originalIndex, item.type);
                }).join('');
            }
            lucide.createIcons();
        }
        
        // --- Lógica del Modal de Detalles ---
        const modal = document.getElementById('detail-modal');
        let currentModalItem = null;

        function createEpisodeItem(episode) {
            return `
                <div class="flex items-start p-3 rounded-lg hover:bg-sidebar-bg cursor-pointer transition-colors duration-200" onclick="openPlayerModal('${episode.videoUrl}')">
                    <span class="text-gray-400 font-semibold mr-4 w-5 text-center">${episode.episode}</span>
                    <div class="relative w-28 h-16 flex-shrink-0">
                        <img src="${episode.thumbnail}" class="w-full h-full object-cover rounded-md">
                        <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <i data-lucide="play" class="w-6 h-6 text-white"></i>
                        </div>
                    </div>
                    <div class="flex-grow mx-4">
                        <h5 class="font-semibold text-sm">${episode.title}</h5>
                        <p class="text-xs text-gray-400 mt-1 line-clamp-2">${episode.description}</p>
                    </div>
                    <span class="text-xs text-gray-400 ml-4">${episode.duration}</span>
                </div>`;
        }
        
        function renderEpisodes(item, seasonNumber) {
            const seasonData = item.seasons.find(s => s.seasonNumber == seasonNumber);
            const episodesList = document.getElementById('episodes-list');
            if (seasonData && episodesList) {
                episodesList.innerHTML = seasonData.episodes.map(createEpisodeItem).join('');
                lucide.createIcons();
            }
        }

        function openModal(index, type) {
            const dataSources = { 'Película': allMoviesSource, 'Serie': allSeriesContent, 'TV': allTvContent, 'Deporte': allSportsContent };
            const source = dataSources[type];
            const item = source?.[index]; if (!item) return;
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
            if (item.genres) { item.genres.forEach(genre => { const genreEl = document.createElement('span'); genreEl.className = 'bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full'; genreEl.textContent = genre.charAt(0).toUpperCase() + genre.slice(1); genresContainer.appendChild(genreEl); }); }
            
            const playButton = document.getElementById('modal-play-button');
            const episodesSection = document.getElementById('modal-episodes-section');
            if (item.type === 'Serie' && item.seasons) {
                playButton.classList.add('hidden');
                episodesSection.classList.remove('hidden');
                const seasonSelector = document.getElementById('season-selector');
                seasonSelector.innerHTML = item.seasons.map(s => `<option value="${s.seasonNumber}">Temporada ${s.seasonNumber}</option>`).join('');
                seasonSelector.onchange = () => renderEpisodes(item, seasonSelector.value);
                renderEpisodes(item, 1);
            } else {
                playButton.classList.remove('hidden');
                episodesSection.classList.add('hidden');
                if (item.videoUrl) { playButton.onclick = () => openPlayerModal(item.videoUrl); playButton.disabled = false; playButton.classList.remove('opacity-50', 'cursor-not-allowed');
                } else { playButton.onclick = null; playButton.disabled = true; playButton.classList.add('opacity-50', 'cursor-not-allowed'); }
            }
            
            document.getElementById('modal-mylist-button').onclick = () => toggleInMyList(index, type);
            updateMyListButtons(item);

            modal.classList.remove('hidden'); document.body.style.overflow = 'hidden'; lucide.createIcons();
        }
        window.openModal = openModal;
        
        function closeModal() { modal.classList.add('hidden'); if (playerModal.classList.contains('hidden')) { document.body.style.overflow = 'auto'; } }
        window.closeModal = closeModal;
        modal.addEventListener('click', (event) => { if (event.target === modal) { closeModal(); } });

        // --- Lógica del Modal de Video ---
        const playerModal = document.getElementById('video-player-modal'); const playerIframe = document.getElementById('video-player-iframe');
        function openPlayerModal(url) { closeModal(); playerIframe.src = url; playerModal.classList.remove('hidden'); document.body.style.overflow = 'hidden'; lucide.createIcons(); }
        window.openPlayerModal = openPlayerModal;
        function closePlayerModal() { playerModal.classList.add('hidden'); playerIframe.src = ''; document.body.style.overflow = 'auto'; }
        window.closePlayerModal = closePlayerModal;

        // --- Inicialización ---
        window.onload = () => {
             renderAllViews();
             navigateTo('home');
             const supermanIndex = allMoviesSource.findIndex(m => m.title === 'Superman');
             if (supermanIndex !== -1) {
                const superman = allMoviesSource[supermanIndex];
                document.getElementById('hero-play-button').onclick = () => openModal(supermanIndex, 'Película');
                document.getElementById('hero-mylist-button').onclick = () => toggleInMyList(supermanIndex, 'Película');
                updateMyListButtons(superman);
             }
             sidebar.classList.remove('open'); overlay.classList.add('hidden');
        };
    