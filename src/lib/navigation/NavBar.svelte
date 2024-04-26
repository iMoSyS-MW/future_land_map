<!-- <script>
    import { onMount, onDestroy } from 'svelte';

    let isMobile = false; // This variable will be true if screen width is less than 768px
    const threshold = 768; // Example threshold for mobile devices

    // Function to check and update the screen size
    function updateScreenSize() {
        isMobile = window.innerWidth < threshold;
    }

    onMount(() => {
        window.addEventListener('resize', updateScreenSize);
        // Initial check on mount
        updateScreenSize();
    });

    onDestroy(() => {
        window.removeEventListener('resize', updateScreenSize);
    });

    let menuOpen = false;

    // Function to toggle the menu visibility
    function toggleMenu() {
        menuOpen = !menuOpen;
    }

    // Function to close the menu if open
    function closeMenu() {
        if (menuOpen) {
            menuOpen = false;
        }
    }
</script>

<style>
    .nav {
        width: 100%;
        background-color: silver !important;
        padding: 5px;
    }

    .nav * {
        color: black !important;
        text-decoration: none;
        font-size: 14px;
    }

    .nav .nav-item {
        margin-right: 15px;
    }
    
</style>

<div class="d-none d-lg-flex d-md-flex justify-content-center nav">
    <div class="nav-item">
        <a href="#">
            <b>.</b>
            <span>Land Sale is finished</span>
        </a>
    </div>

    <div class="nav-item">
        <a href="#">
            <b>.</b>
            <span>Mint your land NFTs</span>
        </a>
    </div>

    <div class="nav-item">
        <a href="#">
            <b>.</b>
            <span>See How it works</span>
        </a>
    </div>
</div> -->


<script>
    import { onMount, onDestroy } from 'svelte';

    let isMobile = false; // This variable will be true if screen width is less than 768px
    const threshold = 768; // Example threshold for mobile devices

    // Function to check and update the screen size
    function updateScreenSize() {
        isMobile = window.innerWidth < threshold;
    }

    onMount(() => {
        window.addEventListener('resize', updateScreenSize);
        // Initial check on mount
        updateScreenSize();
        
        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };
    });

    let showMapList = false;
    let menuOpen = false;

    // Function to toggle the menu visibility
    function toggleMenu() {
        menuOpen = !menuOpen;
    }

    // Function to close the menu if open
    function closeMenu() {
        if (menuOpen) {
            menuOpen = false;
        }
    }
</script>

<style>
    .nav {
        width: 100%;
        /* background-color: silver !important; */
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)), rgb(255, 255, 255) !important;
        padding: 5px;
    }

    .nav * {
        color: black !important;
        text-decoration: none;
        font-size: 14px;
    }

    .nav .nav-item {
        margin-right: 15px;
    }

    .actionbar {
		background-color: rgb(35 55 75 / 90%);
		color: #fff;
		padding: 6px 12px;
		font-family: monospace;
		z-index: 1;
		position: absolute;
		/* top: 0; */
		right: 0;
		margin: 12px;
		border-radius: 4px;
	}

    .btn-nav {
        appearance: none;
        margin: 0px 0px 0px 32px;
        padding: 0px;
        border: none;
        cursor: pointer;
        height: 24px;
        display: flex;
        align-items: center;
        color: inherit;
        pointer-events: all;
        background-color: rgba(0, 0, 0, 0.3) !important;
        border: 1px solid silver;
        padding: 5px 5px;
        border-radius: 3px;
        z-index: 5 !important;
    }
    
    .btn-connect-wallet {
        height: 45px !important;
        border: 2px solid black;
        border-radius: 20px;
        background-color: transparent;
        color: black;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;
    }

    .btn-connect-wallet:hover {
        background-color: black !important;
        color: white;
    }

    .action-item {
        z-index: 100000 !important;
    }

    .action-item .menu {
        position: fixed;
        top: 0;
        right: 0;
        width: 400px;
        height: 100vh;
        color: black;
        background-color: white !important; /* Forced white background */
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
        box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
        z-index: 100 !important; /* Ensure it's above other elements */
        display: flex;
        flex-direction: column;
        padding: 20px 30px;
    }

    .action-item .menu.open {
        transform: translateX(0);
    }

    .action-item .menu-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        z-index: 99; /* Below the menu but above other content */
        display: none;
    }

    .action-item .menu-overlay.visible {
        display: block;
    }

    .action-item a {
        color: black !important;
        text-decoration: none;
    }

    .action-item a svg{
        margin-left: 8px;
        transform: scale(-1, -1) translateY(1px) !important;
    }

    .action-item .close-btn {
        margin: 10px;
        cursor: pointer;
        position: absolute; /* Changed to absolute */
        top: 0; /* Positioned at the top */
        left: 0; /* Positioned on the left */
    }

    .action-item .menu-header img {
        /* width: 48px;
        height: 48px; */
        width: 60px; 
        transform: translate(-15px, -15px);
    }

    .dotted-divider {
        border-top: 1px dashed silver;
        margin-top: 20px;
        margin-bottom: 20px;
    }


      /*map-list switch*/

  .buUYZc {
		display: flex;
		width: 141px;
		height: 34px;
		border-radius: 12px;
		position: absolute;
		top: 64px;
		right: 25px;
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(4px);
		color: white;
		z-index: 2;
	}

	.kcWy {
		flex: 1 1 0%;
		border: none;
		border-radius: 12px;
		outline: none;
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		-webkit-box-pack: center;
		justify-content: center;
		cursor: pointer;
		color: white;
		background: rgba(255, 255, 255, 0.1);
		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 4px;
	}

	.cTxQOy {
		flex: 1 1 0%;
		background: none;
		border: none;
		border-radius: 12px;
		outline: none;
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		-webkit-box-pack: center;
		justify-content: center;
		cursor: pointer;
		color: white;
	}

	.cXBayI {
		display: none;
	}

    .nav-section {
        width: 100%;
        background-color: #fff !important;
        height: 80px;
        padding: 0 30px;
    }

    .nav-section * {
        transform: translateY(40%);
    }

    .menu-logo {
        transform: translateY(-15px);
        width: 100px;
        height: 100px;
    }

	@media only screen and (min-width: 769px) {
		.cXBayI {
			display: block;
		}
	}

