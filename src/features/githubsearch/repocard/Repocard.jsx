import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle, faStar, faCodeFork, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faCircle, faStar, faCodeFork, faCircleExclamation);

function RepoCard(props) {
    const state = props.state
    const value = props.value

    if(state == "msg"){
        return (
            <div className='h-28 animate-pulse min-h-fit flex flex-col justify-center '>{value}</div>
        );
    }else if(state == "error"){
        return (
            <div className='h-28 min-h-fit flex flex-col justify-center items-center'>
                <div>
                    {value}
                </div>
                <button className='bg-red-800 w-1/2 rounded-lg md:rounded-none mt-5 md:hover:rounded-lg transit' onClick={props.onClick}>Click to retry</button>
            </div>
        );
    }else if(state == "result"){
        return (
            <div className='h-28 min-h-fit text-bold w-full flex flex-col justify-center items-center'>
                <a href={value.html_url} className='w-full' target='blank'>
                    <div className='font-bold text-lg'>{value.name}</div>
                    <div className='h-12 overflow-auto'>{value.description}</div>
                    <div className='flex flex-row justify-between'>
                        <span className='text-theme-yellow'><FontAwesomeIcon icon="fa-solid fa-circle" />{value.language}</span>
                        <span ><FontAwesomeIcon icon="fa-solid fa-star"  />{value.stargazers_count}</span>
                        <span><FontAwesomeIcon icon="fa-solid fa-code-fork" />{value.forks_count}</span>
                        <span><FontAwesomeIcon icon="fa-solid fa-circle-exclamation" />{value.open_issues_count}</span>
                    </div>
                </a>
                <button className='bg-black w-1/2 rounded-lg md:rounded-none active:scale-90 md:hover:rounded-lg duration-100' onClick={props.onClick}>Refresh</button>
            </div>
        );
    }
    return (
        <></>
    );
}

export default RepoCard;