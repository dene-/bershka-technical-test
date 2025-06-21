<script setup lang="ts">
import './style/app.scss';
import { getCategoryPath } from '@/domain/categories.domain';
import { CATEGORIES } from '~/domain/constants/categories.const';
</script>

<template>
  <div class="Main container">
    <article>
      <strong>category4:</strong> {{ getCategoryPath(CATEGORIES, 'category4') }}
    </article>
    <article>
      <strong>category2:</strong> {{ getCategoryPath(CATEGORIES, 'category2') }}
    </article>
    <article>
      <strong>category5:</strong> {{ getCategoryPath(CATEGORIES, 'category5') }}
    </article>
  </div>
</template>

<style lang="scss">
  .Main {
    display: flex;
    flex-direction: column;

    gap: 12px;
  }
</style>
