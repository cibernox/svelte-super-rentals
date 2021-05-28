<script>
  export let src;
  export let alt;
  let isLarge = false;
</script>
<button on:click={() => isLarge = !isLarge} class="image" class:large={isLarge} type="button">
  <img src={src} alt={alt}>
  <small>View {isLarge ? 'Smaller' : 'Larger'}</small>
</button>
