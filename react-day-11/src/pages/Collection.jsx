import React, { useEffect, useState } from "react";
import axios from "axios";
import Cart from "../components/Cart";

const AllPost = () => {
  const [allPost, setAllPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let postData = async () => {
    try {
      let res = await axios("https://fakestoreapi.com/products");
      console.log(res.data);
      setAllPost(res.data);
      setLoading(false)
    } catch (err) {
      setError('something went wrong')
      setLoading(false)
    }
  };

  useEffect(function () {
    postData();
  }, []);

    // 🔥 Loading UI
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // 🔥 Error UI
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-xl">
        {error}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-3 px-4 py-4 pt-30">
      {allPost.map((item, idx) => {
        return (
          <Cart
            image={item.image}
            key={idx}
            title={item.title}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default AllPost;
