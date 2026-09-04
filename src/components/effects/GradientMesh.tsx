export default function GradientMesh() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-iris/25 blur-[120px] animate-float-slow" />
      <div className="absolute right-[-10%] top-[20%] h-[26rem] w-[26rem] rounded-full bg-aqua/20 blur-[110px] animate-float" />
      <div className="absolute left-[-8%] bottom-[-10%] h-[22rem] w-[22rem] rounded-full bg-iris-soft/10 blur-[100px] animate-float-slow" />
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 30%, black, transparent)",
        }}
      />
    </div>
  );
}
