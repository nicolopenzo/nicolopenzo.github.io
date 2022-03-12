import { LinkIcon } from '@heroicons/react/outline';
import { Period } from '../types/entities';

type TimelineProps = {
    id: string;
    title: string;
    periods: Period[];
};

function Timeline(props: TimelineProps) {
    // Render
    return (
        <div id={props.id}>
            <div className='bold mt-16 mb-10 text-3xl text-gray-900'>{props.title}</div>
            {props.periods.map(p => (
                <div className='flex justify-center'>
                    <div className='w-1/5 md:flex flex-col pr-5 hidden'>
                        <h2 className='font-bold uppercase text-gray-900 pb-3'>{p.location}</h2>
                        <p className='text-sm italic'>
                            {p.from} - {p.to}
                        </p>
                    </div>
                    <div className='relative'>
                        <div className='w-4 h-4 rounded-full bg-gray-700' />
                        <div className='h-full w-0.5 bg-gray-700 absolute top-0 left-2' />
                    </div>
                    <div className='flex-1 pl-4 md:pl-12 lg:pl-16'>
                        <h2 className='font-bold uppercase text-gray-900 pb-1 md:hidden'>
                            {p.location}
                        </h2>
                        <p className='text-sm pb-3 italic md:hidden'>
                            {p.from} - {p.to}
                        </p>
                        <h2 className='font-bold uppercase text-gray-900 pb-3'>{p.title}</h2>
                        <p className='pb-3'>{p.desc}</p>
                        <div className='flex pb-8 items-center'>
                            <LinkIcon className='h-4 text-gray-700' />
                            <a href='#' className='underline italic ml-3'>
                                http://www.google.it
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Timeline;
