<script>
	import MapPkg  from "mapbox-gl";
	import "../../node_modules/mapbox-gl/dist/mapbox-gl.css";
	import TopNavbar from './TopNavbar.svelte';
	import SlidingMenu from './SlidingMenu.svelte';

	import { toggleMenu } from './menu.js';
	
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

<TopNavbar />
<main>
	<div class="sidebar">
		<SlidingMenu />
	</div>	

	<div class="actionbar">
		<button class="btn-connect-wallet">Connect wallet</button>
		<div>
			<div color="white" class="sc-3b79772c-0 buUYZc">
				<button color="white" class="sc-ff5f358-0 kcWy">
					<svg width="9" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.375 0C2.111 0 .25 1.712.25 4.154c0 .871.212 1.477.605 2.149l3.242 5.538a.325.325 0 0 0 .555 0l3.243-5.538c.393-.672.605-1.278.605-2.15C8.5 1.713 6.639 0 4.375 0Zm0 2.154c1.051 0 1.904.826 1.904 1.846s-.853 1.846-1.904 1.846S2.471 5.02 2.471 4s.853-1.846 1.904-1.846Z" fill="currentColor"></path></svg>
					<span class="sc-d1bf728-8 sc-ff5f358-1 hwvEnz cXBayI">Map</span>
				</button>
				<button color="white" data-cy="list-button" class="sc-ff5f358-0 cTxQOy">
					<svg width="13" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2.25" r="0.75" fill="currentColor"></circle><rect x="5" y="1.875" width="6.75" height="0.75" rx="0.375" fill="currentColor"></rect><circle cx="2" cy="6" r="0.75" fill="currentColor"></circle><rect x="5" y="5.625" width="6.75" height="0.75" rx="0.375" fill="currentColor"></rect><circle cx="2" cy="9.75" r="0.75" fill="currentColor"></circle><rect x="5" y="9.375" width="6.75" height="0.75" rx="0.375" fill="currentColor"></rect></svg>
					<span class="sc-d1bf728-8 sc-ff5f358-1 hwvEnz cXBayI">List</span>
				</button>
			</div>
		</div>
	</div>

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

	.btn-connect-wallet {
    border: 2px solid black; /* Black border */
    border-radius: 20px; /* Rounded corners */
    background-color: transparent; /* Transparent background */
    color: black; /* Text color */
    padding: 10px 20px; /* Padding around the text */
    text-align: center; /* Center the text */
    text-decoration: none; /* Remove text underline */
    display: inline-block; /* Align button properly */
    font-size: 16px; /* Text size */
    cursor: pointer; /* Cursor changes to pointer to indicate it's clickable */
    transition: background-color 0.3s, color 0.3s; /* Smooth transition for background and text color */
  }

  .btn-connect-wallet:hover {
    background-color: black !important; /* Background color on hover */
    color: white; /* Text color on hover */
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

	@media only screen and (min-width: 769px) {
		.cXBayI {
			display: block;
		}
	}

</style>

