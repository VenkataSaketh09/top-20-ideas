import React from 'react';
import { db } from './../../../../utils/index';
import { Ideas } from '../../../../utils/schema';
import { eq } from 'drizzle-orm';
import { checkIsAlreadydownVoted, checkIsAlreadyupVoted, upvote, downvote } from '../../../Service';

function IdeaItem({ idea, index, refreshData }) {
  // Check if `idea` exists before accessing its properties
  if (!idea) {
    return null; // Optionally, you can return a loader or placeholder here if `idea` is loading
  }

  const formattedDate = new Date(idea.created_at).toLocaleString();

  const upVotehandler = async () => {
    if (idea && upvote(idea.id)) {
      const result = await db.update(Ideas)
        .set({
          vote: idea.vote + 1,
        })
        .where(eq(Ideas.id, idea.id))
        .returning({ id: Ideas.id });

      if (result) {
        refreshData();
      }
    }
  };

  const downVotehandler = async () => {
    if (idea && downvote(idea.id)) {
      const result = await db.update(Ideas)
        .set({
          vote: idea.vote - 1,
        })
        .where(eq(Ideas.id, idea.id))
        .returning({ id: Ideas.id });

      if (result) {
        refreshData();
      }
    }
  };

  return (
    <div className='my-5 border shadow-lg rounded-lg p-5'>
      <div className=''>
        <h2 className='flex gap-2'><span>{index + 1}. </span>{idea?.content}</h2>
        <div className='flex flex-row items-center'>
          <h2
            className={`text-lg hover:bg-slate-600 rounded-md p-1 cursor-pointer ${checkIsAlreadyupVoted(idea?.id) && 'bg-gray-400'}`}
            onClick={() => upVotehandler()}
          >🔥</h2>
          <h2 className='text-lg hover:bg-slate-600 rounded-md p-1 font-bold'>{idea?.vote}</h2>
          <h2
            className={`text-lg hover:bg-slate-600 rounded-md p-1 cursor-pointer ${checkIsAlreadydownVoted(idea?.id) && 'bg-gray-400'}`}
            onClick={() => downVotehandler()}>👎</h2>
        </div>
      </div>
      <h2 className='mt-3 text-gray-400 text-sm flex gap-2'>
        <span></span>
        By @ {idea?.username} posted on {formattedDate}
      </h2>
    </div>
  );
}

export default IdeaItem;
