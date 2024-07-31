// Types
import { PaperClipIcon } from '@heroicons/react/outline';
import { Document } from '../types/entities';

type MaterialProps = {
    title: string;
    documents: Document[];
};

function Material(props: MaterialProps) {
    // Render
    return (
        <div id='material'>
            <div className='bold mt-16 mb-10 text-3xl text-gray-900'>{props.title}</div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {props.documents.map(d => (
                    <div className='bg-gray-200 px-8 py-6 flex'>
                        <PaperClipIcon className='h-6' />
                        <div className='flex-1 px-3'>
                            <h2 className='uppercase font-bold text-gray-900'>{d.title}</h2>
                            <a href={d.link} className='hover:underline'>
                                View document
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Material;
