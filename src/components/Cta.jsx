import React from "react";

function Cta({ ctaText }) {
  return (
    <section class="w-full bg-[#FDF8F1] py-20" id="cta">
      <div class=" ">
        <div class="w-2/3 mx-auto flex justify-center items-center gap-20">
          {ctaText ? (
            <p class="font-semibold text-xs text-center lg:text-lg xl:text-3xl tracking-5">
              {ctaText}
            </p>
          ) : (
            <a
              href="https://wa.me/8146586857?text=I'd like to place an order?"
              target="_blank"
              class="w-[400px] mx-auto cursor-pointer duration-200 hover:-translate-y-2"
            >
              <img class="w-full" src="/whatsappBtn.svg" alt="" />
            </a>
          )}
          {/*          
            {#if ctaText}
            <p class="font-semibold text-xs text-center lg:text-lg xl:text-3xl tracking-5">{ctaText}</p>
            {:else}
             <div class="w-[400px] mx-auto cursor-pointer">
                <img class="w-full" src="/whatsappBtn.svg" alt="">
            </div>{/if} */}
        </div>
      </div>
    </section>
  );
}

export default Cta;
