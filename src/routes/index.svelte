<script>
  // import NavBar from './NavBar.svelte';
  import Introduction from "./Introduction.svelte";
  import Projects from "./Projects.svelte";
  import Contacts from "./Contacts.svelte";

  let projects;
  let contacts;

  const scrollTo = (e) => {
    projects.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
</script>

<div class="snap-y snap-mandatory">
  <!-- <div class="flex justify-end my-5 w-11/12">
        <NavBar on:fire={scrollTo} />
    </div> -->
  <Introduction />
  <div bind:this={projects} id="projects" class="snap-center">
    <Projects />
  </div>
  <div bind:this={contacts} id="contacts" class="snap-center">
    <Contacts />
  </div>
</div>
