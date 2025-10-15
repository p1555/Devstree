import { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Link, createFileRoute } from "@tanstack/react-router";
import  {fetchPosts } from "../../Api/api.tsx";
import type {Post } from "../../Api/api.tsx";


export const Route = createFileRoute("/posts/")({
   component: PostsPage,
});

function PostsPage() {
  const [pageNumber, setPageNumber] = useState(0);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts", pageNumber],
    queryFn: () => fetchPosts(pageNumber),
    placeholderData: keepPreviousData,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error loading posts.</p>;

  return (
    <div>
      <h1 className="text-center mb-3 font-bold text-3xl">Posts</h1>

      <ul className="space-y-3">
        {data?.map((post: Post) => (
          <li key={post.id} className="border p-4 rounded-xl mb-2 hover:bg-gray-50">
            <Link to="/posts/$id" params={{ id: post.id.toString() }}>
              <h2 className="font-semibold text-lg">{post.title}</h2>
              <p className="text-gray-600">{post.body}...</p>
            </Link>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="flex gap-4 justify-center mt-6">
        <button
          disabled={pageNumber === 0}
          onClick={() => setPageNumber((prev) => prev - 3)}
          className="px-4 py-2 bg-gray-400 rounded cursor-pointer"
        >
          Prev
        </button>

        <p className="pt-2">Page {pageNumber / 3 + 1}</p>

        <button
          onClick={() => setPageNumber((prev) => prev + 3)}
          className="px-4 py-2 bg-gray-400 rounded cursor-pointer" 
        >
          Next
        </button>
      </div>
    </div>
  );
}
