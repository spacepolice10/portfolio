const data = {
    projects: [
        {
            name: 'shop-next',
            color: 'bg-[#B62DFF]',
            icon: 'shopping-bag.png',
            description: 'Next-based project',
            descriptionlong: '',
            content: 'Online-shop made using popular React framework, Node and Postgres',
            tags: ['shop', 'cart', 'authorisation', 'filter', 'ORM', 'eCommerce', 'blog'],
            technologies: ['nextjs', 'react', 'nodejs', 'postgres', 'sequelize'],
            link: 'https://github.com/spacepolice10/shop-next',
            gifs: [
                {
                    name: 'Beautiful cards for any item',
                    picture: ''
                },
                {
                    name: 'Responsive design',
                    picture: ''
                },
                {
                    name: 'Lists of favourite items',
                    picture: ''
                }
            ],
            features: [
                {
                    name: 'JWT authorisation',
                    picture: '/static/features/shop/jwt.svg'
                },
                {
                    name: 'Express server involved',
                    picture: '/static/features/shop/express.svg'
                },
                {
                    name: 'Manipulating data using Sequelize',
                    picture: '/static/features/shop/sequelize.svg'
                },
                {
                    name: 'Fetching data from PostgreSQL',
                    picture: '/static/features/shop/postgres.svg'
                },
                {
                    name: 'Next as a frontend framework',
                    picture: '/static/features/shop/nextjs.svg'
                },
                {
                    name: 'Backend with ORM and Node.js',
                    picture: '/static/features/shop/nodejs.svg'
                }
            ]
        },
        {
            name: 'svelte-blog',
            color: 'bg-[#FF2900]',
            icon: 'laptop.png',
            description: 'SvelteKit-blog',
            descriptionlong: '',
            content: 'WordPress used as a fully-functional backend with editor and database.',
            tags: ['blog', 'svelte', 'wordpress', 'design', 'graphql', 'domain'],
            technologies: ['nextjs', 'react', 'nodejs', 'postgres', 'sequelize'],
            link: 'https://github.com/spacepolice10/blog-svelte',
            gifs: [
                {
                    name: 'Beautiful grid-layout and basic animations fully responsive',
                    picture: '../../static/gifs/blog/gif1.gif'
                },
                {
                    name: 'Dark and light modes implemented using Tailwind',
                    picture: '/static/gifs/blog/gif2.gif'
                },
                {
                    name: 'Transitions made with Svelte-specific methods and tools',
                    picture: '/static/gifs/blog/gif3.gif'
                }
            ],
            features: [
                {
                    name: 'Wordpress used as a backend',
                    picture: '/static/features/blog/wordpress.svg'
                },
                {
                    name: 'GraphQL used to fetch data',
                    picture: '/static/features/blog/graphql.svg'
                },
                {
                    name: 'Tailwind used instead of traditional CSS',
                    picture: '/static/features/blog/tailwind.svg'
                },
                {
                    name: 'Built with static adapter',
                    picture: '/static/features/blog/svelte.svg'
                }
            ]
        },
        {
            name: 'react-calc',
            color: 'bg-[#00B8FF]',
            icon: 'calculatir.png',
            description: 'React-based project',
            descriptionlong: '',
            content: 'Combination of calculator and converter launched as Electron app',
            tags: ['calculator', 'converter', 'electron', 'redux', 'ant design', 'api', 'drag and drop'],
            technologies: ['nextjs', 'react', 'nodejs', 'postgres', 'sequelize'],
            link: 'https://github.com/spacepolice10/react-calc',
            gifs: [
                {
                    name: 'Beautiful design materialised because of Ant Design components',
                    picture: ''
                },
                {
                    name: 'Simplest way to evaluate something quickly using keyboard or screen',
                    picture: ''
                },
                {
                    name: 'Quick conversion of differen metric in parallel',
                    picture: ''
                }
            ],
            features: [
                {
                    name: 'React hooks used instead of classes',
                    picture: '/static/features/calc/react.svg'
                },
                {
                    name: 'Redux responsible for data storage',
                    picture: '/static/features/calc/redux.svg'
                },
                {
                    name: 'Currency conversion API used',
                    picture: '/static/features/calc/dollar.svg'
                },
                {
                    name: 'Vite used as a bundler',
                    picture: '/static/features/calc/vite.svg'
                },
                {
                    name: 'React router is set up',
                    picture: '/static/features/calc/router.svg'
                },
                {
                    name: 'Electron-based desktop app',
                    picture: '/static/features/calc/electron.svg'
                }
            ]
        },
    ]
}

export default data