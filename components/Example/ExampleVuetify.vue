<script setup lang="ts">
</script>

<template>
  <div class="component-vuetify">
    <ShowcaseComponent
      component-file="ExampleVuetify.vue"
      title="Vuetify example"
      link="https://next.vuetifyjs.com/"
    >
      <template #example>
        <ShowcaseExample>
          <v-container>
            <v-row>
              <v-col>
                <v-btn color="nuxt-green" prepend-icon="mdi-vuetify">
                  Primary button including an icon
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-card>
                  <v-card-title>Card-Title</v-card-title>
                  <v-card-text>Some card content</v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <!-- The new Vuetify 3 way allows to use props -->
                <v-card title="Card title" subtitle="Subtitle" text="Some Text">
                  <v-card-actions>
                    <v-btn>Click me</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </ShowcaseExample>
      </template>
    </ShowcaseComponent>
  </div>
</template>

<style scoped lang="scss">

</style>
