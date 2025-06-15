import { useState } from 'react';
import { db, storage, auth } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Navbar2 from './Navbar2';

const BlogForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let imageURL = '';

        if (image) {
            const imageRef = ref(storage, `blogs/${Date.now()}-${image.name}`);
            await uploadBytes(imageRef, image);
            imageURL = await getDownloadURL(imageRef);
        }

        await addDoc(collection(db, 'blogs'), {
            title,
            content,
            imageURL,
            createdAt: serverTimestamp(),
            author: auth.currentUser?.email || 'Anonymous',
        });

        setTitle('');
        setContent('');
        setImage(null);
        alert('Blog posted successfully!');
    };

    return (
        <div>
            <div>
                <Navbar2></Navbar2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 pt-28 pb-10">
                <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-2 border" required />
                <textarea placeholder="Content" value={content} onChange={e => setContent(e.target.value)} className="w-full p-2 border h-32" required />
                <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">Post Blog</button>
            </form>
        </div>

    );
};

export default BlogForm;
