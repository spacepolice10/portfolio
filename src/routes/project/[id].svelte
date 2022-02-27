<script context="module">
    export async function load({ params }) {
        console.log(params)
        return {
            props: {
                id: params.id
            }
        }
    }
</script>

<script>
    import data from '../data';
    export let id
    const info = data.projects.find(x => x.name == id)
</script>

<h1>
    {info.name}
</h1>