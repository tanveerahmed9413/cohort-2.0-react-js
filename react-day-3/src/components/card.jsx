import React from 'react'



    const Card = () => {
  return (
    <div className="h-screen bg-slate-100 px-5 gap-2.5 grid grid-cols-3 items-center justify-items-center">
      
      <div className="bg-white w-[320px]  rounded-2xl shadow-md p-4 space-y-4">

        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              className="h-12 w-12 rounded-full object-cover border"
              src="data:image/jpeg;base64,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"
              alt="company"
            />
            <div>
              <h4 className="font-semibold text-sm">Google</h4>
              <p className="text-xs text-gray-400">5 days ago</p>
            </div>
          </div>

          <button className="text-sm px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200">
            Save
          </button>
        </div>

        {/* Role */}
        <div>
          <h2 className="text-xl font-bold">Web Developer</h2>
          <p className="text-sm text-gray-500">Frontend / React</p>
        </div>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          <span className="px-3 py-1 text-xs bg-gray-100 rounded-full">
            Part Time
          </span>
          <span className="px-3 py-1 text-xs bg-gray-100 rounded-full">
            Senior Level
          </span>
        </div>

        <hr />

        {/* Footer */}
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">$120k / hr</p>
            <p className="text-xs text-gray-500">Mumbai, India</p>
          </div>

          <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800">
            Apply
          </button>
        </div>

     </div>
      <div className="bg-white w-[320px] gap-5    rounded-2xl shadow-md p-4 space-y-4">

        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              className="h-12 w-12 rounded-full object-cover border"
              src="data:image/png;base64,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"
              alt="company"
            />
            <div>
              <h4 className="font-semibold text-sm">Amazon </h4>
              <p className="text-xs text-gray-400">30 days ago</p>
            </div>
          </div>

          <button className="text-sm px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200">
            Save
          </button>
        </div>

        {/* Role */}
        <div>
          <h2 className="text-xl font-bold">Senior UI/UX Designer </h2>
          <p className="text-sm text-gray-500">Frontend / Next js</p>
        </div>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          <span className="px-3 py-1 text-xs bg-gray-100 rounded-full">
            Part Time
          </span>
          <span className="px-3 py-1 text-xs bg-gray-100 rounded-full">
             Flexible
          </span>
        </div>

        <hr />

        {/* Footer */}
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">$120k / hr</p>
            <p className="text-xs text-gray-500">Kochi, India</p>
          </div>

          <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800">
            Apply
          </button>
        </div>

      </div>
      <div className="bg-white w-[320px] gap-5  rounded-2xl shadow-md p-4 space-y-4">

        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              className="h-12 w-12 rounded-full object-cover border"
              src="data:image/png;base64,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"
              alt="company"
            />
            <div>
              <h4 className="font-semibold text-sm">Dribble</h4>
              <p className="text-xs text-gray-400">15 days ago</p>
            </div>
          </div>

          <button className="text-sm px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200">
            Save
          </button>
        </div>

        {/* Role */}
        <div>
          <h2 className="text-xl font-bold">Senior Motion Designer</h2>
          <p className="text-sm text-gray-500"> React</p>
        </div>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          <span className="px-3 py-1 text-xs bg-gray-100 rounded-full">
            Contract 
          </span>
          <span className="px-3 py-1 text-xs bg-gray-100 rounded-full">
            Remote
          </span>
        </div>

        <hr />

        {/* Footer */}
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">$150k / hr</p>
            <p className="text-xs text-gray-500">Chennai, India</p>
          </div>

          <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800">
            Apply
          </button>
        </div>

       </div>
      <div className="bg-white w-[320px] gap-5  rounded-2xl shadow-md p-4 space-y-4">

        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              className="h-12 w-12 rounded-full object-cover border"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS8AAACmCAMAAAC8yPlOAAABIFBMVEX/////Nzf/cjeHT/8ky3EAtv/w8PDp6en/WDf/dDeBRP//LS3/bS3Jtf8MyWr/NiWKSP//ior/p4q6Rr8ez2qq5sAAsv9blr3/aiUAs///zr8Auf//FRV/P/8AyGX/JCT/6OH/uLj/YxT/qqr/4eH/2trL7P/2/P97N/+m3v/W8P/Uuv9/0f9XiP/l2//A7dGG3qnS8t6f47n/z8//lJT/mYr/r5X/wa3/2s//YGD/US3/i2D/QUH/eUP/r6//np7/eXn/m3n/kmv/UVD/glDSmd7EZcnelL//07/Xvb+yrb+bor+Knr+4yd3Yyv+mgf9cy//y7f+UZP+edf+KnP+8o/+1l/9Lw//R7v/d0f+hwtV0psVZ1Izu+vNl1pTK8NjTOOSXAAAEdElEQVR4nO3aaVvaTBQGYBtJF6W8doESIxGjQhWLW2tr97f76taFLir//180SKVAZuYkl1xz0p7n/uAnP5x5rjMnkyFj5yGNMQAAAAAAAAAAAAAAAAAAAAAA+JdtPr59JebO1Zitu/e4S+U3tz0zOzsZdz8fVy6HD6a5C2Y1Pzk7eU7p4iVHJcrsLnfRbBYezqrD0ucVKT+qchfOY25Gm5YpL8cJRW7KeVNcxrycUOCeNHYXkZfADlswx0Xk5YRV7gVY9tAcF5WX84h7AXbN65+MyfISdqzQnLqS5+WUuZdg0xzVXgnykjTyt8/eX/kH3IuwiHg4JsnLCbkXYc8muR0T5FWWc1vxeCR5yXlC3ibHV4K88lvcy7Dmykjyusq9DGuQVzpPsB9ToY+rSea9nAPr4kjyqnIvw56R5MW9CIuejuB96H/uRVhEH/Dp9205x/sx+rqQzkvWheEm9cZN5RWKai/6RofIK/+MewG2nTEv7vKtI34gIn5Pq3KXb9/iGX6vrXIXz2HhnGFPGvLKO1Xu0pk8ndEmps0rH0o6qA5Z3NYlpvueKXxW5S6a1cKT5zP/KdwvK4QvtqrcBfNrvnx1Leb1m+meN9Nv373/8OH9x2XuUvnt7FYqU+MxE5f//Ettz3Vd3/ddt+Tt1fhKzYDGuCqsgbyWopTcHq/ky01s/6CiDKsvr7pfcoeUWnXesrnsaHqrL69aLK1Oj3ki51jjpjat07yWVHF1WkzgntwxxdXNS9ld3cDEddi+Ma6TvJa1cUWkzbAD/ew6zcs3xOXtcS/Arob2ydjLSze8RI4wc3ed5OWZ4nLdFvcSbNoh2ivKSz/sfzeYpJH/ieyvxp45Ltdb4V6ERVR7Rf1FxBW9UXIvwp4mmdfUZ9PTsbsh5RwpGhNkXrfovOQ8Ib+MIi9viXsZ1nxFXqkgr3RGsh9LcvLCvE8H54mUcF5NZzfB+xDxvi3qfQjv2ynR+9F4XegKu88hG4y+LxTVXuSNTuc+umWYYKKmV8e++QjWyatuaDBJD8euJv172jdtYJ6gs9ep7/TvtbpnpLTh1dWcIL8HWPYUM8zzBXZXR31X22K9701a8e9NpI36Pt8Pbqrn/p/vmWr+4PdMLZF7saf5dbwyMRVT6ftebnnFL5VKnhf98Vdkp3Xiwo+fN2I+DvxLvbYU+SZ0bvVbX8sF1xWK3IVl0mouKORUCsgr7ugwUIaFvJTWNb2FvJRWtc2FvBTWTXEhr2FHxriQ17BDY1zIa4hxeCGvGHNayGsI1V7Ia9Cx/uSFvBSo9kJeA8xnL+Q1rEhtR+Q1YAN5pbKGvFJBXulgP6ZDz/ugzV1jltDnieCIu8ZMIfPKcVeYLcfU+FrjrjBbqPftYJ27wowh+uuQu76sKRobDO0VY7qPLhxzV5c9xt87uIvLorY2MJy9lHTPSAwvjbbqe4BCDt2lo/jeJMCoNxn8nqkQHGIvEtrHhaBwIsitIa0kjlaLGxvFNuYWAAAAAAAAAAAAAAAAAAAAwF/hAqTxC56Kqy3NDxkzAAAAAElFTkSuQmCC"
              alt="company"
            />
            <div>
              <h4 className="font-semibold text-sm">Figma </h4>
              <p className="text-xs text-gray-400">5 days ago</p>
            </div>
          </div>

          <button className="text-sm px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200">
            Save
          </button>
        </div>

        {/* Role */}
        <div>
          <h2 className="text-xl font-bold">UX Designer </h2>
          <p className="text-sm text-gray-500">Frontend / React</p>
        </div>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          <span className="px-3 py-1 text-xs bg-gray-100 rounded-full">
            Full-Time 
          </span>
          <span className="px-3 py-1 text-xs bg-gray-100 rounded-full">
            In office
          </span>
        </div>

        <hr />

        {/* Footer */}
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">$200-250K</p>
            <p className="text-xs text-gray-500">Bangalore, India</p>
          </div>

          <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800">
            Apply
          </button>
        </div>

      </div>
      <div className="bg-white w-[320px] gap-5  rounded-2xl shadow-md p-4 space-y-4">

        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              className="h-12 w-12 rounded-full object-cover border"
              src="data:image/jpeg;base64,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"
              alt="company"
            />
            <div>
              <h4 className="font-semibold text-sm">Airbnb </h4>
              <p className="text-xs text-gray-400">5 days ago</p>
            </div>
          </div>

          <button className="text-sm px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200">
            Save
          </button>
        </div>

        {/* Role */}
        <div>
          <h2 className="text-xl font-bold">Junior UI/UX Designer</h2>
          <p className="text-sm text-gray-500">Frontend / React</p>
        </div>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          <span className="px-3 py-1 text-xs bg-gray-100 rounded-full">
            Contract 
          </span>
          <span className="px-3 py-1 text-xs bg-gray-100 rounded-full">
            Remote
          </span>
        </div>

        <hr />

        {/* Footer */}
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">$100k / hr</p>
            <p className="text-xs text-gray-500">Mumbai, India</p>
          </div>

          <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800">
            Apply
          </button>
        </div>

      </div>
      <div className="bg-white w-[320px] gap-5  rounded-2xl shadow-md p-4 space-y-4">

        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              className="h-12 w-12 rounded-full object-cover border"
              src="data:image/png;base64,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"
              alt="company"
            />
            <div>
              <h4 className="font-semibold text-sm">Apple</h4>
              <p className="text-xs text-gray-400">5 days ago</p>
            </div>
          </div>

          <button className="text-sm px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200">
            Save
          </button>
        </div>

        {/* Role */}
        <div>
          <h2 className="text-xl font-bold">Graphic Designer</h2>
          <p className="text-sm text-gray-500">Frontend / React</p>
        </div>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          <span className="px-3 py-1 text-xs bg-gray-100 rounded-full">
            Full-Time 
          </span>
          <span className="px-3 py-1 text-xs bg-gray-100 rounded-full">
            Flexible Schedule
          </span>
        </div>

        <hr />

        {/* Footer */}
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">$85-120K</p>
            <p className="text-xs text-gray-500">Kerala, India</p>
          </div>

          <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800">
            Apply
          </button>
        </div>

      </div>

    </div>
  );
};

export default Card;

