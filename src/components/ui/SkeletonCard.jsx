const SkeletonCard = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-teak/10 rounded-sm aspect-[3/4] mb-4" />
      <div className="h-5 bg-teak/10 rounded-sm w-3/4 mb-2" />
      <div className="h-4 bg-teak/10 rounded-sm w-1/2 mb-3" />
      <div className="h-3 bg-teak/10 rounded-sm w-full mb-1" />
      <div className="h-3 bg-teak/10 rounded-sm w-2/3" />
    </div>
  )
}

export default SkeletonCard