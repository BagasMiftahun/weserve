<template>
  <div id="showcase">
    <section class="showcase max-w-6xl mx-auto py-12">
      <div class="flex flex-col gap-y-8">
        <div class="flex flex-col gap-y-2 text-center">
          <h3
            class="font-clash_display font-semibold text-5xl text-indigo-950"
          >
            Our Showcase
          </h3>
          <p class="text-base text-gray-500 leading-loose">
            They built amazing website to help more people around the world
            <br />
            by using our recommendation services and products
          </p>
        </div>
        <div class="flex flex-wrap gap-x-10 gap-y-10 justify-center">
          <div class="group relative">
            <div
              class="opacity-0 absolute w-full bottom-8 flex justify-center group-hover:opacity-100 transition-all ease-in-out duration-280"
            >
              <a
                href="#"
                class="bg-violet-700 rounded-full px-7 py-3 text-white shadow-violet-700 font-semibold hover:bg-indigo-950"
                >View Detail</a
              >
            </div>
            <img
              src="../assets/showcase_1.png"
              class="w-[320px] h-[220px] ease-in-out duration-280 rounded-2xl group-hover:border-4 border-violet-700"
              alt=""
            />
          </div>
          <div class="group relative">
            <div
              class="opacity-0 absolute w-full bottom-8 flex justify-center group-hover:opacity-100 transition-all ease-in-out duration-280"
            >
              <a
                href="#"
                class="bg-violet-700 rounded-full px-7 py-3 text-white shadow-violet-700 font-semibold hover:bg-indigo-950"
                >View Detail</a
              >
            </div>
            <img
              src="../assets/showcase_2.png"
              class="w-[320px] h-[220px] ease-in-out duration-280 rounded-2xl group-hover:border-4 border-violet-700"
              alt=""
            />
          </div>
          <div class="group relative">
            <div
              class="opacity-0 absolute w-full bottom-8 flex justify-center group-hover:opacity-100 transition-all ease-in-out duration-280"
            >
              <a
                href="#"
                class="bg-violet-700 rounded-full px-7 py-3 text-white shadow-violet-700 font-semibold hover:bg-indigo-950"
                >View Detail</a
              >
            </div>
            <img
              src="../assets/showcase_3.png"
              class="w-[320px] h-[220px] ease-in-out duration-280 rounded-2xl group-hover:border-4 border-violet-700"
              alt=""
            />
          </div>
          <div class="group relative">
            <div
              class="opacity-0 absolute w-full bottom-8 flex justify-center group-hover:opacity-100 transition-all ease-in-out duration-280"
            >
              <a
                href="#"
                class="bg-violet-700 rounded-full px-7 py-3 text-white shadow-violet-700 font-semibold hover:bg-indigo-950"
                >View Detail</a
              >
            </div>
            <img
              src="../assets/showcase_4.png"
              class="w-[320px] h-[220px] ease-in-out duration-280 rounded-2xl group-hover:border-4 border-violet-700"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ShowcaseSection",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
