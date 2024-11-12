import { useSelector, useDispatch } from 'react-redux';
import { search, loading, error, result } from './gitsearchSlice';
import axios from 'axios';
import Languageslist from './languages';
import getrand from './repocard/getrand';
import RepoCard from './repocard/Repocard';

function Gitsearch() {
    const dispatch = useDispatch();
    const gitsearch = useSelector((state) => state.gitsearch);

    const getrepo = () => {
        dispatch(loading())
        let language = gitsearch.search;
        axios.get(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc`)
        .then(response => {
            let data = response.data
            let repolist = data.items
            let repo = getrand(repolist)
            dispatch(result(repo))
        })
        .catch( errormsg => {
            console.log(errormsg)
            dispatch(error())
        })
    }

    const handleChange = (e) => {
        let value = e.target.value;
        dispatch(search(value));
        getrepo();
    }

    return (
        <div className='p-2 min-h-fit dark:bg-theme-ash dark:text-theme-yellow col-span-1 h-[200px] rounded-lg text-center'>
            <div className=' font-bold text-lg  tracking-wide'> GitHub Repository Finder</div>
            <div className=''><Languageslist value={gitsearch.search} onChange={handleChange}/></div>
            <RepoCard onClick={getrepo} state={gitsearch.result.state} value={gitsearch.result.msg}/>
        </div>
    );
}

export default Gitsearch;