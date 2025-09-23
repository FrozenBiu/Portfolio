export default function DefaultLayout({ children }) {
  return (
    <div className="w-full  h-[1000px] flex justify-center ">
      <div className="w-[1224px] min-w-[343px]  mx-[108px] h-100 text-white">
        {children}
      </div>
    </div>
  );
}
