<script lang="ts">
    export let placeHolder : string;
    export let value : string  = "";

    let focus : boolean = false;


    function onFocus() {
        focus = true;
    }

    function onBlur() {
        focus = false;
    }
    
</script>

<textarea rows="9" cols="70" maxlength="1000" class="text-input" placeholder={placeHolder} bind:value={value} on:focus={onFocus} on:blur={onBlur} />


<style>
    .text-input::placeholder {
        font-family: Arial;
        color: gray;
        text-align: left;
        padding-left: 0px;
    }

    .text-input:focus {
        outline: none !important;
        border:1px solid #4285F4;
    }

    .text-input {
        font-family: Arial;
        text-align: left;
        background-color: white;
        color: black;
        width: 80%;
        padding-left: 5px;
        padding-right: 5px;
        padding-bottom: 5px;
        padding-top: 5px;
        border: 1px solid #4285F4;
        border-radius: 5px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

</style>