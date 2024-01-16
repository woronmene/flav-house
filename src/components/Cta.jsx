import React from "react";

function Cta({ ctaText }) {
  return (
    <section className="w-full bg-[#FDF8F1] py-20" id="cta">
      <div className=" ">
        <div className="w-2/3 mx-auto flex justify-center items-center gap-20">
          {ctaText ? (
            <p className="font-semibold text-xs text-center lg:text-lg xl:text-3xl tracking-5">
              {ctaText}
            </p>
          ) : (
            <a
              href="https://wa.me/8146586857?text=I'd like to place an order?"
              target="_blank"
              className="w-[400px] mx-auto cursor-pointer duration-200 hover:-translate-y-2"
            >
              <img className="w-full" src="/whatsappBtn.svg" alt="" />
            </a>
          )}
          {/*          
            {#if ctaText}
            <p className="font-semibold text-xs text-center lg:text-lg xl:text-3xl tracking-5">{ctaText}</p>
            {:else}
             <div className="w-[400px] mx-auto cursor-pointer">
                <img className="w-full" src="/whatsappBtn.svg" alt="">
            </div>{/if} */}
        </div>
      </div>
    </section>
  );
}

export default Cta;
