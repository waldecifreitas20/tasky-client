export function Divider(props: { margins: string }) {
  return (
    <>
      <div className={`flex ${props.margins ?? "my-10"} w-full`}>
        <span className="block h-[1px] bg-white opacity-70 w-full min-w-[100px]"></span>
        <span className="relative -top-2 mx-2 text-xs">ou</span>
        <span className="block h-[1px] bg-white opacity-70 w-full min-w-[100px]"></span>
      </div>
    </>
  );
}