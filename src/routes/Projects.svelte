<script>
import Project from "../components/Project.svelte";
</script>

<div class="grid grid-cols-1 lg:grid-cols-3 lg:h-screen">
    <Project 
        name={'shop-next'} 
        color={'bg-[#B62DFF]'} 
        icon={'shopping-bag.png'}
        description={'Next-based project'}
        content={'Online-shop made using popular React framework, Node and Postgres'}
        tags={['shop', 'cart', 'authorisation', 'filter', 'ORM', 'eCommerce', 'blog']}
        technologies={['nextjs', 'react', 'nodejs', 'postgres', 'sequelize']}
        link={'https://github.com/spacepolice10/shop-next'}
    />
    <Project 
        name={'svelte-blog'} 
        color={'bg-[#FF2900]'} 
        icon={'laptop.png'}
        description={'SvelteKit-blog'}
        content={'WordPress used as a fully-functional backend with editor and database.'} 
        tags={['blog', 'svelte', 'wordpress', 'design', 'graphql', 'domain']}
        technologies={['nextjs', 'react', 'nodejs', 'postgres', 'sequelize']}
        link={'https://github.com/spacepolice10/blog-svelte'}
    />  
    <Project 
        name={'react-calc'} 
        color={'bg-[#00B8FF]'} 
        icon={'calculator.png'}
        description={'React-based project'}
        content={'Combination of calculator and converter launched as Electron app'} 
        tags={['calculator', 'converter', 'electron', 'redux', 'ant design', 'api', 'drag and drop']}
        technologies={['nextjs', 'react', 'nodejs', 'postgres', 'sequelize']}
        link={'https://github.com/spacepolice10/react-calc'}
    />
</div>

