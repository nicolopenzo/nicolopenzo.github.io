// Components
import Certificates from './components/Certificates';
import Material from './components/Material';
import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';

// Types
import { Period, Document } from './types/entities';

const educationPeriods: Period[] = [
    {
        location: 'University of Padua',
        from: '2017',
        to: '2020',
        title: 'BSc in Information Engineering',
        desc: 'Relevant subjects: Calculus, General Physics, Data and Algorithms, Programming, Telecommunications, Electronics, Automatic Controls, Systems and Modeling, Data and Signal Analysis',
        link: 'https://en.didattica.unipd.it/off/2017/LT/IN/IN0513',
        link_name: 'Information Engineering at UniPD'
    },
    {
        location: 'University of Padua',
        from: '2020',
        to: '2022',
        title: 'MSc in Computer Engineering - AI & Robotics',
        desc: ' Machine/Deep Learning, Natural Languague Processing, Graph Analysis, Big Data Computing, Computer Vision, Operation Research, Intelligent Robotics and NeuroRobotics',
        link: 'https://en.didattica.unipd.it/off/2020/LM/IN/IN2547',
        link_name: 'Computer Engineering at UniPD'
    },
    {
        location: 'Fondazione Bruno Kessler and University of Trento',
        from: 'September 2022',
        to: 'Ongoing',
        title: 'PhD Student',
        desc: 'ELLIS PhD Student at DH, LanD and MobS unities at Fondazione Bruno Kessler (Trento). My research topic is about the study of hate speech and counternarratives from both the NLP and Social Network Analysis. Get in touch if you are interested!',
        link: 'https://dh.fbk.eu/',        
	link_name: 'DH group',
	link1: 'https://land.fbk.eu/',
	link1_name: 'LanD group',
	link2: 'https://mobs-fbk.github.io/index.html',
	link2_name: 'MobS group',
	link3: 'https://ellis.eu/phd-postdoc',
	link3_name: 'ELLIS PhD and Postdoc program'
	}
];

const experiencePeriods: Period[] = [
    {
        location: 'University of Padua',
        from: 'September 2021',
        to: 'July 2022',
        title: 'Teaching Assistant',
        desc: 'Assistant at the courses of Laboratory Programming, Artificial Intelligence (BSc in Computer Engineering) and Big Data Computing (MSc in Computer Engineering) at the University of Padua.',
        link: 'https://www.dei.unipd.it',
        link_name: 'DEI UniPD'
    },
    {
        location: 'University of Padua',
        from: 'February 2022',
        to: 'June 2022',
        title: 'Research Training',
        desc: 'In this period I am trying to applying techniques from NLP, Deep/Machine Learning and Graph Analysis, to predict social phenomena in Social Media Platforms. Doing it in the context of my Master Thesis Supervisors: prof. Giorgio Satta, prof. Fabio Vandin',
        link: 'https://www.dei.unipd.it',
        link_name: 'DEI UniPD'
    },
    {
        location: 'Bocconi University',
        from: 'June 2022',
        to: 'August 2022',
        title: 'Research Intern',
        desc: 'Internship period at MilaNLP group at Bocconi University, around hate speech detection and more general NLP works.',
        link: 'https://milanlproc.github.io',
        link_name: 'MilaNLP'
    },
    {
        location: 'University of Trento',
        from: 'March 2023',
        to: 'June 2024',
        title: 'Teaching Assistant',
        desc: 'Assistant at the courses of Applied Natural Language Processing (with prof. Jacopo Staiano, MSc in Artificial Intelligent Systems and MSc in Computer Science).',
        link: 'httpsç//webapps.unitn.it/du/it/Persona/PER0247066/Didattica',
        link_name: 'UniTN page'
    }
];

const documents: Document[] = [
    {
        title: 'English B2 - Speaking',
        link: 'https://bestr.it/award/show/0Vh97IK2RZqOdh6lRSIznA?ln=en'
    },
    {
        title: 'English B2 - Reading and Speaking ',
        link: 'https://bestr.it/award/show/58b9b572b82092421751b27cc33a470b10c7d6bd?ln=en'
    },
    {
        title: 'Bachelor’s Degree in Information Engineering',
        link: 'https://bestr.it/award/show/waINyri5SAu-1dEJ03cjaQ?ln=en'
    },
    {
        title: 'Formative Tutoring - Student Tutor',
        link: 'https://bestr.it/award/show/03FK2qkWTvm-snv552FgNw?ln=e'
    }
];

const material: Document[] = [
    {
        title: 'Poster for ELLIS Doctoral Symposium 2023',
        link: process.env.PUBLIC_URL + '/edsposter_2023.pdf'
    }
];

function App() {
    return (
        <div className='min-h-full px-2 md:px-12 py-8 text-gray-600'>
            <Header />
            <main className='max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
                <Hero />
                <Timeline id='education' title='Education' periods={educationPeriods} />
                <Timeline id='experience' title='Experience' periods={experiencePeriods} />
                <Certificates title='Certificates' documents={documents} />
		<Material title='Material' documents={material} />
            </main>
        </div>
    );
}

export default App;
