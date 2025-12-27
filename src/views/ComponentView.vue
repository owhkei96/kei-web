<script setup>
import Card from 'primevue/card'
</script>

<template>
  <div class="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2">
    <!-- Sample -->
    <Card class="cz-card">
      <template #content>
        <label class="cz-title">Sample: </label>
        <label class="cz-content">usage/description</label>
      </template>
      <template #footer>
        <label class="cz-title">Example: </label>
        <h3 class="cz-example text-gray-200">example: xxxxxx</h3>
        <h3 class="cz-example bg-gray-400">example: xxxxxx</h3>
      </template>
    </Card>

    <!-- Color -->
    <Card class="cz-card">
      <template #content>
        <label class="cz-title">Background: </label>
        <label class="cz-content">{bg|text}-{color}-{value}</label>
      </template>
      <template #footer>
        <label class="cz-title">Example: </label>
        <h3 class="cz-example text-violet-200">example: text-violet-200</h3>
        <h3 class="cz-example bg-violet-400">example: bg-violet-400</h3>
      </template>
    </Card>

    <!-- Margin / Padding -->
    <Card class="cz-card">
      <template #content>
        <label class="cz-title">Margin / Padding: </label>
        <label class="cz-content">{m|p}{t|r|b|l}-{size} OR {m|p}{x|y}-{size} or {m|p}-{size}</label>
      </template>
      <template #footer>
        <label class="cz-title">Example: </label>
        <h3 class="cz-example bg-sky-400 pl-5">example: pl-5</h3>
        <h3 class="cz-example bg-sky-400 my-2">example: mb-2</h3>
      </template>
    </Card>

    <!-- Just In Time (JIT) Compiler -->
    <Card class="cz-card">
      <template #content>
        <label class="cz-title">Just In Time (JIT) Compiler: </label>
        <label class="cz-content">{properties}-[{size|color|etc}]</label>
      </template>
      <template #footer>
        <label class="cz-title">Example: </label>
        <h3 class="cz-example-nosize text-gray-200 text-[20px]">text-[20px]</h3>
        <h3 class="cz-example bg-gray-400 text-[#FFEF89]">text-[#FFEF89]</h3>
      </template>
    </Card>

    <!-- Layout (flex) -->
    <Card class="cz-card">
      <template #content>
        <label class="cz-title">Layout (flex): </label>
        <label class="cz-content">
          flex layout provides flexible layout design which is ideal for achieving responsive layout
        </label>
      </template>
      <template #footer>
        <label class="cz-title">Example: </label>
        <div class="space-y-3">
          <label class="cz-content"> 1. justify-end + space-x-6 </label>
          <div class="cz-box justify-end space-x-6">
            <div class="h-16 w-16 rounded-full bg-orange-500" />
            <div class="h-16 w-16 rounded-full bg-green-500" />
            <div class="h-16 w-16 rounded-full bg-blue-500" />
          </div>

          <label class="cz-content"> 2. justify-center + space-x-1 </label>
          <div class="cz-box justify-center space-x-1">
            <div class="h-16 w-16 rounded-full bg-orange-500" />
            <div class="h-16 w-16 rounded-full bg-green-500" />
            <div class="h-16 w-16 rounded-full bg-blue-500" />
          </div>

          <label class="cz-content"> 3. justify-center-safe + space-x-1 </label>
          <div class="cz-box justify-center-safe space-x-1">
            <div class="h-16 w-16 rounded-full bg-orange-500" />
            <div class="h-16 w-16 rounded-full bg-green-500" />
            <div class="h-16 w-16 rounded-full bg-blue-500" />
          </div>

          <label class="cz-content"> 4. justify-around </label>
          <div class="cz-box justify-around">
            <div class="h-16 w-16 rounded-full bg-orange-500" />
            <div class="h-16 w-16 rounded-full bg-green-500" />
            <div class="h-16 w-16 rounded-full bg-blue-500" />
          </div>

          <label class="cz-content"> 5. justify-baseline + space-x-1 </label>
          <div class="cz-box justify-baseline space-x-1">
            <div class="h-16 w-16 rounded-full bg-orange-500" />
            <div class="h-16 w-16 rounded-full bg-green-500" />
            <div class="h-16 w-16 rounded-full bg-blue-500" />
          </div>

          <label class="cz-content"> 6. justify-between </label>
          <div class="cz-box justify-between">
            <div class="h-16 w-16 rounded-full bg-orange-500" />
            <div class="h-16 w-16 rounded-full bg-green-500" />
            <div class="h-16 w-16 rounded-full bg-blue-500" />
          </div>

          <label class="cz-content"> 7. justify-evenly </label>
          <div class="cz-box justify-evenly">
            <div class="h-16 w-16 rounded-full bg-orange-500" />
            <div class="h-16 w-16 rounded-full bg-green-500" />
            <div class="h-16 w-16 rounded-full bg-blue-500" />
          </div>

          <label class="cz-content"> 8. justify-items-center </label>
          <div class="cz-box justify-items-center">
            <div class="h-16 w-16 rounded-full bg-orange-500" />
            <div class="h-16 w-16 rounded-full bg-green-500" />
            <div class="h-16 w-16 rounded-full bg-blue-500" />
          </div>

          <label class="cz-content"> 9. justify-center + items-center + space-x-1 </label>
          <div class="cz-box justify-center items-center space-x-1">
            <div class="h-16 w-16 rounded-full bg-orange-500" />
            <div class="h-16 w-16 rounded-full bg-green-500" />
            <div class="h-16 w-16 rounded-full bg-blue-500" />
          </div>
        </div>
      </template>
    </Card>

    <!-- Layout (flex flex-col) -->
    <Card class="cz-card">
      <template #content>
        <label class="cz-title">Layout (flex flex-col): </label>
        <label class="cz-content">
          flex-col is representives as flexible column which the item will be arranging in vertical
          form
        </label>
      </template>
      <template #footer>
        <label class="cz-title">Example: </label>
        <div class="space-y-3">
          <label class="cz-content"> 1. items-end + space-y-6 </label>
          <div class="cz-box-vertical items-end space-y-6">
            <div class="h-16 w-16 rounded-full bg-orange-500" />
            <div class="h-16 w-16 rounded-full bg-green-500" />
            <div class="h-16 w-16 rounded-full bg-blue-500" />
          </div>

          <label class="cz-content"> 2. items-center + space-y-1 </label>
          <div class="cz-box-vertical items-center space-y-1">
            <div class="h-16 w-16 rounded-full bg-orange-500" />
            <div class="h-16 w-16 rounded-full bg-green-500" />
            <div class="h-16 w-16 rounded-full bg-blue-500" />
          </div>

          <label class="cz-content"> 3. items-center-safe + space-y-1 </label>
          <div class="cz-box-vertical items-center-safe space-y-1">
            <div class="h-16 w-16 rounded-full bg-orange-500" />
            <div class="h-16 w-16 rounded-full bg-green-500" />
            <div class="h-16 w-16 rounded-full bg-blue-500" />
          </div>

          <label class="cz-content"> 4. items-baseline + space-y-1 </label>
          <div class="cz-box-vertical items- space-y-1">
            <div class="h-16 w-16 rounded-full bg-orange-500" />
            <div class="h-16 w-16 rounded-full bg-green-500" />
            <div class="h-16 w-16 rounded-full bg-blue-500" />
          </div>

          <label class="cz-content"> 5. items-baseline-last + space-y-1 </label>
          <div class="cz-box-vertical items-baseline-last space-y-1">
            <div class="h-16 w-16 rounded-full bg-orange-500" />
            <div class="h-16 w-16 rounded-full bg-green-500" />
            <div class="h-16 w-16 rounded-full bg-blue-500" />
          </div>

          <label class="cz-content"> 6. place-items-center </label>
          <div class="cz-box-vertical place-items-center">
            <div class="h-16 w-16 rounded-full bg-orange-500" />
            <div class="h-16 w-16 rounded-full bg-green-500" />
            <div class="h-16 w-16 rounded-full bg-blue-500" />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<style src="@/assets/component.css"></style>
