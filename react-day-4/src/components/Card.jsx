import React from "react";

const Card = ({data}) => {
 console.log(data);
  return (
    <div>
     
        <div className="m-auto max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden font-sans">
          {/* Cover Image */}
          <div className="h-48 w-full bg-gray-200 -mb-12">
            <img
              src={data.coverImg}
              alt="cover"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              className="h-24 w-24 rounded-full border-4 border-white object-cover"
              src={data.userImg}
              alt="profile"
            />
          </div>

          {/* Content */}
          <div className="p-5 space-y-3 text-center">
            {/* Name */}
            <h2 className="text-xl font-semibold text-gray-900 tracking-wide">
              {data.name}
            </h2>

            {/* Username */}
            <h3 className="text-sm font-medium text-gray-500">
              {data.username}
            </h3>

            {/* Bio */}
            <p className="text-sm text-gray-600 leading-relaxed px-2">
              {data.desc}
            </p>

            {/* Role */}
            <div>
              <span className="inline-block mt-2 text-xs font-medium px-4 py-1 rounded-full bg-gray-100 text-gray-700">
                {data.role}
              </span>
            </div>

            {/* Stats */}
            <div className="flex justify-between items-center pt-4 border-t text-center">
              <div className="flex-1">
                <p className="text-base font-semibold text-gray-900"> {data.media}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  Media
                </p>
              </div>
              <div className="flex-1">
                <p className="text-base font-semibold text-gray-900"> {data.followers}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  Followers
                </p>
              </div>
              <div className="flex-1">
                <p className="text-base font-semibold text-gray-900"> {data.likes}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  Like
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  );
};

export default Card;
