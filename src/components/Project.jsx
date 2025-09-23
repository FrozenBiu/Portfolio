import { useState } from "react";
import arrowRight from "../assets/arrow-right.svg";
import ProjectDetails from "./ProjectDetails";

export default function Project({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsShow(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <img src={arrowRight} className="w-5" alt="arrowRight" />
        </button>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full"></div>

      {isShow && (
        <ProjectDetails
          closeModal={() => setIsShow(false)}
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          href={href}
          tags={tags}
        />
      )}
    </>
  );
}
