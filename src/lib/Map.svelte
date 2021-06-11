<script>
  // let token = import.meta.env.VITE_MAPBOX_TOKEN;
  let token = "pk.eyJ1IjoiY2liZXJub3giLCJhIjoiY2twOG45aWo2MGJyeTJ1bjFlOGJyNjkyOCJ9.HPMm3q0cHgu22D7wisEhIA"
  export let location;
  export let alt;
  export let zoom = 9;
  export let width = 150;
  export let height = 150;
</script>

<div class="map">
  <img 
    alt={alt} 
    src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/{location.lat},{location.lon},{zoom}/{width}x{height}@2x?access_token={token}" width={width} height={height}>
</div>