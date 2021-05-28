<script>
  import Rental from '$lib/Rental.svelte';
  let rentals = [
    { 
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      title: 'Grand Old Mansion',
      owner: 'Veruca Salt',
      type: 'Standalone',
      bedrooms: 15,
      location: {
        name: 'San Francisco',
        lat: -122.4194,
        lon: 37.7749
      }
    },
    { 
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Seattle_-_Barnes_and_Bell_Buildings.jpg',
      title: 'Urban Living',
      owner: 'Mike Teavee',
      type: 'Community',
      bedrooms: 1,
      location: {
        name: 'Seattle',
        lat: -122.3321,
        lon: 47.6062
      }
    },
    { 
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg",
      title: 'Downtown Charm',
      owner: 'Violet Beauregarde',
      type: 'Community',
      bedrooms: 15,
      location: {
        name: 'Portland',
        lat: -122.6801,
        lon: 45.5175
      }
    }        
  ]
</script>

<div class="jumbo">
  <div class="right tomster"></div>

  <h2>Welcome to Super Rentals!</h2>
  <p>We hope you find exactly what you're looking for in a place to stay.</p>
  <a href="/about" class="button">About Us</a>
</div>
<div class="rentals">
  <label>
    <span>Where would you like to stay?</span>
    <input class="light" type="text">
  </label>

  <ul class="results">
    <li>
      {#each rentals as item}
        <Rental {item} />
      {/each}
  </ul>
</div>