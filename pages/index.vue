<template>
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
                <NuxtLink to="SubPage/A">goto A in th subpage folder</NuxtLink>

            </li>
        </ul>
    </div>
</template>

<style scoped>
div {
    padding: 20px;
}

.error {
    background-color: red;
}
</style>