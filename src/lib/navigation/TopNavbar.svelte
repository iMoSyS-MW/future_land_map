<script>
    let navVisible = false;
  </script>
  
  <style>
    .navbar {
      display: flex;
      justify-content: center;
      background-color: white !important;
      color: black !important;
      padding: 10px 0;
      width: 100%;
    }
  
    .nav-items {
      display: flex;
      list-style-type: none;
      padding: 0;
    }
  
    .nav-item a {
      text-decoration: none;
      color: black;
      padding: 10px 15px;
      display: block;
    }
  
    .toggle-btn {
      display: none;
    }
  
    @media (max-width: 600px) {
      .nav-items {
        flex-direction: column;
        width: 100%;
        display: none;
      }
  
      .nav-items.visible {
        display: flex;
      }
  
      .toggle-btn {
        /* display: initial; */
        background-color: #333;
        color: white;
        border: none;
        cursor: pointer;
      }
    }
  </style>
  
  
  <div class="navbar d-none d-md-block d-lg-block">
    <button class="toggle-btn" on:click={() => navVisible = !navVisible}>☰</button>
    <ul class="nav-items {navVisible ? 'visible' : ''} text-center">
      <li class="nav-item"><a href="#">  Land Sale is finished</a></li>
      <li class="nav-item"><a href="#">Mint your land NFTs</a></li>
      <li class="nav-item"><a href="#">See How it works </a></li>
    </ul>
  </div>
  


  <!-- <header class="position-relative" style="z-index: 10000;">
	<nav class="navbar navbar-light navbar-expand-md bg-transparent navbar-custom">
		<div class="container-fluid , bg-transparent"><a class="navbar-brand" href="#"><img src="/assets/images/fxpo_logo.png"></a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
			<div class="collapse navbar-collapse" id="navcol-1">
				<ul class="navbar-nav bg-transparent">
					<li class="nav-item"><a class="nav-link active" href="#">HOME</a></li>
					<li class="nav-item"><a class="nav-link" href="#">FUTURE MULTIVERSE</a></li>
					<li class="nav-item"><a class="nav-link" href="#">LAUNCH</a></li>
					<li class="nav-item"><a class="nav-link" href="#">INITIATIVE</a></li>
					<li class="nav-item"><a class="nav-link" href="#">LAUNCHPAD</a></li>
					<li class="nav-item"><a class="nav-link" href="#">MARKETPLACE</a></li>
					<li class="nav-item"><a class="nav-link" href="#">BLOCKCHAIN</a></li>
					<li class="nav-item"><a class="nav-link" href="#">GRACE AI</a></li>
				</ul>
				<ul class="navbar-nav ms-auto float-end">
					<li class="nav-item"><a class="nav-link btn-theme btn-theme-warning-outline" href="#">ONBOARD</a></li>
					<li class="nav-item"><a class="nav-link btn-theme btn-theme-warning-outline" href="#">CONNECT</a></li>
				</ul>
			</div>
		</div>
	</nav>
</header> -->



<!-- <div class="jxPbKq text-center">
	<div class="sc-19826e73-0 iORolM">
		<strong>·</strong><span>Land sale is finished</span><strong>·</strong>
		<a href="/profile/plots/list" class="sc-19826e73-2 iQUNiG">
			<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M20.549 9.04a1.5 1.5 0 0 1 0 1.92l-3.333 4a1.5 1.5 0 0 1-1.153.54H7.937a1.5 1.5 0 0 1-1.153-.54l-3.333-4a1.5 1.5 0 0 1 0-1.92l3.333-4a1.5 1.5 0 0 1 1.153-.54h8.126a1.5 1.5 0 0 1 1.153.54l.384-.32-.384.32 3.333 4Z" stroke="#000"></path>
				<path d="M20.549 13.04a1.5 1.5 0 0 1 0 1.92l-3.333 4a1.5 1.5 0 0 1-1.153.54H7.937a1.5 1.5 0 0 1-1.153-.54l-3.333-4a1.5 1.5 0 0 1 0-1.92l3.333-4a1.5 1.5 0 0 1 1.153-.54h8.126a1.5 1.5 0 0 1 1.153.54l.384-.32-.384.32 3.333 4Z" stroke="#000"></path>
			</svg>
			Mint your land NFTs
		</a><strong>·</strong>
		<a data-cy="how-it-works-button" href="/land-sale-info" class="sc-19826e73-1 bsTCCW">
			See how it works
			<svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M7.02 3.02a.5.5 0 1 0-.707-.707L.98 7.647.626 8l.354.354 5.333 5.333a.5.5 0 0 0 .707-.707L2.374 8.333H16.5a.5.5 0 0 0 0-1H2.707L7.02 3.02Z" fill="currentColor"></path>
			</svg>
		</a>
	</div>
</div> -->