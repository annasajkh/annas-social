<script lang="ts">
    import { user } from "../utils/Global";

</script>


<div class="user-profile">
    <div class="user">
        <img class="user-image" src={$user?.photoURL} alt="user profile"/>
        <div class="user-information">
            <p class="user-name">{$user?.displayName}</p>
        </div>
    </div>
</div>


<style>
    .user-profile {
        color: white;
    }

    .user {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 10px;
        margin-left: 10px;
        margin-right: 10px;
    }

    .user-image {
        border-radius: 10px;
    }


</style>