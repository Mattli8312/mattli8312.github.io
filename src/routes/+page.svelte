<script lang="ts">
    import TitleSection from "./TitleSection.svelte";
    import LanguagesSection from "./LanguagesSection.svelte";
    import NavBar from "./NavBar.svelte";
    import Background from "./Background.svelte";
</script>

<div class="mainpage">
    <TitleSection/>
    <Background/>
    <LanguagesSection/>
    <NavBar/>
</div>

<style>
    .mainpage{
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-x: hidden;
    }
</style>