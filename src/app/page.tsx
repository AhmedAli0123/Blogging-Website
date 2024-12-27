"use client";
import { useRouter } from "next/navigation";
import React from "react";
import PopularBlogs from "@/components/PopularBlogs";
import { Button } from "@/components/ui/button";


function Page() {

 


  const router = useRouter();
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white dark:bg-black py-20 ">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Welcome to the Ahmed Blog
          </h2>
          <p className="text-lg mb-6">
            Discover the latest articles and insights on programming,
            technology, and more.
          </p>
          <Button
            onClick={() => router.push("/blog")}
            className=" px-6 py-2 rounded-md text-lg font-semibold shadow transform transition-transform duration-300 hover:scale-105"
          >
            Explore Blogs
          </Button>
        </div>
      </section>

      {/* Popular Blogs Section */}
      <PopularBlogs />
    </div>
  );
}

export default Page;
