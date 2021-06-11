<script>
  import ResizablePicture from './ResizablePicture.svelte';
  import Map from './Map.svelte';
  export let item;
</script>
<article class="rental" data-testid="rental">
  <ResizablePicture src={item.image} alt="A picture of {item.title}" />

  <div class="details">
    <h3 data-testid="title">
      <a href="/rentals/{item.id}">{item.title}</a>
    </h3>
    <div data-testid="owner" class="detail owner">
      <span>Owner:</span> {item.owner}
    </div>
    <div data-testid="type" class="detail type">
      <span>Type:</span> {item.type}
    </div>
    <div data-testid="city" class="detail location">
      <span>Location:</span> {item.location.name}
    </div>
    <div data-testid="bedrooms" class="detail bedrooms">
      <span>Number of bedrooms:</span> {item.bedrooms}
    </div>
  </div>
  <Map location={item.location} alt="A map of {item.title}"/>
</article>