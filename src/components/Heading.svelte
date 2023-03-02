<script lang="ts">
    export let type : string = "";
    export let text : string = "";
</script>

{#if type == "h1"}
    <h1 class="heading-style">{text}</h1>
{:else if type == "h2"}
    <h2 class="heading-style">{text}</h2>
{:else if type == "h3"}
    <h3 class="heading-style">{text}</h3>
{:else if type == "h4"}
    <h4 class="heading-style">{text}</h4>
{:else if type == "h5"}
    <h5 class="heading-style">{text}</h5>
{:else if type == "h6"}
    <h6 class="heading-style">{text}</h6>
{:else}
	<p style="color: red">INVALID HEADING TYPE</p>
{/if}

<style>
    .heading-style {
        width: fit-content;
        font-family: 'Franklin Gothic Medium';
        font-size: 40px;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        margin-top: 0px;
        margin-bottom: 20px;
        background-color: var(--background-color, #144272);
        color: var(--color, #4285F4);
        border-radius: 5px;
    }
</style>