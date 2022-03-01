<script>
  export let features;
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-16 gap-8">
  {#each features as feature}
    <div class="flex flex-col justify-between items-center gap-4 h-2/12">
      <img class="h-6 w-6" src={feature.picture} alt />
      <p class="text-white font-bold text-xl w-8/12 text-center">
        {feature.name}
      </p>
    </div>
  {/each}
</div>
