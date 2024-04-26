<script>
    import TopNavbar from '$lib/navigation/TopNavbar.svelte';
    import SlidingMenu from '$lib/navigation/SlidingMenu.svelte';
    // import PlotCard from './PlotCard.svelte';
    import PlotCard from '$lib/components/PlotCard.svelte';
</script>
  
<svelte:head>
    <title>Map</title>
    <meta name="description" content="About this app" />
</svelte:head>

<TopNavbar />

<main >
    <!-- <ConnectWallet/> -->
    <div class="sidebar">
        <SlidingMenu />
    </div>	


    <div class="container mt-3">
        <div class="row justify-content-between">
            <div class="col-md-4">
            <PlotCard title="Plot W0114" distanceHQ="144m" publicSpace="350m" />
            </div>
            <div class="col-md-4">
            <PlotCard title="Plot W3144" distanceHQ="467m" publicSpace="31m" />
            </div>
            <div class="col-md-4">
            <PlotCard title="Plot D3440" distanceHQ="464m" publicSpace="89m" />
            </div>
        </div>
    </div>
</main>
  
<style>
    .sidebar {
		z-index: 1;
		position: absolute;
		left: 0;
		height: 93%;
		width: 400px;
	}
</style>