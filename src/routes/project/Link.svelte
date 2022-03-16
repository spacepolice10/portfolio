<script>
  export let link;
  export let site;
</script>

{#if link != "null"}
  <div>
    <a href={link}>
      <p
        class="flex justify-center border rounded-lg p-2 text-white text-2xl w-20 mt-4 hover:bg-white hover:text-black duration-150"
      >
        {site}
      </p>
    </a>
  </div>
{/if}
