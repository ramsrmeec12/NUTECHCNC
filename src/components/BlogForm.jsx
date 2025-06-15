import { useState } from 'react';
import { db, auth } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import Navbar2 from './Navbar2';

const BlogForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        await addDoc(collection(db, 'blogs'), {
            title,
            content,
            createdAt: serverTimestamp(),
            author: auth.currentUser?.email || 'Anonymous',
        });

        setTitle('');
        setContent('');
        alert('Blog posted successfully!');
    };

    return (
        <div>
            <Navbar2 />
            <form onSubmit={handleSubmit} className="space-y-4 pt-28 pb-10">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className="w-full p-2 border"
                    required
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    className="w-full p-2 border h-32"
                    required
                />
                {/* Removed image upload input */}
                <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">
                    Post Blog
                </button>
            </form>
        </div>
    );
};

export default BlogForm;
