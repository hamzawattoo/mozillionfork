<template>
    <div class="">
        <Header />
        <Tabs />
        <Perks />
        <section>
            <div  class="bg-white !grid !grid-cols-8 space-x-8 rounded-2xl !my-6 !px-8 !py-8 container ">
                  <div class="w-full  h-auto col-span-2">
                        <img class="w-full h-full object-contain" src="https://res.cloudinary.com/mozillion/image/upload/f_auto,q_auto/v1662630258/rfge2gueoivcoreiti1p.png" alt="">
                    </div>
                <div class="col-span-6">
                    <div class="mb-10">
                                <h3 class="text-3xl text-gray-800">Protect your phone now and get the first <strong>2 Months' FREE</strong></h3>
                                <p class="text-xl text-gray-800 my-2">Piece of mind insurance from just <strong>35p</strong> a day</p>
                                <p class="text-base text-gray-500 ">By clicking 'Add to order' you confirm you have read the relevant Insurance Product Information Document and the policy is suitable for your needs</p>
                     </div>
                     <div class="border-2 border-black rounded-xl grid grid-cols-5 items-center justify-between px-6 py-3">
                                  <div class="col-span-4">
                                      <h4 class="text-2xl text-gray-800"><strong>2 Months' FREE</strong> | Cover against Theft, Damage, &amp; Breakdown</h4>
                                      <p class="text-lg text-gray-800 py-2.5 ">£10.99 per month thereafter, cancel at anytime</p>
                                      <p class="text-base text-gray-500">Please read the <a target="_blank" href="https://www.mozillion.com/WCS_theft_AD_scheme.pdf" class="text-blue-700">insurance product information document</a></p>
                                  </div>
                                  <div class="col-span-1 text-end">
                                     <button class="text-white text-xl font-extralight bg-blue-600 px-6 py-2 rounded-full">
                                        Add to order
                                     </button>
                                  </div>
                    </div>
                    <div class="why-choose-insurance">
                        		    <h3 class="py-5 text-3xl text-gray-800">Why choose our insurance?</h3>
                    </div>
                    <div class="">
                                <div class="grid grid-cols-4">
                                    <div class="flex items-center gap-2">
                                          <i class="">
                                            <img class="w-full h-full object-cover" src="https://res.cloudinary.com/mozillion/image/upload/q_100/v1669253561/piggy-bank_qlr99n.svg" alt="piggy bank icon">
                                          </i>
                                          <span class="block text-gray-800 text-lg font-semibold leading-6 mx-auto w-[60%]">A screen repair can cost up to £349 without insurance
                                          </span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                          <i><img src="https://res.cloudinary.com/mozillion/image/upload/q_100/v1669253561/globe_liinj1.svg" alt="globe icon"></i>
                                          <span class="block text-gray-800 text-lg font-semibold leading-6 mx-auto w-[60%]">Worldwide cover</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                    <i><img src="https://res.cloudinary.com/mozillion/image/upload/q_100/v1669253561/check-circle_afbzew.svg" alt="tick icon"></i>
                                    <span class="block text-gray-800 text-lg font-semibold leading-6 mx-auto w-[60%]">
                                    90% claim acceptance
                                    </span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <i><img src="https://res.cloudinary.com/mozillion/image/upload/q_100/v1669253561/phone-iphone_jjq11n.svg" alt="phone icon"></i>
                                        <span class="block text-gray-800 text-lg font-semibold leading-6 mx-auto w-[60%]">
                                        Fast phone replacement
                                        </span>
                                    </div>
                                </div>
                      </div>
                </div>
            </div>
            <div class="col-span-1 text-end container !px-0">
                        <button class="text-white text-xl font-extralight bg-blue-600 px-6 py-2 rounded-full">
                              Continue without adding cover
                         </button>
              </div>
          
        </section>
        <PopularHandset />
        <Footer />

    </div>
    </template>
    <script>
    import Header from "../components/Header.vue";
    import Tabs from "../components/Tabs.vue";
    import Perks from "../components/Perks.vue";
    import PopularHandset from "../components/PopularHandset.vue";
    import Footer from "../components/Footer.vue";
    
    export default {
      data() {
        return {
          open: false,
          phone: '', // Initialize phone with an appropriate value
        };
      },
      methods: {
        toggle() {
          this.open = !this.open;
        },
        
      },
      components: {
        Header,
        Tabs,
        Perks,
        PopularHandset,
        Footer
      },
    };
    </script>
    

    