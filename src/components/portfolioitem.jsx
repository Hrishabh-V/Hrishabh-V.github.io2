import React from "react";

function PortfolioItem({ title, imgUrl, stack, link, liveLink }) {
    return (
        <div className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
            <img
                src={imgUrl}
                alt={title}
                className="w-full h-36 md:h-48 object-cover cursor-pointer"
            />
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">
                    {title}
                </h3>
                <p className="flex flex-wrap gap-2 items-center justify-start text-xs md:text-sm dark:text-white">
                    {stack.map((item, index) => (
                        <span key={index} className="px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                            {item}
                        </span>
                    ))}
                </p>
                <div className="flex justify-between mt-4">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-500 hover:underline"
                    >
                        View GitHub
                    </a>
                    {liveLink && (
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-blue-500 text-white text-center px-4 py-2 rounded-md hover:bg-blue-600"
                        >
                            View Live Project
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PortfolioItem;
