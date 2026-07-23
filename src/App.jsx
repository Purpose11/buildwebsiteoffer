import {
  PRICE,
  ORIGINAL_PRICE,
  FOUNDER_NAME,
  WHATSAPP_LINK,
  CTAS,
  benefits,
  bonuses,
} from './data/content'
import Line from './components/Line'
import TestimonialsSection from './components/TestimonialsSection'

const headingClass =
  'text-balance mb-6 mt-12 font-serif text-[1.45rem] font-semibold leading-[1.28] tracking-[-0.01em] text-neutral-900 sm:text-[1.75rem] md:text-[1.95rem]'
const subheadingClass =
  'text-balance mb-6 mt-10 font-serif text-[1.2rem] font-semibold leading-[1.32] tracking-[-0.01em] text-neutral-900 sm:text-[1.4rem]'

function CtaButton({ children }) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full max-w-md rounded-md bg-red-800 px-8 py-4 text-center font-sans text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-red-900 sm:text-sm"
    >
      {children}
    </a>
  )
}

function CtaBlock({ children }) {
  return (
    <div className="my-12 flex justify-center">
      <CtaButton>{children}</CtaButton>
    </div>
  )
}

function GuaranteeCard({ number, title, children }) {
  return (
    <article className="rounded-2xl border border-red-200/70 bg-gradient-to-br from-white to-red-50/40 p-6 shadow-sm sm:p-7">
      <div className="mb-5 flex items-start gap-4 border-b border-red-100 pb-5">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-800 font-sans text-lg font-bold text-white shadow-md"
          aria-hidden="true"
        >
          {number}
        </div>
        <div className="min-w-0">
          <p className="mb-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-red-800">
            Guarantee {number}
          </p>
          <h3 className="m-0 font-serif text-[1.15rem] font-bold leading-snug text-neutral-900 sm:text-xl">
            {title}
          </h3>
        </div>
      </div>
      <div className="space-y-0">{children}</div>
    </article>
  )
}

function GuaranteeBullet({ children }) {
  return (
    <div className="mb-3 flex gap-3">
      <span
        className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-800"
        aria-hidden="true"
      >
        ✓
      </span>
      <p className="m-0 flex-1 text-[16px] leading-[1.82] text-neutral-700 sm:text-[17px]">
        {children}
      </p>
    </div>
  )
}

