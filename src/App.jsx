import './App.css'
import React from "react"

<body>
    <div class="grid-container">
      <div class="dropdown">
          <div class="dropdown">
          <button onclick="myFunction()" class="dropbtn">
                  <img src="Model/bar2.png" alt="">
          </div>
          </button>
              <div id="myDropdown" class="dropdown-content">
                <a href="http://guessing-game.mybluemix.net/index.html">News</a>
                <a href="http://guessing-game.mybluemix.net/index.html">About</a>
                <a href="http://guessing-game.mybluemix.net/index.html">Contact</a>
                <a href="http://guessing-game.mybluemix.net/index.html">Sing in</a>
                <a href="http://guessing-game.mybluemix.net/index.html">Register</a>
              </div>
              <ul>
                <li>
                  <a href="https://www.facebook.com/phelipecedaspy?ref=bookmarks">
                  <img src="Model/face.png">
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/phelipe-gomes-40b611ab/">
                  <img src="Model/link.png">
                  </a>
                </li>
                <li>
                  <a href="http://guessing-game.mybluemix.net/index.html">
                  <img src="Model/port.png">
                  </a>
                </li>
              </ul>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4"> 
              <div class="Bare">
              <h1>Bitcoin</h1>
            </div>
            </div>
            <div class="col-md-4">
              <div class="Bar">
                <a href="http://guessing-game.mybluemix.net/index.html">News</a>
                <a href="http://guessing-game.mybluemix.net/index.html">About</a>
                <a href="http://guessing-game.mybluemix.net/index.html">Contact</a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="Bar">
              <a href="http://guessing-game.mybluemix.net/index.html">Sing in</a>
              <a href="http://guessing-game.mybluemix.net/index.html">Register</a>
              </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <h2>
                Blockchain
              </h2>
              <p>
Blockchain is the main technological innovation of bitcoin, as it is the proof of all transactions on the network. Its original project has served as inspiration for the emergence of new cryptocurrencies and a distributed database.
              </p>
              <p>
                <a class="btn" href="https://akintec.com.br/">View details »</a>
              </p>
              <div class="imgchain">
              <img alt="Bootstrap Image Preview" src="Model/chain.jpg" />
            </div>
              <h3>
                Currency creation
              </h3>
              <p>
            On August 18, 2008 the domain "bitcoin.org" was registered, and in November the Bitcoin: A Peer-to-Peer Electronic Cash System study was published by Satoshi Nakamoto on a cryptocurrency mailing list. Nakamoto implemented the software behind bitcoin as open source and launched it in January 2009. In the same month, the network was created when Nakamoto mined the first block of the blockchain, known as the first block. Embedded in the first block was the text.
              </p>
            </div>
            <div class="col-md-4">
              <div class="container">
                <img src="Model/backc.jpg" width="1000" height="300">
                <div class="center"></div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="padd">
              <h2>
                Famous trader advises not to trade Bitcoin on Monday
              </h2>
              <p>
                “This is a good day to not negotiate. Instead, accumulate. Bitcoin has not yet stopped doing crazy things. Movements in a short period of time always take Satoshis from the hands of fools. Don't negotiate. ” - @hodlonaut
              </p>
              <p>
                <a class="btn" href="https://www.criptofacil.com/famoso-trader-aconselha-nao-negociar-bitcoin-nesta-segunda-feira/">View details »</a>
              </p>
              <div class="separate">
              <h2>
                Due to the coronavirus, US GDP decreases 4.8% in the first quarter
              </h2>
              <p>
                The United States' Gross Domestic Product (GDP) shrank at an annualized rate of 4.8% in the first quarter of this year, according to data from the U.S. Department of Commerce released on Wednesday (29). The result is worse than projected by economists consulted by Bloomberg, who estimated a fall of 4%. In the previous quarter, the economy grew 2.1%.
              </p>
              <h2> 
Bitcoin is an innovative payment network and a new type of money.
              </h2>
              <iframe width="auto" height="auto" src="https://www.youtube.com/embed/Gc2en3nHxA4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            </div>
            </div>
          </div>
        </div>
    <script>
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
    </script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  </body>
</html>