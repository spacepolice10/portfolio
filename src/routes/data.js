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
            deploy: 'null',
            gifs: [
                {
                    name: 'Responsive design',
                    picture: '/portfolio/gifs/shop/gif1.gif'
                },
                {
                    name: 'Framer Motion involved',
                    picture: '/portfolio/gifs/shop/gif2.gif'
                },
                {
                    name: 'Lists of favourite items',
                    picture: '/portfolio/gifs/shop/gif3.gif'
                }
            ],
            features: [
                {
                    name: 'JWT authorisation',
                    picture: '/portfolio/features/shop/jwt.svg'
                },
                {
                    name: 'Express server involved',
                    picture: '/portfolio/features/shop/express.svg'
                },
                {
                    name: 'Manipulating data using Sequelize',
                    picture: '/portfolio/features/shop/sequelize.svg'
                },
                {
                    name: 'Fetching data from PostgreSQL',
                    picture: '/portfolio/features/shop/postgres.svg'
                },
                {
                    name: 'Next as a frontend framework',
                    picture: '/portfolio/features/shop/nextjs.svg'
                },
                {
                    name: 'Backend with ORM and Node.js',
                    picture: '/portfolio/features/shop/nodejs.svg'
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
            deploy: 'null',
            gifs: [
                {
                    name: 'Beautiful grid-layout and basic animations fully responsive',
                    picture: '/portfolio/gifs/blog/gif1.gif'
                },
                {
                    name: 'Dark and light modes implemented using Tailwind',
                    picture: '/portfolio/gifs/blog/gif2.gif'
                },
                {
                    name: 'Transitions made with Svelte-specific methods and tools',
                    picture: '/portfolio/gifs/blog/gif3.gif'
                }
            ],
            features: [
                {
                    name: 'Wordpress used as a backend',
                    picture: '/portfolio/features/blog/wordpress.svg'
                },
                {
                    name: 'GraphQL used to fetch data',
                    picture: '/portfolio/features/blog/graphql.svg'
                },
                {
                    name: 'Tailwind used instead of traditional CSS',
                    picture: '/portfolio/features/blog/tailwind.svg'
                },
                {
                    name: 'Built with static adapter',
                    picture: '/portfolio/features/blog/svelte.svg'
                }
            ]
        },
        {
            name: 'react-calc',
            color: 'bg-[#00B8FF]',
            icon: 'calculator.png',
            description: 'React-based project',
            descriptionlong: '',
            content: 'Combination of calculator and converter launched as Electron app',
            tags: ['calculator', 'converter', 'electron', 'redux', 'ant design', 'api', 'drag and drop'],
            technologies: ['nextjs', 'react', 'nodejs', 'postgres', 'sequelize'],
            link: 'https://github.com/spacepolice10/react-calc',
            deploy: 'https://kalky.netlify.app',
            gifs: [
                {
                    name: 'Beautiful Ant Design components used',
                    picture: '/portfolio/gifs/calc/gif1.gif'
                },
                {
                    name: 'Drag & Drop with redux-toolkit',
                    picture: '/portfolio/gifs/calc/gif2.gif'
                },
                {
                    name: 'Quick conversion of differen metric in parallel',
                    picture: '/portfolio/gifs/calc/gif3.gif'
                }
            ],
            features: [
                {
                    name: 'React hooks used instead of classes',
                    picture: '/portfolio/features/calc/react.svg'
                },
                {
                    name: 'Redux responsible for data storage',
                    picture: '/portfolio/features/calc/redux.svg'
                },
                {
                    name: 'Currency conversion API used',
                    picture: '/portfolio/features/calc/dollar.svg'
                },
                {
                    name: 'Vite used as a bundler',
                    picture: '/portfolio/features/calc/vite.svg'
                },
                {
                    name: 'React router is set up',
                    picture: '/portfolio/features/calc/router.svg'
                },
                {
                    name: 'Electron-based desktop app',
                    picture: '/portfolio/features/calc/electron.svg'
                }
            ]
        },
        {
            name: 'vue-kanban',
            color: 'bg-[#008D56]',
            icon: 'interface.png',
            description: 'Vue-based project',
            descriptionlong: '',
            content: 'Trello-like kanban board based on Supabase',
            tags: ['vue', 'trello', 'drag', 'drop', 'vue router', 'headless ui', 'heroicons', 'tailwind plugins'],
            technologies: ['vue', 'tailwind', 'supabase', 'vite', 'vue router'],
            link: 'https://github.com/spacepolice10/taskchat-vue',
            deploy: 'null',
            gifs: [
                {
                    name: 'Quick task-adding interface',
                    picture: '/portfolio/gifs/kanban/gif1.gif'
                },
                {
                    name: 'Drag & Drop without third-party libraries',
                    picture: '/portfolio/gifs/kanban/gif2.gif'
                },
                {
                    name: 'All the mechanisms of data manipulating',
                    picture: '/portfolio/gifs/kanban/gif3.gif'
                }
            ],
            features: [
                {
                    name: 'Vue 3 with template syntax used',
                    picture: '/portfolio/features/kanban/vue.svg'
                },
                {
                    name: 'Supabase involved',
                    picture: '/portfolio/features/kanban/supabase.svg'
                },
                {
                    name: 'Vite used as a bundler',
                    picture: '/portfolio/features/kanban/vite.svg'
                },
                {
                    name: 'Tailwind with plugins and Headless UI utilised',
                    picture: '/portfolio/features/kanban/tailwind.svg'
                },
            ]
        },
    ]
}

export default data