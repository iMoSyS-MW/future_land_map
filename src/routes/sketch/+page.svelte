<script>
  import { onMount } from 'svelte';
  import LeftMenu from '$lib/navigation/LeftMenu.svelte';
  
  let showSidebar;
  let sidebar; // Declare sidebar here to bind later in the markup
  let showLeftSideBarOverlay;

  // Function to toggle sidebar visibility
  function toggleSidebar() {
    showSidebar = !showSidebar;
  }

  // Function to hide the sidebar when clicking on the overlay or dismiss button
  function hideSidebar() {
    showSidebar = false;
  }

  onMount(() => {
    // Initialize sidebar based on window size
    showSidebar = window.innerWidth > 991;
    showLeftSideBarOverlay =  window.innerWidth < 991;

    // Responsive adjustments based on window resizing
    function handleResize() {
      showSidebar = window.innerWidth > 991;
      showLeftSideBarOverlay =  window.innerWidth < 991;
    }

    window.addEventListener('resize', handleResize);

    // Cleanup to remove the event listener when the component is destroyed
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
</script>

<style>
  .top-layer {
    width: 100%;
    display: block; /* Always display the top layer on larger screens */
  }

  .sidebar {
    width: 440px; /* Fixed sidebar width */
    /* position: fixed; */
    left: -440px; /* Start off-screen */
    top: 0;
    height: 100vh;
    background-color: #f8f9fa;
    transition: left 0.3s; /* Smooth transition for sliding effect */
    z-index: 1000; /* Ensure sidebar is above other content */
  }

  .sidebar.show {
    left: 0; /* Bring sidebar on-screen */
  }

  .sidebar .btn-dismiss {
    display: none;
  }

  .btn-toggle {
    display: none; /* Hide the toggle button by default */
  }

  .workspace {
    transition: margin-left 0.3s;
    margin-left: 0;
  }

  .workspace-expanded {
    margin-left: 250px; /* Push content to the right when sidebar is visible */
  }

  @media (max-width: 991px) {
    .sidebar{
      position: fixed;
    }

    .top-layer {
      display: none; /* Hide the top layer on tablets and smaller devices */
    }

    .btn-toggle {
      display: block; /* Show toggle button on smaller screens */
    }

    .sidebar .btn-dismiss {
      display: block; /* Show dismiss button in sidebar on smaller screens */
      position: absolute;
      top: 10px;
      right: 10px;
      border: none;
      background: none;
    }

    .workspace,
    .workspace-expanded {
      margin-left: 0; /* No margin shift on smaller screens */
    }
  }

  .overlay {
    display: none;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    top: 0;
    left: 0;
    z-index: 500; /* Lower than sidebar, higher than content */
  }

  .overlay.show {
    display: block;
  }
</style>

<div class="">
  <div class="top-layer bg-primary text-white p-3">
    <div>
      Top Layer Content
    </div>
  </div>

  <div class="overlay" class:show={showSidebar && showLeftSideBarOverlay} on:click={hideSidebar}></div>

  <div class="row flex-nowrap">
    <div bind:this={sidebar} class="col-auto sidebar bg-light p-3" class:show={showSidebar}>
      <button class="btn btn-light btn-sm btn-dismiss" class:show={showLeftSideBarOverlay} on:click={hideSidebar}>&times;</button>
      <LeftMenu />
    </div>

    <div class="col workspace" class:workspace-expanded={showSidebar && window.innerWidth > 991}>
      <div>
        <button class="btn btn-primary btn-sm btn-toggle" on:click={toggleSidebar}>
          menu
        </button>
        Workspace Content
      </div>
    </div>
  </div>
</div>
