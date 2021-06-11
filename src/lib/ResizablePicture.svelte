<script>
  export let src;
  export let alt;
  let large = false;
</script>
<button data-testid="resizable-picture" on:click={() => large = !large} class="image" class:large type="button">
  <img data-testid="resizable-picture-img" src={src} alt={alt}>
  <small>View {large ? 'Smaller' : 'Larger'}</small>
</button>
