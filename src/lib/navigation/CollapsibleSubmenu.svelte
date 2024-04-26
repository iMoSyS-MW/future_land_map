<script>
    export let title = 'Default Title'; // Trigger button title
    export let items = []; // Submenu items, expected to be an array of HTML or component instances

    let isOpen = false;

    function toggle() {
        isOpen = !isOpen;
    }
</script>

<style>
    .submenu {
        overflow: hidden;
        transition: max-height 0.3s ease-out;
        max-height: 0;
        padding-left: 10%;
    }

    .submenu.open {
        max-height: 1000px;
    }

    .toggle-btn {
        cursor: pointer;
        padding: 10px;
        background-color: #f0f0f0;
        border: none;
        width: 100%;
        text-align: left;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .arrow {
        border: solid black;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 3px;
        transition: transform 0.3s ease;
    }

    .down {
        transform: rotate(45deg);
    }

    .up {
        transform: rotate(-135deg);
    }
</style>

<button on:click={toggle} class="toggle-btn">
    {title}
    <span class="arrow" class:up={isOpen} class:down={!isOpen}></span>
</button>

<div class={`submenu ${isOpen ? 'open' : ''}`}>
    {#each items as item}
        <div>{@html item}</div>
    {/each}
</div>
