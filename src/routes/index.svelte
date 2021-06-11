<script context="module">
  export async function load({ fetch }) {
    const res = await fetch('/rentals.json');

    if (res.ok) {
      const rentals = await res.json();
      return {
        props: { rentals }
      };
    }

    const { message } = await res.json();

    return {
      error: new Error(message)
    };    
  }
</script>

<script>
  import Rental from '../lib/Rental.svelte';
  import Jumbo from '../lib/Jumbo.svelte';
  export let rentals;
  let text = '';
  $: filterRegex = new RegExp(text, 'i');
  $: filteredRentals = rentals.filter(r => filterRegex.test(r.title))
</script>
<Jumbo>
  <h2>Welcome to Super Rentals!</h2>
  <p>We hope you find exactly what you're looking for in a place to stay.</p>
  <a href="/about" class="button">About Us</a>
</Jumbo>

<div class="rentals">
  <label>
    <span>Where would you like to stay?</span>
    <input class="light" type="text" data-testid="filter-rentals-input" bind:value={text}>
  </label>

  <ul class="results">
    <li>
      {#each filteredRentals as item}
        <Rental {item} />
      {/each}
  </ul>
</div>