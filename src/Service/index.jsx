export const upvote = (id) => {
    // Retrieve existing votes from localStorage or initialize a default object
    const votes = localStorage.getItem('votes')
        ? JSON.parse(localStorage.getItem('votes')) 
        : { upvotes: [], downvotes: [] };

    // Check if the idea has already been upvoted
    if (votes.upvotes.includes(id)) {
        return false;
    }

    // Add the upvote
    votes.upvotes.push(id);

    // Remove from downvotes if it was previously downvoted
    votes.downvotes = votes.downvotes.filter(item => item !== id);

    // Store the updated votes back to localStorage
    localStorage.setItem('votes', JSON.stringify(votes));

    return true;
}

export const downvote = (id) => {
    // Retrieve existing votes from localStorage or initialize a default object
    const votes = localStorage.getItem('votes')
        ? JSON.parse(localStorage.getItem('votes')) 
        : { upvotes: [], downvotes: [] };

    // Check if the idea has already been downvoted
    if (votes.downvotes.includes(id)) {
        return false;
    }

    // Add the downvote
    votes.downvotes.push(id);

    // Remove from upvotes if it was previously upvoted
    votes.upvotes = votes.upvotes.filter(item => item !== id);

    // Store the updated votes back to localStorage
    localStorage.setItem('votes', JSON.stringify(votes));

    return true;
}

export const checkIsAlreadyupVoted = (id) => {
    const votes = JSON.parse(localStorage.getItem('votes')) || { upvotes: [], downvotes: [] };

    // Check if the id exists in upvotes
    return votes.upvotes.includes(id);
}

export const checkIsAlreadydownVoted = (id) => {
    const votes = JSON.parse(localStorage.getItem('votes')) || { upvotes: [], downvotes: [] };

    // Check if the id exists in downvotes
    return votes.downvotes.includes(id);
}
