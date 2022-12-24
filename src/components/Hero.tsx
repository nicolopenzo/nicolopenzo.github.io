// Assets
import { DownloadIcon } from '@heroicons/react/outline';

function Hero() {
    // Methods
    const openTwitter = () =>
        window.open('https://twitter.com/penzo_nicolo', '_blank', 'noopener,noreferrer');

    const openLinkedin = () =>
        window.open(
            'https://www.linkedin.com/in/nicol%C3%B2-penzo-49bab5206',
            '_blank',
            'noopener,noreferrer'
        );

    // Render
    return (
        <div id='info'>
            <div className='bold my-16 text-5xl text-gray-900 relative'>
                <div className='absolute lg:-translate-x-24 hidden xl:block'>
                    <img
                        src={require('../assets/twitter.png')}
                        alt='twitter-icon'
                        className='w-6 h-6 cursor-pointer mb-3 mt-2'
                        onClick={openTwitter}
                    />
                    <img
                        src={require('../assets/linkedin.png')}
                        alt='linkedin-icon'
                        className='w-6 h-6 cursor-pointer'
                        onClick={openLinkedin}
                    />
                </div>
                <h1 className='mb-3'>Salve! I am Nicolò,</h1>
                <h1 className='mb-3'>ELLIS PhD Student, AI and NLP enthusiast</h1>
            </div>
            <div className='flex flex-col lg:flex-row space-y-12 lg:space-y-0'>
                <div className='w-full lg:w-2/5'>
                    {/* <div className='bg-gray-400 w-full h-96' /> */}
                    <img
                        src={require('../assets/profileImage2.jpg')}
                        alt='profile-image'
                        className='h-auto w-full cursor-pointer'
                    />
                </div>
                <div className='w-full lg:w-4/5 lg:px-10'>
                    <h2 className='text-2xl font-semibold mb-3 text-gray-900'>Biography</h2>
                    <p className='mb-3'>
                        Hi! I am an ELLIS PhD Student at DH, LanD and MobS unities at Fondazione Bruno 				Kessler (Trento, Italy), working on Natural Language Processing. I am interested 				in toxic phenomena on Social Networks, and possible combinations of NLP solutions 				with Network/Complex Systems analysis tools (for Social Media). More in general, 				I am trying to give my contribution in the Computational Social Science field.
		    </p>
		    <p>
			If you are interested in Hate Speech, Counter Narratives and modeling of Social 			Conversation, get in touch!
                    </p>
                </div>
                <div className='w-full lg:w-1/5'>
                    <h2 className='text-2xl font-semibold mb-3 text-gray-900'>Informations</h2>
                    <div className='flex mb-2'>
                        <p className='font-bold mr-2 text-gray-900'>Name:</p>
                        <p>Nicolò Penzo</p>
                    </div>
                    <div className='flex mb-2'>
                        <p className='font-bold mr-2 text-gray-900'>Birth:</p>
                        <p>29/10/1998</p>
                    </div>
                    <div className='flex mb-2'>
                        <p className='font-bold mr-2 text-gray-900'>Email:</p>
                        <p>npenzo@fbk.eu</p>
                    </div>
                    <div className='flex mb-2'>
                        <p className='font-bold mr-2 text-gray-900'>Phone:</p>
                        <p>(+39) 348 0011480</p>
                    </div>
                    <div className='flex mb-2'>
                        <p className='font-bold mr-2 text-gray-900'>Address:</p>
                        <p>Isola Vicentina(VI), Italy</p>
                    </div>
                    <div className='flex xl:hidden mt-4'>
                        <img
                            src={require('../assets/twitter.png')}
                            alt='twitter'
                            className='w-6 h-6 cursor-pointer mr-2'
                            onClick={openTwitter}
                        />
                        <img
                            src={require('../assets/linkedin.png')}
                            alt='linkedin'
                            className='w-6 h-6 cursor-pointer'
                            onClick={openLinkedin}
                        />
                    </div>
                    <div className='flex'>
                        <div className='flex items-center mt-12 cursor-pointer bg-gray-200 px-3 py-2 rounded hover:bg-white transition-all'>
                            <DownloadIcon className='text-gray-900 h-6' />
                            <a
                                className='ml-3 italic underline'
                                href={process.env.PUBLIC_URL + '/cv.pdf'}>
                                Download resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
