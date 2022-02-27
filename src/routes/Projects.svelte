<script>
import Project from "../components/Project.svelte";
import data from "./data";
console.log(data.projects)
</script>

<div class="grid grid-cols-1 lg:grid-cols-3 lg:h-screen">
    {#each data.projects as item} 
        <Project {...item} />
    {/each}
</div>

