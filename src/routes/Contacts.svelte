<script>
  import Logo from "../components/Logo.svelte";
</script>

<div
  class="snap-center h-screen bg-black text-white flex flex-col justify-center items-center gap-5"
>
  <div class="flex justify-start items-center gap-4 w-52">
    <Logo svgPath={"telegram"} />
    <h1 class="text-2xl font-bold">
      <a href="https://t.me/spcpolice"> @spcpolice </a>
    </h1>
  </div>
  <div class="flex justify-start items-center gap-4 w-52">
    <Logo svgPath={"github"} />
    <h1 class="text-2xl font-bold">
      <a href="https://github.com/spacepolice10/"> spacepolice10 </a>
    </h1>
  </div>
</div>
