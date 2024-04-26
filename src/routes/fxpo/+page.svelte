<script>
    // import { Router, Link } from 'svelte-routing';
    import { writable } from 'svelte/store';
	import MapPkg  from "mapbox-gl";
	import "/node_modules/mapbox-gl/dist/mapbox-gl.css";
	import TopNavbar from '$lib/navigation/TopNavbar.svelte';
	import TopMenu from '$lib/navigation/TopMenu.svelte';
	import SlidingMenu from '$lib/navigation/SlidingMenu.svelte';
    import ActionBar from '$lib/navigation/ActionBar.svelte';

    // import MapPage from '../fxpo';

	import { toggleMenu } from '$lib/navigation/menu.js';
	
	const {Map} = MapPkg
	import { onMount, onDestroy } from "svelte";

	let map;
	let mapContainer;
	let lng, lat, zoom;

	lng = 35.0705;
	lat = -15.8200;
	zoom = 14.00;

	function updateData() {
		zoom = map.getZoom();
		lng = map.getCenter().lng;
		lat = map.getCenter().lat;
	}

	// Function to convert decimal degrees to DMS (Degrees, Minutes, Seconds)
	function decimalToDMS(decimal, isLongitude) {
		const direction = decimal < 0
		? isLongitude ? 'W' : 'S'
		: isLongitude ? 'E' : 'N';
		const absolute = Math.abs(decimal);
		const degrees = Math.floor(absolute);
		const minutesNotTruncated = (absolute - degrees) * 60;
		const minutes = Math.floor(minutesNotTruncated);
		const seconds = ((minutesNotTruncated - minutes) * 60).toFixed(2);

		return `${degrees}°${minutes}’${seconds}’’${direction}`;
	}

	// Computed DMS values
	$: latitudeDMS = decimalToDMS(lat, false);
  	$: longitudeDMS = decimalToDMS(lng, true);

	onMount(() => {
		const initialState = { lng: lng, lat: lat, zoom: zoom };

		map = new Map({
			container: mapContainer,
			accessToken:  `pk.eyJ1IjoiZnV0dXJlbXVsdGl2ZXJzZSIsImEiOiJjbHRvYms5a3EwZzhwMnBvM2tsazQ3bWl2In0.VSWHm8vZruxmOD-_n516pQ` ,
			style: `mapbox://styles/mapbox/outdoors-v11`,
			center: [initialState.lng, initialState.lat],
			zoom: initialState.zoom,
		});

		map.on('move', () => {
			updateData();
		});
	});

	onDestroy(() => {
		if(map != null){
			map.remove();
		}
	});
</script>

<svelte:head>
	<title>Map</title>
	<meta name="description" content="About this app" />
</svelte:head>

<!-- <TopNavbar /> -->
<TopMenu />
<main>
	<div class="sidebar">
		<SlidingMenu />
	</div>	

    <ActionBar />

	<div class="statusbar">
		<div class="fLYfrS">
			<div class="statusbar-action">
				<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="1.333" fill="#fff"></circle><circle cx="8" cy="8" r="4.833" stroke="#fff"></circle><path d="M8 1.333v1.334M8 13.334v1.333M1.333 8h1.334M13.333 8h1.334" stroke="#fff" stroke-linecap="round"></path></svg>
			</div>
			<div class="statusbar-action">3D</div>
			<div>
				<div class="sc-7d35f93-3 lfeHov">
					<svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path d="M9 1.667v14.666M16.333 9H1.667" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path></svg>
				</div>
				<div class="sc-7d35f93-3 decxSD">
					<svg width="18" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M16.333 8H1.667" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path>
					</svg>
				</div>
			</div>
		</div>
		<!-- Longitude: {lng.toFixed(4)} | Latitude: {lat.toFixed(4)} | Zoom: {zoom.toFixed(2)} -->
		<div>
			<h5 style="color: black !important;">{longitudeDMS} {latitudeDMS}</h5>
		</div>
	</div>
	
	<div class="map-wrap">
		<div class="map" bind:this={mapContainer} />
	</div>
</main>

<style>
	.map {
		position: absolute;
		width: 100%;
		height: 93%;
		left: 0;
	}

	.sidebar {
		z-index: 1;
		position: absolute;
		left: 0;
		height: 93%;
		width: 400px;
	}

	.statusbar {
		z-index: 1;
		position: absolute;
		/* background-color: rgb(35 55 75 / 90%); */
		color: #fff;
		padding: 6px 12px;
		font-family: monospace;
		bottom: 0;
		right: 0;
		margin: 12px;
		border-radius: 4px;
	}

	.fLYfrS {
		display: flex;
		flex-direction: row;
		-webkit-box-pack: end;
		justify-content: flex-end;
		align-items: flex-end;
	}

	.statusbar-action {
		width: 40px;
		height: 40px;
		display: flex;
		flex-direction: column;
		-webkit-box-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		align-items: center;
		/* background: rgba(224, 23, 23, 0.2); */
		background: rgba(0,0,0, 0.3) !important;
		backdrop-filter: blur(8px);
		margin: 0.5px 4px;
		border-radius: 12px;
		cursor: pointer;
	}

	.lfeHov {
		width: 40px;
		height: 40px;
		display: flex;
		flex-direction: column;
		-webkit-box-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		align-items: center;
		/* background: rgba(255, 255, 255, 0.2); */
		background: rgba(0,0,0, 0.3) !important;
		backdrop-filter: blur(8px);
		margin: 0.5px 4px;
		border-radius: 12px 12px 0px 0px;
		cursor: pointer;
	}
	
	.decxSD {
		width: 40px;
		height: 40px;
		display: flex;
		flex-direction: column;
		-webkit-box-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		align-items: center;
		/* background: rgba(255, 255, 255, 0.2); */
		background: rgba(0,0,0, 0.3) !important;
		backdrop-filter: blur(8px);
		margin: 0.5px 4px;
		border-radius: 0px 0px 12px 12px;
		cursor: pointer;
	}

</style>

