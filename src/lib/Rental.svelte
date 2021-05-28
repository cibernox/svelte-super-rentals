<script>
  import ResizablePicture from '$lib/ResizablePicture.svelte';
  import Map from '$lib/Map.svelte';
  export let item;
</script>
<article class="rental">
  <ResizablePicture src={item.image} alt="A picture of {item.title}" />

  <div class="details">
    <h3>
      <a href="/rentals/{item.id}">{item.title}</a>
    </h3>
    <div class="detail owner">
      <span>Owner:</span> {item.owner}
    </div>
    <div class="detail type">
      <span>Type:</span> {item.type}
    </div>
    <div class="detail location">
      <span>Location:</span> {item.location.name}
    </div>
    <div class="detail bedrooms">
      <span>Number of bedrooms:</span> {item.bedrooms}
    </div>
  </div>
  <Map location={item.location} alt="A map of {item.title}"/>
</article>