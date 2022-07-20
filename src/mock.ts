export default [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/gilbertoaleite.png',
            name: 'Gilberto A leite',
            role: 'Software Engineer',

        },
        content: [

            { type: 'paragraph', content: 'Fala galeraa 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: 'jane.design/doctorcare' },
        ],
        publishedAt: new Date('2022-07-16 20:30:00'),
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/diego3g.png',
            name: 'José da Silva',
            role: 'Ui designer',

        },
        content: [

            { type: 'paragraph', content: 'Fala galera 👋' },
            { type: 'paragraph', content: 'Mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: 'jane.design/doctorcare' },
        ],
        publishedAt: new Date('2022-07-06 20:30:00'),
    }
];