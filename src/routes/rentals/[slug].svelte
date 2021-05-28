<script context="module">
  export async function load({ fetch, page }) {
    const res = await fetch(`/rentals/${page.params.slug}.json`);

    if (res.ok) {
      const rental = await res.json() ;
      return {
        props: { rental }
      };
    }

    const { message } = await res.json();

    return {
      error: new Error(message)
    };    
  }
</script>
<script>
  import Jumbo from '$lib/Jumbo.svelte';
  import ResizablePicture from '$lib/ResizablePicture.svelte';
  import Map from '$lib/Map.svelte';
  export let rental;
</script>

<Jumbo>
  <h2>{rental.title}</h2>
  <p>Nice find! This looks like a nice place to stay near {rental.location.name}.</p>
  <a href="https://twitter.com/intent/tweet?url=https%3A%2F%svelte-super-rentals.netlify.app%2Frentals%2Fgrand-old-mansion&amp;text=Check+out+Grand+Old+Mansion+on+Super+Rentals%21&amp;hashtags=vacation%2Ctravel%2Cauthentic%2Cblessed%2Csuperrentals&amp;via=emberjs" target="_blank" rel="external nofollow noopener noreferrer" class="share button">
    Share on Twitter
  </a>  
</Jumbo>

<article class="rental detailed">
  <ResizablePicture src={rental.image} alt="A picture of {rental.title}" />

  <div class="details">
    <h3>About {rental.title}</h3>

    <div class="detail owner">
      <span>Owner:</span> {rental.owner}
    </div>
    <div class="detail type">
      <span>Type:</span> {rental.type} – Estate
    </div>
    <div class="detail location">
      <span>Location:</span> {rental.location.name}
    </div>
    <div class="detail bedrooms">
      <span>Number of bedrooms:</span> 15
    </div>
    <div class="detail description">
      <p>{rental.description}</p>
    </div>
  </div>

  <Map location={rental.location} alt="A map of {rental.title}" zoom="12" width="894" height="600"/>
</article>