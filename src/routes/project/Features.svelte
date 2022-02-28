<script>
    export let gifs
</script>

<div class="p-10">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        {#each gifs as gif}
        <div class="flex flex-col justify-between items-center gap-4 h-7/12">
            <img class="h-full object-cover rounded-lg" src={gif.picture} alt />
            <p class="text-white font-bold text-3xl">{gif.name}</p>
        </div>
        {/each}
    </div>
</div>