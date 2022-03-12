// Components
import Certificates from './components/Certificates';
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
        link: 'https://en.didattica.unipd.it/off/2017/LT/IN/IN0513'
    },
    {
        location: 'University of Padua',
        from: '2020',
        to: '2022',
        title: 'MSc in Computer Engineering - AI & Robotics',
        desc: ' Machine/Deep Learning, Natural Languague Processing, Graph Analysis, Big Data Computing, Computer Vision, Operation Research, Intelligent Robotics and NeuroRobotics',
        link: 'https://en.didattica.unipd.it/off/2020/LM/IN/IN2547'
    }
];

const experiencePeriods: Period[] = [
    {
        location: 'University of Padua',
        from: 'September 2021',
        to: 'July 2022',
        title: 'Teaching Assistant',
        desc: 'Assistant at the courses pf Laboratory Programming, Artificial Intelligence (BSc in Computer Engineering) and Big Data Computing (MSc in Computer Engineering) at the University of Padua.'
    },
    {
        location: 'University of Padua',
        from: 'February 2022',
        to: 'June 2022',
        title: 'Research Training',
        desc: 'In this period I am trying to applying techniques from NLP, Deep/Machine Learning and Graph Analysis, to predict social phenomena in Social Media Platforms. Doing it in the context of my Master Thesis Supervisors: prof. Giorgio Satta, prof. Fabio Vandin'
    },
    {
        location: 'Bocconi University',
        from: 'June 2022',
        to: 'August 2022',
        title: 'Research Intern',
        desc: 'Internship period at MilaNLP group at Bocconi University, around hate speech detection and more general NLP works.'
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

function App() {
    return (
        <div className='min-h-full px-2 md:px-12 py-8 text-gray-600'>
            <Header />
            <main className='max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
                <Hero />
                <Timeline id='education' title='Education' periods={educationPeriods} />
                <Timeline id='experience' title='Experience' periods={experiencePeriods} />
                <Certificates title='Certificates' documents={documents} />
            </main>
        </div>
    );
}

export default App;
