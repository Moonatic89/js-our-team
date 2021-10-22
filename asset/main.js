//Represents a team list, with Name, Role and Image as properties. then, log those info in console. 

const moonsoft =
    [
        {
            name: "Stefano Nesi",
            role: "Game Developer, Main Designer",
            image: "https://picsum.photos/310/300"
        },
        {
            name: "Pamela Bruzzo",
            role: "Designer, Beta-Tester, Graphic Artist",
            image: "https://picsum.photos/300/310"
        },
        {
            name: "Matteo Passano",
            role: "Puzzle Designer, Beta-Tester",
            image: "https://picsum.photos/310/310"
        },
        {
            name: "Stefano Pastorino",
            role: "Game Developer, Beta-Tester",
            image: "https://picsum.photos/300/300"
        },
        {
            name: "Luca Manfredi",
            role: "Reference, Beta-Tester",
            image: "https://picsum.photos/305/300"
        },
        {
            name: "Alessandra Terzolo",
            role: "Social Media Manager",
            image: "https://picsum.photos/300/305"
        },
        {
            name: "Dio Brando",
            role: "Mascotte",
            image: "https://ca.slack-edge.com/T91QPE3BP-U02CTFNG61X-d659f4caab13-512"
        }
    ]


for (let i = 0; i < moonsoft.length; i++) {

    console.log(moonsoft[i]["name"]);
    console.log(moonsoft[i]["role"]);
    console.log(moonsoft[i]["image"]);
}





