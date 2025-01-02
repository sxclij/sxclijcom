<script lang="ts">
  export let data;
  const results = data.results;
</script>

{#each results as result}
  <div>{result.url}</div>
  <div>{result.excerpt}</div>
{/each}