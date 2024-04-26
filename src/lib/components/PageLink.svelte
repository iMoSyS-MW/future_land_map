<script>
    export let text = "";
    export let size = "14px";
    export let textColor = "black";
    export let backgroundColor = "";
    export let decoration = "none";
    export let classes = "";
    export let url = "#";
    let style = `color: ${textColor} !important; text-decoration: ${decoration}; font-size: ${size};`;

    if(backgroundColor.length) {
        style += `background-color: ${backgroundColor} !important`
    }

</script>

<a href="{url}" class="{classes}" style="{style}">{text}</a>