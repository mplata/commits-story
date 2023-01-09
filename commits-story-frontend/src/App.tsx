import { useEffect, useState } from 'react';
import './App.css'
import { CommitInfo, Repo } from './types/types';
import { getCommits } from './services/commits';
import CommitDisplay from './components/commit/Commit';
import { getRepos } from './services/repos';
import ReposContainer from './components/repos/ReposContainer';
import LoadingContainer from './components/loading/Loading';

function App() {

  const [commits, setCommits] = useState<CommitInfo[]>([]);
  const [ repos, setRepos ] = useState<Repo[]>([]);
  const [ loading, setLoading ] = useState(false);
  
  const loadCommits = async (repo: string) => {
    setLoading(true);
    const commitsResp: CommitInfo[] = await getCommits(repo);
    setCommits(commitsResp);
    setLoading(false);
  };

  const loadRepos = async () => {
    const reposResp: Repo[] = await getRepos();
    setRepos(reposResp)
  };

  const onChangeRepo = (e: React.ChangeEvent<HTMLInputElement>):void => {
    const repo = e.target.value;
    loadCommits(repo);
  };

  useEffect(() => {
    loadRepos();
    loadCommits(import.meta.env.VITE_INITIAL_REPO);
  }, []);
  const commitsDisplays = commits.map(commit => {
    return <CommitDisplay key={commit.sha} commit={commit}/>;
  });
  return (
    <div className="App">
      <header>
        <h1>Select from your public repositories to see your commits</h1>
      </header>
      <ReposContainer repos={repos} onChangeRepo={onChangeRepo}/>
      <div>
        {
          loading? <LoadingContainer/> : commitsDisplays
        }
      </div>
      <footer className='flex flex-col justify-center	items-center'>
        Powered by <img className='w-24' src='github.png'/>
      </footer>
    </div>
  )
}

export default App
