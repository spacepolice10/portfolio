<script>
  import Logo from "../components/Logo.svelte";
</script>

<div
  class="snap-center h-screen bg-black text-white flex flex-col justify-between items-start"
>
  <div class="flex justify-end my-5 w-11/12" />
  <div class="mx-10">
    <div class="flex flex-col justify-start w-7/12">
      <h1 class="text-4xl font-bold">
        Hello 👋, my name is Vladimir and I am frontend developer!
      </h1>
      <h3 class="text-gray-300 text-sm font-thin">
        I am trying to build certain skills and abilities to develop fully
        fledged web applications. In parallel I use some backend-utilities and
        mobile-development technologies so in future I could become a full-stack
        developer.
      </h3>
    </div>
    <div class="flex flex-col items-start">
      <div class="flex flex-col gap-5 my-5">
        <h2>Here's what I use:</h2>
        <ul class="flex items-center gap-4">
          <li><Logo svgPath={"svelte"} /></li>
          <li><Logo svgPath={"tailwind"} /></li>
          <li><Logo svgPath={"react"} /></li>
          <li><Logo svgPath={"supabase"} /></li>
          <li><Logo svgPath={"postgres"} /></li>
          <li><Logo svgPath={"sequelize"} /></li>
          <li><Logo svgPath={"nodejs"} /></li>
          <li><Logo svgPath={"wordpress"} /></li>
          <li><Logo svgPath={"vite"} /></li>
        </ul>
        <i class="text-gray-300 text-xs">...and much more to come.</i>
      </div>
    </div>
  </div>
</div>
