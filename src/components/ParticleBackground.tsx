const particles = Array.from({ length: 24 });

export default function ParticleBackground() {
  return (
    <div
      className="
        particles-background
        fixed
        inset-0
        overflow-hidden
        -z-10
        pointer-events-none
      "
      aria-hidden="true"
    >
      {particles.map((_, index) => (
        <span
          key={index}
          className="particle"
          style={{
            left: `${(index * 37) % 100}%`,
            top: `${(index * 61) % 100}%`,
            animationDelay: `${(index % 8) * 1.5}s`,
            animationDuration: `${16 + (index % 6) * 2}s`,
          }}
        />
      ))}
    </div>
  );
}