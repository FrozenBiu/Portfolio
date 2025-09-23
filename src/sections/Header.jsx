export default function Header() {
  return (
    <div className="flex justify-between items-center mx-[70px] h-[96px] text-[#c7c7c7f5] font-medium">
      {/* Left */}
      <div>
        <h3 className=" font-semibold text-2xl">Khanh Tieu</h3>
      </div>
      {/* Right */}
      <div className="text-md flex gap-2">
        <a className="px-4 py-2" href="#">
          Home
        </a>
        <a className="px-4 py-2" href="#">
          About
        </a>
        <a className="px-4 py-2" href="#">
          Contact
        </a>
      </div>
    </div>
  );
}
