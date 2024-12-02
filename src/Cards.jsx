import React from "react";

const Cards = ({ val }) => {
  return (
    <div className="p-4 w-[250px] h-[260px] bg-siteYellow  text-center border flex flex-col rounded-lg shadow-lg m-2 justify-center items-center">
      <h1 className="text-lg font-semibold text-darkBlue hover:underline p-4">
        <a href={val.url} target="_blank" rel="noopener noreferrer">
          {val.name}
        </a>
      </h1>
      <p className="text-sm text-darkBlue mt-3">
        Languages: {val.language.join(", ")}
      </p>
      <h2 className="text-md font-medium m-3 text-darkBlue">
        {val.technology}
      </h2>
      {/* <ul className="pl-0 flex flex-wrap gap-2">
        <div className="flex flex-wrap gap-1 p-4 max-w-[100%]">
          {val.tags.length > 4 ? (
            <>
              <li className="text-sm flex-grow">Tags:</li>
              {val.tags.slice(0, 4).map((tag, tagIdx) => (
                <li
                  key={tagIdx}
                  className="text-xs flex items-center justify-center bg-gray-100 rounded-full px-2 py-1"
                >
                  {tag}
                </li>
              ))}
              <li className="text-xs flex items-center justify-center bg-gray-200 rounded-full px-2 py-1">
                +{val.tags.length - 4} more
              </li>
            </>
          ) : (
            val.tags.map((tag, tagIdx) => (
              <li
                key={tagIdx}
                className="text-xs flex items-center justify-center bg-gray-100 rounded-full px-2 py-1"
              >
                {tag}
              </li>
            ))
          )}
        </div>
      </ul> */}
    </div>
  );
};

export default Cards;
