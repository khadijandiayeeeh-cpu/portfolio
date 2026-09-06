export default function GlowBackground() {
  return (
    <div
      className="
        fixed
        inset-0
        -z-10
        overflow-hidden
        pointer-events-none
        bg-[#050816]
      "
      aria-hidden="true"
    >
      {/* Fond général */}
      <div className="absolute inset-0 bg-[#050816]" />

      {/* Lumière violette principale */}
      <div
        className="
          absolute
          -left-32
          top-10
          w-[380px]
          h-[380px]
          sm:w-[500px]
          sm:h-[500px]
          rounded-full
          bg-violet-600/20
          blur-[90px]
          sm:blur-[110px]
          animate-glow-purple
        "
      />

      {/* Lumière bleue */}
      <div
        className="
          absolute
          -right-24
          top-[20%]
          w-[350px]
          h-[350px]
          sm:w-[450px]
          sm:h-[450px]
          rounded-full
          bg-blue-600/15
          blur-[90px]
          sm:blur-[115px]
          animate-glow-blue
        "
      />

      {/* Lumière fuchsia basse */}
      <div
        className="
          absolute
          left-[25%]
          -bottom-40
          w-[400px]
          h-[400px]
          sm:w-[500px]
          sm:h-[500px]
          rounded-full
          bg-fuchsia-600/10
          blur-[100px]
          sm:blur-[125px]
          animate-glow-fuchsia
        "
      />

      {/* Petite lumière flottante */}
      <div
        className="
          absolute
          left-[45%]
          top-[35%]
          w-[140px]
          h-[140px]
          sm:w-[180px]
          sm:h-[180px]
          rounded-full
          bg-violet-400/10
          blur-[60px]
          sm:blur-[75px]
          animate-glow-small
        "
      />

      {/* Vignette */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,8,22,0.35)_100%)]
        "
      />
    </div>
  );
}