</style>

<div class="d-none d-lg-flex d-md-flex justify-content-center nav">
    <div class="nav-item">
        <a href="#">
            <b>.</b>
            <span>Land Sale is finished</span>
        </a>
    </div>

    <div class="nav-item">
        <a href="#">
            <b>.</b>
            <span>Mint your land NFTs</span>
        </a>
    </div>

    <div class="nav-item">
        <a href="#">
            <b>.</b>
            <span>See How it works</span>
        </a>
    </div>
</div>

<div class="d-flex justify-content-between nav-section {isMobile ? 'shadow-lg' : ''} bg-success" style="background-color: white !important;">
    <img src="/assets/images/ICON_FM2-3D.png" alt="FXPO MAP" class="menu-logo">
    <button class="btn-connect-wallet d-none d-md-flex d-lg-flex">Connect wallet</button>

    <button class="btn-nav d-md-none" on:click={toggleMenu}>
        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 6.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1 0-1h23a.5.5 0 0 1 .5.5ZM24 12.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1 0-1h23a.5.5 0 0 1 .5.5ZM24 18.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1 0-1h23a.5.5 0 0 1 .5.5Z" fill="currentColor"></path></svg>
    </button>
</div>



<div class="actionbar">
	<div class="action-item">
    
        {#if menuOpen}
            <div class="menu-overlay visible" on:click={closeMenu}></div>
            <div class="menu open">
                <div class="menu-header">
                    <div class="d-flex justify-content-between">
                        <img src="/assets/images/ICON_FM2-3D.png" alt="FXPO MAP">
                        <div on:click={toggleMenu}>
                            <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m15.333.667-6 6M6.667 9.333l-6 6M9.333 9.333l6 6M.667.667l6 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </div>
                    </div>
                </div>
                
                <!-- Menu items here -->
                <div class="menu-item">.</div>
                <div class="menu-item"><a href="#">  Land Sale is finished</a></div>
                <div class="menu-item">.</div>
                <div class="menu-item"><a href="#">Mint your land NFTs</a></div>
                <div class="menu-item">.</div>
                <div class="menu-item">
                    <a href="#">See How it works 
                        <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.02 3.02a.5.5 0 1 0-.707-.707L.98 7.647.626 8l.354.354 5.333 5.333a.5.5 0 0 0 .707-.707L2.374 8.333H16.5a.5.5 0 0 0 0-1H2.707L7.02 3.02Z" fill="currentColor"></path></svg>
                    </a>
                </div>
                <div class="dotted-divider"></div>
                <button class="btn-connect-wallet mt-4">Connect wallet</button>
            </div>
        {/if}
    </div>
    
    {#if showMapList}
    <div>
        <div color="white" class="sc-3b79772c-0 buUYZc">
            <button color="white" class="sc-ff5f358-0 kcWy">
                <svg width="9" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.375 0C2.111 0 .25 1.712.25 4.154c0 .871.212 1.477.605 2.149l3.242 5.538a.325.325 0 0 0 .555 0l3.243-5.538c.393-.672.605-1.278.605-2.15C8.5 1.713 6.639 0 4.375 0Zm0 2.154c1.051 0 1.904.826 1.904 1.846s-.853 1.846-1.904 1.846S2.471 5.02 2.471 4s.853-1.846 1.904-1.846Z" fill="currentColor"></path></svg>
                <span class="sc-d1bf728-8 sc-ff5f358-1 hwvEnz cXBayI">Map</span>
            </button>
            <a href="/list" color="white" data-cy="list-button" class="sc-ff5f358-0 cTxQOy">
                <svg width="13" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2.25" r="0.75" fill="currentColor"></circle><rect x="5" y="1.875" width="6.75" height="0.75" rx="0.375" fill="currentColor"></rect><circle cx="2" cy="6" r="0.75" fill="currentColor"></circle><rect x="5" y="5.625" width="6.75" height="0.75" rx="0.375" fill="currentColor"></rect><circle cx="2" cy="9.75" r="0.75" fill="currentColor"></circle><rect x="5" y="9.375" width="6.75" height="0.75" rx="0.375" fill="currentColor"></rect></svg>
                <span class="sc-d1bf728-8 sc-ff5f358-1 hwvEnz cXBayI">List</span>
            </a>
        </div>
    </div>	
    {/if}
</div>