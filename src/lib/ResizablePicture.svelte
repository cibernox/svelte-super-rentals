<script>
  export let src;
  export let alt;
  let large = false;
</script>
<button on:click={() => large = !large} class="image" class:large type="button">
  <img src={src} alt={alt}>
  <small>View {large ? 'Smaller' : 'Larger'}</small>
</button>
