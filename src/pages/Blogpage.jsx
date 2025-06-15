import { useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db, auth } from '../firebase';
import { collection, orderBy, query, deleteDoc, doc } from 'firebase/firestore';
import BlogForm from '../components/BlogForm';
import Navbar2 from '../components/Navbar2';

const BlogPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogsSnapshot] = useCollection(
    query(collection(db, 'blogs'), orderBy('createdAt', 'desc'))
  );

  const deleteBlog = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, 'blogs', id));
        alert("Blog deleted successfully.");
        setSelectedBlog(null);
      } catch (error) {
        console.error("Error deleting blog:", error);
        alert("Failed to delete blog.");
      }
    }
  };

  return (
    <div>
      <div>
        <Navbar2 />
      </div>

      <div className="px-6 py-10 pt-28">
        <h2 className="text-3xl font-bold mb-6 text-center">📝 Blog Posts</h2>

        {auth.currentUser && (
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-2">Write a Blog</h3>
            <BlogForm />
          </div>
        )}

        {/* Blog List */}
        <div className="grid md:grid-cols-2 gap-6">
          {blogsSnapshot?.docs.map(doc => {
            const blog = doc.data();
            const blogId = doc.id;

            return (
              <div
                key={blogId}
                onClick={() => setSelectedBlog({ ...blog, id: blogId })}
                className="p-4 bg-white shadow rounded cursor-pointer hover:shadow-lg transition relative"
              >
                <h4 className="text-xl font-semibold">{blog.title}</h4>
                <p className="text-gray-600 line-clamp-2">{blog.content}</p>
                {blog.imageURL && (
                  <img
                    src={blog.imageURL}
                    alt="Blog"
                    className="h-40 w-full object-cover mt-2 rounded"
                  />
                )}

                {/* Show delete button only if current user is the author */}
                {auth.currentUser?.email === blog.author && (
                  <button
                    className="absolute top-2 right-2 text-red-600 bg-white border border-red-600 px-2 py-1 rounded hover:bg-red-600 hover:text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteBlog(blogId);
                    }}
                  >
                    🗑 Delete
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Blog Modal */}
        {selectedBlog && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
            onClick={() => setSelectedBlog(null)}
          >
            <div
              className="bg-white p-6 max-w-xl rounded shadow-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-3 text-2xl"
                onClick={() => setSelectedBlog(null)}
              >
                ×
              </button>

              {/* Optional delete in modal */}
              {auth.currentUser?.email === selectedBlog.author && (
                <button
                  className="absolute top-2 left-3 text-red-600 text-sm px-3 py-1 border border-red-600 rounded hover:bg-red-600 hover:text-white"
                  onClick={() => deleteBlog(selectedBlog.id)}
                >
                  🗑 Delete
                </button>
              )}

              <h3 className="text-2xl font-bold mb-2">{selectedBlog.title}</h3>
              <p className="text-gray-700 mb-4">{selectedBlog.content}</p>
              {selectedBlog.imageURL && (
                <img src={selectedBlog.imageURL} alt="Blog" className="rounded" />
              )}
              <div className="text-sm text-gray-500 mt-4">By: {selectedBlog.author}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
