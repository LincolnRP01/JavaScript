letra =  `Its winter-fall
Read skies are glea ing, oh
Sea-gulls are flyin over
Swans are floatin by
Smoking chimney-tops
Am I dreaming
Am I dreaming?

The nights draw in
Theres a silky moon up in the sky, yeah
Children are fantasising
Grown-ups are standin by
What a super feeling
Am I dreaming
Am I dreaming?
Woh, woh, woh, woh

(Dreaming) so quiet and peaceful
(Dreaming) tranquil and blissful
(Dreaming) theres a kind of magic in the air
(Dreaming) what a truly magnificent view
(Dreaming) a breathtaking scene
With the dreams of the world
In the palm of your hand

(Dreaming) a cosy fireside chat
(Dreaming) a little this, a little that
(Dreaming) sound of merry laughter skippin by
(Dreaming) gentle rain beatin on my face
(Dreaming) what an extraordinary place!
And the dream of the child
Is the hope of the, hope of the man

Its all so beautiful
Like a landscape painting in the sky, yeah
Mountains are zoomin higher, uh
Little girls scream an cry
My world is spinnin and spinnin and spinnin
Is unbelievable
Sends me reeling
Am I dreaming
Am I dreaming?

Ooh, its bliss`

//Procura uma string dentro do texto
console.log(letra.includes(`dreaming`))

let incidencias = 0

const palavras = letra.split(` `)

for(let palavra of palavras){
    if(palavra.includes(`cry`)) 
    incidencias++;
}

console.log(incidencias)

//Maneira de descobrir a primeira palvra da string
console.log(letra.startsWith(`Its`))

//Maneira de descobrir a ultima palvra da string
console.log(letra.endsWith(`bliss`))