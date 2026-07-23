export default function TestimonialsSection() {
  return (
    <>
      <h2 className="text-balance mb-6 mt-12 font-serif text-[1.45rem] font-semibold leading-[1.28] tracking-[-0.01em] text-neutral-900 sm:text-[1.75rem] md:text-[1.95rem]">
        Here Is What Some of My Clients Have to Say
      </h2>
      <figure className="my-9 m-0">
        <img
          src="/testimonials/testimonials-collage.png"
          alt="WhatsApp messages from clients praising Fatai for professional website work, easy customer experience, new bookings, and more enquiries"
          className="mx-auto block h-auto w-full max-w-[620px] rounded-2xl shadow-[0_8px_28px_rgba(0,0,0,0.12)] ring-1 ring-black/5"
          loading="lazy"
        />
      </figure>
    </>
  )
}
