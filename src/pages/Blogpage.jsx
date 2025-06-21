import { useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db, auth } from '../firebase';
import { collection, orderBy, query, deleteDoc, doc } from 'firebase/firestore';
import BlogForm from '../components/BlogForm';
import Navbar2 from '../components/Navbar2';

// ✅ Date formatter function
const formatDate = (timestamp) => {
  if (!timestamp?.toDate) return '';
  const date = timestamp.toDate();
  return date.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

const BlogPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogsSnapshot] = useCollection(
    query(collection(db, 'blogs'), orderBy('createdAt', 'desc'))
  );

  const deleteBlog = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this blog?');
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, 'blogs', id));
        alert('Blog deleted successfully.');
        setSelectedBlog(null);
      } catch (error) {
        console.error('Error deleting blog:', error);
        alert('Failed to delete blog.');
      }
    }
  };

  return (
    <div>
      <Navbar2 />

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
          {blogsSnapshot?.docs.map((doc) => {
            const blog = doc.data();
            const blogId = doc.id;

            return (
              <div
                key={blogId}
                onClick={() => setSelectedBlog({ ...blog, id: blogId })}
                className="p-4 bg-white shadow rounded cursor-pointer hover:shadow-lg transition relative"
              >
        
                <h4 className="text-xl font-semibold mb-1">{blog.title}</h4>
                <p className="text-sm text-gray-500 mb-1">{formatDate(blog.createdAt)}</p>
                <p className="text-gray-600 line-clamp-2">{blog.content}</p>

                {/* Delete button */}
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
                className="absolute top-3 right-3 text-2xl"
                onClick={() => setSelectedBlog(null)}
              >
                ×
              </button>

              {/* Delete inside modal */}
              {auth.currentUser?.email === selectedBlog.author && (
                <button
                  className="absolute  top-4 right-10 text-red-600 text-sm px-3 py-1 border border-red-600 rounded hover:bg-red-600 hover:text-white"
                  onClick={() => deleteBlog(selectedBlog.id)}
                >
                  🗑 Delete
                </button>
              )}

              <h3 className="text-2xl font-bold mb-2">{selectedBlog.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{formatDate(selectedBlog.createdAt)}</p>
              <p className="text-gray-700 mb-4">{selectedBlog.content}</p>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
