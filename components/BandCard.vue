<template>
  <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img
      class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
      :src="imageName"
      alt=""
      width="384"
      height="512"
    >
    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p class="text-lg font-medium">
          “She's only happy when she's dancing”
        </p>
      </blockquote>
      <figcaption class="font-medium">
        <div class="text-sky-500 dark:text-sky-400">
          {{}}
        </div>
        <div class="text-slate-700 dark:text-slate-500">
          Gesang, Bongo und Tanzen
        </div>
      </figcaption>
    </div>
  </figure>
</template>

<script>
export default {
  name: 'BandCard',
  props: {
    imageName: {
      type: String,
      default: 'logo.svg'
    },
    musicianName: {
      type: String,
      default: 'Musiker'
    },
    instruments: {
      type: Array,
      default: () => ['Gitarre', 'Bass']
    }
  }
}
</script>