function App() {
  return (
    <div className="overflow-x-hidden bg-white">
      <main className="mx-auto w-full max-w-[680px] px-5 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12 md:px-8">
        <header className="relative -mx-5 mb-10 border-b border-neutral-200/70 bg-gradient-to-b from-neutral-50 via-white to-white px-5 pb-10 pt-6 sm:-mx-6 sm:mb-12 sm:px-6 sm:pb-12 sm:pt-8 md:-mx-8 md:px-8">
          <div className="mx-auto max-w-[620px] text-center">
            <p className="mb-5 mt-2 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-red-800/90 sm:mb-6 sm:text-xs">
              Stop Losing Customers!
            </p>

            <h1 className="text-balance mb-2 font-serif text-[2.125rem] font-bold leading-[1.12] tracking-[-0.025em] text-neutral-900 sm:mb-3 sm:text-[2.75rem] md:text-[3.25rem] md:leading-[1.08] lg:text-[3.5rem]">
              Get A Credible Business Website in{' '}
              <span className="font-bold italic text-red-900/90">Less Than 24 Hours</span>
            </h1>

            <p className="mx-auto mb-6 max-w-lg font-sans text-[17px] font-medium leading-snug tracking-[0.01em] text-neutral-500 sm:mb-7 sm:text-lg md:text-xl">
              Free domain, Free hosting and One Year of Free Basic Maintenance.
            </p>

            <div
              className="mx-auto h-px w-20 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"
              aria-hidden="true"
            />
          </div>
        </header>

        <Line variant="salutation">
          <strong>Dear Business owner,</strong>
        </Line>
        <Line>
          <strong>Imagine this;</strong>
        </Line>

        <Line>
          A potential customer discovers your business on Facebook or Instagram.
        </Line>
        <Line>They like what they see.</Line>
        <Line>They are interested in your product or service.</Line>
        <Line>They are almost ready to contact you or even make payment.</Line>
        <Line>
          But before sending their money, they decide to check whether your
          business is genuine.
        </Line>
        <Line>So, they search for your company online.</Line>
        <Line variant="negative">They find no official website.</Line>
        <Line variant="negative">No clear page explaining your services.</Line>
        <Line variant="negative">No organised information about your business.</Line>
        <Line>
          <strong>Suddenly, doubt enters their mind.</strong>
        </Line>
        <Line>They begin to wonder:</Line>
        <Line variant="quote">
          &ldquo;Can I really trust this business?&rdquo;
        </Line>
        <Line>They postpone the purchase.</Line>
        <Line>They leave your page without sending a message.</Line>
        <Line>
          Or worse, they find another business that looks more established,
          organised and trustworthy online.
        </Line>
        <Line>That other business may not be better than yours.</Line>
        <Line>It may not offer a better product.</Line>
        <Line>It may not provide a better service.</Line>
        <Line>It may not even have more experience.</Line>
        <Line>It may simply look more credible online.</Line>
        <Line>
          And the painful part is that the customer will probably never tell you
          why they changed their mind.
        </Line>
        <Line>They will simply leave and spend their money somewhere else.</Line>

        <Line>Let me tell you,</Line>

        <h2 className="mb-6 mt-12 text-center font-serif text-[1.25rem] font-extrabold leading-[1.22] tracking-[-0.01em] text-neutral-900 sm:text-[1.4rem] md:text-[1.55rem]">
          <span className="block">
            Your Business Should Not Keep Losing Serious&nbsp;Customers
          </span>
          <span className="block">
            Simply Because It Does Not Look Credible Online!
          </span>
        </h2>

        <CtaBlock>{CTAS.hero}</CtaBlock>

        <Line>
          My name is <strong>{FOUNDER_NAME}</strong>.
        </Line>
        <Line>
          I am a software engineer with over five years of practical experience.
        </Line>
        <Line>
          I have helped businesses build a stronger and more credible presence online.
        </Line>
        <Line>
          So far, I have worked with more than <strong>20 businesses, </strong> 
          created modern websites that helped them showcase their services clearly, look more
          professional and made it easier for potential customers to contact them.
        </Line>
        <Line>But anyone can make impressive claims online, lol.</Line>
        <Line>
          That is why I would rather let the people I have worked with speak for
          me.
        </Line>

        <TestimonialsSection />

        <h2 className={headingClass}>I Have an Irresistible Offer for You</h2>

        <Line>
          In less than 24 hours, I can help your business build a stronger and
          more credible online presence by creating a modern, mobile-friendly
          website designed to help more potential customers find, understand and
          contact you.
        </Line>

        <h3 className={`${subheadingClass} text-center !font-bold !text-wrap whitespace-nowrap text-[1.05rem] min-[420px]:text-[1.15rem] sm:text-[1.35rem] md:text-[1.5rem]`}>
          And here's what this website can do for your business;
        </h3>

        <ol className="relative m-0 list-none space-y-0 p-0">
          {benefits.map((benefit, index) => (
            <li
              key={index}
              className={`relative pb-7 pl-14 sm:pl-16 ${
                index < benefits.length - 1
                  ? 'before:absolute before:left-[1.35rem] before:top-11 before:h-[calc(100%-2.75rem)] before:w-px before:bg-gradient-to-b before:from-red-300 before:to-red-100 sm:before:left-[1.6rem]'
                  : ''
              }`}
            >
              <span
                className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 via-red-700 to-red-900 font-serif text-lg font-bold text-white shadow-[0_4px_14px_rgba(185,28,28,0.35)] ring-4 ring-red-100 sm:h-12 sm:w-12 sm:text-xl"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <div className="rounded-xl border border-neutral-200/70 bg-gradient-to-br from-white to-red-50/20 px-4 py-4 shadow-sm sm:px-5 sm:py-5">
                <Line className="mb-2 font-serif text-[1.125rem] font-bold leading-snug text-neutral-950 sm:text-xl">
                  {benefit.title}
                </Line>
                <Line variant="indent" className="mb-0 pl-0">
                  {benefit.description}
                </Line>
              </div>
            </li>
          ))}
        </ol>

        <Line variant="spaced">
          <strong>and lots more.</strong>
        </Line>

        <h2 className={headingClass}>
          And You Will Also Receive These Valuable Bonuses Completely Free
        </h2>

        <ul className="m-0 list-none space-y-3 rounded-xl border border-neutral-200/70 bg-gradient-to-br from-white to-amber-50/40 p-5 shadow-sm sm:space-y-3.5 sm:p-6">
          {bonuses.map((bonus, index) => (
            <li key={index} className="flex gap-3.5 sm:gap-4">
              <span
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 via-red-600 to-red-800 text-sm font-bold text-white shadow-[0_2px_8px_rgba(185,28,28,0.3)] ring-2 ring-red-100"
                aria-hidden="true"
              >
                ✓
              </span>
              <p className="m-0 flex-1 text-[16px] leading-[1.75] text-neutral-700 sm:text-[17px]">
                {bonus}
              </p>
            </li>
          ))}
        </ul>

        <Line className="mt-10 sm:mt-12">Well, You May Be Wondering,</Line>

        <h2 className={headingClass}>
        &ldquo;How Much Will All of This Cost
          Me?&rdquo;
        </h2>

        <Line>Think about everything included in this package.</Line>
        <Line>
          You are not merely receiving a few pages placed on the internet.
        </Line>
        <Line>
          You are getting a complete <strong>online-presence </strong> package designed to help
          your business look <strong>credible, build trust</strong> and make it easier for
          potential customers to contact you.
        </Line>

        <div className="my-10 overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-b from-neutral-50 to-white px-6 py-9 text-center shadow-sm sm:px-8 sm:py-10">
          <span className="mb-5 inline-block rounded-full border border-red-200 bg-red-50 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-red-800">
            Special Offer
          </span>

          <p className="mb-2 font-sans text-sm font-medium uppercase tracking-[0.12em] text-neutral-500 sm:text-base">
            Regular Price
          </p>
          <p className="mb-5 font-sans text-3xl font-semibold text-neutral-600 line-through decoration-neutral-600 decoration-[3px] sm:text-4xl">
            {ORIGINAL_PRICE}
          </p>

          <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-neutral-600 sm:text-base">
            Your Price Today
          </p>
          <p className="mb-4 font-sans text-[2.75rem] font-bold leading-none tracking-[-0.02em] text-red-800 sm:text-5xl md:text-[3.25rem]">
            {PRICE}
          </p>
        </div>

        <CtaBlock>{CTAS.afterPrice}</CtaBlock>

        <Line>
          Yeah, i understand that paying someone you discovered online to build your
          business website may feel <strong>risky.</strong>
        </Line>
        <Line>That is why I am taking the risk away from you.</Line>

        <section className="my-10 rounded-2xl border border-red-200/50 bg-gradient-to-b from-red-50/30 to-white p-5 sm:my-12 sm:p-7">
          <div className="mb-8 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-red-800">
              <span aria-hidden="true">🛡</span>
              100% Risk-Free Promise
            </span>
            <h2 className="m-0 font-serif text-[1.35rem] font-bold leading-snug text-neutral-900 sm:text-[1.65rem]">
              You Are Protected From Beginning to End
            </h2>
          </div>

          <div className="space-y-5">
            <GuaranteeCard
              number={1}
              title="Delivered in Less Than 24 Hours or I Pay You ₦10,000"
            >
              <Line className="mb-4">
                Once I receive your confirmed payment and all the information needed
                to build your website, I will deliver the first working version in
                less than 24 hours.
              </Line>
              <Line className="mb-4 font-semibold text-neutral-900">
                If I fail to deliver within that period:
              </Line>
              <GuaranteeBullet>
                You will receive a full refund of your {PRICE}
              </GuaranteeBullet>
              <GuaranteeBullet>
                I will also pay you an additional ₦10,000 for wasting your time
              </GuaranteeBullet>
              <div className="mt-5 rounded-xl border border-red-200/80 bg-red-50/80 px-4 py-3.5 text-center">
                <p className="m-0 font-sans text-sm font-medium text-red-900 sm:text-base">
                  That means you receive{' '}
                  <strong className="font-bold">₦60,000 in total</strong> if I fail
                  to fulfil the 24-hour delivery promise.
                </p>
              </div>
              <Line className="mb-0 mt-4 font-semibold text-neutral-800">
                No excuses. No unnecessary arguments.
              </Line>
            </GuaranteeCard>

            <GuaranteeCard
              number={2}
              title="Love the First Version or Get a Full Refund"
            >
              <Line className="mb-4">
                Even after I deliver the first working version, you are still
                protected.
              </Line>
              <Line className="mb-4">
                You will be given an opportunity to review the website.
              </Line>
              <Line className="mb-4">
                If you genuinely do not like the website, simply inform me within 24
                hours of receiving it, and I will refund your full {PRICE}.
              </Line>
              <Line className="mb-0 font-semibold text-neutral-800">
                No lengthy arguments. No pressure to accept something you do not want.
              </Line>
            </GuaranteeCard>
          </div>
        </section>

        <CtaBlock>{CTAS.afterGuarantee}</CtaBlock>

        <Line variant="caps">
          <strong>this offer is limited</strong>
        </Line>

        <h2 className={headingClass}>
          I Am Accepting Only 5 Business Website Projects because
        </h2>

        <Line>Building a credible website requires proper attention.</Line>
        <Line>
          I need to understand each business, organise its information, design
          its pages, connect the necessary features, test the website and
          prepare it for launch.
        </Line>
        <Line>
          I cannot deliver that level of attention to an unlimited number of
          businesses at the same time.
        </Line>
        <Line>That is why this offer is limited to only 5 businesses!!</Line>
        <Line>
          Once all five spaces have been taken, I will temporarily close the
          offer
        </Line>

        <CtaBlock>{CTAS.scarcity}</CtaBlock>

        <Line>
          See, your business may already provide an excellent product or service.
        </Line>
        <Line>You may already work hard to satisfy your customers.</Line>
        <Line>
          But potential customers cannot appreciate the quality of your business
          if your online presence makes them doubtful, confused or unable to
          find the information they need.
        </Line>
        <Line>
          You should not continue losing serious customers to competitors simply
          because their businesses look more established online.
        </Line>
        <Line>
          As a matter of fact, your next serious customer may already be
          searching for a business like yours.
        </Line>
        <Line>
          <strong>Give that person something credible to find!</strong>
        </Line>

        <CtaBlock>{CTAS.final}</CtaBlock>

        <div className="mt-12 border-t border-neutral-200 pt-7">
          <Line variant="muted">Cheers,</Line>
          <p className="mb-3 font-serif text-2xl font-semibold tracking-tight text-neutral-900">
            {FOUNDER_NAME}
          </p>
          <Line variant="muted">Software Engineer & Website Developer</Line>
        </div>

        <div className="mb-16 mt-9 rounded border border-neutral-200 bg-neutral-50 p-6 sm:p-7">
          <Line variant="muted" className="mb-5 leading-relaxed">
            <strong>P.S.</strong> The 24-hour period begins after your payment
            and complete website content have been received.
          </Line>
          <Line variant="muted" className="mb-5 leading-relaxed">
            <strong>P.P.S.</strong> The guarantee does not apply when a delay is
            caused by missing information or late responses from you.
          </Line>
          <Line variant="muted" className="mb-0 leading-relaxed">
            <strong>P.P.P.S.</strong> I am accepting only 5 businesses under
            this offer. Once those slots are filled, the offer
            will be closed.
          </Line>
        </div>
      </main>

      <footer className="border-t border-neutral-200 py-6 text-center font-sans text-[13px] tracking-wide text-neutral-500">
        <p className="m-0">
          &copy; {new Date().getFullYear()} {FOUNDER_NAME}. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
