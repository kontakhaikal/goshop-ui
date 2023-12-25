<script setup lang="ts">
import { Heart, ShoppingCart, Search } from "lucide-vue-next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { getCategories } from "@/handler/category";
import { getBanners } from "@/handler/banner";
import Banner from "@/components/Banner.vue";

const { data: categories } = await useAsyncData(getCategories);
const { data: banners } = await useAsyncData(getBanners);
</script>

<template>
  <header class="border border-slate-200">
    <div class="container flex items-center justify-between py-4">
      <div class="gap-x-1 items-center hidden md:flex">
        <svg viewBox="0 0 340 90" class="h-10 text-white">
          <rect
            xmlns="http://www.w3.org/2000/svg"
            width="340"
            height="90"
            rx="10"
            ry="10"
            fill="currentColor"
          />
          <path
            d="M65.165 39.448v27.324c-5.706 2.17-12.858 3.375-18.966 3.375C30.528 70.147 20 60.744 20 45.234 20 28.277 32.617 20 48.047 20c1.045 0 2.17 0 3.456.08 1.205.08 2.491.241 3.857.321 2.492.322 4.983.643 7.394 1.367v12.295c-.884-.401-1.848-.723-2.974-1.044-1.205-.241-2.41-.483-3.696-.724-2.572-.482-5.304-.643-7.956-.643-10.207 0-16.073 3.135-16.073 13.582 0 10.206 5.384 13.26 14.546 13.26.964 0 2.009-.08 3.134-.16 1.045-.081 2.17-.161 3.375-.242v-7.474H42.663v-11.17h22.502zm31.262 19.368c8.76 0 13.26-5.626 13.26-13.823 0-8.68-4.822-13.823-13.26-13.823-8.84 0-13.26 5.626-13.26 13.823 0 8.519 4.902 13.823 13.26 13.823zm0 11.17c-15.109 0-25.315-10.286-25.315-24.993C71.112 29.804 81.8 20 96.427 20c15.189 0 25.314 10.206 25.314 24.993 0 15.27-10.608 24.993-25.314 24.993zm30.377-1.607V57.048c.965.24 2.17.482 3.536.642 1.367.242 2.813.402 4.34.483l4.661.24c1.608.081 3.134.161 4.5.161 3.778 0 6.43-.24 8.037-.642 1.527-.402 2.33-1.126 2.33-2.25 0-.965-.723-1.688-1.446-2.25-2.652-1.769-5.786-2.492-8.92-3.215-8.84-1.768-16.957-5.304-16.957-15.43C126.885 22.812 138.216 20 147.94 20c5.385 0 10.85.562 16.073 1.848v11.331c-.804-.24-1.848-.401-3.134-.643-1.366-.16-2.732-.321-4.26-.482a88.99 88.99 0 0 0-9.241-.482c-1.768 0-5.465 0-7.153.643-1.125.402-1.848.884-1.848 2.17 0 .643.16 1.205.482 1.687.322.563.884.965 1.607 1.367 2.17 1.205 4.983 1.928 7.394 2.49 2.009.483 4.018 1.046 6.108 1.608 7.072 1.929 11.733 5.867 11.733 13.421 0 12.457-12.376 15.109-22.342 15.109-5.464 0-11.17-.402-16.555-1.688zM202.106 20.4h12.055v49.183h-12.055V50.618h-17.68v18.966H172.37V20.401h12.055v19.047h17.68V20.4zm44.843 38.415c8.76 0 13.26-5.626 13.26-13.823 0-8.68-4.822-13.823-13.26-13.823-8.84 0-13.26 5.626-13.26 13.823 0 8.519 4.902 13.823 13.26 13.823zm0 11.17c-15.108 0-25.315-10.286-25.315-24.993C221.634 29.804 232.323 20 246.95 20c15.19 0 25.315 10.206 25.315 24.993 0 15.27-10.608 24.993-25.315 24.993zm32.789-.402V20.401h23.306c9.161 0 16.956 6.912 16.956 16.154 0 9.322-8.036 16.153-16.956 16.153h-11.251v16.876h-12.055zm23.306-38.012h-11.251v9.965h11.25c2.813 0 4.903-2.17 4.903-4.982s-2.09-4.983-4.902-4.983z"
            fill="#lll"
          />
        </svg>
      </div>

      <div class="w-full max-w-lg">
        <form class="flex items-center border rounded-md w-full">
          <div class="border-r border-slate-200 w-full max-w-[8rem]">
            <Select name="category">
              <SelectTrigger
                :class="'h-full border-none focus:ring-0 focus:ring-offset-0'"
              >
                <SelectValue placeholder="Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem v-for="category of categories" :value="category.id">
                  {{ category.name }}</SelectItem
                >
              </SelectContent>
            </Select>
          </div>
          <input
            name="q"
            class="py-1.5 px-4 focus:outline-none w-full"
            type="text"
          />
          <button class="py-1.5 px-2 bg-white hover:bg-slate-50 rounded-r-md">
            <Search />
          </button>
        </form>
      </div>

      <div class="flex gap-x-4">
        <NuxtLink href="/wishlist">
          <Heart />
        </NuxtLink>
        <NuxtLink href="/cart">
          <ShoppingCart />
        </NuxtLink>
      </div>
    </div>
  </header>
  <main>
    <Banner :banners="banners!" class="py-8 bg-slate-50" />
    <section class="container mt-12">
      <h1>Featured Products</h1>
    </section>
  </main>
</template>
