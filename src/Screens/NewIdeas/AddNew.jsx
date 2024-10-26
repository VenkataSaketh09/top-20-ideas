import React, { useState, useEffect } from 'react';
import Header from '../Home/components/Header';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Send, Info } from 'lucide-react';
import { db } from '../../../utils';
import { Ideas } from '../../../utils/schema';

function AddNew() { 
    const navigate = useNavigate();
    const [idea, setIdea] = useState('');
    const [username, setUsername] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [existingUser, setExistingUser] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('username')) {
            setUsername(localStorage.getItem('username'));
            setExistingUser(true);
        }
    }, []);

    const onSaveHandler = async () => {
        const result = await db.insert(Ideas)
            .values({
                content: idea,
                username: username,
            }).returning({ id: Ideas.id });

        if (result) {
            localStorage.setItem('username', username);
            setIdea('');
            setUsername('');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        }
    };

    return (
        <div className='flex flex-col items-center p-4'>
            <div className='w-full max-w-2xl mt-8'>
                <Header />
            </div>
            {showAlert && (
                <div role="alert" className="alert w-full max-w-md mt-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="stroke-info h-6 w-6 shrink-0">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Congratulations! Your New Idea Added Successfully.</span>
                </div>
            )}
            <button
                className="btn mt-3 w-full max-w-xs"
                onClick={() => navigate('/')}>
                <ChevronLeft /> Back
            </button>
            <h2 className='text-center font-bold text-3xl md:text-4xl mt-4'>Empowering your Startup Journey</h2>
            <div className='flex flex-col mt-7 gap-3 w-full max-w-lg'>
                <label>Your Idea *</label>
                <textarea
                    onChange={(e) => setIdea(e.target.value)}
                    className="textarea textarea-bordered w-full"
                    placeholder="Write your Idea"
                    value={idea}></textarea>
            </div>
            {!existingUser && (
                <div className='flex flex-col mt-7 gap-2 w-full max-w-lg'>
                    <label className='flex flex-col'>
                        Your UserName *
                        <span className='flex text-sm gap-2 items-center'>
                            <Info className="w-4 h-5" />
                            No Account Needed
                        </span>
                    </label>
                    <input
                        type="text"
                        placeholder="UserName"
                        onChange={(e) => setUsername(e.target.value)}
                        className="input input-bordered w-full"
                        value={username}
                    />
                </div>
            )}
            <button
                className="btn btn-primary w-full max-w-lg mt-5"
                disabled={!(idea && username)}
                onClick={onSaveHandler}>
                Send <Send className="w-4 h-4" />
            </button>
        </div>
    );
}

export default AddNew;
