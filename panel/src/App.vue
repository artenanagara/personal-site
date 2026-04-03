<script setup>
import { reactive, computed } from 'vue'

const formData = reactive({
  id: '',
  title: '',
  category: '',
  subtitle: '',
  type: 'open',
  url: '',
  description: '',
  coverDefault: '',
  coverHover: '',
  metadata: [
    { label: 'Role', value: '' },
    { label: 'Client', value: '' },
    { label: 'Timeline', value: '' },
    { label: 'Year', value: '' }
  ],
  content: [
    { type: 'full-width-image', src: '', aspectRatio: 'aspect-[16/9]' },
    { type: 'text-block', label: 'The Problem', align: 'left', content: '' },
    { type: 'text-block', label: 'Challenge', align: 'right', content: '' },
    { type: 'gallery-grid', items: [{ src: '', span: 'col-span-2' }, { src: '', span: 'col-span-2' }, { src: '', span: 'col-span-4' }] },
    { type: 'text-block', label: 'The Solution', align: 'left', content: '' },
    { type: 'gallery-grid', items: [{ src: '', span: 'col-span-4' }, { src: '', span: 'col-span-2' }, { src: '', span: 'col-span-2' }, { src: '', span: 'col-span-4' }] },
    { type: 'text-block', label: 'Summary', align: 'left', content: '' },
    { type: 'gallery-grid', items: [{ src: '', span: 'col-span-2' }, { src: '', span: 'col-span-2' }, { src: '', span: 'col-span-4' }] }
  ]
})

const getGalleryItemClass = (span) => {
  if (!span) return 'grid-span-1';
  if (span.includes('col-span-4')) return 'grid-span-4';
  if (span.includes('col-span-2')) return 'grid-span-2';
  return 'grid-span-1';
};

const detailJsonOutput = computed(() => {
  const output = {
    id: formData.id,
    title: formData.title,
    category: formData.category,
    subtitle: formData.subtitle
  }
  if (formData.url) output.url = formData.url
  output.description = formData.description
  output.metadata = formData.metadata
  output.content = formData.content
  
  return JSON.stringify(output, null, 4)
})

const worksJsonSnippet = computed(() => {
  const output = {
    id: formData.id,
    title: formData.title,
    category: formData.category,
    type: formData.type
  }
  if (formData.url) output.url = formData.url
  output.cover = {
    default: formData.coverDefault,
    hover: formData.coverHover
  }
  return JSON.stringify(output, null, 4)
})

const copyDetailJson = () => {
  navigator.clipboard.writeText(detailJsonOutput.value)
  alert('Detail JSON copied to clipboard!')
}

const copyWorksEntry = () => {
  navigator.clipboard.writeText(worksJsonSnippet.value)
  alert('works.json entry copied to clipboard!')
}
</script>

