
import type { Comment } from '@/Api/api.tsx';

type CommentsProps = {
  comments?: Array<Comment>;
};

export function Comments({ comments }: CommentsProps) {
  if (!comments || comments.length === 0) {
    return <p>No comments found.</p>;
  }

  return (
     <ul className="space-y-3">
      {comments.map((comment) => (
        <li key={comment.id} className="border p-3 rounded-xl">
          <p className="font-semibold">{comment.name}</p>
          <p className="text-sm text-gray-500">{comment.email}</p>
          <p>{comment.body}</p>
        </li>
      ))}
     </ul>
  );
}
