<script>
    import { menuVisible, toggleMenu } from './menu.js';
    import CollapsibleSubmenu from '$lib/navigation/CollapsibleSubmenu.svelte';

    let fxpoItems = [
        '<a href="/link1">a) Plateaus:</a>',
        '<a href="/link2">b) Areas</a>',
    ];

    let worldsItems = [
        "a) Future Trends:",
        "b) Iamverse:"
    ]
</script>
  
  <style>

    .menu {
      width: 100%;
      height: 100%;
      /* background-color: white !important; */
      padding-left: 20px;
      padding-right: 20px;
      /* z-index: 10; */
    }
  

    .filter-header {
        padding-bottom: 30px;
    }

    .filter-header {
        padding-bottom: 30px;
    }

    .filter-body .filter-item {
        padding: 20px 30px;
        border-bottom: 1px dashed silver ;
    }

    .filter-body .filter-item .filter-action {
        cursor: pointer;
    }
  
    button {
      z-index: 10;
      border: none;
      /* font-size: 20px; */
      text-transform: uppercase;
    }


    .menu-logo {
        font-size: 40px;
        font-variant: small-caps;
    }

    .filter-input {
    display: flex;
    align-items: center;
    width: 100px;
    background-color: #ccc !important; /* Gray background */
    border-radius: 20px; /* Rounded corners */
    padding: 5px 10px; /* Padding around the input field */
    margin-right: 10px; /* Space between the input containers */
  }

  .filter-input.price::before {
    content: "$"; /* Embedded $ sign */
    margin-right: 8px; /* Space between the $ sign and the input field */
  }

  .filter-input.size::before {
    content: "m"; /* Embedded $ sign */
    margin-right: 8px; /* Space between the $ sign and the input field */
  }

  .filter-input input[type="text"] {
    background-color: transparent; /* Ensures the input background matches the container */
    border: none; /* Removes the border */
    outline: none; /* Removes the outline */
    color: #000; /* Text color */
    width: 70px;
  }
   
  .menu-logo img{
    width: 100px !important;
    height: 100px !important;
  }

  .btn-menu {
        background: none;
        appearance: none;
        text-transform: uppercase;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        cursor: pointer;
        pointer-events: all;
        color: inherit;
}

  </style>

<div class="filter-header">
    <div class="menu-logo">
        <img src="/assets/images/ICON_FM2-3D.png" alt="FXPO MAP">
    </div>
    <div class="d-flex justify-content-between">
        <button on:click={toggleMenu}>
            ← Filters
        </button>
        <button class="clear-filter">
            <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m15.333.667-6 6M6.667 9.333l-6 6M9.333 9.333l6 6M.667.667l6 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <span class="sc-d1bf728-7 jYsKGg">Clear filters</span>
        </button>
    </div>

    <!-- <div class="sc-297bbc1-1 kkhjNe">
            <div class="sc-a526a354-2 gSyNmC">
            <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="5" r="4" stroke="currentColor"></circle><path d="m8 8 3 3" stroke="currentColor" stroke-linecap="round"></path></svg>
            <input placeholder="Search plots, partners" data-cy="map-plot-search-input" class="sc-a526a354-0 gOtDyg" value="">
            <button class="sc-a526a354-1 mGOtn">
                <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m15.333.667-6 6M6.667 9.333l-6 6M9.333 9.333l6 6M.667.667l6 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button>
        </div>
        <div class="sc-297bbc1-0 cOQTeu"><div data-cy="map-plot-search-results" class="sc-297bbc1-3 ilrsDv">
            <span class="sc-d1bf728-8 sc-d1bf728-9 hwvEnz hbUixu">Enter at least 3 characters</span>
        </div>
    </div> -->

    <div class="input-group">
        <span class="input-group-text">
            <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="5" r="4" stroke="currentColor"></circle><path d="m8 8 3 3" stroke="currentColor" stroke-linecap="round"></path></svg>
        </span>
        <input type="text" class="form-control" placeholder="Search plots, partners">
    </div>
</div>

<div class="filter-body">
    <div class="filter-item">
        <h5 class="filter-title">Plot status</h5>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                Mintable
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
            <label class="form-check-label" for="flexCheckChecked">
                For Sale
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
            <label class="form-check-label" for="flexCheckChecked">
                For Rent
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
            <label class="form-check-label" for="flexCheckChecked">
                Mineable
            </label>
        </div>
    </div>

    <div class="filter-item">
        <h5 class="filter-title">Price range</h5>
        <div class="d-flex justify-content-between">
            <div class="filter-input price">
                <input type="text" placeholder="0"  id="priceRangeFrom" name="priceRangeFrom">
            </div>
            
            <div class="filter-input price">
                <input type="text" placeholder="10000"  id="priceRangeTo" name="priceRangeTo">
            </div>
            <button>Apply</button>
        </div>
    </div>

    <div class="filter-item">
        <h5 class="filter-title">Plot size</h5>
        <div class="d-flex justify-content-between">
            <div class="filter-input size">
                <input type="text" placeholder="0"  id="plotSizeWidth" name="plotSizeWidth">
            </div>
            
            <div class="filter-input size">
                <input type="text" placeholder="10000"  id="plotSizeHeight" name="plotSizeHeight">
            </div>
            <button>Apply</button>
        </div>
    </div>

    <div class="filter-item">
        <h5 class="filter-title">Future Multiverse:</h5>
        <CollapsibleSubmenu title="1. Future EXPO / FXPO:" items={fxpoItems} />
        <CollapsibleSubmenu title="2. Worlds / Universes / Metaverses:" items={worldsItems} />

        <!-- <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
            <label class="form-check-label" for="flexCheckChecked">
                Future of finance
            </label>
        </div> -->
    </div>

    <div class="filter-item">
        <h5 class="filter-title">Partner lands:</h5>
        <h5 class="filter-action">Future Catalyst</h5>
        <h5 class="filter-action">Future Trends Group</h5>
        <h5 class="filter-action">iMoSyS Limited</h5>
        <h5 class="filter-action">Malawi Government</h5>
    </div>
</div>
  