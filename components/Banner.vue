<script setup lang="ts">
import { type Banner } from "@/handler/banner";
const props = defineProps<{ banners: Banner[] }>();
const activeIndex = ref(0);
</script>

<template>
  <section>
    <div class="container">
      <div class="relative h-[26rem] overflow-hidden">
        <div
          v-for="(banner, i) of props.banners"
          :style="`transform: translateX(${(i - activeIndex) * 100}%)`"
          class="h-full w-full rounded-md absolute flex bg-white transition-transform duration-500"
        >
          <img
            class="w-full h-full object-cover rounded-md"
            :src="banner.image"
            alt=""
          />
        </div>
        <div class="flex gap-x-3 absolute bottom-10 left-10">
          <button
            type="button"
            :disabled="i === activeIndex"
            :key="banner.id"
            @click="activeIndex = i"
            v-for="(banner, i) of props.banners"
            class="h-3 w-3 rounded-md transition-transform duration-200"
            :class="
              i === activeIndex ? 'bg-slate-900 scale-110' : 'bg-slate-300'
            "
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>
