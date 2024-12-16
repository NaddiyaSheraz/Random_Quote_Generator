
    function fetchJoke() {
      const jokeElement = document.getElementById("joke");
      jokeElement.innerHTML = "Fetching a joke...";
      
      fetch("https://v2.jokeapi.dev/joke/Programming")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Joke not found");
          }
          return response.json();
        })
        .then((data) => {
          const joke = data.joke 
            ? data.joke 
            : `${data.setup} <br><strong>${data.delivery}</strong>`;
          jokeElement.innerHTML = joke;
        })
        .catch((error) => {
          jokeElement.innerHTML = `<span class="error">${error.message}</span>`;
        });
    }

    fetchJoke();

    document.getElementById("refreshBtn").addEventListener("click", fetchJoke);
