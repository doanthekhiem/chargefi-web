export default function CTA() {
  return (
    <section className="">
      <div
        style={{
          backgroundImage: "url('/bgcta.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="container relative mx-auto py-16 px-4 sm:px-6 text-center"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-0"></div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight relative z-10">
          Start Charging. Start Earning.
        </h3>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 relative z-10">
          Join the ChargeFi revolution and earn from something you do every day.
          The future of energy rewards is here.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <button className="btn-primary-inline text-xs lg:text-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            Whitepaper
          </button>
          <button className="btn-primary text-sm sm:text-base">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M7 10L12 15L17 10"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path d="M12 15V3" stroke="currentColor" strokeWidth="2" />
            </svg>
            Download App
          </button>
        </div>
      </div>
    </section>
  );
}
