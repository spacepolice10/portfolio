<script>
  import Logo from "./Logo.svelte";
  import { onMount } from "svelte";

  export let name;
  export let color;
  export let icon;
  export let description;
  export let content;
  export let tags;
  export let technologies;
  export let link;

  let tagsProperties;
  let showTechnologies = false;

  onMount(() => {
    Array.from(tagsProperties.children).map((i) => {
      let timing = getRandom(20, 15);
      i.style.setProperty("--animation-time", timing);
    });
  });

  const getRandom = (max, min) => {
    return String(Math.trunc(Math.random() * (max - min) + min)) + "s";
  };
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div class="{color} text-white box-border overflow-hidden h-screen">
  <a href={`./project/${name}`}>
    <div class="flex justify-between w-full">
      <h1 class="font-bold text-2xl m-5">
        {name}
      </h1>
    </div>
    <div class="flex flex-col gap-5 overflow-hidden box-border">
      <div class="flex justify-center items-center w-20 h-20 m-4">
        <img
          width={95}
          height={95}
          src={`/portfolio/isometric/${icon}`}
          alt={`${icon} logo`}
        />
      </div>
      <div class="flex flex-col gap-2 m-4">
        <p class="font-bold text-4xl opacity-90 w-56">{description}</p>
        <p class="opacity-80 w-52">{content}</p>
      </div>
      <div bind:this={tagsProperties} id="test">
        {#each tags as tag, i}
          {#if i % 2 == 0}
            <p class="backward font-bold text-2xl opacity-70 w-52">{tag}</p>
          {:else}
            <p class="forward font-bold text-3xl opacity-50 w-52">{tag}</p>
          {/if}
        {/each}
      </div>
      <!-- {#if showTechnologies} -->
      <!-- <div class="flex justify-center gap-2 h-screen -mt-[200%] w-80 backdrop-blur"> 
                <div class="flex bg-white rounded-md p-4 h-12">
                    {#each technologies as technology}
                    <Logo svgPath={technology} />
                    {/each}
                </div>   
            </div> -->
      <!-- {/if} -->
    </div>
  </a>
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
    from {
      margin-left: -150%;
    }
    to {
      margin-left: 150%;
    }
  }
</style>
