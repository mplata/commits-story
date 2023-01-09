import { CommitInfo } from '../../types/types'
import './Commit.css';

function CommitDisplay(props: {commit: CommitInfo } ) {
  const { commit } = props;
  const { author } = commit;
  const { author: commitAuthor } = commit.commit;
  return (
    <div className="w-100 shadow-lg m-4 rounded p-2 flex flex-row">
      <div className='m-4'>
        <a href={author.html_url}>
          <img className="w-12 rounded-full border border-gray-100 shadow-l"
          src={author.avatar_url} alt={author.login} />
        </a>
      </div>
      <div className='flex flex-col w-full'>
        <div className='flex justify-between flex-row'>
          <div>
            <a href={commit.url}>
            {commit.commit.message}
            </a>
          </div>
          <div>
            <span className='text-xs text-slate-900'>
              Commited by {commitAuthor.name} on: {commitAuthor.date}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommitDisplay;
