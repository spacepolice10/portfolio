<script context="module">
    export async function load({ params }) {
        return {
            props: {
                id: params.id
            }
        }
    }
</script>

<script>
    import { onMount } from 'svelte';
    import data from '../data';
    import Features from './Features.svelte';
    export let id
    const info = data.projects.find(x => x.name == id)

    let tagsProperties;

    onMount(() => {
        Array.from(tagsProperties.children).map(i => { 
            let timing = getRandom(15, 10)
            i.style.setProperty('--animation-time', timing)
        })
    })

    const getRandom = (max, min) => {
        return String(Math.trunc(Math.random() * (max - min) + min)) + 's'
    }

</script>

<div class="{info.color} flex flex-col justify-center items-center min-h-screen overflow-hidden box-border">
    <div class="flex flex-col justify-start mt-5">
        <!-- <h1 class="text-6xl font-bold text-white z-10">
            {info.name}
        </h1> -->
        <h2 class="text-4xl font-bold text-white z-10">{info.description}</h2>
        <h3 class="text-2xl font-bold text-white z-10">{info.content}</h3>
    </div>
    <div bind:this={tagsProperties} id="test">
        {#each info.tags as tag, i}
            {#if i % 2 == 0}
                <p class="backward font-bold text-6xl opacity-50 w-52 -z-10">{tag}</p>
            {:else}
                <p class="forward font-bold text-6xl opacity-30 w-52 -z-10">{tag}</p>
            {/if}
        {/each}
    </div>
    <Features gifs={info.gifs} />
</div>



<style>
    :root {
    --animation-time: 10s; 
    }
    .forward {
        animation: gliding var(--animation-time);
        animation-iteration-count: infinite;
        pointer-events: none;
    }
    .backward {
        animation: gliding var(--animation-time);
        animation-iteration-count: infinite;
        animation-direction: reverse;
        pointer-events: none;
    }
    @keyframes gliding {
        from {margin-left: -300%;}
        to {margin-left: 300%;}
    }
</style>