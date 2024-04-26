<script>
    export let link = '#';
    export let bgColor = '#E8F2FC'; // Default background color
    export let textColor = '#2e89e4'; // Default text color
    export let hoverBgColor = '#bcddff'; // Default hover background color
    export let hoverTextColor = '#2e89e4'; // Default hover text color
    export let borderColor = ''; // Default hover background color
    export let borderColorHover = ''; // Default hover text color
  </script>
  
  <style>
    .button {
        width: 100% !important;
        padding: 10px 20px;
        border-radius: 20px;
        background-color: var(--bg-color) !important;
        color: var(--text-color);
        border: none;
        cursor: pointer;
        text-decoration: none;
        transition: background-color 0.3s, color 0.3s;
        display: flex;
        flex-direction: column;
        gap: 16px;
        text-align: center;
    }
  
    .button:hover {
      background-color: var(--hover-bg-color) !important;
      color: var(--hover-text-color);
    }
  </style>
  
  <a
    href={link}
    class="button"
    style="
      --bg-color: {bgColor};
      --text-color: {textColor};
      --hover-bg-color: {hoverBgColor};
      --hover-text-color: {hoverTextColor};
    "
  >
    <slot></slot>
  </a>
  