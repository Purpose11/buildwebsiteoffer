const variants = {
  default:
    'mb-4 text-[16px] leading-[1.82] text-neutral-700 sm:text-[17px] md:text-[18px] md:leading-[1.85]',
  subhead:
    'mb-9 text-center text-base font-medium leading-relaxed tracking-[0.01em] text-neutral-600 sm:text-lg',
  salutation:
    'mb-5 mt-9 font-serif text-lg font-medium italic leading-relaxed text-neutral-800 sm:text-xl',
  quote:
    'mb-6 mt-4 border-l-2 border-neutral-300 py-1 pl-5 font-serif text-xl font-medium italic leading-snug text-neutral-900 sm:text-2xl',
  negative:
    'mb-4 text-[16px] font-semibold leading-[1.82] text-red-700 sm:text-[17px] md:text-[18px]',
  bullet:
    "relative mb-4 pl-5 leading-[1.82] before:absolute before:left-0 before:font-semibold before:text-neutral-400 before:content-['•']",
  indent:
    'mb-7 pl-4 text-[15px] leading-[1.82] text-neutral-600 sm:text-[16px] md:text-[17px]',
  spaced: 'mb-4 mt-8 font-semibold text-neutral-900',
  center: 'text-center',
  bold: 'font-semibold text-neutral-900',
  caps: 'mb-4 mt-9 text-center text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600',
  muted: 'mb-3 text-[15px] leading-relaxed text-neutral-500',
}

function Line({ children, variant = 'default', className = '' }) {
  const classes = [variants[variant] || variants.default, className]
    .filter(Boolean)
    .join(' ')

  return <p className={classes}>{children}</p>
}

export default Line
