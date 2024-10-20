export interface Song {
    title: string;
    artist: string;
    album: string;
    audioSrc: string;
    lyrics: string;
    imageSrc: string; // Ny egenskap for bilde
    styleOfMusic: string;
  }
  
  export const songs: Song[] = [
    {
      title: "Fingrene fulle av ostepop",
      artist: "Marentius",
      album: "Fingrene fulle av ostepop",
      audioSrc: "/Fingrene_fulle_av_ostepop.wav", // Relativ bane fra public-mappen
      lyrics: `Prompt: 

[Intro]
(Instrumental intro med synth og bass)

[Verse 1]
Det er sent på kvelden, jeg er helt alene,  
En skål med ostepop, ja, det er bedre enn å trene,  
Fingrene blir klissete, jeg blir helt sei,  
uansett hva jeg gjør, setter det seg fast på meg.

[Pre-Chorus]
For jeg kan ikke stoppe, det er noe med smaken,  
Sprø og cheesy, jeg har ikke smakt maken,  
Men når posen er tom, og jeg ser på mine hender, 
Ser jeg sporene av ostepop som aldri ender.

[Chorus]
Fingrene fulle av ostepop,  
jeg må bare stoppe,  
Det setter seg fast,
og det går ikke bort,  
Men det er så godt,
fingrene fulle av ostepop.

[Interlude]
(Instrumental break med tung bass og synth)

[Verse 2]
Jeg prøver å få det bort, men det hjelper ikke,  
Smuler overalt, men det er ekkelt å slikke,  
Fingrene lyser opp i oransje neon,  
Ostepop er godt, det er alt jeg kan be om.

[Pre-Chorus]
For jeg kan ikke stoppe, det er noe med smaken,  
Sprø og cheesy, jeg har ikke smakt maken,  
Men når posen er tom, og jeg ser på mine hender, 
Ser jeg sporene av ostepop som aldri ender.

[Chorus]
Fingrene fulle av ostepop,  
jeg må bare stoppe,  
Det setter seg fast,
og det går ikke bort,  
Men det er så godt,
fingrene fulle av ostepop.

[Bridge]
Og når posen er tom, og alt er spist opp,  
Er smuler av ostepop, overalt på min kropp,  
Men jeg angrer ikke, det var verdt hver bit,
Ostepop er livet, men smulene er slit.

[Chorus]
Fingrene fulle av ostepop,  
jeg må bare stoppe,  
Det setter seg fast,
og det går ikke bort,  
Men det er så godt,
fingrene fulle av ostepop.

[Outro]
(Fade out med langsom synth og bass, en siste linje i bakgrunnen:)  
«Det setter seg fast,
og det går ikke bort,  
Men det er så godt, fingrene fulle av ostepop.»`,
      imageSrc: "/Fingrene_fulle_av_ostepop.png", // Relativ bane til bilde
      styleOfMusic:"Pop, Synthwave, The Weekend-stil"
    },
    {
      title: "Star of the party",
      artist: "Marentius",
      album: "Star of the party",
      audioSrc: "/Star_of_the_party.wav", // Relativ bane fra public-mappen
      lyrics: `Prompt:

[Verse]
Emma in the spot now
She lights up the room wow
Kindest heart you ever seen
Dancing like a party queen

[Verse 2]
Wherever she goes fun's alive
Emma's got that inner drive
Every word she says so sweet
Everyone she meets just can't compete

[Chorus]
Emma Emma lights the way
Turns the night into the day
Smiles so bright they all sway
Celebrate this party stay

[Verse 3]
Sommer vibes all around
Laughter echoes like a sound
Her joy's a nonstop beat
Emma's love is such a treat

[Bridge]
In her presence all's so clear
Worries vanish disappear
Emma Emma can't you see
You're the star of the party

[Chorus]
Emma Emma lights the way
Turns the night into the day
Smiles so bright they all sway
Celebrate this party stay`,
      imageSrc: "/star_of_the_party.png", // Relativ bane til bilde
      styleOfMusic:"Pop, Rap"
    },
    {
        title: "Et fotballag, en kompisgjeng, vi rykka opp sammen",
        artist: "Marentius",
        album: "Et fotballag, en kompisgjeng, vi rykka opp sammen",
        audioSrc: "/Et_fotballag_en_kompisgjeng_vi_rykket_opp_sammen.wav", // Relativ bane fra public-mappen
        lyrics: `Prompt: 

[Intro]

[Pre-Chorus]
Vi tok det back to back, vi gjorde det med stil
Nå er vi klare igjen, og det er ikke tvil
Vi kommer til å vinne igjen, bare vent å se
Femte divisjon, nå skal dere få smake!

[Chorus]
Vi har gjort det før, og vi gjør det igjen!
Vi rykker opp, og vi gjør det sammen,
Et fotballag, en kompisgjeng, vi klarte det jammen!
Et fotballag, en kompisgjeng, vi rykka opp sammen!

[Drop]
Tveter!!
[Kraftig EDM dropp med en intens beat]

[Pre-Chorus]
Vi tok det back to back, vi gjorde det med stil
Nå er vi klare igjen, og det er ikke tvil
Vi kommer til å vinne igjen, bare vent å se
Femte divisjon, nå skal dere få smake!

[Chorus]
Vi har gjort det før, og vi gjør det igjen!
Vi rykker opp, og vi gjør det sammen,
Et fotballag, en kompisgjeng, vi klarte det jammen!
Et fotballag, en kompisgjeng, vi rykka opp sammen!

[Drop]
Tveter!!
[Kraftig EDM dropp med en intens beat]

[Outro]`,
        imageSrc: "/opprykk.png", // Relativ bane til bilde
        styleOfMusic:"Party, EDM, Pop"
      },
      {
        title: "Tveter - Beste i by'n",
        artist: "Marentius",
        album: "Tveter - Beste i by'n",
        audioSrc: "/Tveter_Beste_i_byen.wav", // Relativ bane fra public-mappen
        lyrics: `Prompt: 

[Intro]
[Short Instrumental: Upbeat drum and guitar riff]

[Verse 1]
Når vi kommer på banen, hører dere damene rope,
Vi er klare for kamp, motstanderene har lov til å håpe.
Noen løper som vinden, andre sliter med farten,
Men når vi spiller sammen, er vi bedre en mesteparten!

[Chorus]
Tveter, beste i by'n!
Vi scorer mål, og drikker seiersvin!
Ingen kan stoppe vår seiersdans,
Tveter, ingen har sjans’!

[Verse 2]
Vi har en keeper som stopper alt, som en mur i mål,
Og vår spiss treffer nett som han hadde gullkontroll.
Når vi spiller ball, ruller motstanderen på gresset,
For ingen slår oss, det er ikke engang verdt stresset.

[Chorus]
Tveter, beste i by'n!
Vi scorer mål, og drikker seiersvin!
Ingen kan stoppe vår seiersdans,
Tveter, ingen har sjans’!

[Bridge]
Vi er kanskje ikke treningsgale,
Men vi vinner likevel alle våre kamper.
Så når fløyta går og seieren er vår,
Vet vi hvem som virkelig vinner iår!

[Chorus]
Tveter, beste i by'n!
Vi scorer mål, og drikker seiersvin!
Ingen kan stoppe vår seiersdans,
Tveter, ingen har sjans’!

[Outro]
[Instrumental: Gitar riff og trommesolo]
Tveter, vi er alltid på topp,
Ingen har sjangs, kjøret tar aldri stopp!
Tveter, vi gir aldri opp!
Tveter, ingen har sjangs'!

[Fade out med allsang]`,
        imageSrc: "/Tveter_beste_i_byen.jpg", // Relativ bane til bilde
        styleOfMusic:"Party Anthem"
      },
      {
        title: "Tveter - Beste i by'n (Remix)",
        artist: "Marentius",
        album: "Tveter - Beste i by'n",
        audioSrc: "/Tveter_Beste_i_byen_Remix.wav", // Relativ bane fra public-mappen
        lyrics: `Prompt: 
        
[Intro]
[Short Instrumental: Upbeat drum and guitar riff]

[Verse 1]
Når vi kommer på banen, hører dere damene rope,
Vi er klare for kamp, motstanderene har lov til å håpe.
Noen løper som vinden, andre sliter med farten,
Men når vi spiller sammen, er vi bedre en mesteparten!

[Chorus]
Tveter, beste i by'n!
Vi scorer mål, og drikker seiersvin!
Ingen kan stoppe vår seiersdans,
Tveter, ingen har sjans’!

[Verse 2]
Vi har en keeper som stopper alt, som en mur i mål,
Og vår spiss treffer nett som han hadde gullkontroll.
Når vi spiller ball, ruller motstanderen på gresset,
For ingen slår oss, det er ikke engang verdt stresset.

[Chorus]
Tveter, beste i by'n!
Vi scorer mål, og drikker seiersvin!
Ingen kan stoppe vår seiersdans,
Tveter, ingen har sjans’!

[Bridge]
Vi er kanskje ikke treningsgale,
Men vi vinner likevel alle våre kamper.
Så når fløyta går og seieren er vår,
Vet vi hvem som virkelig vinner iår!

[Chorus]
Tveter, beste i by'n!
Vi scorer mål, og drikker seiersvin!
Ingen kan stoppe vår seiersdans,
Tveter, ingen har sjans’!

[Outro]
[Instrumental: Gitar riff og trommesolo]
Tveter, vi er alltid på topp,
Ingen har sjangs, kjøret tar aldri stopp!
Tveter, vi gir aldri opp!
Tveter, ingen har sjangs'!

[Fade out med allsang]`,
        imageSrc: "/Tveter_beste_i_byen.jpg", // Relativ bane til bilde
        styleOfMusic:"Techno, Party Song, Mad Drop"
      }
  ];
  