<script lang="ts">
    import { dateNow } from "../utils/Global";
    import { msToTime } from "../utils/Utils";
    
    export let name : string | null = "";
    export let userImageUrl : string | null = "";
    export let postText : string | null = "";

    export let dateCreated : number;
</script>

<div class="post">
    <div class="user">
        <img src={userImageUrl} alt="user profile"/>
        <div class="user-information">
            <p class="user-name">{name}</p>
            <p class="user-post-date-created">{msToTime($dateNow - dateCreated)} ago</p>
        </div>
    </div>
    
    <p class="postText">{postText}</p>
</div>


<style>
    p {
        word-wrap: break-word
    }
    
    img {
        width: 50px;
        height: 50px;
        border-radius: 10px;
        margin-right: 10px;
    }

    .postText {
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 10px;
        margin-right: 10px;
    }

    .user {
        display: flex;
        flex-direction: row;
        margin-top: 10px;
        margin-left: 10px;
        margin-right: 10px;
    }

    .user-information { 
        flex-direction: column;
    }

    .user-name {
        margin-top: 5px;
        margin-bottom: 5px;
    }
    
    .user-post-date-created {
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .post {
        
        border: 1px solid whitesmoke;
        font-family: Arial;
        color: white;
        background-color: #144272;
        border-radius: 10px;
        width: 50%;
        height: 100%;
        margin-bottom: 20px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
</style>