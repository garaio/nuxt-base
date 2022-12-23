<template>
  <div :class="$style.page" class="d-grid">
    <div>
      <h1>Hello Nuxt App</h1>
      <Image src="/background.jpg" width="700px">
        <h3>Image title</h3>
      </Image>
    </div>
    <div>
      <TodoList />
    </div>
  </div>
</template>

<style module>
.page {
  padding: 50px;
  background-color: bisque;
}
</style>

<style>
.d-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>
