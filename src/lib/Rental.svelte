<script>
  import ResizablePicture from '$lib/ResizablePicture.svelte';
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
  <div class="map">
    <img 
      alt="A map of {item.title}" 
      src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-{item.location.lat},{item.location.long},9/150x150@2x?access_token=pk.eyJ1IjoiZW1iZXJqcyIsImEiOiJjazBycmxldGwwMDVvM2VxajdkYjl1OHY0In0.YeeBOuhKFJmuL3Tt9ueMgg" width="150" height="150">
  </div>
</article>