<template>
  <div class="layout-app">
    <!-- Static Form Builder Sidebar -->
    <aside class="sidebar-builder">
      <div class="sidebar-header">
        <h2>Works Form</h2>
        <p>Fixed Template (Exmood Structure)</p>
      </div>

      <div class="form-container">
        <!-- Basic Info -->
        <div class="card mb-4">
          <div class="card-header"><h3 class="card-title">1. Basic Info</h3></div>
          <div class="grid gap-4">
            <div><label>ID / Slug</label><input v-model="formData.id" type="text" placeholder="e.g. exmood" /></div>
            <div><label>Title</label><input v-model="formData.title" type="text" placeholder="e.g. Exmood" /></div>
            <div><label>Category</label><input v-model="formData.category" type="text" placeholder="e.g. Mobile App" /></div>
            <div><label>Website URL / Prototype</label><input v-model="formData.url" type="text" /></div>
            <div class="grid grid-cols-2 gap-4">
              <div><label>Default Cover</label><input v-model="formData.coverDefault" type="text" placeholder="/images/..." /></div>
              <div><label>Hover Cover</label><input v-model="formData.coverHover" type="text" placeholder="/images/..." /></div>
            </div>
            <div><label>Subtitle / Hook</label><input v-model="formData.subtitle" type="text" /></div>
            <div><label>Description</label><textarea v-model="formData.description"></textarea></div>
          </div>
        </div>

        <!-- Metadata -->
        <div class="card mb-4">
          <div class="card-header"><h3 class="card-title">2. Fixed Metadata</h3></div>
          <div class="grid gap-3">
            <div v-for="(meta, index) in formData.metadata" :key="index">
              <label>{{ meta.label }}</label>
              <input v-model="meta.value" type="text" />
            </div>
          </div>
        </div>

        <!-- Fixed Content Blocks -->
        <div class="card mb-4">
          <div class="card-header"><h3 class="card-title">3. Content Sections</h3></div>
          
          <div class="content-block-list">
            <div v-for="(block, index) in formData.content" :key="index" class="content-block-item">
              <div class="block-badge mb-3">{{ index + 1 }}. {{ block.type }} <span class="text-sm font-normal opacity-70 ml-2" v-if="block.label">- {{ block.label }}</span></div>

              <div v-if="block.type === 'full-width-image'" class="grid gap-3">
                <label>Image Source</label>
                <input v-model="block.src" type="text" placeholder="/images/..." />
              </div>

              <div v-else-if="block.type === 'text-block'" class="grid gap-3">
                <label>Heading</label>
                <input v-model="block.label" type="text" />
                <label>Paragraph Content</label>
                <textarea v-model="block.content" placeholder="Full text for this block"></textarea>
              </div>

              <div v-else-if="block.type === 'gallery-grid'" class="grid gap-3">
                <label>Gallery Images ({{ block.items.length }} slots)</label>
                <div v-for="(item, iIndex) in block.items" :key="iIndex" class="flex gap-2">
                  <div class="badge-span">{{ item.span.replace('col-span-', 'Span ') }}</div>
                  <input v-model="item.src" type="text" placeholder="/images/.../img.webp" />
                </div>
              </div>

            </div>
          </div>
        </div>

        <div style="height: 100px;"></div> <!-- Bottom padding -->
      </div>
      
      <div class="sidebar-footer">
        <button class="btn btn-secondary flex-1" @click="copyWorksEntry">Copy works.json Snippet</button>
        <button class="btn btn-primary flex-1" @click="copyDetailJson">Copy [id].json</button>
      </div>
    </aside>

    <!-- Visual Preview Section -->
    <main class="preview-area scrollable">
      <div class="preview-canvas">
        
        <div class="visual-site-container">
          <!-- Breadcrumb -->
          <div class="vp-breadcrumb">
            <span class="vp-gray">Work / </span>
            <span>{{ formData.title || 'Project Title' }}</span>
          </div>

          <!-- Title -->
          <h1 class="vp-title">{{ formData.subtitle || 'Enter an inspiring subtitle here...' }}</h1>

          <!-- Visit Site Button Mock -->
          <div v-if="formData.url" class="vp-btn-mock">
            Visit Site ↗
          </div>

          <!-- Metadata -->
          <div class="vp-metadata-grid">
            <div v-for="(meta, index) in formData.metadata" :key="index">
              <h3 class="vp-meta-label">{{ meta.label }}</h3>
              <p class="vp-meta-val">{{ meta.value || '-' }}</p>
            </div>
          </div>

          <!-- Main Description -->
          <div class="vp-desc">
            <p>{{ formData.description || 'Provide a compelling description of the project goals and impact.' }}</p>
          </div>

          <!-- Content Hierarchy -->
          <div class="vp-content-blocks">
            <template v-for="(section, index) in formData.content" :key="index">
              
              <div v-if="section.type === 'full-width-image'" class="vp-full-img">
                <img v-if="section.src" :src="section.src" />
                <div v-else class="vp-placeholder">Full Width Cover Image</div>
              </div>

              <div v-else-if="section.type === 'text-block'" class="vp-text-row" :class="section.align === 'right' ? 'vp-align-right' : ''">
                <div class="vp-text-content">
                  <h4 class="vp-text-label">{{ section.label }}</h4>
                  <p class="vp-text-body">{{ section.content || 'Content paragraph...' }}</p>
                </div>
              </div>

              <div v-else-if="section.type === 'gallery-grid'" class="vp-gallery-grid">
                <div v-for="(item, idx) in section.items" :key="idx" class="vp-gallery-item" :class="getGalleryItemClass(item.span)">
                  <img v-if="item.src" :src="item.src" />
                  <div v-else class="vp-placeholder">{{ item.span.replace('col-', '') }}</div>
                </div>
              </div>

            </template>
          </div>
          
        </div>

      </div>
    </main>
  </div>
