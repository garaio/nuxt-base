<script setup>
useHead({
    title: "NUXT Learning area"
})
</script>

<template>
    <Html lang="de">

    <Head>
        <Title>Nuxt Learning area !!!</Title>
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <Link href="https://fonts.googleapis.com/css2?family=Rubik+Gemstones&display=swap" rel="stylesheet" />
    </Head>

    </Html>

    <NuxtLayout>
        <div class="error">
            You landed on the default empty router page
        </div>

        <div>
            You probably want to go to the demo page:
            <ul>
                <li>
                    <NuxtLink to="DemoRouterPage">Demo router page</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="SubPage">Sub page handling</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="SubPage/A">goto A in the subpage folder</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="SubPage/123">goto 123 id item in the subpage folder</NuxtLink>
                </li>
            </ul>
        </div>
    </NuxtLayout>
</template>

<style scoped>
div {
    padding: 20px;
}

.error {
    background-color: red;
    font-family: 'Rubik Gemstones', cursive;
    font-size: 3rem;
    color: white;
}
</style>