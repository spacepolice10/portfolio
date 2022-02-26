<script>
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();
const fire = (text) => {
    dispatch('fire', {
        data: text
    })
}
</script>

<div class="flex gap-5">
    <button on:click={() => fire('projects')} class="hover:text-teal-600 duration-150">
        Projects
    </button>
    <button on:click={() => fire('projects')} class="hover:text-teal-600 duration-150">
        Contacts
    </button>
</div>