</template>

<style scoped>
.layout-app {
  display: flex;
  height: 100vh;
  overflow: hidden;
  background-color: var(--bg-color);
}

.sidebar-builder {
  width: 480px;
  background-color: var(--surface-color);
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  z-index: 10;
}

.sidebar-header {
  padding: 1.5rem;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--surface-color);
}

.form-container {
  padding: 1.5rem;
  overflow-y: auto;
  flex: 1;
}

.sidebar-footer {
  padding: 1rem 1.5rem;
  background-color: var(--surface-hover);
  border-top: 1px solid var(--border-color);
  display: flex;
  gap: 1rem;
}

.content-block-item {
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  padding: 1rem;
  border-radius: var(--radius-sm);
  margin-bottom: 1rem;
}

.block-badge {
  display: inline-block;
  background: rgba(255,255,255,0.1);
  color: #fff;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.badge-span {
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  padding: 0.75rem 0.5rem;
  font-size: 0.75rem;
  min-width: 70px;
  text-align: center;
  border-radius: var(--radius-sm);
  font-weight: bold;
}

/* 
  Visual Preview Canvas 
  Simulating Tailwind UI of the Portfolio Site
*/
.preview-area {
  flex: 1;
  overflow-y: auto;
  background-color: #f7f7f7; /* Matching original site bg-white kinda */
}

.preview-canvas {
  width: 100%;
  min-height: 100%;
  padding: 3rem 1rem;
  display: flex;
  justify-content: center;
  background: #ffffff;
  color: #000000;
  font-family: var(--font-sans);
}

.visual-site-container {
  width: 100%;
  max-width: 1536px;
  padding: 0 5%;
}

.vp-breadcrumb {
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 500;
}
.vp-gray { color: #9ca3af; font-size: 0.875rem; }

.vp-title {
  font-size: 4.5rem;
  line-height: 1.2;
  font-weight: 300;
  max-width: 1200px;
  margin-bottom: 2rem;
  color: #111;
}

.vp-btn-mock {
  display: inline-flex;
  padding: 1rem 2rem;
  border-radius: 999px;
  background: #000;
  color: #fff;
  font-size: 1.125rem;
  margin-bottom: 4rem;
}

.vp-metadata-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  border-top: 1px solid #e5e7eb;
  padding-top: 2rem;
  margin-bottom: 4rem;
}
.vp-meta-label {
  color: #6b7280;
  font-weight: 300;
  margin-bottom: 0.25rem;
  font-size: 1.1rem;
}
.vp-meta-val {
  font-size: 1.25rem;
  font-weight: 300;
}

.vp-desc {
  max-width: 56rem;
  margin-bottom: 6rem;
}
.vp-desc p {
  font-size: 1.25rem;
  line-height: 2rem;
  font-weight: 300;
  color: #1f2937;
}

/* Blocks */
.vp-content-blocks {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin-bottom: 8rem;
}

.vp-full-img {
  width: 100%;
  height: 90vh;
  background: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.vp-full-img img { width: 100%; height: 100%; object-fit: cover; }

.vp-placeholder {
  color: #888;
  font-size: 1.5rem;
  font-weight: 300;
}

.vp-text-row {
  display: flex;
  width: 100%;
}
.vp-text-row.vp-align-right { justify-content: flex-end; }
.vp-text-content { width: 60%; }
.vp-text-label {
  color: #9ca3af;
  font-size: 1rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}
.vp-text-body {
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.7;
  color: #1f2937;
}

.vp-gallery-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.vp-gallery-item {
  height: 80vh;
  background: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vp-gallery-item img { width: 100%; height: 100%; object-fit: cover; }

.grid-span-4 { width: 100%; }
.grid-span-2 { width: calc(50% - 0.5rem); }
.grid-span-1 { width: calc(25% - 0.75rem); }
</style>
