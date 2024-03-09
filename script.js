    // Function to handle search button click
    function redirectToSearch() {
      var searchTerm = document.getElementById('search').value;
      // Redirect to search page with query parameter
      window.location.href = '#gsc.tab=0&gsc.q=' + encodeURIComponent(searchTerm);
    }

    // Add event listener to search button
    document.getElementById('search').addEventListener('keydown', function(event) {
      if (event.key === "Enter") {
        redirectToSearch();
      }
    });
