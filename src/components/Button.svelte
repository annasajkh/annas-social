<script lang="ts">
    export let text : string = "";
    export let extendedClass : string = "";
    export let logoURL : string = ""

    export let onClick = () => {};
    
    let buttonClass : string = "button " + extendedClass;

</script>

<button class={buttonClass} on:click={onClick}>{text}</button>

<style>
    .full-width {
        width: 100%;
    }

    .button {
        font-family: Arial;
        color: white;
        background-color: #4285F4;
        padding-bottom: 11px;
        padding-top: 11px;
        padding-left: 11px;
        padding-right: 11px;
        border: 1px solid #4285F4;
        border-radius: 5px;
        margin-top: 11px;
        margin-bottom: 11px;
        margin-left: 11px;
        margin-right: 11px;
        transition: opacity 0.15s;
    }

    .button:hover {
        opacity: 0.75;
        cursor: pointer;
    }

    .sign-up-button-logo {
        background-image: var(--background-image, none);
        background-repeat: no-repeat;
        background-size: auto 100%;
        padding-bottom: 10px;
        padding-top: 10px;
    }
    
    @media only screen and (max-width: 800px) {
        .sign-up-button-logo {
            background-image: none;
        }
    }
</style>