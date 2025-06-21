<script setup lang="ts">
import './style/app.scss';
import { getCategoryPath } from '@/domain/categories.domain';
import { CATEGORIES } from '~/domain/constants/categories.const';
</script>

<template>
  <div class="Main container p-3">
    <h1>Bershka Technical Test</h1>
    <div class="w-full flex flex-col">
      <pre class="p-2">{{ CATEGORIES }}</pre>
      <h5>Examples:</h5>
      <article>
        <strong>category4:</strong> {{ getCategoryPath(CATEGORIES, 'category4') }}
      </article>
      <article>
        <strong>category2:</strong> {{ getCategoryPath(CATEGORIES, 'category2') }}
      </article>
      <article>
        <strong>category5:</strong> {{ getCategoryPath(CATEGORIES, 'category5') }}
      </article>
      <article>
        <strong>category6:</strong> {{ getCategoryPath(CATEGORIES, 'category6') || 'Category not found!' }}
      </article>
    </div>
  </div>
</template>
