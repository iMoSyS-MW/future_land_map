<script>
    export let marginTop = 0;
    export let marginBottom = 0;
    export let background = "#fafafa !important;";
</script>

<style>
    footer {
        padding: 17px;
        display: flex;
        width: 100%;
        justify-content: space-around;
        background-color: rgba(0, 0, 0, 0.02);
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.06em;
    }

    footer a {
        color: rgb(0, 0, 0);
        text-decoration: none;
    }
</style>

<footer style="margin-top: {marginTop}; margin-bottom: {marginBottom}; background-color: {background} !important">
    <a href="">Terms & Conditions</a>
    <a href="">Future FXPO 2024 © All right reserved</a>
    <a href="">Privacy Policy</a>
</footer>