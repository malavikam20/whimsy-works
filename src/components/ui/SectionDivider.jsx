const SectionDivider = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center py-8 ${className}`}>
      <div className="h-px w-24 bg-brass/30" />
      <svg
        className="mx-4 text-brass/60"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1" />
        <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="1" />
        <circle cx="16" cy="16" r="3" fill="currentColor" />
      </svg>
      <div className="h-px w-24 bg-brass/30" />
    </div>
  )
}

export default SectionDivider