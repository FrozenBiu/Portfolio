import { mySocials } from "../constants";

export default function Footer() {
  return (
    <section className="c-space flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400">
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full"></div>

      <div className="flex gap-2">
        <p>Term & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index}>
            <img src={social.icon} alt={social.name} className="size-8" />
          </a>
        ))}
      </div>

      <p>©2025 Khanh Tieu. All rights reserved.</p>
    </section>
  );
}
